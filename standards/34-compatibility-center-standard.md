# NEXT F Compatibility Center Standard

## 1. Purpose

The Compatibility Center operationalizes the foundational Compatibility Policy and the Contract Diff Standard. It gives NEXT F developers, Admin tooling, Customer CMS tooling and Codex one place to determine whether a pinned Site contract release and its declared platform bindings can safely continue, require review, or require migration before an upgrade.

Compatibility is an assessment. It is not a deployment, migration, runtime-health guarantee or legal/service-level promise.

## 2. Authority chain

Compatibility decisions use this authority order:

1. the Site's explicit `nextf.site.json` declaration when assessing a Site
2. the authoritative current Contract Registry
3. exact archived Registry release snapshots
4. the Contract Diff classification engine
5. Module, Capability, API, Permission, Event, Webhook and Integration registries
6. the foundational Compatibility Policy
7. this Compatibility Center Standard
8. generated portal views

If an exact historical release is unavailable, compatibility must be `unknown` for claims that require that release. The system must never reconstruct missing history and call it exact.

## 3. Compatibility is multidimensional

A Site is not compatible merely because one version number compares successfully. Assessment can cover:

- Contract Registry release
- Site Manifest specification
- Modules
- Capabilities
- API bindings
- Permission identifiers
- canonical Events
- Webhook/Event exposure
- Integration connectors
- Customer CMS UI metadata
- NEXT F Admin UI metadata
- Site Runtime/SDK expectations
- migration/data implications

A blocking result in a required dimension prevents an overall `compatible` result.

## 4. Canonical compatibility states

The Compatibility Center uses these states:

- `compatible` - all evaluated required dimensions are satisfied for the declared target
- `compatible-with-upgrade` - current declaration remains understandable and the target contains no detected blocking contract change, but an explicit upgrade is available
- `review-required` - automated evidence cannot safely prove compatibility or a potentially breaking/deprecation/security-sensitive change needs human review
- `migration-required` - one or more detected changes require a migration or explicit implementation change before target adoption
- `incompatible` - a required binding cannot operate against the selected target as declared
- `unknown` - evidence is insufficient, historical source is unavailable or runtime compatibility is not declared
- `not-applicable` - the dimension does not apply to the assessed Site/component

The UI must display text labels; color alone cannot communicate meaning.

## 5. Release support state is separate from compatibility

`Release support` answers whether NEXT F declares a release part of an active support train. `Compatibility` answers whether two declarations/contracts can work together according to known evidence.

They must never be merged into one field.

Canonical support levels are:

- `current-development`
- `historical-development`
- `production-current`
- `production-supported`
- `maintenance`
- `deprecated`
- `unsupported`
- `history-only`

## 6. Pre-1.0 rule

Until NEXT F Contracts reaches V1.0.0 Production Acceptance, coordinated `0.x` Registry releases belong to the development foundation train.

Therefore:

- the current `0.x` release may be `current-development`
- exact previous `0.x` snapshots may be `historical-development`
- missing/partial history may be `history-only`
- the Compatibility Center must not label a `0.x` Registry release `production-current` or `production-supported`

Individual contract definitions may still carry lifecycle status `stable`. Contract lifecycle status and whole-platform production support are different concepts.

## 7. Current-release compatibility

When a Site's pinned Contract Version equals the selected target release and all declared bindings resolve, the Contract release dimension may be `compatible`.

This does not override missing runtime, API, Module, Capability, Permission, Event or Integration requirements.

## 8. Upgrade compatibility

For an exact source release and exact target release, Contract Diff evidence is interpreted conservatively:

- any `breaking` change affecting the upgrade path -> at least `migration-required`
- any `potentially-breaking` or `review-required` change -> at least `review-required`
- deprecation without a blocking change -> `review-required` unless the affected Site does not consume the deprecated definition and that can be proven
- only non-breaking/documentation/metadata additions -> `compatible-with-upgrade`
- no changes -> `compatible`

This is a release-level default. A Site-specific assessment may be less severe if it can prove the Site does not consume the affected contracts, or more severe if runtime/data evidence requires it.

## 9. Site Manifest checks

A Site compatibility assessment must be able to check:

- exact Contract Version pin
- supported Manifest schema/specification version
- recognized Site type
- recognized environment kinds
- mandatory runtime capabilities
- known Modules
- known Capabilities owned by enabled Modules
- required Module dependencies
- reserved Capability gates
- exact API bindings
- declared Event/Tracking support
- declared Integration connectors
- extension declarations

Unknown identifiers cannot be silently ignored in a production-intended assessment.

## 10. Module and Capability checks

Required Module dependencies must resolve.

A Capability must:

- exist in the Module Registry
- belong to the declared Module
- not be reserved/blocked unless its dedicated contracts exist and the release explicitly enables it

Recommended/optional dependencies may produce advisory findings but do not automatically block compatibility.

## 11. API compatibility

API Version and Contract Version are independent.

Each API binding must be exact. A floating `latest`, wildcard or omitted required API version is invalid for a production-intended Site.

Compatibility is `unknown` when the registry does not declare the relationship between the requested API version and the selected Contract Version.

## 12. Permission compatibility

Canonical Permission IDs are stable machine identifiers.

A removed/renamed required Permission is breaking. A newly required Permission for an existing operation is at least review-required and may be incompatible for existing roles until role/assignment migration is completed.

