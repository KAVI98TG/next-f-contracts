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

check("Version is 0.8.0", version === "0.8.0", version);

const seoIndex = json("registry/seo/index.json");
const schemas = seoIndex.schemas;
const registry = json("registry/registry.json");
const fieldIndex = json("registry/fields/index.json");
const coreIndex = json("registry/core/index.json");
const contentIndex = json("registry/content/index.json");
const blockIndex = json("registry/blocks/index.json");
const categories = json("registry/seo/categories.json");
const domains = json("registry/domains.json");
const navigation = json("registry/portal-navigation.json");
const acceptance = json("checks/phase-7-acceptance.json");

check("SEO registryVersion matches release", seoIndex.registryVersion === version, seoIndex.registryVersion);
check("Exactly 22 SEO Contracts", schemas.length === 22, schemas.length);
check("SEO definitionCount matches", seoIndex.definitionCount === schemas.length, seoIndex.definitionCount);

const ids = schemas.map((s) => s.$id);
check("SEO IDs unique", ids.length === new Set(ids).size);
check("SEO IDs canonical", ids.every((id) => /^seo\.[a-z][A-Za-z0-9]*$/.test(id)));
check("Every SEO schema stable", schemas.every((s) => s.status === "stable"));
check("Every SEO schema domain seo", schemas.every((s) => s.domain === "seo"));
check("Every SEO schema version 0.8.0", schemas.every((s) => s.version === version));
check("Every SEO schema has model", schemas.every((s) => s.seoModel && typeof s.seoModel.kind === "string"));
check("Every SEO schema has CMS metadata", schemas.every((s) => s.cms && typeof s.cms.customerVisible === "boolean"));
check("Every SEO schema has delivery boundary", schemas.every((s) => s.delivery && typeof s.delivery.publicAllowed === "boolean"));
check("Every SEO schema has future bindings", schemas.every((s) => s.futureBindings && "permissions" in s.futureBindings));
check("Every SEO schema has examples", schemas.every((s) => s.examples && Array.isArray(s.examples.valid) && Array.isArray(s.examples.invalid)));
check("Every SEO schema has validationRules", schemas.every((s) => Array.isArray(s.validationRules)));

const categoryIds = new Set(categories.categories.map((c) => c.id));
check("SEO categories unique", categoryIds.size === categories.categories.length);
check("All SEO categories registered", schemas.every((s) => categoryIds.has(s.category)));
check("SEO domain registered", domains.domains.some((d) => d.id === "seo"));

const primitiveIds = new Set(fieldIndex.fields.map((f) => f.$id));
const schemaIds = new Set([
  ...coreIndex.schemas.map((s) => s.$id),
  ...contentIndex.schemas.map((s) => s.$id),
  ...blockIndex.schemas.map((s) => s.$id),
  ...schemas.map((s) => s.$id)
]);
let fieldCount = 0;
for (const schema of schemas) {
  const keys = schema.fields.map((f) => f.key);
  check(`${schema.$id} field keys unique`, keys.length === new Set(keys).size);
  for (const field of schema.fields) {
    fieldCount++;
    const refs = [field.primitive, field.schema, field.itemsPrimitive, field.itemsSchema].filter(Boolean);
    check(`${schema.$id}.${field.key} has exactly one field source`, refs.length === 1, refs.join(","));
    if (field.primitive) check(`${schema.$id}.${field.key} primitive exists`, primitiveIds.has(field.primitive), field.primitive);
    if (field.itemsPrimitive) check(`${schema.$id}.${field.key} item primitive exists`, primitiveIds.has(field.itemsPrimitive), field.itemsPrimitive);
    if (field.schema) check(`${schema.$id}.${field.key} schema exists`, schemaIds.has(field.schema), field.schema);
    if (field.itemsSchema) check(`${schema.$id}.${field.key} item schema exists`, schemaIds.has(field.itemsSchema), field.itemsSchema);
  }
  for (const rel of schema.relationships) check(`${schema.$id} relationship target exists: ${rel.target}`, schemaIds.has(rel.target), rel.target);
}
check("SEO registry contains substantial field coverage", fieldCount >= 100, fieldCount);

