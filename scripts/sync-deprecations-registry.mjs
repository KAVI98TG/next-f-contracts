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
const uniq=(a)=>[...new Set((a??[]).filter(Boolean))].sort();

const recordDir=path.join(root,'registry/deprecations/records');
const recordFiles=fs.readdirSync(recordDir).filter(x=>x.endsWith('.json')).sort();
const records=recordFiles.map(f=>read(`registry/deprecations/records/${f}`));
const policy=read('registry/deprecations/policy.json');
const canonicalStatuses=read('registry/statuses.json');
const lifecycleOrder=['experimental','draft','stable','deprecated','removed'];
const projectedStates=lifecycleOrder.map(id=>canonicalStatuses.statuses.find(x=>x.id===id)).filter(Boolean).map(({id,label,description})=>({id,label,description}));
write('registry/deprecations/lifecycle-states.json',{registryVersion:version,schemaVersion:'1.0.0',title:'Canonical Lifecycle States Projection',description:'Generated projection of registry/statuses.json for Deprecation lifecycle tooling; registry/statuses.json remains the canonical vocabulary source.',source:'registry/statuses.json',states:projectedStates});
const states=read('registry/deprecations/lifecycle-states.json');
const severities=read('registry/deprecations/severity-levels.json');
const nav=read('registry/portal-navigation.json');nav.portalVersion=version;
const overview=nav.groups.find(x=>x.id==='overview');if(overview){const base=overview.items.find(x=>x.id==='overview');if(base){base.phase=Math.max(Number(base.phase)||0,28);base.status='current';}}
const lifecycle=nav.groups.find(x=>x.id==='lifecycle');if(lifecycle){const dep=lifecycle.items.find(x=>x.id==='lifecycle-deprecations');if(dep){dep.phase=28;dep.status='available';}const mig=lifecycle.items.find(x=>x.id==='lifecycle-migrations');if(mig){mig.phase=28;}}
write('registry/portal-navigation.json',nav);
const meta=read('registry/registry-meta.json');meta.registryVersion=version;meta.deprecationIndex='registry/deprecations/index.json';meta.deprecationPolicy='registry/deprecations/policy.json';meta.deprecationRoute='#/lifecycle/deprecations';write('registry/registry-meta.json',meta);
const registry=read('registry/registry.json');
const domains=read('registry/domains.json');
if(!domains.domains.some(x=>x.id==='deprecations'))domains.domains.push({id:'deprecations',label:'Deprecations',description:'Lifecycle deprecation records, replacement guidance, support windows and migration impact.'});
domains.registryVersion=version;domains.domains.sort((a,b)=>a.id.localeCompare(b.id));write('registry/domains.json',domains);
const types=read('registry/types.json');
if(!types.types.some(x=>x.id==='deprecation-record'))types.types.push({id:'deprecation-record',label:'Deprecation Record',description:'Lifecycle record governing a deprecated or removed canonical Registry definition.'});
types.registryVersion=version;types.types.sort((a,b)=>a.id.localeCompare(b.id));write('registry/types.json',types);
const registryById=new Map(registry.items.map(x=>[x.id,x]));
const changelog=exists('registry/changelog/entry-index.json')?read('registry/changelog/entry-index.json'):{entries:[]};
const changelogIds=new Set((changelog.entries??[]).map(x=>x.entryId));
const diffIndex=exists('registry/diff/release-index.json')?read('registry/diff/release-index.json'):null;
const stateIds=new Set(states.states.map(x=>x.id));
const severityIds=new Set(severities.levels.map(x=>x.id));

