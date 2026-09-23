import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const version = "1.4.0";
const previousVersion = "1.3.0";
const phase = 41;
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
  let result;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    result = spawnSync(process.execPath, [path.join(root, script), ...args], { cwd: root, encoding: "utf8" });
    if (result.status === 0) return result.stdout.trim();
    if (!String(result.stderr).includes("UNKNOWN: unknown error") || attempt === 4) break;
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 350 * attempt);
  }
  throw new Error(`${script} failed\n${result.stdout}\n${result.stderr}`);
};
const sha = (rel) => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, rel))).digest("hex");
const kebab = (id) => id.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

writeText("VERSION", version);
const pkg = read("package.json");
pkg.version = version;
pkg.scripts.validate = "node scripts/validate-phase-41.mjs";
pkg.scripts["generate:tracking"] = "node scripts/sync-first-party-tracking.mjs";
pkg.scripts["validate:phase41"] = "node scripts/validate-phase-41.mjs";
pkg.scripts["smoke:phase41"] = "node scripts/smoke-phase-41.mjs";
writeJson("package.json", pkg);
const lock = read("package-lock.json");
lock.version = version;
if (lock.packages?.[""]) lock.packages[""].version = version;
writeJson("package-lock.json", lock);

const starterIndex = read("registry/starters/index.json");
starterIndex.registryVersion = version;
writeJson("registry/starters/index.json", starterIndex);

writeText("standards/49-first-party-tracking-platform-standard.md", `# Phase 41 - First-Party Tracking Platform Contract Standard

V1.4.0 extends the existing Phase 9 Marketing and Analytics authority with the operational contracts required by a NEXT F-controlled first-party SDK, collector, analytics reporting surface and tracking-health surface.

## Canonical authority

\`marketing.trackingEvent\` remains the only canonical website tracking observation envelope. Phase 41 composes it in ingestion batches and receipts; it does not create a competing event model. Phase 13 Domain Events remain authoritative completed business facts.

## First-party boundary

NEXT F defines the contracts, SDK protocol, collection protocol, processing semantics, aggregate reporting semantics and health model. No third-party analytics product is required. Optional external destinations remain Phase 10 Integration adapters and never become analytics authority.

## Browser collection

Browser collection uses public Site identity, configured Site origins, payload limits, rate limits, consent evaluation and abuse controls. Public Site identifiers are not secrets. Administrative, server or provider credentials are prohibited in browser code.

## Server collection

Trusted Site servers use the server ingestion operation. Idempotency and stable event IDs prevent retries from increasing counts. A server observation can reference an authoritative business result but cannot create or replace its Domain Event.

## Identity and sessions

Anonymous visitor and session identifiers are random, Site-scoped, retention-bounded and never derived from fingerprinting. They do not cross customer Organizations. Known-subject linking requires explicit policy and never places email, phone, name or authentication tokens in identifiers.

## Consent and privacy

Optional analytics collection evaluates canonical consent before processing. Unknown optional consent is not granted. Raw Form Submissions, credentials, authorization headers, payment-card data, URL secrets and arbitrary personal properties are prohibited. Raw IP addresses are not persistent visitor identifiers.

## Environment isolation

Development, preview and staging observations are isolated from production reporting. Debug mode never bypasses consent, sanitization, tenant scope, rate limits or privacy controls.

## Reliability and performance

Tracking is non-critical application infrastructure. The SDK loads asynchronously, uses bounded queues and retries, and never blocks rendering, navigation, form submission or checkout. Collector unavailability does not make Site functionality fail.

## Reporting and health

Reporting is tenant-scoped, read-only and permission-controlled. Aggregates preserve metric, dimension, attribution, source and freshness semantics. Health responses expose bounded diagnostics and counts, never raw rejected payloads, secrets, other-tenant data or internal infrastructure detail to customers.

## Runtime status

V1.4.0 publishes contracts and compatibility metadata. It does not claim that a production SDK, collector, event store, processor, reporting runtime or customer deployment exists. Runtime availability remains explicit in compatibility and release evidence.
`);

const field = (key, primitive, description, options = {}) => ({
  key,
  required: options.required ?? true,
  nullable: options.nullable ?? false,
  description,
  ...(options.schema ? { schema: options.schema } : { primitive }),
  ...(options.config ? { config: options.config } : {})
});
const definition = (id, name, category, kind, description, fields, options = {}) => ({
  $id: `marketing.${id}`,
  name,
  version,
  status: "stable",
  domain: "marketing",
  category,
  description,
  purpose: options.purpose ?? description,
  marketingModel: {
    kind,
    customerManaged: options.customerManaged ?? false,
    containsPersonalData: options.containsPersonalData ?? false,
    publicEligible: options.publicEligible ?? false,
    supportsRevision: options.supportsRevision ?? false,
    dataSensitivity: options.dataSensitivity ?? "internal"
  },
  fields,
  relationships: options.relationships ?? [],
  validationRules: options.validationRules ?? [],
  cms: {
    label: name,
    icon: "fa-chart-line",
    customerVisible: options.customerVisible ?? false,
    adminVisible: true,
    editorMode: options.editorMode ?? "structured",
    defaultPlacement: "marketing",
    summaryFields: fields.slice(0, 4).map((item) => item.key),
    primaryActions: options.actions ?? ["view"]
  },
  delivery: { publicAllowed: options.publicEligible ?? false, notes: options.deliveryNotes ?? "Delivered only through the declared scoped API projection." },
  futureBindings: { modules: "phase-41", api: "phase-41", permissions: "phase-15", privacy: "phase-30", security: "phase-29" },
  examples: { valid: [], invalid: [] },
  notes: options.notes ?? []
});

