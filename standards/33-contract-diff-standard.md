# NEXT F Contract Diff Standard

## 1. Purpose

The Contract Diff system provides a deterministic, reviewable comparison between two exact NEXT F Contract Registry releases. It exists to show what was added, removed or changed before a Site, API, CMS, Admin surface or integration is upgraded.

The Diff system is an analysis tool. It does not silently migrate a Site and it does not certify compatibility on its own.

## 2. Source authority

A comparison may use only release snapshots that are explicitly marked as exact and whose source Registry snapshot is available.

The system must never reconstruct an unavailable historical release and present the reconstruction as authoritative.

Every release snapshot stores source integrity hashes. Generated browser fallbacks are derived artifacts and never outrank the archived source snapshot.

## 3. Comparison identity

A comparison is identified by:

- `fromVersion`
- `toVersion`
- optional filters

The two versions must be explicit. A floating `latest` value is not a valid stored comparison identity.

## 4. Supported comparison levels

The system compares:

- Registry item presence
- Registry metadata
- lifecycle status
- contract version metadata
- source-file content hash
- structured JSON paths
- schema fields
- field required/nullability rules
- primitive/schema bindings
- enum options
- numeric/string validation constraints
- relationships
- permission associations
- Event associations
- validation rules
- selected machine metadata

Textual standards and non-JSON sources are hash-compared. Their prose may be reported as changed, but the automated engine must not infer semantic compatibility from prose alone.

## 5. Canonical change kinds

Changes are classified with controlled machine identifiers. Core kinds include:

- item-added
- item-removed
- item-modified
- status-changed
- version-changed
- field-added
- field-removed
- field-required-changed
- field-nullability-changed
- field-type-changed
- validation-tightened
- validation-relaxed
- enum-value-added
- enum-value-removed
- relationship-added
- relationship-removed
- permission-added
- permission-removed
- event-added
- event-removed
- validation-rule-added
- validation-rule-removed
- validation-rule-changed
- documentation-changed
- metadata-changed
- source-changed

## 6. Compatibility impact classes

The automated engine may classify a change as:

- `breaking`
- `potentially-breaking`
- `non-breaking`
- `deprecation`
- `documentation`
- `metadata`
- `review-required`
- `none`

A conservative classification is preferred over a falsely safe classification.

## 7. High-confidence breaking changes

The following are breaking by default for a previously stable contract:

- removing a Registry item
- removing a field
- changing an optional field to required
- changing a nullable field to non-nullable
- changing a field primitive/schema/items binding incompatibly
- removing an allowed closed-enum value
- tightening a minimum constraint
- tightening a maximum constraint
- increasing `minLength`
- decreasing `maxLength`
- removing a canonical Event
- removing or renaming a canonical Permission
- changing from deprecated to removed

A project may still require manual review because runtime migration risk can exceed what the structural diff detects.

## 8. Non-breaking changes

The following are normally non-breaking when their surrounding contract does not state otherwise:

- adding a new Registry item
- adding an optional nullable field
- relaxing a required field to optional
- relaxing non-nullable to nullable
- relaxing validation limits
- adding a new independent capability or contract
- adding an Event without changing existing Event semantics

Adding an enum value is not automatically safe for strict consumers. Unless the enum explicitly declares forward extensibility, classify it as `potentially-breaking` or `review-required`.

## 9. Deprecation

Changing a stable item to deprecated is a `deprecation` change. It is not equivalent to removal.

A deprecation should identify a replacement and migration guidance when available. Absence of migration guidance is reported but does not invent one.

## 10. Permissions

Permission changes receive security-sensitive treatment.

- removing a Permission identifier is breaking
- changing Permission semantics is breaking or review-required
- adding a new Permission is normally additive
- adding a new required Permission to an existing operation may break previously authorized clients and must be treated as potentially breaking

The Diff engine must not assume a Registry `permissions` association always means a runtime requirement unless the source contract says so.

## 11. Events

Canonical Event identity and payload compatibility follow the Event Registry Standard.

Removing an Event is breaking.

For payloads, adding a required field or removing an existing field is breaking. Adding an optional field is normally non-breaking.

## 12. Relationships

Removing or changing a structural relationship is at least review-required and may be breaking.

Adding a relationship is normally additive but may still require review when it changes lifecycle, ownership, authorization or transaction semantics.

## 13. Validation rules

A machine-detectable tightening is breaking.

A validation-rule prose change cannot be proven safe by text comparison. It is classified as review-required unless a stronger structural rule applies.

## 14. Recommended semantic version impact

The Diff engine may recommend:

- `major` when at least one high-confidence breaking change exists
- `minor` for backward-compatible additions or deprecations with no breaking change
- `patch` when only documentation/metadata corrections exist
- `none` when no change exists
- `manual-review` when unresolved potentially-breaking or semantic changes prevent a safe recommendation

This is a recommendation, not an automatic release action.

## 15. Exact historical snapshots

The Registry may contain gaps where an archived historical release is unavailable.

Those releases must be shown as unavailable and disabled for exact comparison. The UI must never imply that a reconstructed snapshot is exact.

## 16. Release provenance

Every exact historical release entry records:

- release version
- phase when known
- Registry item count
- source type
- source archive or current repository provenance
- Registry SHA-256
- snapshot generation status

## 17. Snapshot deduplication

Historical item source snapshots may be content-addressed by SHA-256 so unchanged definitions are stored once and referenced by many releases.

The hash is an integrity identifier, not a secret.

## 18. Raw-path diff

Raw structural comparison must:

- normalize JSON object key ordering
- avoid treating irrelevant object-key order as a change
- preserve array order where order is semantically relevant
- normalize known keyed arrays such as `fields`, `relationships` and `validationRules` for readable path comparison
- distinguish absent from explicit `null`

## 19. No silent migration

The Diff UI can link to future migration guidance, but it never changes a Site Manifest, upgrades a Contract Version, modifies customer data or executes a migration.

## 20. Codex requirement

Before a Contract Version upgrade, Codex must inspect the relevant Diff and compatibility information. If a breaking or review-required change affects enabled Site modules/capabilities, the implementation plan must address it explicitly.

## 21. UI requirements

The Contract Diff interface must provide:

- explicit From and To release selectors
- release provenance and availability
- Swap action
- comparison summary
- added/removed/modified counts
- compatibility-impact counts
- recommended version impact
- domain/type/impact/change filters
- search by machine ID or name
- item-level detail
- field-level changes
- relationship, Permission and Event changes
- validation changes
- raw-path changes
- item release history
- direct links back to the canonical Registry item

## 22. Accessibility

Diff meaning cannot rely on color alone. Added, removed, changed, breaking and deprecated states require visible text labels/icons.

Before/after values must remain keyboard readable and horizontally scrollable where necessary.

## 23. Security and privacy

Release snapshots contain contract definitions only. They must never include runtime secrets, customer records, production tokens or private provider credentials.

## 24. Performance

Release comparison runs locally and must remain bounded. Full unchanged source bodies are not rendered by default. The large historical Diff dataset must be lazy-loaded only when the Contract Diff route is opened so ordinary portal navigation does not pay the history-data cost. Detailed source snapshots are supplied through authoritative JSON or a compressed generated local fallback.

## 25. Non-goals

The Contract Diff system is not:

- a Git replacement
- an automatic migration executor
- a semantic proof engine
- a deployment system
- a Site database diff
- a customer-content diff

It compares NEXT F Contract Registry releases.
