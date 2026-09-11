# NEXT F Marketing and Tracking Contract Standard

## 1. Scope

Phase 9 defines provider-neutral marketing measurement, analytics, campaign attribution, conversions, tracking consent, event routing and reporting contracts for NEXT F-built websites.

It does **not** define Google, Meta, TikTok, Microsoft, LinkedIn or other provider credentials/configuration. Provider connectors are Phase 10.

It also does not replace the full platform Event Registry planned for Phase 13. Phase 9 tracking events are website/marketing observations used for measurement and conversion routing.

## 2. Core architecture

Customer website code emits one normalized NEXT F tracking observation.

The tracking layer applies:

1. Site scope
2. event-definition validation
3. property allowlisting
4. data minimization
5. consent rules
6. destination routing
7. deduplication/idempotency
8. connector dispatch in Phase 10
9. analytics/reporting aggregation

Customer code must not directly scatter Google Ads, Meta Pixel, GA4 or other provider logic when a NEXT F connector exists.

## 3. Standard tracking keys

The authoritative Phase 9 vocabulary is `registry/marketing/tracking-events.json`.

Current standard keys include:

- `page.viewed`
- `cta.clicked`
- `phone.clicked`
- `email.clicked`
- `whatsapp.clicked`
- `document.downloaded`
- `form.started`
- `form.submitted`
- `lead.created`
- `search.performed`
- `video.started`
- `video.completed`
- `newsletter.subscribed`

When a standard key matches the observed interaction, reuse it. Do not create aliases such as `pageView`, `leadDone`, `formSuccess` or `whatsappClick`.

## 4. Tracking events are observations

`marketing.trackingEvent` is measurement evidence.

It must never become the authoritative record for:

- a Lead
- an Order
- a Payment
- a Refund
- a content publication
- an Organization User
- another business-domain entity

The authoritative business action happens first. Tracking observes or is emitted from that successful action.

## 5. Form integration

Phase 8 `forms.conversionMapping.conversionKey` resolves to the canonical `marketing.conversionDefinition.conversionKey`.

A form submission must not be counted as a Lead conversion merely because browser JavaScript fired. Where the conversion means a Lead was created, the source business operation must succeed first.

Do not copy an entire Form Submission into tracking properties.

## 6. Conversion architecture

A conversion has separate concepts:

- `marketing.conversionDefinition` - what the business considers a conversion
- `marketing.conversionOccurrence` - one deduplicated occurrence
- `marketing.conversionValue` - value semantics
- `marketing.conversionDeduplicationPolicy` - duplicate protection
- attribution contracts - how reporting credit is assigned
- destination contracts - where the occurrence may be dispatched

Provider conversion IDs do not belong in the canonical conversion definition.

## 7. Consent architecture

Tracking consent is separate from Form consent.

Use:

- `forms.consentRecord` for consent attached to a form/business-purpose statement
- `marketing.trackingConsentRecord` for tracking category choices

A technical consent record is not itself a legal conclusion.

Unknown optional consent must not be interpreted as granted.

Marketing/advertising tracking must not be marked technically necessary merely to simplify implementation.

## 8. Data minimization

The tracking layer must collect the minimum data needed for the declared measurement purpose.

The following are prohibited from generic tracking properties:

- passwords
- API keys
- access tokens
- refresh tokens
- private keys
- payment card numbers
- CVV values
- arbitrary form payloads
- secrets in URLs
- raw authentication/session tokens

Email, phone, postal addresses and names are not generic analytics identifiers.

## 9. No fingerprinting

NEXT F tracking contracts do not authorize browser or device fingerprinting.

Anonymous visitor identifiers must be random first-party identifiers, not hashes generated from high-entropy device characteristics.

Device context is intentionally coarse.

## 10. URL and referrer safety

UTM parameters and referrer values are untrusted external input.

Tracking Data Policy controls whether query strings, fragments and full referrer paths may be retained.

Sensitive query parameters must be stripped before tracking storage or dispatch.

## 11. Advertising click identifiers

Advertising click identifiers are treated as potentially personal or pseudonymous identifiers.

They are:

- private by default
- retention-bounded
- never exposed through public CMS APIs
- validated/mapped by provider connectors in Phase 10

## 12. Customer ownership

Google Ads, Meta Business, analytics properties and other external marketing accounts normally belong to the customer Organization.

NEXT F stores connection/configuration metadata required to operate approved integrations, not ownership of the customer's account.

## 13. Destination separation

`marketing.marketingDestination` describes a logical destination.

It does not contain:

- OAuth refresh tokens
- private API keys
- provider secrets
- Meta access tokens
- Google service-account keys
- webhook secrets

These belong to secure integration infrastructure introduced later.

## 14. Environment isolation

Preview/staging tracking must not accidentally pollute production advertising or analytics properties.

Every destination is environment-aware.

## 15. Consent-aware dispatch

A destination route is evaluated at dispatch time.

The decision must consider:

- destination enabled state
- environment
- event definition
- property allowlist/denylist
- tracking data policy
- applicable consent category
- server-only requirements
- deduplication/idempotency

Debug mode never bypasses these controls.

## 16. Dispatch records

Dispatch requests use sanitized provider-neutral payloads.

Dispatch results distinguish:

- queued
- sent
- skipped
- failed

Consent/data-policy skips are not technical failures.

Logs must not contain provider credentials or full sensitive request payloads.

## 17. Campaign attribution

Attribution models are reporting models, not proof of causation.

Touchpoints preserve captured evidence.

Changing campaign names or metadata must not rewrite historical touchpoints.

Historical attribution results record the model/version used.

## 18. UTM parameters

NEXT F recognizes normalized UTM fields through `marketing.utmParameters`.

UTM values are bounded, untrusted input. They are not an approved place for personal information.

## 19. Reporting

Metrics and dimensions have stable definitions.

A dashboard label must not silently change a metric's meaning between customer websites.

Imported provider data must expose source and freshness.

Derived analytics snapshots are immutable representations of a period. Refreshing creates a new snapshot.

## 20. Monetary reporting

Spend, revenue and conversion values always carry currency.

Do not infer currency solely from browser locale.

## 21. Conversion rate

A displayed conversion rate must have a known, documented denominator.

The CMS must not show a percentage merely because two unrelated counts can be divided.

## 22. Source freshness

Campaign/analytics data imported from external platforms can be delayed.

Customer dashboards must surface freshness when it affects interpretation.

## 23. Phase boundaries

Phase 9 intentionally leaves these to later authoritative phases:

- provider connectors and credentials: Phase 10
- canonical Commerce transactions/events: Phase 11
- platform Event Registry: Phase 13
- Webhook delivery contracts: Phase 14
- final Permissions: Phase 15
- complete Privacy/Data Classification standard: Phase 30

## 24. Codex requirement

When building a NEXT F customer website, Codex must:

- use standard tracking keys when applicable
- emit through the NEXT F tracking layer
- not hardcode provider-specific marketing scripts when a connector exists
- keep tracking separate from business source-of-truth records
- respect consent and data-policy contracts
- avoid arbitrary PII in event properties
- preserve environment isolation
- use canonical conversion definitions
- report any required new tracking event or marketing contract instead of silently inventing it
