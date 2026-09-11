# NEXT F Commerce Core Contract Standard

Version: **0.12.0**  
Phase: **11**  
Status: **Stable**

## 1. Purpose

The Commerce Core defines a provider-neutral, reusable ecommerce data model for NEXT F-built Sites. It is intentionally independent of any specific storefront framework, payment provider, shipping provider, hosting platform or customer-specific visual design.

The same contracts are intended to support:

- customer storefronts
- Customer CMS commerce operations
- NEXT F Admin diagnostics and configuration
- NEXT F APIs
- future event and webhook contracts
- Codex-built ecommerce Sites

## 2. Module boundary

Commerce is an optional Site module. Enabling Commerce does not create a separate CMS.

A commerce-enabled Site continues to reuse Core, Shared, Content, SEO, Forms, Marketing and Integration contracts where applicable.

## 3. Canonical identities

The NEXT F business customer/tenant is `core.organization`.

A store buyer is `commerce.commerceCustomer`.

These concepts must never be merged or used interchangeably.

## 4. Catalog truth

`commerce.product` represents a merchandisable product definition.

A Product may compose options, attributes, category/collection membership, media, pricing and publishing state.

`commerce.productVariant` represents one purchasable variant when variant-level distinctions are required.

Catalog values are mutable business configuration. Historical orders do not re-read mutable catalog prices or names after purchase.

## 5. Product types

The base Product may declare a product type such as physical, digital, service, subscription, booking or gift-card.

Declaring a type does not automatically enable specialized business behavior. Subscription billing, booking allocation, gift-card liability and other specialist workflows require future explicit capability contracts before production use.

## 6. Price and money

Money is always represented with explicit currency.

Catalog price records are mutable configuration.

Transactional money is snapshotted into Cart, Checkout, Order, Payment, Refund, Tax and Discount records so later catalog edits do not rewrite historical transactions.

Negative monetary values are prohibited unless the specific contract explicitly models a signed adjustment.

## 7. Inventory

Inventory is provider-neutral and location-aware.

`commerce.inventoryLocation` means a stock-holding business location. It is not a hosting region, server location or CDN region.

Available, reserved and on-hand concepts must be traceable through canonical Inventory records.

Manual changes must use `commerce.inventoryAdjustment`.

Movement between locations must use `commerce.inventoryTransfer` rather than silent quantity mutation.

## 8. Cart and Checkout

A Cart is mutable and may change as the visitor shops.

Checkout is a transactional preparation state that snapshots the exact lines, customer/contact details, address data, shipping selection, payment selection and totals used to place an Order.

Checkout must not be treated as a completed Order until the Order creation rule is satisfied.

## 9. Orders

An Order is a historical transaction record.

Order line names, SKUs, prices, discounts, taxes, addresses and totals are transaction snapshots and must not be rewritten when related Product, Customer, Address, Discount or Tax configuration changes later.

Payment status, fulfillment status and operational order status are separate dimensions.

## 10. Payments

The Commerce Core does not process cards directly.

`commerce.paymentMethodReference` stores only safe provider-neutral display/reference data.

Raw payment card PAN, CVV/CVC, magnetic-stripe data or equivalent sensitive authentication data must never be stored in NEXT F Commerce contracts.

Payment authorization, capture, failure and refund facts are represented separately.

External provider credentials and account configuration belong to Phase 10 Integration Contracts.

## 11. Refunds and Returns

A Refund is a financial event.

A Return Request is an operational/logistics workflow.

A returned item may result in a Refund, replacement, repair, store credit, rejection or another permitted outcome.

Do not mark a Return as a Refund merely because goods were physically received.

## 12. Shipping and Fulfillment

Shipping methods and rates are provider-neutral business configuration.

Delivery estimates are estimates, not proof of delivery.

Actual shipment tracking and delivery facts are stored separately.

An Order may have multiple Fulfillments and multiple Shipments.

## 13. Discounts and Promotions

Discount rules are mutable merchandising configuration.

