import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const pass = [];
const fail = [];
const ok = (name, condition, detail = "") => condition ? pass.push(name) : fail.push(`${name}${detail ? `: ${detail}` : ""}`);
const read = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
const exists = (rel) => fs.existsSync(path.join(root, rel));
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();

ok("VERSION V1.2.0", version === "1.2.0", version);
ok("Package version", read("package.json").version === version);
ok("Current validator", read("package.json").scripts?.validate === "node scripts/validate-phase-39.mjs");

const required = [
  "standards/47-gaming-store-contract-standard.md",
  "registry/gaming/index.json",
  "registry/modules/index.json",
  "registry/api/index.json",
  "registry/permissions/index.json",
  "registry/events/index.json",
  "registry/integrations/index.json",
  "starters/gaming/nextf.site.json",
  "registry/releases/1.2.0/release-manifest.json"
];
for (const rel of required) ok(`Required source ${rel}`, exists(rel), rel);

const gaming = read("registry/gaming/index.json");
const modules = read("registry/modules/index.json");
const api = read("registry/api/index.json");
const permissions = read("registry/permissions/index.json");
const events = read("registry/events/index.json");
const integrations = read("registry/integrations/index.json");
const registry = read("registry/registry.json");
const starter = read("starters/gaming/nextf.site.json");
const releaseIndex = read("registry/releases/index.json");

const regIds = new Set(registry.items.map((item) => item.id));
const schemaIds = new Set(gaming.schemas.map((schema) => schema.$id));
const capabilityIds = new Set(modules.capabilities.map((cap) => cap.capabilityId));
const permissionIds = new Set(permissions.permissions.map((permission) => permission.permissionId));
const eventIds = new Set(events.events.map((event) => event.eventKey));
const apiIds = new Set(api.operations.map((operation) => operation.operationId));
const groupIds = new Set(api.groups.map((group) => group.apiId));
const connectorIds = new Set(integrations.connectors.map((connector) => connector.$id));

ok("Gaming index version", gaming.registryVersion === version, gaming.registryVersion);
ok("Gaming has canonical schemas", gaming.schemas.length >= 14, gaming.schemas.length);
ok("Gaming schemas unique", schemaIds.size === gaming.schemas.length);
ok("Gaming domain registered", read("registry/domains.json").domains.some((domain) => domain.id === "gaming"));
ok("Gaming module exists", modules.modules.some((module) => module.moduleId === "gaming"));
ok("Gaming capabilities count", modules.capabilities.filter((cap) => cap.moduleId === "gaming").length === 13);
ok("Gaming starter pins version", starter.contracts.contractVersion === version);
ok("Gaming starter uses exact site type", starter.site.siteType === "gaming");
ok("Release index current", releaseIndex.currentVersion === version);
ok("Immutable V1.0.0 still listed", releaseIndex.releases.some((release) => release.version === "1.0.0"));
ok("Immutable V1.1.0 still listed", releaseIndex.releases.some((release) => release.version === "1.1.0"));

for (const id of ["gaming.product", "gaming.offer", "gaming.purchaseField", "gaming.accountValidationPolicy", "gaming.regionRule", "gaming.availability", "gaming.supplierCapabilities", "gaming.supplierOfferMapping", "gaming.internalQuote", "gaming.publicQuote", "gaming.internalOrder", "gaming.publicOrder", "gaming.fulfillment", "gaming.digitalDeliverable"]) {
  ok(`Schema ${id}`, schemaIds.has(id));
  ok(`Registry item ${id}`, regIds.has(id));
}

for (const permission of ["gaming.read", "gaming.orders.manage", "gaming.products.manage", "gaming.suppliers.manage", "gaming.finance.manage"]) {
  ok(`Permission ${permission}`, permissionIds.has(permission));
  ok(`Permission source ${permission}`, exists(`registry/permissions/permissions/${permission}.json`));
}

for (const event of ["gaming.order-created", "gaming.payment-confirmed", "gaming.account-validated", "gaming.fulfillment-submitted", "gaming.fulfillment-processing", "gaming.fulfillment-completed", "gaming.fulfillment-failed", "gaming.refund-requested", "gaming.refund-completed", "gaming.catalog-sync-completed", "gaming.catalog-sync-failed", "gaming.supplier-availability-changed", "gaming.supplier-health-changed"]) {
  ok(`Event ${event}`, eventIds.has(event));
  ok(`Event source ${event}`, exists(`registry/events/events/${event.replace(".", "--")}.json`));
}

