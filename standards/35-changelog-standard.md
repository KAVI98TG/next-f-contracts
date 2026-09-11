# NEXT F Changelog Standard

## 1. Purpose

The Changelog is the authoritative release-note layer for the coordinated NEXT F Contract Registry. It explains what changed in each Registry release and links narrative change records to exact Contract Diff, Compatibility Center and future migration/deprecation evidence.

The Changelog is not a replacement for exact structural evidence.

## 2. Authority

Authoritative release-note records live under:

`registry/changelog/releases/`

The root `CHANGELOG.md` is generated from those machine-readable release records.

When narrative release notes conflict with exact machine-readable contract definitions, the canonical contract definition wins. When release notes and Contract Diff disagree about structural change, the exact archived Registry evidence wins for structural facts and the discrepancy must be corrected.

## 3. Release identity

Every published Changelog release must have:

- one exact semantic version
- one NEXT F phase number
- one release title
- one release status
- explicit evidence/provenance metadata
- zero or more categorized change entries

A release version is unique. A Phase maps to one coordinated release in the current pre-1.0 build train.

## 4. Canonical change categories

Canonical categories are:

- `added`
- `changed`
- `fixed`
- `security`
- `deprecated`
- `removed`
- `breaking`
- `migration`
- `integrity`
- `documentation`
- `preserved`
- `internal`

Human section labels may be friendlier, but each machine entry must resolve to one canonical category.

## 5. Required release categories

A release does not need to contain every category. Empty categories are omitted.

Breaking, deprecated, removed, security and migration entries must never be hidden inside a generic `changed` section when they are known to belong to the more specific category.

## 6. Change-entry identity

Every machine-readable change entry has a deterministic entry ID.

An entry records:

- concise release-note text
- canonical category
- original human section label where relevant
- provenance
- affected Registry IDs when known
- compatibility impact when explicitly known
- related Diff/Compatibility/Migration links when available

A release-note entry must not claim more certainty than its evidence supports.

## 7. Evidence levels

Release notes distinguish narrative evidence from exact Registry evidence.

Supported evidence levels include:

- `notes-and-exact-registry`
- `release-notes-only`
- `exact-registry-only`
- `insufficient-history`

An exact Registry snapshot means the Registry state for that release is archived and hash-addressable. It does not prove runtime deployment, customer data migration, or production compatibility.

## 8. Historical gaps

Missing exact historical Registry snapshots must remain visible as missing evidence.

The system must never reconstruct an unavailable exact release and then label the reconstruction authoritative.

Narrative release notes may still be displayed when the historical `CHANGELOG.md` contained them, but their evidence badge must accurately disclose the absence of an exact Registry snapshot.

## 9. Relationship to Contract Diff

Contract Diff answers:

> What structurally changed between two exact Registry snapshots?

Changelog answers:

> What did NEXT F intentionally add, change, fix, secure, deprecate, remove, migrate, preserve or document in this coordinated release?

The two systems complement each other.

A structural Diff may detect a change that release notes missed. A release note may describe a semantic, process, documentation or security change that structural Diff cannot infer.

## 10. Relationship to Compatibility Center

Compatibility Center determines whether evidence supports adoption of a target version.

A Changelog entry alone cannot certify compatibility.

Changelog UI may display Compatibility status and support-level information, but those values remain owned by the Compatibility Center.

## 11. Relationship to migrations and deprecations

A breaking, removed or migration-required change must eventually reference an explicit migration path when one exists.

A deprecated change must eventually identify:

- deprecated item
- replacement where applicable
- deprecation version
- support window where defined
- migration guidance

Phase 28 owns the dedicated Migration and Deprecation registries.

## 12. Security entries

Security release notes must disclose enough information for operators to understand required action without leaking secrets, exploit material, private customer data or information that would create unnecessary risk.

A future security advisory may be referenced by identifier rather than embedding sensitive details in the public Changelog.

## 13. Corrections

Published historical release notes must not be silently rewritten to change technical meaning.

A correction must retain:

- release version being corrected
- correction timestamp/version when available
- previous text or reference
- corrected text
- reason
- provenance

Formatting normalization that does not change meaning does not require a semantic correction record.

## 14. Generated Markdown

`CHANGELOG.md` is a generated convenience projection.

It must:

- list releases in descending semantic-version order
- preserve categorized entries
- state that machine-readable release JSON is authoritative
- avoid fabricating release dates
- avoid implying production support for pre-1.0 development releases

## 15. Search and filtering

The Changelog explorer must support discovery by:

- release version
- Phase
- release title
- entry text
- category
- evidence level
- affected Registry identifier when available

Exact version searches should rank before natural-language text matches.

## 16. Runtime and performance

Historical Changelog data should be loaded only when the Changelog tool is opened. Normal portal boot must not require all release-note payloads.

A generated local fallback may exist for `file://` review, provided it is integrity-bound to the authoritative Changelog sources.

## 17. Privacy and secrets

Release notes are public technical metadata.

They must not contain:

- API secrets
- passwords
- private keys
- OAuth tokens
- webhook signing secrets
- customer records
- private form submissions
- raw personal data
- payment-card data

## 18. Codex rule

Before changing a pinned Site Contract Version, Codex must review:

1. target Changelog release notes
2. exact Contract Diff when available
3. Compatibility Center assessment
4. migration/deprecation guidance when applicable

Codex must not infer that a change is safe merely because a Changelog section says `Added` or `Fixed`.

## 19. Pre-1.0 status

All V0.x Changelog releases belong to the NEXT F development foundation train. Publication in the Changelog does not mean production support has been declared.

## 20. No side effects

The Changelog is read-only lifecycle evidence. It must never:

- edit a Site Manifest
- migrate customer data
- deploy a website
- enable a Module
- change permissions
- execute a webhook
- modify an Integration
- upgrade a Site automatically
