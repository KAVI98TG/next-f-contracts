import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const root=process.cwd();
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const exists=(rel)=>fs.existsSync(path.join(root,rel));
const write=(rel,obj)=>{const p=path.join(root,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(obj,null,2)+'\n');};
const sha=(buf)=>crypto.createHash('sha256').update(buf).digest('hex');

const classifications=read('registry/privacy/classifications.json');
const qualifiers=read('registry/privacy/qualifiers.json');
const eligibility=read('registry/privacy/eligibility-values.json');
const retention=read('registry/privacy/retention-classes.json');
const redaction=read('registry/privacy/redaction-behaviors.json');
const deletion=read('registry/privacy/deletion-behaviors.json');
const consentRelevance=read('registry/privacy/consent-relevance.json');
const exportSensitivity=read('registry/privacy/export-sensitivity.json');
const operations=read('registry/privacy/operations.json');
const consentBoundaries=read('registry/privacy/consent-boundaries.json');
const fieldHandling=read('registry/privacy/field-handling.json');
const coverage=read('registry/privacy/coverage.json');
const registry=read('registry/registry.json');
const byId=new Map(registry.items.map(x=>[x.id,x]));
const classIds=new Set(classifications.classes.map(x=>x.id));
const qualifierIds=new Set(qualifiers.qualifiers.map(x=>x.id));
const eligibilityIds=new Set(eligibility.values.map(x=>x.id));
const retentionIds=new Set(retention.classes.map(x=>x.id));
const redactionIds=new Set(redaction.values.map(x=>x.id));
const deletionIds=new Set(deletion.values.map(x=>x.id));
const consentIds=new Set(consentRelevance.values.map(x=>x.id));
const exportIds=new Set(exportSensitivity.values.map(x=>x.id));
const securityControlById=new Map(registry.items.filter(x=>x.controlId).map(x=>[x.controlId,x.id]));
const seenHandling=new Set();
const seenTargetField=new Map();

function targetFieldExists(item,fieldPath){
  if(!item?.source||!exists(item.source)||!item.source.endsWith('.json'))return false;
  const data=read(item.source);const key=String(fieldPath).replace(/^fields\./,'');
  return Array.isArray(data.fields)&&data.fields.some(f=>f?.key===key);
}

for(const row of fieldHandling.entries){
  if(!/^PRIV-FLD-[0-9]{3}$/.test(row.handlingId))throw new Error(`Invalid handling ID ${row.handlingId}`);
  if(seenHandling.has(row.handlingId))throw new Error(`Duplicate handling ID ${row.handlingId}`);seenHandling.add(row.handlingId);
  const item=byId.get(row.targetId);if(!item)throw new Error(`Unknown privacy target ${row.targetId} in ${row.handlingId}`);
  if(!targetFieldExists(item,row.fieldPath))throw new Error(`Unknown target field ${row.targetId}.${row.fieldPath} in ${row.handlingId}`);
  const key=`${row.targetId}::${row.fieldPath}`;if(seenTargetField.has(key))throw new Error(`Duplicate/contradictory privacy mapping ${key}: ${seenTargetField.get(key)} and ${row.handlingId}`);seenTargetField.set(key,row.handlingId);
  if(!classIds.has(row.classification))throw new Error(`Unknown classification ${row.classification} in ${row.handlingId}`);
  for(const q of row.qualifiers??[])if(!qualifierIds.has(q))throw new Error(`Unknown qualifier ${q} in ${row.handlingId}`);
  for(const v of ['logEligibility','eventEligibility','webhookEligibility','analyticsEligibility'])if(!eligibilityIds.has(row[v]))throw new Error(`Unknown ${v} ${row[v]} in ${row.handlingId}`);
  if(!retentionIds.has(row.retentionClass))throw new Error(`Unknown retention class ${row.retentionClass} in ${row.handlingId}`);
  if(!redactionIds.has(row.redactionBehavior))throw new Error(`Unknown redaction behavior ${row.redactionBehavior} in ${row.handlingId}`);
  if(!deletionIds.has(row.deletionBehavior))throw new Error(`Unknown deletion behavior ${row.deletionBehavior} in ${row.handlingId}`);
  if(!consentIds.has(row.consentRelevance))throw new Error(`Unknown consent relevance ${row.consentRelevance} in ${row.handlingId}`);
  if(!exportIds.has(row.exportSensitivity))throw new Error(`Unknown export sensitivity ${row.exportSensitivity} in ${row.handlingId}`);
  if(row.classification==='secret'){
    if(row.publicDeliveryEligible!==false)throw new Error(`Secret field ${row.handlingId} cannot be public-delivery eligible`);
    if(row.analyticsEligibility!=='prohibited')throw new Error(`Secret field ${row.handlingId} cannot be analytics eligible`);
    if(row.logEligibility!=='prohibited')throw new Error(`Secret field ${row.handlingId} cannot be log eligible`);
    if(row.eventEligibility!=='prohibited'||row.webhookEligibility!=='prohibited')throw new Error(`Secret field ${row.handlingId} cannot flow to Event/Webhook payloads`);
  }
  if(['personal','sensitive'].includes(row.classification)&&row.publicDeliveryEligible===true)throw new Error(`${row.classification} field ${row.handlingId} cannot be public without a dedicated safe/public contract`);
  for(const control of row.relatedSecurityControls??[])if(!securityControlById.has(control))throw new Error(`Unknown Security control ${control} in ${row.handlingId}`);
}

