# NEXT F Privacy and Data Classification Standard

**Phase:** 30  
**Registry release:** V0.31.0  
**Status:** Stable contract standard  
**Scope:** NEXT F customer websites, Customer CMS, NEXT F Admin, APIs, Events, Webhooks, Integrations, Commerce and future runtime tooling.

## 1. Purpose

This standard defines how NEXT F contracts classify, minimize, expose, log, retain, export, redact and share data. It complements the Security Standard; privacy classification is not a security severity score and security severity is not a data classification.

Phase 30 defines machine-readable privacy metadata and future-safe operational primitives. It does not claim that a full legal-compliance workflow engine, data-subject portal or automated deletion service is already deployed.

## 2. Primary classification

Every explicit Phase 30 field-handling record uses exactly one primary class:

- `public` — intentionally eligible for unauthenticated public delivery under the owning contract;
- `internal` — operational/configuration information that is not public but is not inherently personal or secret;
- `personal` — information relating to or reasonably linkable to a person, visitor, customer, lead or staff principal;
- `sensitive` — higher-risk personal, financial, authentication, transaction or operational information requiring restricted handling;
- `secret` — credentials, tokens, signing material, encryption keys or equivalent values that must not be disclosed through public/runtime flows.

Do not create competing primary sensitivity labels for financial, authentication, tracking, content or system metadata. Those are qualifiers.

## 3. Operational qualifiers

The canonical qualifiers are:

- `financial`;
- `authentication`;
- `tracking`;
- `content`;
- `system-metadata`.

A field may have zero or more qualifiers while retaining exactly one primary classification.

## 4. Privacy principles

**Data minimization** and **purpose limitation** are mandatory baseline principles. **No PAN/CVV storage** is permitted; Commerce and Security rules remain authoritative for payment-card boundaries.

NEXT F implementations must preserve these boundaries:

1. collect only data required for a defined purpose;
2. do not expand use beyond that purpose merely because data is technically available;
3. secrets are never analytics-eligible;
4. raw form payloads are never dumped wholesale into analytics or advertising systems;
5. logs must not contain unnecessary personal data or secrets;
6. webhook payloads must be minimized to the event/consumer purpose;
7. optional analytics and marketing dispatch is consent-aware;
8. provider-specific capabilities do not silently override NEXT F privacy boundaries;
9. customer-controlled consent configuration cannot disable mandatory security, fraud, integrity or transaction controls;
10. hashed or pseudonymized personal data is not automatically anonymous;
11. sensitive values use explicit display/redaction behavior;
12. absence of a field-handling record never means a value is automatically public.

## 5. Data flow eligibility

Phase 30 uses the controlled values:

- `allowed`;
- `conditional`;
- `redacted-only`;
- `prohibited`.

Field-handling metadata can independently declare eligibility for:

- logs;
- Events;
- Webhooks;
- analytics/tracking destinations.

`conditional` means the owning contract, authorization, purpose, consent and destination policy must all be satisfied. It is not an automatic permission.

## 6. Public delivery

`publicDeliveryEligible` is an explicit boolean. The following are locked rules:

- `secret` fields are never public-delivery eligible;
- `personal` and `sensitive` fields are private by default and require an explicit domain contract if a safe public representation exists;
- safe derived/display values do not make their source secret/sensitive values public;
- a browser bundle, Site Manifest or generated public artifact must not contain privileged secret material.

## 7. Logging

Logs exist for operations, diagnostics and security, not as a secondary data warehouse.

- secret values use `prohibited` log eligibility;
- personal/sensitive values normally use `redacted-only` or `prohibited`;
- identifiers used for correlation should be minimized/pseudonymized where practical;
- audit evidence may require protected retention but must still apply field-level redaction;
- logging a value does not make that value analytics-eligible.

## 8. Events and Webhooks

Authoritative Domain Events remain distinct from tracking observations and Webhook transport.

Field privacy metadata expresses whether a value is suitable for Event or Webhook transport, but the Event/Webhook Registry remains authoritative for actual payload contracts and eligibility.

- secrets are prohibited from Event/Webhook payloads unless a future canonical contract explicitly defines a one-time protected exchange;
- personal/sensitive fields require explicit purpose and minimization;
- Webhook payloads must not include unrelated personal information;
- transport does not create a new business purpose.

## 9. Analytics and tracking

Tracking Observation -> Consent -> Destination Mapping -> Integration Connector remains the required chain.

Analytics/marketing consent is distinct from consent or acknowledgement for a requested form/business purpose.

A form submission can be valid for the requested business purpose while optional analytics/advertising dispatch remains denied or unknown. Conversely, analytics consent does not authorize unrelated form/business processing.

Raw form values, attachments, secrets, payment credentials and privileged audit data are not analytics payloads.

## 10. Retention classes

The Registry defines policy-oriented retention classes rather than fabricating legal durations:

- `ephemeral`;
- `operational`;
- `customer-record`;
- `consent-history`;
- `financial-record`;
- `security-audit`;
- `credential-lifecycle`;
- `content-lifecycle`;
- `legal-hold`.

A retention class describes the policy bucket. Actual durations can depend on customer policy, provider requirements, transaction/accounting rules, security needs and applicable law. Phase 30 does not invent universal dates.

## 11. Deletion and anonymization behavior

Canonical behaviors are:

- `delete`;
- `anonymize`;
- `retain-per-policy`;
- `protected-retention`;
- `review-required`.

