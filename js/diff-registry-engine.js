import { GENERATED_DIFF_COMPRESSED, GENERATED_DIFF_SMALL } from './generated-diff.js';

const IMPACT_RANK={none:0,metadata:10,documentation:20,'non-breaking':30,'review-required':40,deprecation:50,'potentially-breaking':60,breaking:70};
const VERSION_RECOMMENDATION_RANK={none:0,patch:10,minor:20,'manual-review':30,major:40};

function semverParts(v){return String(v||'0.0.0').split('.').map(x=>Number.parseInt(x,10)||0);}
function semverCompare(a,b){const aa=semverParts(a),bb=semverParts(b);for(let i=0;i<3;i++){if(aa[i]!==bb[i])return aa[i]-bb[i];}return 0;}
function escapePathSegment(v){return String(v).replaceAll('.','\\.');}
function equal(a,b){return JSON.stringify(a)===JSON.stringify(b);}
function isObject(v){return v&&typeof v==='object'&&!Array.isArray(v);}
function scalarKey(v){return typeof v==='string'?v:JSON.stringify(v);}

function keyedArray(value,keyName){
 if(!Array.isArray(value)||!value.length)return null;
 if(value.every(x=>isObject(x)&&x[keyName]!==undefined)){
  const out={};let unique=true;
  for(const x of value){const k=String(x[keyName]);if(Object.hasOwn(out,k)){unique=false;break;}out[k]=x;}
  return unique?out:null;
 }
 return null;
}

function normalizeForDiff(value,parentKey=''){
 if(Array.isArray(value)){
  let keyed=keyedArray(value,'key');
  if(keyed)return Object.fromEntries(Object.entries(keyed).map(([k,v])=>[`@key:${k}`,normalizeForDiff(v,parentKey)]));
  keyed=keyedArray(value,'id');
  if(keyed)return Object.fromEntries(Object.entries(keyed).map(([k,v])=>[`@id:${k}`,normalizeForDiff(v,parentKey)]));
  if(value.every(x=>isObject(x)&&x.type!==undefined&&x.target!==undefined)){
    const out={};for(const x of value){let k=`@rel:${x.type}|${x.target}`;let i=1;while(Object.hasOwn(out,k))k=`@rel:${x.type}|${x.target}|${i++}`;out[k]=normalizeForDiff(x,parentKey);}return out;
  }
  if(value.every(x=>!isObject(x)&&!Array.isArray(x)) && ['options','permissions','events','allowedValues','enum'].includes(parentKey)){
    return Object.fromEntries([...value].map(v=>[`@value:${scalarKey(v)}`,v]));
  }
  return value.map(v=>normalizeForDiff(v,parentKey));
 }
 if(isObject(value))return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,normalizeForDiff(v,k)]));
 return value;
}

function pathJoin(base,key){return base?`${base}.${escapePathSegment(key)}`:escapePathSegment(key);}
function deepChanges(before,after,path=''){
 const out=[];
 if(equal(before,after))return out;
 if(before===undefined){out.push({op:'add',path,before:undefined,after});return out;}
 if(after===undefined){out.push({op:'remove',path,before,after:undefined});return out;}
 if(Array.isArray(before)||Array.isArray(after)){
   if(!equal(before,after))out.push({op:'change',path,before,after});return out;
 }
 if(isObject(before)&&isObject(after)){
   const keys=new Set([...Object.keys(before),...Object.keys(after)]);
   for(const key of [...keys].sort())out.push(...deepChanges(before[key],after[key],pathJoin(path,key)));
   return out;
 }
 out.push({op:'change',path,before,after});return out;
}

function fieldRoot(path){const m=path.match(/(?:^|\.)fields\.@key:([^\.]+)/);return m?m[1].replaceAll('\\.','.'):null;}
function pathHas(path,needle){return path===needle||path.endsWith(`.${needle}`)||path.includes(`.${needle}.`);}
function numerical(v){return typeof v==='number'?v:Number(v);}

