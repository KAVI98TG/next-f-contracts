# Customer Capability Access Policy Standard

**Phase:** 38
**Introduced:** V1.1.0
**Status:** Stable

## Purpose

The Customer Access Policy Registry defines the maximum customer-facing access for every Customer CMS resource. It complements, and never replaces, the Permission Registry, Site Manifest, API contracts, publishing contracts, security controls, privacy controls, or runtime authorization.

Policy answers what may be exposed. Permissions and trusted scope determine whether a principal may perform an allowed action. Site configuration and entitlements may restrict that maximum, but may never broaden it.

## Canonical Modes

- `hidden`: omitted from Customer CMS discovery, navigation, search, and customer API exposure.
- `read_only`: permitted customer reads only; authoritative mutation is denied.
- `direct_edit`: explicitly allowed mutations may update authoritative state after normal authorization and validation.
- `approval_required`: customer mutations create a separate non-authoritative Customer Change Request.

Publishing is evaluated independently as `not_applicable`, `direct`, `approval_required`, or `admin_only`. Action behavior is `allow`, `request`, or `deny`. Field rules may inherit or narrow the resource maximum through `hidden`, `read_only`, `direct_edit`, or `approval_required`.

## Effective Resolution

Effective access is the intersection of the canonical policy maximum, enabled Site Manifest module and capability, workspace entitlement, principal role and exact permission, trusted scope, resource state, field policy, and security/privacy restrictions. The most restrictive result wins.

Unknown customer exposure is hidden. Missing write policy, permission, capability, publishing policy, or approval path denies the operation. UI visibility is never authorization.

## Approval Workflow

An approval-required mutation stores proposed changes separately with its base revision. It does not mutate authoritative state. Review may request changes, approve, reject, cancel, or expire the proposal. Application verifies the current revision, records conflicts instead of silently overwriting, creates a new authoritative revision, and then evaluates publishing policy.

Requester, reviewer, decision, resulting revision, and audit correlation are retained. Proposed field values and secrets are not placed in lifecycle event payloads.

## Site And Runtime Rules

- Site Manifests declare support and may restrict access; they do not contain per-user authorization or secrets.
- Customer and Admin UI metadata are generated descriptions of the canonical policy.
- Customer API operations require exact permission and Site scope checks on the server.
- Hidden resources cannot have customer action `allow`.
- Read-only resources cannot allow mutation.
- Demo behavior never writes production data.
- Security and privacy restrictions override permissive resource or field policy.
- V1.0.0 consumers retain their pinned behavior until an explicit compatible upgrade.

## Compatibility

Adding the policy layer is additive for the Registry, but consumers must declare V1.1.0 policy awareness before relying on it. A policy change from direct access to approval, read-only, or hidden is potentially restrictive. A change toward broader customer access is security-sensitive and requires explicit review even when structurally additive.
