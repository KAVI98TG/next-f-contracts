import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();
const indexPath = path.join(root, "registry/manifests/index.json");
const registryPath = path.join(root, "registry/registry.json");
const domainsPath = path.join(root, "registry/domains.json");
const metaPath = path.join(root, "registry/registry-meta.json");
const navPath = path.join(root, "registry/portal-navigation.json");
const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const domains = JSON.parse(fs.readFileSync(domainsPath, "utf8"));
const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
const nav = JSON.parse(fs.readFileSync(navPath, "utf8"));

registry.registryVersion = version;
registry.items = registry.items.filter((item) => item.managedBy !== "manifest-sync");

if (!domains.domains.some((x) => x.id === "manifest")) {
  domains.domains.push({
    id: "manifest",
    label: "Site Manifest",
    description: "Repository-side Site identity, pinned contract versions, environments, modules, runtime, CMS, Events, integrations and extension declarations."
  });
}
domains.registryVersion = version;
domains.domains.sort((a,b)=>a.id.localeCompare(b.id));

const standard = {
  id: "manifest.siteManifestStandard", name: "Site Manifest Specification", domain: "manifest", type: "standard", version,
  status: "stable", description: "Authoritative rules for nextf.site.json, contract pinning, Site identity, runtime, modules, environments and integration support.",
  source: "standards/24-site-manifest-standard.md", phase: 16, introducedIn: version,
  tags: ["site-manifest","development","codex","contract-pinning"], relationships: [], permissions: [], events: [], managedBy: "manifest-sync"
};
const machine = [
  ["manifest.index","Site Manifest Registry","machine-registry","registry/manifests/index.json","Authoritative index of Site Manifest support schemas, vocabularies and examples."],
  ["manifest.nextfSiteJsonSchema","nextf.site.json Validation Schema","machine-registry","registry/manifests/nextf-site-manifest.schema.json","Self-contained JSON Schema for validating the canonical nextf.site.json structure."],
  ["manifest.siteTypes","Site Types","vocabulary","registry/manifests/site-types.json","Controlled descriptive Site type vocabulary."],
  ["manifest.environmentKinds","Environment Kinds","vocabulary","registry/manifests/environment-kinds.json","Controlled development, preview, staging and production environment kinds."],
  ["manifest.runtimeCapabilities","Runtime Capabilities","vocabulary","registry/manifests/runtime-capabilities.json","Mandatory baseline NEXT F runtime capability vocabulary."],
  ["manifest.configurationExposureKinds","Configuration Exposure Kinds","vocabulary","registry/manifests/configuration-exposure-kinds.json","Controlled public, server-only and secret configuration exposure classes."],
  ["manifest.contentDeliveryModes","Content Delivery Modes","vocabulary","registry/manifests/content-delivery-modes.json","Controlled runtime, build-time and hybrid structured-content delivery modes."]
].map(([id,name,type,source,description])=>({id,name,domain:"manifest",type,version,status:"stable",description,source,phase:16,introducedIn:version,tags:["site-manifest","development"],relationships:[{type:"implements",target:"manifest.siteManifestStandard",description:"Implements or supports the Phase 16 Site Manifest specification."}],permissions:[],events:[],managedBy:"manifest-sync"}));

const schemaItems = index.schemas.map((schema) => {
  const rel = schema.$id.split(".",2)[1].replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
  return {
    id: schema.$id, name: schema.name, domain: "manifest", type: "schema", version, status: schema.status,
    description: schema.description, source: `registry/manifests/definitions/${rel}.json`, phase: 16, introducedIn: version,
    tags: ["site-manifest", schema.category, schema.manifestModel?.kind ?? "embedded"],
    relationships: [{type:"implements",target:"manifest.siteManifestStandard",description:"Implements the Phase 16 Site Manifest specification."}, ...(schema.relationships ?? [])],
    permissions: [], events: [], managedBy: "manifest-sync"
  };
});

registry.items.push(standard, ...machine, ...schemaItems);
registry.items.sort((a,b)=>a.id.localeCompare(b.id));

meta.registryVersion = version;
meta.siteManifestIndex = "registry/manifests/index.json";
meta.siteManifestDefinitions = "registry/manifests/definitions";
meta.siteManifestDefinitionSchema = "registry/manifests/site-manifest-definition.schema.json";
meta.siteManifestValidationSchema = "registry/manifests/nextf-site-manifest.schema.json";
meta.siteManifestExamples = "registry/manifests/examples";
meta.siteManifestStandard = "standards/24-site-manifest-standard.md";

nav.registryVersion = version;
for (const group of nav.groups ?? []) {
  for (const item of group.items ?? []) {
    if (item.id === "development-site-manifest") { item.status = "available"; item.phase = 16; }
  }
}

fs.writeFileSync(registryPath, JSON.stringify(registry,null,2)+"\n");
fs.writeFileSync(domainsPath, JSON.stringify(domains,null,2)+"\n");
fs.writeFileSync(metaPath, JSON.stringify(meta,null,2)+"\n");
fs.writeFileSync(navPath, JSON.stringify(nav,null,2)+"\n");

const raw = fs.readFileSync(indexPath);
const digest = crypto.createHash("sha256").update(raw).digest("hex");
fs.writeFileSync(path.join(root,"js/generated-site-manifests.js"), `// Generated from registry/manifests/index.json\n// SHA-256: ${digest}\nexport const GENERATED_SITE_MANIFESTS_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_SITE_MANIFESTS = ${JSON.stringify(index)};\n`);
console.log(`Site Manifest registry synchronized: ${index.schemas.length} schemas, ${index.examples.length} examples.`);