if(states.states.map(x=>x.id).join('|')!=='experimental|draft|stable|deprecated|removed')throw new Error('Canonical lifecycle order changed unexpectedly.');
const ids=new Set();const affectedIds=new Set();
for(const r of records){
 if(!/^dep_[a-z0-9][a-z0-9._-]*$/.test(r.deprecationId))throw new Error(`Invalid deprecation ID ${r.deprecationId}`);
 if(ids.has(r.deprecationId))throw new Error(`Duplicate deprecation ID ${r.deprecationId}`);ids.add(r.deprecationId);
 if(affectedIds.has(r.affectedRegistryId))throw new Error(`Duplicate governing deprecation record for ${r.affectedRegistryId}`);affectedIds.add(r.affectedRegistryId);
 if(!['deprecated','removed'].includes(r.status))throw new Error(`Invalid deprecation status ${r.status}`);
 if(!severityIds.has(r.severity))throw new Error(`Invalid deprecation severity ${r.severity}`);
 if(!registryById.has(r.affectedRegistryId))throw new Error(`Unknown affected Registry ID ${r.affectedRegistryId}`);
 const affected=registryById.get(r.affectedRegistryId);
 if(affected.status!==r.status)throw new Error(`Lifecycle status mismatch for ${r.deprecationId}: Registry=${affected.status}, record=${r.status}`);
 if(r.status==='removed'){
   if(!r.breakingRemovalTarget)throw new Error(`Removed record ${r.deprecationId} requires an explicit breakingRemovalTarget`);
   const fromMajor=Number(String(r.deprecatedSince).split('.')[0]),toMajor=Number(String(r.breakingRemovalTarget).split('.')[0]);
   if(!Number.isFinite(fromMajor)||!Number.isFinite(toMajor)||toMajor<=fromMajor)throw new Error(`Removed record ${r.deprecationId} must target a later major version`);
 }
 if(r.replacement?.disposition==='replacement'){
   if(!r.replacement.replacementId||!registryById.has(r.replacement.replacementId))throw new Error(`Unresolved replacement for ${r.deprecationId}`);
   if(r.replacement.replacementId===r.affectedRegistryId)throw new Error(`Self replacement for ${r.deprecationId}`);
 }
 if(r.replacement?.disposition==='no-replacement'&&r.replacement.replacementId!==null)throw new Error(`No-replacement record has replacementId for ${r.deprecationId}`);
 for(const id of r.relatedChangelogEntries??[])if(!changelogIds.has(id))throw new Error(`Unknown Changelog entry ${id} in ${r.deprecationId}`);
 const linked=(r.relatedChangelogEntries??[]).map(id=>(changelog.entries??[]).find(x=>x.entryId===id)).filter(Boolean);
 if(r.status==='deprecated'&&linked.length&&!linked.some(e=>e.category==='deprecated'&&(e.affectedRegistryIds??[]).includes(r.affectedRegistryId)))throw new Error(`Deprecation Changelog evidence does not agree for ${r.deprecationId}`);
 if(r.status==='removed'&&linked.length&&!linked.some(e=>e.category==='removed'&&(e.affectedRegistryIds??[]).includes(r.affectedRegistryId)))throw new Error(`Removal Changelog evidence does not agree for ${r.deprecationId}`);
 for(const mod of r.modulesAffected??[])if(!registryById.has(mod))throw new Error(`Unknown module ${mod} in ${r.deprecationId}`);
 for(const api of r.apisAffected??[])if(!registryById.has(api))throw new Error(`Unknown API ${api} in ${r.deprecationId}`);
}
// Replacement cycle detection.
const replacementByAffected=new Map(records.filter(r=>r.replacement?.disposition==='replacement').map(r=>[r.affectedRegistryId,r.replacement.replacementId]));
for(const start of replacementByAffected.keys()){
 const seen=new Set([start]);let cur=start;
 while(replacementByAffected.has(cur)){cur=replacementByAffected.get(cur);if(seen.has(cur))throw new Error(`Replacement loop involving ${start}`);seen.add(cur);}
}

// Every actual Registry item with lifecycle deprecated/removed must be governed by a record.
const byAffected=new Map(records.map(r=>[r.affectedRegistryId,r]));
for(const item of registry.items.filter(x=>['deprecated','removed'].includes(x.status))){
 if(!byAffected.has(item.id))throw new Error(`Lifecycle item ${item.id} has no deprecation record`);
}

const active=records.filter(r=>r.status==='deprecated');
const removed=records.filter(r=>r.status==='removed');
const upcoming=active.filter(r=>r.breakingRemovalTarget);
const index={
 registryVersion:version,schemaVersion:'1.0.0',title:'NEXT F Deprecation Registry',description:'Authoritative lifecycle-management records for deprecated and removed NEXT F Registry definitions.',currentVersion:version,
 recordCount:records.length,activeDeprecationCount:active.length,removedCount:removed.length,upcomingRemovalCount:upcoming.length,
 domains:uniq(records.map(r=>registryById.get(r.affectedRegistryId)?.domain)),modules:uniq(records.flatMap(r=>r.modulesAffected)),types:uniq(records.map(r=>registryById.get(r.affectedRegistryId)?.type)),severities:uniq(records.map(r=>r.severity)),
 records:records.map(r=>({...r,affectedName:registryById.get(r.affectedRegistryId)?.name??r.affectedRegistryId,affectedDomain:registryById.get(r.affectedRegistryId)?.domain??null,affectedType:registryById.get(r.affectedRegistryId)?.type??null,source:`registry/deprecations/records/${recordFiles[records.indexOf(r)]}`})),
 sources:{policy:'registry/deprecations/policy.json',lifecycleStates:'registry/deprecations/lifecycle-states.json',severityLevels:'registry/deprecations/severity-levels.json',deprecationSchema:'registry/deprecations/deprecation.schema.json',replacementSchema:'registry/deprecations/replacement.schema.json',recordDirectory:'registry/deprecations/records/'}
};
write('registry/deprecations/index.json',index);
for(const rel of ['registry/deprecations/policy.json','registry/deprecations/lifecycle-states.json','registry/deprecations/severity-levels.json']){const d=read(rel);d.registryVersion=version;write(rel,d);}
for(const file of fs.readdirSync(path.join(root,'registry/deprecations/definitions')).filter(x=>x.endsWith('.json'))){const rel=`registry/deprecations/definitions/${file}`;const d=read(rel);d.version=version;write(rel,d);}

