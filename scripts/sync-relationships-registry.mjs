import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root=process.cwd();
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),"utf8"));
const write=(rel,obj)=>fs.writeFileSync(path.join(root,rel),JSON.stringify(obj,null,2)+"\n");
const sha=(buf)=>crypto.createHash("sha256").update(buf).digest("hex");
const relationDir=path.join(root,"registry/relationships");
fs.mkdirSync(relationDir,{recursive:true});

// Keep controlled top-level vocabularies aligned with the current coordinated release.
for(const rel of ["registry/domains.json","registry/types.json","registry/statuses.json"]){const data=read(rel);data.registryVersion=version;write(rel,data);}
const domains=read("registry/domains.json");
if(!domains.domains.some(x=>x.id==="relationships"))domains.domains.push({id:"relationships",label:"Relationships",description:"Generated cross-reference graph, relationship semantics, dependency/impact discovery and bounded path tracing across the Contract Registry."});
domains.domains.sort((a,b)=>a.id.localeCompare(b.id));domains.registryVersion=version;write("registry/domains.json",domains);

const nav=read("registry/portal-navigation.json");nav.portalVersion=version;
const overview=nav.groups.find(x=>x.id==="overview");if(overview){const base=overview.items.find(x=>x.id==="overview");if(base){base.phase=Math.max(Number(base.phase)||0,24);base.status="current";}}
const registryGroup=nav.groups.find(x=>x.id==="registry");
if(registryGroup&&!registryGroup.items.some(x=>x.id==="registry-relationships"))registryGroup.items.splice(1,0,{id:"registry-relationships",path:"/registry/relationships",label:"Relationships",phase:24,status:"available"});
write("registry/portal-navigation.json",nav);

const types=read("registry/relationships/relationship-types.json");types.registryVersion=version;write("registry/relationships/relationship-types.json",types);

const meta=read("registry/registry-meta.json");meta.registryVersion=version;meta.relationshipIndex="registry/relationships/relationship-index.json";meta.relationshipTypeVocabulary="registry/relationships/relationship-types.json";meta.relationshipExplorerConfig="registry/relationships/relationship-config.json";meta.relationshipIndexSchema="registry/relationships/relationship-index.schema.json";meta.relationshipExplorerRoute="#/registry/relationships";meta.allowedRelationshipTypes=types.types.filter((item)=>!item.graphOnly).map((item)=>item.id).sort();write("registry/registry-meta.json",meta);
const config=read("registry/relationships/relationship-config.json");config.registryVersion=version;write("registry/relationships/relationship-config.json",config);
const typeById=new Map(types.types.map(x=>[x.id,x]));

const registry=read("registry/registry.json");registry.registryVersion=version;
registry.items=registry.items.filter(x=>x.managedBy!=="relationship-sync");
// Correct an inherited generated metadata defect: the Webhook Registry Standard must not implement itself.
const webhookStandard=registry.items.find(x=>x.id==="webhooks.webhookRegistryStandard");
if(webhookStandard)webhookStandard.relationships=(webhookStandard.relationships??[]).filter(r=>!(r.type==="implements"&&r.target==="webhooks.webhookRegistryStandard"));
const newItems=[
 {id:"relationships.relationshipExplorerStandard",name:"Relationship Explorer Standard",type:"standard",source:"standards/32-relationship-explorer-standard.md",description:"Canonical graph projection, traversal, impact, path-finding, integrity and accessibility rules for Registry relationships.",tags:["relationships","graph","dependencies","impact","path"] ,relationships:[{type:"uses",target:"registry.index",description:"Relationship generation consumes the canonical Registry Index."}]},
 {id:"relationships.relationshipIndex",name:"Relationship Index",type:"machine-registry",source:"registry/relationships/relationship-index.json",description:"Deterministic node/edge projection of explicit Registry relationships plus resolvable Permission and Event associations.",tags:["relationships","graph","index","generated"],relationships:[{type:"implements",target:"relationships.relationshipExplorerStandard",description:"Generated according to the Relationship Explorer Standard."},{type:"generatedFrom",target:"registry.index",description:"Projected from canonical registry metadata."}]},
 {id:"relationships.relationshipTypeVocabulary",name:"Relationship Type Vocabulary",type:"vocabulary",source:"registry/relationships/relationship-types.json",description:"Controlled semantics for explicit relationship types and graph-only Permission/Event association edges.",tags:["relationships","types","vocabulary","semantics"],relationships:[{type:"implements",target:"relationships.relationshipExplorerStandard",description:"Relationship interpretation follows the Relationship Explorer Standard."}]},
 {id:"relationships.relationshipConfiguration",name:"Relationship Explorer Configuration",type:"machine-registry",source:"registry/relationships/relationship-config.json",description:"Bounded traversal, rendering, path depth, edge-origin and URL-state configuration for the local Relationship Explorer.",tags:["relationships","configuration","limits","traversal"],relationships:[{type:"implements",target:"relationships.relationshipExplorerStandard",description:"Configuration is governed by the Relationship Explorer Standard."}]}
];
for(const item of newItems)registry.items.push({...item,domain:"relationships",version,status:"stable",phase:24,introducedIn:"0.25.0",permissions:[],events:[],managedBy:"relationship-sync"});
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write("registry/registry.json",registry);

