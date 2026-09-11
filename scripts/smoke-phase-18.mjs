import fs from "node:fs";import path from "node:path";import {execFileSync} from "node:child_process";
const root=process.cwd();let pass=0;const fail=[];const ok=(n,c,d="")=>{if(c)pass++;else fail.push(`${n}${d?`: ${d}`:""}`)};
const must=["index.html","404.html","css/api.css","js/api-registry-engine.js","js/api-pages.js","js/generated-api.js","registry/api/index.json","standards/26-api-contract-standard.md"];
for(const f of must)ok(`File ${f}`,fs.existsSync(path.join(root,f)));
const html=fs.readFileSync(path.join(root,"index.html"),"utf8"),routes=fs.readFileSync(path.join(root,"js/routes.js"),"utf8"),router=fs.readFileSync(path.join(root,"js/router.js"),"utf8"),app=fs.readFileSync(path.join(root,"js/app.js"),"utf8");
ok("HTML version",html.includes("v0.19.0"));
ok("API CSS loaded",html.includes("./css/api.css"));
ok("API route available",routes.includes('path: "/platform/api"')&&routes.includes('phase: 18, status: "available"'));
ok("Router API rendering",router.includes('renderApiIndex')&&router.includes('parseApiFilters'));
ok("App API loading",app.includes("loadApiRegistry")&&app.includes("apiRegistry"));
ok("No backdrop filter",!html.includes("backdrop-filter"));
for(const f of fs.readdirSync(path.join(root,"js")).filter(x=>x.endsWith(".js"))){try{execFileSync(process.execPath,["--check",path.join(root,"js",f)],{stdio:"pipe"});pass++;}catch(e){fail.push(`JS syntax ${f}`)}}
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);ok("No duplicate HTML ids",ids.length===new Set(ids).size);
const reg=JSON.parse(fs.readFileSync(path.join(root,"registry/registry.json"),"utf8"));
for(const item of reg.items){if(item.source)ok(`Registry source ${item.id}`,fs.existsSync(path.join(root,item.source)),item.source);}
console.log(`Phase 18 smoke\nPasses: ${pass}\nFailures: ${fail.length}`);
if(fail.length){console.error(fail.slice(0,80).join("\n"));process.exit(1)}console.log("PASS");
