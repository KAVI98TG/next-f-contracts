import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(process.cwd());
const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");
const json = (rel) => JSON.parse(read(rel));
const version = read("VERSION").trim();
const failures = [];
const passes = [];
const check = (name, condition, detail = "") => condition ? passes.push(name) : failures.push(`${name}${detail ? `: ${detail}` : ""}`);

check("Version is 0.10.0", version === "0.10.0", version);

const index = json("registry/marketing/index.json");
const schemas = index.schemas;
const vocabulary = json("registry/marketing/tracking-events.json");
const registry = json("registry/registry.json");
const fields = json("registry/fields/index.json");
const core = json("registry/core/index.json");
const content = json("registry/content/index.json");
const blocks = json("registry/blocks/index.json");
const seo = json("registry/seo/index.json");
const forms = json("registry/forms/index.json");
const categories = json("registry/marketing/categories.json");
const domains = json("registry/domains.json");
const acceptance = json("checks/phase-9-acceptance.json");

check("Marketing registry version matches", index.registryVersion === version, index.registryVersion);
check("Tracking vocabulary version matches", vocabulary.registryVersion === version, vocabulary.registryVersion);
check("Exactly 43 Marketing contracts", schemas.length === 43, schemas.length);
check("Marketing definition count matches", index.definitionCount === schemas.length, index.definitionCount);
check("Exactly 13 standard tracking event keys", vocabulary.events.length === 13, vocabulary.events.length);
check("Marketing index tracking event count matches", index.trackingEventCount === vocabulary.events.length, index.trackingEventCount);

const ids = schemas.map((schema) => schema.$id);
check("Marketing IDs are unique", ids.length === new Set(ids).size);
check("Marketing IDs are canonical", ids.every((id) => /^marketing\.[a-z][A-Za-z0-9]*$/.test(id)));
check("All Marketing contracts are stable", schemas.every((schema) => schema.status === "stable"));
check("All Marketing contracts use V0.10.0", schemas.every((schema) => schema.version === version));
check("All Marketing contracts use marketing domain", schemas.every((schema) => schema.domain === "marketing"));
check("Marketing domain registered", domains.domains.some((domain) => domain.id === "marketing"));

const categoryIds = new Set(categories.categories.map((category) => category.id));
check("Exactly eight controlled Marketing categories", categoryIds.size === 8, categoryIds.size);
check("All Marketing categories registered", schemas.every((schema) => categoryIds.has(schema.category)));

const primitiveIds = new Set(fields.fields.map((field) => field.$id));
const schemaIds = new Set([
  ...core.schemas,
  ...content.schemas,
  ...blocks.schemas,
  ...seo.schemas,
  ...forms.schemas,
  ...schemas
].map((schema) => schema.$id));

let fieldCount = 0;
for (const schema of schemas) {
  check(`${schema.$id} has marketingModel`, !!schema.marketingModel);
  check(`${schema.$id} has CMS metadata`, !!schema.cms);
  check(`${schema.$id} has delivery metadata`, !!schema.delivery);
  check(`${schema.$id} has future bindings`, !!schema.futureBindings);
  check(
    `${schema.$id} future phase bindings are canonical`,
    schema.futureBindings?.integrations === "phase-10" &&
    schema.futureBindings?.commerce === "phase-11" &&
    schema.futureBindings?.events === "phase-13" &&
    schema.futureBindings?.webhooks === "phase-14" &&
    schema.futureBindings?.permissions === "phase-15" &&
    schema.futureBindings?.privacy === "phase-30"
  );

  const keys = schema.fields.map((field) => field.key);
  check(`${schema.$id} field keys unique`, keys.length === new Set(keys).size);

  for (const field of schema.fields) {
    fieldCount++;
    const refs = [field.primitive, field.schema, field.itemsPrimitive, field.itemsSchema].filter(Boolean);
    check(`${schema.$id}.${field.key} has exactly one value source`, refs.length === 1, refs.join(","));
    if (field.primitive) check(`${schema.$id}.${field.key} primitive exists`, primitiveIds.has(field.primitive), field.primitive);
    if (field.itemsPrimitive) check(`${schema.$id}.${field.key} item primitive exists`, primitiveIds.has(field.itemsPrimitive), field.itemsPrimitive);
    if (field.schema) check(`${schema.$id}.${field.key} schema exists`, schemaIds.has(field.schema), field.schema);
    if (field.itemsSchema) check(`${schema.$id}.${field.key} item schema exists`, schemaIds.has(field.itemsSchema), field.itemsSchema);
  }

  for (const relationship of schema.relationships || []) {
    check(`${schema.$id} relationship target exists: ${relationship.target}`, schemaIds.has(relationship.target), relationship.target);
  }
}

