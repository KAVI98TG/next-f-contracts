import { GENERATED_SECURITY } from './generated-security.js';
const fetchJson=async(rel)=>{const r=await fetch(rel,{cache:'no-store'});if(!r.ok)throw new Error(`${r.status} ${rel}`);return r.json();};
const norm=v=>String(v??'').trim().toLowerCase();
export class SecurityRegistryEngine{
  constructor(data,source='authoritative-json'){
    this.data=data;this.source=source;this.index=data.index??{};this.controls=data.controls??[];this.categories=data.categories?.categories??[];this.severityLevels=data.severityLevels?.levels??[];this.obligations=data.obligations?.values??[];this.verificationMethods=data.verificationMethods?.methods??[];this.secretClasses=data.secretClasses?.classes??[];this.surfaceMapping=data.surfaceMapping?.surfaces??[];this.definitions=data.definitions??[];
    this.byControlId=new Map(this.controls.map(x=>[x.controlId,x]));
    this.categoriesById=new Map(this.categories.map(x=>[x.id,x]));
  }
  get(id){return this.byControlId.get(id)??null;}
  search(f={}){const q=norm(f.q),cat=norm(f.category),obl=norm(f.obligation),sev=norm(f.severity),scope=norm(f.scope),module=norm(f.module),app=norm(f.applicability);return this.controls.filter(c=>{
    if(cat&&norm(c.category)!==cat)return false;if(obl&&norm(c.obligation)!==obl)return false;if(sev&&norm(c.violationSeverity)!==sev)return false;if(scope&&norm(c.scope)!==scope)return false;if(module&&!(c.affectedModules??[]).some(x=>norm(x)===module))return false;if(app&&!(c.applicability??[]).some(x=>norm(x)===app))return false;
    if(q){const hay=[c.controlId,c.name,c.category,c.requirement,c.rationale,c.scope,c.obligation,c.violationSeverity,...(c.applicability??[]),...(c.affectedModules??[]),...(c.relatedPermissions??[]),...(c.relatedApiRules??[]),...(c.relatedWebhookRules??[]),...(c.relatedCommerceRules??[]),...(c.relatedRegistryIds??[]),...(c.subrequirements??[])].map(norm).join(' ');if(!hay.includes(q))return false;}return true;});}
  modules(){return [...new Set(this.controls.flatMap(x=>x.affectedModules??[]))].sort();}
  applicability(){return [...new Set(this.controls.flatMap(x=>x.applicability??[]))].sort();}
}
export async function loadSecurityRegistry(){try{const [index,categories,severityLevels,obligations,verificationMethods,secretClasses,surfaceMapping]=await Promise.all([fetchJson('./registry/security/index.json'),fetchJson('./registry/security/categories.json'),fetchJson('./registry/security/severity-levels.json'),fetchJson('./registry/security/obligations.json'),fetchJson('./registry/security/verification-methods.json'),fetchJson('./registry/security/secret-classes.json'),fetchJson('./registry/security/surface-mapping.json')]);return new SecurityRegistryEngine({index,controls:index.controls??[],categories,severityLevels,obligations,verificationMethods,secretClasses,surfaceMapping,definitions:GENERATED_SECURITY.definitions??[]},'authoritative-json');}catch{return new SecurityRegistryEngine(GENERATED_SECURITY,'generated-local-fallback');}}
export function parseSecurityFilters(search=''){const p=new URLSearchParams(String(search).replace(/^\?/,''));return {view:p.get('view')||'overview',id:p.get('id')||'',q:p.get('q')||'',category:p.get('category')||'',obligation:p.get('obligation')||'',severity:p.get('severity')||'',scope:p.get('scope')||'',module:p.get('module')||'',applicability:p.get('applicability')||''};}
export function buildSecurityQuery(f={}){const p=new URLSearchParams();for(const k of ['view','id','q','category','obligation','severity','scope','module','applicability'])if(f[k])p.set(k,f[k]);const s=p.toString();return s?`?${s}`:'';}
