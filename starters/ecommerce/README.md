# Ecommerce Site Starter Contract Pack

**NEXT F Contracts:** 1.0.0  
**Source reference:** examples.commerce-site  
**Site type:** commerce

Full ecommerce storefront reference with catalog, inventory, cart, checkout, orders, payments, shipping, returns, SEO and marketing measurement.

This pack is a framework-neutral contract integration bootstrap. It is **not** a theme, Site Runtime/SDK, hosting package or page builder.

## Start here

1. Read `AGENTS.md`.
2. Review `nextf.site.json`.
3. Resolve the Modules/Capabilities and contract map.
4. Configure environment bindings without committing secrets.
5. Implement the customer-specific presentation separately.
6. Run NEXT F validation.
7. Complete `CONTRACT-RESOLUTION-SUMMARY.md` and the acceptance checklist.

## Included integration surfaces

- 10 Modules
- 46 capabilities
- 445 contract references
- 4 API bindings
- 4 tracking observations
- 8 integration connectors
- 208 permission references

## Ecommerce transaction boundaries

- Enable the canonical `commerce` Module with its required `core` and `media` Module dependencies. SEO, consent and integrations remain recommended according to the Module Registry and this starter's manifest.
- Preserve Product -> Variant -> Inventory -> Cart -> Checkout -> Order -> Payment -> Fulfillment -> Refund/Return boundaries.
- Catalog changes must never rewrite historical Order or Payment snapshots.
- Browser totals are advisory only; trusted server-side calculation and reconciliation remain authoritative.
- Payment providers own card/token entry. NEXT F contracts do not store PAN/CVV.
- Provider callbacks must follow webhook signing/replay/idempotency rules where supported.
- Commerce Domain Events remain distinct from marketing ecommerce observations.
- Consent gates optional marketing/advertising destinations and does not weaken transaction/security requirements.
- SEO, Customer CMS and NEXT F Admin mappings remain enabled according to the canonical contracts.
