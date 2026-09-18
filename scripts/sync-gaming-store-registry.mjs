import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const version = "1.2.0";
const gamingModelVersion = "1.2.0";
const read = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
const writeJson = (rel, value) => {
  const target = path.join(root, rel);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`, "utf8");
};
const writeText = (rel, value) => {
  const target = path.join(root, rel);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, value.endsWith("\n") ? value : `${value}\n`, "utf8");
};
const run = (script, args = []) => {
  const result = spawnSync(process.execPath, [path.join(root, script), ...args], { cwd: root, encoding: "utf8" });
  if (result.status !== 0) throw new Error(`${script} failed\n${result.stdout}\n${result.stderr}`);
  return result.stdout.trim();
};
const title = (id) => id.split(/[.-]/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
const kebab = (id) => id.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/\./g, "-").toLowerCase();

writeText("VERSION", version);
const pkg = read("package.json");
pkg.version = version;
pkg.scripts.validate = "node scripts/validate-phase-39.mjs";
pkg.scripts["generate:gaming"] = "node scripts/sync-gaming-store-registry.mjs";
pkg.scripts["validate:phase39"] = "node scripts/validate-phase-39.mjs";
pkg.scripts["smoke:phase39"] = "node scripts/smoke-phase-39.mjs";
writeJson("package.json", pkg);
for (const rel of ["index.html", "404.html"]) {
  const target = path.join(root, rel);
  if (!fs.existsSync(target)) continue;
  const html = fs.readFileSync(target, "utf8")
    .replaceAll("v1.1.0", `v${version}`)
    .replaceAll("Phase 38", "Phase 39")
    .replaceAll("Customer Capability Access Policy.", "Gaming Store Canonical Contracts.");
  writeText(rel, html);
}
for (const rel of ["js/pages.js", "js/routes.js"]) {
  const target = path.join(root, rel);
  if (!fs.existsSync(target)) continue;
  let source = fs.readFileSync(target, "utf8");
  if (rel === "js/pages.js") {
    source = source
      .replace(
        '[38, "Customer Capability Access Policy", "Explicit customer visibility, actions, approvals, publishing, fields, demo behavior and effective policy resolution.", "current"]',
        '[38, "Customer Capability Access Policy", "Explicit customer visibility, actions, approvals, publishing, fields, demo behavior and effective policy resolution.", "complete"],\n  [39, "Gaming Store Canonical Contracts", "Supplier-neutral Gaming products, offers, quotes, orders, fulfillment, APIs, permissions, events, integrations and starter pack.", "current"]'
      )
      .replaceAll("Current registry v1.1.0", `Current registry v${version}`)
      .replaceAll("2,284", "2,371")
      .replaceAll("stable V1.1 Registry", "stable V1.2 Registry")
      .replaceAll("V1.1.0 Customer Access", "V1.2.0 Gaming Store")
      .replaceAll("through V1.1.0 Customer Capability Access Policy", "through V1.2.0 Gaming Store Canonical Contracts")
      .replaceAll("phaseBadge(38)", "phaseBadge(39)")
      .replace(
        '<div class="paper-card__header"><div><h2>V1.1.0 Customer Capability Access Policy</h2><p>Every Customer CMS resource now has an explicit, machine-readable customer boundary backed by permissions, capabilities, APIs and approval contracts.</p></div><a class="button button--secondary button--compact" href="#/platform/customer-access">${icon("fa-shield-halved")} Open Customer Access</a></div>',
        '<div class="paper-card__header"><div><h2>V1.2.0 Gaming Store Canonical Contracts</h2><p>Gaming Store now has supplier-neutral products, offers, purchase fields, account validation, quotes, orders, fulfillment, secure delivery, APIs, events, permissions and starter guidance.</p></div><a class="button button--secondary button--compact" href="#/registry?domain=gaming">${icon("fa-gamepad")} Open Gaming contracts</a></div>'
      )
      .replace('<div class="phase-summary__row"><span>Customer policies</span><strong>75</strong></div>', '<div class="phase-summary__row"><span>Gaming schemas</span><strong>15</strong></div>')
      .replace('<div class="phase-summary__row"><span>Policy coverage</span><strong>100%</strong></div>', '<div class="phase-summary__row"><span>Gaming capabilities</span><strong>13</strong></div>')
      .replace('<div class="phase-summary__row"><span>Blocking failures</span><strong>0</strong></div>', '<div class="phase-summary__row"><span>Gaming API operations</span><strong>22</strong></div>')
      .replace('<div class="phase-summary__row"><span>Approval-required policies</span><strong>8</strong></div>', '<div class="phase-summary__row"><span>Gaming events</span><strong>13</strong></div>')
      .replace('<div class="phase-summary__row"><span>Current release</span><strong>1.1.0</strong></div>', '<div class="phase-summary__row"><span>Current release</span><strong>1.2.0</strong></div>');
  } else {
    source = source.replace(
      '{ id: "overview", path: "/overview", title: "Overview", group: "Overview", icon: "fa-house", phase: 38, status: "current", description: "Contract portal foundation, authority model and current V1.1 Registry roadmap." }',
      '{ id: "overview", path: "/overview", title: "Overview", group: "Overview", icon: "fa-house", phase: 39, status: "current", description: "Contract portal foundation, authority model and current V1.2 Gaming Store Registry roadmap." }'
    );
  }
  writeText(rel, source);
}

const standard = `# Phase 39 - Gaming Store Canonical Contract Standard

V1.2.0 adds a supplier-neutral Gaming Store contract surface for NEXT F Gaming. The module covers digital products, retail offers, dynamic purchase fields, account validation, region rules, availability, supplier routing, public/internal quote projections, public/internal order projections, digital fulfillment and secure deliverables.

Gaming contracts are marketplace and fulfillment contracts for digital goods and services. They must not model physical shipping, parcels, warehouses, product weight or supplier-native payloads as public storefront truth.

## Canonical Boundary

Public Site and Customer CMS consume NEXT F-owned Gaming Product, Offer, Quote, Order and Fulfillment contracts. Supplier adapters translate those canonical contracts to providers such as FazerCards behind trusted server boundaries.

## Public Projection Rule

Public product, offer, quote and order responses expose only customer-safe retail information. Supplier identity, supplier cost, wholesale margin, routing priority, provider IDs, balances, raw provider errors, credentials, customer player identifiers and code/PIN/key deliverables are prohibited from public projections, Events, analytics payloads and ordinary logs.

## Payment Rule

Payment confirmation is authoritative only after trusted server or payment-provider verification. A browser operation may request checkout or refresh state, but it must never self-assert successful payment.

## Secure Delivery Rule

Digital deliverables can describe code, PIN, serial, activation-key, redemption URL, top-up confirmation and instruction shapes. Secret-bearing values are sensitive and may only be retrieved through an authenticated, authorized secure delivery operation.

## Supplier Rule

FazerCards is registered as an adapter/integration descriptor only. It is not the public domain model, not a required public capability name, and not allowed to leak provider-native payloads into canonical public contracts.
`;
writeText("standards/47-gaming-store-contract-standard.md", standard);

const gamingCategories = [
  { id: "catalog", label: "Catalog", description: "Supplier-neutral Gaming products, offers and purchase fields." },
  { id: "pricing", label: "Pricing & Quotes", description: "Retail pricing modes, amount constraints and quote projections." },
  { id: "validation", label: "Account Validation", description: "Capability-driven player/account validation without exposing provider payloads." },
  { id: "region", label: "Regions", description: "Customer-safe region restrictions and country policy." },
  { id: "availability", label: "Availability", description: "Availability, stock and quantity snapshots beyond a single boolean." },
  { id: "supplier", label: "Supplier Routing", description: "Internal provider-neutral routing, capability and mapping contracts." },
  { id: "orders", label: "Orders", description: "Public and internal Gaming order lifecycle projections." },
  { id: "fulfillment", label: "Digital Fulfillment", description: "Fulfillment state and secure digital deliverables." }
];
writeJson("registry/gaming/categories.json", { registryVersion: version, categories: gamingCategories });

const field = (key, primitive, description, extra = {}) => ({ key, required: extra.required ?? true, nullable: extra.nullable ?? false, description, primitive, ...(extra.config ? { config: extra.config } : {}), ...(extra.schema ? { schema: extra.schema } : {}), ...(extra.itemsSchema ? { itemsSchema: extra.itemsSchema } : {}), ...(extra.itemsPrimitive ? { itemsPrimitive: extra.itemsPrimitive } : {}) });
const schema = (id, name, category, kind, description, fields, extra = {}) => ({
  $id: `gaming.${id}`,
  name,
  version: gamingModelVersion,
  status: "stable",
  domain: "gaming",
  category,
  description,
  purpose: extra.purpose ?? description,
  gamingModel: {
    kind,
    customerManaged: extra.customerManaged ?? false,
    containsPersonalData: extra.containsPersonalData ?? false,
    publicEligible: extra.publicEligible ?? false,
    supportsRevision: extra.supportsRevision ?? false,
    dataSensitivity: extra.dataSensitivity ?? "internal"
  },
  fields,
  relationships: extra.relationships ?? [],
  validationRules: extra.validationRules ?? [
    { id: "tenantScope", description: "Records are scoped to the authorized Organization/Site boundary." },
    { id: "noSecrets", description: "Contracts define shape only and must not contain provider credentials or live deliverable values." }
  ],
  cms: {
    label: name,
    icon: "fa-gamepad",
    customerVisible: extra.customerVisible ?? false,
    adminVisible: true,
    editorMode: "gaming-schema",
    defaultPlacement: "gaming",
    summaryFields: fields.slice(0, 4).map((item) => item.key),
    primaryActions: extra.actions ?? ["view"]
  },
  delivery: {
    publicAllowed: extra.publicEligible ?? false,
    notes: extra.deliveryNotes ?? "Internal supplier, quote, order and delivery details stay behind trusted APIs."
  },
  futureBindings: { modules: "phase-39", api: "phase-39", permissions: "phase-39", events: "phase-39", webhooks: "phase-39", integrations: "phase-39", privacy: "phase-30", security: "phase-29" },
  examples: { valid: [], invalid: [] },
  notes: extra.notes ?? []
});

const definitions = [
  schema("product", "Gaming Product", "catalog", "entity", "NEXT F-owned digital gaming merchandise such as top-ups, game keys, gift cards, Steam Wallet, Telegram Stars and manual digital services.", [
    field("identity", "fields.text", "Stable canonical Gaming product ID."),
    field("scope", "fields.text", "Owning tenant/Site scope."),
    field("slug", "fields.slug", "Public product slug."),
    field("name", "fields.text", "Customer-facing product name."),
    field("brand", "fields.text", "Optional game, publisher or service brand.", { required: false, nullable: true }),
    field("kind", "fields.select", "Digital product kind.", { config: { options: ["top-up", "gift-card", "game-key", "steam-wallet", "steam-gift", "telegram-stars", "telegram-premium", "manual-service", "digital-subscription"] } }),
    field("publicDescription", "fields.textarea", "Public merchandising description.", { required: false, nullable: true }),
    field("artwork", "fields.text", "Public media reference.", { required: false, nullable: true }),
    field("enabled", "fields.boolean", "Whether the product can be sold."),
    field("visible", "fields.boolean", "Whether the product can appear publicly."),
    field("featured", "fields.boolean", "Whether the product is featured."),
    field("revision", "fields.text", "Version/revision pointer.", { required: false, nullable: true })
  ], { customerManaged: true, publicEligible: true, supportsRevision: true, customerVisible: true, actions: ["view", "create", "edit", "publish"], relationships: [{ type: "uses", target: "shared.mediaReference", description: "Artwork should resolve to canonical media references where available." }] }),
  schema("offer", "Gaming Offer", "catalog", "entity", "Retail offer for one Gaming Product, with supplier-neutral purchase fields, validation policy, region rule and pricing mode.", [
    field("identity", "fields.text", "Stable canonical offer ID."),
    field("productId", "fields.text", "Canonical Gaming Product ID."),
    field("displayName", "fields.text", "Customer-facing offer label."),
    field("kind", "fields.select", "Digital offer kind.", { config: { options: ["top-up", "gift-card", "game-key", "steam-wallet", "steam-gift", "telegram-stars", "telegram-premium", "manual-service", "digital-subscription"] } }),
    field("purchaseFields", "fields.json", "Canonical dynamic purchase-field schema."),
    field("accountValidationPolicy", "fields.text", "Referenced account-validation policy ID."),
    field("regionRule", "fields.text", "Referenced region rule ID."),
    field("pricingMode", "fields.select", "Retail pricing mode.", { config: { options: ["fixed", "supplier-quoted", "amount-based"] } }),
    field("retailPrice", "fields.json", "Retail price snapshot for fixed pricing.", { required: false, nullable: true }),
    field("amountConstraints", "fields.json", "Min/max/step constraints for amount-based pricing.", { required: false, nullable: true }),
    field("quantityConstraints", "fields.json", "Min/max quantity constraints.", { required: false, nullable: true }),
    field("enabled", "fields.boolean", "Whether the offer can be purchased."),
    field("sortOrder", "fields.integer", "Display order.")
  ], { customerManaged: true, publicEligible: true, supportsRevision: true, customerVisible: true, actions: ["view", "create", "edit", "publish"], relationships: [{ type: "references", target: "gaming.product", description: "Offer belongs to one canonical Gaming Product." }, { type: "composesMany", target: "gaming.purchaseField", description: "Offer renders supplier-neutral purchase fields." }, { type: "references", target: "gaming.accountValidationPolicy", description: "Validation behavior is policy-driven." }, { type: "references", target: "gaming.regionRule", description: "Region messaging uses canonical region rules." }, { type: "uses", target: "commerce.moneySnapshot", description: "Retail money uses existing Commerce money semantics." }], validationRules: [{ id: "productKindCompatible", description: "Offer kind must be compatible with its Product kind." }, { id: "purchaseFieldKeysUnique", description: "Purchase-field keys must be unique within an Offer." }, { id: "fixedPriceRequiresMoney", description: "Fixed pricing requires valid retail money with currency." }, { id: "amountRangeValid", description: "Minimum amount must not exceed maximum amount." }] }),
  schema("purchaseField", "Gaming Purchase Field", "catalog", "value-object", "Supplier-neutral input field required to complete a Gaming purchase.", [
    field("key", "fields.slug", "Stable canonical field key."),
    field("label", "fields.text", "Customer-facing field label."),
    field("type", "fields.select", "Field type.", { config: { options: ["text", "number", "select", "email", "url", "username", "country"] } }),
    field("required", "fields.boolean", "Whether the field is required."),
    field("placeholder", "fields.text", "Optional placeholder.", { required: false, nullable: true }),
    field("helpText", "fields.text", "Optional customer-safe help text.", { required: false, nullable: true }),
    field("validation", "fields.json", "Validation hints and safe input constraints.", { required: false, nullable: true }),
    field("options", "fields.json", "Select options when type is select.", { required: false, nullable: true })
  ], { publicEligible: true, customerVisible: true, relationships: [{ type: "relatedTo", target: "forms.field", description: "Reuses Forms field semantics where compatible." }] }),
  schema("accountValidationPolicy", "Gaming Account Validation Policy", "validation", "policy", "Capability-driven account/player validation policy for one offer.", [
    field("policyId", "fields.text", "Stable validation policy ID."),
    field("supported", "fields.boolean", "Whether validation is supported."),
    field("mode", "fields.select", "Validation mode.", { config: { options: ["none", "provider-preflight", "local"] } }),
    field("fieldKeys", "fields.json", "Purchase-field keys required for validation."),
    field("safeResponseFields", "fields.json", "Customer-safe validation response fields.")
  ], { customerVisible: true, validationRules: [{ id: "fieldKeysResolve", description: "Validation fieldKeys must reference declared offer purchase fields." }, { id: "providerPayloadHidden", description: "Raw provider validation payloads are never public." }] }),
  schema("regionRule", "Gaming Region Rule", "region", "policy", "Customer-visible region restriction policy for digital gaming offers.", [
    field("ruleId", "fields.text", "Stable region rule ID."),
    field("mode", "fields.select", "Region rule mode.", { config: { options: ["global", "named-region", "allow-list", "block-list"] } }),
    field("regionName", "fields.text", "Customer-safe region label.", { required: false, nullable: true }),
    field("countryCodes", "fields.json", "ISO 3166-1 alpha-2 country codes.", { required: false, nullable: true }),
    field("publicMessage", "fields.text", "Customer-facing compatibility message.", { required: false, nullable: true })
  ], { publicEligible: true, customerVisible: true, validationRules: [{ id: "countryCodesValid", description: "Country codes use the Registry country-code primitive, preferably ISO 3166-1 alpha-2." }] }),
  schema("availability", "Gaming Availability", "availability", "snapshot", "Availability, stock and quantity snapshot for a Gaming offer or supplier mapping.", [
    field("state", "fields.select", "Availability state.", { config: { options: ["available", "unavailable", "unknown", "paused"] } }),
    field("stock", "fields.integer", "Known stock count when available.", { required: false, nullable: true }),
    field("minQuantity", "fields.integer", "Minimum purchase quantity.", { required: false, nullable: true }),
    field("maxQuantity", "fields.integer", "Maximum purchase quantity.", { required: false, nullable: true }),
    field("checkedAt", "fields.dateTime", "When availability was checked."),
    field("source", "fields.select", "Availability source.", { config: { options: ["canonical", "supplier", "manual", "unknown"] } })
  ], { publicEligible: true, validationRules: [{ id: "quantityRangeValid", description: "Minimum quantity must not exceed maximum quantity." }] }),
  schema("supplierCapabilities", "Gaming Supplier Capabilities", "supplier", "internal-record", "Provider-neutral description of what a supplier adapter can safely support.", [
    field("supplierRef", "fields.text", "Non-secret supplier reference."),
    field("productKinds", "fields.json", "Supported product kinds."),
    field("accountValidation", "fields.boolean", "Supports account validation."),
    field("inventoryCounts", "fields.boolean", "Supports stock counts."),
    field("quantityRules", "fields.boolean", "Supports quantity rules."),
    field("regionRules", "fields.boolean", "Supports region restrictions."),
    field("synchronousCodeDelivery", "fields.boolean", "Supports immediate code delivery."),
    field("webhookFulfillment", "fields.boolean", "Supports async webhook fulfillment."),
    field("manualServiceChat", "fields.boolean", "Supports manual service workflows."),
    field("idempotentOrders", "fields.boolean", "Supports idempotent order submission.")
  ], { dataSensitivity: "sensitive", relationships: [{ type: "references", target: "integrations.connectorDefinition", description: "Supplier capabilities describe connector behavior without exposing credentials." }] }),
  schema("supplierOfferMapping", "Gaming Supplier Offer Mapping", "supplier", "internal-record", "Internal mapping from a NEXT F Gaming Offer to one supplier-side offer/category/product reference.", [
    field("mappingId", "fields.text", "Stable mapping ID."),
    field("offerId", "fields.text", "Canonical NEXT F Gaming Offer ID."),
    field("supplierRef", "fields.text", "Non-secret supplier/provider reference."),
    field("providerReferences", "fields.json", "Provider-side offer/category/product references."),
    field("priority", "fields.integer", "Routing priority; lower is preferred."),
    field("enabled", "fields.boolean", "Whether this mapping may be routed."),
    field("availability", "fields.json", "Current availability snapshot."),
    field("supplierCost", "fields.json", "Supplier cost snapshot."),
    field("supplierCurrency", "fields.text", "Supplier currency."),
    field("lastSyncedAt", "fields.dateTime", "Most recent sync timestamp."),
    field("providerMetadata", "fields.json", "Bounded non-secret provider metadata.", { required: false, nullable: true })
  ], { dataSensitivity: "sensitive", relationships: [{ type: "references", target: "gaming.offer", description: "Maps a supplier reference to one canonical Gaming Offer." }, { type: "composes", target: "gaming.availability", description: "Uses Gaming availability semantics." }], validationRules: [{ id: "offerResolves", description: "Supplier mappings must reference valid canonical Offers." }, { id: "priorityValid", description: "Priority must be positive and deterministic." }, { id: "notPublic", description: "Supplier mappings are staff/server-only and never returned whole from public catalog operations." }] }),
  schema("internalQuote", "Gaming Internal Quote", "pricing", "internal-record", "Trusted quote snapshot including supplier cost, FX, fees, margin and selected routing data.", [
    field("quoteId", "fields.text", "Quote ID."),
    field("offerId", "fields.text", "Offer ID."),
    field("selectedMappingId", "fields.text", "Selected supplier mapping ID."),
    field("supplierCost", "fields.json", "Supplier cost snapshot."),
    field("supplierCurrency", "fields.text", "Supplier currency."),
    field("fxResult", "fields.json", "Foreign-exchange calculation result.", { required: false, nullable: true }),
    field("gatewayFee", "fields.json", "Gateway fee snapshot.", { required: false, nullable: true }),
    field("margin", "fields.json", "Internal margin snapshot.", { required: false, nullable: true }),
    field("retailAmount", "fields.json", "Final retail amount."),
    field("quantity", "fields.integer", "Quoted quantity."),
    field("requestedAmount", "fields.json", "Customer requested amount for amount-based offers.", { required: false, nullable: true }),
    field("createdAt", "fields.dateTime", "Creation timestamp."),
    field("expiresAt", "fields.dateTime", "Expiry timestamp.")
  ], { dataSensitivity: "sensitive", relationships: [{ type: "references", target: "gaming.offer", description: "Quote belongs to one offer." }, { type: "references", target: "gaming.supplierOfferMapping", description: "Internal quote may reference selected supplier mapping." }, { type: "uses", target: "commerce.moneySnapshot", description: "Money fields reuse Commerce money semantics." }], validationRules: [{ id: "expiresAfterCreated", description: "Quote expiry must be after quote creation." }, { id: "serverRevalidated", description: "Checkout must verify quote server-side before order/charge creation." }] }),
  schema("publicQuote", "Gaming Public Quote", "pricing", "public-projection", "Customer-safe quote response for Gaming checkout.", [
    field("quoteId", "fields.text", "Quote ID."),
    field("offerId", "fields.text", "Offer ID."),
    field("quantity", "fields.integer", "Quoted quantity."),
    field("retailAmount", "fields.json", "Retail amount and currency."),
    field("expiresAt", "fields.dateTime", "Quote expiry."),
    field("availability", "fields.json", "Customer-safe availability."),
    field("message", "fields.text", "Customer-safe message.", { required: false, nullable: true })
  ], { publicEligible: true, relationships: [{ type: "generatedFrom", target: "gaming.internalQuote", description: "Public quote is a safe projection of an internal quote." }], validationRules: [{ id: "noSupplierLeakage", description: "Public quote cannot expose supplier identity, cost, balance, margin or routing priority." }] }),
  schema("internalOrder", "Gaming Internal Order", "orders", "internal-record", "Authoritative Gaming order state across payment, supplier routing and fulfillment.", [
    field("orderId", "fields.text", "Order ID."),
    field("quoteId", "fields.text", "Quote ID."),
    field("offerId", "fields.text", "Offer ID."),
    field("customerRef", "fields.text", "Customer reference."),
    field("status", "fields.select", "Normalized Gaming order lifecycle.", { config: { options: ["created", "awaiting-payment", "payment-confirmed", "validating", "ready-for-fulfillment", "fulfillment-submitted", "fulfillment-processing", "fulfilled", "fulfillment-failed", "refund-pending", "refunded", "cancelled"] } }),
    field("paymentRef", "fields.text", "Trusted payment reference.", { required: false, nullable: true }),
    field("selectedMappingId", "fields.text", "Selected supplier mapping ID.", { required: false, nullable: true }),
    field("purchaseFieldSnapshot", "fields.json", "Submitted purchase-field snapshot."),
    field("retailAmount", "fields.json", "Retail amount snapshot."),
    field("refundState", "fields.text", "Refund state kept separate from fulfillment.", { required: false, nullable: true }),
    field("createdAt", "fields.dateTime", "Order creation timestamp."),
    field("updatedAt", "fields.dateTime", "Order update timestamp.")
  ], { containsPersonalData: true, dataSensitivity: "sensitive", relationships: [{ type: "references", target: "gaming.internalQuote", description: "Order is created from a trusted quote." }, { type: "references", target: "commerce.payment", description: "Payment truth remains provider/server verified through Commerce payment concepts." }], validationRules: [{ id: "validStateTransition", description: "Order state transitions must follow normalized Gaming lifecycle." }, { id: "paymentServerVerified", description: "Browser clients cannot self-assert payment success." }, { id: "refundSeparate", description: "Refund state remains separate from fulfillment state." }] }),
  schema("publicOrder", "Gaming Public Order", "orders", "public-projection", "Customer-safe Gaming order status projection.", [
    field("orderId", "fields.text", "Order ID."),
    field("offerId", "fields.text", "Offer ID."),
    field("status", "fields.text", "Customer-safe order status."),
    field("retailAmount", "fields.json", "Retail amount snapshot."),
    field("message", "fields.text", "Customer-safe status message.", { required: false, nullable: true }),
    field("deliveryAvailable", "fields.boolean", "Whether secure delivery can be retrieved by the authorized customer.")
  ], { publicEligible: true, containsPersonalData: false, relationships: [{ type: "generatedFrom", target: "gaming.internalOrder", description: "Public order hides supplier and sensitive operational details." }] }),
  schema("fulfillment", "Gaming Fulfillment", "fulfillment", "internal-record", "Digital fulfillment result supporting top-up confirmation, code/PIN/serial/key delivery, redemption URL and manual-service completion.", [
    field("fulfillmentId", "fields.text", "Fulfillment ID."),
    field("orderId", "fields.text", "Gaming order ID."),
    field("type", "fields.select", "Fulfillment type.", { config: { options: ["top-up-confirmation", "code-delivery", "pin-delivery", "serial-delivery", "redemption-url", "activation-key", "manual-service"] } }),
    field("state", "fields.select", "Fulfillment state.", { config: { options: ["submitted", "processing", "completed", "failed", "cancelled"] } }),
    field("deliverableRefs", "fields.json", "References to secure deliverables, not values.", { required: false, nullable: true }),
    field("completedAt", "fields.dateTime", "Completion timestamp.", { required: false, nullable: true }),
    field("instructions", "fields.textarea", "Customer-safe instructions.", { required: false, nullable: true })
  ], { dataSensitivity: "sensitive", relationships: [{ type: "references", target: "gaming.internalOrder", description: "Fulfillment belongs to a Gaming order." }, { type: "references", target: "gaming.digitalDeliverable", description: "Secret-bearing deliverables remain separately protected." }] }),
  schema("digitalDeliverable", "Gaming Digital Deliverable", "fulfillment", "secure-record", "Secure deliverable shape for digital codes, PINs, serials, activation keys, redemption URLs, top-up confirmations and instructions.", [
    field("deliverableId", "fields.text", "Deliverable ID."),
    field("orderId", "fields.text", "Gaming order ID."),
    field("kind", "fields.select", "Deliverable kind.", { config: { options: ["code", "pin", "serial", "activation-key", "redemption-url", "topup-confirmation", "instruction"] } }),
    field("sensitive", "fields.boolean", "Whether the deliverable value is secret-bearing."),
    field("valueRef", "fields.text", "Protected value reference, never the live secret value."),
    field("redactionPolicy", "fields.text", "Display/log redaction policy."),
    field("availableUntil", "fields.dateTime", "Availability expiration.", { required: false, nullable: true })
  ], { dataSensitivity: "secret", relationships: [{ type: "references", target: "gaming.internalOrder", description: "Deliverable belongs to an authorized order." }], validationRules: [{ id: "secretValuesNotInRegistry", description: "Registry examples and public payloads never include real code, PIN, serial or key values." }, { id: "secureOperationOnly", description: "Secret-bearing values require authenticated secure delivery retrieval." }] }),
  schema("validationResponse", "Gaming Validation Response", "validation", "public-projection", "Customer-safe account validation response.", [
    field("valid", "fields.boolean", "Whether validation succeeded."),
    field("displayName", "fields.text", "Safe account display name.", { required: false, nullable: true }),
    field("region", "fields.text", "Safe region label.", { required: false, nullable: true }),
    field("message", "fields.text", "Customer-safe validation message.", { required: false, nullable: true })
  ], { publicEligible: true, validationRules: [{ id: "rawProviderPayloadForbidden", description: "Raw supplier payloads never appear in validation responses." }] })
];
for (const def of definitions) writeJson(`registry/gaming/definitions/${kebab(def.$id.slice(7))}.json`, def);
const gamingIndex = { registryVersion: version, schemaVersion: "1.0.0", title: "NEXT F Gaming Store Contract Registry", description: "Authoritative supplier-neutral Gaming Store schemas for digital marketplace catalog, quotes, orders, supplier routing and fulfillment.", standard: "standards/47-gaming-store-contract-standard.md", definitionCount: definitions.length, categoryCount: gamingCategories.length, sourceDirectory: "registry/gaming/definitions", categories: gamingCategories, schemas: definitions };
writeJson("registry/gaming/index.json", gamingIndex);
const gamingRaw = fs.readFileSync(path.join(root, "registry/gaming/index.json"));
const gamingHash = crypto.createHash("sha256").update(gamingRaw).digest("hex");
writeText("js/generated-gaming-schemas.js", `// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source: registry/gaming/index.json
// SHA-256: ${gamingHash}
export const GENERATED_GAMING_SOURCE_SHA256 = ${JSON.stringify(gamingHash)};
export const GENERATED_GAMING_SCHEMAS = ${gamingRaw.toString("utf8").trim()};
`);

const permissions = read("registry/permissions/index.json");
const gamingPermissions = [
  ["gaming.read", "Read Gaming", "read", "view", "standard", "Read Gaming dashboard, catalog and order summaries."],
  ["gaming.orders.manage", "Manage Gaming Orders", "orders", "manage", "sensitive", "Operate Gaming orders, supported retries and order-support actions."],
  ["gaming.products.manage", "Manage Gaming Products", "products", "manage", "elevated", "Manage NEXT F Gaming Products, Offers, merchandising and current pricing controls."],
  ["gaming.suppliers.manage", "Manage Gaming Suppliers", "suppliers", "manage", "privileged", "Manage supplier mappings, connection metadata and configuration references without exposing secret values."],
  ["gaming.finance.manage", "Manage Gaming Finance", "finance", "manage", "sensitive", "Read and manage Gaming reconciliation, supplier-cost reporting and financial controls."]
].map(([permissionId, name, resource, action, riskLevel, description]) => ({
  $id: permissionId,
  name,
  permissionId,
  domain: "gaming",
  resource,
  action,
  scopeKind: "site",
  riskLevel,
  customerEligible: true,
  adminEligible: true,
  grantable: riskLevel !== "privileged",
  requiresRecentAuthentication: ["sensitive", "privileged"].includes(riskLevel),
  requiresExplicitConfirmation: riskLevel === "privileged",
  surfaces: ["customer-cms", "nextf-admin", "api"],
  description,
  constraints: ["deny-by-default", "exact-permission-match", "scope-bound", "supplier-secrets-hidden"],
  notes: riskLevel === "privileged" ? ["Supplier management must never expose plaintext credentials or protected supplier secrets."] : [],
  version,
  status: "stable"
}));
permissions.registryVersion = version;
permissions.permissions = permissions.permissions.filter((p) => !p.permissionId.startsWith("gaming.")).concat(gamingPermissions).sort((a, b) => a.permissionId.localeCompare(b.permissionId));
writeJson("registry/permissions/index.json", permissions);
for (const perm of gamingPermissions) writeJson(`registry/permissions/permissions/${perm.permissionId}.json`, perm);
const permRaw = fs.readFileSync(path.join(root, "registry/permissions/index.json"));
const permHash = crypto.createHash("sha256").update(permRaw).digest("hex");
writeText("js/generated-permissions.js", `// Generated from registry/permissions/index.json
// SHA-256: ${permHash}
export const GENERATED_PERMISSIONS_SOURCE_SHA256 = ${JSON.stringify(permHash)};
export const GENERATED_PERMISSIONS = ${permRaw.toString("utf8").trim()};
`);

const eventsIndex = read("registry/events/index.json");
const eventsCategories = read("registry/events/categories.json");
if (!eventsCategories.categories.some((row) => row.key === "gaming")) eventsCategories.categories.push({ key: "gaming", label: "Gaming Store", description: "Gaming catalog, quote, order, fulfillment and supplier routing facts." });
writeJson("registry/events/categories.json", eventsCategories);
const producers = read("registry/events/producers.json");
for (const producer of [
  { key: "gaming-domain", label: "Gaming Domain", description: "Authoritative NEXT F Gaming catalog, quote, order and fulfillment domain." },
  { key: "gaming-supplier-router", label: "Gaming Supplier Router", description: "Trusted supplier routing and synchronization component." }
]) if (!producers.producers.some((row) => row.key === producer.key)) producers.producers.push(producer);
writeJson("registry/events/producers.json", producers);
const eventBase = (eventKey, name, trigger, subjectContracts, payloadFields, opts = {}) => ({
  eventKey,
  name,
  category: "gaming",
  producerKey: opts.producerKey ?? "gaming-domain",
  subjectContracts,
  trigger,
  dataPolicy: {
    sensitivity: opts.sensitivity ?? "sensitive",
    containsPersonalData: opts.containsPersonalData ?? false,
    containsFinancialData: opts.containsFinancialData ?? false,
    containsSecrets: false,
    redactionRequired: true
  },
  webhookEligible: opts.webhookEligible ?? true,
  consumers: opts.consumers ?? ["audit", "customer-cms", "nextf-admin", "notification", "integration-dispatch", "webhook-bridge"],
  payloadFields,
  $id: eventKey,
  version,
  eventVersion: "1.0.0",
  status: "stable",
  domain: "events",
  description: trigger,
  purpose: `Provides a canonical Gaming Store fact for ${name.toLowerCase()}.`,
  semantics: { factOnly: true, authoritativeAfterCommit: true, immutableOccurrence: true, transportIndependent: true, marketingTrackingEquivalent: null },
  productionPolicy: { durability: "durable", commitBoundary: "transactional-outbox", failureBehavior: "fail-domain-commit-or-durable-recovery" },
  idempotency: { dedupeKey: "eventId", replayedIdempotentCommand: "no-new-semantic-event", consumerIdempotencyRequired: true },
  orderingPolicy: { scope: "gaming-object", strict: false },
  retention: { class: opts.retention ?? "transaction-history" },
  relationships: subjectContracts.map((target) => ({ type: "references", target, description: `Event subject may be ${target}.` })),
  validationRules: [
    { id: "emitAfterAuthoritativeCommit", description: "Event is produced only after the authoritative Gaming transition is accepted." },
    { id: "immutableOccurrence", description: "Recorded event occurrences are immutable." },
    { id: "eventIdUnique", description: "Every semantic occurrence has one globally unique eventId." },
    { id: "idempotentReplay", description: "Retrying the same idempotent command must not emit a second semantic fact event." },
    { id: "payloadMinimumNecessary", description: "Payload contains only data required by declared consumers." },
    { id: "noSecrets", description: "Payload never includes supplier secrets, gift-card codes, PINs, activation keys or raw provider payloads." },
    { id: "tenantScope", description: "Organization/Site scope must match the authoritative subject." },
    { id: "transportIndependent", description: "Event meaning remains independent of webhook, queue, HTTP or provider transport." }
  ],
  futureBindings: { webhooks: "phase-39", permissions: "phase-39", siteManifest: "phase-39", modules: "phase-39", api: "phase-39", privacy: "phase-30" },
  examples: { valid: [{ eventKey, eventVersion: "1.0.0", eventId: `evt_${kebab(eventKey)}`, occurredAt: "2026-09-14T00:00:00Z" }], invalid: [] }
});
const gamingEvents = [
  eventBase("gaming.order-created", "Gaming Order Created", "A Gaming order is durably created from a trusted checkout/order intent.", ["gaming.internalOrder"], [{ key: "orderId", required: true, description: "Gaming order ID.", type: "id" }, { key: "offerId", required: true, description: "Gaming offer ID.", type: "id" }], { containsPersonalData: true, containsFinancialData: true }),
  eventBase("gaming.payment-confirmed", "Gaming Payment Confirmed", "Trusted server or payment-provider verification confirms payment for a Gaming order.", ["gaming.internalOrder"], [{ key: "orderId", required: true, description: "Gaming order ID.", type: "id" }, { key: "paymentRef", required: true, description: "Trusted payment reference.", type: "id" }], { containsFinancialData: true }),
  eventBase("gaming.account-validated", "Gaming Account Validated", "A Gaming account/player identity validation completes with a customer-safe result.", ["gaming.validationResponse"], [{ key: "offerId", required: true, description: "Gaming offer ID.", type: "id" }, { key: "valid", required: true, description: "Validation result.", type: "boolean" }], { containsPersonalData: true }),
  eventBase("gaming.fulfillment-submitted", "Gaming Fulfillment Submitted", "A Gaming fulfillment request is submitted to the internal fulfillment workflow or supplier router.", ["gaming.fulfillment"], [{ key: "orderId", required: true, description: "Gaming order ID.", type: "id" }, { key: "fulfillmentId", required: true, description: "Fulfillment ID.", type: "id" }]),
  eventBase("gaming.fulfillment-processing", "Gaming Fulfillment Processing", "A Gaming fulfillment request is accepted for processing.", ["gaming.fulfillment"], [{ key: "orderId", required: true, description: "Gaming order ID.", type: "id" }, { key: "fulfillmentId", required: true, description: "Fulfillment ID.", type: "id" }]),
  eventBase("gaming.fulfillment-completed", "Gaming Fulfillment Completed", "A Gaming fulfillment completes without exposing secret deliverable values.", ["gaming.fulfillment"], [{ key: "orderId", required: true, description: "Gaming order ID.", type: "id" }, { key: "fulfillmentType", required: true, description: "Fulfillment type.", type: "string" }, { key: "deliverableCount", required: false, description: "Count of deliverables, not values.", type: "integer" }]),
  eventBase("gaming.fulfillment-failed", "Gaming Fulfillment Failed", "A Gaming fulfillment fails or requires staff review.", ["gaming.fulfillment"], [{ key: "orderId", required: true, description: "Gaming order ID.", type: "id" }, { key: "reasonCode", required: false, description: "Safe failure reason code.", type: "string" }]),
  eventBase("gaming.refund-requested", "Gaming Refund Requested", "A refund path is requested for a Gaming order without changing fulfillment truth.", ["gaming.internalOrder"], [{ key: "orderId", required: true, description: "Gaming order ID.", type: "id" }, { key: "reasonCode", required: false, description: "Safe refund reason code.", type: "string" }], { containsFinancialData: true }),
  eventBase("gaming.refund-completed", "Gaming Refund Completed", "A Gaming refund completes after trusted financial verification.", ["gaming.internalOrder"], [{ key: "orderId", required: true, description: "Gaming order ID.", type: "id" }, { key: "refundRef", required: true, description: "Trusted refund reference.", type: "id" }], { containsFinancialData: true }),
  eventBase("gaming.catalog-sync-completed", "Gaming Catalog Sync Completed", "Gaming supplier catalog synchronization completes.", ["gaming.supplierOfferMapping"], [{ key: "supplierRef", required: true, description: "Supplier reference.", type: "id" }, { key: "syncedAt", required: true, description: "Sync completion timestamp.", type: "dateTime" }], { producerKey: "gaming-supplier-router", sensitivity: "internal" }),
  eventBase("gaming.catalog-sync-failed", "Gaming Catalog Sync Failed", "Gaming supplier catalog synchronization fails.", ["gaming.supplierOfferMapping"], [{ key: "supplierRef", required: true, description: "Supplier reference.", type: "id" }, { key: "reasonCode", required: false, description: "Safe reason code.", type: "string" }], { producerKey: "gaming-supplier-router", sensitivity: "internal" }),
  eventBase("gaming.supplier-availability-changed", "Gaming Supplier Availability Changed", "A supplier availability snapshot changes for one or more Gaming mappings.", ["gaming.availability"], [{ key: "supplierRef", required: true, description: "Supplier reference.", type: "id" }, { key: "state", required: true, description: "New availability state.", type: "string" }], { producerKey: "gaming-supplier-router", sensitivity: "internal" }),
  eventBase("gaming.supplier-health-changed", "Gaming Supplier Health Changed", "A supplier health state changes.", ["integrations.healthSnapshot"], [{ key: "supplierRef", required: true, description: "Supplier reference.", type: "id" }, { key: "state", required: true, description: "New health state.", type: "string" }], { producerKey: "gaming-supplier-router", sensitivity: "internal" })
];
for (const event of gamingEvents) writeJson(`registry/events/events/${event.eventKey.replace(".", "--")}.json`, event);
eventsIndex.registryVersion = version;
eventsIndex.categories = eventsCategories.categories;
eventsIndex.events = eventsIndex.events.filter((e) => !e.eventKey.startsWith("gaming.")).concat(gamingEvents).sort((a, b) => a.eventKey.localeCompare(b.eventKey));
eventsIndex.eventCount = eventsIndex.events.length;
eventsIndex.categoryCount = eventsIndex.categories.length;
writeJson("registry/events/index.json", eventsIndex);

const integrations = read("registry/integrations/index.json");
const providers = read("registry/integrations/providers.json");
for (const provider of [
  { key: "gaming-supplier", label: "Generic Gaming Supplier", ownershipDefault: "nextf" },
  { key: "fazercards", label: "FazerCards", ownershipDefault: "nextf" }
]) if (!providers.providers.some((row) => row.key === provider.key)) providers.providers.push(provider);
writeJson("registry/integrations/providers.json", providers);
const caps = read("registry/integrations/capabilities.json");
for (const cap of [
  { key: "gaming.catalog.sync", label: "Sync Gaming Catalog", runtime: "server" },
  { key: "gaming.availability.sync", label: "Sync Gaming Availability", runtime: "server" },
  { key: "gaming.account.validate", label: "Validate Gaming Account", runtime: "server" },
  { key: "gaming.fulfillment.submit", label: "Submit Gaming Fulfillment", runtime: "server" },
  { key: "gaming.fulfillment.refresh", label: "Refresh Gaming Fulfillment", runtime: "server" }
]) if (!caps.capabilities.some((row) => row.key === cap.key)) caps.capabilities.push(cap);
writeJson("registry/integrations/capabilities.json", caps);
const connector = (id, name, providerKey, description, aliases = []) => ({
  $id: `integrations.${id}`,
  name,
  version,
  status: "stable",
  domain: "integrations",
  type: "connector",
  providerKey,
  family: "gaming-supplier",
  description,
  ownership: "nextf",
  runtimeModes: ["nextf-server", "provider-api", "webhook-adapter"],
  capabilities: ["api.request", "account.verify", "data.sync.pull", "gaming.catalog.sync", "gaming.availability.sync", "gaming.account.validate", "gaming.fulfillment.submit", "gaming.fulfillment.refresh"],
  authentication: { type: "api-key", supported: ["api-key", "signed"] },
  configurationFields: [
    { key: "providerKey", label: "Provider Key", primitive: "fields.text", required: true, publicClientEligible: false, secret: false, customerEditable: false, helpText: "Non-secret provider key.", validation: {} },
    { key: "baseUrl", label: "Base URL", primitive: "fields.url", required: false, publicClientEligible: false, secret: false, customerEditable: false, helpText: "Provider API base URL.", validation: { scheme: "https" } },
    { key: "credentialSecretRef", label: "Credential Secret Reference", primitive: "fields.text", required: true, publicClientEligible: false, secret: true, customerEditable: false, helpText: "Protected credential reference.", validation: {} },
    { key: "webhookSigningSecretRef", label: "Webhook Signing Secret Reference", primitive: "fields.text", required: false, publicClientEligible: false, secret: true, customerEditable: false, helpText: "Protected inbound webhook signing reference.", validation: {} }
  ],
  consent: { categories: [], mode: "business-purpose" },
  dataHandling: { minimize: true, secretsServerSide: true, rawPayloadForwarding: false },
  health: { supportsConnectionTest: true, supportsHealthSnapshot: true },
  actions: [],
  mappings: [{ key: "offer-mapping", canonicalContract: "gaming.supplierOfferMapping" }],
  futureBindings: { events: "phase-39", webhooks: "phase-39", permissions: "phase-39", siteManifest: "phase-39", api: "phase-39" },
  notes: ["Provider-native payloads remain adapter-private and must not become public Gaming contracts."],
  aliases
});
const gamingConnectors = [
  connector("gamingSupplier", "Gaming Supplier", "gaming-supplier", "Provider-neutral server-side Gaming supplier adapter descriptor.", ["Gaming Supplier", "Supplier Router"]),
  connector("fazerCards", "FazerCards", "fazercards", "FazerCards server-side Gaming supplier adapter descriptor. It is an implementation adapter, not the NEXT F canonical public model.", ["FazerCards", "Fazer Cards"])
];
for (const conn of gamingConnectors) writeJson(`registry/integrations/connectors/${conn.$id.slice(13).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}.json`, conn);
integrations.registryVersion = version;
integrations.providers = providers.providers;
integrations.capabilities = caps.capabilities;
integrations.connectors = integrations.connectors.filter((c) => !["integrations.gamingSupplier", "integrations.fazerCards"].includes(c.$id)).concat(gamingConnectors).sort((a, b) => a.$id.localeCompare(b.$id));
integrations.connectorCount = integrations.connectors.length;
integrations.providerCount = providers.providers.length;
integrations.capabilityCount = caps.capabilities.length;
writeJson("registry/integrations/index.json", integrations);

const modules = read("registry/modules/index.json");
if (!modules.categories.some((row) => row.id === "gaming")) modules.categories.push({ id: "gaming", label: "Gaming Store", description: "Digital gaming marketplace and supplier-neutral fulfillment capabilities." });
const gamingCapabilityIds = ["gaming.catalog", "gaming.topups", "gaming.gift-cards", "gaming.game-keys", "gaming.steam-wallet", "gaming.steam-gifts", "gaming.telegram", "gaming.manual-services", "gaming.account-validation", "gaming.supplier-routing", "gaming.digital-fulfillment", "gaming.regional-restrictions", "gaming.dynamic-pricing"];
const contractBindings = definitions.map((d) => d.$id);
const permissionBindings = gamingPermissions.map((p) => p.permissionId);
const eventBindings = gamingEvents.map((e) => e.eventKey);
const gamingModule = {
  $id: "modules.gaming",
  moduleId: "gaming",
  name: "Gaming Store",
  version,
  status: "stable",
  category: "gaming",
  icon: "fa-gamepad",
  order: 450,
  description: "Supplier-neutral digital gaming marketplace covering products, offers, account validation, quotes, orders, supplier routing and secure digital fulfillment.",
  selection: { mandatory: false, defaultEnabled: false, explicitManifestSelection: true, customerCanEnable: false, nextfAdminCanEnable: true },
  dependencies: [
    { moduleId: "core", kind: "required", reason: "Gaming records are tenant/Site scoped and audited." },
    { moduleId: "media", kind: "recommended", reason: "Gaming product artwork should use canonical media references." },
    { moduleId: "commerce", kind: "required", reason: "Gaming reuses Commerce money, payment and transaction primitives." },
    { moduleId: "integrations", kind: "required", reason: "Supplier adapters and provider credentials live in the Integration layer." },
    { moduleId: "webhooks", kind: "recommended", reason: "Fulfillment and supplier status can use canonical Webhook transport." }
  ],
  conflicts: [],
  capabilityIds: gamingCapabilityIds,
  defaultCapabilityIds: ["gaming.catalog", "gaming.topups", "gaming.gift-cards", "gaming.game-keys", "gaming.account-validation", "gaming.digital-fulfillment", "gaming.supplier-routing"],
  contractBindings,
  permissionBindings,
  eventBindings,
  cms: { customerVisible: true, group: "Commerce", navigation: [
    { label: "Gaming Store", path: "/gaming-store", icon: "fa-gamepad", order: 110 },
    { label: "Gaming Products", path: "/gaming-store/products", icon: "fa-gamepad", order: 111 },
    { label: "Gaming Orders", path: "/gaming-store/orders", icon: "fa-receipt", order: 112 },
    { label: "Gaming Suppliers", path: "/gaming-store/suppliers", icon: "fa-plug", order: 113 },
    { label: "Gaming Finance", path: "/gaming-store/finance", icon: "fa-scale-balanced", order: 114 }
  ] },
  admin: { visible: true, group: "Sites", navigation: [{ label: "Gaming Store", path: "/sites/:siteId/gaming", icon: "fa-gamepad", order: 115 }] },
  manifest: { moduleId: "gaming", capabilitySelection: "module-scoped", dependencyValidation: "strict" },
  notes: ["Gaming Store is digital-only. Physical shipping and warehouse concepts are intentionally absent."]
};
modules.registryVersion = version;
modules.modules = modules.modules.filter((m) => m.moduleId !== "gaming").concat(gamingModule).sort((a, b) => a.order - b.order);
const capDetail = {
  "gaming.catalog": ["gaming.product", "gaming.offer", "gaming.purchaseField"],
  "gaming.topups": ["gaming.product", "gaming.offer"],
  "gaming.gift-cards": ["gaming.product", "gaming.offer", "gaming.digitalDeliverable"],
  "gaming.game-keys": ["gaming.product", "gaming.offer", "gaming.digitalDeliverable"],
  "gaming.steam-wallet": ["gaming.offer", "gaming.regionRule"],
  "gaming.steam-gifts": ["gaming.offer", "gaming.purchaseField"],
  "gaming.telegram": ["gaming.offer", "gaming.purchaseField"],
  "gaming.manual-services": ["gaming.fulfillment"],
  "gaming.account-validation": ["gaming.accountValidationPolicy", "gaming.validationResponse"],
  "gaming.supplier-routing": ["gaming.supplierCapabilities", "gaming.supplierOfferMapping"],
  "gaming.digital-fulfillment": ["gaming.fulfillment", "gaming.digitalDeliverable"],
  "gaming.regional-restrictions": ["gaming.regionRule"],
  "gaming.dynamic-pricing": ["gaming.internalQuote", "gaming.publicQuote"]
};
const requires = {
  "gaming.steam-wallet": ["gaming.dynamic-pricing"],
  "gaming.topups": ["gaming.digital-fulfillment"],
  "gaming.game-keys": ["gaming.digital-fulfillment", "gaming.regional-restrictions"],
  "gaming.supplier-routing": []
};
const gamingCaps = gamingCapabilityIds.map((capabilityId) => ({
  $id: `modules.capability.${capabilityId}`,
  capabilityId,
  name: title(capabilityId.slice(7)),
  version,
  status: "stable",
  moduleId: "gaming",
  mode: gamingModule.defaultCapabilityIds.includes(capabilityId) ? "default-on" : "optional",
  selectable: true,
  defaultEnabled: gamingModule.defaultCapabilityIds.includes(capabilityId),
  description: `${title(capabilityId.slice(7))} capability within the Gaming Store module.`,
  contractBindings: capDetail[capabilityId],
  permissionBindings: capabilityId === "gaming.supplier-routing" ? ["gaming.suppliers.manage"] : capabilityId === "gaming.dynamic-pricing" ? ["gaming.finance.manage"] : [],
  eventBindings: capabilityId === "gaming.digital-fulfillment" ? ["gaming.fulfillment-submitted", "gaming.fulfillment-processing", "gaming.fulfillment-completed", "gaming.fulfillment-failed"] : [],
  requiresCapabilities: requires[capabilityId] ?? [],
  requiresModules: ["core"],
  cms: { customerVisible: capabilityId !== "gaming.supplier-routing", adminVisible: true },
  manifest: { allowed: true, explicitSelectionRequired: !gamingModule.defaultCapabilityIds.includes(capabilityId) },
  notes: []
}));
modules.capabilities = modules.capabilities.filter((c) => !c.capabilityId.startsWith("gaming.")).concat(gamingCaps).sort((a, b) => a.capabilityId.localeCompare(b.capabilityId));
modules.moduleCount = modules.modules.length;
modules.capabilityCount = modules.capabilities.length;
writeJson("registry/modules/index.json", modules);

const api = read("registry/api/index.json");
const group = (apiId, name, description, defaultAuthMode, defaultCachePolicy, defaultRateLimitClass, defaultCorsPolicy, operationIds) => ({ $id: apiId, apiId, name, version: "1.0.0", status: "stable", domain: "api", category: "operations", description, basePath: `/api/v1/sites/{siteId}/${apiId.slice(4).replace("gaming-", "gaming/")}`, defaultAuthMode, defaultCachePolicy, defaultRateLimitClass, defaultCorsPolicy, operationIds, moduleBindings: ["gaming"], notes: [] });
const op = (groupId, id, name, method, relPath, authMode, permissionsList, dataContract, opts = {}) => ({
  $id: `api.${groupId}.${id}`,
  operationId: `api.${groupId}.${id}`,
  name,
  version: "1.0.0",
  status: "stable",
  groupId: `api.${groupId}`,
  method,
  path: relPath,
  description: opts.description ?? name,
  authentication: { mode: authMode, permissions: permissionsList, permissionMode: "all", scope: "site" },
  request: { pathParameters: ["siteId", ...(opts.pathParameters ?? [])], query: opts.query ?? [], headers: ["X-Request-Id?", "X-NEXTF-Contract-Version?", ...(opts.idempotent ? ["Idempotency-Key"] : []), ...(opts.concurrent ? ["If-Match"] : [])], bodyContract: opts.bodyContract ?? null, bodyProjection: opts.bodyProjection ?? null },
  response: { successStatus: opts.successStatus ?? 200, envelope: "api.successEnvelope", dataContract, errorEnvelope: "api.errorEnvelope", errors: ["bad_request", "validation_failed", "api_version_unsupported", "contract_version_unsupported", "unauthenticated", "forbidden", "tenant_scope_mismatch", "module_disabled", "capability_disabled", "not_found", ...(opts.errors ?? [])], projection: opts.projection ?? "authorized-minimal" },
  policies: { idempotency: { required: !!opts.idempotent, header: opts.idempotent ? "Idempotency-Key" : null }, concurrency: { required: !!opts.concurrent, requestHeader: opts.concurrent ? "If-Match" : null, responseHeader: opts.concurrent ? "ETag" : null }, cache: opts.cache ?? "no-store", rateLimit: opts.rateLimit ?? "authenticated-read", cors: opts.cors ?? "customer-portal" },
  moduleBindings: ["core", "commerce", "integrations", "gaming"],
  contractBindings: opts.contractBindings ?? [dataContract],
  eventBindings: opts.eventBindings ?? [],
  publicSurface: opts.publicSurface ?? false,
  privacy: opts.privacy ?? "sensitive",
  notes: opts.notes ?? []
});
const gamingOps = [
  op("gaming-public", "store-bootstrap", "Get Gaming Store Bootstrap", "GET", "/bootstrap", "anonymous", [], "gaming.product", { publicSurface: true, privacy: "public", projection: "public-safe", cache: "public-short", rateLimit: "public-read", cors: "public-read", contractBindings: ["gaming.product", "gaming.offer", "gaming.publicQuote"] }),
  op("gaming-public", "list-products", "List Public Gaming Products", "GET", "/products", "anonymous", [], "gaming.product", { publicSurface: true, privacy: "public", projection: "public-safe", cache: "public-short", rateLimit: "public-read", cors: "public-read" }),
  op("gaming-public", "get-product", "Get Public Gaming Product", "GET", "/products/{productId}", "anonymous", [], "gaming.product", { pathParameters: ["productId"], publicSurface: true, privacy: "public", projection: "public-safe", cache: "public-short", rateLimit: "public-read", cors: "public-read" }),
  op("gaming-public", "create-quote", "Create Gaming Offer Quote", "POST", "/offers/{offerId}/quote", "anonymous-or-commerce-customer", [], "gaming.publicQuote", { pathParameters: ["offerId"], bodyContract: "gaming.offer", idempotent: true, publicSurface: true, projection: "public-safe", rateLimit: "commerce-checkout", cors: "site-origin", eventBindings: [] }),
  op("gaming-public", "validate-account", "Validate Gaming Account", "POST", "/offers/{offerId}/validate-account", "anonymous-or-commerce-customer", [], "gaming.validationResponse", { pathParameters: ["offerId"], bodyContract: "gaming.purchaseField", idempotent: true, publicSurface: true, projection: "public-safe", rateLimit: "commerce-checkout", cors: "site-origin" }),
  op("gaming-public", "create-checkout", "Create Gaming Checkout Intent", "POST", "/checkout", "anonymous-or-commerce-customer", [], "gaming.publicOrder", { bodyContract: "gaming.publicQuote", idempotent: true, publicSurface: true, projection: "public-safe", rateLimit: "commerce-checkout", cors: "site-origin", eventBindings: ["gaming.order-created"], notes: ["This operation creates/requests checkout; it cannot self-assert payment success."] }),
  op("gaming-public", "get-order", "Get Public Gaming Order Status", "GET", "/orders/{orderId}", "commerce-customer", [], "gaming.publicOrder", { pathParameters: ["orderId"], publicSurface: true, projection: "public-safe", cors: "site-origin", privacy: "personal" }),
  op("gaming-public", "get-order-delivery", "Get Secure Gaming Order Delivery", "GET", "/orders/{orderId}/delivery", "commerce-customer", [], "gaming.digitalDeliverable", { pathParameters: ["orderId"], publicSurface: false, projection: "authorized-secure", cors: "site-origin", privacy: "secret", cache: "no-store", rateLimit: "sensitive-write", contractBindings: ["gaming.digitalDeliverable", "gaming.publicOrder"] }),
  op("gaming-admin", "read-catalog", "Read Gaming Catalog", "GET", "/catalog", "organization-user", ["gaming.read"], "gaming.product"),
  op("gaming-admin", "upsert-product", "Create or Update Gaming Product", "PUT", "/products/{productId}", "organization-user", ["gaming.products.manage"], "gaming.product", { pathParameters: ["productId"], bodyContract: "gaming.product", idempotent: true, concurrent: true, eventBindings: [] }),
  op("gaming-admin", "upsert-offer", "Create or Update Gaming Offer", "PUT", "/offers/{offerId}", "organization-user", ["gaming.products.manage"], "gaming.offer", { pathParameters: ["offerId"], bodyContract: "gaming.offer", idempotent: true, concurrent: true }),
  op("gaming-admin", "read-supplier-mappings", "Read Gaming Supplier Mappings", "GET", "/supplier-mappings", "organization-user", ["gaming.suppliers.manage"], "gaming.supplierOfferMapping"),
  op("gaming-admin", "update-supplier-mapping", "Update Gaming Supplier Mapping", "PATCH", "/supplier-mappings/{mappingId}", "organization-user", ["gaming.suppliers.manage"], "gaming.supplierOfferMapping", { pathParameters: ["mappingId"], bodyContract: "gaming.supplierOfferMapping", concurrent: true }),
  op("gaming-admin", "read-supplier-status", "Read Gaming Supplier Status", "GET", "/supplier-status", "organization-user", ["gaming.suppliers.manage"], "gaming.supplierCapabilities"),
  op("gaming-admin", "read-orders", "Read Gaming Orders", "GET", "/orders", "organization-user", ["gaming.orders.manage"], "gaming.internalOrder"),
  op("gaming-admin", "order-action", "Run Gaming Order Action", "POST", "/orders/{orderId}/actions", "organization-user", ["gaming.orders.manage"], "api.commandResult", { pathParameters: ["orderId"], bodyContract: "gaming.internalOrder", idempotent: true, eventBindings: ["gaming.fulfillment-submitted"] }),
  op("gaming-admin", "read-finance", "Read Gaming Finance", "GET", "/finance", "organization-user", ["gaming.finance.manage"], "gaming.internalQuote"),
  op("gaming-service", "receive-supplier-webhook", "Receive Gaming Supplier Webhook", "POST", "/supplier-webhooks/{supplierRef}", "site-server", [], "api.commandResult", { pathParameters: ["supplierRef"], idempotent: true, rateLimit: "server-to-server", cors: "server-only", eventBindings: ["gaming.fulfillment-processing", "gaming.fulfillment-completed", "gaming.fulfillment-failed"] }),
  op("gaming-service", "sync-catalog", "Sync Gaming Catalog", "POST", "/sync/catalog", "internal-service", [], "api.commandResult", { idempotent: true, rateLimit: "server-to-server", cors: "server-only", eventBindings: ["gaming.catalog-sync-completed", "gaming.catalog-sync-failed"] }),
  op("gaming-service", "sync-availability", "Sync Gaming Availability", "POST", "/sync/availability", "internal-service", [], "api.commandResult", { idempotent: true, rateLimit: "server-to-server", cors: "server-only", eventBindings: ["gaming.supplier-availability-changed"] }),
  op("gaming-service", "submit-fulfillment", "Submit Gaming Fulfillment", "POST", "/fulfillment/submit", "internal-service", [], "api.commandResult", { idempotent: true, rateLimit: "server-to-server", cors: "server-only", eventBindings: ["gaming.fulfillment-submitted"] }),
  op("gaming-service", "refresh-fulfillment", "Refresh Gaming Fulfillment", "POST", "/fulfillment/refresh", "internal-service", [], "api.commandResult", { idempotent: true, rateLimit: "server-to-server", cors: "server-only", eventBindings: ["gaming.fulfillment-processing", "gaming.fulfillment-completed", "gaming.fulfillment-failed"] })
];
const gamingGroups = [
  group("api.gaming-public", "Gaming Public API", "Customer-safe Gaming storefront operations.", "anonymous", "public-short", "public-read", "site-origin", gamingOps.filter((o) => o.groupId === "api.gaming-public").map((o) => o.operationId)),
  group("api.gaming-admin", "Gaming Admin API", "Customer CMS and NEXT F Admin Gaming operations.", "organization-user", "no-store", "authenticated-read", "customer-portal", gamingOps.filter((o) => o.groupId === "api.gaming-admin").map((o) => o.operationId)),
  group("api.gaming-service", "Gaming Service API", "Trusted service and supplier adapter Gaming operations.", "internal-service", "no-store", "server-to-server", "server-only", gamingOps.filter((o) => o.groupId === "api.gaming-service").map((o) => o.operationId))
];
for (const g of gamingGroups) writeJson(`registry/api/groups/${g.apiId.slice(4)}.json`, g);
for (const operation of gamingOps) writeJson(`registry/api/operations/${operation.groupId.slice(4)}/${operation.operationId.split(".").at(-1)}.json`, operation);
api.registryVersion = version;
api.groups = api.groups.filter((g) => !g.apiId.startsWith("api.gaming-")).concat(gamingGroups).sort((a, b) => a.apiId.localeCompare(b.apiId));
api.operations = api.operations.filter((o) => !o.operationId.startsWith("api.gaming-")).concat(gamingOps).sort((a, b) => a.operationId.localeCompare(b.operationId));
writeJson("registry/api/index.json", api);

const cms = read("registry/cms-ui/index.json");
const cmsProfiles = [
  ["gaming.catalog", "Gaming Catalog", "gaming.product", "/gaming-store/products", ["gaming.read", "gaming.products.manage"]],
  ["gaming.orders", "Gaming Orders", "gaming.internalOrder", "/gaming-store/orders", ["gaming.orders.manage"]],
  ["gaming.suppliers", "Gaming Suppliers", "gaming.supplierOfferMapping", "/gaming-store/suppliers", ["gaming.suppliers.manage"]],
  ["gaming.finance", "Gaming Finance", "gaming.internalQuote", "/gaming-store/finance", ["gaming.finance.manage"]]
].map(([resource, name, contract, route, perms]) => ({
  $id: `cmsUi.profile.${resource.replace(".", ".")}`,
  name,
  version,
  status: "stable",
  domain: "cms-ui",
  profileType: "resource",
  resource,
  moduleId: "gaming",
  description: `Customer CMS presentation metadata for ${name} within authorized Site scope.`,
  targetContracts: [contract],
  primaryTargetContract: contract,
  route,
  screenKind: "editor",
  layoutTemplate: "commerce-editor",
  responsivePolicy: "standard",
  fieldBindings: definitions.find((d) => d.$id === contract)?.fields.map((f, i) => ({ field: f.key, label: title(f.key), description: f.description, editorId: f.primitive === "fields.boolean" ? "toggle" : f.primitive === "fields.select" ? "select" : f.primitive === "fields.json" ? "structured-list" : f.primitive === "fields.textarea" ? "multi-line-text" : "single-line-text", group: "gaming", zone: "main", order: (i + 1) * 10, required: f.required, customerEditable: !["identity", "scope", "orderId", "quoteId", "selectedMappingId", "supplierCost"].includes(f.key), adminEditable: true, width: "full", sourceFieldType: f.schema ?? f.primitive, validationHint: f.config ?? {}, searchable: ["name", "displayName", "orderId"].includes(f.key), filterable: false, sortable: false, localizable: false, revisionTracked: false })) ?? [],
  relatedPanels: [],
  list: { enabled: true, columns: [], search: true, filters: [], bulkActions: "permission-and-rule-bound", sorts: [], searchFields: [] },
  actions: perms.map((permissionId) => ({ actionId: permissionId.endsWith(".manage") ? "manage" : "view", permissionId, riskLevel: "elevated", requiresRecentAuthentication: permissionId.includes("finance") || permissionId.includes("suppliers"), requiresExplicitConfirmation: false })),
  permissions: perms,
  states: ["loading", "empty", "populated", "validation-error", "authorization-denied", "not-found", "conflict", "network-error", "success"],
  unsavedChanges: { track: true, warnOnLeave: true, autosave: "draft-only-when-supported", neverAutoExecute: ["publish", "approve", "delete", "refund", "fulfill", "disconnect", "rotate-secret"] },
  accessibility: { labelsRequired: true, keyboardComplete: true, nonColorStatus: true, dragAlternativeRequired: false },
  notes: ["UI visibility is never authorization; protected actions require canonical Gaming permissions."],
  customerAccessPolicyRef: null
}));
cms.registryVersion = version;
cms.profiles = cms.profiles.filter((p) => p.moduleId !== "gaming").concat(cmsProfiles).sort((a, b) => a.$id.localeCompare(b.$id));
cms.profileCount = cms.profiles.length;
writeJson("registry/cms-ui/index.json", cms);
for (const p of cmsProfiles) writeJson(`registry/cms-ui/profiles/${p.resource.replace(".", "-")}.json`, p);

const admin = read("registry/admin-ui/index.json");
const adminProfiles = [
  ["gaming.catalog", "Gaming Catalog Admin", "gaming.product", "gaming.products.manage"],
  ["gaming.orders", "Gaming Orders Admin", "gaming.internalOrder", "gaming.orders.manage"],
  ["gaming.suppliers", "Gaming Suppliers Admin", "gaming.supplierOfferMapping", "gaming.suppliers.manage"],
  ["gaming.finance", "Gaming Finance Admin", "gaming.internalQuote", "gaming.finance.manage"]
].map(([resource, name, contract, permissionId]) => ({
  $id: `adminUi.profile.${resource}`,
  name,
  version,
  status: "stable",
  domain: "admin-ui",
  profileType: "resource",
  resource,
  moduleId: "gaming",
  description: `NEXT F Admin metadata for ${name}.`,
  targetContracts: [contract],
  primaryTargetContract: contract,
  route: `/sites/:siteId/${resource.replace(".", "/")}`,
  screenKind: "admin-editor",
  layoutTemplate: "admin-operations",
  permissions: [permissionId],
  actions: [{ actionId: "manage", permissionId, riskLevel: permissionId.includes("suppliers") ? "privileged" : "sensitive", requiresRecentAuthentication: true, requiresExplicitConfirmation: permissionId.includes("suppliers") }],
  states: ["loading", "empty", "populated", "authorization-denied", "network-error", "success"],
  notes: ["Admin profile metadata does not expose supplier secrets."]
}));
admin.registryVersion = version;
admin.profiles = admin.profiles.filter((p) => p.moduleId !== "gaming").concat(adminProfiles).sort((a, b) => a.$id.localeCompare(b.$id));
admin.profileCount = admin.profiles.length;
writeJson("registry/admin-ui/index.json", admin);
for (const p of adminProfiles) writeJson(`registry/admin-ui/profiles/${p.resource.replace(".", "-")}-admin.json`, p);

const manifestSchema = read("registry/manifests/nextf-site-manifest.schema.json");
if (!manifestSchema.$defs.siteDescriptor.properties.siteType.enum.includes("gaming")) manifestSchema.$defs.siteDescriptor.properties.siteType.enum.push("gaming");
manifestSchema.$defs.customerAccessRestriction.properties.policyVersion.const = "1.2.0";
writeJson("registry/manifests/nextf-site-manifest.schema.json", manifestSchema);

const manifest = {
  manifestVersion: "1.0.0",
  contracts: { contractVersion: version, manifestSpecVersion: "1.0.0", compatibilityMode: "strict-major" },
  site: { siteId: "site_gaming_nextf_lk", name: "NEXT F Gaming", siteType: "gaming", primaryUrl: "https://gaming.nextf.lk" },
  localization: { defaultLocale: "en-LK", supportedLocales: ["en-LK"], timeZone: "Asia/Colombo" },
  environments: [
    { id: "development", kind: "development", baseUrl: "http://localhost:5173", enabled: true },
    { id: "production", kind: "production", baseUrl: "https://gaming.nextf.lk", enabled: true }
  ],
  contentDelivery: { mode: "runtime", publishedOnly: true, previewSupported: true },
  modules: [
    { moduleId: "core", enabled: true, capabilities: modules.capabilities.filter((c) => c.moduleId === "core" && c.defaultEnabled).map((c) => ({ capabilityId: c.capabilityId, enabled: true })) },
    { moduleId: "media", enabled: true, capabilities: modules.capabilities.filter((c) => c.moduleId === "media" && c.defaultEnabled).map((c) => ({ capabilityId: c.capabilityId, enabled: true })) },
    { moduleId: "commerce", enabled: true, capabilities: ["commerce.catalog", "commerce.customers", "commerce.checkout", "commerce.orders", "commerce.payments", "commerce.fulfillment", "commerce.refunds"].map((capabilityId) => ({ capabilityId, enabled: true })) },
    { moduleId: "integrations", enabled: true, capabilities: ["integrations.custom-api", "integrations.health", "integrations.sync", "integrations.webhooks"].map((capabilityId) => ({ capabilityId, enabled: true })) },
    { moduleId: "gaming", enabled: true, capabilities: gamingCapabilityIds.map((capabilityId) => ({ capabilityId, enabled: true })) }
  ],
  runtime: { siteIdentity: true, contentConnector: true, eventLayer: true, consentLayer: true, integrationLoader: true },
  cms: { enabled: true, workspaceMode: "site", editingMode: "structured", previewEnabled: true, publishingEnabled: true, revisionHistoryEnabled: true, arbitraryCodeEditing: false },
  apiBindings: gamingGroups.map((g) => ({ apiId: g.apiId, version: "1.0.0", environments: ["development", "production"] })),
  events: { produces: eventBindings, consumes: ["gaming.supplier-availability-changed", "gaming.supplier-health-changed"] },
  tracking: { events: ["page.viewed", "cta.clicked"] },
  integrations: [
    { connectorId: "integrations.gamingSupplier", environments: ["production"], enabled: true },
    { connectorId: "integrations.fazerCards", environments: ["production"], enabled: true }
  ],
  configuration: [
    { key: "GAMING_SUPPLIER_PROVIDER", exposure: "server", required: true, environments: ["production"], purpose: "Selects the active server-side Gaming supplier adapter." },
    { key: "FAZERCARDS_API_KEY", exposure: "secret", required: false, environments: ["production"], purpose: "Protected FazerCards API credential stored outside the Registry and browser bundles." }
  ],
  extensions: []
};
writeJson("starters/gaming/nextf.site.json", manifest);
writeText("starters/gaming/AGENTS.md", `# Gaming Store Starter - Agent Instructions

Treat \`nextf.site.json\` as the authoritative Gaming site declaration. Reuse canonical Gaming Product, Offer, Quote, Order, Supplier Mapping, Fulfillment and Deliverable contracts. Keep supplier credentials, real player IDs, provider payloads and digital code/PIN/key values outside source, manifests, events and analytics.
`);
writeText("starters/gaming/README.md", `# Gaming Store Site Starter

**NEXT F Contracts:** ${version}

Framework-neutral starter for \`gaming.nextf.lk\`, using supplier-neutral Gaming contracts and server-side provider adapters.
`);
writeJson("starters/gaming/CONTENT-CONTRACT-MAP.json", { contractVersion: version, modules: { gaming: { capabilities: gamingCapabilityIds, contracts: contractBindings } }, all: contractBindings });
writeJson("starters/gaming/EVENT-MAP.json", { contractVersion: version, authoritativeDomainEvents: eventBindings });
writeJson("starters/gaming/TRACKING-EVENT-MAP.json", { contractVersion: version, trackingEvents: ["page.viewed", "cta.clicked"], notes: ["Tracking observations never include deliverable secrets or supplier cost."] });
writeJson("starters/gaming/CMS-MAPPING.json", { contractVersion: version, surface: "customer-cms", navigation: gamingModule.cms.navigation });
writeJson("starters/gaming/ADMIN-MAPPING.json", { contractVersion: version, surface: "nextf-admin", navigation: gamingModule.admin.navigation });
writeText("starters/gaming/PERMISSION-EXPECTATIONS.md", gamingPermissions.map((p) => `- \`${p.permissionId}\` - ${p.description}`).join("\n"));
writeText("starters/gaming/API-BINDINGS.md", gamingGroups.map((g) => `## \`${g.apiId}\`\n\n${g.description}\n`).join("\n"));
writeText("starters/gaming/INTEGRATION-ARCHITECTURE.md", `# Gaming Integration Architecture

FazerCards and future suppliers sit behind \`integrations.gamingSupplier\` adapter semantics. Public storefront contracts never expose supplier IDs, costs, balances, raw provider errors or credentials.
`);
writeText("starters/gaming/EXTENSIONS.md", "# Extension Guidance\n\nUse canonical Gaming contracts first. Document any customer/project extension with a collision-safe namespace before implementation.\n");
writeText("starters/gaming/VALIDATION.md", `# Validation Commands

\`\`\`bash
node bin/nextf-contract.mjs validate starters/gaming/nextf.site.json --verbose
node bin/nextf-contract.mjs compatibility starters/gaming/nextf.site.json --json
\`\`\`
`);
writeText("starters/gaming/ACCEPTANCE-CHECKLIST.md", "- [ ] Manifest pins 1.2.0.\n- [ ] Gaming module and dependencies resolve.\n- [ ] Supplier secrets stay in trusted secret storage.\n- [ ] Payment success is server/provider verified.\n- [ ] Secure deliverables use authorized delivery retrieval only.\n");
const starterIndex = read("registry/starters/index.json");
starterIndex.registryVersion = version;
starterIndex.starters = starterIndex.starters.filter((s) => s.slug !== "gaming").concat({
  $id: "starters.gaming",
  slug: "gaming",
  name: "Gaming Store Site Starter",
  siteType: "gaming",
  summary: "Digital gaming marketplace starter for top-ups, gift cards, game keys, Steam, Telegram and supplier-neutral fulfillment.",
  source: "registry/starters/definitions/gaming.json",
  bundlePath: "starters/gaming",
  manifestPath: "starters/gaming/nextf.site.json",
  moduleCount: manifest.modules.length,
  capabilityCount: gamingCapabilityIds.length,
  contractCount: contractBindings.length,
  permissionCount: gamingPermissions.length,
  eventCount: gamingEvents.length
}).sort((a, b) => a.slug.localeCompare(b.slug));
starterIndex.counts = { starters: starterIndex.starters.length, siteTypes: new Set(starterIndex.starters.map((s) => s.siteType)).size, filesPerStarter: 16 };
writeJson("registry/starters/index.json", starterIndex);
writeJson("registry/starters/definitions/gaming.json", { $id: "starters.gaming", slug: "gaming", name: "Gaming Store Site Starter", version, status: "stable", siteType: "gaming", bundlePath: "starters/gaming", manifestPath: "starters/gaming/nextf.site.json", summary: "Digital gaming marketplace starter for supplier-neutral NEXT F Gaming.", modules: manifest.modules.map((m) => m.moduleId), capabilities: gamingCapabilityIds, contractCount: contractBindings.length, apiBindings: manifest.apiBindings, integrations: manifest.integrations, permissionCount: gamingPermissions.length, eventCount: gamingEvents.length });