const map = new Map(schemas.map((s) => [s.$id, s]));
const requiredContracts = [
  "seo.metadata","seo.siteDefaults","seo.keywordTarget","seo.keywordSet","seo.robotsDirective","seo.openGraph","seo.socialCard","seo.structuredData","seo.alternateLanguage","seo.redirect","seo.sitemapEntry","seo.robotsRule","seo.robotsPolicy","seo.auditIssue","seo.auditResult","seo.internalLink","seo.brokenLink","seo.searchQuery","seo.searchPerformance","seo.indexingStatus","seo.urlInspectionResult","seo.searchPreview"
];
for (const id of requiredContracts) check(`Required SEO contract exists: ${id}`, map.has(id));

const metadata = map.get("seo.metadata");
const metadataKeys = new Set(metadata.fields.map((f) => f.key));
for (const key of ["target","metaTitle","metaDescription","keywords","canonicalUrl","robots","openGraph","socialCard","structuredData","alternates"])
  check(`SEO Metadata includes ${key}`, metadataKeys.has(key));
check("SEO Metadata attaches to core.entityReference", metadata.fields.find((f) => f.key === "target")?.schema === "core.entityReference");
check("SEO Metadata canonical uses URL primitive", metadata.fields.find((f) => f.key === "canonicalUrl")?.primitive === "fields.url");
check("SEO Metadata warns no ranking guarantee", metadata.validationRules.some((r) => r.id === "noRankingGuarantee"));

const keyword = map.get("seo.keywordTarget");
check("Keyword Target has phrase", keyword.fields.some((f) => f.key === "phrase"));
check("Keyword Target models intent", keyword.fields.some((f) => f.key === "intent"));
check("Keyword contract rejects ranking guarantee semantics", keyword.validationRules.some((r) => r.id === "keywordNoStuffingGuarantee"));

const robotsMeta = map.get("seo.robotsDirective");
const robotsTxt = map.get("seo.robotsPolicy");
check("Meta robots separate from robots.txt", robotsMeta.validationRules.some((r) => r.id === "metaRobotsNotRobotsTxt") && robotsTxt.validationRules.some((r) => r.id === "noNoindexDirective"));
check("robots.txt policy states not authorization", robotsTxt.validationRules.some((r) => r.id === "policyDoesNotAuthorizeAccess"));

const structured = map.get("seo.structuredData");
check("Structured data payload is JSON", structured.fields.find((f) => f.key === "payload")?.primitive === "fields.json");
check("Structured data prohibits executable payload", structured.validationRules.some((r) => r.id === "jsonObjectOnly"));
check("Structured data requires truthful claims", structured.validationRules.some((r) => r.id === "claimsMustBeTruthful"));

const redirect = map.get("seo.redirect");
const statusOptions = redirect.fields.find((f) => f.key === "statusCode")?.config?.options?.map((o) => o.value) ?? [];
check("Redirect HTTP codes exact", JSON.stringify(statusOptions) === JSON.stringify(["301","302","307","308"]), statusOptions.join(","));
check("Redirect loop rule exists", redirect.validationRules.some((r) => r.id === "noRedirectLoop"));
check("Redirect safe scheme rule exists", redirect.validationRules.some((r) => r.id === "safeDestinationScheme"));

const sitemap = map.get("seo.sitemapEntry");
check("Sitemap excludes noindex", sitemap.validationRules.some((r) => r.id === "excludeNoindex"));
check("Sitemap truthful last modified", sitemap.validationRules.some((r) => r.id === "truthfulLastModified"));

const audit = map.get("seo.auditResult");
check("Audit score is percentage", audit.fields.find((f) => f.key === "score")?.primitive === "fields.percentage");
check("Audit score is not search-engine score", audit.validationRules.some((r) => r.id === "scoreIsNextFDiagnostic"));

const searchPerf = map.get("seo.searchPerformance");
check("Search performance records provider", searchPerf.fields.some((f) => f.key === "sourceProvider"));
check("Search performance records import time", searchPerf.fields.some((f) => f.key === "importedAt"));
check("Search performance validates CTR", searchPerf.validationRules.some((r) => r.id === "ctrConsistent"));

const inspection = map.get("seo.urlInspectionResult");
check("URL inspection records source", inspection.fields.some((f) => f.key === "sourceProvider"));
check("URL inspection protects declared canonical", inspection.validationRules.some((r) => r.id === "selectedCanonicalObserved"));
check("URL inspection requires freshness visibility", inspection.validationRules.some((r) => r.id === "stalenessVisible"));

