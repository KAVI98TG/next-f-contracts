# NEXT F Contracts - Agent Instructions

These instructions apply to Codex and any other AI development agent working with a NEXT F customer website, CMS, Admin system, API or contract repository.

> **Phase 21 operational authority:** For implementation workflow, stop conditions, required artifacts and completion reporting, also follow `standards/29-codex-development-standard.md` and `registry/developer/index.json`.

## Mandatory workflow

1. Resolve the contract version before implementation.
2. Read the site manifest when one exists.
3. Resolve enabled modules and capabilities.
4. Reuse existing NEXT F contracts.
5. Reuse canonical event names.
6. Reuse canonical webhook events.
7. Reuse canonical permission identifiers.
8. Keep customer-editable data out of hardcoded presentation code.
9. Keep platform secrets out of browser bundles and public repositories.
10. Validate the implementation against the selected contract version.
11. Report any required contract extension instead of silently inventing a parallel model.
12. For V1.1.0 Customer CMS behavior, resolve the canonical `customerAccessPolicyRef`; intersect it with capability, entitlement, permission, scope, resource, field, Security and Privacy gates; and fail closed when any required write policy is unresolved.

## Prohibited behavior

Do not:

- invent an equivalent schema when a NEXT F schema already exists
- rename canonical contract fields inside a customer implementation without an explicit adapter
- invent event names
- invent permission identifiers
- invent webhook payload shapes
- add domain registration or hosting management as NEXT F platform capabilities
- expose raw secrets in frontend code
- store raw payment card numbers or CVV data
- let customer-editable content directly control arbitrary HTML, JavaScript or platform configuration
- bypass authentication, authorization, consent or audit rules
- silently upgrade a site's pinned contract version
- silently introduce a breaking change
- treat Customer CMS visibility as authorization, broaden Customer Access through Site Manifest configuration, or turn `approval_required` into a direct authoritative write

## Extension rule

If a customer requirement is not covered, create a Contract Extension Proposal describing:

- business requirement
- missing capability
- proposed domain
- proposed contract ID
- proposed fields
- relationships
- permissions
- events
- webhook impact
- security/privacy impact
- backward compatibility impact

An isolated project-specific extension may only be used when it is documented, namespaced and does not conflict with canonical NEXT F contracts.

## Phase 3 primitive field rules

- Resolve an existing `fields.*` primitive before creating a project-specific value type.
- A different editor appearance does not justify a new primitive field.
- Use only configuration property IDs supported by the selected primitive.
- Use canonical validation rule IDs.
- Treat hidden fields as UI metadata, never authorization.
- Treat read-only fields as write-policy metadata, not immutable data.
- Store media references as canonical asset IDs where the primitive requires them.
- Currency values always include currency.
- Relation values use canonical target IDs and require server-side target/tenant validation.
- Rich Text and Code values are inert and do not imply script execution.

## Phase 4 Shared Core requirement

Before introducing an address, publication state, version record, audit envelope, media object, link, CTA, contact point, external provider reference, entity reference or actor reference, check the Shared Core Registry. Reuse the canonical schema when one exists. Business-domain contracts should compose Shared Core Schemas rather than copy their fields.


## Phase 5 content rule

Use canonical `content.*` contracts for pages, blog, documentation, services, business content, navigation, legal content and custom collections. Do not create parallel CMS models when a Phase 5 contract already covers the requirement. Concrete Page Block contracts are Phase 6. SEO composition is now canonical through Phase 7 `seo.*` contracts.

## Phase 6 Block rules

- Use a canonical `blocks.*` section contract whenever it fits the customer requirement.
- `content.pageSection.blockType` must resolve to a section Block, never an embedded helper.
- Do not let Block payloads contain arbitrary HTML, CSS or JavaScript.
- Do not treat `variantKey` as customer-defined CSS; it is an approved frontend implementation key.
- Reuse canonical content entities in listing Blocks instead of duplicating records.
- `blocks.pricing` is marketing display content, not Commerce transaction pricing.
- `blocks.form` places a form and must bind to the canonical Forms contract when Phase 8 is enabled.
- Use `blocks.custom` only with a registered, Site-authorized extension schema.


## Phase 7 SEO rules

Use canonical `seo.*` contracts for metadata, focus keywords, canonical URLs, robots directives, social metadata, structured data, redirects, sitemaps, audits, link health and search performance.

Mandatory rules:

