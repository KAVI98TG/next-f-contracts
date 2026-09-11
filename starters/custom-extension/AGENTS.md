# Custom Extension Starter - Agent Instructions

Read `AGENTS.md` and `nextf.site.json`, resolve the pinned NEXT F Contract Version, use only enabled Modules/Capabilities, reuse canonical contracts, run NEXT F validation before completion, and report deviations.

## Required behavior

- Treat `nextf.site.json` as the Site declaration and keep it explicitly pinned to 1.0.0.
- Read the root NEXT F Contracts `AGENTS.md` and Development Standard when the registry repository is available.
- Use `CONTENT-CONTRACT-MAP.json`, `EVENT-MAP.json`, `TRACKING-EVENT-MAP.json`, `CMS-MAPPING.json` and `ADMIN-MAPPING.json` as integration maps, not replacement authorities.
- Keep secrets out of the manifest, committed environment examples and browser bundles.
- Do not silently enable Modules, Capabilities, APIs, Events or Integrations not declared here.
- Do not silently upgrade the Contract Version.
- Run the validation commands in `VALIDATION.md` before completion.
- Report deviations, extensions, warnings and validation evidence.

## Extension workflow

1. Reuse canonical contracts first.
2. Identify the exact missing capability.
3. Choose a customer/project namespace that cannot collide with NEXT F canonical IDs.
4. Document the extension proposal before implementation.
5. Add custom collection/Block/capability only inside that namespace.
6. Never override or shadow a canonical NEXT F ID.
7. Report the extension and validation evidence in the completion summary.
