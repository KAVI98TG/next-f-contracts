# NEXT F Contracts Phase 34 Acceptance

## Release

- Phase: **34**
- Title: **Developer Validation CLI**
- Version: **V0.35.0**
- Status: **PASS**
- Source release: **V0.34.0 / Phase 33**
- Registry production stability: **not claimed**
- Runtime production support: **not claimed**

## Implemented

Phase 34 adds the dependency-free `nextf-contract` Node CLI as a thin offline adapter over the existing Phase 33 shared manifest-validation model.

Supported commands:

- `validate [path]`
- `validate manifest [path]`
- `inspect [path]`
- `compatibility [path]`
- `diff <fromVersion> [toVersion]`
- `help`
- `version`

The repository-local executable is `node bin/nextf-contract.mjs`. `package.json` exposes the `nextf-contract` binary for local/private package execution and future approved package distribution. Publishing to npm is outside Phase 34.

## Stable exit codes

- `0` success / validation has no errors
- `1` manifest validation errors or malformed JSON
- `2` CLI usage/configuration error
- `3` unknown or unsupported Contract Version
- `4` internal CLI/tool failure

Warnings and informational findings do not by themselves cause a failing validation exit code.

## Output modes

- human-readable default
- JSON (`--json`)
- concise (`--concise`)
- verbose (`--verbose`)

The JSON output includes CLI version, Registry version, command, exit code and machine-readable results.

## Shared browser/CLI authority

The CLI does not implement an independent validator. It imports:

- `js/manifest-validation-core.js`
- `js/generated-validation.js`

The generated rule bundle remains derived from authoritative Registry sources. It now also carries the authoritative Deprecation record set so future selected deprecated definitions can surface through the same shared validation model.

There are currently **0 authoritative deprecation records**, so no deprecation warning was fabricated for Phase 34.

Static security/privacy validation remains limited to findings that can be proven from the Site Manifest and Registry rule model, including the existing public/secret configuration exposure rule. The CLI does not infer personal/sensitive classifications from arbitrary configuration names.

## Manifest discovery and safety

- explicit manifest path supported
- default discovery: `./nextf.site.json`
- missing manifests fail clearly with exit code `2`
- no manifest is created automatically
- input is never mutated
- Contract Versions are never silently upgraded
- unknown future versions are never guessed
- successful validation requires no network access
- no deployment or destructive migration command is present

## Browser / CLI parity

Phase 34 checks all **11 Phase 33 validation fixtures** through both the shared browser validation function and the CLI.

Parity compares:

- validity
- diagnostic codes
- expected exit-code classification

Result: **11 / 11 parity cases PASS**.

The fixture suite includes valid corporate and commerce manifests plus malformed JSON, missing Module dependency, unknown Capability, reserved Capability, unsupported Contract Version, invalid API binding, unknown Event, unsafe configuration exposure and invalid extension namespace.

## CLI command evidence

Verified behaviors include:

- valid corporate manifest -> exit `0`
- valid commerce manifest -> exit `0`
- malformed JSON -> exit `1`
- missing manifest -> exit `2`
- unsupported Contract Version -> exit `3`
- human output -> PASS
- JSON output -> PASS
- concise output -> PASS
- verbose output -> PASS
- `inspect` -> PASS
- `compatibility` -> PASS
- `diff` -> PASS
- `help` -> PASS
- `version` -> PASS
- current-directory `nextf.site.json` discovery -> PASS

Local package binary execution was also verified with:

```text
npm exec --offline --package=. -- nextf-contract validate registry/validation/fixtures/valid-corporate.json --json
```

It completed with exit `0`. npm reports that it installs the local `file:` package into its execution environment; no remote package/network dependency is required.

## Diff command scope

`diff` is intentionally read-only and thin. It reads the existing Diff release index and direct release summaries when available. It does not create missing historical snapshots and does not infer unavailable Diff evidence.

## Codex behavior

`AGENTS.md`, `README.md` and `NEXT-F-WEBSITE-DEVELOPMENT-STANDARD.md` now require CLI validation evidence before claiming NEXT F contract compliance.

Implementation reports should capture:

- command
- CLI/Registry version
- exit code
- errors
- warnings

A passing CLI result is not evidence of deployment, authorization correctness, accessibility certification, legal/privacy compliance or production runtime support.

## Release validation

### Phase 34 validator

- Passes: **115**
- Failures: **0**
- CLI fixture parity cases: **11**
- Registry items: **2160**
- JSON files checked: **1996**

Evidence: `checks/phase-34-validation.txt`

### Phase 34 smoke

- Passes: **25**
- Failures: **0**

Evidence: `checks/phase-34-smoke.txt`

### Forward regression

- Passes: **2427**
- Failures: **0**
- JSON files checked: **2027**
- JS/MJS files checked: **196**

Evidence: `checks/phase-34-regression.txt`

## Final Registry state

- Registry items: **2160**
- Search documents: **7206**
- Relationship nodes: **2160**
- Relationship edges: **7406**
- Changelog releases: **35**
- Changelog entries: **576**
- Exact Diff releases: **30**
- Compatibility target: **0.35.0**
- CLI commands: **7**
- CLI exit codes: **5**

## Integrity

Registry SHA-256:

`c818a23d1a8c42743916ad7545c964b27ccfe2096e8200d75a03fd80bc523e36`

V0.35.0 exact Diff snapshot SHA-256:

`c818a23d1a8c42743916ad7545c964b27ccfe2096e8200d75a03fd80bc523e36`

Result: **MATCH / PASS**

Machine-readable evidence: `checks/phase-34-integrity.json`

## Release boundary

Phase 34 does **not** publish a public npm package, deploy infrastructure, execute migrations, implement Phase 35 starter packs or claim V1 production stability.

Phase 35 has not been started.
