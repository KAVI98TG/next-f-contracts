import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const version = "1.3.0";
const phase = 40;
const previousVersion = "1.2.0";
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
const sha = (rel) => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, rel))).digest("hex");

writeText("VERSION", version);
const pkg = read("package.json");
pkg.version = version;
pkg.scripts.validate = "node scripts/validate-phase-40.mjs";
pkg.scripts["generate:software"] = "node scripts/sync-software-registry.mjs";
pkg.scripts["validate:phase40"] = "node scripts/validate-phase-40.mjs";
pkg.scripts["smoke:phase40"] = "node scripts/smoke-phase-40.mjs";
writeJson("package.json", pkg);
if (fs.existsSync(path.join(root, "package-lock.json"))) {
  const lock = read("package-lock.json");
  lock.version = version;
  if (lock.packages?.[""]) lock.packages[""].version = version;
  writeJson("package-lock.json", lock);
}

const standard = `# Phase 40 - Software Canonical Contract Standard

V1.3.0 adds the first-class \`software\` domain for NEXT F Documentation, NEXT F Blog Suite and NEXT F Publisher Suite.

## Canonical boundary

The Software service is the business authority for catalog, editions, prices, software customers, software order extensions, subscriptions, licenses, activations, entitlements, releases, downloads and software support. Checkout remains the payment authority. Commerce remains authoritative for generic order, money, payment, capture and refund primitives. CMS is a guarded staff control plane and must not become a second Software system of record.

## Commercial truth

Browsers send product/edition/coupon choices only. Trusted prices, final amounts, paid state, entitlement grants, activation limits and package paths are resolved by trusted services. Historical order, price, entitlement-source and release-publication snapshots are immutable.

## Payment evidence

A browser success redirect is never payment evidence. Software fulfills only after verified, signed and replay-protected Checkout evidence is reconciled with the pending Software order. Equivalent retries are idempotent and must not duplicate subscriptions, licenses or entitlements.

## Renewal rule for V1.3.0

Annual plans are customer-initiated renewal contracts in this release. Automatic renewal is reserved until Checkout/provider tokenization or agreements, consent evidence, retries, payment-method update, cancellation semantics and recurring webhook evidence are implemented and accepted. Contracts must not label the launch annual plan auto-renewing.

## Licensing and entitlement rule

Plan names are presentation labels. Authorization is capability-based through Software Entitlements. License activation limits use explicit \`single\`, \`bounded\` or \`unlimited\` policies, never sentinel numbers. Expiration can stop Pro updates and priority support but must not remotely disable already installed plugin functionality.

## Release and download rule

Release package bytes are private. Release artifacts expose opaque storage references, SHA-256 checksums and signature references. Download grants are short-lived, single-purpose and owner/product scoped. CMS/browser clients never supply checksums as authority and never receive bucket credentials.

## Customer access rule

Customer Workspace operations are authenticated-owner scoped. There is no cross-customer search/list surface. Customer APIs return only resources belonging to the authenticated Software customer.

## Privacy and security rule

License keys, activation details, transaction references and abuse signals are sensitive; service credentials, signing keys, provider secrets and raw download tokens are secret. Licensing/update requests must not contain WordPress page/post/document content, visitor analytics or unrelated site data.

## Stable launch identifiers

Products:
- \`product.nextf-documentation\`
- \`product.nextf-blog-suite\`
- \`product.nextf-publisher-suite\`

Edition identifiers are immutable once used in production and use the \`edition.<product>.<edition>\` namespace. Launch fixtures define the accepted Free, Single, Studio and Lifetime editions and the initial USD launch price IDs.
`;
writeText("standards/48-software-contract-standard.md", standard);

const categories = [
  { id: "catalog", label: "Catalog", description: "Software products, editions, prices and bundle grants." },
  { id: "commerce", label: "Software Commerce", description: "Software customer, order-extension and subscription concepts that reference canonical Commerce financial truth." },
  { id: "licensing", label: "Licensing", description: "Licenses, activations and normalized site identity." },
  { id: "entitlements", label: "Entitlements", description: "Machine-readable capability grants and grandfathered access." },
  { id: "delivery", label: "Releases & Delivery", description: "Releases, artifacts, compatibility, update checks and short-lived download grants." },
  { id: "support", label: "Support", description: "Software support entitlement and customer support access." },
  { id: "audit", label: "Audit", description: "References to immutable operational audit evidence." }
];
writeJson("registry/software/categories.json", { registryVersion: version, categories });

const field = (key, primitive, description, extra = {}) => ({
  key,
  required: extra.required ?? true,
  nullable: extra.nullable ?? false,
  description,
  primitive,
  ...(extra.config ? { config: extra.config } : {}),
  ...(extra.schema ? { schema: extra.schema } : {}),
  ...(extra.itemsSchema ? { itemsSchema: extra.itemsSchema } : {}),
  ...(extra.itemsPrimitive ? { itemsPrimitive: extra.itemsPrimitive } : {})
});
const schema = (id, name, category, kind, description, fields, extra = {}) => ({
  $id: `software.${id}`,
  name,
  version,
  status: "stable",
  domain: "software",
  category,
  description,
  purpose: extra.purpose ?? description,
  softwareModel: {
    kind,
    customerOwned: extra.customerOwned ?? false,
    containsPersonalData: extra.containsPersonalData ?? false,
    publicEligible: extra.publicEligible ?? false,
    immutableSnapshot: extra.immutableSnapshot ?? false,
    dataSensitivity: extra.dataSensitivity ?? "internal"
  },
  fields,
  relationships: extra.relationships ?? [],
  validationRules: extra.validationRules ?? [
    { id: "authorityBoundary", description: "Mutation is accepted only by the declared trusted Software authority." },
    { id: "noSecrets", description: "Contract examples and public projections never contain service credentials, signing keys or raw download tokens." }
  ],
  cms: {
    label: name,
    icon: "fa-code",
    customerVisible: false,
    adminVisible: true,
    editorMode: "software-schema",
    defaultPlacement: "software",
    summaryFields: fields.slice(0, 4).map((item) => item.key),
    primaryActions: extra.actions ?? ["view"]
  },
  delivery: { publicAllowed: extra.publicEligible ?? false, notes: extra.deliveryNotes ?? "Software business truth is served through scoped Software APIs." },
  futureBindings: { modules: "phase-40", api: "phase-40", permissions: "phase-40", events: "phase-40", webhooks: "phase-40", privacy: "phase-30", security: "phase-29" },
  examples: { valid: [], invalid: [] },
  notes: extra.notes ?? []
});

