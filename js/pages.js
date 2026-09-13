import { phaseBadge, statusBadge, icon, escapeHtml } from "./utils.js";

const foundationCards = [
  ["fa-scale-balanced", "Contract authority", "Repository definitions outrank generated documentation, examples and implementation convenience.", "#/standards/architecture"],
  ["fa-language", "Canonical terminology", "Organization, Site, Workspace, Contract, Event, Webhook and other core terms now have fixed meanings.", "#/standards/naming"],
  ["fa-shield-halved", "Security boundaries", "Public data, secrets, tenant isolation, authenticated writes and payment boundaries are explicitly separated.", "#/standards/security"],
  ["fa-code", "Codex discipline", "AI agents consume NEXT F contracts and must report missing capabilities instead of silently inventing parallel models.", "#/standards/development"]
];

const roadmap = [
  [0, "Contract Constitution", "Terminology, naming, architecture, ownership, security and compatibility baseline.", "complete"],
  [1, "SaaS Portal Foundation", "Paper dashboard shell with accessible light and dark themes, navigation, responsive behavior and reusable portal components.", "complete"],
  [2, "Registry Engine", "Machine-readable registry index, loading, filtering, cross-references and raw contract access.", "complete"],
  [3, "Primitive Fields", "33 reusable field types, configuration vocabulary, validation rules and field explorer.", "complete"],
  [4, "Shared Core Schemas", "Identity, scope, publishing, audit, media, address, link and CTA contracts.", "complete"],
  [5, "Content Contracts", "Pages, blog, documentation, reusable content and custom collections.", "complete"],
  [6, "Block Registry", "Structured page-section Blocks and nested helper schemas.", "complete"],
  [7, "SEO Contracts", "Metadata, keyword targets, canonical URLs, robots, structured data, redirects, sitemaps, audits and search performance.", "complete"],
  [8, "Forms and Leads", "Form Builder, submissions, consent snapshots, anti-abuse, Leads and conversion mappings.", "complete"],
  [9, "Marketing and Tracking", "Provider-neutral tracking, analytics, attribution, conversions, consent and destinations.", "complete"],
  [10, "Integration Registry", "Provider connectors, secure authentication, mappings, runtime boundaries, sync, health and resilience.", "complete"],
  [11, "Commerce Core", "Catalog, inventory, store customers, cart, checkout, orders, payments, tax, fulfillment, discounts, returns and reviews.", "complete"],
  [12, "Commerce Rules", "Cross-entity invariants, state transitions, reconciliation, idempotency, concurrency, command policies and domain errors.", "complete"],
  [13, "Event Registry", "Canonical completed-fact domain Events, envelope, producers, consumers, idempotency, ordering and durable production.", "complete"],
  [14, "Webhook Registry", "Verified endpoints, exact Event subscriptions, HMAC signing, delivery attempts, retries, dead-lettering and observability.", "complete"],
  [15, "Permission Registry", "Canonical permissions, reference roles, scopes, risk levels and deny-by-default authorization.", "complete"],
  [16, "Site Manifest", "Pinned contract versions, Site identity, environments, modules, runtime, CMS and integration support.", "complete"],
  [17, "Module Registry", "Canonical Site modules, capabilities, dependencies and CMS/Admin navigation bindings.", "complete"],
  [18, "API Contract Registry", "Versioned Public Content, Public Interaction, Customer CMS, Admin, Commerce, Event and Webhook APIs.", "complete"],
  [19, "Customer CMS UI Metadata", "Reusable resource profiles, editors, layouts, field bindings, actions, responsive behavior and validation presentation.", "complete"],
  [20, "NEXT F Admin UI Metadata", "Internal Admin profiles, privileged controls, diagnostics, Site/Organization 360 and migrations.", "complete"],
  [21, "Codex Development Standard", "Contract-first AI workflow, stop conditions, quality gates, extension proposals and implementation reports.", "complete"],
  [22, "Reference Examples Library", "Complete reference architectures for corporate, service, lead generation, ecommerce, documentation and custom Sites.", "complete"],
  [23, "Global Search", "Local indexed discovery across contracts, fields, routes, documentation, Events, permissions, APIs and examples.", "complete"],
  [24, "Relationship Explorer", "Cross-registry graph, incoming/outgoing traversal, dependency and impact review, shortest paths and relationship integrity.", "complete"],
  [25, "Contract Diff", "Exact release comparison, field-level change detection, compatibility impact classification and release history.", "complete"],
  [26, "Compatibility Center", "Release readiness, support truth, platform-surface matrix and reference Site compatibility assessments.", "complete"],
  [27, "Changelog System", "Authoritative release notes, change categories, evidence provenance and release history explorer.", "complete"],
  [28, "Deprecation System", "Operational lifecycle records, replacements, support windows, migration impact and removed-history discovery.", "complete"],
  [29, "Security Standards", "Machine-readable security controls, secret classes, verification expectations and cross-registry security mappings.", "complete"],
  [30, "Privacy & Data Classification", "Primary data classes, qualifiers, field-level handling, retention, consent and privacy-operation metadata.", "complete"],
  [31, "Accessibility Standards", "Machine-readable accessibility controls, verification methods, authoring mappings and portal audit evidence.", "complete"],
  [32, "Performance Standards", "Performance rules, measurable budgets, portal audit evidence and bounded loading behavior.", "complete"],
  [33, "Browser Contract Validation", "Local deterministic Site Manifest validation with structured diagnostics and reference samples.", "complete"],
  [34, "Developer Validation CLI", "Offline validation, inspection, compatibility and Diff commands sharing browser validation semantics.", "complete"],
  [35, "Site Starter Contract Packs", "Six framework-neutral Site bootstraps with pinned manifests, contract maps and acceptance guidance.", "complete"],
  [36, "Registry Health Release Candidate", "Repository-wide QA, integrity evidence, findings and explicit environment-dependent deferrals.", "complete"],
  [37, "V1.0.0 Production Acceptance", "Stable Registry release, frozen baselines, integrity hashes and formal production-acceptance evidence.", "complete"],
  [38, "Customer Capability Access Policy", "Explicit customer visibility, actions, approvals, publishing, fields, demo behavior and effective policy resolution.", "current"]
];

const architectureRules = [
  ["AR-001", "Contract reuse", "Reuse an existing canonical contract before creating a new one."],
  ["AR-003", "No silent divergence", "Admin, CMS, API and customer websites cannot silently redefine canonical field meanings."],
  ["AR-004", "Site version pinning", "Production Sites pin a supported contract version and never follow a floating latest release."],
  ["AR-006", "CMS is not a page builder", "Customer CMS manages structured content and approved site operations, not arbitrary site code."],
  ["AR-012", "Integration abstraction", "Supported third-party services use the NEXT F integration and event layer instead of scattered vendor code."],
  ["AR-016", "Hosting and domains excluded", "NEXT F does not model domain registration, hosting sales or hosting billing as platform services."],
  ["AR-022", "Backward compatibility", "Stable contracts do not receive breaking changes within the same major version."]
];

function pageHeader(eyebrow, title, description, actions = "") {
  return `
    <header class="page-header">
      <div class="page-header__copy">
        <p class="page-header__eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
      ${actions ? `<div class="page-header__actions">${actions}</div>` : ""}
    </header>`;
}

function sourceButton(path, label = "Open source standard") {
  return `<a class="button button--secondary" href="${path}">${icon("fa-file-lines")}<span>${label}</span></a>`;
}

export function renderOverview() {
  return `
    <div class="stack stack--lg">
      <section class="hero-panel">
        <div class="hero-panel__content">
          <div class="hero-panel__eyebrow"><span class="status-dot status-dot--stable"></span> NEXT F technical source of truth</div>
          <h1>One contract system for every NEXT F-built website.</h1>
          <p>contract.nextf.lk defines the reusable structures, behavior, events, permissions and integration rules consumed by NEXT F Admin, Customer CMS, APIs, Codex and customer websites.</p>
          <div class="hero-panel__actions">
            <a class="button button--primary" href="#/registry">${icon("fa-database")} Browse registry</a>
            <a class="button button--secondary" href="#/standards/architecture">${icon("fa-sitemap")} Review foundation</a>
          </div>
          <div class="hero-panel__meta">
            <span>${icon("fa-circle-half-stroke")} Light + dark themes</span>
            <span>${icon("fa-file-code")} HTML + CSS + JavaScript</span>
            <span>${icon("fa-database")} Repository-first authority</span>
            <span>${icon("fa-code-branch")} Current registry v1.1.0</span>
          </div>
        </div>
      </section>

      <section class="dashboard-grid dashboard-grid--4" aria-label="Foundation status">
        <article class="paper-card metric-card">
          <div class="metric-card__top"><span class="metric-card__label">Canonical terms</span><span class="metric-card__icon">${icon("fa-language")}</span></div>
          <div class="metric-card__value">30</div>
          <p class="metric-card__meta">Phase 0 terminology baseline</p>
        </article>
        <article class="paper-card metric-card">
          <div class="metric-card__top"><span class="metric-card__label">Architecture rules</span><span class="metric-card__icon">${icon("fa-diagram-project")}</span></div>
          <div class="metric-card__value">25</div>
          <p class="metric-card__meta">Mandatory platform boundaries</p>
        </article>
        <article class="paper-card metric-card">
          <div class="metric-card__top"><span class="metric-card__label">Registry entries</span><span class="metric-card__icon">${icon("fa-database")}</span></div>
          <div class="metric-card__value">2,284</div>
          <p class="metric-card__meta">Canonical definitions in the stable V1.1 Registry</p>
        </article>
        <article class="paper-card metric-card">
          <div class="metric-card__top"><span class="metric-card__label">Current phase</span><span class="metric-card__icon">${icon("fa-layer-group")}</span></div>
          <div class="metric-card__value">38</div>
          <p class="metric-card__meta">V1.1.0 Customer Access</p>
        </article>
      </section>

      <section>
        <div class="section-header">
          <div><h2>Foundation principles</h2><p>The portal UI is only the presentation layer. The repository remains authoritative.</p></div>
        </div>
        <div class="dashboard-grid dashboard-grid--4">
          ${foundationCards.map(([ico, title, text, href]) => `
            <article class="paper-card foundation-card">
              <div class="foundation-card__top"><span class="foundation-card__icon">${icon(ico)}</span>${statusBadge("available", "Locked")}</div>
              <h3>${title}</h3>
              <p>${text}</p>
              <a class="foundation-card__link" href="${href}">Review standard ${icon("fa-arrow-right")}</a>
            </article>`).join("")}
        </div>
      </section>

      <section class="two-column">
        <article class="paper-card">
          <div class="paper-card__header"><div><h2>Build roadmap</h2><p>The complete contract foundation through V1.1.0 Customer Capability Access Policy.</p></div>${phaseBadge(38)}</div>
          <div class="paper-card__body">
            <ol class="roadmap-list">
              ${roadmap.map(([number, title, text, state]) => `
                <li class="roadmap-item ${state === "current" ? "roadmap-item--current" : ""}">
                  <span class="roadmap-item__number">${number}</span>
                  <div class="roadmap-item__copy"><strong>${title}</strong><p>${text}</p></div>
                  ${state === "complete" ? statusBadge("available", "Complete") : state === "current" ? statusBadge("current", "Current") : statusBadge("planned", state === "next" ? "Next" : "Planned")}
                </li>`).join("")}
            </ol>
          </div>
        </article>

        <div class="stack">
          <article class="paper-card">
            <div class="paper-card__header"><div><h2>Authority order</h2><p>When two sources disagree.</p></div></div>
            <div class="paper-card__body">
              <ol class="list-clean">
                ${[
                  "Machine-readable contract or registry file",
                  "Contract-specific repository standard",
                  "General NEXT F contract standard",
                  "Generated contract.nextf.lk documentation",
                  "Examples and tutorials"
                ].map((text, index) => `<li class="list-item"><span class="list-item__icon">${index + 1}</span><div><strong>${text}</strong></div></li>`).join("")}
              </ol>
            </div>
          </article>

          <article class="paper-card">
            <div class="paper-card__header"><div><h2>V1.1.0 Customer Capability Access Policy</h2><p>Every Customer CMS resource now has an explicit, machine-readable customer boundary backed by permissions, capabilities, APIs and approval contracts.</p></div><a class="button button--secondary button--compact" href="#/platform/customer-access">${icon("fa-shield-halved")} Open Customer Access</a></div>
            <div class="paper-card__body phase-summary">
              <div class="phase-summary__row"><span>Customer policies</span><strong>75</strong></div>
              <div class="phase-summary__row"><span>Policy coverage</span><strong>100%</strong></div>
              <div class="phase-summary__row"><span>Blocking failures</span><strong>0</strong></div>
              <div class="phase-summary__row"><span>Approval-required policies</span><strong>8</strong></div>
              <div class="phase-summary__row"><span>Current release</span><strong>1.1.0</strong></div>
            </div>
          </article>
        </div>
      </section>
    </div>`;
}

export function renderArchitecture() {
  return `
    ${pageHeader("Standards", "Architecture", "The permanent boundaries that prevent NEXT F websites, APIs, CMS implementations and Codex projects from drifting into incompatible architectures.", sourceButton("./standards/03-architectural-rules.md"))}
    <div class="stack stack--lg">
      <div class="callout"><span class="callout__icon">${icon("fa-scale-balanced")}</span><div><h3>Repository is authoritative</h3><p>contract.nextf.lk presents the contracts. It does not independently redefine them.</p></div></div>
      <div class="dashboard-grid dashboard-grid--3">
        <article class="paper-card foundation-card"><div class="foundation-card__top"><span class="foundation-card__icon">${icon("fa-user-gear")}</span>${statusBadge("available", "Locked")}</div><h3>NEXT F controls technology</h3><p>Contracts, architecture, code, validation, platform permissions, integration mechanisms and security boundaries remain platform concerns.</p></article>
        <article class="paper-card foundation-card"><div class="foundation-card__top"><span class="foundation-card__icon">${icon("fa-pen-to-square")}</span>${statusBadge("available", "Locked")}</div><h3>Customers control approved content</h3><p>Business content, SEO, blogs, documentation, catalog data, media and permitted website operations remain customer-manageable.</p></article>
        <article class="paper-card foundation-card"><div class="foundation-card__top"><span class="foundation-card__icon">${icon("fa-server")}</span>${statusBadge("available", "Locked")}</div><h3>Hosting-independent</h3><p>Hosting and domains remain customer-owned services. Canonical contracts stay provider-neutral.</p></article>
      </div>
      <article class="paper-card">
        <div class="paper-card__header"><div><h2>Selected architectural rules</h2><p>Phase 0 contains 25 mandatory rules. These are the most foundational for future customer-site work.</p></div><a class="button button--secondary button--compact" href="./registry/architectural-rules.json">Raw JSON</a></div>
        <div class="paper-card__body rule-list">
          ${architectureRules.map(([id, title, text]) => `<div class="rule-row"><div class="rule-row__id">${id}</div><div><strong>${title}</strong><p>${text}</p></div></div>`).join("")}
        </div>
      </article>
    </div>`;
}

