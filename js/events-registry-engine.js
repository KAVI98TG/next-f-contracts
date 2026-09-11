const loadGeneratedFallback = () => import("./generated-events.js");

function normalize(v){return String(v??'').toLowerCase();}
function params(search=''){return new URLSearchParams(search.startsWith('?')?search.slice(1):search);}
export function parseEventsFilters(search=''){
  const p=params(search);return {q:p.get('q')??'',view:p.get('view')??'all',category:p.get('category')??'',producer:p.get('producer')??'',sensitivity:p.get('sensitivity')??'',webhook:p.get('webhook')??''};
}
export function buildEventsQuery(f={}){const p=new URLSearchParams();for(const k of ['q','view','category','producer','sensitivity','webhook'])if(f[k])p.set(k,f[k]);const s=p.toString();return s?`?${s}`:'';}
export class EventsRegistryEngine{
  constructor(data,source='authoritative-json'){this.data=data;this.source=source;this.schemas=data.schemas??[];this.events=data.events??[];this.categories=data.categories??[];this.producers=data.producers??[];this.consumers=data.consumers??[];this.byId=new Map([...this.schemas,...this.events].map(x=>[x.$id??x.eventKey,x]));}
  get size(){return this.schemas.length+this.events.length}
  get(id){return this.byId.get(id)}
  search(q='',f={}){const terms=normalize(q).split(/\s+/).filter(Boolean);let rows=f.view==='schemas'?this.schemas:f.view==='events'?this.events:[...this.events,...this.schemas];return rows.filter(x=>{
    if(f.category && x.category!==f.category)return false;if(f.producer && x.producerKey!==f.producer)return false;if(f.sensitivity && x.dataPolicy?.sensitivity!==f.sensitivity)return false;if(f.webhook==='yes' && x.webhookEligible!==true)return false;if(f.webhook==='no' && x.webhookEligible!==false)return false;
    const hay=normalize([x.$id,x.eventKey,x.name,x.description,x.category,x.producerKey,...(x.subjectContracts??[]),...(x.consumers??[])].join(' '));return terms.every(t=>hay.includes(t));
  }).sort((a,b)=>(a.eventKey??a.$id).localeCompare(b.eventKey??b.$id));}
}
async function loadJson(path){const r=await fetch(path,{cache:'no-store'});if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}
export async function loadEvents(){try{const [idx,producers,consumers]=await Promise.all([loadJson('./registry/events/index.json'),loadJson('./registry/events/producers.json'),loadJson('./registry/events/consumers.json')]);return new EventsRegistryEngine({...idx,producers:producers.producers,consumers:consumers.consumers},'authoritative-json');}catch{return new EventsRegistryEngine((await loadGeneratedFallback()).GENERATED_EVENTS,`generated-fallback:${(await loadGeneratedFallback()).GENERATED_EVENTS_SOURCE_SHA256.slice(0,12)}`)}}