const definitions = [
  schema("product", "Software Product", "catalog", "entity", "Stable downloadable-software product identity used for Documentation, Blog Suite and Publisher Suite.", [
    field("productId", "fields.text", "Immutable Software product ID."),
    field("slug", "fields.slug", "Public product slug."),
    field("name", "fields.text", "Customer-facing product name."),
    field("productType", "fields.select", "Product kind.", { config: { options: ["plugin", "bundle"] } }),
    field("publicDescription", "fields.textarea", "Public product description.", { required: false, nullable: true }),
    field("mediaRef", "fields.text", "Governed public media reference.", { required: false, nullable: true }),
    field("status", "fields.select", "Product lifecycle.", { config: { options: ["draft", "active", "archived"] } }),
    field("publicVisible", "fields.boolean", "Whether the product is visible in public catalog projections.")
  ], { publicEligible: true, actions: ["view", "create", "edit", "publish"], relationships: [{ type: "uses", target: "shared.mediaReference", description: "Product media should use governed Media references." }] }),

  schema("edition", "Software Edition", "catalog", "entity", "Commercial edition/plan identity and grant policy for a Software Product.", [
    field("editionId", "fields.text", "Immutable Software edition ID."),
    field("productId", "fields.text", "Owning Software Product ID."),
    field("code", "fields.select", "Canonical edition code.", { config: { options: ["free", "single", "studio", "lifetime"] } }),
    field("name", "fields.text", "Customer-facing edition label."),
    field("billingMode", "fields.select", "Billing mode.", { config: { options: ["free", "annual", "one-time"] } }),
    field("activationPolicy", "fields.select", "Activation-limit policy.", { config: { options: ["single", "bounded", "unlimited"] } }),
    field("activationLimit", "fields.integer", "Activation limit only when policy is bounded.", { required: false, nullable: true }),
    field("updateDuration", "fields.text", "Update entitlement duration policy."),
    field("supportDuration", "fields.text", "Support entitlement duration policy."),
    field("status", "fields.select", "Edition lifecycle.", { config: { options: ["draft", "scheduled", "active", "retired"] } })
  ], { publicEligible: true, relationships: [{ type: "references", target: "software.product", description: "Edition belongs to a Software Product." }], validationRules: [{ id: "activationPolicyExplicit", description: "Unlimited is explicit; activation limits never use magic sentinel numbers." }, { id: "editionIdImmutable", description: "Edition IDs do not change after production use." }] }),

  schema("price", "Software Price", "catalog", "effective-record", "Immutable effective Software price record by edition, currency, market and time window.", [
    field("priceId", "fields.text", "Immutable Software price ID."),
    field("productId", "fields.text", "Software Product ID."),
    field("editionId", "fields.text", "Software Edition ID."),
    field("currency", "fields.text", "ISO currency code."),
    field("amount", "fields.text", "Exact decimal amount represented according to Commerce money rules."),
    field("market", "fields.text", "Market identifier."),
    field("billingCadence", "fields.select", "Billing cadence.", { config: { options: ["none", "annual", "one-time"] } }),
    field("taxBehavior", "fields.select", "Tax display/handling behavior.", { config: { options: ["exclusive", "inclusive", "tax-ready"] } }),
    field("effectiveFrom", "fields.dateTime", "Price effective start."),
    field("effectiveUntil", "fields.dateTime", "Price effective end.", { required: false, nullable: true }),
    field("renewalPolicy", "fields.select", "Renewal-price policy.", { config: { options: ["not-applicable", "original-first-renewal", "current-effective-price", "explicit-snapshot"] } }),
    field("status", "fields.select", "Price lifecycle.", { config: { options: ["draft", "scheduled", "active", "retired"] } })
  ], { publicEligible: true, immutableSnapshot: true, relationships: [{ type: "uses", target: "commerce.moneySnapshot", description: "Money semantics reuse canonical Commerce money snapshots." }, { type: "references", target: "software.edition", description: "Price belongs to a Software Edition." }], validationRules: [{ id: "serverAuthoritative", description: "Browsers never supply a trusted final Software price." }, { id: "effectiveRecordsImmutable", description: "Published/effective prices are immutable historical records." }] }),

  schema("bundleComponent", "Software Bundle Component", "catalog", "grant-policy", "Product and edition grant created by purchasing a bundle.", [
    field("bundleComponentId", "fields.text", "Bundle component ID."),
    field("bundleProductId", "fields.text", "Bundle Software Product ID."),
    field("componentProductId", "fields.text", "Granted component product ID."),
    field("componentEditionId", "fields.text", "Granted component edition ID."),
    field("grantPolicy", "fields.select", "Grant behavior.", { config: { options: ["exact-edition", "equivalent-tier", "explicit-capabilities"] } }),
    field("capabilitySet", "fields.json", "Explicit capabilities when grant policy requires them.", { required: false, nullable: true })
  ], { relationships: [{ type: "references", target: "software.product", description: "Bundle and components resolve to canonical Software Products." }, { type: "references", target: "software.edition", description: "Bundle grants resolve to canonical editions." }] }),

  schema("customer", "Software Customer", "commerce", "entity", "Software account linked to platform identity and canonical Commerce customer references.", [
    field("customerId", "fields.text", "Software customer ID."),
    field("identityRef", "fields.text", "Platform identity reference."),
    field("commerceCustomerRef", "fields.text", "Canonical Commerce customer reference."),
    field("billingIdentityRef", "fields.text", "Billing identity reference.", { required: false, nullable: true }),
    field("supportProfileRef", "fields.text", "Support profile reference.", { required: false, nullable: true }),
    field("createdAt", "fields.dateTime", "Account creation timestamp.")
  ], { customerOwned: true, containsPersonalData: true, dataSensitivity: "personal", relationships: [{ type: "references", target: "commerce.commerceCustomer", description: "Generic buyer identity remains a Commerce concept." }] }),

  schema("orderExtension", "Software Order Extension", "commerce", "transaction-extension", "Software-specific immutable commercial snapshot and fulfillment linkage extending a canonical Commerce Order.", [
    field("softwareOrderId", "fields.text", "Software order ID."),
    field("commerceOrderId", "fields.text", "Canonical Commerce Order ID."),
    field("publicOrderNumber", "fields.text", "Immutable customer-visible order number."),
    field("customerId", "fields.text", "Software customer ID."),
    field("lineGrantSnapshots", "fields.json", "Immutable product/edition/price/grant snapshots."),
    field("checkoutSessionRef", "fields.text", "Checkout session reference.", { required: false, nullable: true }),
    field("captureRefs", "fields.json", "Verified Checkout capture references.", { required: false, nullable: true }),
    field("fulfillmentState", "fields.select", "Software fulfillment state.", { config: { options: ["pending", "fulfilled", "review", "reversed"] } }),
    field("fulfilledAt", "fields.dateTime", "Fulfillment timestamp.", { required: false, nullable: true })
  ], { customerOwned: true, containsPersonalData: true, dataSensitivity: "sensitive", immutableSnapshot: true, relationships: [{ type: "references", target: "commerce.order", description: "Software order extension is linked to canonical Commerce Order financial truth." }, { type: "references", target: "commerce.paymentCapture", description: "Paid state is derived only from verified payment capture evidence." }], validationRules: [{ id: "redirectNotEvidence", description: "Browser return/success redirects cannot mark this order paid or fulfilled." }, { id: "fulfillExactlyOnce", description: "Equivalent verified capture events grant Software access exactly once." }, { id: "historicalSnapshotImmutable", description: "Purchased product, edition and price/grant snapshots remain immutable." }] }),

  schema("subscription", "Software Subscription", "commerce", "entity", "Recurring-plan lifecycle owned by Software while each payment attempt remains Checkout/Commerce payment truth.", [
    field("subscriptionId", "fields.text", "Software subscription ID."),
    field("customerId", "fields.text", "Software customer ID."),
    field("productId", "fields.text", "Software Product ID."),
    field("editionId", "fields.text", "Software Edition ID."),
    field("sourceOrderId", "fields.text", "Originating Software order ID."),
    field("status", "fields.select", "Subscription lifecycle.", { config: { options: ["pending", "active", "past_due", "cancelled", "expired"] } }),
    field("renewalMode", "fields.select", "Renewal orchestration mode.", { config: { options: ["customer-initiated", "automatic-reserved"] } }),
    field("currentPeriodStart", "fields.dateTime", "Current period start."),
    field("currentPeriodEnd", "fields.dateTime", "Current period end."),
    field("graceUntil", "fields.dateTime", "Grace-period end.", { required: false, nullable: true }),
    field("cancelAtPeriodEnd", "fields.boolean", "Whether cancellation is scheduled at period end."),
    field("renewalPriceSnapshot", "fields.json", "Renewal amount snapshot/policy reference.")
  ], { customerOwned: true, dataSensitivity: "sensitive", relationships: [{ type: "references", target: "software.orderExtension", description: "Subscription originates from a fulfilled Software order." }, { type: "uses", target: "commerce.moneySnapshot", description: "Renewal prices use canonical Commerce money semantics." }], validationRules: [{ id: "manualLaunchRenewal", description: "V1.3.0 launch subscriptions use customer-initiated renewal; automatic-reserved is not an active launch capability." }, { id: "paymentAttemptExternal", description: "Software Subscription never stores provider credentials or becomes payment-attempt authority." }] }),

  schema("license", "Software License", "licensing", "entity", "Human-manageable Software license identity and lifecycle without exposing raw license keys in ordinary projections.", [
    field("licenseId", "fields.text", "Software license ID."),
    field("customerId", "fields.text", "Owning Software customer ID."),
    field("productId", "fields.text", "Software Product ID."),
    field("editionId", "fields.text", "Software Edition ID."),
    field("status", "fields.select", "License lifecycle.", { config: { options: ["pending", "active", "grace", "expired", "suspended", "revoked"] } }),
    field("keyLookupRef", "fields.text", "Protected lookup/hash/encrypted key reference."),
    field("keyDisplayMask", "fields.text", "Masked license display value."),
    field("activationPolicy", "fields.select", "Activation policy.", { config: { options: ["single", "bounded", "unlimited"] } }),
    field("activationLimit", "fields.integer", "Activation limit when bounded.", { required: false, nullable: true }),
    field("issuedAt", "fields.dateTime", "Issue timestamp."),
    field("expiresAt", "fields.dateTime", "License/update/support expiry where applicable.", { required: false, nullable: true })
  ], { customerOwned: true, dataSensitivity: "sensitive", relationships: [{ type: "references", target: "software.entitlement", description: "Capabilities are granted through entitlements rather than plan-name checks." }], validationRules: [{ id: "rawKeyHidden", description: "Ordinary CMS, analytics, logs and list projections never expose a raw license key." }, { id: "expiryNoRemoteDisable", description: "License expiry can affect updates/support but must not remotely disable installed plugin functionality." }] }),

  schema("activation", "Software Activation", "licensing", "entity", "Normalized installation/site activation associated with a Software License.", [
    field("activationId", "fields.text", "Activation ID."),
    field("licenseId", "fields.text", "Software License ID."),
    field("siteUrlNormalized", "fields.text", "Normalized site URL."),
    field("environment", "fields.select", "Installation environment.", { config: { options: ["production", "staging", "development", "local"] } }),
    field("installationFingerprint", "fields.text", "Privacy-minimized installation fingerprint."),
    field("pluginVersion", "fields.text", "Observed plugin version."),
    field("status", "fields.select", "Activation lifecycle.", { config: { options: ["active", "deactivated", "blocked"] } }),
    field("activatedAt", "fields.dateTime", "Activation timestamp."),
    field("lastSeenAt", "fields.dateTime", "Last validation/update contact time.", { required: false, nullable: true })
  ], { customerOwned: true, containsPersonalData: true, dataSensitivity: "sensitive", relationships: [{ type: "references", target: "software.license", description: "Activation consumes capacity from one Software License." }], validationRules: [{ id: "noSiteContent", description: "Activation never contains page/post/document content or visitor analytics." }] }),

  schema("entitlement", "Software Entitlement", "entitlements", "capability-grant", "Machine-readable capability grant with source, scope and validity window.", [
    field("entitlementId", "fields.text", "Entitlement ID."),
    field("customerId", "fields.text", "Owning customer ID."),
    field("sourceType", "fields.select", "Grant source.", { config: { options: ["order", "subscription", "license", "grandfather-grant", "manual-exception"] } }),
    field("sourceRef", "fields.text", "Source record reference."),
    field("productId", "fields.text", "Software Product ID."),
    field("capability", "fields.text", "Machine-readable capability identifier."),
    field("scope", "fields.text", "Capability scope."),
    field("status", "fields.select", "Entitlement lifecycle.", { config: { options: ["scheduled", "active", "expired", "revoked"] } }),
    field("startsAt", "fields.dateTime", "Grant start."),
    field("endsAt", "fields.dateTime", "Grant end.", { required: false, nullable: true })
  ], { customerOwned: true, dataSensitivity: "sensitive", validationRules: [{ id: "capabilitiesNotPlanNames", description: "Authorization checks evaluate capability identifiers, not presentation plan names." }, { id: "sourceAuditable", description: "Every entitlement has an auditable source and immutable grant reason." }] }),

  schema("grandfatherGrant", "Software Grandfather Grant", "entitlements", "immutable-grant", "Immutable capability protection for existing pre-commercial installations/users.", [
    field("grantId", "fields.text", "Grandfather grant ID."),
    field("customerId", "fields.text", "Software customer ID."),
    field("productId", "fields.text", "Software Product ID."),
    field("sourceVersion", "fields.text", "Last complete ungated/source version evidence."),
    field("installationEvidenceRef", "fields.text", "Reviewed installation/source evidence reference."),
    field("capabilitySet", "fields.json", "Capabilities protected by the grant."),
    field("reason", "fields.textarea", "Immutable grant reason."),
    field("createdAt", "fields.dateTime", "Grant creation timestamp.")
  ], { customerOwned: true, dataSensitivity: "sensitive", immutableSnapshot: true, validationRules: [{ id: "notPaidOrder", description: "Grandfathering never manufactures payment/capture records." }, { id: "cannotSilentlyWiden", description: "Grandfather capability sets cannot be silently expanded without a new audited decision." }] }),

  schema("release", "Software Release", "delivery", "entity", "Versioned plugin release metadata, channel, requirements, changelog, artifact linkage and rollback relationship.", [
    field("releaseId", "fields.text", "Release ID."),
    field("productId", "fields.text", "Software Product ID."),
    field("version", "fields.text", "Plugin/package semantic version."),
    field("channel", "fields.select", "Release channel.", { config: { options: ["stable", "beta", "rc", "development"] } }),
    field("status", "fields.select", "Release lifecycle.", { config: { options: ["draft", "published", "deprecated", "withdrawn"] } }),
    field("artifactRef", "fields.text", "Software Release Artifact ID."),
    field("compatibilityRefs", "fields.json", "Structured compatibility requirement IDs."),
    field("changelog", "fields.textarea", "Release changelog."),
    field("rollbackReleaseId", "fields.text", "Eligible rollback release ID.", { required: false, nullable: true }),
    field("publishedAt", "fields.dateTime", "Publication timestamp.", { required: false, nullable: true })
  ], { publicEligible: true, immutableSnapshot: true, relationships: [{ type: "references", target: "software.releaseArtifact", description: "Package evidence is modeled separately from public release metadata." }, { type: "references", target: "software.compatibilityRequirement", description: "Compatibility is structured by runtime/version range." }] }),

  schema("releaseArtifact", "Software Release Artifact", "delivery", "secure-record", "Private release-package metadata and server-calculated integrity evidence.", [
    field("artifactId", "fields.text", "Release artifact ID."),
    field("releaseId", "fields.text", "Software Release ID."),
    field("packageRef", "fields.text", "Opaque private object-storage reference."),
    field("sizeBytes", "fields.integer", "Server-calculated package size."),
    field("sha256", "fields.text", "Server-calculated SHA-256 checksum."),
    field("signatureRef", "fields.text", "Signing-key/signature evidence reference."),
    field("scanStatus", "fields.select", "Package scan status.", { config: { options: ["pending", "passed", "failed", "review"] } }),
    field("calculatedAt", "fields.dateTime", "Integrity calculation timestamp.")
  ], { dataSensitivity: "sensitive", validationRules: [{ id: "privatePackageRef", description: "Artifacts contain opaque private storage references, never public bucket credentials." }, { id: "checksumServerCalculated", description: "CMS/browser supplied checksums are never accepted as authoritative." }] }),

  schema("compatibilityRequirement", "Software Compatibility Requirement", "delivery", "requirement", "Structured runtime/version compatibility for a Software Release.", [
    field("requirementId", "fields.text", "Compatibility requirement ID."),
    field("releaseId", "fields.text", "Software Release ID."),
    field("runtime", "fields.select", "Runtime/component kind.", { config: { options: ["wordpress", "php", "elementor", "plugin", "browser"] } }),
    field("component", "fields.text", "Component identifier."),
    field("minimumVersion", "fields.text", "Minimum supported version.", { required: false, nullable: true }),
    field("maximumVersion", "fields.text", "Maximum supported version.", { required: false, nullable: true }),
    field("constraint", "fields.text", "Canonical version-range/constraint expression.")
  ]),

  schema("downloadGrant", "Software Download Grant", "delivery", "secure-grant", "Short-lived owner/product/release-scoped authorization for private Software package delivery.", [
    field("grantId", "fields.text", "Download grant ID."),
    field("customerId", "fields.text", "Authorized Software customer ID."),
    field("licenseId", "fields.text", "Authorizing Software License ID.", { required: false, nullable: true }),
    field("productId", "fields.text", "Authorized Software Product ID."),
    field("releaseId", "fields.text", "Authorized Software Release ID."),
    field("purpose", "fields.select", "Grant purpose.", { config: { options: ["manual-download", "plugin-update"] } }),
    field("tokenRef", "fields.text", "Protected raw-token reference, not the token value."),
    field("status", "fields.select", "Grant lifecycle.", { config: { options: ["issued", "consumed", "expired", "revoked"] } }),
    field("expiresAt", "fields.dateTime", "Grant expiry."),
    field("consumedAt", "fields.dateTime", "Consumption timestamp.", { required: false, nullable: true })
  ], { customerOwned: true, dataSensitivity: "secret", validationRules: [{ id: "singlePurpose", description: "Download grants cannot cross customers, products, releases or purposes." }, { id: "shortLived", description: "Download grants are short-lived and revocable." }] }),

  schema("updateRequest", "Software Update Request", "delivery", "request", "Privacy-minimized license-scoped plugin update request.", [
    field("productId", "fields.text", "Software Product ID."),
    field("licenseCredentialRef", "fields.text", "License-scoped credential/reference."),
    field("siteUrlNormalized", "fields.text", "Normalized site URL."),
    field("environment", "fields.select", "Installation environment.", { config: { options: ["production", "staging", "development", "local"] } }),
    field("pluginVersion", "fields.text", "Installed plugin version."),
    field("installationFingerprint", "fields.text", "Privacy-minimized installation fingerprint."),
    field("requestedChannel", "fields.select", "Requested update channel.", { config: { options: ["stable", "beta", "rc", "development"] } })
  ], { containsPersonalData: true, dataSensitivity: "sensitive", validationRules: [{ id: "noContent", description: "Request does not contain WordPress page/post/document content, visitor queries or unrelated analytics." }, { id: "rateLimited", description: "Validation/update endpoints are abuse-controlled and rate-limited." }] }),

  schema("updateResponse", "Software Update Response", "delivery", "response", "License/entitlement-aware update metadata response without exposing private package credentials.", [
    field("eligible", "fields.boolean", "Whether update entitlement is currently valid."),
    field("activationStatus", "fields.text", "Normalized activation/license result."),
    field("capabilities", "fields.json", "Effective capability entitlements."),
    field("offlineValidUntil", "fields.dateTime", "Signed offline-cache validity."),
    field("releaseId", "fields.text", "Eligible Software Release ID.", { required: false, nullable: true }),
    field("version", "fields.text", "Eligible version.", { required: false, nullable: true }),
    field("channel", "fields.text", "Eligible channel.", { required: false, nullable: true }),
    field("downloadGrantRef", "fields.text", "Short-lived download-grant reference.", { required: false, nullable: true }),
    field("sha256", "fields.text", "Release artifact checksum.", { required: false, nullable: true }),
    field("signatureRef", "fields.text", "Release signature evidence reference.", { required: false, nullable: true })
  ], { dataSensitivity: "sensitive", relationships: [{ type: "references", target: "software.entitlement", description: "Update eligibility follows capability entitlement." }, { type: "references", target: "software.downloadGrant", description: "Eligible package delivery uses a short-lived grant." }] }),

  schema("supportEntitlement", "Software Support Entitlement", "support", "capability-grant", "Software support level and validity derived from purchase/grant policy.", [
    field("supportEntitlementId", "fields.text", "Support entitlement ID."),
    field("customerId", "fields.text", "Software customer ID."),
    field("productId", "fields.text", "Software Product ID."),
    field("sourceRef", "fields.text", "Order/subscription/license/grandfather source."),
    field("level", "fields.select", "Support level.", { config: { options: ["community", "priority"] } }),
    field("status", "fields.select", "Support entitlement lifecycle.", { config: { options: ["scheduled", "active", "expired", "revoked"] } }),
    field("startsAt", "fields.dateTime", "Support start."),
    field("endsAt", "fields.dateTime", "Support end.", { required: false, nullable: true })
  ], { customerOwned: true, dataSensitivity: "sensitive" }),

  schema("auditReference", "Software Audit Reference", "audit", "audit-reference", "Reference from Software domain mutations to append-oriented immutable audit evidence.", [
    field("auditRef", "fields.text", "Audit evidence reference."),
    field("subjectType", "fields.text", "Software subject type."),
    field("subjectId", "fields.text", "Software subject ID."),
    field("action", "fields.text", "Audited action."),
    field("actorRef", "fields.text", "Staff/service/customer actor reference."),
    field("correlationId", "fields.text", "Correlation/request ID."),
    field("evidenceRef", "fields.text", "Supporting evidence reference.", { required: false, nullable: true }),
    field("occurredAt", "fields.dateTime", "Audit occurrence timestamp.")
  ], { dataSensitivity: "sensitive", immutableSnapshot: true })
];

