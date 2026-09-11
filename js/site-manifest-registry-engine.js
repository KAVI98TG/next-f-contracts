const loadGeneratedFallback = () => import("./generated-site-manifests.js");

const norm=(v)=>String(v??"").trim().toLowerCase();
function valid(data){
  return data && typeof data.registryVersion==="string" && typeof data.schemaVersion==="string" && Array.isArray(data.schemas) && Array.isArray(data.examples) && Array.isArray(data.siteTypes) && Array.isArray(data.environmentKinds) && Array.isArray(data.runtimeCapabilities) && data.schemas.every(s=>s&&typeof s.$id==="string"&&s.domain==="manifest"&&Array.isArray(s.fields)&&Array.isArray(s.validationRules));
}
async function loadJson(){
  if(window.location.protocol==="file:") throw new Error("file protocol uses generated Site Manifest fallback");
  const r=await fetch("./registry/manifests/index.json",{cache:"no-store"});
  if(!r.ok) throw new Error(`Site Manifest registry request failed with ${r.status}`);
  const data=await r.json();
  if(!valid(data)) throw new Error("Site Manifest registry failed runtime validation");
  return data;
}
export class SiteManifestRegistryEngine{
  constructor(data,source="generated",sourceDigest=null){
    if(!valid(data)) throw new Error("Invalid Site Manifest registry data");
    this.data=data;this.source=source;this.sourceDigest=sourceDigest;
    this.schemas=Object.freeze(data.schemas.map(x=>Object.freeze({...x})));
    this.examples=Object.freeze(data.examples.map(x=>Object.freeze({...x})));
    this.byId=new Map(this.schemas.map(x=>[x.$id,x]));
    this.categories=Object.freeze(data.categories??[]);
    this.siteTypes=Object.freeze(data.siteTypes??[]);
    this.environmentKinds=Object.freeze(data.environmentKinds??[]);
    this.runtimeCapabilities=Object.freeze(data.runtimeCapabilities??[]);
    this.configurationExposureKinds=Object.freeze(data.configurationExposureKinds??[]);
    this.contentDeliveryModes=Object.freeze(data.contentDeliveryModes??[]);
  }
  get size(){return this.schemas.length;}
  get(id){return this.byId.get(id)??null;}
  search(query="",{category="",model=""}={}){
    const q=norm(query),cat=norm(category),m=norm(model);
    return this.schemas.filter(s=>{
      if(cat&&norm(s.category)!==cat)return false;
      if(m&&norm(s.manifestModel?.kind)!==m)return false;
      if(!q)return true;
      const hay=[s.$id,s.name,s.description,s.purpose,s.category,s.manifestModel?.kind,...s.fields.flatMap(f=>[f.key,f.description,f.primitive,f.schema]),...s.validationRules.flatMap(r=>[r.id,r.description]),...(s.notes??[])];
      return hay.join(" ").toLowerCase().includes(q);
    }).sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true,sensitivity:"base"}));
  }
  example(id){return this.examples.find(x=>x.id===id)??this.examples[0]??null;}
}
export async function loadSiteManifests(){
  try{return new SiteManifestRegistryEngine(await loadJson(),"authoritative-json",null);}
  catch(error){console.info("Using generated Site Manifest fallback",error?.message??error);return new SiteManifestRegistryEngine((await loadGeneratedFallback()).GENERATED_SITE_MANIFESTS,"generated",(await loadGeneratedFallback()).GENERATED_SITE_MANIFESTS_SOURCE_SHA256);}
}
export function parseManifestFilters(search=""){
  const p=new URLSearchParams(search.replace(/^\?/,""));
  return {q:p.get("q")??"",category:p.get("category")??"",model:p.get("model")??"",example:p.get("example")??"commerce"};
}
export function buildManifestQuery(f={}){
  const p=new URLSearchParams();if(f.q)p.set("q",f.q);if(f.category)p.set("category",f.category);if(f.model)p.set("model",f.model);if(f.example&&f.example!=="commerce")p.set("example",f.example);const out=p.toString();return out?`?${out}`:"";
}
