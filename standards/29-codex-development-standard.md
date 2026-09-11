# NEXT F Codex Development Standard

## 1. Purpose

This standard is the permanent operational development contract for Codex and other AI coding agents working on NEXT F customer websites, Customer CMS, NEXT F Admin, APIs, integrations, commerce implementations, migrations and contract-aware maintenance.

The goal is repeatability. A new customer project must not cause the agent to rediscover or reinvent the same architecture.

## 2. Authority model

Codex is an implementation agent. It is not an authority over NEXT F contracts.

For canonical semantics, use this authority chain:

1. authoritative machine-readable contract files in the selected NEXT F Contract release
2. the Site Manifest for project-specific module, capability, environment and API intent
3. contract-specific NEXT F standards
4. this Codex Development Standard
5. approved migration or Contract Extension records
6. generated portal documentation
7. examples and tutorials

Explicit customer requirements control customer-specific presentation and supported business behavior only when they do not contradict a canonical contract, security boundary or pinned Site Manifest.

Existing project code describes implementation state. It does not silently override a canonical contract.

## 3. Required project entry point

For a NEXT F-integrated customer website, Codex must begin with `nextf.site.json`.

Before implementation, resolve:

- Site identity
- pinned NEXT F Contract Version
- Site type
- enabled Modules
- enabled Capabilities
- environments
- Customer CMS participation
- API bindings
- canonical Event support
- tracking support
- Integration connector support
- configuration exposure rules
- declared Site-specific extensions

If a required Manifest is missing or invalid, classify the problem before implementing contract-dependent functionality.

## 4. Contract resolution rule

For each requested feature, Codex must map the requirement to existing NEXT F definitions before creating code.

Resolve, when applicable:

- Primitive Fields
- Shared Core Schemas
- Content Contracts
- Blocks
- SEO Contracts
- Forms and Leads
- Marketing and Tracking
- Integrations
- Commerce Core
- Commerce Rules
- Events
- Webhooks
- Permissions
- API Operations
- Customer CMS UI Metadata
- NEXT F Admin UI Metadata

A different UI design, variable name preference or third-party provider does not justify a duplicate canonical contract.

## 5. Mandatory workflow

### Gate A - Intake

Understand the requested outcome, in-scope repository, expected user, affected Site, target environment and allowed change boundary.

Do not begin by rewriting architecture.

### Gate B - Repository discovery

Inspect the existing repository before modification.

Identify:

- framework and runtime
- package manager
- project structure
- build/test/lint commands
- existing NEXT F runtime/SDK integration
- `nextf.site.json`
- environment/configuration patterns
- existing adapters
- migrations
- deployment configuration
- existing tests

Preserve intentional project conventions unless they violate NEXT F contracts or the task explicitly requires change.

### Gate C - Contract resolution

Resolve the exact pinned Contract Version and applicable registry definitions.

Never use a floating `latest` version.

### Gate D - Requirement mapping

Create a mapping between each requested behavior and:

- Module
- Capability
- canonical contract
- API operation
- Permission
- Event
- Webhook eligibility
- Integration connector
- Customer CMS/Admin metadata

Mark missing canonical coverage explicitly.

### Gate E - Implementation plan

Plan the smallest coherent implementation that satisfies the task without unrelated refactoring.

Identify:

- files/components to change
- contracts consumed
- adapters required
- server/client boundary
- data migrations
- security/privacy impact
- compatibility impact
- tests required
- rollback/recovery considerations for risky changes

### Gate F - Implementation

Implement against canonical NEXT F contracts.

Keep presentation customer-specific and structured data canonical.

Do not weaken validation merely to make a test pass.

### Gate G - Verification

Run the repository's relevant verification commands.

At minimum, when available and relevant:

- syntax/type checks
- lint
- unit tests
- integration tests
- contract tests
- build
- migration validation
- security-sensitive tests
- responsive/accessibility checks for UI work

Phase 33 will define the canonical NEXT F validation tooling. Until then, Codex must still execute existing project verification and report exactly what was and was not run.

### Gate H - Deviation review

Compare the completed implementation with the Site Manifest and resolved contracts.

Any deviation must be documented. A deviation is not hidden by a successful build.

### Gate I - Handoff

