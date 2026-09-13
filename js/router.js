import { routeByPath } from "./routes.js?v=1.1.0-r1";
import {
  renderOverview,
  renderArchitecture,
  renderNaming,
  renderDevelopment,
  renderSecurity,
  renderVersions,
  renderPlanned,
  renderRegistryIndexShell,
  renderRegistryRows,
  renderRegistryDetail,
  renderRegistryMissing,
  renderFieldsIndex,
  renderPrimitiveFieldDetail,
  renderFieldCards,
  renderCoreSchemasIndex,
  renderCoreSchemaCardsOnly,
  renderCoreSchemaDetail,
  renderContentSchemasIndex,
  renderContentSchemaCardsOnly,
  renderContentSchemaDetail,
  renderBlocksIndex,
  renderBlockCardsOnly,
  renderBlockDetail,
  renderSeoIndex,
  renderSeoCardsOnly,
  renderSeoDetail,
  renderFormsIndex,
  renderFormsCardsOnly,
  renderFormsDetail,
  renderMarketingIndex,
  renderMarketingCardsOnly,
  renderMarketingDetail
} from "./pages.js?v=1.0.0-r1";
import { renderIntegrationsIndex, renderIntegrationsResults, renderIntegrationDetail } from "./integrations-pages.js";
import { renderCommerceIndex, renderCommerceCardsOnly, renderCommerceDetail } from "./commerce-pages.js";
import { renderCommerceRulesIndex, renderCommerceRuleCardsOnly, renderCommerceRuleDetail } from "./commerce-rules-pages.js";
import { renderEventsIndex, renderEventsResults, renderEventsDetail } from "./events-pages.js";
import { renderWebhooksIndex, renderWebhooksResults, renderWebhooksDetail } from "./webhooks-pages.js";
import { renderPermissionsIndex, renderPermissionsResults, renderPermissionDetail, renderRoleDetail, renderPermissionSchemaDetail } from "./permissions-pages.js";
import { renderSiteManifestIndex, renderSiteManifestSchemasOnly, renderSiteManifestExample, renderSiteManifestSchemaDetail } from "./site-manifest-pages.js";
import { renderModulesIndex, renderModuleResults, renderModuleDetail, renderCapabilityDetail } from "./modules-pages.js";
import { renderApiIndex, renderApiResults, renderApiDetail } from "./api-pages.js";
import { renderCmsUiIndex, renderCmsUiResults, renderCmsUiDetail } from "./cms-ui-pages.js";
import { renderAdminUiIndex, renderAdminUiResults, renderAdminUiDetail } from "./admin-ui-pages.js";
import { renderCodexIndex, renderCodexResults } from "./codex-pages.js";
import { renderExamplesIndex, renderExamplesResults, renderExampleDetail } from "./examples-pages.js";
import { renderGlobalSearchPage, renderGlobalSearchResults } from "./search-pages.js";
import { renderRelationshipExplorer, renderRelationshipFocusOnly, renderRelationshipPathOnly } from "./relationship-pages.js";
import { parseRegistryFilters, buildRegistryQuery } from "./registry-engine.js";
import { parseFieldFilters, buildFieldQuery } from "./field-registry-engine.js";
import { parseCoreFilters, buildCoreQuery } from "./core-schema-engine.js";
import { parseContentFilters, buildContentQuery } from "./content-schema-engine.js";
import { parseBlockFilters, buildBlockQuery } from "./block-registry-engine.js";
import { parseSeoFilters, buildSeoQuery } from "./seo-registry-engine.js";
import { parseFormsFilters, buildFormsQuery } from "./forms-registry-engine.js";
import { parseMarketingFilters, buildMarketingQuery } from "./marketing-registry-engine.js";
import { parseIntegrationsFilters, buildIntegrationsQuery } from "./integrations-registry-engine.js";
import { parseCommerceFilters, buildCommerceQuery } from "./commerce-registry-engine.js";
import { parseCommerceRuleFilters, buildCommerceRuleQuery } from "./commerce-rules-engine.js";
import { parseEventsFilters, buildEventsQuery } from "./events-registry-engine.js";
import { parseWebhooksFilters, buildWebhooksQuery } from "./webhooks-registry-engine.js";
import { parsePermissionFilters, buildPermissionQuery } from "./permissions-registry-engine.js";
import { parseManifestFilters, buildManifestQuery } from "./site-manifest-registry-engine.js";
import { parseModuleFilters, buildModuleQuery } from "./modules-registry-engine.js";
import { parseApiFilters, buildApiQuery } from "./api-registry-engine.js";
import { parseCmsUiFilters, buildCmsUiQuery } from "./cms-ui-registry-engine.js";
import { parseAdminUiFilters, buildAdminUiQuery } from "./admin-ui-registry-engine.js";
import { parseCodexFilters, buildCodexQuery } from "./codex-registry-engine.js";
import { parseExamplesFilters, buildExamplesQuery } from "./examples-registry-engine.js";
import { parseGlobalSearchFilters, buildGlobalSearchQuery } from "./global-search-engine.js";
import { parseRelationshipFilters, buildRelationshipQuery } from "./relationship-explorer-engine.js";
import { copyText, prettyJson } from "./utils.js";

const renderers = {
  "/overview": renderOverview,
  "/standards/architecture": renderArchitecture,
  "/standards/naming": renderNaming,
  "/standards/development": renderDevelopment,
  "/lifecycle/versions": renderVersions
};

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "") || "/overview";
  const [pathPart, queryPart = ""] = raw.split("?", 2);
  const path = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
  return { path, search: queryPart ? `?${queryPart}` : "" };
}

export function resolveCurrentRoute(registry) {
  const { path, search } = parseHash();

  if (path === "/registry") {
    return { kind: "registry-index", path, search, title: "Registry Index", group: "Registry", id: "registry-index" };
  }

  if (path === "/registry/fields") {
    const base = routeByPath.get(path);
    return { ...base, search };
  }

  if (path.startsWith("/registry/item/")) {
    const encoded = path.slice("/registry/item/".length);
    let id = encoded;
    try { id = decodeURIComponent(encoded); } catch { /* keep raw */ }
    const item = registry.get(id);
    return { kind: "registry-detail", path, search, title: item?.name ?? "Registry item not found", group: "Registry", id: item?.id ?? id, item };
  }

  return routeByPath.get(path) ?? routeByPath.get("/overview");
}

function setBreadcrumbs(route) {
  const container = document.querySelector("[data-breadcrumbs]");
  if (!container) return;

  const parts = [{ label: "Contracts", href: "#/overview" }];
  if (route.kind === "registry-index") parts.push({ label: "Registry Index", href: null });
  else if (route.kind === "registry-detail") {
    parts.push({ label: "Registry", href: "#/registry" });
    if (["permission","role"].includes(route.item?.type) || route.item?.domain === "permissions") parts.push({ label: "Permissions", href: "#/platform/permissions" });
    else if (route.item?.type === "field") parts.push({ label: "Fields", href: "#/registry/fields" });
    if (route.item?.type === "schema" && ["core","shared"].includes(route.item?.domain)) parts.push({ label: route.item.domain === "shared" ? "Shared" : "Core", href: `#/registry/${route.item.domain}` });
    if (route.item?.type === "schema" && route.item?.domain === "content") parts.push({ label: "Content", href: "#/registry/content" });
    if (route.item?.domain === "blocks") parts.push({ label: "Blocks", href: "#/registry/blocks" });
    if (route.item?.domain === "seo") parts.push({ label: "SEO", href: "#/registry/seo" });
    if (route.item?.domain === "forms") parts.push({ label: "Forms", href: "#/registry/forms" });
    if (route.item?.domain === "marketing") parts.push({ label: "Marketing", href: "#/registry/marketing" });
    if (route.item?.domain === "events") parts.push({ label: "Event Registry", href: "#/events/registry" });
    if (route.item?.domain === "webhooks") parts.push({ label: "Webhooks", href: "#/events/webhooks" });
    if (route.item?.domain === "integrations") parts.push({ label: "Integrations", href: "#/platform/integrations" });
    if (route.item?.domain === "api") parts.push({ label: "API", href: "#/platform/api" });
    if (route.item?.domain === "cms-ui") parts.push({ label: "Customer CMS UI", href: "#/platform/customer-cms-ui" });
    if (route.item?.domain === "admin-ui") parts.push({ label: "NEXT F Admin UI", href: "#/platform/admin-ui" });
    if (route.item?.domain === "developer") parts.push({ label: "Codex", href: "#/development/codex" });
    if (route.item?.domain === "examples") parts.push({ label: "Examples", href: "#/development/examples" });
    if (route.item?.domain === "relationships") parts.push({ label: "Relationships", href: "#/registry/relationships" });
    if (route.item?.domain === "manifest") parts.push({ label: "Site Manifest", href: "#/development/site-manifest" });
    if (route.item?.domain === "commerce" && route.item?.type === "business-rule") parts.push({ label: "Commerce Rules", href: "#/registry/commerce-rules" });
    else if (route.item?.domain === "commerce") parts.push({ label: "Commerce", href: "#/registry/commerce" });
    parts.push({ label: route.title, href: null });
  } else if (route.path !== "/overview") {
    parts.push({ label: route.group, href: null, muted: true });
    parts.push({ label: route.title, href: null });
  } else parts.push({ label: "Overview", href: null });

  container.innerHTML = parts.map((part, index) => `${index ? '<span aria-hidden="true">/</span>' : ""}${part.href ? `<a href="${part.href}">${part.label}</a>` : `<span class="${part.muted ? "breadcrumbs__muted" : "breadcrumbs__current"}">${part.label}</span>`}`).join("");
}