function classifyPathChange(change){
 const p=change.path;const field=fieldRoot(p);const before=change.before,after=change.after;
 const base={...change,field,confidence:'medium',changeType:'source-changed',impact:'review-required',summary:'Structural source changed and requires review.'};
 if(field && p.endsWith(`fields.@key:${field}`)){
   if(change.op==='add'){const required=Boolean(after?.required);return {...base,changeType:'field-added',impact:required?'breaking':'non-breaking',confidence:'high',summary:`Field ${field} was added${required?' as required':' as optional'}.`};}
   if(change.op==='remove')return {...base,changeType:'field-removed',impact:'breaking',confidence:'high',summary:`Field ${field} was removed.`};
 }
 if(field&&p.endsWith('.required')){
   if(before===false&&after===true)return {...base,changeType:'field-required-changed',impact:'breaking',confidence:'high',summary:`Field ${field} changed from optional to required.`};
   if(before===true&&after===false)return {...base,changeType:'field-required-changed',impact:'non-breaking',confidence:'high',summary:`Field ${field} changed from required to optional.`};
 }
 if(field&&p.endsWith('.nullable')){
   if(before===true&&after===false)return {...base,changeType:'field-nullability-changed',impact:'breaking',confidence:'high',summary:`Field ${field} no longer accepts null.`};
   if(before===false&&after===true)return {...base,changeType:'field-nullability-changed',impact:'non-breaking',confidence:'high',summary:`Field ${field} now accepts null.`};
 }
 if(field&&/(\.primitive|\.schema|\.itemsSchema|\.itemsPrimitive)$/.test(p))return {...base,changeType:'field-type-changed',impact:'breaking',confidence:'high',summary:`Field ${field} changed its canonical value/schema binding.`};
 if(p.includes('.options.@value:')||p.includes('.enum.@value:')||p.includes('.allowedValues.@value:')){
   if(change.op==='remove')return {...base,changeType:'enum-value-removed',impact:'breaking',confidence:'high',summary:'An allowed enum/select value was removed.'};
   if(change.op==='add')return {...base,changeType:'enum-value-added',impact:'potentially-breaking',confidence:'medium',summary:'An enum/select value was added; strict consumers require compatibility review.'};
 }
 const validationKey=['minLength','minimum','minItems','maxLength','maximum','maxItems'].find(k=>p.endsWith(`.${k}`));
 if(validationKey&&change.op==='change'){
   const b=numerical(before),a=numerical(after);if(Number.isFinite(a)&&Number.isFinite(b)){
     const tightened=['minLength','minimum','minItems'].includes(validationKey)?a>b:a<b;
     return {...base,changeType:tightened?'validation-tightened':'validation-relaxed',impact:tightened?'breaking':'non-breaking',confidence:'high',summary:`Validation constraint ${validationKey} ${tightened?'tightened':'relaxed'}.`};
   }
 }
 if(p.includes('relationships.@rel:')){
   if(change.op==='remove')return {...base,changeType:'relationship-removed',impact:'review-required',confidence:'medium',summary:'A structural relationship was removed.'};
   if(change.op==='add')return {...base,changeType:'relationship-added',impact:'non-breaking',confidence:'medium',summary:'A structural relationship was added.'};
 }
 if(p.includes('_registry.permissions.@value:')){
   if(change.op==='remove')return {...base,changeType:'permission-removed',impact:'breaking',confidence:'high',summary:'A canonical Permission association was removed.'};
   if(change.op==='add')return {...base,changeType:'permission-added',impact:'review-required',confidence:'medium',summary:'A Permission association was added; authorization impact requires review.'};
 }
 if(p.includes('_registry.events.@value:')){
   if(change.op==='remove')return {...base,changeType:'event-removed',impact:'breaking',confidence:'high',summary:'A canonical Event association was removed.'};
   if(change.op==='add')return {...base,changeType:'event-added',impact:'non-breaking',confidence:'high',summary:'A canonical Event association was added.'};
 }
 if(p.includes('validationRules.@id:')){
   if(change.op==='add')return {...base,changeType:'validation-rule-added',impact:'review-required',confidence:'medium',summary:'A named validation rule was added.'};
   if(change.op==='remove')return {...base,changeType:'validation-rule-removed',impact:'potentially-breaking',confidence:'medium',summary:'A named validation rule was removed.'};
   return {...base,changeType:'validation-rule-changed',impact:'review-required',confidence:'medium',summary:'A named validation rule changed and requires semantic review.'};
 }
 if(p.endsWith('.status')||p==='status'){
   if(before==='stable'&&after==='deprecated')return {...base,changeType:'status-changed',impact:'deprecation',confidence:'high',summary:'Lifecycle status changed from stable to deprecated.'};
   if(before==='deprecated'&&after==='removed')return {...base,changeType:'status-changed',impact:'breaking',confidence:'high',summary:'Deprecated contract was removed.'};
   return {...base,changeType:'status-changed',impact:'review-required',confidence:'medium',summary:`Lifecycle status changed from ${before} to ${after}.`};
 }
 if(p.endsWith('.version')||p==='version')return {...base,changeType:'version-changed',impact:'metadata',confidence:'high',summary:`Version metadata changed from ${before} to ${after}.`};
 return base;
}

