# NEXT F Commerce Rules Standard

Version: **0.13.0**  
Phase: **12 - Commerce Rules**  
Status: **Stable**

## 1. Purpose

Phase 11 defines canonical Commerce entities and object-level validation. Phase 12 defines the cross-entity, state-transition, financial, inventory, concurrency and operational invariants required to keep those objects correct during real ecommerce operations.

A schema-valid object is not automatically a transaction-valid operation.

## 2. Authority

Commerce Rules are server-authoritative. Browser validation may improve user experience, but it cannot approve, settle, reserve, refund, fulfill, discount, tax or otherwise commit authoritative commerce state.

A client-provided total, stock quantity, discount eligibility, tax amount or payment state is input evidence only and must be revalidated before authoritative mutation.

## 3. Fixed and configurable rules

Rules marked `configurable: false` are platform invariants. Site settings cannot disable them.

Rules marked `configurable: true` may use documented Site policy values, but configuration may not weaken security, financial integrity, tenant isolation, historical accuracy or audit requirements.

## 4. Transaction boundaries

Implementations may use database transactions, conditional writes, durable workflows, queues or provider-specific primitives. The technology is implementation-specific; the observable NEXT F invariants are mandatory.

Operations that change several authoritative records and must remain mutually consistent are required to be atomic where the rule or command policy says so.

## 5. Money and historical truth

Money always has explicit currency.

Committed Order, Payment, Capture, Refund, Discount and Tax facts use deterministic monetary precision and rounding.

Historical transaction snapshots do not mutate merely because a Product, Customer, Discount, Shipping or Tax configuration changes later.

## 6. Cart and checkout

Cart is mutable pre-transaction state.

Checkout creates a controlled transactional snapshot and revalidates catalog availability, current pricing, inventory, discounts, tax and shipping before Order creation.

One Checkout may convert to at most one canonical Order.

## 7. Order state

Order payment state, fulfillment state and overall operational state remain separate.

Statuses are derived or guarded from authoritative financial and fulfillment facts. UI actions must not freely assign terminal states.

Cancellation and completion are guarded operations.

## 8. Payments

Payment, Payment Attempt, Authorization, Capture and Refund remain separate facts.

A capture cannot exceed valid authorization or order/payment balance.

Cumulative successful refunds cannot exceed cumulative successfully captured funds.

A failed provider attempt cannot create a successful financial fact.

Raw card PAN and CVV data remain prohibited by the Phase 11 and platform security boundaries.

## 9. Inventory

Available, reserved and committed inventory are reconciled using canonical inventory facts.

Reservation, adjustment and transfer operations are concurrency-safe.

Inventory cannot silently become negative unless an explicit backorder policy permits the relevant sale behavior.

## 10. Fulfillment

Fulfillment quantities cannot exceed eligible ordered quantities after prior fulfillment, cancellation and return adjustments.

Fulfillment does not imply successful payment.

Payment success does not imply fulfillment.

## 11. Promotions

Discount eligibility is revalidated at commit time.

Coupon usage and limited promotion consumption are concurrency-safe.

Stacking behavior must be explicit.

Historical applied allocations are immutable transaction snapshots.

## 12. Tax

Tax jurisdiction, basis, inclusion mode, rates and rounding must be explicit before the transaction commits.

Historical tax lines are transaction snapshots.

NEXT F Contracts model tax behavior; they do not provide jurisdiction-specific legal or tax advice.

## 13. Returns

Return, Refund and Restock are separate operations.

A Return cannot silently create a Refund or inventory adjustment. The applicable resolution must explicitly request and validate each effect.

## 14. Idempotency

Material transactional commands use idempotency where required by the command registry.

Same idempotency key + same canonical request returns/replays the original accepted outcome.

Same idempotency key + materially different request is a conflict.

Provider idempotency is additional protection and does not replace NEXT F idempotency.

## 15. Concurrency

Authoritative mutations use version checks, conditional writes, locks or an equivalent concurrency mechanism where simultaneous operations can violate an invariant.

Lost updates are prohibited for protected transactional state.

## 16. State machines

`registry/commerce/rules/state-machines.json` is the machine-readable lifecycle registry for Phase 11 status fields.

Normal operations follow allowed transitions and rule guards.

Exceptional recovery must use an explicitly defined internal recovery mechanism and remain auditable. It must not be implemented as unrestricted status editing.

## 17. Command policies

`registry/commerce/rules/command-policies.json` describes canonical domain operations, atomicity, idempotency, concurrency scopes and audit expectations.

These are domain command policies, not HTTP endpoint definitions. HTTP/API contracts remain Phase 18.

## 18. Error identifiers

`registry/commerce/rules/error-codes.json` defines stable Commerce domain error identifiers.

HTTP status mapping and API response envelopes remain Phase 18 concerns.

## 19. Security and audit

Tenant isolation is server-enforced.

Material commerce operations are permission-gated once Phase 15 Permission Contracts exist.

Sensitive information is minimized in logs and audit snapshots.

Provider secrets remain server-side.

## 20. Future bindings

Phase 12 does not fabricate future contracts.

- canonical Event Registry: Phase 13
- Webhook Registry: Phase 14
- Permission Registry: Phase 15
- Site Manifest: Phase 16
- API Contracts: Phase 18

Rule metadata may declare these phase bindings without inventing their final identifiers.

## 21. Specialized capability gates

Subscriptions, bookings, gift cards, marketplaces, preorder workflows, complex digital delivery and multi-currency settlement require dedicated capability contracts before production use when Phase 11 does not already model the required behavior.

## 22. Codex requirement

Codex and other development agents building ecommerce Sites must consume both:

1. Phase 11 Commerce Core schemas
2. Phase 12 Commerce Rules

They must not treat object schemas as the complete transaction implementation.