function updateActiveNav(route) {
  document.querySelectorAll("[data-route-link]").forEach((link) => {
    const href = link.getAttribute("href");
    let active = false;
    if (route.kind === "registry-detail") {
      const item = route.item;
      if (["permission","role"].includes(item?.type) || item?.domain === "permissions") active = href === "#/platform/permissions";
      else if (item?.type === "field") active = href === "#/registry/fields";
      else if (item?.type === "schema" && ["core","shared"].includes(item?.domain)) active = href === `#/registry/${item.domain}`;
      else if (item?.domain === "content") active = href === "#/registry/content";
      else if (item?.domain === "blocks") active = href === "#/registry/blocks";
      else if (item?.domain === "seo") active = href === "#/registry/seo";
      else if (item?.domain === "forms") active = href === "#/registry/forms";
      else if (item?.domain === "marketing") active = href === "#/registry/marketing";
      else if (item?.domain === "events") active = href === "#/events/registry";
      else if (item?.domain === "webhooks") active = href === "#/events/webhooks";
      else if (item?.domain === "integrations") active = href === "#/platform/integrations";
      else if (item?.domain === "modules") active = href === "#/platform/modules";
      else if (item?.domain === "api") active = href === "#/platform/api";
      else if (item?.domain === "cms-ui") active = href === "#/platform/customer-cms-ui";
      else if (item?.domain === "admin-ui") active = href === "#/platform/admin-ui";
      else if (item?.domain === "developer") active = href === "#/development/codex";
      else if (item?.domain === "examples") active = href === "#/development/examples";
      else if (item?.domain === "relationships") active = href === "#/registry/relationships";
      else if (item?.domain === "commerce" && item?.type === "business-rule") active = href === "#/registry/commerce-rules";
      else if (item?.domain === "commerce") active = href === "#/registry/commerce";
      else active = href === "#/registry";
    } else active = href === `#${route.path}`;
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function showToast(message, tone = "success") {
  const region = document.querySelector("[data-toast-region]");
  if (!region) return;
  const toast = document.createElement("div");
  toast.className = `toast toast--${tone}`;
  toast.setAttribute("role", "status");
  toast.innerHTML = `<i class="fa-solid ${tone === "success" ? "fa-circle-check" : "fa-circle-exclamation"}" aria-hidden="true"></i><span>${message}</span>`;
  region.appendChild(toast);
  requestAnimationFrame(() => toast.dataset.visible = "true");
  window.setTimeout(() => {
    toast.dataset.visible = "false";
    window.setTimeout(() => toast.remove(), 180);
  }, 2400);
}

function bindCopyActions(registry) {
  document.querySelectorAll("[data-copy-value]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await copyText(button.dataset.copyValue);
        showToast(button.dataset.copyLabel || "Copied");
      } catch {
        showToast("Copy is not available in this browser", "danger");
      }
    });
  });

  document.querySelectorAll("[data-copy-registry-json]").forEach((button) => {
    button.addEventListener("click", async () => {
      const item = registry.get(button.dataset.copyRegistryJson);
      if (!item) return;
      try {
        await copyText(prettyJson(item));
        showToast("Registry metadata copied");
      } catch {
        showToast("Copy is not available in this browser", "danger");
      }
    });
  });
}

function bindRegistryList(registry, filters) {
  const results = document.querySelector("[data-registry-results]");
  const count = document.querySelector("[data-registry-count]");
  const controls = {
    q: document.querySelector("[data-registry-q]"),
    domain: document.querySelector("[data-registry-domain]"),
    type: document.querySelector("[data-registry-type]"),
    status: document.querySelector("[data-registry-status]"),
    sort: document.querySelector("[data-registry-sort]")
  };

  function readFilters() {
    return {
      q: controls.q?.value.trim() ?? "",
      domain: controls.domain?.value ?? "",
      type: controls.type?.value ?? "",
      status: controls.status?.value ?? "",
      sort: controls.sort?.value ?? "name"
    };
  }

  function update({ replace = true } = {}) {
    const next = readFilters();
    if (results) results.innerHTML = renderRegistryRows(registry, next);
    if (count) count.textContent = `${registry.search(next.q, next).length} of ${registry.size} entries`;
    const nextHash = `#/registry${buildRegistryQuery(next)}`;
    if (replace) history.replaceState(null, "", nextHash);
    filters = next;
  }

  let timer = null;
  controls.q?.addEventListener("input", () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => update(), 120);
  });
  [controls.domain, controls.type, controls.status, controls.sort].forEach((control) => control?.addEventListener("change", () => update()));

  document.querySelectorAll("[data-registry-clear]").forEach((button) => button.addEventListener("click", () => {
    if (controls.q) controls.q.value = "";
    if (controls.domain) controls.domain.value = "";
    if (controls.type) controls.type.value = "";
    if (controls.status) controls.status.value = "";
    if (controls.sort) controls.sort.value = "name";
    update();
    controls.q?.focus();
  }));
}


function bindFieldList(fieldRegistry) {
  const results = document.querySelector("[data-field-results]");
  const count = document.querySelector("[data-field-count]");
  const q = document.querySelector("[data-field-q]");
  const category = document.querySelector("[data-field-category]");
  const readFilters = () => ({ q: q?.value.trim() ?? "", category: category?.value ?? "" });
  function update() {
    const filters = readFilters();
    if (results) results.innerHTML = renderFieldCards(fieldRegistry, filters);
    if (count) count.textContent = `${fieldRegistry.search(filters.q, filters).length} of ${fieldRegistry.size}`;
    history.replaceState(null, "", `#/registry/fields${buildFieldQuery(filters)}`);
    bindClear();
  }
  let timer = null;
  q?.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(update, 100); });
  category?.addEventListener("change", update);
  function bindClear() {
    document.querySelectorAll("[data-field-clear]").forEach((button) => button.onclick = () => {
      if (q) q.value = "";
      if (category) category.value = "";
      update(); q?.focus();
    });
  }
  bindClear();
}


function bindCoreList(coreSchemas, mode) {
  const results=document.querySelector("[data-core-results]");
  const count=document.querySelector("[data-core-count]");
  const q=document.querySelector("[data-core-q]");
  const category=document.querySelector("[data-core-category]");
  const domain=mode === "shared" ? "shared" : "core";
  const readFilters=()=>({q:q?.value.trim()??"",category:category?.value??"",domain});
  function update(){
    const filters=readFilters();
    if(results)results.innerHTML=renderCoreSchemaCardsOnly(coreSchemas,filters,mode);
    if(count)count.textContent=String(coreSchemas.search(filters.q,filters).length);
    history.replaceState(null,"",`#/registry/${domain}${buildCoreQuery({q:filters.q,category:filters.category})}`);
    bindClear();
  }
  let timer=null;
  q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});
  category?.addEventListener("change",update);
  function bindClear(){document.querySelectorAll("[data-core-clear]").forEach((button)=>button.onclick=()=>{if(q)q.value="";if(category)category.value="";update();q?.focus();});}
  bindClear();
}

function bindContentList(contentSchemas){
  const results=document.querySelector("[data-content-results]");const count=document.querySelector("[data-content-count]");const q=document.querySelector("[data-content-q]");const category=document.querySelector("[data-content-category]");const routing=document.querySelector("[data-content-routing]");
  const readFilters=()=>({q:q?.value.trim()??"",category:category?.value??"",routing:routing?.value??""});
  function update(){const filters=readFilters();if(results)results.innerHTML=renderContentSchemaCardsOnly(contentSchemas,filters);if(count)count.textContent=String(contentSchemas.search(filters.q,filters).length);history.replaceState(null,"",`#/registry/content${buildContentQuery(filters)}`);bindClear();}
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});category?.addEventListener("change",update);routing?.addEventListener("change",update);
  function bindClear(){document.querySelectorAll("[data-content-clear]").forEach((button)=>button.onclick=()=>{if(q)q.value="";if(category)category.value="";if(routing)routing.value="";update();q?.focus();});}bindClear();
}

function bindBlockList(blocks){
  const results=document.querySelector("[data-block-results]");const count=document.querySelector("[data-block-count]");const q=document.querySelector("[data-block-q]");const category=document.querySelector("[data-block-category]");const kind=document.querySelector("[data-block-kind]");
  const readFilters=()=>({q:q?.value.trim()??"",category:category?.value??"",kind:kind?.value??""});
  function update(){const filters=readFilters();if(results)results.innerHTML=renderBlockCardsOnly(blocks,filters);if(count)count.textContent=String(blocks.search(filters.q,filters).length);history.replaceState(null,"",`#/registry/blocks${buildBlockQuery(filters)}`);bindClear();}
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});category?.addEventListener("change",update);kind?.addEventListener("change",update);
  function bindClear(){document.querySelectorAll("[data-block-clear]").forEach((button)=>button.onclick=()=>{if(q)q.value="";if(category)category.value="";if(kind)kind.value="";update();q?.focus();});}bindClear();
}

function bindSeoList(seoSchemas){
  const results=document.querySelector("[data-seo-results]");const count=document.querySelector("[data-seo-count]");const q=document.querySelector("[data-seo-q]");const category=document.querySelector("[data-seo-category]");const kind=document.querySelector("[data-seo-kind]");
  const readFilters=()=>({q:q?.value.trim()??"",category:category?.value??"",kind:kind?.value??""});
  function update(){const filters=readFilters();if(results)results.innerHTML=renderSeoCardsOnly(seoSchemas,filters);if(count)count.textContent=String(seoSchemas.search(filters.q,filters).length);history.replaceState(null,"",`#/registry/seo${buildSeoQuery(filters)}`);bindClear();}
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});category?.addEventListener("change",update);kind?.addEventListener("change",update);
  function bindClear(){document.querySelectorAll("[data-seo-clear]").forEach((button)=>button.onclick=()=>{if(q)q.value="";if(category)category.value="";if(kind)kind.value="";update();q?.focus();});}bindClear();
}


function bindFormsList(formsSchemas){
  const results=document.querySelector("[data-forms-results]");const q=document.querySelector("[data-forms-q]");const category=document.querySelector("[data-forms-category]");const kind=document.querySelector("[data-forms-kind]");
  const readFilters=()=>({q:q?.value.trim()??"",category:category?.value??"",kind:kind?.value??""});
  function update(){const filters=readFilters();if(results)results.innerHTML=renderFormsCardsOnly(formsSchemas,filters);history.replaceState(null,"",`#/registry/forms${buildFormsQuery(filters)}`);bindClear();}
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});category?.addEventListener("change",update);kind?.addEventListener("change",update);
  function bindClear(){document.querySelectorAll("[data-forms-clear]").forEach((button)=>button.onclick=()=>{if(q)q.value="";if(category)category.value="";if(kind)kind.value="";update();q?.focus();});}bindClear();
}


function bindMarketingList(marketingSchemas){
  const results=document.querySelector("[data-marketing-results]");
  const count=document.querySelector("[data-marketing-count]");
  const q=document.querySelector("[data-marketing-q]");
  const category=document.querySelector("[data-marketing-category]");
  const kind=document.querySelector("[data-marketing-kind]");
  const readFilters=()=>({q:q?.value.trim()??"",category:category?.value??"",kind:kind?.value??""});
  function update(){
    const filters=readFilters();
    if(results)results.innerHTML=renderMarketingCardsOnly(marketingSchemas,filters);
    if(count)count.textContent=String(marketingSchemas.search(filters.q,filters).length);
    history.replaceState(null,"",`#/registry/marketing${buildMarketingQuery(filters)}`);
    bindClear();
  }
  let timer=null;
  q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});
  category?.addEventListener("change",update);
  kind?.addEventListener("change",update);
  function bindClear(){
    document.querySelectorAll("[data-marketing-clear]").forEach((button)=>button.onclick=()=>{
      if(q)q.value="";
      if(category)category.value="";
      if(kind)kind.value="";
      update();
      q?.focus();
    });
  }
  bindClear();
}

