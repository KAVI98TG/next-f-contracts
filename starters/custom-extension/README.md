# Custom Extension Site Starter Contract Pack

**NEXT F Contracts:** 1.0.0  
**Source reference:** examples.custom-site  
**Site type:** custom

Controlled reference for a Site whose requirements exceed canonical site types while still reusing all existing NEXT F contracts first.

This pack is a framework-neutral contract integration bootstrap. It is **not** a theme, Site Runtime/SDK, hosting package or page builder.

## Start here

1. Read `AGENTS.md`.
2. Review `nextf.site.json`.
3. Resolve the Modules/Capabilities and contract map.
4. Configure environment bindings without committing secrets.
5. Implement the customer-specific presentation separately.
6. Run NEXT F validation.
7. Complete `CONTRACT-RESOLUTION-SUMMARY.md` and the acceptance checklist.

## Included integration surfaces

- 7 Modules
- 25 capabilities
- 215 contract references
- 1 API bindings
- 4 tracking observations
- 4 integration connectors
- 118 permission references

## Extension workflow

1. Reuse canonical contracts first.
2. Identify the exact missing capability.
3. Choose a customer/project namespace that cannot collide with NEXT F canonical IDs.
4. Document the extension proposal before implementation.
5. Add custom collection/Block/capability only inside that namespace.
6. Never override or shadow a canonical NEXT F ID.
7. Report the extension and validation evidence in the completion summary.