Produce an implementation report containing the Contract Version, Modules, Capabilities, contracts used, APIs, Permissions, Events, Webhooks, Integrations, migrations, tests, extensions, deviations and remaining risks.

## 6. Change boundaries

Codex must prefer the smallest safe change set.

Do not perform unrelated:

- framework migrations
- package-manager changes
- mass dependency upgrades
- broad formatting rewrites
- design-system replacement
- route renaming
- schema renaming
- contract-version upgrades
- database restructuring

unless explicitly required by the task and planned for compatibility.

## 7. Existing website rule

When modifying an existing Site:

1. inspect before changing
2. identify the current contract/version integration
3. preserve stable public behavior outside task scope
4. do not replace working canonical integration with a project-local alternative
5. do not delete unknown code merely because it appears unused without verifying references/build behavior
6. preserve customer data and historical transaction semantics

## 8. New website rule

For a new NEXT F Site:

- create or resolve the Site Manifest first
- use the selected Modules and Capabilities as the implementation boundary
- wire the five mandatory Site Runtime capabilities
- use canonical CMS-editable structures instead of hardcoded business content
- bind APIs exactly
- use standard Events and tracking vocabulary
- use supported Integrations through canonical connectors
- keep hosting and domain management outside NEXT F product scope

## 9. Customer CMS rule

Do not build a customer-specific admin panel for functionality already covered by Customer CMS UI Metadata.

The customer Site should expose canonical structured data and runtime behavior. The common Customer CMS manages the approved content and operations.

Complex editorial resources use dedicated workspaces, not generic tiny modals.

## 10. NEXT F Admin rule

Admin implementation must reuse Admin UI Metadata and canonical permission/security boundaries.

Never introduce:

- hidden customer impersonation
- universal Admin bypasses
- browser-visible stored secrets
- cross-tenant access based only on selected Site/Organization IDs
- hosting/domain resale management

## 11. API rule

Use only canonical API groups/operations for behavior already represented in the API Registry.

Do not create parallel routes because a canonical route is inconvenient.

API clients must not become authoritative for server-side Commerce totals, inventory, financial state, permissions or domain Events.

## 12. Data and schema rule

Canonical field meaning remains stable across the system.

Do not rename a field internally without an explicit adapter when the canonical field is exchanged with NEXT F systems.

Database/storage implementation may differ from the public contract only when the adapter boundary is explicit and tested.

## 13. Commerce rule

Ecommerce work must resolve both Commerce Core and Commerce Rules.

Do not trust browser-supplied:

- product price
- discount eligibility
- tax totals
- shipping totals
- inventory availability
- refundable amounts
- captured amounts
- payment success

Preserve historical transaction snapshots and idempotency/concurrency requirements.

Never store or expose raw payment card numbers, CVV/CVC values or equivalent sensitive authentication data.

## 14. Event rule

Search the Event Registry before creating an Event.

Use canonical completed-fact names exactly.

Tracking observations do not replace authoritative domain Events.

## 15. Webhook rule

A Webhook transports an eligible canonical Event. It does not redefine the Event.

Do not create wildcard subscriptions, unsigned custom delivery formats or project-specific retry models when the canonical Webhook Registry applies.

## 16. Integration rule

Use a canonical Connector when one exists.

Third-party provider names, IDs and mappings belong at the Integration adapter boundary.

Provider differences must not redefine NEXT F canonical business models.

## 17. Permissions rule

Never infer authorization from authentication or UI visibility.

Resolve exact `domain.resource.action` permissions and enforce them server-side.

Do not invent wildcard permissions or project-local aliases for canonical permissions.

## 18. Secrets and environment rule

Never place protected credentials in:

- browser bundles
- public JSON
- Site Manifest values
- source-control examples
- analytics/tracking payloads
- logs
- query strings

Use declared configuration bindings and server-side secret storage.

Production, staging and preview configuration must remain explicitly isolated.

## 19. Personal and sensitive data rule

Use the minimum data required for the feature.

Do not duplicate personal/sensitive data across events, logs, analytics and webhooks merely because it is available in the source object.

If handling classification is uncertain and the operation could expose personal, sensitive or secret data, stop and report the ambiguity.

## 20. UI implementation rule

Contracts define structured data and behavior. They do not force every customer Site to share the same visual design.

Codex may create unique:

