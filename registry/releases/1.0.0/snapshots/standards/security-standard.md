# NEXT F Security Standard

**Phase:** 29  
**Registry version:** 0.30.0  
**Authority:** `registry/security/`  
**Foundation:** `standards/05-security-boundaries.md`

## 1. Purpose

This standard expands the Phase 0 security boundaries into machine-readable requirements for NEXT F-built customer websites, Customer CMS, NEXT F Admin, APIs, integrations, webhooks, Commerce, Site Manifests and contract tooling.

The security registry defines requirements and verification expectations. It does not claim that every future runtime product is already deployed or security-tested in production.

## 2. Authority

Security controls are authoritative in `registry/security/controls/`. The generated `registry/security/index.json` and `js/generated-security.js` are discovery/runtime artifacts. Existing domain-specific rules remain authoritative for their domains; Phase 29 cross-links them instead of redefining them.

## 3. Security severity

Security violation severity uses only: `info`, `low`, `medium`, `high`, `critical`. Security severity is distinct from compatibility impact, deprecation severity, business priority and UI tone.

## 4. Authentication and sessions

Protected operations require authenticated identity. Sessions have bounded lifecycle and server-authoritative invalidation. High-risk actions that declare recent-authentication requirements must re-establish recent identity proof.

## 5. Authorization

Authentication never implies authorization. Every privileged operation enforces canonical permissions server-side. UI visibility, hidden buttons and browser-provided Organization/Site IDs are not authorization boundaries. Destructive and privileged actions apply the confirmation/recent-authentication policy declared by their operational metadata.

## 6. Browser and public runtime

NEXT F runtime rules lock the following:

- no privileged secrets in browser bundles or public Site Manifest data;
- no arbitrary script execution through CMS-managed content;
- rich/untrusted content is sanitized and output-encoded for its rendering context;
- permission enforcement cannot exist only in UI;
- browser-supplied tenant IDs are never trusted as authorization proof;
- sensitive information is excluded from query strings unless a specific contract permits a narrowly scoped safe token;
- redirects derived from input are constrained to safe destinations;
- browser-authenticated writes use CSRF-resistant request patterns;
- CSP and security headers are applied according to deployment/runtime needs.

## 7. Secrets and credentials

The security value classes are:

1. public identifier;
2. configuration value;
3. protected configuration;
4. secret;
5. credential;
6. token;
7. signing secret;
8. encryption key.

Only the first two classes can ever be eligible for public delivery, and ordinary configuration is public only when its owning contract explicitly permits it. Protected configuration, secrets, credentials, tokens, signing secrets and encryption keys are never public-delivery eligible.

Secret-bearing contracts use protected references. Provider API keys, OAuth client secrets, access/refresh tokens and signing keys are not stored in public contract JSON, examples, public Events, analytics payloads or browser bundles.

## 8. APIs and services

APIs apply explicit authentication, authorization, CORS and rate-limit policies. Untrusted input is validated server-side. Errors returned to clients do not expose secrets, stack traces, internal credentials or cross-tenant data. Internal service-to-service calls authenticate the calling service and authorize scope; network location alone is not trusted identity.

Sensitive retried commands use idempotency/replay protections where duplicate execution can create security or financial effects.

## 9. SSRF and outbound requests

Server-side URL fetching, provider callbacks and webhook delivery validate scheme, host and network policy before connecting. Unsafe internal/private targets are rejected where the contract does not explicitly allow them.

## 10. File uploads

Upload handling must define and enforce:

- allowed types;
- size constraints;
- filename normalization;
- private-by-default behavior for private contracts;
- executable-content restrictions;
- scan/quarantine state where risk requires it;
- safe download/content headers;
- access authorization on retrieval;
- distinction between managed media and form-submission attachments.

Client MIME declarations and filenames are not trusted evidence.

## 11. Abuse prevention

Public and authenticated endpoints use risk-appropriate rate limits. Authentication/verification flows resist brute-force attempts without leaking account-enumeration detail. Forms and other abuse-prone surfaces use layered controls rather than trusting one browser-side signal.

## 12. Tenant and environment isolation

Organization and Site isolation are enforced server-side. Development, preview/staging and production keep data, credentials and integrations appropriately separated. Preview URLs are not considered private merely because they are obscure.

## 13. Logging, audit and errors

Logs exclude secrets and minimize personal data while retaining security evidence. Privileged changes are auditable with actor, action, scope, result and time. Customer-facing errors avoid sensitive internal detail.

## 14. Transport and browser headers

Production transport carrying authenticated, personal, secret or webhook data uses HTTPS/TLS with certificate validation. Web surfaces apply deployment-appropriate security headers and a restrictive Content Security Policy (CSP). Integrations must not silently require uncontrolled script origins that invalidate security policy.

## 15. Dependencies and supply chain

Dependencies are inventoried and reviewed for security risk. Generated contract artifacts remain integrity-bound to authoritative source. Release packages must not silently diverge from generated hashes/checksums.

## 16. Backup and recovery

Authoritative contract data and critical release artifacts must be recoverable from version-controlled or verified backups. Recovery preserves exact version identity and integrity; restoration must not silently substitute a floating `latest` state.

## 17. Commerce security

Commerce preserves the existing canonical invariants:

- No PAN/CVV storage;
- provider tokenization or provider-hosted handling;
- server-authoritative totals and financial state;
- payment/capture/refund permission enforcement;
- trusted provider reconciliation;
- callback deduplication/idempotency;
- provider secrets remain server-side.

Phase 29 does not replace Phase 12 Commerce Rules.

## 18. Personal-data security

Personal data is exposed only as needed by the owning contract and authorized purpose. Logs, Events and Webhook payloads must not become uncontrolled secondary stores. Detailed privacy/data classification is defined in Phase 30; Phase 29 establishes the security boundary only.

## 19. Integrations

External provider credentials are protected and environment-scoped. Optional integration failure must not bypass canonical validation, leak credentials or break primary content availability. Provider-specific behavior is translated through canonical NEXT F contracts.

## 20. Webhooks

Webhook endpoints are validated against HTTPS/network policy. Authentic deliveries use canonical signing policy and protected key references. Secret rotation has finite overlap. Timestamp/signature/replay rules prevent reuse of previously valid requests outside policy. Webhook transport never becomes the authoritative business Event itself.

## 21. Verification

Every machine-readable control states one or more verification methods and evidence types. Supported methods include schema validation, static analysis, unit/integration/security tests, configuration review, dependency scanning, runtime observation, audit-log review and manual review.

A control marked `mandatory` cannot be waived by UI convenience. A `recommended` control remains a documented defense-in-depth expectation.

## 22. Future privacy binding

Phase 30 will add field-level privacy/data classification. Until then, Phase 29 must not fabricate privacy classifications. Security controls may identify privacy relevance but `relatedPrivacyRules` remains empty until canonical Phase 30 definitions exist.
