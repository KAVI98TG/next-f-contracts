import { GENERATED_PRIVACY } from './generated-privacy.js';
const fetchJson=async(rel)=>{const r=await fetch(rel,{cache:'no-store'});if(!r.ok)throw new Error(`${r.status} ${rel}`);return r.json();};
const norm=v=>String(v??'').trim().toLowerCase();
export class PrivacyRegistryEngine{
  constructor(data,source='authoritative-json'){
    this.data=data;this.source=source;this.index=data.index??{};
    this.classifications=data.classifications?.classes??data.index?.classifications??[];
    this.qualifiers=data.qualifiers?.qualifiers??data.index?.qualifiers??[];
    this.eligibilityValues=data.eligibility?.values??data.index?.eligibilityValues??[];
    this.retentionClasses=data.retention?.classes??data.index?.retentionClasses??[];
    this.redactionBehaviors=data.redaction?.values??data.index?.redactionBehaviors??[];
    this.deletionBehaviors=data.deletion?.values??data.index?.deletionBehaviors??[];
    this.consentRelevance=data.consentRelevance?.values??data.index?.consentRelevance??[];
    this.exportSensitivity=data.exportSensitivity?.values??data.index?.exportSensitivity??[];
    this.fieldHandling=data.fieldHandling?.entries??data.index?.fieldHandling??[];
    this.coverage=data.coverage?.areas??data.index?.coverage??[];
    this.operations=data.operations?.operations??data.index?.operations??[];
    this.consentBoundaries=data.consentBoundaries?.rules??data.index?.consentBoundaries??[];
    this.definitions=data.definitions??[];
    this.byHandlingId=new Map(this.fieldHandling.map(x=>[x.handlingId,x]));
  }
  get(id){return this.byHandlingId.get(id)??null;}
  search(f={}){const q=norm(f.q),cls=norm(f.classification),qual=norm(f.qualifier),ret=norm(f.retention),cons=norm(f.consent),pub=norm(f.public),redact=norm(f.redaction),flow=norm(f.flow),flowValue=norm(f.flowValue);return this.fieldHandling.filter(r=>{
    if(cls&&norm(r.classification)!==cls)return false;if(qual&&!(r.qualifiers??[]).some(x=>norm(x)===qual))return false;if(ret&&norm(r.retentionClass)!==ret)return false;if(cons&&norm(r.consentRelevance)!==cons)return false;if(pub==='eligible'&&r.publicDeliveryEligible!==true)return false;if(pub==='not-eligible'&&r.publicDeliveryEligible!==false)return false;if(redact&&norm(r.redactionBehavior)!==redact)return false;
    if(flow&&flowValue){const key={log:'logEligibility',event:'eventEligibility',webhook:'webhookEligibility',analytics:'analyticsEligibility'}[flow];if(key&&norm(r[key])!==flowValue)return false;}
    if(q){const hay=[r.handlingId,r.targetId,r.fieldPath,r.classification,r.purpose,r.retentionClass,r.exportSensitivity,r.consentRelevance,r.deletionBehavior,r.redactionBehavior,...(r.qualifiers??[]),...(r.relatedSecurityControls??[])].map(norm).join(' ');if(!hay.includes(q))return false;}return true;});}
  targets(){return [...new Set(this.fieldHandling.map(x=>x.targetId))].sort();}
  classById(id){return this.classifications.find(x=>x.id===id)??null;}
}
export async function loadPrivacyRegistry(){try{const [index,classifications,qualifiers,eligibility,retention,redaction,deletion,consentRelevance,exportSensitivity,operations,consentBoundaries,fieldHandling,coverage]=await Promise.all([
  fetchJson('./registry/privacy/index.json'),fetchJson('./registry/privacy/classifications.json'),fetchJson('./registry/privacy/qualifiers.json'),fetchJson('./registry/privacy/eligibility-values.json'),fetchJson('./registry/privacy/retention-classes.json'),fetchJson('./registry/privacy/redaction-behaviors.json'),fetchJson('./registry/privacy/deletion-behaviors.json'),fetchJson('./registry/privacy/consent-relevance.json'),fetchJson('./registry/privacy/export-sensitivity.json'),fetchJson('./registry/privacy/operations.json'),fetchJson('./registry/privacy/consent-boundaries.json'),fetchJson('./registry/privacy/field-handling.json'),fetchJson('./registry/privacy/coverage.json')]);return new PrivacyRegistryEngine({index,classifications,qualifiers,eligibility,retention,redaction,deletion,consentRelevance,exportSensitivity,operations,consentBoundaries,fieldHandling,coverage,definitions:GENERATED_PRIVACY.definitions??[]},'authoritative-json');}catch{return new PrivacyRegistryEngine(GENERATED_PRIVACY,'generated-local-fallback');}}
export function parsePrivacyFilters(search=''){const p=new URLSearchParams(String(search).replace(/^\?/,''));return {view:p.get('view')||'overview',id:p.get('id')||'',q:p.get('q')||'',classification:p.get('classification')||'',qualifier:p.get('qualifier')||'',retention:p.get('retention')||'',consent:p.get('consent')||'',redaction:p.get('redaction')||'',flow:p.get('flow')||'',flowValue:p.get('flowValue')||'',public:p.get('public')||''};}
export function buildPrivacyQuery(f={}){const p=new URLSearchParams();for(const k of ['view','id','q','classification','qualifier','retention','consent','redaction','flow','flowValue','public'])if(f[k])p.set(k,String(f[k]));const s=p.toString();return s?`?${s}`:'';}