- do not add a second ad-hoc SEO object to customer projects
- attach `seo.metadata` to routable canonical entities rather than duplicating SEO fields in every content contract
- never present meta-title/meta-description previews as guaranteed search-engine output
- never present a NEXT F SEO audit score as a Google/Bing ranking score
- keep robots.txt crawl policy separate from page-level meta robots
- do not fabricate structured-data reviews, prices, availability or other claims
- do not silently overwrite declared canonicals with provider-selected canonicals
- retain source and freshness metadata for imported search performance and indexing inspection data
- keep Google Search Console and other external authorization in the Integration layer when Phase 10 is implemented
- do not promise rankings from focus keywords, metadata or audit compliance


## Phase 8 Forms rules

- Reuse `forms.form` and related Phase 8 contracts for NEXT F website forms.
- Never treat browser-side validation as acceptance.
- Never expose Form Submissions or Leads through public website APIs.
- Never convert hidden fields into trusted values merely because they are hidden.
- Preserve field/form snapshots for historical submissions.
- Never embed vendor tracking code in `forms.conversionMapping`.
- Keep uploaded form files private by default.
- Use explicit Lead mapping and deduplication policy rather than ad-hoc matching.
- Do not invent canonical Form events, Webhooks or Permissions before their scheduled registry phases.


## Phase 9 Marketing and Tracking rules

- Emit website measurement through the NEXT F tracking layer instead of directly coupling business components to ad/analytics vendors.
- Reuse the standard tracking vocabulary in `registry/marketing/tracking-events.json` whenever an equivalent event key exists.
- Treat `marketing.trackingEvent` as measurement evidence, never as authoritative business state.
- Use `marketing.conversionDefinition` and `marketing.conversionOccurrence` for conversions.
- Resolve Phase 8 `forms.conversionMapping.conversionKey` to a canonical Phase 9 conversion definition when Forms and Marketing are enabled together.
- Do not place provider credentials, conversion IDs, pixel secrets, OAuth tokens or private keys in Marketing contracts.
- Do not collect generic raw form payloads as event properties.
- Do not use device/browser fingerprinting to construct visitor IDs.
- Advertising click identifiers are private/pseudonymous identifiers and are retention-bounded.
- Consent must be evaluated before optional collection/dispatch. Debug mode is not a bypass.
- Keep preview/staging destinations isolated from production analytics and advertising properties.
- Provider-specific integrations are Phase 10 and must adapt to these canonical Marketing contracts rather than redefine them.


## Phase 10 Integration rules

- Use a canonical `integrations.*` connector when one exists instead of hardcoding a parallel provider integration into a customer Site.
- Customer Organizations normally own external analytics, ads, search, CRM, email and other provider accounts.
- Never store raw access tokens, refresh tokens, API keys, signing secrets or passwords in public contract data or browser bundles. Use `integrations.secretReference`.
- Only configuration fields explicitly marked `publicClientEligible` may be exposed to Site Runtime code.
- Bind preview, staging and production resources/credentials explicitly. Never silently reuse production tracking/conversion resources in preview or staging.
- Keep canonical NEXT F event names and conversion keys authoritative. Provider event names, conversion action IDs, labels, pixels and datasets belong in connector mappings.
- Apply Phase 9 consent and data-minimization rules to both client-side and server-side dispatch. Server-side delivery is not a consent bypass.
- Hashing personal data does not automatically make it anonymous.
- Do not forward whole Form Submissions, Leads or other canonical records when an explicit field mapping will satisfy the provider purpose.
- `integrations.customApi` is server-side, HTTPS, host/path allowlisted and typed. It is not an arbitrary fetch or script execution facility.
- `integrations.webhook` is a Phase 10 adapter only. Do not preempt the authoritative Phase 14 webhook subscription/signature/delivery model.
- Health tests should avoid real production side effects by default and must never expose secrets or raw personal provider payloads.
- Respect provider rate limits and use bounded retries; do not blindly retry non-idempotent external writes.


## Phase 11 Commerce Core rules

