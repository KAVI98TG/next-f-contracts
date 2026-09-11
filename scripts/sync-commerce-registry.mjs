import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root=path.resolve(process.cwd());
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const commerceVersion="0.12.0";
const defsDir=path.join(root,"registry/commerce/definitions");
const schemas=fs.readdirSync(defsDir).filter(n=>n.endsWith(".json")).sort().map(n=>JSON.parse(fs.readFileSync(path.join(defsDir,n),"utf8"))).sort((a,b)=>a.$id.localeCompare(b.$id));
const categoriesDoc=JSON.parse(fs.readFileSync(path.join(root,"registry/commerce/categories.json"),"utf8"));
const index={registryVersion:commerceVersion,schemaVersion:"1.0.0",title:"NEXT F Commerce Core Contract Registry",description:"Generated index of authoritative Phase 11 Commerce Core schemas.",definitionCount:schemas.length,categoryCount:categoriesDoc.categories.length,sourceDirectory:"registry/commerce/definitions",categories:categoriesDoc.categories,schemas};
const indexPath=path.join(root,"registry/commerce/index.json");
const raw=JSON.stringify(index,null,2)+"\n";fs.writeFileSync(indexPath,raw,"utf8");
const digest=crypto.createHash("sha256").update(raw).digest("hex");
fs.writeFileSync(path.join(root,"js/generated-commerce-schemas.js"),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source: registry/commerce/index.json\n// SHA-256: ${digest}\nexport const GENERATED_COMMERCE_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_COMMERCE_SCHEMAS = ${JSON.stringify(index,null,2)};\n`,"utf8");

const registryPath=path.join(root,"registry/registry.json");
const registry=JSON.parse(fs.readFileSync(registryPath,"utf8"));
registry.registryVersion=version;
registry.items=registry.items.filter(i=>i.managedBy!=="commerce-sync");
registry.items.push({id:"commerce.commerceCoreStandard",name:"Commerce Core Contract Standard",domain:"commerce",type:"standard",version:commerceVersion,status:"stable",description:"Authoritative Phase 11 provider-neutral commerce data, CMS, transaction, storefront and security boundaries.",source:"standards/19-commerce-core-contract-standard.md",phase:11,introducedIn:commerceVersion,tags:["commerce","catalog","inventory","checkout","orders","payments","fulfillment","standard"],relationships:[{type:"references",target:"integrations.integrationContractStandard",description:"External payment, shipping and other providers use Phase 10 Integration contracts."}],permissions:[],events:[],managedBy:"commerce-sync"});
registry.items.push({id:"commerce.commerceRegistry",name:"Commerce Core Registry Index",domain:"commerce",type:"registry-index",version:commerceVersion,status:"stable",description:"Generated index of authoritative Phase 11 Commerce Core schemas.",source:"registry/commerce/index.json",phase:11,introducedIn:commerceVersion,tags:["commerce","registry","schemas"],relationships:[{type:"generatedFrom",target:"commerce.commerceCoreStandard",description:"Indexes schemas governed by the Commerce Core Contract Standard."}],permissions:[],events:[],managedBy:"commerce-sync"});
const keyFor=(id)=>id.split(".",2)[1].replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
for(const s of schemas) registry.items.push({id:s.$id,name:s.name,domain:"commerce",type:"schema",version:s.version,status:s.status,description:s.description,source:`registry/commerce/definitions/${keyFor(s.$id)}.json`,phase:11,introducedIn:s.version,tags:["commerce-schema",s.category,s.commerceModel.kind,...s.fields.slice(0,6).map(f=>f.key)],relationships:[{type:"implements",target:"commerce.commerceCoreStandard",description:"Implements the Phase 11 Commerce Core Contract Standard."},...s.relationships],permissions:[],events:[],managedBy:"commerce-sync"});
registry.items.sort((a,b)=>a.id.localeCompare(b.id));fs.writeFileSync(registryPath,JSON.stringify(registry,null,2)+"\n","utf8");

const metaPath=path.join(root,"registry/registry-meta.json");const meta=JSON.parse(fs.readFileSync(metaPath,"utf8"));Object.assign(meta,{registryVersion:version,commerceDefinitions:"registry/commerce/definitions",commerceIndex:"registry/commerce/index.json",commerceDefinitionSchema:"registry/commerce/commerce-schema-definition.schema.json",commerceCategories:"registry/commerce/categories.json"});fs.writeFileSync(metaPath,JSON.stringify(meta,null,2)+"\n");
const domainsPath=path.join(root,"registry/domains.json");const domains=JSON.parse(fs.readFileSync(domainsPath,"utf8"));domains.registryVersion=version;if(!domains.domains.some(x=>x.id==="commerce"))domains.domains.push({id:"commerce",label:"Commerce",description:"Provider-neutral catalog, inventory, customers, cart, checkout, orders, payments, tax, shipping, fulfillment, promotions, returns and reviews."});domains.domains.sort((a,b)=>a.id.localeCompare(b.id));fs.writeFileSync(domainsPath,JSON.stringify(domains,null,2)+"\n");
for(const rel of ["registry/types.json","registry/statuses.json"]){const p=path.join(root,rel);const d=JSON.parse(fs.readFileSync(p,"utf8"));d.registryVersion=version;fs.writeFileSync(p,JSON.stringify(d,null,2)+"\n");}
const navPath=path.join(root,"registry/portal-navigation.json");const nav=JSON.parse(fs.readFileSync(navPath,"utf8"));nav.registryVersion=version;for(const group of nav.groups||[])for(const item of group.items||[])if(item.path==="/registry/commerce")item.status="available";fs.writeFileSync(navPath,JSON.stringify(nav,null,2)+"\n");

const r=spawnSync(process.execPath,[path.join(root,"scripts/generate-registry-bootstrap.mjs")],{stdio:"inherit"});if(r.status!==0)process.exit(r.status??1);
console.log(`Synchronized ${schemas.length} commerce schemas.`);
