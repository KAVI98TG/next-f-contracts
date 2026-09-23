# NEXT F First-Party Tracking Architecture Gap Audit

**Status:** Complete for implementation planning  
**Repository baseline:** NEXT F Contract Registry V1.3.0 / Phase 40  
**Task classification:** `contract-registry-change`  
**Source requirement:** `NEXT-F-FIRST-PARTY-ANALYTICS-PLATFORM-FULL-PLAN.md`  
**Audit date:** 2026-09-23

## 1. Decision

NEXT F already has a substantial canonical Marketing and Analytics foundation. The first-party tracking initiative must extend that foundation; it must not introduce a second tracking domain, a second event envelope, or a parallel analytics module.

The safe implementation direction is an additive release built around the existing `marketing.*` contracts, `analytics` and `marketing` Modules, `api.events` ingestion boundary, Phase 29 Security controls, Phase 30 Privacy handling, and the existing Customer CMS/NEXT F Admin profiles.

The Contracts repository defines the runtime contract but does not implement the high-volume collector, processing pipeline, event store, aggregation service, reporting service, or browser SDK runtime.

## 2. Existing canonical coverage

### Tracking and analytics contracts

The Phase 9 Marketing Registry already contains 43 stable definitions and 13 standard tracking events. Reusable first-party foundations include:

- `marketing.trackingEvent`: the canonical non-authoritative tracking observation envelope.
- `marketing.trackingEventDefinition` and `marketing.eventPropertyDefinition`: controlled event/property definitions.
- `marketing.eventContext`: page, session, visitor, device, acquisition, campaign, and consent composition.
- `marketing.sessionContext`: random first-party session identity, start/activity timestamps, landing page, and initial source.
- `marketing.visitorContext`: anonymous and controlled known-subject references with explicit anti-fingerprinting rules.
- `marketing.trackingConfiguration` and `marketing.trackingDataPolicy`: Site-level enablement, consent, retention, property allow/deny lists, and URL sanitization.
- `marketing.consentPolicy`, `marketing.consentState`, `marketing.consentPreference`, and `marketing.trackingConsentRecord`.
- `marketing.trafficSource`, `marketing.utmParameters`, `marketing.campaignContext`, `marketing.attributionTouchpoint`, `marketing.attributionModel`, and related attribution contracts.
- `marketing.conversionDefinition`, `marketing.conversionOccurrence`, and `marketing.conversionDeduplicationPolicy`.
- `marketing.analyticsConfiguration`, `marketing.metricDefinition`, `marketing.dimensionDefinition`, `marketing.analyticsObservation`, and `marketing.analyticsSnapshot`.

The current event vocabulary covers page views, CTA/contact actions, downloads, form start/submission, lead creation, site search, video engagement, and newsletter subscription.

### Module and capability coverage

The canonical `analytics` Module already defines:

- `analytics.measurement`
- `analytics.reporting`
- `analytics.attribution`
- `analytics.campaign-performance`

The canonical `marketing` Module already defines conversions, campaigns, UTM attribution, advertising click identifiers, and destinations. Both Modules depend on or recommend the existing `consent`, `core`, and `integrations` boundaries as appropriate.

The first-party platform must extend these Modules and capabilities. A new top-level `tracking` Module would duplicate existing authority.

### Site Manifest coverage

`manifest.siteManifest` already requires a `tracking` section through `manifest.trackingSupport`. It declares canonical tracking event keys and keeps those observations separate from Phase 13 Domain Events. Environments already distinguish development, preview, staging, and production.

The existing Manifest does not yet declare a tracking contract/envelope version, compatible SDK version/range, collector binding, consent mode, origin policy, retention policy reference, reporting visibility, or explicit tracking capability configuration.

### API coverage

`api.events.ingest-tracking` already defines a stable server-only, idempotent ingestion operation at `/api/v1/events/sites/{siteId}/tracking`. It binds `marketing.trackingEvent` and explicitly prohibits clients from asserting Domain Events.

`api.events.get-pipeline-health` provides a generic NEXT F Admin diagnostic endpoint, but returns only `api.health`; it is not a tracking-health contract.

There is no browser-public collector operation, batch ingestion request/receipt contract, bounded per-event rejection result, Customer CMS analytics reporting API, Admin analytics reporting API, or Site-scoped tracking-health response.

### Permissions and UI metadata

Canonical permissions already cover:

- `marketing.tracking.view|edit|manage`
- `marketing.analytics.view|export`
- `marketing.attribution.view|manage|export`
- conversion, campaign, consent, and destination operations
- internal diagnostics through `platform.diagnostics.view|manage`

Customer CMS and NEXT F Admin profiles already exist for marketing tracking, analytics, attribution, consent, conversions, campaigns, and destinations. Customer access is already fail-closed through the corresponding `customerAccess.policy.marketing.*` records.

The UI metadata should be extended only after the reporting and health contracts/APIs exist. Existing profiles must not be replaced.

### Security and privacy coverage

Phase 29 already provides reusable mandatory controls for tenant isolation, authentication, authorization, CORS, rate limiting, safe errors/logging, secret handling, input validation, audit, browser security, and environment separation.

Phase 30 explicitly covers the high-risk Marketing area and currently classifies selected fields on `marketing.trackingEvent`, `marketing.trackingConsentRecord`, and `marketing.sessionContext`. It also states that analytics consent is distinct from business-purpose consent, unknown optional consent is not granted, raw form payloads are prohibited, and hashed/pseudonymized data is not automatically anonymous.

New identity, collector, receipt, rejection, SDK, health, and reporting fields will require explicit field-handling records where their treatment is not already proven by an owning contract.

