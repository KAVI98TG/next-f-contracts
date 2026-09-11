# NEXT F Content Contract Standard

## Purpose

Phase 5 defines the reusable content-domain contracts used by NEXT F Customer CMS, Admin, APIs and customer websites.

The content layer is intentionally structured and presentation-neutral. It allows customers to control approved business content while NEXT F retains control over site code, components, layout, responsive behavior and technical architecture.

## Contract families

Phase 5 includes:

- Pages and page-section envelopes
- Reusable Content
- Blog Posts, Authors, Categories and Tags
- Documentation Collections, Categories and Articles
- FAQs, Services, Testimonials, Team Members and Business Locations
- Navigation and Navigation Items
- Legal Pages
- Custom Collection definitions and Custom Collection Entries

## Mandatory composition

Content entities use Phase 4 Shared Core Schemas for:

- identity
- tenant scope
- publishing
- version/revision state
- media references
- links and CTA
- contact/address structures

Leaf values use Phase 3 Primitive Fields.

Do not copy Phase 3/4 structures into a content schema when composition is possible.

## Customer CMS boundary

Customer editors may change contract fields explicitly marked customer-editable.

They do not automatically receive control over:

- HTML templates
- CSS
- JavaScript
- arbitrary source code
- canonical contract IDs
- tenant scope
- schema definitions
- integration secrets
- NEXT F platform configuration

## Page composition

`content.page` contains ordered `content.pageSection` references.

Phase 5 defines the section envelope only.

Phase 6 defines concrete Block contracts such as Hero, Features, FAQ and CTA.

A `content.pageSection.content` payload must never be interpreted as unrestricted executable HTML or JavaScript.

## Blog editor expectation

A Blog Post is a full editorial entity, not a small modal form.

The Customer CMS should provide a dedicated editorial workspace with:

- title
- slug
- excerpt
- structured rich-content editor
- media insertion
- featured media
- author
- categories
- tags
- related posts
- publishing
- preview
- scheduling
- revision history

SEO and focus-keyword controls are composed in Phase 7 rather than duplicated inside the Blog Post schema.

## Documentation

Documentation is separate from Blog.

Collections organize documentation sets. Categories organize navigation within collections. Articles contain structured searchable documentation content, related articles and approved attachments.

## Reusable Content

Reusable Content is for canonical Site values that may appear in multiple places.

Examples:

- main phone number
- company description
- primary CTA
- business hours summary

Reusable Content must not be used for secrets or arbitrary script injection.

## Navigation

Navigation contracts control semantic content only:

- labels
- links
- hierarchy
- order
- enabled state
- visibility

The customer does not control navbar/footer component source through this contract.

## Legal pages

The platform structures and versions legal content but does not imply that NEXT F authored the policy or guarantees legal compliance.

## Custom Collections

Custom Collections are a critical reuse mechanism.

NEXT F Admin defines the collection schema using registered primitive/schema contracts.

Authorized customer users manage entries generated from that definition.

This enables customer-specific structures such as:

- Projects
- Properties
- Courses
- Vehicles
- Jobs
- Events

without building a new CMS module for every customer.

Custom Collection definitions must not permit arbitrary executable field definitions.

## Future bindings

Phase 5 deliberately does not fabricate contracts assigned to later phases.

Content definitions may declare future integration points for:

- Phase 6 Block Registry
- Phase 7 SEO Contracts
- Phase 13 Event Registry
- Phase 15 Permission Registry

These references are planning metadata only until the relevant authoritative contract exists.

## Routing

A content model declares routing as:

- `required`
- `optional`
- `none`

Routing declares whether the content may require a public URL. It does not prescribe a web framework or hosting provider.

## Public delivery

A schema being `publicAllowed` does not make every record public.

Public delivery additionally requires:

- correct Site scope
- publishing eligibility
- visibility eligibility
- field-level public safety
- authorization where the visibility model requires it

## Tenant isolation

Every tenant-scoped content entity composes `core.tenantScope`.

Cross-Site relations are rejected unless a future explicit contract authorizes them.

## Contract-first AI development

Codex must use these content contracts when building a NEXT F customer website.

It must not invent parallel Page, Blog, Documentation, Navigation, Service or Custom Collection models when these contracts cover the requirement.