const definitions = [
  definition("visitorIdentityPolicy", "Visitor Identity Policy", "identity", "policy", "Site-scoped lifecycle policy for random first-party anonymous visitor identifiers.", [
    field("policyId", "fields.text", "Stable policy ID."),
    field("scope", null, "Owning Organization and Site.", { schema: "core.tenantScope" }),
    field("enabled", "fields.boolean", "Whether anonymous visitor continuity is enabled."),
    field("storageMode", "fields.select", "Approved first-party storage mode.", { config: { options: ["none", "memory", "first-party-cookie", "first-party-storage"] } }),
    field("lifetimeDays", "fields.integer", "Maximum identifier lifetime in days."),
    field("rotationDays", "fields.integer", "Maximum rotation interval in days."),
    field("resetOnConsentWithdrawal", "fields.boolean", "Whether withdrawal clears the identifier."),
    field("crossSiteLinking", "fields.boolean", "Must remain false in V1.4.0.")
  ], { customerManaged: true, supportsRevision: true, containsPersonalData: true, dataSensitivity: "personal", relationships: [{ type: "composes", target: "core.tenantScope", description: "Identity is tenant and Site scoped." }], validationRules: [{ id: "randomOnly", description: "Identifiers are random and never derived from fingerprinting." }, { id: "noCrossCustomerGraph", description: "crossSiteLinking must be false in V1.4.0." }, { id: "consentBound", description: "Optional persistent identity requires applicable consent." }] }),
  definition("sessionPolicy", "Analytics Session Policy", "identity", "policy", "Canonical continuation, expiry and approximation policy for analytics sessions.", [
    field("policyId", "fields.text", "Stable policy ID."),
    field("scope", null, "Owning Organization and Site.", { schema: "core.tenantScope" }),
    field("inactivityTimeoutMinutes", "fields.integer", "Inactivity timeout starting a new session."),
    field("maximumDurationMinutes", "fields.integer", "Maximum bounded session duration."),
    field("newCampaignStartsSession", "fields.boolean", "Whether a new eligible campaign starts a session."),
    field("endMode", "fields.select", "Session end semantics.", { config: { options: ["inactivity-approximation", "explicit-server", "hybrid"] } })
  ], { customerManaged: true, supportsRevision: true, relationships: [{ type: "composes", target: "core.tenantScope", description: "Policy is Site scoped." }, { type: "governs", target: "marketing.sessionContext", description: "Defines session boundary behavior." }], validationRules: [{ id: "notAuthentication", description: "Analytics sessions never authorize application access." }, { id: "bounded", description: "Timeout and maximum duration must be bounded by collector policy." }] }),
  definition("trackingSdkDescriptor", "Tracking SDK Descriptor", "sdk", "compatibility-descriptor", "Machine-readable browser/server SDK protocol and non-blocking behavior contract.", [
    field("sdkId", "fields.text", "Stable SDK identifier."),
    field("sdkVersion", "fields.text", "Exact semantic SDK version."),
    field("envelopeVersion", "fields.text", "Supported tracking envelope version."),
    field("supportedSources", "fields.tag", "Supported browser/server source modes."),
    field("queueLimit", "fields.integer", "Maximum queued events."),
    field("batchLimit", "fields.integer", "Maximum events per request."),
    field("retryLimit", "fields.integer", "Maximum automatic retry count."),
    field("runtimeAvailable", "fields.boolean", "Whether a runtime artifact is actually available."),
    field("artifactReference", "fields.text", "Optional governed artifact reference.", { required: false, nullable: true })
  ], { validationRules: [{ id: "nonBlocking", description: "SDK failure never blocks Site behavior." }, { id: "boundedStorageAndRetry", description: "Queues, storage and retries are bounded." }, { id: "compatibilityExplicit", description: "Contract and collector compatibility is machine-readable and unknown when not proven." }] }),
  definition("trackingCompatibility", "Tracking Compatibility Record", "sdk", "compatibility-record", "Explicit compatibility evidence across Contract, SDK and collector versions.", [
    field("recordId", "fields.text", "Stable compatibility record ID."),
    field("contractVersion", "fields.text", "Exact NEXT F Contract version."),
    field("sdkId", "fields.text", "SDK identifier."),
    field("sdkVersion", "fields.text", "Exact SDK version."),
    field("collectorApiId", "fields.text", "Collector API identifier."),
    field("collectorApiVersion", "fields.text", "Collector API semantic version."),
    field("compatibilityStatus", "fields.select", "Evidence-backed compatibility state.", { config: { options: ["compatible", "incompatible", "unknown", "contract-defined"] } }),
    field("runtimeDeploymentStatus", "fields.select", "Truthful runtime state.", { config: { options: ["not-implemented", "development", "pilot", "production"] } }),
    field("verifiedAt", "fields.dateTime", "Verification timestamp when evidence exists.", { required: false, nullable: true })
  ], { relationships: [{ type: "references", target: "marketing.trackingSdkDescriptor", description: "Resolves the SDK descriptor." }], validationRules: [{ id: "unknownNotGuessed", description: "Missing evidence is represented as unknown." }, { id: "contractNotDeployment", description: "Published contracts do not imply runtime deployment." }] }),
  definition("trackingCollectorPolicy", "Tracking Collector Policy", "collection", "policy", "Limits, origin, validation, consent and abuse rules for first-party ingestion.", [
    field("policyId", "fields.text", "Stable collector policy ID."),
    field("scope", null, "Owning Organization and Site.", { schema: "core.tenantScope" }),
    field("allowedOrigins", "fields.tag", "Exact allowed browser origins."),
    field("maximumRequestBytes", "fields.integer", "Maximum request body bytes."),
    field("maximumEventsPerBatch", "fields.integer", "Maximum events per batch."),
    field("maximumPropertyCount", "fields.integer", "Maximum properties per event."),
    field("acceptedEnvelopeVersions", "fields.tag", "Accepted envelope versions."),
    field("consentEnforcement", "fields.select", "Collector consent behavior.", { config: { options: ["drop", "restrict", "reject"] } }),
    field("rawIpPersistence", "fields.boolean", "Must remain false for analytics storage."),
    field("redirectPolicy", "fields.select", "Collector redirect behavior.", { config: { options: ["never-follow"] } })
  ], { supportsRevision: true, relationships: [{ type: "composes", target: "core.tenantScope", description: "Collector policy is Site scoped." }], validationRules: [{ id: "originRequired", description: "Browser collection requires an exact configured Site origin." }, { id: "noBrowserSecret", description: "Browser collection never relies on confidential credentials." }, { id: "rawIpNotIdentity", description: "Raw IP addresses are not persisted as analytics visitor identity." }] }),
  definition("trackingIngestionBatch", "Tracking Ingestion Batch", "collection", "command", "Bounded single-or-multiple event submission to the first-party collector.", [
    field("batchId", "fields.text", "Client/server generated batch ID."),
    field("siteId", "fields.text", "Declared Site identity validated against route/origin/authentication."),
    field("environment", "fields.select", "Declared environment.", { config: { options: ["development", "preview", "staging", "production"] } }),
    field("sdk", "fields.json", "Bounded SDK ID/version metadata."),
    field("consentStateId", "fields.text", "Applicable consent-state reference.", { required: false, nullable: true }),
    field("events", "fields.json", "One or more canonical marketing.trackingEvent objects."),
    field("sentAt", "fields.dateTime", "Client/server send timestamp.")
  ], { containsPersonalData: true, dataSensitivity: "personal", relationships: [{ type: "composesMany", target: "marketing.trackingEvent", description: "Contains canonical tracking observations." }, { type: "optionallyReferences", target: "marketing.consentState", description: "References applicable consent state." }], validationRules: [{ id: "bounded", description: "Request byte/event/property limits come from collector policy." }, { id: "scopeDerived", description: "Collector validates route, origin or server identity against declared Site/environment." }, { id: "noRawFormPayload", description: "Events never contain whole Form Submissions or arbitrary personal payloads." }] }),
  definition("trackingIngestionItemResult", "Tracking Ingestion Item Result", "collection", "result", "Per-event accepted, duplicate, restricted or rejected collector outcome.", [
    field("eventId", "fields.text", "Submitted event ID."),
    field("status", "fields.select", "Collector disposition.", { config: { options: ["accepted", "duplicate", "restricted", "rejected"] } }),
    field("reasonCode", "fields.select", "Safe bounded outcome reason.", { config: { options: ["none", "consent-denied", "unknown-event", "invalid-schema", "invalid-origin", "invalid-environment", "unsupported-version", "payload-limit", "rate-limited", "prohibited-property", "bot-or-invalid-traffic"] } }),
    field("receivedAt", "fields.dateTime", "Server receipt timestamp."),
    field("processingId", "fields.text", "Opaque processing correlation ID.", { required: false, nullable: true })
  ], { publicEligible: true, deliveryNotes: "Public-safe receipt metadata only; rejected payload values and internal infrastructure are excluded.", validationRules: [{ id: "safeDiagnostics", description: "Results never echo rejected properties or secrets." }, { id: "duplicateNotAcceptedAgain", description: "Duplicate status does not increment analytics counts." }] }),
  definition("trackingIngestionReceipt", "Tracking Ingestion Receipt", "collection", "result", "Batch-level collector receipt with bounded per-event outcomes.", [
    field("receiptId", "fields.text", "Opaque receipt ID."),
    field("batchId", "fields.text", "Submitted batch ID."),
    field("requestId", "fields.text", "Operational request correlation ID."),
    field("receivedAt", "fields.dateTime", "Server receipt timestamp."),
    field("acceptedCount", "fields.integer", "Accepted event count."),
    field("duplicateCount", "fields.integer", "Duplicate event count."),
    field("restrictedCount", "fields.integer", "Consent/policy restricted count."),
    field("rejectedCount", "fields.integer", "Rejected event count."),
    field("results", "fields.json", "Bounded marketing.trackingIngestionItemResult list.")
  ], { publicEligible: true, relationships: [{ type: "composesMany", target: "marketing.trackingIngestionItemResult", description: "Contains per-event dispositions." }], validationRules: [{ id: "countsMatch", description: "Disposition counts match result items." }, { id: "noRawEcho", description: "Receipt never returns submitted property values." }] }),
  definition("invalidTrafficClassification", "Invalid Traffic Classification", "processing", "classification", "Explainable processing classification for bots, monitoring, testing, malformed, duplicate or abusive traffic.", [
    field("classificationId", "fields.text", "Stable classification ID."),
    field("eventId", "fields.text", "Related tracking event ID."),
    field("category", "fields.select", "Invalid-traffic category.", { config: { options: ["known-bot", "monitoring", "internal-test", "development", "malformed", "duplicate", "abusive", "rate-limited", "unknown"] } }),
    field("disposition", "fields.select", "Processing outcome.", { config: { options: ["include", "exclude", "quarantine", "reject"] } }),
    field("ruleId", "fields.text", "Applied rule identifier."),
    field("classifiedAt", "fields.dateTime", "Classification timestamp.")
  ], { validationRules: [{ id: "explainable", description: "Classification records the applied rule and disposition." }, { id: "noSilentDeletion", description: "Exclusion/rejection remains observable through bounded operational counts." }] }),
  definition("analyticsReport", "Analytics Report", "reporting", "derived-report", "Immutable tenant-scoped analytics report over canonical metrics, dimensions and attribution.", [
    field("reportId", "fields.text", "Immutable report ID."),
    field("scope", null, "Owning Organization and Site.", { schema: "core.tenantScope" }),
    field("environment", "fields.select", "Report environment.", { config: { options: ["development", "preview", "staging", "production"] } }),
    field("periodStart", "fields.dateTime", "Inclusive reporting period start."),
    field("periodEnd", "fields.dateTime", "Exclusive reporting period end."),
    field("granularity", "fields.select", "Aggregation granularity.", { config: { options: ["hour", "day", "week", "month"] } }),
    field("metrics", "fields.json", "Canonical metric observations."),
    field("dimensions", "fields.json", "Approved bounded dimensions."),
    field("attributionModelKey", "fields.text", "Attribution model key.", { required: false, nullable: true }),
    field("generatedAt", "fields.dateTime", "Report generation time."),
    field("sourceFreshThrough", "fields.dateTime", "Latest included processed observation time.")
  ], { relationships: [{ type: "composes", target: "core.tenantScope", description: "Report is tenant scoped." }, { type: "composesMany", target: "marketing.analyticsObservation", description: "Report metrics use canonical observations." }, { type: "optionallyReferences", target: "marketing.attributionModel", description: "Attribution is explicit and versioned." }], validationRules: [{ id: "readOnlyDerived", description: "Reports are derived and never directly customer edited." }, { id: "environmentIsolated", description: "Non-production observations never contaminate production reports." }, { id: "boundedDimensions", description: "Dimensions must be approved, privacy-safe and cardinality bounded." }] }),
  definition("trackingHealth", "Tracking Health", "health", "operational-snapshot", "Bounded Site/environment health snapshot for SDK, collector, validation and processing diagnostics.", [
    field("healthId", "fields.text", "Health snapshot ID."),
    field("scope", null, "Owning Organization and Site.", { schema: "core.tenantScope" }),
    field("environment", "fields.select", "Observed environment.", { config: { options: ["development", "preview", "staging", "production"] } }),
    field("sdkDetected", "fields.boolean", "Whether an SDK heartbeat/event was detected."),
    field("sdkVersion", "fields.text", "Last detected SDK version.", { required: false, nullable: true }),
    field("contractVersion", "fields.text", "Last detected Contract version.", { required: false, nullable: true }),
    field("lastEventReceivedAt", "fields.dateTime", "Last accepted/observed event time.", { required: false, nullable: true }),
    field("receivedCount", "fields.integer", "Events received in the bounded window."),
    field("acceptedCount", "fields.integer", "Events accepted in the bounded window."),
    field("rejectedCount", "fields.integer", "Events rejected in the bounded window."),
    field("duplicateCount", "fields.integer", "Duplicates in the bounded window."),
    field("consentRestrictedCount", "fields.integer", "Consent-restricted events in the bounded window."),
    field("schemaErrorCount", "fields.integer", "Schema errors in the bounded window."),
    field("unknownEventCount", "fields.integer", "Unknown event keys in the bounded window."),
    field("collectorStatus", "fields.select", "Collector status.", { config: { options: ["healthy", "degraded", "unavailable", "unknown"] } }),
    field("processingStatus", "fields.select", "Processing status.", { config: { options: ["healthy", "delayed", "blocked", "unknown"] } }),
    field("generatedAt", "fields.dateTime", "Health snapshot generation time.")
  ], { customerVisible: true, relationships: [{ type: "composes", target: "core.tenantScope", description: "Health is Site scoped." }, { type: "references", target: "marketing.trackingCompatibility", description: "Detected versions resolve through compatibility evidence." }], validationRules: [{ id: "boundedDiagnostics", description: "Customer projection contains counts/status only, never raw payloads or infrastructure secrets." }, { id: "notAvailabilityGuarantee", description: "A snapshot is evidence, not an uptime guarantee." }] })
];
for (const item of definitions) writeJson(`registry/marketing/definitions/${kebab(item.$id.slice(10))}.json`, item);