const requiredAreas=new Set(['authentication','forms-leads','marketing','integrations','commerce','payments','webhooks','audit']);
for(const area of coverage.areas){
  requiredAreas.delete(area.area);
  if(area.status!=='covered')throw new Error(`High-risk privacy area ${area.area} is not explicitly covered`);
  for(const id of area.targetRegistryIds??[])if(!byId.has(id))throw new Error(`Unknown coverage target ${id} in ${area.area}`);
  for(const id of area.fieldHandlingIds??[])if(!seenHandling.has(id))throw new Error(`Unknown field handling ${id} in coverage ${area.area}`);
}
if(requiredAreas.size)throw new Error(`Missing required high-risk privacy coverage: ${[...requiredAreas].join(', ')}`);

const nav=read('registry/portal-navigation.json');nav.portalVersion=version;
const overview=nav.groups.find(x=>x.id==='overview');if(overview){const base=overview.items.find(x=>x.id==='overview');if(base){base.phase=30;base.status='current';}}
const standards=nav.groups.find(x=>x.id==='standards');if(standards){const item=standards.items.find(x=>x.id==='standards-privacy');if(item){item.phase=30;item.status='available';item.label='Privacy & Data';}}
write('registry/portal-navigation.json',nav);

const meta=read('registry/registry-meta.json');Object.assign(meta,{registryVersion:version,privacyIndex:'registry/privacy/index.json',privacyDataHandlingSchema:'registry/privacy/data-handling.schema.json',privacyClassifications:'registry/privacy/classifications.json',privacyQualifiers:'registry/privacy/qualifiers.json',privacyRetentionClasses:'registry/privacy/retention-classes.json',privacyFieldHandling:'registry/privacy/field-handling.json',privacyCoverage:'registry/privacy/coverage.json',privacyRoute:'#/standards/privacy'});write('registry/registry-meta.json',meta);
const domains=read('registry/domains.json');if(!domains.domains.some(x=>x.id==='privacy'))domains.domains.push({id:'privacy',label:'Privacy & Data',description:'Data classifications, purpose, flow eligibility, retention, consent relevance, redaction, deletion and privacy-operation metadata.'});domains.registryVersion=version;domains.domains.sort((a,b)=>a.id.localeCompare(b.id));write('registry/domains.json',domains);
const types=read('registry/types.json');for(const t of [
 {id:'data-handling-record',label:'Data Handling Record',description:'Field-level privacy classification and handling metadata.'},
 {id:'privacy-operation',label:'Privacy Operation',description:'Future-safe privacy/customer-data operation primitive.'}
])if(!types.types.some(x=>x.id===t.id))types.types.push(t);types.registryVersion=version;types.types.sort((a,b)=>a.id.localeCompare(b.id));write('registry/types.json',types);

