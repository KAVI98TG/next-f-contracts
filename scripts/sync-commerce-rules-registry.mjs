import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root=path.resolve(process.cwd());
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const base=path.join(root,"registry/commerce/rules");
const defsDir=path.join(base,"definitions");
const read=(p)=>JSON.parse(fs.readFileSync(p,"utf8"));
const keyFor=(id)=>id.split(".").pop().replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase();

const categories=read(path.join(base,"categories.json"));
const rules=fs.readdirSync(defsDir).filter(x=>x.endsWith(".json")).sort()
  .map(x=>read(path.join(defsDir,x))).sort((a,b)=>a.$id.localeCompare(b.$id));

const index={
  registryVersion:version,
  schemaVersion:"1.0.0",
  title:"NEXT F Commerce Rules Registry",
  description:"Authoritative Phase 12 cross-entity Commerce Rules.",
  definitionCount:rules.length,
  categoryCount:categories.categories.length,
  sourceDirectory:"registry/commerce/rules/definitions",
  categories:categories.categories,
  rules
};
fs.writeFileSync(path.join(base,"index.json"),JSON.stringify(index,null,2)+"\n");

const stateMachines=read(path.join(base,"state-machines.json"));
const commandPolicies=read(path.join(base,"command-policies.json"));
const errorCodes=read(path.join(base,"error-codes.json"));
const runtime={registryVersion:version,rulesIndex:index,stateMachines,commandPolicies,errorCodes};
const sourceRaw=[
  fs.readFileSync(path.join(base,"index.json")),
  fs.readFileSync(path.join(base,"state-machines.json")),
  fs.readFileSync(path.join(base,"command-policies.json")),
  fs.readFileSync(path.join(base,"error-codes.json"))
];
const digest=crypto.createHash("sha256").update(Buffer.concat(sourceRaw)).digest("hex");
fs.writeFileSync(path.join(root,"js/generated-commerce-rules.js"),
`// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Sources: registry/commerce/rules/*.json
// SHA-256: ${digest}
export const GENERATED_COMMERCE_RULES_SOURCE_SHA256 = ${JSON.stringify(digest)};
export const GENERATED_COMMERCE_RULES = ${JSON.stringify(runtime,null,2)};
`,"utf8");

const registryPath=path.join(root,"registry/registry.json");
const registry=read(registryPath);
registry.registryVersion=version;
registry.items=registry.items.filter(i=>i.managedBy!=="commerce-rules-sync");
registry.items.push(
  {id:"commerce.commerceRulesStandard",name:"Commerce Rules Standard",domain:"commerce",type:"standard",version,status:"stable",description:"Authoritative Phase 12 cross-entity Commerce operational invariants and enforcement policy.",source:"standards/20-commerce-rules-standard.md",phase:12,introducedIn:version,tags:["commerce","rules","invariants","transactions","server-authority"],relationships:[{type:"dependsOn",target:"commerce.commerceCoreStandard",description:"Phase 12 rules govern Phase 11 Commerce Core schemas."}],permissions:[],events:[],managedBy:"commerce-rules-sync"},
  {id:"commerce.commerceRulesRegistry",name:"Commerce Rules Registry",domain:"commerce",type:"registry-index",version,status:"stable",description:"Machine-readable index of canonical Phase 12 Commerce Rules.",source:"registry/commerce/rules/index.json",phase:12,introducedIn:version,tags:["commerce","rules","registry","invariants"],relationships:[{type:"implements",target:"commerce.commerceRulesStandard",description:"Indexes rules governed by the Commerce Rules Standard."}],permissions:[],events:[],managedBy:"commerce-rules-sync"},
  {id:"commerce.commerceStateMachines",name:"Commerce State Machines",domain:"commerce",type:"machine-registry",version,status:"stable",description:"Canonical status transitions and guards for Phase 11 Commerce lifecycle fields.",source:"registry/commerce/rules/state-machines.json",phase:12,introducedIn:version,tags:["commerce","state-machine","transitions","guards"],relationships:[{type:"implements",target:"commerce.commerceRulesStandard",description:"Implements lifecycle rules."}],permissions:[],events:[],managedBy:"commerce-rules-sync"},
  {id:"commerce.commerceCommandPolicies",name:"Commerce Command Policies",domain:"commerce",type:"machine-registry",version,status:"stable",description:"Domain command requirements for atomicity, idempotency, concurrency and audit.",source:"registry/commerce/rules/command-policies.json",phase:12,introducedIn:version,tags:["commerce","commands","idempotency","atomicity","concurrency"],relationships:[{type:"implements",target:"commerce.commerceRulesStandard",description:"Implements command-level operational policy."}],permissions:[],events:[],managedBy:"commerce-rules-sync"},
  {id:"commerce.commerceRuleErrors",name:"Commerce Rule Error Identifiers",domain:"commerce",type:"machine-registry",version,status:"stable",description:"Canonical Phase 12 Commerce domain error identifiers without HTTP bindings.",source:"registry/commerce/rules/error-codes.json",phase:12,introducedIn:version,tags:["commerce","errors","domain-errors"],relationships:[{type:"implements",target:"commerce.commerceRulesStandard",description:"Defines domain error identifiers used by Commerce Rules."}],permissions:[],events:[],managedBy:"commerce-rules-sync"}
);
for(const r of rules){
  registry.items.push({
    id:r.$id,name:r.name,domain:"commerce",type:"business-rule",version:r.version,status:r.status,
    description:r.description,source:`registry/commerce/rules/definitions/${keyFor(r.$id)}.json`,
    phase:12,introducedIn:version,
    tags:["commerce-rule",r.category,r.ruleKind,r.severity,r.configurable?"configurable":"fixed"],
    relationships:[
      {type:"implements",target:"commerce.commerceRulesStandard",description:"Implements the Phase 12 Commerce Rules Standard."},
      ...r.appliesTo.map(target=>({type:"governs",target,description:`Governs ${target}.`}))
    ],
    permissions:[],events:[],managedBy:"commerce-rules-sync"
  });
}
registry.items.sort((a,b)=>a.id.localeCompare(b.id));
fs.writeFileSync(registryPath,JSON.stringify(registry,null,2)+"\n");