const eventVocabulary = read("registry/marketing/tracking-events.json");
const newEvents = [
  ["navigation.route-changed", "SPA Route Changed", "analytics", "A client-side route transition produced a new visitor-visible view.", false],
  ["engagement.session-engaged", "Session Engaged", "analytics", "A session met the configured engagement threshold.", false],
  ["commerce.product-viewed", "Commerce Product Viewed", "analytics", "A public canonical Product was viewed.", false],
  ["commerce.cart-updated", "Commerce Cart Updated", "analytics", "A visitor-visible cart interaction was observed; it is not inventory or order authority.", false],
  ["commerce.checkout-started", "Commerce Checkout Started", "analytics", "A checkout flow was entered; it is not payment or order-completion evidence.", true]
].map(([key, label, defaultConsentCategory, description, conversionCandidate]) => ({ key, label, defaultConsentCategory, description, conversionCandidate }));
for (const event of newEvents) if (!eventVocabulary.events.some((row) => row.key === event.key)) eventVocabulary.events.push(event);
eventVocabulary.registryVersion = version;
writeJson("registry/marketing/tracking-events.json", eventVocabulary);

writeJson("registry/marketing/sdk-compatibility.json", {
  registryVersion: version,
  records: [{ recordId: "tracking-compatibility-v1-4-contract", contractVersion: version, sdkId: "nextf.tracking-sdk", sdkVersion: "1.0.0", collectorApiId: "api.events.collect-browser-tracking", collectorApiVersion: "1.0.0", compatibilityStatus: "contract-defined", runtimeDeploymentStatus: "not-implemented", verifiedAt: null }],
  note: "This record defines the protocol target and does not claim a published SDK or deployed collector."
});

