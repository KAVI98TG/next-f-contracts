# NEXT F Contracts Phase 29 Acceptance

## Release

- Phase: 29
- Version: V0.30.0
- Title: Security Standards
- Status: PASS
- Source release: V0.29.0 / Phase 28
- Phase 30 started: No

## Implemented

- Machine-readable Security Control Registry under `registry/security/`.
- 49 canonical controls across 18 security categories.
- Canonical security severity vocabulary: info, low, medium, high, critical.
- Mandatory/recommended obligation vocabulary.
- Security verification-method metadata and evidence expectations.
- Eight protected-value classes covering public identifiers, configuration, protected configuration, secrets, credentials, tokens, signing secrets and encryption keys.
- Explicit platform-surface security coverage mapping.
- Browser/public-runtime rules for CSRF, XSS, sanitization, output encoding, safe redirects, CSP and sensitive URL handling.
- Server-side input validation, CORS, rate limits, service-to-service authentication and replay/idempotency controls.
- File-upload type/size/normalization/quarantine/download authorization requirements.
- Tenant/Site and environment isolation requirements.
- Logging, audit, safe errors, TLS and security-header requirements.
- Dependency/supply-chain and backup/recovery controls.
- Commerce controls cross-linked to existing Phase 12 invariants.
- Integration and Webhook security cross-linked to existing Phase 10/14 authorities.
- Data-driven Standards -> Security portal with overview, category explorer, filters, control detail, secret classes, surface coverage, definitions and raw JSON.
- Global Search and Relationship Explorer discovery through canonical Registry integration.
- V0.30.0 Changelog, exact Diff snapshot and Compatibility target.
- Generated local fallback with source integrity hashes.

## Truthfulness boundaries

- Phase 29 defines standards and verification expectations; it does not claim that every future runtime is deployed or independently security-certified.
- Phase 30 field-level privacy/data classifications were not fabricated.
- Existing Permission, API, Webhook, Integration and Commerce security rules remain domain authorities and are cross-linked rather than replaced.

## Acceptance results

- Phase 29 validation: 4,682 PASS / 0 FAIL
- Phase 29 smoke: 24 PASS / 0 FAIL
- Current forward regression: 2,154 PASS / 0 FAIL
- Registry items: 1,938
- Security Registry items: 62
- Security controls: 49
- Security categories: 18
- Search documents: 6803
- Relationship nodes: 1938
- Relationship edges: 6904
- Changelog releases: 30
- Changelog entries: 536
- Exact Diff releases: 25
- Current Registry SHA-256: `a58cf350f1b2752db4fd2f849c5ab820691008876d7488ea2761836610ed1b0e`
- V0.30.0 exact Diff snapshot SHA-256: `a58cf350f1b2752db4fd2f849c5ab820691008876d7488ea2761836610ed1b0e`

## Evidence files

- `checks/phase-29-validation.txt`
- `checks/phase-29-smoke.txt`
- `checks/phase-29-regression.txt`
- `registry/changelog/releases/0.30.0.json`
- `registry/diff/release-index.json`
- `registry/compatibility/index.json`
- `registry/security/index.json`

## Release gate

PASS. All blocking Phase 29 checks pass. Phase 30 is not included in this release.
