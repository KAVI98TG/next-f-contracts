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

ok("VERSION V1.3.0", version === "1.3.0", version);
ok("Package version", read("package.json").version === version);
ok("Current validator", read("package.json").scripts?.validate === "node scripts/validate-phase-40.mjs");

const required = [
  "standards/48-software-contract-standard.md",
  "registry/software/index.json",
  "registry/software/fixtures/valid/launch-catalog.json",
  "registry/modules/index.json",
  "registry/api/index.json",
  "registry/permissions/index.json",
  "registry/events/index.json",
  "starters/software/nextf.site.json",
  "registry/releases/1.3.0/release-manifest.json"
];
for (const rel of required) ok(`Required source ${rel}`, exists(rel), rel);

const software = read("registry/software/index.json");
const modules = read("registry/modules/index.json");
const api = read("registry/api/index.json");
const permissions = read("registry/permissions/index.json");
const events = read("registry/events/index.json");
const registry = read("registry/registry.json");
const starter = read("starters/software/nextf.site.json");
const releaseIndex = read("registry/releases/index.json");
const launch = read("registry/software/fixtures/valid/launch-catalog.json");

const regIds = new Set(registry.items.map((item) => item.id));
const schemaIds = new Set(software.schemas.map((schema) => schema.$id));
const capabilityIds = new Set(modules.capabilities.map((cap) => cap.capabilityId));
const permissionIds = new Set(permissions.permissions.map((permission) => permission.permissionId));
const eventIds = new Set(events.events.map((event) => event.eventKey));
const apiIds = new Set(api.operations.map((operation) => operation.operationId));
const groupIds = new Set(api.groups.map((group) => group.apiId));

ok("Software index version", software.registryVersion === version, software.registryVersion);
ok("Software schema count", software.schemas.length === 19, software.schemas.length);
ok("Software schemas unique", schemaIds.size === software.schemas.length);
ok("Software domain registered", read("registry/domains.json").domains.some((domain) => domain.id === "software"));
ok("Software module exists", modules.modules.some((module) => module.moduleId === "software"));
ok("Software capabilities count", modules.capabilities.filter((cap) => cap.moduleId === "software").length === 11);
ok("Software starter pins version", starter.contracts.contractVersion === version);
ok("Software starter type", starter.site.siteType === "software");
ok("Release index current", releaseIndex.currentVersion === version);
for (const old of ["1.0.0", "1.1.0", "1.2.0"]) ok(`Immutable ${old} still listed`, releaseIndex.releases.some((release) => release.version === old));

for (const id of ["software.product", "software.edition", "software.price", "software.bundleComponent", "software.customer", "software.orderExtension", "software.subscription", "software.license", "software.activation", "software.entitlement", "software.grandfatherGrant", "software.release", "software.releaseArtifact", "software.compatibilityRequirement", "software.downloadGrant", "software.updateRequest", "software.updateResponse", "software.supportEntitlement", "software.auditReference"]) {
  ok(`Schema ${id}`, schemaIds.has(id));
  ok(`Registry item ${id}`, regIds.has(id));
  ok(`Schema source ${id}`, exists(`registry/software/definitions/${id.slice(9).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}.json`));
}

const expectedProducts = ["product.nextf-documentation", "product.nextf-blog-suite", "product.nextf-publisher-suite"];
for (const id of expectedProducts) ok(`Launch product ID ${id}`, launch.products.some((p) => p.productId === id));
ok("Launch edition count", launch.editions.length === 11, launch.editions.length);
ok("Launch price count", launch.launchPrices.length === 9, launch.launchPrices.length);
ok("Launch renewal customer initiated", launch.renewalMode === "customer-initiated", launch.renewalMode);
ok("No monthly launch prices", launch.launchPrices.every((p) => p.cadence !== "monthly"));
ok("Bundle grants both component products", new Set(launch.bundleComponents.map((x) => x.componentProductId)).size === 2);

const staffPermissions = ["software.dashboard.view", "software.catalog.view", "software.catalog.manage", "software.catalog.publish", "software.releases.view", "software.releases.manage", "software.releases.publish", "software.orders.view", "software.orders.manage", "software.refunds.request", "software.refunds.approve", "software.customers.view", "software.licenses.view", "software.licenses.manage", "software.entitlements.manage", "software.support.manage", "software.settings.manage", "software.audit.view"];
for (const permission of staffPermissions) {
  ok(`Permission ${permission}`, permissionIds.has(permission));
  ok(`Permission source ${permission}`, exists(`registry/permissions/permissions/${permission}.json`));
}
ok("Customer capability count", software.customerCapabilities.length === 8, software.customerCapabilities.length);
ok("Customer capabilities owner-scoped", software.customerCapabilities.every((c) => c.scope === "authenticated-owner" && c.crossCustomerAccess === false));

