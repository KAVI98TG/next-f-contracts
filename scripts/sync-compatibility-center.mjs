import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { loadContractDiff } from '../js/diff-registry-engine.js';

const root=process.cwd();
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const write=(rel,obj,compact=false)=>{const p=path.join(root,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,compact?JSON.stringify(obj):JSON.stringify(obj,null,2)+'\n');};
const sha=(buf)=>crypto.createHash('sha256').update(buf).digest('hex');
const now='2026-09-11T00:00:00Z';
const productionAccepted=Number(version.split('.')[0])>=1;

// Keep core controlled metadata aligned to the coordinated release.
for(const rel of ['registry/domains.json','registry/types.json','registry/statuses.json']){const d=read(rel);d.registryVersion=version;write(rel,d);}
for(const rel of ['registry/compatibility/index.json','registry/compatibility/statuses.json','registry/compatibility/support-levels.json','registry/compatibility/dimensions.json','registry/compatibility/component-types.json','registry/compatibility/finding-codes.json','registry/compatibility/policy.json']){const d=read(rel);d.registryVersion=version;if(rel.endsWith('index.json')){d.targetContractVersion=version;d.productionEligible=productionAccepted;}if(rel.endsWith('policy.json')){d.currentContractRelease=version;d.preOneReleasePolicy={...(d.preOneReleasePolicy??{}),active:!productionAccepted,currentSupportLevel:productionAccepted?'production-current':'current-development',historicalExactSupportLevel:'historical-development',missingHistorySupportLevel:'history-only',productionSupportDeclared:productionAccepted,note:productionAccepted?'Contract Registry production stability is active from V1.0.0; consumer runtimes retain independent evidence states.':'Whole-platform production support begins only after explicit V1.0.0 Production Acceptance.'};}write(rel,d);}
for(const file of fs.readdirSync(path.join(root,'registry/compatibility/definitions')).filter(x=>x.endsWith('.json'))){const rel=`registry/compatibility/definitions/${file}`;const d=read(rel);d.version=version;write(rel,d);}

const nav=read('registry/portal-navigation.json');nav.portalVersion=version;
for(const group of nav.groups){
 if(group.id==='overview'){const base=group.items.find(x=>x.id==='overview');if(base){base.phase=Math.max(Number(base.phase)||0,26);base.status='current';}}
 if(group.id==='lifecycle'){const item=group.items.find(x=>x.id==='lifecycle-compatibility');if(item){item.label='Compatibility Center';item.phase=26;item.status='available';}}
}
write('registry/portal-navigation.json',nav);

const meta=read('registry/registry-meta.json');meta.registryVersion=version;Object.assign(meta,{compatibilityIndex:'registry/compatibility/index.json',compatibilityPolicy:'registry/compatibility/policy.json',compatibilityStatuses:'registry/compatibility/statuses.json',compatibilitySupportLevels:'registry/compatibility/support-levels.json',compatibilityDimensions:'registry/compatibility/dimensions.json',compatibilityReleaseMatrix:'registry/compatibility/release-compatibility.json',compatibilityComponentMatrix:'registry/compatibility/component-matrix.json',compatibilityReferenceSites:'registry/compatibility/reference-site-assessments.json',compatibilityRoute:'#/lifecycle/compatibility'});write('registry/registry-meta.json',meta);

// Normalize compatibility-owned Registry items without rebuilding definitions from prose.
const registry=read('registry/registry.json');registry.registryVersion=version;
for(const item of registry.items.filter(x=>x.managedBy==='compatibility-sync')){item.version=version;item.phase=26;item.status='stable';item.introducedIn='0.27.0';}
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write('registry/registry.json',registry);

