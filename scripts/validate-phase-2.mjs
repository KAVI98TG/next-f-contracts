import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const failures = [], passes = [];
const check = (name, condition, detail="") => condition ? passes.push(name) : failures.push(`${name}${detail ? `: ${detail}` : ""}`);
const read = (rel) => fs.readFileSync(path.join(root,rel),"utf8");
const readJson = (rel) => { try { return JSON.parse(read(rel)); } catch(error) { failures.push(`Valid JSON: ${rel}: ${error.message}`); return null; } };
const version = read("VERSION").trim();
check("Repository version preserves Phase 2 or later", /^0\.(?:[3-9]|[1-9]\d+)\.\d+$/.test(version) || /^[1-9]\d*\.\d+\.\d+$/.test(version), version);

const required=[
 "registry/registry.json","registry/registry-meta.json","registry/domains.json","registry/types.json","registry/statuses.json",
 "standards/10-registry-engine-standard.md","js/registry-engine.js","js/generated-registry.js","css/registry.css",
 "scripts/generate-registry-bootstrap.mjs","checks/phase-2-acceptance.json","checks/phase-2-acceptance.md"
];
required.forEach((rel)=>check(`File exists: ${rel}`,fs.existsSync(path.join(root,rel))));

const registry=readJson("registry/registry.json");
const meta=readJson("registry/registry-meta.json");
const domains=readJson("registry/domains.json");
const types=readJson("registry/types.json");
const statuses=readJson("registry/statuses.json");
const nav=readJson("registry/portal-navigation.json");
const acceptance=readJson("checks/phase-2-acceptance.json");

for (const [name,obj] of Object.entries({registry,meta,domains,types,statuses})) if(obj) check(`${name} version matches repository`,obj.registryVersion===version);
if (nav) check("Portal navigation version matches repository",nav.portalVersion===version);

if (registry && domains && types && statuses && meta) {
 const items=registry.items;
 const ids=items.map((x)=>x.id);
 const domainIds=new Set(domains.domains.map((x)=>x.id));
 const typeIds=new Set(types.types.map((x)=>x.id));
 const statusIds=new Set(statuses.statuses.map((x)=>x.id));
 const allowedRelationships=new Set(meta.allowedRelationshipTypes);
 check("Registry contains entries",items.length>0);
 check("Registry IDs unique",ids.length===new Set(ids).size);
 check("Registry IDs use lowercase dot notation",ids.every((id)=>/^[a-z][A-Za-z0-9]*(?:\.[a-z][A-Za-z0-9]*)+$/.test(id)));
 for (const item of items) {
   for (const key of ["id","name","domain","type","version","status","description","source","introducedIn"]) check(`${item.id} has ${key}`,typeof item[key]==="string" && item[key].length>0);
   check(`${item.id} has integer phase`,Number.isInteger(item.phase) && item.phase>=0);
   check(`${item.id} tags array`,Array.isArray(item.tags));
   check(`${item.id} relationships array`,Array.isArray(item.relationships));
   check(`${item.id} permissions array`,Array.isArray(item.permissions));
   check(`${item.id} events array`,Array.isArray(item.events));
   check(`${item.id} domain is controlled`,domainIds.has(item.domain),item.domain);
   check(`${item.id} type is controlled`,typeIds.has(item.type),item.type);
   check(`${item.id} status is controlled`,statusIds.has(item.status),item.status);
   check(`${item.id} source exists`,fs.existsSync(path.join(root,item.source)),item.source);
   for (const rel of item.relationships) {
     check(`${item.id} relationship type allowed`,allowedRelationships.has(rel.type),rel.type);
     check(`${item.id} relationship target resolves`,ids.includes(rel.target),rel.target);
     check(`${item.id} does not self-reference`,rel.target!==item.id,rel.target);
   }
 }
 check("Phase 3+ fake business schemas not indexed",!items.some((x)=>x.phase>=3 && ["content","commerce","seo","forms","marketing"].includes(x.domain)));
}

const rawRegistry=read("registry/registry.json");
const expectedDigest=crypto.createHash("sha256").update(rawRegistry).digest("hex");
const generated=read("js/generated-registry.js");
check("Generated fallback declares source path",generated.includes("Source: registry/registry.json"));
check("Generated fallback SHA-256 matches source",generated.includes(expectedDigest),expectedDigest);
check("Generated fallback exports registry",generated.includes("export const GENERATED_REGISTRY ="));

const index=read("index.html");
check("Registry CSS loaded",index.includes('./css/registry.css'));
check("Registry Index navigation present",index.includes('href="#/registry" data-route-link="registry-index"'));
check("Search note describes registry coverage",index.includes("Search covers portal navigation, registry entries"));
check("Toast live region present",index.includes('data-toast-region aria-live="polite"'));
const routes=read("js/routes.js");
check("Registry Index route metadata exists",routes.includes('path: "/registry"'));
const router=read("js/router.js");
check("Dynamic Registry Detail route exists",router.includes('/registry/item/'));
check("Unknown registry item renderer exists",router.includes("renderRegistryMissing"));
const engine=read("js/registry-engine.js");
check("Registry supports search",engine.includes("search(query"));
check("Registry supports incoming relationships",engine.includes("incoming(id)"));
check("Registry parses URL filters",engine.includes("parseRegistryFilters"));
check("Registry builds URL query",engine.includes("buildRegistryQuery"));
check("Registry loader prefers authoritative JSON",engine.includes('fetch("./registry/registry.json"'));
check("Registry loader has generated fallback",engine.includes("GENERATED_REGISTRY"));
const search=read("js/search.js");
check("Global search uses registry quick search",search.includes("registry.quickSearch"));

if (acceptance) {
 check("Phase 2 acceptance baseline remains V0.3.0",acceptance.version==="0.3.0");
 check("All Phase 2 acceptance checks passed",acceptance.checks.every((x)=>x.passed===true));
}

for (const rel of ["js/app.js","js/router.js","js/routes.js","js/pages.js","js/search.js","js/utils.js","js/registry-engine.js","js/generated-registry.js","scripts/generate-registry-bootstrap.mjs"]) {
 const result=spawnSync(process.execPath,["--check",path.join(root,rel)],{encoding:"utf8"});
 check(`JavaScript syntax valid: ${rel}`,result.status===0,result.stderr.trim());
}

const allCss=fs.readdirSync(path.join(root,"css")).filter((x)=>x.endsWith(".css")).map((x)=>read(`css/${x}`)).join("\n").toLowerCase();
check("Light-only rule preserved",!allCss.includes("prefers-color-scheme: dark"));
check("No backdrop-filter introduced",!allCss.includes("backdrop-filter"));

console.log("NEXT F Contracts Phase 2 validation");
console.log(`Version: ${version}`);
console.log(`Registry items: ${registry?.items?.length ?? 0}`);
console.log(`Passes: ${passes.length}`); console.log(`Failures: ${failures.length}`);
if(failures.length){console.error("Failures:");failures.forEach((f)=>console.error(`- ${f}`));process.exit(1);}
console.log("PASS - Phase 2 Registry Engine is internally consistent.");