- Reuse canonical `commerce.*` contracts instead of creating project-specific Product, Order, Payment, Inventory or store-customer models.
- `core.organization` is the NEXT F tenant; `commerce.commerceCustomer` is the storefront buyer.
- Do not recalculate historical Order line names, SKUs, prices, taxes or discounts from mutable Product configuration after purchase.
- Keep payment status, fulfillment status and order status separate.
- Keep authorization, capture, refund and return concepts separate.
- Never store raw payment-card PAN, CVV/CVC or equivalent sensitive authentication data.
- Use Phase 10 Integration contracts for external payment, shipping, tax, catalog-feed and provider connections.
- Use traceable Inventory Adjustments and Transfers instead of silent stock-balance edits.
- Treat `verifiedPurchase` on reviews as system-derived, not customer-editable marketing data.
- Expose only explicitly public storefront subsets to unauthenticated visitors.
- Do not introduce specialized subscription, booking or gift-card transaction behavior until a canonical capability contract covers it.
- Cross-entity transaction invariants belong to Phase 12; do not invent incompatible business rules in individual Sites.


## Phase 12 Commerce Rules

For ecommerce implementations:

- Phase 11 schemas define the canonical data model.
- Phase 12 rules define cross-entity operational truth.
- Schema validation alone does not authorize a transaction.
- Enforce Commerce Rules at the trusted server/domain boundary.
- Never trust browser totals, stock, payment state, discount eligibility or tax/shipping calculations as final authority.
- Use the canonical Phase 12 state machines for ordinary lifecycle transitions.
- Use the Phase 12 command policies for atomicity, idempotency, concurrency and audit expectations.
- Use Phase 12 domain error identifiers; do not invent HTTP mappings before Phase 18.
- Keep Return, Refund and Restock as separate operations.
- Keep Payment Authorization, Capture and Refund as separate financial facts.
- Preserve immutable historical transaction snapshots.
- Do not fabricate Phase 13 Events, Phase 14 Webhooks or Phase 15 Permissions.
- Specialized subscriptions, booking, gift-card, marketplace, preorder and multi-currency behavior must respect the Phase 12 capability gates.

## Phase 13 Event rule

Search `registry/events/index.json` before introducing an event. Reuse an equivalent canonical event key exactly. Do not use marketing tracking observations as substitutes for authoritative domain facts, and do not invent webhook transport semantics before Phase 14.


## Phase 14 Webhook rules

When implementing Webhook functionality:

- Treat canonical Events as authoritative facts and Webhooks only as outbound transport.
- Create at most one logical Delivery for `(subscriptionId,eventId)`.
- Automatic retries and manual redelivery create Attempts on the same Delivery and preserve the same canonical Event ID.
- Select only exact Event Registry keys with `webhookEligible: true`; V1 does not allow wildcard subscriptions.
- Apply environment and data-access checks before creating a Delivery.
- Require endpoint challenge verification before activation.
- Implement the V1 HMAC-SHA256 signature over `<unix-seconds>.<exact raw UTF-8 body bytes>`.
- Keep signing secrets and destination credentials server-side and write-only.
- Validate HTTPS destination addresses against SSRF/network restrictions at connection time and never automatically follow redirects.
- Apply bounded timeout, rate, retry, paused-queue, retention and dead-letter policies.
- Redact Authorization, signatures, secret-backed headers and sensitive URL values before persisting diagnostics.
- Never generate a Webhook from a `webhook.*` lifecycle Event because those canonical events are intentionally `webhookEligible: false`.
- Do not create provider-specific parallel webhook models when the canonical Webhook Registry covers the requirement.


## Phase 15 permission rules

- Use exact canonical `domain.resource.action` identifiers.
- Never invent wildcard grants or implicit permission inheritance.
- Never infer authorization from a visible button or authenticated session alone.
- Customer-defined roles may use only grantable permissions inside the acting principal's permission ceiling and scope.
- Do not expose platform-only permissions in Customer CMS.
- Do not return raw secrets because a principal can manage integration credentials or webhook secrets.
- Report a Permission Extension requirement when no canonical permission represents a new protected operation.

## Phase 16 Site Manifest rule

For any NEXT F customer website repository containing `nextf.site.json`:

