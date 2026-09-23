import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pass = [];
const fail = [];
const ok = (name, condition, detail = "") => condition ? pass.push(name) : fail.push(`${name}${detail ? `: ${detail}` : ""}`);
const read = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
const exists = (rel) => fs.existsSync(path.join(root, rel));
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();

ok("VERSION V1.4.0", version === "1.4.0", version);
ok("Package version", read("package.json").version === version);
ok("Current validator", read("package.json").scripts?.validate === "node scripts/validate-phase-41.mjs");

const required = [
  "standards/49-first-party-tracking-platform-standard.md",
  "developer/FIRST-PARTY-TRACKING-ARCHITECTURE-GAP-AUDIT.md",
  "developer/FIRST-PARTY-TRACKING-IMPLEMENTATION-PLAN.md",
  "registry/marketing/sdk-compatibility.json",
  "registry/releases/1.4.0/release-manifest.json"
];
for (const rel of required) ok(`Required ${rel}`, exists(rel), rel);

const marketing = read("registry/marketing/index.json");
const modules = read("registry/modules/index.json");
const api = read("registry/api/index.json");
const privacy = read("registry/privacy/field-handling.json");
const manifest = read("registry/manifests/nextf-site-manifest.schema.json");
const registry = read("registry/registry.json");
const releaseIndex = read("registry/releases/index.json");
const events = read("registry/marketing/tracking-events.json").events;
const schemaIds = new Set(marketing.schemas.map((item) => item.$id));
const apiIds = new Set(api.operations.map((item) => item.operationId));
const registryIds = new Set(registry.items.map((item) => item.id));

const expectedSchemas = ["marketing.visitorIdentityPolicy", "marketing.sessionPolicy", "marketing.trackingSdkDescriptor", "marketing.trackingCompatibility", "marketing.trackingCollectorPolicy", "marketing.trackingIngestionBatch", "marketing.trackingIngestionItemResult", "marketing.trackingIngestionReceipt", "marketing.invalidTrafficClassification", "marketing.analyticsReport", "marketing.trackingHealth"];
for (const id of expectedSchemas) { ok(`Schema ${id}`, schemaIds.has(id)); ok(`Registry ${id}`, registryIds.has(id)); }
ok("Canonical envelope retained", schemaIds.has("marketing.trackingEvent"));
ok("No parallel tracking domain", !read("registry/domains.json").domains.some((item) => item.id === "tracking"));

for (const id of ["analytics.first-party-collection", "analytics.tracking-sdk", "analytics.tracking-health"]) ok(`Capability ${id}`, modules.capabilities.some((item) => item.capabilityId === id));
for (const id of ["api.events.collect-browser-tracking", "api.events.ingest-tracking-batch", "api.customer-cms.get-analytics-report", "api.customer-cms.get-tracking-health", "api.nextf-admin.get-analytics-report", "api.nextf-admin.get-tracking-health"]) { ok(`API ${id}`, apiIds.has(id)); ok(`API registry ${id}`, registryIds.has(id)); }
const browser = api.operations.find((item) => item.operationId === "api.events.collect-browser-tracking");
ok("Browser collection anonymous", browser?.authentication.mode === "anonymous");
ok("Browser collection Site origin", browser?.policies.cors === "site-origin");
ok("Browser collection public-write limited", browser?.policies.rateLimit === "public-write");
ok("Browser collection has no permission/secret", browser?.authentication.permissions.length === 0);
const server = api.operations.find((item) => item.operationId === "api.events.ingest-tracking-batch");
ok("Server collection server-only", server?.authentication.mode === "site-server" && server?.policies.cors === "server-only");
ok("Batch ingestion idempotent", browser?.policies.idempotency.required && server?.policies.idempotency.required);

for (const key of ["navigation.route-changed", "engagement.session-engaged", "commerce.product-viewed", "commerce.cart-updated", "commerce.checkout-started"]) ok(`Tracking key ${key}`, events.some((item) => item.key === key));
ok("No authoritative order tracking key", !events.some((item) => ["commerce.order-created", "commerce.payment-succeeded", "commerce.refund-created"].includes(item.key)));

const trackingProps = manifest.$defs.trackingSupport.properties;
for (const key of ["enabled", "contractVersion", "sdkId", "sdkVersion", "collectorApiId", "consentMode", "retentionPolicyRef", "allowedEventNamespaces", "reportingEnabled"]) ok(`Manifest tracking ${key}`, !!trackingProps[key]);
ok("Tracking enabled defaults false", trackingProps.enabled?.default === false);

const handlingIds = new Set(privacy.entries.map((item) => item.handlingId));
for (const id of ["PRIV-FLD-090", "PRIV-FLD-091", "PRIV-FLD-092", "PRIV-FLD-093", "PRIV-FLD-094", "PRIV-FLD-095", "PRIV-FLD-096"]) ok(`Privacy ${id}`, handlingIds.has(id));
ok("No secret analytics eligibility", privacy.entries.filter((item) => item.classification === "secret").every((item) => item.analyticsEligibility === "prohibited"));

const compatibility = read("registry/marketing/sdk-compatibility.json");
ok("Compatibility contract defined", compatibility.records[0]?.compatibilityStatus === "contract-defined");
ok("Runtime truth not implemented", compatibility.records[0]?.runtimeDeploymentStatus === "not-implemented");
ok("V1.3.0 remains listed", releaseIndex.releases.some((item) => item.version === "1.3.0"));
ok("V1.4.0 current", releaseIndex.currentVersion === version);
for (const name of ["browser-page-view.json", "spa-route-change.json", "commerce-observations.json", "consent-denied-receipt.json", "duplicate-receipt.json", "staging-batch.json", "tracking-disabled.json", "server-form-conversion.json"]) ok(`Fixture ${name}`, exists(`registry/marketing/fixtures/valid/${name}`));

console.log(`NEXT F Contracts Phase 41 validation\nVersion: ${version}\nTracking schemas added: ${expectedSchemas.length}\nTracking API operations: 6\nTracking vocabulary events: ${events.length}\nPasses: ${pass.length}\nFailures: ${fail.length}`);
if (fail.length) { console.error(`\nFailures:\n${fail.map((item) => `- ${item}`).join("\n")}`); process.exit(1); }
console.log("PASS - V1.4.0 first-party tracking platform contracts are complete.");
