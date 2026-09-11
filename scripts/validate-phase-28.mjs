import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { GENERATED_DEPRECATIONS } from '../js/generated-deprecations.js';
import { loadDeprecations } from '../js/deprecations-registry-engine.js';
import { renderDeprecationsPage } from '../js/deprecations-pages.js';

const root=process.cwd(),pass=[],fail=[];
const ok=(n,c,d='')=>c?pass.push(n):fail.push(`${n}${d?`: ${d}`:''}`);
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const exists=(rel)=>fs.existsSync(path.join(root,rel));
const sha=(buf)=>crypto.createHash('sha256').update(buf).digest('hex');
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
ok('Phase 28 version',version==='0.29.0',version);
const required=['standards/36-deprecation-standard.md','registry/deprecations/index.json','registry/deprecations/policy.json','registry/deprecations/lifecycle-states.json','registry/deprecations/severity-levels.json','registry/deprecations/deprecation.schema.json','registry/deprecations/replacement.schema.json','js/deprecations-registry-engine.js','js/deprecations-pages.js','js/generated-deprecations.js','css/deprecations.css','scripts/sync-deprecations-registry.mjs','scripts/smoke-phase-28.mjs','registry/changelog/releases/0.29.0.json'];
for(const rel of required)ok(`File exists ${rel}`,exists(rel));
const index=read('registry/deprecations/index.json'),policy=read('registry/deprecations/policy.json'),states=read('registry/deprecations/lifecycle-states.json'),canonicalStatuses=read('registry/statuses.json'),severities=read('registry/deprecations/severity-levels.json'),depSchema=read('registry/deprecations/deprecation.schema.json'),repSchema=read('registry/deprecations/replacement.schema.json'),registry=read('registry/registry.json'),domains=read('registry/domains.json'),types=read('registry/types.json'),nav=read('registry/portal-navigation.json'),meta=read('registry/registry-meta.json'),search=read('registry/search/search-index.json'),relationships=read('registry/relationships/relationship-index.json'),changelog=read('registry/changelog/release-index.json'),compat=read('registry/compatibility/release-compatibility.json'),diff=read('registry/diff/release-index.json');
const registryIds=new Set(registry.items.map(x=>x.id));
ok('Deprecation index current',index.registryVersion===version&&index.currentVersion===version);
ok('Canonical lifecycle exact',states.states.map(x=>x.id).join('|')==='experimental|draft|stable|deprecated|removed');ok('Lifecycle projection matches canonical statuses',states.states.map(x=>x.id).join('|')===canonicalStatuses.statuses.map(x=>x.id).join('|'));ok('Lifecycle source is canonical statuses',states.source==='registry/statuses.json');
ok('Severity vocabulary exact',severities.levels.map(x=>x.id).join('|')==='info|low|medium|high|critical');
ok('Policy no auto upgrade',policy.rules?.existingSitesNeverAutoUpgrade===true);
ok('Policy no fabricated support dates',policy.rules?.noFabricatedSupportDates===true);
ok('Policy keeps removed historical',policy.rules?.removedItemsRemainHistoricallyDiscoverable===true);
ok('Policy stable removal major transition',policy.rules?.stableRemovalRequiresMajorLifecycleTransition===true);
ok('Registry production support remains false',policy.productionSupportDeclared===false);
for(const field of ['deprecationId','affectedRegistryId','affectedVersionRange','deprecatedSince','status','reason','replacement','severity','impactScope','siteTypesAffected','modulesAffected','apisAffected','dataMigrationRequired','codeMigrationRequired','configurationMigrationRequired','autoMigratable','manualReviewRequired','relatedChangelogEntries','relatedDiffEvidence','sourceReference'])ok(`Deprecation schema supports ${field}`,Object.hasOwn(depSchema.properties??{},field));
ok('Replacement dispositions controlled',JSON.stringify(repSchema.properties?.disposition?.enum)==='["replacement","no-replacement","unknown"]');
ok('Deprecations domain controlled',domains.domains.some(x=>x.id==='deprecations'));
ok('Deprecation record type controlled',types.types.some(x=>x.id==='deprecation-record'));
const supportIds=['deprecations.deprecationStandard','deprecations.index','deprecations.policy','deprecations.lifecycleStates','deprecations.severityLevels','deprecations.deprecationJsonSchema','deprecations.replacementJsonSchema','deprecations.deprecationRecord','deprecations.replacementReference','deprecations.lifecycleState','deprecations.supportWindow','deprecations.impactScope'];
for(const id of supportIds)ok(`Registry indexes ${id}`,registryIds.has(id));
ok('Twelve Phase 28 support items',supportIds.length===12);
const recordFiles=fs.readdirSync(path.join(root,'registry/deprecations/records')).filter(x=>x.endsWith('.json'));
ok('Index record count matches files',index.recordCount===recordFiles.length,`${index.recordCount}/${recordFiles.length}`);
ok('Current evidence has zero canonical deprecations',index.recordCount===0&&index.activeDeprecationCount===0&&index.removedCount===0,`${index.recordCount}/${index.activeDeprecationCount}/${index.removedCount}`);
const lifecycleItems=registry.items.filter(x=>['deprecated','removed'].includes(x.status));
ok('No ungoverned deprecated/removed Registry items',lifecycleItems.length===index.recordCount,`${lifecycleItems.length}/${index.recordCount}`);
const recordIds=new Set(),byAffected=new Map();
for(const r of index.records??[]){
 ok(`Deprecation ID valid ${r.deprecationId}`,/^dep_[a-z0-9][a-z0-9._-]*$/.test(r.deprecationId));ok(`Deprecation ID unique ${r.deprecationId}`,!recordIds.has(r.deprecationId));recordIds.add(r.deprecationId);
 ok(`Affected ID resolves ${r.deprecationId}`,registryIds.has(r.affectedRegistryId),r.affectedRegistryId);byAffected.set(r.affectedRegistryId,r);
 ok(`Status controlled ${r.deprecationId}`,['deprecated','removed'].includes(r.status));ok(`Severity controlled ${r.deprecationId}`,severities.levels.some(x=>x.id===r.severity));
 if(r.replacement?.disposition==='replacement')ok(`Replacement resolves ${r.deprecationId}`,registryIds.has(r.replacement.replacementId),r.replacement.replacementId);
 if(r.replacement?.disposition==='no-replacement')ok(`No replacement explicit null ${r.deprecationId}`,r.replacement.replacementId===null);
 for(const id of r.relatedChangelogEntries??[])ok(`Changelog ref resolves ${r.deprecationId} ${id}`,read('registry/changelog/entry-index.json').entries.some(x=>x.entryId===id));
 for(const id of r.modulesAffected??[])ok(`Module resolves ${r.deprecationId} ${id}`,registryIds.has(id));for(const id of r.apisAffected??[])ok(`API resolves ${r.deprecationId} ${id}`,registryIds.has(id));
}
// no replacement loops
for(const start of byAffected.keys()){const seen=new Set([start]);let cur=start;while(byAffected.get(cur)?.replacement?.disposition==='replacement'){cur=byAffected.get(cur).replacement.replacementId;if(seen.has(cur)){ok(`Replacement loop ${start}`,false,cur);break;}seen.add(cur);}}
const lifecycleNav=nav.groups.find(x=>x.id==='lifecycle')?.items??[];const depNav=lifecycleNav.find(x=>x.id==='lifecycle-deprecations');ok('Deprecation navigation available',depNav?.phase===28&&depNav?.status==='available');ok('Migrations remains planned',lifecycleNav.find(x=>x.id==='lifecycle-migrations')?.status==='planned');ok('Overview phase current 28',nav.groups.find(x=>x.id==='overview')?.items?.find(x=>x.id==='overview')?.phase===28);
ok('Registry meta points to deprecation index',meta.deprecationIndex==='registry/deprecations/index.json');ok('Registry meta points to route',meta.deprecationRoute==='#/lifecycle/deprecations');
const currentRelease=changelog.releases.find(x=>x.version==='0.29.0');ok('Changelog has V0.29.0',currentRelease?.phase===28);ok('V0.29.0 exact history',currentRelease?.recordCompleteness==='complete'&&currentRelease?.exactRegistrySnapshotAvailable===true);ok('V0.29.0 non-breaking',currentRelease?.breakingChange===false);ok('Diff has exact V0.29.0',diff.releases.some(x=>x.version==='0.29.0'&&x.available&&x.availability==='exact'));
const compat29=compat.releases?.find(x=>x.version==='0.29.0');ok('Compatibility has V0.29.0',!!compat29);ok('V0.29.0 not production eligible',compat29?.productionEligible===false);
ok('Search current',search.registryVersion===version);ok('Search contains Deprecations route',search.documents.some(x=>x.target==='#/lifecycle/deprecations'));for(const id of supportIds)ok(`Search indexes ${id}`,search.documents.some(x=>x.machineId===id));ok('No fabricated deprecation search docs',search.documents.filter(x=>x.kind==='deprecation').length===index.recordCount);
const regSha=sha(fs.readFileSync(path.join(root,'registry/registry.json')));ok('Relationship graph source SHA current',relationships.sourceSha256===regSha,`${relationships.sourceSha256}/${regSha}`);for(const id of supportIds)ok(`Relationship graph contains ${id}`,relationships.nodes.some(x=>x.id===id));
for(const [rel,expected] of Object.entries(GENERATED_DEPRECATIONS.sourceHashes??{})){ok(`Generated fallback source exists ${rel}`,exists(rel));if(exists(rel))ok(`Generated fallback hash ${rel}`,sha(fs.readFileSync(path.join(root,rel)))===expected);}
ok('Generated fallback current',GENERATED_DEPRECATIONS.registryVersion===version);ok('Generated fallback record parity',(GENERATED_DEPRECATIONS.records??[]).length===index.recordCount);
const engine=await loadDeprecations();ok('Deprecation engine loads',!!engine);ok('Deprecation engine source available',['authoritative-json','generated-local-fallback'].includes(engine.source));ok('Engine record parity',engine.records.length===index.recordCount);ok('Empty search remains truthful',engine.search({}).length===0);
const html=renderDeprecationsPage(engine,{view:'overview',q:'',status:'',domain:'',type:'',severity:'',replacement:'',module:'',migration:false});ok('Portal overview renders',html.includes('Deprecations'));ok('Portal exposes truthful empty state',html.includes('No canonical deprecations are active'));ok('Portal exposes affected Sites placeholder',html.includes('Affected Sites'));const recordsHtml=renderDeprecationsPage(engine,{view:'records',q:'',status:'',domain:'',type:'',severity:'',replacement:'',module:'',migration:false});for(const label of ['Search','Status','Domain','Type','Severity','Replacement','Module','Migration needed'])ok(`Portal filter ${label}`,recordsHtml.includes(label));
const css=fs.readFileSync(path.join(root,'css/deprecations.css'),'utf8');ok('Deprecation CSS light-only',!css.includes('prefers-color-scheme: dark'));ok('Deprecation CSS no backdrop filter',!css.includes('backdrop-filter'));
for(const rel of ['index.html','404.html']){const t=fs.readFileSync(path.join(root,rel),'utf8');if(rel==='index.html')ok(`${rel} includes deprecation CSS`,t.includes('./css/deprecations.css'));ok(`${rel} displays v0.29.0`,t.includes('v0.29.0'));const ids=[...t.matchAll(/\sid="([^"]+)"/g)].map(x=>x[1]);ok(`${rel} duplicate IDs`,ids.length===new Set(ids).size);for(const m of t.matchAll(/(?:href|src)="\.\/([^"#?]+)"/g))ok(`${rel} asset ${m[1]}`,exists(m[1]),m[1]);}
for(const item of registry.items){if(item.source)ok(`Registry source exists ${item.id}`,exists(item.source),item.source);for(const rel of item.relationships??[])ok(`Registry relationship resolves ${item.id} -> ${rel.target}`,registryIds.has(rel.target),rel.target);}
let jsonCount=0;for(const base of ['registry','examples']){const start=path.join(root,base);if(!fs.existsSync(start))continue;const walk=d=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.json')){jsonCount++;try{JSON.parse(fs.readFileSync(p,'utf8'));pass.push(`JSON ${path.relative(root,p)}`);}catch(err){fail.push(`JSON ${path.relative(root,p)}: ${err.message}`);}}}};walk(start);}
console.log(`NEXT F Contracts Phase 28 validation\nVersion: ${version}\nPasses: ${pass.length}\nFailures: ${fail.length}\nDeprecation records: ${index.recordCount}\nActive deprecations: ${index.activeDeprecationCount}\nRemoved records: ${index.removedCount}\nLifecycle states: ${states.states.length}\nRegistry items: ${registry.items.length}\nSearch documents: ${search.documents.length}\nRelationship nodes: ${relationships.nodes.length}\nRelationship edges: ${relationships.edges.length}\nJSON files checked: ${jsonCount}`);
if(fail.length){console.error('\nFailures:\n'+fail.map(x=>`- ${x}`).join('\n'));process.exit(1);}console.log('\nPASS - Deprecation System satisfies the Phase 28 acceptance model.');
