# NEXT F Site Starter Contract Pack Standard

**Phase:** 35  
**Introduced:** V0.36.0  
**Status:** Stable registry standard

## Purpose

Site Starter Contract Packs are reusable, framework-neutral bootstrap packages for new NEXT F customer Sites. They are not themes, page builders, hosting packages or runtime SDKs. Their job is to give a developer or Codex an explicit contract starting point without requiring NEXT F architecture to be explained again.

## Authority

A starter pack is derived from an existing Phase 22 reference composition and the current Contract Registry. The current `nextf.site.json` inside the starter pins the current Contract Version. Canonical contracts, Modules, Capabilities, APIs, Events, permissions, CMS/Admin metadata and integration rules remain authoritative in their own registries.

## Required starter types

- Corporate
- Service Business
- Lead Generation
- Ecommerce
- Documentation
- Custom Extension

## Required contents

Every starter includes:

- `nextf.site.json`
- `AGENTS.md`
- `README.md`
- `CONTRACT-RESOLUTION-SUMMARY.md`
- `INTEGRATION-ARCHITECTURE.md`
- `.env.example`
- `CONTENT-CONTRACT-MAP.json`
- `EVENT-MAP.json`
- `TRACKING-EVENT-MAP.json`
- `PERMISSION-EXPECTATIONS.md`
- `API-BINDINGS.md`
- `CMS-MAPPING.json`
- `ADMIN-MAPPING.json`
- `EXTENSIONS.md`
- `VALIDATION.md`
- `ACCEPTANCE-CHECKLIST.md`

## Contract-first rules

1. Read `AGENTS.md` and `nextf.site.json` first.
2. Resolve the exact pinned NEXT F Contract Version before implementation.
3. Use only enabled Modules and Capabilities.
4. Reuse canonical contracts; do not fork them into project-local replacements.
5. Keep Domain Events distinct from tracking observations.
6. Keep Form Submission distinct from Lead.
7. Keep secrets out of `nextf.site.json`, browser bundles and committed environment examples.
8. Treat Customer CMS and NEXT F Admin mappings as declarative integration expectations, not runtime implementations.
9. Run NEXT F validation before claiming compliance.
10. Existing Sites remain explicitly pinned and are never silently upgraded to `latest`.

## Framework neutrality

Starter packs do not require React, Vue, Angular, Svelte or any other frontend framework. A customer implementation may select its framework separately as long as the integration obeys the pinned contracts.

## Runtime boundary

The starter pack does not claim that a production NEXT F Site Runtime/SDK exists. Any helper code added by a customer project must be scoped and named accurately and must not be represented as a platform runtime unless that runtime is separately released and validated.

## Ecommerce starter requirements

The Ecommerce pack must preserve Product, Variant, Inventory, Cart, Checkout, Order, Payment, Fulfillment and Refund/Return boundaries; use the Commerce Module with required `core` and `media` dependencies; keep browser totals non-authoritative; preserve provider tokenization and server reconciliation; reference Commerce Events, tracking/consent/SEO, CMS/Admin mappings and transaction safety rules.

## Lead-generation starter requirements

The Lead Generation pack must preserve Form -> Submission -> Lead separation, conversion mappings, analytics/tracking consent, marketing integrations, canonical Events and CRM/Webhook extension points.

## Custom Extension starter requirements

The Custom Extension pack must demonstrate namespaced extension work. Custom collections/Blocks/capabilities must not override canonical IDs. Missing canonical coverage must be reported before an extension is introduced.

## Codex bootstrap instruction

> Read `AGENTS.md` and `nextf.site.json`, resolve the pinned NEXT F Contract Version, use only enabled Modules/Capabilities, reuse canonical contracts, run NEXT F validation before completion, and report deviations.
