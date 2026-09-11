# NEXT F Permission Registry Standard

Version: V0.16.0
Status: Stable
Phase: 15

## 1. Purpose

The Permission Registry is the single canonical authorization vocabulary for NEXT F Admin, Customer CMS, APIs and trusted automations. Customer projects must not invent equivalent permission identifiers.

## 2. Permission identifier

Every permission uses exactly three semantic segments:

`domain.resource.action`

Examples:

- `content.pages.view`
- `content.pages.publish`
- `seo.redirects.manage`
- `commerce.orders.manage`
- `integrations.connections.manage`

The identifier is immutable once stable.

## 3. Deny by default

Authorization defaults to **deny**. A principal is allowed only when an active role assignment contains the exact canonical permission and its scope covers the target operation.

There is no implicit allow from UI visibility, record ownership, matching Site IDs supplied by a browser, or authentication alone.

## 4. No wildcard grants

Production role definitions and assignments must contain explicit canonical permission identifiers. `*`, `content.*` and similar wildcard grants are prohibited.

This prevents a role from silently acquiring future permissions when the registry expands.

## 5. No implied action hierarchy

`manage` does not automatically imply `view`, `edit`, `delete`, `publish` or any other permission. Reference roles list every permission they require explicitly.

This keeps authorization deterministic.

## 6. Canonical actions

The Phase 15 action vocabulary is:

- view
- create
- edit
- delete
- publish
- approve
- manage
- export

Domain behavior determines what each action actually permits. A permission never overrides entity/business rules.

For example, `content.pages.delete` cannot bypass a retention policy, and `commerce.refunds.manage` cannot bypass Phase 12 refund limits.

## 7. Scope

Canonical scope kinds are:

- platform
- organization
- site
- resource
- self

Assignments and checks must remain inside their declared scope. A Site role cannot authorize another Site merely because the same person belongs to the Organization.

## 8. Roles

A Role is an explicit list of canonical permission IDs plus scope and assignment rules.

NEXT F supports:

- protected system roles
- protected reference customer roles
- customer-defined custom roles composed only from customer-eligible canonical permissions

Custom roles do not create new permissions.

## 9. Direct grants

Phase 15 prohibits ad-hoc direct permission grants to individual users. Authorization comes through Role Assignments.

This avoids invisible per-user exceptions and makes access easier to inspect and audit.

## 10. Custom-role privilege ceiling

A customer may not create or edit a role to grant a permission the acting principal cannot themselves grant within the same scope.

Platform-only and non-grantable permissions can never enter customer-defined roles.

## 11. Organization Owner

`Organization Owner` is the highest standard customer role, but it is not a NEXT F platform-administrator role.

It never grants platform contract, migration, diagnostics, platform-user or global-permission authority.

## 12. NEXT F Super Admin

`NEXT F Super Admin` is an internal system role. It contains explicit Admin-eligible permissions rather than a wildcard. New future permissions are therefore not silently granted until the role definition is deliberately updated.

## 13. Customer CMS vs NEXT F Admin

Every permission declares where it is eligible:

- NEXT F Admin
- Customer CMS
- API
- trusted automation

Customer CMS controls must not appear merely because a permission exists. The Site Module/Manifest system and the user's scope must also permit the capability.

## 14. Sensitive operations

Sensitive or privileged permission changes, credential access, webhook secret management, financial operations and role administration may require recent authentication or additional confirmation.

The authorization contract records the requirement; authentication implementation remains a security-layer concern.

## 15. Destructive operations

Delete permissions require explicit UI confirmation where a human initiates the operation. The permission still does not override archive, legal hold, retention or domain-state rules.

## 16. Export

`export` is separate from `view` because exports can increase data exposure. Export implementations must still apply field-level data minimization and privacy rules.

## 17. Financial permissions

Commerce payment/refund permissions are authorization gates only. Phase 12 Commerce Rules remain authoritative for monetary limits, provider reconciliation, idempotency and valid state transitions.

## 18. Secrets

Permissions such as `integrations.credentials.manage` and `webhooks.secrets.manage` authorize approved management flows. They do not authorize returning raw secret values to the browser.

## 19. Evaluation

A trusted authorization evaluation must resolve:

1. authenticated principal
2. exact permission ID
3. applicable Organization/Site/resource scope
4. active Role Assignments
5. assignment validity window and status
6. permission eligibility/grantability rules
7. bounded policy conditions when applicable
8. recent-authentication requirements for sensitive actions
9. final allow/deny decision

## 20. Multiple role assignments

Permissions from multiple active assignments may be unioned only when all assignments are valid for the same target scope. Scope cannot be widened by combining unrelated assignments.

## 21. Explicit deny

Phase 15 does not introduce an explicit deny-list model. Absence of an allow is a deny. A future deny model would require its own compatible contract design.

## 22. Audit

Role creation, role editing, role deletion, assignment creation, assignment change, revocation and privileged permission administration must generate auditable actions without logging authentication secrets.

## 23. Service principals

The support schemas permit trusted service principals, but a service may receive only the minimum explicit permissions required for its job and an appropriate scope. Human reference roles should not be reused for service accounts by convenience.

## 24. UI security

Hiding a button is not authorization. Customer CMS and NEXT F Admin may use permission results to present appropriate UI, but the server/API must independently enforce every protected operation.

## 25. Contract relationships

Permissions may reference the contracts they govern, but authorization contracts never redefine the target schema's validation or business invariants.

## 26. Compatibility

Renaming a stable permission identifier, changing its meaning incompatibly or making a customer permission platform-only is a breaking authorization change and requires compatibility/migration treatment.

## 27. AI/Codex rule

Codex must use the Permission Registry. If a new operation needs authority that no canonical permission represents, Codex must report a Permission Extension requirement rather than creating a project-specific permission name silently.
