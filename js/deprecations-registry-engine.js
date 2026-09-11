import { GENERATED_DEPRECATIONS } from './generated-deprecations.js';

const fetchJson=async(rel)=>{const r=await fetch(rel,{cache:'no-store'});if(!r.ok)throw new Error(`${r.status} ${rel}`);return r.json();};
const norm=(v)=>String(v??'').trim().toLowerCase();
export class DeprecationsEngine{
  constructor(data,source='authoritative-json'){
    this.data=data;this.source=source;this.index=data.index??{};this.policy=data.policy??{};this.lifecycleStates=data.lifecycleStates??{states:[]};this.severityLevels=data.severityLevels??{levels:[]};this.records=data.records??[];this.definitions=data.definitions??[];
    this.byId=new Map(this.records.map(r=>[r.deprecationId,r]));
    this.byAffected=new Map(this.records.map(r=>[r.affectedRegistryId,r]));
  }
  get(id){return this.byId.get(id)??null;}
  forRegistryId(id){return this.byAffected.get(id)??null;}
  search(filters={}){
    const q=norm(filters.q),status=norm(filters.status),domain=norm(filters.domain),type=norm(filters.type),severity=norm(filters.severity),replacement=norm(filters.replacement),module=norm(filters.module);
    return this.records.filter(r=>{
      if(status&&norm(r.status)!==status)return false;
      if(domain&&norm(r.affectedDomain)!==domain)return false;
      if(type&&norm(r.affectedType)!==type)return false;
      if(severity&&norm(r.severity)!==severity)return false;
      if(replacement&&norm(r.replacement?.disposition)!==replacement)return false;
      if(module&&!(r.modulesAffected??[]).some(x=>norm(x)===module))return false;
      if(filters.migration&&![r.dataMigrationRequired,r.codeMigrationRequired,r.configurationMigrationRequired].some(Boolean))return false;
      if(q){const hay=[r.deprecationId,r.affectedRegistryId,r.affectedName,r.reason,r.replacement?.replacementId,r.replacement?.instructions,r.status,r.severity,...(r.modulesAffected??[]),...(r.apisAffected??[])].map(norm).join(' ');if(!hay.includes(q))return false;}
      return true;
    });
  }
}
export async function loadDeprecations(){
  try{
    const [index,policy,lifecycleStates,severityLevels]=await Promise.all([fetchJson('./registry/deprecations/index.json'),fetchJson('./registry/deprecations/policy.json'),fetchJson('./registry/deprecations/lifecycle-states.json'),fetchJson('./registry/deprecations/severity-levels.json')]);
    return new DeprecationsEngine({index,policy,lifecycleStates,severityLevels,records:index.records??[],definitions:GENERATED_DEPRECATIONS.definitions??[]},'authoritative-json');
  }catch{return new DeprecationsEngine(GENERATED_DEPRECATIONS,'generated-local-fallback');}
}
export function parseDeprecationFilters(search=''){
  const p=new URLSearchParams(String(search).replace(/^\?/,''));return {view:p.get('view')||'overview',id:p.get('id')||'',q:p.get('q')||'',status:p.get('status')||'',domain:p.get('domain')||'',type:p.get('type')||'',severity:p.get('severity')||'',replacement:p.get('replacement')||'',module:p.get('module')||'',migration:p.get('migration')==='1'};
}
export function buildDeprecationQuery(f={}){const p=new URLSearchParams();for(const k of ['view','id','q','status','domain','type','severity','replacement','module'])if(f[k])p.set(k,f[k]);if(f.migration)p.set('migration','1');const s=p.toString();return s?`?${s}`:'';}
