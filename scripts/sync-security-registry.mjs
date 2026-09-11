import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const root=process.cwd();
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const write=(rel,obj)=>{const p=path.join(root,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(obj,null,2)+'\n');};
const sha=(buf)=>crypto.createHash('sha256').update(buf).digest('hex');
const controlDir=path.join(root,'registry/security/controls');
const controlFiles=fs.readdirSync(controlDir).filter(x=>x.endsWith('.json')).sort();
const controls=controlFiles.map(f=>read(`registry/security/controls/${f}`));
const categories=read('registry/security/categories.json');
const severities=read('registry/security/severity-levels.json');
const obligations=read('registry/security/obligations.json');
const verification=read('registry/security/verification-methods.json');
const secretClasses=read('registry/security/secret-classes.json');
const surfaces=read('registry/security/surface-mapping.json');
const registry=read('registry/registry.json');
const byId=new Map(registry.items.map(x=>[x.id,x]));
const catIds=new Set(categories.categories.map(x=>x.id));
const sevIds=new Set(severities.levels.map(x=>x.id));
const oblIds=new Set(obligations.values.map(x=>x.id));
const verifyIds=new Set(verification.methods.map(x=>x.id));
const seen=new Set();
for(const c of controls){
  if(!/^SEC-[A-Z0-9]+-[0-9]{3}$/.test(c.controlId))throw new Error(`Invalid security control ID ${c.controlId}`);
  if(seen.has(c.controlId))throw new Error(`Duplicate security control ID ${c.controlId}`);seen.add(c.controlId);
  if(!catIds.has(c.category))throw new Error(`Unknown category ${c.category} in ${c.controlId}`);
  if(!sevIds.has(c.violationSeverity))throw new Error(`Unknown severity ${c.violationSeverity} in ${c.controlId}`);
  if(!oblIds.has(c.obligation))throw new Error(`Unknown obligation ${c.obligation} in ${c.controlId}`);
  if(!['client','server','both','build','operations'].includes(c.scope))throw new Error(`Unknown scope ${c.scope} in ${c.controlId}`);
  for(const m of c.verificationMethods??[])if(!verifyIds.has(m))throw new Error(`Unknown verification method ${m} in ${c.controlId}`);
  for(const id of [...(c.affectedModules??[]),...(c.relatedPermissions??[]),...(c.relatedApiRules??[]),...(c.relatedWebhookRules??[]),...(c.relatedCommerceRules??[]),...(c.relatedRegistryIds??[])])if(!byId.has(id))throw new Error(`Unresolved Registry reference ${id} in ${c.controlId}`);
}
if(secretClasses.classes.some(x=>['protected-configuration','secret','credential','token','signing-secret','encryption-key'].includes(x.id)&&x.publicDeliveryEligible!==false))throw new Error('Protected/secret security classes must not be public-delivery eligible.');
for(const s of surfaces.surfaces){if(!['applicable','not-applicable'].includes(s.status))throw new Error(`Invalid surface mapping status ${s.surfaceId}`);if(s.status==='applicable'&&!(s.controlIds??[]).length)throw new Error(`Applicable surface ${s.surfaceId} has no controls`);for(const id of s.controlIds??[])if(!seen.has(id))throw new Error(`Unknown surface control ${id}`);}

const nav=read('registry/portal-navigation.json');nav.portalVersion=version;
const overview=nav.groups.find(x=>x.id==='overview');if(overview){const base=overview.items.find(x=>x.id==='overview');if(base){base.phase=Math.max(Number(base.phase)||0,29);base.status='current';}}
const standards=nav.groups.find(x=>x.id==='standards');if(standards){const item=standards.items.find(x=>x.id==='standards-security');if(item){item.phase=29;item.status='available';item.label='Security';}}
write('registry/portal-navigation.json',nav);
const meta=read('registry/registry-meta.json');Object.assign(meta,{registryVersion:version,securityIndex:'registry/security/index.json',securityControlSchema:'registry/security/security-control.schema.json',securityCategories:'registry/security/categories.json',securitySeverityLevels:'registry/security/severity-levels.json',securitySecretClasses:'registry/security/secret-classes.json',securitySurfaceMapping:'registry/security/surface-mapping.json',securityRoute:'#/standards/security'});write('registry/registry-meta.json',meta);
const domains=read('registry/domains.json');if(!domains.domains.some(x=>x.id==='security'))domains.domains.push({id:'security',label:'Security',description:'Machine-readable security controls, severity, value classes, verification expectations and platform-surface mappings.'});domains.registryVersion=version;domains.domains.sort((a,b)=>a.id.localeCompare(b.id));write('registry/domains.json',domains);
const types=read('registry/types.json');if(!types.types.some(x=>x.id==='security-control'))types.types.push({id:'security-control',label:'Security Control',description:'Canonical security requirement with applicability, verification and cross-registry bindings.'});types.registryVersion=version;types.types.sort((a,b)=>a.id.localeCompare(b.id));write('registry/types.json',types);