Deletion must not break transaction integrity, security evidence or other protected records. When full deletion is inappropriate, an authorized anonymization workflow may be used if the relevant contract allows it.

## 12. Redaction behavior

Canonical behaviors are:

- `none`;
- `mask`;
- `partial`;
- `pseudonymize`;
- `remove`.

Pseudonymization reduces direct identifiability but does not automatically convert personal data into non-personal/anonymous data.

## 13. Export sensitivity

Exports are classified as:

- `normal`;
- `restricted`;
- `highly-restricted`.

Export is always subject to permissions and purpose. `highly-restricted` values are generally prohibited from ordinary exports and need exceptional privileged handling if a future canonical workflow permits them.

## 14. Consent relevance

Field-handling metadata uses:

- `none`;
- `business-purpose`;
- `analytics`;
- `marketing`;
- `functional`;
- `multiple`.

This metadata never replaces the Forms/Leads or Marketing consent contracts. It links privacy handling to those authorities.

## 15. High-risk coverage

Phase 30 explicitly covers the following high-risk areas:

- authentication/authorization;
- forms and leads;
- marketing/tracking;
- integrations/credentials;
- Commerce;
- payments;
- Webhooks;
- audit evidence.

Coverage is represented in `registry/privacy/coverage.json` and field-level rules in `registry/privacy/field-handling.json`.

## 16. Authentication and authorization data

Principal IDs, Organization scope, matched roles and authorization evidence are not public content. They are handled as personal/internal authentication data and retained under security/audit policy as required for authorization traceability.

Session/credential material remains subject to the Security Standard. Raw session tokens and credentials must not be added to public Registry examples, analytics or ordinary logs.

## 17. Forms and Leads

Form Submission and Lead remain separate entities.

- submission values and attachments may contain sensitive/personal data;
- lead contact points are private business-purpose data;
- consent evidence is retained separately from optional analytics dispatch;
- request/abuse context is minimized and short-lived where possible;
- raw form payloads are not copied wholesale into tracking destinations.

## 18. Marketing and consent

Tracking observations may include personal/pseudonymous identifiers and therefore require classification.

- first-party visitor/session IDs remain personal where linkable;
- optional destination dispatch follows the applicable consent state;
- debug mode cannot bypass consent;
- consent records remain evidence, not a general-purpose tracking profile.

## 19. Integrations and secrets

Credential references, API-key references, OAuth secret/token references and signing-secret references are secret or protected configuration.

- secret values are server-side only;
- secret values are not public, analytics, Event or Webhook payload data;
- display surfaces expose status/metadata, not raw material;
- retention follows credential lifecycle and rotation/revocation needs.

## 20. Commerce and payments

Payment records can contain financial and sensitive operational data.

- raw PAN/CVV remains prohibited by Commerce/Security rules;
- provider token/reference values are not treated as ordinary public IDs;
- payment totals and transaction facts remain server-authoritative;
- financial records may require protected retention;
- analytics receives only explicitly allowlisted, minimized ecommerce data.

## 21. Webhooks

Webhook attempts and delivery diagnostics can contain sensitive operational metadata.

- stored request/response diagnostics are sanitized;
- signing-secret references remain secret;
- unrelated personal data must not be added to payloads;
- webhook eligibility does not override Event data policy.

## 22. Audit

Audit records may necessarily identify actors and show bounded before/after state.

- secret fields are removed/redacted before audit persistence;
- unnecessary personal data is not copied into audit metadata;
- actor identifiers may be pseudonymized in lower-privilege display/export surfaces;
- audit/security integrity can require protected retention.

## 23. Future privacy operations

The Registry defines future-safe primitives for:

- export;
- deletion request;
- anonymization request;
- retention expiration;
- legal hold;
- consent history;
- processing-record references.

Their status is machine-readable. `future-capability` means the concept is defined but no complete runtime workflow is claimed. `contract-primitive` means existing contracts provide a bounded primitive, not a complete legal-compliance product.

## 24. Security relationship

Security controls remain authoritative for authentication, authorization, secrets, upload safety, tenant isolation, logging integrity, transport protection and payment security.

Privacy metadata may reference Security control IDs. It must not redefine Security severity or weaken a mandatory Security requirement.

## 25. Validation requirements

Phase 30 validation must reject at minimum:

- unknown primary classes/qualifiers;
- duplicate field-handling IDs;
- duplicate contradictory target/field classifications;
- missing target Registry IDs;
- missing target fields;
- secret fields marked public-delivery eligible;
- secret fields marked analytics eligible;
- secret fields with allowed/conditional log output;
- personal/sensitive fields with unsafe unrestricted flow metadata;
- invalid retention/deletion/redaction/export/consent vocabulary;
- unresolved Security-control references;
- missing explicit coverage for the required high-risk areas.

## 26. Portal behavior

`Standards -> Privacy & Data` exposes:

- classification explorer;
- data-flow explanation;
- retention classes;
- field-level classification search;
- filters by primary class and qualifiers;
- public/log/Event/Webhook/analytics eligibility;
- redaction/deletion behavior;
- Security-control links;
- consent-boundary guidance;
- high-risk coverage;
- future operation status;
- raw machine-readable JSON.

## 27. Non-goals

Phase 30 does not build or claim:

- a full GDPR/CCPA/legal compliance engine;
- automated legal interpretation;
- universal retention periods;
- a deployed data-subject request portal;
- automated deletion across every future runtime;
- provider-specific legal compliance guarantees.

The Contract Registry defines the technical data-handling authority future runtimes must follow.
