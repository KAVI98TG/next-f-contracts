const loadGeneratedFallback = () => import("./generated-cms-ui.js");
export async function loadCmsUiRegistry(){
  let data,source="authoritative-json";
  try{const r=await fetch("./registry/cms-ui/index.json",{cache:"no-store"});if(!r.ok)throw new Error(`${r.status} ./registry/cms-ui/index.json`);data=await r.json();}catch{const fallback=await loadGeneratedFallback();data=fallback.GENERATED_CMS_UI;source="generated-local-fallback";}
  const profiles=data.profiles??[],editors=data.editors??[],schemas=data.supportSchemas??[];
  const byId=new Map([...profiles,...schemas].map(x=>[x.$id,x]));
  for(const ed of editors)byId.set(`cms-ui.editor.${ed.id}`,ed);
  return {data,source,profiles,editors,schemas,get:id=>byId.get(id),search(q="",f={}){const term=q.trim().toLowerCase();let rows=f.view==="editors"?editors.map(x=>({...x,$id:`cms-ui.editor.${x.id}`,screenKind:"editor-control",moduleId:"",resource:""})):f.view==="schemas"?schemas:profiles;return rows.filter(x=>{const hay=JSON.stringify(x).toLowerCase();return (!term||hay.includes(term))&&(!f.kind||x.screenKind===f.kind)&&(!f.module||x.moduleId===f.module)&&(!f.domain||x.resource?.split('.')[0]===f.domain);}).sort((a,b)=>(a.name||a.label||a.id).localeCompare(b.name||b.label||b.id));}};
}
export function parseCmsUiFilters(search=""){const p=new URLSearchParams(search);return {q:p.get("q")??"",view:p.get("view")??"profiles",kind:p.get("kind")??"",module:p.get("module")??"",domain:p.get("domain")??""};}
export function buildCmsUiQuery(f){const p=new URLSearchParams();for(const k of ["q","view","kind","module","domain"])if(f[k])p.set(k,f[k]);const s=p.toString();return s?`?${s}`:"";}