function bindIntegrationsList(integrations){
  const results=document.querySelector("[data-integrations-results]");
  const count=document.querySelector("[data-integrations-count]");
  const q=document.querySelector("[data-integrations-q]");
  const view=document.querySelector("[data-integrations-view]");
  const category=document.querySelector("[data-integrations-category]");
  const family=document.querySelector("[data-integrations-family]");
  const readFilters=()=>({q:q?.value.trim()??"",view:view?.value??"all",category:category?.value??"",family:family?.value??""});
  function update(){const filters=readFilters();if(results)results.innerHTML=renderIntegrationsResults(integrations,filters);if(count)count.textContent=String(integrations.search(filters.q,filters).length);history.replaceState(null,"",`#/platform/integrations${buildIntegrationsQuery(filters)}`);bindClear();}
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});view?.addEventListener("change",update);category?.addEventListener("change",update);family?.addEventListener("change",update);
  function bindClear(){document.querySelectorAll("[data-integrations-clear]").forEach(button=>button.onclick=()=>{if(q)q.value="";if(view)view.value="all";if(category)category.value="";if(family)family.value="";update();q?.focus();});}bindClear();
}

function bindCommerceList(commerceSchemas){
  const results=document.querySelector("[data-commerce-results]");
  const count=document.querySelector("[data-commerce-count]");
  const q=document.querySelector("[data-commerce-q]");
  const category=document.querySelector("[data-commerce-category]");
  const kind=document.querySelector("[data-commerce-kind]");
  const visibility=document.querySelector("[data-commerce-visibility]");
  const transactional=document.querySelector("[data-commerce-transactional]");
  const readFilters=()=>({q:q?.value.trim()??"",category:category?.value??"",kind:kind?.value??"",visibility:visibility?.value??"",transactional:transactional?.value??""});
  function update(){
    const filters=readFilters();
    if(results)results.innerHTML=renderCommerceCardsOnly(commerceSchemas,filters);
    if(count)count.textContent=String(commerceSchemas.search(filters.q,filters).length);
    history.replaceState(null,"",`#/registry/commerce${buildCommerceQuery(filters)}`);
    bindClear();
  }
  let timer=null;
  q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});
  [category,kind,visibility,transactional].forEach(control=>control?.addEventListener("change",update));
  function bindClear(){document.querySelectorAll("[data-commerce-clear]").forEach(button=>button.onclick=()=>{if(q)q.value="";if(category)category.value="";if(kind)kind.value="";if(visibility)visibility.value="";if(transactional)transactional.value="";update();q?.focus();});}
  bindClear();
}


function bindCommerceRulesList(engine){
  const results=document.querySelector("[data-commerce-rule-results]");
  const count=document.querySelector("[data-commerce-rule-count]");
  const q=document.querySelector("[data-commerce-rule-q]");
  const category=document.querySelector("[data-commerce-rule-category]");
  const kind=document.querySelector("[data-commerce-rule-kind]");
  const severity=document.querySelector("[data-commerce-rule-severity]");
  const policy=document.querySelector("[data-commerce-rule-policy]");
  const audit=document.querySelector("[data-commerce-rule-audit]");
  const read=()=>({q:q?.value.trim()??"",category:category?.value??"",kind:kind?.value??"",severity:severity?.value??"",policy:policy?.value??"",audit:audit?.value??""});
  const update=()=>{
    const filters=read();
    if(results)results.innerHTML=renderCommerceRuleCardsOnly(engine,filters);
    if(count)count.textContent=String(engine.search(filters.q,filters).length);
    history.replaceState(null,"",`#/registry/commerce-rules${buildCommerceRuleQuery(filters)}`);
  };
  q?.addEventListener("input",update);
  [category,kind,severity,policy,audit].forEach(x=>x?.addEventListener("change",update));
  document.querySelectorAll("[data-commerce-rule-clear]").forEach(button=>button.onclick=()=>{
    if(q)q.value=""; if(category)category.value=""; if(kind)kind.value=""; if(severity)severity.value=""; if(policy)policy.value=""; if(audit)audit.value="";
    update(); q?.focus();
  });
}

function bindEventsList(engine){
  const results=document.querySelector("[data-events-results]");
  const count=document.querySelector("[data-events-count]");
  const q=document.querySelector("[data-events-q]");
  const view=document.querySelector("[data-events-view]");
  const category=document.querySelector("[data-events-category]");
  const producer=document.querySelector("[data-events-producer]");
  const sensitivity=document.querySelector("[data-events-sensitivity]");
  const webhook=document.querySelector("[data-events-webhook]");
  const read=()=>({q:q?.value.trim()??"",view:view?.value??"all",category:category?.value??"",producer:producer?.value??"",sensitivity:sensitivity?.value??"",webhook:webhook?.value??""});
  const update=()=>{const f=read();if(results)results.innerHTML=renderEventsResults(engine,f);if(count)count.textContent=String(engine.search(f.q,f).length);history.replaceState(null,"",`#/events/registry${buildEventsQuery(f)}`);};
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100)});[view,category,producer,sensitivity,webhook].forEach(x=>x?.addEventListener("change",update));
  document.querySelectorAll("[data-events-clear]").forEach(b=>b.onclick=()=>{if(q)q.value="";if(view)view.value="all";if(category)category.value="";if(producer)producer.value="";if(sensitivity)sensitivity.value="";if(webhook)webhook.value="";update();q?.focus();});
}


function bindWebhookCopy(engine){
  void engine;
}

function bindWebhooksList(engine){
  const results=document.querySelector("[data-webhooks-results]");
  const count=document.querySelector("[data-webhooks-count]");
  const q=document.querySelector("[data-webhooks-q]");
  const view=document.querySelector("[data-webhooks-view]");
  const category=document.querySelector("[data-webhooks-category]");
  const sensitivity=document.querySelector("[data-webhooks-sensitivity]");
  const configurable=document.querySelector("[data-webhooks-configurable]");
  const categoryWrap=document.querySelector("[data-webhooks-category-wrap]");
  const sensitivityWrap=document.querySelector("[data-webhooks-sensitivity-wrap]");
  const configWrap=document.querySelector("[data-webhooks-config-wrap]");
  const read=()=>({q:q?.value.trim()??"",view:view?.value??"schemas",category:category?.value??"",sensitivity:sensitivity?.value??"",configurable:configurable?.value??""});
  const syncVisibility=()=>{const ev=view?.value==="events";if(categoryWrap)categoryWrap.hidden=ev;if(configWrap)configWrap.hidden=ev;if(sensitivityWrap)sensitivityWrap.hidden=!ev;};
  const update=()=>{syncVisibility();const f=read();if(results)results.innerHTML=renderWebhooksResults(engine,f);if(count)count.textContent=String(engine.search(f.q,f).length);history.replaceState(null,"",`#/events/webhooks${buildWebhooksQuery(f)}`);};
  let timer=null;
  q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100);});
  [view,category,sensitivity,configurable].forEach(x=>x?.addEventListener("change",update));
  document.querySelectorAll("[data-webhooks-clear]").forEach(b=>b.onclick=()=>{if(q)q.value="";if(view)view.value="schemas";if(category)category.value="";if(sensitivity)sensitivity.value="";if(configurable)configurable.value="";update();q?.focus();});
  syncVisibility();
  bindWebhookCopy(engine);
}


function bindPermissionsList(engine){
  const results=document.querySelector("[data-permissions-results]");const count=document.querySelector("[data-permissions-count]");const q=document.querySelector("[data-permissions-q]");const view=document.querySelector("[data-permissions-view]");const domain=document.querySelector("[data-permissions-domain]");const action=document.querySelector("[data-permissions-action]");const scope=document.querySelector("[data-permissions-scope]");const risk=document.querySelector("[data-permissions-risk]");const wraps=[document.querySelector("[data-permissions-domain-wrap]"),document.querySelector("[data-permissions-action-wrap]"),document.querySelector("[data-permissions-scope-wrap]"),document.querySelector("[data-permissions-risk-wrap]")];
  const read=()=>({q:q?.value.trim()??"",view:view?.value??"permissions",domain:domain?.value??"",action:action?.value??"",scope:scope?.value??"",risk:risk?.value??""});
  const sync=()=>wraps.forEach(w=>{if(w)w.hidden=view?.value!=="permissions";});
  const update=()=>{sync();const f=read();if(results)results.innerHTML=renderPermissionsResults(engine,f);if(count)count.textContent=String(engine.search(f.q,f).length);history.replaceState(null,"",`#/platform/permissions${buildPermissionQuery(f)}`);};
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100)});[view,domain,action,scope,risk].forEach(x=>x?.addEventListener("change",update));document.querySelectorAll("[data-permissions-clear]").forEach(b=>b.onclick=()=>{if(q)q.value="";if(view)view.value="permissions";if(domain)domain.value="";if(action)action.value="";if(scope)scope.value="";if(risk)risk.value="";update();q?.focus();});sync();
}

function bindSiteManifestList(engine){
  const results=document.querySelector("[data-manifest-results]");
  const count=document.querySelector("[data-manifest-count]");
  const q=document.querySelector("[data-manifest-q]");
  const category=document.querySelector("[data-manifest-category]");
  const model=document.querySelector("[data-manifest-model]");
  const example=document.querySelector("[data-manifest-example]");
  const examplePanel=document.querySelector("[data-manifest-example-panel]");
  const read=()=>({q:q?.value.trim()??"",category:category?.value??"",model:model?.value??"",example:example?.value??"commerce"});
  const bindExampleCopy=()=>document.querySelectorAll("[data-copy-manifest-example]").forEach(button=>button.onclick=async()=>{const ex=engine.example(button.dataset.copyManifestExample);if(!ex)return;try{await copyText(prettyJson(ex.data??{}));showToast("Manifest example JSON copied");}catch{showToast("Copy is not available in this browser","danger");}});
  function update(pushExample=true){const f=read();if(results)results.innerHTML=renderSiteManifestSchemasOnly(engine,f);if(count)count.textContent=String(engine.search(f.q,f).length);if(examplePanel)examplePanel.innerHTML=renderSiteManifestExample(engine,f.example);history.replaceState(null,"",`#/development/site-manifest${buildManifestQuery(f)}`);bindExampleCopy();}
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(()=>update(false),100);});category?.addEventListener("change",()=>update(false));model?.addEventListener("change",()=>update(false));example?.addEventListener("change",()=>update(true));document.querySelectorAll("[data-manifest-clear]").forEach(b=>b.onclick=()=>{if(q)q.value="";if(category)category.value="";if(model)model.value="";update(false);q?.focus();});bindExampleCopy();
}

function bindModulesList(engine){
  const results=document.querySelector("[data-modules-results]"); const count=document.querySelector("[data-modules-count]"); const q=document.querySelector("[data-modules-q]"); const view=document.querySelector("[data-modules-view]"); const category=document.querySelector("[data-modules-category]"); const dependency=document.querySelector("[data-modules-dependency]"); const mode=document.querySelector("[data-modules-mode]"); const dw=document.querySelector("[data-modules-dependency-wrap]"); const mw=document.querySelector("[data-modules-mode-wrap]");
  const read=()=>({q:q?.value.trim()??"",view:view?.value??"modules",category:category?.value??"",dependency:dependency?.value??"",mode:mode?.value??""});
  const sync=()=>{const caps=view?.value==="capabilities";if(dw)dw.hidden=caps;if(mw)mw.hidden=!caps;};
  const update=()=>{sync();const f=read();if(results)results.innerHTML=renderModuleResults(engine,f);if(count)count.textContent=String(engine.search(f.q,f).length);history.replaceState(null,"",`#/platform/modules${buildModuleQuery(f)}`);};
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100)});[view,category,dependency,mode].forEach(x=>x?.addEventListener("change",update));document.querySelectorAll("[data-modules-clear]").forEach(b=>b.onclick=()=>{if(q)q.value="";if(view)view.value="modules";if(category)category.value="";if(dependency)dependency.value="";if(mode)mode.value="";update();q?.focus();});sync();
}


