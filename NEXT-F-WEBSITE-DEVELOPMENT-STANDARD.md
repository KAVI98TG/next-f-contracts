# NEXT F Website Development Standard

This is the short human entry point for building or modifying a NEXT F-integrated customer website with Codex.

## Required order

1. Read `AGENTS.md`.
2. Read and validate `nextf.site.json` when present.
3. Resolve the pinned NEXT F Contract Version.
4. Resolve Modules and Capabilities.
5. Resolve applicable canonical contracts, API operations, Permissions, Events, Webhooks, Integrations and CMS/Admin metadata.
6. Plan the smallest compatible change.
7. Implement without inventing parallel NEXT F architecture.
8. Run relevant project verification.
9. Report extensions, deviations and unrun checks.
10. Produce the implementation report.

## Authoritative detailed standard

See `standards/29-codex-development-standard.md`.

## Permanent project rule

A customer project's visual design may be unique. Shared website-management architecture must reuse NEXT F Contracts whenever canonical coverage exists.


## Contract Version Upgrade Diff Gate

Before changing a production Site's pinned Contract Version:

1. select the exact current and target Registry releases in the Contract Diff system
2. review added, removed and modified canonical items
3. review field, relationship, Permission, Event and validation changes affecting enabled Modules/Capabilities
4. treat `breaking`, `potentially-breaking` and `review-required` results as explicit implementation-plan work
5. prepare migration guidance where required
6. run the relevant contract and Site validation after implementation
7. update the Site Manifest only after the upgrade is intentionally accepted

Contract Diff output never authorizes an automatic upgrade.


## Compatibility Center

Before changing a Site Contract Version, Codex must inspect `#/lifecycle/compatibility` and the exact Contract Diff for source -> target. Compatibility must not be claimed when a required dimension is unknown, when exact history is unavailable, or when migration/review findings remain unresolved. The Compatibility Center does not execute migrations or deployments.


## Release-change review

Before changing an existing Site's pinned Contract Version, review the target Changelog release, exact Contract Diff where available, Compatibility Center findings, and any migration/deprecation guidance. A release note is narrative evidence and cannot by itself approve an upgrade.


## Deprecation and lifecycle review (Phase 28)

Before using a deprecated contract, field, Event, Permission, API, capability, Module or other canonical definition, inspect its authoritative deprecation record. New work should use the canonical replacement when one exists. Existing Sites must not be silently upgraded; prepare a migration plan, inspect exact Diff and Compatibility evidence, run validation, and obtain the explicit upgrade decision required by the Site workflow.

The only canonical lifecycle states are `experimental`, `draft`, `stable`, `deprecated`, and `removed`. Do not invent domain-specific equivalents. Missing support dates, removal targets, replacements or migration evidence remain unknown rather than inferred.

## Security Standards (Phase 29)

All NEXT F implementations must resolve applicable controls from `registry/security/` before completion. Security requirements remain cross-domain constraints and must not be weakened by frontend convenience, provider-specific behavior or CMS configurability. Evidence should match each control's `verificationMethods` and `evidenceTypes`.

## Privacy and Data Classification (Phase 30)

All NEXT F implementations handling classified data must resolve the applicable metadata from `registry/privacy/`. Use the canonical primary classes `public`, `internal`, `personal`, `sensitive` and `secret`; use financial/authentication/tracking/content/system-metadata only as qualifiers.

Do not treat absence of metadata as permission to expose, log or track a value. Preserve data minimization, purpose limitation, consent separation, retention policy, redaction and Security constraints. Optional analytics/marketing consent does not replace the business purpose for a Form/Lead workflow, and business-purpose processing does not silently grant optional analytics/advertising dispatch.

Secret values are never public, analytics, ordinary-log, Event or Webhook payload data. Hashed/pseudonymized personal data remains personal unless a separate authoritative anonymization process proves otherwise. Future privacy-operation primitives must not be described as deployed workflows without runtime evidence.


## Accessibility Standards (Phase 31)

Before completing customer-site, Customer CMS or NEXT F Admin UI work, resolve applicable controls from `registry/accessibility/` and `standards/39-accessibility-standard.md`. Use semantic HTML and native interactions first; provide accessible names, labels, descriptions and error associations; preserve complete keyboard operation and visible focus; manage focus for dialogs/drawers; provide non-pointer alternatives to drag/drop; support image/media alternatives; maintain contrast, zoom/reflow, touch-target and reduced-motion behavior; and ensure status/loading/error feedback is programmatically available and not communicated by color alone.

Accessibility authoring requirements such as `altText`, accessible labels, heading constraints, keyboard alternatives and caption/transcript references should attach to the appropriate canonical CMS/Block/Field metadata without embedding unrelated visual implementation detail into business contracts.