function maxImpact(changes){return changes.reduce((best,x)=>(IMPACT_RANK[x.impact]??0)>(IMPACT_RANK[best]??0)?x.impact:best,'none');}
function recommendation(changes){
 const impacts=new Set(changes.map(x=>x.impact));
 if(impacts.has('breaking'))return 'major';
 if(impacts.has('potentially-breaking')||impacts.has('review-required'))return 'manual-review';
 if(impacts.has('non-breaking')||impacts.has('deprecation'))return 'minor';
 if(impacts.has('documentation')||impacts.has('metadata'))return 'patch';
 return 'none';
}

async function inflateBase64(encoded){
 const bin=atob(encoded);const bytes=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
 if(typeof DecompressionStream==='undefined')throw new Error('This browser cannot decompress the local Contract Diff fallback. Serve the portal over HTTP or use a browser with DecompressionStream support.');
 const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
 return new TextDecoder().decode(await new Response(stream).arrayBuffer());
}
let fallbackUsed=false;
async function loadJson(rel,fallbackKey){
 try{const response=await fetch(new URL(rel,import.meta.url));if(response.ok)return await response.json();}catch{/* file:// fallback */}
 fallbackUsed=true;
 const packed=GENERATED_DIFF_COMPRESSED[fallbackKey];if(!packed)throw new Error(`Missing generated Diff fallback: ${fallbackKey}`);
 return JSON.parse(await inflateBase64(packed.gzipBase64));
}

