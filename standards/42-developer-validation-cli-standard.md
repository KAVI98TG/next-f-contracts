# NEXT F Developer Validation CLI Standard

**Phase:** 34  
**Introduced in:** V0.35.0  
**Status:** Stable development standard  
**Authority:** NEXT F Contract Registry

## 1. Purpose

The NEXT F Developer Validation CLI provides an offline, deterministic command-line interface for validating `nextf.site.json` and inspecting the same Contract Registry evidence used by the Phase 33 browser validator.

The CLI is a developer/Codex adapter over the shared validation core. It must not maintain independent manifest-validation semantics.

## 2. Shared validation authority

Manifest validation is governed by:

1. `registry/validation/index.json` and its generated fallback;
2. `js/manifest-validation-core.js`;
3. the authoritative Registry sources from which the Phase 33 validation rule bundle is generated.

The browser validator and CLI must produce compatible validity, diagnostic code, severity and path conclusions for the same manifest and rule bundle.

## 3. Supported commands

The V1 CLI command surface is:

- `validate [path]`
- `validate manifest [path]`
- `inspect [path]`
- `compatibility [path]`
- `diff <fromVersion> [toVersion]`
- `help`
- `version`

The preferred executable name is `nextf-contract`. Until package publishing is approved, the repository-local executable is `node bin/nextf-contract.mjs` and the package exposes the same binary for future `npx nextf-contract ...` use.

## 4. Manifest discovery

For manifest commands:

- if an explicit path is supplied, use that path;
- otherwise search the current working directory for `nextf.site.json`;
- fail clearly when the manifest is missing;
- never create a manifest silently;
- never mutate or rewrite the manifest during validation.

## 5. Offline requirement

Successful validation must not depend on `contract.nextf.lk`, an API, analytics, Search, or another network service.

The CLI loads the checked-in generated validation rule bundle from the installed/local package. A network connection is neither required nor attempted for validation.

## 6. Validation scope

The CLI must cover at least the same deterministic checks as the browser validator:

- valid JSON;
- Site Manifest schema;
- Contract Version existence/support evidence;
- Module IDs;
- Module dependency closure;
- Capability IDs and ownership;
- reserved Capability rejection;
- API bindings;
- domain Events;
- tracking Events;
- Integration connector IDs;
- environment references;
- public/secret configuration restrictions;
- extension namespace rules;
- compatibility status.

When authoritative deprecation records exist, selected deprecated definitions must produce deterministic warnings through the shared validation model. Security/privacy issues are reported only when they are statically provable from manifest data and Registry rules; the CLI must not invent privacy classifications from arbitrary key names.

## 7. Exit codes

Stable exit codes are:

- `0` — command completed successfully; for validation, no validation errors;
- `1` — manifest validation errors or malformed JSON;
- `2` — CLI usage/configuration error such as missing file or invalid arguments;
- `3` — unsupported/unknown Contract Version;
- `4` — internal CLI/tool failure.

Warnings and informational findings do not by themselves make validation fail.

## 8. Output modes

The CLI supports:

- human-readable default output;
- `--json` for automation/Codex;
- `--concise` for compact summaries;
- `--verbose` for layer and diagnostic detail.

Output mode flags are mutually exclusive.

JSON output must include the CLI version, command, exit code and machine-readable result payload.

## 9. Inspect and compatibility

`inspect` shows a non-mutating manifest summary plus validation outcome.

`compatibility` reports the manifest's pinned Contract Version using the authoritative generated compatibility release data. Unknown versions exit with code `3`; review-required and pre-V1 states remain truthful and do not become production-support claims.

## 10. Diff

`diff` is a thin read-only interface over the existing Contract Diff release index/summaries. It must not create historical snapshots or infer unavailable history.

When an exact direct summary exists, it may display that summary. Otherwise it reports the exact availability of each requested release and the canonical portal Diff route for deeper review.

## 11. Codex evidence

Before claiming NEXT F contract compliance, Codex must run the CLI or the equivalent repository validation command and report:

- command;
- CLI/version;
- exit code;
- validity summary;
- warnings;
- errors.

A passing CLI result is contract validation evidence. It is not runtime deployment evidence, authorization evidence, accessibility certification, legal compliance certification or a production-support claim.

## 12. Safety and non-goals

The CLI must not:

- deploy a site;
- change infrastructure;
- perform destructive migrations;
- silently upgrade Contract Versions;
- auto-fix semantic contract choices;
- fetch unknown future contracts from the network;
- fabricate Diff, Compatibility or deprecation evidence.
