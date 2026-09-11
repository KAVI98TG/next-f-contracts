import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const root=process.cwd();
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const write=(rel,obj)=>{const p=path.join(root,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(obj,null,2)+'\n');};
const exists=(rel)=>fs.existsSync(path.join(root,rel));
const sha=(buf)=>crypto.createHash('sha256').update(buf).digest('hex');
const semver=(v)=>String(v).split('.').map(Number);const cmp=(a,b)=>{const A=semver(a),B=semver(b);for(let i=0;i<3;i++){if(A[i]!==B[i])return A[i]-B[i];}return 0;};
const uniq=(rows)=>[...new Set(rows.filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b),undefined,{numeric:true}));

const releaseDir=path.join(root,'registry/changelog/releases');
const releaseFiles=fs.readdirSync(releaseDir).filter(x=>/^\d+\.\d+\.\d+\.json$/.test(x)).sort((a,b)=>cmp(a.replace('.json',''),b.replace('.json','')));
const registry=read('registry/registry.json');
const registryById=new Map(registry.items.map(x=>[x.id,x]));
const diffImpacts=new Set(read('registry/diff/impact-levels.json').levels.map(x=>x.id));
const categories=new Set(read('registry/changelog/sections.json').categories.map(x=>x.id));

function moduleOwnership(){
  const map=new Map();
  const add=(target,moduleId)=>{if(!target||!moduleId)return;const id=moduleId.startsWith('modules.')?moduleId:`modules.${moduleId}`;if(!registryById.has(id))return;const set=map.get(target)??new Set();set.add(id);map.set(target,set);};
  for(const item of registry.items){
    if(item.domain!=='modules'||!item.source||!exists(item.source))continue;
    let source;try{source=read(item.source);}catch{continue;}
    const moduleId=source.moduleId?`modules.${source.moduleId}`:(item.id.startsWith('modules.')&&!item.id.startsWith('modules.capability.')?item.id:null);
    if(item.id.startsWith('modules.capability.')&&source.moduleId)add(item.id,`modules.${source.moduleId}`);
    if(moduleId)add(item.id,moduleId);
    for(const key of ['contractBindings','permissionBindings','eventBindings'])for(const target of source[key]??[])add(target,moduleId);
  }
  return map;
}
const moduleMap=moduleOwnership();

function normalizedImpact(entry){
  const c=entry.category;
  const compat=diffImpacts.has(entry.compatibilityImpact)?entry.compatibilityImpact:null;
  let breaking=null;
  if(c==='breaking'||compat==='breaking')breaking=true;
  else if(['non-breaking','metadata','documentation','none'].includes(compat)||['documentation','internal','preserved','integrity'].includes(c))breaking=false;
  let migration=null;
  if(c==='migration')migration=true;
  else if(['non-breaking','metadata','documentation','none'].includes(compat)||['documentation','internal','preserved','integrity'].includes(c))migration=false;
  return {
    compatibilityClassification:compat,
    breakingChange:breaking,
    migrationRequired:migration,
    customerSiteActionRequired:null,
    adminActionRequired:null,
    apiActionRequired:null,
    cmsActionRequired:null,
    securityRelevance:c==='security'
  };
}

function affectedFor(ids){
  const resolved=ids.map(id=>registryById.get(id)).filter(Boolean);
  const modules=[];for(const id of ids)for(const mod of moduleMap.get(id)??[])modules.push(mod);
  const byDomain=(domain)=>resolved.filter(x=>x.domain===domain).map(x=>x.id);
  return {
    domains:uniq(resolved.map(x=>x.domain)),
    modules:uniq(modules),
    contracts:uniq(ids),
    events:uniq(byDomain('events')),
    permissions:uniq(byDomain('permissions')),
    webhooks:uniq(byDomain('webhooks')),
    apis:uniq(byDomain('api')),
    manifests:uniq(byDomain('manifests')),
    cmsMetadata:uniq(byDomain('cms-ui')),
    adminMetadata:uniq(byDomain('admin-ui'))
  };
}