1. Read and validate the Site Manifest before planning implementation work.
2. Treat `contracts.contractVersion` as exact and authoritative for the project.
3. Never replace the pinned Contract Version with `latest`, a wildcard or a version range.
4. Treat `site.siteType` as descriptive only; do not infer functionality from Site type.
5. Use Manifest Module/Capability declarations for feature intent. After Phase 17, resolve them against the canonical Module Registry.
6. Preserve all five mandatory runtime capabilities: Site Identity, Content Connector, Event Layer, Consent Layer and Integration Loader.
7. Do not create a separate customer admin/CMS architecture when the Manifest declares NEXT F Customer CMS participation.
8. Keep customer editing structured and never enable arbitrary code editing.
9. Resolve canonical Phase 13 Event IDs and Phase 9 tracking event IDs exactly. Do not rename them per project.
10. Resolve Integration connector IDs against the Phase 10 Integration Registry. Integration support never means credentials may be placed in source code.
11. Never write secret values into `nextf.site.json`; configuration entries declare key metadata only.
12. Keep hosting subscriptions, domain registration, registrar credentials and hosting-control credentials outside the Manifest.
13. If functionality is not covered by canonical contracts, declare and document a namespaced Site extension rather than silently changing a canonical schema.
14. Report implementation deviations from the Manifest before considering the project complete.

## Phase 17 Module Registry

Before building a Site, resolve `nextf.site.json` against `registry/modules/index.json`.

Mandatory rules:

- reject unknown module IDs
- reject unknown capability IDs
- ensure every capability belongs to the selected module
- enable every required module dependency
- never use a reserved capability as implemented functionality
- use module contract bindings before creating project-specific schemas
- use module permission/event bindings as discovery hints; authoritative details remain in their source registries
- Customer CMS/Admin navigation metadata never replaces authorization checks
- report recommended dependency omissions in the implementation report


## Phase 18 API requirements

When implementing NEXT F API integrations:

1. Read `nextf.site.json`.
2. Resolve every exact `apiBinding`.
3. Resolve the API group and operation in `registry/api/index.json`.
4. Use the declared API semantic version. Never assume `latest`.
5. Reuse canonical request/response/domain contracts.
6. Re-check Phase 15 permissions server-side.
7. Enforce operation idempotency and concurrency metadata.
8. Keep public content reads separate from public interaction writes.
9. Never accept client-computed Commerce totals, inventory, tax or payment state as authoritative.
10. Never allow an external API client to assert a Phase 13 canonical domain Event.
11. Keep Webhook management separate from outbound Webhook delivery/signature semantics.
12. Report a missing API operation as a contract extension need instead of silently inventing a parallel route.


## Phase 19 Customer CMS UI rules

- Resolve the applicable `cmsUi.profile.*` resource profile before creating a customer-management screen.
- Do not create a separate customer admin/CMS when a NEXT F Customer CMS profile already covers the capability.
- Use the canonical editor registry for contract field types.
- A UI binding may restrict editability but must never elevate a canonical non-editable field.
- Complex content editors are dedicated routes/workspaces, not generic tiny modals.
- UI visibility is not authorization; invoke the canonical API and re-check canonical permissions server-side.
- Preserve canonical SEO, publishing, revision, integration and commerce contract boundaries instead of flattening them for convenience.
- Never render stored secret values through ordinary form fields.


## Phase 20 Admin UI rules

When building NEXT F Admin, resolve `registry/admin-ui/index.json`. Reuse matching Customer CMS UI profiles by reference where available. Do not clone customer field models into divergent Admin models. Never add hidden customer impersonation, a generic Admin-override-everything action, domain/hosting billing controls, or browser-visible secret values. Site administration must remain contract-, module-, API-, permission- and business-rule-aware.


## Phase 21 Codex Development Standard

Before substantial implementation work:

1. classify the task using `registry/developer/task-types.json`
2. inspect the repository before editing
3. resolve `nextf.site.json` and the exact pinned Contract Version
4. map the request to canonical Modules, Capabilities, contracts, APIs, Permissions, Events, Webhooks, Integrations and UI metadata
5. stop and report any applicable canonical stop condition
6. create a smallest-safe-change implementation plan
7. implement against canonical contracts without parallel architecture
8. run relevant repository verification and never fabricate unrun checks
9. record extensions/deviations explicitly
10. produce an implementation report and handoff summary

The Phase 21 standard is operational guidance. Phase 33 provides browser validation and Phase 34 provides the shared developer CLI validation surface.


## Phase 22 Reference Examples

When starting a common customer Site, inspect `#/development/examples` or the relevant `examples/<site-type>/` bundle after reading the Site Manifest and Phase 21 Codex standard.

Examples compose canonical contracts; they do not override them. Use the example's `nextf.site.json`, `CONTRACT-MAP.json`, `CMS-MAP.json`, `CODEX-BRIEF.md` and `ACCEPTANCE-CHECKLIST.md`.

The current stable examples pin Contract Registry V0.23.0. A customer project's own approved Site Manifest remains authoritative for that Site.