function bindApiList(engine){
  const results=document.querySelector("[data-api-results]"), count=document.querySelector("[data-api-count]");
  const q=document.querySelector("[data-api-q]"), view=document.querySelector("[data-api-view]"), group=document.querySelector("[data-api-group]"), method=document.querySelector("[data-api-method]"), auth=document.querySelector("[data-api-auth]"), privacy=document.querySelector("[data-api-privacy]");
  const gw=document.querySelector("[data-api-group-wrap]"), mw=document.querySelector("[data-api-method-wrap]"), aw=document.querySelector("[data-api-auth-wrap]"), pw=document.querySelector("[data-api-privacy-wrap]");
  const read=()=>({q:q?.value.trim()??"",view:view?.value??"operations",group:group?.value??"",method:method?.value??"",auth:auth?.value??"",privacy:privacy?.value??""});
  const sync=()=>{const ops=(view?.value??"operations")==="operations"; if(gw)gw.hidden=(view?.value==="schemas"); if(mw)mw.hidden=!ops;if(aw)aw.hidden=!ops;if(pw)pw.hidden=!ops;};
  const update=()=>{sync();const f=read();if(results)results.innerHTML=renderApiResults(engine,f);if(count)count.textContent=String(engine.search(f.q,f).length);history.replaceState(null,"",`#/platform/api${buildApiQuery(f)}`);};
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100)});[view,group,method,auth,privacy].forEach(x=>x?.addEventListener("change",update));
  document.querySelectorAll("[data-api-clear]").forEach(b=>b.onclick=()=>{if(q)q.value="";if(view)view.value="operations";if(group)group.value="";if(method)method.value="";if(auth)auth.value="";if(privacy)privacy.value="";update();q?.focus();});sync();
}


function bindCmsUiList(engine){
  const results=document.querySelector("[data-cmsui-results]"), count=document.querySelector("[data-cmsui-count]"), q=document.querySelector("[data-cmsui-q]"), view=document.querySelector("[data-cmsui-view]"), kind=document.querySelector("[data-cmsui-kind]"), module=document.querySelector("[data-cmsui-module]"), domain=document.querySelector("[data-cmsui-domain]"), wraps=document.querySelector("[data-cmsui-profile-filters]");
  const read=()=>({q:q?.value.trim()??"",view:view?.value??"profiles",kind:kind?.value??"",module:module?.value??"",domain:domain?.value??""});
  const sync=()=>{const show=(view?.value??"profiles")==="profiles"; if(wraps)wraps.style.display=show?"contents":"none";};
  const update=()=>{sync();const f=read();if(results)results.innerHTML=renderCmsUiResults(engine,f);if(count)count.textContent=String(engine.search(f.q,f).length);history.replaceState(null,"",`#/platform/customer-cms-ui${buildCmsUiQuery(f)}`);};
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,100)});[view,kind,module,domain].forEach(x=>x?.addEventListener("change",update));document.querySelectorAll("[data-cmsui-clear]").forEach(b=>b.onclick=()=>{if(q)q.value="";if(view)view.value="profiles";if(kind)kind.value="";if(module)module.value="";if(domain)domain.value="";update();q?.focus();});sync();
}

function renderRegistryItemByDomain(registry, route, fieldRegistry, coreSchemas, contentSchemas, blocks, seoSchemas, formsSchemas, marketingSchemas, integrations, commerceSchemas, commerceRules, events, webhooks, permissions, siteManifests, modules, apiRegistry, cmsUiRegistry, adminUiRegistry){
  const item=route.item;
  if(!item)return renderRegistryMissing(route.id);
  if(item.type==="permission" && permissions.get(item.id)) return renderPermissionDetail(registry,item,permissions.get(item.id));
  if(item.type==="role" && permissions.get(item.id)) return renderRoleDetail(permissions,permissions.get(item.id));
  if(item.domain==="permissions" && item.type==="schema" && permissions.get(item.id)) return renderPermissionSchemaDetail(permissions.get(item.id));
  if(item.domain==="events" && events.get(item.id)) return renderEventsDetail(registry,item,events.get(item.id));
  if(item.domain==="webhooks" && webhooks.get(item.id)) return renderWebhooksDetail(registry,item,webhooks.get(item.id));
  if(item.domain==="commerce" && item.type==="business-rule" && commerceRules.get(item.id)) return renderCommerceRuleDetail(registry,item,commerceRules.get(item.id));
  if(item.domain==="commerce" && item.type==="schema" && commerceSchemas.get(item.id)) return renderCommerceDetail(registry,item,commerceSchemas.get(item.id));
  if(item.domain==="integrations" && integrations.get(item.id)) return renderIntegrationDetail(registry,item,integrations.get(item.id));
  if(item.type==="field") return renderPrimitiveFieldDetail(registry,item,fieldRegistry.get(item.id));
  if(item.type==="schema" && ["core","shared"].includes(item.domain)) return renderCoreSchemaDetail(registry,item,coreSchemas.get(item.id));
  if(item.type==="schema" && item.domain==="content") return renderContentSchemaDetail(registry,item,contentSchemas.get(item.id));
  if(item.domain==="blocks") return renderBlockDetail(registry,item,blocks.get(item.id));
  if(item.domain==="seo" && item.type==="schema") return renderSeoDetail(registry,item,seoSchemas.get(item.id));
  if(item.domain==="forms" && item.type==="schema") return renderFormsDetail(registry,item,formsSchemas.get(item.id));
  if(item.domain==="marketing" && item.type==="schema") return renderMarketingDetail(registry,item,marketingSchemas.get(item.id));
  if(item.domain==="manifest" && item.type==="schema" && siteManifests.get(item.id)) return renderSiteManifestSchemaDetail(siteManifests.get(item.id));
  if(item.domain==="modules" && item.type==="module" && modules.get(item.id)) return renderModuleDetail(modules,modules.get(item.id));
  if(item.domain==="modules" && item.type==="capability"){ const capabilityId=item.canonicalCapabilityId??item.id.replace(/^modules\.capability\./,""); const capability=modules.get(capabilityId); if(capability) return renderCapabilityDetail(modules,capability); }
  if(item.domain==="api" && apiRegistry.get(item.id)) return renderApiDetail(apiRegistry,item) ?? renderRegistryDetail(registry,item);
  if(item.domain==="cms-ui" && cmsUiRegistry.get(item.id)) return renderCmsUiDetail(cmsUiRegistry,item) ?? renderRegistryDetail(registry,item);
  if(item.domain==="admin-ui" && adminUiRegistry?.get(item.id)) return renderAdminUiDetail(adminUiRegistry,item) ?? renderRegistryDetail(registry,item);
  if(item.domain==="examples" && item.type==="reference-example" && examplesRegistry?.get(item.id)) return renderExampleDetail(examplesRegistry.get(item.id));
  return renderRegistryDetail(registry,item);
}