// Register the lifecycle subsystem and each authoritative record in the canonical Registry.
registry.registryVersion=version;
registry.items=registry.items.filter(x=>x.managedBy!=='deprecations-sync');
const artifacts=[
 ['deprecations.deprecationStandard','Deprecation Standard','standard','standards/36-deprecation-standard.md','Operational lifecycle, replacement, support-window and migration policy for deprecated/removed definitions.'],
 ['deprecations.index','Deprecation Registry Index','machine-registry','registry/deprecations/index.json','Generated discovery index of authoritative deprecation records.'],
 ['deprecations.policy','Deprecation Operational Policy','machine-registry','registry/deprecations/policy.json','Machine-readable lifecycle and no-auto-upgrade policy.'],
 ['deprecations.lifecycleStates','Canonical Lifecycle States','vocabulary','registry/deprecations/lifecycle-states.json','Canonical experimental, draft, stable, deprecated and removed lifecycle vocabulary.'],
 ['deprecations.severityLevels','Deprecation Severity Levels','vocabulary','registry/deprecations/severity-levels.json','Controlled impact severity vocabulary for deprecations.'],
 ['deprecations.deprecationJsonSchema','Deprecation Record JSON Schema','schema','registry/deprecations/deprecation.schema.json','Canonical JSON Schema for deprecation records.'],
 ['deprecations.replacementJsonSchema','Deprecation Replacement JSON Schema','schema','registry/deprecations/replacement.schema.json','Canonical JSON Schema for replacement disposition and instructions.'],
 ['deprecations.deprecationRecord','Deprecation Record','schema','registry/deprecations/definitions/deprecationRecord.json','Reusable deprecation lifecycle record definition.'],
 ['deprecations.replacementReference','Replacement Reference','schema','registry/deprecations/definitions/replacementReference.json','Explicit replacement/no-replacement/unknown replacement reference.'],
 ['deprecations.lifecycleState','Lifecycle State','schema','registry/deprecations/definitions/lifecycleState.json','Reusable lifecycle-state definition.'],
 ['deprecations.supportWindow','Deprecation Support Window','schema','registry/deprecations/definitions/supportWindow.json','Optional authoritative support boundary definition.'],
 ['deprecations.impactScope','Deprecation Impact Scope','schema','registry/deprecations/definitions/impactScope.json','Affected Site/module/API and migration impact definition.']
];
for(const [id,name,type,source,description] of artifacts){registry.items.push({id,name,type,source,description,tags:['deprecations','lifecycle','phase-28'],relationships:id==='deprecations.deprecationStandard'?[]:[{type:'implements',target:'deprecations.deprecationStandard',description:'Governed by the NEXT F Deprecation Standard.'}],domain:'deprecations',version,status:'stable',phase:28,introducedIn:'0.29.0',permissions:[],events:[],managedBy:'deprecations-sync'});}
for(const r of records){
 const relationships=[{type:'relatedTo',target:r.affectedRegistryId,description:'Lifecycle record governing this affected Registry definition.'}];
 if(r.replacement?.disposition==='replacement')relationships.push({type:'replacedBy',target:r.replacement.replacementId,description:'Canonical replacement for this deprecated definition.'});
 registry.items.push({id:`deprecations.record.${r.deprecationId}`,name:`Deprecation: ${registryById.get(r.affectedRegistryId)?.name??r.affectedRegistryId}`,type:'deprecation-record',source:`registry/deprecations/records/${recordFiles[records.indexOf(r)]}`,description:r.reason,tags:['deprecations','lifecycle',r.status,r.severity],relationships,domain:'deprecations',version,status:'stable',phase:28,introducedIn:'0.29.0',permissions:[],events:[],managedBy:'deprecations-sync'});
}
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write('registry/registry.json',registry);

const sourceRels=['registry/deprecations/index.json','registry/deprecations/policy.json','registry/deprecations/lifecycle-states.json','registry/deprecations/severity-levels.json','registry/deprecations/deprecation.schema.json','registry/deprecations/replacement.schema.json',...recordFiles.map(f=>`registry/deprecations/records/${f}`),...fs.readdirSync(path.join(root,'registry/deprecations/definitions')).filter(x=>x.endsWith('.json')).sort().map(f=>`registry/deprecations/definitions/${f}`)];
const sourceHashes=Object.fromEntries(sourceRels.map(rel=>[rel,sha(fs.readFileSync(path.join(root,rel)))]));
const generated={registryVersion:version,index:read('registry/deprecations/index.json'),policy:read('registry/deprecations/policy.json'),lifecycleStates:read('registry/deprecations/lifecycle-states.json'),severityLevels:read('registry/deprecations/severity-levels.json'),records:index.records,definitions:fs.readdirSync(path.join(root,'registry/deprecations/definitions')).filter(x=>x.endsWith('.json')).sort().map(f=>read(`registry/deprecations/definitions/${f}`)),sourceHashes};
fs.writeFileSync(path.join(root,'js/generated-deprecations.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source set: registry/deprecations/*\nexport const GENERATED_DEPRECATIONS = ${JSON.stringify(generated,null,2)};\n`);
const gen=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);
console.log(`Synchronized Deprecations: ${records.length} records (${active.length} active, ${removed.length} removed), ${artifacts.length} support items.`);
