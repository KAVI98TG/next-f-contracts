# Extension Guidance

- Reuse canonical contracts before proposing an extension.
- Extensions must use a collision-safe customer/project namespace.
- Never override canonical NEXT F identifiers.
- Document the reason, namespace, data shape, permissions, Events and migration implications.
- Validate the extension namespace through NEXT F validation.

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