const preview = map.get("seo.searchPreview");
check("Search preview explicitly approximate", preview.validationRules.some((r) => r.id === "previewNotGuarantee"));
check("Search preview length guidance advisory", preview.validationRules.some((r) => r.id === "lengthAdvisory"));

const forbiddenField = /(?:secret|password|apiKey|accessToken|refreshToken|credential|privateKey)/i;
check("SEO schemas contain no secret credential fields", schemas.every((s) => s.fields.every((f) => !forbiddenField.test(f.key))));

const routableContent = contentIndex.schemas.filter((s) => ["required","optional"].includes(s.contentModel?.routing));
check("All routable Content contracts resolve SEO binding", routableContent.every((s) => s.futureBindings?.seo === "seo.metadata"), routableContent.filter((s) => s.futureBindings?.seo !== "seo.metadata").map((s) => s.$id).join(","));

const seoRegistryItems = registry.items.filter((i) => i.domain === "seo");
check("Main registry has 23 SEO entries including standard", seoRegistryItems.length === 23, seoRegistryItems.length);
check("Main registry total is 155", registry.items.length === 155, registry.items.length);
check("SEO standard indexed", registry.items.some((i) => i.id === "seo.seoContractStandard" && i.type === "standard"));
check("Every SEO schema indexed", schemas.every((s) => registry.items.some((i) => i.id === s.$id && i.source.startsWith("registry/seo/definitions/"))));
check("Every SEO registry source exists", seoRegistryItems.every((i) => fs.existsSync(path.join(root, i.source))), seoRegistryItems.filter((i) => !fs.existsSync(path.join(root, i.source))).map((i) => i.source).join(","));

const generated = read("js/generated-seo-schemas.js");
const indexRaw = read("registry/seo/index.json");
const digest = crypto.createHash("sha256").update(indexRaw).digest("hex");
check("Generated SEO fallback checksum matches authoritative index", generated.includes(digest), digest);

const routes = read("js/routes.js");
const router = read("js/router.js");
const pages = read("js/pages.js");
const app = read("js/app.js");
const html = read("index.html");
check("SEO route available", routes.includes('path: "/registry/seo"') && routes.includes('phase: 7, status: "available"'));
check("SEO index renderer wired", pages.includes("renderSeoIndex"));
check("SEO detail renderer wired", pages.includes("renderSeoDetail"));
check("SEO list binding wired", router.includes("bindSeoList"));
check("SEO engine loads authoritative JSON", read("js/seo-registry-engine.js").includes('fetch("./registry/seo/index.json"'));
check("SEO generated fallback wired", read("js/seo-registry-engine.js").includes("GENERATED_SEO_SCHEMAS"));
check("App loads SEO schemas", app.includes("loadSeoSchemas"));
check("SEO CSS loaded", html.includes('./css/seo.css'));
check("Portal version visible", html.includes("v0.8.0"));
check("SEO sidebar visible", html.includes('#/registry/seo'));
check("SEO standard exists", fs.existsSync(path.join(root,"standards/15-seo-contract-standard.md")));

const allCss = fs.readdirSync(path.join(root,"css")).filter((n)=>n.endsWith(".css")).map((n)=>read(`css/${n}`)).join("\n");
check("Light theme remains explicit", html.includes('content="light"'));
check("No dark-theme media query added", !/@media\s*\([^)]*prefers-color-scheme\s*:\s*dark/i.test(allCss));
check("No backdrop filter/glass effect", !/backdrop-filter\s*:/i.test(allCss));

check("Phase 7 acceptance version", acceptance.version === version);
check("All Phase 7 acceptance checks passed", acceptance.checks.every((x) => x.passed === true));

console.log("NEXT F Contracts Phase 7 validation");
console.log(`Version: ${version}`);
console.log(`SEO Contracts: ${schemas.length}`);
console.log(`SEO fields inspected: ${fieldCount}`);
console.log(`Registry items: ${registry.items.length}`);
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if (failures.length) {
  console.error("\nFailures:");
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}
console.log("\nPASS - Phase 7 SEO Contract Registry is internally consistent.");