export function renderNaming() {
  return `
    ${pageHeader("Standards", "Naming", "Canonical machine names must remain predictable across customer websites, Customer CMS, NEXT F Admin, APIs, events, webhooks and Codex implementations.", sourceButton("./standards/02-naming-standard.md"))}
    <div class="dashboard-grid dashboard-grid--2">
      <article class="paper-card"><div class="paper-card__header"><div><h2>Core conventions</h2><p>Frozen naming patterns from Phase 0.</p></div></div><div class="paper-card__body"><dl class="data-list">
        <div class="data-list__row"><dt>JSON fields</dt><dd><span class="code-inline">camelCase</span></dd></div>
        <div class="data-list__row"><dt>Contract IDs</dt><dd><span class="code-inline">domain.entity</span></dd></div>
        <div class="data-list__row"><dt>Events</dt><dd><span class="code-inline">domain.pastTenseFact</span></dd></div>
        <div class="data-list__row"><dt>Permissions</dt><dd><span class="code-inline">domain.resource.action</span></dd></div>
        <div class="data-list__row"><dt>Capabilities</dt><dd><span class="code-inline">module.capability</span></dd></div>
        <div class="data-list__row"><dt>Files and URLs</dt><dd><span class="code-inline">lowercase-kebab-case</span></dd></div>
      </dl></div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Examples</h2><p>Canonical names are semantic, not vendor-specific.</p></div></div><div class="paper-card__body"><pre class="code-block">content.blogPost
commerce.product
commerce.order

content.published
form.submitted
order.paid
payment.succeeded

content.pages.publish
commerce.orders.manage
integrations.connections.manage</pre></div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Tenant terminology</h2><p>Avoid the customer/client ambiguity in platform models.</p></div></div><div class="paper-card__body"><dl class="data-list">
        <div class="data-list__row"><dt>NEXT F business customer</dt><dd><strong>Organization</strong></dd></div>
        <div class="data-list__row"><dt>Website</dt><dd><strong>Site</strong></dd></div>
        <div class="data-list__row"><dt>Customer CMS context</dt><dd><strong>Workspace</strong></dd></div>
        <div class="data-list__row"><dt>Ecommerce buyer</dt><dd><strong>Commerce Customer</strong></dd></div>
      </dl></div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Reserved ambiguity</h2><p>Words that require qualification or are excluded from canonical schema naming.</p></div></div><div class="paper-card__body"><ul class="list-clean">
        <li class="list-item"><span class="list-item__icon">${icon("fa-ban")}</span><div><strong>Client</strong><p>Human conversation term only. Use Organization in canonical platform models.</p></div></li>
        <li class="list-item"><span class="list-item__icon">${icon("fa-circle-info")}</span><div><strong>Customer</strong><p>Use Organization or Commerce Customer depending on meaning.</p></div></li>
        <li class="list-item"><span class="list-item__icon">${icon("fa-ban")}</span><div><strong>Sale</strong><p>Use Order or Payment when describing commerce state.</p></div></li>
      </ul></div></article>
    </div>`;
}

export function renderDevelopment() {
  return `
    ${pageHeader("Standards", "Development", "The contract-first workflow for Codex and human developers building NEXT F customer websites or platform integrations.", sourceButton("./AGENTS.md", "Open AGENTS.md"))}
    <div class="stack stack--lg">
      <div class="callout"><span class="callout__icon">${icon("fa-terminal")}</span><div><h3>AI agents consume contracts</h3><p>Codex may implement customer-specific UI and business behavior, but it does not become the authority for canonical schemas, events, webhooks or permissions.</p></div></div>
      <div class="dashboard-grid dashboard-grid--2">
        <article class="paper-card"><div class="paper-card__header"><div><h2>Mandatory workflow</h2><p>Resolve the platform contract before implementation begins.</p></div></div><div class="paper-card__body"><ol class="list-clean">
          ${["Resolve Contract Version", "Read Site Manifest", "Resolve enabled Modules and Capabilities", "Reuse canonical Schemas", "Resolve Permissions", "Resolve Events and Webhooks", "Implement customer-specific experience", "Validate and report deviations"].map((text, i) => `<li class="list-item"><span class="list-item__icon">${i + 1}</span><div><strong>${text}</strong></div></li>`).join("")}
        </ol></div></article>
        <article class="paper-card"><div class="paper-card__header"><div><h2>Do not invent</h2><p>Parallel architecture is a maintenance failure.</p></div></div><div class="paper-card__body"><ul class="list-clean">
          ${["Equivalent schemas", "Alternative event names", "Alternative permission identifiers", "Alternative webhook payloads", "Hardcoded customer-editable content", "Hosting/domain management", "Browser-exposed platform secrets"].map((text) => `<li class="list-item"><span class="list-item__icon">${icon("fa-xmark")}</span><div><strong>${text}</strong></div></li>`).join("")}
        </ul></div></article>
      </div>
    </div>`;
}

export function renderSecurity() {
  return `
    ${pageHeader("Standards", "Security", "Security boundaries are contract requirements, not optional implementation preferences.", sourceButton("./standards/05-security-boundaries.md"))}
    <div class="dashboard-grid dashboard-grid--3">
      ${[
        ["fa-eye", "Public data", "Unauthenticated delivery is limited to content explicitly classified for public delivery."],
        ["fa-user-lock", "Authenticated writes", "Create, update, delete, publish and configuration operations require authenticated server-side handling."],
        ["fa-key", "Authorization", "Authentication alone never grants access. Canonical permissions control privileged operations."],
        ["fa-lock", "Secrets", "API secrets, private tokens and signing keys never belong in public browser bundles or examples."],
        ["fa-building-shield", "Tenant isolation", "Organization and Site boundaries must be enforced server-side, not trusted from browser-supplied IDs."],
        ["fa-credit-card", "Payment boundary", "NEXT F commerce contracts never require storage of raw card numbers or CVV data."]
      ].map(([ico, title, text]) => `<article class="paper-card foundation-card"><div class="foundation-card__top"><span class="foundation-card__icon">${icon(ico)}</span>${statusBadge("available", "Mandatory")}</div><h3>${title}</h3><p>${text}</p></article>`).join("")}
    </div>`;
}

export function renderVersions() {
  return `
    ${pageHeader("Lifecycle", "Versions", "The Phase 0 lifecycle baseline uses semantic versioning and explicit Site pinning. More lifecycle tooling will be layered on this foundation later.", sourceButton("./standards/06-contract-lifecycle.md"))}
    <div class="dashboard-grid dashboard-grid--2">
      <article class="paper-card"><div class="paper-card__header"><div><h2>Semantic versioning</h2><p>MAJOR.MINOR.PATCH</p></div></div><div class="paper-card__body"><dl class="data-list">
        <div class="data-list__row"><dt>MAJOR</dt><dd>Breaking contract changes and explicit migrations.</dd></div>
        <div class="data-list__row"><dt>MINOR</dt><dd>Backward-compatible capabilities, optional fields, schemas and permissions.</dd></div>
        <div class="data-list__row"><dt>PATCH</dt><dd>Non-breaking corrections and metadata clarifications.</dd></div>
      </dl></div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Lifecycle states</h2><p>Every future contract receives an explicit status.</p></div></div><div class="paper-card__body"><div class="stack">
        <div>${statusBadge("experimental", "Experimental")} <span class="tag">May change</span></div>
        <div>${statusBadge("draft", "Draft")} <span class="tag">Under review</span></div>
        <div>${statusBadge("available", "Stable")} <span class="tag">Production-safe</span></div>
        <div><span class="status-badge status-badge--draft">Deprecated</span> <span class="tag">Migration required</span></div>
        <div><span class="status-badge" style="background:var(--danger-50);color:var(--danger-600)">Removed</span> <span class="tag">No longer active</span></div>
      </div></div></article>
    </div>`;
}

export function renderCompatibility() {
  return `
    ${pageHeader("Lifecycle", "Compatibility", "Compatibility rules protect older customer Sites while the contract system evolves.", sourceButton("./standards/07-compatibility-policy.md"))}
    <div class="stack stack--lg">
      <div class="callout"><span class="callout__icon">${icon("fa-link")}</span><div><h3>No automatic major upgrades</h3><p>Every production Site pins a supported Contract Version. Major upgrades require an explicit migration decision.</p></div></div>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Compatibility baseline</h2><p>Rules that later registry tooling must enforce.</p></div></div><div class="paper-card__body"><dl class="data-list">
        <div class="data-list__row"><dt>Optional object fields</dt><dd>Consumers normally ignore unknown optional fields unless strict rejection is explicitly contracted.</dd></div>
        <div class="data-list__row"><dt>Required fields</dt><dd>Adding a new required field to a stable object is breaking unless a contract-defined migration or default keeps compatibility.</dd></div>
        <div class="data-list__row"><dt>Permissions</dt><dd>Renaming or reinterpreting a stable permission identifier is breaking.</dd></div>
        <div class="data-list__row"><dt>Events</dt><dd>Published event semantics remain stable within a major version.</dd></div>
        <div class="data-list__row"><dt>APIs</dt><dd>API versions state which Contract Versions they support.</dd></div>
      </dl></div></article>
    </div>`;
}

export function renderPlanned(route) {
  return `
    ${pageHeader(route.group, route.title, route.description, `${phaseBadge(route.phase)} ${statusBadge("planned", "Planned")}`)}
    <div class="planned-page">
      <div class="planned-banner">
        <span class="planned-banner__icon">${icon(route.icon)}</span>
        <div><h2>Navigation reserved, contract work not started</h2><p>This Phase 1 shell reserves the permanent information architecture without inventing contracts before their assigned phase. Later work will populate this route from machine-readable registry data.</p></div>
      </div>
      <div class="contract-placeholder-grid">
        <article class="paper-card placeholder-card"><div class="placeholder-card__label">${icon("fa-database")}${statusBadge("planned", "Future")}</div><h3>Machine-readable contracts</h3><p>Authoritative registry files will populate this section instead of hardcoded portal definitions.</p></article>
        <article class="paper-card placeholder-card"><div class="placeholder-card__label">${icon("fa-link")}${statusBadge("planned", "Future")}</div><h3>Relationships</h3><p>Cross-references will connect schemas, modules, permissions, events, APIs and dependent capabilities.</p></article>
        <article class="paper-card placeholder-card"><div class="placeholder-card__label">${icon("fa-code")}${statusBadge("planned", "Future")}</div><h3>Developer references</h3><p>Examples, raw schema views and implementation notes will appear after the related contract phase is complete.</p></article>
      </div>
    </div>`;
}


export function renderRegistryIndexShell(engine, filters) {
  const count = engine.search(filters.q, filters).length;
  const options = (values, selected) => values.map((value) => `<option value="${escapeHtml(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(value)}</option>`).join("");
  return `
    ${pageHeader("Registry", "Registry Index", "Browse every authoritative definition that actually exists in NEXT F Contracts. Future schemas remain planned until their implementation phase.", `<span class="status-badge status-badge--stable">${engine.size} indexed</span>`)}
    <div class="stack stack--lg registry-page">
      <div class="registry-source-bar" role="status">
        <span><i class="fa-solid fa-database" aria-hidden="true"></i> Runtime source</span>
        <strong>${engine.source === "authoritative-json" ? "Authoritative registry JSON" : "Generated local fallback"}</strong>
        <span class="tag">v${escapeHtml(engine.data.registryVersion)}</span>
      </div>
      <section class="paper-card registry-controls" aria-labelledby="registry-filter-title">
        <div class="paper-card__header"><div><h2 id="registry-filter-title">Find registry definitions</h2><p>Search machine IDs and filter by controlled metadata.</p></div><button class="button button--ghost button--compact" type="button" data-registry-clear><i class="fa-solid fa-rotate-left" aria-hidden="true"></i> Clear</button></div>
        <div class="paper-card__body registry-filter-grid">
          <label class="field field--search"><span>Search</span><div class="field-control field-control--icon"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i><input type="search" value="${escapeHtml(filters.q)}" placeholder="e.g. registry.index or security" data-registry-q></div></label>
          <label class="field"><span>Domain</span><select data-registry-domain><option value="">All domains</option>${options(engine.domains, filters.domain)}</select></label>
          <label class="field"><span>Type</span><select data-registry-type><option value="">All types</option>${options(engine.types, filters.type)}</select></label>
          <label class="field"><span>Status</span><select data-registry-status><option value="">All statuses</option>${options(engine.statuses, filters.status)}</select></label>
          <label class="field"><span>Sort</span><select data-registry-sort>
            <option value="name" ${filters.sort === "name" ? "selected" : ""}>Name</option>
            <option value="id" ${filters.sort === "id" ? "selected" : ""}>Machine ID</option>
            <option value="domain" ${filters.sort === "domain" ? "selected" : ""}>Domain</option>
            <option value="phase" ${filters.sort === "phase" ? "selected" : ""}>Phase</option>
            <option value="version" ${filters.sort === "version" ? "selected" : ""}>Version</option>
          </select></label>
        </div>
      </section>
      <section class="paper-card registry-results-card" aria-labelledby="registry-results-title">
        <div class="paper-card__header"><div><h2 id="registry-results-title">Registry entries</h2><p data-registry-count aria-live="polite">${count} of ${engine.size} entries</p></div><span class="tag">No future placeholders</span></div>
        <div class="registry-table-wrap" data-registry-results></div>
      </section>
    </div>`;
}

export function renderRegistryRows(engine, filters) {
  const rows = engine.search(filters.q, filters);
  if (!rows.length) {
    return `<div class="registry-empty"><span class="registry-empty__icon">${icon("fa-magnifying-glass")}</span><h3>No registry entries match</h3><p>Change the search or filters. Planned future contracts are intentionally not indexed.</p><button class="button button--secondary" type="button" data-registry-clear>Clear filters</button></div>`;
  }
  return `<table class="registry-table">
    <thead><tr><th scope="col">Definition</th><th scope="col">Domain</th><th scope="col">Type</th><th scope="col">Version</th><th scope="col">Status</th><th scope="col">Phase</th><th scope="col"><span class="sr-only">Open</span></th></tr></thead>
    <tbody>${rows.map((item) => `<tr>
      <td data-label="Definition"><a class="registry-title-link" href="#/registry/item/${encodeURIComponent(item.id)}"><strong>${escapeHtml(item.name)}</strong><code>${escapeHtml(item.id)}</code><span>${escapeHtml(item.description)}</span></a></td>
      <td data-label="Domain"><span class="tag">${escapeHtml(item.domain)}</span></td>
      <td data-label="Type">${escapeHtml(item.type)}</td>
      <td data-label="Version"><code>v${escapeHtml(item.version)}</code></td>
      <td data-label="Status">${registryStatusBadge(item.status)}</td>
      <td data-label="Phase"><span class="phase-badge">P${item.phase}</span></td>
      <td class="registry-table__open"><a class="icon-button" href="#/registry/item/${encodeURIComponent(item.id)}" aria-label="Open ${escapeHtml(item.name)}"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a></td>
    </tr>`).join("")}</tbody>
  </table>`;
}

