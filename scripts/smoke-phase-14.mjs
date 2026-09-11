import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root=path.resolve(process.cwd());
const failures=[],passes=[];
const check=(n,c,d="")=>c?passes.push(n):failures.push(`${n}${d?`: ${d}`:""}`);
const index=fs.readFileSync(path.join(root,"index.html"),"utf8");
const routes=fs.readFileSync(path.join(root,"js/routes.js"),"utf8");
const router=fs.readFileSync(path.join(root,"js/router.js"),"utf8");

check("Index uses light color scheme",index.includes('content="light"'));
check("Index includes webhook CSS",index.includes("./css/webhooks.css"));
check("Index shows V0.15.0",index.includes("v0.15.0"));
check("Webhook sidebar link exists",index.includes('#/events/webhooks'));
check("Webhook route available",routes.includes('id: "events-webhooks"')&&routes.includes('status: "available"'));
check("Webhook index renderer wired",router.includes('route.path === "/events/webhooks"'));
check("Webhook registry engine imported",router.includes("webhooks-registry-engine.js"));
check("Webhook page renderer imported",router.includes("webhooks-pages.js"));
check("No backdrop-filter in webhook CSS",!fs.readFileSync(path.join(root,"css/webhooks.css"),"utf8").includes("backdrop-filter"));
check("No dark mode media query in webhook CSS",!fs.readFileSync(path.join(root,"css/webhooks.css"),"utf8").includes("prefers-color-scheme: dark"));

const files=["js/app.js","js/router.js","js/routes.js","js/webhooks-registry-engine.js","js/webhooks-pages.js","js/generated-webhooks.js","scripts/sync-webhooks-registry.mjs","scripts/validate-phase-14.mjs"];
for(const f of files){
 const r=spawnSync(process.execPath,["--check",path.join(root,f)],{encoding:"utf8"});
 check(`JavaScript syntax ${f}`,r.status===0,(r.stderr||"").trim());
}

const htmlIds=[...index.matchAll(/\sid="([^"]+)"/g)].map(x=>x[1]);
check("No duplicate HTML IDs",new Set(htmlIds).size===htmlIds.length);

const assetRefs=[...index.matchAll(/(?:href|src)="\.\/([^"#?]+)"/g)].map(x=>x[1]).filter(x=>!x.startsWith("http"));
for(const ref of assetRefs)check(`Local asset exists ${ref}`,fs.existsSync(path.join(root,ref)),ref);

const jsonFiles=[];
function walk(dir){for(const ent of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,ent.name);if(ent.isDirectory())walk(p);else if(ent.name.endsWith(".json"))jsonFiles.push(p);}}
walk(path.join(root,"registry"));
for(const p of jsonFiles){try{JSON.parse(fs.readFileSync(p,"utf8"));passes.push(`Valid JSON ${path.relative(root,p)}`);}catch(e){failures.push(`Invalid JSON ${path.relative(root,p)}: ${e.message}`);}}

console.log("NEXT F Contracts Phase 14 smoke test");
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
console.log(`JSON files checked: ${jsonFiles.length}`);
if(failures.length){console.error("\nFailures:");for(const x of failures)console.error(`- ${x}`);process.exit(1);}
console.log("\nPASS - Portal/runtime smoke checks completed.");
