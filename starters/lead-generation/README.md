# Lead Generation Site Starter Contract Pack

**NEXT F Contracts:** 1.1.0
**Source reference:** examples.lead-generation-site  
**Site type:** lead-generation

Campaign and organic landing-page system centered on forms, Leads, attribution, conversions, analytics and controlled ad integrations.

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

- 10 Modules
- 35 capabilities
- 264 contract references
- 3 API bindings
- 8 tracking observations
- 8 integration connectors
- 147 permission references

## Lead-generation boundaries

- Preserve Form -> Submission -> Lead as separate entities.
- Conversion mappings may create/update Lead state only through canonical rules.
- Analytics/tracking observations are consent-aware and remain distinct from authoritative Domain Events.
- Marketing connectors, CRM mappings and Webhook delivery are extension/destination boundaries, not ownership of Lead truth.
- Raw form payloads must not be dumped into analytics destinations.
