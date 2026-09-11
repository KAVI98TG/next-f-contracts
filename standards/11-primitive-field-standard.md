# Primitive Field Standard

## 1. Purpose

Primitive Fields are the smallest reusable value and editor contracts used to compose later NEXT F schemas.

Phase 3 defines exactly 33 primitive field types. A later content, SEO, commerce, form or custom schema should compose these primitives instead of inventing one-off field semantics.

## 2. Authority

For field semantics, authority is:

1. `registry/fields/definitions/*.json`
2. this standard
3. generated `registry/fields/index.json`
4. generated portal views and examples

The individual definition file is authoritative for the field type.

## 3. Field identity

Primitive field IDs use `fields.<fieldName>`.

Examples:

- `fields.text`
- `fields.richText`
- `fields.currency`
- `fields.relation`

IDs are stable machine identifiers and are never translated for display.

## 4. Parent schema responsibility

A primitive field does not independently decide where it appears or who can edit the parent entity.

The parent schema supplies at least:

- field key
- label when exposed in a CMS
- required/nullable policy
- permissions inherited from the parent operation
- field-specific configuration allowed by the primitive
- location/order in the editor

## 5. Absence, null and empty values

These are distinct concepts:

- absent means the property is not present
- null means the property is explicitly present with `null`, and is valid only when `nullable` permits it
- an empty string is a present string and is evaluated by string validation rules
- an empty array is a present array and is evaluated by `minItems`

Implementations must not silently collapse these states unless a specific parent contract defines normalization.

## 6. Defaults

`defaultValue` is declarative schema behavior. UI placeholders are never default values.

Defaults must be deterministic and must not silently introduce privileged or personally identifying information.

## 7. Normalization

Normalization runs before validation only when the field definition and parent configuration permit it.

Examples include trimming whitespace or normalizing phone input through an approved server-side adapter.

Normalization must not silently alter meaning.

## 8. CMS metadata

Primitive definitions declare the default editor family and supported configuration properties.

CMS metadata is presentation guidance. It does not replace server-side validation or authorization.

## 9. Search, filter and sort capabilities

A primitive declares whether it can normally participate in:

- full-text/search indexing
- structured filters
- deterministic sorting

A capability being supported does not automatically enable it. The parent schema must opt in where applicable.

## 10. Localization

`localizable` means the primitive can safely carry per-locale values when a later localization-capable parent schema defines locale behavior.

It does not mean every use of the field is translated.

## 11. Revision tracking

Primitive definitions declare whether the value can safely participate in parent revision snapshots.

The parent publishing/version contract owns revision lifecycle behavior.

## 12. Rich text safety

`fields.richText` is structured safe document data.

It is not arbitrary executable HTML and does not grant permission for script execution, inline event handlers or unsafe embeds.

## 13. Monetary values

`fields.currency` always carries both amount and currency.

Currency is never inferred from the visitor, browser locale or Site unless a higher-level contract explicitly supplies a default before the value is persisted.

## 14. Date and time

- `fields.date` has no time or timezone
- `fields.time` has no date or implicit timezone
- `fields.dateTime` follows an explicit timezone policy and normally represents an ISO 8601 zoned instant

Implementations must not silently reinterpret local time as UTC.

## 15. Relations

`fields.relation` stores canonical opaque IDs, not embedded target objects.

Existence, target type, tenant boundary and authorization are verified server-side.

## 16. Media and file primitives

Image, gallery, video, audio, file and document primitives store Media Asset references rather than arbitrary filesystem paths or remote HTML snippets.

MIME type, extension, size and image dimension constraints are server-side validation concerns.

## 17. Location primitives

Phase 3 includes primitive address, coordinates and location value shapes so future schemas have one canonical representation.

These primitives do not make NEXT F a mapping, geocoding, domain or hosting provider.

## 18. Hidden and read-only

`fields.hidden` affects editor visibility only. It is never an authorization control.

`fields.readonly` rejects direct edits in the applicable context but trusted server processes may update the value.

## 19. JSON and code

Generic JSON should be used only when a dedicated reusable schema is not appropriate.

Code values are inert text. Storing code does not imply executing code.

## 20. Extension rule

A project must not invent a new primitive field merely because a different editor is desired.

First determine whether an existing primitive can use a different parent-level CMS editor configuration.

If a genuinely new value semantic is required, create a Contract Extension Proposal.
