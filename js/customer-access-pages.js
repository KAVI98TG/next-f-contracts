const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const label = (value) => String(value ?? "").replaceAll("_", " ").replaceAll("-", " ");
const icon = (name) => `<i class="fa-solid ${name}" aria-hidden="true"></i>`;
const modeIcon = { hidden: "fa-eye-slash", read_only: "fa-eye", direct_edit: "fa-pen", approval_required: "fa-user-check" };
const actionIcon = { allow: "fa-circle-check", request: "fa-paper-plane", deny: "fa-ban" };

function header(engine) {
  return `<header class="page-header"><div><div class="eyebrow">Platform</div><h1>Customer Access</h1><p>Canonical customer visibility, mutation, approval, publishing, field and demo policy for every Customer CMS resource.</p></div><div class="page-header__meta"><span class="status-badge status-badge--stable">Phase 38</span><span class="tag">v${esc(engine.version)}</span></div></header>`;
}

function tabs(view) {
  const items = [["overview", "Overview", "fa-gauge-high"], ["policies", "Policies", "fa-shield-halved"], ["resolution", "Effective resolution", "fa-code-branch"], ["workflow", "Approval workflow", "fa-user-check"]];
  return `<nav class="customer-access-tabs" aria-label="Customer Access views">${items.map(([id, text, glyph]) => `<a class="customer-access-tab ${view === id ? "is-active" : ""}" href="#/platform/customer-access?view=${id}" ${view === id ? 'aria-current="page"' : ""}>${icon(glyph)}<span>${text}</span></a>`).join("")}</nav>`;
}

function metric(labelText, value, glyph, note) {
  return `<article class="paper-card customer-access-metric"><div><span>${esc(labelText)}</span><strong>${esc(value)}</strong><small>${esc(note)}</small></div><span class="customer-access-metric__icon">${icon(glyph)}</span></article>`;
}

function overview(engine) {
  const modes = engine.data.modes;
  return `<div class="stack stack--lg"><section class="customer-access-callout"><span>${icon("fa-shield-halved")}</span><div><h2>Policy sets the maximum. Runtime authorization makes the decision.</h2><p>Site capabilities, entitlements, exact permissions, trusted scope, resource state, field rules, security and privacy can only restrict this boundary.</p></div></section><div class="customer-access-metrics">${metric("Policies", engine.data.policyCount, "fa-shield", "Every Customer CMS profile classified")}${metric("Direct edit", modes.direct_edit, "fa-pen", "Authorized direct mutation")}${metric("Approval required", modes.approval_required, "fa-user-check", "Proposal before authoritative change")}${metric("Restricted", modes.hidden + modes.read_only, "fa-lock", `${modes.hidden} hidden, ${modes.read_only} read-only`)}</div><section class="paper-card"><div class="paper-card__header"><div><h2>Customer access modes</h2><p>One controlled vocabulary applies across resource, action, publishing, field and demo policy.</p></div><a class="button button--secondary button--compact" href="#/platform/customer-access?view=policies">Explore policies</a></div><div class="paper-card__body customer-access-mode-grid">${[["hidden", "Not discoverable or customer-authorized."], ["read_only", "Permitted reads with all mutations denied."], ["direct_edit", "Explicit mutations may execute after authorization."], ["approval_required", "Mutations create a separate review proposal."]].map(([mode, copy]) => `<div class="customer-access-mode"><span class="customer-access-mode__icon customer-access-mode__icon--${mode}">${icon(modeIcon[mode])}</span><div><strong>${esc(label(mode))}</strong><p>${esc(copy)}</p><span>${modes[mode]} policies</span></div></div>`).join("")}</div></section></div>`;
}

function options(values, current, empty) {
  return `<option value="">${esc(empty)}</option>${values.map((value) => `<option value="${esc(value)}" ${current === value ? "selected" : ""}>${esc(label(value))}</option>`).join("")}`;
}

