# NEXT F Contracts

Current stable Contract Registry version: **V1.1.0**

`contract.nextf.lk` is the technical source of truth for NEXT F-built websites, Customer CMS, NEXT F Admin, APIs, reusable schemas, Commerce rules, Events, Webhooks, Permissions, Site Manifests, Modules, Codex development standards, reference implementations, Global Search and cross-registry relationship discovery.

## Phase 38 - Customer Capability Access Policy

V1.1.0 adds one canonical, fail-closed Customer Access Policy for every Customer CMS resource profile. Policies define customer visibility, action behavior, field limits, publishing, demo behavior, approval workflow, and exact links to existing capabilities, permissions, APIs, Events, CMS/Admin metadata, Search, Relationships, Diff, Compatibility, and Registry Health.

Existing V1.0.0 sites remain pinned and unchanged. A consuming CMS, Admin, or API runtime must explicitly implement the V1.1.0 policy layer before upgrading. See `developer/CUSTOMER-ACCESS-POLICY-GUIDE.md` and the portal route `#/platform/customer-access`.

Run `npm run generate:customer-access`, regenerate dependent indexes, then run `npm run validate`, `npm run smoke:phase38`, and `npm run validate:regression`.

## Cloudflare deployment

The Contract Portal is configured as a Cloudflare Worker with Static Assets at `contracts.nextf.lk`. Deployment is manual; the repository does not deploy during installation or validation.

1. Install the pinned Wrangler development dependency with `npm install`.
2. Sign in once with `npx wrangler login`.
3. Verify the staged assets and Wrangler bundle with `npm run cloudflare:check`.
4. Preview locally with `npm run cloudflare:dev` when needed.
5. Deploy manually with `npm run cloudflare:deploy`.

The `nextf.lk` zone must already be active in the same Cloudflare account. The Custom Domain declaration lets Cloudflare create and manage the `contracts.nextf.lk` DNS record and certificate during deployment. Remove any conflicting DNS record for that hostname before the first deploy.

`cloudflare:prepare` creates a clean `dist/` directory from an explicit public-file allowlist. It excludes local backups, source maintenance scripts and `registry/diff/snapshots.json`. That snapshot file exceeds Cloudflare's 25 MiB per-asset limit; Contract Diff continues to use the included compressed `js/generated-diff.js` browser fallback.


## Phase 28 - Deprecation System

V0.29.0 adds an operational lifecycle-management layer for canonical Registry definitions. `registry/deprecations/records/*.json` is authoritative for actual deprecated/removed items, while `registry/deprecations/index.json` is generated discovery data. The canonical lifecycle is `experimental -> draft -> stable -> deprecated -> removed`.

The Phase 28 baseline contains **zero canonical deprecated or removed Registry items**, so the authoritative record set is intentionally empty. This is not missing data: Phase 28 explicitly refuses to fabricate a sample deprecation merely to populate the portal. Future records must state replacement disposition (`replacement`, `no-replacement`, or `unknown`), support evidence, migration impact, Changelog links and Diff evidence where authoritative.

Key sources include `standards/36-deprecation-standard.md`, `registry/deprecations/deprecation.schema.json`, `registry/deprecations/replacement.schema.json`, `registry/deprecations/policy.json`, `registry/deprecations/lifecycle-states.json`, `registry/deprecations/index.json`, and `js/generated-deprecations.js`. The portal route is `#/lifecycle/deprecations`.

Run `npm run generate:deprecations` after changing authoritative deprecation records, then regenerate Changelog, Diff, Compatibility, Search and Relationships as required. Run `npm run validate:phase28`, `npm run smoke:phase28`, and `npm run validate:regression` before packaging.


## Phase 25

Phase 25 adds the **Contract Diff system**. It compares exact archived Registry releases, detects added/removed/modified canonical items, performs field-level structural analysis for JSON contracts, classifies compatibility impact conservatively, recommends semantic-version impact, and preserves explicit gaps where historical release archives are unavailable.

Key Phase 25 files:

- `standards/33-contract-diff-standard.md`
- `registry/diff/release-index.json`
- `registry/diff/release-manifests.json`
- `registry/diff/snapshots.json`
- `registry/diff/change-types.json`
- `registry/diff/impact-levels.json`
- `registry/diff/classification-rules.json`
- `js/diff-registry-engine.js`
- `js/diff-pages.js`
- `scripts/sync-contract-diff.mjs`
- `scripts/validate-phase-25.mjs`

