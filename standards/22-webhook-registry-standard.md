# NEXT F Webhook Registry Standard

Version: 0.15.0  
Phase: 14  
Status: Stable

## 1. Purpose

The Webhook Registry defines the one canonical outbound HTTP delivery model used by NEXT F systems.

A canonical Event describes a completed fact. A Webhook delivers an eligible Event to an explicitly configured external destination. The Webhook transport does not create, rename, reinterpret or replace the Event.

Canonical flow:

Authoritative domain state
→ durable canonical Event
→ eligible Webhook Subscription
→ one logical Webhook Delivery
→ one or more HTTP Attempts
→ external receiver

## 2. Event and Webhook separation

A Webhook is not an Event.

The Event Registry owns:
- event identity
- event key
- event version
- occurred time
- subject
- actor/correlation context
- payload semantics
- data policy
- producer authority

The Webhook Registry owns:
- endpoint configuration
- event subscription
- exposure authorization
- outbound request representation
- request signing
- attempts
- retries
- timeout/rate behavior
- delivery diagnostics
- dead-lettering
- manual redelivery

Webhook lifecycle Events are canonical internal Events but MUST be `webhookEligible: false`. This prevents recursive webhook delivery.

## 3. Logical delivery identity

There MUST be at most one logical Webhook Delivery for `(subscriptionId, eventId)`.

Automatic retry and manual redelivery MUST create a new Delivery Attempt under that same logical Delivery.

Retries and redelivery MUST preserve:
- canonical `eventId`
- canonical `eventKey`
- canonical `eventVersion`
- logical `deliveryId`

Each Attempt receives a fresh request timestamp and fresh signature.

Receiver-side processing SHOULD use the canonical Event ID and/or Delivery ID to implement idempotency appropriate to the receiver.

## 4. Subscription selection

V1 uses an explicit exact Event allow-list.

Wildcard, prefix and arbitrary expression subscriptions are prohibited in V1.

An Event may be selected only when:
1. it exists in the canonical Event Registry;
2. it is marked `webhookEligible: true`;
3. the Event environment matches the Subscription environment;
4. the Subscription's data-access policy permits the Event data classification;
5. any approved bounded Subscription filters pass.

`webhookEligible: true` means only that an Event can technically be exposed by webhook. It does not grant a specific subscription permission to receive the payload.

Historical event backfill is not supported in V1.

## 5. Ownership and tenant isolation

Every Endpoint and Subscription belongs to an Organization and Site scope.

Server-side authorization MUST validate Organization/Site ownership.

A caller-provided Site ID or Endpoint ID is never sufficient authorization.

Endpoint and Subscription records MUST NOT cross tenant boundaries.

## 6. Environment isolation

Each Endpoint and Subscription binds to one environment:
- preview
- staging
- production

Cross-environment delivery is prohibited.

Preview or staging Events MUST NOT be sent to production-bound Webhook endpoints.

## 7. Endpoint requirements

V1 endpoints are public-internet HTTPS URLs only.

Default network policy:
- HTTPS required
- minimum TLS 1.2
- no URL user-info
- allowed destination ports: 443 and 8443
- private networks prohibited
- loopback prohibited
- link-local prohibited
- multicast prohibited
- reserved/special-use networks prohibited
- cloud metadata endpoints prohibited
- automatic redirects prohibited

Endpoint DNS resolution and resolved IP addresses MUST be checked against the outbound-network policy immediately before connection. This requirement exists to reduce DNS rebinding and SSRF risk.

Private-network Webhook connectivity is not part of V1 and requires a future explicit architecture.

## 8. Endpoint verification

An endpoint MUST successfully complete verification before normal delivery can become active.

Verification uses a signed HTTP POST containing a synthetic, cryptographically unpredictable challenge.

Default challenge TTL: 600 seconds.

The receiver MUST:
- return HTTP 200;
- return the exact unexpired `challenge` in the documented JSON response field.

Verification uses the same:
- network restrictions
- signature controls
- timeouts
- rate controls
- diagnostics redaction

as normal Webhook delivery.

A verification payload is a protocol message, not a canonical business Event.

## 9. Request protocol