export function renderCurrentRoute(registry, fieldRegistry, coreSchemas, contentSchemas, blocks, seoSchemas, formsSchemas, marketingSchemas, integrations, commerceSchemas, commerceRules, events, webhooks, permissions, siteManifests, modules, apiRegistry, cmsUiRegistry, adminUiRegistry, codexRegistry, examplesRegistry, globalSearch, relationships) {
  const route = resolveCurrentRoute(registry);
  const root = document.querySelector("[data-page-root]");
  const announcer = document.querySelector("[data-route-announcer]");
  if (!root) return;

  if (route.kind === "registry-index") {
    const filters = parseRegistryFilters(route.search);
    root.innerHTML = renderRegistryIndexShell(registry, filters);
    const results = root.querySelector("[data-registry-results]");
    if (results) results.innerHTML = renderRegistryRows(registry, filters);
    bindRegistryList(registry, filters);
  } else if (route.kind === "registry-detail") {
    root.innerHTML = renderRegistryItemByDomain(registry, route, fieldRegistry, coreSchemas, contentSchemas, blocks, seoSchemas, formsSchemas, marketingSchemas, integrations, commerceSchemas, commerceRules, events, webhooks, permissions, siteManifests, modules, apiRegistry, cmsUiRegistry, adminUiRegistry, examplesRegistry);
    addRelationshipShortcut(route.item);
    addDiffShortcut(route.item);
    bindCopyActions(registry);
    if (route.item?.domain === "webhooks") bindWebhookCopy(webhooks);
    hydrateRegistryChangeHistory(root, route.item);
    hydrateRegistryDeprecation(root, route.item);
    hydrateRegistryCustomerAccess(root, route.item);
  } else if (route.path === "/registry/relationships") {
    const filters=parseRelationshipFilters(route.search);root.innerHTML=renderRelationshipExplorer(relationships,filters);bindRelationshipExplorer(relationships,registry,filters);bindCopyActions(registry);
  } else if (route.path === "/platform/customer-access") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i></span><h2>Loading Customer Access</h2><p>Loading canonical customer policy, action, field, publishing and approval metadata.</p></div></div></section>`;
    loadCustomerAccessRoute(root,registry,route.search);
  } else if (route.path === "/standards/security") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i></span><h2>Loading Security Standards</h2><p>Loading canonical controls, verification metadata, secret classes and surface mappings.</p></div></div></section>`;
    loadSecurityRoute(root,registry,route.search);
  } else if (route.path === "/standards/privacy") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-user-shield" aria-hidden="true"></i></span><h2>Loading Privacy & Data</h2><p>Loading data classifications, field handling, retention, consent boundaries and privacy operations.</p></div></div></section>`;
    loadPrivacyRoute(root,registry,route.search);
  } else if (route.path === "/standards/accessibility") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-universal-access" aria-hidden="true"></i></span><h2>Loading Accessibility Standards</h2><p>Loading canonical accessibility controls, verification metadata, surface coverage and Contract Portal audit evidence.</p></div></div></section>`;
    loadAccessibilityRoute(root,registry,route.search);
  } else if (route.path === "/standards/performance") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-gauge-high" aria-hidden="true"></i></span><h2>Loading Performance Standards</h2><p>Loading canonical performance rules, measurable budgets and Contract Portal performance evidence.</p></div></div></section>`;
    loadPerformanceRoute(root,registry,route.search);
  } else if (route.path === "/development/validation") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-circle-check" aria-hidden="true"></i></span><h2>Loading Browser Validation</h2><p>Loading the local Site Manifest schema and shared validation rule bundle.</p></div></div></section>`;
    loadBrowserValidationRoute(root,registry);
  } else if (route.path === "/lifecycle/compatibility") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i></span><h2>Loading Compatibility Center</h2><p>Loading release readiness, platform surface and reference Site compatibility metadata.</p></div></div></section>`;
    loadCompatibilityRoute(root,registry,route.search);
  } else if (route.path === "/lifecycle/diff") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-code-compare" aria-hidden="true"></i></span><h2>Loading Contract Diff</h2><p>Historical release data is loaded only when this lifecycle tool is opened so normal portal navigation stays lightweight.</p></div></div></section>`;
    loadDiffRoute(root,registry,route.search);
  } else if (route.path === "/lifecycle/deprecations") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i></span><h2>Loading Deprecations</h2><p>Loading lifecycle, replacement, support-window and migration metadata.</p></div></div></section>`;
    loadDeprecationsRoute(root,registry,route.search);
  } else if (route.path === "/lifecycle/changelog") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i></span><h2>Loading Changelog</h2><p>Release-note history is loaded only when the Changelog is opened so normal portal navigation stays lightweight.</p></div></div></section>`;
    loadChangelogRoute(root,registry,route.search);
  } else if (route.path === "/search") {
    const filters=parseGlobalSearchFilters(route.search);root.innerHTML=renderGlobalSearchPage(globalSearch,filters);bindGlobalSearch(globalSearch);
  } else if (route.path === "/registry/fields") {
    const filters = parseFieldFilters(route.search);
    root.innerHTML = renderFieldsIndex(fieldRegistry, filters);
    bindFieldList(fieldRegistry);
  } else if (route.path === "/registry/content") {
    const filters=parseContentFilters(route.search);root.innerHTML=renderContentSchemasIndex(contentSchemas,filters);bindContentList(contentSchemas);
  } else if (route.path === "/registry/blocks") {
    const filters=parseBlockFilters(route.search);root.innerHTML=renderBlocksIndex(blocks,filters);bindBlockList(blocks);
  } else if (route.path === "/registry/seo") {
    const filters=parseSeoFilters(route.search);root.innerHTML=renderSeoIndex(seoSchemas,filters);bindSeoList(seoSchemas);
  } else if (route.path === "/registry/forms") {
    const filters=parseFormsFilters(route.search);root.innerHTML=renderFormsIndex(formsSchemas,filters);bindFormsList(formsSchemas);
  } else if (route.path === "/registry/marketing") {
    const filters=parseMarketingFilters(route.search);root.innerHTML=renderMarketingIndex(marketingSchemas,filters);bindMarketingList(marketingSchemas);
  } else if (route.path === "/registry/commerce-rules") {
    const filters=parseCommerceRuleFilters(route.search);root.innerHTML=renderCommerceRulesIndex(commerceRules,filters);bindCommerceRulesList(commerceRules);
  } else if (route.path === "/registry/commerce") {
    const filters=parseCommerceFilters(route.search);root.innerHTML=renderCommerceIndex(commerceSchemas,filters);bindCommerceList(commerceSchemas);
  } else if (route.path === "/events/registry") {
    const filters=parseEventsFilters(route.search);root.innerHTML=renderEventsIndex(events,filters);bindEventsList(events);
  } else if (route.path === "/events/webhooks") {
    const filters=parseWebhooksFilters(route.search);root.innerHTML=renderWebhooksIndex(webhooks,filters);bindWebhooksList(webhooks);bindCopyActions(registry);
  } else if (route.path === "/platform/modules") {
    const filters=parseModuleFilters(route.search);root.innerHTML=renderModulesIndex(modules,filters);bindModulesList(modules);bindCopyActions(registry);
  } else if (route.path === "/platform/api") {
    const filters=parseApiFilters(route.search);root.innerHTML=renderApiIndex(apiRegistry,filters);bindApiList(apiRegistry);bindCopyActions(registry);
  } else if (route.path === "/platform/permissions") {
    const filters=parsePermissionFilters(route.search);root.innerHTML=renderPermissionsIndex(permissions,filters);bindPermissionsList(permissions);bindCopyActions(registry);
  } else if (route.path === "/development/site-manifest") {
    const filters=parseManifestFilters(route.search);root.innerHTML=renderSiteManifestIndex(siteManifests,filters);bindSiteManifestList(siteManifests);bindCopyActions(registry);
  } else if (route.path === "/platform/customer-cms-ui") {
    const filters=parseCmsUiFilters(route.search);root.innerHTML=renderCmsUiIndex(cmsUiRegistry,filters);bindCmsUiList(cmsUiRegistry);bindCopyActions(registry);
  } else if (route.path === "/platform/admin-ui") {
    const filters=parseAdminUiFilters(route.search);root.innerHTML=renderAdminUiIndex(adminUiRegistry,filters);bindAdminUiList(adminUiRegistry,filters);bindCopyActions(registry);
  } else if (route.path === "/development/codex") {
    const filters=parseCodexFilters(route.search);root.innerHTML=renderCodexIndex(codexRegistry,filters);bindCodexList(codexRegistry,filters);bindCopyActions(registry);
  } else if (route.path === "/registry/health") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-heart-pulse" aria-hidden="true"></i></span><h2>Loading Registry Health</h2><p>Loading current release-candidate QA evidence.</p></div></div></section>`;
    loadHealthRoute(root);
  } else if (route.path === "/development/starters") {
    root.innerHTML=`<section class="paper-card"><div class="paper-card__body"><div class="search-page-empty"><span class="search-page-empty__icon"><i class="fa-solid fa-box-open" aria-hidden="true"></i></span><h2>Loading Starter Packs</h2><p>Loading current framework-neutral Site bootstrap packs.</p></div></div></section>`;
    loadStartersRoute(root);
  } else if (route.path === "/development/examples") {
    const filters=parseExamplesFilters(route.search);root.innerHTML=renderExamplesIndex(examplesRegistry,filters);bindExamplesList(examplesRegistry);bindCopyActions(registry);
  } else if (route.path === "/platform/integrations") {
    const filters=parseIntegrationsFilters(route.search);root.innerHTML=renderIntegrationsIndex(integrations,filters);bindIntegrationsList(integrations);
  } else if (route.path === "/registry/core" || route.path === "/registry/shared") {
    const filters = parseCoreFilters(route.search);
    const mode = route.path.endsWith("/shared") ? "shared" : "core";
    root.innerHTML = renderCoreSchemasIndex(coreSchemas, filters, mode);
    bindCoreList(coreSchemas, mode);
  } else {
    const renderer = renderers[route.path];
    root.innerHTML = renderer ? renderer(route) : renderPlanned(route);
  }

  document.title = `${route.title} | NEXT F Contracts`;
  setBreadcrumbs(route);
  updateActiveNav(route);

  if (announcer) announcer.textContent = `${route.title} page loaded`;
  window.scrollTo({ top: 0, behavior: "auto" });
  return route;
}


function bindAdminUiList(engine, filters) {
  const results=document.querySelector("[data-adminui-results]"),count=document.querySelector("[data-adminui-count]");
  const c={q:document.querySelector("[data-adminui-q]"),view:document.querySelector("[data-adminui-view]"),kind:document.querySelector("[data-adminui-kind]"),domain:document.querySelector("[data-adminui-domain]"),context:document.querySelector("[data-adminui-context]")};
  const read=()=>({q:c.q?.value.trim()??"",view:c.view?.value??"profiles",kind:c.kind?.value??"",domain:c.domain?.value??"",context:c.context?.value??""});
  const update=()=>{const f=read();if(results)results.innerHTML=renderAdminUiResults(engine,f);if(count)count.textContent=engine.search(f.q,f).length;history.replaceState(null,"",`#/platform/admin-ui${buildAdminUiQuery(f)}`);const pf=document.querySelector("[data-adminui-profile-filters]");if(pf)pf.hidden=f.view!=="profiles";};
  let t;c.q?.addEventListener("input",()=>{clearTimeout(t);t=setTimeout(update,100)});[c.view,c.kind,c.domain,c.context].forEach(x=>x?.addEventListener("change",update));document.querySelector("[data-adminui-clear]")?.addEventListener("click",()=>{if(c.q)c.q.value="";if(c.view)c.view.value="profiles";if(c.kind)c.kind.value="";if(c.domain)c.domain.value="";if(c.context)c.context.value="";update();c.q?.focus();});const pf=document.querySelector("[data-adminui-profile-filters]");if(pf)pf.hidden=filters.view!=="profiles";
}


function bindCodexList(engine, filters) {
  const results=document.querySelector("[data-codex-results]"),count=document.querySelector("[data-codex-count]");
  const q=document.querySelector("[data-codex-q]"),view=document.querySelector("[data-codex-view]");
  const read=()=>({q:q?.value.trim()??"",view:view?.value??"workflows"});
  const update=()=>{const f=read();if(results)results.innerHTML=renderCodexResults(engine,f);if(count)count.textContent=engine.search(f.q,f).length;history.replaceState(null,"",`#/development/codex${buildCodexQuery(f)}`);};
  let t;q?.addEventListener("input",()=>{clearTimeout(t);t=setTimeout(update,100)});view?.addEventListener("change",update);document.querySelector("[data-codex-clear]")?.addEventListener("click",()=>{if(q)q.value="";if(view)view.value="workflows";update();q?.focus();});
}


function bindExamplesList(engine) {
  const results=document.querySelector("[data-examples-results]"),count=document.querySelector("[data-examples-count]");
  const q=document.querySelector("[data-examples-q]"),category=document.querySelector("[data-examples-category]"),complexity=document.querySelector("[data-examples-complexity]"),siteType=document.querySelector("[data-examples-type]");
  const read=()=>({q:q?.value.trim()??"",category:category?.value??"",complexity:complexity?.value??"",siteType:siteType?.value??""});
  const update=()=>{const f=read();if(results)results.innerHTML=renderExamplesResults(engine,f);if(count)count.textContent=engine.search(f.q,f).length;history.replaceState(null,"",`#/development/examples${buildExamplesQuery(f)}`);};
  let t;q?.addEventListener("input",()=>{clearTimeout(t);t=setTimeout(update,100)});[category,complexity,siteType].forEach(x=>x?.addEventListener("change",update));document.querySelector("[data-examples-clear]")?.addEventListener("click",()=>{if(q)q.value="";if(category)category.value="";if(complexity)complexity.value="";if(siteType)siteType.value="";update();q?.focus();});
}

function bindGlobalSearch(engine) {
  const results=document.querySelector("[data-global-search-results]");
  const count=document.querySelector("[data-global-search-count]");
  const q=document.querySelector("[data-global-search-q]");
  const kind=document.querySelector("[data-global-search-kind]");
  const domain=document.querySelector("[data-global-search-domain]");
  const status=document.querySelector("[data-global-search-status]");
  const read=()=>({q:q?.value.trim()??"",kind:kind?.value??"",domain:domain?.value??"",status:status?.value??""});
  const update=()=>{const f=read();const response=engine.search(f.q,f,{limit:100});if(results)results.innerHTML=renderGlobalSearchResults(engine,f);if(count)count.textContent=String(response.total);history.replaceState(null,"",`#/search${buildGlobalSearchQuery(f)}`);bindExamples();};
  const bindExamples=()=>document.querySelectorAll("[data-search-example]").forEach(button=>button.addEventListener("click",()=>{if(q)q.value=button.dataset.searchExample??"";update();q?.focus();}));
  let timer=null;q?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(update,90)});[kind,domain,status].forEach(el=>el?.addEventListener("change",update));document.querySelector("[data-global-search-clear]")?.addEventListener("click",()=>{if(q)q.value="";if(kind)kind.value="";if(domain)domain.value="";if(status)status.value="";update();q?.focus();});bindExamples();
}


