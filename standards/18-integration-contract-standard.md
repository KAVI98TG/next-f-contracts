# NEXT F Integration Contract Standard

## 1. Purpose

Phase 10 defines how NEXT F Sites connect canonical website capabilities to external providers without scattering vendor-specific logic across customer websites.

The Integration Registry is an adapter layer. Phase 9 remains authoritative for tracking, attribution, consent and conversion semantics. Later phases remain authoritative for their own domains.

## 2. Ownership

A Customer Organization normally owns its analytics, advertising, search, payment, messaging, CRM and other external provider accounts. NEXT F stores only the connection metadata and authorizations required to operate an approved integration.

A connector must never imply that NEXT F owns or resells the provider account.

## 3. Connector architecture

Every provider integration is built from:

- a provider definition
- a connector definition
- an integration connection
- one authentication profile where authentication is required
- typed configuration fields and values
- enabled capabilities
- environment bindings
- consent and data-policy bindings where applicable
- event, conversion, data or action mappings where applicable
- health and diagnostics
- sync behavior where applicable
- normalized error and retry behavior

## 4. Secrets

Raw secrets never belong in public contract JSON, generated browser fallback data, customer-facing URLs, logs or client bundles.

Secret values are represented by opaque `integrations.secretReference` objects. Secret stores are implementation-specific and remain server-side.

OAuth access tokens and refresh tokens are never stored as ordinary configuration values.

## 5. Public configuration

Some provider identifiers such as a GTM container ID, GA4 measurement ID or Meta Pixel ID may be intentionally exposed to browser code.

A configuration field may be exposed only when its connector explicitly declares `publicClientEligible: true`. Public eligibility is a technical classification, not proof that a value is non-sensitive in every context.

## 6. Environment isolation

Preview, staging and production bindings are explicit.

A production connector must not silently reuse preview credentials, conversion actions, datasets or debug configuration. Environment-specific resources must be bound deliberately.

## 7. Connection lifecycle

Normalized connection states are:

- `draft`
- `connecting`
- `connected`
- `degraded`
- `reauthorizationRequired`
- `disabled`
- `error`
- `revoked`

Provider-specific states are translated to these values by the connector adapter.

## 8. Capabilities

Connectors declare capabilities rather than relying on their provider name.

Canonical Phase 10 capability keys are maintained in `registry/integrations/capabilities.json`.

A connection cannot invoke a capability that its connector does not declare and the Site has not enabled.

## 9. Events and conversions

NEXT F canonical event names and conversion keys remain provider-neutral.

Provider event names, conversion labels, conversion-action IDs, dataset IDs and similar identifiers are mapping data owned by the connector layer.

A connector must not require the customer website to rename canonical NEXT F events to match a provider.

## 10. Consent

Client-side and server-side dispatch must both respect the applicable Phase 9 consent contract and the Site's configured legal/operational policy.

Moving an event server-side does not bypass consent.

Hashing an email address, phone number or other personal value does not automatically make it anonymous or remove consent/privacy obligations.

## 11. Data minimization

Only fields needed for the configured capability may be mapped to a provider.

A CRM, analytics, ads or webhook connector must not receive the complete raw form payload merely because the Site has access to it.

Personal data mappings are explicit and inspectable.

## 12. Runtime boundaries

Supported runtime modes include:

- Site Runtime client adapter
- approved tag manager
- NEXT F server connector
- provider API adapter
- generic webhook adapter
- explicitly approved manual adapter

No connector contract grants arbitrary JavaScript execution.

## 13. Health and testing

Connectors support normalized health snapshots and safe connection tests where practical.

A connection test should validate credentials/resources without creating real production conversions, messages, CRM records or other irreversible side effects unless the test contract explicitly requires and labels such behavior.

Health status must not expose credentials or full provider error bodies to unauthorized users.

## 14. Synchronization

Read/write synchronization uses explicit direction, mode, cursor, conflict behavior and batch limits.

Provider pagination tokens and cursors are operational data and must be protected according to provider sensitivity.

## 15. Error handling

Provider errors are normalized into `integrations.integrationError`.

Customer-facing errors should be actionable without leaking secrets, authorization headers, raw personal data or internal stack traces.

## 16. Rate limits and retries

Provider rate-limit state is normalized. Retrying must be bounded, use backoff where appropriate and respect provider retry guidance.

Non-idempotent operations must not be blindly retried.

## 17. Generic Webhook boundary

`integrations.webhook` is a generic Phase 10 connector adapter only.

The full authoritative webhook subscription, signature, delivery, retry and idempotency architecture is reserved for Phase 14. Phase 10 must not create a competing webhook platform model.

## 18. Custom API boundary

`integrations.customApi` is server-side by default.

It requires HTTPS, explicit host/path allowlisting, bounded timeouts, typed mappings and secure authentication references. It does not provide arbitrary scripting or an unrestricted SSRF-capable URL executor.

## 19. Outbound request safety

Server-side Webhook and Custom API connectors are outbound network capabilities and must enforce SSRF protections.

By default they must reject loopback, link-local, cloud metadata-service and private-network destinations. DNS rebinding and HTTP redirects must not allow a request to escape the validated host/path policy. Timeouts, response-size limits and redirect counts must be bounded.

Exceptions for explicitly trusted private infrastructure require a separate server-side policy and must never be enabled merely by customer-supplied URL input.

## 20. Hosting independence

Integration contracts are independent of the customer's hosting vendor and domain registrar.

Provider-specific deployment adapters may exist without changing canonical integration semantics.

## 21. Codex rule

When a connector exists in the Integration Registry, Codex must use its canonical configuration, capabilities, mappings and security boundaries instead of implementing a parallel provider-specific architecture inside a customer Site.