Default method: POST.

Default content type:
`application/json; charset=utf-8`

Encoding:
UTF-8

Content encoding:
identity

Automatic redirects:
disabled

Required headers:
- `Content-Type`
- `User-Agent`
- `NextF-Webhook-Id`
- `NextF-Webhook-Subscription-Id`
- `NextF-Event-Id`
- `NextF-Event-Key`
- `NextF-Event-Version`
- `NextF-Contract-Version`
- `NextF-Environment`
- `NextF-Webhook-Attempt`
- `NextF-Webhook-Signature`

`User-Agent` follows:
`NEXT-F-Webhooks/<contract-version>`

Reserved protocol, proxy, cookie and hop-by-hop headers cannot be overridden by customer custom-header configuration.

## 10. Payload

A normal delivery body contains:
- `deliveryId`
- `subscriptionId`
- `attemptNumber`
- `sentAt`
- canonical `events.eventEnvelope`

The canonical Event remains unchanged across retries and redelivery.

Default maximum serialized body size: 262144 bytes (256 KiB).

Unrestricted live Entity snapshot enrichment is prohibited. Additional external data should be fetched through separately authorized APIs where appropriate.

## 11. Mandatory request signing

All normal Webhook and verification requests are signed.

V1:
- algorithm: HMAC-SHA256
- signature scheme version: `v1`
- signing input: `<unix-seconds>.<exact raw UTF-8 request body bytes>`
- signature format: `t=<unix-seconds>,v1=<lowercase-hex-hmac>`
- signature header: `NextF-Webhook-Signature`
- default timestamp tolerance: 300 seconds
- minimum signing-secret entropy: 32 bytes

The receiver MUST compute the HMAC over the exact raw body bytes received, not a parsed/re-serialized JSON representation.

Signature comparison SHOULD use a constant-time comparison.

Timestamp freshness MUST be validated to reduce replay risk.

## 12. Signing secret handling

Webhook signing secrets are write-only secret-store values.

Raw secrets:
- MUST NOT appear in registry JSON;
- MUST NOT appear in normal API responses;
- MUST NOT appear in browser bundles;
- MUST NOT appear in logs or audit snapshots;
- MUST NOT appear in webhook payloads.

The UI may show a newly generated secret exactly once through an explicit secure setup flow when the implementation supports it.

## 13. Secret rotation

Default signing-secret rotation overlap: 24 hours.

During the finite overlap, requests may be verifiable using both active signing keys according to the documented V1 signature entries.

The previous key MUST be retired when the overlap closes.

Unbounded multi-secret acceptance is prohibited.

## 14. Optional destination authentication

A destination may additionally require one structured authentication mode:
- none
- bearer-secret
- basic-secret
- api-key-header

Destination authentication NEVER replaces NEXT F HMAC request signing.

Secret values remain server-side through protected secret references.

Arbitrary Authorization headers are not accepted through normal custom-header fields.

## 15. Response handling

Normal response bodies are diagnostics only and MUST NOT directly create authoritative NEXT F business state.

HTTP outcome defaults:
- 200-299: success
- 300-399: terminal failure, redirect not followed
- 408: retryable
- 425: retryable
- 429: retryable
- 500-599: retryable
- other 400-499: terminal
- 410: terminal and disable endpoint

Endpoint verification is the exception where the response body has defined challenge semantics.

Default maximum response body read/retention for diagnostics: 65536 bytes (64 KiB).

## 16. Retry policy

Default maximum total attempts: 8, including the initial attempt.

Base retry delays before subsequent attempts:
1. 60 seconds
2. 300 seconds
3. 900 seconds
4. 3600 seconds
5. 14400 seconds
6. 43200 seconds
7. 86400 seconds

Default jitter: 20%.

A valid Retry-After may influence scheduling only within:
- minimum 5 seconds
- maximum 86400 seconds

Retries are never infinite.

Exhausted retryable Deliveries become dead-lettered.

## 17. Timeouts

Default:
- connect timeout: 5 seconds
- total request timeout: 15 seconds

Timeouts MUST remain finite.

## 18. Rate and concurrency limits

