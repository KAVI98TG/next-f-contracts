# NEXT F Block Contract Standard

Version: **V0.7.0**

## Purpose

Block Contracts define the structured content accepted by reusable frontend sections. They let Customer CMS users change approved content while NEXT F retains control of HTML structure, layout, CSS, responsive behavior, animation and application logic.

## Fundamental rule

A Block is a **content contract**, not a website builder instruction.

A Block may define:

- editable copy
- canonical media references
- canonical links and CTAs
- references to reusable content entities
- ordered structured items
- narrowly controlled behavior flags
- a developer-approved `variantKey`

A Block must not define:

- arbitrary HTML
- arbitrary JavaScript
- arbitrary CSS
- arbitrary inline scripts
- unrestricted iframes
- hosting configuration
- domain configuration
- secrets
- raw payment credentials

## Page Section binding

`content.pageSection.blockType` must resolve to a compatible section Block contract such as `blocks.hero`.

`content.pageSection.content` must validate against the resolved Block contract.

`content.pageSection.blockVersion`, when present, pins the compatible Block version used by that section.

Embedded Block helper schemas, such as `blocks.featureItem`, are not valid direct Page Section `blockType` values.

## Section versus embedded contracts

`blockModel.kind = section`

The contract may be referenced directly by `content.pageSection.blockType`.

`blockModel.kind = embedded`

The contract exists only as a nested reusable structure inside a section Block.

## Presentation boundary

All Block definitions declare:

- `developerControlledPresentation: true`
- `allowsArbitraryHtml: false`
- `allowsArbitraryCss: false`
- `allowsArbitraryScript: false`

The frontend decides component composition, breakpoints, spacing, typography, styling and animation.

## Variant keys

Some Blocks expose an optional `variantKey`.

A variant key:

- is an approved component implementation key
- is not a CSS class field
- is not arbitrary customer styling
- must resolve to a variant supported by that Site frontend
- is NEXT F/Admin controlled by default

## Structured arrays

When a field uses `fields.json` with `itemsSchema`, every array item must validate against the referenced embedded schema.

This mechanism exists because the Phase 3 primitive registry intentionally keeps JSON generic while Phase 6 provides typed item semantics above it.

## Content references

Listing Blocks should reference canonical content entities instead of duplicating source content.

Examples:

- Services -> `content.service`
- Testimonials -> `content.testimonial`
- FAQ -> `content.faq`
- Team -> `content.teamMember`
- Locations -> `content.location`
- Documents -> documentation contracts

## Selection modes

A listing Block may support explicit selection modes such as manual or automatic selection.

Automatic selection must:

- remain inside the Site by default
- select only eligible published records for public delivery
- have deterministic ordering rules in the implementation
- respect any configured limit

## Rich content

Rich content uses `fields.richText` and the safe NEXT F rich-content envelope.

Raw script execution is never implied.

## Video and embeds

The canonical Video Block supports managed media or approved external URLs.

Arbitrary iframe/embed HTML is prohibited. External providers require an approved frontend/provider adapter.

## Pricing boundary

`blocks.pricing` and `blocks.pricingPlan` are marketing display contracts.

They are not authoritative transactional Commerce pricing. Ecommerce checkout prices must come from Commerce contracts once enabled.

## Forms boundary

`blocks.form` places a form. It does not define the Form itself.

Until Phase 8 introduces `forms.form`, the Block uses a canonical entity reference and explicitly requires that reference to resolve to the Forms contract once available.

## Custom Block boundary

`blocks.custom` is not arbitrary JSON freedom.

It may only reference a registered, Site-authorized extension contract. The extension contract must be versioned, validated and unable to override existing canonical semantics.

## Accessibility

Every Block declares accessibility requirements where relevant. Frontend components must satisfy those requirements regardless of visual variant.

Accessibility metadata is normative implementation guidance, not decorative documentation.

## Customer CMS

The CMS may generate Block editors from:

- field definitions
- nested schemas
- editability metadata
- field groups
- validation rules
- relations
- accessibility/help metadata

CMS editing does not transfer presentation authority to the customer.

## Codex rule

When a Block exists in this registry, Codex must use it rather than inventing a parallel page-section payload.

When a needed Block does not exist, Codex must either:

1. compose the requirement from existing Blocks, or
2. propose a registered extension/canonical contract addition.
