const loadGeneratedFallback = () => import("./generated-registry.js");

const ALLOWED_STATUSES = new Set(["experimental", "draft", "stable", "deprecated", "removed"]);
const DEFAULT_SORT = "name";
const VALID_SORTS = new Set(["name", "id", "domain", "phase", "version"]);

function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

function compareText(a, b) {
  return String(a).localeCompare(String(b), undefined, { sensitivity: "base", numeric: true });
}

function compareVersions(a, b) {
  const pa = String(a).split(".").map((x) => Number(x) || 0);
  const pb = String(b).split(".").map((x) => Number(x) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff) return diff;
  }
  return 0;
}

function minimalShapeValid(data) {
  if (!data || !Array.isArray(data.items) || typeof data.registryVersion !== "string") return false;
  return data.items.every((item) =>
    item && typeof item.id === "string" && typeof item.name === "string" &&
    typeof item.domain === "string" && typeof item.type === "string" &&
    typeof item.version === "string" && ALLOWED_STATUSES.has(item.status) &&
    typeof item.description === "string" && typeof item.source === "string" &&
    Number.isInteger(item.phase) && typeof item.introducedIn === "string" &&
    Array.isArray(item.tags) && Array.isArray(item.relationships) &&
    Array.isArray(item.permissions) && Array.isArray(item.events)
  );
}

async function loadAuthoritativeJson() {
  if (window.location.protocol === "file:") throw new Error("file protocol uses generated registry fallback");
  const response = await fetch("./registry/registry.json", { cache: "no-store" });
  if (!response.ok) throw new Error(`Registry request failed with ${response.status}`);
  const data = await response.json();
  if (!minimalShapeValid(data)) throw new Error("Registry JSON failed runtime shape validation");
  return data;
}

export class RegistryEngine {
  constructor(data, source = "generated", sourceDigest = null) {
    if (!minimalShapeValid(data)) throw new Error("Invalid registry data");
    this.data = data;
    this.source = source;
    this.sourceDigest = sourceDigest;
    this.items = Object.freeze(data.items.map((item) => Object.freeze({ ...item })));
    this.byId = new Map(this.items.map((item) => [item.id, item]));
    this.domains = [...new Set(this.items.map((item) => item.domain))].sort(compareText);
    this.types = [...new Set(this.items.map((item) => item.type))].sort(compareText);
    this.statuses = [...new Set(this.items.map((item) => item.status))].sort(compareText);
  }

  get size() { return this.items.length; }
  get(id) { return this.byId.get(id) ?? null; }
  has(id) { return this.byId.has(id); }

  resolveRelationship(relationship) {
    return { ...relationship, item: this.get(relationship.target) };
  }

  related(id) {
    const item = this.get(id);
    if (!item) return [];
    return item.relationships.map((rel) => this.resolveRelationship(rel));
  }

  incoming(id) {
    return this.items.flatMap((source) => source.relationships
      .filter((rel) => rel.target === id)
      .map((rel) => ({ source, type: rel.type, description: rel.description ?? "" })));
  }

  search(query = "", filters = {}) {
    const q = normalize(query);
    const domain = normalize(filters.domain);
    const type = normalize(filters.type);
    const status = normalize(filters.status);
    const sort = VALID_SORTS.has(filters.sort) ? filters.sort : DEFAULT_SORT;

    let rows = this.items.filter((item) => {
      if (domain && item.domain !== domain) return false;
      if (type && item.type !== type) return false;
      if (status && item.status !== status) return false;
      if (!q) return true;
      const haystack = [item.id, item.name, item.description, item.domain, item.type, ...item.tags].join(" ").toLowerCase();
      return haystack.includes(q);
    });

    rows = [...rows].sort((a, b) => {
      if (q) {
        const aExact = normalize(a.id) === q ? 1 : 0;
        const bExact = normalize(b.id) === q ? 1 : 0;
        if (aExact !== bExact) return bExact - aExact;
        const aIdStarts = normalize(a.id).startsWith(q) ? 1 : 0;
        const bIdStarts = normalize(b.id).startsWith(q) ? 1 : 0;
        if (aIdStarts !== bIdStarts) return bIdStarts - aIdStarts;
      }
      if (sort === "id") return compareText(a.id, b.id);
      if (sort === "domain") return compareText(a.domain, b.domain) || compareText(a.name, b.name);
      if (sort === "phase") return a.phase - b.phase || compareText(a.name, b.name);
      if (sort === "version") return compareVersions(a.version, b.version) || compareText(a.name, b.name);
      return compareText(a.name, b.name);
    });

    return rows;
  }

  quickSearch(query = "", limit = 8) {
    return this.search(query, { sort: "name" }).slice(0, limit);
  }

  snapshot() {
    return this.data;
  }
}

export async function loadRegistry() {
  try {
    const data = await loadAuthoritativeJson();
    return new RegistryEngine(data, "authoritative-json", null);
  } catch (error) {
    console.info("Using generated registry fallback:", error.message);
    return new RegistryEngine((await loadGeneratedFallback()).GENERATED_REGISTRY, "generated-fallback", (await loadGeneratedFallback()).GENERATED_REGISTRY_SOURCE_SHA256);
  }
}

export function parseRegistryFilters(search = "") {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  return {
    q: params.get("q") ?? "",
    domain: params.get("domain") ?? "",
    type: params.get("type") ?? "",
    status: params.get("status") ?? "",
    sort: VALID_SORTS.has(params.get("sort")) ? params.get("sort") : DEFAULT_SORT
  };
}

export function buildRegistryQuery(filters) {
  const params = new URLSearchParams();
  if (filters.q) params.set("q", filters.q);
  if (filters.domain) params.set("domain", filters.domain);
  if (filters.type) params.set("type", filters.type);
  if (filters.status) params.set("status", filters.status);
  if (filters.sort && filters.sort !== DEFAULT_SORT) params.set("sort", filters.sort);
  const value = params.toString();
  return value ? `?${value}` : "";
}
