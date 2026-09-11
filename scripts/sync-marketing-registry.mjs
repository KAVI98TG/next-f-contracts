import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();
const dir = path.join(root, "registry/marketing/definitions");
const files = fs.readdirSync(dir).filter((n) => n.endsWith(".json")).sort();
const schemas = files.map((n) => JSON.parse(fs.readFileSync(path.join(dir, n), "utf8"))).sort((a,b) => a.$id.localeCompare(b.$id));
const trackingEvents = JSON.parse(fs.readFileSync(path.join(root, "registry/marketing/tracking-events.json"), "utf8"));

const index = {
  registryVersion: version,
  schemaVersion: "1.0.0",
  title: "NEXT F Marketing and Tracking Contract Registry",
  description: "Generated index of authoritative Phase 9 Marketing and Tracking definitions.",
  definitionCount: schemas.length,
  sourceDirectory: "registry/marketing/definitions",
  trackingVocabulary: "registry/marketing/tracking-events.json",
  trackingEventCount: trackingEvents.events.length,
  trackingEvents: trackingEvents.events,
  schemas
};

const indexPath = path.join(root, "registry/marketing/index.json");
const raw = JSON.stringify(index, null, 2) + "\n";
fs.writeFileSync(indexPath, raw, "utf8");
const digest = crypto.createHash("sha256").update(raw).digest("hex");
fs.writeFileSync(
  path.join(root, "js/generated-marketing-schemas.js"),
  `// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source: registry/marketing/index.json\n// SHA-256: ${digest}\nexport const GENERATED_MARKETING_SCHEMAS_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_MARKETING_SCHEMAS = ${JSON.stringify(index, null, 2)};\n`,
  "utf8"
);

const registryPath = path.join(root, "registry/registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
registry.registryVersion = version;
registry.items = registry.items.filter((item) => item.managedBy !== "marketing-sync");

registry.items.push({
  id: "marketing.marketingTrackingContractStandard",
  name: "Marketing and Tracking Contract Standard",
  domain: "marketing",
  type: "standard",
  version,
  status: "stable",
  description: "Authoritative Phase 9 tracking, analytics, attribution, conversion, consent, destination and reporting boundaries.",
  source: "standards/17-marketing-tracking-contract-standard.md",
  phase: 9,
  introducedIn: version,
  tags: ["marketing","tracking","analytics","conversion","attribution","consent","standard"],
  relationships: [],
  permissions: [],
  events: [],
  managedBy: "marketing-sync"
});

registry.items.push({
  id: "marketing.standardTrackingEvents",
  name: "Standard Marketing Tracking Events",
  domain: "marketing",
  type: "vocabulary",
  version,
  status: "stable",
  description: "Provider-neutral Phase 9 website tracking keys such as page.viewed, form.submitted and lead.created.",
  source: "registry/marketing/tracking-events.json",
  phase: 9,
  introducedIn: version,
  tags: ["marketing","tracking","events","vocabulary"],
  relationships: [
    { type: "implements", target: "marketing.marketingTrackingContractStandard", description: "Implements the Phase 9 tracking naming and behavior standard." }
  ],
  permissions: [],
  events: trackingEvents.events.map((event) => event.key),
  managedBy: "marketing-sync"
});

for (const schema of schemas) {
  const key = schema.$id.split(".",2)[1].replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
  registry.items.push({
    id: schema.$id,
    name: schema.name,
    domain: "marketing",
    type: "schema",
    version: schema.version,
    status: schema.status,
    description: schema.description,
    source: `registry/marketing/definitions/${key}.json`,
    phase: 9,
    introducedIn: version,
    tags: ["marketing-schema", schema.category, schema.marketingModel.kind, ...schema.fields.map((f) => f.key).slice(0,6)],
    relationships: [
      { type: "implements", target: "marketing.marketingTrackingContractStandard", description: "Implements the Phase 9 Marketing and Tracking standard." },
      ...schema.relationships
    ],
    permissions: [],
    events: schema.$id === "marketing.trackingEventDefinition" ? trackingEvents.events.map((e) => e.key) : [],
    managedBy: "marketing-sync"
  });
}

registry.items.sort((a,b) => a.id.localeCompare(b.id));
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + "\n", "utf8");

const metaPath = path.join(root, "registry/registry-meta.json");
const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
meta.registryVersion = version;
meta.marketingDefinitions = "registry/marketing/definitions";
meta.marketingIndex = "registry/marketing/index.json";
meta.marketingDefinitionSchema = "registry/marketing/marketing-schema-definition.schema.json";
meta.marketingTrackingVocabulary = "registry/marketing/tracking-events.json";
fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n", "utf8");

for (const file of ["registry/domains.json","registry/types.json","registry/statuses.json"]) {
  const p = path.join(root,file);
  const data = JSON.parse(fs.readFileSync(p,"utf8"));
  data.registryVersion = version;
  fs.writeFileSync(p,JSON.stringify(data,null,2)+"\n","utf8");
}

const r = spawnSync(process.execPath,[path.join(root,"scripts/generate-registry-bootstrap.mjs")],{stdio:"inherit"});
if (r.status !== 0) process.exit(r.status ?? 1);
console.log(`Synchronized ${schemas.length} Marketing and Tracking Contracts and ${trackingEvents.events.length} standard tracking event keys.`);