Automated/static checks are evidence only. Manual keyboard, assistive-technology, visual, content, contrast and reflow reviews remain mandatory where the applicable control declares them. Never report an accessibility review or certification that was not actually performed.


## Performance Standards (Phase 32)

NEXT F implementations must treat performance as an explicit architecture constraint. Keep HTML/CSS/JavaScript and data payloads bounded, lazy-load route-only heavy features, paginate unbounded collections, and avoid request waterfalls or duplicated provider runtimes.

Public versioned content may use cache-friendly delivery, but authenticated, tenant-specific and permission-filtered responses must preserve safe cache variation and must never weaken authorization or privacy boundaries.

Images should be compressed for rendered use, use responsive delivery when viewport needs differ, prefer efficient modern formats where appropriate, and lazy-load only non-critical media. Font loading must avoid unnecessary weights and preloads.

Optional analytics, advertising and integration scripts must be non-blocking, consent-aware where required, enabled only when configured, and isolated so provider failure does not break primary content or unrelated core flows.

Global Search and Relationship Explorer rendering must remain bounded. Contract Diff history must remain route-lazy. Large raw JSON and tables must not be rendered unbounded when pagination, filtering, collapsing or explicit detail loading can avoid unnecessary DOM and memory cost.

Use Core Web Vitals as measured user-experience guidance only. Static repository checks do not prove LCP, INP or CLS, and NEXT F does not guarantee search ranking from performance scores.

## Browser Contract Validation Standard (Phase 33)

Every NEXT F Site repository should validate its pinned `nextf.site.json` against the authoritative Site Manifest schema and shared validation rule data before completion. Validation must be deterministic, non-mutating and explicit about unsupported versions, Module dependencies, Capability ownership, API/Event/Integration references, configuration exposure and compatibility status.

Browser validation must execute locally and must not upload manifest contents. A validator may provide deterministic correction guidance, but it must not silently change contract semantics or advance the Site to another Contract Version. Browser and CLI validation must share one rule model so their conclusions remain compatible for identical fixtures.


## Developer Validation CLI (Phase 34)

Before completion, run the NEXT F Developer Validation CLI against `nextf.site.json` when the manifest is present:

```text
nextf-contract validate --json
```

For the current repository-local/private package, the equivalent is:

```text
node bin/nextf-contract.mjs validate --json
```

The CLI is offline and reuses the same validation core and generated rule bundle as the Phase 33 browser validator. It must not create or mutate the manifest, guess an unknown Contract Version, or silently upgrade a Site.

Interpret stable exit codes as follows: `0` valid, `1` validation errors, `2` CLI/configuration error, `3` unsupported Contract Version, `4` internal tool failure. Record the command, CLI/Registry version, exit code, warnings and errors in the implementation report.

Use `inspect` for a compact manifest declaration summary, `compatibility` for the pinned release evidence, and `diff` as a read-only interface to existing Diff history. These commands do not authorize an upgrade or deployment.

## Site Starter Contract Packs

For new customer Sites, prefer the closest Phase 35 starter pack as the contract bootstrap. The starter pack is framework-neutral and does not determine visual design. Keep its `nextf.site.json` explicitly pinned, preserve its Module/Capability/API/Event/Integration boundaries, document extensions/deviations, and record CLI validation evidence before completion. Existing Sites are not automatically migrated to the latest starter or Contract Version.


## Phase 36 / V0.37.0 Release Candidate

Registry Health is the current repository-wide QA authority. Run `npm run generate:health`, `npm run validate:phase36`, `npm run smoke:phase36`, and `npm run validate:regression` before claiming Release Candidate integrity. V0.37.0 is pre-V1 and does not claim that every consumer runtime is deployed. Environment-dependent checks must remain explicitly DEFERRED rather than fabricated as PASS.


## V1.0.0 Production Contract Baseline

The NEXT F Contract Registry is production-stable at V1.0.0 after Phase 37 Production Acceptance. New customer Sites should pin `1.0.0` unless an explicitly supported later release is intentionally selected. Existing Sites must not silently follow a newer release.

Post-V1 release behavior follows SemVer: major for breaking stable-contract change, minor for backward-compatible additions/deprecations, patch for backward-compatible fixes/documentation/tooling corrections. Support windows are explicit and are not inferred from SemVer alone.

The required upgrade flow is: current pin -> Compatibility Center -> exact Contract Diff -> migration/review plan -> NEXT F browser/CLI validation -> explicit Site Manifest pin update. Missing historical or runtime evidence remains unknown.

Contract Registry production stability is independent of deployment state for Site Runtime/SDK, Customer CMS, NEXT F Admin and API runtimes. Never claim those runtimes are production-supported solely because their contracts/metadata are stable.