registry.registryVersion=version;registry.items=registry.items.filter(x=>x.managedBy!=='privacy-sync');
const artifacts=[
 ['privacy.standard','Privacy & Data Standard','standard','standards/38-privacy-data-standard.md','Complete Phase 30 privacy and data-classification requirements.'],
 ['privacy.index','Privacy & Data Registry','machine-registry','registry/privacy/index.json','Generated index of privacy classifications, field handling, retention, consent and operation metadata.'],
 ['privacy.dataHandlingJsonSchema','Data Handling JSON Schema','schema','registry/privacy/data-handling.schema.json','JSON Schema for field-level privacy handling records.'],
 ['privacy.classifications','Primary Data Classifications','vocabulary','registry/privacy/classifications.json','Canonical public/internal/personal/sensitive/secret primary classification vocabulary.'],
 ['privacy.qualifiers','Data Qualifiers','vocabulary','registry/privacy/qualifiers.json','Financial/authentication/tracking/content/system-metadata qualifier vocabulary.'],
 ['privacy.eligibilityValues','Data Flow Eligibility','vocabulary','registry/privacy/eligibility-values.json','Allowed/conditional/redacted-only/prohibited flow eligibility vocabulary.'],
 ['privacy.retentionClasses','Retention Classes','vocabulary','registry/privacy/retention-classes.json','Policy-oriented retention classes without fabricated legal durations.'],
 ['privacy.redactionBehaviors','Redaction Behaviors','vocabulary','registry/privacy/redaction-behaviors.json','Canonical masking/partial/pseudonymization/removal behavior vocabulary.'],
 ['privacy.deletionBehaviors','Deletion Behaviors','vocabulary','registry/privacy/deletion-behaviors.json','Canonical delete/anonymize/retain/review behaviors.'],
 ['privacy.consentRelevance','Consent Relevance','vocabulary','registry/privacy/consent-relevance.json','Business-purpose/analytics/marketing/functional/multiple consent relevance vocabulary.'],
 ['privacy.exportSensitivity','Export Sensitivity','vocabulary','registry/privacy/export-sensitivity.json','Normal/restricted/highly-restricted export sensitivity vocabulary.'],
 ['privacy.fieldHandlingIndex','Field Privacy Handling','machine-registry','registry/privacy/field-handling.json','Field-level classification, purpose and flow rules for high-risk contracts.'],
 ['privacy.coverage','High-risk Privacy Coverage','machine-registry','registry/privacy/coverage.json','Explicit coverage map for authentication, forms/leads, marketing, integrations, Commerce/payments, Webhooks and audit.'],
 ['privacy.operations','Privacy Operations','machine-registry','registry/privacy/operations.json','Future-safe privacy operation primitives with truthful runtime support status.'],
 ['privacy.consentBoundaries','Consent Boundaries','machine-registry','registry/privacy/consent-boundaries.json','Rules separating business-purpose/form consent from optional analytics and marketing consent.'],
 ['privacy.dataClassification','Data Classification','schema','registry/privacy/definitions/dataClassification.json','Reusable primary data classification definition.'],
 ['privacy.dataQualifier','Data Qualifier','schema','registry/privacy/definitions/dataQualifier.json','Reusable privacy qualifier definition.'],
 ['privacy.fieldHandling','Field Privacy Handling Definition','schema','registry/privacy/definitions/fieldHandling.json','Reusable field-level privacy handling definition.'],
 ['privacy.retentionClass','Retention Class Definition','schema','registry/privacy/definitions/retentionClass.json','Reusable retention classification definition.'],
 ['privacy.privacyOperation','Privacy Operation Definition','schema','registry/privacy/definitions/privacyOperation.json','Reusable future privacy operation primitive.'],
 ['privacy.consentBoundary','Consent Boundary Definition','schema','registry/privacy/definitions/consentBoundary.json','Reusable consent-boundary definition.']
];
for(const [id,name,type,source,description] of artifacts){registry.items.push({id,name,domain:'privacy',type,version,status:'stable',description,source,phase:30,introducedIn:'0.31.0',tags:['privacy','phase-30'],relationships:id==='privacy.standard'?[]:[{type:'implements',target:'privacy.standard',description:'Governed by the Phase 30 Privacy & Data Standard.'}],permissions:[],events:[],managedBy:'privacy-sync'});}
for(const row of fieldHandling.entries){
  const rid=`privacy.field.${row.handlingId.toLowerCase().replaceAll('-','_')}`;
  const rels=[{type:'implements',target:'privacy.standard',description:'Implements Phase 30 privacy handling.'},{type:'appliesTo',target:row.targetId,description:`Privacy handling applies to ${row.targetId}.${row.fieldPath}.`}];
  for(const control of row.relatedSecurityControls??[]){const target=securityControlById.get(control);if(target)rels.push({type:'references',target,description:`Privacy handling references Security control ${control} as a governing security constraint.`});}
  registry.items.push({id:rid,name:`${row.handlingId} — ${row.targetId}.${row.fieldPath}`,domain:'privacy',type:'data-handling-record',version,status:'stable',description:`${row.classification} data handling: ${row.purpose}`,source:'registry/privacy/field-handling.json',phase:30,introducedIn:'0.31.0',tags:['privacy','phase-30',row.handlingId,row.targetId,row.fieldPath,row.classification,...(row.qualifiers??[]),row.retentionClass,row.consentRelevance,row.redactionBehavior],relationships:rels,permissions:[],events:[],handlingId:row.handlingId,targetId:row.targetId,fieldPath:row.fieldPath,classification:row.classification,managedBy:'privacy-sync'});
}
for(const op of operations.operations){registry.items.push({id:`privacy.operation.${op.id}`,name:`Privacy Operation — ${op.label}`,domain:'privacy',type:'privacy-operation',version,status:'stable',description:op.description,source:'registry/privacy/operations.json',phase:30,introducedIn:'0.31.0',tags:['privacy','phase-30','privacy-operation',op.status],relationships:[{type:'implements',target:'privacy.standard',description:'Governed by the Phase 30 Privacy & Data Standard.'}],permissions:[],events:[],operationStatus:op.status,implementedRuntime:op.implementedRuntime,managedBy:'privacy-sync'});}
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write('registry/registry.json',registry);

