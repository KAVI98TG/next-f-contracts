# NEXT F Contracts Phase 35 Acceptance

## Release

- Phase: 35
- Title: Site Starter Contract Pack
- Version: V0.36.0
- Status: PASS
- Production Registry stability: not yet claimed; reserved for Phase 37 / V1.0.0
- Site Runtime/SDK production support: not claimed

## Implemented

Phase 35 adds six framework-neutral customer Site bootstrap packs:

1. Corporate
2. Service Business
3. Lead Generation
4. Ecommerce
5. Documentation
6. Custom Extension

Each pack contains 16 required artifacts:

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

The packs are generated from the six authoritative Phase 22 reference compositions while their Site Manifests pin the current V0.36.0 Contract Version. Phase 22 examples remain historical references and are not rewritten as V0.36.0 examples.

## Special starter safeguards

### Ecommerce

- Canonical `commerce` Module is explicit.
- Required `core` and `media` dependencies are explicit.
- Product -> Variant -> Inventory -> Cart -> Checkout -> Order -> Payment -> Fulfillment -> Refund/Return boundaries are preserved.
- Browser totals are non-authoritative.
- Provider tokenization/server reconciliation boundaries remain explicit.
- PAN/CVV storage is prohibited.
- Commerce Domain Events stay distinct from marketing observations.
- Consent, SEO, Customer CMS and NEXT F Admin boundaries are documented.

### Lead Generation

- Form -> Submission -> Lead separation is explicit.
- Conversion mappings remain canonical.
- Analytics/tracking is consent-aware and distinct from Domain Events.
- CRM and Webhook integration points remain provider/transport boundaries.

### Custom Extension

- Canonical contracts must be reused first.
- Extensions require a collision-safe namespace.
- Canonical NEXT F identifiers may not be overridden or shadowed.
- Extension reason and validation evidence must be reported.

## Portal and discovery

- `Development -> Starter Packs` is available.
- Starter loading is lazy and supports authoritative JSON plus generated `file://` fallback.
- Global Search indexes starter Registry objects.
- Relationship Explorer indexes starter objects and explicit reference/module relationships.
- V0.36.0 is present in Changelog, Contract Diff and Compatibility Center.

## Validation

### Phase 35 validator

- Passes: 286
- Failures: 0
- Starter packs: 6
- CLI-valid starter manifests: 6
- JSON files checked: 2041

Evidence: `checks/phase-35-validation.txt`

### Phase 35 smoke

- Passes: 31
- Failures: 0

Evidence: `checks/phase-35-smoke.txt`

### Forward regression

- Passes: 2444
- Failures: 0
- Phase smoke coverage: Phases 23 through 35
- JSON files checked by aggregate gate: 2038
- JavaScript/ES module files checked: 202

Evidence: `checks/current-regression.txt`

The forward regression runner executes the same Phase 23-35 smoke set concurrently to avoid serial execution timeout. No phase was removed from the gate.

## Release metrics

- Registry items: 2170
- Search documents: 7242
- Relationship nodes: 2170
- Relationship edges: 7505
- Changelog releases: 36
- Changelog entries: 584
- Exact Diff releases: 31
- Compatibility target: V0.36.0
- Starter packs: 6
- Files per starter: 16

## Integrity

- Registry SHA-256: `3eb15d5fd7b08f336af1a1d63d45c3ef765f2914e15dbba64e4440e2d17702ba`
- V0.36.0 exact Diff Registry SHA-256: `3eb15d5fd7b08f336af1a1d63d45c3ef765f2914e15dbba64e4440e2d17702ba`
- Registry/Diff SHA equality: PASS

## Important boundaries

- Starter packs are contract integration bootstraps, not visual themes.
- No frontend framework is forced.
- No production Site Runtime/SDK is claimed.
- No hosting/domain-resale capability is introduced.
- No secret belongs in a Site Manifest, browser bundle or committed environment example.
- Existing Sites are not silently upgraded to V0.36.0.
- Public npm publishing remains outside the V1 Registry completion scope.

## Acceptance result

PASS. Phase 35 / V0.36.0 satisfies the Site Starter Contract Pack acceptance model. Phase 36 has not been started.