for (const def of definitions) writeJson(`registry/software/definitions/${kebab(def.$id.slice(9))}.json`, def);

const customerCapabilities = [
  ["software.account.view-own", "View own Software account"],
  ["software.orders.view-own", "View own Software orders"],
  ["software.subscriptions.view-own", "View own Software subscriptions"],
  ["software.subscriptions.cancel-own", "Cancel own Software subscription according to policy"],
  ["software.licenses.view-own", "View own masked Software licenses"],
  ["software.activations.manage-own", "Manage own Software license activations"],
  ["software.downloads.create-own", "Create own eligible Software download grants"],
  ["software.support.create-own", "Create support requests under own Software support entitlement"]
].map(([capabilityId, description]) => ({ capabilityId, description, scope: "authenticated-owner", crossCustomerAccess: false }));

const softwareIndex = {
  registryVersion: version,
  schemaVersion: "1.0.0",
  title: "NEXT F Software Contract Registry",
  description: "Canonical Software catalog, commerce extension, licensing, entitlement, release, update, download and support contracts.",
  standard: "standards/48-software-contract-standard.md",
  definitionCount: definitions.length,
  categoryCount: categories.length,
  sourceDirectory: "registry/software/definitions",
  categories,
  customerCapabilities,
  schemas: definitions
};
writeJson("registry/software/index.json", softwareIndex);
const softwareRaw = fs.readFileSync(path.join(root, "registry/software/index.json"));
const softwareHash = crypto.createHash("sha256").update(softwareRaw).digest("hex");
writeText("js/generated-software-schemas.js", `// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source: registry/software/index.json\n// SHA-256: ${softwareHash}\nexport const GENERATED_SOFTWARE_SOURCE_SHA256 = ${JSON.stringify(softwareHash)};\nexport const GENERATED_SOFTWARE_SCHEMAS = ${softwareRaw.toString("utf8").trim()};\n`);

const launchCatalog = {
  contractVersion: version,
  currency: "USD",
  renewalMode: "customer-initiated",
  products: [
    { productId: "product.nextf-documentation", name: "NEXT F Documentation", productType: "plugin" },
    { productId: "product.nextf-blog-suite", name: "NEXT F Blog Suite", productType: "plugin" },
    { productId: "product.nextf-publisher-suite", name: "NEXT F Publisher Suite", productType: "bundle" }
  ],
  editions: [
    { editionId: "edition.nextf-documentation.free", productId: "product.nextf-documentation", code: "free", billingMode: "free", activationPolicy: "single" },
    { editionId: "edition.nextf-documentation.single", productId: "product.nextf-documentation", code: "single", billingMode: "annual", activationPolicy: "single" },
    { editionId: "edition.nextf-documentation.studio", productId: "product.nextf-documentation", code: "studio", billingMode: "annual", activationPolicy: "unlimited" },
    { editionId: "edition.nextf-documentation.lifetime", productId: "product.nextf-documentation", code: "lifetime", billingMode: "one-time", activationPolicy: "unlimited" },
    { editionId: "edition.nextf-blog-suite.free", productId: "product.nextf-blog-suite", code: "free", billingMode: "free", activationPolicy: "single" },
    { editionId: "edition.nextf-blog-suite.single", productId: "product.nextf-blog-suite", code: "single", billingMode: "annual", activationPolicy: "single" },
    { editionId: "edition.nextf-blog-suite.studio", productId: "product.nextf-blog-suite", code: "studio", billingMode: "annual", activationPolicy: "unlimited" },
    { editionId: "edition.nextf-blog-suite.lifetime", productId: "product.nextf-blog-suite", code: "lifetime", billingMode: "one-time", activationPolicy: "unlimited" },
    { editionId: "edition.nextf-publisher-suite.single", productId: "product.nextf-publisher-suite", code: "single", billingMode: "annual", activationPolicy: "single" },
    { editionId: "edition.nextf-publisher-suite.studio", productId: "product.nextf-publisher-suite", code: "studio", billingMode: "annual", activationPolicy: "unlimited" },
    { editionId: "edition.nextf-publisher-suite.lifetime", productId: "product.nextf-publisher-suite", code: "lifetime", billingMode: "one-time", activationPolicy: "unlimited" }
  ],
  launchPrices: [
    { priceId: "price.nextf-documentation.single.usd-annual.launch", editionId: "edition.nextf-documentation.single", amount: "39.00", cadence: "annual" },
    { priceId: "price.nextf-documentation.studio.usd-annual.launch", editionId: "edition.nextf-documentation.studio", amount: "89.00", cadence: "annual" },
    { priceId: "price.nextf-documentation.lifetime.usd-once.launch", editionId: "edition.nextf-documentation.lifetime", amount: "149.00", cadence: "one-time" },
    { priceId: "price.nextf-blog-suite.single.usd-annual.launch", editionId: "edition.nextf-blog-suite.single", amount: "39.00", cadence: "annual" },
    { priceId: "price.nextf-blog-suite.studio.usd-annual.launch", editionId: "edition.nextf-blog-suite.studio", amount: "89.00", cadence: "annual" },
    { priceId: "price.nextf-blog-suite.lifetime.usd-once.launch", editionId: "edition.nextf-blog-suite.lifetime", amount: "149.00", cadence: "one-time" },
    { priceId: "price.nextf-publisher-suite.single.usd-annual.launch", editionId: "edition.nextf-publisher-suite.single", amount: "69.00", cadence: "annual" },
    { priceId: "price.nextf-publisher-suite.studio.usd-annual.launch", editionId: "edition.nextf-publisher-suite.studio", amount: "129.00", cadence: "annual" },
    { priceId: "price.nextf-publisher-suite.lifetime.usd-once.launch", editionId: "edition.nextf-publisher-suite.lifetime", amount: "229.00", cadence: "one-time" }
  ],
  bundleComponents: [
    { bundleProductId: "product.nextf-publisher-suite", componentProductId: "product.nextf-documentation", tierMapping: "equivalent-tier" },
    { bundleProductId: "product.nextf-publisher-suite", componentProductId: "product.nextf-blog-suite", tierMapping: "equivalent-tier" }
  ]
};
writeJson("registry/software/fixtures/valid/launch-catalog.json", launchCatalog);
writeJson("registry/software/fixtures/invalid/browser-trusted-price.json", { invalidReason: "browser-trusted-price", productId: "product.nextf-documentation", editionId: "edition.nextf-documentation.single", trustedAmount: "1.00", paid: true });
writeJson("registry/software/fixtures/invalid/raw-license-public-projection.json", { invalidReason: "raw-license-public-projection", licenseId: "lic_example", rawLicenseKey: "NOT-ALLOWED-IN-PUBLIC-PROJECTION" });
writeJson("registry/software/fixtures/invalid/automatic-renewal-launch.json", { invalidReason: "automatic-renewal-not-accepted-for-launch", renewalMode: "automatic", providerToken: "NOT-ALLOWED" });