const fixtures = {
  "browser-page-view.json": { batchId: "batch_browser_001", siteId: "site_example", environment: "production", sdk: { sdkId: "nextf.tracking-sdk", sdkVersion: "1.0.0" }, consentStateId: "consent_001", events: [{ eventId: "evt_page_001", eventKey: "page.viewed", occurredAt: "2026-09-23T10:00:00Z", source: "browser", schemaVersion: "1.0.0", debug: false, properties: {}, context: {} }], sentAt: "2026-09-23T10:00:01Z" },
  "spa-route-change.json": { batchId: "batch_spa_001", siteId: "site_example", environment: "production", sdk: { sdkId: "nextf.tracking-sdk", sdkVersion: "1.0.0" }, consentStateId: "consent_001", events: [{ eventId: "evt_route_001", eventKey: "navigation.route-changed", occurredAt: "2026-09-23T10:01:00Z", source: "browser", schemaVersion: "1.0.0", debug: false, properties: { routeName: "pricing" }, context: {} }], sentAt: "2026-09-23T10:01:01Z" },
  "commerce-observations.json": { batchId: "batch_commerce_001", siteId: "site_store", environment: "production", sdk: { sdkId: "nextf.tracking-sdk", sdkVersion: "1.0.0" }, consentStateId: "consent_002", events: [{ eventId: "evt_product_001", eventKey: "commerce.product-viewed", occurredAt: "2026-09-23T11:00:00Z", source: "browser", schemaVersion: "1.0.0", debug: false, properties: { productId: "product_001" }, context: {} }, { eventId: "evt_checkout_001", eventKey: "commerce.checkout-started", occurredAt: "2026-09-23T11:03:00Z", source: "browser", schemaVersion: "1.0.0", debug: false, properties: { checkoutId: "checkout_001" }, context: {} }], sentAt: "2026-09-23T11:03:01Z", authorityNote: "These observations do not create an Order, Payment, Refund or Inventory fact." },
  "consent-denied-receipt.json": { receiptId: "receipt_denied_001", batchId: "batch_denied_001", requestId: "req_001", receivedAt: "2026-09-23T12:00:00Z", acceptedCount: 0, duplicateCount: 0, restrictedCount: 1, rejectedCount: 0, results: [{ eventId: "evt_denied_001", status: "restricted", reasonCode: "consent-denied", receivedAt: "2026-09-23T12:00:00Z" }] },
  "duplicate-receipt.json": { receiptId: "receipt_duplicate_001", batchId: "batch_retry_001", requestId: "req_002", receivedAt: "2026-09-23T12:05:00Z", acceptedCount: 0, duplicateCount: 1, restrictedCount: 0, rejectedCount: 0, results: [{ eventId: "evt_page_001", status: "duplicate", reasonCode: "none", receivedAt: "2026-09-23T12:05:00Z" }] },
  "staging-batch.json": { batchId: "batch_staging_001", siteId: "site_example", environment: "staging", sdk: { sdkId: "nextf.tracking-sdk", sdkVersion: "1.0.0" }, events: [{ eventId: "evt_staging_001", eventKey: "page.viewed", occurredAt: "2026-09-23T13:00:00Z", source: "browser", schemaVersion: "1.0.0", debug: true, properties: {}, context: {} }], sentAt: "2026-09-23T13:00:01Z", isolationNote: "This batch is excluded from production reporting." },
  "tracking-disabled.json": { identity: { id: "tracking_config_disabled" }, scope: { organizationId: "org_example", siteId: "site_example" }, enabled: false, disabledBehavior: "do-not-initialize-sdk-or-send-optional-observations" },
  "server-form-conversion.json": { batchId: "batch_server_form_001", siteId: "site_lead", environment: "production", sdk: { sdkId: "nextf.tracking-sdk", sdkVersion: "1.0.0" }, consentStateId: "consent_003", events: [{ eventId: "evt_form_accepted_001", eventKey: "form.submitted", occurredAt: "2026-09-23T14:00:00Z", source: "server", schemaVersion: "1.0.0", debug: false, properties: { formId: "form_contact", submissionId: "submission_001" }, context: {} }], sentAt: "2026-09-23T14:00:01Z", minimizationNote: "No raw Form Submission fields are copied into analytics." }
};
for (const [name, value] of Object.entries(fixtures)) writeJson(`registry/marketing/fixtures/valid/${name}`, value);

const analyticsCaps = [
  { capabilityId: "analytics.first-party-collection", name: "First-Party Collection", contracts: ["marketing.trackingCollectorPolicy", "marketing.trackingIngestionBatch", "marketing.trackingIngestionReceipt"] },
  { capabilityId: "analytics.tracking-sdk", name: "Tracking SDK", contracts: ["marketing.trackingSdkDescriptor", "marketing.trackingCompatibility"] },
  { capabilityId: "analytics.tracking-health", name: "Tracking Health", contracts: ["marketing.trackingHealth"] }
];
const modules = read("registry/modules/index.json");
modules.registryVersion = version;
for (const cap of analyticsCaps) {
  const item = { $id: `modules.capability.${cap.capabilityId}`, capabilityId: cap.capabilityId, name: cap.name, version, status: "stable", moduleId: "analytics", mode: "optional", selectable: true, defaultEnabled: false, description: `${cap.name} capability for the NEXT F first-party tracking platform.`, contractBindings: cap.contracts, permissionBindings: cap.capabilityId === "analytics.tracking-health" ? ["marketing.tracking.view"] : [], eventBindings: [], requiresCapabilities: ["analytics.measurement"], requiresModules: ["consent"], cms: { customerVisible: true, adminVisible: true }, manifest: { allowed: true, explicitSelectionRequired: true }, notes: [] };
  writeJson(`registry/modules/capabilities/analytics/${cap.capabilityId.split(".")[1]}.json`, item);
  modules.capabilities = modules.capabilities.filter((row) => row.capabilityId !== cap.capabilityId).concat(item);
}
const analyticsModule = read("registry/modules/definitions/analytics.json");
analyticsModule.version = version;
for (const cap of analyticsCaps) if (!analyticsModule.capabilityIds.includes(cap.capabilityId)) analyticsModule.capabilityIds.push(cap.capabilityId);
for (const id of definitions.map((item) => item.$id)) if (!analyticsModule.contractBindings.includes(id)) analyticsModule.contractBindings.push(id);
writeJson("registry/modules/definitions/analytics.json", analyticsModule);
const marketingModule = read("registry/modules/definitions/marketing.json");
marketingModule.version = version;
for (const id of definitions.map((item) => item.$id)) if (!marketingModule.contractBindings.includes(id)) marketingModule.contractBindings.push(id);
writeJson("registry/modules/definitions/marketing.json", marketingModule);
modules.modules = modules.modules.map((row) => row.moduleId === "analytics" ? analyticsModule : row.moduleId === "marketing" ? marketingModule : row).sort((a, b) => a.moduleId.localeCompare(b.moduleId));
const gamingModule = modules.modules.find((row) => row.moduleId === "gaming");
if (gamingModule) gamingModule.dependencies = gamingModule.dependencies.filter((row) => row.moduleId !== "webhooks");
modules.capabilities.sort((a, b) => a.capabilityId.localeCompare(b.capabilityId));
writeJson("registry/modules/index.json", modules);

const gamingPurchaseField = read("registry/gaming/definitions/purchase-field.json");
for (const relationship of gamingPurchaseField.relationships ?? []) if (relationship.target === "forms.field") relationship.target = "forms.formField";
writeJson("registry/gaming/definitions/purchase-field.json", gamingPurchaseField);

const manifestDef = read("registry/manifests/definitions/tracking-support.json");
manifestDef.version = version;
const manifestFields = [
  ["enabled", "Whether first-party tracking is enabled; absence is interpreted as disabled by V1.4 consumers.", "fields.boolean"],
  ["contractVersion", "Exact tracking envelope/contract version.", "fields.text"],
  ["sdkId", "Compatible SDK identifier.", "fields.text"],
  ["sdkVersion", "Exact compatible SDK version.", "fields.text"],
  ["collectorApiId", "Canonical collector API operation ID.", "fields.text"],
  ["consentMode", "Consent evaluation mode.", "fields.text"],
  ["retentionPolicyRef", "Tracking data/retention policy reference.", "fields.text"],
  ["allowedEventNamespaces", "Approved canonical or namespaced tracking prefixes.", "fields.tag"],
  ["reportingEnabled", "Whether authorized analytics reporting is enabled.", "fields.boolean"]
];
for (const [key, description, primitive] of manifestFields) if (!manifestDef.fields.some((row) => row.key === key)) manifestDef.fields.push({ key, required: false, nullable: true, description, primitive });
manifestDef.relationships.push(...[
  { type: "optionallyReferences", target: "marketing.trackingSdkDescriptor", description: "Resolves SDK identity/version." },
  { type: "optionallyReferences", target: "marketing.trackingCompatibility", description: "Resolves Contract/SDK/collector compatibility." },
  { type: "optionallyReferences", target: "marketing.trackingCollectorPolicy", description: "Collector enforcement remains canonical." }
].filter((rel) => !manifestDef.relationships.some((row) => row.target === rel.target)));
manifestDef.validationRules = manifestDef.validationRules.filter((rule) => rule.id !== "absenceDisablesTracking");
manifestDef.validationRules.push({ id: "absenceDisablesTracking", description: "A V1.4 consumer must not initialize optional tracking when enabled is absent or false." });
writeJson("registry/manifests/definitions/tracking-support.json", manifestDef);
const manifestIndex = read("registry/manifests/index.json");
manifestIndex.registryVersion = version;
manifestIndex.schemas = manifestIndex.schemas.map((row) => row.$id === manifestDef.$id ? manifestDef : row);
writeJson("registry/manifests/index.json", manifestIndex);
const manifestSchema = read("registry/manifests/nextf-site-manifest.schema.json");
Object.assign(manifestSchema.$defs.trackingSupport.properties, {
  enabled: { type: "boolean", default: false },
  contractVersion: { type: "string", pattern: "^\\d+\\.\\d+\\.\\d+$" },
  sdkId: { type: "string", pattern: "^[a-z][a-z0-9.-]*$" },
  sdkVersion: { type: "string", pattern: "^\\d+\\.\\d+\\.\\d+$" },
  collectorApiId: { type: "string", pattern: "^api\\.[a-z0-9-]+\\.[a-z0-9-]+$" },
  consentMode: { enum: ["required", "essential-only", "disabled"] },
  retentionPolicyRef: { type: "string", minLength: 1 },
  allowedEventNamespaces: { type: "array", uniqueItems: true, items: { type: "string", pattern: "^[a-z][a-z0-9-]*$" } },
  reportingEnabled: { type: "boolean", default: false }
});
writeJson("registry/manifests/nextf-site-manifest.schema.json", manifestSchema);

