import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const root=process.cwd();
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const write=(rel,obj)=>{const p=path.join(root,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(obj,null,2)+'\n');};
const sha=(buf)=>crypto.createHash('sha256').update(buf).digest('hex');
const controlDir=path.join(root,'registry/accessibility/controls');
const controlFiles=fs.readdirSync(controlDir).filter(x=>x.endsWith('.json')).sort();
const controls=controlFiles.map(f=>read(`registry/accessibility/controls/${f}`));
const categories=read('registry/accessibility/categories.json');
const uiTypes=read('registry/accessibility/ui-types.json');
const verification=read('registry/accessibility/verification-methods.json');
const surfaces=read('registry/accessibility/surface-mapping.json');
const checklist=read('registry/accessibility/portal-checklist.json');
const portalAudit=fs.existsSync(path.join(root,'registry/accessibility/portal-audit.json'))?read('registry/accessibility/portal-audit.json'):{registryVersion:version,overallStatus:'not-run',checks:[]};
const severity=read('registry/security/severity-levels.json');
const registry=read('registry/registry.json');
const byId=new Map(registry.items.map(x=>[x.id,x]));
const catIds=new Set(categories.categories.map(x=>x.id));
const uiIds=new Set(uiTypes.types.map(x=>x.id));
const verifyIds=new Set(verification.methods.map(x=>x.id));
const sevIds=new Set(severity.levels.map(x=>x.id));
const seen=new Set();
for(const c of controls){
  if(!/^ACC-[A-Z0-9]+-[0-9]{3}$/.test(c.controlId))throw new Error(`Invalid accessibility control ID ${c.controlId}`);
  if(seen.has(c.controlId))throw new Error(`Duplicate accessibility control ID ${c.controlId}`);seen.add(c.controlId);
  if(!catIds.has(c.category))throw new Error(`Unknown category ${c.category} in ${c.controlId}`);
  if(!sevIds.has(c.severity))throw new Error(`Unknown severity ${c.severity} in ${c.controlId}`);
  for(const id of c.affectedUiTypes??[])if(!uiIds.has(id))throw new Error(`Unknown UI type ${id} in ${c.controlId}`);
  for(const id of c.verificationMethods??[])if(!verifyIds.has(id))throw new Error(`Unknown verification method ${id} in ${c.controlId}`);
  for(const id of [...(c.relatedCmsEditorTypes??[]),...(c.relatedBlocks??[]),...(c.relatedFields??[]),...(c.relatedRegistryIds??[])])if(!byId.has(id))throw new Error(`Unresolved Registry reference ${id} in ${c.controlId}`);
}
for(const s of surfaces.surfaces){if(!['applicable','not-applicable'].includes(s.status))throw new Error(`Invalid surface status ${s.surfaceId}`);if(s.status==='applicable'&&!(s.controlIds??[]).length)throw new Error(`Applicable surface ${s.surfaceId} has no controls`);for(const id of s.controlIds??[])if(!seen.has(id))throw new Error(`Unknown surface control ${id}`);}
for(const c of checklist.checks){if(!seen.has(c.controlId))throw new Error(`Unknown checklist control ${c.controlId}`);if(!['automated-static','source-review','manual-source-keyboard-review','manual-source-reflow-review'].includes(c.reviewType))throw new Error(`Unknown checklist review type ${c.reviewType}`);}

