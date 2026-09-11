# NEXT F Admin UI Metadata Standard

Version: **V0.21.0**

## 1. Purpose

This standard defines the internal-only presentation metadata used by NEXT F Admin. The Admin interface consumes the same canonical contracts, permissions, events, APIs, Module Registry and Site Manifest rules as customer-facing systems, but it exposes additional operational context that customers must never receive.

## 2. Authority

Admin UI metadata is presentation metadata only. Authority remains, in order, with canonical business/security contracts, server-side authorization, API contracts, business rules and event/webhook semantics.

A hidden or visible Admin control never creates authority.

## 3. Internal-only boundary

Every `adminUi.*` profile is internal-only and `customerVisible=false`.

Customer CMS must never render Admin profiles, internal diagnostics, migration controls, platform scope selectors, global tenant directories, internal secret-state metadata or platform-wide audit data.

## 4. Reuse instead of duplication

When a Site-scoped resource already has a Customer CMS profile, NEXT F Admin references that profile instead of cloning its field/editor metadata. Admin adds internal context, panels and privileged operations around the same canonical contract.

The relationship is reference-based. Changes to Customer CMS presentation do not silently redefine Admin security or platform controls.

## 5. Context is always visible

Admin screens must make the active scope clear:

- Platform
- Organization
- Site
- Resource

Changing the selected Organization or Site changes UI context only after server-side scope validation. A Site ID, Organization ID or direct URL is never proof of access.

## 6. Cross-tenant access

Only platform-scoped permissions may authorize cross-Organization or cross-Site aggregate views.

Cross-tenant lists must expose enough Organization/Site context to prevent accidental actions against the wrong tenant.

## 7. NEXT F Admin shell

The Admin shell provides internal navigation, platform search, Organization/Site context selection, environment reference, notifications/attention surfaces and access to the Contract Portal.

The shell does not grant permissions and does not silently impersonate a customer.

## 8. Organization 360

Organization administration may show:

- Organization identity and status
- authorized Sites
- authorized Organization users/roles
- support context
- scoped audit history
- data-governance context

It must not expose unrelated Organizations.

## 9. Site 360

Every Site must have an internal technical control center capable of presenting:

- Site identity and primary URL reference
- pinned Contract Version and compatibility
- enabled Modules and Capabilities
- Site Manifest/runtime primitives
- environment references
- API bindings and API health
- technical connection health
- Integration health
- Event/outbox health where available
- Webhook health
- Customer CMS profile/link reference
- Site health
- scoped audit history

This is technical connection management, **not domain registration, hosting resale, hosting renewal or hosting billing**.

## 10. Modules and capabilities

NEXT F Admin may enable/disable only Modules and Capabilities allowed by the Module Registry and Site Manifest rules.

Required dependencies must be resolved before enabling a capability. Removal must identify dependent capabilities and impact before execution.

## 11. Contract compatibility

Admin must show the Site's pinned Contract Version rather than an implicit `latest` value.

Compatibility states should distinguish at least supported, upgrade available, deprecated and unsupported.

No production Site receives a silent major Contract Version upgrade.

## 12. Migrations

Migration UI is privileged and must provide, where applicable:

- source version
- target version
- affected contracts
- affected Sites
- compatibility impact
- dry-run result
- blocking issues
- execution status
- rollback or forward-recovery plan
- audit/request ID

A successful button click is not enough evidence that a migration is safe.

## 13. Diagnostics

Diagnostics are bounded checks, not unrestricted server consoles. They may expose health status, evidence, component identifiers, request IDs and remediation guidance.

Diagnostics must not reveal secrets, raw credentials, protected customer data or arbitrary infrastructure shell access.

## 14. Secrets

Admin may show secret metadata such as configured/missing status, provider, creation/rotation time, expiry and safe fingerprint metadata when explicitly supported.

After secure creation/storage, raw secret values must never be rendered back to the browser merely because the user has a management permission.

## 15. Integrations

Integration Admin metadata may expose connection state, credential state, mapping state, environment binding, sync state, last success/failure and health.

Customer-owned provider accounts remain customer-owned. NEXT F Admin manages the connection, not ownership of the external account.

## 16. Commerce

Admin permissions never bypass Phase 12 Commerce Rules.

Order, payment, capture, refund, inventory, fulfillment, shipping, discount, tax and return operations must remain server-authoritative and preserve immutable historical transaction snapshots.

## 17. Events and Webhooks

Admin may inspect canonical Events, correlation/causation, producer information, webhook deliveries, attempts, retries and dead-letter state.

Replay/redelivery is a privileged command and must preserve idempotency, eligibility, data policy and audit requirements.

## 18. Support access and impersonation

No hidden customer impersonation is permitted in V1. True impersonation is not defined by this release.

Support users may navigate to customer context only as their own authenticated NEXT F identity and only with their own permissions.

If true impersonation is ever introduced, it requires a dedicated contract covering explicit start/end state, reason, customer scope, banner visibility, audit, prohibited actions, reauthentication and emergency termination.

## 19. Overrides

There is no generic "Admin override everything" control.

An override is exposed only when a canonical contract explicitly defines an override path, required permission, reason/evidence and audit semantics.

## 20. Risk and confirmation

Admin metadata carries permission risk levels and recent-authentication/confirmation requirements from the Permission Registry.

Destructive, sensitive and privileged operations must be visually distinguishable by text/iconography, not color alone.

## 21. Audit

Administrative mutations must be auditable and should surface the resulting request/audit identifier when available.

Audit presentation must redact secrets and unnecessary personal data.

## 22. Customer CMS reference

NEXT F Admin may link to the corresponding Customer CMS workspace/profile for support and QA. Such navigation must not silently assume the customer's identity.

## 23. Data minimization

Internal access does not justify displaying every stored field. Admin profiles show the minimum data necessary for the task and apply classification/redaction rules.

## 24. Responsive and accessibility behavior

The Admin remains usable on smaller screens, though complex operational tasks may recommend desktop width. All status, tables, dialogs, context selectors and privileged actions require keyboard-accessible equivalents and non-color-only meaning.

## 25. Hosting/domain exclusion

NEXT F Admin may show a Site's URL, environment and hosting-independent connection/health references needed for implementation and diagnosis.

NEXT F Admin must not introduce domain registration, domain renewal, hosting resale, hosting subscription billing or a generic hosting control panel.

## 26. Codex rule

When building NEXT F Admin, Codex must resolve `adminUi.*` metadata, canonical permissions, target contracts, Module Registry bindings and API operations. It must not generate a second independent Admin data model.
