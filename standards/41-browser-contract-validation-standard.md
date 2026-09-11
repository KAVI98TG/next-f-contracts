# NEXT F Browser Contract Validation Standard

**Phase:** 33  
**Target release:** V0.34.0

## Authority

The browser validator validates `nextf.site.json` locally against the authoritative Site Manifest schema and generated rule data derived from the canonical Module, Capability, API, Event, Tracking, Integration and Compatibility registries. Validation never mutates or upgrades the submitted manifest.

## Privacy

Pasted and selected manifest content stays in the browser. The validator sends no manifest data to analytics, external APIs, search services or third-party providers.

## Deterministic validation order

1. JSON parse.
2. Site Manifest JSON Schema.
3. Contract Version existence/support.
4. Module existence.
5. Required Module dependency closure.
6. Capability ownership.
7. Capability enablement and reserved-capability rules.
8. API binding existence/version compatibility.
9. Domain Event existence.
10. Tracking Event existence.
11. Integration connector existence.
12. Environment references.
13. Secret/public configuration restrictions.
14. Extension namespace/source rules.
15. Compatibility assessment summary.

## Result semantics

A manifest is valid when JSON parsing, JSON Schema and all semantic error-level rules pass. Warnings and informational findings do not change validity. Unsupported or unknown future Contract Versions are errors and are never guessed. Historical versions may validate structurally while still carrying compatibility review warnings.

## Shared-core rule

`js/manifest-validation-core.js` contains the deterministic validation logic. Phase 33 browser validation and the Phase 34 CLI must reuse the same rule bundle/model rather than maintaining independent validation semantics.

## No automatic semantic upgrades

The validator may explain deterministic corrections but does not silently rewrite Modules, Capabilities, API bindings, Events, Integrations, environments, Contract Version or extension semantics.
