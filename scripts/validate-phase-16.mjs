import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root=process.cwd(), failures=[], passes=[];
const check=(name,condition,detail="")=>condition?passes.push(name):failures.push(`${name}${detail?`: ${detail}`:""}`);
const read=(p)=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const exists=(p)=>fs.existsSync(path.join(root,p));
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
check("Version is 0.17.0",version==="0.17.0",version);

const required=[
  "standards/24-site-manifest-standard.md",
  "registry/manifests/index.json",
  "registry/manifests/site-manifest-definition.schema.json",
  "registry/manifests/nextf-site-manifest.schema.json",
  "registry/manifests/categories.json",
  "registry/manifests/site-types.json",
  "registry/manifests/environment-kinds.json",
  "registry/manifests/runtime-capabilities.json",
  "registry/manifests/configuration-exposure-kinds.json",
  "registry/manifests/content-delivery-modes.json",
  "js/generated-site-manifests.js",
  "js/site-manifest-registry-engine.js",
  "js/site-manifest-pages.js",
  "css/site-manifest.css",
  "scripts/sync-site-manifest-registry.mjs"
];
required.forEach(f=>check(`Required file ${f}`,exists(f)));

const idx=read("registry/manifests/index.json");
const reg=read("registry/registry.json");
const domains=read("registry/domains.json");
const nav=read("registry/portal-navigation.json");
const meta=read("registry/registry-meta.json");
const events=read("registry/events/index.json");
const marketing=read("registry/marketing/tracking-events.json");
const integrations=read("registry/integrations/index.json");
const schema=read("registry/manifests/nextf-site-manifest.schema.json");

check("Manifest registry version",idx.registryVersion===version);
check("Manifest spec version",idx.schemaVersion==="1.0.0");
check("Sixteen manifest schemas",idx.schemas.length===16,String(idx.schemas.length));
check("Six reference manifests",idx.examples.length===6,String(idx.examples.length));
check("Six site types",idx.siteTypes.length===6,String(idx.siteTypes.length));
check("Four environment kinds",idx.environmentKinds.length===4,String(idx.environmentKinds.length));
check("Five runtime capabilities",idx.runtimeCapabilities.length===5,String(idx.runtimeCapabilities.length));
check("Three exposure kinds",idx.configurationExposureKinds.length===3,String(idx.configurationExposureKinds.length));
check("Three content delivery modes",idx.contentDeliveryModes.length===3,String(idx.contentDeliveryModes.length));

const schemaIds=idx.schemas.map(x=>x.$id);
check("Manifest schema IDs unique",new Set(schemaIds).size===schemaIds.length);
check("Root Site Manifest schema exists",schemaIds.includes("manifest.siteManifest"));
for(const s of idx.schemas){
  check(`${s.$id} stable`,s.status==="stable");
  check(`${s.$id} domain manifest`,s.domain==="manifest");
  check(`${s.$id} version current`,s.version===version);
  check(`${s.$id} has purpose`,typeof s.purpose==="string"&&s.purpose.length>20);
  check(`${s.$id} has fields`,Array.isArray(s.fields)&&s.fields.length>0);
  check(`${s.$id} has validation rules`,Array.isArray(s.validationRules)&&s.validationRules.length>0);
  const suffix=s.$id.split(".",2)[1].replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
  check(`${s.$id} source exists`,exists(`registry/manifests/definitions/${suffix}.json`));
}

check("Manifest domain registered",domains.domains.some(x=>x.id==="manifest"));
const registryIds=new Set(reg.items.map(x=>x.id));
for(const id of schemaIds)check(`Registry indexes ${id}`,registryIds.has(id));
for(const id of ["manifest.siteManifestStandard","manifest.index","manifest.nextfSiteJsonSchema","manifest.siteTypes","manifest.environmentKinds","manifest.runtimeCapabilities","manifest.configurationExposureKinds","manifest.contentDeliveryModes"]) check(`Registry indexes ${id}`,registryIds.has(id));
check("Registry version current",reg.registryVersion===version);
check("Registry meta version current",meta.registryVersion===version);
check("Manifest meta index",meta.siteManifestIndex==="registry/manifests/index.json");
check("Manifest meta validation schema",meta.siteManifestValidationSchema==="registry/manifests/nextf-site-manifest.schema.json");

