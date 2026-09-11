# NEXT F Deprecation Standard

**Phase:** 28  
**Introduced in:** V0.29.0  
**Status:** Stable registry standard

## Purpose

The Deprecation System governs how canonical NEXT F definitions move from `stable` to `deprecated` and ultimately `removed`. It is an operational lifecycle system, not a decorative status flag.

## Canonical lifecycle

Only these lifecycle values are allowed: `experimental`, `draft`, `stable`, `deprecated`, `removed`.

A stable definition must not be removed without an explicit major-version-compatible lifecycle transition. Deprecated definitions remain discoverable for compatibility review until their authoritative support window ends. Removed definitions remain discoverable in historical lifecycle views.

## Replacement semantics

Every deprecation record must state one replacement disposition: `replacement`, `no-replacement`, or `unknown`. A known replacement must identify the canonical Registry ID and provide implementation guidance. No replacement must be explicit. Unknown must remain unknown; it must not be inferred.

## Migration behavior

Deprecation never silently upgrades a Site. Existing Sites remain pinned to their declared Contract Version until an explicit review, migration plan, validation, and upgrade decision occurs. New implementations should prefer the replacement definition when one exists.

## Evidence and support windows

`deprecatedSince`, last supported version, support-until policy/date, removal target, Diff evidence, Changelog references and migration guidance must only be populated when authoritative evidence exists. Missing dates or historical snapshots are not reconstructed.

## Codex behavior

Codex must warn when new work consumes deprecated definitions, prefer the replacement for new work, and produce a migration plan before replacing deprecated behavior in an existing Site. It must report deprecation impact in implementation summaries and must not auto-upgrade old Sites.

## Current V0.29.0 state

At the time of Phase 28 acceptance, the canonical Registry contains no items with lifecycle status `deprecated` or `removed`. The authoritative deprecation record set is therefore intentionally empty. This is a truthful empty state, not missing data.
