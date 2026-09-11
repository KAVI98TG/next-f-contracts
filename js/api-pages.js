import { icon, escapeHtml } from "./utils.js";
const e=escapeHtml;
const link=id=>`#/registry/item/${encodeURIComponent(id)}`;
const header=(title,desc,actions="")=>`<header class="page-header"><div class="page-header__copy"><p class="page-header__eyebrow">Platform · API</p><h1>${e(title)}</h1><p>${e(desc)}</p></div>${actions?`<div class="page-header__actions">${actions}</div>`:""}</header>`;
const badge=(text,cls="")=>`<span class="status-badge ${cls}">${e(text)}</span>`;
const tag=t=>`<span class="tag">${e(t)}</span>`;
const methodBadge=m=>`<span class="api-method api-method--${e(m.toLowerCase())}">${e(m)}</span>`;
function groupCard(g,engine){
  const ops=engine.operationsFor(g.apiId);
  return `<article class="paper-card api-group-card">
    <div class="api-group-card__head"><span class="module-icon">${icon("fa-code-branch")}</span><div><h3><a href="${link(g.$id)}">${e(g.name)}</a></h3><code>${e(g.apiId)}</code></div>${badge(`v${g.version}`,"status-badge--stable")}</div>
    <p>${e(g.description)}</p>
    <div class="api-path">${icon("fa-route")} <code>${e(g.basePath)}</code></div>
    <div class="module-card__meta">${tag(`${ops.length} operations`)}${tag(g.defaultAuthMode)}${tag(g.defaultCachePolicy)}</div>
  </article>`;
}
function operationRow(o,engine){
  const g=engine.group(o.groupId);
  return `<article class="paper-card api-operation-row">
    <div class="api-operation-row__main">${methodBadge(o.method)}<div><h3><a href="${link(o.$id)}">${e(o.name)}</a></h3><div class="api-path"><code>${e((g?.basePath??"")+o.path)}</code></div><p>${e(o.description)}</p></div></div>
    <div class="api-operation-row__meta">${tag(o.groupId.replace("api.",""))}${tag(o.authentication.mode)}${tag(o.policies.cache)}${o.policies.idempotency.required?badge("Idempotent","status-badge--stable"):""}${o.policies.concurrency.required?badge("If-Match","status-badge--warning"):""}</div>
  </article>`;
}
function schemaCard(s){
  return `<article class="paper-card module-card"><div class="module-card__top"><span class="module-icon module-icon--small">${icon("fa-brackets-curly")}</span><div><h3><a href="${link(s.$id)}">${e(s.name)}</a></h3><code>${e(s.$id)}</code></div>${badge(`v${s.version}`,"status-badge--stable")}</div><p>${e(s.description)}</p><div class="module-card__meta">${tag(s.category)}${tag(`${s.fields?.length??0} fields`)}</div></article>`;
}
export function renderApiResults(engine,f={}){
  const rows=engine.search(f.q??"",f);
  if(!rows.length)return `<div class="registry-empty paper-card"><span class="registry-empty__icon">${icon("fa-code-branch")}</span><h3>No API results</h3><p>Change search or filters.</p></div>`;
  if(f.view==="groups")return `<div class="module-grid">${rows.map(x=>groupCard(x,engine)).join("")}</div>`;
  if(f.view==="schemas")return `<div class="module-grid">${rows.map(schemaCard).join("")}</div>`;
  return `<div class="api-operation-list">${rows.map(x=>operationRow(x,engine)).join("")}</div>`;
}
export function renderApiIndex(engine,f={}){
  const groupOptions=engine.groups.map(g=>`<option value="${e(g.apiId)}" ${f.group===g.apiId?"selected":""}>${e(g.name)}</option>`).join("");
  const methodOptions=engine.methods.map(m=>`<option value="${e(m.id)}" ${f.method===m.id?"selected":""}>${e(m.id)}</option>`).join("");
  const authOptions=engine.authModes.map(a=>`<option value="${e(a.id)}" ${f.auth===a.id?"selected":""}>${e(a.label)}</option>`).join("");
  const privacyOptions=["public","pseudonymous","personal","private","internal","sensitive"].map(x=>`<option value="${x}" ${f.privacy===x?"selected":""}>${x}</option>`).join("");
  const actions=`<div class="header-actions"><span class="status-badge status-badge--stable">Phase 18</span><span class="tag">API v${e(engine.data.apiVersion)}</span><a class="button button--secondary button--compact" href="./standards/26-api-contract-standard.md">${icon("fa-file-lines")} Standard</a></div>`;
  return `${header("API Contract Registry","Versioned provider-neutral API surfaces for public content, public interactions, Customer CMS, NEXT F Admin, Commerce, Events and Webhooks.",actions)}
  <div class="stack stack--lg">
    <div class="registry-source-bar" role="status"><span>${icon("fa-database")} Runtime source</span><strong>${engine.source==="authoritative-json"?"Authoritative API JSON":"Generated local fallback"}</strong></div>
    <section class="dashboard-grid dashboard-grid--4">
      <article class="metric-card"><span>API Groups</span><strong>${engine.groups.length}</strong><small>Independent bindable surfaces</small></article>
      <article class="metric-card"><span>Operations</span><strong>${engine.operations.length}</strong><small>Canonical HTTP operations</small></article>
      <article class="metric-card"><span>Support Schemas</span><strong>${engine.schemas.length}</strong><small>Shared API semantics</small></article>
      <article class="metric-card"><span>Error Codes</span><strong>${engine.errorCodes.length}</strong><small>Stable machine errors</small></article>
    </section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Interface boundary</h2><p>The API exposes canonical contracts without becoming a second domain model.</p></div></div><div class="paper-card__body">
      <div class="manifest-flow"><span>nextf.site.json</span><b>→</b><span>Exact API Binding</span><b>→</b><span>Operation</span><b>→</b><span>Permission + Module</span><b>→</b><span>Domain Contract</span><b>→</b><span>Server Rules</span></div>
      <div class="api-boundary-grid"><div><strong>Public Content</strong><p>Read-only published data.</p></div><div><strong>Public Interaction</strong><p>Bounded public writes such as Forms.</p></div><div><strong>Customer CMS</strong><p>Organization User + Phase 15 permissions.</p></div><div><strong>Commerce</strong><p>Phase 12 invariants remain authoritative.</p></div></div>
    </div></section>
    <section class="paper-card">
      <div class="paper-card__header"><div><h2>Explore API contracts</h2><p>Search by operation, path, domain contract, authentication or policy.</p></div><button class="button button--ghost button--compact" data-api-clear>${icon("fa-rotate-left")} Clear</button></div>
      <div class="paper-card__body"><div class="registry-toolbar">
        <label class="search-field">${icon("fa-magnifying-glass")}<input data-api-q type="search" value="${e(f.q??"")}" placeholder="Search /pages, checkout, forms, ETag..."></label>
        <label><span class="sr-only">View</span><select data-api-view><option value="operations" ${f.view!=="groups"&&f.view!=="schemas"?"selected":""}>Operations</option><option value="groups" ${f.view==="groups"?"selected":""}>API Groups</option><option value="schemas" ${f.view==="schemas"?"selected":""}>Support Schemas</option></select></label>
        <label data-api-group-wrap><span class="sr-only">API group</span><select data-api-group><option value="">All groups</option>${groupOptions}</select></label>
        <label data-api-method-wrap><span class="sr-only">Method</span><select data-api-method><option value="">Any method</option>${methodOptions}</select></label>
        <label data-api-auth-wrap><span class="sr-only">Authentication</span><select data-api-auth><option value="">Any auth</option>${authOptions}</select></label>
        <label data-api-privacy-wrap><span class="sr-only">Privacy</span><select data-api-privacy><option value="">Any privacy</option>${privacyOptions}</select></label>
        <div class="field-filter-summary"><span>Results</span><strong data-api-count>${engine.search(f.q??"",f).length}</strong></div>
      </div></div>
    </section>
    <section data-api-results>${renderApiResults(engine,f)}</section>
    <section class="dashboard-grid dashboard-grid--2">
      <article class="paper-card"><div class="paper-card__header"><div><h2>Canonical defaults</h2></div></div><div class="paper-card__body"><dl class="api-definition-list">
        <div><dt>Collection page</dt><dd>${e(engine.data.defaults.paginationLimit)}</dd></div>
        <div><dt>Maximum page</dt><dd>${e(engine.data.defaults.maximumPaginationLimit)}</dd></div>
        <div><dt>Request ID</dt><dd><code>${e(engine.data.defaults.requestIdHeader)}</code></dd></div>
        <div><dt>Idempotency</dt><dd><code>${e(engine.data.defaults.idempotencyHeader)}</code></dd></div>
        <div><dt>Concurrency</dt><dd><code>${e(engine.data.defaults.concurrencyHeader)}</code></dd></div>
      </dl></div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Non-negotiable boundaries</h2></div></div><div class="paper-card__body"><ul class="list-clean">${engine.data.boundaries.map(x=>`<li class="list-item"><span class="list-item__icon">${icon("fa-shield-halved")}</span><div><p>${e(x)}</p></div></li>`).join("")}</ul></div></article>
    </section>
  </div>`;
}
function relationChips(items){
  return items?.length?`<div class="module-chip-list">${items.map(x=>`<a class="tag" href="${link(x)}"><code>${e(x)}</code></a>`).join("")}</div>`:`<p class="empty-note">None.</p>`;
}
function rawCard(obj,title="Authoritative JSON"){
  return `<article class="paper-card"><div class="paper-card__header"><div><h2>${e(title)}</h2></div></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${e(JSON.stringify(obj,null,2))}</code></pre></div></article>`;
}
export function renderApiGroupDetail(engine,g){
  const ops=engine.operationsFor(g.apiId);
  return `${header(g.name,g.description,`<div class="header-actions">${badge(`API v${g.version}`,"status-badge--stable")}<button class="button button--secondary button--compact" data-copy-value="${e(g.apiId)}" data-copy-label="API ID copied">${icon("fa-copy")} Copy API ID</button><a class="button button--secondary button--compact" href="./registry/api/groups/${e(g.apiId.replace("api.",""))}.json">${icon("fa-file-code")} Source</a></div>`)}
  <div class="stack stack--lg">
    <section class="manifest-detail-grid"><div><span>API ID</span><code>${e(g.apiId)}</code></div><div><span>Base path</span><code>${e(g.basePath)}</code></div><div><span>Operations</span><strong>${ops.length}</strong></div><div><span>Default auth</span><strong>${e(g.defaultAuthMode)}</strong></div><div><span>Rate class</span><strong>${e(g.defaultRateLimitClass)}</strong></div><div><span>Cache</span><strong>${e(g.defaultCachePolicy)}</strong></div></section>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Operations</h2></div></div><div class="paper-card__body"><div class="api-operation-list">${ops.map(x=>operationRow(x,engine)).join("")}</div></div></article>
    <div class="dashboard-grid dashboard-grid--2"><article class="paper-card"><div class="paper-card__header"><div><h2>Module bindings</h2></div></div><div class="paper-card__body">${relationChips(g.moduleBindings.map(x=>`modules.${x}`))}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Boundaries</h2></div></div><div class="paper-card__body"><ul class="list-clean">${g.boundaries.map(x=>`<li class="list-item"><span class="list-item__icon">${icon("fa-shield-halved")}</span><div><p>${e(x)}</p></div></li>`).join("")}</ul></div></article></div>
    ${rawCard(g)}
  </div>`;
}
export function renderApiOperationDetail(engine,o){
  const g=engine.group(o.groupId); const full=(g?.basePath??"")+o.path;
  const auth=o.authentication;
  return `${header(o.name,o.description,`<div class="header-actions">${methodBadge(o.method)}${badge(`API v${o.version}`,"status-badge--stable")}<button class="button button--secondary button--compact" data-copy-value="${e(o.operationId)}" data-copy-label="Operation ID copied">${icon("fa-copy")} Copy ID</button></div>`)}
  <div class="stack stack--lg">
    <section class="api-endpoint-hero paper-card"><div>${methodBadge(o.method)}<code>${e(full)}</code></div><small>${e(o.operationId)}</small></section>
    <section class="manifest-detail-grid">
      <div><span>Group</span><a href="${link(o.groupId)}"><code>${e(o.groupId)}</code></a></div>
      <div><span>Authentication</span><strong>${e(auth.mode)}</strong></div>
      <div><span>Privacy</span><strong>${e(o.privacy)}</strong></div>
      <div><span>Rate limit</span><strong>${e(o.policies.rateLimit)}</strong></div>
      <div><span>Cache</span><strong>${e(o.policies.cache)}</strong></div>
      <div><span>CORS</span><strong>${e(o.policies.cors)}</strong></div>
    </section>
    <div class="dashboard-grid dashboard-grid--2">
      <article class="paper-card"><div class="paper-card__header"><div><h2>Request</h2></div></div><div class="paper-card__body"><dl class="api-definition-list">
        <div><dt>Path parameters</dt><dd>${e((o.request.pathParameters||[]).join(", ")||"None")}</dd></div>
        <div><dt>Body contract</dt><dd>${o.request.bodyContract?`<a href="${link(o.request.bodyContract)}"><code>${e(o.request.bodyContract)}</code></a>`:"None"}</dd></div>
        <div><dt>Headers</dt><dd>${e((o.request.headers||[]).join(", "))}</dd></div>
        <div><dt>Idempotency</dt><dd>${o.policies.idempotency.required?"Required":"Not required"}</dd></div>
        <div><dt>Concurrency</dt><dd>${o.policies.concurrency.required?"If-Match required":"Not required"}</dd></div>
      </dl></div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Response</h2></div></div><div class="paper-card__body"><dl class="api-definition-list">
        <div><dt>Success status</dt><dd>${e(o.response.successStatus)}</dd></div>
        <div><dt>Envelope</dt><dd><a href="${link(o.response.envelope)}"><code>${e(o.response.envelope)}</code></a></dd></div>
        <div><dt>Data contract</dt><dd>${o.response.dataContract?`<a href="${link(o.response.dataContract)}"><code>${e(o.response.dataContract)}</code></a>`:"Operation-specific safe projection"}</dd></div>
        <div><dt>Error envelope</dt><dd><a href="${link(o.response.errorEnvelope)}"><code>${e(o.response.errorEnvelope)}</code></a></dd></div>
      </dl></div></article>
    </div>
    <div class="dashboard-grid dashboard-grid--2"><article class="paper-card"><div class="paper-card__header"><div><h2>Required permissions</h2></div></div><div class="paper-card__body">${relationChips(auth.permissions)}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Domain contracts</h2></div></div><div class="paper-card__body">${relationChips(o.contractBindings)}</div></article></div>
    <div class="dashboard-grid dashboard-grid--2"><article class="paper-card"><div class="paper-card__header"><div><h2>Related Events</h2></div></div><div class="paper-card__body">${relationChips(o.eventBindings)}</div></article><article class="paper-card"><div class="paper-card__header"><div><h2>Error codes</h2></div></div><div class="paper-card__body"><div class="module-chip-list">${o.response.errors.map(x=>`<span class="tag"><code>${e(x)}</code></span>`).join("")}</div></div></article></div>
    ${rawCard(o)}
  </div>`;
}
export function renderApiSchemaDetail(s){
  const fields=(s.fields||[]).map(f=>`<tr><td><code>${e(f.key)}</code></td><td>${f.schema?`<a href="${link(f.schema)}"><code>${e(f.schema)}</code></a>`:`<a href="${link(f.primitive)}"><code>${e(f.primitive)}</code></a>`}</td><td>${f.required?"Required":"Optional"}</td><td>${e(f.description)}</td></tr>`).join("");
  return `${header(s.name,s.description,`<div class="header-actions">${badge(`API v${s.version}`,"status-badge--stable")}<button class="button button--secondary button--compact" data-copy-value="${e(s.$id)}" data-copy-label="Schema ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="./registry/api/schemas/${e(s.$id.replace("api.",""))}.json">${icon("fa-file-code")} Source</a></div>`)}
  <div class="stack stack--lg"><section class="manifest-detail-grid"><div><span>Schema ID</span><code>${e(s.$id)}</code></div><div><span>Category</span><strong>${e(s.category)}</strong></div><div><span>Fields</span><strong>${s.fields?.length??0}</strong></div><div><span>Status</span><strong>${e(s.status)}</strong></div></section>
  <article class="paper-card"><div class="paper-card__header"><div><h2>Fields</h2></div></div><div class="paper-card__body table-scroll"><table class="data-table"><thead><tr><th>Field</th><th>Type</th><th>Presence</th><th>Meaning</th></tr></thead><tbody>${fields}</tbody></table></div></article>
  <article class="paper-card"><div class="paper-card__header"><div><h2>Validation rules</h2></div></div><div class="paper-card__body"><div class="field-rule-grid">${s.validationRules.map(x=>`<div><strong>${e(x.id)}</strong><p>${e(x.description)}</p></div>`).join("")}</div></div></article>
  ${rawCard(s)}</div>`;
}
export function renderApiDetail(engine,item){
  const d=engine.get(item.id); if(!d)return null;
  if(item.type==="api-group")return renderApiGroupDetail(engine,d);
  if(item.type==="api-operation")return renderApiOperationDetail(engine,d);
  if(item.type==="api-schema")return renderApiSchemaDetail(d);
  return null;
}
