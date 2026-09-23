# NEXT F First-Party Tracking Contracts Implementation Plan

**Status:** Ready for staged implementation  
**Task classification:** `contract-registry-change`  
**Baseline:** V1.3.0 / Phase 40  
**Audit:** `developer/FIRST-PARTY-TRACKING-ARCHITECTURE-GAP-AUDIT.md`

## Outcome

Publish an additive, provider-independent first-party tracking contract foundation by extending the existing Marketing/Analytics architecture. The release will define how browser and server consumers communicate with a future NEXT F-controlled SDK, collector, processing pipeline, reporting service, and health surface without claiming those runtimes are deployed.

## Change boundary

In scope:

- canonical contracts, vocabularies, and standards;
- Module/capability bindings;
- Site Manifest declarations;
- API operations and authorization metadata;
- Permissions where existing actions cannot represent a protected operation;
- Security and Privacy mappings;
- Customer CMS and NEXT F Admin metadata;
- compatibility, migration, validation, examples, generated indexes, and release evidence.

Out of scope:

- production SDK or collector implementation;
- database/storage engine selection;
- deployment or customer rollout;
- third-party analytics adapters;
- session replay, fingerprinting, tag management, or cross-customer identity;
- removal of existing analytics providers from any Site.

## Implementation stages

### Stage 1 — Architecture authority

- Add the first-party tracking architecture standard.
- Record decisions for observation/domain-event separation, identity scope, session rules, attribution, browser/server authentication, retention/aggregation boundary, tenant isolation, and SDK compatibility.
- Cross-link existing canonical contracts instead of copying their fields.

Acceptance: documentation names the authoritative existing IDs, makes runtime non-claims explicit, and introduces no duplicate contract authority.

### Stage 2 — Core contract extensions

- Add policy/configuration contracts for visitor identity lifecycle and session lifecycle.
- Add SDK descriptor and SDK/collector compatibility contracts.
- Add collector policy, ingestion batch, item result, rejection reason, receipt, processing status, and tracking-health contracts.
- Add reporting query/result contracts only where existing analytics observations/snapshots are insufficient.

Acceptance: every new field has purpose, type, validation, classification path, retention/redaction behavior, and explicit relationships.

### Stage 3 — Registry bindings

- Extend existing `analytics` and `marketing` Modules/capabilities.
- Extend `manifest.trackingSupport` additively.
- Add browser-public and server ingestion bindings.
- Add Customer CMS/Admin reporting and health read operations.
- Reuse existing permissions unless a genuinely new protected action requires a canonical permission.

Acceptance: all IDs resolve; public collection uses Site identity plus origin/rate/abuse controls and never embeds a secret.

### Stage 4 — Security, privacy, compatibility, and migration

- Map mandatory Security controls.
- Add field-level Privacy handling for new high-risk fields.
- Publish SDK/collector/contract compatibility as known evidence or `unknown`.
- Define tracking migration inventory, parallel validation, cutover, verification, and legacy-removal requirements.

Acceptance: secret fields are never analytics eligible; optional tracking is consent-gated; retention is policy-based; unsupported compatibility is never guessed.

### Stage 5 — UI metadata, examples, and validation

- Extend existing Customer CMS and Admin analytics/tracking profiles.
- Add the required real-ID examples for Site types, consent states, browser/server events, deduplication, staging, disabled tracking, forms, campaigns, SPA navigation, and Commerce authority boundaries.
- Add deterministic validators for references, namespaces, classifications, property definitions, compatibility, APIs, permissions, UI metadata, and examples.

Acceptance: examples validate and customer access remains the intersection of capability, entitlement, permission, scope, resource, field, Security, and Privacy gates.

### Stage 6 — Coordinated release

- Select the exact additive target version.
- Update authoritative release notes and VERSION.
- Regenerate affected registries, Search, Relationships, Diff, Compatibility, Changelog, and portal fallbacks.
- Create an immutable release snapshot.
- Run phase-specific validation, smoke tests, performance audit where generated portal payloads change, full validation, and current regression validation.

Acceptance: all required checks pass, or failures/unrun checks are explicitly reported; no runtime/deployment claim is made.

## Verification plan

At minimum:

```text
npm run generate:<tracking-phase>
npm run validate:<tracking-phase>
npm run smoke:<tracking-phase>
npm run audit:performance
npm run validate
npm run validate:regression
node bin/nextf-contract.mjs validate <each changed example/fixture nextf.site.json> --json
```

Additional validation must cover public collector origin/limit semantics, server idempotency, duplicate item handling, consent-denied behavior, environment isolation, private-field rejection, unknown SDK/contract compatibility, permission resolution, and fail-closed Customer Access.

## Migration and recovery

This phase is additive and must not mutate V1.3.0 snapshots. Generated outputs are recoverable by rerunning their authoritative generators. Any later Site upgrade remains explicit and requires exact source-to-target Diff and Compatibility review. Existing third-party tracking remains in place until a consuming runtime has equivalent behavior and a verified cutover plan.

## Known risks

- Extending the stable `marketing.trackingEvent` shape may be unnecessary if receipt/environment/SDK data can live in collector-only records; prefer composition over mutation.
- A public ingestion operation needs stronger CORS/origin/abuse metadata than existing server APIs.
- Reporting dimensions can create privacy and high-cardinality risks.
- A tracking health UI can accidentally expose internal infrastructure or raw rejected payloads; expose bounded diagnostics only.
- Release artifact regeneration spans many registries and must be performed from authoritative sources in dependency order.