function addRelationshipShortcut(item){
  if(!item)return;
  const host=document.querySelector(".registry-detail__actions")||document.querySelector(".page-header .header-actions")||document.querySelector(".page-header__actions")||document.querySelector(".header-actions");
  if(!host||host.querySelector(".relationship-shortcut"))return;
  const link=document.createElement("a");link.className="button button--secondary button--compact relationship-shortcut";link.href=`#/registry/relationships?node=${encodeURIComponent(item.id)}`;link.innerHTML='<i class="fa-solid fa-circle-nodes" aria-hidden="true"></i> Relationships';host.appendChild(link);
}

function bindRelationshipExplorer(engine,registry,initialFilters){
  const controls={node:document.querySelector("[data-relationship-node]"),direction:document.querySelector("[data-relationship-direction]"),depth:document.querySelector("[data-relationship-depth]"),family:document.querySelector("[data-relationship-family]"),type:document.querySelector("[data-relationship-type]"),origin:document.querySelector("[data-relationship-origin]"),domain:document.querySelector("[data-relationship-domain]"),from:document.querySelector("[data-relationship-from]"),to:document.querySelector("[data-relationship-to]"),pathDirection:document.querySelector("[data-relationship-path-direction]"),pathDepth:document.querySelector("[data-relationship-path-depth]")};
  const focusRoot=document.querySelector("[data-relationship-focus-results]"),pathRoot=document.querySelector("[data-relationship-path-results]"),focusLabel=document.querySelector("[data-relationship-focus-label]");
  const read=()=>({node:controls.node?.value.trim()??"",direction:controls.direction?.value??"both",depth:controls.depth?.value??"1",family:controls.family?.value??"",type:controls.type?.value??"",origin:controls.origin?.value??"",domain:controls.domain?.value??"",from:controls.from?.value.trim()??"",to:controls.to?.value.trim()??"",pathDirection:controls.pathDirection?.value??"both",pathDepth:controls.pathDepth?.value??"6"});
  const syncUrl=(f)=>history.replaceState(null,"",`#/registry/relationships${buildRelationshipQuery(f)}`);
  const bindDynamic=()=>{
    bindCopyActions(registry);
    document.querySelectorAll("[data-relationship-example]").forEach(button=>button.addEventListener("click",()=>{if(controls.node)controls.node.value=button.dataset.relationshipExample??"";updateFocus();controls.node?.focus();}));
    document.querySelectorAll("[data-copy-relationship-path]").forEach(button=>button.addEventListener("click",async()=>{try{await copyText(button.dataset.copyRelationshipPath??"");showToast("Relationship path copied");}catch{showToast("Copy is not available in this browser","danger");}}));
  };
  const updateFocus=()=>{const f=read();if(focusRoot)focusRoot.innerHTML=renderRelationshipFocusOnly(engine,f);const resolved=engine.resolveInput(f.node);if(focusLabel)focusLabel.textContent=resolved?.id??(f.node?"Unknown ID":"Not selected");syncUrl(f);bindDynamic();};
  const updatePath=()=>{const f=read();if(pathRoot)pathRoot.innerHTML=renderRelationshipPathOnly(engine,f);syncUrl(f);bindDynamic();};
  let timer=null;controls.node?.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(()=>{if(!controls.node.value.trim()||engine.resolveInput(controls.node.value))updateFocus();},120)});controls.node?.addEventListener("change",updateFocus);controls.node?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();updateFocus();}});
  [controls.direction,controls.depth,controls.family,controls.type,controls.origin,controls.domain].forEach(x=>x?.addEventListener("change",updateFocus));
  [controls.pathDirection,controls.pathDepth].forEach(x=>x?.addEventListener("change",updatePath));
  [controls.from,controls.to].forEach(x=>{x?.addEventListener("change",updatePath);x?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();updatePath();}});});
  document.querySelector("[data-relationship-clear]")?.addEventListener("click",()=>{if(controls.node)controls.node.value="";if(controls.direction)controls.direction.value="both";if(controls.depth)controls.depth.value="1";if(controls.family)controls.family.value="";if(controls.type)controls.type.value="";if(controls.origin)controls.origin.value="";if(controls.domain)controls.domain.value="";updateFocus();controls.node?.focus();});
  document.querySelector("[data-relationship-path-clear]")?.addEventListener("click",()=>{if(controls.from)controls.from.value="";if(controls.to)controls.to.value="";if(controls.pathDirection)controls.pathDirection.value="both";if(controls.pathDepth)controls.pathDepth.value="6";updatePath();controls.from?.focus();});
  bindDynamic();
}



async function loadCompatibilityRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./compatibility-registry-engine.js'),import('./compatibility-pages.js')]);
    const engine=await engineModule.loadCompatibility();
    const current=parseHash();if(current.path!=='/lifecycle/compatibility')return;
    const filters=engineModule.parseCompatibilityFilters(current.search);
    root.innerHTML=pageModule.renderCompatibilityPage(engine,filters);
    document.documentElement.dataset.compatibilitySource=engine.source;
    bindCompatibilityPage(engine,registry,filters,engineModule.buildCompatibilityQuery,pageModule.renderCompatibilityPage,pageModule.renderCompatibilityResults);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Compatibility Center failed to initialize</h1><p>The compatibility metadata or its generated fallback could not be loaded.</p></div>`;}
}

function bindCompatibilityPage(engine,registry,initialFilters,buildQuery,renderPage,renderResults){
  const q=document.querySelector('[data-compat-q]'),status=document.querySelector('[data-compat-status]'),type=document.querySelector('[data-compat-type]'),results=document.querySelector('[data-compat-results]');
  const read=()=>({view:initialFilters.view??'overview',q:q?.value.trim()??'',status:status?.value??'',type:type?.value??''});
  const update=()=>{const f=read();history.replaceState(null,'',`#/lifecycle/compatibility${buildQuery(f)}`);if(results)results.innerHTML=renderResults(engine,f);};
  let timer=null;q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(update,90)});[status,type].forEach(x=>x?.addEventListener('change',update));
  document.querySelector('[data-compat-clear]')?.addEventListener('click',()=>{if(q)q.value='';if(status)status.value='';if(type)type.value='';update();q?.focus();});
}

function addDiffShortcut(item){
  if(!item)return;
  const host=document.querySelector(".registry-detail__actions")||document.querySelector(".page-header .header-actions")||document.querySelector(".page-header__actions")||document.querySelector(".header-actions");
  if(!host||host.querySelector(".diff-shortcut"))return;
  const link=document.createElement("a");link.className="button button--secondary button--compact diff-shortcut";link.href=`#/lifecycle/diff?from=0.25.0&to=0.26.0&item=${encodeURIComponent(item.id)}`;link.innerHTML='<i class="fa-solid fa-code-compare" aria-hidden="true"></i> Version history';host.appendChild(link);
}

async function loadCustomerAccessRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./customer-access-registry-engine.js?v=1.1.0-r1'),import('./customer-access-pages.js?v=1.1.0-r1')]);
    const engine=await engineModule.loadCustomerAccessRegistry();
    const current=parseHash();if(current.path!=='/platform/customer-access')return;
    const filters=engineModule.parseCustomerAccessFilters(current.search);
    root.innerHTML=pageModule.renderCustomerAccessPage(engine,filters);
    document.documentElement.dataset.customerAccessSource=engine.source;
    bindCustomerAccessPage(engine,filters,engineModule.buildCustomerAccessQuery,pageModule.renderCustomerAccessResults);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Customer Access failed to initialize</h1><p>The canonical policy registry or its generated fallback could not be loaded.</p></div>`;}
}

function bindCustomerAccessPage(engine,initialFilters,buildQuery,renderResults){
  const controls={q:document.querySelector('[data-customer-access-q]'),mode:document.querySelector('[data-customer-access-mode]'),module:document.querySelector('[data-customer-access-module]'),publishing:document.querySelector('[data-customer-access-publishing]'),action:document.querySelector('[data-customer-access-action]')};
  if(!Object.values(controls).some(Boolean))return;
  const read=()=>({view:'policies',id:'',q:controls.q?.value.trim()??'',mode:controls.mode?.value??'',module:controls.module?.value??'',publishing:controls.publishing?.value??'',action:controls.action?.value??''});
  const update=()=>{const filters=read();const results=document.querySelector('[data-customer-access-results]'),count=document.querySelector('[data-customer-access-count]');if(results)results.innerHTML=renderResults(engine,filters);if(count)count.textContent=String(engine.search(filters).length);history.replaceState(null,'',`#/platform/customer-access${buildQuery(filters)}`);};
  let timer=null;controls.q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(update,90)});[controls.mode,controls.module,controls.publishing,controls.action].forEach(control=>control?.addEventListener('change',update));
  document.querySelector('[data-customer-access-clear]')?.addEventListener('click',()=>{for(const control of Object.values(controls))if(control)control.value='';update();controls.q?.focus();});
}

async function loadDiffRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./diff-registry-engine.js'),import('./diff-pages.js?v=1.0.0-r1')]);
    const engine=await engineModule.loadContractDiff();
    const current=parseHash();if(current.path!=='/lifecycle/diff')return;
    const filters=engineModule.parseDiffFilters(current.search);
    root.innerHTML=pageModule.renderDiffPage(engine,filters);
    document.documentElement.dataset.contractDiffSource=engine.source;
    bindDiffPage(engine,registry,filters,engineModule.buildDiffQuery,pageModule.renderDiffPage);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Contract Diff failed to initialize</h1><p>The exact historical release dataset or its generated fallback could not be loaded.</p></div>`;}
}

function bindDiffPage(engine, registry, initialFilters, buildDiffQuery, renderDiffPage){
  const c={from:document.querySelector('[data-diff-from]'),to:document.querySelector('[data-diff-to]'),q:document.querySelector('[data-diff-q]'),domain:document.querySelector('[data-diff-domain]'),type:document.querySelector('[data-diff-type]'),impact:document.querySelector('[data-diff-impact]'),change:document.querySelector('[data-diff-change]'),unchanged:document.querySelector('[data-diff-unchanged]')};
  const read=()=>({from:c.from?.value??initialFilters.from,to:c.to?.value??initialFilters.to,q:c.q?.value.trim()??'',domain:c.domain?.value??'',type:c.type?.value??'',impact:c.impact?.value??'',change:c.change?.value??'',item:initialFilters.item??'',includeUnchanged:Boolean(c.unchanged?.checked)});
  const navigate=(filters)=>{history.replaceState(null,'',`#/lifecycle/diff${buildDiffQuery(filters)}`);const pageRoot=document.querySelector('[data-page-root]');if(pageRoot){pageRoot.innerHTML=renderDiffPage(engine,filters);bindDiffPage(engine,registry,filters,buildDiffQuery,renderDiffPage);bindCopyActions(registry);}};
  const update=()=>navigate(read());
  let timer=null;c.q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(update,100)});[c.from,c.to,c.domain,c.type,c.impact,c.change,c.unchanged].forEach(x=>x?.addEventListener('change',update));
  document.querySelector('[data-diff-swap]')?.addEventListener('click',()=>{const f=read();[f.from,f.to]=[f.to,f.from];f.item='';navigate(f);});
  document.querySelector('[data-diff-clear]')?.addEventListener('click',()=>{const f=read();f.q='';f.domain='';f.type='';f.impact='';f.change='';f.includeUnchanged=false;f.item='';navigate(f);});
}