const api = read("registry/api/index.json");
api.registryVersion = version;
const op = (groupId, suffix, name, method, route, auth, permissions, bodyContract, dataContract, options = {}) => ({
  $id: `${groupId}.${suffix}`, operationId: `${groupId}.${suffix}`, name, version: "1.0.0", status: "stable", groupId, method, path: route,
  description: options.description ?? name,
  authentication: { mode: auth, permissions, permissionMode: "all", scope: "site" },
  request: { pathParameters: ["siteId"], query: options.query ?? [], headers: ["X-Request-Id?", "X-NEXTF-Contract-Version?", ...(options.idempotent ? ["Idempotency-Key"] : [])], bodyContract, bodyProjection: null },
  response: { successStatus: options.successStatus ?? 200, envelope: "api.successEnvelope", dataContract, errorEnvelope: "api.errorEnvelope", errors: options.errors ?? ["bad_request", "api_version_unsupported", "contract_version_unsupported", "validation_failed", "rate_limited", "module_disabled"], projection: options.projection ?? "workspace-authorized" },
  policies: { idempotency: { required: !!options.idempotent, header: options.idempotent ? "Idempotency-Key" : null }, concurrency: { required: false, requestHeader: null, responseHeader: null }, cache: "no-store", rateLimit: options.rateLimit ?? "authenticated-read", cors: options.cors ?? "server-only" },
  moduleBindings: ["core", "consent", "analytics", "marketing"],
  contractBindings: [bodyContract, dataContract].filter(Boolean), eventBindings: [], publicSurface: !!options.publicSurface, privacy: options.privacy ?? "internal", notes: options.notes ?? []
});
const operations = [
  op("api.events", "collect-browser-tracking", "Collect Browser Tracking Batch", "POST", "/tracking/browser", "anonymous", [], "marketing.trackingIngestionBatch", "marketing.trackingIngestionReceipt", { idempotent: true, rateLimit: "public-write", cors: "site-origin", publicSurface: true, privacy: "personal", successStatus: 202, errors: ["bad_request", "api_version_unsupported", "contract_version_unsupported", "validation_failed", "payload_too_large", "rate_limited", "module_disabled", "tenant_scope_mismatch"], notes: ["Configured Site origins, payload limits, consent and abuse controls apply; CORS is not authorization.", "No browser secret is accepted or required."] }),
  op("api.events", "ingest-tracking-batch", "Ingest Server Tracking Batch", "POST", "/tracking/batch", "site-server", [], "marketing.trackingIngestionBatch", "marketing.trackingIngestionReceipt", { idempotent: true, rateLimit: "server-to-server", cors: "server-only", privacy: "personal", successStatus: 202, notes: ["Cannot create authoritative Phase 13 Domain Events."] }),
  op("api.customer-cms", "get-analytics-report", "Get Analytics Report", "GET", "/analytics/report", "organization-user", ["marketing.analytics.view"], null, "marketing.analyticsReport", { query: ["environment?", "periodStart", "periodEnd", "granularity?", "metrics?", "dimensions?"], cors: "customer-portal", privacy: "internal" }),
  op("api.customer-cms", "get-tracking-health", "Get Tracking Health", "GET", "/analytics/tracking-health", "organization-user", ["marketing.tracking.view"], null, "marketing.trackingHealth", { query: ["environment?"], cors: "customer-portal", privacy: "internal", notes: ["Customer-safe counts and statuses only; raw rejected payloads and infrastructure details are excluded."] }),
  op("api.nextf-admin", "get-analytics-report", "Get Site Analytics Report", "GET", "/sites/{siteId}/analytics/report", "nextf-admin", ["marketing.analytics.view"], null, "marketing.analyticsReport", { query: ["environment?", "periodStart", "periodEnd", "granularity?", "metrics?", "dimensions?"], cors: "admin-portal", privacy: "internal" }),
  op("api.nextf-admin", "get-tracking-health", "Get Site Tracking Health", "GET", "/sites/{siteId}/analytics/tracking-health", "nextf-admin", ["platform.diagnostics.view"], null, "marketing.trackingHealth", { query: ["environment?"], cors: "admin-portal", privacy: "internal" })
];
for (const operation of operations) {
  const dir = operation.groupId.slice(4);
  const name = operation.operationId.split(".").at(-1);
  writeJson(`registry/api/operations/${dir}/${name}.json`, operation);
  api.operations = api.operations.filter((row) => row.operationId !== operation.operationId).concat(operation);
  const group = api.groups.find((row) => row.apiId === operation.groupId);
  if (!group.operationIds.includes(operation.operationId)) group.operationIds.push(operation.operationId);
  writeJson(`registry/api/groups/${dir}.json`, group);
}
api.groups.sort((a, b) => a.apiId.localeCompare(b.apiId));
api.operations.sort((a, b) => a.operationId.localeCompare(b.operationId));
writeJson("registry/api/index.json", api);

const privacy = read("registry/privacy/field-handling.json");
privacy.registryVersion = version;
const handling = [
  ["PRIV-FLD-090", "marketing.trackingIngestionBatch", "fields.events", "personal", ["tracking"], "Accept only contract-valid, consent-eligible, minimized tracking observations.", "prohibited", "prohibited", "prohibited", "prohibited", "conditional", "operational", "restricted", "multiple", "anonymize", "partial", ["SEC-TENANT-001", "SEC-IN-001"]],
  ["PRIV-FLD-091", "marketing.trackingIngestionBatch", "fields.consentStateId", "personal", ["tracking"], "Reference the applicable consent evidence without copying private consent payloads.", "prohibited", "redacted-only", "prohibited", "prohibited", "conditional", "operational", "restricted", "multiple", "anonymize", "pseudonymize", ["SEC-TENANT-001"]],
  ["PRIV-FLD-092", "marketing.visitorIdentityPolicy", "fields.scope", "internal", ["tracking", "system-metadata"], "Enforce Organization and Site isolation for anonymous identity.", "prohibited", "allowed", "conditional", "conditional", "conditional", "operational", "normal", "analytics", "retain-per-policy", "none", ["SEC-TENANT-001"]],
  ["PRIV-FLD-093", "marketing.trackingIngestionReceipt", "fields.results", "internal", ["tracking", "system-metadata"], "Return bounded dispositions without echoing payload values.", "true", "allowed", "prohibited", "prohibited", "prohibited", "operational", "normal", "none", "retain-per-policy", "none", ["SEC-ERR-001", "SEC-LOG-001"]],
  ["PRIV-FLD-094", "marketing.invalidTrafficClassification", "fields.category", "internal", ["tracking", "system-metadata"], "Explain invalid-traffic handling without persistent raw network identity.", "prohibited", "allowed", "prohibited", "prohibited", "conditional", "operational", "normal", "none", "retain-per-policy", "none", ["SEC-RATE-001", "SEC-LOG-001"]],
  ["PRIV-FLD-095", "marketing.trackingHealth", "fields.scope", "internal", ["tracking", "system-metadata"], "Scope health evidence to the authorized Organization and Site.", "prohibited", "allowed", "prohibited", "prohibited", "prohibited", "operational", "normal", "none", "retain-per-policy", "none", ["SEC-TENANT-001"]],
  ["PRIV-FLD-096", "marketing.analyticsReport", "fields.dimensions", "internal", ["tracking"], "Expose only approved, bounded, aggregate reporting dimensions.", "prohibited", "redacted-only", "prohibited", "prohibited", "conditional", "operational", "restricted", "analytics", "retain-per-policy", "partial", ["SEC-TENANT-001"]]
].map(([handlingId, targetId, fieldPath, classification, qualifiers, purpose, publicDeliveryEligibleRaw, logEligibility, eventEligibility, webhookEligibility, analyticsEligibility, retentionClass, exportSensitivity, consentRelevance, deletionBehavior, redactionBehavior, relatedSecurityControls]) => ({ handlingId, targetId, fieldPath, classification, qualifiers, purpose, publicDeliveryEligible: publicDeliveryEligibleRaw === "true", logEligibility, eventEligibility, webhookEligibility, analyticsEligibility, retentionClass, exportSensitivity, consentRelevance, deletionBehavior, redactionBehavior, relatedSecurityControls, status: "stable", version }));
privacy.entries = privacy.entries.filter((row) => !handling.some((item) => item.handlingId === row.handlingId)).concat(handling).sort((a, b) => a.handlingId.localeCompare(b.handlingId));
writeJson("registry/privacy/field-handling.json", privacy);
const coverage = read("registry/privacy/coverage.json");
coverage.registryVersion = version;
const marketingCoverage = coverage.areas.find((row) => row.area === "marketing");
for (const id of definitions.map((item) => item.$id)) if (!marketingCoverage.targetRegistryIds.includes(id)) marketingCoverage.targetRegistryIds.push(id);
for (const item of handling) if (!marketingCoverage.fieldHandlingIds.includes(item.handlingId)) marketingCoverage.fieldHandlingIds.push(item.handlingId);
writeJson("registry/privacy/coverage.json", coverage);