## Phase 23 Global Search

Global Search is a discovery layer only. It does not create, rename or reinterpret contracts.

When using search results:

1. Prefer an exact canonical machine identifier when available.
2. Open the result's authoritative registry/source definition before implementing.
3. Treat field-level search results as pointers to the parent canonical contract.
4. Do not infer a missing contract merely because a natural-language search returns no result.
5. If no canonical coverage exists, follow the Contract Extension Proposal workflow from Phase 21.
6. Search synonyms exist only to improve discovery. They are not canonical aliases for schema/event/permission identifiers.
7. Never add secrets, credentials or customer runtime data to the search index.


## Phase 24 Relationship Explorer

Before inventing a new dependency or extension, inspect the canonical relationship graph when the relevant Registry definitions already exist.

Use `registry/relationships/relationship-index.json` or the Relationship Explorer to discover direct dependencies, incoming impact areas and bounded paths.

The graph is a discovery projection only. It does not change source contract semantics and it does not prove runtime call flow, data flow or causal behavior.

Never infer a new relationship from matching names, tags or search similarity. Only explicit Registry metadata and the documented Permission/Event associations become graph edges.

If no path exists, report that no indexed path exists rather than inventing one.


## Phase 25 Contract Diff

Before upgrading a Site's pinned NEXT F Contract Version, inspect `#/lifecycle/diff` or the machine-readable Diff data for the exact source and target releases.

Agents must:

- use only exact available release snapshots
- never reconstruct a missing historical release and call it authoritative
- address `breaking`, `potentially-breaking`, and `review-required` changes in the implementation plan
- distinguish structural Diff output from a compatibility guarantee
- never change `nextf.site.json` or execute migrations merely because a Diff exists
- report the selected `fromVersion` and `toVersion` in upgrade work

If a required historical release is unavailable, stop that upgrade-analysis path and report the missing authoritative snapshot rather than guessing.


## Compatibility Center

Before changing a Site Contract Version, Codex must inspect `#/lifecycle/compatibility` and the exact Contract Diff for source -> target. Compatibility must not be claimed when a required dimension is unknown, when exact history is unavailable, or when migration/review findings remain unresolved. The Compatibility Center does not execute migrations or deployments.


## Changelog and release-note review

Before changing a Site Contract Version, Codex must review the target release in `#/lifecycle/changelog`, then inspect exact Contract Diff and Compatibility evidence. Changelog narrative never certifies runtime compatibility. Codex must not edit generated `CHANGELOG.md` as the primary source; authoritative release-note records live under `registry/changelog/releases/`. Breaking, deprecation, removal or migration notes must be escalated into the explicit lifecycle workflow rather than ignored.

For every coordinated Registry release from Phase 27 onward, Codex must update the authoritative machine-readable release record, preserve stable change IDs, regenerate Changelog/Search/Relationships/Diff/Compatibility projections, and run the current lifecycle regression gates before claiming release acceptance. Unknown historical evidence, action requirements, breaking status or migration status must remain explicit unknowns rather than being guessed.


## Phase 28 Deprecation behavior

When Codex encounters a canonical Registry definition with lifecycle status `deprecated`, it must warn in the implementation report and prefer the authoritative replacement for new work when one exists. It must not silently replace deprecated behavior in an existing Site. Existing Sites remain pinned until an explicit migration plan, compatibility review, validation and upgrade decision are completed.

Codex must resolve the governing record under `registry/deprecations/records/` and report replacement disposition, support window when authoritative, migration requirements, manual-review requirements, related Changelog entries and exact Diff evidence when available. `unknown` and `no-replacement` are meaningful states and must not be converted into guessed replacements. Removed definitions may be referenced only for historical/compatibility work unless an explicit contract says otherwise.

A stable definition must not be treated as removed merely because a newer alternative exists. Deprecation status is authoritative only when represented by the canonical Registry lifecycle state and governing deprecation record.

## Phase 29 security behavior

Before implementing or modifying authentication, privileged operations, APIs, browser rendering, secrets, uploads, integrations, Commerce, Webhooks or deployment configuration, inspect `registry/security/index.json` and the applicable controls.