for (const group of ["api.gaming-public", "api.gaming-admin", "api.gaming-service"]) ok(`API group ${group}`, groupIds.has(group));
for (const operation of api.operations.filter((operation) => operation.operationId.startsWith("api.gaming-"))) {
  ok(`Operation indexed ${operation.operationId}`, regIds.has(operation.operationId));
  ok(`Operation contracts resolve ${operation.operationId}`, operation.contractBindings.every((id) => regIds.has(id)), operation.contractBindings.filter((id) => !regIds.has(id)).join(","));
  ok(`Operation permissions resolve ${operation.operationId}`, operation.authentication.permissions.every((id) => permissionIds.has(id)), operation.authentication.permissions.filter((id) => !permissionIds.has(id)).join(","));
  ok(`Operation events resolve ${operation.operationId}`, operation.eventBindings.every((id) => eventIds.has(id)), operation.eventBindings.filter((id) => !eventIds.has(id)).join(","));
}
ok("No browser payment confirmation operation", !api.operations.some((operation) => operation.operationId.includes("payment-confirm") && operation.publicSurface));
ok("Secure delivery not anonymous", api.operations.find((operation) => operation.operationId === "api.gaming-public.get-order-delivery")?.authentication.mode === "commerce-customer");

for (const connector of ["integrations.gamingSupplier", "integrations.fazerCards"]) {
  ok(`Connector ${connector}`, connectorIds.has(connector));
  const row = integrations.connectors.find((item) => item.$id === connector);
  ok(`Connector secrets server-side ${connector}`, row?.dataHandling?.secretsServerSide === true);
  ok(`Connector not public config ${connector}`, row?.configurationFields?.every((field) => field.publicClientEligible === false));
}

const publicSchemas = gaming.schemas.filter((schema) => schema.gamingModel.publicEligible);
ok("Public projections exist", publicSchemas.some((schema) => schema.$id === "gaming.publicQuote") && publicSchemas.some((schema) => schema.$id === "gaming.publicOrder"));
for (const schema of publicSchemas) {
  const text = JSON.stringify(schema).toLowerCase();
  ok(`Public schema no supplier cost ${schema.$id}`, !text.includes("suppliercost") && !text.includes("supplier cost"));
  ok(`Public schema no provider payload ${schema.$id}`, !text.includes("raw provider"));
}
const secretSchema = gaming.schemas.find((schema) => schema.$id === "gaming.digitalDeliverable");
ok("Digital deliverable secret classified", secretSchema?.gamingModel?.dataSensitivity === "secret");
ok("Digital deliverable uses valueRef", secretSchema?.fields?.some((field) => field.key === "valueRef"));

for (const module of starter.modules.filter((module) => module.enabled)) {
  ok(`Starter module resolves ${module.moduleId}`, modules.modules.some((row) => row.moduleId === module.moduleId));
  for (const cap of module.capabilities ?? []) ok(`Starter capability resolves ${cap.capabilityId}`, capabilityIds.has(cap.capabilityId));
}
for (const binding of starter.apiBindings) ok(`Starter API group resolves ${binding.apiId}`, groupIds.has(binding.apiId));
for (const event of [...starter.events.produces, ...starter.events.consumes]) ok(`Starter event resolves ${event}`, eventIds.has(event));
for (const integration of starter.integrations) ok(`Starter connector resolves ${integration.connectorId}`, connectorIds.has(integration.connectorId));
ok("No plaintext supplier secret in starter", !JSON.stringify(starter).includes("sk_") && !JSON.stringify(starter).toLowerCase().includes("api key value"));

const generated = fs.readFileSync(path.join(root, "js/generated-gaming-schemas.js"), "utf8");
const digest = crypto.createHash("sha256").update(fs.readFileSync(path.join(root, "registry/gaming/index.json"))).digest("hex");
ok("Generated Gaming digest current", generated.includes(digest));

console.log(`NEXT F Contracts Phase 39 validation
Version: ${version}
Gaming schemas: ${gaming.schemas.length}
Gaming capabilities: ${modules.capabilities.filter((cap) => cap.moduleId === "gaming").length}
Gaming API operations: ${api.operations.filter((operation) => operation.operationId.startsWith("api.gaming-")).length}
Gaming events: ${events.events.filter((event) => event.eventKey.startsWith("gaming.")).length}
Passes: ${pass.length}
Failures: ${fail.length}`);
if (fail.length) {
  console.error(`\nFailures:\n${fail.slice(0, 200).map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}
console.log("PASS - V1.2.0 Gaming Store canonical contracts are complete.");
