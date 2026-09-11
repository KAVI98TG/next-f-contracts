# Codex Brief - Ecommerce Website Reference

## Authority

Use NEXT F Contracts **V0.23.0** and read the repository-level `AGENTS.md` first.

## Read in this order

1. `nextf.site.json`
2. `CONTRACT-MAP.json`
3. `CMS-MAP.json`
4. `ACCEPTANCE-CHECKLIST.md`
5. Canonical contract sources referenced by the map

## Implementation instruction

Build the customer-specific Ecommerce Website Reference presentation against NEXT F Contracts 0.23.0. Treat the example as a reference contract composition, not a visual template. Reuse the exact Manifest, Module, Schema, API, Permission, Event, Webhook and Integration identifiers. Do not invent parallel NEXT F architecture. Report deviations and missing canonical coverage before implementing those paths.

## Required report

- contractVersion
- modulesImplemented
- capabilitiesImplemented
- contractsConsumed
- apiBindingsUsed
- permissionsUsed
- eventsEmitted
- integrationsConfigured
- extensions
- deviations
- verificationEvidence

## Stop conditions

Follow Phase 21 stop conditions. If a required shared schema, API operation, Permission, Event or Connector does not exist, stop that affected path and create a Contract Extension Proposal instead of inventing a parallel architecture.
