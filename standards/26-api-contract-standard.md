# NEXT F API Contract Standard

Status: Stable  
NEXT F Contract release: 0.19.0  
Initial API semantic version: 1.0.0

## 1. Purpose

The API Contract Registry defines how NEXT F-built websites, Customer CMS, NEXT F Admin, Commerce, Events, Webhooks and public interactions exchange canonical contract data.

The API is an interface over existing NEXT F contracts. It is not a second source of truth for domain entities.

## 2. Versioning

API Version and NEXT F Contract Version are separate coordinates.

- API Version describes the HTTP/programmatic interface.
- Contract Version describes the canonical data/business contract release.
- A Site Manifest pins exact API group versions.
- A production Site must never bind to `latest`.
- Breaking API changes require a new major API version.
- Existing major API versions remain isolated from later incompatible semantics.

The first API family version is `1.0.0`; HTTP paths use `/api/v1/`.

## 3. API groups

The canonical groups are:

1. `api.public-content`
2. `api.public-interaction`
3. `api.customer-cms`
4. `api.nextf-admin`
5. `api.commerce`
6. `api.events`
7. `api.webhooks`

### Public Content API

Read-only published public content.

It must never expose drafts, private content, Admin metadata, secrets, internal diagnostic information or customer operational records.

### Public Interaction API

Public interactions that may write or execute bounded operations, including Form submission and controlled public search/upload flows.

It is deliberately separate from Public Content so public content delivery can remain strictly read-only.

### Customer CMS API

Authenticated Organization User operations scoped to a Site Workspace.

All protected operations must re-check canonical Phase 15 permissions server-side.

### NEXT F Admin API

Privileged NEXT F internal operations for Organizations, Sites, module/contract configuration, compatibility, diagnostics and audit.

An Organization Owner is not a NEXT F Admin.

### Commerce API

Storefront and customer/management commerce operations.

Commerce commands remain subject to Phase 11 Commerce Core schemas and Phase 12 Commerce Rules. The API cannot weaken those invariants.

### Event API

Provides tracking-observation ingestion and authorized canonical Event inspection.

External/public clients are prohibited from directly creating authoritative Phase 13 domain Events. Authoritative Events arise from trusted state mutations and the Event production policy.

### Webhook Management API

Manages endpoints, subscriptions, delivery inspection and redelivery requests.

It is distinct from the Phase 14 outbound Webhook delivery/signature protocol.

## 4. Response envelopes

Successful responses use `api.successEnvelope`:

- `success`
- `data`
- `meta`

`meta` includes safe interface metadata such as request ID, API Version, Contract Version and response generation time.

Error responses use `api.errorEnvelope`:

- `success`
- `error`
- `requestId`

Errors expose stable error codes and safe messages. Stack traces, SQL, secret values, provider credentials and private infrastructure details are prohibited.

## 5. Request IDs

Every server request receives an opaque request ID.

- Caller-provided request IDs may be accepted only if syntactically safe.
- Servers may replace unsafe or conflicting IDs.
- Request IDs must not contain email addresses, tokens, domain secrets or business payload data.
- Request IDs are correlation aids, not authorization credentials.

## 6. Pagination

Collection APIs use opaque cursor pagination.

Defaults:

- default limit: 25
- maximum requested limit: 100

Clients must not synthesize or parse cursor internals.

Offset pagination may only be added by an explicit future contract when required.

## 7. Filtering

Filtering is allow-list based.

Operations declare accepted fields/operators.

Prohibited:

- raw SQL fragments
- arbitrary query expressions
- unbounded regex execution
- direct database column exposure merely because a column exists
- provider-specific query syntax passed through unchecked

Unknown filter fields or operators return `filter_invalid`.

## 8. Sorting

Sorting is allow-list based.

Operations define sortable fields and stable tie-breaking behavior where needed.

Unknown sort fields return `sort_invalid`.

## 9. Search

Search input uses bounded `api.searchQuery`.

Search:

- is not a raw database query interface
- must respect tenant boundaries
- must respect publication/access state
- must not reveal hidden records through suggestions/counts
- must have bounded query length and execution limits

## 10. Includes and sparse fieldsets

Relationship expansion and field selection are opt-in allow-listed features.

Clients cannot request arbitrary internal relationships.

Invalid includes return `include_invalid`.

Invalid field selection returns `field_selection_invalid`.

## 11. Authentication

Authentication modes are explicit per API operation.

Authentication proves principal identity/context; it does not grant authorization.

Supported modes include:

- anonymous
- anonymous or Commerce Customer
- Organization User
- NEXT F Admin
- Commerce Customer
- Site Server
- Internal Service
- Preview Grant

## 12. Authorization

Protected operations must evaluate Phase 15 canonical permissions server-side.

UI visibility is never an authorization boundary.

Resource scope must be checked after authentication and permission resolution.

A valid permission does not authorize cross-Organization or cross-Site data access outside the assignment scope.

## 13. Tenant isolation

Identifiers supplied in path/query/body do not prove access.

Server implementations must resolve and compare trusted Organization/Site scope.

Scope mismatch returns a non-leaking authorization/not-found response according to security policy.

## 14. Idempotency

Operations marked `idempotency.required` require `Idempotency-Key`.

Requirements:

- key scope is tied to authenticated/public interaction context
- key is stored with a canonical request fingerprint
- same key + same fingerprint returns the original logical result
- same key + different fingerprint returns `idempotency_conflict`
- idempotency does not bypass business validation
- retry windows are bounded by implementation policy

