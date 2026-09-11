import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();
const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
const writeJson = (rel, value) => fs.writeFileSync(path.join(root, rel), JSON.stringify(value, null, 2) + "\n");
const exists = (rel) => fs.existsSync(path.join(root, rel));

function text(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function flattenStrings(value, out = [], depth = 0) {
  if (out.join(" ").length > 14000 || depth > 8) return out;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    const v = text(value);
    if (v) out.push(v);
  } else if (Array.isArray(value)) {
    for (const item of value) flattenStrings(item, out, depth + 1);
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if (["secret", "token", "credential", "password"].some((term) => key.toLowerCase().includes(term)) && typeof item !== "boolean") continue;
      out.push(key);
      flattenStrings(item, out, depth + 1);
    }
  }
  return out;
}

function unique(values) {
  return [...new Set(values.map(text).filter(Boolean))];
}

function collectFieldDocs(source, parent, sourcePath) {
  const docs = [];
  const seen = new Set();
  function addField(key, field, pointer) {
    const fieldKey = text(key);
    if (!fieldKey) return;
    const id = `field:${parent.id}:${pointer}:${fieldKey}`;
    if (seen.has(id)) return;
    seen.add(id);
    const description = text(field?.description || field?.helpText || field?.title || "Field/property in the parent contract.");
    const primitive = text(field?.primitive || field?.schema || field?.type || field?.valueType || "");
    const aliases = unique([primitive, field?.label, field?.name, field?.path, ...(Array.isArray(field?.aliases) ? field.aliases : [])]);
    docs.push({
      id,
      kind: "field",
      title: fieldKey,
      subtitle: `${parent.name} · ${parent.id}`,
      description,
      target: `#/registry/item/${encodeURIComponent(parent.id)}`,
      machineId: `${parent.id}.${fieldKey}`,
      parentId: parent.id,
      domain: parent.domain,
      type: "field",
      status: parent.status,
      phase: parent.phase,
      source: sourcePath,
      aliases,
      searchText: unique([fieldKey, description, primitive, parent.id, parent.name, parent.description, ...aliases, ...flattenStrings(field, [])]).join(" ")
    });
  }
  function walk(node, pointer = "root", depth = 0) {
    if (!node || depth > 8) return;
    if (Array.isArray(node)) {
      node.forEach((entry, index) => walk(entry, `${pointer}.${index}`, depth + 1));
      return;
    }
    if (typeof node !== "object") return;
    if (Array.isArray(node.fields)) {
      node.fields.forEach((field, index) => {
        if (field && typeof field === "object") addField(field.key ?? field.name ?? field.id, field, `${pointer}.fields.${index}`);
      });
    }
    if (node.properties && typeof node.properties === "object" && !Array.isArray(node.properties)) {
      for (const [key, field] of Object.entries(node.properties)) addField(key, field, `${pointer}.properties.${key}`);
    }
    for (const [key, value] of Object.entries(node)) {
      if (key === "fields" || key === "properties") continue;
      if (value && typeof value === "object") walk(value, `${pointer}.${key}`, depth + 1);
    }
  }
  walk(source);
  return docs;
}