async function loadSecurityRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./security-registry-engine.js'),import('./security-pages.js')]);
    const engine=await engineModule.loadSecurityRegistry();
    const current=parseHash();if(current.path!=='/standards/security')return;
    const filters=engineModule.parseSecurityFilters(current.search);
    root.innerHTML=pageModule.renderSecurityPage(engine,filters);
    document.documentElement.dataset.securitySource=engine.source;
    bindSecurityPage(engine,registry,filters,engineModule.buildSecurityQuery,pageModule.renderSecurityPage,pageModule.renderSecurityResults);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Security Standards failed to initialize</h1><p>The security registry or its generated fallback could not be loaded.</p></div>`;}
}

function bindSecurityPage(engine,registry,initialFilters,buildQuery,renderPage,renderResults){
  const c={q:document.querySelector('[data-security-q]'),category:document.querySelector('[data-security-category]'),obligation:document.querySelector('[data-security-obligation]'),severity:document.querySelector('[data-security-severity]'),scope:document.querySelector('[data-security-scope]'),module:document.querySelector('[data-security-module]'),applicability:document.querySelector('[data-security-applicability]')};
  if(!Object.values(c).some(Boolean))return;
  const read=()=>({view:initialFilters.view??'controls',id:initialFilters.id??'',q:c.q?.value.trim()??'',category:c.category?.value??'',obligation:c.obligation?.value??'',severity:c.severity?.value??'',scope:c.scope?.value??'',module:c.module?.value??'',applicability:c.applicability?.value??''});
  const update=()=>{const f=read();const results=document.querySelector('[data-security-results]'),count=document.querySelector('[data-security-count]');if(results)results.innerHTML=renderResults(engine,f);if(count)count.textContent=String(engine.search(f).length);history.replaceState(null,'',`#/standards/security${buildQuery(f)}`);};
  let timer=null;c.q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(update,90)});[c.category,c.obligation,c.severity,c.scope,c.module,c.applicability].forEach(x=>x?.addEventListener('change',update));
  document.querySelector('[data-security-clear]')?.addEventListener('click',()=>{for(const x of Object.values(c))if(x){if(x.tagName==='SELECT')x.value='';else x.value='';}update();c.q?.focus();});
}


async function loadPrivacyRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./privacy-registry-engine.js'),import('./privacy-pages.js')]);
    const engine=await engineModule.loadPrivacyRegistry();
    const current=parseHash();if(current.path!=='/standards/privacy')return;
    const filters=engineModule.parsePrivacyFilters(current.search);
    root.innerHTML=pageModule.renderPrivacyPage(engine,filters);
    document.documentElement.dataset.privacySource=engine.source;
    bindPrivacyPage(engine,registry,filters,engineModule.buildPrivacyQuery,pageModule.renderPrivacyPage,pageModule.renderPrivacyResults);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Privacy & Data failed to initialize</h1><p>The privacy registry or its generated fallback could not be loaded.</p></div>`;}
}

function bindPrivacyPage(engine,registry,initialFilters,buildQuery,renderPage,renderResults){
  const c={q:document.querySelector('[data-privacy-q]'),classification:document.querySelector('[data-privacy-classification]'),qualifier:document.querySelector('[data-privacy-qualifier]'),retention:document.querySelector('[data-privacy-retention]'),consent:document.querySelector('[data-privacy-consent]'),public:document.querySelector('[data-privacy-public]'),redaction:document.querySelector('[data-privacy-redaction]'),flow:document.querySelector('[data-privacy-flow]'),flowValue:document.querySelector('[data-privacy-flow-value]')};
  if(!Object.values(c).some(Boolean))return;
  const read=()=>({view:'fields',id:'',q:c.q?.value.trim()??'',classification:c.classification?.value??'',qualifier:c.qualifier?.value??'',retention:c.retention?.value??'',consent:c.consent?.value??'',public:c.public?.value??'',redaction:c.redaction?.value??'',flow:c.flow?.value??'',flowValue:c.flowValue?.value??''});
  const update=()=>{const f=read();const results=document.querySelector('[data-privacy-results]'),count=document.querySelector('[data-privacy-count]');if(results)results.innerHTML=renderResults(engine,f);if(count)count.textContent=String(engine.search(f).length);history.replaceState(null,'',`#/standards/privacy${buildQuery(f)}`);};
  let timer=null;c.q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(update,90)});[c.classification,c.qualifier,c.retention,c.consent,c.public,c.redaction,c.flow,c.flowValue].forEach(x=>x?.addEventListener('change',update));
  document.querySelector('[data-privacy-clear]')?.addEventListener('click',()=>{for(const x of Object.values(c))if(x)x.value='';update();c.q?.focus();});
}

async function loadAccessibilityRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./accessibility-registry-engine.js'),import('./accessibility-pages.js')]);
    const engine=await engineModule.loadAccessibilityRegistry();
    const current=parseHash();if(current.path!=='/standards/accessibility')return;
    const filters=engineModule.parseAccessibilityFilters(current.search);
    root.innerHTML=pageModule.renderAccessibilityPage(engine,filters);
    document.documentElement.dataset.accessibilitySource=engine.source;
    bindAccessibilityPage(engine,registry,filters,engineModule.buildAccessibilityQuery,pageModule.renderAccessibilityPage,pageModule.renderAccessibilityResults);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Accessibility Standards failed to initialize</h1><p>The accessibility registry or its generated fallback could not be loaded.</p></div>`;}
}

function bindAccessibilityPage(engine,registry,initialFilters,buildQuery,renderPage,renderResults){
  const c={q:document.querySelector('[data-a11y-q]'),category:document.querySelector('[data-a11y-category]'),severity:document.querySelector('[data-a11y-severity]'),uiType:document.querySelector('[data-a11y-ui-type]'),verification:document.querySelector('[data-a11y-verification]'),applicability:document.querySelector('[data-a11y-applicability]'),manual:document.querySelector('[data-a11y-manual]')};
  if(!Object.values(c).some(Boolean))return;
  const read=()=>({view:initialFilters.view??'controls',id:initialFilters.id??'',q:c.q?.value.trim()??'',category:c.category?.value??'',severity:c.severity?.value??'',uiType:c.uiType?.value??'',verification:c.verification?.value??'',applicability:c.applicability?.value??'',manual:c.manual?.value??''});
  const update=()=>{const f=read();const results=document.querySelector('[data-a11y-results]'),count=document.querySelector('[data-a11y-count]');if(results)results.innerHTML=renderResults(engine,f);if(count)count.textContent=String(engine.search(f).length);history.replaceState(null,'',`#/standards/accessibility${buildQuery(f)}`);};
  let timer=null;c.q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(update,90)});[c.category,c.severity,c.uiType,c.verification,c.applicability,c.manual].forEach(x=>x?.addEventListener('change',update));
  document.querySelector('[data-a11y-clear]')?.addEventListener('click',()=>{for(const x of Object.values(c))if(x)x.value='';update();c.q?.focus();});
}

async function loadPerformanceRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./performance-registry-engine.js'),import('./performance-pages.js')]);
    const engine=await engineModule.loadPerformanceRegistry();
    const current=parseHash();if(current.path!=='/standards/performance')return;
    const filters=engineModule.parsePerformanceFilters(current.search);
    root.innerHTML=pageModule.renderPerformancePage(engine,filters);
    document.documentElement.dataset.performanceSource=engine.source;
    bindPerformancePage(engine,registry,filters,engineModule.buildPerformanceQuery,pageModule.renderPerformancePage,pageModule.renderPerformanceResults);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Performance Standards failed to initialize</h1><p>The performance registry or its generated fallback could not be loaded.</p></div>`;}
}

function bindPerformancePage(engine,registry,initialFilters,buildQuery,renderPage,renderResults){
  const c={q:document.querySelector('[data-performance-q]'),category:document.querySelector('[data-performance-category]'),result:document.querySelector('[data-performance-result]')};
  if(!Object.values(c).some(Boolean))return;
  const read=()=>({view:initialFilters.view??'rules',id:initialFilters.id??'',q:c.q?.value.trim()??'',category:c.category?.value??'',result:c.result?.value??''});
  const update=()=>{const f=read();const results=document.querySelector('[data-performance-results]'),count=document.querySelector('[data-performance-count]');if(results)results.innerHTML=renderResults(engine,f);if(count)count.textContent=String(f.view==='budgets'?engine.searchBudgets(f).length:engine.searchRules(f).length);history.replaceState(null,'',`#/standards/performance${buildQuery(f)}`);};
  let timer=null;c.q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(update,90)});[c.category,c.result].forEach(x=>x?.addEventListener('change',update));
  document.querySelector('[data-performance-clear]')?.addEventListener('click',()=>{for(const x of Object.values(c))if(x)x.value='';update();c.q?.focus();});
}

async function hydrateRegistryDeprecation(root,item){
  if(!root||!item?.id)return;
  try{
    const [engineModule,pageModule]=await Promise.all([import('./deprecations-registry-engine.js'),import('./deprecations-pages.js')]);
    const engine=await engineModule.loadDeprecations();
    const current=parseHash();if(!current.path.startsWith('/registry/item/'))return;
    let currentId=current.path.slice('/registry/item/'.length);try{currentId=decodeURIComponent(currentId);}catch{}
    if(currentId!==item.id||!root.isConnected||root.querySelector('[data-registry-deprecation]'))return;
    const html=pageModule.renderRegistryDeprecationCard(engine,item.id);if(html)root.insertAdjacentHTML('beforeend',html);
  }catch(error){console.info('Deprecation metadata unavailable for Registry detail:',error.message);}
}

async function hydrateRegistryCustomerAccess(root,item){
  if(!root||!item?.id)return;
  try{
    const [engineModule,pageModule]=await Promise.all([import('./customer-access-registry-engine.js'),import('./customer-access-pages.js')]);
    const engine=await engineModule.loadCustomerAccessRegistry();
    const current=parseHash();if(!current.path.startsWith('/registry/item/'))return;
    let currentId=current.path.slice('/registry/item/'.length);try{currentId=decodeURIComponent(currentId);}catch{}
    if(currentId!==item.id||!root.isConnected||root.querySelector('[data-registry-customer-access]'))return;
    const html=pageModule.renderRegistryCustomerAccessCard(engine,item);if(html)root.insertAdjacentHTML('beforeend',html);
  }catch(error){console.info('Customer Access metadata unavailable for Registry detail:',error.message);}
}