for (const [indexPath, filePaths, mutate] of [
  ["registry/cms-ui/index.json", ["registry/cms-ui/profiles/marketing-analytics.json", "registry/cms-ui/profiles/marketing-tracking.json"], (p) => { if (p.resource === "marketing.analytics" && !p.targetContracts.includes("marketing.analyticsReport")) p.targetContracts.push("marketing.analyticsReport"); if (p.resource === "marketing.tracking" && !p.targetContracts.includes("marketing.trackingHealth")) p.targetContracts.push("marketing.trackingHealth"); }],
  ["registry/admin-ui/index.json", ["registry/admin-ui/profiles/marketing-analytics.json", "registry/admin-ui/profiles/marketing-tracking.json"], (p) => { if (p.resource === "marketing.analytics" && !p.targetContracts.includes("marketing.analyticsReport")) p.targetContracts.push("marketing.analyticsReport"); if (p.resource === "marketing.tracking" && !p.targetContracts.includes("marketing.trackingHealth")) p.targetContracts.push("marketing.trackingHealth"); }]
]) {
  const index = read(indexPath); index.registryVersion = version;
  for (const rel of filePaths) { const profile = read(rel); profile.version = version; mutate(profile); writeJson(rel, profile); index.profiles = index.profiles.map((row) => row.$id === profile.$id ? profile : row); }
  writeJson(indexPath, index);
}

const gamingAccess = [
  ["catalog", "gaming.catalog"],
  ["orders", "gaming.digital-fulfillment"],
  ["suppliers", "gaming.supplier-routing"],
  ["finance", "gaming.dynamic-pricing"]
];
const cmsIndexForGaming = read("registry/cms-ui/index.json");
const adminIndexForGaming = read("registry/admin-ui/index.json");
const gamingPolicies = [];
for (const [suffix, capabilityRef] of gamingAccess) {
  const cmsId = `cmsUi.profile.gaming.${suffix}`, adminId = `adminUi.profile.gaming.${suffix}`, policyId = `customerAccess.policy.gaming.${suffix}`;
  const cmsProfile = cmsIndexForGaming.profiles.find((row) => row.$id === cmsId);
  const adminProfile = adminIndexForGaming.profiles.find((row) => row.$id === adminId);
  if (!cmsProfile || !adminProfile) continue;
  cmsProfile.customerAccessPolicyRef = policyId;
  cmsProfile.effectiveCustomerAccess = { policyVersion: "1.1.0", mode: "hidden", publishingMode: "not_applicable", actions: Object.fromEntries(["read", "create", "update", "delete", "submit_for_review", "publish", "unpublish", "restore_version"].map((key) => [key, "deny"])), permissionRefs: Object.fromEntries(["read", "create", "update", "delete", "submit_for_review", "publish", "unpublish", "restore_version"].map((key) => [key, []])), capabilityRefs: [capabilityRef], demoMode: "disabled", approvalRequired: false, hiddenFromCustomerDiscovery: true, unavailableReason: "Customer-safe Gaming APIs and action policy are not published." };
  adminProfile.customerAccessPolicyRef = policyId;
  writeJson(`registry/cms-ui/profiles/gaming-${suffix}.json`, cmsProfile);
  writeJson(`registry/admin-ui/profiles/gaming-${suffix}-admin.json`, adminProfile);
  const actionKeys = ["read", "create", "update", "delete", "submit_for_review", "publish", "unpublish", "restore_version"];
  const policy = {
    $id: policyId, name: `Gaming ${suffix.charAt(0).toUpperCase()}${suffix.slice(1)} Customer Access Policy`, type: "customer-access-policy", version: "1.1.0", status: "stable",
    resourceRef: `gaming.${suffix}`, contractRefs: cmsProfile.targetContracts, moduleRef: "gaming", capabilityRefs: [capabilityRef], customerMode: "hidden",
    actions: Object.fromEntries(actionKeys.map((key) => [key, "deny"])), publishingPolicy: { mode: "not_applicable" }, permissionRefs: Object.fromEntries(actionKeys.map((key) => [key, []])),
    fieldRules: (cmsProfile.fieldBindings ?? []).map((binding) => ({ fieldRef: `${cmsId}#${binding.field}`, field: binding.field, contractFieldRef: `${cmsProfile.primaryTargetContract}.${binding.field}`, mode: "hidden" })),
    demoPolicy: { mode: "disabled", productionWrites: false }, apiOperationRefs: [], eventRefs: [],
    relationships: { customerCmsProfileRef: cmsId, adminProfileRef: adminId, approvalContractRef: null },
    notes: ["Fail-closed baseline: Gaming Customer CMS access remains hidden until canonical customer-safe APIs and action policy are published."]
  };
  gamingPolicies.push(policy);
  writeJson(`registry/customer-access/policies/gaming--${suffix}.json`, policy);
}
writeJson("registry/cms-ui/index.json", cmsIndexForGaming);
writeJson("registry/admin-ui/index.json", adminIndexForGaming);
const customerAccessIndex = read("registry/customer-access/index.json");
customerAccessIndex.registryVersion = version;
customerAccessIndex.policies = customerAccessIndex.policies.filter((row) => !gamingPolicies.some((policy) => policy.$id === row.$id)).concat(gamingPolicies).sort((a, b) => a.$id.localeCompare(b.$id));
customerAccessIndex.policyCount = customerAccessIndex.policies.length;
customerAccessIndex.stablePolicyCount = customerAccessIndex.policies.filter((row) => row.status === "stable").length;
customerAccessIndex.modes = Object.fromEntries(["hidden", "read_only", "direct_edit", "approval_required"].map((mode) => [mode, customerAccessIndex.policies.filter((row) => row.customerMode === mode).length]));
writeJson("registry/customer-access/index.json", customerAccessIndex);