export function renderRegistryDetail(engine, item) {
  if (!item) return renderRegistryMissing();
  const relationships = engine.related(item.id);
  const incoming = engine.incoming(item.id);
  const sourceHref = `./${item.source}`;
  const raw = escapeHtml(JSON.stringify(item, null, 2));
  return `
    ${pageHeader("Registry", item.name, item.description, `<div class="header-actions">${registryStatusBadge(item.status)}<span class="tag">v${escapeHtml(item.version)}</span></div>`)}
    <div class="stack stack--lg registry-detail">
      <div class="registry-detail__identity">
        <div><span>Machine ID</span><code>${escapeHtml(item.id)}</code></div>
        <div class="registry-detail__actions">
          <button class="button button--secondary button--compact" type="button" data-copy-value="${escapeHtml(item.id)}" data-copy-label="Machine ID copied"><i class="fa-regular fa-copy" aria-hidden="true"></i> Copy ID</button>
          <button class="button button--secondary button--compact" type="button" data-copy-registry-json="${escapeHtml(item.id)}"><i class="fa-solid fa-code" aria-hidden="true"></i> Copy metadata</button>
          <a class="button button--secondary button--compact" href="${escapeHtml(sourceHref)}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> Source file</a>
        </div>
      </div>
      <div class="dashboard-grid dashboard-grid--3 registry-metrics">
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Domain</span><span class="metric-card__icon">${icon("fa-layer-group")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(item.domain)}</div><p class="metric-card__meta">Controlled registry domain</p></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Type</span><span class="metric-card__icon">${icon("fa-shapes")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(item.type)}</div><p class="metric-card__meta">Registry item classification</p></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Introduced</span><span class="metric-card__icon">${icon("fa-code-commit")}</span></div><div class="metric-card__value metric-card__value--text">v${escapeHtml(item.introducedIn)}</div><p class="metric-card__meta">Phase ${item.phase}</p></article>
      </div>
      <div class="dashboard-grid dashboard-grid--2 registry-detail-grid">
        <article class="paper-card"><div class="paper-card__header"><div><h2>Metadata</h2><p>Stable registry discovery information.</p></div></div><div class="paper-card__body"><dl class="data-list">
          <div class="data-list__row"><dt>ID</dt><dd><code>${escapeHtml(item.id)}</code></dd></div>
          <div class="data-list__row"><dt>Version</dt><dd>v${escapeHtml(item.version)}</dd></div>
          <div class="data-list__row"><dt>Status</dt><dd>${registryStatusBadge(item.status)}</dd></div>
          <div class="data-list__row"><dt>Domain</dt><dd>${escapeHtml(item.domain)}</dd></div>
          <div class="data-list__row"><dt>Type</dt><dd>${escapeHtml(item.type)}</dd></div>
          <div class="data-list__row"><dt>Phase</dt><dd>${item.phase}</dd></div>
          <div class="data-list__row"><dt>Source</dt><dd><a class="inline-link" href="${escapeHtml(sourceHref)}">${escapeHtml(item.source)} ${icon("fa-arrow-up-right-from-square")}</a></dd></div>
        </dl></div></article>
        <article class="paper-card"><div class="paper-card__header"><div><h2>Tags</h2><p>Search and discovery metadata, not contract semantics.</p></div></div><div class="paper-card__body"><div class="tag-cloud">${item.tags.length ? item.tags.map((tag) => `<a class="tag tag--link" href="#/registry?q=${encodeURIComponent(tag)}">${escapeHtml(tag)}</a>`).join("") : '<span class="muted">No tags</span>'}</div></div></article>
      </div>
      <div class="dashboard-grid dashboard-grid--2 registry-detail-grid">
        <article class="paper-card"><div class="paper-card__header"><div><h2>Outgoing relationships</h2><p>Definitions this item references.</p></div><span class="tag">${relationships.length}</span></div><div class="paper-card__body">${renderRelationshipList(relationships)}</div></article>
        <article class="paper-card"><div class="paper-card__header"><div><h2>Incoming relationships</h2><p>Definitions that reference this item.</p></div><span class="tag">${incoming.length}</span></div><div class="paper-card__body">${renderIncomingList(incoming)}</div></article>
      </div>
      <div class="dashboard-grid dashboard-grid--2 registry-detail-grid">
        <article class="paper-card"><div class="paper-card__header"><div><h2>Permissions</h2><p>Canonical permissions directly associated with this registry item.</p></div></div><div class="paper-card__body">${renderStringArray(item.permissions, "No permission contracts are directly associated with this registry item.")}</div></article>
        <article class="paper-card"><div class="paper-card__header"><div><h2>Events</h2><p>Canonical events directly associated with this registry item.</p></div></div><div class="paper-card__body">${renderStringArray(item.events, "No event contracts are directly associated with this registry item.")}</div></article>
      </div>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Raw registry metadata</h2><p>Exact metadata indexed by the Registry Engine. This is not the full source document.</p></div><button class="button button--ghost button--compact" type="button" data-copy-registry-json="${escapeHtml(item.id)}">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${raw}</code></pre></div></article>
    </div>`;
}

function registryStatusBadge(status) {
  const map = {
    stable: ["status-badge--stable", "Stable"],
    draft: ["status-badge--draft", "Draft"],
    experimental: ["status-badge--experimental", "Experimental"],
    deprecated: ["status-badge--draft", "Deprecated"],
    removed: ["status-badge--danger", "Removed"]
  };
  const [cls, label] = map[status] ?? ["", status];
  return `<span class="status-badge ${cls}">${escapeHtml(label)}</span>`;
}

function renderRelationshipList(rows) {
  if (!rows.length) return `<div class="registry-inline-empty">${icon("fa-minus")} No outgoing relationships.</div>`;
  return `<div class="relationship-list">${rows.map(({ item, type, target, description }) => `<div class="relationship-item"><span class="relationship-type">${escapeHtml(type)}</span><div>${item ? `<a href="#/registry/item/${encodeURIComponent(item.id)}"><strong>${escapeHtml(item.name)}</strong><code>${escapeHtml(item.id)}</code></a>` : `<strong>Unresolved</strong><code>${escapeHtml(target)}</code>`}${description ? `<p>${escapeHtml(description)}</p>` : ""}</div></div>`).join("")}</div>`;
}

function renderIncomingList(rows) {
  if (!rows.length) return `<div class="registry-inline-empty">${icon("fa-minus")} No incoming relationships.</div>`;
  return `<div class="relationship-list">${rows.map(({ source, type, description }) => `<div class="relationship-item"><span class="relationship-type">${escapeHtml(type)}</span><div><a href="#/registry/item/${encodeURIComponent(source.id)}"><strong>${escapeHtml(source.name)}</strong><code>${escapeHtml(source.id)}</code></a>${description ? `<p>${escapeHtml(description)}</p>` : ""}</div></div>`).join("")}</div>`;
}

function renderStringArray(values, emptyText) {
  if (!values.length) return `<div class="registry-inline-empty">${icon("fa-circle-info")} ${escapeHtml(emptyText)}</div>`;
  return `<div class="tag-cloud">${values.map((value) => `<code class="tag">${escapeHtml(value)}</code>`).join("")}</div>`;
}



const fieldCategoryLabels = {
  text: "Text and Content",
  numeric: "Numeric",
  temporal: "Date and Time",
  choice: "Choice and Taxonomy",
  relationship: "Relationships",
  media: "Media and Files",
  location: "Location",
  system: "System"
};

function fieldCapability(value, label) {
  return `<span class="field-capability ${value ? "field-capability--yes" : "field-capability--no"}"><i class="fa-solid ${value ? "fa-check" : "fa-minus"}" aria-hidden="true"></i>${escapeHtml(label)}</span>`;
}

export function renderFieldCards(fieldRegistry, filters = {}) {
  const rows = fieldRegistry.search(filters.q, filters);
  if (!rows.length) return `<div class="registry-empty"><span class="registry-empty__icon">${icon("fa-magnifying-glass")}</span><h3>No primitive fields match</h3><p>Change the field search or category filter.</p><button class="button button--secondary" type="button" data-field-clear>Clear field filters</button></div>`;
  return `<div class="field-card-grid">${rows.map((field) => `<article class="paper-card field-card">
    <div class="field-card__top"><span class="field-category">${escapeHtml(fieldCategoryLabels[field.category] ?? field.category)}</span><span class="status-badge status-badge--stable">Stable</span></div>
    <div class="field-card__identity"><span class="field-card__icon">${icon(field.category === "media" ? "fa-photo-film" : field.category === "numeric" ? "fa-hashtag" : field.category === "temporal" ? "fa-calendar-days" : field.category === "relationship" ? "fa-link" : field.category === "location" ? "fa-location-dot" : field.category === "system" ? "fa-gear" : "fa-i-cursor")}</span><div><h3>${escapeHtml(field.name)}</h3><code>${escapeHtml(field.$id)}</code></div></div>
    <p>${escapeHtml(field.description)}</p>
    <dl class="field-mini-meta"><div><dt>Value</dt><dd>${escapeHtml(field.value.jsonType)}</dd></div><div><dt>Editor</dt><dd>${escapeHtml(field.cms.editor)}</dd></div></dl>
    <div class="field-card__caps">${fieldCapability(field.capabilities.searchable,"Search")}${fieldCapability(field.capabilities.filterable,"Filter")}${fieldCapability(field.capabilities.sortable,"Sort")}</div>
    <a class="button button--secondary button--compact field-card__open" href="#/registry/item/${encodeURIComponent(field.$id)}">Inspect field ${icon("fa-arrow-right")}</a>
  </article>`).join("")}</div>`;
}

export function renderFieldsIndex(fieldRegistry, filters = {}) {
  const count = fieldRegistry.search(filters.q, filters).length;
  const categoryOptions = fieldRegistry.categories.map((category) => `<option value="${escapeHtml(category)}" ${filters.category === category ? "selected" : ""}>${escapeHtml(fieldCategoryLabels[category] ?? category)}</option>`).join("");
  return `
    ${pageHeader("Registry", "Primitive Fields", "The canonical value, editor, validation and configuration primitives used to compose every later NEXT F schema.", `<div class="header-actions"><span class="status-badge status-badge--stable">33 stable fields</span><span class="tag">v0.4.0</span></div>`)}
    <div class="stack stack--lg field-registry-page">
      <div class="callout"><span class="callout__icon">${icon("fa-puzzle-piece")}</span><div><h3>Compose schemas, do not reinvent fields</h3><p>Content, SEO, forms and commerce schemas should reuse these primitives. A different CMS control alone is not a reason to create a new value contract.</p></div></div>
      <section class="dashboard-grid dashboard-grid--4" aria-label="Primitive field metrics">
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Primitive fields</span><span class="metric-card__icon">${icon("fa-list-check")}</span></div><div class="metric-card__value">${fieldRegistry.size}</div><p class="metric-card__meta">Authoritative field contracts</p></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Categories</span><span class="metric-card__icon">${icon("fa-layer-group")}</span></div><div class="metric-card__value">${fieldRegistry.categories.length}</div><p class="metric-card__meta">Controlled discovery groups</p></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Configuration</span><span class="metric-card__icon">${icon("fa-sliders")}</span></div><div class="metric-card__value">50+</div><p class="metric-card__meta">Controlled reusable properties</p></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Runtime source</span><span class="metric-card__icon">${icon("fa-database")}</span></div><div class="metric-card__value metric-card__value--text">${fieldRegistry.source === "authoritative-json" ? "JSON" : "Fallback"}</div><p class="metric-card__meta">Generated fallback is checksum-bound</p></article>
      </section>
      <section class="paper-card field-controls" aria-labelledby="field-filter-title">
        <div class="paper-card__header"><div><h2 id="field-filter-title">Find a primitive field</h2><p>Search field IDs, names, editors, configuration properties and validation rule IDs.</p></div><button class="button button--ghost button--compact" type="button" data-field-clear>${icon("fa-rotate-left")} Clear</button></div>
        <div class="paper-card__body field-filter-grid">
          <label class="field field--search"><span>Search fields</span><div class="field-control field-control--icon">${icon("fa-magnifying-glass")}<input type="search" value="${escapeHtml(filters.q ?? "")}" placeholder="e.g. currency, relation, maxLength" data-field-q></div></label>
          <label class="field"><span>Category</span><select data-field-category><option value="">All categories</option>${categoryOptions}</select></label>
          <div class="field-filter-summary"><span>Results</span><strong data-field-count>${count} of ${fieldRegistry.size}</strong></div>
        </div>
      </section>
      <div data-field-results>${renderFieldCards(fieldRegistry, filters)}</div>
      <section class="paper-card"><div class="paper-card__header"><div><h2>Primitive field rules</h2><p>Important behavior that all later schemas inherit.</p></div><a class="button button--secondary button--compact" href="./standards/11-primitive-field-standard.md">${icon("fa-file-lines")} Standard</a></div><div class="paper-card__body"><div class="field-rule-grid">
        <div><strong>Absence is not null</strong><p>Missing, null, empty string and empty array are distinct states.</p></div>
        <div><strong>Server validates</strong><p>CMS controls improve UX, but server-side validation remains authoritative.</p></div>
        <div><strong>Presentation is separate</strong><p>A field defines value semantics. Customer-specific UI can render that value differently.</p></div>
        <div><strong>Security stays separate</strong><p>Hidden fields and conditional visibility never replace permissions.</p></div>
      </div></div></section>
    </div>`;
}

