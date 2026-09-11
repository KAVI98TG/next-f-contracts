const loadGeneratedFallback = () => import("./generated-webhooks.js");

const norm = (v) => String(v ?? "").trim().toLowerCase();

function valid(data) {
  return data &&
    typeof data.registryVersion === "string" &&
    Array.isArray(data.schemas) &&
    Array.isArray(data.categories) &&
    data.eventCatalog &&
    Array.isArray(data.eventCatalog.events) &&
    Array.isArray(data.failureCodes) &&
    data.schemas.every(s => s && /^webhooks\./.test(s.$id) && s.domain === "webhooks" && s.webhookModel && Array.isArray(s.fields) && Array.isArray(s.validationRules));
}

async function loadJson() {
  if (window.location.protocol === "file:") throw new Error("file protocol uses generated Webhooks fallback");
  const r = await fetch("./registry/webhooks/index.json", { cache: "no-store" });
  if (!r.ok) throw new Error(`Webhook registry request failed with ${r.status}`);
  const d = await r.json();
  if (!valid(d)) throw new Error("Webhook registry failed runtime validation");
  return d;
}

export class WebhooksRegistryEngine {
  constructor(data, source = "generated", sourceDigest = null) {
    if (!valid(data)) throw new Error("Invalid Webhook registry data");
    this.data = data;
    this.source = source;
    this.sourceDigest = sourceDigest;
    this.schemas = Object.freeze(data.schemas.map(x => Object.freeze({ ...x })));
    this.events = Object.freeze(data.eventCatalog.events.map(x => Object.freeze({ ...x })));
    this.byId = new Map(this.schemas.map(x => [x.$id, x]));
    this.categories = data.categories.map(x => x.key);
    this.sensitivities = [...new Set(this.events.map(x => x.dataPolicy?.sensitivity).filter(Boolean))].sort();
  }
  get size() { return this.schemas.length; }
  get(id) { return this.byId.get(id) ?? null; }
  search(query = "", { view = "schemas", category = "", sensitivity = "", configurable = "" } = {}) {
    const q = norm(query), cat = norm(category), sens = norm(sensitivity);
    if (view === "events") {
      return this.events.filter(item => {
        if (sens && norm(item.dataPolicy?.sensitivity) !== sens) return false;
        if (!q) return true;
        const hay = [item.eventKey, item.name, item.description, item.category, item.producerKey, ...(item.subjectContracts || [])];
        return hay.join(" ").toLowerCase().includes(q);
      }).sort((a,b)=>a.name.localeCompare(b.name, undefined, {numeric:true,sensitivity:"base"}));
    }
    return this.schemas.filter(item => {
      if (cat && norm(item.category) !== cat) return false;
      if (configurable === "customer" && item.cms?.customerVisible !== true) return false;
      if (configurable === "admin" && item.cms?.adminVisible !== true) return false;
      if (!q) return true;
      const hay = [item.$id,item.name,item.description,item.purpose,item.category,item.webhookModel?.kind,
        ...item.fields.flatMap(f=>[f.key,f.description,f.primitive,f.schema,f.itemsSchema]),
        ...item.validationRules.flatMap(r=>[r.id,r.description])];
      return hay.join(" ").toLowerCase().includes(q);
    }).sort((a,b)=>a.name.localeCompare(b.name, undefined, {numeric:true,sensitivity:"base"}));
  }
}

export async function loadWebhooks() {
  try {
    return new WebhooksRegistryEngine(await loadJson(), "authoritative-json", null);
  } catch (error) {
    console.info("Using generated Webhooks fallback", error?.message ?? error);
    return new WebhooksRegistryEngine((await loadGeneratedFallback()).GENERATED_WEBHOOKS, "generated", (await loadGeneratedFallback()).GENERATED_WEBHOOKS_SOURCE_SHA256);
  }
}

export function parseWebhooksFilters(search = "") {
  const p = new URLSearchParams(search.replace(/^\?/, ""));
  return {
    q: p.get("q") ?? "",
    view: p.get("view") ?? "schemas",
    category: p.get("category") ?? "",
    sensitivity: p.get("sensitivity") ?? "",
    configurable: p.get("configurable") ?? ""
  };
}
export function buildWebhooksQuery({q="",view="schemas",category="",sensitivity="",configurable=""}={}) {
  const p = new URLSearchParams();
  if (q) p.set("q",q);
  if (view && view !== "schemas") p.set("view",view);
  if (category) p.set("category",category);
  if (sensitivity) p.set("sensitivity",sensitivity);
  if (configurable) p.set("configurable",configurable);
  const out=p.toString();
  return out?`?${out}`:"";
}