for(const rel of ['registry/privacy/classifications.json','registry/privacy/qualifiers.json','registry/privacy/eligibility-values.json','registry/privacy/retention-classes.json','registry/privacy/redaction-behaviors.json','registry/privacy/deletion-behaviors.json','registry/privacy/consent-relevance.json','registry/privacy/export-sensitivity.json','registry/privacy/operations.json','registry/privacy/consent-boundaries.json','registry/privacy/field-handling.json','registry/privacy/coverage.json']){const d=read(rel);d.registryVersion=version;if(Array.isArray(d.entries))for(const x of d.entries)x.version=version;write(rel,d);}
for(const f of fs.readdirSync(path.join(root,'registry/privacy/definitions')).filter(x=>x.endsWith('.json'))){const rel=`registry/privacy/definitions/${f}`;const d=read(rel);d.version=version;write(rel,d);}

const index={registryVersion:version,schemaVersion:'1.0.0',title:'NEXT F Privacy & Data Registry',description:'Machine-readable data classification, field handling, retention, consent and privacy-operation metadata.',stats:{classifications:classifications.classes.length,qualifiers:qualifiers.qualifiers.length,fieldHandling:fieldHandling.entries.length,retentionClasses:retention.classes.length,coverageAreas:coverage.areas.length,operations:operations.operations.length},classifications:classifications.classes,qualifiers:qualifiers.qualifiers,eligibilityValues:eligibility.values,retentionClasses:retention.classes,redactionBehaviors:redaction.values,deletionBehaviors:deletion.values,consentRelevance:consentRelevance.values,exportSensitivity:exportSensitivity.values,fieldHandling:fieldHandling.entries,coverage:coverage.areas,operations:operations.operations,consentBoundaries:consentBoundaries.rules,sources:{standard:'standards/38-privacy-data-standard.md',dataHandlingSchema:'registry/privacy/data-handling.schema.json',classifications:'registry/privacy/classifications.json',fieldHandling:'registry/privacy/field-handling.json',coverage:'registry/privacy/coverage.json',security:'registry/security/index.json'}};write('registry/privacy/index.json',index);

const definitionFiles=fs.readdirSync(path.join(root,'registry/privacy/definitions')).filter(x=>x.endsWith('.json')).sort();
const sourceRels=['registry/privacy/index.json','registry/privacy/classifications.json','registry/privacy/qualifiers.json','registry/privacy/eligibility-values.json','registry/privacy/retention-classes.json','registry/privacy/redaction-behaviors.json','registry/privacy/deletion-behaviors.json','registry/privacy/consent-relevance.json','registry/privacy/export-sensitivity.json','registry/privacy/operations.json','registry/privacy/consent-boundaries.json','registry/privacy/field-handling.json','registry/privacy/coverage.json','registry/privacy/data-handling.schema.json',...definitionFiles.map(f=>`registry/privacy/definitions/${f}`)];
const sourceHashes=Object.fromEntries(sourceRels.map(rel=>[rel,sha(fs.readFileSync(path.join(root,rel)))]));
const generated={registryVersion:version,index,classifications,qualifiers,eligibility,retention,redaction,deletion,consentRelevance,exportSensitivity,operations,consentBoundaries,fieldHandling,coverage,definitions:definitionFiles.map(f=>read(`registry/privacy/definitions/${f}`)),sourceHashes};
fs.writeFileSync(path.join(root,'js/generated-privacy.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source set: registry/privacy/*\nexport const GENERATED_PRIVACY = ${JSON.stringify(generated,null,2)};\n`);
const gen=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);
console.log(`Synchronized Privacy & Data: ${fieldHandling.entries.length} field handling records, ${artifacts.length} support items, ${operations.operations.length} operation primitives.`);