The portal route is `#/lifecycle/diff`. Only exact available release snapshots can be selected. Missing historical releases are never reconstructed and presented as authoritative.

## Phase 24

Phase 24 adds the **Relationship Explorer**. It generates a deterministic graph projection from `registry/registry.json`, preserving explicit relationships and adding resolvable Permission/Event associations without inventing semantic links.

The portal can now focus any Registry machine ID, inspect incoming/outgoing connections, expand bounded neighborhoods, review likely impact/dependency areas, trace shortest Registry paths, inspect relationship type semantics, identify isolated definitions and verify graph integrity.

Use **Registry → Relationships** or open a Registry definition and choose **Relationships**.

## Authority

The Relationship Explorer is discovery only. The authoritative relationship remains its source metadata in the Contract Registry. Search similarity never creates graph edges.


## Phase 26 - Compatibility Center

V0.27.0 operationalizes release support and multidimensional Site/platform compatibility on top of exact Contract Diff evidence. It adds machine-readable compatibility states, support levels, dimensions, release readiness, platform-surface matrix and reference Site assessments while keeping production runtime/support claims explicit and conservative.


## Phase 27 - Changelog System

V0.28.0 makes release history a machine-readable lifecycle system. `registry/changelog/releases/*.json` is authoritative for structured release-note narrative; the root `CHANGELOG.md` is a generated human-readable projection. Historical gaps stay explicitly incomplete and are never reconstructed as exact Registry history.

Key Phase 27 sources include `registry/changelog/release.schema.json`, `registry/changelog/change-entry.schema.json`, `registry/changelog/impact.schema.json`, `registry/changelog/release-index.json`, `registry/changelog/entry-index.json`, and the derived `registry/changelog/contract-history.json`. The Changelog portal supports version, phase, change-type, domain, module, evidence, breaking-only and migration-required filtering, dedicated change-entry details, raw JSON, and contract-level history navigation.

Global Search indexes releases and individual change entries as first-class results. Relationship Explorer projects only explicit release-to-affected Registry relationships, while Contract Diff and Compatibility Center remain the authorities for exact structural evidence and compatibility policy.

Run `npm run generate:changelog` after changing authoritative release records, then regenerate Search, Compatibility, Relationships and Diff so their integrity hashes remain aligned. Run `npm run validate:phase27` and `npm run smoke:phase27` before packaging. Phase 23-26 validators are maintained as forward regression gates; older phase scripts may contain historical release-acceptance assertions such as exact old VERSION values or requirements that later phases do not yet exist, so those time-capsule assertions are not evidence of a current regression.

## Phase 29 — Security Standards

Phase 29 adds `registry/security/` as the machine-readable security authority. It contains 49 canonical controls, security severity/category/obligation vocabularies, protected-value classes, verification methods and explicit platform-surface mappings. `Standards -> Security` is data-driven and works from authoritative JSON or the generated local fallback. Domain-specific Permission, API, Webhook, Integration and Commerce security rules remain authoritative and are cross-linked rather than duplicated.

Security Standards define required behavior and verification evidence; they do not claim that future NEXT F runtimes are already deployed or security-certified.

## Phase 30 — Privacy and Data Classification

Phase 30 adds `registry/privacy/` as the machine-readable privacy and data-handling authority. It defines exactly five primary sensitivity classes (`public`, `internal`, `personal`, `sensitive`, `secret`) and keeps financial, authentication, tracking, content and system metadata as separate operational qualifiers rather than competing classifications.

The current release contains **54 explicit field-level handling records** across public content plus the required high-risk areas: authentication/authorization, forms and leads, marketing/tracking, integrations/credentials, Commerce/payments, Webhooks and audit. Each record can declare purpose, public-delivery eligibility, log/Event/Webhook/analytics eligibility, retention class, export sensitivity, consent relevance, deletion/anonymization behavior, redaction behavior and related Phase 29 Security controls.

`Standards -> Privacy & Data` provides classification browsing, field-level search, retention exploration, consent-boundary guidance, high-risk coverage, future operation status and raw machine-readable JSON. Analytics/marketing consent remains distinct from requested business-purpose/form consent. Secret data is explicitly prohibited from public delivery, analytics, ordinary logs, Events and Webhooks.

Phase 30 also defines future-safe primitives for export, deletion request, anonymization request, retention expiration, legal hold, consent history and processing-record references. Their machine status is truthful: this Registry release does **not** claim a deployed legal-compliance workflow engine or universal legal retention periods.

