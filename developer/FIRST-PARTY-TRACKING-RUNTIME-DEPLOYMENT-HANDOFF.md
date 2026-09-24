# First-Party Tracking Runtime Deployment Handoff

**Status:** Production runtime deployed; main Site activation pending  
**Contract authority:** NEXT F Contract Registry V1.4.0 / Phase 41  
**Runtime implementation:** NEXT F CMS V1.0.63  
**Deployment date:** 2026-09-24  
**Environment:** Cloudflare production

## Purpose

This record connects the immutable V1.4.0 tracking contracts to the first verified runtime consumer. It is operational evidence, not a retroactive rewrite of the V1.4.0 release snapshot.

## Implemented runtime

- Browser collector: `POST https://tracking.nextf.lk/tracking/browser`.
- Authenticated server collector: `POST https://tracking.nextf.lk/tracking/batch`.
- Browser SDK: `GET https://tracking.nextf.lk/sdk/v1/nextf-tracking.js`.
- Health surface: `GET https://tracking.nextf.lk/health`.
- Cloudflare Worker: `nextf-cms-api`.
- Deployed Worker version: `f1fe714b-35a7-4ea9-aebe-c1f24d4e97bc`.
- Production D1: `nextf-cms-production`.
- Event Queue: `nextf-tracking-production-events`.
- Dead-letter Queue: `nextf-tracking-production-events-dlq`.
- Analytics Engine dataset: `nextf_tracking_production`.
- Required server secret: `TRACKING_SERVER_TOKEN`, stored as a Cloudflare Worker secret and never placed in source, browser code or deployment logs.
- CMS reporting operations: `staff.marketing.analytics.report.get` and `staff.marketing.tracking.health.get`.
- Canonical permissions: `marketing.analytics.view` and `marketing.tracking.view`.

## Contract mapping

The runtime consumes the V1.4.0 `marketing.trackingEvent` observation envelope, ingestion receipt/health/reporting contracts, canonical tracking vocabulary, Site/environment isolation, consent rules, privacy classifications and permission boundaries. Tracking observations remain non-authoritative measurement evidence and cannot assert Orders, Payments, Refunds, Leads or other Phase 13 Domain Events.

## Deployment evidence

- Both tracking Queues were created in the production Cloudflare account.
- Forward-only migration `0002_first_party_tracking.sql` applied successfully to production D1.
- Worker deployment completed with D1, tracking Queue and Analytics Engine bindings.
- Cloudflare Pages deployed NEXT F CMS V1.0.63 to production branch `main` at immutable deployment `https://b6e4aeb9.nextf-cms.pages.dev`.
- Live `https://tracking.nextf.lk/health` returned `status: ok` with the required bindings present.
- Live SDK delivery returned HTTP 200 with JavaScript content.
- Remote D1 verification confirmed the three analytics tables.
- The single active production administrator binding received both canonical read permissions.
- CMS release gates, Worker TypeScript, frontend build, local collector/queue/aggregate tests and deployment checks passed as recorded in the CMS V1.0.63 release record.
- Contract documentation synchronization passed Phase 41 validation (89/89), Phase 41 smoke checks (12/12), the full coordinated regression gate (2,796/2,796) and the portal performance audit with its existing single non-blocking budget warning.

## Activation boundary

The production runtime is deployed but intentionally dormant for the main `nextf.lk` Site. That Site remains pinned to Contract Registry V1.0.0. Do not install the SDK or enable production event collection until an explicit V1.0.0 to V1.4.0 lifecycle review updates its Site Manifest and verifies Diff, Compatibility, consent, origin, event vocabulary, privacy, security and rollback requirements.

No accepted production event was fabricated merely to prove deployment. Authenticated end-to-end CMS browser acceptance and real pilot-data accuracy remain separate evidence tasks.

## Historical evidence rule

`registry/releases/1.4.0/` and its SDK compatibility snapshot remain immutable and correctly describe the runtime state at the instant V1.4.0 was published. Current deployment truth belongs in this handoff and the consuming CMS release record. A future coordinated Contract Registry release may promote live runtime evidence into new machine-readable release data; it must not alter the frozen V1.4.0 snapshot.

## Source records

- CMS release record: `NEXT-F-CMS NEW/docs/releases/V1.0.63-FIRST-PARTY-ANALYTICS-RUNTIME.md`.
- Contract implementation report: `developer/FIRST-PARTY-TRACKING-IMPLEMENTATION-REPORT.md`.
- Contract implementation plan: `developer/FIRST-PARTY-TRACKING-IMPLEMENTATION-PLAN.md`.
- Architecture gap audit: `developer/FIRST-PARTY-TRACKING-ARCHITECTURE-GAP-AUDIT.md`.
- Original platform plan: `DOCS/NEXT-F-FIRST-PARTY-ANALYTICS-PLATFORM-FULL-PLAN.md`.