- Mandatory controls are not optional implementation preferences.
- Reuse canonical Permission/API/Webhook/Commerce security rules linked by the controls; do not create parallel security models.
- Never place protected configuration, secrets, credentials, tokens, signing secrets or encryption keys in public manifests, browser bundles, examples, analytics or public Events.
- UI visibility is never authorization. Tenant/Site scope and privileged permissions are enforced server-side.
- Do not claim security compliance without running the applicable verification evidence.
- Phase 30 privacy classifications are authoritative under `registry/privacy/`; resolve them instead of inventing parallel labels.

## Phase 30 privacy and data behavior

Before implementing or modifying Forms/Leads, tracking, integrations, Commerce/payments, Webhooks, audit, identity/authorization or any other flow containing personal, sensitive or secret data, inspect `registry/privacy/index.json` and the applicable field-handling records.

- Use exactly one canonical primary class: `public`, `internal`, `personal`, `sensitive`, or `secret`.
- Financial, authentication, tracking, content and system metadata are qualifiers, not alternative sensitivity classes.
- Absence of an explicit field-handling record never means the field is automatically public or analytics eligible.
- Preserve purpose limitation and data minimization. Do not reuse captured data merely because it is available.
- Do not dump raw form values, attachments, credentials, payment data or privileged audit state into analytics or advertising destinations.
- Treat analytics/marketing consent separately from requested business-purpose/form consent or acknowledgement. One does not silently grant the other.
- Hashed or pseudonymized personal data is not automatically anonymous.
- Secret data remains prohibited from public delivery, analytics, ordinary logging, Events and Webhooks; Phase 29 Security controls remain mandatory.
- Retention classes are policy buckets, not fabricated legal durations. Do not invent retention dates or legal obligations that are not authoritative.
- `future-capability` privacy operations are definitions only. Never report export/deletion/anonymization/legal-hold workflows as deployed unless runtime evidence exists.
- When changing a classified field or data flow, include privacy impact in the implementation report and rerun the Phase 30/current validation gates.


## Accessibility Standards (Phase 31)

Resolve applicable controls from `registry/accessibility/` for customer websites, Customer CMS, NEXT F Admin and Contract Portal work. Prefer native semantic HTML and native control behavior before ARIA or custom interaction patterns. Preserve keyboard access, visible focus, focus management, labeled forms/errors, non-color-only status, media alternatives, reduced-motion behavior and responsive reflow.

Accessibility-related authoring metadata such as alternative text, accessible labels, help/error association, heading constraints and caption/transcript references should cross-link canonical Fields, Blocks and CMS editor definitions rather than creating duplicate business-data contracts.

Do not infer that a static validator proves accessibility. If a control declares keyboard, screen-reader, visual, content, contrast or reflow review, report that review separately and do not claim it ran unless there is actual evidence. The Phase 31 Contract Portal audit records a managed Chromium `URLBlocklist=*` limitation for local/file interaction automation; preserve that limitation until an allowed browser environment supplies new evidence.


## Performance Standards (Phase 32)

Treat `registry/performance/rules/` and `registry/performance/budgets/` as the machine-readable performance authority. Apply relevant rules when changing customer sites, Customer CMS, NEXT F Admin, APIs, integrations or this Contract Portal.

Do not solve performance problems by weakening authorization, privacy, security, tenant isolation, data ownership or explicit Site version pinning. Public caching and authenticated caching have different boundaries. Optional analytics/advertising integrations must remain consent-aware, non-blocking and failure-isolated.

Preserve route-lazy Contract Diff history and bounded Global Search/Relationship rendering. Generated local fallbacks are required for direct file review, but bootstrap-loaded registries must attempt authoritative JSON first and dynamically import the generated fallback only when that read fails.

Run `npm run audit:performance` when portal loading, generated fallbacks, Search, Relationships or Diff artifacts change. Static repository bytes are not Core Web Vitals. Do not claim LCP, INP, CLS or search-ranking improvement unless matching browser/field evidence exists, and never claim guaranteed ranking benefits.

## Browser Contract Validation (Phase 33)

- Treat `registry/validation/index.json` plus `js/manifest-validation-core.js` as the shared deterministic validation model for `nextf.site.json`.
- Run browser/manifest validation before claiming a Site Manifest is NEXT F contract-compliant.
- Never silently mutate or upgrade a manifest during validation.
- Unknown future Contract Versions remain unsupported; do not guess compatibility.
- Deprecated definitions, when present, must remain visible as findings rather than being silently replaced.
- Browser validation is local-only. Do not send pasted/uploaded manifest data to analytics, Search, external APIs or third parties.
- Phase 34 CLI validation reuses the Phase 33 validation core/rule bundle; do not implement independent semantics.


