# NEXT F Registry Health / Release Candidate Standard

## Status

Phase 36 / V0.37.0 Release Candidate standard.

## Purpose

Registry Health is the generated acceptance authority for repository-wide QA before V1.0.0 Production Acceptance. It does not replace canonical contracts and it does not claim that every future runtime product is deployed.

## Required evidence model

Every QA check records a stable check ID, category, description, result, severity, evidence, affected definitions and remediation status. Results use `PASS`, `FAIL`, `WARNING`, `DEFERRED` or `NOT_APPLICABLE`. Blocking release failures are `FAIL` findings with high or critical severity.

## Audit coverage

Phase 36 audits canonical identifiers, JSON and source integrity, Registry metadata, domains/types, relationships, Search, Modules/Capabilities, Permissions, Events, Webhooks, APIs, Changelog, Deprecations, Diff, Compatibility, reference examples, starter manifests, Commerce safety, Forms/Lead separation, secret/public boundaries, unsafe URL schemes, portal routes/assets, documentation coverage, accessibility evidence and performance evidence.

## Evidence honesty

A check that cannot be executed in the current environment must be `DEFERRED`; it must never be represented as PASS. Historical release acceptance scripts may remain immutable time-capsule evidence and are not rewritten to assert current-version state.

## Release Candidate gate

V0.37.0 may be marked Release Candidate only when there are zero critical failures, zero unresolved broken references, zero duplicate canonical identifiers, all mandatory current validators pass, and every non-blocking warning/deferred item is documented. V1.0.0 remains reserved for Phase 37.

## Rerun

Repository QA is regenerated with `npm run generate:health`. Current mandatory acceptance is executed with `npm run validate:phase36`, `npm run smoke:phase36` and `npm run validate:regression`. Browser-safe report consistency may be rerun from the Registry Health portal, but browser checks do not replace repository validation.