export class ContractDiffEngine{
 constructor(releaseIndex,manifests,snapshots,small,source){this.releaseIndex=releaseIndex;this.manifests=manifests.manifests;this.snapshots=snapshots.snapshots;this.changeTypes=small.changeTypes;this.impactLevels=small.impactLevels;this.rules=small.classificationRules;this.config=small.config;this.summaries=small.summaries.summaries;this.source=source;this.releaseByVersion=new Map(releaseIndex.releases.map(x=>[x.version,x]));}
 get releases(){return [...this.releaseIndex.releases].sort((a,b)=>semverCompare(a.version,b.version));}
 availableReleases(){return this.releases.filter(x=>x.available&&this.manifests[x.version]);}
 release(version){return this.releaseByVersion.get(version)||null;}
 manifest(version){return this.manifests[version]||null;}
 snapshot(hash){return hash?this.snapshots[hash]||null:null;}
 previousAvailable(version){const arr=this.availableReleases();const i=arr.findIndex(x=>x.version===version);return i>0?arr[i-1]:null;}
 history(itemId){const out=[];for(const r of this.availableReleases()){const m=this.manifest(r.version)?.items?.[itemId];if(m)out.push({release:r,manifest:m});}return out;}
 detail(itemId,fromVersion,toVersion){
  const a=this.manifest(fromVersion)?.items?.[itemId],b=this.manifest(toVersion)?.items?.[itemId];
  if(!a&&!b)return null;
  if(!a)return {itemId,name:b.name,domain:b.domain,type:b.type,changeKind:'added',impact:'non-breaking',recommendation:'minor',pathChanges:[{op:'add',path:'',before:undefined,after:{id:b.id},changeType:'item-added',impact:'non-breaking',confidence:'high',summary:'Canonical Registry item was added.'}],from:a,to:b,history:this.history(itemId)};
  if(!b)return {itemId,name:a.name,domain:a.domain,type:a.type,changeKind:'removed',impact:'breaking',recommendation:'major',pathChanges:[{op:'remove',path:'',before:{id:a.id},after:undefined,changeType:'item-removed',impact:'breaking',confidence:'high',summary:'Canonical Registry item was removed.'}],from:a,to:b,history:this.history(itemId)};
  const unchanged=a.sourceHash===b.sourceHash&&a.snapshotHash===b.snapshotHash&&a.associationHash===b.associationHash&&a.status===b.status&&a.version===b.version&&a.name===b.name&&a.domain===b.domain&&a.type===b.type;
  if(unchanged)return {itemId,name:b.name,domain:b.domain,type:b.type,changeKind:'unchanged',impact:'none',recommendation:'none',pathChanges:[],from:a,to:b,history:this.history(itemId)};
  const changes=[];
  if(a.status!==b.status)changes.push(classifyPathChange({op:'change',path:'status',before:a.status,after:b.status}));
  if(a.version!==b.version)changes.push(classifyPathChange({op:'change',path:'version',before:a.version,after:b.version}));
  if(a.name!==b.name)changes.push({op:'change',path:'name',before:a.name,after:b.name,changeType:'metadata-changed',impact:'metadata',confidence:'high',summary:'Registry display name changed.'});
  if(a.domain!==b.domain||a.type!==b.type)changes.push({op:'change',path:'registryIdentity',before:{domain:a.domain,type:a.type},after:{domain:b.domain,type:b.type},changeType:'metadata-changed',impact:'potentially-breaking',confidence:'high',summary:'Registry domain/type identity changed.'});
  if(a.snapshotHash&&b.snapshotHash&&a.snapshotHash!==b.snapshotHash){
    const sa=this.snapshot(a.snapshotHash)?.data,sb=this.snapshot(b.snapshotHash)?.data;
    if(sa&&sb){for(const raw of deepChanges(normalizeForDiff(sa),normalizeForDiff(sb)))changes.push(classifyPathChange(raw));}
    else changes.push({op:'change',path:'source',before:a.sourceHash,after:b.sourceHash,changeType:'source-changed',impact:'review-required',confidence:'low',summary:'Structured source changed but one historical semantic snapshot is unavailable.'});
  }else if(a.sourceHash!==b.sourceHash){changes.push({op:'change',path:'documentation',before:a.sourceHash,after:b.sourceHash,changeType:'documentation-changed',impact:'documentation',confidence:'high',summary:'Source text changed while the compact machine semantics remained unchanged.'});}
  if(!changes.length)changes.push({op:'change',path:'source',before:a.sourceHash,after:b.sourceHash,changeType:'source-changed',impact:'review-required',confidence:'low',summary:'A source or Registry association changed without a more specific automated classification.'});
  // De-duplicate exact machine classifications.
  const seen=new Set();let unique=changes.filter(x=>{const k=`${x.path}|${x.changeType}|${x.op}|${JSON.stringify(x.before)}|${JSON.stringify(x.after)}`;if(seen.has(k))return false;seen.add(k);return true;});
  const generatedAggregate=itemId==='portal.navigation'||itemId.startsWith('registry.')||itemId==='search.searchIndex'||itemId.startsWith('relationships.relationship');
  if(generatedAggregate){unique=unique.map(x=>x.impact==='review-required'&&x.changeType==='source-changed'?{...x,changeType:'metadata-changed',impact:'metadata',confidence:'medium',summary:'Generated aggregate metadata changed as the Registry evolved; canonical item changes are reviewed separately.'}:x);}
  return {itemId,name:b.name||a.name,domain:b.domain||a.domain,type:b.type||a.type,changeKind:'modified',impact:maxImpact(unique),recommendation:recommendation(unique),pathChanges:unique,from:a,to:b,history:this.history(itemId)};
 }
 compare(fromVersion,toVersion,filters={}){
  const ma=this.manifest(fromVersion),mb=this.manifest(toVersion);if(!ma||!mb)return {error:'One or both selected releases do not have an exact Registry snapshot.',fromVersion,toVersion,changes:[],summary:{}};
  const ids=[...new Set([...Object.keys(ma.items),...Object.keys(mb.items)])].sort();let all=ids.map(id=>this.detail(id,fromVersion,toVersion));
  const totals={added:0,removed:0,modified:0,unchanged:0,breaking:0,'potentially-breaking':0,'review-required':0,'non-breaking':0,deprecation:0,documentation:0,metadata:0,none:0};
  for(const d of all){totals[d.changeKind]=(totals[d.changeKind]??0)+1;totals[d.impact]=(totals[d.impact]??0)+1;}
  const recommendationValue=recommendation(all.flatMap(x=>x.pathChanges));
  const q=String(filters.q||'').trim().toLowerCase();
  all=all.filter(x=>(filters.includeUnchanged||x.changeKind!=='unchanged')&&(!q||`${x.itemId} ${x.name} ${x.domain} ${x.type}`.toLowerCase().includes(q))&&(!filters.domain||x.domain===filters.domain)&&(!filters.type||x.type===filters.type)&&(!filters.impact||x.impact===filters.impact)&&(!filters.change||x.changeKind===filters.change));
  const impactRank=x=>IMPACT_RANK[x.impact]??0;all.sort((a,b)=>impactRank(b)-impactRank(a)||a.itemId.localeCompare(b.itemId));
  return {fromVersion,toVersion,fromRelease:this.release(fromVersion),toRelease:this.release(toVersion),summary:totals,recommendedVersionImpact:recommendationValue,requiresManualReview:totals['review-required']>0||totals['potentially-breaking']>0,changes:all,totalFiltered:all.length,totalCompared:ids.length};
 }
}

