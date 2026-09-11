import { GENERATED_COMPATIBILITY } from './generated-compatibility.js';

async function fetchJson(path){
  const response=await fetch(path,{cache:'no-store'});
  if(!response.ok)throw new Error(`HTTP ${response.status} for ${path}`);
  return response.json();
}

function normalize(value){return String(value??'').toLowerCase();}
function statusRank(status, statuses){return statuses.find(x=>x.id===status)?.rank??0;}

export class CompatibilityEngine{
  constructor(data,source='authoritative-json'){
    this.data=data;this.source=source;
    this.statuses=data.statuses?.statuses??[];
    this.supportLevels=data.supportLevels?.levels??[];
    this.dimensions=data.dimensions?.dimensions??[];
    this.components=data.componentMatrix?.components??[];
    this.releases=data.releaseCompatibility?.releases??[];
    this.referenceSites=data.referenceSites?.assessments??[];
    this.definitions=data.definitions??[];
    this.policy=data.policy??{};
  }
  get currentVersion(){return this.data.index?.targetContractVersion??this.data.registryVersion;}
  status(id){return this.statuses.find(x=>x.id===id);}
  support(id){return this.supportLevels.find(x=>x.id===id);}
  release(version){return this.releases.find(x=>x.version===version);}
  searchReleases(q='',status=''){
    const n=normalize(q);return this.releases.filter(x=>(!status||x.compatibilityStatus===status)&&(!n||[x.version,x.supportLevel,x.compatibilityStatus,x.summary].some(v=>normalize(v).includes(n))));
  }
  searchComponents(q='',status='',type=''){
    const n=normalize(q);return this.components.filter(x=>(!status||x.compatibilityStatus===status)&&(!type||x.componentType===type)&&(!n||[x.componentId,x.componentType,x.name,x.specificationVersion,x.registryRelease,x.summary].some(v=>normalize(v).includes(n))));
  }
  searchSites(q='',status=''){
    const n=normalize(q);return this.referenceSites.filter(x=>(!status||x.overallStatus===status)&&(!n||[x.id,x.name,x.siteType,x.sourceContractVersion,x.targetContractVersion,x.summary].some(v=>normalize(v).includes(n))));
  }
  aggregate(statuses){
    const usable=statuses.filter(Boolean);if(!usable.length)return 'not-applicable';
    return [...usable].sort((a,b)=>statusRank(b,this.statuses)-statusRank(a,this.statuses))[0];
  }
}

export async function loadCompatibility(){
  const paths={index:'./registry/compatibility/index.json',statuses:'./registry/compatibility/statuses.json',supportLevels:'./registry/compatibility/support-levels.json',dimensions:'./registry/compatibility/dimensions.json',componentTypes:'./registry/compatibility/component-types.json',findingCodes:'./registry/compatibility/finding-codes.json',policy:'./registry/compatibility/policy.json',releaseCompatibility:'./registry/compatibility/release-compatibility.json',componentMatrix:'./registry/compatibility/component-matrix.json',referenceSites:'./registry/compatibility/reference-site-assessments.json'};
  try{
    const entries=await Promise.all(Object.entries(paths).map(async([k,p])=>[k,await fetchJson(p)]));
    const data=Object.fromEntries(entries);data.registryVersion=data.index.registryVersion;data.definitions=GENERATED_COMPATIBILITY.definitions;
    return new CompatibilityEngine(data,'authoritative-json');
  }catch{
    return new CompatibilityEngine(GENERATED_COMPATIBILITY,'generated-local-fallback');
  }
}

export function parseCompatibilityFilters(search=''){
  const p=new URLSearchParams(String(search).replace(/^\?/,''));
  const view=['overview','releases','surfaces','sites','definitions'].includes(p.get('view'))?p.get('view'):'overview';
  return {view,q:p.get('q')??'',status:p.get('status')??'',type:p.get('type')??''};
}
export function buildCompatibilityQuery(f){
  const p=new URLSearchParams();if(f.view&&f.view!=='overview')p.set('view',f.view);if(f.q)p.set('q',f.q);if(f.status)p.set('status',f.status);if(f.type)p.set('type',f.type);const s=p.toString();return s?`?${s}`:'';
}
