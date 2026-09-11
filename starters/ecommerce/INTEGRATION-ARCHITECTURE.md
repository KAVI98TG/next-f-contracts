# Integration Architecture

## Declared connectors

- `integrations.googleTagManager` - required; environments: production
- `integrations.googleAnalytics4` - required; environments: production
- `integrations.googleAds` - required; environments: production
- `integrations.meta` - required; environments: production
- `integrations.googleSearchConsole` - optional; environments: production
- `integrations.microsoftClarity` - optional; environments: production
- `integrations.emailProvider` - optional; environments: production
- `integrations.crm` - optional; environments: production

## Boundaries

- Customer organizations own their third-party provider accounts.
- NEXT F stores configuration/authorized connection references, not account ownership claims.
- Provider secrets/tokens remain protected configuration and never belong in browser/public manifest data.
- Optional connectors must not block primary Site content.
- Consent-aware marketing connectors load/dispatch only under the applicable consent state.
- Webhook transport does not replace authoritative Domain Events.

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