const navItem=nav.groups.flatMap(g=>g.items||[]).find(x=>x.id==="development-site-manifest");
check("Site Manifest nav available",navItem?.status==="available"&&navItem.phase===16);

const canonicalEvents=new Set(events.events.map(x=>x.$id));
const trackingEvents=new Set((marketing.events??marketing.trackingEvents??marketing.items??[]).map(x=>x.id??x.$id??x.key));
const connectorIds=new Set(integrations.connectors.map(x=>x.$id));
const runtimeKeys=new Set(idx.runtimeCapabilities.map(x=>x.key));
const siteTypes=new Set(idx.siteTypes.map(x=>x.key));
const envKinds=new Set(idx.environmentKinds.map(x=>x.key));
const exposures=new Set(idx.configurationExposureKinds.map(x=>x.key));
const deliveryModes=new Set(idx.contentDeliveryModes.map(x=>x.key));

const requiredTop=["manifestVersion","contracts","site","localization","environments","contentDelivery","modules","runtime","cms","events","tracking","integrations","configuration"];
for(const exMeta of idx.examples){
  const ex=exMeta.data;
  check(`${exMeta.id} embedded example data`,ex&&typeof ex==="object");
  check(`${exMeta.id} source exists`,exists(exMeta.source));
  for(const k of requiredTop)check(`${exMeta.id} top-level ${k}`,Object.hasOwn(ex,k));
  check(`${exMeta.id} manifest spec exact`,ex.manifestVersion==="1.0.0"&&ex.contracts.manifestSpecVersion==="1.0.0");
  check(`${exMeta.id} contract version pinned`,/^\d+\.\d+\.\d+$/.test(ex.contracts.contractVersion)&&!/[*>~=^xX]/.test(ex.contracts.contractVersion));
  check(`${exMeta.id} current contract version`,ex.contracts.contractVersion===version);
  check(`${exMeta.id} site type controlled`,siteTypes.has(ex.site.siteType));
  check(`${exMeta.id} Site ID format`,/^site_[A-Za-z0-9_-]+$/.test(ex.site.siteId));
  check(`${exMeta.id} locale default supported`,ex.localization.supportedLocales.includes(ex.localization.defaultLocale));
  const envIds=ex.environments.map(x=>x.id);check(`${exMeta.id} environment IDs unique`,new Set(envIds).size===envIds.length);
  check(`${exMeta.id} environment kinds controlled`,ex.environments.every(x=>envKinds.has(x.kind)));
  check(`${exMeta.id} max one production`,ex.environments.filter(x=>x.enabled&&x.kind==="production").length<=1);
  check(`${exMeta.id} nondev HTTPS`,ex.environments.filter(x=>x.kind!=="development"&&x.baseUrl).every(x=>x.baseUrl.startsWith("https://")));
  check(`${exMeta.id} delivery mode controlled`,deliveryModes.has(ex.contentDelivery.mode));
  check(`${exMeta.id} published-only public delivery`,ex.contentDelivery.publishedOnly===true);
  check(`${exMeta.id} module IDs unique`,new Set(ex.modules.map(x=>x.moduleId)).size===ex.modules.length);
  check(`${exMeta.id} runtime keys exact`,[...runtimeKeys].every(k=>ex.runtime[k]===true)&&Object.keys(ex.runtime).every(k=>runtimeKeys.has(k)));
  check(`${exMeta.id} structured CMS`,ex.cms.workspaceMode==="site"&&ex.cms.editingMode==="structured"&&ex.cms.arbitraryCodeEditing===false);
  check(`${exMeta.id} API bindings deferred`,Array.isArray(ex.apiBindings)&&ex.apiBindings.length===0);
  check(`${exMeta.id} canonical Events resolve`,[...ex.events.produces,...ex.events.consumes].every(id=>canonicalEvents.has(id)));
  check(`${exMeta.id} tracking Events resolve`,ex.tracking.events.every(id=>trackingEvents.has(id)),ex.tracking.events.filter(id=>!trackingEvents.has(id)).join(","));
  check(`${exMeta.id} Integration connectors resolve`,ex.integrations.every(x=>connectorIds.has(x.connectorId)));
  check(`${exMeta.id} Integration environments resolve`,ex.integrations.every(x=>x.environments.every(id=>envIds.includes(id))));
  const configKeys=ex.configuration.map(x=>x.key);check(`${exMeta.id} configuration keys unique`,new Set(configKeys).size===configKeys.length);
  check(`${exMeta.id} exposure controlled`,ex.configuration.every(x=>exposures.has(x.exposure)));
  check(`${exMeta.id} config environments resolve`,ex.configuration.every(x=>x.environments.every(id=>envIds.includes(id))));
  check(`${exMeta.id} configuration has no values`,ex.configuration.every(x=>!("value" in x)&&!("secret" in x)&&!("token" in x)));
  check(`${exMeta.id} no hosting/domain credential keys`,!Object.keys(ex).some(k=>/hosting|registrar|dnscredential/i.test(k)));
  for(const ext of ex.extensions||[]){
    check(`${exMeta.id} extension ID namespaced`,/^extension\.[a-z][a-z0-9-]*\.[a-z][a-z0-9.-]*$/.test(ext.extensionId));
    check(`${exMeta.id} extension source relative`,!ext.source.startsWith("/")&&!ext.source.includes(".."));
  }
}

