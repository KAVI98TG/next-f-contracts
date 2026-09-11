import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const failures = [];
const passes = [];
const check = (name, cond, detail="") => cond ? passes.push(name) : failures.push(`${name}${detail?`: ${detail}`:""}`);

function walk(dir){
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap((e)=>{
    const p=path.join(dir,e.name);
    return e.isDirectory()?walk(p):[p];
  });
}

const files = walk(root);
for (const file of files.filter((f)=>f.endsWith(".json"))) {
  try { JSON.parse(fs.readFileSync(file,"utf8")); passes.push(`JSON: ${path.relative(root,file)}`); }
  catch (e) { failures.push(`JSON parse: ${path.relative(root,file)}: ${e.message}`); }
}

for (const file of files.filter((f)=>f.endsWith(".js")||f.endsWith(".mjs"))) {
  const r=spawnSync(process.execPath,["--check",file],{encoding:"utf8"});
  check(`JS syntax: ${path.relative(root,file)}`,r.status===0,(r.stderr||"").trim());
}

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const ids=[...html.matchAll(/\sid=["']([^"']+)["']/g)].map((m)=>m[1]);
check("HTML IDs unique", ids.length===new Set(ids).size, ids.filter((x,i)=>ids.indexOf(x)!==i).join(","));
const localRefs=[...html.matchAll(/(?:href|src)=["'](\.\/[^"][^"']*)["']/g)].map((m)=>m[1].split(/[?#]/)[0]);
for(const ref of new Set(localRefs)) check(`HTML asset exists: ${ref}`,fs.existsSync(path.join(root,ref.slice(2))));

const registry=JSON.parse(fs.readFileSync(path.join(root,"registry/registry.json"),"utf8"));
const meta=JSON.parse(fs.readFileSync(path.join(root,"registry/registry-meta.json"),"utf8"));
const allowed=new Set(meta.allowedRelationshipTypes);
for(const item of registry.items){
  check(`Registry source exists: ${item.id}`,fs.existsSync(path.join(root,item.source)),item.source);
  for(const rel of item.relationships||[]) check(`Relationship type allowed: ${item.id}.${rel.type}`,allowed.has(rel.type),rel.type);
}

const css=files.filter((f)=>f.endsWith(".css")).map((f)=>fs.readFileSync(f,"utf8")).join("\n");
check("No dark color-scheme media query",!/@media\s*\([^)]*prefers-color-scheme\s*:\s*dark/i.test(css));
check("No backdrop-filter",!/backdrop-filter\s*:/i.test(css));
check("No CSS perspective/3D transform",!/perspective\s*:|rotate[XYZ]\s*\(/i.test(css));

console.log("NEXT F Contracts Phase 7 repository smoke test");
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if(failures.length){for(const f of failures)console.error(`- ${f}`);process.exit(1);}
console.log("PASS - repository structure, syntax, references and light-only UI constraints are valid.");
