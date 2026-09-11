import { startRouter } from "./router.js?v=1.0.0-r3";
import { createNavigationSearch } from "./search.js";
import { loadRegistry } from "./registry-engine.js";
import { loadFieldRegistry } from "./field-registry-engine.js";
import { loadCoreSchemas } from "./core-schema-engine.js";
import { loadContentSchemas } from "./content-schema-engine.js";
import { loadBlocks } from "./block-registry-engine.js";
import { loadSeoSchemas } from "./seo-registry-engine.js";
import { loadFormsSchemas } from "./forms-registry-engine.js";
import { loadMarketingSchemas } from "./marketing-registry-engine.js";
import { loadIntegrations } from "./integrations-registry-engine.js";
import { loadCommerceSchemas } from "./commerce-registry-engine.js";
import { loadCommerceRules } from "./commerce-rules-engine.js";
import { loadEvents } from "./events-registry-engine.js";
import { loadWebhooks } from "./webhooks-registry-engine.js";
import { loadPermissions } from "./permissions-registry-engine.js";
import { loadSiteManifests } from "./site-manifest-registry-engine.js";
import { loadModules } from "./modules-registry-engine.js";
import { loadApiRegistry } from "./api-registry-engine.js";
import { loadCmsUiRegistry } from "./cms-ui-registry-engine.js";
import { loadAdminUiRegistry } from "./admin-ui-registry-engine.js";
import { loadCodexRegistry } from "./codex-registry-engine.js";
import { loadExamplesRegistry } from "./examples-registry-engine.js";
import { loadGlobalSearch } from "./global-search-engine.js";
import { loadRelationshipExplorer } from "./relationship-explorer-engine.js";

const sidebar = document.querySelector("#portal-sidebar");
const scrim = document.querySelector("[data-sidebar-scrim]");
const openButton = document.querySelector("[data-open-sidebar]");
const closeButton = document.querySelector("[data-close-sidebar]");
let sidebarPreviouslyFocused = null;

function setSidebar(open) {
  if (!sidebar || !scrim || !openButton) return;
  if (open) sidebarPreviouslyFocused = document.activeElement;
  sidebar.dataset.open = open ? "true" : "false";
  openButton.setAttribute("aria-expanded", open ? "true" : "false");
  scrim.hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
  if (open) requestAnimationFrame(() => closeButton?.focus());
  else if (sidebarPreviouslyFocused?.focus) { sidebarPreviouslyFocused.focus(); sidebarPreviouslyFocused = null; }
}

openButton?.addEventListener("click", () => setSidebar(true));
closeButton?.addEventListener("click", () => setSidebar(false));
scrim?.addEventListener("click", () => setSidebar(false));
sidebar?.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#/']");
  if (link && window.matchMedia("(max-width: 940px)").matches) setSidebar(false);
});
window.matchMedia("(min-width: 941px)").addEventListener?.("change", (event) => { if (event.matches) setSidebar(false); });

document.addEventListener("keydown", (event) => {
  const mobileOpen = window.matchMedia("(max-width: 940px)").matches && sidebar?.dataset.open === "true";
  if (!mobileOpen) return;
  if (event.key === "Escape") { event.preventDefault(); setSidebar(false); return; }
  if (event.key === "Tab" && sidebar) {
    const focusable = [...sidebar.querySelectorAll('a[href], button:not([disabled])')].filter((el) => !el.hidden && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

async function boot() {
  const [registry, fieldRegistry, coreSchemas, contentSchemas, blocks, seoSchemas, formsSchemas, marketingSchemas, integrations, commerceSchemas, commerceRules, events, webhooks, permissions, siteManifests, modules, apiRegistry, cmsUiRegistry, adminUiRegistry, codexRegistry, examplesRegistry, globalSearch, relationships] = await Promise.all([loadRegistry(), loadFieldRegistry(), loadCoreSchemas(), loadContentSchemas(), loadBlocks(), loadSeoSchemas(), loadFormsSchemas(), loadMarketingSchemas(), loadIntegrations(), loadCommerceSchemas(), loadCommerceRules(), loadEvents(), loadWebhooks(), loadPermissions(), loadSiteManifests(), loadModules(), loadApiRegistry(), loadCmsUiRegistry(), loadAdminUiRegistry(), loadCodexRegistry(), loadExamplesRegistry(), loadGlobalSearch(), loadRelationshipExplorer()]);
  document.documentElement.dataset.registrySource = registry.source;
  document.documentElement.dataset.fieldRegistrySource = fieldRegistry.source;
  document.documentElement.dataset.coreSchemaSource = coreSchemas.source;
  document.documentElement.dataset.contentSchemaSource = contentSchemas.source;
  document.documentElement.dataset.blockRegistrySource = blocks.source;
  document.documentElement.dataset.seoRegistrySource = seoSchemas.source;
  document.documentElement.dataset.formsRegistrySource = formsSchemas.source;
  document.documentElement.dataset.marketingRegistrySource = marketingSchemas.source;
  document.documentElement.dataset.integrationsRegistrySource = integrations.source;
  document.documentElement.dataset.commerceRegistrySource = commerceSchemas.source;
  document.documentElement.dataset.commerceRulesSource = commerceRules.source;
  document.documentElement.dataset.eventsRegistrySource = events.source;
  document.documentElement.dataset.webhooksRegistrySource = webhooks.source;
  document.documentElement.dataset.permissionsRegistrySource = permissions.source;
  document.documentElement.dataset.siteManifestRegistrySource = siteManifests.source;
  document.documentElement.dataset.moduleRegistrySource = modules.source;
  document.documentElement.dataset.apiRegistrySource = apiRegistry.source;
  document.documentElement.dataset.cmsUiRegistrySource = cmsUiRegistry.source;
  document.documentElement.dataset.adminUiRegistrySource = adminUiRegistry.source;
  document.documentElement.dataset.codexRegistrySource = codexRegistry.source;
  document.documentElement.dataset.examplesRegistrySource = examplesRegistry.source;
  document.documentElement.dataset.globalSearchSource = globalSearch.source;
  document.documentElement.dataset.relationshipExplorerSource = relationships.source;
  createNavigationSearch({ searchEngine: globalSearch, onNavigate: () => setSidebar(false) });
  startRouter(registry, fieldRegistry, coreSchemas, contentSchemas, blocks, seoSchemas, formsSchemas, marketingSchemas, integrations, commerceSchemas, commerceRules, events, webhooks, permissions, siteManifests, modules, apiRegistry, cmsUiRegistry, adminUiRegistry, codexRegistry, examplesRegistry, globalSearch, relationships, () => {
    if (window.matchMedia("(max-width: 940px)").matches) setSidebar(false);
  });
}

boot().catch((error) => {
  console.error(error);
  const root = document.querySelector("[data-page-root]");
  if (root) root.innerHTML = `<div class="fatal-state"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><h1>Registry failed to initialize</h1><p>The contract portal could not load a valid authoritative registry or generated fallback.</p></div>`;
});