check("JSON Schema id correct",schema.$id.includes("nextf-site-manifest.schema.json"));
check("JSON Schema additional properties false",schema.additionalProperties===false);
check("JSON Schema manifest spec fixed",schema.properties.manifestVersion.const==="1.0.0");
check("JSON Schema arbitrary code false",schema.$defs.cms.properties.arbitraryCodeEditing.const===false);
check("JSON Schema publishedOnly true",schema.$defs.contentDelivery.properties.publishedOnly.const===true);
check("JSON Schema all runtime capabilities true",idx.runtimeCapabilities.every(x=>schema.$defs.runtime.properties[x.key]?.const===true));

const raw=fs.readFileSync(path.join(root,"registry/manifests/index.json"));
const digest=crypto.createHash("sha256").update(raw).digest("hex");
const generated=fs.readFileSync(path.join(root,"js/generated-site-manifests.js"),"utf8");
check("Generated Site Manifest digest",generated.includes(digest));

for(const f of ["js/generated-site-manifests.js","js/site-manifest-registry-engine.js","js/site-manifest-pages.js","js/app.js","js/router.js","js/routes.js","scripts/sync-site-manifest-registry.mjs"]){
  const r=spawnSync(process.execPath,["--check",path.join(root,f)],{encoding:"utf8"});check(`JS syntax ${f}`,r.status===0,r.stderr.trim());
}
const routes=fs.readFileSync(path.join(root,"js/routes.js"),"utf8");
const router=fs.readFileSync(path.join(root,"js/router.js"),"utf8");
const app=fs.readFileSync(path.join(root,"js/app.js"),"utf8");
check("Site Manifest route available",routes.includes('path: "/development/site-manifest"')&&routes.includes('phase: 16, status: "available"'));
check("Router renders Site Manifest",router.includes('route.path === "/development/site-manifest"')&&router.includes("renderSiteManifestIndex"));
check("Manifest detail specialized",router.includes('item.domain==="manifest"')&&router.includes("renderSiteManifestSchemaDetail"));
check("App loads Site Manifest",app.includes("loadSiteManifests"));

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");check("Site Manifest CSS loaded",html.includes("./css/site-manifest.css"));check("Version chip current",html.includes("v0.17.0"));check("Sidebar Phase 16",html.includes("Phase 16")&&html.includes("Site Manifest Specification"));
const css=fs.readdirSync(path.join(root,"css")).filter(x=>x.endsWith(".css")).map(x=>fs.readFileSync(path.join(root,"css",x),"utf8")).join("\n").toLowerCase();
check("No dark-mode media query",!css.includes("prefers-color-scheme: dark"));check("No backdrop-filter",!css.includes("backdrop-filter"));

console.log("NEXT F Contracts Phase 16 validation");
console.log(`Version: ${version}`);
console.log(`Manifest schemas: ${idx.schemas.length}`);
console.log(`Reference manifests: ${idx.examples.length}`);
console.log(`Site types: ${idx.siteTypes.length}`);
console.log(`Runtime capabilities: ${idx.runtimeCapabilities.length}`);
console.log(`Registry entries: ${reg.items.length}`);
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if(failures.length){console.error("Failures:");failures.forEach(x=>console.error(`- ${x}`));process.exit(1);}
console.log("PASS - Phase 16 Site Manifest Specification is internally consistent.");
