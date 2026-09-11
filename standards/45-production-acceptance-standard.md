# NEXT F Production Acceptance Standard

## 1. Purpose

Phase 37 is the formal acceptance gate for the first stable NEXT F Contract Registry release. It is a release acceptance process, not a feature-development phase. V1.0.0 may be declared only when blocking Registry acceptance checks pass and the V1 baselines are frozen with integrity evidence.

## 2. Meaning of V1.0.0

V1.0.0 declares the **Contract Registry** stable under the documented SemVer, compatibility, deprecation and migration policies. Stable identifiers and stable contract meaning may not silently change. Customer Sites may explicitly pin `1.0.0`.

V1.0.0 does **not** claim that every consumer runtime is deployed. Customer CMS, NEXT F Admin, Site Runtime/SDK and API runtimes retain their independently evidenced compatibility state. Missing runtime evidence remains `unknown`; metadata/specification availability is not converted into a deployment claim.

## 3. SemVer after V1

- **major**: breaking stable-contract changes that require explicit migration/review; Sites never automatically move across a major version.
- **minor**: backward-compatible additions, compatible extensions and deprecations that preserve the documented compatibility policy.
- **patch**: backward-compatible fixes, documentation/metadata corrections and tooling corrections that do not change stable contract semantics.
- Site Manifest Contract Version pins are explicit. `latest` is not a valid production pin.

## 4. Deprecation and removal

Deprecation follows the canonical lifecycle and Deprecation Standard. A stable item is not removed silently. A removal requires lifecycle evidence, an appropriate major-version transition when the item was stable, and migration/replacement evidence where applicable. Support windows are explicit; a duration is never inferred from SemVer alone.

## 5. Upgrade procedure

An upgrade follows: `pinned version -> Compatibility Center -> Contract Diff -> migration/review plan -> browser/CLI validation -> explicit Site Manifest pin change`. Automatic upgrades to a floating latest release are forbidden.

## 6. Migration evidence

Migration claims require authoritative Changelog, Diff, Compatibility and Deprecation evidence. Missing snapshots/history remain unavailable/unknown and are not reconstructed.

## 7. V1 frozen baselines

The production release freezes integrity-addressed snapshots for the Registry, Modules, Capabilities, Events, Permissions, Webhook eligibility, API contracts, Site Manifest schema, Customer CMS metadata, NEXT F Admin metadata and Security/Privacy/Accessibility/Performance standards. The release manifest records exact snapshot references and hashes.

## 8. Acceptance statuses

Every acceptance category is `PASS`, `FAIL` or `DEFERRED`. A `FAIL` in a blocking Registry category prevents V1.0.0. A `DEFERRED` item is permitted only when its evidence is outside Registry stability, its reason is explicit, and the release manifest records why it does not invalidate V1 Registry stability.

## 9. Packaging

The V1 package includes source, final README, AGENTS, Development Standard, Changelog, release manifest, integrity hashes, validation evidence and the Production Acceptance report. The release package is not labeled V1 until blocking acceptance checks pass.
