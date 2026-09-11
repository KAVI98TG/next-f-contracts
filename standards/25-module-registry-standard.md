# NEXT F Module Registry Standard

## 1. Purpose

The Module Registry is the authoritative catalog of functional modules and module-scoped capabilities available to a NEXT F Site. It binds Site Manifests to reusable contracts, permissions, events, Customer CMS navigation and NEXT F Admin navigation.

## 2. Authority

`registry/modules/index.json` and the canonical module/capability definition files are authoritative. Site code, CMS code and Codex instructions must not invent module or capability IDs.

## 3. Module identity

Module IDs are stable lowercase identifiers. Capability IDs use `module.capability` notation and are owned by exactly one module.

Capability definition registry IDs use `modules.capability.<capabilityId>` so capability definitions cannot collide with data-schema or connector contract IDs. The canonical selectable capability identifier remains the `capabilityId` value such as `seo.metadata` or `commerce.checkout`.

## 4. Manifest behavior

A Site Manifest may enable only registered modules. Enabled capabilities must belong to the selected module. Required dependencies must also be enabled. Unknown modules/capabilities are invalid. Duplicate module or capability selections are invalid.

## 5. Dependency kinds

- `required`: the dependency must be enabled.
- `recommended`: the normal implementation should enable it unless requirements justify omission.
- `optional`: no dependency requirement.
- `conditional`: required only when the documented condition is true.

Required dependency cycles are prohibited.

## 6. Capability modes

- `always-on`: part of the module baseline and cannot be disabled while the module is enabled.
- `default-on`: enabled by default but may be disabled when allowed.
- `optional`: enabled only by explicit selection.

A capability cannot weaken the security, privacy, permission, Commerce Rule or event requirements of its parent module.

## 7. CMS and Admin navigation

Module navigation metadata describes where module functions belong. It is navigation metadata, not authorization. Server-side permission checks remain mandatory. Customer CMS navigation and NEXT F Admin navigation are distinct surfaces.

## 8. Contract bindings

A module declares the canonical contracts it owns or composes. The bindings do not copy those contracts. Their source registries remain authoritative.

## 9. Permission bindings

Permission bindings identify canonical permissions relevant to the module. Role membership is not defined by the Module Registry.

## 10. Event bindings

Event bindings identify canonical domain events relevant to the module. The Event Registry remains authoritative for payloads and semantics. Tracking observations remain separate from authoritative domain events.

## 11. Integrations

Provider connectors are capabilities of the Integrations module. Customer websites must not introduce provider-specific integration architecture when a canonical connector exists.

## 12. Consent

Analytics/marketing and consent-sensitive connectors must use the Consent module when required by their data behavior. A runtime consent layer exists on every integrated Site, but enabling a consent-sensitive module still requires its canonical consent policies.

## 13. Commerce

Commerce capabilities do not bypass Phase 12 Commerce Rules. Capabilities without complete contracts such as subscriptions, bookings, gift cards, marketplace and preorders remain reserved and unselectable.

## 14. Hosting independence

No module may turn NEXT F into a hosting reseller or domain registrar. Technical URLs and deployment adapters remain provider-neutral references.

## 15. Extension rule

A Site-specific capability not represented by the registry requires an explicit namespaced Contract Extension Proposal. It must not use a canonical module namespace unless accepted into the registry.

## 16. Compatibility

Stable module/capability IDs are versioned contracts. Renaming/removing them or changing required dependency semantics is potentially breaking. Customer Sites remain pinned to an exact Contract Version.
