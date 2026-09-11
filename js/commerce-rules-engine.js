const loadGeneratedFallback = () => import("./generated-commerce-rules.js");

const norm=(v)=>String(v??"").trim().toLowerCase();

function valid(payload){
  return payload && payload.rulesIndex && payload.rulesIndex.registryVersion &&
    Array.isArray(payload.rulesIndex.rules) &&
    payload.rulesIndex.rules.every((r)=>r && /^commerce\.rule\.[A-Za-z0-9]+$/.test(r.$id) &&
      r.domain==="commerce" && r.version && r.category && r.ruleKind &&
      ["standard","high","critical"].includes(r.severity) &&
      typeof r.configurable==="boolean" && Array.isArray(r.appliesTo) &&
      r.enforcement?.authority==="server" && r.enforcement?.clientValidationOnly===false &&
      Array.isArray(r.requirements) && r.failure?.code && Array.isArray(r.relationships)) &&
    Array.isArray(payload.stateMachines?.stateMachines) &&
    Array.isArray(payload.commandPolicies?.commands) &&
    Array.isArray(payload.errorCodes?.errors);
}

async function fetchJson(path){
  const r=await fetch(path,{cache:"no-store"});
  if(!r.ok)throw new Error(`${path} failed with ${r.status}`);
  return r.json();
}
async function loadAuthoritative(){
  if(window.location.protocol==="file:") throw new Error("file protocol uses generated Commerce Rules fallback");
  const [rulesIndex,stateMachines,commandPolicies,errorCodes]=await Promise.all([
    fetchJson("./registry/commerce/rules/index.json"),
    fetchJson("./registry/commerce/rules/state-machines.json"),
    fetchJson("./registry/commerce/rules/command-policies.json"),
    fetchJson("./registry/commerce/rules/error-codes.json")
  ]);
  const data={registryVersion:rulesIndex.registryVersion,rulesIndex,stateMachines,commandPolicies,errorCodes};
  if(!valid(data))throw new Error("Commerce Rules runtime validation failed");
  return data;
}

export class CommerceRulesEngine{
  constructor(data,source="generated",sourceDigest=null){
    if(!valid(data))throw new Error("Invalid Commerce Rules data");
    this.data=data; this.source=source; this.sourceDigest=sourceDigest;
    this.rules=Object.freeze(data.rulesIndex.rules.map(x=>Object.freeze({...x})));
    this.byId=new Map(this.rules.map(x=>[x.$id,x]));
    this.categories=data.rulesIndex.categories;
    this.stateMachines=data.stateMachines.stateMachines;
    this.commands=data.commandPolicies.commands;
    this.errors=data.errorCodes.errors;
    this.kinds=[...new Set(this.rules.map(r=>r.ruleKind))].sort();
    this.severities=["critical","high","standard"];
  }
  get size(){return this.rules.length}
  get(id){return this.byId.get(id)??null}
  search(q="",{category="",kind="",severity="",policy="",audit=""}={}){
    const query=norm(q),cat=norm(category),k=norm(kind),sev=norm(severity),pol=norm(policy),au=norm(audit);
    return this.rules.filter(r=>{
      if(cat&&norm(r.category)!==cat)return false;
      if(k&&norm(r.ruleKind)!==k)return false;
      if(sev&&norm(r.severity)!==sev)return false;
      if(pol==="fixed"&&r.configurable)return false;
      if(pol==="configurable"&&!r.configurable)return false;
      if(au==="yes"&&!r.enforcement.auditRequired)return false;
      if(au==="no"&&r.enforcement.auditRequired)return false;
      if(!query)return true;
      return [
        r.$id,r.name,r.description,r.purpose,r.category,r.ruleKind,r.severity,
        ...r.appliesTo,...r.requirements.flatMap(x=>[x.id,x.description]),
        r.failure?.code,...r.implementationNotes
      ].join(" ").toLowerCase().includes(query);
    }).sort((a,b)=>a.name.localeCompare(b.name,undefined,{sensitivity:"base",numeric:true}));
  }
}
export async function loadCommerceRules(){
  try{return new CommerceRulesEngine(await loadAuthoritative(),"authoritative-json",null)}
  catch(error){
    console.info("Using generated Commerce Rules fallback",error?.message??error);
    return new CommerceRulesEngine((await loadGeneratedFallback()).GENERATED_COMMERCE_RULES,"generated",(await loadGeneratedFallback()).GENERATED_COMMERCE_RULES_SOURCE_SHA256);
  }
}
export function parseCommerceRuleFilters(search=""){
  const p=new URLSearchParams(search.replace(/^\?/,""));
  return {q:p.get("q")??"",category:p.get("category")??"",kind:p.get("kind")??"",severity:p.get("severity")??"",policy:p.get("policy")??"",audit:p.get("audit")??""};
}
export function buildCommerceRuleQuery(f={}){
  const p=new URLSearchParams();
  for(const k of ["q","category","kind","severity","policy","audit"])if(f[k])p.set(k,f[k]);
  return p.toString()?`?${p}`:"";
}
