const loadGeneratedFallback = () => import("./generated-marketing-schemas.js");

function text(value){return String(value??"").trim().toLowerCase();}
function valid(data){
  return data &&
    typeof data.registryVersion === "string" &&
    Array.isArray(data.schemas) &&
    Array.isArray(data.trackingEvents) &&
    data.schemas.every((s) =>
      s && typeof s.$id === "string" && /^marketing\./.test(s.$id) &&
      typeof s.name === "string" && typeof s.version === "string" &&
      s.status === "stable" && s.domain === "marketing" &&
      typeof s.category === "string" && typeof s.description === "string" &&
      typeof s.purpose === "string" && s.marketingModel &&
      Array.isArray(s.fields) && Array.isArray(s.relationships) &&
      Array.isArray(s.validationRules) && s.cms && s.delivery &&
      s.futureBindings && s.examples && Array.isArray(s.notes)
    ) &&
    data.trackingEvents.every((e) => e && typeof e.key === "string" && typeof e.label === "string");
}
async function loadJson(){
  if(window.location.protocol === "file:") throw new Error("file protocol uses generated Marketing fallback");
  const response = await fetch("./registry/marketing/index.json",{cache:"no-store"});
  if(!response.ok) throw new Error(`Marketing registry request failed with ${response.status}`);
  const data = await response.json();
  if(!valid(data)) throw new Error("Marketing registry JSON failed runtime shape validation");
  return data;
}

export class MarketingRegistryEngine {
  constructor(data,source="generated",sourceDigest=null){
    if(!valid(data)) throw new Error("Invalid Marketing registry data");
    this.data=data;
    this.source=source;
    this.sourceDigest=sourceDigest;
    this.schemas=Object.freeze(data.schemas.map((x)=>Object.freeze({...x})));
    this.trackingEvents=Object.freeze(data.trackingEvents.map((x)=>Object.freeze({...x})));
    this.byId=new Map(this.schemas.map((x)=>[x.$id,x]));
    this.categories=[...new Set(this.schemas.map((x)=>x.category))].sort();
    this.kinds=[...new Set(this.schemas.map((x)=>x.marketingModel?.kind).filter(Boolean))].sort();
  }
  get size(){return this.schemas.length;}
  get(id){return this.byId.get(id)??null;}
  search(query="",{category="",kind=""}={}){
    const q=text(query),c=text(category),k=text(kind);
    return this.schemas.filter((item)=>{
      if(c&&text(item.category)!==c)return false;
      if(k&&text(item.marketingModel?.kind)!==k)return false;
      if(!q)return true;
      const fields=item.fields.flatMap((f)=>[f.key,f.primitive,f.schema,f.itemsPrimitive,f.itemsSchema,f.description]);
      const hay=[item.$id,item.name,item.description,item.purpose,item.category,item.marketingModel?.kind,
        ...fields,...item.validationRules.flatMap((r)=>[r.id,r.description])].join(" ").toLowerCase();
      return hay.includes(q);
    }).sort((a,b)=>a.name.localeCompare(b.name,undefined,{sensitivity:"base",numeric:true}));
  }
}
export async function loadMarketingSchemas(){
  try{return new MarketingRegistryEngine(await loadJson(),"authoritative-json",null);}
  catch(error){
    console.info("Using generated Marketing registry fallback",error?.message??error);
    return new MarketingRegistryEngine((await loadGeneratedFallback()).GENERATED_MARKETING_SCHEMAS,"generated",(await loadGeneratedFallback()).GENERATED_MARKETING_SCHEMAS_SOURCE_SHA256);
  }
}
export function parseMarketingFilters(search=""){
  const p=new URLSearchParams(search.replace(/^\?/,""));
  return {q:p.get("q")??"",category:p.get("category")??"",kind:p.get("kind")??""};
}
export function buildMarketingQuery({q="",category="",kind=""}={}){
  const p=new URLSearchParams();
  if(q)p.set("q",q);
  if(category)p.set("category",category);
  if(kind)p.set("kind",kind);
  const out=p.toString();
  return out?`?${out}`:"";
}