Applied discounts are copied into immutable `commerce.discountAllocation` snapshots on transactional records.

A future change to a promotion must not change historical Order totals.

## 14. Tax

Tax configuration remains provider-neutral.

Tax calculations used in a completed transaction are snapshotted into `commerce.taxLine`.

The registry provides data contracts, not tax/legal advice. Customers remain responsible for correct tax configuration and compliance.

## 15. Reviews

Product reviews require explicit moderation.

`verifiedPurchase` is system-derived from qualifying Order evidence and must never be manually set merely to improve marketing appearance.

Only approved reviews may be eligible for public storefront delivery.

Structured data generated from reviews must use truthful qualifying review records.

## 16. Public delivery

Only schemas marked `publicEligible` may expose an explicitly allowed storefront subset.

The existence of a public-eligible contract does not make all of its fields public.

Personal data, operational notes, internal IDs, payment records, stock ledger details, provider references and Admin metadata remain private unless another explicit contract states otherwise.

## 17. Customer CMS

Customer CMS may expose commerce operations according to permissions and enabled capabilities.

A customer user must not be able to:

- alter canonical contract definitions
- bypass transaction invariants
- overwrite historical payment truth
- fabricate verified reviews
- modify another Organization's commerce data
- view raw secrets
- store card credentials
- reinterpret canonical status semantics

## 18. NEXT F Admin

NEXT F Admin may inspect contract versions, module enablement, integration health, migration state, diagnostics and permitted operational data.

NEXT F Admin does not turn hosting/domain ownership into NEXT F services.

## 19. SEO

Commerce entities such as Product may reference Phase 7 SEO contracts.

Commerce must not create a competing SEO schema.

## 20. Marketing and conversion tracking

Commerce business records are authoritative truth.

Marketing events such as future `product.viewed`, `checkout.started` or `order.paid` are observations/distribution facts and must not replace authoritative Product, Checkout, Order or Payment records.

Canonical commerce Event contracts are reserved for Phase 13.

## 21. Integrations

Payment, shipping, tax, catalog-feed, CRM and analytics providers connect through Phase 10 Integration Contracts and explicit adapters.

External provider models do not redefine canonical NEXT F Commerce semantics.

## 22. Events and Webhooks

Phase 11 defines Commerce entities and localized validation only.

Canonical cross-platform Commerce Events are Phase 13.

Canonical Webhook delivery/signature/retry behavior is Phase 14.

No project may invent permanent event/webhook names simply because those later phases are not yet implemented.

## 23. Permissions

Phase 15 will define canonical Commerce permissions.

Until then, CMS metadata is descriptive and must not be treated as the authoritative permission registry.

## 24. Cross-entity invariants

Phase 12 is reserved for full Commerce Rules and cross-entity invariants including:

- order total reconciliation
- inventory availability/reservation transitions
- payment authorization/capture/refund bounds
- refund eligibility
- fulfillment quantity bounds
- return resolution constraints
- discount eligibility/application
- tax calculation consistency
- state transition guards
- idempotency requirements for transactional commands

Phase 11 localized validation must remain compatible with that rule layer.

## 25. Codex implementation rule

When building an ecommerce Site, Codex must consume these Commerce contracts rather than create parallel Product, Order, Payment, Inventory or Customer models.

Customer-specific storefront design is free to vary.

Contract semantics are not.

## 26. Hosting and domains

Commerce contracts are hosting-independent.

NEXT F does not provide hosting or domain-registration services merely because a Site uses Commerce.

## 27. Security minimum

Commerce implementations must:

- validate untrusted writes server-side
- enforce Site/Organization isolation
- enforce future permission contracts
- keep provider secrets server-side
- avoid sensitive payment data
- protect personal data
- keep private operational records out of public responses
- create auditable records for material operations
- use idempotent transaction handling where later rules require it

## 28. Compatibility

Stable Commerce contracts follow the NEXT F Contract lifecycle and compatibility policy.

A production Site pins its Contract Version and must not silently consume breaking Commerce changes.