UI visibility never proves permission compatibility; authorization is re-evaluated server-side.

## 13. Event compatibility

Canonical Event identity and payload semantics follow the Event Registry Standard.

Removing an Event or required payload property is breaking. Adding optional payload properties is normally additive. Consumers that declare strict payload parsing require additional review.

Tracking observations remain separate from authoritative domain Events.

## 14. Webhook compatibility

Webhook compatibility depends on:

- canonical Event eligibility
- webhook protocol/signature version
- required receiver behavior
- payload compatibility
- endpoint/subscription configuration

A Webhook delivery protocol change cannot be inferred safe solely from an Event being present.

## 15. Integration compatibility

Provider connector compatibility must be evaluated against the canonical Integration Registry rather than customer-site vendor code.

A connector being present does not prove that customer credentials, provider account configuration, consent state or provider-side permissions are healthy. Those are runtime/operational checks.

## 16. UI metadata compatibility

Customer CMS and NEXT F Admin UI metadata are declarative presentation bindings. They may evolve independently from underlying business schema versions.

UI metadata compatibility cannot override Contract, Permission, Commerce Rule or API incompatibility.

## 17. Site Runtime compatibility

The Compatibility Center may declare expected Site Runtime/SDK primitives and versions, but it must show `unknown` when no implemented runtime release or runtime compatibility declaration exists.

The portal must never fabricate runtime support merely because the contracts exist.

## 18. Site-specific consumption

Release-level Diff includes the whole Registry. Site-specific compatibility should narrow impact using the Site Manifest, enabled Modules/Capabilities and explicit contract/API/Event/Integration bindings where those are known.

Absence from a Manifest must not be used to prove non-consumption when the Manifest specification does not require that dependency to be declared.

## 19. Findings

Every assessment finding must contain:

- stable finding code
- dimension
- state/severity
- human-readable message
- evidence/source reference where available
- affected identifier(s)
- recommended action when action is required
- whether it blocks the target

Findings must not expose secrets or customer-sensitive payloads.

## 20. Overall status aggregation

Default precedence is:

`incompatible` > `migration-required` > `review-required` > `unknown` > `compatible-with-upgrade` > `compatible` > `not-applicable`

`unknown` may be configured as blocking for production-intended checks. During the pre-1.0 development train it must remain visibly distinct from a pass.

## 21. Upgrade path

A compatibility assessment may recommend an explicit upgrade path but must not execute it.

An upgrade path can include:

- source version
- target version
- intermediate required versions
- Diff references
- migration references
- required manual reviews
- validation gates
- rollback/recovery requirement

## 22. No silent upgrade

Compatibility Center actions must never:

- modify `nextf.site.json`
- change a Site's Contract Version
- mutate customer content/data
- migrate a database
- change external provider configuration
- deploy a website

Those actions belong to explicit implementation/migration workflows.

## 23. Reference Site assessments

The portal may assess repository reference examples because their manifests are non-secret test/reference data.

It must not imply that those reference assessments represent a real customer's production state.

## 24. Real Site assessment boundary

Real Site compatibility belongs to authenticated NEXT F Admin/API workflows and later validation tooling. `contract.nextf.lk` remains a public/static technical authority and must not require customer records or secrets.

## 25. Support windows

Production support windows begin only when NEXT F formally declares a production support train. The registry must record support dates/policy explicitly rather than assuming a duration from SemVer.

## 26. Exact history gaps

A historical release without an exact Registry snapshot is `unknown` for exact structural compatibility and normally `history-only` for support presentation.

The UI must explain the missing evidence.

## 27. Security-sensitive changes

Changes involving Authentication, Permissions, secrets, payment boundaries, tenant isolation, Webhook signing or privacy/data exposure are never auto-approved solely because a structural Diff labels them additive.

They require the stricter applicable rule or manual review.

## 28. Compatibility Matrix

The Compatibility Center may publish a matrix of current canonical platform surfaces and their own specification/version identifiers.

Matrix entries must distinguish:

- a contract/specification exists
- the surface is declared compatible by contract
- a runtime implementation exists
- runtime health was checked

These are separate facts.

## 29. Codex requirement

Before changing a Site's pinned Contract Version, Codex must:

1. read the source Site Manifest
2. inspect Compatibility Center evidence
3. inspect Contract Diff for source -> target
4. identify affected enabled Modules/Capabilities
5. identify API/Permission/Event/Integration impact
6. prepare migration/review work when required
7. validate the target declaration
8. update the pin only as an explicit task step
9. report evidence and remaining unknowns

Codex must stop rather than declare compatibility when a required dimension is unknown or conflicting.

## 30. Accessibility

Status must never depend on color alone. Tables require headers, cards require meaningful labels, and long machine IDs remain keyboard-readable and horizontally scrollable where needed.

## 31. Privacy

The public Compatibility Center contains contract metadata, release metadata and reference Site examples only. It must not index real customer Site IDs, tokens, private URLs, credentials, provider secrets or customer business records.

## 32. Performance

Compatibility summary data is small and may load with the lifecycle route. Exact historical source bodies remain owned by Contract Diff and stay lazy-loaded there.

## 33. Non-goals

The Compatibility Center is not:

- a deployment system
- a migration executor
- a live hosting monitor
- a customer account database
- a provider credential tester
- a substitute for contract validation
- a guarantee that third-party provider behavior will never change