function policyCard(policy) {
  const available = Object.entries(policy.actions).filter(([, behavior]) => behavior !== "deny");
  return `<article class="paper-card customer-access-policy"><div class="customer-access-policy__head"><span class="customer-access-mode-badge customer-access-mode-badge--${esc(policy.customerMode)}">${icon(modeIcon[policy.customerMode])}${esc(label(policy.customerMode))}</span><span class="tag">${esc(policy.moduleRef)}</span></div><h3>${esc(policy.name.replace(" Customer Access Policy", ""))}</h3><code>${esc(policy.$id)}</code><p>${esc(policy.resourceRef)} · ${esc(label(policy.publishingPolicy.mode))} publishing</p><div class="customer-access-action-row">${available.slice(0, 5).map(([action, behavior]) => `<span class="customer-access-action customer-access-action--${behavior}">${icon(actionIcon[behavior])}${esc(label(action))}</span>`).join("")}${available.length > 5 ? `<span class="tag">+${available.length - 5}</span>` : ""}</div><a class="customer-access-policy__link" href="#/platform/customer-access?view=policies&id=${encodeURIComponent(policy.$id)}">Inspect policy ${icon("fa-arrow-right")}</a></article>`;
}

export function renderCustomerAccessResults(engine, filters) {
  const rows = engine.search(filters);
  if (!rows.length) return `<div class="customer-access-empty"><h3>No policies match</h3><p>Change the search or policy filters.</p></div>`;
  return rows.map(policyCard).join("");
}

function policyList(engine, filters) {
  return `<section class="paper-card customer-access-explorer"><div class="paper-card__header"><div><h2>Find customer access policies</h2><p>Search resources, contracts, fields, permissions, APIs and policy outcomes.</p></div><button class="button button--ghost button--compact" type="button" data-customer-access-clear>${icon("fa-rotate-left")} Clear</button></div><div class="paper-card__body customer-access-filters"><label class="field field--search"><span>Search</span><span class="field-input-wrap">${icon("fa-magnifying-glass")}<input type="search" value="${esc(filters.q)}" placeholder="Pages, SEO, permissions..." data-customer-access-q></span></label><label class="field"><span>Customer mode</span><select data-customer-access-mode>${options(engine.modes, filters.mode, "All modes")}</select></label><label class="field"><span>Module</span><select data-customer-access-module>${options(engine.modules, filters.module, "All modules")}</select></label><label class="field"><span>Publishing</span><select data-customer-access-publishing>${options(engine.publishingModes, filters.publishing, "All publishing")}</select></label><label class="field"><span>Available action</span><select data-customer-access-action>${options(["read", "create", "update", "delete", "submit_for_review", "publish", "unpublish", "restore_version"], filters.action, "Any action")}</select></label><div class="customer-access-result-count"><span>Results</span><strong data-customer-access-count>${engine.search(filters).length}</strong></div></div></section><div class="customer-access-policy-grid" data-customer-access-results>${renderCustomerAccessResults(engine, filters)}</div>`;
}

function actionTable(policy) {
  return `<div class="customer-access-action-table">${Object.entries(policy.actions).map(([action, behavior]) => `<div><span>${esc(label(action))}</span><strong class="customer-access-action customer-access-action--${behavior}">${icon(actionIcon[behavior])}${esc(behavior)}</strong><small>${(policy.permissionRefs[action] ?? []).map((id) => `<a href="#/registry/item/${encodeURIComponent(id)}">${esc(id)}</a>`).join(" ") || "No customer permission path"}</small></div>`).join("")}</div>`;
}

