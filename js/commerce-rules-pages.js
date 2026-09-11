import { icon, escapeHtml } from "./utils.js";
const e=escapeHtml;
const sevLabel={critical:"Critical",high:"High",standard:"Standard"};
function header(title,desc,actions=""){return `<header class="page-header"><div class="page-header__copy"><p class="page-header__eyebrow">Registry · Commerce</p><h1>${e(title)}</h1><p>${e(desc)}</p></div>${actions?`<div class="page-header__actions">${actions}</div>`:""}</header>`;}
function ruleSource(r){return `./registry/commerce/rules/definitions/${r.$id.split(".").pop().replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}.json`;}
function badgeSeverity(s){return `<span class="cr-severity cr-severity--${e(s)}">${e(sevLabel[s]??s)}</span>`}
function ruleCard(r){
  return `<article class="paper-card cr-card">
    <div class="cr-card__head"><div><span class="cr-kicker">${e(r.category)}</span><h3><a href="#/registry/item/${encodeURIComponent(r.$id)}">${e(r.name)}</a></h3><code>${e(r.$id)}</code></div>${badgeSeverity(r.severity)}</div>
    <p>${e(r.description)}</p>
    <div class="cr-facts"><span>${icon("fa-gavel")} ${e(r.ruleKind)}</span><span>${icon("fa-server")} server</span><span>${icon(r.configurable?"fa-sliders":"fa-lock")} ${r.configurable?"Configurable":"Fixed"}</span><span>${icon(r.enforcement.auditRequired?"fa-clipboard-check":"fa-clipboard")} ${r.enforcement.auditRequired?"Audit":"No mandatory audit"}</span></div>
    <div class="cr-applies">${r.appliesTo.slice(0,4).map(x=>`<a class="tag" href="#/registry/item/${encodeURIComponent(x)}">${e(x)}</a>`).join("")}${r.appliesTo.length>4?`<span class="tag">+${r.appliesTo.length-4}</span>`:""}</div>
    <a class="cr-open" href="#/registry/item/${encodeURIComponent(r.$id)}">Inspect rule ${icon("fa-arrow-right")}</a>
  </article>`;
}
export function renderCommerceRuleCardsOnly(engine,filters={}){
  const rows=engine.search(filters.q??"",filters);
  if(!rows.length)return `<div class="registry-empty paper-card"><span class="registry-empty__icon">${icon("fa-scale-balanced")}</span><h3>No Commerce Rules match</h3><p>Change the search or filters.</p></div>`;
  return `<div class="cr-grid">${rows.map(ruleCard).join("")}</div>`;
}
function stateMachineTable(engine){
  return `<div class="table-scroll"><table class="data-table cr-table"><thead><tr><th>State machine</th><th>Contract field</th><th>Initial</th><th>Terminal</th><th>States</th></tr></thead><tbody>${engine.stateMachines.map(m=>`<tr><td><strong>${e(m.name)}</strong><br><code>${e(m.id)}</code></td><td><a href="#/registry/item/${encodeURIComponent(m.contract)}"><code>${e(m.contract)}.${e(m.field)}</code></a></td><td><span class="tag">${e(m.initial)}</span></td><td>${m.terminal.map(x=>`<span class="tag">${e(x)}</span>`).join(" ")}</td><td>${m.states.length}</td></tr>`).join("")}</tbody></table></div>`;
}
function commandTable(engine){
  return `<div class="table-scroll"><table class="data-table cr-table"><thead><tr><th>Command policy</th><th>Idempotent</th><th>Atomic</th><th>Audit</th><th>Guard rules</th></tr></thead><tbody>${engine.commands.map(c=>`<tr><td><strong>${e(c.name)}</strong><br><code>${e(c.id)}</code></td><td>${c.idempotencyRequired?"Required":"Not required"}</td><td>${c.atomic?"Required":"No"}</td><td>${c.auditRequired?"Required":"No"}</td><td>${c.guardRules.map(x=>`<a class="tag" href="#/registry/item/${encodeURIComponent(x)}">${e(x.split(".").pop())}</a>`).join(" ")}</td></tr>`).join("")}</tbody></table></div>`;
}
function errorTable(engine){
  return `<div class="table-scroll"><table class="data-table cr-table"><thead><tr><th>Error</th><th>Meaning</th><th>Retry</th><th>HTTP</th></tr></thead><tbody>${engine.errors.map(x=>`<tr><td><code>${e(x.code)}</code></td><td><strong>${e(x.label)}</strong><br><span class="muted">${e(x.description)}</span></td><td>${x.defaultRetryable?"Potentially":"No"}</td><td><span class="tag">${e(x.httpMapping)}</span></td></tr>`).join("")}</tbody></table></div>`;
}
export function renderCommerceRulesIndex(engine,filters={}){
  const count=engine.search(filters.q??"",filters).length;
  const cats=engine.categories.map(c=>`<option value="${e(c.key)}" ${filters.category===c.key?"selected":""}>${e(c.label)}</option>`).join("");
  const kinds=engine.kinds.map(k=>`<option value="${e(k)}" ${filters.kind===k?"selected":""}>${e(k)}</option>`).join("");
  const catCards=engine.categories.map(c=>`<article class="cr-category"><div><span>${icon(c.key.includes("payment")||c.key==="refunds"?"fa-credit-card":c.key==="inventory"?"fa-warehouse":c.key==="security-audit"?"fa-shield-halved":c.key==="idempotency-concurrency"?"fa-code-branch":"fa-scale-balanced")}</span><strong>${e(c.label)}</strong></div><p>${e(c.description)}</p><b>${engine.rules.filter(r=>r.category===c.key).length}</b></article>`).join("");
  return `${header("Commerce Rules","Server-authoritative cross-entity invariants for transactions, state transitions, money, inventory, fulfillment, promotions, tax, returns, idempotency, concurrency and audit.",`<div class="header-actions"><span class="status-badge status-badge--stable">Phase 12</span><span class="tag">${engine.size} rules</span></div>`)}
  <div class="stack stack--lg">
    <div class="registry-source-bar" role="status"><span>${icon("fa-database")} Runtime source</span><strong>${engine.source==="authoritative-json"?"Authoritative Commerce Rules JSON":"Generated local fallback"}</strong><span class="tag">v${e(engine.data.registryVersion)}</span><a class="button button--secondary button--compact" href="./standards/20-commerce-rules-standard.md">${icon("fa-file-lines")} Rules Standard</a></div>
    <section class="cr-hero">
      <article class="paper-card"><div class="paper-card__body"><p class="cr-eyebrow">Phase 11 schemas + Phase 12 behavior</p><h2>Valid data is not enough. Transactions must stay correct.</h2><p>These rules define what must be true when multiple Commerce entities interact. They are provider-neutral, server-authoritative and reusable by NEXT F Admin, Customer CMS, API implementations and Codex-built storefronts.</p><div class="cr-flow"><span>Command</span><i>→</i><span>Validate Rules</span><i>→</i><span>Atomic Commit</span><i>→</i><span>Audit / Reconcile</span></div></div></article>
      <article class="paper-card"><div class="paper-card__body cr-summary"><div><span>Rules</span><strong>${engine.size}</strong></div><div><span>Categories</span><strong>${engine.categories.length}</strong></div><div><span>State Machines</span><strong>${engine.stateMachines.length}</strong></div><div><span>Command Policies</span><strong>${engine.commands.length}</strong></div><div><span>Domain Errors</span><strong>${engine.errors.length}</strong></div><div><span>Critical Rules</span><strong>${engine.rules.filter(r=>r.severity==="critical").length}</strong></div></div></article>
    </section>
    <div class="cr-boundary"><strong>Server authority is mandatory.</strong><p>Browser totals, stock, discount eligibility, payment state and provider status are never authoritative by themselves. Fixed rules cannot be disabled by Site configuration.</p></div>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Rule categories</h2><p>Small focused invariants instead of one opaque ecommerce rules engine.</p></div></div><div class="paper-card__body cr-category-grid">${catCards}</div></section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Find Commerce Rules</h2><p>Search rule IDs, affected contracts, requirements and failure identifiers.</p></div><button class="button button--ghost button--compact" type="button" data-commerce-rule-clear>${icon("fa-rotate-left")} Clear</button></div><div class="paper-card__body"><div class="registry-toolbar cr-toolbar">
      <label class="search-field"><span class="sr-only">Search Commerce Rules</span>${icon("fa-magnifying-glass")}<input data-commerce-rule-q type="search" value="${e(filters.q??"")}" placeholder="Search totals, refund, stock, idempotency..."></label>
      <label><span class="sr-only">Category</span><select data-commerce-rule-category><option value="">All categories</option>${cats}</select></label>
      <label><span class="sr-only">Rule kind</span><select data-commerce-rule-kind><option value="">All rule kinds</option>${kinds}</select></label>
      <label><span class="sr-only">Severity</span><select data-commerce-rule-severity><option value="">Any severity</option>${engine.severities.map(s=>`<option value="${s}" ${filters.severity===s?"selected":""}>${e(sevLabel[s])}</option>`).join("")}</select></label>
      <label><span class="sr-only">Policy</span><select data-commerce-rule-policy><option value="">Fixed + configurable</option><option value="fixed" ${filters.policy==="fixed"?"selected":""}>Fixed</option><option value="configurable" ${filters.policy==="configurable"?"selected":""}>Configurable</option></select></label>
      <label><span class="sr-only">Audit</span><select data-commerce-rule-audit><option value="">Any audit policy</option><option value="yes" ${filters.audit==="yes"?"selected":""}>Audit required</option><option value="no" ${filters.audit==="no"?"selected":""}>No mandatory audit</option></select></label>
      <div class="field-filter-summary"><span>Results</span><strong data-commerce-rule-count>${count}</strong></div>
    </div></div></section>
    <section data-commerce-rule-results>${renderCommerceRuleCardsOnly(engine,filters)}</section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Lifecycle state machines</h2><p>Canonical Phase 11 status fields with Phase 12 transition guards. Recovery is not unrestricted status editing.</p></div><a class="button button--secondary button--compact" href="./registry/commerce/rules/state-machines.json">${icon("fa-file-code")} Raw registry</a></div><div class="paper-card__body">${stateMachineTable(engine)}</div></section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Command policies</h2><p>Domain operations define idempotency, atomicity, concurrency scopes and auditing. HTTP endpoints arrive in Phase 18.</p></div><a class="button button--secondary button--compact" href="./registry/commerce/rules/command-policies.json">${icon("fa-file-code")} Raw registry</a></div><div class="paper-card__body">${commandTable(engine)}</div></section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Domain error identifiers</h2><p>Stable business failure identifiers without prematurely defining HTTP mappings.</p></div><a class="button button--secondary button--compact" href="./registry/commerce/rules/error-codes.json">${icon("fa-file-code")} Raw registry</a></div><div class="paper-card__body">${errorTable(engine)}</div></section>
  </div>`;
}
export function renderCommerceRuleDetail(registry,item,rule){
  if(!rule)return "";
  const applies=rule.appliesTo.map(x=>`<a class="cr-contract" href="#/registry/item/${encodeURIComponent(x)}">${icon("fa-cube")}<code>${e(x)}</code></a>`).join("");
  const req=rule.requirements.map(x=>`<article class="cr-requirement"><code>${e(x.id)}</code><p>${e(x.description)}</p></article>`).join("");
  const rels=rule.relationships.map(x=>`<li class="relationship-row"><span class="tag">${e(x.type)}</span><a href="#/registry/item/${encodeURIComponent(x.target)}"><code>${e(x.target)}</code></a><p>${e(x.description)}</p></li>`).join("");
  const raw=e(JSON.stringify(rule,null,2));
  return `${header(rule.name,rule.description,`<div class="header-actions">${badgeSeverity(rule.severity)}<span class="status-badge status-badge--stable">Stable</span><span class="tag">v${e(rule.version)}</span></div>`)}
  <div class="stack stack--lg">
    <div class="registry-source-bar"><span>${icon("fa-fingerprint")} Rule ID</span><strong><code>${e(rule.$id)}</code></strong><button class="button button--ghost button--compact" type="button" data-copy-value="${e(rule.$id)}" data-copy-label="Commerce Rule ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${ruleSource(rule)}">${icon("fa-file-code")} Source JSON</a></div>
    <section class="cr-detail-summary">
      <article class="paper-card"><div class="paper-card__body"><span>Category</span><strong>${e(rule.category)}</strong></div></article>
      <article class="paper-card"><div class="paper-card__body"><span>Kind</span><strong>${e(rule.ruleKind)}</strong></div></article>
      <article class="paper-card"><div class="paper-card__body"><span>Policy</span><strong>${rule.configurable?"Configurable":"Fixed invariant"}</strong></div></article>
      <article class="paper-card"><div class="paper-card__body"><span>Authority</span><strong>${e(rule.enforcement.authority)}</strong></div></article>
    </section>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Purpose</h2></div></div><div class="paper-card__body"><p>${e(rule.purpose)}</p></div></article>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Applies to</h2><p>Canonical Phase 11/earlier contracts constrained by this invariant.</p></div></div><div class="paper-card__body cr-contracts">${applies}</div></article>
    <div class="dashboard-grid dashboard-grid--2">
      <article class="paper-card"><div class="paper-card__header"><div><h2>Requirements</h2></div></div><div class="paper-card__body cr-requirements">${req}</div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Enforcement contract</h2></div></div><div class="paper-card__body"><dl class="cr-dl"><div><dt>Authority</dt><dd>${e(rule.enforcement.authority)}</dd></div><div><dt>Timing</dt><dd>${e(rule.enforcement.timing)}</dd></div><div><dt>Atomic when required</dt><dd>${rule.enforcement.atomicWhenRequired?"Yes":"No"}</dd></div><div><dt>Audit required</dt><dd>${rule.enforcement.auditRequired?"Yes":"No"}</dd></div><div><dt>Client validation only</dt><dd>${rule.enforcement.clientValidationOnly?"Yes":"No"}</dd></div></dl></div></article>
    </div>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Failure contract</h2><p>Domain identifier now; HTTP mapping comes in Phase 18.</p></div></div><div class="paper-card__body cr-failure"><code>${e(rule.failure.code)}</code><span>Retryable: <strong>${rule.failure.retryable?"Potentially":"No"}</strong></span><span>Customer-safe by default: <strong>${rule.failure.customerSafe?"Yes":"No"}</strong></span><p>${e(rule.failure.notes)}</p></div></article>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Relationships</h2></div></div><div class="paper-card__body"><ul class="relationship-list">${rels}</ul></div></article>
    <div class="dashboard-grid dashboard-grid--2"><article class="paper-card"><div class="paper-card__header"><div><h2>Valid example</h2></div></div><div class="paper-card__body">${rule.examples.valid.map(x=>`<p>${e(x)}</p>`).join("")}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Invalid example</h2></div></div><div class="paper-card__body">${rule.examples.invalid.map(x=>`<p>${e(x)}</p>`).join("")}</div></article></div>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Implementation notes</h2></div></div><div class="paper-card__body"><ul class="plain-list">${rule.implementationNotes.map(x=>`<li>${e(x)}</li>`).join("")}</ul></div></article>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Future bindings</h2><p>These identify future phases only; Phase 12 does not invent those contracts.</p></div></div><div class="paper-card__body future-binding-grid">${Object.entries(rule.futureBindings).map(([k,v])=>`<div><span>${e(k)}</span><strong>${e(v)}</strong></div>`).join("")}</div></article>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative Rule JSON</h2></div><button class="button button--ghost button--compact" type="button" data-copy-value="${e(JSON.stringify(rule))}" data-copy-label="Commerce Rule JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${raw}</code></pre></div></article>
    <details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${e(JSON.stringify(item,null,2))}</code></pre></div></details>
  </div>`;
}