async function loadDeprecationsRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./deprecations-registry-engine.js'),import('./deprecations-pages.js')]);
    const engine=await engineModule.loadDeprecations();
    const current=parseHash();if(current.path!=='/lifecycle/deprecations')return;
    const filters=engineModule.parseDeprecationFilters(current.search);
    root.innerHTML=pageModule.renderDeprecationsPage(engine,filters);
    document.documentElement.dataset.deprecationsSource=engine.source;
    bindDeprecationsPage(engine,registry,filters,engineModule.buildDeprecationQuery,pageModule.renderDeprecationsPage);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Deprecations failed to initialize</h1><p>The lifecycle registry or its generated fallback could not be loaded.</p></div>`;}
}

function bindDeprecationsPage(engine,registry,initialFilters,buildQuery,renderPage){
  const c={q:document.querySelector('[data-deprecation-q]'),status:document.querySelector('[data-deprecation-status]'),domain:document.querySelector('[data-deprecation-domain]'),type:document.querySelector('[data-deprecation-type]'),severity:document.querySelector('[data-deprecation-severity]'),replacement:document.querySelector('[data-deprecation-replacement]'),module:document.querySelector('[data-deprecation-module]'),migration:document.querySelector('[data-deprecation-migration]')};
  if(!Object.values(c).some(Boolean))return;
  const read=()=>({view:initialFilters.view??'records',id:initialFilters.id??'',q:c.q?.value.trim()??'',status:c.status?.value??'',domain:c.domain?.value??'',type:c.type?.value??'',severity:c.severity?.value??'',replacement:c.replacement?.value??'',module:c.module?.value??'',migration:Boolean(c.migration?.checked)});
  const navigate=(f)=>{history.replaceState(null,'',`#/lifecycle/deprecations${buildQuery(f)}`);const pageRoot=document.querySelector('[data-page-root]');if(pageRoot){pageRoot.innerHTML=renderPage(engine,f);bindDeprecationsPage(engine,registry,f,buildQuery,renderPage);bindCopyActions(registry);}};
  let timer=null;c.q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>navigate(read()),90)});[c.status,c.domain,c.type,c.severity,c.replacement,c.module,c.migration].forEach(x=>x?.addEventListener('change',()=>navigate(read())));
  document.querySelector('[data-deprecation-clear]')?.addEventListener('click',()=>navigate({view:'records',id:'',q:'',status:'',domain:'',type:'',severity:'',replacement:'',module:'',migration:false}));
}

async function hydrateRegistryChangeHistory(root,item){
  if(!root||!item?.id)return;
  try{
    const [engineModule,pageModule]=await Promise.all([import('./changelog-registry-engine.js'),import('./changelog-pages.js')]);
    const engine=await engineModule.loadChangelog();
    const current=parseHash();
    if(!current.path.startsWith('/registry/item/'))return;
    let currentId=current.path.slice('/registry/item/'.length);try{currentId=decodeURIComponent(currentId);}catch{}
    if(currentId!==item.id||!root.isConnected)return;
    if(root.querySelector('[data-contract-change-history]'))return;
    root.insertAdjacentHTML('beforeend',pageModule.renderContractHistoryCard(engine,item.id));
  }catch(error){console.info('Changelog history unavailable for Registry detail:',error.message);}
}

async function loadChangelogRoute(root,registry,search){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./changelog-registry-engine.js'),import('./changelog-pages.js')]);
    const engine=await engineModule.loadChangelog();
    const current=parseHash();if(current.path!=='/lifecycle/changelog')return;
    const filters=engineModule.parseChangelogFilters(current.search);
    root.innerHTML=pageModule.renderChangelogPage(engine,filters);
    document.documentElement.dataset.changelogSource=engine.source;
    bindChangelogPage(engine,registry,filters,engineModule.buildChangelogQuery,pageModule.renderChangelogPage);
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Changelog failed to initialize</h1><p>The release-note registry or its generated fallback could not be loaded.</p></div>`;}
}

function bindChangelogPage(engine,registry,initialFilters,buildQuery,renderPage){
  const c={q:document.querySelector('[data-changelog-q]'),release:document.querySelector('[data-changelog-release]'),phase:document.querySelector('[data-changelog-phase]'),category:document.querySelector('[data-changelog-category]'),domain:document.querySelector('[data-changelog-domain]'),module:document.querySelector('[data-changelog-module]'),evidence:document.querySelector('[data-changelog-evidence]'),breaking:document.querySelector('[data-changelog-breaking]'),migration:document.querySelector('[data-changelog-migration]')};
  if(!Object.values(c).some(Boolean))return;
  const read=()=>({view:initialFilters.view??'overview',q:c.q?.value.trim()??'',release:c.release?.value??initialFilters.release??'',entry:initialFilters.entry??'',phase:c.phase?.value??'',category:c.category?.value??'',domain:c.domain?.value??'',module:c.module?.value??'',evidence:c.evidence?.value??'',breaking:Boolean(c.breaking?.checked),migration:Boolean(c.migration?.checked),affected:initialFilters.affected??''});
  const navigate=(f)=>{history.replaceState(null,'',`#/lifecycle/changelog${buildQuery(f)}`);const pageRoot=document.querySelector('[data-page-root]');if(pageRoot){pageRoot.innerHTML=renderPage(engine,f);bindChangelogPage(engine,registry,f,buildQuery,renderPage);bindCopyActions(registry);}};
  let timer=null;c.q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>navigate(read()),90)});[c.release,c.phase,c.category,c.domain,c.module,c.evidence,c.breaking,c.migration].forEach(x=>x?.addEventListener('change',()=>navigate(read())));
  document.querySelector('[data-changelog-clear]')?.addEventListener('click',()=>{const f=read();f.q='';f.release='';f.phase='';f.category='';f.domain='';f.module='';f.evidence='';f.breaking=false;f.migration=false;f.affected='';navigate(f);});
}

export function startRouter(registry, fieldRegistry, coreSchemas, contentSchemas, blocks, seoSchemas, formsSchemas, marketingSchemas, integrations, commerceSchemas, commerceRules, events, webhooks, permissions, siteManifests, modules, apiRegistry, cmsUiRegistry, adminUiRegistry, codexRegistry, examplesRegistry, globalSearch, relationships, onRouteChange = null) {
  const handle = () => {
    const route = renderCurrentRoute(registry, fieldRegistry, coreSchemas, contentSchemas, blocks, seoSchemas, formsSchemas, marketingSchemas, integrations, commerceSchemas, commerceRules, events, webhooks, permissions, siteManifests, modules, apiRegistry, cmsUiRegistry, adminUiRegistry, codexRegistry, examplesRegistry, globalSearch, relationships);
    onRouteChange?.(route);
  };
  window.addEventListener("hashchange", handle);
  if (!window.location.hash) window.location.hash = "#/overview";
  else handle();
}

async function loadBrowserValidationRoute(root,registry){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./browser-validation-engine.js'),import('./browser-validation-pages.js')]);
    const engine=await engineModule.loadBrowserValidation();
    const current=parseHash();if(current.path!=='/development/validation')return;
    root.innerHTML=pageModule.renderValidationPage(engine);
    document.documentElement.dataset.browserValidationSource=engine.source;
    const input=document.querySelector('[data-validation-input]'),file=document.querySelector('[data-validation-file]'),sample=document.querySelector('[data-validation-sample]'),results=document.querySelector('[data-validation-results]');
    const render=()=>{const r=engine.validateText(input?.value??'');if(results)results.innerHTML=pageModule.renderValidationResult(r);bindCopyActions(registry);};
    document.querySelector('[data-validation-run]')?.addEventListener('click',render);
    document.querySelector('[data-validation-clear]')?.addEventListener('click',()=>{if(input)input.value='';if(sample)sample.value='';if(file)file.value='';if(results)results.innerHTML='<div class="empty-state"><h3>No validation run yet</h3><p>Load or paste a manifest, then validate.</p></div>';input?.focus();});
    sample?.addEventListener('change',()=>{const found=engine.samples.find(x=>x.id===sample.value);if(found&&input){input.value=JSON.stringify(found.manifest,null,2);render();}});
    file?.addEventListener('change',async()=>{const f=file.files?.[0];if(!f)return;if(!/\.json$/i.test(f.name)){if(results)results.innerHTML='<div class="validation-verdict validation-verdict--invalid"><div><strong>Invalid file</strong></div><span>Select a .json file.</span></div>';return;}const text=await f.text();if(input)input.value=text;render();});
    bindCopyActions(registry);
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Browser Validation failed to initialize</h1><p>The validation rule bundle or its generated fallback could not be loaded.</p></div>`;}
}

async function loadStartersRoute(root){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./starters-registry-engine.js'),import('./starters-pages.js')]);
    const engine=await engineModule.loadStartersRegistry();
    const current=parseHash();if(current.path!=='/development/starters')return;
    root.innerHTML=pageModule.renderStartersPage(engine);
    document.documentElement.dataset.startersRegistrySource=engine.source;
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Starter Packs failed to initialize</h1><p>The starter registry or generated fallback could not be loaded.</p></div>`;}
}


async function loadHealthRoute(root){
  try{
    const [engineModule,pageModule]=await Promise.all([import('./health-registry-engine.js'),import('./health-pages.js')]);
    const engine=await engineModule.loadHealthRegistry();
    const current=parseHash();if(current.path!=='/registry/health')return;
    root.innerHTML=pageModule.renderHealthPage(engine);
    document.documentElement.dataset.healthRegistrySource=engine.source;
    const q=document.querySelector('[data-health-q]'),category=document.querySelector('[data-health-category]'),result=document.querySelector('[data-health-result]'),severity=document.querySelector('[data-health-severity]'),out=document.querySelector('[data-health-results]'),count=document.querySelector('[data-health-count]');
    const update=()=>{const rows=engine.filter({q:q?.value??'',category:category?.value??'',result:result?.value??'',severity:severity?.value??''});if(out)out.innerHTML=pageModule.renderHealthChecks(rows);if(count)count.textContent=`${rows.length} of ${engine.report.checks.length} checks`;};
    let timer=null;q?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(update,90)});[category,result,severity].forEach(x=>x?.addEventListener('change',update));
    document.querySelector('[data-health-rerun]')?.addEventListener('click',()=>{const ids=engine.report.checks.map(x=>x.checkId),consistent=new Set(ids).size===ids.length&&engine.report.summary.total===engine.report.checks.length;showToast(consistent?'Browser-safe report consistency passed':'Registry Health report consistency failed',consistent?'success':'danger');});
  }catch(error){console.error(error);root.innerHTML=`<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Registry Health failed to initialize</h1><p>The QA report or generated fallback could not be loaded.</p></div>`;}
}