const permissions = read("registry/permissions/index.json");
const staffPermissionRows = [
  ["software.dashboard.view", "View Software Dashboard", "dashboard", "view", "standard", "Read aggregate Software operational health."],
  ["software.catalog.view", "View Software Catalog", "catalog", "view", "standard", "Read Software products, editions, bundles and prices."],
  ["software.catalog.manage", "Manage Software Catalog", "catalog", "manage", "elevated", "Draft Software catalog and pricing changes."],
  ["software.catalog.publish", "Publish Software Catalog", "catalog", "publish", "privileged", "Publish effective Software commercial changes."],
  ["software.releases.view", "View Software Releases", "releases", "view", "standard", "Read Software release metadata and checks."],
  ["software.releases.manage", "Manage Software Releases", "releases", "manage", "elevated", "Upload draft packages and edit release metadata."],
  ["software.releases.publish", "Publish Software Releases", "releases", "publish", "privileged", "Promote, deprecate or withdraw Software releases."],
  ["software.orders.view", "View Software Orders", "orders", "view", "sensitive", "Read Software order snapshots and payment references."],
  ["software.orders.manage", "Manage Software Orders", "orders", "manage", "sensitive", "Apply approved non-financial Software order corrections."],
  ["software.refunds.request", "Request Software Refunds", "refunds", "request", "sensitive", "Request a Software refund with reason and evidence."],
  ["software.refunds.approve", "Approve Software Refunds", "refunds", "approve", "privileged", "Approve a Software refund under policy."],
  ["software.customers.view", "View Software Customers", "customers", "view", "sensitive", "Read Software customer records."],
  ["software.licenses.view", "View Software Licenses", "licenses", "view", "sensitive", "Read masked Software licenses and activations."],
  ["software.licenses.manage", "Manage Software Licenses", "licenses", "manage", "privileged", "Suspend, restore or adjust activation limits with audit."],
  ["software.entitlements.manage", "Manage Software Entitlements", "entitlements", "manage", "privileged", "Create exceptional or grandfather Software grants with approval."],
  ["software.support.manage", "Manage Software Support", "support", "manage", "sensitive", "Operate Software support cases."],
  ["software.settings.manage", "Manage Software Settings", "settings", "manage", "privileged", "Change Software licensing and delivery policy."],
  ["software.audit.view", "View Software Audit", "audit", "view", "sensitive", "Read immutable Software audit evidence."]
];
const staffPermissions = staffPermissionRows.map(([permissionId, name, resource, action, riskLevel, description]) => ({
  $id: permissionId,
  name,
  permissionId,
  domain: "software",
  resource,
  action,
  scopeKind: "platform",
  riskLevel,
  customerEligible: false,
  adminEligible: true,
  grantable: true,
  requiresRecentAuthentication: ["privileged", "sensitive"].includes(riskLevel),
  requiresExplicitConfirmation: ["software.catalog.publish", "software.releases.publish", "software.refunds.approve", "software.licenses.manage", "software.entitlements.manage"].includes(permissionId),
  surfaces: ["nextf-admin", "api"],
  description,
  constraints: ["deny-by-default", "exact-permission-match", "staff-binding-required", "audit-required", "service-secrets-hidden"],
  notes: [],
  version,
  status: "stable"
}));
permissions.registryVersion = version;
permissions.permissions = permissions.permissions.filter((p) => !p.permissionId.startsWith("software.")).concat(staffPermissions).sort((a, b) => a.permissionId.localeCompare(b.permissionId));
permissions.permissionCount = permissions.permissions.length;
writeJson("registry/permissions/index.json", permissions);
for (const perm of staffPermissions) writeJson(`registry/permissions/permissions/${perm.permissionId}.json`, perm);
const permRaw = fs.readFileSync(path.join(root, "registry/permissions/index.json"));
const permHash = crypto.createHash("sha256").update(permRaw).digest("hex");
writeText("js/generated-permissions.js", `// Generated from registry/permissions/index.json\n// SHA-256: ${permHash}\nexport const GENERATED_PERMISSION_SOURCE_SHA256 = ${JSON.stringify(permHash)};\nexport const GENERATED_PERMISSIONS = ${permRaw.toString("utf8").trim()};\n`);

const eventsIndex = read("registry/events/index.json");
const eventCategories = read("registry/events/categories.json");
if (!eventCategories.categories.some((c) => c.key === "software")) eventCategories.categories.push({ key: "software", label: "Software", description: "Software orders, subscriptions, licenses, entitlements, releases, downloads and update facts." });
eventCategories.registryVersion = version;
writeJson("registry/events/categories.json", eventCategories);
const producers = read("registry/events/producers.json");
if (!producers.producers.some((p) => p.key === "software-domain")) producers.producers.push({ key: "software-domain", label: "Software Domain", description: "Authoritative NEXT F Software business service." });
producers.registryVersion = version;
writeJson("registry/events/producers.json", producers);
const eventBase = (eventKey, name, subjectContracts, payloadFields, opts = {}) => ({
  eventKey,
  name,
  category: "software",
  producerKey: "software-domain",
  subjectContracts,
  trigger: opts.trigger ?? name,
  dataPolicy: { sensitivity: opts.sensitivity ?? "sensitive", containsPersonalData: opts.containsPersonalData ?? true, containsFinancialData: opts.containsFinancialData ?? false, containsSecrets: false, redactionRequired: true },
  webhookEligible: opts.webhookEligible ?? true,
  consumers: ["audit", "nextf-admin", "notification", "integration-dispatch", "webhook-bridge"],
  payloadFields,
  $id: eventKey,
  version,
  eventVersion: "1.0.0",
  status: "stable",
  domain: "events",
  description: opts.trigger ?? name,
  purpose: `Provides a canonical Software domain fact for ${name.toLowerCase()}.`,
  semantics: { factOnly: true, authoritativeAfterCommit: true, immutableOccurrence: true, transportIndependent: true, marketingTrackingEquivalent: null },
  productionPolicy: { durability: "durable", commitBoundary: "transactional-outbox", failureBehavior: "fail-domain-commit-or-durable-recovery" },
  idempotency: { dedupeKey: "eventId", replayedIdempotentCommand: "no-new-semantic-event", consumerIdempotencyRequired: true },
  orderingPolicy: { scope: "software-object", strict: false },
  retention: { class: "transaction-history" },
  relationships: subjectContracts.map((target) => ({ type: "references", target, description: `Event subject may be ${target}.` })),
  validationRules: [
    { id: "emitAfterAuthoritativeCommit", description: "Event is produced only after the authoritative Software transaction commits." },
    { id: "immutableOccurrence", description: "Recorded event occurrences are immutable." },
    { id: "eventIdUnique", description: "Every semantic occurrence has one globally unique eventId." },
    { id: "idempotentReplay", description: "Retrying the same idempotent command does not emit a duplicate semantic event." },
    { id: "payloadMinimumNecessary", description: "Payload contains only minimum data required by declared consumers." },
    { id: "noSecrets", description: "Payload never includes raw license keys, raw download tokens, signing keys or provider secrets." }
  ],
  futureBindings: { webhooks: "phase-40", permissions: "phase-40", siteManifest: "phase-40", modules: "phase-40", api: "phase-40", privacy: "phase-30" },
  examples: { valid: [{ eventKey, eventVersion: "1.0.0", eventId: `evt_${eventKey.replace(".", "-")}`, occurredAt: "2026-09-23T00:00:00Z" }], invalid: [] }
});
const pf = (key, description, type = "id", required = true) => ({ key, required, description, type });
const softwareEvents = [
  eventBase("software.order-created", "Software Order Created", ["software.orderExtension"], [pf("softwareOrderId", "Software order ID."), pf("customerId", "Software customer ID.")], { trigger: "A Software order is durably created from server-resolved catalog and price data.", containsFinancialData: true }),
  eventBase("software.order-paid", "Software Order Paid", ["software.orderExtension"], [pf("softwareOrderId", "Software order ID."), pf("captureRef", "Verified Checkout capture reference.")], { trigger: "Verified Checkout payment evidence is reconciled and the Software order fulfillment transaction succeeds.", containsFinancialData: true }),
  eventBase("software.order-refunded", "Software Order Refunded", ["software.orderExtension"], [pf("softwareOrderId", "Software order ID."), pf("refundRef", "Verified refund reference.")], { containsFinancialData: true }),
  eventBase("software.subscription-activated", "Software Subscription Activated", ["software.subscription"], [pf("subscriptionId", "Software subscription ID.")]),
  eventBase("software.subscription-past-due", "Software Subscription Past Due", ["software.subscription"], [pf("subscriptionId", "Software subscription ID.")]),
  eventBase("software.subscription-renewed", "Software Subscription Renewed", ["software.subscription"], [pf("subscriptionId", "Software subscription ID."), pf("renewalOrderId", "Renewal Software order ID.")], { containsFinancialData: true }),
  eventBase("software.subscription-cancelled", "Software Subscription Cancelled", ["software.subscription"], [pf("subscriptionId", "Software subscription ID.")]),
  eventBase("software.license-issued", "Software License Issued", ["software.license"], [pf("licenseId", "Software license ID."), pf("productId", "Software product ID.")]),
  eventBase("software.license-suspended", "Software License Suspended", ["software.license"], [pf("licenseId", "Software license ID.")]),
  eventBase("software.license-restored", "Software License Restored", ["software.license"], [pf("licenseId", "Software license ID.")]),
  eventBase("software.license-expired", "Software License Expired", ["software.license"], [pf("licenseId", "Software license ID.")]),
  eventBase("software.activation-created", "Software Activation Created", ["software.activation"], [pf("activationId", "Software activation ID."), pf("licenseId", "Software license ID.")]),
  eventBase("software.activation-deactivated", "Software Activation Deactivated", ["software.activation"], [pf("activationId", "Software activation ID.")]),
  eventBase("software.entitlement-granted", "Software Entitlement Granted", ["software.entitlement"], [pf("entitlementId", "Software entitlement ID."), pf("capability", "Granted capability.", "string")]),
  eventBase("software.entitlement-revoked", "Software Entitlement Revoked", ["software.entitlement"], [pf("entitlementId", "Software entitlement ID.")]),
  eventBase("software.release-published", "Software Release Published", ["software.release"], [pf("releaseId", "Software release ID."), pf("productId", "Software product ID.")], { containsPersonalData: false }),
  eventBase("software.release-withdrawn", "Software Release Withdrawn", ["software.release"], [pf("releaseId", "Software release ID.")], { containsPersonalData: false }),
  eventBase("software.download-grant-issued", "Software Download Grant Issued", ["software.downloadGrant"], [pf("grantId", "Download grant ID."), pf("productId", "Software product ID.")]),
  eventBase("software.update-served", "Software Update Served", ["software.updateResponse"], [pf("productId", "Software product ID."), pf("releaseId", "Served release ID.", "id", false)], { containsPersonalData: false, webhookEligible: false })
];
for (const event of softwareEvents) writeJson(`registry/events/events/${event.eventKey.replace(".", "--")}.json`, event);
eventsIndex.registryVersion = version;
eventsIndex.events = eventsIndex.events.filter((e) => !e.eventKey.startsWith("software.")).concat(softwareEvents).sort((a, b) => a.eventKey.localeCompare(b.eventKey));
eventsIndex.eventCount = eventsIndex.events.length;
writeJson("registry/events/index.json", eventsIndex);

