import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
const root=path.resolve(process.cwd());
const files=[
 "index.html","404.html","js/app.js","js/router.js","js/routes.js",
 "js/commerce-rules-engine.js","js/commerce-rules-pages.js","js/generated-commerce-rules.js",
 "css/commerce-rules.css","registry/commerce/rules/index.json",
 "registry/commerce/rules/state-machines.json","registry/commerce/rules/command-policies.json",
 "registry/commerce/rules/error-codes.json","standards/20-commerce-rules-standard.md"
];
const failures=[],passes=[];
const check=(n,v,d="")=>v?passes.push(n):failures.push(`${n}${d?`: ${d}`:""}`);
for(const rel of files)check(`Exists ${rel}`,fs.existsSync(path.join(root,rel)));
for(const rel of ["js/app.js","js/router.js","js/routes.js","js/commerce-rules-engine.js","js/commerce-rules-pages.js","js/generated-commerce-rules.js"]){
 const r=spawnSync(process.execPath,["--check",path.join(root,rel)],{encoding:"utf8"});
 check(`JavaScript syntax ${rel}`,r.status===0,(r.stderr||"").trim());
}
const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(x=>x[1]);
check("No duplicate HTML IDs",ids.length===new Set(ids).size);
const local=[...html.matchAll(/(?:href|src)="(\.\/[^"#?]+)"/g)].map(x=>x[1]);
for(const rel of local)check(`Local asset exists ${rel}`,fs.existsSync(path.resolve(root,rel)),rel);
check("Commerce Rules route in sidebar",html.includes('data-route-link="registry-commerce-rules"'));
check("Light-only token remains",fs.readFileSync(path.join(root,"css/tokens.css"),"utf8").includes("color-scheme: light"));
console.log("\nNEXT F Phase 12 repository smoke test");
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if(failures.length){console.error(failures.map(x=>`- ${x}`).join("\n"));process.exit(1)}
console.log("\nPASS - repository and portal wiring smoke test.");