// Portal navigation / metadata.
const nav=read('registry/portal-navigation.json');nav.portalVersion=version;
const overview=nav.groups.find(x=>x.id==='overview');if(overview){const base=overview.items.find(x=>x.id==='overview');if(base){base.phase=Math.max(Number(base.phase)||0,31);base.status='current';}}
const standards=nav.groups.find(x=>x.id==='standards');if(standards){const item=standards.items.find(x=>x.id==='standards-accessibility');if(item){item.phase=31;item.status='available';item.label='Accessibility';}}
write('registry/portal-navigation.json',nav);
const meta=read('registry/registry-meta.json');Object.assign(meta,{registryVersion:version,accessibilityIndex:'registry/accessibility/index.json',accessibilityControlSchema:'registry/accessibility/accessibility-control.schema.json',accessibilityCategories:'registry/accessibility/categories.json',accessibilityUiTypes:'registry/accessibility/ui-types.json',accessibilityVerificationMethods:'registry/accessibility/verification-methods.json',accessibilitySurfaceMapping:'registry/accessibility/surface-mapping.json',accessibilityPortalAudit:'registry/accessibility/portal-audit.json',accessibilityRoute:'#/standards/accessibility'});write('registry/registry-meta.json',meta);
const domains=read('registry/domains.json');if(!domains.domains.some(x=>x.id==='accessibility'))domains.domains.push({id:'accessibility',label:'Accessibility',description:'Machine-readable accessibility controls, verification expectations, surface coverage and Contract Portal audit evidence.'});domains.registryVersion=version;domains.domains.sort((a,b)=>a.id.localeCompare(b.id));write('registry/domains.json',domains);
const types=read('registry/types.json');if(!types.types.some(x=>x.id==='accessibility-control'))types.types.push({id:'accessibility-control',label:'Accessibility Control',description:'Canonical accessibility requirement with UI applicability, verification and cross-registry bindings.'});if(!types.types.some(x=>x.id==='accessibility-audit'))types.types.push({id:'accessibility-audit',label:'Accessibility Audit',description:'Machine-readable accessibility review evidence for a NEXT F interface.'});types.registryVersion=version;types.types.sort((a,b)=>a.id.localeCompare(b.id));write('registry/types.json',types);

registry.registryVersion=version;registry.items=registry.items.filter(x=>x.managedBy!=='accessibility-sync');
const artifacts=[
['accessibility.standard','Accessibility Standard','standard','standards/39-accessibility-standard.md','Complete Phase 31 accessibility requirements and verification standard.'],
['accessibility.index','Accessibility Control Registry','machine-registry','registry/accessibility/index.json','Generated index of canonical accessibility controls.'],
['accessibility.controlJsonSchema','Accessibility Control JSON Schema','schema','registry/accessibility/accessibility-control.schema.json','JSON Schema for machine-readable accessibility controls.'],
['accessibility.categories','Accessibility Categories','vocabulary','registry/accessibility/categories.json','Controlled accessibility category vocabulary.'],
['accessibility.uiTypes','Accessibility UI Types','vocabulary','registry/accessibility/ui-types.json','Controlled UI/component applicability vocabulary.'],
['accessibility.verificationMethods','Accessibility Verification Methods','vocabulary','registry/accessibility/verification-methods.json','Controlled automated and manual accessibility verification methods.'],
['accessibility.surfaceMapping','Accessibility Surface Mapping','machine-registry','registry/accessibility/surface-mapping.json','Control applicability across NEXT F platform surfaces.'],
['accessibility.portalChecklist','Contract Portal Accessibility Checklist','machine-registry','registry/accessibility/portal-checklist.json','Defined Phase 31 baseline checks for contract.nextf.lk.'],
['accessibility.portalAudit','Contract Portal Accessibility Audit','accessibility-audit','registry/accessibility/portal-audit.json','Generated Phase 31 audit evidence for contract.nextf.lk.']
];
for(const [id,name,type,source,description] of artifacts){registry.items.push({id,name,domain:'accessibility',type,version,status:'stable',description,source,phase:31,introducedIn:'0.32.0',tags:['accessibility','phase-31'],relationships:id==='accessibility.standard'?[]:[{type:'implements',target:'accessibility.standard',description:'Governed by the Phase 31 Accessibility Standard.'}],permissions:[],events:[],managedBy:'accessibility-sync'});}
const defFiles=fs.readdirSync(path.join(root,'registry/accessibility/definitions')).filter(x=>x.endsWith('.json')).sort();
for(const f of defFiles){const d=read(`registry/accessibility/definitions/${f}`);registry.items.push({id:d.$id,name:d.name,domain:'accessibility',type:'schema',version,status:'stable',description:d.description,source:`registry/accessibility/definitions/${f}`,phase:31,introducedIn:'0.32.0',tags:['accessibility','phase-31','schema'],relationships:[{type:'implements',target:'accessibility.standard',description:'Governed by the Phase 31 Accessibility Standard.'}],permissions:[],events:[],managedBy:'accessibility-sync'});}
for(const c of controls){
 const rid=`accessibility.control.${c.controlId.toLowerCase().replaceAll('-','_')}`;
 const rels=[{type:'implements',target:'accessibility.standard',description:'Implements the Phase 31 Accessibility Standard.'}];
 for(const target of [...new Set([...(c.relatedCmsEditorTypes??[]),...(c.relatedBlocks??[]),...(c.relatedFields??[]),...(c.relatedRegistryIds??[])])])rels.push({type:'appliesTo',target,description:`${c.controlId} applies to this canonical definition or UI metadata surface.`});
 registry.items.push({id:rid,name:`${c.controlId} — ${c.name}`,domain:'accessibility',type:'accessibility-control',version,status:'stable',description:c.requirement,source:c.sourceReference,phase:31,introducedIn:'0.32.0',tags:['accessibility','phase-31',c.category,c.severity],relationships:rels,permissions:[],events:[],controlId:c.controlId,managedBy:'accessibility-sync'});
}
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write('registry/registry.json',registry);

