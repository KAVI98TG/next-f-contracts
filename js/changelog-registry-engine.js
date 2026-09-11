import { GENERATED_CHANGELOG } from './generated-changelog.js';

async function fetchJson(path){
  const response=await fetch(path,{cache:'no-store'});
  if(!response.ok)throw new Error(`HTTP ${response.status} for ${path}`);
  return response.json();
}
const n=(v)=>String(v??'').toLowerCase();
const semver=(v)=>String(v??'0.0.0').split('.').map(Number);
const cmp=(a,b)=>{const A=semver(a),B=semver(b);for(let i=0;i<3;i++){if(A[i]!==B[i])return A[i]-B[i];}return 0;};
const boolFilter=(v)=>v===true||v==='1'||v==='true'||v==='yes';

export class ChangelogEngine{
  constructor(data,source='authoritative-json'){
    this.data=data;this.source=source;
    this.index=data.index??{};
    this.sections=data.sections?.categories??[];
    this.evidenceLevels=data.evidenceLevels?.levels??[];
    this.policy=data.policy??{};
    this.releases=[...(data.releases??[])].sort((a,b)=>cmp(b.version,a.version));
    this.releaseIndex=data.releaseIndex??{};
    this.entryIndex=data.entryIndex??{};
    this.entries=data.entries??this.entryIndex.entries??[];
    this.definitions=data.definitions??[];
    this.contractHistory=data.contractHistory?.items??{};
    this.releaseMap=new Map(this.releases.map(x=>[x.version,x]));
    this.entryMap=new Map(this.entries.map(x=>[x.entryId,x]));
    this.categoryMap=new Map(this.sections.map(x=>[x.id,x]));
    this.evidenceMap=new Map(this.evidenceLevels.map(x=>[x.id,x]));
    this.phases=[...new Set(this.releases.map(x=>x.phase))].sort((a,b)=>a-b);
    this.domains=[...new Set(this.releases.flatMap(x=>x.affected?.domains??[]))].sort();
    this.modules=[...new Set(this.releases.flatMap(x=>x.affected?.modules??[]))].sort();
  }
  get currentVersion(){return this.index.currentVersion??this.releaseIndex.currentVersion??this.releases[0]?.version??'';}
  release(version){return this.releaseMap.get(version);}
  entry(id){return this.entryMap.get(id);}
  category(id){return this.categoryMap.get(id);}
  evidence(id){return this.evidenceMap.get(id);}
  history(registryId){return this.contractHistory[registryId]??null;}
  searchReleases(filters={}){
    const q=n(filters.q),release=filters.release??'',phase=String(filters.phase??''),category=filters.category??'',domain=filters.domain??'',module=filters.module??'',evidence=filters.evidence??'';
    const breaking=boolFilter(filters.breaking),migration=boolFilter(filters.migration);
    return this.releases.filter(r=>{
      if(release&&r.version!==release)return false;
      if(phase&&String(r.phase)!==phase)return false;
      if(evidence&&r.evidence?.evidenceLevel!==evidence)return false;
      if(category&&!Object.hasOwn(r.categoryCounts??{},category))return false;
      if(domain&&!(r.affected?.domains??[]).includes(domain))return false;
      if(module&&!(r.affected?.modules??[]).includes(module))return false;
      if(breaking&&r.breakingChange!==true)return false;
      if(migration&&r.migrationRequired!==true)return false;
      if(q){
        const body=[r.version,r.phase,r.title,r.summary,r.recordCompleteness,...(r.affected?.domains??[]),...(r.affected?.modules??[]),...(r.affected?.contracts??[]),...(r.sections??[]).flatMap(s=>[s.label,...s.entries.flatMap(e=>[e.entryId,e.title,e.description,e.summary,...(e.affectedRegistryIds??[])])])].map(n).join(' ');
        if(!body.includes(q))return false;
      }
      return true;
    });
  }
  searchEntries(filters={}){
    const q=n(filters.q),release=filters.release??'',phase=String(filters.phase??''),category=filters.category??'',domain=filters.domain??'',module=filters.module??'',evidence=filters.evidence??'',affected=filters.affected??'';
    const breaking=boolFilter(filters.breaking),migration=boolFilter(filters.migration);
    return this.entries.filter(e=>{
      if(release&&e.releaseVersion!==release)return false;
      const r=this.release(e.releaseVersion);
      if(phase&&String(r?.phase??'')!==phase)return false;
      if(category&&e.category!==category)return false;
      if(evidence&&r?.evidence?.evidenceLevel!==evidence)return false;
      if(domain&&!(e.affectedDomains??[]).includes(domain))return false;
      if(module&&!(e.affectedModules??[]).includes(module))return false;
      if(affected&&!(e.affectedRegistryIds??[]).includes(affected))return false;
      if(breaking&&e.impact?.breakingChange!==true)return false;
      if(migration&&e.impact?.migrationRequired!==true)return false;
      if(q){const body=[e.entryId,e.releaseVersion,e.category,e.changeType,e.originalSection,e.title,e.description,e.summary,e.impact?.compatibilityClassification,...(e.affectedRegistryIds??[]),...(e.affectedDomains??[]),...(e.affectedModules??[])].map(n).join(' ');if(!body.includes(q))return false;}
      return true;
    }).sort((a,b)=>cmp(b.releaseVersion,a.releaseVersion)||a.entryId.localeCompare(b.entryId));
  }
  releaseStats(){
    const exact=this.releases.filter(r=>r.provenance?.exactRegistrySnapshotAvailable).length;
    const notesOnly=this.releases.filter(r=>r.evidence?.evidenceLevel==='release-notes-only').length;
    const incomplete=this.releases.filter(r=>r.recordCompleteness==='incomplete').length;
    return {releaseCount:this.releases.length,entryCount:this.entries.length,exactCount:exact,notesOnlyCount:notesOnly,incompleteCount:incomplete};
  }
}

