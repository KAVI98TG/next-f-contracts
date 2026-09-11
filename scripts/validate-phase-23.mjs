import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { GlobalSearchEngine } from "../js/global-search-engine.js";

const root=process.cwd(),pass=[],fail=[];
const ok=(name,condition,detail="")=>condition?pass.push(name):fail.push(`${name}${detail?`: ${detail}`:""}`);
const readJson=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),"utf8"));
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const parts=version.split(".").map(Number),currentPhase=parts[0]===0?parts[1]-1:23;
ok("Repository includes Phase 23 or later",parts[0]>0||parts[1]>=24,version);

for(const rel of [
  "standards/31-global-search-standard.md",
  "registry/search/search-config.json",
  "registry/search/search-index.schema.json",
  "registry/search/search-index.json",
  "js/generated-search-index.js",
  "js/global-search-engine.js",
  "js/search-pages.js",
  "css/search.css",
  "scripts/sync-global-search.mjs",
  "scripts/smoke-phase-23.mjs"
]) ok(`Required Phase 23 file ${rel}`,fs.existsSync(path.join(root,rel)));

const config=readJson("registry/search/search-config.json");
const index=readJson("registry/search/search-index.json");
const registry=readJson("registry/registry.json");
const domains=readJson("registry/domains.json");
const nav=readJson("registry/portal-navigation.json");

ok("Search config version",config.registryVersion===version);
ok("Search index version",index.registryVersion===version);
ok("Main registry version",registry.registryVersion===version);
ok("Search domain registered",domains.domains.some(x=>x.id==="search"));
ok("Search standard registered",registry.items.some(x=>x.id==="search.globalSearchStandard"));
ok("Search index registered",registry.items.some(x=>x.id==="search.searchIndex"));
ok("Search config registered",registry.items.some(x=>x.id==="search.searchConfiguration"));

const docs=index.documents;
const docIds=docs.map(x=>x.id);
ok("Search document IDs unique",new Set(docIds).size===docIds.length,`${docIds.length-new Set(docIds).size}`);
ok("Search index count exact",index.stats.documents===docs.length,`${index.stats.documents}/${docs.length}`);
for(const kind of ["registry","field","route","document"]) ok(`Search kind indexed ${kind}`,docs.some(x=>x.kind===kind));
ok("All Registry items indexed",registry.items.every(x=>docs.some(d=>d.kind==="registry"&&d.machineId===x.id)));
for(const field of docs.filter(x=>x.kind==="field")) ok(`Field parent exists ${field.machineId}`,registry.items.some(x=>x.id===field.parentId),field.parentId);
for(const doc of docs.filter(x=>x.kind==="document")) ok(`Documentation source exists ${doc.source}`,fs.existsSync(path.join(root,doc.source)),doc.source);

const overview=nav.groups.find(x=>x.id==="overview");
ok("Overview is current coordinated phase",overview?.items.some(x=>x.id==="overview"&&x.phase===currentPhase&&x.status==="current"));
ok("Global Search nav available",overview?.items.some(x=>x.id==="global-search"&&x.path==="/search"&&x.phase===23&&x.status==="available"));

const engine=new GlobalSearchEngine(index,config,"validation");
function top(query){return engine.search(query,{}, {limit:20});}
let result=top("content.blogPost");ok("Exact BlogPost ranks first",result.results[0]?.doc.machineId==="content.blogPost",result.results[0]?.doc.machineId);
result=top("order.paid");ok("Exact order.paid ranks first",result.results[0]?.doc.machineId==="order.paid",result.results[0]?.doc.machineId);
result=top("commerce.orders.manage");ok("Exact permission ranks first",result.results[0]?.doc.machineId==="commerce.orders.manage",result.results[0]?.doc.machineId);
result=top("blog title");ok("Natural blog title finds BlogPost title field",result.results.slice(0,10).some(x=>x.doc.kind==="field"&&x.doc.parentId==="content.blogPost"&&x.doc.title==="title"));
result=top("facebook tracking");ok("Facebook tracking resolves Meta integration",result.results.slice(0,10).some(x=>x.doc.machineId==="integrations.meta"));
result=top("ecommerce checkout");ok("Ecommerce checkout resolves Commerce",result.results.slice(0,10).some(x=>String(x.doc.machineId).startsWith("commerce.checkout")||x.doc.machineId==="modules.capability.commerce.checkout"));
result=top("google analytics");ok("Google Analytics connector discoverable",result.results.slice(0,10).some(x=>x.doc.machineId==="integrations.googleAnalytics4"));
result=top("webhook signature");ok("Webhook signature policy discoverable",result.results.slice(0,10).some(x=>x.doc.machineId==="webhooks.signaturePolicy"));
result=top("contnt blogpst");ok("Bounded fuzzy matching returns Blog Post",result.results.slice(0,20).some(x=>x.doc.machineId==="content.blogPost"));

const generated=fs.readFileSync(path.join(root,"js/generated-search-index.js"),"utf8");
const digest=crypto.createHash("sha256").update(fs.readFileSync(path.join(root,"registry/search/search-index.json"))).digest("hex");
ok("Generated search checksum current",generated.includes(digest));
const generatedRegistry=fs.readFileSync(path.join(root,"js/generated-registry.js"),"utf8");
const regDigest=crypto.createHash("sha256").update(fs.readFileSync(path.join(root,"registry/registry.json"))).digest("hex");
ok("Generated registry checksum current",generatedRegistry.includes(regDigest));

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
ok("Global Search navigation present",html.includes('href="#/search"'));
ok("Search stylesheet present",html.includes("css/search.css"));
ok("Search summary present",html.includes("data-search-summary"));
ok("View all search control present",html.includes("data-search-view-all"));
ok("Current release visible",html.includes(`v${version}`));
ok("Current phase sidebar visible",html.includes(`Phase ${currentPhase}`));
ok("Light theme preserved",html.includes('<meta name="color-scheme" content="light">'));
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);ok("No duplicate HTML IDs",new Set(ids).size===ids.length);
const css=fs.readFileSync(path.join(root,"css/search.css"),"utf8");ok("Search CSS has no backdrop blur",!css.includes("backdrop-filter"));ok("Search CSS has no dark theme",!css.includes("prefers-color-scheme: dark"));

const regIds=new Set(registry.items.map(x=>x.id));
for(const item of registry.items) for(const rel of item.relationships??[]) ok(`Relationship target ${item.id}->${rel.target}`,regIds.has(rel.target),rel.target);
for(const item of registry.items) if(item.source) ok(`Registry source exists ${item.id}`,fs.existsSync(path.join(root,item.source)),item.source);

let jsonCount=0;
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
for(const file of walk(path.join(root,"registry")).filter(x=>x.endsWith(".json"))){try{JSON.parse(fs.readFileSync(file,"utf8"));jsonCount++;}catch(error){fail.push(`JSON ${path.relative(root,file)}: ${error.message}`);}}

console.log(`NEXT F Contracts Phase 23 validation\nVersion: ${version}\nSearch documents: ${docs.length}\nRegistry records: ${index.stats.registry}\nField records: ${index.stats.fields}\nRoute records: ${index.stats.routes}\nDocumentation records: ${index.stats.documentation}\nRegistry entries: ${registry.items.length}\nJSON files checked: ${jsonCount}\nPasses: ${pass.length}\nFailures: ${fail.length}`);
if(fail.length){console.error("\nFailures:\n"+fail.slice(0,200).map(x=>`- ${x}`).join("\n"));if(fail.length>200)console.error(`... ${fail.length-200} more`);process.exit(1);}
console.log("\nPASS - Global Search is internally consistent.");
