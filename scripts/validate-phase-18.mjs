import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
const root=process.cwd();let pass=0;const fail=[];
const ok=(name,cond,detail="")=>{if(cond)pass++;else fail.push(`${name}${detail?`: ${detail}`:""}`)};
const read=rel=>JSON.parse(fs.readFileSync(path.join(root,rel),"utf8"));
const exists=rel=>fs.existsSync(path.join(root,rel));
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
ok("Contract release is 0.19.0",version==="0.19.0",version);
const api=read("registry/api/index.json"),reg=read("registry/registry.json");
const regIds=new Set(reg.items.map(x=>x.id)); const itemsById=new Map(reg.items.map(x=>[x.id,x]));
ok("API registry release",api.registryVersion===version,api.registryVersion);
ok("API version 1.0.0",api.apiVersion==="1.0.0",api.apiVersion);
ok("Seven API groups",api.groups.length===7,api.groups.length);
ok("API support schemas >= 30",api.schemas.length>=30,api.schemas.length);
ok("API operations >= 100",api.operations.length>=100,api.operations.length);
ok("API errors >= 40",api.errorCodes.length>=40,api.errorCodes.length);

const allIds=[...api.schemas,...api.groups,...api.operations].map(x=>x.$id);
ok("Unique API IDs",new Set(allIds).size===allIds.length);
const groupIds=new Set(api.groups.map(x=>x.apiId));const opIds=new Set(api.operations.map(x=>x.operationId));
const methods=new Set(api.methods.map(x=>x.id)),auth=new Set(api.authModes.map(x=>x.id)),cache=new Set(api.cachePolicies.map(x=>x.id)),rate=new Set(api.rateLimitClasses.map(x=>x.id)),cors=new Set(api.corsPolicies.map(x=>x.id)),errors=new Set(api.errorCodes.map(x=>x.code));
for(const s of api.schemas){
  ok(`API schema ID ${s.$id}`,/^api\.[a-z][A-Za-z0-9-]*$/.test(s.$id));
  ok(`API schema registry ${s.$id}`,regIds.has(s.$id));
  ok(`API schema source ${s.$id}`,exists(`registry/api/schemas/${s.$id.slice(4)}.json`));
}
for(const g of api.groups){
  ok(`Group canonical ${g.apiId}`,g.$id===g.apiId);
  ok(`Group known auth ${g.apiId}`,auth.has(g.defaultAuthMode));
  ok(`Group known cache ${g.apiId}`,cache.has(g.defaultCachePolicy));
  ok(`Group known rate ${g.apiId}`,rate.has(g.defaultRateLimitClass));
  ok(`Group known CORS ${g.apiId}`,cors.has(g.defaultCorsPolicy));
  ok(`Group registry ${g.apiId}`,regIds.has(g.apiId));
  for(const oid of g.operationIds)ok(`Group operation exists ${g.apiId}:${oid}`,opIds.has(oid));
}
for(const o of api.operations){
  ok(`Operation group ${o.operationId}`,groupIds.has(o.groupId));
  ok(`Operation method ${o.operationId}`,methods.has(o.method));
  ok(`Operation auth ${o.operationId}`,auth.has(o.authentication.mode));
  ok(`Operation cache ${o.operationId}`,cache.has(o.policies.cache));
  ok(`Operation rate ${o.operationId}`,rate.has(o.policies.rateLimit));
  ok(`Operation CORS ${o.operationId}`,cors.has(o.policies.cors));
  ok(`Operation registry ${o.operationId}`,regIds.has(o.operationId));
  const rel=`registry/api/operations/${o.groupId.slice(4)}/${o.operationId.split(".").at(-1)}.json`;
  ok(`Operation source ${o.operationId}`,exists(rel),rel);
  for(const p of o.authentication.permissions)ok(`Permission exists ${o.operationId}:${p}`,regIds.has(p)&&itemsById.get(p)?.type==="permission");
  for(const c of o.contractBindings)ok(`Contract exists ${o.operationId}:${c}`,regIds.has(c));
  for(const ev of o.eventBindings)ok(`Event exists ${o.operationId}:${ev}`,regIds.has(ev)&&itemsById.get(ev)?.type==="event");
  for(const ec of o.response.errors)ok(`Error code exists ${o.operationId}:${ec}`,errors.has(ec));
  if(o.policies.idempotency.required)ok(`Idempotency header declared ${o.operationId}`,o.request.headers.includes("Idempotency-Key"));
  if(o.policies.concurrency.required)ok(`If-Match header declared ${o.operationId}`,o.request.headers.includes("If-Match"));
}
const publicContent=api.operations.filter(o=>o.groupId==="api.public-content");
ok("Public Content strictly read only",publicContent.every(o=>["GET","HEAD"].includes(o.method)));
ok("Public Interaction exists",groupIds.has("api.public-interaction"));
ok("No external canonical Event create operation",!api.operations.some(o=>o.groupId==="api.events"&&/create-domain|publish-domain|emit-domain/.test(o.operationId)));
ok("Event tracking ingestion explicitly non-authoritative",api.operations.find(o=>o.operationId==="api.events.ingest-tracking")?.description.includes("cannot create authoritative"));

for(const example of fs.readdirSync(path.join(root,"registry/manifests/examples")).filter(x=>x.endsWith(".json"))){
  const m=read(`registry/manifests/examples/${example}`);
  ok(`Manifest contract version ${example}`,m.contracts.contractVersion===version);
  ok(`Manifest has API bindings ${example}`,Array.isArray(m.apiBindings)&&m.apiBindings.length>0);
  const envs=new Set(m.environments.filter(x=>x.enabled).map(x=>x.id));
  for(const b of m.apiBindings){
    ok(`Manifest API ID ${example}:${b.apiId}`,groupIds.has(b.apiId));
    ok(`Manifest API version ${example}:${b.apiId}`,b.version===api.apiVersion);
    ok(`Manifest no latest ${example}:${b.apiId}`,b.version!=="latest");
    for(const eid of b.environments)ok(`Manifest API environment ${example}:${eid}`,envs.has(eid));
  }
}
ok("API standard exists",exists("standards/26-api-contract-standard.md"));
ok("API CSS exists",exists("css/api.css"));
ok("API engine exists",exists("js/api-registry-engine.js"));
ok("API pages exists",exists("js/api-pages.js"));
const digest=crypto.createHash("sha256").update(fs.readFileSync(path.join(root,"registry/api/index.json"))).digest("hex");
ok("Generated API digest current",fs.readFileSync(path.join(root,"js/generated-api.js"),"utf8").includes(digest));
const regDigest=crypto.createHash("sha256").update(fs.readFileSync(path.join(root,"registry/registry.json"))).digest("hex");
ok("Generated registry digest current",fs.readFileSync(path.join(root,"js/generated-registry.js"),"utf8").includes(regDigest));
ok("Global registry release",reg.registryVersion===version);
ok("API domain present",read("registry/domains.json").domains.some(x=>x.id==="api"));
for(const t of ["api-schema","api-group","api-operation"])ok(`API type ${t}`,read("registry/types.json").types.some(x=>x.id===t));
console.log(`Phase 18 validation\nAPI groups: ${api.groups.length}\nAPI operations: ${api.operations.length}\nAPI schemas: ${api.schemas.length}\nAPI errors: ${api.errorCodes.length}\nRegistry entries: ${reg.items.length}\nPasses: ${pass}\nFailures: ${fail.length}`);
if(fail.length){console.error(fail.slice(0,120).join("\n"));process.exit(1)}
console.log("PASS");
