# Contract Lifecycle and Versioning

NEXT F Contracts uses Semantic Versioning: `MAJOR.MINOR.PATCH`.

## Major
Increment for breaking changes, including removing or renaming stable required fields, changing stable semantics incompatibly, removing enum values, or changing event/permission meaning incompatibly.

## Minor
Increment for backward-compatible capabilities, including optional fields, new schemas, new events, optional capabilities, new permissions and non-breaking API additions.

An enum value may be added in a minor release only if that enum explicitly declares itself extensible and consumers are required to tolerate unknown values. Otherwise treat the change as potentially breaking.

## Patch
Increment for non-breaking corrections, documentation fixes, example fixes and implementation corrections that restore already-documented behavior.

## Status lifecycle

- experimental
- draft
- stable
- deprecated
- removed

Experimental may change without compatibility guarantees.

Draft is under review and machine identifiers are provisional.

Stable is production-safe within the documented compatibility policy.

Deprecated remains supported for a defined period and must identify a replacement or explain why none exists.

Removed is no longer present in the active contract version and requires proper major-version handling if previously stable.

## Pinning
Every production Site pins a supported Contract Version. Never infer `latest`.

## Migration
Breaking transitions require explicit migration instructions before production upgrade.

## Changelog
Stable semantic changes are recorded. Silent semantic changes are prohibited.