const modules = read("registry/modules/index.json");
const capabilityIds = ["software.catalog", "software.commerce", "software.subscriptions", "software.licensing", "software.activations", "software.entitlements", "software.releases", "software.downloads", "software.updates", "software.support", "software.customer-workspace"];
const contractBindings = definitions.map((d) => d.$id);
const permissionBindings = staffPermissions.map((p) => p.permissionId);
const eventBindings = softwareEvents.map((e) => e.eventKey);
const softwareModule = {
  $id: "modules.software",
  moduleId: "software",
  name: "Software",
  version,
  status: "stable",
  category: "software",
  icon: "fa-code",
  order: 460,
  description: "NEXT F Software catalog, commerce extension, subscriptions, licensing, entitlements, releases, downloads, updates, support and customer workspace contracts.",
  selection: { mandatory: false, defaultEnabled: false, explicitManifestSelection: true, customerCanEnable: false, nextfAdminCanEnable: true },
  dependencies: [
    { moduleId: "core", kind: "required", reason: "Software records require identity, audit and versioned scope." },
    { moduleId: "commerce", kind: "required", reason: "Software reuses canonical Commerce order, money, payment capture and refund primitives." },
    { moduleId: "integrations", kind: "required", reason: "Checkout/server bindings and notification/service boundaries use canonical integration practices." },
    { moduleId: "media", kind: "recommended", reason: "Public product images should use governed Media references." }
  ],
  conflicts: [],
  capabilityIds,
  defaultCapabilityIds: capabilityIds,
  contractBindings,
  permissionBindings,
  eventBindings,
  cms: { customerVisible: false, group: "Software", navigation: [] },
  admin: { visible: true, group: "Software", navigation: [{ label: "Software", path: "/software", icon: "fa-code", order: 120 }] },
  manifest: { moduleId: "software", capabilitySelection: "module-scoped", dependencyValidation: "strict" },
  notes: ["Customer Workspace is owner-scoped self-service and is not modeled as Customer CMS authoring.", "Automatic renewal is reserved and not an active V1.3.0 launch capability."]
};
const capBindings = {
  "software.catalog": ["software.product", "software.edition", "software.price", "software.bundleComponent"],
  "software.commerce": ["software.customer", "software.orderExtension"],
  "software.subscriptions": ["software.subscription"],
  "software.licensing": ["software.license"],
  "software.activations": ["software.activation"],
  "software.entitlements": ["software.entitlement", "software.grandfatherGrant"],
  "software.releases": ["software.release", "software.releaseArtifact", "software.compatibilityRequirement"],
  "software.downloads": ["software.downloadGrant"],
  "software.updates": ["software.updateRequest", "software.updateResponse"],
  "software.support": ["software.supportEntitlement"],
  "software.customer-workspace": ["software.customer", "software.orderExtension", "software.subscription", "software.license", "software.activation", "software.downloadGrant", "software.supportEntitlement"]
};
const softwareCaps = capabilityIds.map((capabilityId) => ({
  $id: `modules.capability.${capabilityId}`,
  capabilityId,
  name: title(capabilityId.slice(9)),
  version,
  status: "stable",
  moduleId: "software",
  mode: "default-on",
  selectable: true,
  defaultEnabled: true,
  description: `${title(capabilityId.slice(9))} capability within the Software module.`,
  contractBindings: capBindings[capabilityId],
  permissionBindings: capabilityId === "software.catalog" ? ["software.catalog.view", "software.catalog.manage", "software.catalog.publish"] : capabilityId === "software.releases" ? ["software.releases.view", "software.releases.manage", "software.releases.publish"] : [],
  eventBindings: capabilityId === "software.updates" ? ["software.update-served"] : [],
  requiresCapabilities: capabilityId === "software.activations" ? ["software.licensing"] : capabilityId === "software.downloads" ? ["software.entitlements", "software.releases"] : capabilityId === "software.updates" ? ["software.licensing", "software.entitlements", "software.releases", "software.downloads"] : [],
  requiresModules: ["core", "commerce"],
  cms: { customerVisible: false, adminVisible: true },
  manifest: { allowed: true, explicitSelectionRequired: false },
  notes: capabilityId === "software.subscriptions" ? ["V1.3.0 annual renewals are customer-initiated."] : []
}));
modules.registryVersion = version;
modules.modules = modules.modules.filter((m) => m.moduleId !== "software").concat(softwareModule).sort((a, b) => a.order - b.order);
modules.capabilities = modules.capabilities.filter((c) => !c.capabilityId.startsWith("software.")).concat(softwareCaps).sort((a, b) => a.capabilityId.localeCompare(b.capabilityId));
modules.moduleCount = modules.modules.length;
modules.capabilityCount = modules.capabilities.length;
writeJson("registry/modules/index.json", modules);

const api = read("registry/api/index.json");
const knownErrors = new Set(api.errorCodes.map((e) => e.code));
const commonErrors = ["bad_request", "validation_failed", "api_version_unsupported", "contract_version_unsupported", "unauthenticated", "forbidden", "not_found"].filter((e) => knownErrors.has(e));
const group = (apiId, name, description, basePath, defaultAuthMode, defaultCachePolicy, defaultRateLimitClass, defaultCorsPolicy, operationIds) => ({ $id: apiId, apiId, name, version: "1.0.0", status: "stable", domain: "api", category: "operations", description, basePath, defaultAuthMode, defaultCachePolicy, defaultRateLimitClass, defaultCorsPolicy, operationIds, moduleBindings: ["software"], notes: [] });
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
  authentication: { mode: authMode, permissions: permissionsList, permissionMode: "all", scope: opts.scope ?? "site" },
  request: { pathParameters: opts.pathParameters ?? [], query: opts.query ?? [], headers: ["X-Request-Id?", "X-NEXTF-Contract-Version?", ...(opts.idempotent ? ["Idempotency-Key"] : []), ...(opts.concurrent ? ["If-Match"] : [])], bodyContract: opts.bodyContract ?? null, bodyProjection: opts.bodyProjection ?? null },
  response: { successStatus: opts.successStatus ?? 200, envelope: "api.successEnvelope", dataContract, errorEnvelope: "api.errorEnvelope", errors: [...commonErrors, ...(opts.errors ?? []).filter((e) => knownErrors.has(e))], projection: opts.projection ?? "authorized-minimal" },
  policies: { idempotency: { required: !!opts.idempotent, header: opts.idempotent ? "Idempotency-Key" : null }, concurrency: { required: !!opts.concurrent, requestHeader: opts.concurrent ? "If-Match" : null, responseHeader: opts.concurrent ? "ETag" : null }, cache: opts.cache ?? "no-store", rateLimit: opts.rateLimit ?? "authenticated-read", cors: opts.cors ?? "customer-portal" },
  moduleBindings: ["core", "commerce", "integrations", "software"],
  contractBindings: opts.contractBindings ?? [dataContract],
  eventBindings: opts.eventBindings ?? [],
  publicSurface: opts.publicSurface ?? false,
  privacy: opts.privacy ?? "sensitive",
  notes: opts.notes ?? []
});
const softwareOps = [
  op("software-public", "catalog", "Get Public Software Catalog", "GET", "/catalog", "anonymous", [], "software.product", { publicSurface: true, privacy: "public", projection: "public-safe", cache: "public-short", rateLimit: "public-read", cors: "public-read", contractBindings: ["software.product", "software.edition", "software.price", "software.bundleComponent"] }),
  op("software-public", "product", "Get Public Software Product", "GET", "/products/{productId}", "anonymous", [], "software.product", { pathParameters: ["productId"], publicSurface: true, privacy: "public", projection: "public-safe", cache: "public-short", rateLimit: "public-read", cors: "public-read" }),
  op("software-public", "create-order", "Create Software Purchase Order", "POST", "/orders", "commerce-customer", [], "software.orderExtension", { bodyContract: "software.orderExtension", bodyProjection: "product-edition-coupon-choice-only", idempotent: true, cors: "site-origin", rateLimit: "commerce-checkout", eventBindings: ["software.order-created"], notes: ["Browser submits only product/edition/coupon choices; Software resolves authoritative price and final amount server-side.", "This operation cannot assert paid state."] }),

  op("software-customer", "account", "Get Own Software Account", "GET", "/account", "commerce-customer", [], "software.customer", { privacy: "personal", notes: ["Owner-scoped to authenticated Software customer."] }),
  op("software-customer", "orders", "List Own Software Orders", "GET", "/orders", "commerce-customer", [], "software.orderExtension", { privacy: "sensitive", notes: ["Owner-scoped; no cross-customer list/search."] }),
  op("software-customer", "order", "Get Own Software Order", "GET", "/orders/{orderId}", "commerce-customer", [], "software.orderExtension", { pathParameters: ["orderId"], privacy: "sensitive", notes: ["Owner-scoped."] }),
  op("software-customer", "subscriptions", "List Own Software Subscriptions", "GET", "/subscriptions", "commerce-customer", [], "software.subscription", { notes: ["Owner-scoped."] }),
  op("software-customer", "cancel-subscription", "Cancel Own Software Subscription", "POST", "/subscriptions/{subscriptionId}/cancel", "commerce-customer", [], "software.subscription", { pathParameters: ["subscriptionId"], idempotent: true, eventBindings: ["software.subscription-cancelled"], notes: ["Owner-scoped and policy-bound."] }),
  op("software-customer", "licenses", "List Own Software Licenses", "GET", "/licenses", "commerce-customer", [], "software.license", { projection: "owner-masked", notes: ["Returns masked license identity only."] }),
  op("software-customer", "activate", "Activate Own Software License", "POST", "/licenses/{licenseId}/activations", "commerce-customer", [], "software.activation", { pathParameters: ["licenseId"], bodyContract: "software.activation", idempotent: true, eventBindings: ["software.activation-created"], notes: ["Owner-scoped and activation-policy enforced."] }),
  op("software-customer", "deactivate", "Deactivate Own Software Activation", "POST", "/activations/{activationId}/deactivate", "commerce-customer", [], "software.activation", { pathParameters: ["activationId"], idempotent: true, eventBindings: ["software.activation-deactivated"], notes: ["Owner-scoped."] }),
  op("software-customer", "downloads", "List Own Eligible Downloads", "GET", "/downloads", "commerce-customer", [], "software.release", { projection: "owner-eligible", notes: ["Eligibility derives from active entitlements."] }),
  op("software-customer", "create-download", "Create Own Download Grant", "POST", "/downloads/{releaseId}/grant", "commerce-customer", [], "software.downloadGrant", { pathParameters: ["releaseId"], idempotent: true, eventBindings: ["software.download-grant-issued"], privacy: "secret", notes: ["Short-lived owner/product/release-scoped grant."] }),
  op("software-customer", "support", "Create Own Software Support Request", "POST", "/support", "commerce-customer", [], "software.supportEntitlement", { bodyContract: "software.supportEntitlement", idempotent: true, notes: ["Request acceptance is bounded by the authenticated customer and support entitlement."] }),

  op("software-cms", "overview", "Get Software Operations Overview", "GET", "/overview", "nextf-admin", ["software.dashboard.view"], "software.auditReference"),
  op("software-cms", "products", "Read Software Products", "GET", "/products", "nextf-admin", ["software.catalog.view"], "software.product"),
  op("software-cms", "upsert-product", "Create or Update Software Product", "PUT", "/products/{productId}", "nextf-admin", ["software.catalog.manage"], "software.product", { pathParameters: ["productId"], bodyContract: "software.product", idempotent: true, concurrent: true }),
  op("software-cms", "publish-product", "Publish Software Product", "POST", "/products/{productId}/publish", "nextf-admin", ["software.catalog.publish"], "software.product", { pathParameters: ["productId"], idempotent: true, eventBindings: [] }),
  op("software-cms", "releases", "Read Software Releases", "GET", "/releases", "nextf-admin", ["software.releases.view"], "software.release"),
  op("software-cms", "initiate-release-upload", "Initiate Software Release Upload", "POST", "/releases/initiate-upload", "nextf-admin", ["software.releases.manage"], "software.releaseArtifact", { idempotent: true, privacy: "secret", notes: ["Returns an upload authorization without proxying package bytes through the CMS browser/API."] }),
  op("software-cms", "publish-release", "Publish Software Release", "POST", "/releases/{releaseId}/publish", "nextf-admin", ["software.releases.publish"], "software.release", { pathParameters: ["releaseId"], idempotent: true, eventBindings: ["software.release-published"], notes: ["Publication uses server-calculated checksum/signature/package evidence."] }),
  op("software-cms", "orders", "Read Software Orders", "GET", "/orders", "nextf-admin", ["software.orders.view"], "software.orderExtension"),
  op("software-cms", "refund-request", "Request Software Refund", "POST", "/orders/{orderId}/refund-requests", "nextf-admin", ["software.refunds.request"], "software.orderExtension", { pathParameters: ["orderId"], idempotent: true, notes: ["Does not directly mark the order refunded."] }),
  op("software-cms", "refund-approve", "Approve Software Refund", "POST", "/orders/{orderId}/refund-requests/{refundRequestId}/approve", "nextf-admin", ["software.refunds.approve"], "software.orderExtension", { pathParameters: ["orderId", "refundRequestId"], idempotent: true, notes: ["Only verified refund success later changes paid balance/order entitlement policy."] }),
  op("software-cms", "customers", "Read Software Customers", "GET", "/customers", "nextf-admin", ["software.customers.view"], "software.customer"),
  op("software-cms", "licenses", "Read Masked Software Licenses", "GET", "/licenses", "nextf-admin", ["software.licenses.view"], "software.license", { projection: "staff-masked" }),
  op("software-cms", "suspend-license", "Suspend Software License", "POST", "/licenses/{licenseId}/suspend", "nextf-admin", ["software.licenses.manage"], "software.license", { pathParameters: ["licenseId"], idempotent: true, eventBindings: ["software.license-suspended"] }),
  op("software-cms", "restore-license", "Restore Software License", "POST", "/licenses/{licenseId}/restore", "nextf-admin", ["software.licenses.manage"], "software.license", { pathParameters: ["licenseId"], idempotent: true, eventBindings: ["software.license-restored"] }),
  op("software-cms", "activation-limit", "Change Software Activation Limit", "POST", "/licenses/{licenseId}/activation-limit-change", "nextf-admin", ["software.licenses.manage"], "software.license", { pathParameters: ["licenseId"], idempotent: true, notes: ["Requires reason and immutable audit evidence."] }),
  op("software-cms", "subscriptions", "Read Software Subscriptions", "GET", "/subscriptions", "nextf-admin", ["software.orders.view"], "software.subscription"),
  op("software-cms", "grant-entitlement", "Create Exceptional Software Entitlement", "POST", "/entitlements", "nextf-admin", ["software.entitlements.manage"], "software.entitlement", { bodyContract: "software.entitlement", idempotent: true, eventBindings: ["software.entitlement-granted"] }),
  op("software-cms", "support", "Read Software Support", "GET", "/support", "nextf-admin", ["software.support.manage"], "software.supportEntitlement"),
  op("software-cms", "audit", "Read Software Audit", "GET", "/audit", "nextf-admin", ["software.audit.view"], "software.auditReference"),

  op("software-service", "checkout-session", "Create Checkout Business Session for Software Order", "POST", "/checkout/sessions", "internal-service", [], "software.orderExtension", { bodyContract: "software.orderExtension", idempotent: true, rateLimit: "server-to-server", cors: "server-only", notes: ["Outgoing Software-to-Checkout business command uses exact server-authoritative order amount/currency and dedicated credentials."] }),
  op("software-service", "consume-payment-event", "Consume Verified Checkout Payment Event", "POST", "/checkout/events", "internal-service", [], "software.orderExtension", { bodyContract: "software.orderExtension", idempotent: true, rateLimit: "server-to-server", cors: "server-only", eventBindings: ["software.order-paid"], notes: ["Receiver verifies signature, audience, timestamp, business, environment, schema, event ID, capture ID, order amount and currency before exactly-once fulfillment."] }),
  op("software-service", "license-validate", "Validate Software License", "POST", "/license/validate", "site-server", [], "software.updateResponse", { bodyContract: "software.updateRequest", idempotent: true, rateLimit: "sensitive-write", cors: "server-only", notes: ["WordPress plugin uses license-scoped public protocol; no CMS/service credential is sent to the plugin."] }),
  op("software-service", "update-check", "Check Software Update", "POST", "/updates/check", "site-server", [], "software.updateResponse", { bodyContract: "software.updateRequest", idempotent: true, rateLimit: "sensitive-write", cors: "server-only", eventBindings: ["software.update-served"] }),
  op("software-service", "download", "Redeem Software Download Grant", "POST", "/downloads/redeem", "site-server", [], "software.downloadGrant", { bodyContract: "software.downloadGrant", idempotent: true, rateLimit: "sensitive-write", cors: "server-only", privacy: "secret", notes: ["Streams/redirects only after validating a short-lived single-purpose grant."] }),
  op("software-service", "reconciliation", "Run Software Checkout Reconciliation", "POST", "/reconciliation", "internal-service", [], "software.auditReference", { idempotent: true, rateLimit: "server-to-server", cors: "server-only", notes: ["Produces attention records; does not silently rewrite historical financial facts."] })
];
const softwareGroups = [
  group("api.software-public", "Software Public API", "Public Software catalog and purchase initiation.", "/api/v1/software/public", "anonymous", "public-short", "public-read", "site-origin", softwareOps.filter((o) => o.groupId === "api.software-public").map((o) => o.operationId)),
  group("api.software-customer", "Software Customer API", "Authenticated-owner Workspace operations.", "/api/v1/software/customer", "commerce-customer", "no-store", "authenticated-read", "customer-portal", softwareOps.filter((o) => o.groupId === "api.software-customer").map((o) => o.operationId)),
  group("api.software-cms", "Software CMS API", "Guarded NEXT F staff control-plane operations.", "/api/v1/software/cms", "nextf-admin", "no-store", "authenticated-read", "admin-portal", softwareOps.filter((o) => o.groupId === "api.software-cms").map((o) => o.operationId)),
  group("api.software-service", "Software Service API", "Trusted Checkout, plugin protocol and reconciliation service operations.", "/api/v1/software/service", "internal-service", "no-store", "server-to-server", "server-only", softwareOps.filter((o) => o.groupId === "api.software-service").map((o) => o.operationId))
];
for (const g of softwareGroups) writeJson(`registry/api/groups/${g.apiId.slice(4)}.json`, g);
for (const operation of softwareOps) writeJson(`registry/api/operations/${operation.groupId.slice(4)}/${operation.operationId.split(".").at(-1)}.json`, operation);
api.registryVersion = version;
api.groups = api.groups.filter((g) => !g.apiId.startsWith("api.software-")).concat(softwareGroups).sort((a, b) => a.apiId.localeCompare(b.apiId));
api.operations = api.operations.filter((o) => !o.operationId.startsWith("api.software-")).concat(softwareOps).sort((a, b) => a.operationId.localeCompare(b.operationId));
writeJson("registry/api/index.json", api);