let diff=null;try{diff=await loadContractDiff();}catch(error){console.warn(`Compatibility semantic Diff loading unavailable: ${error?.message??error}. Reusing exact prior compatibility evidence for the same target where available; otherwise status remains unknown.`);}
const releaseIndex=read('registry/diff/release-index.json');
const previousCompatibility=read('registry/compatibility/release-compatibility.json');
const previousByVersion=new Map((previousCompatibility.releases??[]).map(x=>[x.version,x]));
const previousSameTarget=previousCompatibility.targetVersion===version;
const ignoredToolPrefixes=['compatibility.','diff.','search.','relationships.'];
const ignoredIds=new Set(['registry.index','registry.metadata','portal.navigation']);
function consumerChanges(result){return (result.changes??[]).filter(x=>!ignoredToolPrefixes.some(p=>x.itemId?.startsWith(p))&&!ignoredIds.has(x.itemId));}
function statusFromChanges(changes){
 const impacts=new Set(changes.map(x=>x.impact));
 if(impacts.has('breaking'))return 'migration-required';
 if(impacts.has('potentially-breaking')||impacts.has('review-required')||impacts.has('deprecation'))return 'review-required';
 return changes.length?'compatible-with-upgrade':'compatible';
}
function compactCounts(changes){
 const out={breaking:0,'potentially-breaking':0,'review-required':0,deprecation:0,'non-breaking':0,documentation:0,metadata:0,none:0};
 for(const c of changes)if(Object.hasOwn(out,c.impact))out[c.impact]++;
 return out;
}
const releaseRows=[];
for(const r of releaseIndex.releases){
 const exact=Boolean(r.available&&r.availability==='exact');let compatibilityStatus='unknown',summary='Exact compatibility evidence is unavailable.',counts=null,changeSummary='No exact comparison';
 if(r.version===version&&exact){compatibilityStatus='compatible';summary='This is the current coordinated Contract Registry release.';counts=compactCounts([]);changeSummary='Current release';}
 else if(exact){
   if(diff){
     const result=diff.compare(r.version,version,{});
     if(!result.error){const changes=consumerChanges(result);counts=compactCounts(changes);compatibilityStatus=statusFromChanges(changes);const changed=changes.filter(x=>x.changeKind!=='unchanged').length;changeSummary=`${changed} consumer-relevant changed/added/removed definitions`;summary=compatibilityStatus==='migration-required'?'Breaking contract evidence requires migration before target adoption.':compatibilityStatus==='review-required'?'Exact history is available, but one or more consumer-relevant changes require review before upgrade.':'Exact history contains no detected blocking consumer-relevant change; an explicit upgrade is available.';}
   }else if(previousSameTarget&&previousByVersion.has(r.version)){
     const prev=previousByVersion.get(r.version);compatibilityStatus=prev.compatibilityStatus??'unknown';summary=prev.summary??summary;counts=prev.impactCounts??null;changeSummary=prev.changeSummary??changeSummary;
   }
 }
 const releaseMajor=Number(String(r.version).split('.')[0]);
 const supportLevel=r.version===version?(productionAccepted?'production-current':'current-development'):(exact?(releaseMajor>=1?'production-supported':'historical-development'):'history-only');
 const releaseProductionEligible=r.version===version?productionAccepted:(releaseMajor>=1&&exact);
 releaseRows.push({version:r.version,phase:r.phase??null,exactSnapshotAvailable:exact,availability:r.availability??'unknown',supportLevel,productionEligible:releaseProductionEligible,compatibilityStatus,summary,changeSummary,impactCounts:counts,sourceReference:r.sourceReference??null,diffRoute:exact&&r.version!==version?`#/lifecycle/diff?from=${encodeURIComponent(r.version)}&to=${encodeURIComponent(version)}`:null});
}
write('registry/compatibility/release-compatibility.json',{registryVersion:version,targetVersion:version,generatedAt:now,scope:'consumer-relevant canonical Registry changes; tooling-only search/relationship/diff/compatibility definitions excluded from upgrade severity',releases:releaseRows});

