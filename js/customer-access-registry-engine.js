import { GENERATED_CUSTOMER_ACCESS } from "./generated-customer-access.js";

async function loadJson() {
  try {
    const response = await fetch("./registry/customer-access/index.json", { cache: "no-store" });
    if (!response.ok) throw new Error(String(response.status));
    return { data: await response.json(), source: "authoritative-json" };
  } catch {
    return { data: GENERATED_CUSTOMER_ACCESS.index, source: "generated-fallback" };
  }
}

export class CustomerAccessRegistry {
  constructor(data, source) {
    this.data = data;
    this.source = source;
    this.version = data.registryVersion;
    this.policies = data.policies ?? [];
    this.byId = new Map(this.policies.map((policy) => [policy.$id, policy]));
    this.modes = [...new Set(this.policies.map((policy) => policy.customerMode))].sort();
    this.modules = [...new Set(this.policies.map((policy) => policy.moduleRef))].sort();
    this.publishingModes = [...new Set(this.policies.map((policy) => policy.publishingPolicy.mode))].sort();
  }

  get(id) { return this.byId.get(id); }

  search(filters = {}) {
    const q = String(filters.q ?? "").trim().toLowerCase();
    return this.policies.filter((policy) => {
      if (filters.mode && policy.customerMode !== filters.mode) return false;
      if (filters.module && policy.moduleRef !== filters.module) return false;
      if (filters.publishing && policy.publishingPolicy.mode !== filters.publishing) return false;
      if (filters.action && policy.actions[filters.action] !== "allow" && policy.actions[filters.action] !== "request") return false;
      if (!q) return true;
      return JSON.stringify(policy).toLowerCase().includes(q);
    });
  }
}

export async function loadCustomerAccessRegistry() {
  const { data, source } = await loadJson();
  return new CustomerAccessRegistry(data, source);
}

export function parseCustomerAccessFilters(search = "") {
  const params = new URLSearchParams(search);
  return {
    view: params.get("view") || "overview",
    id: params.get("id") || "",
    q: params.get("q") || "",
    mode: params.get("mode") || "",
    module: params.get("module") || "",
    publishing: params.get("publishing") || "",
    action: params.get("action") || ""
  };
}

export function buildCustomerAccessQuery(filters = {}) {
  const params = new URLSearchParams();
  for (const key of ["view", "id", "q", "mode", "module", "publishing", "action"]) if (filters[key]) params.set(key, filters[key]);
  const query = params.toString();
  return query ? `?${query}` : "";
}