const admin = read("registry/admin-ui/index.json");
const adminProfileRows = [
  ["software.overview", "Software Overview", "software.auditReference", "software.dashboard.view"],
  ["software.catalog", "Software Catalog", "software.product", "software.catalog.manage"],
  ["software.releases", "Software Releases", "software.release", "software.releases.manage"],
  ["software.orders", "Software Orders", "software.orderExtension", "software.orders.view"],
  ["software.subscriptions", "Software Subscriptions", "software.subscription", "software.orders.view"],
  ["software.customers", "Software Customers", "software.customer", "software.customers.view"],
  ["software.licenses", "Software Licenses", "software.license", "software.licenses.manage"],
  ["software.entitlements", "Software Entitlements", "software.entitlement", "software.entitlements.manage"],
  ["software.delivery", "Software Delivery", "software.downloadGrant", "software.releases.view"],
  ["software.support", "Software Support", "software.supportEntitlement", "software.support.manage"],
  ["software.audit", "Software Audit", "software.auditReference", "software.audit.view"]
];
const adminProfiles = adminProfileRows.map(([resource, name, contract, permissionId]) => ({
  $id: `adminUi.profile.${resource}`,
  name,
  version,
  status: "stable",
  domain: "admin-ui",
  profileType: "resource",
  resource,
  moduleId: "software",
  description: `NEXT F CMS/Admin metadata for ${name}.`,
  targetContracts: [contract],
  primaryTargetContract: contract,
  route: `/software/${resource.split(".").at(-1)}`,
  screenKind: "admin-editor",
  layoutTemplate: "admin-operations",
  permissions: [permissionId],
  actions: [{ actionId: "manage", permissionId, riskLevel: permissionId.includes("publish") || permissionId.includes("manage") ? "sensitive" : "standard", requiresRecentAuthentication: true, requiresExplicitConfirmation: false }],
  states: ["loading", "empty", "populated", "authorization-denied", "conflict", "network-error", "success"],
  notes: ["UI visibility never authorizes the action; CMS API and Software API enforce the canonical permission.", "Secret and raw license/download/payment payloads are redacted."]
}));
admin.registryVersion = version;
admin.profiles = admin.profiles.filter((p) => p.moduleId !== "software").concat(adminProfiles).sort((a, b) => a.$id.localeCompare(b.$id));
admin.profileCount = admin.profiles.length;
writeJson("registry/admin-ui/index.json", admin);
for (const p of adminProfiles) writeJson(`registry/admin-ui/profiles/${p.resource.replace(".", "-")}-admin.json`, p);

const manifestSchema = read("registry/manifests/nextf-site-manifest.schema.json");
const siteTypes = manifestSchema.$defs?.siteDescriptor?.properties?.siteType?.enum ?? [];
if (!siteTypes.includes("software")) siteTypes.push("software");
writeJson("registry/manifests/nextf-site-manifest.schema.json", manifestSchema);

const starter = {
  manifestVersion: "1.0.0",
  contracts: { contractVersion: version, manifestSpecVersion: "1.0.0", compatibilityMode: "strict-major" },
  site: { siteId: "site_software_nextf_lk", name: "NEXT F Software", siteType: "software", primaryUrl: "https://software.nextf.lk" },
  localization: { defaultLocale: "en-LK", supportedLocales: ["en-LK"], timeZone: "Asia/Colombo" },
  environments: [
    { id: "development", kind: "development", baseUrl: "http://localhost:5173", enabled: true },
    { id: "production", kind: "production", baseUrl: "https://software.nextf.lk", enabled: true }
  ],
  contentDelivery: { mode: "runtime", publishedOnly: true, previewSupported: true },
  modules: [
    { moduleId: "core", enabled: true, capabilities: ["core.audit", "core.identity", "core.publishing", "core.tenant-isolation", "core.versioning"].map((capabilityId) => ({ capabilityId, enabled: true })) },
    { moduleId: "media", enabled: true, capabilities: ["media.contextual-metadata", "media.images", "media.library"].map((capabilityId) => ({ capabilityId, enabled: true })) },
    { moduleId: "commerce", enabled: true, capabilities: ["commerce.catalog", "commerce.customers", "commerce.checkout", "commerce.orders", "commerce.payments", "commerce.refunds"].map((capabilityId) => ({ capabilityId, enabled: true })) },
    { moduleId: "integrations", enabled: true, capabilities: ["integrations.custom-api", "integrations.health", "integrations.webhooks"].map((capabilityId) => ({ capabilityId, enabled: true })) },
    { moduleId: "software", enabled: true, capabilities: capabilityIds.map((capabilityId) => ({ capabilityId, enabled: true })) }
  ],
  runtime: { siteIdentity: true, contentConnector: true, eventLayer: true, consentLayer: true, integrationLoader: true },
  cms: { enabled: false, workspaceMode: "site", editingMode: "structured", previewEnabled: false, publishingEnabled: false, revisionHistoryEnabled: false, arbitraryCodeEditing: false },
  apiBindings: softwareGroups.map((g) => ({ apiId: g.apiId, version: "1.0.0", environments: ["development", "production"] })),
  events: { produces: eventBindings, consumes: [] },
  tracking: { events: ["page.viewed", "cta.clicked"] },
  integrations: [],
  configuration: [
    { key: "SOFTWARE_API_ORIGIN", exposure: "public", required: true, environments: ["development", "production"], purpose: "Public origin for Software API catalog and customer entry flows; contains no secret." },
    { key: "SOFTWARE_CHECKOUT_BUSINESS_ID", exposure: "server", required: true, environments: ["production"], purpose: "Server-side Checkout business identifier nextf-software; not a credential." }
  ],
  extensions: []
};
writeJson("starters/software/nextf.site.json", starter);
writeText("starters/software/AGENTS.md", `# NEXT F Software Starter - Agent Instructions\n\nPin Contracts ${version}. Use the Software API as software-business authority. Do not trust browser prices or payment redirects. Keep Checkout payment authority separate. Keep annual launch renewal customer-initiated. Never expose CMS/service/provider/R2 credentials or raw license keys.\n`);
writeText("starters/software/README.md", `# NEXT F Software Site Starter\n\nFramework-neutral starter contract composition for software.nextf.lk. The public site consumes Software public projections and purchase initiation; customer self-service belongs to workspace.nextf.lk.\n`);
writeJson("starters/software/CONTENT-CONTRACT-MAP.json", { contractVersion: version, modules: { software: { capabilities: capabilityIds, contracts: contractBindings } }, all: contractBindings });
writeJson("starters/software/EVENT-MAP.json", { contractVersion: version, authoritativeDomainEvents: eventBindings });
writeJson("starters/software/TRACKING-EVENT-MAP.json", { contractVersion: version, trackingEvents: ["page.viewed", "cta.clicked"], notes: ["Tracking never includes raw license keys, download tokens, site content or payment/provider payloads."] });
writeJson("starters/software/ADMIN-MAPPING.json", { contractVersion: version, surface: "nextf-admin", navigation: softwareModule.admin.navigation });
writeText("starters/software/PERMISSION-EXPECTATIONS.md", staffPermissions.map((p) => `- \`${p.permissionId}\` - ${p.description}`).join("\n"));
writeText("starters/software/API-BINDINGS.md", softwareGroups.map((g) => `## \`${g.apiId}\`\n\n${g.description}\n`).join("\n"));
writeText("starters/software/INTEGRATION-ARCHITECTURE.md", `# Software Integration Architecture\n\nSoftware API owns orders, subscriptions, licenses, entitlements, releases and support. Checkout owns payment sessions/attempts/captures/refunds and sends verified signed evidence. CMS is a staff bridge; Workspace is owner-scoped customer self-service; WordPress plugins use the license-scoped validation/update protocol.\n`);
writeText("starters/software/VALIDATION.md", `# Validation Commands\n\n- \`npm run generate:software\`\n- \`npm run validate:phase40\`\n- \`npm run smoke:phase40\`\n- \`npm run validate:regression\`\n- \`node bin/nextf-contract.mjs validate starters/software/nextf.site.json --json\`\n`);
writeText("starters/software/ACCEPTANCE-CHECKLIST.md", `- [ ] Manifest pins ${version}.\n- [ ] Public prices come from active Software price records.\n- [ ] Browser price tampering cannot affect final order totals.\n- [ ] Redirect without verified capture grants nothing.\n- [ ] Annual launch renewal is customer-initiated.\n- [ ] License/update requests contain no site content.\n- [ ] Private release packages require short-lived entitlement-scoped grants.\n- [ ] Existing users are grandfathered before paid feature gates.\n`);
const starterIndex = read("registry/starters/index.json");
starterIndex.registryVersion = version;
starterIndex.starters = starterIndex.starters.filter((s) => s.slug !== "software").concat({ $id: "starters.software", slug: "software", name: "NEXT F Software Site Starter", version, status: "stable", siteType: "software", bundlePath: "starters/software", manifestPath: "starters/software/nextf.site.json", summary: "Public Software storefront starter bound to canonical Software contracts.", modules: starter.modules.map((m) => m.moduleId), capabilities: capabilityIds, contractCount: contractBindings.length, apiBindings: starter.apiBindings, integrations: starter.integrations, permissionCount: staffPermissions.length, eventCount: softwareEvents.length }).sort((a, b) => a.slug.localeCompare(b.slug));
starterIndex.starterCount = starterIndex.starters.length;
writeJson("registry/starters/index.json", starterIndex);
writeJson("registry/starters/definitions/software.json", starterIndex.starters.find((s) => s.slug === "software"));

