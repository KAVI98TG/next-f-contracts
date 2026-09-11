const loadGeneratedFallback = () => import("./generated-core-schemas.js");

function text(value) { return String(value ?? "").trim().toLowerCase(); }
function valid(data) {
  return data && typeof data.registryVersion === "string" && Array.isArray(data.schemas) && data.schemas.every((schema) =>
    schema && typeof schema.$id === "string" && /^(core|shared)\./.test(schema.$id) &&
    typeof schema.name === "string" && typeof schema.version === "string" && schema.status === "stable" &&
    ["core","shared"].includes(schema.domain) && typeof schema.category === "string" && typeof schema.description === "string" &&
    typeof schema.purpose === "string" && Array.isArray(schema.fields) && Array.isArray(schema.relationships) &&
    Array.isArray(schema.validationRules) && schema.cms && schema.delivery && schema.examples && Array.isArray(schema.notes)
  );
}

async function loadJson() {
  if (window.location.protocol === "file:") throw new Error("file protocol uses generated Shared Core fallback");
  const response = await fetch("./registry/core/index.json", { cache: "no-store" });
  if (!response.ok) throw new Error(`Shared Core registry request failed with ${response.status}`);
  const data = await response.json();
  if (!valid(data)) throw new Error("Shared Core registry JSON failed runtime shape validation");
  return data;
}

export class CoreSchemaEngine {
  constructor(data, source = "generated", sourceDigest = null) {
    if (!valid(data)) throw new Error("Invalid Shared Core schema registry data");
    this.data = data;
    this.source = source;
    this.sourceDigest = sourceDigest;
    this.schemas = Object.freeze(data.schemas.map((item) => Object.freeze({ ...item })));
    this.byId = new Map(this.schemas.map((item) => [item.$id, item]));
    this.categories = [...new Set(this.schemas.map((item) => item.category))].sort();
    this.domains = [...new Set(this.schemas.map((item) => item.domain))].sort();
  }
  get size() { return this.schemas.length; }
  get(id) { return this.byId.get(id) ?? null; }
  search(query = "", { category = "", domain = "" } = {}) {
    const q = text(query), c = text(category), d = text(domain);
    return this.schemas.filter((item) => {
      if (c && text(item.category) !== c) return false;
      if (d && text(item.domain) !== d) return false;
      if (!q) return true;
      const fields = item.fields.flatMap((field) => [field.key, field.primitive, field.schema, field.description]);
      const haystack = [item.$id,item.name,item.description,item.purpose,item.domain,item.category,...fields,...item.validationRules.flatMap((rule)=>[rule.id,rule.description])].join(" ").toLowerCase();
      return haystack.includes(q);
    }).sort((a,b)=>a.name.localeCompare(b.name, undefined, { sensitivity:"base", numeric:true }));
  }
}

export async function loadCoreSchemas() {
  try {
    const data = await loadJson();
    return new CoreSchemaEngine(data, "authoritative-json", null);
  } catch (error) {
    console.info("Using generated Shared Core registry fallback", error?.message ?? error);
    return new CoreSchemaEngine((await loadGeneratedFallback()).GENERATED_CORE_SCHEMAS, "generated", (await loadGeneratedFallback()).GENERATED_CORE_SCHEMAS_SOURCE_SHA256);
  }
}

export function parseCoreFilters(search = "") {
  const params = new URLSearchParams(search.replace(/^\?/, ""));
  return { q: params.get("q") ?? "", category: params.get("category") ?? "", domain: params.get("domain") ?? "" };
}
export function buildCoreQuery({ q = "", category = "", domain = "" } = {}) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (category) params.set("category", category);
  if (domain) params.set("domain", domain);
  const out = params.toString();
  return out ? `?${out}` : "";
}