function policyDetail(policy) {
  const fieldsByMode = policy.fieldRules.reduce((groups, field) => {
    (groups[field.mode] ??= []).push(field);
    return groups;
  }, {});
  return `<div class="stack stack--lg"><a class="customer-access-back" href="#/platform/customer-access?view=policies">${icon("fa-arrow-left")} All policies</a><section class="paper-card"><div class="paper-card__header"><div><span class="customer-access-mode-badge customer-access-mode-badge--${esc(policy.customerMode)}">${icon(modeIcon[policy.customerMode])}${esc(label(policy.customerMode))}</span><h2>${esc(policy.name)}</h2><code>${esc(policy.$id)}</code></div><a class="button button--secondary button--compact" href="./registry/customer-access/policies/${esc(policy.relationships.customerCmsProfileRef.replace(/^cmsUi\.profile\./, "").replaceAll(".", "--").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}.json">${icon("fa-file-code")} Source JSON</a></div><div class="paper-card__body customer-access-detail-summary"><dl><div><dt>Resource</dt><dd>${esc(policy.resourceRef)}</dd></div><div><dt>Module</dt><dd>${esc(policy.moduleRef)}</dd></div><div><dt>Publishing</dt><dd>${esc(label(policy.publishingPolicy.mode))}</dd></div><div><dt>Demo</dt><dd>${esc(label(policy.demoPolicy.mode))}</dd></div></dl></div></section><section class="paper-card"><div class="paper-card__header"><div><h2>Customer vs NEXT F Admin</h2><p>The customer boundary is canonical. Admin may review and operate within separate privileged permissions, but cannot broaden it.</p></div></div><div class="paper-card__body customer-access-comparison"><div><span>Customer CMS</span><strong>${esc(label(policy.customerMode))}</strong><p>${policy.customerMode === "approval_required" ? "Submits a non-authoritative proposal for review." : policy.customerMode === "direct_edit" ? "May execute explicitly allowed actions after runtime authorization." : policy.customerMode === "read_only" ? "Can inspect permitted data without mutation." : "Resource is omitted from customer discovery and authorization."}</p></div><div><span>NEXT F Admin</span><strong>${policy.relationships.adminProfileRef ? "Operational profile linked" : "No paired resource profile"}</strong><p>${policy.relationships.adminProfileRef ? esc(policy.relationships.adminProfileRef) : "Internal operation remains governed by Admin contracts and permissions."}</p></div></div></section><section class="paper-card"><div class="paper-card__header"><div><h2>Action policy</h2><p>Every customer action resolves explicitly to allow, request, or deny.</p></div></div><div class="paper-card__body">${actionTable(policy)}</div></section><section class="paper-card"><div class="paper-card__header"><div><h2>Field boundary</h2><p>${policy.fieldRules.length} profile fields classified. Field policy can narrow, never silently broaden, the resource maximum.</p></div></div><div class="paper-card__body customer-access-field-groups">${Object.entries(fieldsByMode).map(([mode, fields]) => `<div><strong>${esc(label(mode))}</strong><div>${fields.map((field) => `<code>${esc(field.field)}</code>`).join("")}</div></div>`).join("")}</div></section><section class="paper-card"><div class="paper-card__header"><div><h2>Enforcement relationships</h2><p>Machine-resolvable gates and workflow evidence for this policy.</p></div></div><div class="paper-card__body customer-access-relations">${[["Capabilities", policy.capabilityRefs, "modules.capability."], ["API operations", policy.apiOperationRefs, ""], ["Events", policy.eventRefs, ""], ["Contracts", policy.contractRefs, ""]].map(([title, values, prefix]) => `<div><strong>${title}</strong>${values.length ? values.map((id) => `<a href="#/registry/item/${encodeURIComponent(prefix + id)}">${esc(id)}</a>`).join("") : "<span>None applicable</span>"}</div>`).join("")}</div></section></div>`;
}

