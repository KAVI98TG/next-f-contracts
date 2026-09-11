const loadGeneratedFallback = () => import("./generated-fields.js");

function text(value) { return String(value ?? "").trim().toLowerCase(); }
function valid(data) {
  return data && typeof data.registryVersion === "string" && Array.isArray(data.fields) && data.fields.every((field) =>
    field && typeof field.$id === "string" && field.$id.startsWith("fields.") && typeof field.name === "string" &&
    typeof field.version === "string" && typeof field.status === "string" && typeof field.category === "string" &&
    typeof field.description === "string" && field.value && field.cms && field.capabilities &&
    Array.isArray(field.supportedConfig) && Array.isArray(field.validationRules) && field.examples && Array.isArray(field.notes)
  );
}

async function loadJson() {
  if (window.location.protocol === "file:") throw new Error("file protocol uses generated field fallback");
  const response = await fetch("./registry/fields/index.json", { cache: "no-store" });
  if (!response.ok) throw new Error(`Field registry request failed with ${response.status}`);
  const data = await response.json();
  if (!valid(data)) throw new Error("Field registry JSON failed runtime shape validation");
  return data;
}

export class FieldRegistryEngine {
  constructor(data, source = "generated", sourceDigest = null) {
    if (!valid(data)) throw new Error("Invalid field registry data");
    this.data = data;
    this.source = source;
    this.sourceDigest = sourceDigest;
    this.fields = Object.freeze(data.fields.map((field) => Object.freeze({ ...field })));
    this.byId = new Map(this.fields.map((field) => [field.$id, field]));
    this.categories = [...new Set(this.fields.map((field) => field.category))].sort();
  }
  get size() { return this.fields.length; }
  get(id) { return this.byId.get(id) ?? null; }
  search(query = "", { category = "" } = {}) {
    const q = text(query), c = text(category);
    return this.fields.filter((field) => {
      if (c && text(field.category) !== c) return false;
      if (!q) return true;
      const haystack = [field.$id, field.name, field.description, field.category, field.cms?.editor, ...(field.supportedConfig ?? []), ...(field.validationRules ?? [])].join(" ").toLowerCase();
      return haystack.includes(q);
    }).sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base", numeric: true }));
  }
}

export async function loadFieldRegistry() {
  try {
    const data = await loadJson();
    return new FieldRegistryEngine(data, "authoritative-json", null);
  } catch (error) {
    console.info("Using generated primitive field registry fallback", error?.message ?? error);
    return new FieldRegistryEngine((await loadGeneratedFallback()).GENERATED_FIELDS, "generated", (await loadGeneratedFallback()).GENERATED_FIELDS_SOURCE_SHA256);
  }
}

export function parseFieldFilters(search = "") {
  const params = new URLSearchParams(search.replace(/^\?/, ""));
  return { q: params.get("q") ?? "", category: params.get("category") ?? "" };
}

export function buildFieldQuery({ q = "", category = "" } = {}) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (category) params.set("category", category);
  const out = params.toString();
  return out ? `?${out}` : "";
}
