const loadGeneratedFallback = () => import("./generated-codex.js");
export async function loadCodexRegistry(){
  let data,source="authoritative-json";
  try{const r=await fetch("./registry/developer/index.json",{cache:"no-store"});if(!r.ok)throw new Error(`${r.status} ./registry/developer/index.json`);data=await r.json();}catch{const fallback=await loadGeneratedFallback();data=fallback.GENERATED_CODEX;source="generated-local-fallback";}
  const views={workflows:data.workflowStages??[],tasks:data.taskTypes??[],stops:data.stopConditions??[],artifacts:data.requiredArtifacts??[],changes:data.changeClasses??[],gates:data.qualityGates??[],schemas:data.supportSchemas??[]};
  return {data,source,...views,search(q="",f={}){const term=q.trim().toLowerCase();let rows=views[f.view]??views.workflows;return rows.filter(x=>!term||JSON.stringify(x).toLowerCase().includes(term));}};
}
export function parseCodexFilters(search=""){const p=new URLSearchParams(search);return {q:p.get("q")??"",view:p.get("view")??"workflows"};}
export function buildCodexQuery(f){const p=new URLSearchParams();if(f.q)p.set("q",f.q);if(f.view&&f.view!=="workflows")p.set("view",f.view);const s=p.toString();return s?`?${s}`:"";}
