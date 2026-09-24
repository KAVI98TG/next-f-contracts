# Phase 41 - First-Party Tracking Platform Contract Standard

V1.4.0 extends the existing Phase 9 Marketing and Analytics authority with the operational contracts required by a NEXT F-controlled first-party SDK, collector, analytics reporting surface and tracking-health surface.

## Canonical authority

`marketing.trackingEvent` remains the only canonical website tracking observation envelope. Phase 41 composes it in ingestion batches and receipts; it does not create a competing event model. Phase 13 Domain Events remain authoritative completed business facts.

## First-party boundary

NEXT F defines the contracts, SDK protocol, collection protocol, processing semantics, aggregate reporting semantics and health model. No third-party analytics product is required. Optional external destinations remain Phase 10 Integration adapters and never become analytics authority.

## Browser collection

Browser collection uses public Site identity, configured Site origins, payload limits, rate limits, consent evaluation and abuse controls. Public Site identifiers are not secrets. Administrative, server or provider credentials are prohibited in browser code.

## Server collection

Trusted Site servers use the server ingestion operation. Idempotency and stable event IDs prevent retries from increasing counts. A server observation can reference an authoritative business result but cannot create or replace its Domain Event.

## Identity and sessions

Anonymous visitor and session identifiers are random, Site-scoped, retention-bounded and never derived from fingerprinting. They do not cross customer Organizations. Known-subject linking requires explicit policy and never places email, phone, name or authentication tokens in identifiers.

## Consent and privacy

Optional analytics collection evaluates canonical consent before processing. Unknown optional consent is not granted. Raw Form Submissions, credentials, authorization headers, payment-card data, URL secrets and arbitrary personal properties are prohibited. Raw IP addresses are not persistent visitor identifiers.

## Environment isolation

Development, preview and staging observations are isolated from production reporting. Debug mode never bypasses consent, sanitization, tenant scope, rate limits or privacy controls.

## Reliability and performance

Tracking is non-critical application infrastructure. The SDK loads asynchronously, uses bounded queues and retries, and never blocks rendering, navigation, form submission or checkout. Collector unavailability does not make Site functionality fail.

## Reporting and health

Reporting is tenant-scoped, read-only and permission-controlled. Aggregates preserve metric, dimension, attribution, source and freshness semantics. Health responses expose bounded diagnostics and counts, never raw rejected payloads, secrets, other-tenant data or internal infrastructure detail to customers.

## Runtime status

V1.4.0 publishes contracts and compatibility metadata. Its frozen release evidence records the runtime state at publication and must not be rewritten to fabricate earlier availability. A compatible NEXT F CMS V1.0.63 runtime was subsequently deployed on 2026-09-24; current operational evidence and the still-pending Site activation boundary are recorded in `developer/FIRST-PARTY-TRACKING-RUNTIME-DEPLOYMENT-HANDOFF.md`.