Key sources include `standards/38-privacy-data-standard.md`, `registry/privacy/index.json`, `registry/privacy/classifications.json`, `registry/privacy/field-handling.json`, `registry/privacy/coverage.json`, `registry/privacy/operations.json`, `registry/privacy/consent-boundaries.json`, and `js/generated-privacy.js`.

Run `npm run generate:privacy` after changing authoritative Phase 30 privacy metadata, then regenerate Changelog, Diff, Compatibility, Search and Relationships. Run `npm run validate:phase30`, `npm run smoke:phase30`, and `npm run validate:regression` before packaging.



## Phase 32 - Performance Standards

Phase 32 adds `registry/performance/` as the machine-readable performance authority for customer websites, Customer CMS, NEXT F Admin, APIs, integrations and the Contract Portal. It defines **36 canonical performance rules** across payload discipline, route/data loading, caching, media, fonts, third-party integrations, API/data access, Search, Relationships, Diff history, large-data rendering, memory, mobile, Core Web Vitals guidance, observability and resilience.

The release also defines **17 measurable performance budgets** and a generated `registry/performance/portal-audit.json`. The Contract Portal audit measures HTML/CSS/JavaScript and generated-fallback size, Registry/Search/Relationship/Diff artifact growth, inline/external resources, bounded Search/Relationship configuration, and lazy Diff loading. Repository-size evidence is explicitly distinct from browser or production Core Web Vitals evidence.

Normal hosted portal bootstrap now attempts authoritative JSON first and dynamically imports generated local fallbacks only on failure. This preserves direct `file://` review while removing generated fallback modules from the normal static bootstrap parse path. Contract Diff remains route-lazy.

Run `npm run audit:performance` and `npm run generate:performance` after changing Phase 32 performance rules, budgets or portal-loading behavior. Then regenerate Changelog, Diff, Compatibility, Search and Relationships. Run `npm run validate:phase32`, `npm run smoke:phase32`, and `npm run validate:regression` before packaging.

## Phase 31 — Accessibility Standards

Phase 31 adds `registry/accessibility/` as the machine-readable accessibility authority for customer websites, Customer CMS, NEXT F Admin and the Contract Portal. It defines **44 canonical controls across 14 categories** covering semantic structure, headings and landmarks, forms/errors, keyboard/focus, dialogs/drawers/menus/tables, drag/drop alternatives, rich-text authoring, images/media alternatives, contrast/reflow/touch targets, reduced motion, status/live regions, filters/search, code/copy actions, charts, checkout and authentication.

Accessibility metadata cross-links existing CMS editor types, Blocks, primitive Fields, Commerce and Admin contracts rather than duplicating their business-data authority. `Standards -> Accessibility` provides a filterable control explorer, per-control evidence, surface coverage, portal-audit evidence and raw machine-readable JSON.

The Phase 31 Contract Portal audit contains **16 passing baseline checks**. Fourteen are deterministic static/source checks. The keyboard-path and reflow checks are explicit manual source-level reviews because the managed Chromium environment used for this release enforces `URLBlocklist=*` for localhost and `file://` URLs; the release therefore does **not** claim that interactive browser automation ran. Static checks do not constitute universal accessibility certification, and controls explicitly preserve manual keyboard, screen-reader, visual, content and reflow review where required.

Key sources include `standards/39-accessibility-standard.md`, `registry/accessibility/index.json`, `registry/accessibility/accessibility-control.schema.json`, `registry/accessibility/surface-mapping.json`, `registry/accessibility/portal-checklist.json`, `registry/accessibility/portal-audit.json`, and `js/generated-accessibility.js`.

Run `npm run generate:accessibility` and `npm run audit:accessibility` after changing authoritative Phase 31 metadata or portal evidence, then regenerate Changelog, Diff, Compatibility, Search and Relationships. Run `npm run validate:phase31`, `npm run smoke:phase31`, and `npm run validate:regression` before packaging.


## Phase 34 - Developer Validation CLI

Phase 34 adds the offline `nextf-contract` CLI for developers and Codex. The repository-local executable is `node bin/nextf-contract.mjs`; the package exposes the same `nextf-contract` binary for future/private package execution such as `npm exec --offline --package=. -- nextf-contract validate`.