registry.registryVersion=version;registry.items=registry.items.filter(x=>x.managedBy!=='security-sync');
const artifacts=[
['security.standard','Security Standard','standard','standards/37-security-standard.md','Complete Phase 29 security requirements and verification standard.'],
['security.index','Security Control Registry','machine-registry','registry/security/index.json','Generated index of canonical security controls.'],
['security.controlJsonSchema','Security Control JSON Schema','schema','registry/security/security-control.schema.json','JSON Schema for machine-readable security controls.'],
['security.categories','Security Categories','vocabulary','registry/security/categories.json','Controlled security category vocabulary.'],
['security.severityLevels','Security Severity Levels','vocabulary','registry/security/severity-levels.json','Canonical security violation severity vocabulary.'],
['security.obligations','Security Obligations','vocabulary','registry/security/obligations.json','Mandatory/recommended security control vocabulary.'],
['security.verificationMethods','Security Verification Methods','vocabulary','registry/security/verification-methods.json','Controlled verification-method vocabulary.'],
['security.secretClasses','Security Value Classes','vocabulary','registry/security/secret-classes.json','Public/configuration/protected/secret credential and key classes.'],
['security.surfaceMapping','Security Surface Mapping','machine-registry','registry/security/surface-mapping.json','Control applicability across platform surfaces.'],
['security.securityControl','Security Control','schema','registry/security/definitions/securityControl.json','Reusable security-control definition.'],
['security.secretClass','Security Value Class','schema','registry/security/definitions/secretClass.json','Reusable protected-value classification definition.'],
['security.verificationMethod','Security Verification Method','schema','registry/security/definitions/verificationMethod.json','Reusable security verification definition.'],
['security.surfaceMappingDefinition','Security Surface Mapping Definition','schema','registry/security/definitions/surfaceMapping.json','Reusable surface applicability mapping definition.']
];
for(const [id,name,type,source,description] of artifacts){registry.items.push({id,name,domain:'security',type,version,status:'stable',description,source,phase:29,introducedIn:'0.30.0',tags:['security','phase-29'],relationships:id==='security.standard'?[]:[{type:'implements',target:'security.standard',description:'Governed by the Phase 29 Security Standard.'}],permissions:[],events:[],managedBy:'security-sync'});}
for(const c of controls){
 const rid=`security.control.${c.controlId.toLowerCase().replaceAll('-','_')}`;
 const rels=[{type:'implements',target:'security.standard',description:'Implements the Phase 29 Security Standard.'}];
 for(const target of [...new Set([...(c.affectedModules??[]),...(c.relatedPermissions??[]),...(c.relatedApiRules??[]),...(c.relatedWebhookRules??[]),...(c.relatedCommerceRules??[]),...(c.relatedRegistryIds??[])])])rels.push({type:'appliesTo',target,description:`${c.controlId} applies to or cross-links this canonical definition.`});
 registry.items.push({id:rid,name:`${c.controlId} — ${c.name}`,domain:'security',type:'security-control',version,status:'stable',description:c.requirement,source:c.sourceReference,phase:29,introducedIn:'0.30.0',tags:['security','phase-29',c.category,c.obligation,c.violationSeverity],relationships:rels,permissions:c.relatedPermissions??[],events:[],controlId:c.controlId,managedBy:'security-sync'});
}
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write('registry/registry.json',registry);

for(const rel of ['registry/security/categories.json','registry/security/severity-levels.json','registry/security/obligations.json','registry/security/verification-methods.json','registry/security/secret-classes.json','registry/security/surface-mapping.json']){const d=read(rel);d.registryVersion=version;write(rel,d);}
for(const f of fs.readdirSync(path.join(root,'registry/security/definitions')).filter(x=>x.endsWith('.json'))){const rel=`registry/security/definitions/${f}`;const d=read(rel);d.version=version;write(rel,d);}
const index={registryVersion:version,schemaVersion:'1.0.0',title:'NEXT F Security Control Registry',description:'Machine-readable security standards for NEXT F platform surfaces.',controlCount:controls.length,mandatoryCount:controls.filter(x=>x.obligation==='mandatory').length,recommendedCount:controls.filter(x=>x.obligation==='recommended').length,categories:categories.categories.map(c=>({...c,controlCount:controls.filter(x=>x.category===c.id).length})),controls,sources:{standard:'standards/37-security-standard.md',foundation:'standards/05-security-boundaries.md',controlSchema:'registry/security/security-control.schema.json',secretClasses:'registry/security/secret-classes.json',severityLevels:'registry/security/severity-levels.json',verificationMethods:'registry/security/verification-methods.json',surfaceMapping:'registry/security/surface-mapping.json'}};write('registry/security/index.json',index);
const sourceRels=['registry/security/index.json','registry/security/categories.json','registry/security/severity-levels.json','registry/security/obligations.json','registry/security/verification-methods.json','registry/security/secret-classes.json','registry/security/surface-mapping.json','registry/security/security-control.schema.json',...controlFiles.map(f=>`registry/security/controls/${f}`),...fs.readdirSync(path.join(root,'registry/security/definitions')).filter(x=>x.endsWith('.json')).sort().map(f=>`registry/security/definitions/${f}`)];
const sourceHashes=Object.fromEntries(sourceRels.map(rel=>[rel,sha(fs.readFileSync(path.join(root,rel)))]));
const generated={registryVersion:version,index,controls,categories,severityLevels:severities,obligations,verificationMethods:verification,secretClasses,surfaceMapping:surfaces,definitions:fs.readdirSync(path.join(root,'registry/security/definitions')).filter(x=>x.endsWith('.json')).sort().map(f=>read(`registry/security/definitions/${f}`)),sourceHashes};
fs.writeFileSync(path.join(root,'js/generated-security.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source set: registry/security/*\nexport const GENERATED_SECURITY = ${JSON.stringify(generated,null,2)};\n`);
const gen=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);
console.log(`Synchronized Security Standards: ${controls.length} controls, ${artifacts.length} support items.`);
