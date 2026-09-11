# Forms and Leads Contract Standard

## 1. Scope

Phase 8 defines provider-neutral Forms, Form Builder configuration, submissions, anti-abuse, consent snapshots, operational Leads, notifications and mapping contracts.

It does not yet define canonical Marketing conversions, external integration connectors, global Events, Webhooks, Permissions or jurisdiction-specific Privacy law policy. Those remain explicit future bindings.

## 2. Form definition and submission are separate

A Form is mutable configuration. A Submission is a historical snapshot.

Editing a Form must never rewrite the meaning of an accepted Submission.

Every Submission records the Form/revision version used by the visitor and each submitted value stores a field-key, label and primitive snapshot.

## 3. Server-side acceptance is authoritative

Browser-side validation exists for user experience only.

The server must independently enforce:

- Form availability
- required fields
- primitive value shape
- field validation rules
- required consent
- upload policy
- anti-abuse decisions
- rate limiting
- tenant/Site boundaries

Only then may a Submission become accepted and cause business effects.

## 4. Form builder safety

The Form Builder is structured and declarative.

It must not become an arbitrary HTML/CSS/JavaScript execution surface.

Conditional logic uses registered operators rather than executable expressions. Custom validators or input variants must be registered identifiers backed by trusted implementation code.

## 5. Stable field keys

A Form Field `key` is a machine identifier.

Once submissions exist, visual labels may change but a field key must not be casually renamed. A semantic rename requires an explicit version/migration decision.

## 6. File uploads

Form uploads are private by default.

The frontend filename is untrusted. File size/type checks are server enforced. When security scanning is required, blocked, failed or pending files cannot be treated as safe customer downloads.

A Form upload does not become publicly accessible merely because storage metadata uses `shared.mediaAsset`.

## 7. Consent

Consent/acknowledgement controls capture:

- purpose
- exact displayed text
- acceptance state
- policy URL/version when configured
- capture timestamp

Marketing consent must not be silently bundled with unrelated required acceptance.

The contract records system behavior and evidence; it does not declare legal sufficiency.

## 8. Data minimization

Form configuration must make data-retention behavior explicit.

Request metadata is separate from submitted business values. Authorization headers, cookies, access tokens and secrets are prohibited from request-context records.

Sensitive fields must not automatically flow into logs, notification subjects, future events or public APIs.

## 9. Anti-abuse

Spam protection is layered.

Honeypots, timing, link counts, rate limits and external challenge/provider results are signals. Authoritative classification remains a server-side decision.

Spam classification must remain auditable and must not silently erase legitimate data without an explicit retention/removal process.

Rate limiting is not authentication.

## 10. Idempotency and duplicate submits

Submission processing must be designed to resist duplicate business effects caused by retries, double-clicks, network replay or future webhook/provider redelivery.

Where idempotency keys are supported, one accepted key must not create duplicate Lead/notification/conversion effects.

## 11. Notifications

Internal notifications and visitor auto-responses are separate contracts.

Templates use registered/allowlisted placeholders only. They must not execute arbitrary expressions.

Sensitive field values are excluded by default. Provider credentials belong to later Integration contracts.

## 12. Lead is not Submission

A Submission records what was submitted.

A Lead is a customer-business workflow record.

A Form may create no Lead, one Lead, or update/link an existing Lead according to explicit mapping and deduplication policy.

A Lead is also distinct from:

- the NEXT F customer Organization
- an Organization User
- a future Commerce Customer

## 13. Lead deduplication

Duplicate detection must use explicit policy.

No implementation may silently merge records based on an undocumented heuristic.

Historical source Submissions and timeline/audit data must remain traceable.

## 14. Marketing conversion boundary

`forms.conversionMapping` is a bridge only.

It must never embed Google, Meta, TikTok or other vendor code. Phase 9 defines Marketing/conversion contracts and Phase 10 defines provider integrations.

## 15. Events and Webhooks

Phase 8 does not finalize canonical Event names or Webhook payloads.

Forms contracts expose future bindings to Phase 13 and Phase 14 so later event/webhook contracts can reference the stable Forms objects without redefining them.

## 16. Permissions

Phase 8 records CMS visibility and editability intent but does not invent final permission identifiers early.

Canonical permissions are introduced in Phase 15.

## 17. Public delivery

Only Form definitions required for visitor rendering may be public.

The following are private/operational by default:

- Submissions
- Consent Records
- Request Context
- Spam decisions/signals
- Lead records
- Lead notes/timeline
- Notification recipients/templates
- Lead mappings
- Rate-limit internals

## 18. Cross-Site isolation

Form, Submission and Lead records are Site-scoped. User-controlled IDs never establish authorization.

Cross-Site access requires an explicit future platform contract and server-side authorization.
