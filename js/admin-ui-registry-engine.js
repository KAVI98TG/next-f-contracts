const loadGeneratedFallback = () => import("./generated-admin-ui.js");
export async function loadAdminUiRegistry(){
  let data,source="authoritative-json";
  try{const r=await fetch("./registry/admin-ui/index.json",{cache:"no-store"});if(!r.ok)throw new Error(`${r.status} ./registry/admin-ui/index.json`);data=await r.json();}catch{const fallback=await loadGeneratedFallback();data=fallback.GENERATED_ADMIN_UI;source="generated-local-fallback";}
  const profiles=data.profiles??[],controls=data.controls??[],panels=data.panels??[],schemas=data.supportSchemas??[];
  const byId=new Map();
  for(const x of profiles)byId.set(x.$id,x);
  for(const x of controls)byId.set(`adminUi.control.${x.id}`,x);
  for(const x of panels)byId.set(`adminUi.panel.${x.id}`,x);
  for(const x of schemas)byId.set(x.$id,x);
  return {data,source,profiles,controls,panels,schemas,get:id=>byId.get(id),search(q="",f={}){
    const term=q.trim().toLowerCase();let rows=profiles;
    if(f.view==="controls")rows=controls.map(x=>({...x,$id:`adminUi.control.${x.id}`}));
    else if(f.view==="panels")rows=panels.map(x=>({...x,$id:`adminUi.panel.${x.id}`}));
    else if(f.view==="schemas")rows=schemas;
    return rows.filter(x=>{const hay=JSON.stringify(x).toLowerCase();return (!term||hay.includes(term))&&(!f.kind||x.screenKind===f.kind)&&(!f.domain||x.permissionDomain===f.domain)&&(!f.context||x.context?.kind===f.context);}).sort((a,b)=>(a.name||a.label||a.id).localeCompare(b.name||b.label||b.id));
  }};
}
export function parseAdminUiFilters(search=""){const p=new URLSearchParams(search);return {q:p.get("q")??"",view:p.get("view")??"profiles",kind:p.get("kind")??"",domain:p.get("domain")??"",context:p.get("context")??""};}
export function buildAdminUiQuery(f){const p=new URLSearchParams();for(const k of ["q","view","kind","domain","context"])if(f[k])p.set(k,f[k]);const s=p.toString();return s?`?${s}`:"";}