## Developer Validation CLI (Phase 34)

- Before claiming NEXT F contract compliance, run `nextf-contract validate` or the repository-local equivalent `node bin/nextf-contract.mjs validate` against the project `nextf.site.json`.
- Prefer `--json` when Codex or automation needs machine-readable evidence.
- Capture the command, CLI version, exit code, errors and warnings in the implementation report.
- Exit code `0` means contract validation passed; `1` means validation errors; `2` means CLI/configuration failure; `3` means the pinned Contract Version is unsupported/unknown; `4` means an internal tool failure.
- A validation pass does not prove deployment, authorization, accessibility certification, privacy/legal compliance or production support.
- Never mutate or auto-upgrade a manifest to make the CLI pass. Existing Sites remain explicitly pinned until the normal Diff, Compatibility, migration and upgrade workflow is completed.
- The `diff` command is read-only evidence over the existing Diff Registry. It must not reconstruct missing historical snapshots.

## Phase 35 starter-pack behavior

When a customer repository uses a NEXT F Site Starter Contract Pack, read the starter `AGENTS.md` and `nextf.site.json` before implementation. Resolve the exact pinned Contract Version, use only declared Modules/Capabilities, reuse canonical contracts, keep Domain Events distinct from tracking observations, preserve Submission/Lead separation, and run NEXT F validation before claiming compliance. Do not silently upgrade a starter manifest, invent a missing canonical contract, expose secrets, or represent the starter pack as a visual theme or production Site Runtime/SDK.


## Phase 36 / V0.37.0 Release Candidate

Registry Health is the current repository-wide QA authority. Run `npm run generate:health`, `npm run validate:phase36`, `npm run smoke:phase36`, and `npm run validate:regression` before claiming Release Candidate integrity. V0.37.0 is pre-V1 and does not claim that every consumer runtime is deployed. Environment-dependent checks must remain explicitly DEFERRED rather than fabricated as PASS.


## Phase 37 / V1.0.0 Production Acceptance

The Contract Registry is stable at V1.0.0. For new work, resolve and pin the exact Contract Version; never use a floating `latest`. Stable IDs and stable semantics cannot silently change. Minor releases must remain backward-compatible under policy; breaking stable-contract changes require a major release and explicit migration/review.

Before changing an existing Site pin, inspect Changelog, Compatibility Center, exact Diff evidence and Deprecations, prepare migration/review work where required, run browser/CLI validation, then change the pin explicitly.

Registry V1 stability does not mean every consumer runtime is deployed. Preserve `unknown`/not-declared runtime compatibility for Site Runtime/SDK, Customer CMS, NEXT F Admin or APIs unless authoritative runtime evidence exists.

Before claiming V1 release integrity, run `npm run validate:phase37`, `npm run smoke:phase37`, and `npm run validate:regression`. Production Acceptance artifacts under `registry/releases/1.0.0/` are release evidence and must not be fabricated or hand-edited to hide failed gates.


## Phase 40 Software rules

- Use canonical `software.*` contracts before creating project-local licensing, entitlement, release or subscription models.
- Software API owns software-business truth; Checkout owns payment sessions/attempts/captures/refunds.
- Never trust browser price, paid state, entitlement, activation limit or package path.
- A success redirect is never payment evidence.
- V1.3.0 annual renewal is customer-initiated; do not label it auto-renewing.
- Use capability entitlements rather than plan-name checks.
- Do not remotely disable installed plugin functionality when annual update/support access expires.
- Never expose raw license keys, download tokens, signing keys, provider secrets or private R2 credentials.
- License/update requests must not contain WordPress content or unrelated visitor analytics.


## Phase 41 first-party tracking rules

- Reuse `marketing.trackingEvent`; never create a parallel observation envelope.
- Browser collection uses public Site identity plus exact origin, rate, payload, consent and abuse controls; never expose a collector secret.
- Tracking Observations never assert authoritative Orders, Payments, Refunds, Leads or other Domain Events.
- Anonymous visitor/session IDs are random, Site-scoped and never fingerprints or cross-customer identity.
- Keep non-production observations isolated from production reporting.
- Tracking failures never block rendering, navigation, forms or checkout.
- Customer health/reporting surfaces expose bounded authorized aggregates, not raw payloads or infrastructure secrets.
- Resolve Contract/SDK/collector compatibility explicitly and report unknown/runtime-not-implemented truthfully.