const map = new Map(schemas.map((schema) => [schema.$id, schema]));
const requiredContracts = [
  "marketing.trackingConfiguration",
  "marketing.dataLayerConfiguration",
  "marketing.trackingDataPolicy",
  "marketing.trackingEventDefinition",
  "marketing.trackingEvent",
  "marketing.eventContext",
  "marketing.pageContext",
  "marketing.sessionContext",
  "marketing.visitorContext",
  "marketing.deviceContext",
  "marketing.referrerContext",
  "marketing.utmParameters",
  "marketing.adClickIdentifier",
  "marketing.trafficSource",
  "marketing.campaignDefinition",
  "marketing.attributionTouchpoint",
  "marketing.attributionModel",
  "marketing.campaignAttribution",
  "marketing.conversionDefinition",
  "marketing.conversionOccurrence",
  "marketing.conversionDeduplicationPolicy",
  "marketing.consentCategory",
  "marketing.consentState",
  "marketing.consentPolicy",
  "marketing.trackingConsentRecord",
  "marketing.marketingDestination",
  "marketing.eventDestination",
  "marketing.dispatchRequest",
  "marketing.dispatchResult",
  "marketing.analyticsConfiguration",
  "marketing.metricDefinition",
  "marketing.dimensionDefinition",
  "marketing.analyticsSnapshot"
];
for (const id of requiredContracts) check(`Required contract exists: ${id}`, map.has(id));

const ruleIds = (id) => new Set((map.get(id)?.validationRules || []).map((rule) => rule.id));
const hasRule = (id, rule) => ruleIds(id).has(rule);
const hasField = (id, field) => (map.get(id)?.fields || []).some((item) => item.key === field);

for (const rule of ["noFingerprinting", "noSecrets", "noRawFormPayloads"]) {
  check(`Tracking data policy enforces ${rule}`, hasRule("marketing.trackingDataPolicy", rule));
}
for (const rule of ["noDirectPersonalIdentifiers", "noFingerprinting"]) {
  check(`Visitor context enforces ${rule}`, hasRule("marketing.visitorContext", rule));
}
check("Advertising click identifier treated as personal", hasRule("marketing.adClickIdentifier", "treatedAsPersonalIdentifier"));
check("Advertising click identifier retention bounded", hasRule("marketing.adClickIdentifier", "retentionBounded"));
check("Advertising click identifier is private", map.get("marketing.adClickIdentifier")?.delivery?.publicAllowed === false);
check("Tracking event is not business source of truth", hasRule("marketing.trackingEvent", "noBusinessAuthority"));
check("Conversion definitions resolve Phase 8 mappings", hasRule("marketing.conversionDefinition", "formsMappingResolution"));
check("Conversion definitions contain no provider IDs", hasRule("marketing.conversionDefinition", "noProviderIds"));
check("Consent state forbids implicit Marketing grant", hasRule("marketing.consentState", "noImplicitMarketingGrant"));
check("Consent policy keeps legal review external", hasRule("marketing.consentPolicy", "legalReviewExternal"));
check("Necessary consent category is restricted", hasRule("marketing.consentPolicy", "necessaryCategoryRestricted"));
check("Tracking consent record is not form consent", hasRule("marketing.trackingConsentRecord", "notFormConsent"));
check("Tracking consent record is not legal conclusion", hasRule("marketing.trackingConsentRecord", "notLegalConclusion"));
check("Marketing destination contains no credentials", hasRule("marketing.marketingDestination", "noCredentials"));
check("Marketing destination isolates environments", hasRule("marketing.marketingDestination", "environmentIsolation"));
check("Dispatch request has idempotency key", hasField("marketing.dispatchRequest", "idempotencyKey"));
check("Dispatch request rejects credentials", hasRule("marketing.dispatchRequest", "noCredentialsInPayload"));
check("Analytics configuration is provider-neutral", hasRule("marketing.analyticsConfiguration", "providerNeutral"));
check("Attribution is reporting, not truth", hasRule("marketing.attributionModel", "reportingNotTruth"));
check("Conversion-rate denominator must be defined", hasRule("marketing.conversionSummary", "rateDenominatorDefined"));
check("Campaign performance cannot invent external source", hasRule("marketing.campaignPerformanceSnapshot", "externalSourceNotInvented"));
check("Campaign spend keeps explicit currency", hasRule("marketing.campaignPerformanceSnapshot", "spendCurrencyExplicit"));
check("Campaign performance preserves freshness", hasField("marketing.campaignPerformanceSnapshot", "sourceFreshThrough"));

