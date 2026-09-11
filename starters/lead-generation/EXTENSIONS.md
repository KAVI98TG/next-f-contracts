# Extension Guidance

- Reuse canonical contracts before proposing an extension.
- Extensions must use a collision-safe customer/project namespace.
- Never override canonical NEXT F identifiers.
- Document the reason, namespace, data shape, permissions, Events and migration implications.
- Validate the extension namespace through NEXT F validation.

## Lead-generation boundaries

- Preserve Form -> Submission -> Lead as separate entities.
- Conversion mappings may create/update Lead state only through canonical rules.
- Analytics/tracking observations are consent-aware and remain distinct from authoritative Domain Events.
- Marketing connectors, CRM mappings and Webhook delivery are extension/destination boundaries, not ownership of Lead truth.
- Raw form payloads must not be dumped into analytics destinations.
