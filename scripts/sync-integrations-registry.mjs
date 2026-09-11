import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root=path.resolve(process.cwd());
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const readDir=(rel)=>fs.readdirSync(path.join(root,rel)).filter(n=>n.endsWith(".json")).sort().map(n=>JSON.parse(fs.readFileSync(path.join(root,rel,n),"utf8")));
const schemas=readDir("registry/integrations/definitions").sort((a,b)=>a.$id.localeCompare(b.$id));
const connectors=readDir("registry/integrations/connectors").sort((a,b)=>a.$id.localeCompare(b.$id));
const categories=JSON.parse(fs.readFileSync(path.join(root,"registry/integrations/categories.json"),"utf8"));
const capabilities=JSON.parse(fs.readFileSync(path.join(root,"registry/integrations/capabilities.json"),"utf8"));
const providers=JSON.parse(fs.readFileSync(path.join(root,"registry/integrations/providers.json"),"utf8"));
const index={registryVersion:version,schemaVersion:"1.0.0",title:"NEXT F Integration Contract Registry",description:"Generated index of authoritative Phase 10 Integration definitions and provider connectors.",definitionCount:schemas.length,connectorCount:connectors.length,categoryCount:categories.categories.length,capabilityCount:capabilities.capabilities.length,providerCount:providers.providers.length,sourceDirectory:"registry/integrations/definitions",connectorDirectory:"registry/integrations/connectors",categories:categories.categories,capabilities:capabilities.capabilities,providers:providers.providers,schemas,connectors};
const indexPath=path.join(root,"registry/integrations/index.json");
const raw=JSON.stringify(index,null,2)+"\n";fs.writeFileSync(indexPath,raw,"utf8");
const digest=crypto.createHash("sha256").update(raw).digest("hex");
fs.writeFileSync(path.join(root,"js/generated-integrations.js"),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source: registry/integrations/index.json\n// SHA-256: ${digest}\nexport const GENERATED_INTEGRATIONS_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_INTEGRATIONS = ${JSON.stringify(index,null,2)};\n`,"utf8");

const registryPath=path.join(root,"registry/registry.json");
const registry=JSON.parse(fs.readFileSync(registryPath,"utf8"));registry.registryVersion=version;registry.items=registry.items.filter(i=>i.managedBy!=="integrations-sync");
registry.items.push({id:"integrations.integrationContractStandard",name:"Integration Contract Standard",domain:"integrations",type:"standard",version,status:"stable",description:"Authoritative Phase 10 provider connector, authentication, mapping, runtime, sync, health and resilience boundaries.",source:"standards/18-integration-contract-standard.md",phase:10,introducedIn:version,tags:["integrations","connectors","authentication","consent","security","standard"],relationships:[],permissions:[],events:[],managedBy:"integrations-sync"});
const keyFor=(id)=>id.split(".",2)[1].replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
for(const s of schemas) registry.items.push({id:s.$id,name:s.name,domain:"integrations",type:"schema",version:s.version,status:s.status,description:s.description,source:`registry/integrations/definitions/${keyFor(s.$id)}.json`,phase:10,introducedIn:version,tags:["integration-schema",s.category,s.integrationModel.kind,...s.fields.slice(0,5).map(f=>f.key)],relationships:[{type:"implements",target:"integrations.integrationContractStandard",description:"Implements the Phase 10 Integration Contract Standard."},...s.relationships],permissions:[],events:[],managedBy:"integrations-sync"});
for(const c of connectors) registry.items.push({id:c.$id,name:c.name,domain:"integrations",type:"connector",version:c.version,status:c.status,description:c.description,source:`registry/integrations/connectors/${keyFor(c.$id)}.json`,phase:10,introducedIn:version,tags:["connector",c.providerKey,c.family,...c.capabilities.slice(0,5)],relationships:[{type:"implements",target:"integrations.integrationContractStandard",description:"Implements the Phase 10 Integration Contract Standard."},{type:"references",target:"integrations.connectorDefinition",description:"Uses the canonical connector definition model."}],permissions:[],events:[],managedBy:"integrations-sync"});
registry.items.sort((a,b)=>a.id.localeCompare(b.id));fs.writeFileSync(registryPath,JSON.stringify(registry,null,2)+"\n","utf8");

const metaPath=path.join(root,"registry/registry-meta.json");const meta=JSON.parse(fs.readFileSync(metaPath,"utf8"));Object.assign(meta,{registryVersion:version,integrationDefinitions:"registry/integrations/definitions",integrationConnectors:"registry/integrations/connectors",integrationIndex:"registry/integrations/index.json",integrationDefinitionSchema:"registry/integrations/integration-schema-definition.schema.json",connectorDefinitionSchema:"registry/integrations/connector-definition.schema.json",integrationCapabilities:"registry/integrations/capabilities.json",integrationProviders:"registry/integrations/providers.json"});fs.writeFileSync(metaPath,JSON.stringify(meta,null,2)+"\n");

const domainsPath=path.join(root,"registry/domains.json");const domains=JSON.parse(fs.readFileSync(domainsPath,"utf8"));domains.registryVersion=version;if(!domains.domains.some(x=>x.id==="integrations"))domains.domains.push({id:"integrations",label:"Integrations",description:"Provider connectors, authentication, configuration, mappings, runtime boundaries, synchronization, health and resilience."});domains.domains.sort((a,b)=>a.id.localeCompare(b.id));fs.writeFileSync(domainsPath,JSON.stringify(domains,null,2)+"\n");
const typesPath=path.join(root,"registry/types.json");const types=JSON.parse(fs.readFileSync(typesPath,"utf8"));types.registryVersion=version;if(!types.types.some(x=>x.id==="connector"))types.types.push({id:"connector",label:"Connector",description:"Provider or generic external-system adapter definition implementing canonical NEXT F Integration Contracts."});types.types.sort((a,b)=>a.id.localeCompare(b.id));fs.writeFileSync(typesPath,JSON.stringify(types,null,2)+"\n");
const statusesPath=path.join(root,"registry/statuses.json");const statuses=JSON.parse(fs.readFileSync(statusesPath,"utf8"));statuses.registryVersion=version;fs.writeFileSync(statusesPath,JSON.stringify(statuses,null,2)+"\n");
const navPath=path.join(root,"registry/portal-navigation.json");const nav=JSON.parse(fs.readFileSync(navPath,"utf8"));nav.registryVersion=version;for(const group of nav.groups||[])for(const item of group.items||[])if(item.path==="/platform/integrations")item.status="available";fs.writeFileSync(navPath,JSON.stringify(nav,null,2)+"\n");

const r=spawnSync(process.execPath,[path.join(root,"scripts/generate-registry-bootstrap.mjs")],{stdio:"inherit"});if(r.status!==0)process.exit(r.status??1);
console.log(`Synchronized ${schemas.length} integration schemas and ${connectors.length} connectors.`);
