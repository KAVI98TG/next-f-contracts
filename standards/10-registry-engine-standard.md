# Registry Engine Standard

## Purpose

The Registry Engine is the discovery layer between authoritative machine-readable NEXT F definitions and the `contract.nextf.lk` portal.

It must never become a second source of truth.

## Authoritative index

`registry/registry.json` is the authoritative registry index for all entries exposed through the Registry Engine.

Every indexed entry must contain the standard metadata required by the current Registry Engine version.

## Required registry item metadata

Every registry item requires:

- `id`
- `name`
- `domain`
- `type`
- `version`
- `status`
- `description`
- `source`
- `phase`
- `introducedIn`
- `tags`
- `relationships`
- `permissions`
- `events`

## Contract ID rule

Registry item IDs use canonical lowercase dot notation.

IDs are permanent machine identifiers. Visual labels may change without changing the ID.

## Registry domains

Domains are controlled by `registry/domains.json`.

An entry may not invent a new domain value without first extending the domain vocabulary.

## Registry types

Registry item types are controlled by `registry/types.json`.

Type describes the kind of authoritative item, not its business domain.

## Status

Lifecycle status is controlled by `registry/statuses.json`.

The engine must render status from the registry value rather than inferring it from version numbers.

## Relationships

Relationship objects require:

- `type`
- `target`

Optional:

- `description`

A relationship target must resolve to another registry item unless it is explicitly declared as an external relationship type in a future standard.

The registry began with the Phase 2 relationship vocabulary and has been extended as typed schemas were added. The currently permitted internal relationship types are:

- `dependsOn`
- `relatedTo`
- `implements`
- `generatedFrom`
- `documents`
- `mirrors`
- `references`
- `composes`
- `optionallyComposes`
- `composesMany`
- `optionallyComposesMany`
- `optionallyReferences`
- `uses`
- `selfReferences`
- `belongsTo`
- `contains`

New relationship identifiers must be added to `registry/registry-meta.json` before a contract may rely on them.

## Permissions and events

Every registry item includes `permissions` and `events` arrays even when empty.

This keeps the metadata shape stable for future phases.

The Phase 2 foundation records do not invent future permission or event contracts merely to populate these arrays.

## Loading strategy

Preferred hosted runtime:

1. load `registry/registry.json`
2. validate minimum runtime shape
3. build in-memory indexes
4. render/search/filter from memory

Static/local fallback:

1. use generated `js/generated-registry.js`
2. generated file must carry the SHA-256 digest of the authoritative JSON source
3. validation must fail if the generated fallback digest is stale

The generated JS file is a distribution artifact, not an authority.

## Search

Registry search must match at minimum:

- ID
- name
- description
- domain
- type
- tags

Search is case-insensitive.

Exact ID matches receive priority over partial text matches.

## Filtering

Phase 2 supports:

- domain
- type
- status

Filter values must be derived from controlled vocabularies or registry content, not duplicated manually in page markup.

## Sorting

Supported deterministic sorts:

- name ascending
- ID ascending
- domain then name
- phase then name
- version then name

Changing sort must not mutate registry data.

## URL state

Registry list state may use hash query parameters:

- `q`
- `domain`
- `type`
- `status`
- `sort`

Unknown filter values must be ignored safely.

## Detail route

Registry details use:

`#/registry/item/<encoded-contract-id>`

The detail route must not fabricate a record when an ID is unknown.

## Source links

Source links point to actual repository files.

A source link is informational. The portal rendering does not override the source file.

## Copy behavior

Copy ID and copy metadata are convenience actions only.

Copy failures must not prevent browsing.

## Accessibility

Registry controls require labels.

Dynamic result counts use a polite live region.

Tables require semantic column headers.

Mobile rendering must preserve the same information without requiring horizontal page scrolling.

## Security

The public registry must never include secrets, private credentials, real customer data or privileged tokens.

## No fake future contracts

Planned Phase 3+ schemas remain planned until their phase is implemented.

The Registry Engine may index only definitions that actually exist in the repository.

## Phase 3 extension

Phase 3 adds primitive field entries to the authoritative Registry Index. The Registry Engine remains discovery metadata; individual primitive field JSON files are authoritative for field semantics. Field detail UI may combine Registry discovery metadata with the field source contract while clearly preserving that distinction.