let releases=releaseFiles.map(file=>read(`registry/changelog/releases/${file}`));
if(!releases.some(x=>x.version===version))throw new Error(`Current release ${version} is missing from registry/changelog/releases`);
const ordered=[...releases].sort((a,b)=>cmp(a.version,b.version));
for(let i=0;i<ordered.length;i++){
  const r=ordered[i];
  const sourceRel=`registry/changelog/releases/${r.version}.json`;
  r.sourceVersion=i===0?null:ordered[i-1].version;
  r.targetVersion=r.version;
  const exact=Boolean(r.provenance?.exactRegistrySnapshotAvailable);
  r.recordCompleteness=exact?'complete':'incomplete';
  r.incompletenessReason=exact?null:'Exact Registry snapshot is unavailable; narrative release notes remain authoritative only for the recorded release-note text.';
  const allIds=[];
  for(const s of r.sections??[]){
    if(!categories.has(s.category))throw new Error(`Unknown Changelog category ${s.category} in ${r.version}`);
    for(const e of s.entries??[]){
      const ids=uniq(e.affectedRegistryIds??[]);allIds.push(...ids);
      const impact=normalizedImpact(e);
      e.title=e.title??e.summary;
      e.description=e.description??e.summary;
      e.changeType=e.changeType??e.category;
      e.affectedRegistryIds=ids;
      e.affectedDomains=affectedFor(ids).domains;
      e.affectedModules=affectedFor(ids).modules;
      e.impact=e.impact??impact;
      // Refresh deterministic derived values but preserve any future explicit non-null values.
      for(const [key,val] of Object.entries(impact))if(e.impact[key]===undefined)e.impact[key]=val;
      e.relatedDiffEvidence=e.relatedDiffEvidence??null;
      e.relatedMigrationGuide=e.relatedMigrationGuide??null;
      e.relatedDeprecationRecord=e.relatedDeprecationRecord??null;
      e.sourceReference=e.sourceReference??r.provenance?.sourceReference??sourceRel;
      e.sourceCommitReference=e.sourceCommitReference??null;
      if(e.compatibilityImpact===undefined)e.compatibilityImpact=e.impact.compatibilityClassification;
    }
  }
  const normalizedEntries=(r.sections??[]).flatMap(s=>s.entries??[]);
  r.entryCount=normalizedEntries.length;
  r.categoryCounts=Object.fromEntries((r.sections??[]).filter(s=>(s.entries??[]).length).map(s=>[s.category,(s.entries??[]).length]));
  r.affected=affectedFor(uniq(allIds));
  const impacts=normalizedEntries.map(e=>e.impact??normalizedImpact(e));
  r.breakingChange=impacts.some(x=>x.breakingChange===true)?true:(impacts.length&&impacts.every(x=>x.breakingChange===false)?false:null);
  r.migrationRequired=impacts.some(x=>x.migrationRequired===true)?true:(impacts.length&&impacts.every(x=>x.migrationRequired===false)?false:null);
  r.migrationNotes=r.migrationNotes??null;
  r.recommendedAction=r.recommendedAction??null;
  write(sourceRel,r);
}
releases=releaseFiles.map(file=>read(`registry/changelog/releases/${file}`));
const entries=releases.flatMap(r=>(r.sections??[]).flatMap(s=>(s.entries??[])));

// Compact contract history derived only from authoritative Registry introducedIn metadata and explicit affected IDs.
const historyItems={};
for(const item of registry.items){
  historyItems[item.id]={
    registryId:item.id,
    introducedIn:item.introducedIn??null,
    changedIn:[],
    deprecatedIn:[],
    removedIn:[],
    latestRelatedRelease:item.introducedIn??null,
    entries:[]
  };
}
for(const e of entries){
  for(const id of e.affectedRegistryIds??[]){
    const h=historyItems[id];if(!h)continue;
    h.entries.push({entryId:e.entryId,releaseVersion:e.releaseVersion,category:e.category,title:e.title});
    if(e.releaseVersion!==h.introducedIn)h.changedIn.push(e.releaseVersion);
    if(e.category==='deprecated')h.deprecatedIn.push(e.releaseVersion);
    if(e.category==='removed')h.removedIn.push(e.releaseVersion);
    if(!h.latestRelatedRelease||cmp(e.releaseVersion,h.latestRelatedRelease)>0)h.latestRelatedRelease=e.releaseVersion;
  }
}
for(const h of Object.values(historyItems)){
  h.changedIn=uniq(h.changedIn);h.deprecatedIn=uniq(h.deprecatedIn);h.removedIn=uniq(h.removedIn);
  h.entries.sort((a,b)=>cmp(b.releaseVersion,a.releaseVersion)||a.entryId.localeCompare(b.entryId));
}
write('registry/changelog/contract-history.json',{registryVersion:version,schemaVersion:'1.0.0',title:'NEXT F Contract Changelog History',description:'Derived navigation index from authoritative Registry introducedIn metadata and explicit Changelog affected Registry IDs. It does not reconstruct missing history.',items:historyItems});