const typesPath=path.join(root,"registry/types.json");
const types=read(typesPath);types.registryVersion=version;
if(!types.types.some(x=>x.id==="business-rule"))types.types.push({id:"business-rule",label:"Business Rule",description:"Server-authoritative cross-entity operational invariant applied to canonical contracts."});
types.types.sort((a,b)=>a.id.localeCompare(b.id));fs.writeFileSync(typesPath,JSON.stringify(types,null,2)+"\n");

for(const rel of ["registry/domains.json","registry/statuses.json"]){
  const p=path.join(root,rel);const d=read(p);d.registryVersion=version;fs.writeFileSync(p,JSON.stringify(d,null,2)+"\n");
}
const metaPath=path.join(root,"registry/registry-meta.json");const meta=read(metaPath);
Object.assign(meta,{registryVersion:version,commerceRulesDefinitions:"registry/commerce/rules/definitions",commerceRulesIndex:"registry/commerce/rules/index.json",commerceRuleCategories:"registry/commerce/rules/categories.json",commerceRuleDefinitionSchema:"registry/commerce/rules/commerce-rule-definition.schema.json",commerceStateMachines:"registry/commerce/rules/state-machines.json",commerceCommandPolicies:"registry/commerce/rules/command-policies.json",commerceRuleErrors:"registry/commerce/rules/error-codes.json"});
meta.allowedRelationshipTypes=[...new Set([...(meta.allowedRelationshipTypes||[]),"governs"])].sort();
fs.writeFileSync(metaPath,JSON.stringify(meta,null,2)+"\n");

const navPath=path.join(root,"registry/portal-navigation.json");const nav=read(navPath);
nav.portalVersion=version;nav.registryVersion=version;
const registryGroup=(nav.groups||[]).find(x=>x.id==="registry");
if(registryGroup && !registryGroup.items.some(x=>x.id==="registry-commerce-rules")){
  const pos=registryGroup.items.findIndex(x=>x.id==="registry-commerce");
  registryGroup.items.splice(pos<0?registryGroup.items.length:pos+1,0,{id:"registry-commerce-rules",path:"/registry/commerce-rules",label:"Commerce Rules",phase:12,status:"available"});
}
fs.writeFileSync(navPath,JSON.stringify(nav,null,2)+"\n");

const generated=spawnSync(process.execPath,[path.join(root,"scripts/generate-registry-bootstrap.mjs")],{stdio:"inherit"});
if(generated.status!==0)process.exit(generated.status??1);
console.log(`Synchronized ${rules.length} Commerce Rules, ${stateMachines.stateMachines.length} state machines, ${commandPolicies.commands.length} command policies and ${errorCodes.errors.length} domain errors.`);
