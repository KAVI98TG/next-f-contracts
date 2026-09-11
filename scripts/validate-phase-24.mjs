import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { RelationshipExplorerEngine } from "../js/relationship-explorer-engine.js";

const root=process.cwd(),pass=[],fail=[];
const ok=(name,condition,detail="")=>condition?pass.push(name):fail.push(`${name}${detail?`: ${detail}`:""}`);
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),"utf8"));
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const sha=(buf)=>crypto.createHash("sha256").update(buf).digest("hex");
const parts=version.split(".").map(Number),currentPhase=parts[0]===0?parts[1]-1:24;
ok("Repository includes Phase 24 or later",parts[0]>0||parts[1]>=25,version);

for(const rel of [
 "standards/32-relationship-explorer-standard.md",
 "registry/relationships/relationship-types.json",
 "registry/relationships/relationship-config.json",
 "registry/relationships/relationship-index.schema.json",
 "registry/relationships/relationship-index.json",
 "js/generated-relationships.js",
 "js/relationship-explorer-engine.js",
 "js/relationship-pages.js",
 "css/relationships.css",
 "scripts/sync-relationships-registry.mjs",
 "scripts/smoke-phase-24.mjs"
])ok(`Required Phase 24 file ${rel}`,fs.existsSync(path.join(root,rel)));

const registry=read("registry/registry.json"),index=read("registry/relationships/relationship-index.json"),types=read("registry/relationships/relationship-types.json"),config=read("registry/relationships/relationship-config.json"),domains=read("registry/domains.json"),meta=read("registry/registry-meta.json"),nav=read("registry/portal-navigation.json");
ok("Main registry current version",registry.registryVersion===version,registry.registryVersion);
ok("Relationship index current version",index.registryVersion===version,index.registryVersion);
ok("Relationship types current version",types.registryVersion===version,types.registryVersion);
ok("Relationship config current version",config.registryVersion===version,config.registryVersion);
ok("Registry metadata current version",meta.registryVersion===version,meta.registryVersion);
ok("Relationships domain registered",domains.domains.some(x=>x.id==="relationships"));
for(const id of ["relationships.relationshipExplorerStandard","relationships.relationshipIndex","relationships.relationshipTypeVocabulary","relationships.relationshipConfiguration"])ok(`Registry item ${id}`,registry.items.some(x=>x.id===id));
const overview=nav.groups.find(x=>x.id==="overview"),registryNav=nav.groups.find(x=>x.id==="registry");
ok("Overview is current coordinated phase",overview?.items.some(x=>x.id==="overview"&&x.phase===currentPhase&&x.status==="current"));
ok("Relationship Explorer navigation available",registryNav?.items.some(x=>x.id==="registry-relationships"&&x.path==="/registry/relationships"&&x.phase===24&&x.status==="available"));

const allowed=new Set(meta.allowedRelationshipTypes??[]),typeIds=new Set(types.types.map(x=>x.id));
for(const type of allowed)ok(`Allowed relationship type documented ${type}`,typeIds.has(type));
for(const type of ["associatedPermission","associatedEvent"])ok(`Graph-only relationship type ${type}`,types.types.some(x=>x.id===type&&x.graphOnly===true));
ok("Relationship type IDs unique",typeIds.size===types.types.length);
ok("Relationship families controlled",types.types.every(x=>types.families.includes(x.family)));

const ids=new Set(registry.items.map(x=>x.id));
ok("Registry IDs unique",ids.size===registry.items.length);
const nodeIds=new Set(index.nodes.map(x=>x.id));
ok("Graph nodes exactly Registry items",nodeIds.size===ids.size&&[...ids].every(x=>nodeIds.has(x)),`${nodeIds.size}/${ids.size}`);
ok("Graph node IDs unique",nodeIds.size===index.nodes.length);
const edgeIds=new Set(index.edges.map(x=>x.id));ok("Graph edge IDs unique",edgeIds.size===index.edges.length);
for(const edge of index.edges){ok(`Edge source exists ${edge.id}`,ids.has(edge.source),edge.source);ok(`Edge target exists ${edge.id}`,ids.has(edge.target),edge.target);const def=types.types.find(x=>x.id===edge.type);ok(`Edge type exists ${edge.id}`,!!def,edge.type);if(def)ok(`Edge family matches ${edge.id}`,edge.family===def.family,`${edge.family}/${def.family}`);}