const registryBuffer=fs.readFileSync(path.join(root,"registry/registry.json"));
const sourceSha256=sha(registryBuffer);
const byId=new Map(registry.items.map(x=>[x.id,x]));
const edges=[];const symbolic=[];const edgeKeys=new Map();let unresolvedExplicit=0;let explicitEdges=0;let permissionAssociations=0;let eventAssociations=0;
function addEdge(source,target,type,origin,description=""){
 const typeDef=typeById.get(type);if(!typeDef)throw new Error(`Unknown relationship type ${type}`);
 if(!byId.has(source))throw new Error(`Unknown edge source ${source}`);if(!byId.has(target)){if(origin==="explicit")unresolvedExplicit++;return false;}
 const base=`${source}|${type}|${target}|${origin}`;const ordinal=edgeKeys.get(base)??0;edgeKeys.set(base,ordinal+1);
 const id=`rel_${sha(Buffer.from(`${base}|${ordinal}|${description}`)).slice(0,20)}`;
 edges.push({id,source,target,type,family:typeDef.family,origin,description:String(description??""),ordinal});return true;
}
for(const item of registry.items){
 for(const rel of item.relationships??[]){explicitEdges++;if(!addEdge(item.id,rel.target,rel.type,"explicit",rel.description??""))symbolic.push({source:item.id,target:rel.target,kind:"relationship",origin:"explicit",reason:"Explicit relationship target did not resolve. This is a validation failure."});}
 for(const permission of item.permissions??[]){if(!byId.has(permission))throw new Error(`Permission association ${item.id} -> ${permission} does not resolve`);addEdge(item.id,permission,"associatedPermission","permissionAssociation","Associated through the registry item permissions array.");permissionAssociations++;}
 for(const event of item.events??[]){if(event===item.id&&item.type==="event")continue;if(byId.has(event)){addEdge(item.id,event,"associatedEvent","eventAssociation","Associated through the registry item events array.");eventAssociations++;}else symbolic.push({source:item.id,target:event,kind:"event",origin:"eventAssociation",reason:"Identifier is a controlled symbolic event/tracking association without a standalone Registry node."});}
}
const outgoing=new Map(registry.items.map(x=>[x.id,0])),incoming=new Map(registry.items.map(x=>[x.id,0]));
for(const e of edges){outgoing.set(e.source,(outgoing.get(e.source)??0)+1);incoming.set(e.target,(incoming.get(e.target)??0)+1);}
const nodes=registry.items.map(x=>({id:x.id,name:x.name,domain:x.domain,type:x.type,status:x.status,phase:x.phase,source:x.source,outgoing:outgoing.get(x.id)??0,incoming:incoming.get(x.id)??0,degree:(outgoing.get(x.id)??0)+(incoming.get(x.id)??0)}));
const parallelGroups=[...edgeKeys.values()].filter(n=>n>1).length;
const selfLoops=edges.filter(e=>e.source===e.target).length;
const index={registryVersion:version,schemaVersion:"1.0.0",title:"NEXT F Relationship Index",description:"Generated bounded graph projection for Relationship Explorer discovery.",source:"registry/registry.json",sourceSha256,stats:{nodes:nodes.length,edges:edges.length,explicitEdges,permissionAssociations,eventAssociations,relationshipTypes:types.types.length,isolatedNodes:nodes.filter(n=>n.degree===0).length,parallelEdgeGroups:parallelGroups,selfLoops,symbolicAssociations:symbolic.length,unresolvedExplicitTargets:unresolvedExplicit},nodes:nodes.sort((a,b)=>a.id.localeCompare(b.id)),edges:edges.sort((a,b)=>a.source.localeCompare(b.source)||a.target.localeCompare(b.target)||a.type.localeCompare(b.type)||a.ordinal-b.ordinal),symbolicAssociations:symbolic.sort((a,b)=>a.source.localeCompare(b.source)||a.target.localeCompare(b.target))};
write("registry/relationships/relationship-index.json",index);
const indexBuffer=fs.readFileSync(path.join(root,"registry/relationships/relationship-index.json"));const indexDigest=sha(indexBuffer);
fs.writeFileSync(path.join(root,"js/generated-relationships.js"),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source: registry/relationships/relationship-index.json\n// SHA-256: ${indexDigest}\nexport const GENERATED_RELATIONSHIP_INDEX_SHA256 = ${JSON.stringify(indexDigest)};\nexport const GENERATED_RELATIONSHIP_INDEX = ${JSON.stringify(index,null,2)};\nexport const GENERATED_RELATIONSHIP_TYPES = ${JSON.stringify(types,null,2)};\nexport const GENERATED_RELATIONSHIP_CONFIG = ${JSON.stringify(config,null,2)};\n`);

const gen=spawnSync(process.execPath,[path.join(root,"scripts/generate-registry-bootstrap.mjs")],{stdio:"inherit"});if(gen.status!==0)process.exit(gen.status??1);
console.log(`Synchronized Relationship Explorer: ${nodes.length} nodes, ${edges.length} edges, ${symbolic.length} symbolic associations.`);