## 3. Gap matrix

| Requirement area | Current state | Disposition |
| --- | --- | --- |
| Tracking observation envelope | Covered by `marketing.trackingEvent` | Extend only where receipt time, environment, or SDK metadata cannot be represented through existing scope/context; do not replace it. |
| Domain Event separation | Covered in Marketing, Event API, and standards | Preserve and add validation fixtures for browser/server conversion correlation. |
| Event taxonomy | 13 canonical tracking events | Add only justified, privacy-reviewed event keys; use Phase 13 Domain Events for authoritative commerce facts. |
| Tenant/Site scope | Covered by `core.tenantScope` and Security | Reuse; collector must derive/validate scope rather than trusting arbitrary browser tenant input. |
| Environment isolation | Manifest environments exist; debug isolation exists | Add explicit collector/reporting environment semantics and validation. |
| Visitor identity lifecycle | Context exists; lifecycle policy absent | Add a policy contract for scope, storage, rotation, expiry, reset, deletion, and collision behavior. |
| Session lifecycle | Context and configurable timeout exist | Add a session policy/summary contract for continuation, expiry, end approximation, page count, engagement, and conversion linkage. |
| Attribution | Strong canonical coverage exists | Document/version the first-visit, current-session, and conversion attribution behavior using existing attribution contracts. |
| Consent | Strong canonical coverage exists | Bind collector acceptance/restriction outcomes to existing consent contracts; never create a parallel consent boolean. |
| Forms/leads | Canonical IDs and conversion contracts exist | Add safe examples and validation proving raw submissions are excluded. |
| Commerce | Domain Events and Commerce contracts exist | Map authoritative server facts to observations; client actions remain observations only. |
| Public browser ingestion | Missing | Add a public Site-identified, origin-restricted collector operation with no browser secret. |
| Server ingestion | Partially covered | Give the existing server operation an explicit body contract and receipt/error semantics without changing its authority boundary. |
| Batch/deduplication receipts | Missing | Add bounded batch, item result, rejection reason, and deduplication outcome contracts. |
| Abuse/bot classification | Missing as tracking semantics | Add bounded processing/classification vocabularies; do not claim a deployed detection runtime. |
| SDK contract | Missing | Add SDK manifest/specification and compatibility records, including non-blocking failure and bounded queue behavior. |
| Collector contract | Missing beyond one API operation | Add collector policy/configuration contracts for size/count/rate/origin/version limits and sanitization. |
| Storage/processing semantics | Partially covered by observations/snapshots | Add processing status and retention metadata only; do not prescribe a database engine. |
| Reporting APIs | Missing | Add tenant-scoped, read-only Customer CMS/Admin reporting operations bound to canonical aggregates. |
| Tracking health | Generic pipeline health only | Add a Site-scoped tracking-health contract and authorized CMS/Admin operations. |
| Manifest integration | Event list only | Extend manifest tracking support additively with SDK/collector/policy references and explicit enablement. |
| Compatibility | Contract release compatibility exists; SDK/collector compatibility absent | Add machine-readable SDK/collector compatibility without fabricating runtime support. |
| Migration | General lifecycle tooling exists | Add a tracking migration inventory/cutover model and reference guidance; do not rewrite third-party history. |
| Examples | Existing Site examples list tracking keys | Add the scenarios required by the source plan using real IDs only. |
| Validation | General registry/manifest validation exists | Add cross-registry checks for tracking IDs, property definitions, privacy eligibility, SDK compatibility, APIs, permissions, UI profiles, and examples. |

## 4. Canonical stop conditions and constraints

No hard stop blocks the Contracts audit. The following boundaries apply to implementation:

1. Do not create a new tracking event envelope while `marketing.trackingEvent` remains authoritative.
2. Do not turn browser observations into Phase 13 Domain Events.
3. Do not expose a shared collector secret in browser code.
4. Do not claim the SDK, collector, storage, aggregation, reporting runtime, or production deployment exists merely because contracts are published.
5. Do not invent universal legal retention durations or treat raw IP addresses as marketing identity.
6. Do not expand tracking into session replay, keystroke capture, fingerprinting, a generic tag manager, or a cross-customer identity graph.
7. Do not modify the stable V1.3.0 release snapshot. The implementation must be an additive future release with its own exact snapshot and lifecycle evidence.

## 5. Recommended release shape

Treat the first Contracts implementation as a new additive Registry phase and minor release. The exact target version must be selected when implementation begins and then propagated through authoritative sources, generated registries, Changelog, Diff, Compatibility, Search, Relationships, release snapshots, and validation.

The first release should establish the reusable contract foundation, not claim a complete runtime. Its minimum coherent scope is:

1. first-party tracking architecture standard and ADR-level decisions;
2. additive `marketing.*` identity/session/collector/SDK/receipt/health/reporting contracts;
3. browser-public and server ingestion API contracts;
4. read-only analytics reporting and tracking-health APIs;
5. additive Manifest tracking configuration;
6. capability, permission, privacy, security, CMS/Admin, compatibility, and migration bindings;
7. validators and real-ID examples;
8. coordinated release/changelog/diff/compatibility evidence.

Runtime SDK, collector, storage, processor, aggregation service, reporting service, and pilot deployment remain subsequent implementation projects that consume the published contracts.

## 6. Verification evidence

Baseline command executed before changes:

```text
npm run validate
```

Result:

```text
NEXT F Contracts Phase 40 validation
Version: 1.3.0
Passes: 340
Failures: 0
PASS - V1.3.0 Software canonical contracts are complete.
```

No runtime, browser, deployment, accessibility, privacy-legal, or production analytics verification is claimed by this audit.