let explicit=0,perms=0,eventAssoc=0,symbolicEvents=0,unresolvedExplicit=0;
for(const item of registry.items){for(const rel of item.relationships??[]){explicit++;if(!ids.has(rel.target))unresolvedExplicit++;ok(`Explicit type allowed ${item.id}:${rel.type}`,allowed.has(rel.type),rel.type);}for(const p of item.permissions??[]){perms++;ok(`Permission association resolves ${item.id}->${p}`,ids.has(p),p);}for(const e of item.events??[]){if(e===item.id&&item.type==="event")continue;if(ids.has(e))eventAssoc++;else symbolicEvents++;}}
ok("Explicit edge count exact",index.stats.explicitEdges===explicit,`${index.stats.explicitEdges}/${explicit}`);
ok("Permission edge count exact",index.stats.permissionAssociations===perms,`${index.stats.permissionAssociations}/${perms}`);
ok("Event edge count exact",index.stats.eventAssociations===eventAssoc,`${index.stats.eventAssociations}/${eventAssoc}`);
ok("Symbolic Event associations exact",index.stats.symbolicAssociations===symbolicEvents,`${index.stats.symbolicAssociations}/${symbolicEvents}`);
ok("Unresolved explicit targets zero",index.stats.unresolvedExplicitTargets===0&&unresolvedExplicit===0,`${index.stats.unresolvedExplicitTargets}/${unresolvedExplicit}`);
ok("Total edge count exact",index.stats.edges===explicit+perms+eventAssoc,`${index.stats.edges}/${explicit+perms+eventAssoc}`);
ok("Node count exact",index.stats.nodes===registry.items.length,`${index.stats.nodes}/${registry.items.length}`);
ok("Relationship type count exact",index.stats.relationshipTypes===types.types.length);

const graphSelf=index.edges.filter(e=>e.source===e.target);ok("Only canonical selfReferences self-loop",graphSelf.every(e=>e.origin==="explicit"&&e.type==="selfReferences"),graphSelf.map(e=>`${e.source}:${e.type}:${e.origin}`).join(","));
const tripleCounts=new Map();for(const e of index.edges.filter(x=>x.origin==="explicit")){const k=`${e.source}|${e.type}|${e.target}`;tripleCounts.set(k,(tripleCounts.get(k)??0)+1);}const parallel=[...tripleCounts.values()].filter(x=>x>1).length;ok("Parallel relationship groups preserved",index.stats.parallelEdgeGroups===parallel,`${index.stats.parallelEdgeGroups}/${parallel}`);
const out=new Map(index.nodes.map(n=>[n.id,0])),inc=new Map(index.nodes.map(n=>[n.id,0]));for(const e of index.edges){out.set(e.source,out.get(e.source)+1);inc.set(e.target,inc.get(e.target)+1);}for(const n of index.nodes){ok(`Outgoing degree ${n.id}`,n.outgoing===out.get(n.id));ok(`Incoming degree ${n.id}`,n.incoming===inc.get(n.id));ok(`Total degree ${n.id}`,n.degree===n.outgoing+n.incoming);}ok("Isolated node count exact",index.stats.isolatedNodes===index.nodes.filter(n=>n.degree===0).length);

const registryDigest=sha(fs.readFileSync(path.join(root,"registry/registry.json")));ok("Relationship source SHA current",index.sourceSha256===registryDigest,`${index.sourceSha256}/${registryDigest}`);
const generated=fs.readFileSync(path.join(root,"js/generated-relationships.js"),"utf8"),indexDigest=sha(fs.readFileSync(path.join(root,"registry/relationships/relationship-index.json")));ok("Generated Relationship fallback checksum current",generated.includes(indexDigest));
const generatedRegistry=fs.readFileSync(path.join(root,"js/generated-registry.js"),"utf8"),generatedRegDigest=sha(fs.readFileSync(path.join(root,"registry/registry.json")));ok("Generated Registry fallback checksum current",generatedRegistry.includes(generatedRegDigest));