const expectedEvents = ["software.order-created", "software.order-paid", "software.order-refunded", "software.subscription-activated", "software.subscription-past-due", "software.subscription-renewed", "software.subscription-cancelled", "software.license-issued", "software.license-suspended", "software.license-restored", "software.license-expired", "software.activation-created", "software.activation-deactivated", "software.entitlement-granted", "software.entitlement-revoked", "software.release-published", "software.release-withdrawn", "software.download-grant-issued", "software.update-served"];
for (const event of expectedEvents) {
  ok(`Event ${event}`, eventIds.has(event));
  ok(`Event source ${event}`, exists(`registry/events/events/${event.replace(".", "--")}.json`));
}

for (const group of ["api.software-public", "api.software-customer", "api.software-cms", "api.software-service"]) ok(`API group ${group}`, groupIds.has(group));
const softwareApiOps = api.operations.filter((operation) => operation.operationId.startsWith("api.software-"));
ok("Software API operation count", softwareApiOps.length >= 30, softwareApiOps.length);
for (const operation of softwareApiOps) {
  ok(`Operation indexed ${operation.operationId}`, regIds.has(operation.operationId));
  ok(`Operation contracts resolve ${operation.operationId}`, operation.contractBindings.every((id) => regIds.has(id)), operation.contractBindings.filter((id) => !regIds.has(id)).join(","));
  ok(`Operation permissions resolve ${operation.operationId}`, operation.authentication.permissions.every((id) => permissionIds.has(id)), operation.authentication.permissions.filter((id) => !permissionIds.has(id)).join(","));
  ok(`Operation events resolve ${operation.operationId}`, operation.eventBindings.every((id) => eventIds.has(id)), operation.eventBindings.filter((id) => !eventIds.has(id)).join(","));
}
const createOrder = api.operations.find((o) => o.operationId === "api.software-public.create-order");
ok("Browser purchase does not trust final amount", createOrder?.notes?.some((n) => n.includes("resolves authoritative price")) && createOrder?.notes?.some((n) => n.includes("cannot assert paid state")));
ok("No public payment confirmation operation", !api.operations.some((o) => o.operationId.startsWith("api.software-public") && /paid|capture|confirm-payment/.test(o.operationId)));
const consume = api.operations.find((o) => o.operationId === "api.software-service.consume-payment-event");
ok("Verified payment event is server-only", consume?.authentication.mode === "internal-service" && consume?.policies.cors === "server-only");
const refundRequest = api.operations.find((o) => o.operationId === "api.software-cms.refund-request");
ok("CMS refund request does not set refunded", refundRequest?.notes?.some((n) => n.toLowerCase().includes("does not directly mark")));
ok("No automatic renewal operation", !softwareApiOps.some((o) => /auto.*renew|automatic.*renew/i.test(o.operationId + " " + o.name)));

const license = software.schemas.find((s) => s.$id === "software.license");
ok("License has masked display", license.fields.some((f) => f.key === "keyDisplayMask"));
ok("License has no raw key field", !license.fields.some((f) => /raw.*key|licenseKey/i.test(f.key)));
const artifact = software.schemas.find((s) => s.$id === "software.releaseArtifact");
ok("Release artifact uses opaque packageRef", artifact.fields.some((f) => f.key === "packageRef"));
ok("Release artifact checksum", artifact.fields.some((f) => f.key === "sha256"));
ok("Release artifact signature ref", artifact.fields.some((f) => f.key === "signatureRef"));
const updateRequest = software.schemas.find((s) => s.$id === "software.updateRequest");
ok("Update request privacy minimized", updateRequest.validationRules.some((r) => r.id === "noContent"));
const subscription = software.schemas.find((s) => s.$id === "software.subscription");
const renewalOptions = subscription.fields.find((f) => f.key === "renewalMode")?.config?.options ?? [];
ok("Subscription launch mode modeled", renewalOptions.includes("customer-initiated"));
ok("Automatic renewal is reserved only", renewalOptions.includes("automatic-reserved") && !renewalOptions.includes("automatic"));

const generated = fs.readFileSync(path.join(root, "js/generated-software-schemas.js"), "utf8");
const digest = crypto.createHash("sha256").update(fs.readFileSync(path.join(root, "registry/software/index.json"))).digest("hex");
ok("Generated Software digest current", generated.includes(digest));

console.log(`NEXT F Contracts Phase 40 validation\nVersion: ${version}\nSoftware schemas: ${software.schemas.length}\nSoftware capabilities: ${modules.capabilities.filter((cap) => cap.moduleId === "software").length}\nSoftware API operations: ${softwareApiOps.length}\nSoftware events: ${events.events.filter((event) => event.eventKey.startsWith("software.")).length}\nPasses: ${pass.length}\nFailures: ${fail.length}`);
if (fail.length) {
  console.error(`\nFailures:\n${fail.slice(0, 220).map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}
console.log("PASS - V1.3.0 Software canonical contracts are complete.");