let registry = read("registry/registry.json");
registry.registryVersion = version;
registry.items = registry.items.filter((item) => item.managedBy !== "software-sync");
registry.items.push({ id: "software.softwareContractStandard", name: "Software Contract Standard", domain: "software", type: "standard", version, status: "stable", description: "Phase 40 Software authority, commerce, licensing, release, update and customer-access rules.", source: "standards/48-software-contract-standard.md", phase, introducedIn: version, tags: ["software", "licensing", "entitlements", "releases", "standard"], relationships: [{ type: "uses", target: "commerce.order", description: "Software order extensions reuse Commerce order truth." }, { type: "uses", target: "commerce.paymentCapture", description: "Fulfillment uses verified payment capture evidence." }], permissions: [], events: [], managedBy: "software-sync" });
registry.items.push({ id: "software.registry", name: "Software Registry", domain: "software", type: "registry-index", version, status: "stable", description: "Machine-readable index of canonical Software schemas and customer capabilities.", source: "registry/software/index.json", phase, introducedIn: version, tags: ["software", "registry", "schemas"], relationships: [{ type: "implements", target: "software.softwareContractStandard", description: "Indexes definitions governed by Phase 40." }], permissions: [], events: [], managedBy: "software-sync" });
for (const def of definitions) registry.items.push({ id: def.$id, name: def.name, domain: "software", type: "schema", version: def.version, status: def.status, description: def.description, source: `registry/software/definitions/${kebab(def.$id.slice(9))}.json`, phase, introducedIn: version, tags: ["software-schema", def.category, def.softwareModel.kind, ...def.fields.slice(0, 5).map((f) => f.key)], relationships: [{ type: "implements", target: "software.softwareContractStandard", description: "Implements Phase 40 Software contracts." }, ...def.relationships], permissions: [], events: [], managedBy: "software-sync" });
for (const perm of staffPermissions) registry.items.push({ id: perm.permissionId, name: perm.name, domain: "software", type: "permission", version, status: "stable", description: perm.description, source: `registry/permissions/permissions/${perm.permissionId}.json`, phase, introducedIn: version, tags: ["permission", "software", perm.resource, perm.action, perm.riskLevel], relationships: [{ type: "implements", target: "permissions.permissionRegistryStandard", description: "Software permission uses canonical permission semantics." }], permissions: [perm.permissionId], events: [], managedBy: "software-sync" });
for (const event of softwareEvents) registry.items.push({ id: event.eventKey, name: event.name, domain: "events", type: "event", version, status: "stable", description: event.description, source: `registry/events/events/${event.eventKey.replace(".", "--")}.json`, phase, introducedIn: version, tags: ["event", "software", event.webhookEligible ? "webhook-eligible" : "internal-only"], relationships: event.relationships, permissions: [], events: [event.eventKey], managedBy: "software-sync" });
for (const g of softwareGroups) registry.items.push({ id: g.apiId, name: g.name, domain: "api", type: "api-group", version: "1.0.0", status: "stable", description: g.description, source: `registry/api/groups/${g.apiId.slice(4)}.json`, phase, introducedIn: version, tags: ["api", "software", "group"], relationships: [{ type: "implements", target: "api.apiContractStandard", description: "Software API group follows API contract rules." }], permissions: [], events: [], managedBy: "software-sync" });
for (const operation of softwareOps) registry.items.push({ id: operation.operationId, name: operation.name, domain: "api", type: "api-operation", version: "1.0.0", status: "stable", description: operation.description, source: `registry/api/operations/${operation.groupId.slice(4)}/${operation.operationId.split(".").at(-1)}.json`, phase, introducedIn: version, tags: ["api-operation", "software", operation.method, operation.authentication.mode], relationships: operation.contractBindings.map((target) => ({ type: "uses", target, description: "Operation uses this contract." })), permissions: operation.authentication.permissions, events: operation.eventBindings, managedBy: "software-sync" });
registry.items.push({ id: "starters.software", name: "NEXT F Software Site Starter", domain: "developer", type: "starter-pack", version, status: "stable", description: "Framework-neutral starter for software.nextf.lk.", source: "registry/starters/definitions/software.json", phase, introducedIn: version, tags: ["starter-pack", "software"], relationships: [{ type: "uses", target: "modules.software", description: "Enables Software module." }], permissions: [], events: [], managedBy: "software-sync" });
for (const profile of adminProfiles) registry.items.push({ id: profile.$id, name: profile.name, domain: "admin-ui", type: "ui-profile", version, status: "stable", description: profile.description, source: `registry/admin-ui/profiles/${profile.resource.replace(".", "-")}-admin.json`, phase, introducedIn: version, tags: ["admin-ui", "software"], relationships: [{ type: "uses", target: profile.primaryTargetContract, description: "Admin profile targets this Software contract." }], permissions: profile.permissions, events: [], managedBy: "software-sync" });
registry.items.sort((a, b) => a.id.localeCompare(b.id));
writeJson("registry/registry.json", registry);

for (const rel of ["registry/domains.json", "registry/types.json", "registry/statuses.json", "registry/registry-meta.json"]) {
  const data = read(rel);
  data.registryVersion = version;
  if (rel.endsWith("domains.json") && !data.domains.some((d) => d.id === "software")) data.domains.push({ id: "software", label: "Software", description: "NEXT F downloadable-software catalog, commerce extension, licensing, entitlements, releases, updates, downloads and support." });
  writeJson(rel, data);
}