const engine=new RelationshipExplorerEngine(index,types,config,"validation");
let direct=engine.direct("commerce.order",{direction:"outgoing"});ok("Order has outgoing graph relationships",direct.length>0);ok("Order composes order lines",direct.some(x=>x.edge.target==="commerce.orderLine"));
direct=engine.direct("content.blogPost",{direction:"outgoing",origin:"permissionAssociation"});ok("Blog Post Permission associations discoverable",direct.some(x=>x.edge.target==="content.blogposts.view"));
let pathResult=engine.path("content.blogPost","shared.mediaReference",{direction:"outgoing",maxDepth:4});ok("Direct BlogPost to media path",pathResult.found&&pathResult.steps.length===1);
pathResult=engine.path("modules.capability.seo.metadata","seo.metadata",{direction:"outgoing",maxDepth:4});ok("Capability to SEO metadata path",pathResult.found&&pathResult.steps.length===1);
pathResult=engine.path("seo.metadata","modules.capability.seo.metadata",{direction:"both",maxDepth:4});ok("Bidirectional reverse discovery path",pathResult.found&&pathResult.steps.length===1);
const neighborhood=engine.neighborhood("commerce.order",{direction:"both",depth:2});ok("Two-hop Order neighborhood",neighborhood.nodes.length>1&&neighborhood.layers.length===2);
ok("Hub discovery bounded",engine.hubs(12).length===12);ok("Isolated discovery exact",engine.isolated(1000).length===index.stats.isolatedNodes);ok("Domain flow discovery",engine.domainFlows(20).length>0);

const html=fs.readFileSync(path.join(root,"index.html"),"utf8"),routes=fs.readFileSync(path.join(root,"js/routes.js"),"utf8"),router=fs.readFileSync(path.join(root,"js/router.js"),"utf8"),app=fs.readFileSync(path.join(root,"js/app.js"),"utf8"),css=fs.readFileSync(path.join(root,"css/relationships.css"),"utf8");
ok("Relationship stylesheet linked",html.includes("css/relationships.css"));ok("Relationship navigation linked",html.includes('href="#/registry/relationships"'));ok("Current release visible",html.includes(`v${version}`));ok("Current phase visible",html.includes(`Phase ${currentPhase}`));ok("Relationship route declared",routes.includes('path: "/registry/relationships"'));ok("Relationship renderer routed",router.includes("renderRelationshipExplorer"));ok("Relationship shortcut routed",router.includes("relationship-shortcut"));ok("Relationship engine loaded",app.includes("loadRelationshipExplorer"));ok("Light theme preserved",html.includes('<meta name="color-scheme" content="light">'));ok("Relationship CSS no backdrop blur",!css.includes("backdrop-filter"));ok("Relationship CSS no dark theme",!css.includes("prefers-color-scheme: dark"));const htmlIds=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);ok("No duplicate HTML IDs",new Set(htmlIds).size===htmlIds.length);

const searchIndex=read("registry/search/search-index.json");ok("Search index current version",searchIndex.registryVersion===version,searchIndex.registryVersion);ok("Relationship route globally searchable",searchIndex.documents.some(x=>x.kind==="route"&&x.target==="#/registry/relationships"));ok("Relationship standard globally searchable",searchIndex.documents.some(x=>x.kind==="registry"&&x.machineId==="relationships.relationshipExplorerStandard"));

let jsonCount=0;function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}for(const file of walk(path.join(root,"registry")).filter(x=>x.endsWith(".json"))){try{JSON.parse(fs.readFileSync(file,"utf8"));jsonCount++;}catch(error){fail.push(`JSON ${path.relative(root,file)}: ${error.message}`);}}
console.log(`NEXT F Contracts Phase 24 validation\nVersion: ${version}\nGraph nodes: ${index.stats.nodes}\nGraph edges: ${index.stats.edges}\nExplicit edges: ${index.stats.explicitEdges}\nPermission associations: ${index.stats.permissionAssociations}\nEvent associations: ${index.stats.eventAssociations}\nRelationship types: ${index.stats.relationshipTypes}\nIsolated nodes: ${index.stats.isolatedNodes}\nSymbolic associations: ${index.stats.symbolicAssociations}\nRegistry entries: ${registry.items.length}\nSearch documents: ${searchIndex.documents.length}\nJSON files checked: ${jsonCount}\nPasses: ${pass.length}\nFailures: ${fail.length}`);
if(fail.length){console.error("\nFailures:\n"+fail.slice(0,220).map(x=>`- ${x}`).join("\n"));if(fail.length>220)console.error(`... ${fail.length-220} more`);process.exit(1);}console.log("\nPASS - Relationship Explorer is internally consistent.");