const releaseRows=[...releases].sort((a,b)=>cmp(b.version,a.version)).map(n=>({
  version:n.version,phase:n.phase,title:n.title,releaseStatus:n.releaseStatus,releaseDate:n.releaseDate??null,summary:n.summary,sourceVersion:n.sourceVersion??null,targetVersion:n.targetVersion??n.version,recordCompleteness:n.recordCompleteness,incompletenessReason:n.incompletenessReason??null,entryCount:n.entryCount,categoryCounts:n.categoryCounts,evidenceLevel:n.evidence?.evidenceLevel,exactRegistrySnapshotAvailable:Boolean(n.provenance?.exactRegistrySnapshotAvailable),supportLevel:n.support?.supportLevel??null,compatibilityStatus:n.support?.compatibilityStatus??null,breakingChange:n.breakingChange??null,migrationRequired:n.migrationRequired??null,affected:n.affected,source:`registry/changelog/releases/${n.version}.json`
}));
const releaseIndex={registryVersion:version,schemaVersion:'1.1.0',title:'NEXT F Changelog Release Index',description:'All authoritative coordinated release notes in descending semantic-version order.',currentVersion:version,releaseCount:releases.length,entryCount:entries.length,phases:uniq(releases.map(r=>String(r.phase))).map(Number).sort((a,b)=>a-b),domains:uniq(releases.flatMap(r=>r.affected?.domains??[])),modules:uniq(releases.flatMap(r=>r.affected?.modules??[])),releases:releaseRows};
write('registry/changelog/release-index.json',releaseIndex);
write('registry/changelog/entry-index.json',{registryVersion:version,schemaVersion:'1.1.0',title:'Changelog Entry Index',entryCount:entries.length,domains:uniq(entries.flatMap(e=>e.affectedDomains??[])),modules:uniq(entries.flatMap(e=>e.affectedModules??[])),entries});
const idx=read('registry/changelog/index.json');Object.assign(idx,{registryVersion:version,currentVersion:version,releaseCount:releases.length,entryCount:entries.length,schemaCount:fs.readdirSync(path.join(root,'registry/changelog/definitions')).filter(x=>x.endsWith('.json')).length});idx.sources={...(idx.sources??{}),releaseIndex:'registry/changelog/release-index.json',entryIndex:'registry/changelog/entry-index.json',contractHistory:'registry/changelog/contract-history.json',sections:'registry/changelog/sections.json',evidenceLevels:'registry/changelog/evidence-levels.json',policy:'registry/changelog/policy.json',releaseSchema:'registry/changelog/release.schema.json',changeEntrySchema:'registry/changelog/change-entry.schema.json',impactSchema:'registry/changelog/impact.schema.json',legacyReleaseSchema:'registry/changelog/changelog-release-note.schema.json',releaseDirectory:'registry/changelog/releases/'};write('registry/changelog/index.json',idx);
const policy=read('registry/changelog/policy.json');policy.registryVersion=version;policy.currentRelease=version;policy.unknownBooleanRepresentation='null';policy.emptyArrayMeaning='known-empty';policy.omittedHistoricalEvidence='not-authoritative';write('registry/changelog/policy.json',policy);
for(const rel of ['registry/changelog/sections.json','registry/changelog/evidence-levels.json']){const d=read(rel);d.registryVersion=version;write(rel,d);}
for(const file of fs.readdirSync(path.join(root,'registry/changelog/definitions')).filter(x=>x.endsWith('.json'))){const rel=`registry/changelog/definitions/${file}`;const d=read(rel);d.version=version;write(rel,d);}

// Generated human Markdown projection.
const md=['# Changelog','', '> Generated from authoritative `registry/changelog/releases/*.json` records. Do not edit this file as the primary release-note source.', '> V0.x releases are development foundation releases and do not by themselves declare production support.', '> V1.0.0 and later production support claims require formal Production Acceptance evidence.',''];
for(const r of [...releases].sort((a,b)=>cmp(b.version,a.version))){md.push(`## V${r.version} - Phase ${r.phase} ${r.title}`,'');if(r.recordCompleteness==='incomplete')md.push(`> Historical evidence incomplete: ${r.incompletenessReason}`,'');for(const s of r.sections??[]){md.push(`### ${s.label}`,'');for(const e of s.entries??[])md.push(`- ${e.summary}`);md.push('');}}
fs.writeFileSync(path.join(root,'CHANGELOG.md'),md.join('\n').trimEnd()+'\n');

