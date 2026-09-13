# Customer Access Policy Integration Guide

Use this guide when implementing Customer CMS, NEXT F Admin, or API behavior against NEXT F Contracts V1.1.0.

## Authority

- Pin `contracts.contractVersion` explicitly. Existing V1.0.0 sites do not gain V1.1.0 behavior automatically.
- Load `registry/customer-access/index.json` and resolve the policy linked by the Customer CMS profile's `customerAccessPolicyRef`.
- Treat `customerMode` as the canonical maximum, not as the final authorization decision.
- Intersect the policy with enabled Site Manifest capabilities, workspace entitlement, exact permission and trusted scope, resource state, field policy, Security, and Privacy. The most restrictive result wins.
- When policy or required authorization input is unavailable, hide unknown exposure and deny customer mutation.

## Action Outcomes

- `allow`: execute only after server-side permission and scope authorization.
- `request`: create a `customerAccess.changeRequest`; do not mutate authoritative state before Admin approval and application.
- `deny`: do not expose a customer-authorized operation.

UI visibility is never authorization. APIs must independently enforce the same policy, permission, scope, tenant, Security, and Privacy boundaries.

## Site Manifest

The optional `cms.customerAccess` block can only narrow canonical policy. A restriction may select `hidden`, `read_only`, or `approval_required`, and may disable actions. It cannot declare `direct_edit` or broaden a canonically stricter mode.

Validate manifests with:

```powershell
node bin/nextf-contract.mjs validate path\to\nextf.site.json --verbose
```

## Approval Workflow

Use the canonical Customer CMS change-request operations to submit, inspect, list, or cancel a proposal. NEXT F Admin reviews, approves, and applies it through the canonical Admin operations. Preserve the base revision and reject stale application rather than silently using last-write-wins.

Lifecycle Events are internal evidence and must not contain secrets or proposed field values:

- `customer-change-request.submitted`
- `customer-change-request.cancelled`
- `customer-change-request.approved`
- `customer-change-request.applied`

## Portal

Open `#/platform/customer-access` to search and filter policies, inspect field/action behavior, compare Customer CMS and Admin boundaries, and review resolution and approval workflow guidance. Related ordinary Registry detail pages include a Customer Access section.

## Runtime Honesty

This repository publishes authoritative contracts and policy metadata. It does not claim that a particular Customer CMS, Admin, or API deployment has implemented V1.1.0. Record and test that runtime support in the consuming project before changing its explicit version pin.
