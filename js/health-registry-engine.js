const loadGeneratedFallback=()=>import('./generated-health.js');
const loadGeneratedReleaseFallback=()=>import('./generated-release.js');
function valid(data){return data&&data.index&&data.report&&Array.isArray(data.report.checks);}
async function loadAuthoritative(){
  if(location.protocol==='file:')throw new Error('file protocol uses generated health fallback');
  const [i,r,releases]=await Promise.all([
    fetch('./registry/qa/index.json',{cache:'no-store'}),
    fetch('./registry/qa/report.json',{cache:'no-store'}),
    fetch('./registry/releases/index.json',{cache:'no-store'})
  ]);
  if(!i.ok||!r.ok)throw new Error('Registry Health source unavailable');
  const data={index:await i.json(),report:await r.json(),productionRelease:null};
  if(releases.ok){
    const releaseIndex=await releases.json();
    const [a,m]=await Promise.all([
      fetch(`./${releaseIndex.productionAcceptance}`,{cache:'no-store'}),
      fetch(`./${releaseIndex.releaseManifest}`,{cache:'no-store'})
    ]);
    if(a.ok&&m.ok)data.productionRelease={acceptance:await a.json(),manifest:await m.json()};
  }
  if(!valid(data))throw new Error('Registry Health runtime validation failed');
  return data;
}
export class HealthRegistryEngine{
  constructor(data,source='generated',digest=null){if(!valid(data))throw new Error('Invalid Registry Health data');this.index=data.index;this.report=data.report;this.productionRelease=data.productionRelease??null;this.source=source;this.sourceDigest=digest;}
  filter({q='',category='',result='',severity=''}={}){const needle=q.trim().toLowerCase();return this.report.checks.filter(x=>(!category||x.category===category)&&(!result||x.result===result)&&(!severity||x.severity===severity)&&(!needle||[x.checkId,x.category,x.description,...(x.affectedDefinitions||[]),...(x.evidence||[])].join(' ').toLowerCase().includes(needle)));}
}
export async function loadHealthRegistry(){
  try{return new HealthRegistryEngine(await loadAuthoritative(),'authoritative-json',null);}
  catch(error){
    console.info('Using generated Registry Health fallback',error?.message??error);
    const [h,rel]=await Promise.all([loadGeneratedFallback(),loadGeneratedReleaseFallback().catch(()=>null)]);
    return new HealthRegistryEngine({...h.GENERATED_HEALTH,productionRelease:rel?.GENERATED_RELEASE?{acceptance:rel.GENERATED_RELEASE.acceptance,manifest:rel.GENERATED_RELEASE.manifest}:null},'generated',h.GENERATED_HEALTH_SOURCE_SHA256);
  }
}
