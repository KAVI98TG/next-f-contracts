import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root=path.resolve(process.cwd()), failures=[], passes=[];
const check=(name,ok,detail="")=>ok?passes.push(name):failures.push(`${name}${detail?`: ${detail}`:""}`);
const read=(rel)=>fs.readFileSync(path.join(root,rel),"utf8");
const json=(rel)=>{try{return JSON.parse(read(rel));}catch(e){failures.push(`Valid JSON ${rel}: ${e.message}`);return null;}};
const version=read("VERSION").trim();
check("Repository version includes Phase 3 or later",/^0\.(4|5)\.0$/.test(version),version);
const required=["standards/11-primitive-field-standard.md","registry/fields/categories.json","registry/fields/configuration-properties.json","registry/fields/validation-rules.json","registry/fields/field-definition.schema.json","registry/fields/index.json","js/field-registry-engine.js","js/generated-fields.js","css/fields.css","scripts/sync-field-registry.mjs","checks/phase-3-acceptance.json"];
required.forEach((rel)=>check(`File exists: ${rel}`,fs.existsSync(path.join(root,rel))));
const categories=json("registry/fields/categories.json"), config=json("registry/fields/configuration-properties.json"), validation=json("registry/fields/validation-rules.json"), index=json("registry/fields/index.json"), registry=json("registry/registry.json"), domains=json("registry/domains.json"), types=json("registry/types.json"), acceptance=json("checks/phase-3-acceptance.json");
for(const [name,obj] of Object.entries({categories,config,validation,index,registry,domains,types})) if(obj) check(`${name} version matches repository`,obj.registryVersion===version,obj.registryVersion);
if(index&&categories&&config&&validation){
 const fields=index.fields, ids=fields.map(x=>x.$id), catIds=new Set(categories.categories.map(x=>x.id)), cfgIds=new Set(config.properties.map(x=>x.id)), valIds=new Set(validation.rules.map(x=>x.id));
 check("Exactly 33 primitive fields",fields.length===33,fields.length);
 check("definitionCount is 33",index.definitionCount===33,index.definitionCount);
 check("Field IDs unique",ids.length===new Set(ids).size);
 check("Field IDs follow fields.*",ids.every(id=>/^fields\.[a-z][A-Za-z0-9]*$/.test(id)));
 const expected=["fields.text","fields.textarea","fields.richText","fields.integer","fields.decimal","fields.currency","fields.percentage","fields.boolean","fields.date","fields.time","fields.dateTime","fields.email","fields.phone","fields.url","fields.slug","fields.color","fields.select","fields.multiSelect","fields.tag","fields.relation","fields.image","fields.gallery","fields.video","fields.audio","fields.file","fields.document","fields.location","fields.coordinates","fields.address","fields.code","fields.json","fields.hidden","fields.readonly"];
 expected.forEach(id=>check(`Expected primitive exists: ${id}`,ids.includes(id)));
 const defDir=path.join(root,"registry/fields/definitions");
 const files=fs.readdirSync(defDir).filter(x=>x.endsWith(".json"));
 check("Exactly 33 authoritative definition files",files.length===33,files.length);
 const sourceIds=[];
 for(const file of files){const def=json(`registry/fields/definitions/${file}`);if(def)sourceIds.push(def.$id);}
 check("Index fields match definition files",ids.slice().sort().join("|")===sourceIds.slice().sort().join("|"));
 for(const field of fields){
  for(const key of ["$id","name","version","status","category","description"]) check(`${field.$id} has ${key}`,typeof field[key]==="string"&&field[key].length>0);
  check(`${field.$id} stable in Phase 3`,field.status==="stable");
  check(`${field.$id} category controlled`,catIds.has(field.category),field.category);
  check(`${field.$id} value metadata`,field.value&&typeof field.value.jsonType==="string"&&typeof field.value.canonical==="string"&&typeof field.value.absence==="string");
  check(`${field.$id} CMS metadata`,field.cms&&typeof field.cms.editor==="string"&&typeof field.cms.supportsHelpText==="boolean");
  for(const cap of ["searchable","filterable","sortable","localizable","revisionTracked"]) check(`${field.$id} capability ${cap}`,typeof field.capabilities?.[cap]==="boolean");
  check(`${field.$id} supportedConfig unique`,field.supportedConfig.length===new Set(field.supportedConfig).size);
  field.supportedConfig.forEach(id=>check(`${field.$id} config resolves ${id}`,cfgIds.has(id),id));
  check(`${field.$id} validationRules unique`,field.validationRules.length===new Set(field.validationRules).size);
  field.validationRules.forEach(id=>check(`${field.$id} validation resolves ${id}`,valIds.has(id),id));
  check(`${field.$id} examples object`,field.examples&&Array.isArray(field.examples.valid)&&Array.isArray(field.examples.invalid));
  check(`${field.$id} notes array`,Array.isArray(field.notes));
 }
 const rich=fields.find(x=>x.$id==="fields.richText"); check("Rich Text is structured object",rich?.value?.jsonType==="object"); check("Rich Text rejects executable HTML example",JSON.stringify(rich?.examples?.invalid??[]).includes("script"));
 const currency=fields.find(x=>x.$id==="fields.currency"); check("Currency shape has amount",currency?.value?.shape?.amount==="number"); check("Currency shape has ISO code",String(currency?.value?.shape?.currency).includes("ISO 4217"));
 const relation=fields.find(x=>x.$id==="fields.relation"); check("Relation validates existence",relation?.validationRules?.includes("relationExists")); check("Relation supports target config",relation?.supportedConfig?.includes("relationshipTarget"));
 const hidden=fields.find(x=>x.$id==="fields.hidden"); check("Hidden documents security boundary",hidden?.notes?.some(x=>x.includes("not a security control")));
 const readonly=fields.find(x=>x.$id==="fields.readonly"); check("Readonly validates write policy",readonly?.validationRules?.includes("readonly"));
}
if(registry&&index){
 const regIds=new Set(registry.items.map(x=>x.id));
 index.fields.forEach(field=>check(`Main registry indexes ${field.$id}`,regIds.has(field.$id)));
 const fieldItems=registry.items.filter(x=>x.domain==="fields"&&x.type==="field");
 check("Main registry has exactly 33 field items",fieldItems.length===33,fieldItems.length);
 check("No Phase 4+ business schemas fabricated",!registry.items.some(x=>x.phase>=4&&["content","commerce","seo","forms","marketing"].includes(x.domain)));
}
const rawIndex=read("registry/fields/index.json"), digest=crypto.createHash("sha256").update(rawIndex).digest("hex"), generated=read("js/generated-fields.js");
check("Generated fields declares source",generated.includes("Source: registry/fields/index.json"));
check("Generated fields checksum matches",generated.includes(digest),digest);
check("Generated fields exports data",generated.includes("export const GENERATED_FIELDS ="));
const route=read("js/routes.js"), router=read("js/router.js"), pages=read("js/pages.js"), html=read("index.html");
check("Fields route available",route.includes('path: "/registry/fields"')&&route.includes('phase: 3, status: "available"'));
check("Fields renderer exists",pages.includes("renderFieldsIndex"));
check("Primitive field detail renderer exists",pages.includes("renderPrimitiveFieldDetail"));
check("Field filter binding exists",router.includes("bindFieldList"));
check("Field registry engine loads authoritative JSON",read("js/field-registry-engine.js").includes('fetch("./registry/fields/index.json"'));
check("Field registry generated fallback exists",read("js/field-registry-engine.js").includes("GENERATED_FIELDS"));
check("Fields CSS loaded",html.includes('./css/fields.css'));
check("Portal version shown",html.includes(`v${version}`));
if(acceptance){check("Phase 3 acceptance version is present",typeof acceptance.version==="string"&&acceptance.version.length>0);check("All Phase 3 acceptance checks passed",acceptance.checks.every(x=>x.passed===true));}
for(const rel of ["js/app.js","js/router.js","js/routes.js","js/pages.js","js/search.js","js/utils.js","js/registry-engine.js","js/generated-registry.js","js/field-registry-engine.js","js/generated-fields.js","scripts/generate-registry-bootstrap.mjs","scripts/sync-field-registry.mjs"]){const r=spawnSync(process.execPath,["--check",path.join(root,rel)],{encoding:"utf8"});check(`JavaScript syntax valid: ${rel}`,r.status===0,r.stderr.trim());}
const css=fs.readdirSync(path.join(root,"css")).filter(x=>x.endsWith(".css")).map(x=>read(`css/${x}`)).join("\n").toLowerCase();
check("Light-only preserved",!css.includes("prefers-color-scheme: dark"));check("No backdrop-filter",!css.includes("backdrop-filter"));check("No 3D transforms",!css.includes("perspective(")&&!css.includes("rotatex(")&&!css.includes("rotatey("));
console.log("NEXT F Contracts Phase 3 validation");console.log(`Version: ${version}`);console.log(`Primitive fields: ${index?.fields?.length??0}`);console.log(`Registry items: ${registry?.items?.length??0}`);console.log(`Passes: ${passes.length}`);console.log(`Failures: ${failures.length}`);if(failures.length){console.error("Failures:");failures.forEach(x=>console.error(`- ${x}`));process.exit(1);}console.log("PASS - Phase 3 Primitive Field Registry is internally consistent.");