// Keep Registry lifecycle items synchronized, including release-to-affected-item relationships.
registry.registryVersion=version;
for(const item of registry.items.filter(x=>x.managedBy==='changelog-sync'&&x.type!=='release-note'))item.version=version;
for(const r of releases){
  if(registry.items.some(x=>x.id===`changelog.release.${r.version}`))continue;
  registry.items.push({id:`changelog.release.${r.version}`,name:`V${r.version} - ${r.title}`,type:'release-note',source:`registry/changelog/releases/${r.version}.json`,description:r.summary,tags:['changelog','release',`phase-${r.phase}`],relationships:[{type:'implements',target:'changelog.changelogStandard',description:'Release note follows the NEXT F Changelog Standard.'}],domain:'changelog',version:r.version,status:'stable',phase:r.phase,introducedIn:r.version,permissions:[],events:[],managedBy:'changelog-sync'});
}
registryById.clear();for(const item of registry.items)registryById.set(item.id,item);
for(const r of releases){
  const item=registry.items.find(x=>x.id===`changelog.release.${r.version}`);if(!item)continue;
  const base=(item.relationships??[]).filter(rel=>!(rel.type==='relatedTo'&&String(rel.description??'').startsWith('Explicitly affected by Changelog entries')));
  const targets=uniq(r.affected?.contracts??[]).filter(id=>registryById.has(id)&&id!==item.id);
  item.relationships=[...base,...targets.map(target=>({type:'relatedTo',target,description:'Explicitly affected by Changelog entries in this release.'}))];
}
const managedArtifacts=[
 ['changelog.impactClassification','Changelog Impact Classification','schema','registry/changelog/definitions/impactClassification.json','Reusable Changelog compatibility, breaking, migration, action and security-impact classification.'],
 ['changelog.releaseSchema','Changelog Release JSON Schema','schema','registry/changelog/release.schema.json','Canonical JSON Schema for authoritative Changelog release records.'],
 ['changelog.changeEntryJsonSchema','Changelog Change Entry JSON Schema','schema','registry/changelog/change-entry.schema.json','Canonical JSON Schema for machine-readable Changelog change entries.'],
 ['changelog.impactJsonSchema','Changelog Impact JSON Schema','schema','registry/changelog/impact.schema.json','Canonical JSON Schema for Changelog impact/action metadata.'],
 ['changelog.contractHistoryIndex','Contract Changelog History Index','machine-registry','registry/changelog/contract-history.json','Derived contract-to-release/change navigation index; missing history is not reconstructed.']
];
for(const [id,name,type,source,description] of managedArtifacts){
  let item=registry.items.find(x=>x.id===id);
  const shape={id,name,type,source,description,tags:['changelog','phase-27',type],relationships:[{type:'implements',target:'changelog.changelogStandard',description:'Governed by the NEXT F Changelog Standard.'}],domain:'changelog',version,status:'stable',phase:27,introducedIn:'0.28.0',permissions:[],events:[],managedBy:'changelog-sync'};
  if(item)Object.assign(item,shape);else registry.items.push(shape);
}
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write('registry/registry.json',registry);
// Include newly synchronized Changelog artifacts in the history index without inventing change entries.
for(const item of registry.items){if(!historyItems[item.id])historyItems[item.id]={registryId:item.id,introducedIn:item.introducedIn??null,changedIn:[],deprecatedIn:[],removedIn:[],latestRelatedRelease:item.introducedIn??null,entries:[]};}
write('registry/changelog/contract-history.json',{registryVersion:version,schemaVersion:'1.0.0',title:'NEXT F Contract Changelog History',description:'Derived navigation index from authoritative Registry introducedIn metadata and explicit Changelog affected Registry IDs. It does not reconstruct missing history.',items:historyItems});

// Generated file:// fallback with source integrity.
const defs=fs.readdirSync(path.join(root,'registry/changelog/definitions')).filter(x=>x.endsWith('.json')).sort().map(file=>read(`registry/changelog/definitions/${file}`));
const sourceRels=['registry/changelog/index.json','registry/changelog/release-index.json','registry/changelog/entry-index.json','registry/changelog/contract-history.json','registry/changelog/sections.json','registry/changelog/evidence-levels.json','registry/changelog/policy.json','registry/changelog/release.schema.json','registry/changelog/change-entry.schema.json','registry/changelog/impact.schema.json','registry/changelog/changelog-release-note.schema.json',...releaseFiles.map(f=>`registry/changelog/releases/${f}`),...fs.readdirSync(path.join(root,'registry/changelog/definitions')).filter(x=>x.endsWith('.json')).sort().map(f=>`registry/changelog/definitions/${f}`)];
const sourceHashes=Object.fromEntries(sourceRels.map(rel=>[rel,sha(fs.readFileSync(path.join(root,rel)))]));
const generated={registryVersion:version,index:read('registry/changelog/index.json'),releaseIndex:read('registry/changelog/release-index.json'),entryIndex:read('registry/changelog/entry-index.json'),contractHistory:read('registry/changelog/contract-history.json'),sections:read('registry/changelog/sections.json'),evidenceLevels:read('registry/changelog/evidence-levels.json'),policy:read('registry/changelog/policy.json'),releases:[...releases].sort((a,b)=>cmp(b.version,a.version)),entries:read('registry/changelog/entry-index.json').entries,definitions:defs,sourceHashes};
fs.writeFileSync(path.join(root,'js/generated-changelog.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source set: registry/changelog/*\nexport const GENERATED_CHANGELOG = ${JSON.stringify(generated,null,2)};\n`);

const gen=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);
console.log(`Synchronized Changelog: ${releases.length} releases, ${entries.length} entries, ${defs.length} support schemas, ${Object.keys(historyItems).length} contract histories.`);