// Keep component matrix version current; surface-specific versions remain their own exact specification versions.
const componentMatrix=read('registry/compatibility/component-matrix.json');componentMatrix.registryVersion=version;componentMatrix.targetContractVersion=version;componentMatrix.generatedAt=now;
const contractComponent=componentMatrix.components.find(x=>x.componentId==='contracts.registry');if(contractComponent){contractComponent.specificationVersion=version;contractComponent.registryRelease=version;contractComponent.compatibilityStatus='compatible';contractComponent.summary=productionAccepted?'Current authoritative stable Contract Registry release.':'Current authoritative Contract Registry release.';}
write('registry/compatibility/component-matrix.json',componentMatrix);

// Manifest-aware reference assessments.
const moduleIndex=read('registry/modules/index.json');
const apiIndex=read('registry/api/index.json');
const eventIndex=read('registry/events/index.json');
const marketingIndex=read('registry/marketing/index.json');
const integrationIndex=read('registry/integrations/index.json');
const manifestIndex=read('registry/manifests/index.json');
const moduleById=new Map(moduleIndex.modules.map(x=>[x.moduleId,x]));
const capById=new Map(moduleIndex.capabilities.map(x=>[x.capabilityId,x]));
const reserved=new Set(moduleIndex.reservedCapabilities.map(x=>x.capabilityId));
const apiById=new Map(apiIndex.groups.map(x=>[x.$id??x.groupId,x]));
const eventIds=new Set(eventIndex.events.map(x=>x.$id??x.eventId??x.key));
const trackingIds=new Set(marketingIndex.trackingEvents.map(x=>x.key));
const connectorIds=new Set(integrationIndex.connectors.map(x=>x.$id));
const requiredRuntime=manifestIndex.runtimeCapabilities.filter(x=>x.required).map(x=>x.key);
const releaseByVersion=new Map(releaseRows.map(x=>[x.version,x]));
const statusRank=new Map(read('registry/compatibility/statuses.json').statuses.map(x=>[x.id,x.rank]));
const aggregate=(states)=>states.filter(x=>x&&x!=='not-applicable').sort((a,b)=>(statusRank.get(b)??0)-(statusRank.get(a)??0))[0]??'not-applicable';
const findings=[];
function dim(dimension,status,summary,required=true){return {dimension,status,required,summary};}
function assessManifest(rel){
 const m=read(rel);const source=m.contracts?.contractVersion??'';const enabledModules=(m.modules??[]).filter(x=>x.enabled).map(x=>x.moduleId);const enabledSet=new Set(enabledModules);const dimensions=[];const localFind=[];
 const release=releaseByVersion.get(source);dimensions.push(dim('contract-release',release?.compatibilityStatus??'unknown',release?.summary??'Pinned release is not represented in exact compatibility evidence.'));
 const manifestOk=m.manifestVersion==='1.0.0'&&m.contracts?.manifestSpecVersion==='1.0.0'&&Boolean(m.site?.siteType)&&Array.isArray(m.modules)&&m.runtime;dimensions.push(dim('site-manifest',manifestOk?'compatible':'incompatible',manifestOk?'Manifest uses the supported 1.0.0 specification shape.':'Manifest specification/shape is not supported.'));
 let moduleStatus='compatible';let moduleProblems=[];for(const id of enabledModules){const mod=moduleById.get(id);if(!mod){moduleStatus='incompatible';moduleProblems.push(`Unknown module ${id}`);continue;}for(const dep of mod.dependencies??[]){if(dep.kind==='required'&&!enabledSet.has(dep.moduleId)){moduleStatus='incompatible';moduleProblems.push(`${id} requires ${dep.moduleId}`);}}}dimensions.push(dim('modules',moduleStatus,moduleProblems.length?moduleProblems.join('; '):'All enabled Modules exist and required Module dependencies resolve.'));
 let capStatus='compatible';let capProblems=[];for(const row of m.modules??[]){if(!row.enabled)continue;for(const c of row.capabilities??[]){if(!c.enabled)continue;const cap=capById.get(c.capabilityId);if(!cap){capStatus='incompatible';capProblems.push(`Unknown capability ${c.capabilityId}`);}else if(cap.moduleId!==row.moduleId){capStatus='incompatible';capProblems.push(`${c.capabilityId} belongs to ${cap.moduleId}, not ${row.moduleId}`);}else if(reserved.has(c.capabilityId)){capStatus='incompatible';capProblems.push(`${c.capabilityId} is reserved`);}}}dimensions.push(dim('capabilities',capStatus,capProblems.length?capProblems.join('; '):'All enabled Capabilities exist, belong to their Module and are not reserved.'));
 let apiStatus='compatible';let apiProblems=[];for(const b of m.apiBindings??[]){const group=apiById.get(b.apiId);if(!group){apiStatus='incompatible';apiProblems.push(`Unknown API ${b.apiId}`);}else if(group.version!==b.version){apiStatus='incompatible';apiProblems.push(`${b.apiId} requests ${b.version}; canonical version is ${group.version}`);}}dimensions.push(dim('api',apiStatus,apiProblems.length?apiProblems.join('; '):'All declared API bindings resolve to exact canonical API versions.'));
 dimensions.push(dim('permissions','not-applicable','Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry.',false));
 let evtStatus='compatible';let evtProblems=[];for(const id of [...(m.events?.produces??[]),...(m.events?.consumes??[])])if(!eventIds.has(id)){evtStatus='incompatible';evtProblems.push(`Unknown Event ${id}`);}dimensions.push(dim('events',evtStatus,evtProblems.length?evtProblems.join('; '):'All declared canonical Events resolve.'));
 dimensions.push(dim('webhooks','not-applicable','No explicit Webhook subscription/runtime declaration is required by these reference manifests.',false));
 let intStatus='compatible';let intProblems=[];for(const i of m.integrations??[]){if(i.enabled&&!connectorIds.has(i.connectorId)){intStatus='incompatible';intProblems.push(`Unknown connector ${i.connectorId}`);}}dimensions.push(dim('integrations',intStatus,intProblems.length?intProblems.join('; '):'All enabled Integration connector IDs resolve.',false));
 dimensions.push(dim('customer-cms-ui',m.cms?.enabled?'unknown':'not-applicable',m.cms?.enabled?'Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry.':'Customer CMS disabled for this example.',false));
 dimensions.push(dim('nextf-admin-ui','not-applicable','NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion.',false));
 const runtimeFlags=requiredRuntime.filter(k=>m.runtime?.[k]!==true);const runtimeStatus=runtimeFlags.length?'incompatible':'unknown';dimensions.push(dim('site-runtime',runtimeStatus,runtimeFlags.length?`Required runtime capabilities are not declared: ${runtimeFlags.join(', ')}`:'All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet.'));
 const trackMissing=(m.tracking?.events??[]).filter(id=>!trackingIds.has(id));if(trackMissing.length)localFind.push({code:'tracking.unknown',dimension:'events',status:'incompatible',blocking:true,message:`Unknown tracking events: ${trackMissing.join(', ')}`});
 const migrationStatus=release?.compatibilityStatus==='migration-required'?'migration-required':release?.compatibilityStatus==='review-required'?'review-required':'not-applicable';dimensions.push(dim('data-migration',migrationStatus,migrationStatus==='not-applicable'?'No release-level migration requirement detected by current evidence.':'Upgrade path requires explicit review/migration planning.',false));
 if(trackMissing.length){const eventDim=dimensions.find(x=>x.dimension==='events');eventDim.status='incompatible';eventDim.summary+=` Unknown tracking events: ${trackMissing.join(', ')}.`;}
 const overall=aggregate(dimensions.filter(x=>x.required!==false).map(x=>x.status));
 const name=m.site?.name??path.basename(rel,'.json');const id=m.site?.siteId??path.basename(rel,'.json');
 const summary=overall==='review-required'?`Manifest structure resolves, but the ${source} → ${version} release path requires review and formal Site Runtime/SDK support is not yet declared.`:overall==='migration-required'?`Manifest requires migration before target ${version}.`:overall==='incompatible'?`One or more required Manifest bindings do not resolve against target ${version}.`:overall==='unknown'?`Canonical declarations resolve, but required runtime compatibility remains unknown.`:`Reference Manifest is compatible with target ${version} according to current static evidence.`;
 return {id,name,siteType:m.site?.siteType??'unknown',manifestSource:rel,manifestRoute:`#/development/site-manifest?example=${encodeURIComponent(path.basename(rel,'.json'))}`,sourceContractVersion:source,targetContractVersion:version,overallStatus:overall,productionDecision:productionAccepted?(overall==='compatible'?'registry-compatible-runtime-review-required':'not-approved-runtime-evidence'):'not-approved-pre-1.0',summary,dimensions,findings:localFind,diffRoute:release?.exactSnapshotAvailable&&source!==version?`#/lifecycle/diff?from=${encodeURIComponent(source)}&to=${encodeURIComponent(version)}`:null};
}
const assessments=manifestIndex.examples.map(ex=>assessManifest(ex.source??`registry/manifests/examples/${ex.key??ex.id}.json`));
write('registry/compatibility/reference-site-assessments.json',{registryVersion:version,targetVersion:version,generatedAt:now,evidenceMode:'repository-reference-manifests',productionData:false,assessments});