let registry = read("registry/registry.json");
registry.registryVersion = version;
registry.items = registry.items.filter((item) => item.managedBy !== "tracking-phase41");
registry.items.push({ id: "marketing.firstPartyTrackingPlatformStandard", name: "First-Party Tracking Platform Contract Standard", domain: "marketing", type: "standard", version, status: "stable", description: "Phase 41 SDK, collection, identity, session, reporting, health, privacy and runtime-status boundaries.", source: "standards/49-first-party-tracking-platform-standard.md", phase, introducedIn: version, tags: ["first-party", "tracking", "sdk", "collector", "analytics"], relationships: [{ type: "implements", target: "marketing.marketingTrackingContractStandard", description: "Operationalizes the existing Marketing and Tracking authority." }], permissions: [], events: [], managedBy: "tracking-phase41" });
registry.items.push({ id: "marketing.trackingSdkCompatibilityRegistry", name: "Tracking SDK Compatibility Registry", domain: "marketing", type: "machine-registry", version, status: "stable", description: "Machine-readable Contract, SDK and collector compatibility evidence.", source: "registry/marketing/sdk-compatibility.json", phase, introducedIn: version, tags: ["tracking", "sdk", "compatibility"], relationships: [{ type: "uses", target: "marketing.trackingCompatibility", description: "Records conform to the compatibility contract." }], permissions: [], events: [], managedBy: "tracking-phase41" });
for (const operation of operations) registry.items.push({ id: operation.operationId, name: operation.name, domain: "api", type: "api-operation", version: operation.version, status: operation.status, description: operation.description, source: `registry/api/operations/${operation.groupId.slice(4)}/${operation.operationId.split(".").at(-1)}.json`, phase, introducedIn: version, tags: ["api-operation", "tracking", operation.method, operation.authentication.mode], relationships: operation.contractBindings.map((target) => ({ type: "uses", target, description: "Operation uses this contract." })), permissions: operation.authentication.permissions, events: [], managedBy: "tracking-phase41" });
for (const policy of gamingPolicies) registry.items.push({ id: policy.$id, name: policy.name, domain: "customer-access", type: "customer-access-policy", version: policy.version, status: policy.status, description: policy.notes[0], source: `registry/customer-access/policies/gaming--${policy.resourceRef.split(".")[1]}.json`, phase, introducedIn: version, tags: ["customer-access", "gaming", "fail-closed"], relationships: [{ type: "uses", target: policy.relationships.customerCmsProfileRef, description: "Governs the Customer CMS profile." }, { type: "uses", target: policy.relationships.adminProfileRef, description: "Linked Admin profile." }], permissions: [], events: [], managedBy: "tracking-phase41" });
registry.items.sort((a, b) => a.id.localeCompare(b.id));
writeJson("registry/registry.json", registry);

for (const rel of ["registry/domains.json", "registry/types.json", "registry/statuses.json", "registry/registry-meta.json"]) { const data = read(rel); data.registryVersion = version; writeJson(rel, data); }