- layouts
- components
- animations
- responsive behavior
- conversion flows
- visual hierarchy

while preserving contract data semantics, accessibility, security and CMS editability.

## 21. Dependency rule

Prefer the existing project stack.

A new dependency requires a concrete implementation benefit.

Do not add a large framework/library for a narrow problem that existing code can solve safely.

Do not silently replace maintained dependencies across unrelated parts of the project.

## 22. Generated files

Do not manually edit a generated file when an authoritative source and generator exist.

Change the source, run the generator and verify checksum/output consistency.

## 23. Database and migration rule

Schema/storage changes that affect persisted data require an explicit migration strategy.

Do not:

- destructively reset production data
- silently drop columns/data
- overwrite immutable historical commerce records
- rewrite canonical IDs

For risky migrations, define dry-run/backup/recovery expectations before execution.

## 24. Version rule

Preserve the Site's pinned Contract/API versions unless the task is an explicit upgrade.

An upgrade must resolve compatibility, migrations, deprecated definitions, API support and customer impact.

Do not change version numbers merely because source code was edited.

## 25. Contract Extension Proposal

When canonical coverage is missing, Codex must not silently invent a competing standard.

Create a Contract Extension Proposal containing:

- requirement and business reason
- affected Site/project
- proposed namespace/domain
- proposed contract or capability ID
- fields and value semantics
- relationships
- permissions
- events
- webhook impact
- API impact
- CMS/Admin UI impact
- Integration impact
- data classification
- security/privacy impact
- backwards compatibility
- migration impact
- alternatives considered

Until approved, isolate project-specific behavior under an explicit Site extension namespace and report it as a deviation where allowed.

## 26. Stop conditions

Codex must stop the affected implementation path and report the issue when continuing would require guessing an architectural/security decision.

Examples include:

- missing/invalid required Site Manifest
- unsupported pinned Contract Version
- unknown Module or Capability
- conflicting canonical contracts
- missing protected-operation Permission
- required API operation does not exist
- required Event/Connector contract does not exist
- secret would have to be exposed client-side
- cross-tenant authorization boundary is unclear
- Commerce state/invariant cannot be resolved safely
- destructive migration lacks an approved plan
- production-side destructive operation is ambiguous
- a new canonical contract is required
- data classification is unclear for sensitive transmission

A stop condition blocks the affected path, not necessarily unrelated safe work.

## 27. Bug-fix rule

For a bug fix:

- reproduce or establish the failure condition when practical
- identify whether code or contract usage is wrong
- prefer the smallest correction
- add/adjust regression coverage where practical
- do not redefine the contract to match a defective implementation
- report if the observed behavior reveals a missing/incorrect canonical contract

## 28. Contract repository changes

Changes to NEXT F Contracts itself are stricter than customer implementation work.

A contract change must:

- use canonical naming
- preserve global ID uniqueness
- update appropriate source registry
- regenerate derived indexes/fallbacks
- classify compatibility
- update changelog/standard where needed
- validate relationships and source paths
- never silently mutate the meaning of a stable contract

## 29. Completion report

Every substantial Codex implementation should report:

- project/task identity
- Contract Version
- Site Manifest used
- Modules/Capabilities affected
- canonical contracts consumed
- API operations consumed/implemented
- Permissions required
- Events emitted/consumed
- Webhooks affected
- Integrations affected
- files/components changed
- migrations
- verification commands/results
- extensions
- deviations
- unresolved risks
- recommended next action, if any

## 30. Definition of done

A task is not complete merely because the UI looks correct or the build passes.

Completion requires:

- requested behavior implemented
- contract intent satisfied
- no unauthorized parallel schema/event/permission/API model introduced
- security and tenant boundaries preserved
- relevant business rules preserved
- Site Manifest remains accurate
- required tests/checks pass or failures are explicitly reported
- migrations are accounted for
- generated outputs are synchronized
- extensions/deviations are documented
- implementation report is complete

## 31. Never fabricate verification

Codex must never claim a test, build, migration, deployment, API call or validation passed unless it was actually executed or directly verified.

Unrun checks must be reported as unrun.

## 32. Future canonical validator

Phase 33 will introduce browser/CLI validation tooling. This standard intentionally defines the evidence that tool must later verify. Until that phase, the workflow and reports in this standard remain mandatory guidance.
