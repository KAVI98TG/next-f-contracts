const loadGeneratedFallback = () => import("./generated-commerce-schemas.js");

const t=(v)=>String(v??"").trim().toLowerCase();
function valid(data){
  return data && typeof data.registryVersion==="string" && Array.isArray(data.schemas) &&
    data.schemas.every((s)=>s && typeof s.$id==="string" && /^commerce\./.test(s.$id) &&
      s.domain==="commerce" && typeof s.name==="string" && typeof s.version==="string" &&
      typeof s.category==="string" && s.commerceModel && Array.isArray(s.fields) &&
      Array.isArray(s.relationships) && Array.isArray(s.validationRules) && s.cms && s.delivery);
}
async function loadJson(){
  if(window.location.protocol==="file:") throw new Error("file protocol uses generated Commerce fallback");
  const r=await fetch("./registry/commerce/index.json",{cache:"no-store"});
  if(!r.ok) throw new Error(`Commerce registry request failed with ${r.status}`);
  const data=await r.json();
  if(!valid(data)) throw new Error("Commerce registry JSON failed runtime validation");
  return data;
}
export class CommerceRegistryEngine{
  constructor(data,source="generated",sourceDigest=null){
    if(!valid(data)) throw new Error("Invalid Commerce registry data");
    this.data=data;this.source=source;this.sourceDigest=sourceDigest;
    this.schemas=Object.freeze(data.schemas.map(x=>Object.freeze({...x})));
    this.byId=new Map(this.schemas.map(x=>[x.$id,x]));
    this.categories=[...new Set(this.schemas.map(x=>x.category))].sort();
    this.kinds=[...new Set(this.schemas.map(x=>x.commerceModel?.kind).filter(Boolean))].sort();
  }
  get size(){return this.schemas.length;}
  get(id){return this.byId.get(id)??null;}
  search(query="",{category="",kind="",visibility="",transactional=""}={}){
    const q=t(query),c=t(category),k=t(kind),v=t(visibility),tx=t(transactional);
    return this.schemas.filter((s)=>{
      if(c&&t(s.category)!==c)return false;
      if(k&&t(s.commerceModel?.kind)!==k)return false;
      if(v==="public"&&!s.commerceModel?.publicEligible)return false;
      if(v==="private"&&s.commerceModel?.publicEligible)return false;
      if(tx==="yes"&&!s.commerceModel?.transactional)return false;
      if(tx==="no"&&s.commerceModel?.transactional)return false;
      if(!q)return true;
      const fields=s.fields.flatMap(f=>[f.key,f.description,f.primitive,f.schema,f.itemsPrimitive,f.itemsSchema]);
      const rels=s.relationships.flatMap(r=>[r.type,r.target,r.description]);
      const rules=s.validationRules.flatMap(r=>[r.id,r.description]);
      return [s.$id,s.name,s.description,s.purpose,s.category,s.commerceModel?.kind,...fields,...rels,...rules].join(" ").toLowerCase().includes(q);
    }).sort((a,b)=>a.name.localeCompare(b.name,undefined,{sensitivity:"base",numeric:true}));
  }
}
export async function loadCommerceSchemas(){
  try{return new CommerceRegistryEngine(await loadJson(),"authoritative-json",null);}
  catch(error){
    console.info("Using generated Commerce registry fallback",error?.message??error);
    return new CommerceRegistryEngine((await loadGeneratedFallback()).GENERATED_COMMERCE_SCHEMAS,"generated",(await loadGeneratedFallback()).GENERATED_COMMERCE_SOURCE_SHA256);
  }
}
export function parseCommerceFilters(search=""){
  const p=new URLSearchParams(search.replace(/^\?/,""));
  return {q:p.get("q")??"",category:p.get("category")??"",kind:p.get("kind")??"",visibility:p.get("visibility")??"",transactional:p.get("transactional")??""};
}
export function buildCommerceQuery({q="",category="",kind="",visibility="",transactional=""}={}){
  const p=new URLSearchParams();
  if(q)p.set("q",q);if(category)p.set("category",category);if(kind)p.set("kind",kind);
  if(visibility)p.set("visibility",visibility);if(transactional)p.set("transactional",transactional);
  const out=p.toString();return out?`?${out}`:"";
}