const releaseRecord = {
  version, title: "First-Party Tracking Platform Contracts", releaseStatus: "published-stable", releaseDate: "2026-09-23", phase,
  summary: "Extends canonical Marketing and Analytics contracts with first-party SDK/collector, browser and server ingestion, identity/session policies, reporting, tracking health, privacy handling, Manifest declarations and validation while preserving Tracking Observation and Domain Event separation.",
  recordCompleteness: "complete", incompletenessReason: null,
  provenance: { exactRegistrySnapshotAvailable: true, source: "NEXT F First-Party Tracking Platform Full Plan and Phase 41 gap audit" },
  evidence: { evidenceLevel: "authoritative", diffAvailable: true, diffRoute: "#/lifecycle/diff?from=1.3.0&to=1.4.0", compatibilityRoute: "#/lifecycle/compatibility", migrationRoute: "developer/FIRST-PARTY-TRACKING-IMPLEMENTATION-PLAN.md" },
  support: { supportLevel: "stable", compatibilityStatus: "compatible-additive", registryProductionStable: true },
  affected: { domains: ["marketing", "api", "manifest", "modules", "privacy", "cms-ui", "admin-ui"], modules: ["analytics", "marketing", "consent"], contracts: definitions.map((item) => item.$id), events: [], permissions: ["marketing.analytics.view", "marketing.tracking.view", "platform.diagnostics.view"], webhooks: [], apis: operations.map((item) => item.operationId), manifests: ["manifest.trackingSupport"], cmsMetadata: ["cmsUi.profile.marketing.analytics", "cmsUi.profile.marketing.tracking"], adminMetadata: ["adminUi.profile.marketing.analytics", "adminUi.profile.marketing.tracking"] },
  changes: [
    { entryId: "phase41-tracking-foundation", title: "First-party tracking operational contracts", category: "feature", changeType: "added", summary: "Adds SDK/collector compatibility, identity/session policies, batch/receipt semantics, invalid-traffic classification, reporting and tracking health while reusing marketing.trackingEvent.", affectedRegistryIds: definitions.map((item) => item.$id), affectedDomains: ["marketing"], affectedModules: ["analytics", "marketing"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "standards/49-first-party-tracking-platform-standard.md" },
    { entryId: "phase41-tracking-api-manifest", title: "First-party tracking APIs and Manifest declarations", category: "feature", changeType: "added", summary: "Adds browser/server ingestion, reporting and health operations plus additive Site Manifest SDK/collector declarations.", affectedRegistryIds: [...operations.map((item) => item.operationId), "manifest.trackingSupport"], affectedDomains: ["api", "manifest"], affectedModules: ["analytics", "marketing"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "registry/api/index.json" },
    { entryId: "phase41-tracking-privacy-validation", title: "Tracking privacy and validation evidence", category: "security", changeType: "added", summary: "Adds field-level privacy handling, consent and environment-isolation fixtures, SDK compatibility truth and Phase 41 validation.", affectedRegistryIds: handling.map((item) => item.handlingId), affectedDomains: ["privacy", "developer"], affectedModules: ["analytics"], impact: { compatibilityClassification: "backward-compatible", actionRequired: false }, sourceReference: "registry/privacy/field-handling.json" }
  ]
};
writeJson(`registry/changelog/releases/${version}.json`, releaseRecord);

let readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
readme = readme.replace(/Current stable Contract Registry version: \*\*V[^*]+\*\*/, `Current stable Contract Registry version: **V${version}**`);
if (!readme.includes("## Phase 41 - First-Party Tracking Platform Contracts")) readme = readme.replace("## Phase 40 - Software Canonical Contracts", `## Phase 41 - First-Party Tracking Platform Contracts\n\nV1.4.0 adds first-party SDK/collector protocol contracts, browser and server ingestion, Site-scoped identity/session policies, reporting, tracking health, Manifest declarations, privacy mappings, examples and validation. It reuses \`marketing.trackingEvent\` and does not claim that a production runtime is deployed.\n\nRun \`npm run generate:tracking\`, \`npm run validate:phase41\`, \`npm run smoke:phase41\`, \`npm run audit:performance\` and \`npm run validate:regression\`.\n\n## Phase 40 - Software Canonical Contracts`);
writeText("README.md", readme);
let agents = fs.readFileSync(path.join(root, "AGENTS.md"), "utf8");
if (!agents.includes("## Phase 41 first-party tracking rules")) agents += `\n\n## Phase 41 first-party tracking rules\n\n- Reuse \`marketing.trackingEvent\`; never create a parallel observation envelope.\n- Browser collection uses public Site identity plus exact origin, rate, payload, consent and abuse controls; never expose a collector secret.\n- Tracking Observations never assert authoritative Orders, Payments, Refunds, Leads or other Domain Events.\n- Anonymous visitor/session IDs are random, Site-scoped and never fingerprints or cross-customer identity.\n- Keep non-production observations isolated from production reporting.\n- Tracking failures never block rendering, navigation, forms or checkout.\n- Customer health/reporting surfaces expose bounded authorized aggregates, not raw payloads or infrastructure secrets.\n- Resolve Contract/SDK/collector compatibility explicitly and report unknown/runtime-not-implemented truthfully.\n`;
writeText("AGENTS.md", agents);

const regressionPath = path.join(root, "scripts/validate-current-regression.mjs");
let regression = fs.readFileSync(regressionPath, "utf8");
regression = regression.replace(/\/\/ Phase 40 is current[^\n]*\nrun\('Phase 40 validator','scripts\/validate-phase-40\.mjs'\);/, "// Phase 41 is current. Earlier phase scripts remain frozen release-time evidence for previous stable releases.\nrun('Phase 41 validator','scripts/validate-phase-41.mjs');");
regression = regression.replace(/const smokePhases=\[[^\]]+\];/, "const smokePhases=[23,24,25,26,27,29,41];");
writeText("scripts/validate-current-regression.mjs", regression);

let notFound = fs.readFileSync(path.join(root, "404.html"), "utf8");
notFound = notFound.replace(/NEXT F Contracts v\d+\.\d+\.\d+\./, `NEXT F Contracts v${version}.`);
writeText("404.html", notFound);

let portalIndex = fs.readFileSync(path.join(root, "index.html"), "utf8");
portalIndex = portalIndex.replaceAll("v1.3.0", `v${version}`).replaceAll("Phase 40", `Phase ${phase}`);
writeText("index.html", portalIndex);

let portalPages = fs.readFileSync(path.join(root, "js/pages.js"), "utf8");
portalPages = portalPages.replaceAll("v1.3.0", `v${version}`).replaceAll("V1.3.0", `V${version}`);
writeText("js/pages.js", portalPages);

run("scripts/sync-marketing-registry.mjs");
run("scripts/sync-site-manifest-registry.mjs");
run("scripts/sync-api-registry.mjs");
run("scripts/sync-modules-registry.mjs");
run("scripts/sync-cms-ui-registry.mjs");
run("scripts/sync-admin-ui-registry.mjs");
run("scripts/sync-changelog-registry.mjs");
// Privacy generation is run as an explicit release step because Windows file indexing can
// transiently lock its many vocabulary files during the larger orchestration pass.
registry = read("registry/registry.json");
for (const item of registry.items) for (const relationship of item.relationships ?? []) if (item.id === "gaming.purchaseField" && relationship.target === "forms.field") relationship.target = "forms.formField";
for (const moduleId of ["gaming", "software"]) {
  if (!registry.items.some((item) => item.id === `modules.${moduleId}`)) {
    const moduleDefinition = modules.modules.find((item) => item.moduleId === moduleId);
    registry.items.push({ id: `modules.${moduleId}`, name: moduleDefinition.name, domain: "modules", type: "module", version: moduleDefinition.version, status: moduleDefinition.status, description: moduleDefinition.description, source: "registry/modules/index.json", phase: moduleId === "gaming" ? 39 : 40, introducedIn: moduleDefinition.version, tags: ["module", moduleId], relationships: [], permissions: moduleDefinition.permissionBindings ?? [], events: moduleDefinition.eventBindings ?? [], managedBy: "tracking-phase41" });
  }
}
const uniqueRegistryItems = new Map();
for (const item of registry.items) uniqueRegistryItems.set(item.id, item);
registry.items = [...uniqueRegistryItems.values()].sort((a, b) => a.id.localeCompare(b.id));
writeJson("registry/registry.json", registry);
run("scripts/sync-global-search.mjs");
run("scripts/sync-relationships-registry.mjs");

registry = read("registry/registry.json");
const snapshotRoot = `registry/releases/${version}/snapshots`;
const snapshotFiles = {
  "registry.json": "registry/registry.json",
  "marketing.json": "registry/marketing/index.json",
  "tracking-sdk-compatibility.json": "registry/marketing/sdk-compatibility.json",
  "modules.json": "registry/modules/index.json",
  "api-contracts.json": "registry/api/index.json",
  "permissions.json": "registry/permissions/index.json",
  "events.json": "registry/events/index.json",
  "privacy.json": "registry/privacy/index.json",
  "site-manifest.schema.json": "registry/manifests/nextf-site-manifest.schema.json",
  "search.json": "registry/search/search-index.json",
  "relationships.json": "registry/relationships/relationship-index.json"
};
for (const [name, rel] of Object.entries(snapshotFiles)) writeJson(`${snapshotRoot}/${name}`, read(rel));
const snapshotIndex = { registryVersion: version, releaseVersion: version, phase, title: `NEXT F Contracts V${version} Snapshot Index`, frozenAt: new Date().toISOString(), previousStableVersion: previousVersion, snapshots: Object.keys(snapshotFiles).sort().map((file) => ({ path: `${snapshotRoot}/${file}`, sha256: sha(`${snapshotRoot}/${file}`), bytes: fs.statSync(path.join(root, `${snapshotRoot}/${file}`)).size })) };
writeJson(`registry/releases/${version}/snapshot-index.json`, snapshotIndex);
const oldReleaseIndex = read("registry/releases/index.json");
const releaseRows = oldReleaseIndex.releases.filter((row) => row.version !== version).concat({ version, status: "CANDIDATE", manifest: `registry/releases/${version}/release-manifest.json` }).sort((a, b) => a.version.localeCompare(b.version, undefined, { numeric: true }));
writeJson("registry/releases/index.json", { currentVersion: version, stable: false, productionAcceptance: `registry/releases/${version}/acceptance-report.json`, releaseManifest: `registry/releases/${version}/release-manifest.json`, snapshotIndex: `registry/releases/${version}/snapshot-index.json`, integrityHashes: `registry/releases/${version}/integrity-hashes.json`, releases: releaseRows });
run("scripts/sync-browser-validation.mjs");

const validation = spawnSync(process.execPath, [path.join(root, "scripts/validate-phase-41.mjs")], { cwd: root, encoding: "utf8" });
const stable = validation.status === 0;
const acceptance = { registryVersion: version, phase, title: `NEXT F Contracts V${version} First-Party Tracking Acceptance`, release: { phase, version, status: stable ? "STABLE" : "BLOCKED", previousStableVersion: previousVersion }, inventory: { trackingSchemas: definitions.length, trackingEvents: eventVocabulary.events.length, analyticsCapabilitiesAdded: analyticsCaps.length, trackingApiOperations: operations.length, privacyHandlingRecordsAdded: handling.length, referenceFixtures: Object.keys(fixtures).length }, immutableReleasePolicy: { changedExistingImmutableRelease: false, preservedVersions: ["1.0.0", "1.1.0", "1.2.0", "1.3.0"] }, runtimeStatus: { sdk: "not-implemented", collector: "not-implemented", reporting: "not-implemented", productionDeploymentClaimed: false }, validation: { phase41: { exitCode: validation.status, passed: stable, output: (validation.stdout + validation.stderr).trim().slice(-2000) } }, generatedAt: new Date().toISOString() };
writeJson(`registry/releases/${version}/acceptance-report.json`, acceptance);
writeJson(`registry/releases/${version}/release-manifest.json`, { releaseVersion: version, phase, status: acceptance.release.status, previousStableVersion: previousVersion, registrySha256: sha("registry/registry.json"), snapshots: { index: `registry/releases/${version}/snapshot-index.json`, root: snapshotRoot }, acceptance: { report: `registry/releases/${version}/acceptance-report.json`, conclusion: stable ? "PASS" : "FAIL" }, counts: acceptance.inventory });
const integrityFiles = ["registry/registry.json", "registry/marketing/index.json", "registry/marketing/sdk-compatibility.json", "registry/modules/index.json", "registry/api/index.json", "registry/privacy/index.json", `registry/releases/${version}/acceptance-report.json`, `registry/releases/${version}/release-manifest.json`, `registry/releases/${version}/snapshot-index.json`];
const hashes = Object.fromEntries(integrityFiles.map((file) => [file, { sha256: sha(file), bytes: fs.statSync(path.join(root, file)).size }]));
writeJson(`registry/releases/${version}/integrity-hashes.json`, { registryVersion: version, releaseVersion: version, algorithm: "sha256", generatedAt: acceptance.generatedAt, files: hashes });
writeText(`registry/releases/${version}/INTEGRITY.sha256`, Object.entries(hashes).map(([file, value]) => `${value.sha256}  ${file}`).join("\n"));
const finalRows = oldReleaseIndex.releases.filter((row) => row.version !== version).concat({ version, status: acceptance.release.status, manifest: `registry/releases/${version}/release-manifest.json` }).sort((a, b) => a.version.localeCompare(b.version, undefined, { numeric: true }));
writeJson("registry/releases/index.json", { currentVersion: version, stable, productionAcceptance: `registry/releases/${version}/acceptance-report.json`, releaseManifest: `registry/releases/${version}/release-manifest.json`, snapshotIndex: `registry/releases/${version}/snapshot-index.json`, integrityHashes: `registry/releases/${version}/integrity-hashes.json`, releases: finalRows });
writeText("js/generated-release.js", `// GENERATED FILE - DO NOT EDIT DIRECTLY.\nexport const GENERATED_RELEASE = ${JSON.stringify({ index: read("registry/releases/index.json"), acceptance, snapshotIndex })};\n`);
run("scripts/sync-contract-diff.mjs");
run("scripts/sync-compatibility-center.mjs");
run("scripts/sync-browser-validation.mjs");
run("scripts/generate-registry-bootstrap.mjs");
console.log(`First-party tracking synchronized for V${version}: ${definitions.length} schemas, ${operations.length} API operations, ${analyticsCaps.length} capabilities.`);
