const loadGeneratedFallback = () => import("./generated-api.js");
const norm = v => String(v ?? "").trim().toLowerCase();
function valid(d){
  return d && typeof d.registryVersion === "string" && typeof d.apiVersion === "string"
    && Array.isArray(d.schemas) && Array.isArray(d.groups) && Array.isArray(d.operations)
    && d.groups.every(g => typeof g.apiId === "string" && Array.isArray(g.operationIds))
    && d.operations.every(o => typeof o.operationId === "string" && typeof o.method === "string" && typeof o.path === "string");
}
async function loadJson(){
  if(location.protocol === "file:") throw new Error("file protocol");
  const r = await fetch("./registry/api/index.json",{cache:"no-store"});
  if(!r.ok) throw new Error(`API registry ${r.status}`);
  const d = await r.json();
  if(!valid(d)) throw new Error("invalid API registry");
  return d;
}
export class ApiRegistryEngine {
  constructor(data, source="generated", digest=null){
    if(!valid(data)) throw new Error("Invalid API Registry");
    this.data=data; this.source=source; this.sourceDigest=digest;
    this.schemas=Object.freeze(data.schemas);
    this.groups=Object.freeze(data.groups);
    this.operations=Object.freeze(data.operations);
    this.categories=Object.freeze(data.categories ?? []);
    this.methods=Object.freeze(data.methods ?? []);
    this.authModes=Object.freeze(data.authModes ?? []);
    this.cachePolicies=Object.freeze(data.cachePolicies ?? []);
    this.rateLimitClasses=Object.freeze(data.rateLimitClasses ?? []);
    this.corsPolicies=Object.freeze(data.corsPolicies ?? []);
    this.errorCodes=Object.freeze(data.errorCodes ?? []);
    this.byId=new Map([...this.schemas,...this.groups,...this.operations].map(x=>[x.$id,x]));
    this.byGroup=new Map(this.groups.map(x=>[x.apiId,x]));
  }
  get size(){return this.schemas.length+this.groups.length+this.operations.length;}
  get(id){return this.byId.get(id) ?? null;}
  group(id){return this.byGroup.get(id) ?? null;}
  operationsFor(groupId){return this.operations.filter(x=>x.groupId===groupId);}
  search(q="", {view="operations",group="",method="",auth="",privacy=""}={}){
    const n=norm(q),gr=norm(group),me=norm(method),au=norm(auth),pr=norm(privacy);
    let rows=view==="groups"?this.groups:view==="schemas"?this.schemas:this.operations;
    return rows.filter(x=>{
      if(gr){
        const gid=x.groupId ?? x.apiId;
        if(norm(gid)!==gr) return false;
      }
      if(me && view==="operations" && norm(x.method)!==me) return false;
      if(au && view==="operations" && norm(x.authentication?.mode)!==au) return false;
      if(pr && view==="operations" && norm(x.privacy)!==pr) return false;
      if(!n) return true;
      return JSON.stringify(x).toLowerCase().includes(n);
    }).sort((a,b)=>{
      if(view==="operations"){
        const ga=(this.group(a.groupId)?.order??999), gb=(this.group(b.groupId)?.order??999);
        if(ga!==gb) return ga-gb;
        if(a.path!==b.path) return a.path.localeCompare(b.path);
        return a.method.localeCompare(b.method);
      }
      return (a.order??999)-(b.order??999)||a.name.localeCompare(b.name);
    });
  }
}
export async function loadApiRegistry(){
  try{return new ApiRegistryEngine(await loadJson(),"authoritative-json");}
  catch(e){console.info("Using generated API Registry fallback",e?.message??e);return new ApiRegistryEngine((await loadGeneratedFallback()).GENERATED_API,"generated",(await loadGeneratedFallback()).GENERATED_API_SOURCE_SHA256);}
}
export function parseApiFilters(search=""){
  const p=new URLSearchParams(search.replace(/^\?/,""));
  return {q:p.get("q")??"",view:p.get("view")??"operations",group:p.get("group")??"",method:p.get("method")??"",auth:p.get("auth")??"",privacy:p.get("privacy")??""};
}
export function buildApiQuery(f={}){
  const p=new URLSearchParams();
  if(f.q)p.set("q",f.q); if(f.view&&f.view!=="operations")p.set("view",f.view); if(f.group)p.set("group",f.group);
  if(f.method)p.set("method",f.method); if(f.auth)p.set("auth",f.auth); if(f.privacy)p.set("privacy",f.privacy);
  const s=p.toString(); return s?`?${s}`:"";
}