const eventKeys = vocabulary.events.map((event) => event.key);
const requiredEventKeys = [
  "page.viewed", "cta.clicked", "phone.clicked", "email.clicked", "whatsapp.clicked",
  "document.downloaded", "form.started", "form.submitted", "lead.created", "search.performed",
  "video.started", "video.completed", "newsletter.subscribed"
];
check("Tracking event keys unique", eventKeys.length === new Set(eventKeys).size);
check("Tracking event vocabulary exact", requiredEventKeys.every((key) => eventKeys.includes(key)) && eventKeys.length === requiredEventKeys.length);
check("Tracking event keys use fact notation", eventKeys.every((key) => /^[a-z][a-z0-9]*(?:\.[a-z][a-z0-9]*)+$/.test(key)));
check("Tracking events declare consent category", vocabulary.events.every((event) => typeof event.defaultConsentCategory === "string" && event.defaultConsentCategory.length > 0));

const formConversion = forms.schemas.find((schema) => schema.$id === "forms.conversionMapping");
check("Phase 8 conversion mapping preserved", !!formConversion);
check("Phase 8 conversion mapping keeps conversionKey", formConversion?.fields?.some((field) => field.key === "conversionKey"));
check("Phase 9 conversionDefinition has canonical conversionKey", hasField("marketing.conversionDefinition", "conversionKey"));

const marketingItems = registry.items.filter((item) => item.domain === "marketing");
check("Main registry has 45 Marketing entries", marketingItems.length === 45, marketingItems.length);
check("Main registry has 236 total entries", registry.items.length === 236, registry.items.length);
check("Marketing standard indexed", registry.items.some((item) => item.id === "marketing.marketingTrackingContractStandard"));
check("Tracking vocabulary indexed", registry.items.some((item) => item.id === "marketing.standardTrackingEvents"));
check("Every Marketing schema indexed", schemas.every((schema) => registry.items.some((item) => item.id === schema.$id)));
check("Every Marketing source exists", marketingItems.every((item) => fs.existsSync(path.join(root, item.source))));

const generated = read("js/generated-marketing-schemas.js");
const rawIndex = read("registry/marketing/index.json");
const digest = crypto.createHash("sha256").update(rawIndex).digest("hex");
check("Marketing browser fallback checksum matches", generated.includes(digest), digest);

const routes = read("js/routes.js");
const router = read("js/router.js");
const pages = read("js/pages.js");
const app = read("js/app.js");
const html = read("index.html");
check("Marketing route available", routes.includes('path: "/registry/marketing"') && routes.includes('phase: 9, status: "available"'));
check("Marketing renderers wired", pages.includes("renderMarketingIndex") && pages.includes("renderMarketingDetail"));
check("Marketing router binding wired", router.includes("bindMarketingList") && router.includes("parseMarketingFilters"));
check("Marketing registry engine loaded", app.includes("loadMarketingSchemas"));
check("Marketing CSS loaded", html.includes("./css/marketing.css"));
check("Portal shows V0.10.0", html.includes("v0.10.0"));
check("Marketing standard exists", fs.existsSync(path.join(root, "standards/17-marketing-tracking-contract-standard.md")));

const allCss = fs.readdirSync(path.join(root, "css")).filter((name) => name.endsWith(".css")).map((name) => read(`css/${name}`)).join("\n");
check("Light theme explicit", html.includes('content="light"'));
check("No dark-theme media query", !/@media\s*\([^)]*prefers-color-scheme\s*:\s*dark/i.test(allCss));
check("No backdrop filter", !/backdrop-filter\s*:/i.test(allCss));
check("No CSS perspective or 3D rotation", !/perspective\s*:|rotate[XYZ]\s*\(/i.test(allCss));

check("Acceptance version matches", acceptance.version === version, acceptance.version);
check("All Phase 9 acceptance checks passed", acceptance.checks.every((item) => item.passed === true));

console.log("NEXT F Contracts Phase 9 validation");
console.log(`Version: ${version}`);
console.log(`Marketing Contracts: ${schemas.length}`);
console.log(`Tracking Event Keys: ${vocabulary.events.length}`);
console.log(`Marketing fields inspected: ${fieldCount}`);
console.log(`Registry items: ${registry.items.length}`);
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if (failures.length) {
  console.error("\nFailures:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log("\nPASS - Phase 9 Marketing and Tracking Contract Registry is internally consistent.");
