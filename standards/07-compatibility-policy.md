# Compatibility Policy

## Site compatibility

A Site declares its Contract Version through its Site Manifest. Compatibility is evaluated against explicit versions and declared bindings; a floating `latest` version is never a valid production pin.

The platform must be able to classify a Site/release relationship as compatible, compatible with an upgrade available, review required, migration required, incompatible, unknown or not applicable.

Release support state is separate from compatibility state.

## No automatic major upgrades

A Site never automatically moves between major Contract Versions. Any version-pin change is explicit and reviewable.

## Pre-1.0 releases

Coordinated `0.x` Contract Registry releases belong to the development foundation train until V1.0.0 Production Acceptance. Individual contracts may be `stable`, but the whole `0.x` release train must not be presented as a production support promise.

## Additive fields

Consumers should ignore unknown optional object fields unless a contract explicitly declares strict rejection behavior.

Writers must not assume consumers understand fields introduced after the Site's pinned version.

## Required fields

Adding a new required field to a stable object is breaking unless a documented migration/default mechanism preserves compatibility.

## Enums

Closed enums are strict. Extensible enums explicitly declare forward-compatibility expectations. Adding an enum value to a closed/strict consumer requires review.

## Events

A published Event's meaning stays stable within a major version. Optional payload additions are normally backward-compatible. Removing or renaming required Event fields is breaking.

## Permissions

Renaming or reinterpreting a stable Permission identifier is breaking. New Permissions may be added in a minor version. New privileged behavior defaults to denied unless explicitly granted.

Adding a newly required Permission to an existing operation requires compatibility review for existing roles/assignments.

## Webhooks

Webhook consumers identify Event ID and version. Payload changes follow Event compatibility rules, while signing/protocol compatibility is assessed separately.

## APIs

API Version and Contract Version evolve independently. An API states which Contract Versions or contract expectations it supports. API bindings are exact rather than floating.

## Modules and Capabilities

A Site cannot be compatible if a required Module/Capability is unknown, belongs to another Module, is reserved without its dedicated contracts, or has an unresolved required dependency.

## Integrations

Connector presence proves only that a canonical integration contract exists. It does not prove customer credential health, provider-side authorization, consent state or live provider availability.

## Runtime

Contract compatibility does not imply a Site Runtime/SDK implementation exists. Missing runtime declarations are reported as unknown rather than fabricated.

## Adapters

Provider-specific adapters translate external models to canonical contracts without changing canonical semantics.

## Deprecated support

Deprecated contracts remain documented until their support window ends, with replacement and migration guidance when available.

## Exact history

Historical compatibility claims that require a release snapshot are made only from exact archived snapshots. Missing history is reported as unknown.

## Compatibility Center

The operational rules, status aggregation, release matrix and reference assessments are defined by the NEXT F Compatibility Center Standard.

## V1 stable release policy

After formal V1.0.0 Production Acceptance, the Contract Registry uses SemVer as follows: major releases may contain breaking stable-contract changes and require explicit migration; minor releases are backward-compatible additions/deprecations; patch releases are backward-compatible fixes/documentation/tooling corrections. Site pins remain explicit and never float to `latest`. Registry production stability is separate from deployment/support evidence for Customer CMS, NEXT F Admin, Site Runtime/SDK and API runtimes.
