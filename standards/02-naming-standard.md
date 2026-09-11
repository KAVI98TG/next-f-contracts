# Naming Standard

## General principles

Names must be stable, explicit, domain-aware, predictable, human-readable and machine-safe.

Avoid abbreviations unless universally understood in the relevant domain.

## JavaScript and JSON fields

Use `camelCase`.

Correct: `metaTitle`, `createdAt`, `compareAtPrice`, `organizationId`.

Avoid: `meta_title`, `MetaTitle`, `compare-price`.

## Contract IDs

Use lowercase dot notation.

Pattern: `domain.entity`

Examples: `core.site`, `content.page`, `content.blogPost`, `seo.metadata`, `commerce.product`, `commerce.order`.

Nested reusable contracts may use another segment, such as `commerce.order.item`.

Do not put a version number into the canonical contract ID. Version is metadata.

## Event names

Use lowercase dot notation in completed-fact form.

Examples: `content.created`, `content.updated`, `content.published`, `form.submitted`, `lead.created`, `order.created`, `order.paid`, `payment.succeeded`, `inventory.low`.

Avoid: `doPurchase`, `purchaseDone`, `sendLead`, `sale_complete`.

## Permission identifiers

Use lowercase dot notation.

Pattern: `domain.resource.action`

Examples: `content.pages.view`, `content.pages.create`, `content.pages.edit`, `content.pages.publish`, `commerce.products.view`, `commerce.orders.manage`, `integrations.connections.manage`.

Canonical actions where applicable: `view`, `create`, `edit`, `delete`, `publish`, `approve`, `manage`, `export`.

A new action must be justified before introduction.

## Module IDs

Use lowercase. Use kebab-case only when multiple words are required.

Examples: `pages`, `blog`, `seo`, `forms`, `commerce`, `lead-generation`.

## Capability IDs

Use module-prefixed dot notation.

Examples: `commerce.reviews`, `commerce.returns`, `blog.scheduling`.

## File names

Use lowercase kebab-case.

Examples: `blog-post.json`, `product-variant.json`, `security-standard.md`.

## URLs

Use lowercase kebab-case.

Examples: `/registry/commerce/product`, `/standards/security`, `/developer/site-manifest`.

## CSS

Use readable kebab-case class names. The future portal should prefer component-oriented names and avoid contract-specific style duplication.

## Constants

Use `UPPER_SNAKE_CASE`.

Examples: `CURRENT_CONTRACT_VERSION`, `DEFAULT_PAGE_SIZE`.

## ID prefixes

Reserved system-generated prefixes:

- `org_` Organization
- `site_` Site
- `usr_` Organization User
- `role_` Role
- `perm_` Permission record
- `media_` Media Asset
- `page_` Page
- `post_` Blog Post
- `doc_` Documentation Article
- `svc_` Service
- `faq_` FAQ
- `form_` Form
- `subm_` Form Submission
- `lead_` Lead
- `prod_` Product
- `var_` Product Variant
- `inv_` Inventory record
- `ccust_` Commerce Customer
- `cart_` Cart
- `chk_` Checkout
- `ord_` Order
- `pay_` Payment
- `ref_` Refund
- `ship_` Shipment
- `ful_` Fulfillment
- `disc_` Discount
- `ret_` Return
- `evt_` Event
- `int_` Integration
- `ver_` Version record

IDs must not embed secrets, email addresses, domain names or business-sensitive information.

## Booleans

Use positive readable names: `isActive`, `isPublished`, `requiresShipping`, `trackInventory`.

Avoid double-negative fields.

## Dates and time

Timestamp fields end with `At`: `createdAt`, `updatedAt`, `publishedAt`.

Date-only fields end with `Date`.

Machine timestamps must use ISO 8601 with explicit timezone or UTC.

## Money

Monetary values must never rely on implicit currency.

## Status values

Status enum machine values use lowercase stable strings, such as `draft`, `published`, `archived`.