## 15. Optimistic concurrency

Revision-sensitive mutations marked `concurrency.required` use strong preconditions.

Canonical interface:

- response: `ETag`
- request: `If-Match`

Missing required preconditions return `precondition_required`.

Stale validators return `precondition_failed`.

Blind overwrites of versioned editorial, configuration or transactional resources are prohibited where concurrency is required.

## 16. Caching

Cache behavior is operation-specific.

### Public published reads

May use shared edge caching when no private/personal data is present.

### Authenticated/private reads

Must not use shared public caches.

### Mutations and sensitive operational reads

Use `no-store`.

A CDN cache is never an authorization boundary.

## 17. CORS

CORS policies define approved browser-origin exposure.

CORS does not replace:

- authentication
- authorization
- CSRF defenses
- rate limiting
- anti-abuse checks
- Site/Organization scoping

Server-only APIs must not expose permissive browser CORS.

## 18. Rate and abuse controls

Rate-limit classes are policy inputs, not guarantees of fixed numeric quotas.

Numeric budgets may vary by deployment, Site, identity, risk and abuse conditions.

Public writes receive stricter abuse protection than public reads.

Sensitive/financial operations receive stronger controls.

## 19. Validation

Server-side validation against the canonical contract is mandatory.

Client-side validation exists only for user experience.

Validation errors use normalized `api.validationIssue` records and must not expose implementation internals.

## 20. Error semantics

Canonical errors are stable machine identifiers.

HTTP status alone is insufficient for business logic.

Clients should branch on documented error codes where appropriate.

Unknown internal errors return a generic `internal_error` public response while retaining a request ID for diagnostics.

## 21. File uploads

File uploads use short-lived scoped sessions.

A browser upload target:

- must expire
- must be scoped to expected purpose/size/type
- cannot expose general storage credentials
- cannot grant arbitrary bucket/container access

Completion occurs only after server verification, including configured integrity/type/security checks.

Uploaded Form files remain private unless a separate contract explicitly publishes them.

## 22. Preview access

Preview grants are:

- short-lived
- Site-scoped
- environment-scoped
- resource/locale-scoped where applicable
- non-transferable where implementation supports principal binding

Preview grants do not convert draft content into public content.

## 23. Commerce boundary

The API cannot accept browser-calculated values as authoritative for:

- price
- discount
- tax
- shipping charge
- inventory
- payment state
- refundable amount

Trusted server implementations re-resolve and validate authoritative state under Phase 12 rules.

Raw PAN/CVV storage remains prohibited.

## 24. Event boundary

The Event API must distinguish:

- Phase 9 tracking observations
- Phase 13 canonical domain Events

A public tracking call cannot assert `order.paid`, `payment.succeeded`, `refund.succeeded` or another authoritative business fact.

Canonical Events originate from trusted authoritative state transitions.

## 25. Webhook boundary

Webhook Management APIs configure and inspect Phase 14 webhook infrastructure.

They do not redefine:

- webhook signing
- receiver verification
- delivery retries
- replay protection
- event eligibility
- payload exposure

Those remain governed by Phase 14.

## 26. Secrets and credentials

Never place secrets in:

- URL paths
- query strings
- public response payloads
- generated portal examples
- browser-accessible Site Manifest configuration
- client-side logs

Use secure server-side credential references from the Integration architecture.

## 27. Personal and sensitive data

Operations classify privacy level.

Personal/sensitive endpoints use:

- authenticated/scoped access where appropriate
- no-store
- minimized projections
- auditability for privileged exports/actions
- safe error handling

## 28. API projections

An API projection may return a safe subset of a canonical entity.

A projection does not create a replacement domain schema.

Projection rules must preserve canonical field meanings.

## 29. Bulk operations

Bulk APIs are not assumed.

Any bulk operation must define:

- maximum batch size
- per-item authorization
- per-item validation
- partial-failure behavior
- idempotency
- audit behavior
- transaction boundary

## 30. DELETE semantics

DELETE operations must specify whether deletion is:

- hard deletion
- soft deletion
- archival
- tombstoning

Domain retention rules remain authoritative.

## 31. Health endpoints

Health responses expose compatibility and non-sensitive operational status only.

They must not reveal:

- secret configuration
- private hostnames
- database credentials
- stack traces
- provider tokens

## 32. API binding in Site Manifest

`manifest.apiBinding` resolves to a canonical API group ID and exact semantic version.

Bindings also list the Site environments in which that API surface applies.

A Site may bind multiple API groups.

## 33. Codex requirements

Before implementing API calls, Codex must:

1. read `nextf.site.json`
2. resolve exact API bindings
3. resolve the selected API group/version
4. resolve operation contract
5. resolve referenced domain contracts
6. resolve permissions
7. resolve modules/capabilities
8. resolve Event behavior
9. implement
10. validate

Codex must not invent equivalent endpoints when a canonical operation exists.

## 34. Hosting independence

API contracts are provider-neutral.

They must not assume NEXT F sells or owns:

- hosting
- domains
- DNS subscriptions
- server control panels

Hosting-provider adapters may exist without changing canonical API semantics.

## 35. Stability

All Phase 18 API group and operation definitions are introduced as API `1.0.0`.

Any incompatible route, request, response, auth or semantic change requires an API major-version decision.