Supported commands are `validate`, `validate manifest`, `inspect`, `compatibility`, `diff`, `help` and `version`. Manifest commands discover `./nextf.site.json` by default or accept an explicit path. The CLI never creates, mutates or silently upgrades a manifest and does not require network access.

Stable exit codes are `0` success, `1` validation error, `2` CLI/configuration error, `3` unsupported Contract Version and `4` internal tool error. Human-readable, JSON, concise and verbose output modes are available. `--json` is the preferred automation/Codex mode.

Browser and CLI validation share `js/manifest-validation-core.js` plus `registry/validation/index.json` / `js/generated-validation.js`. Phase 34 fixture parity verifies that the same manifest produces compatible validity, diagnostic codes, severities and JSON paths in both surfaces. The CLI also consumes authoritative deprecation and Compatibility evidence and exposes a read-only thin interface to existing Contract Diff data.

Run `npm run generate:validation` and `npm run generate:cli` after changing shared validation or CLI metadata. Run `npm run validate:phase34`, `npm run smoke:phase34`, and `npm run validate:regression` before packaging.

## Phase 33 - Browser Contract Validation

Phase 33 activates `Development -> Validation` and adds `registry/validation/` as the local deterministic validation authority for `nextf.site.json`. The browser validator supports pasted JSON, local `.json` files and all six Phase 22 reference manifests without uploading manifest content anywhere.

Validation runs in a fixed order: JSON parse, Site Manifest JSON Schema, Contract Version, Module existence and dependency closure, Capability ownership/reserved rules, API bindings, domain Events, tracking Events, Integration connectors, environments, configuration exposure, extensions and compatibility assessment. Diagnostics include severity, category, stable code, JSON path and relevant Registry guidance.

The implementation is shared with developer tooling through `js/manifest-validation-core.js` and the generated rule bundle `registry/validation/index.json`. Phase 34 now reuses these exact semantics in the Developer Validation CLI rather than forking a second validator. The browser validator never mutates input, auto-upgrades a Site or guesses unknown future Contract Versions.

Run `npm run generate:validation`, then regenerate Changelog, Diff, Compatibility, Search and Relationships after changing validation sources. Run `npm run validate:phase33`, `npm run smoke:phase33`, and `npm run validate:regression` before packaging.

## Phase 35 - Site Starter Contract Packs

V0.36.0 adds six framework-neutral customer Site bootstrap packs under `starters/`: Corporate, Service Business, Lead Generation, Ecommerce, Documentation and Custom Extension. Each pack pins `nextf.site.json` to the current Contract Version and includes AGENTS guidance, contract-resolution reporting, integration/environment notes, content/Event/tracking maps, permission/API/CMS/Admin expectations, extension guidance, validation commands and an acceptance checklist.

Use `npm run generate:starters` to regenerate the packs from the authoritative Phase 22 reference compositions. Use `npm run validate:phase35` and `npm run smoke:phase35` for Phase 35 acceptance. Starter packs are contract integration bootstraps, not visual themes or a claim that the NEXT F Site Runtime/SDK exists.


## Phase 36 / V0.37.0 Release Candidate

Registry Health is the current repository-wide QA authority. Run `npm run generate:health`, `npm run validate:phase36`, `npm run smoke:phase36`, and `npm run validate:regression` before claiming Release Candidate integrity. V0.37.0 is pre-V1 and does not claim that every consumer runtime is deployed. Environment-dependent checks must remain explicitly DEFERRED rather than fabricated as PASS.


## Phase 37 / V1.0.0 Production Acceptance

V1.0.0 is the first stable NEXT F Contract Registry release. Formal Production Acceptance is recorded in `registry/releases/1.0.0/acceptance-report.json`; the machine-readable release manifest is `registry/releases/1.0.0/release-manifest.json`; frozen V1 baselines and SHA-256 evidence live under `registry/releases/1.0.0/`.

V1 Registry stability is distinct from deployment of every consumer. Site Runtime/SDK, Customer CMS, NEXT F Admin and undeployed API runtimes remain `unknown` in the Compatibility Center where runtime evidence does not exist. Do not translate metadata/specification availability into a deployment claim.

For new Sites, pin Contract Version `1.0.0` explicitly. Existing Sites follow `pinned version -> Compatibility Center -> Contract Diff -> migration/review -> browser/CLI validation -> explicit pin change`. Floating `latest` remains invalid.

Run `npm run generate:release`, `npm run validate:phase37`, `npm run smoke:phase37`, and `npm run validate:regression` before packaging a V1 source release.