export async function loadChangelog(){
  try{
    const [index,sections,evidenceLevels,policy,releaseIndex,entryIndex,contractHistory]=await Promise.all([
      fetchJson('./registry/changelog/index.json'),fetchJson('./registry/changelog/sections.json'),fetchJson('./registry/changelog/evidence-levels.json'),fetchJson('./registry/changelog/policy.json'),fetchJson('./registry/changelog/release-index.json'),fetchJson('./registry/changelog/entry-index.json'),fetchJson('./registry/changelog/contract-history.json')
    ]);
    const releases=await Promise.all((releaseIndex.releases??[]).map(r=>fetchJson(`./${r.source}`)));
    return new ChangelogEngine({index,sections,evidenceLevels,policy,releaseIndex,entryIndex,entries:entryIndex.entries??[],contractHistory,releases,definitions:GENERATED_CHANGELOG.definitions??[]},'authoritative-json');
  }catch{
    return new ChangelogEngine(GENERATED_CHANGELOG,'generated-local-fallback');
  }
}

export function parseChangelogFilters(search=''){
  const p=new URLSearchParams(String(search).replace(/^\?/,''));
  const view=['overview','releases','entries','change','definitions'].includes(p.get('view'))?p.get('view'):'overview';
  return {view,q:p.get('q')??'',release:p.get('release')??'',entry:p.get('entry')??'',phase:p.get('phase')??'',category:p.get('category')??'',domain:p.get('domain')??'',module:p.get('module')??'',evidence:p.get('evidence')??'',breaking:p.get('breaking')==='1',migration:p.get('migration')==='1',affected:p.get('affected')??''};
}
export function buildChangelogQuery(f={}){
  const p=new URLSearchParams();if(f.view&&f.view!=='overview')p.set('view',f.view);if(f.q)p.set('q',f.q);if(f.release)p.set('release',f.release);if(f.entry)p.set('entry',f.entry);if(f.phase)p.set('phase',f.phase);if(f.category)p.set('category',f.category);if(f.domain)p.set('domain',f.domain);if(f.module)p.set('module',f.module);if(f.evidence)p.set('evidence',f.evidence);if(f.breaking)p.set('breaking','1');if(f.migration)p.set('migration','1');if(f.affected)p.set('affected',f.affected);const s=p.toString();return s?`?${s}`:'';
}