export async function loadContractDiff(){
 const [releaseIndex,manifests,snapshots]=await Promise.all([
  loadJson('../registry/diff/release-index.json','releaseIndex'),
  loadJson('../registry/diff/release-manifests.json','releaseManifests'),
  loadJson('../registry/diff/snapshots.json','snapshots')
 ]);
 return new ContractDiffEngine(releaseIndex,manifests,snapshots,GENERATED_DIFF_SMALL,fallbackUsed?'generated-fallback':'authoritative-json');
}

export function parseDiffFilters(search=''){
 const p=new URLSearchParams(String(search).replace(/^\?/,''));return {from:p.get('from')||'0.25.0',to:p.get('to')||'0.26.0',q:p.get('q')||'',domain:p.get('domain')||'',type:p.get('type')||'',impact:p.get('impact')||'',change:p.get('change')||'',item:p.get('item')||'',includeUnchanged:p.get('unchanged')==='1'};
}
export function buildDiffQuery(f={}){const p=new URLSearchParams();for(const [k,v] of [['from',f.from],['to',f.to],['q',f.q],['domain',f.domain],['type',f.type],['impact',f.impact],['change',f.change],['item',f.item]])if(v)p.set(k,v);if(f.includeUnchanged)p.set('unchanged','1');const s=p.toString();return s?`?${s}`:'';}
