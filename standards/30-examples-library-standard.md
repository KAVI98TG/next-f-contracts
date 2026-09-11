# NEXT F Reference Examples Library Standard

## Purpose

The Examples Library converts canonical NEXT F contracts into complete, reviewable Site compositions for common customer website classes.

Examples exist to answer one development question precisely:

> Which existing NEXT F contracts, Modules, Capabilities, APIs, Permissions, Events, integrations and CMS/Admin surfaces should a developer or Codex use for this type of Site?

They are not visual templates, themes, starter branding or permission to bypass canonical contracts.

## Authority

Authority remains:

1. canonical machine-readable contract source
2. canonical NEXT F standard
3. Site Manifest
4. Example definition / bundle
5. tutorial prose

An Example cannot redefine the meaning of a canonical contract.

## Required Example Bundle

Every stable reference example contains:

- a current `nextf.site.json`
- `CONTRACT-MAP.json`
- `CMS-MAP.json`
- `CODEX-BRIEF.md`
- `ACCEPTANCE-CHECKLIST.md`
- a human `README.md`
- one machine-readable Example Definition in the registry

## Required composition coverage

A stable Example Definition must identify:

- Site type and intent
- primary business outcomes
- enabled Modules
- effective Capabilities
- canonical contract map
- API bindings
- canonical domain Events
- marketing/tracking Events
- integration Connectors
- reference roles and permission universe
- Customer CMS navigation
- NEXT F Admin navigation
- page/content blueprint
- Block palette
- end-to-end data flows
- security and ownership boundaries
- anti-patterns
- acceptance criteria
- Codex handoff rules

## Current examples

Phase 22 publishes six stable references:

- Corporate Website
- Service Business Website
- Lead Generation Website
- Ecommerce Website
- Documentation Website
- Custom Website Extension

## Exact current version

New Phase 22 reference manifests pin NEXT F Contract Registry **0.23.0**.

Examples must never use `latest`, `*`, semver ranges or another floating contract selector.

## Dependency resolution

Examples declare functional Modules through the Site Manifest. Required Module dependencies are resolved before the example is considered valid.

An Example may explicitly select additional Capabilities. Module defaults remain part of the effective capability set unless the Module contract states otherwise.

Reserved/unsupported Capabilities are prohibited from stable examples.

## CMS and Admin separation

Customer CMS navigation is derived from enabled Modules and later filtered by the Organization User's canonical permissions.

NEXT F Admin navigation represents internal operational/diagnostic surfaces and never grants customer authority.

An Example cannot use shared UI visibility as an authorization mechanism.

## Events

Examples distinguish:

- authoritative Phase 13 domain Events
- Phase 9 marketing/tracking observations
- Phase 14 Webhook delivery

These concepts must not be collapsed.

## Integrations

An Example can mark Connectors as required or optional for the reference composition.

An Integration entry means the architecture supports/configures the Connector. It does not mean NEXT F owns the customer's external account.

Secrets are never stored in Example bundles.

## Commerce

The Ecommerce reference is subject to all Phase 11 schemas and Phase 12 Commerce Rules.

The browser is never authoritative for price, inventory, tax, discount, payment, refund or fulfillment state.

Examples cannot activate reserved Commerce capabilities such as subscriptions, bookings, gift cards, marketplaces or preorders until dedicated canonical contracts exist.

## Custom Site rule

`custom` is not an escape hatch.

A custom Site reuses canonical contracts first. Missing reusable behavior follows the Phase 21 Contract Extension Proposal path. Project-specific contracts are namespaced and may never override canonical machine meanings.

## Visual design

Examples define data and operational composition, not visual presentation.

Codex remains free to implement customer-specific branding, layouts, components, interaction and conversion design while respecting the contract boundary.

## Hosting/domain boundary

Examples may contain a `primaryUrl` or environment URL for technical routing, canonical/SEO and runtime purposes.

This does not make NEXT F a domain registrar or hosting provider.

## Acceptance

A stable Example is accepted only when:

- its Manifest validates structurally
- referenced Modules/Capabilities exist
- required dependencies resolve
- referenced schemas/Permissions/Events/Connectors/API groups exist
- no reserved capability is enabled
- bundle files exist
- machine IDs are unique
- generated browser fallback matches the authoritative Examples index
- the portal can browse and inspect every example
- previous Contract Registry relationships remain valid