export function renderPrimitiveFieldDetail(engine, item, field) {
  if (!field) return renderRegistryDetail(engine, item);
  const rawField = escapeHtml(JSON.stringify(field, null, 2));
  const rawRegistry = escapeHtml(JSON.stringify(item, null, 2));
  const sourceHref = `./${item.source}`;
  const config = field.supportedConfig.map((value) => `<code class="tag">${escapeHtml(value)}</code>`).join("");
  const validations = field.validationRules.map((value) => `<code class="tag tag--validation">${escapeHtml(value)}</code>`).join("");
  const validExamples = (field.examples.valid ?? []).map((value) => `<pre class="field-example field-example--valid"><code>${escapeHtml(JSON.stringify(value, null, 2))}</code></pre>`).join("") || '<p class="muted">No valid examples.</p>';
  const invalidExamples = (field.examples.invalid ?? []).map((value) => `<pre class="field-example field-example--invalid"><code>${escapeHtml(JSON.stringify(value, null, 2))}</code></pre>`).join("") || '<p class="muted">No invalid examples are listed because validity depends on parent configuration.</p>';
  const shape = field.value.shape ? `<div class="field-shape"><h3>Canonical shape</h3><pre class="code-block"><code>${escapeHtml(JSON.stringify(field.value.shape, null, 2))}</code></pre></div>` : "";
  return `
    ${pageHeader("Primitive Field", field.name, field.description, `<div class="header-actions"><span class="status-badge status-badge--stable">Stable</span><span class="tag">v${escapeHtml(field.version)}</span></div>`)}
    <div class="stack stack--lg primitive-field-detail">
      <div class="registry-detail__identity"><div><span>Machine ID</span><code>${escapeHtml(field.$id)}</code></div><div class="registry-detail__actions"><button class="button button--secondary button--compact" type="button" data-copy-value="${escapeHtml(field.$id)}" data-copy-label="Field ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${escapeHtml(sourceHref)}">${icon("fa-file-code")} Source JSON</a><a class="button button--secondary button--compact" href="#/registry/fields">${icon("fa-list-check")} All fields</a></div></div>
      <section class="dashboard-grid dashboard-grid--4">
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Category</span><span class="metric-card__icon">${icon("fa-layer-group")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(fieldCategoryLabels[field.category] ?? field.category)}</div></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">JSON value</span><span class="metric-card__icon">${icon("fa-code")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(field.value.jsonType)}</div></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">CMS editor</span><span class="metric-card__icon">${icon("fa-pen-to-square")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(field.cms.editor)}</div></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Configurations</span><span class="metric-card__icon">${icon("fa-sliders")}</span></div><div class="metric-card__value">${field.supportedConfig.length}</div></article>
      </section>
      <div class="dashboard-grid dashboard-grid--2 registry-detail-grid">
        <article class="paper-card"><div class="paper-card__header"><div><h2>Value semantics</h2><p>The canonical stored/exchanged meaning.</p></div></div><div class="paper-card__body"><dl class="data-list"><div class="data-list__row"><dt>JSON type</dt><dd><code>${escapeHtml(field.value.jsonType)}</code></dd></div><div class="data-list__row"><dt>Canonical value</dt><dd>${escapeHtml(field.value.canonical)}</dd></div><div class="data-list__row"><dt>Absence policy</dt><dd>${escapeHtml(field.value.absence)}</dd></div></dl>${shape}</div></article>
        <article class="paper-card"><div class="paper-card__header"><div><h2>CMS behavior</h2><p>Editor defaults and supported capabilities.</p></div></div><div class="paper-card__body"><dl class="data-list"><div class="data-list__row"><dt>Editor</dt><dd><code>${escapeHtml(field.cms.editor)}</code></dd></div><div class="data-list__row"><dt>Input mode</dt><dd>${escapeHtml(field.cms.inputMode ?? "Not specified")}</dd></div><div class="data-list__row"><dt>Placeholder</dt><dd>${field.cms.supportsPlaceholder ? "Supported" : "Not supported"}</dd></div><div class="data-list__row"><dt>Help text</dt><dd>${field.cms.supportsHelpText ? "Supported" : "Not supported"}</dd></div></dl><div class="field-detail-caps">${fieldCapability(field.capabilities.searchable,"Searchable")}${fieldCapability(field.capabilities.filterable,"Filterable")}${fieldCapability(field.capabilities.sortable,"Sortable")}${fieldCapability(field.capabilities.localizable,"Localizable")}${fieldCapability(field.capabilities.revisionTracked,"Revision tracked")}</div></div></article>
      </div>
      <div class="dashboard-grid dashboard-grid--2 registry-detail-grid">
        <article class="paper-card"><div class="paper-card__header"><div><h2>Supported configuration</h2><p>Only these controlled configuration property IDs may be applied to this primitive.</p></div><span class="tag">${field.supportedConfig.length}</span></div><div class="paper-card__body"><div class="tag-cloud">${config}</div></div></article>
        <article class="paper-card"><div class="paper-card__header"><div><h2>Validation rules</h2><p>Server implementations resolve these IDs through the field validation vocabulary.</p></div><span class="tag">${field.validationRules.length}</span></div><div class="paper-card__body"><div class="tag-cloud">${validations}</div></div></article>
      </div>
      <div class="dashboard-grid dashboard-grid--2 registry-detail-grid">
        <article class="paper-card"><div class="paper-card__header"><div><h2>Valid examples</h2><p>Illustrative values before parent-specific constraints.</p></div></div><div class="paper-card__body stack">${validExamples}</div></article>
        <article class="paper-card"><div class="paper-card__header"><div><h2>Invalid examples</h2><p>Values that violate the primitive's base semantics.</p></div></div><div class="paper-card__body stack">${invalidExamples}</div></article>
      </div>
      ${field.notes.length ? `<article class="paper-card"><div class="paper-card__header"><div><h2>Implementation notes</h2><p>Important field-specific boundaries.</p></div></div><div class="paper-card__body"><ul class="list-clean">${field.notes.map((note)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-circle-info")}</span><div>${escapeHtml(note)}</div></li>`).join("")}</ul></div></article>` : ""}
      <article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative field JSON</h2><p>Exact primitive field definition consumed by the Phase 3 field registry.</p></div><button class="button button--ghost button--compact" type="button" data-copy-value="${escapeHtml(JSON.stringify(field))}" data-copy-label="Field JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawField}</code></pre></div></article>
      <details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawRegistry}</code></pre></div></details>
    </div>`;
}

export function renderRegistryMissing(id = "") {
  return `
    ${pageHeader("Registry", "Registry item not found", "The requested machine ID is not present in the authoritative registry index.", statusBadge("planned", "Unknown ID"))}
    <div class="registry-empty paper-card registry-empty--page"><span class="registry-empty__icon">${icon("fa-file-circle-xmark")}</span><h3>${id ? `No entry for ${escapeHtml(id)}` : "No registry entry"}</h3><p>Check the machine ID or return to the Registry Index. The portal will not fabricate an unknown contract.</p><a class="button button--primary" href="#/registry">Open Registry Index</a></div>`;
}


const coreCategoryLabels = {
  identity: "Identity and Scope",
  lifecycle: "Lifecycle and Publishing",
  audit: "Audit and Versioning",
  contact: "Contact and Location",
  media: "Media",
  action: "Links and Actions",
  integration: "External References"
};

function coreFieldSource(field) {
  if (field.primitive) return `<a href="#/registry/item/${encodeURIComponent(field.primitive)}"><code>${escapeHtml(field.primitive)}</code></a>`;
  if (field.schema) return `<a href="#/registry/item/${encodeURIComponent(field.schema)}"><code>${escapeHtml(field.schema)}</code></a>`;
  return "—";
}

function renderCoreSchemaCards(coreSchemas, filters = {}) {
  const rows = coreSchemas.search(filters.q ?? "", { category: filters.category ?? "", domain: filters.domain ?? "" });
  if (!rows.length) return `<div class="registry-empty paper-card"><span class="registry-empty__icon">${icon("fa-magnifying-glass")}</span><h3>No Shared Core Schemas match</h3><p>Change the search or filter. Phase 4 only displays authoritative definitions that exist.</p><button class="button button--secondary" type="button" data-core-clear>Clear filters</button></div>`;
  return `<div class="core-schema-grid">${rows.map((item)=>`<article class="paper-card core-schema-card">
    <div class="core-schema-card__top"><div><span class="core-schema-card__category">${escapeHtml(coreCategoryLabels[item.category] ?? item.category)}</span><h3><a href="#/registry/item/${encodeURIComponent(item.$id)}">${escapeHtml(item.name)}</a></h3><code>${escapeHtml(item.$id)}</code></div><span class="status-badge status-badge--stable">Stable</span></div>
    <p>${escapeHtml(item.description)}</p>
    <div class="core-schema-card__meta"><span>${icon("fa-list")} ${item.fields.length} fields</span><span>${icon("fa-shield-halved")} ${item.validationRules.length} object rules</span><span>${icon("fa-eye")} ${item.delivery.publicAllowed ? "Public eligible" : "Private default"}</span></div>
    <div class="core-schema-card__fields">${item.fields.slice(0,5).map((field)=>`<span><code>${escapeHtml(field.key)}</code></span>`).join("")}${item.fields.length>5?`<span>+${item.fields.length-5}</span>`:""}</div>
    <a class="core-schema-card__open" href="#/registry/item/${encodeURIComponent(item.$id)}">Inspect schema ${icon("fa-arrow-right")}</a>
  </article>`).join("")}</div>`;
}

export function renderCoreSchemasIndex(coreSchemas, filters = {}, mode = "core") {
  const domain = mode === "shared" ? "shared" : "core";
  const title = mode === "shared" ? "Shared Schemas" : "Core Schemas";
  const description = mode === "shared"
    ? "Reusable cross-domain address, media, contact, link, CTA and external-reference structures."
    : "Identity, tenant scope, references, publishing, scheduling, versioning and audit structures used across the platform.";
  const effective = { ...filters, domain };
  const count = coreSchemas.search(effective.q ?? "", effective).length;
  const categories = coreSchemas.schemas.filter((item)=>item.domain===domain).map((item)=>item.category).filter((value,index,array)=>array.indexOf(value)===index).sort();
  const options = categories.map((value)=>`<option value="${escapeHtml(value)}" ${value===effective.category?"selected":""}>${escapeHtml(coreCategoryLabels[value] ?? value)}</option>`).join("");
  return `
    ${pageHeader("Registry", title, description, `<div class="header-actions"><span class="status-badge status-badge--stable">Phase 4</span><span class="tag">${count} schemas</span></div>`)}
    <div class="stack stack--lg core-schema-page" data-core-mode="${domain}">
      <div class="registry-source-bar" role="status"><span>${icon("fa-database")} Runtime source</span><strong>${coreSchemas.source === "authoritative-json" ? "Authoritative Shared Core JSON" : "Generated local fallback"}</strong><span class="tag">v${escapeHtml(coreSchemas.data.registryVersion)}</span></div>
      <section class="paper-card"><div class="paper-card__header"><div><h2>Find ${mode === "shared" ? "shared" : "core"} schemas</h2><p>Search contract IDs, field keys, descriptions and object-level validation rules.</p></div><button class="button button--ghost button--compact" type="button" data-core-clear>${icon("fa-rotate-left")} Clear</button></div><div class="paper-card__body field-filter-grid">
        <label class="field field--search"><span>Search schemas</span><div class="field-control field-control--icon">${icon("fa-magnifying-glass")}<input type="search" value="${escapeHtml(effective.q ?? "")}" placeholder="e.g. publishing, media, actorId" data-core-q></div></label>
        <label class="field"><span>Category</span><select data-core-category><option value="">All categories</option>${options}</select></label>
        <div class="field-filter-summary"><span>Results</span><strong data-core-count>${count}</strong></div>
      </div></section>
      <div data-core-results>${renderCoreSchemaCards(coreSchemas,effective)}</div>
      <section class="paper-card"><div class="paper-card__header"><div><h2>Composition rules</h2><p>Shared Core objects sit above primitive fields and below business-domain schemas.</p></div><a class="button button--secondary button--compact" href="./standards/12-shared-core-schema-standard.md">${icon("fa-file-lines")} Standard</a></div><div class="paper-card__body"><div class="field-rule-grid">
        <div><strong>Primitive-first</strong><p>Each leaf property references a canonical Phase 3 primitive field.</p></div>
        <div><strong>Compose, don't copy</strong><p>Nested reusable concepts reference another canonical Shared Core Schema.</p></div>
        <div><strong>Presentation stays separate</strong><p>Schemas define structure and behavior, not customer-specific visual design.</p></div>
        <div><strong>Permissions stay separate</strong><p>CMS visibility metadata is never a replacement for authorization.</p></div>
      </div></div></section>
    </div>`;
}

export function renderCoreSchemaCardsOnly(coreSchemas, filters = {}, mode = "core") {
  return renderCoreSchemaCards(coreSchemas, { ...filters, domain: mode === "shared" ? "shared" : "core" });
}

export function renderCoreSchemaDetail(engine, item, schema) {
  if (!schema) return renderRegistryDetail(engine,item);
  const sourceHref=`./${item.source}`;
  const rawSchema=escapeHtml(JSON.stringify(schema,null,2));
  const rawRegistry=escapeHtml(JSON.stringify(item,null,2));
  const fieldRows=schema.fields.map((field)=>`<tr><td data-label="Field"><strong>${escapeHtml(field.key)}</strong><span>${escapeHtml(field.description)}</span></td><td data-label="Source">${coreFieldSource(field)}</td><td data-label="Required">${field.required?'<span class="status-badge status-badge--stable">Required</span>':'Optional'}</td><td data-label="Nullable">${field.nullable?'Yes':'No'}</td><td data-label="Configuration">${field.config?`<code>${escapeHtml(Object.keys(field.config).join(", "))}</code>`:'—'}</td></tr>`).join("");
  const relations=schema.relationships.length?schema.relationships.map((rel)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-link")}</span><div><strong>${escapeHtml(rel.type)}</strong> <a href="#/registry/item/${encodeURIComponent(rel.target)}"><code>${escapeHtml(rel.target)}</code></a><p>${escapeHtml(rel.description)}</p></div></li>`).join(""):'<p class="muted">No explicit schema relationships.</p>';
  const rules=schema.validationRules.length?schema.validationRules.map((rule)=>`<div class="core-rule"><code>${escapeHtml(rule.id)}</code><p>${escapeHtml(rule.description)}</p></div>`).join(""):'<p class="muted">No additional object-level rules.</p>';
  const valid=(schema.examples.valid??[]).map((value)=>`<pre class="field-example field-example--valid"><code>${escapeHtml(JSON.stringify(value,null,2))}</code></pre>`).join("")||'<p class="muted">No examples.</p>';
  const invalid=(schema.examples.invalid??[]).map((value)=>`<pre class="field-example field-example--invalid"><code>${escapeHtml(JSON.stringify(value,null,2))}</code></pre>`).join("")||'<p class="muted">No examples.</p>';
  return `
    ${pageHeader(schema.domain === "shared" ? "Shared Schema" : "Core Schema", schema.name, schema.description, `<div class="header-actions"><span class="status-badge status-badge--stable">Stable</span><span class="tag">v${escapeHtml(schema.version)}</span></div>`)}
    <div class="stack stack--lg core-schema-detail">
      <div class="registry-detail__identity"><div><span>Machine ID</span><code>${escapeHtml(schema.$id)}</code></div><div class="registry-detail__actions"><button class="button button--secondary button--compact" type="button" data-copy-value="${escapeHtml(schema.$id)}" data-copy-label="Schema ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${escapeHtml(sourceHref)}">${icon("fa-file-code")} Source JSON</a><a class="button button--secondary button--compact" href="#/registry/${schema.domain}">${icon("fa-cubes")} ${schema.domain === "shared" ? "Shared" : "Core"}</a></div></div>
      <section class="dashboard-grid dashboard-grid--4">
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Domain</span><span class="metric-card__icon">${icon("fa-layer-group")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(schema.domain)}</div></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Category</span><span class="metric-card__icon">${icon("fa-tags")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(coreCategoryLabels[schema.category]??schema.category)}</div></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Fields</span><span class="metric-card__icon">${icon("fa-list")}</span></div><div class="metric-card__value">${schema.fields.length}</div></article>
        <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Public delivery</span><span class="metric-card__icon">${icon("fa-eye")}</span></div><div class="metric-card__value metric-card__value--text">${schema.delivery.publicAllowed?"Eligible":"Private"}</div></article>
      </section>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Purpose</h2><p>Why this reusable object exists.</p></div></div><div class="paper-card__body"><p class="core-purpose">${escapeHtml(schema.purpose)}</p><div class="core-cms-strip"><span><strong>CMS label</strong> ${escapeHtml(schema.cms.label)}</span><span><strong>Customer UI</strong> ${schema.cms.customerVisible?"Visible":"Hidden"}</span><span><strong>NEXT F Admin</strong> ${schema.cms.adminVisible?"Visible":"Hidden"}</span><span><strong>Placement</strong> <code>${escapeHtml(schema.cms.defaultPlacement)}</code></span></div></div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Fields</h2><p>Canonical composition. Primitive and nested schema references are authoritative.</p></div><span class="tag">${schema.fields.length}</span></div><div class="registry-table-wrap"><table class="registry-table core-fields-table"><thead><tr><th>Field</th><th>Source</th><th>Required</th><th>Nullable</th><th>Configuration</th></tr></thead><tbody>${fieldRows}</tbody></table></div></article>
      <div class="dashboard-grid dashboard-grid--2 registry-detail-grid">
        <article class="paper-card"><div class="paper-card__header"><div><h2>Relationships</h2><p>Explicit contract composition and references.</p></div></div><div class="paper-card__body"><ul class="list-clean">${relations}</ul></div></article>
        <article class="paper-card"><div class="paper-card__header"><div><h2>Object validation</h2><p>Cross-field invariants in addition to primitive validation.</p></div><span class="tag">${schema.validationRules.length}</span></div><div class="paper-card__body core-rules">${rules}</div></article>
      </div>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Delivery boundary</h2><p>Default public-delivery eligibility for this structure.</p></div><span class="status-badge ${schema.delivery.publicAllowed?'status-badge--stable':'status-badge--planned'}">${schema.delivery.publicAllowed?'Public eligible':'Private default'}</span></div><div class="paper-card__body"><p>${escapeHtml(schema.delivery.notes)}</p></div></article>
      <div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Valid examples</h2></div></div><div class="paper-card__body stack">${valid}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Invalid examples</h2></div></div><div class="paper-card__body stack">${invalid}</div></article></div>
      ${schema.notes.length?`<article class="paper-card"><div class="paper-card__header"><div><h2>Implementation notes</h2></div></div><div class="paper-card__body"><ul class="list-clean">${schema.notes.map((note)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-circle-info")}</span><div>${escapeHtml(note)}</div></li>`).join("")}</ul></div></article>`:""}
      <article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative schema JSON</h2><p>Exact Phase 4 definition consumed by the Shared Core registry.</p></div><button class="button button--ghost button--compact" type="button" data-copy-value="${escapeHtml(JSON.stringify(schema))}" data-copy-label="Schema JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawSchema}</code></pre></div></article>
      <details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawRegistry}</code></pre></div></details>
    </div>`;
}


const contentCategoryLabels = {
  pages: "Pages and Sections",
  reusable: "Reusable Content",
  blog: "Blog",
  documentation: "Documentation",
  business: "Business Content",
  navigation: "Navigation",
  legal: "Legal Content",
  custom: "Custom Collections"
};
function contentFieldSource(field){
  if(field.primitive)return `<a href="#/registry/item/${encodeURIComponent(field.primitive)}"><code>${escapeHtml(field.primitive)}</code></a>`;
  if(field.schema)return `<a href="#/registry/item/${encodeURIComponent(field.schema)}"><code>${escapeHtml(field.schema)}</code></a>`;
  return "—";
}
function renderContentCards(engine,filters={}){
  const rows=engine.search(filters.q??"",filters);
  if(!rows.length)return `<div class="registry-empty paper-card"><span class="registry-empty__icon">${icon("fa-magnifying-glass")}</span><h3>No Content Contracts match</h3><p>Change the search or filters. The portal only shows authoritative Phase 5 definitions.</p><button class="button button--secondary" type="button" data-content-clear>Clear filters</button></div>`;
  return `<div class="content-schema-grid">${rows.map((item)=>`<article class="paper-card content-schema-card">
    <div class="content-schema-card__top"><div><span class="content-schema-card__category">${escapeHtml(contentCategoryLabels[item.category]??item.category)}</span><h3><a href="#/registry/item/${encodeURIComponent(item.$id)}">${escapeHtml(item.name)}</a></h3><code>${escapeHtml(item.$id)}</code></div><span class="status-badge status-badge--stable">Stable</span></div>
    <p>${escapeHtml(item.description)}</p>
    <div class="content-schema-card__meta"><span>${icon("fa-list")} ${item.fields.length} fields</span><span>${icon("fa-route")} ${escapeHtml(item.contentModel.routing)} routing</span><span>${icon("fa-pen-to-square")} ${item.contentModel.customerManaged?"Customer managed":"NEXT F managed"}</span><span>${icon("fa-clock-rotate-left")} ${item.contentModel.supportsRevision?"Versioned":"Not versioned"}</span></div>
    <div class="core-schema-card__fields">${item.fields.slice(0,6).map((field)=>`<span><code>${escapeHtml(field.key)}</code></span>`).join("")}${item.fields.length>6?`<span>+${item.fields.length-6}</span>`:""}</div>
    <a class="core-schema-card__open" href="#/registry/item/${encodeURIComponent(item.$id)}">Inspect content contract ${icon("fa-arrow-right")}</a>
  </article>`).join("")}</div>`;
}
export function renderContentSchemasIndex(engine,filters={}){
  const count=engine.search(filters.q??"",filters).length;
  const options=engine.categories.map((value)=>`<option value="${escapeHtml(value)}" ${value===filters.category?"selected":""}>${escapeHtml(contentCategoryLabels[value]??value)}</option>`).join("");
  const routing=["required","optional","none"].map((value)=>`<option value="${value}" ${value===filters.routing?"selected":""}>${value[0].toUpperCase()+value.slice(1)}</option>`).join("");
  return `${pageHeader("Registry","Content Contracts","Reusable customer-managed Page, Blog, Documentation, Business Content, Navigation, Legal and Custom Collection schemas.",`<div class="header-actions"><span class="status-badge status-badge--stable">Phase 5</span><span class="tag">${engine.size} contracts</span></div>`)}
  <div class="stack stack--lg content-schema-page">
   <div class="registry-source-bar" role="status"><span>${icon("fa-database")} Runtime source</span><strong>${engine.source==="authoritative-json"?"Authoritative Content JSON":"Generated local fallback"}</strong><span class="tag">v${escapeHtml(engine.data.registryVersion)}</span></div>
   <section class="paper-card"><div class="paper-card__header"><div><h2>Find content contracts</h2><p>Search contract IDs, CMS fields, routing behavior and validation rules.</p></div><button class="button button--ghost button--compact" type="button" data-content-clear>${icon("fa-rotate-left")} Clear</button></div><div class="paper-card__body content-filter-grid">
    <label class="field field--search"><span>Search</span><div class="field-control field-control--icon">${icon("fa-magnifying-glass")}<input type="search" value="${escapeHtml(filters.q??"")}" placeholder="e.g. blog, custom collection, navigation" data-content-q></div></label>
    <label class="field"><span>Category</span><select data-content-category><option value="">All categories</option>${options}</select></label>
    <label class="field"><span>Routing</span><select data-content-routing><option value="">Any routing</option>${routing}</select></label>
    <div class="field-filter-summary"><span>Results</span><strong data-content-count>${count}</strong></div>
   </div></section>
   <div data-content-results>${renderContentCards(engine,filters)}</div>
   <section class="paper-card"><div class="paper-card__header"><div><h2>Contract boundaries</h2><p>Phase 5 deliberately keeps later contracts separate rather than inventing them early.</p></div><a class="button button--secondary button--compact" href="./standards/13-content-contract-standard.md">${icon("fa-file-lines")} Standard</a></div><div class="paper-card__body"><div class="field-rule-grid">
    <div><strong>Presentation remains coded</strong><p>Contracts define editable data, not arbitrary customer-controlled HTML, CSS or JavaScript.</p></div>
    <div><strong>Blocks come next</strong><p>Page Section is a stable envelope. Concrete Hero, FAQ, CTA and other Block schemas arrive in Phase 6.</p></div>
    <div><strong>SEO composes later</strong><p>Phase 7 adds canonical SEO metadata and focus-keyword controls without duplicating them across content entities.</p></div>
    <div><strong>Custom Collections are controlled</strong><p>NEXT F defines collection schemas; the Customer CMS generates entry editors from registered fields.</p></div>
   </div></div></section>
  </div>`;
}
export function renderContentSchemaCardsOnly(engine,filters={}){return renderContentCards(engine,filters);}
export function renderContentSchemaDetail(registry,item,schema){
 if(!schema)return renderRegistryDetail(registry,item);
 const rawSchema=escapeHtml(JSON.stringify(schema,null,2));const rawRegistry=escapeHtml(JSON.stringify(item,null,2));const sourceHref=`./${item.source}`;
 const fieldRows=schema.fields.map((field)=>`<tr><td data-label="Field"><strong>${escapeHtml(field.key)}</strong><span>${escapeHtml(field.description)}</span></td><td data-label="Source">${contentFieldSource(field)}</td><td data-label="Required">${field.required?'<span class="status-badge status-badge--stable">Required</span>':'Optional'}</td><td data-label="Nullable">${field.nullable?'Yes':'No'}</td><td data-label="Editability">${field.config?.customerEditable===false?'<span class="tag">NEXT F/System</span>':'<span class="tag">Customer eligible</span>'}</td></tr>`).join("");
 const relations=schema.relationships.length?schema.relationships.map((rel)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-link")}</span><div><strong>${escapeHtml(rel.type)}</strong> <a href="#/registry/item/${encodeURIComponent(rel.target)}"><code>${escapeHtml(rel.target)}</code></a><p>${escapeHtml(rel.description)}</p></div></li>`).join(""):'<p class="muted">No explicit content relationships.</p>';
 const rules=schema.validationRules.map((r)=>`<div class="core-rule"><code>${escapeHtml(r.id)}</code><p>${escapeHtml(r.description)}</p></div>`).join("")||'<p class="muted">No additional object rules.</p>';
 const future=Object.entries(schema.futureBindings).map(([k,v])=>`<div class="content-binding"><strong>${escapeHtml(k)}</strong><span>${v?escapeHtml(v):'Not required'}</span></div>`).join("");
 const valid=(schema.examples.valid??[]).map((value)=>`<pre class="field-example field-example--valid"><code>${escapeHtml(JSON.stringify(value,null,2))}</code></pre>`).join("")||'<p class="muted">No examples.</p>';
 const invalid=(schema.examples.invalid??[]).map((value)=>`<pre class="field-example field-example--invalid"><code>${escapeHtml(JSON.stringify(value,null,2))}</code></pre>`).join("")||'<p class="muted">No examples.</p>';
 return `${pageHeader("Content Contract",schema.name,schema.description,`<div class="header-actions"><span class="status-badge status-badge--stable">Stable</span><span class="tag">v${escapeHtml(schema.version)}</span></div>`)}
 <div class="stack stack--lg content-schema-detail">
  <div class="registry-detail__identity"><div><span>Machine ID</span><code>${escapeHtml(schema.$id)}</code></div><div class="registry-detail__actions"><button class="button button--secondary button--compact" type="button" data-copy-value="${escapeHtml(schema.$id)}" data-copy-label="Schema ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${escapeHtml(sourceHref)}">${icon("fa-file-code")} Source JSON</a><a class="button button--secondary button--compact" href="#/registry/content">${icon("fa-file-lines")} Content</a></div></div>
  <section class="dashboard-grid dashboard-grid--4">
   <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Category</span><span class="metric-card__icon">${icon("fa-layer-group")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(contentCategoryLabels[schema.category]??schema.category)}</div></article>
   <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Fields</span><span class="metric-card__icon">${icon("fa-list")}</span></div><div class="metric-card__value">${schema.fields.length}</div></article>
   <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Routing</span><span class="metric-card__icon">${icon("fa-route")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(schema.contentModel.routing)}</div></article>
   <article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Customer managed</span><span class="metric-card__icon">${icon("fa-user-pen")}</span></div><div class="metric-card__value metric-card__value--text">${schema.contentModel.customerManaged?'Yes':'No'}</div></article>
  </section>
  <article class="paper-card"><div class="paper-card__header"><div><h2>Purpose and CMS behavior</h2><p>Why the contract exists and how the Customer CMS may expose it.</p></div></div><div class="paper-card__body"><p class="core-purpose">${escapeHtml(schema.purpose)}</p><div class="core-cms-strip"><span><strong>CMS label</strong> ${escapeHtml(schema.cms.label)}</span><span><strong>Editor</strong> <code>${escapeHtml(schema.cms.editorMode)}</code></span><span><strong>Publishing</strong> ${schema.contentModel.supportsPublishing?'Yes':'No'}</span><span><strong>Revision</strong> ${schema.contentModel.supportsRevision?'Yes':'No'}</span><span><strong>Placement</strong> <code>${escapeHtml(schema.cms.defaultPlacement)}</code></span></div></div></article>
  <article class="paper-card"><div class="paper-card__header"><div><h2>Fields</h2><p>Primitive and composed schema sources are canonical.</p></div><span class="tag">${schema.fields.length}</span></div><div class="registry-table-wrap"><table class="registry-table core-fields-table"><thead><tr><th>Field</th><th>Source</th><th>Required</th><th>Nullable</th><th>Editability</th></tr></thead><tbody>${fieldRows}</tbody></table></div></article>
  <div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Relationships</h2><p>Content composition and entity references.</p></div></div><div class="paper-card__body"><ul class="list-clean">${relations}</ul></div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Object validation</h2><p>Cross-field and content-domain invariants.</p></div><span class="tag">${schema.validationRules.length}</span></div><div class="paper-card__body core-rules">${rules}</div></article></div>
  <article class="paper-card"><div class="paper-card__header"><div><h2>Future bindings</h2><p>Assigned later-phase contracts intentionally not fabricated in Phase 5.</p></div></div><div class="paper-card__body content-binding-grid">${future}</div></article>
  <article class="paper-card"><div class="paper-card__header"><div><h2>Delivery boundary</h2><p>Public eligibility is not the same as unconditional public access.</p></div><span class="status-badge ${schema.delivery.publicAllowed?'status-badge--stable':'status-badge--planned'}">${schema.delivery.publicAllowed?'Public eligible':'Private default'}</span></div><div class="paper-card__body"><p>${escapeHtml(schema.delivery.notes)}</p></div></article>
  <div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Valid examples</h2></div></div><div class="paper-card__body stack">${valid}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Invalid examples</h2></div></div><div class="paper-card__body stack">${invalid}</div></article></div>
  ${schema.notes.length?`<article class="paper-card"><div class="paper-card__header"><div><h2>Implementation notes</h2></div></div><div class="paper-card__body"><ul class="list-clean">${schema.notes.map((note)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-circle-info")}</span><div>${escapeHtml(note)}</div></li>`).join("")}</ul></div></article>`:""}
  <article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative schema JSON</h2><p>Exact Phase 5 source definition.</p></div><button class="button button--ghost button--compact" type="button" data-copy-value="${escapeHtml(JSON.stringify(schema))}" data-copy-label="Schema JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawSchema}</code></pre></div></article>
  <details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawRegistry}</code></pre></div></details>
 </div>`;
}


const blockCategoryLabels={foundation:"Foundation",hero:"Hero",editorial:"Editorial",media:"Media",listing:"Listings",proof:"Trust & Proof",business:"Business",conversion:"Conversion",utility:"Utility",extension:"Extension"};
function blockFieldSource(field){
  const source=field.primitive??field.schema??"unknown";
  const href=`#/registry/item/${encodeURIComponent(source)}`;
  let out=`<a href="${href}"><code>${escapeHtml(source)}</code></a>`;
  if(field.itemsSchema)out+=`<span class="registry-cell-sub">items: <a href="#/registry/item/${encodeURIComponent(field.itemsSchema)}"><code>${escapeHtml(field.itemsSchema)}</code></a></span>`;
  return out;
}
function renderBlockCards(engine,filters={}){
 const items=engine.search(filters.q,filters);
 if(!items.length)return `<div class="empty-state"><i class="fa-solid fa-table-columns" aria-hidden="true"></i><h2>No Block contracts found</h2><p>Change the search or filter values.</p><button class="button button--secondary" type="button" data-block-clear>Clear filters</button></div>`;
 return `<div class="registry-card-grid">${items.map((b)=>`<a class="paper-card registry-card" href="#/registry/item/${encodeURIComponent(b.$id)}"><div class="registry-card__top"><span class="registry-domain">${escapeHtml(blockCategoryLabels[b.category]??b.category)}</span><span class="status-badge status-badge--stable">Stable</span></div><h3>${escapeHtml(b.name)}</h3><code>${escapeHtml(b.$id)}</code><p>${escapeHtml(b.description)}</p><div class="block-card__meta"><span class="block-kind-chip">${icon(b.blockModel.kind==='section'?'fa-table-columns':'fa-cube')} ${escapeHtml(b.blockModel.kind)}</span><span class="tag">${b.fields.length} fields</span><span class="tag">${b.validationRules.length} rules</span></div></a>`).join("")}</div>`;
}
export function renderBlocksIndex(engine,filters={}){
 const cats=[...engine.categories].map((c)=>`<option value="${escapeHtml(c)}" ${filters.category===c?'selected':''}>${escapeHtml(blockCategoryLabels[c]??c)}</option>`).join("");
 const kinds=['section','embedded'].map((k)=>`<option value="${k}" ${filters.kind===k?'selected':''}>${k==='section'?'Section Blocks':'Embedded Helpers'}</option>`).join("");
 const count=engine.search(filters.q,filters).length;
 const sections=engine.schemas.filter(x=>x.blockModel.kind==='section').length, helpers=engine.size-sections;
 return `${pageHeader("Registry", "Block Registry", "Reusable structured page-section contracts that connect Customer CMS content to coded frontend components.", `<div class="header-actions"><span class="status-badge status-badge--stable">Phase 6</span><span class="tag">${engine.size} contracts</span></div>`)}
 <div class="stack stack--lg">
  <section class="dashboard-grid dashboard-grid--4"><article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Section Blocks</span><span class="metric-card__icon">${icon("fa-table-columns")}</span></div><div class="metric-card__value">${sections}</div></article><article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Embedded Helpers</span><span class="metric-card__icon">${icon("fa-cube")}</span></div><div class="metric-card__value">${helpers}</div></article><article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Categories</span><span class="metric-card__icon">${icon("fa-layer-group")}</span></div><div class="metric-card__value">${engine.categories.length}</div></article><article class="paper-card metric-card"><div class="metric-card__top"><span class="metric-card__label">Source</span><span class="metric-card__icon">${icon("fa-file-code")}</span></div><div class="metric-card__value metric-card__value--text">${escapeHtml(engine.source)}</div></article></section>
  <div class="block-contract-note"><p><strong>CMS content ≠ page builder.</strong> Block contracts define structured content. HTML structure, responsive layout, CSS, animation and component implementation remain controlled by the customer site's coded frontend.</p></div>
  <section class="paper-card filter-card"><div class="filter-grid"><label class="field"><span>Search Blocks</span><div class="field-input-wrap">${icon("fa-magnifying-glass")}<input type="search" value="${escapeHtml(filters.q??"")}" placeholder="e.g. hero, pricing, gallery" data-block-q></div></label><label class="field"><span>Category</span><select data-block-category><option value="">All categories</option>${cats}</select></label><label class="field"><span>Kind</span><select data-block-kind><option value="">All kinds</option>${kinds}</select></label><div class="field-filter-summary"><span>Results</span><strong data-block-count>${count}</strong></div></div></section>
  <div data-block-results>${renderBlockCards(engine,filters)}</div>
  <section class="paper-card"><div class="paper-card__header"><div><h2>Block boundaries</h2><p>These rules protect custom-coded customer sites from turning into uncontrolled page builders.</p></div><a class="button button--secondary button--compact" href="./standards/14-block-contract-standard.md">${icon("fa-file-lines")} Standard</a></div><div class="paper-card__body"><div class="block-policy-grid"><div><span>Presentation</span><strong>Frontend controlled</strong><p>Layouts, CSS, breakpoints, motion and component markup remain coded.</p></div><div><span>Customer editing</span><strong>Structured content</strong><p>Customers edit approved fields, records, references and bounded behavior options.</p></div><div><span>Custom requirements</span><strong>Registered extensions</strong><p>Use blocks.custom only with a Site-authorized, versioned extension schema.</p></div></div></div></section>
 </div>`;
}
export function renderBlockCardsOnly(engine,filters={}){return renderBlockCards(engine,filters);}
export function renderBlockDetail(registry,item,schema){
 if(!schema)return renderRegistryDetail(registry,item);
 const rawSchema=escapeHtml(JSON.stringify(schema,null,2)),rawRegistry=escapeHtml(JSON.stringify(item,null,2)),sourceHref=`./${item.source}`;
 const rows=schema.fields.map((f)=>`<tr><td data-label="Field"><strong>${escapeHtml(f.key)}</strong><span>${escapeHtml(f.description)}</span></td><td data-label="Source">${blockFieldSource(f)}</td><td data-label="Required">${f.required?'<span class="status-badge status-badge--stable">Required</span>':'Optional'}</td><td data-label="Editability">${f.config?.customerEditable===false?'<span class="tag">NEXT F/System</span>':'<span class="tag">Customer eligible</span>'}</td></tr>`).join("");
 const rels=schema.relationships.length?schema.relationships.map((r)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-link")}</span><div><strong>${escapeHtml(r.type)}</strong> <a href="#/registry/item/${encodeURIComponent(r.target)}"><code>${escapeHtml(r.target)}</code></a><p>${escapeHtml(r.description)}</p></div></li>`).join(""):'<p class="muted">No explicit relationships.</p>';
 const rules=schema.validationRules.map((r)=>`<div class="core-rule"><code>${escapeHtml(r.id)}</code><p>${escapeHtml(r.description)}</p></div>`).join("")||'<p class="muted">No additional object rules.</p>';
 const a11y=(schema.accessibility.requirements??[]).map((x)=>`<div class="block-a11y__item">${icon("fa-universal-access")}<span>${escapeHtml(x)}</span></div>`).join("")||'<p class="muted">No block-specific accessibility requirement beyond platform standards.</p>';
 const valid=(schema.examples.valid??[]).map((v)=>`<pre class="field-example field-example--valid"><code>${escapeHtml(JSON.stringify(v,null,2))}</code></pre>`).join("")||'<p class="muted">No examples.</p>';
 const invalid=(schema.examples.invalid??[]).map((v)=>`<pre class="field-example field-example--invalid"><code>${escapeHtml(JSON.stringify(v,null,2))}</code></pre>`).join("")||'<p class="muted">No examples.</p>';
 return `${pageHeader("Block Contract",schema.name,schema.description,`<div class="header-actions"><span class="status-badge status-badge--stable">Stable</span><span class="tag">v${escapeHtml(schema.version)}</span></div>`)}<div class="stack stack--lg block-detail"><div class="registry-detail__identity"><div><span>Machine ID</span><code>${escapeHtml(schema.$id)}</code></div><div class="registry-detail__actions"><button class="button button--secondary button--compact" type="button" data-copy-value="${escapeHtml(schema.$id)}" data-copy-label="Block ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${escapeHtml(sourceHref)}">${icon("fa-file-code")} Source JSON</a><a class="button button--secondary button--compact" href="#/registry/blocks">${icon("fa-table-columns")} Blocks</a></div></div>
 <section class="block-summary-strip"><div><span>Category</span><strong>${escapeHtml(blockCategoryLabels[schema.category]??schema.category)}</strong></div><div><span>Kind</span><strong>${escapeHtml(schema.blockModel.kind)}</strong></div><div><span>Placement</span><strong>${escapeHtml(schema.blockModel.placement)}</strong></div><div><span>Fields</span><strong>${schema.fields.length}</strong></div></section>
 <article class="paper-card"><div class="paper-card__header"><div><h2>Purpose</h2><p>Why this Block exists in the canonical website contract system.</p></div></div><div class="paper-card__body"><p class="core-purpose">${escapeHtml(schema.purpose)}</p></div></article>
 <article class="paper-card"><div class="paper-card__header"><div><h2>Fields</h2><p>All editable values resolve to canonical primitives or composed schemas.</p></div><span class="tag">${schema.fields.length}</span></div><div class="registry-table-wrap"><table class="registry-table core-fields-table"><thead><tr><th>Field</th><th>Source</th><th>Required</th><th>Editability</th></tr></thead><tbody>${rows}</tbody></table></div></article>
 <div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Relationships</h2></div></div><div class="paper-card__body"><ul class="list-clean">${rels}</ul></div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Validation</h2></div><span class="tag">${schema.validationRules.length}</span></div><div class="paper-card__body core-rules">${rules}</div></article></div>
 <article class="paper-card"><div class="paper-card__header"><div><h2>Presentation boundary</h2><p>Contract content does not own frontend design.</p></div></div><div class="paper-card__body"><div class="block-policy-grid"><div><span>Layout</span><strong>${escapeHtml(schema.presentation.layoutControlledBy)}</strong><p>Responsive layout remains implementation-controlled.</p></div><div><span>Style</span><strong>${escapeHtml(schema.presentation.styleControlledBy)}</strong><p>Customers do not receive arbitrary CSS controls.</p></div><div><span>Executable content</span><strong>Prohibited</strong><p>HTML: ${schema.blockModel.allowsArbitraryHtml?'Allowed':'No'} · CSS: ${schema.blockModel.allowsArbitraryCss?'Allowed':'No'} · JS: ${schema.blockModel.allowsArbitraryScript?'Allowed':'No'}</p></div></div></div></article>
 <article class="paper-card"><div class="paper-card__header"><div><h2>Accessibility requirements</h2><p>Normative requirements for component implementations.</p></div></div><div class="paper-card__body block-a11y">${a11y}</div></article>
 <div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Valid examples</h2></div></div><div class="paper-card__body stack">${valid}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Invalid examples</h2></div></div><div class="paper-card__body stack">${invalid}</div></article></div>
 ${schema.notes.length?`<article class="paper-card"><div class="paper-card__header"><div><h2>Implementation notes</h2></div></div><div class="paper-card__body"><ul class="list-clean">${schema.notes.map(n=>`<li class="list-item"><span class="list-item__icon">${icon("fa-circle-info")}</span><div>${escapeHtml(n)}</div></li>`).join("")}</ul></div></article>`:""}
 <article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative Block JSON</h2><p>Exact Phase 6 source definition.</p></div><button class="button button--ghost button--compact" type="button" data-copy-value="${escapeHtml(JSON.stringify(schema))}" data-copy-label="Block JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawSchema}</code></pre></div></article><details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawRegistry}</code></pre></div></details></div>`;
}


const seoCategoryLabels={
  metadata:"Metadata & Preview",keywords:"Keyword Targeting",social:"Social Metadata","structured-data":"Structured Data",directives:"Crawling & Directives",routing:"Redirects",indexing:"Indexing & Sitemaps",audit:"SEO Audits",links:"Link Health",search:"Search Performance"
};
function seoFieldSource(field){
  const id=field.primitive||field.schema||field.itemsPrimitive||field.itemsSchema;
  if(!id)return "—";
  const suffix=field.itemsPrimitive||field.itemsSchema?"[]":"";
  return `<a href="#/registry/item/${encodeURIComponent(id)}"><code>${escapeHtml(id)}${suffix}</code></a>`;
}
function renderSeoCards(engine,filters={}){
  const rows=engine.search(filters.q??"",filters);
  if(!rows.length)return `<div class="registry-empty paper-card"><span class="registry-empty__icon">${icon("fa-magnifying-glass")}</span><h3>No SEO Contracts match</h3><p>Change the search or filters. Only authoritative Phase 7 SEO definitions are shown.</p><button class="button button--secondary" type="button" data-seo-clear>Clear filters</button></div>`;
  return `<div class="seo-schema-grid">${rows.map((item)=>`<article class="paper-card seo-schema-card"><div class="seo-schema-card__top"><div><span class="seo-schema-card__category">${escapeHtml(seoCategoryLabels[item.category]??item.category)}</span><h3><a href="#/registry/item/${encodeURIComponent(item.$id)}">${escapeHtml(item.name)}</a></h3><code>${escapeHtml(item.$id)}</code></div><span class="status-badge status-badge--stable">Stable</span></div><p>${escapeHtml(item.description)}</p><div class="seo-schema-card__meta"><span>${icon("fa-shapes")} ${escapeHtml(item.seoModel.kind)}</span><span>${icon("fa-list")} ${item.fields.length} fields</span><span>${icon("fa-circle-check")} ${item.validationRules.length} rules</span><span>${icon(item.delivery.publicAllowed?"fa-globe":"fa-lock")} ${item.delivery.publicAllowed?"Public eligible":"Private/operational"}</span></div><div class="core-schema-card__fields">${item.fields.slice(0,6).map((field)=>`<span><code>${escapeHtml(field.key)}</code></span>`).join("")}${item.fields.length>6?`<span>+${item.fields.length-6}</span>`:""}</div><a class="core-schema-card__open" href="#/registry/item/${encodeURIComponent(item.$id)}">Inspect SEO contract ${icon("fa-arrow-right")}</a></article>`).join("")}</div>`;
}
export function renderSeoIndex(engine,filters={}){
  const count=engine.search(filters.q??"",filters).length;
  const cats=engine.categories.map((c)=>`<option value="${escapeHtml(c)}" ${filters.category===c?"selected":""}>${escapeHtml(seoCategoryLabels[c]??c)}</option>`).join("");
  const kinds=engine.kinds.map((k)=>`<option value="${escapeHtml(k)}" ${filters.kind===k?"selected":""}>${escapeHtml(k.replaceAll("-"," "))}</option>`).join("");
  return `${pageHeader("Registry","SEO Contracts","Reusable metadata, keyword targeting, crawling/indexing, social, structured data, redirect, audit, link-health and search-performance contracts.",`<div class="header-actions"><span class="status-badge status-badge--stable">Phase 7</span><span class="tag">${engine.size} contracts</span></div>`)}<div class="stack stack--lg"><div class="registry-source-bar" role="status"><span>${icon("fa-database")} Runtime source</span><strong>${engine.source==="authoritative-json"?"Authoritative SEO JSON":"Generated local fallback"}</strong><span class="tag">v${escapeHtml(engine.data.registryVersion)}</span></div><div class="seo-preview-note"><strong>SEO contracts do not promise rankings.</strong> Metadata, audits and previews are structured inputs and diagnostics. Search engines may rewrite snippets, choose different canonicals, decline indexing or rank content differently.</div><section class="paper-card"><div class="paper-card__header"><div><h2>Find SEO contracts</h2><p>Search by machine ID, CMS field, validation rule, SEO category or operational model.</p></div><button class="button button--ghost button--compact" type="button" data-seo-clear>${icon("fa-rotate-left")} Clear</button></div><div class="paper-card__body seo-filter-grid"><label class="field"><span>Search</span><div class="field-input-wrap">${icon("fa-magnifying-glass")}<input type="search" value="${escapeHtml(filters.q??"")}" placeholder="e.g. canonical, redirect, audit" data-seo-q></div></label><label class="field"><span>Category</span><select data-seo-category><option value="">All categories</option>${cats}</select></label><label class="field"><span>Model</span><select data-seo-kind><option value="">All models</option>${kinds}</select></label><div class="field-filter-summary"><span>Results</span><strong data-seo-count>${count}</strong></div></div></section><div data-seo-results>${renderSeoCards(engine,filters)}</div><section class="paper-card"><div class="paper-card__header"><div><h2>SEO contract boundaries</h2><p>Phase 7 deliberately separates editable SEO configuration from observed and derived operational data.</p></div><a class="button button--secondary button--compact" href="./standards/15-seo-contract-standard.md">${icon("fa-file-lines")} Standard</a></div><div class="paper-card__body"><div class="field-rule-grid"><div><strong>Metadata attaches centrally</strong><p><code>seo.metadata</code> references canonical content/entities instead of duplicating SEO fields in every Content schema.</p></div><div><strong>Robots concerns stay separate</strong><p>Page-level meta robots and robots.txt crawl policy use different contracts.</p></div><div><strong>Observed data stays observed</strong><p>Search performance, inspection and audit records retain source and freshness metadata and are not editable business content.</p></div><div><strong>Integrations come later</strong><p>Google Search Console and other provider authorization belongs to Phase 10 Integration contracts.</p></div></div></div></section></div>`;
}
export function renderSeoCardsOnly(engine,filters={}){return renderSeoCards(engine,filters);}
export function renderSeoDetail(registry,item,schema){
  if(!schema)return renderRegistryDetail(registry,item);
  const rawSchema=escapeHtml(JSON.stringify(schema,null,2)),rawRegistry=escapeHtml(JSON.stringify(item,null,2)),sourceHref=`./${item.source}`;
  const rows=schema.fields.map((f)=>`<tr><td data-label="Field"><strong>${escapeHtml(f.key)}</strong><span>${escapeHtml(f.description)}</span></td><td data-label="Source">${seoFieldSource(f)}</td><td data-label="Required">${f.required?'<span class="status-badge status-badge--stable">Required</span>':'Optional'}</td><td data-label="Nullable">${f.nullable?'Yes':'No'}</td><td data-label="Editability">${f.config?.customerEditable===false?'<span class="tag">System/derived</span>':'<span class="tag">Customer eligible</span>'}</td></tr>`).join("");
  const relations=schema.relationships.length?schema.relationships.map((r)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-link")}</span><div><strong>${escapeHtml(r.type)}</strong> <a href="#/registry/item/${encodeURIComponent(r.target)}"><code>${escapeHtml(r.target)}</code></a><p>${escapeHtml(r.description)}</p></div></li>`).join(""):'<p class="muted">No explicit relationships.</p>';
  const rules=schema.validationRules.map((r)=>`<div class="seo-rule"><code>${escapeHtml(r.id)}</code><p>${escapeHtml(r.description)}</p></div>`).join("")||'<p class="muted">No additional object rules.</p>';
  const valid=(schema.examples.valid??[]).map((v)=>`<pre class="field-example field-example--valid"><code>${escapeHtml(JSON.stringify(v,null,2))}</code></pre>`).join("")||'<p class="muted">No examples.</p>';
  const invalid=(schema.examples.invalid??[]).map((v)=>`<pre class="field-example field-example--invalid"><code>${escapeHtml(JSON.stringify(v,null,2))}</code></pre>`).join("")||'<p class="muted">No examples.</p>';
  return `${pageHeader("SEO Contract",schema.name,schema.description,`<div class="header-actions"><span class="status-badge status-badge--stable">Stable</span><span class="tag">v${escapeHtml(schema.version)}</span></div>`)}<div class="stack stack--lg"><div class="registry-detail__identity"><div><span>Machine ID</span><code>${escapeHtml(schema.$id)}</code></div><div class="registry-detail__actions"><button class="button button--secondary button--compact" type="button" data-copy-value="${escapeHtml(schema.$id)}" data-copy-label="SEO ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${escapeHtml(sourceHref)}">${icon("fa-file-code")} Source JSON</a><a class="button button--secondary button--compact" href="#/registry/seo">${icon("fa-magnifying-glass-chart")} SEO</a></div></div><section class="seo-model-grid"><div><span>Category</span><strong>${escapeHtml(seoCategoryLabels[schema.category]??schema.category)}</strong></div><div><span>Model</span><strong>${escapeHtml(schema.seoModel.kind)}</strong></div><div><span>Customer managed</span><strong>${schema.seoModel.customerManaged?'Yes':'No'}</strong></div><div><span>Public delivery</span><strong>${schema.delivery.publicAllowed?'Eligible':'No'}</strong></div></section><article class="paper-card"><div class="paper-card__header"><div><h2>Purpose</h2><p>Why this SEO contract exists.</p></div></div><div class="paper-card__body"><p class="core-purpose">${escapeHtml(schema.purpose)}</p></div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Fields</h2><p>Canonical primitives and nested schemas used by this SEO object.</p></div><span class="tag">${schema.fields.length}</span></div><div class="registry-table-wrap"><table class="registry-table core-fields-table"><thead><tr><th>Field</th><th>Source</th><th>Required</th><th>Nullable</th><th>Editability</th></tr></thead><tbody>${rows}</tbody></table></div></article><div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Relationships</h2></div></div><div class="paper-card__body"><ul class="list-clean">${relations}</ul></div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Validation rules</h2></div><span class="tag">${schema.validationRules.length}</span></div><div class="paper-card__body seo-rule-grid">${rules}</div></article></div><article class="paper-card"><div class="paper-card__header"><div><h2>CMS and delivery boundary</h2></div></div><div class="paper-card__body"><div class="field-rule-grid"><div><strong>${schema.cms.customerVisible?'Customer CMS eligible':'Not customer visible'}</strong><p>Editor mode: <code>${escapeHtml(schema.cms.editorMode)}</code></p></div><div><strong>${schema.seoModel.derived?'Derived/observed data':'Managed contract data'}</strong><p>${schema.seoModel.derived?'Values must come from analysis/provider observations rather than arbitrary editing.':'Authorized CMS roles may manage eligible fields.'}</p></div><div><strong>${schema.delivery.publicAllowed?'Public renderer eligible':'Private by default'}</strong><p>${escapeHtml(schema.delivery.notes)}</p></div><div><strong>Future bindings</strong><p>Integrations: ${escapeHtml(schema.futureBindings.integrations??'none')} · Events: ${escapeHtml(schema.futureBindings.events??'none')} · Permissions: ${escapeHtml(schema.futureBindings.permissions??'none')}</p></div></div></div></article><div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Valid examples</h2></div></div><div class="paper-card__body stack">${valid}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Invalid examples</h2></div></div><div class="paper-card__body stack">${invalid}</div></article></div>${schema.notes.length?`<article class="paper-card"><div class="paper-card__header"><div><h2>Implementation notes</h2></div></div><div class="paper-card__body"><ul class="list-clean">${schema.notes.map((n)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-circle-info")}</span><div>${escapeHtml(n)}</div></li>`).join("")}</ul></div></article>`:""}<article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative SEO JSON</h2><p>Exact Phase 7 source definition.</p></div><button class="button button--ghost button--compact" type="button" data-copy-value="${escapeHtml(JSON.stringify(schema))}" data-copy-label="SEO JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawSchema}</code></pre></div></article><details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawRegistry}</code></pre></div></details></div>`;
}


const formsCategoryLabels={
  "builder":"Form Builder",
  "logic":"Conditional Logic",
  "submission":"Submissions",
  "anti-abuse":"Anti-abuse",
  "consent-data":"Consent and Data Handling",
  "leads":"Leads",
  "automation":"Notifications and Mapping"
};

export function renderFormsCardsOnly(engine,filters){
  const rows=engine.search(filters.q,filters);
  if(!rows.length)return `<div class="registry-empty"><span class="registry-empty__icon">${icon("fa-magnifying-glass")}</span><h3>No Forms contracts match</h3><p>Change the search or filters.</p><button class="button button--secondary" type="button" data-forms-clear>Clear filters</button></div>`;
  return `<div class="forms-schema-grid">${rows.map((item)=>`<article class="paper-card forms-schema-card"><div class="forms-schema-card__top"><div><span class="forms-schema-card__category">${escapeHtml(formsCategoryLabels[item.category]??item.category)}</span><h3><a href="#/registry/item/${encodeURIComponent(item.$id)}">${escapeHtml(item.name)}</a></h3><code>${escapeHtml(item.$id)}</code></div><span class="status-badge status-badge--stable">Stable</span></div><p>${escapeHtml(item.description)}</p><div class="forms-schema-card__meta"><span>${icon("fa-shapes")} ${escapeHtml(item.formsModel.kind)}</span><span>${icon("fa-list")} ${item.fields.length} fields</span><span>${icon("fa-circle-check")} ${item.validationRules.length} rules</span><span>${icon(item.formsModel.containsPersonalData?"fa-user-shield":"fa-database")} ${item.formsModel.containsPersonalData?"Personal data possible":"No intrinsic personal data"}</span><span>${icon(item.delivery.publicAllowed?"fa-globe":"fa-lock")} ${item.delivery.publicAllowed?"Public definition eligible":"Private/operational"}</span></div><div class="core-schema-card__fields">${item.fields.slice(0,6).map((field)=>`<span><code>${escapeHtml(field.key)}</code></span>`).join("")}${item.fields.length>6?`<span>+${item.fields.length-6}</span>`:""}</div><a class="core-schema-card__open" href="#/registry/item/${encodeURIComponent(item.$id)}">Inspect Forms contract ${icon("fa-arrow-right")}</a></article>`).join("")}</div>`;
}

export function renderFormsIndex(engine,filters){
  const cats=engine.categories.map((c)=>`<option value="${escapeHtml(c)}" ${filters.category===c?"selected":""}>${escapeHtml(formsCategoryLabels[c]??c)}</option>`).join("");
  const kinds=engine.kinds.map((k)=>`<option value="${escapeHtml(k)}" ${filters.kind===k?"selected":""}>${escapeHtml(k)}</option>`).join("");
  return `${pageHeader("Registry","Forms and Leads","Canonical Form Builder, submission, anti-abuse, consent, Lead, notification and mapping contracts. Vendor integrations, canonical Events, Webhooks and Permissions remain in their scheduled phases.",`<div class="header-actions"><span class="status-badge status-badge--stable">Phase 8</span><span class="tag">${engine.size} contracts</span></div>`)}<div class="stack stack--lg"><section class="paper-card"><div class="paper-card__header"><div><h2>Forms contract explorer</h2><p>Search authoritative machine-readable definitions. Historical submissions remain snapshots even when Forms later change.</p></div><span class="tag">${escapeHtml(engine.source)}</span></div><div class="paper-card__body"><div class="registry-toolbar"><label class="search-field"><span class="sr-only">Search Forms contracts</span>${icon("fa-magnifying-glass")}<input type="search" placeholder="Search forms, leads, consent, spam..." value="${escapeHtml(filters.q)}" data-forms-q></label><label><span class="sr-only">Category</span><select data-forms-category><option value="">All categories</option>${cats}</select></label><label><span class="sr-only">Model</span><select data-forms-kind><option value="">All models</option>${kinds}</select></label></div></div></section><section data-forms-results>${renderFormsCardsOnly(engine,filters)}</section></div>`;
}

export function renderFormsDetail(registry,item,schema){
  if(!schema)return renderRegistryDetail(registry,item);
  const key=schema.$id.split(".",2)[1].replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
  const sourceHref=`./registry/forms/definitions/${key}.json`;
  const sourceCell=(field)=>{const id=field.primitive||field.schema||field.itemsPrimitive||field.itemsSchema||"";if(!id)return "—";const label=field.itemsPrimitive||field.itemsSchema?`Array of ${id}`:id;return registry.get(id)?`<a class="inline-link" href="#/registry/item/${encodeURIComponent(id)}"><code>${escapeHtml(label)}</code></a>`:`<code>${escapeHtml(label)}</code>`;};
  const editable=(field)=>{const c=field.config||{};if(c.customerEditable===false)return "System/Admin";if(c.adminEditable===false&&c.customerEditable!==false)return "Customer";return "Configured";};
  const rows=schema.fields.map((f)=>`<tr><td><strong>${escapeHtml(f.key)}</strong><span class="table-subcopy">${escapeHtml(f.description)}</span></td><td>${sourceCell(f)}</td><td>${f.required?"Yes":"No"}</td><td>${f.nullable?"Yes":"No"}</td><td>${escapeHtml(editable(f))}</td></tr>`).join("");
  const relations=schema.relationships.length?schema.relationships.map((r)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-link")}</span><div><strong>${escapeHtml(r.type)}</strong> ${registry.get(r.target)?`<a class="inline-link" href="#/registry/item/${encodeURIComponent(r.target)}"><code>${escapeHtml(r.target)}</code></a>`:`<code>${escapeHtml(r.target)}</code>`}<p>${escapeHtml(r.description||"")}</p></div></li>`).join(""):`<li class="registry-inline-empty">${icon("fa-minus")} No explicit schema relationships.</li>`;
  const rules=schema.validationRules.map((r)=>`<div class="forms-boundary-note"><strong><code>${escapeHtml(r.id)}</code></strong><p>${escapeHtml(r.description)}</p></div>`).join("");
  const valid=schema.examples.valid.length?schema.examples.valid.map((v)=>`<pre class="code-block"><code>${escapeHtml(JSON.stringify(v,null,2))}</code></pre>`).join(""):`<p class="muted">No compact example supplied for this structural contract.</p>`;
  const invalid=schema.examples.invalid.length?schema.examples.invalid.map((v)=>`<pre class="code-block"><code>${escapeHtml(JSON.stringify(v,null,2))}</code></pre>`).join(""):`<p class="muted">Invalid behavior is primarily defined by the validation rules above.</p>`;
  const rawSchema=escapeHtml(JSON.stringify(schema,null,2));const rawRegistry=escapeHtml(JSON.stringify(item,null,2));
  return `${pageHeader("Forms Contract",schema.name,schema.description,`<div class="header-actions"><span class="status-badge status-badge--stable">Stable</span><span class="tag">v${escapeHtml(schema.version)}</span></div>`)}<div class="stack stack--lg"><div class="registry-detail__identity"><div><span>Machine ID</span><code>${escapeHtml(schema.$id)}</code></div><div class="registry-detail__actions"><button class="button button--secondary button--compact" type="button" data-copy-value="${escapeHtml(schema.$id)}" data-copy-label="Forms ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${escapeHtml(sourceHref)}">${icon("fa-file-code")} Source JSON</a><a class="button button--secondary button--compact" href="#/registry/forms">${icon("fa-rectangle-list")} Forms</a></div></div><section class="forms-model-grid"><div><span>Category</span><strong>${escapeHtml(formsCategoryLabels[schema.category]??schema.category)}</strong></div><div><span>Model</span><strong>${escapeHtml(schema.formsModel.kind)}</strong></div><div><span>Customer managed</span><strong>${schema.formsModel.customerManaged?'Yes':'No'}</strong></div><div><span>Personal data</span><strong>${schema.formsModel.containsPersonalData?'Possible':'Not intrinsic'}</strong></div><div><span>Public delivery</span><strong>${schema.delivery.publicAllowed?'Definition subset':'No'}</strong></div></section><article class="paper-card"><div class="paper-card__header"><div><h2>Purpose</h2><p>Why this Forms/Leads contract exists.</p></div></div><div class="paper-card__body"><p class="core-purpose">${escapeHtml(schema.purpose)}</p></div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Fields</h2><p>Canonical primitive and nested contract composition.</p></div><span class="tag">${schema.fields.length}</span></div><div class="registry-table-wrap"><table class="registry-table core-fields-table"><thead><tr><th>Field</th><th>Source</th><th>Required</th><th>Nullable</th><th>Editing</th></tr></thead><tbody>${rows}</tbody></table></div></article><div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Relationships</h2></div></div><div class="paper-card__body"><ul class="list-clean">${relations}</ul></div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Validation and behavior rules</h2></div><span class="tag">${schema.validationRules.length}</span></div><div class="paper-card__body forms-rule-grid">${rules}</div></article></div><article class="paper-card"><div class="paper-card__header"><div><h2>CMS, privacy and delivery boundary</h2></div></div><div class="paper-card__body"><div class="field-rule-grid"><div><strong>${schema.cms.customerVisible?'Customer CMS eligible':'Internal/system contract'}</strong><p>Editor mode: <code>${escapeHtml(schema.cms.editorMode)}</code></p></div><div><strong>${schema.formsModel.containsPersonalData?'Personal data possible':'No intrinsic personal data'}</strong><p>${schema.formsModel.containsPersonalData?'Private handling and future Phase 30 privacy metadata apply.':'This object does not inherently require personal data.'}</p></div><div><strong>${schema.delivery.publicAllowed?'Public rendering subset only':'Private/operational'}</strong><p>${escapeHtml(schema.delivery.notes)}</p></div><div><strong>Future bindings</strong><p>Marketing: ${escapeHtml(schema.futureBindings.marketing)} · Integrations: ${escapeHtml(schema.futureBindings.integrations)} · Events: ${escapeHtml(schema.futureBindings.events)} · Webhooks: ${escapeHtml(schema.futureBindings.webhooks)} · Permissions: ${escapeHtml(schema.futureBindings.permissions)} · Privacy: ${escapeHtml(schema.futureBindings.privacy)}</p></div></div></div></article><div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Valid examples</h2></div></div><div class="paper-card__body stack">${valid}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Invalid examples</h2></div></div><div class="paper-card__body stack">${invalid}</div></article></div>${schema.notes.length?`<article class="paper-card"><div class="paper-card__header"><div><h2>Implementation notes</h2></div></div><div class="paper-card__body"><ul class="list-clean">${schema.notes.map((n)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-circle-info")}</span><div>${escapeHtml(n)}</div></li>`).join("")}</ul></div></article>`:""}<article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative Forms JSON</h2><p>Exact Phase 8 source definition.</p></div><button class="button button--ghost button--compact" type="button" data-copy-value="${escapeHtml(JSON.stringify(schema))}" data-copy-label="Forms JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawSchema}</code></pre></div></article><details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawRegistry}</code></pre></div></details></div>`;
}

const marketingCategoryLabels={
  configuration:"Configuration",
  tracking:"Tracking Events",
  context:"Event Context",
  "campaign-attribution":"Campaign & Attribution",
  conversion:"Conversions",
  consent:"Consent",
  destination:"Destinations & Dispatch",
  reporting:"Analytics & Reporting"
};
function marketingFieldSource(field){
  const id=field.primitive||field.schema||field.itemsPrimitive||field.itemsSchema;
  if(!id)return "—";
  const suffix=field.itemsPrimitive||field.itemsSchema?"[]":"";
  return `<a href="#/registry/item/${encodeURIComponent(id)}"><code>${escapeHtml(id)}${suffix}</code></a>`;
}
function renderMarketingCards(engine,filters={}){
  const rows=engine.search(filters.q??"",filters);
  if(!rows.length)return `<div class="registry-empty paper-card"><span class="registry-empty__icon">${icon("fa-magnifying-glass")}</span><h3>No Marketing contracts match</h3><p>Change the search or filters. Only authoritative Phase 9 Marketing and Tracking definitions are shown.</p><button class="button button--secondary" type="button" data-marketing-clear>Clear filters</button></div>`;
  return `<div class="marketing-schema-grid">${rows.map((item)=>`<article class="paper-card marketing-schema-card"><div class="marketing-schema-card__top"><div><span class="marketing-schema-card__category">${escapeHtml(marketingCategoryLabels[item.category]??item.category)}</span><h3><a href="#/registry/item/${encodeURIComponent(item.$id)}">${escapeHtml(item.name)}</a></h3><code>${escapeHtml(item.$id)}</code></div><span class="status-badge status-badge--stable">Stable</span></div><p>${escapeHtml(item.description)}</p><div class="marketing-schema-card__meta"><span>${icon("fa-shapes")} ${escapeHtml(item.marketingModel.kind)}</span><span>${icon("fa-list")} ${item.fields.length} fields</span><span>${icon("fa-circle-check")} ${item.validationRules.length} rules</span><span class="marketing-sensitivity">${icon(item.marketingModel.containsPersonalData?"fa-user-shield":"fa-database")} ${escapeHtml(item.marketingModel.dataSensitivity)}</span><span>${icon(item.delivery.publicAllowed?"fa-globe":"fa-lock")} ${item.delivery.publicAllowed?"Public subset eligible":"Private/operational"}</span></div><div class="core-schema-card__fields">${item.fields.slice(0,6).map((field)=>`<span><code>${escapeHtml(field.key)}</code></span>`).join("")}${item.fields.length>6?`<span>+${item.fields.length-6}</span>`:""}</div><a class="core-schema-card__open" href="#/registry/item/${encodeURIComponent(item.$id)}">Inspect Marketing contract ${icon("fa-arrow-right")}</a></article>`).join("")}</div>`;
}
export function renderMarketingCardsOnly(engine,filters={}){return renderMarketingCards(engine,filters);}
export function renderMarketingIndex(engine,filters={}){
  const cats=engine.categories.map((c)=>`<option value="${escapeHtml(c)}" ${filters.category===c?"selected":""}>${escapeHtml(marketingCategoryLabels[c]??c)}</option>`).join("");
  const kinds=engine.kinds.map((k)=>`<option value="${escapeHtml(k)}" ${filters.kind===k?"selected":""}>${escapeHtml(k)}</option>`).join("");
  const count=engine.search(filters.q??"",filters).length;
  const events=engine.trackingEvents.map((event)=>`<div class="marketing-event-key"><div class="marketing-event-key__top"><code>${escapeHtml(event.key)}</code><span class="tag">${escapeHtml(event.defaultConsentCategory)}</span></div><strong>${escapeHtml(event.label)}</strong><p>${escapeHtml(event.description)}</p></div>`).join("");
  return `${pageHeader("Registry","Marketing and Tracking","Provider-neutral tracking, analytics, campaign attribution, conversions, consent-aware routing and reporting contracts. Provider credentials and vendor connectors are defined by Phase 10 Integrations.",`<div class="header-actions"><span class="status-badge status-badge--stable">Phase 9</span><span class="tag">${engine.size} contracts</span></div>`)}
  <div class="stack stack--lg">
    <div class="registry-source-bar" role="status"><span>${icon("fa-database")} Runtime source</span><strong>${engine.source==="authoritative-json"?"Authoritative Marketing JSON":"Generated local fallback"}</strong><span class="tag">v${escapeHtml(engine.data.registryVersion)}</span></div>
    <div class="marketing-boundary-callout"><strong>Marketing contracts are provider-neutral.</strong><p>Google Tag Manager, GA4, Google Ads, Meta, Search Console and other vendor credentials/configuration are defined through the Phase 10 Integration Registry. Phase 9 defines the stable data and behavior those connectors consume.</p></div>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Find Marketing contracts</h2><p>Search by machine ID, event, conversion, consent, attribution, destination, reporting field or validation rule.</p></div><button class="button button--ghost button--compact" type="button" data-marketing-clear>${icon("fa-rotate-left")} Clear</button></div><div class="paper-card__body"><div class="registry-toolbar"><label class="search-field"><span class="sr-only">Search Marketing contracts</span>${icon("fa-magnifying-glass")}<input type="search" value="${escapeHtml(filters.q??"")}" placeholder="Search tracking, conversions, consent..." data-marketing-q></label><label><span class="sr-only">Category</span><select data-marketing-category><option value="">All categories</option>${cats}</select></label><label><span class="sr-only">Model</span><select data-marketing-kind><option value="">All models</option>${kinds}</select></label><div class="field-filter-summary"><span>Results</span><strong data-marketing-count>${count}</strong></div></div></div></section>
    <section data-marketing-results>${renderMarketingCards(engine,filters)}</section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Standard tracking vocabulary</h2><p>Reuse these event keys when the interaction matches. They are measurement observations; the wider platform Event Registry is still Phase 13.</p></div><a class="button button--secondary button--compact" href="./registry/marketing/tracking-events.json">${icon("fa-file-code")} Vocabulary JSON</a></div><div class="paper-card__body marketing-event-vocabulary">${events}</div></section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Phase 9 boundaries</h2><p>The Marketing layer is intentionally strict so future customer sites do not accumulate ad-tech-specific code.</p></div><a class="button button--secondary button--compact" href="./standards/17-marketing-tracking-contract-standard.md">${icon("fa-file-lines")} Standard</a></div><div class="paper-card__body"><div class="field-rule-grid"><div><strong>Business truth stays outside tracking</strong><p>A browser event cannot create the authoritative truth of a Lead, future Order, Payment or publication.</p></div><div><strong>Consent is evaluated before optional dispatch</strong><p>Unknown optional consent is not silently treated as granted, and debug mode never bypasses consent.</p></div><div><strong>No fingerprinting</strong><p>Anonymous IDs are random first-party identifiers. Device context stays intentionally coarse.</p></div><div><strong>Provider connectors are separate</strong><p>Phase 10 maps provider credentials/resources to these canonical Marketing contracts without changing their meaning.</p></div></div></div></section>
  </div>`;
}
export function renderMarketingDetail(registry,item,schema){
  if(!schema)return renderRegistryDetail(registry,item);
  const key=schema.$id.split(".",2)[1].replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
  const sourceHref=`./registry/marketing/definitions/${key}.json`;
  const rows=schema.fields.map((f)=>`<tr><td data-label="Field"><strong>${escapeHtml(f.key)}</strong><span>${escapeHtml(f.description)}</span></td><td data-label="Source">${marketingFieldSource(f)}</td><td data-label="Required">${f.required?'<span class="status-badge status-badge--stable">Required</span>':'Optional'}</td><td data-label="Nullable">${f.nullable?'Yes':'No'}</td><td data-label="Editing">${f.config?.customerEditable===false?'<span class="tag">NEXT F/System</span>':schema.marketingModel.customerManaged?'<span class="tag">Customer eligible</span>':'<span class="tag">Operational/System</span>'}</td></tr>`).join("");
  const relations=schema.relationships.length?schema.relationships.map((r)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-link")}</span><div><strong>${escapeHtml(r.type)}</strong> <a href="#/registry/item/${encodeURIComponent(r.target)}"><code>${escapeHtml(r.target)}</code></a><p>${escapeHtml(r.description)}</p></div></li>`).join(""):'<p class="muted">No explicit relationships.</p>';
  const rules=schema.validationRules.map((r)=>`<div class="marketing-rule"><strong><code>${escapeHtml(r.id)}</code></strong><p>${escapeHtml(r.description)}</p></div>`).join("")||'<p class="muted">No additional rules.</p>';
  const valid=(schema.examples.valid??[]).map((v)=>`<pre class="field-example field-example--valid"><code>${escapeHtml(JSON.stringify(v,null,2))}</code></pre>`).join("")||'<p class="muted">No example payload required for this definition.</p>';
  const invalid=(schema.examples.invalid??[]).map((v)=>`<pre class="field-example field-example--invalid"><code>${escapeHtml(JSON.stringify(v,null,2))}</code></pre>`).join("")||'<p class="muted">Invalid behavior is defined by the validation rules above.</p>';
  const rawSchema=escapeHtml(JSON.stringify(schema,null,2));
  const rawRegistry=escapeHtml(JSON.stringify(item,null,2));
  return `${pageHeader("Marketing Contract",schema.name,schema.description,`<div class="header-actions"><span class="status-badge status-badge--stable">Stable</span><span class="tag">v${escapeHtml(schema.version)}</span></div>`)}
  <div class="stack stack--lg">
    <div class="registry-detail__identity"><div><span>Machine ID</span><code>${escapeHtml(schema.$id)}</code></div><div class="registry-detail__actions"><button class="button button--secondary button--compact" type="button" data-copy-value="${escapeHtml(schema.$id)}" data-copy-label="Marketing ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${escapeHtml(sourceHref)}">${icon("fa-file-code")} Source JSON</a><a class="button button--secondary button--compact" href="#/registry/marketing">${icon("fa-bullseye")} Marketing</a></div></div>
    <section class="marketing-model-grid"><div><span>Category</span><strong>${escapeHtml(marketingCategoryLabels[schema.category]??schema.category)}</strong></div><div><span>Model</span><strong>${escapeHtml(schema.marketingModel.kind)}</strong></div><div><span>Customer managed</span><strong>${schema.marketingModel.customerManaged?"Yes":"No"}</strong></div><div><span>Personal data</span><strong>${schema.marketingModel.containsPersonalData?"Possible":"Not intrinsic"}</strong></div><div><span>Sensitivity</span><strong>${escapeHtml(schema.marketingModel.dataSensitivity)}</strong></div><div><span>Public delivery</span><strong>${schema.delivery.publicAllowed?"Safe subset":"No"}</strong></div></section>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Purpose</h2><p>Why this Marketing/Tracking contract exists.</p></div></div><div class="paper-card__body"><p class="core-purpose">${escapeHtml(schema.purpose)}</p></div></article>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Fields</h2><p>Canonical primitive and nested schema composition.</p></div><span class="tag">${schema.fields.length}</span></div><div class="registry-table-wrap"><table class="registry-table core-fields-table"><thead><tr><th>Field</th><th>Source</th><th>Required</th><th>Nullable</th><th>Editing</th></tr></thead><tbody>${rows}</tbody></table></div></article>
    <div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Relationships</h2></div></div><div class="paper-card__body"><ul class="list-clean">${relations}</ul></div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Validation and behavior</h2></div><span class="tag">${schema.validationRules.length}</span></div><div class="paper-card__body marketing-rule-grid">${rules}</div></article></div>
    <article class="paper-card"><div class="paper-card__header"><div><h2>CMS, data and delivery boundary</h2></div></div><div class="paper-card__body"><div class="field-rule-grid"><div><strong>${schema.cms.customerVisible?"Customer CMS eligible":"Internal/system contract"}</strong><p>Editor mode: <code>${escapeHtml(schema.cms.editorMode)}</code></p></div><div><strong>${schema.marketingModel.containsPersonalData?"Personal/pseudonymous data possible":"No intrinsic personal data"}</strong><p>Sensitivity: <code>${escapeHtml(schema.marketingModel.dataSensitivity)}</code>. Phase 30 will finalize broader privacy classification.</p></div><div><strong>${schema.delivery.publicAllowed?"Explicit safe public subset possible":"Private/operational"}</strong><p>${escapeHtml(schema.delivery.notes)}</p></div><div><strong>Future bindings</strong><p>Integrations: ${escapeHtml(schema.futureBindings.integrations)} · Commerce: ${escapeHtml(schema.futureBindings.commerce)} · Events: ${escapeHtml(schema.futureBindings.events)} · Webhooks: ${escapeHtml(schema.futureBindings.webhooks)} · Permissions: ${escapeHtml(schema.futureBindings.permissions)} · Privacy: ${escapeHtml(schema.futureBindings.privacy)}</p></div></div></div></article>
    <div class="dashboard-grid dashboard-grid--2 registry-detail-grid"><article class="paper-card"><div class="paper-card__header"><div><h2>Valid examples</h2></div></div><div class="paper-card__body stack">${valid}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Invalid examples</h2></div></div><div class="paper-card__body stack">${invalid}</div></article></div>
    ${schema.notes.length?`<article class="paper-card"><div class="paper-card__header"><div><h2>Implementation notes</h2></div></div><div class="paper-card__body"><ul class="list-clean">${schema.notes.map((n)=>`<li class="list-item"><span class="list-item__icon">${icon("fa-circle-info")}</span><div>${escapeHtml(n)}</div></li>`).join("")}</ul></div></article>`:""}
    <article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative Marketing JSON</h2><p>Exact Phase 9 source definition.</p></div><button class="button button--ghost button--compact" type="button" data-copy-value="${escapeHtml(JSON.stringify(schema))}" data-copy-label="Marketing JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawSchema}</code></pre></div></article>
    <details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${rawRegistry}</code></pre></div></details>
  </div>`;
}
