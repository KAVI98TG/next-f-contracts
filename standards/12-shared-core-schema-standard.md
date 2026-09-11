# Shared Core Schema Standard

## Purpose

Phase 4 defines the reusable structural contracts that later Content, SEO, Forms, Commerce, Marketing, Integration and CMS contracts compose rather than redefine.

Primitive fields define atomic value semantics. Shared Core Schemas define reusable object structures and lifecycle behavior.

## Core rule

A later contract MUST reference an existing Shared Core Schema when the same concept already exists.

Do not copy fields such as `createdAt`, `publishedAt`, address parts, media metadata, CTA destinations or audit actor data into a new contract with different semantics.

## Schema definition shape

Every Phase 4 schema definition contains:

- `$id`
- `name`
- `version`
- `status`
- `domain`
- `category`
- `description`
- `purpose`
- `fields`
- `relationships`
- `validationRules`
- `cms`
- `delivery`
- `examples`
- `notes`

## Field references

A schema field uses exactly one value source:

- `primitive` - references a Phase 3 primitive field, or
- `schema` - references another Shared Core Schema.

A field must not declare both.

Primitive references must resolve to a canonical `fields.*` definition.

Nested schema references must resolve to a canonical Phase 4 schema.

## Required and nullable

`required` controls whether a property must be present.

`nullable` controls whether an explicitly present property may contain `null`.

These are independent concepts.

## Configuration

`config` contains only properties supported by the referenced primitive field.

Schema composition does not create new primitive field behavior.

## Validation

`validationRules` on a schema describe cross-field or object-level invariants.

Primitive validation remains defined by the referenced primitive field.

A later implementation must enforce both layers.

## Customer and Admin editing

CMS metadata describes default interface policy, not authorization.

Permission contracts remain authoritative for access control when Phase 15 is implemented.

`customerVisible` and `adminVisible` only describe intended interface exposure.

## Public delivery

`delivery.publicAllowed` means the schema is structurally eligible to appear in a public payload.

It does not mean every instance is public.

Publishing, visibility, privacy and authorization rules still apply.

## Organization, Site, identity and tenant scope

`core.organization` is the canonical NEXT F tenant organization.

`core.site` is the canonical hosting-provider-neutral customer website record.

`core.entityIdentity` provides stable entity identity.

`core.tenantScope` provides Organization and Site ownership context.

Tenant identifiers must be trusted only after server-side authorization and must never be accepted as authorization proof simply because a client submitted them.

## Actor and entity references

Audit, publishing and version records use compact canonical references.

References intentionally avoid embedding whole user or entity snapshots.

## Publishing

`core.publishing` separates lifecycle state, visibility and scheduling.

Publishing state is not inferred from a date alone.

A future content type may add stricter transitions, but it must not redefine the canonical meanings of Phase 4 publishing values.

## Versions

A Version Record is immutable after creation except for narrowly defined system metadata if a later contract explicitly permits it.

Historical snapshots are not retroactively changed when current data changes.

## Audit

Audit Records are append-only records of meaningful actions.

Audit `before` and `after` values must never be used to bypass data minimization or secret-handling rules.

Secrets must not be copied into audit snapshots.

## Address

`shared.address` is the canonical reusable structured address object.

The Phase 3 `fields.address` primitive remains the atomic editor/value primitive. Its canonical object shape is aligned to this Shared Schema. Later domain contracts should prefer `shared.address` when they need a first-class reusable object with metadata and validation.

## Media

`shared.mediaAsset` describes a media object independently of a specific storage vendor.

It stores canonical metadata and references, not provider secrets.

A public URL is optional because some assets may be private or resolved dynamically.

## Media references

`shared.mediaReference` references a Media Asset and allows contextual presentation metadata such as alt text and caption overrides without mutating the underlying asset.

## Links and CTA

`shared.link` models navigation or action destinations.

`shared.cta` composes a label and Link.

CTA contracts define intent and tracking metadata, not customer-specific button CSS.

## External references

`shared.externalReference` links a NEXT F entity to an external provider identifier without changing the canonical NEXT F model to match that provider.

## Contact points

`shared.contactPoint` models a reusable public or operational contact method such as email, phone or URL without assuming a specific business content type.

## Extension rule

A project-specific extension may add fields only when:

- no stable core field or schema already covers the requirement,
- the extension is namespaced,
- it does not redefine canonical semantics,
- it does not weaken validation or security boundaries.
