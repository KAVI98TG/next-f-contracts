# NEXT F Event Registry Standard

## Purpose

Phase 13 defines the canonical event vocabulary used by NEXT F domains. An Event is an immutable record that an authoritative fact has occurred. Events are not commands, logs, analytics pixels, database tables or webhooks.

## Event key rule

Canonical event keys use lowercase dot notation and completed-fact wording, for example `order.created`, `payment.succeeded` and `inventory.out-of-stock`.

A stable event key must never be reused with a different semantic meaning.

## Event versus marketing tracking

Phase 9 tracking events describe measurable website observations and may be consent-dependent telemetry. Phase 13 domain events describe authoritative business/platform facts after server validation. A shared key may exist only when the meanings intentionally align. The canonical domain event remains authoritative for business state; tracking records remain analytical observations.

## Production and durability

Authoritative business events are durable. When an event corresponds to a transactional state mutation, the implementation must use a transactional outbox or equivalent atomic durability mechanism so canonical state cannot be committed while its required event is silently lost.

Best-effort telemetry is outside the authoritative domain Event Registry.

## Envelope

Every occurrence uses `events.eventEnvelope` and contains a globally unique event ID, canonical key/version, contract version, occurred/recorded timestamps, environment, producer, subject, optional actor/correlation, origin, bounded payload and data-policy snapshot.

## Idempotency

`eventId` is the canonical duplicate key. Consumers must safely handle duplicate delivery. Replaying an idempotent domain command must not emit a second semantic fact event.

## Correlation and causation

Correlation IDs connect one logical workflow. `causationEventId` identifies the immediate prior event when an event is event-caused. Correlation is diagnostic and orchestration context; it does not authorize actions.

## Ordering

Global ordering is not guaranteed. Each definition declares an ordering scope. Timestamps alone must never be treated as a globally total order. Strict sequences require an explicit sequence mechanism.

## Payload design

Payloads contain the minimum information required for declared consumers. Do not copy entire entities by default. Consumers requiring additional information must retrieve it through an authorized API or local data boundary.

Payloads must never contain secrets, private credentials, signing keys, raw payment-card data or unrestricted form payloads.

Personal and financial data must be minimized and redacted from general logs/diagnostics when appropriate.

## Source authority

Provider callbacks do not directly become NEXT F truth. They are authenticated/validated, deduplicated and reconciled to a canonical domain state first. Only then may a canonical event be produced.

## Consumers

An event may be consumed by Admin, Customer CMS, audit, notifications, cache invalidation, search indexing, analytics, integrations, commerce reconciliation, automation and the future webhook bridge. A consumer is not guaranteed merely because it is listed; implementation availability is governed by later Module/API contracts.

## Webhooks

Webhook delivery is Phase 14. `webhookEligible: true` only means an event may be exposed through a future authorized webhook subscription. It does not define HTTP payload signing, retry schedules or destination behavior.

## Compatibility

Each event has its own semantic `eventVersion`, initially 1.0.0. Event versioning is independent from the coordinated NEXT F Contract Registry release. Adding optional payload properties may be backward-compatible. Removing, renaming or changing required payload semantics requires an event major-version transition.

## Environment isolation

Preview and staging occurrences must not be delivered to production consumers by default. Integrations and webhooks must preserve environment bindings.

## Deletion and privacy

Events are immutable operational history, but their payloads must be intentionally minimal so later privacy/retention policies can be enforced without treating the event stream as an unrestricted copy of personal records.

## Codex rule

Codex must search the Event Registry before creating an event name. If an equivalent event exists, it must be reused exactly. Missing event requirements require an explicit contract extension proposal rather than a project-local alias.