export function renderRegistryCustomerAccessCard(engine, item) {
  const related = engine.policies.filter((policy) => [
    policy.$id,
    policy.resourceRef,
    policy.relationships?.customerCmsProfileRef,
    policy.relationships?.adminProfileRef,
    ...(policy.contractRefs ?? []),
    ...(policy.capabilityRefs ?? []),
    ...Object.values(policy.permissionRefs ?? {}).flat(),
    ...(policy.apiOperationRefs ?? []),
    ...(policy.eventRefs ?? [])
  ].includes(item.id));
  if (!related.length) return "";
  return `<section class="paper-card" data-registry-customer-access><div class="paper-card__header"><div><h2>Customer Access</h2><p>Canonical customer boundary related to this Registry definition.</p></div><a class="button button--secondary button--compact" href="#/platform/customer-access?view=policies">All policies</a></div><div class="paper-card__body customer-access-related">${related.map((policy) => `<a href="#/platform/customer-access?view=policies&id=${encodeURIComponent(policy.$id)}"><span class="customer-access-mode-badge customer-access-mode-badge--${esc(policy.customerMode)}">${icon(modeIcon[policy.customerMode])}${esc(label(policy.customerMode))}</span><span><strong>${esc(policy.name.replace(" Customer Access Policy", ""))}</strong><code>${esc(policy.$id)}</code></span>${icon("fa-arrow-right")}</a>`).join("")}</div></section>`;
}

function resolution() {
  const steps = ["Canonical policy maximum", "Site Manifest capability", "Workspace entitlement", "Role, permission and scope", "Resource state", "Field policy", "Security and privacy"];
  return `<div class="stack stack--lg"><section class="customer-access-callout"><span>${icon("fa-code-branch")}</span><div><h2>Most restrictive result wins</h2><p>No manifest, role, entitlement, UI profile, or Admin toggle may broaden the canonical maximum.</p></div></section><section class="paper-card"><div class="paper-card__header"><div><h2>Effective policy resolution</h2><p>Runtime evaluates this ordered intersection and fails closed when a required policy input is missing.</p></div></div><div class="paper-card__body customer-access-resolution">${steps.map((step, index) => `<div><span>${index + 1}</span><strong>${esc(step)}</strong></div>`).join("")}</div></section><section class="paper-card"><div class="paper-card__header"><div><h2>Safe defaults</h2></div></div><div class="paper-card__body customer-access-safe-grid"><div><strong>Unknown exposure</strong><span>Hidden</span></div><div><strong>Missing write policy</strong><span>Deny</span></div><div><strong>Missing capability</strong><span>Unavailable</span></div><div><strong>Missing publish policy</strong><span>No customer publish</span></div></div></section></div>`;
}

function workflow() {
  const states = ["draft", "submitted", "in review", "changes requested", "approved", "applied"];
  return `<div class="stack stack--lg"><section class="customer-access-callout"><span>${icon("fa-user-check")}</span><div><h2>Customer proposes. Admin reviews. The system applies.</h2><p>Approval never means approving a change after it already altered production.</p></div></section><section class="paper-card"><div class="paper-card__header"><div><h2>Customer Change Request</h2><p>A separate, auditable proposal carries the base revision and blocks stale application.</p></div><a class="button button--secondary button--compact" href="#/registry/item/customerAccess.changeRequest">Inspect contract</a></div><div class="paper-card__body customer-access-workflow">${states.map((state, index) => `<div><span>${index + 1}</span><strong>${esc(state)}</strong></div>`).join("")}</div></section><div class="customer-access-two-col"><section class="paper-card"><div class="paper-card__header"><div><h2>Concurrency</h2></div></div><div class="paper-card__body"><p>The proposal records its base revision. Application compares it with current authoritative state; a mismatch creates conflict evidence and prevents silent last-write-wins behavior.</p></div></section><section class="paper-card"><div class="paper-card__header"><div><h2>Audit boundary</h2></div></div><div class="paper-card__body"><p>Requester, reviewer, decision, resulting revision, and correlation identity remain auditable. Lifecycle events exclude proposed values and secrets.</p></div></section></div></div>`;
}

export function renderCustomerAccessPage(engine, filters) {
  const policy = filters.id ? engine.get(filters.id) : null;
  const view = filters.view || "overview";
  const body = view === "policies" ? (filters.id ? (policy ? policyDetail(policy) : `<div class="fatal-state"><h1>Policy not found</h1></div>`) : policyList(engine, filters)) : view === "resolution" ? resolution() : view === "workflow" ? workflow() : overview(engine);
  return `${header(engine)}${tabs(view)}${body}`;
}