function markdownMeta(rel) {
  const raw = fs.readFileSync(path.join(root, rel), "utf8");
  const lines = raw.split(/\r?\n/);
  const titleLine = lines.find((line) => /^#\s+/.test(line));
  const title = titleLine ? titleLine.replace(/^#\s+/, "").trim() : path.basename(rel, path.extname(rel));
  const paragraph = lines.find((line) => {
    const v = line.trim();
    return v && !v.startsWith("#") && !v.startsWith("-") && !v.startsWith("`") && !/^\d+[.)]\s/.test(v);
  }) ?? "NEXT F Contracts documentation.";
  return { raw, title, description: text(paragraph).slice(0, 360) };
}

// Versioned controlled vocabularies.
for (const rel of ["registry/domains.json", "registry/types.json", "registry/statuses.json"]) {
  if (!exists(rel)) continue;
  const data = readJson(rel);
  data.registryVersion = version;
  writeJson(rel, data);
}

const searchConfig = readJson("registry/search/search-config.json");
searchConfig.registryVersion = version;
for (const kind of [
  { id: "release", label: "Release", icon: "fa-code-branch", priority: 35 },
  { id: "change", label: "Change", icon: "fa-clock-rotate-left", priority: 36 },
  { id: "deprecation", label: "Deprecation", icon: "fa-triangle-exclamation", priority: 37 }
]) if (!searchConfig.kinds.some((row) => row.id === kind.id)) searchConfig.kinds.push(kind);
writeJson("registry/search/search-config.json", searchConfig);

const domains = readJson("registry/domains.json");
if (!domains.domains.some((row) => row.id === "search")) {
  domains.domains.push({
    id: "search",
    label: "Global Search",
    description: "Local browser discovery index for canonical registry items, fields, routes and repository documentation."
  });
  domains.domains.sort((a, b) => a.id.localeCompare(b.id));
}
domains.registryVersion = version;
writeJson("registry/domains.json", domains);

const nav = readJson("registry/portal-navigation.json");
nav.portalVersion = version;
const overview = nav.groups.find((group) => group.id === "overview");
if (overview) {
  const base = overview.items.find((row) => row.id === "overview");
  // Current release ownership belongs to the active phase; Global Search remains available without overriding it.
  if (!overview.items.some((row) => row.id === "global-search")) {
    overview.items.push({ id: "global-search", path: "/search", label: "Global Search", phase: 23, status: "available" });
  }
}
writeJson("registry/portal-navigation.json", nav);

const registry = readJson("registry/registry.json");
registry.registryVersion = version;
registry.items = registry.items.filter((item) => item.managedBy !== "global-search-sync");
registry.items.push(
  {
    id: "search.globalSearchStandard",
    name: "Global Search Standard",
    domain: "search",
    type: "standard",
    version,
    status: "stable",
    description: "Canonical discovery, ranking, keyboard, privacy and search-index generation rules for contract.nextf.lk.",
    source: "standards/31-global-search-standard.md",
    phase: 23,
    introducedIn: "0.24.0",
    tags: ["search", "discovery", "cmd-k", "registry", "documentation"],
    relationships: [
      { type: "uses", target: "registry.index", description: "Search indexes the authoritative Contract Registry." },
      { type: "uses", target: "portal.navigation", description: "Search indexes portal routes and route metadata." }
    ],
    permissions: [],
    events: [],
    managedBy: "global-search-sync"
  },
  {
    id: "search.searchIndex",
    name: "Global Search Index",
    domain: "search",
    type: "machine-registry",
    version,
    status: "stable",
    description: "Generated local search snapshot covering registry items, fields, portal routes and documentation.",
    source: "registry/search/search-index.json",
    phase: 23,
    introducedIn: "0.24.0",
    tags: ["search", "index", "local", "machine-readable"],
    relationships: [{ type: "implements", target: "search.globalSearchStandard", description: "Generated according to the Global Search Standard." }],
    permissions: [],
    events: [],
    managedBy: "global-search-sync"
  },
  {
    id: "search.searchConfiguration",
    name: "Global Search Configuration",
    domain: "search",
    type: "machine-registry",
    version,
    status: "stable",
    description: "Controlled result kinds, limits, token behavior and synonym vocabulary for local registry search.",
    source: "registry/search/search-config.json",
    phase: 23,
    introducedIn: "0.24.0",
    tags: ["search", "configuration", "synonyms", "ranking"],
    relationships: [{ type: "implements", target: "search.globalSearchStandard", description: "Configuration governed by the Global Search Standard." }],
    permissions: [],
    events: [],
    managedBy: "global-search-sync"
  }
);
registry.items.sort((a, b) => a.id.localeCompare(b.id));
writeJson("registry/registry.json", registry);

const routesModule = await import(`${pathToFileURL(path.join(root, "js/routes.js")).href}?v=${Date.now()}`);
const routes = routesModule.routes;
const documents = [];

for (const item of registry.items) {
  let sourceData = null;
  if (item.source && item.source.endsWith(".json") && exists(item.source)) {
    try { sourceData = readJson(item.source); } catch { sourceData = null; }
  }
  const aliases = unique([item.domain, item.type, ...(item.tags ?? []), ...(item.permissions ?? []), ...(item.events ?? []), ...(item.relationships ?? []).flatMap((r) => [r.type, r.target, r.description])]);
  documents.push({
    id: `registry:${item.id}`,
    kind: "registry",
    title: item.name,
    subtitle: `${item.id} · ${item.domain} · ${item.type}`,
    description: item.description,
    target: `#/registry/item/${encodeURIComponent(item.id)}`,
    machineId: item.id,
    parentId: "",
    domain: item.domain,
    type: item.type,
    status: item.status,
    phase: item.phase,
    source: item.source,
    aliases,
    searchText: unique([item.id, item.name, item.description, item.domain, item.type, item.status, ...aliases, ...(sourceData ? flattenStrings(sourceData, []) : [])]).join(" ").slice(0, 20000)
  });
  if (sourceData) documents.push(...collectFieldDocs(sourceData, item, item.source));
}

// Phase 27 Changelog discovery records. Releases and stable change IDs are first-class search targets.
if (exists("registry/changelog/release-index.json") && exists("registry/changelog/entry-index.json")) {
  const changelogReleases = readJson("registry/changelog/release-index.json");
  const changelogEntries = readJson("registry/changelog/entry-index.json");
  const releaseByVersion = new Map((changelogReleases.releases ?? []).map((row) => [row.version, row]));
  for (const release of changelogReleases.releases ?? []) {
    documents.push({
      id: `changelog-release:${release.version}`,
      kind: "release",
      title: `V${release.version} - ${release.title}`,
      subtitle: `Phase ${release.phase} · ${release.recordCompleteness ?? "unknown completeness"}`,
      description: release.summary ?? `NEXT F Contracts release V${release.version}.`,
      target: `#/lifecycle/changelog?view=releases&release=${encodeURIComponent(release.version)}`,
      machineId: `changelog.release.${release.version}`,
      parentId: "changelog.index",
      domain: "changelog",
      type: "release-note",
      status: ["published-development","published-stable"].includes(release.releaseStatus) ? "stable" : "draft",
      phase: release.phase,
      source: release.source,
      aliases: unique([release.version, `phase ${release.phase}`, ...(release.affected?.domains ?? []), ...(release.affected?.modules ?? []), ...Object.keys(release.categoryCounts ?? {})]),
      searchText: unique([release.version, release.title, release.summary, release.recordCompleteness, ...(release.affected?.domains ?? []), ...(release.affected?.modules ?? []), ...(release.affected?.contracts ?? []), ...Object.keys(release.categoryCounts ?? {})]).join(" ").slice(0, 20000)
    });
  }
  for (const entry of changelogEntries.entries ?? []) {
    const release = releaseByVersion.get(entry.releaseVersion);
    documents.push({
      id: `changelog-change:${entry.entryId}`,
      kind: "change",
      title: entry.title ?? entry.summary,
      subtitle: `V${entry.releaseVersion} · ${entry.category} · ${entry.entryId}`,
      description: entry.description ?? entry.summary,
      target: `#/lifecycle/changelog?view=change&entry=${encodeURIComponent(entry.entryId)}`,
      machineId: entry.entryId,
      parentId: `changelog.release.${entry.releaseVersion}`,
      domain: "changelog",
      type: "change-entry",
      status: "stable",
      phase: release?.phase ?? null,
      source: entry.sourceReference ?? release?.source ?? "registry/changelog/entry-index.json",
      aliases: unique([entry.releaseVersion, entry.category, entry.changeType, ...(entry.affectedRegistryIds ?? []), ...(entry.affectedDomains ?? []), ...(entry.affectedModules ?? [])]),
      searchText: unique([entry.entryId, entry.releaseVersion, entry.category, entry.changeType, entry.title, entry.description, entry.summary, entry.impact?.compatibilityClassification, ...(entry.affectedRegistryIds ?? []), ...(entry.affectedDomains ?? []), ...(entry.affectedModules ?? [])]).join(" ").slice(0, 20000)
    });
  }
}

// Phase 28 Deprecation discovery records. The authoritative set may legitimately be empty.
if (exists("registry/deprecations/index.json")) {
  const deprecations = readJson("registry/deprecations/index.json");
  for (const record of deprecations.records ?? []) {
    documents.push({
      id: `deprecation:${record.deprecationId}`,
      kind: "deprecation",
      title: record.affectedName ?? record.affectedRegistryId,
      subtitle: `${record.status} · ${record.severity} · ${record.deprecationId}`,
      description: record.reason,
      target: `#/lifecycle/deprecations?view=record&id=${encodeURIComponent(record.deprecationId)}`,
      machineId: record.deprecationId,
      parentId: `deprecations.record.${record.deprecationId}`,
      domain: "deprecations",
      type: "deprecation-record",
      status: record.status === "removed" ? "removed" : "deprecated",
      phase: 28,
      source: record.source ?? record.sourceReference ?? "registry/deprecations/index.json",
      aliases: unique([record.affectedRegistryId, record.affectedDomain, record.affectedType, record.severity, record.replacement?.disposition, record.replacement?.replacementId, ...(record.modulesAffected ?? []), ...(record.apisAffected ?? [])]),
      searchText: unique([record.deprecationId, record.affectedRegistryId, record.affectedName, record.reason, record.status, record.severity, record.replacement?.disposition, record.replacement?.replacementId, record.replacement?.instructions, ...(record.modulesAffected ?? []), ...(record.apisAffected ?? []), ...(record.relatedChangelogEntries ?? [])]).join(" ").slice(0, 20000)
    });
  }
}

for (const route of routes) {
  documents.push({
    id: `route:${route.id}`,
    kind: "route",
    title: route.title,
    subtitle: `${route.group} · Phase ${route.phase}`,
    description: route.description,
    target: `#${route.path}`,
    machineId: route.id,
    parentId: "",
    domain: "portal",
    type: "route",
    status: route.status === "planned" ? "draft" : "stable",
    phase: route.phase,
    source: "js/routes.js",
    aliases: unique([route.group, route.path, route.status]),
    searchText: unique([route.id, route.path, route.title, route.group, route.description, route.status]).join(" ")
  });
}

const docCandidates = [
  "README.md",
  "AGENTS.md",
  "NEXT-F-WEBSITE-DEVELOPMENT-STANDARD.md",
  ...fs.readdirSync(path.join(root, "standards")).filter((name) => name.endsWith(".md")).map((name) => `standards/${name}`),
  ...fs.readdirSync(path.join(root, "developer")).filter((name) => name.endsWith(".md")).map((name) => `developer/${name}`)
];
for (const rel of unique(docCandidates).sort()) {
  if (!exists(rel)) continue;
  const meta = markdownMeta(rel);
  documents.push({
    id: `document:${rel}`,
    kind: "document",
    title: meta.title,
    subtitle: rel,
    description: meta.description,
    target: `./${rel}`,
    machineId: rel,
    parentId: "",
    domain: rel.startsWith("standards/") ? "foundation" : "developer",
    type: "documentation",
    status: "stable",
    phase: null,
    source: rel,
    aliases: unique([path.basename(rel, ".md"), rel]),
    searchText: text(meta.raw).slice(0, 30000)
  });
}

const deduped = [];
const seen = new Set();
for (const doc of documents) {
  if (seen.has(doc.id)) continue;
  seen.add(doc.id);
  deduped.push(doc);
}

deduped.sort((a, b) => a.kind.localeCompare(b.kind) || a.title.localeCompare(b.title) || a.id.localeCompare(b.id));
const stats = {
  documents: deduped.length,
  registry: deduped.filter((x) => x.kind === "registry").length,
  fields: deduped.filter((x) => x.kind === "field").length,
  routes: deduped.filter((x) => x.kind === "route").length,
  documentation: deduped.filter((x) => x.kind === "document").length,
  releases: deduped.filter((x) => x.kind === "release").length,
  changes: deduped.filter((x) => x.kind === "change").length,
  domains: new Set(deduped.map((x) => x.domain).filter(Boolean)).size,
  statuses: new Set(deduped.map((x) => x.status).filter(Boolean)).size
};
const searchIndex = { registryVersion: version, schemaVersion: 1, stats, documents: deduped };
writeJson("registry/search/search-index.json", searchIndex);

const searchRaw = fs.readFileSync(path.join(root, "registry/search/search-index.json"));
const searchDigest = crypto.createHash("sha256").update(searchRaw).digest("hex");
fs.writeFileSync(path.join(root, "js/generated-search-index.js"), `// Generated from registry/search/search-index.json\n// SHA-256: ${searchDigest}\nexport const GENERATED_SEARCH_INDEX_SOURCE_SHA256 = ${JSON.stringify(searchDigest)};\nexport const GENERATED_SEARCH_INDEX = ${searchRaw.toString("utf8").trim()};\n`);

const registryRaw = fs.readFileSync(path.join(root, "registry/registry.json"));
const registryDigest = crypto.createHash("sha256").update(registryRaw).digest("hex");
fs.writeFileSync(path.join(root, "js/generated-registry.js"), `// Generated from registry/registry.json\n// SHA-256: ${registryDigest}\nexport const GENERATED_REGISTRY_SOURCE_SHA256 = ${JSON.stringify(registryDigest)};\nexport const GENERATED_REGISTRY = ${registryRaw.toString("utf8").trim()};\n`);

console.log(`Global Search synchronized: ${stats.documents} searchable documents (${stats.registry} registry, ${stats.fields} fields, ${stats.routes} routes, ${stats.documentation} docs).`);