let registry = read("registry/registry.json");
registry.registryVersion = version;
registry.items = registry.items.filter((item) => item.managedBy !== "gaming-sync");
registry.items.push({ id: "gaming.gamingStoreContractStandard", name: "Gaming Store Contract Standard", domain: "gaming", type: "standard", version, status: "stable", description: "Supplier-neutral Phase 39 Gaming Store contract rules.", source: "standards/47-gaming-store-contract-standard.md", phase: 39, introducedIn: version, tags: ["gaming", "digital", "supplier-neutral", "standard"], relationships: [{ type: "uses", target: "commerce.moneySnapshot", description: "Gaming pricing reuses Commerce money semantics." }, { type: "uses", target: "integrations.integrationContractStandard", description: "Supplier adapters live in Integrations." }], permissions: [], events: [], managedBy: "gaming-sync" });
registry.items.push({ id: "gaming.registry", name: "Gaming Store Registry", domain: "gaming", type: "registry-index", version, status: "stable", description: "Machine-readable index of canonical Gaming Store schemas.", source: "registry/gaming/index.json", phase: 39, introducedIn: version, tags: ["gaming", "registry", "schemas"], relationships: [{ type: "implements", target: "gaming.gamingStoreContractStandard", description: "Indexes definitions governed by Phase 39." }], permissions: [], events: [], managedBy: "gaming-sync" });
for (const def of definitions) registry.items.push({ id: def.$id, name: def.name, domain: "gaming", type: "schema", version: def.version, status: def.status, description: def.description, source: `registry/gaming/definitions/${kebab(def.$id.slice(7))}.json`, phase: 39, introducedIn: version, tags: ["gaming-schema", def.category, def.gamingModel.kind, ...def.fields.slice(0, 6).map((f) => f.key)], relationships: [{ type: "implements", target: "gaming.gamingStoreContractStandard", description: "Implements Phase 39 Gaming Store contracts." }, ...def.relationships], permissions: [], events: [], managedBy: "gaming-sync" });
for (const perm of gamingPermissions) registry.items.push({ id: perm.permissionId, name: perm.name, domain: "gaming", type: "permission", version, status: "stable", description: perm.description, source: `registry/permissions/permissions/${perm.permissionId}.json`, phase: 39, introducedIn: version, tags: ["permission", "gaming", perm.resource, perm.action, perm.riskLevel], relationships: [{ type: "implements", target: "permissions.permissionRegistryStandard", description: "Gaming permission uses canonical permission semantics." }], permissions: [perm.permissionId], events: [], managedBy: "gaming-sync" });
for (const event of gamingEvents) registry.items.push({ id: event.eventKey, name: event.name, domain: "events", type: "event", version, status: "stable", description: event.description, source: `registry/events/events/${event.eventKey.replace(".", "--")}.json`, phase: 39, introducedIn: version, tags: ["event", "gaming", event.webhookEligible ? "webhook-eligible" : "internal-only"], relationships: event.relationships, permissions: [], events: [event.eventKey], managedBy: "gaming-sync" });
for (const g of gamingGroups) registry.items.push({ id: g.apiId, name: g.name, domain: "api", type: "api-group", version: "1.0.0", status: "stable", description: g.description, source: `registry/api/groups/${g.apiId.slice(4)}.json`, phase: 39, introducedIn: version, tags: ["api", "gaming", "group"], relationships: [{ type: "implements", target: "api.apiContractStandard", description: "Gaming API group follows API contract rules." }], permissions: [], events: [], managedBy: "gaming-sync" });
for (const operation of gamingOps) registry.items.push({ id: operation.operationId, name: operation.name, domain: "api", type: "api-operation", version: "1.0.0", status: "stable", description: operation.description, source: `registry/api/operations/${operation.groupId.slice(4)}/${operation.operationId.split(".").at(-1)}.json`, phase: 39, introducedIn: version, tags: ["api-operation", "gaming", operation.method, operation.authentication.mode], relationships: operation.contractBindings.map((target) => ({ type: "uses", target, description: "Operation uses this contract." })), permissions: operation.authentication.permissions, events: operation.eventBindings, managedBy: "gaming-sync" });
for (const conn of gamingConnectors) registry.items.push({ id: conn.$id, name: conn.name, domain: "integrations", type: "connector", version, status: "stable", description: conn.description, source: `registry/integrations/connectors/${conn.$id.slice(13).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}.json`, phase: 39, introducedIn: version, tags: ["connector", "gaming", conn.providerKey, conn.family], relationships: [{ type: "implements", target: "integrations.integrationContractStandard", description: "Gaming supplier connector follows Integration rules." }], permissions: [], events: [], managedBy: "gaming-sync" });
registry.items.push({ id: "starters.gaming", name: "Gaming Store Site Starter", domain: "developer", type: "starter-pack", version, status: "stable", description: "Framework-neutral starter for gaming.nextf.lk.", source: "registry/starters/definitions/gaming.json", phase: 39, introducedIn: version, tags: ["starter-pack", "gaming"], relationships: [{ type: "uses", target: "modules.gaming", description: "Enables Gaming Store module." }], permissions: [], events: [], managedBy: "gaming-sync" });
for (const profile of cmsProfiles) registry.items.push({ id: profile.$id, name: profile.name, domain: "cms-ui", type: "ui-profile", version, status: "stable", description: profile.description, source: `registry/cms-ui/profiles/${profile.resource.replace(".", "-")}.json`, phase: 39, introducedIn: version, tags: ["cms-ui", "gaming"], relationships: [{ type: "uses", target: profile.primaryTargetContract, description: "UI profile targets this Gaming contract." }], permissions: profile.permissions, events: [], managedBy: "gaming-sync" });
for (const profile of adminProfiles) registry.items.push({ id: profile.$id, name: profile.name, domain: "admin-ui", type: "ui-profile", version, status: "stable", description: profile.description, source: `registry/admin-ui/profiles/${profile.resource.replace(".", "-")}-admin.json`, phase: 39, introducedIn: version, tags: ["admin-ui", "gaming"], relationships: [{ type: "uses", target: profile.primaryTargetContract, description: "Admin profile targets this Gaming contract." }], permissions: profile.permissions, events: [], managedBy: "gaming-sync" });
registry.items.sort((a, b) => a.id.localeCompare(b.id));
writeJson("registry/registry.json", registry);