for(const rel of ['registry/accessibility/categories.json','registry/accessibility/ui-types.json','registry/accessibility/verification-methods.json','registry/accessibility/surface-mapping.json','registry/accessibility/portal-checklist.json']){const d=read(rel);d.registryVersion=version;write(rel,d);}
for(const f of defFiles){const rel=`registry/accessibility/definitions/${f}`;const d=read(rel);d.version=version;write(rel,d);}
for(const f of controlFiles){const rel=`registry/accessibility/controls/${f}`;const d=read(rel);d.version=version;write(rel,d);}
if(fs.existsSync(path.join(root,'registry/accessibility/portal-audit.json'))){const d=read('registry/accessibility/portal-audit.json');d.registryVersion=version;write('registry/accessibility/portal-audit.json',d);}

const index={registryVersion:version,schemaVersion:'1.0.0',title:'NEXT F Accessibility Control Registry',description:'Machine-readable accessibility standards for customer websites, Customer CMS, NEXT F Admin and the Contract Portal.',controlCount:controls.length,manualReviewCount:controls.filter(x=>x.manualReviewRequired).length,categories:categories.categories.map(c=>({...c,controlCount:controls.filter(x=>x.category===c.id).length})),controls,portalAuditSummary:{overallStatus:portalAudit.overallStatus??'not-run',checkCount:(portalAudit.checks??[]).length,passed:(portalAudit.checks??[]).filter(x=>x.result==='pass').length,failed:(portalAudit.checks??[]).filter(x=>x.result==='fail').length,notRun:(portalAudit.checks??[]).filter(x=>x.result==='not-run').length},sources:{standard:'standards/39-accessibility-standard.md',controlSchema:'registry/accessibility/accessibility-control.schema.json',categories:'registry/accessibility/categories.json',uiTypes:'registry/accessibility/ui-types.json',verificationMethods:'registry/accessibility/verification-methods.json',surfaceMapping:'registry/accessibility/surface-mapping.json',portalChecklist:'registry/accessibility/portal-checklist.json',portalAudit:'registry/accessibility/portal-audit.json',severityLevels:'registry/security/severity-levels.json'}};write('registry/accessibility/index.json',index);
const sourceRels=['registry/accessibility/index.json','registry/accessibility/categories.json','registry/accessibility/ui-types.json','registry/accessibility/verification-methods.json','registry/accessibility/surface-mapping.json','registry/accessibility/portal-checklist.json','registry/accessibility/accessibility-control.schema.json',...controlFiles.map(f=>`registry/accessibility/controls/${f}`),...defFiles.map(f=>`registry/accessibility/definitions/${f}`)];if(fs.existsSync(path.join(root,'registry/accessibility/portal-audit.json')))sourceRels.push('registry/accessibility/portal-audit.json');
const sourceHashes=Object.fromEntries(sourceRels.map(rel=>[rel,sha(fs.readFileSync(path.join(root,rel)))]));
const generated={registryVersion:version,index,controls,categories,uiTypes,verificationMethods:verification,severityLevels:severity,surfaceMapping:surfaces,portalChecklist:checklist,portalAudit:fs.existsSync(path.join(root,'registry/accessibility/portal-audit.json'))?read('registry/accessibility/portal-audit.json'):{registryVersion:version,overallStatus:'not-run',checks:[]},definitions:defFiles.map(f=>read(`registry/accessibility/definitions/${f}`)),sourceHashes};
fs.writeFileSync(path.join(root,'js/generated-accessibility.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source set: registry/accessibility/*\nexport const GENERATED_ACCESSIBILITY = ${JSON.stringify(generated,null,2)};\n`);
const gen=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);
console.log(`Synchronized Accessibility Standards: ${controls.length} controls, ${artifacts.length+defFiles.length} support items.`);
