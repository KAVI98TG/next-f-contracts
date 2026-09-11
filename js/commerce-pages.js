import { icon, escapeHtml } from "./utils.js";
const e=escapeHtml;
const labels={
  foundation:"Foundation",catalog:"Catalog",inventory:"Inventory",customer:"Customers",
  "cart-checkout":"Cart & Checkout",orders:"Orders",payments:"Payments & Refunds",
  fulfillment:"Shipping & Fulfillment",promotions:"Discounts & Promotions",tax:"Tax",returns:"Returns & Reviews"
};
function header(title,desc,actions=""){return `<header class="page-header"><div class="page-header__copy"><p class="page-header__eyebrow">Registry</p><h1>${e(title)}</h1><p>${e(desc)}</p></div>${actions?`<div class="page-header__actions">${actions}</div>`:""}</header>`;}
function sourceFor(s){const key=s.$id.split(".",2)[1].replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();return `./registry/commerce/definitions/${key}.json`;}
function fieldType(f){const id=f.primitive||f.schema||f.itemsPrimitive||f.itemsSchema;if(!id)return "—";const many=f.itemsPrimitive||f.itemsSchema;return `<a href="#/registry/item/${encodeURIComponent(id)}"><code>${e(id)}</code></a>${many?' <span class="tag">many</span>':''}`;}
function boolBadge(value,yes,no){return `<span class="commerce-flag ${value?'commerce-flag--yes':''}">${icon(value?"fa-circle-check":"fa-circle-minus")} ${e(value?yes:no)}</span>`;}
function schemaCard(s){return `<article class="paper-card commerce-card"><div class="commerce-card__top"><div><span class="commerce-kicker">${e(labels[s.category]??s.category)}</span><h3><a href="#/registry/item/${encodeURIComponent(s.$id)}">${e(s.name)}</a></h3><code>${e(s.$id)}</code></div><span class="status-badge status-badge--stable">Stable</span></div><p>${e(s.description)}</p><div class="commerce-card__facts"><span>${icon("fa-shapes")} ${e(s.commerceModel.kind)}</span><span>${icon("fa-list")} ${s.fields.length} fields</span><span>${icon("fa-shield-halved")} ${s.validationRules.length} rules</span></div><div class="commerce-card__flags">${boolBadge(s.commerceModel.transactional,"Transactional","Configuration / reference")}${boolBadge(s.commerceModel.publicEligible,"Public subset eligible","Private / operational")}</div><a class="commerce-card__open" href="#/registry/item/${encodeURIComponent(s.$id)}">Inspect contract ${icon("fa-arrow-right")}</a></article>`;}
export function renderCommerceCardsOnly(engine,filters={}){const rows=engine.search(filters.q??"",filters);if(!rows.length)return `<div class="registry-empty paper-card"><span class="registry-empty__icon">${icon("fa-cart-shopping")}</span><h3>No Commerce contracts match</h3><p>Change the search or filters.</p></div>`;return `<div class="commerce-grid">${rows.map(schemaCard).join("")}</div>`;}
export function renderCommerceIndex(engine,filters={}){
  const count=engine.search(filters.q??"",filters).length;
  const cats=engine.categories.map(x=>`<option value="${e(x)}" ${filters.category===x?"selected":""}>${e(labels[x]??x)}</option>`).join("");
  const kinds=engine.kinds.map(x=>`<option value="${e(x)}" ${filters.kind===x?"selected":""}>${e(x)}</option>`).join("");
  const groups=engine.data.categories.map(c=>`<article class="commerce-domain-tile"><span>${icon(c.key==="catalog"?"fa-boxes-stacked":c.key==="payments"?"fa-credit-card":c.key==="inventory"?"fa-warehouse":c.key==="orders"?"fa-receipt":"fa-layer-group")}</span><div><strong>${e(c.label)}</strong><p>${e(c.description)}</p></div><b>${engine.schemas.filter(s=>s.category===c.key).length}</b></article>`).join("");
  return `${header("Commerce","Provider-neutral ecommerce contracts for catalog, inventory, store customers, cart, checkout, orders, payments, tax, shipping, fulfillment, discounts, returns and reviews.",`<div class="header-actions"><span class="status-badge status-badge--stable">Phase 11</span><span class="tag">${engine.size} schemas</span></div>`)}
  <div class="stack stack--lg">
    <div class="registry-source-bar" role="status"><span>${icon("fa-database")} Runtime source</span><strong>${engine.source==="authoritative-json"?"Authoritative Commerce JSON":"Generated local fallback"}</strong><span class="tag">v${e(engine.data.registryVersion)}</span></div>
    <section class="commerce-hero">
      <article class="paper-card"><div class="paper-card__body"><p class="commerce-eyebrow">Optional Site Module</p><h2>One Commerce model for every NEXT F storefront</h2><p>Customer-specific storefront design stays flexible. Product, inventory, cart, checkout, order, payment and fulfillment semantics stay standardized so the Customer CMS, Admin, API and Codex all speak the same language.</p><div class="commerce-flow"><span>Storefront</span><i>→</i><span>NEXT F Commerce Contracts</span><i>→</i><span>CMS / API</span><i>→</i><span>Provider Adapters</span></div></div></article>
      <article class="paper-card"><div class="paper-card__body"><div class="commerce-summary"><div><span>Schemas</span><strong>${engine.size}</strong></div><div><span>Categories</span><strong>${engine.data.categoryCount}</strong></div><div><span>Transactional</span><strong>${engine.schemas.filter(s=>s.commerceModel.transactional).length}</strong></div><div><span>Public eligible</span><strong>${engine.schemas.filter(s=>s.commerceModel.publicEligible).length}</strong></div></div></div></article>
    </section>
    <div class="commerce-boundary"><strong>Historical transactions are snapshots.</strong><p>Changing a Product, Customer address, Discount or Tax configuration later must never rewrite the Order that was actually placed. Payment, Refund and Inventory facts remain independently auditable.</p></div>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Commerce domains</h2><p>Canonical structures are intentionally separated so business truth is not collapsed into one oversized object.</p></div><div class="header-actions"><a class="button button--secondary button--compact" href="./standards/19-commerce-core-contract-standard.md">${icon("fa-file-lines")} Commerce Standard</a><a class="button button--secondary button--compact" href="#/registry/commerce-rules">${icon("fa-scale-balanced")} Commerce Rules</a></div></div><div class="paper-card__body commerce-domain-grid">${groups}</div></section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Find Commerce contracts</h2><p>Search names, machine IDs, fields, relationships and validation rules.</p></div><button class="button button--ghost button--compact" type="button" data-commerce-clear>${icon("fa-rotate-left")} Clear</button></div><div class="paper-card__body"><div class="registry-toolbar commerce-toolbar">
      <label class="search-field"><span class="sr-only">Search Commerce</span>${icon("fa-magnifying-glass")}<input data-commerce-q type="search" value="${e(filters.q??"")}" placeholder="Search products, orders, inventory, refunds..."></label>
      <label><span class="sr-only">Category</span><select data-commerce-category><option value="">All categories</option>${cats}</select></label>
      <label><span class="sr-only">Kind</span><select data-commerce-kind><option value="">All model kinds</option>${kinds}</select></label>
      <label><span class="sr-only">Delivery</span><select data-commerce-visibility><option value="">Any delivery</option><option value="public" ${filters.visibility==="public"?"selected":""}>Public subset eligible</option><option value="private" ${filters.visibility==="private"?"selected":""}>Private / operational</option></select></label>
      <label><span class="sr-only">Transactionality</span><select data-commerce-transactional><option value="">Any behavior</option><option value="yes" ${filters.transactional==="yes"?"selected":""}>Transactional</option><option value="no" ${filters.transactional==="no"?"selected":""}>Non-transactional</option></select></label>
      <div class="field-filter-summary"><span>Results</span><strong data-commerce-count>${count}</strong></div>
    </div></div></section>
    <section data-commerce-results>${renderCommerceCardsOnly(engine,filters)}</section>
    <section class="paper-card"><div class="paper-card__header"><div><h2>Core commerce boundaries</h2></div></div><div class="paper-card__body"><div class="field-rule-grid">
      <div><strong>Organization ≠ Store Customer</strong><p>NEXT F's business tenant and an ecommerce buyer are separate canonical entities.</p></div>
      <div><strong>Catalog ≠ Transaction History</strong><p>Mutable Product data never rewrites historical Order snapshots.</p></div>
      <div><strong>Return ≠ Refund</strong><p>Physical/logistical return workflow is separate from the financial refund transaction.</p></div>
      <div><strong>Authorization ≠ Capture ≠ Refund</strong><p>Payment facts remain independently represented and auditable.</p></div>
      <div><strong>Inventory ≠ Hosting Location</strong><p>Inventory Location means a stock-holding facility, never a server or hosting region.</p></div>
      <div><strong>Provider accounts remain external</strong><p>Payment, shipping and other providers connect through Phase 10 Integration Contracts.</p></div>
    </div></div></section>
  </div>`;
}
export function renderCommerceDetail(registry,item,schema){
  if(!schema)return "";
  const fields=schema.fields.map(f=>`<tr><td><code>${e(f.key)}</code></td><td>${fieldType(f)}</td><td>${f.required?'<span class="status-badge status-badge--stable">Required</span>':'<span class="tag">Optional</span>'}</td><td>${f.nullable?'<span class="tag">Nullable</span>':'<span class="tag">Non-null</span>'}</td><td>${e(f.description)}</td></tr>`).join("");
  const rels=schema.relationships.length?schema.relationships.map(r=>`<li class="relationship-row"><span class="tag">${e(r.type)}</span><a href="#/registry/item/${encodeURIComponent(r.target)}"><code>${e(r.target)}</code></a><p>${e(r.description??"")}</p></li>`).join(""):`<li class="muted">No explicit relationships.</li>`;
  const rules=schema.validationRules.length?schema.validationRules.map(r=>`<div class="commerce-rule"><code>${e(r.id)}</code><p>${e(r.description)}</p></div>`).join(""):`<p class="muted">No localized rules. Cross-entity invariants are defined in Phase 12.</p>`;
  const raw=e(JSON.stringify(schema,null,2));
  return `${header(schema.name,schema.description,`<div class="header-actions"><span class="status-badge status-badge--stable">${e(schema.status)}</span><span class="tag">v${e(schema.version)}</span></div>`)}
  <div class="stack stack--lg">
    <div class="registry-source-bar"><span>${icon("fa-fingerprint")} Contract ID</span><strong><code>${e(schema.$id)}</code></strong><button class="button button--ghost button--compact" type="button" data-copy-value="${e(schema.$id)}" data-copy-label="Commerce Contract ID copied">${icon("fa-copy")} Copy ID</button><a class="button button--secondary button--compact" href="${sourceFor(schema)}">${icon("fa-file-code")} Source JSON</a></div>
    <section class="commerce-detail-summary">
      <article class="paper-card"><div class="paper-card__body"><span>Category</span><strong>${e(labels[schema.category]??schema.category)}</strong></div></article>
      <article class="paper-card"><div class="paper-card__body"><span>Model</span><strong>${e(schema.commerceModel.kind)}</strong></div></article>
      <article class="paper-card"><div class="paper-card__body"><span>Transactional</span><strong>${schema.commerceModel.transactional?"Yes":"No"}</strong></div></article>
      <article class="paper-card"><div class="paper-card__body"><span>Public eligible</span><strong>${schema.commerceModel.publicEligible?"Subset":"No"}</strong></div></article>
    </section>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Purpose</h2></div></div><div class="paper-card__body"><p>${e(schema.purpose)}</p></div></article>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Fields</h2><p>Canonical field names and reusable value/schema references.</p></div></div><div class="paper-card__body table-scroll"><table class="data-table commerce-field-table"><thead><tr><th>Field</th><th>Type</th><th>Requirement</th><th>Null</th><th>Meaning</th></tr></thead><tbody>${fields}</tbody></table></div></article>
    <div class="dashboard-grid dashboard-grid--2">
      <article class="paper-card"><div class="paper-card__header"><div><h2>Relationships</h2></div></div><div class="paper-card__body"><ul class="relationship-list">${rels}</ul></div></article>
      <article class="paper-card"><div class="paper-card__header"><div><h2>Localized validation</h2><p>Cross-entity business invariants are defined in Phase 12 Commerce Rules.</p></div></div><div class="paper-card__body commerce-rules">${rules}</div></article>
    </div>
    <article class="paper-card"><div class="paper-card__header"><div><h2>CMS and data boundary</h2></div></div><div class="paper-card__body"><div class="field-rule-grid">
      <div><strong>${schema.cms.customerVisible?"Customer CMS eligible":"Internal/system contract"}</strong><p>Editor mode: <code>${e(schema.cms.editorMode)}</code></p></div>
      <div><strong>${schema.commerceModel.containsPersonalData?"Personal data possible":"No intrinsic personal data"}</strong><p>Sensitivity: <code>${e(schema.commerceModel.dataSensitivity)}</code></p></div>
      <div><strong>${schema.delivery.publicAllowed?"Public storefront subset possible":"Private / operational"}</strong><p>${e(schema.delivery.notes)}</p></div>
      <div><strong>${schema.commerceModel.supportsRevision?"Revision-aware":"Transaction/config lifecycle"}</strong><p>${schema.commerceModel.transactional?"Historical transaction facts require append/transition semantics; they are not ordinary editable content.":"Mutation follows the schema and applicable Phase 12 Commerce Rules."}</p></div>
    </div></div></article>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Future bindings</h2></div></div><div class="paper-card__body future-binding-grid">${Object.entries(schema.futureBindings).map(([k,v])=>`<div><span>${e(k)}</span><strong>${e(v)}</strong></div>`).join("")}</div></article>
    <article class="paper-card"><div class="paper-card__header"><div><h2>Authoritative Commerce JSON</h2><p>Exact Phase 11 source definition.</p></div><button class="button button--ghost button--compact" type="button" data-copy-value="${e(JSON.stringify(schema))}" data-copy-label="Commerce JSON copied">${icon("fa-copy")} Copy JSON</button></div><div class="paper-card__body"><pre class="code-block registry-raw"><code>${raw}</code></pre></div></article>
    <details class="paper-card field-registry-metadata"><summary>Registry discovery metadata</summary><div class="paper-card__body"><pre class="code-block registry-raw"><code>${e(JSON.stringify(item,null,2))}</code></pre></div></details>
  </div>`;
}