const idx=read('registry/compatibility/index.json');idx.registryVersion=version;idx.targetContractVersion=version;idx.definitionCount=fs.readdirSync(path.join(root,'registry/compatibility/definitions')).filter(x=>x.endsWith('.json')).length;idx.releaseCount=releaseRows.length;idx.exactReleaseCount=releaseRows.filter(x=>x.exactSnapshotAvailable).length;idx.componentCount=componentMatrix.components.length;idx.referenceAssessmentCount=assessments.length;write('registry/compatibility/index.json',idx);

// Generated file:// fallback. Every source hash is carried for validation.
const sources=['registry/compatibility/index.json','registry/compatibility/statuses.json','registry/compatibility/support-levels.json','registry/compatibility/dimensions.json','registry/compatibility/component-types.json','registry/compatibility/finding-codes.json','registry/compatibility/policy.json','registry/compatibility/release-compatibility.json','registry/compatibility/component-matrix.json','registry/compatibility/reference-site-assessments.json'];
const data={};const hashes={};for(const rel of sources){data[path.basename(rel,'.json').replaceAll('-','')]=read(rel);hashes[rel]=sha(fs.readFileSync(path.join(root,rel)));}
// Explicit keys expected by the browser engine.
data.index=read('registry/compatibility/index.json');data.statuses=read('registry/compatibility/statuses.json');data.supportLevels=read('registry/compatibility/support-levels.json');data.dimensions=read('registry/compatibility/dimensions.json');data.componentTypes=read('registry/compatibility/component-types.json');data.findingCodes=read('registry/compatibility/finding-codes.json');data.policy=read('registry/compatibility/policy.json');data.releaseCompatibility=read('registry/compatibility/release-compatibility.json');data.componentMatrix=read('registry/compatibility/component-matrix.json');data.referenceSites=read('registry/compatibility/reference-site-assessments.json');data.registryVersion=version;data.sourceHashes=hashes;data.definitions=fs.readdirSync(path.join(root,'registry/compatibility/definitions')).filter(x=>x.endsWith('.json')).sort().map(file=>read(`registry/compatibility/definitions/${file}`));
fs.writeFileSync(path.join(root,'js/generated-compatibility.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source set: registry/compatibility/*\nexport const GENERATED_COMPATIBILITY = ${JSON.stringify(data,null,2)};\n`);

const gen=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);
console.log(`Synchronized Compatibility Center: ${releaseRows.length} releases, ${componentMatrix.components.length} platform surfaces, ${assessments.length} reference Sites.`);
