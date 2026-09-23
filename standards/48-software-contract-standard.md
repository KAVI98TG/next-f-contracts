# Phase 40 - Software Canonical Contract Standard

V1.3.0 adds the first-class `software` domain for NEXT F Documentation, NEXT F Blog Suite and NEXT F Publisher Suite.

## Canonical boundary

The Software service is the business authority for catalog, editions, prices, software customers, software order extensions, subscriptions, licenses, activations, entitlements, releases, downloads and software support. Checkout remains the payment authority. Commerce remains authoritative for generic order, money, payment, capture and refund primitives. CMS is a guarded staff control plane and must not become a second Software system of record.

## Commercial truth

Browsers send product/edition/coupon choices only. Trusted prices, final amounts, paid state, entitlement grants, activation limits and package paths are resolved by trusted services. Historical order, price, entitlement-source and release-publication snapshots are immutable.

## Payment evidence

A browser success redirect is never payment evidence. Software fulfills only after verified, signed and replay-protected Checkout evidence is reconciled with the pending Software order. Equivalent retries are idempotent and must not duplicate subscriptions, licenses or entitlements.

## Renewal rule for V1.3.0

Annual plans are customer-initiated renewal contracts in this release. Automatic renewal is reserved until Checkout/provider tokenization or agreements, consent evidence, retries, payment-method update, cancellation semantics and recurring webhook evidence are implemented and accepted. Contracts must not label the launch annual plan auto-renewing.

## Licensing and entitlement rule

Plan names are presentation labels. Authorization is capability-based through Software Entitlements. License activation limits use explicit `single`, `bounded` or `unlimited` policies, never sentinel numbers. Expiration can stop Pro updates and priority support but must not remotely disable already installed plugin functionality.

## Release and download rule

Release package bytes are private. Release artifacts expose opaque storage references, SHA-256 checksums and signature references. Download grants are short-lived, single-purpose and owner/product scoped. CMS/browser clients never supply checksums as authority and never receive bucket credentials.

## Customer access rule

Customer Workspace operations are authenticated-owner scoped. There is no cross-customer search/list surface. Customer APIs return only resources belonging to the authenticated Software customer.

## Privacy and security rule

License keys, activation details, transaction references and abuse signals are sensitive; service credentials, signing keys, provider secrets and raw download tokens are secret. Licensing/update requests must not contain WordPress page/post/document content, visitor analytics or unrelated site data.

## Stable launch identifiers

Products:
- `product.nextf-documentation`
- `product.nextf-blog-suite`
- `product.nextf-publisher-suite`

Edition identifiers are immutable once used in production and use the `edition.<product>.<edition>` namespace. Launch fixtures define the accepted Free, Single, Studio and Lifetime editions and the initial USD launch price IDs.