for (const rel of ["registry/domains.json", "registry/types.json", "registry/statuses.json", "registry/registry-meta.json"]) {
  const data = read(rel);
  data.registryVersion = version;
  if (rel.endsWith("domains.json") && !data.domains.some((d) => d.id === "gaming")) data.domains.push({ id: "gaming", label: "Gaming Store", description: "Supplier-neutral digital gaming marketplace contracts." });
  if (rel.endsWith("types.json")) {
    for (const t of [{ id: "ui-profile", label: "UI Profile", description: "Customer CMS or Admin presentation metadata." }, { id: "starter-pack", label: "Starter Pack", description: "Framework-neutral Site starter bundle." }]) if (!data.types.some((row) => row.id === t.id)) data.types.push(t);
  }
  writeJson(rel, data);
}

const changelogRelease = {
  version,
  title: "Gaming Store Canonical Contracts",
  releaseStatus: "published-stable",
  releaseDate: "2026-09-14",
  phase: 39,
  summary: "Adds supplier-neutral NEXT F Gaming Store contracts, APIs, permissions, events, integrations and a gaming.nextf.lk starter while preserving V1.0.0 and V1.1.0 immutable releases.",
  recordCompleteness: "complete",
  incompletenessReason: null,
  provenance: { exactRegistrySnapshotAvailable: true, source: "NEXT-F-CONTRACTS-GAMING-STORE-CODEX-GUIDE.md" },
  evidence: { evidenceLevel: "authoritative", diffAvailable: true, diffRoute: "#/lifecycle/diff?from=1.1.0&to=1.2.0", compatibilityRoute: "#/lifecycle/compatibility", migrationRoute: null },
  support: { supportLevel: "stable", compatibilityStatus: "compatible-additive", registryProductionStable: true },
  affected: { domains: ["gaming", "modules", "api", "permissions", "events", "integrations", "cms-ui", "admin-ui", "developer"], modules: ["gaming"], contracts: ["modules.gaming", ...contractBindings] },
  changes: [
    { entryId: "phase39-gaming-module", title: "Gaming Store module", category: "feature", changeType: "added", summary: "Adds the canonical Gaming Store module and capabilities.", affectedRegistryIds: ["modules.gaming", ...gamingCapabilityIds], affectedDomains: ["modules", "gaming"], affectedModules: ["gaming"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "standards/47-gaming-store-contract-standard.md" },
    { entryId: "phase39-gaming-contracts", title: "Gaming canonical schemas", category: "feature", changeType: "added", summary: "Adds supplier-neutral Product, Offer, Purchase Field, Quote, Order, Fulfillment and Deliverable contracts.", affectedRegistryIds: contractBindings, affectedDomains: ["gaming"], affectedModules: ["gaming"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "registry/gaming/index.json" },
    { entryId: "phase39-gaming-runtime-bindings", title: "Gaming runtime bindings", category: "feature", changeType: "added", summary: "Adds Gaming APIs, permissions, events, integrations, UI metadata and starter.", affectedRegistryIds: [...gamingGroups.map((g) => g.apiId), ...gamingPermissions.map((p) => p.permissionId), ...eventBindings, ...gamingConnectors.map((c) => c.$id), "starters.gaming"], affectedDomains: ["api", "permissions", "events", "integrations", "developer"], affectedModules: ["gaming"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "registry/gaming/index.json" }
  ]
};
writeJson("registry/changelog/releases/1.2.0.json", changelogRelease);

run("scripts/sync-events-registry.mjs");
run("scripts/sync-integrations-registry.mjs");
run("scripts/sync-api-registry.mjs");
run("scripts/sync-modules-registry.mjs");
run("scripts/sync-cms-ui-registry.mjs");
run("scripts/sync-admin-ui-registry.mjs");
run("scripts/sync-changelog-registry.mjs");
run("scripts/sync-deprecations-registry.mjs");
run("scripts/sync-security-registry.mjs");
run("scripts/sync-privacy-registry.mjs");
run("scripts/sync-accessibility-registry.mjs");
run("scripts/sync-performance-registry.mjs");
run("scripts/sync-global-search.mjs");
run("scripts/sync-relationships-registry.mjs");
run("scripts/sync-contract-diff.mjs");
run("scripts/sync-compatibility-center.mjs");
run("scripts/sync-browser-validation.mjs");
run("scripts/sync-registry-health.mjs");

registry = read("registry/registry.json");
const snapshotRoot = "registry/releases/1.2.0/snapshots";
const snapshotFiles = {
  "registry.json": "registry/registry.json",
  "gaming.json": "registry/gaming/index.json",
  "modules.json": "registry/modules/index.json",
  "api-contracts.json": "registry/api/index.json",
  "permissions.json": "registry/permissions/index.json",
  "events.json": "registry/events/index.json",
  "integrations.json": "registry/integrations/index.json",
  "site-manifest.schema.json": "registry/manifests/nextf-site-manifest.schema.json",
  "gaming-site-manifest.json": "starters/gaming/nextf.site.json",
  "search.json": "registry/search/search-index.json",
  "relationships.json": "registry/relationships/relationship-index.json",
  "compatibility.json": "registry/compatibility/index.json"
};
for (const [name, rel] of Object.entries(snapshotFiles)) writeJson(`${snapshotRoot}/${name}`, read(rel));
const sha = (rel) => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, rel))).digest("hex");
const snapshotIndex = {
  registryVersion: version,
  releaseVersion: version,
  phase: 39,
  title: "NEXT F Contracts V1.2.0 Snapshot Index",
  frozenAt: new Date().toISOString(),
  previousStableVersion: "1.1.0",
  snapshots: Object.keys(snapshotFiles).sort().map((file) => ({ path: `${snapshotRoot}/${file}`, sha256: sha(`${snapshotRoot}/${file}`), bytes: fs.statSync(path.join(root, `${snapshotRoot}/${file}`)).size }))
};
writeJson("registry/releases/1.2.0/snapshot-index.json", snapshotIndex);
const validation = spawnSync(process.execPath, [path.join(root, "scripts/validate-phase-39.mjs")], { cwd: root, encoding: "utf8" });
const starterValidation = spawnSync(process.execPath, [path.join(root, "bin/nextf-contract.mjs"), "validate", "starters/gaming/nextf.site.json", "--json"], { cwd: root, encoding: "utf8" });
const compatibility = spawnSync(process.execPath, [path.join(root, "bin/nextf-contract.mjs"), "compatibility", "starters/gaming/nextf.site.json", "--json"], { cwd: root, encoding: "utf8" });
const acceptance = {
  registryVersion: version,
  phase: 39,
  title: "NEXT F Contracts V1.2.0 Gaming Store Acceptance",
  release: { phase: 39, version, status: validation.status === 0 && starterValidation.status === 0 && compatibility.status === 0 ? "STABLE" : "BLOCKED", previousStableVersion: "1.1.0" },
  inventory: { gamingSchemas: definitions.length, gamingCapabilities: gamingCapabilityIds.length, gamingApiOperations: gamingOps.length, gamingPermissions: gamingPermissions.length, gamingEvents: gamingEvents.length, gamingConnectors: gamingConnectors.length },
  immutableReleasePolicy: { changedExistingImmutableRelease: false, preservedVersions: ["1.0.0", "1.1.0"] },
  validation: {
    phase39: { exitCode: validation.status, passed: validation.status === 0 },
    gamingStarter: { command: "node bin/nextf-contract.mjs validate starters/gaming/nextf.site.json --json", exitCode: starterValidation.status, passed: starterValidation.status === 0 },
    compatibility: { command: "node bin/nextf-contract.mjs compatibility starters/gaming/nextf.site.json --json", exitCode: compatibility.status, passed: compatibility.status === 0 }
  },
  generatedAt: new Date().toISOString()
};
writeJson("registry/releases/1.2.0/acceptance-report.json", acceptance);
writeJson("registry/releases/1.2.0/release-manifest.json", { releaseVersion: version, phase: 39, status: acceptance.release.status, previousStableVersion: "1.1.0", registrySha256: sha("registry/registry.json"), snapshots: { index: "registry/releases/1.2.0/snapshot-index.json", root: snapshotRoot }, acceptance: { report: "registry/releases/1.2.0/acceptance-report.json", conclusion: acceptance.release.status === "STABLE" ? "PASS" : "FAIL" }, counts: acceptance.inventory });
const integrityFiles = ["registry/registry.json", "registry/gaming/index.json", "registry/modules/index.json", "registry/api/index.json", "registry/permissions/index.json", "registry/events/index.json", "registry/integrations/index.json", "starters/gaming/nextf.site.json", "registry/releases/1.2.0/acceptance-report.json", "registry/releases/1.2.0/release-manifest.json", "registry/releases/1.2.0/snapshot-index.json"];
const hashes = Object.fromEntries(integrityFiles.map((file) => [file, { sha256: sha(file), bytes: fs.statSync(path.join(root, file)).size }]));
writeJson("registry/releases/1.2.0/integrity-hashes.json", { registryVersion: version, releaseVersion: version, algorithm: "sha256", generatedAt: acceptance.generatedAt, files: hashes });
writeText("registry/releases/1.2.0/INTEGRITY.sha256", Object.entries(hashes).map(([file, value]) => `${value.sha256}  ${file}`).join("\n"));
writeJson("registry/releases/index.json", { currentVersion: version, stable: acceptance.release.status === "STABLE", productionAcceptance: "registry/releases/1.2.0/acceptance-report.json", releaseManifest: "registry/releases/1.2.0/release-manifest.json", snapshotIndex: "registry/releases/1.2.0/snapshot-index.json", integrityHashes: "registry/releases/1.2.0/integrity-hashes.json", releases: [{ version: "1.0.0", status: "STABLE", manifest: "registry/releases/1.0.0/release-manifest.json" }, { version: "1.1.0", status: "STABLE", manifest: "registry/releases/1.1.0/release-manifest.json" }, { version, status: acceptance.release.status, manifest: "registry/releases/1.2.0/release-manifest.json" }] });
writeText("js/generated-release.js", `// GENERATED FILE - DO NOT EDIT DIRECTLY.
export const GENERATED_RELEASE = ${JSON.stringify({ index: read("registry/releases/index.json"), acceptance, snapshotIndex })};
`);

run("scripts/generate-registry-bootstrap.mjs");
console.log(`Gaming Store Registry synchronized for V${version}: ${definitions.length} schemas, ${gamingCapabilityIds.length} capabilities, ${gamingOps.length} API operations.`);