const releaseRecord = {
  version,
  title: "Software Canonical Contracts",
  releaseStatus: "published-stable",
  releaseDate: "2026-09-23",
  phase,
  summary: "Adds the canonical NEXT F Software domain, stable launch identifiers, owner-scoped customer contracts, CMS permissions, Software/Checkout boundaries, licensing/entitlement/release/update APIs and the software.nextf.lk starter while preserving V1.0.0-V1.2.0 immutable releases.",
  recordCompleteness: "complete",
  incompletenessReason: null,
  provenance: { exactRegistrySnapshotAvailable: true, source: "NEXT F Software Integration Pack" },
  evidence: { evidenceLevel: "authoritative", diffAvailable: true, diffRoute: "#/lifecycle/diff?from=1.2.0&to=1.3.0", compatibilityRoute: "#/lifecycle/compatibility", migrationRoute: null },
  support: { supportLevel: "stable", compatibilityStatus: "compatible-additive", registryProductionStable: true },
  affected: { domains: ["software", "modules", "api", "permissions", "events", "admin-ui", "developer"], modules: ["software"], contracts: ["modules.software", ...contractBindings] },
  changes: [
    { entryId: "phase40-software-domain", title: "Software canonical domain", category: "feature", changeType: "added", summary: "Adds Software products, editions, effective prices, subscriptions, licenses, activations, entitlements, grandfathering, releases, updates, downloads and support contracts.", affectedRegistryIds: contractBindings, affectedDomains: ["software"], affectedModules: ["software"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "standards/48-software-contract-standard.md" },
    { entryId: "phase40-software-runtime", title: "Software runtime boundaries", category: "feature", changeType: "added", summary: "Adds public/customer/CMS/service APIs, staff permissions and Software domain events with verified Checkout evidence boundaries.", affectedRegistryIds: [...softwareGroups.map((g) => g.apiId), ...permissionBindings, ...eventBindings], affectedDomains: ["api", "permissions", "events"], affectedModules: ["software"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "registry/software/index.json" },
    { entryId: "phase40-software-launch-ids", title: "Software launch identifiers", category: "feature", changeType: "added", summary: "Pins product/edition/launch-price identifiers and customer-initiated annual renewal semantics for launch planning.", affectedRegistryIds: ["software.product", "software.edition", "software.price"], affectedDomains: ["software"], affectedModules: ["software"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "registry/software/fixtures/valid/launch-catalog.json" }
  ]
};
writeJson(`registry/changelog/releases/${version}.json`, releaseRecord);

// Update human documentation without rewriting prior release history.
const readmePath = path.join(root, "README.md");
let readme = fs.readFileSync(readmePath, "utf8");
readme = readme.replace("Current stable Contract Registry version: **V1.2.0**", `Current stable Contract Registry version: **V${version}**`);
const phase40Readme = `## Phase 40 - Software Canonical Contracts\n\nV1.3.0 adds \`registry/software/\`, canonical Software APIs/events/permissions, stable launch product, edition and price IDs, licensing/entitlement/release/update contracts and the \`starters/software/\` composition. Annual launch renewal is customer-initiated; automatic renewal remains reserved until the required Checkout/provider evidence is accepted. Existing V1.0.0-V1.2.0 release evidence remains pinned and unchanged.\n\nRun \`npm run generate:software\`, \`npm run validate:phase40\`, \`npm run smoke:phase40\` and \`npm run validate:regression\` before packaging.\n`;
readme = readme.replace(/\n*## Phase 40 - Software Canonical Contracts[\s\S]*?before packaging\.\n?/g, "\n");
readme = readme.replace("\n## Phase 39 - Gaming Store Canonical Contracts", `\n${phase40Readme}\n## Phase 39 - Gaming Store Canonical Contracts`);
writeText("README.md", readme);
const agentPath = path.join(root, "AGENTS.md");
let agents = fs.readFileSync(agentPath, "utf8");
if (!agents.includes("## Phase 40 Software rules")) agents += `\n\n## Phase 40 Software rules\n\n- Use canonical \`software.*\` contracts before creating project-local licensing, entitlement, release or subscription models.\n- Software API owns software-business truth; Checkout owns payment sessions/attempts/captures/refunds.\n- Never trust browser price, paid state, entitlement, activation limit or package path.\n- A success redirect is never payment evidence.\n- V1.3.0 annual renewal is customer-initiated; do not label it auto-renewing.\n- Use capability entitlements rather than plan-name checks.\n- Do not remotely disable installed plugin functionality when annual update/support access expires.\n- Never expose raw license keys, download tokens, signing keys, provider secrets or private R2 credentials.\n- License/update requests must not contain WordPress content or unrelated visitor analytics.\n`;
writeText("AGENTS.md", agents);
let changelog = fs.readFileSync(path.join(root, "CHANGELOG.md"), "utf8");
if (!changelog.includes("## [1.3.0] - 2026-09-23")) changelog = `## [1.3.0] - 2026-09-23\n\n### Added\n- Phase 40 Software canonical contracts, stable launch IDs, APIs, permissions, events, starter composition and release acceptance evidence.\n\n### Changed\n- Current registry version advances to V1.3.0 while V1.0.0-V1.2.0 remain immutable release evidence.\n\n${changelog}`;
writeText("CHANGELOG.md", changelog);

// Keep generic portal roadmap/version text aligned with the current release.
for (const rel of ["index.html", "404.html"]) {
  const target = path.join(root, rel);
  if (!fs.existsSync(target)) continue;
  let html = fs.readFileSync(target, "utf8");
  html = html.replaceAll("v1.2.0", `v${version}`).replaceAll("Phase 39", "Phase 40");
  if (rel === "index.html") html = html.replace("Gaming Store Canonical Contracts.</p>", "Software Canonical Contracts.</p>");
  writeText(rel, html);
}
const pagesPath = path.join(root, "js/pages.js");
if (fs.existsSync(pagesPath)) {
  let pages = fs.readFileSync(pagesPath, "utf8");
  pages = pages.replace('[39, "Gaming Store Canonical Contracts", "Supplier-neutral Gaming products, offers, quotes, orders, fulfillment, APIs, permissions, events, integrations and starter pack.", "current"]', '[39, "Gaming Store Canonical Contracts", "Supplier-neutral Gaming products, offers, quotes, orders, fulfillment, APIs, permissions, events, integrations and starter pack.", "complete"],\n  [40, "Software Canonical Contracts", "Software catalog, pricing, subscriptions, licensing, entitlements, releases, updates, customer access and Checkout evidence boundaries.", "current"]');
  pages = pages.replaceAll("Current registry v1.2.0", `Current registry v${version}`).replaceAll("through V1.2.0 Gaming Store Canonical Contracts", "through V1.3.0 Software Canonical Contracts").replaceAll("phaseBadge(39)", "phaseBadge(40)");
  pages = pages.replace(
    '<div class="paper-card__header"><div><h2>V1.2.0 Gaming Store Canonical Contracts</h2><p>Gaming Store now has supplier-neutral products, offers, purchase fields, account validation, quotes, orders, fulfillment, secure delivery, APIs, events, permissions and starter guidance.</p></div><a class="button button--secondary button--compact" href="#/registry?domain=gaming">${icon("fa-gamepad")} Open Gaming contracts</a></div>\n            <div class="paper-card__body phase-summary">\n              <div class="phase-summary__row"><span>Gaming schemas</span><strong>15</strong></div>\n              <div class="phase-summary__row"><span>Gaming capabilities</span><strong>13</strong></div>\n              <div class="phase-summary__row"><span>Gaming API operations</span><strong>22</strong></div>\n              <div class="phase-summary__row"><span>Gaming events</span><strong>13</strong></div>\n              <div class="phase-summary__row"><span>Current release</span><strong>1.2.0</strong></div>',
    '<div class="paper-card__header"><div><h2>V1.3.0 Software Canonical Contracts</h2><p>Software now has canonical catalog/pricing, customer/order extensions, subscriptions, licensing, entitlements, releases, updates, downloads, support, customer access and Checkout evidence boundaries.</p></div><a class="button button--secondary button--compact" href="#/registry?domain=software">${icon("fa-code")} Open Software contracts</a></div>\n            <div class="paper-card__body phase-summary">\n              <div class="phase-summary__row"><span>Software schemas</span><strong>19</strong></div>\n              <div class="phase-summary__row"><span>Software capabilities</span><strong>11</strong></div>\n              <div class="phase-summary__row"><span>Software API operations</span><strong>39</strong></div>\n              <div class="phase-summary__row"><span>Software events</span><strong>19</strong></div>\n              <div class="phase-summary__row"><span>Current release</span><strong>1.3.0</strong></div>'
  );
  writeText("js/pages.js", pages);
}

// Current lifecycle regression follows Phase 40; frozen Phase 39 remains release evidence only.
const regressionPath = path.join(root, "scripts/validate-current-regression.mjs");
let regression = fs.readFileSync(regressionPath, "utf8");
regression = regression.replace("// Phase 39 is current. Phase 36/37/38 scripts remain frozen release-time evidence for previous stable releases.\nrun('Phase 39 validator','scripts/validate-phase-39.mjs');", "// Phase 40 is current. Earlier phase scripts remain frozen release-time evidence for previous stable releases.\nrun('Phase 40 validator','scripts/validate-phase-40.mjs');");
regression = regression.replace("const smokePhases=[23,24,25,26,27,28,29,30,31,32,33,35,39];", "const smokePhases=[23,24,25,26,27,28,29,30,31,32,33,35,40];");
writeText("scripts/validate-current-regression.mjs", regression);

run("scripts/sync-events-registry.mjs");
run("scripts/sync-api-registry.mjs");
run("scripts/sync-modules-registry.mjs");
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

// Release acceptance and immutable snapshot evidence.
registry = read("registry/registry.json");
const snapshotRoot = `registry/releases/${version}/snapshots`;
const snapshotFiles = {
  "registry.json": "registry/registry.json",
  "software.json": "registry/software/index.json",
  "software-launch-catalog.json": "registry/software/fixtures/valid/launch-catalog.json",
  "modules.json": "registry/modules/index.json",
  "api-contracts.json": "registry/api/index.json",
  "permissions.json": "registry/permissions/index.json",
  "events.json": "registry/events/index.json",
  "site-manifest.schema.json": "registry/manifests/nextf-site-manifest.schema.json",
  "software-site-manifest.json": "starters/software/nextf.site.json",
  "search.json": "registry/search/search-index.json",
  "relationships.json": "registry/relationships/relationship-index.json",
  "compatibility.json": "registry/compatibility/index.json"
};
for (const [name, rel] of Object.entries(snapshotFiles)) writeJson(`${snapshotRoot}/${name}`, read(rel));
const snapshotIndex = {
  registryVersion: version,
  releaseVersion: version,
  phase,
  title: `NEXT F Contracts V${version} Snapshot Index`,
  frozenAt: new Date().toISOString(),
  previousStableVersion: previousVersion,
  snapshots: Object.keys(snapshotFiles).sort().map((file) => ({ path: `${snapshotRoot}/${file}`, sha256: sha(`${snapshotRoot}/${file}`), bytes: fs.statSync(path.join(root, `${snapshotRoot}/${file}`)).size }))
};
writeJson(`registry/releases/${version}/snapshot-index.json`, snapshotIndex);

// Temporary release index so CLI recognizes the current version during acceptance validation.
const priorReleaseIndex = read("registry/releases/index.json");
const releaseRows = priorReleaseIndex.releases.filter((r) => r.version !== version).concat({ version, status: "CANDIDATE", manifest: `registry/releases/${version}/release-manifest.json` }).sort((a, b) => a.version.localeCompare(b.version, undefined, { numeric: true }));
writeJson("registry/releases/index.json", { currentVersion: version, stable: false, productionAcceptance: `registry/releases/${version}/acceptance-report.json`, releaseManifest: `registry/releases/${version}/release-manifest.json`, snapshotIndex: `registry/releases/${version}/snapshot-index.json`, integrityHashes: `registry/releases/${version}/integrity-hashes.json`, releases: releaseRows });
run("scripts/sync-browser-validation.mjs");

const validation = spawnSync(process.execPath, [path.join(root, "scripts/validate-phase-40.mjs")], { cwd: root, encoding: "utf8" });
const starterValidation = spawnSync(process.execPath, [path.join(root, "bin/nextf-contract.mjs"), "validate", "starters/software/nextf.site.json", "--json"], { cwd: root, encoding: "utf8" });
const compatibility = spawnSync(process.execPath, [path.join(root, "bin/nextf-contract.mjs"), "compatibility", "starters/software/nextf.site.json", "--json"], { cwd: root, encoding: "utf8" });
const stable = validation.status === 0 && starterValidation.status === 0 && compatibility.status === 0;
const acceptance = {
  registryVersion: version,
  phase,
  title: `NEXT F Contracts V${version} Software Acceptance`,
  release: { phase, version, status: stable ? "STABLE" : "BLOCKED", previousStableVersion: previousVersion },
  inventory: { softwareSchemas: definitions.length, softwareCapabilities: capabilityIds.length, softwareApiOperations: softwareOps.length, softwareStaffPermissions: staffPermissions.length, softwareCustomerCapabilities: customerCapabilities.length, softwareEvents: softwareEvents.length, adminProfiles: adminProfiles.length },
  immutableReleasePolicy: { changedExistingImmutableRelease: false, preservedVersions: ["1.0.0", "1.1.0", "1.2.0"] },
  launchDecisions: { renewalMode: "customer-initiated", automaticRenewalAccepted: false, featureGatingAccepted: false, paymentAuthority: "Checkout", softwareBusinessAuthority: "Software API" },
  validation: {
    phase40: { exitCode: validation.status, passed: validation.status === 0, output: (validation.stdout + validation.stderr).trim().slice(-1600) },
    softwareStarter: { command: "node bin/nextf-contract.mjs validate starters/software/nextf.site.json --json", exitCode: starterValidation.status, passed: starterValidation.status === 0 },
    compatibility: { command: "node bin/nextf-contract.mjs compatibility starters/software/nextf.site.json --json", exitCode: compatibility.status, passed: compatibility.status === 0 }
  },
  generatedAt: new Date().toISOString()
};
writeJson(`registry/releases/${version}/acceptance-report.json`, acceptance);
writeJson(`registry/releases/${version}/release-manifest.json`, { releaseVersion: version, phase, status: acceptance.release.status, previousStableVersion: previousVersion, registrySha256: sha("registry/registry.json"), snapshots: { index: `registry/releases/${version}/snapshot-index.json`, root: snapshotRoot }, acceptance: { report: `registry/releases/${version}/acceptance-report.json`, conclusion: stable ? "PASS" : "FAIL" }, counts: acceptance.inventory });
const integrityFiles = ["registry/registry.json", "registry/software/index.json", "registry/software/fixtures/valid/launch-catalog.json", "registry/modules/index.json", "registry/api/index.json", "registry/permissions/index.json", "registry/events/index.json", "starters/software/nextf.site.json", `registry/releases/${version}/acceptance-report.json`, `registry/releases/${version}/release-manifest.json`, `registry/releases/${version}/snapshot-index.json`];
const hashes = Object.fromEntries(integrityFiles.map((file) => [file, { sha256: sha(file), bytes: fs.statSync(path.join(root, file)).size }]));
writeJson(`registry/releases/${version}/integrity-hashes.json`, { registryVersion: version, releaseVersion: version, algorithm: "sha256", generatedAt: acceptance.generatedAt, files: hashes });
writeText(`registry/releases/${version}/INTEGRITY.sha256`, Object.entries(hashes).map(([file, value]) => `${value.sha256}  ${file}`).join("\n"));
const finalReleases = priorReleaseIndex.releases.filter((r) => r.version !== version).concat({ version, status: acceptance.release.status, manifest: `registry/releases/${version}/release-manifest.json` }).sort((a, b) => a.version.localeCompare(b.version, undefined, { numeric: true }));
writeJson("registry/releases/index.json", { currentVersion: version, stable, productionAcceptance: `registry/releases/${version}/acceptance-report.json`, releaseManifest: `registry/releases/${version}/release-manifest.json`, snapshotIndex: `registry/releases/${version}/snapshot-index.json`, integrityHashes: `registry/releases/${version}/integrity-hashes.json`, releases: finalReleases });
writeText("js/generated-release.js", `// GENERATED FILE - DO NOT EDIT DIRECTLY.\nexport const GENERATED_RELEASE = ${JSON.stringify({ index: read("registry/releases/index.json"), acceptance, snapshotIndex })};\n`);
run("scripts/sync-browser-validation.mjs");
run("scripts/generate-registry-bootstrap.mjs");

console.log(`Software Registry synchronized for V${version}: ${definitions.length} schemas, ${capabilityIds.length} capabilities, ${softwareOps.length} API operations, ${softwareEvents.length} events.`);