Default per Endpoint:
- 10 request starts per second
- maximum 4 concurrent outbound requests

Initial deliveries, retries, verification and tests are subject to applicable protection limits.

## 19. Health

Endpoint health is based on logical Delivery outcomes, not individual low-level network log lines.

Default:
- degraded after 5 consecutive failed logical Deliveries;
- auto-pause after 20 consecutive failed logical Deliveries;
- one successful logical Delivery resets the consecutive failure counter.

A meaningful health transition may produce a canonical internal Webhook lifecycle Event.

Per-attempt success/failure does not produce a high-volume canonical Event by default; Attempts remain operational records.

## 20. Pause and deferred queue

While a Subscription or Endpoint is paused, eligible new Deliveries may be deferred.

Default maximum paused queue retention: 72 hours.

When the retention window expires, the deferred Delivery becomes dead-lettered.

Indefinite paused queues are prohibited.

## 21. Ordering

Webhook arrival order is not authoritative.

Initial queue processing is best-effort FIFO.

Retries may overtake later Deliveries.

Receivers MUST use canonical Event ordering/correlation information where business order matters.

## 22. Dead-lettering

Dead-letter status ends automatic retries for the logical Delivery.

Dead-letter records preserve bounded diagnostic metadata.

Dead-lettering does not extend exact sensitive payload retention indefinitely.

## 23. Manual redelivery

Manual redelivery:
- requires explicit authorization;
- is auditable;
- creates another Attempt on the same logical Delivery;
- retains the same canonical Event ID;
- must be within the configured redelivery/payload-retention window.

Default manual redelivery window: 7 days after terminal Delivery.

Manual redelivery MUST NOT fabricate a new canonical business Event.

## 24. Retention

Default retention:
- exact retry/redelivery payload after terminal Delivery: 7 days
- attempt response diagnostic snippet: 24 hours
- Delivery/Attempt operational metadata: 30 days
- dead-letter metadata: 30 days
- manual redelivery eligibility: 7 days

Later privacy/data-retention standards may tighten these windows.

## 25. Redaction

Before persistence or user-visible diagnostics, always redact:
- Authorization values
- destination credentials
- webhook signature values
- signing secrets
- secret-backed custom headers
- sensitive URL query values
- any additional contract-classified secret fields

Redaction MUST happen before diagnostic persistence.

## 26. Test delivery

Test Delivery is synthetic.

It:
- cannot impersonate a real canonical Event;
- cannot use a real Event ID as if the business event occurred;
- cannot create authoritative business state;
- uses the same signing, network, timeout, rate and redaction controls;
- is auditable.

## 27. Failure vocabulary

Webhook failures use controlled registered codes and one of these handling classes:
- retryable
- terminal
- disable-endpoint
- deferred
- dead-letter

Raw exception strings are diagnostics, not stable machine contracts.

## 28. Audit

Meaningful operations MUST be auditable, including:
- endpoint creation/change
- verification
- enable/disable
- subscription creation/change
- pause/resume/disable
- event selection changes
- data-access policy changes
- secret rotation
- test delivery request
- manual redelivery request

Audit records MUST NOT expose secret values.

## 29. Lifecycle Events

Phase 14 adds canonical internal lifecycle Events for:
- endpoint verified
- endpoint verification failed
- endpoint degraded
- endpoint restored
- endpoint disabled
- subscription created
- subscription paused
- subscription resumed
- subscription disabled
- Delivery dead-lettered
- redelivery requested
- signing secret rotated

All are `webhookEligible: false`.

## 30. Codex requirements

Codex and other implementation agents MUST:
1. use the canonical Webhook schemas;
2. use the canonical Event allow-list;
3. preserve one logical Delivery per `(subscriptionId,eventId)`;
4. preserve canonical Event IDs across retries;
5. implement HMAC signing exactly;
6. implement SSRF protections;
7. prohibit automatic redirect following;
8. apply data exposure checks before Delivery creation;
9. keep secrets server-side;
10. use registered failure codes;
11. respect retention/redaction rules;
12. avoid inventing provider-specific parallel Webhook models.

Any requirement that conflicts with this standard requires an explicit Contract Extension Proposal or later Contract version.
