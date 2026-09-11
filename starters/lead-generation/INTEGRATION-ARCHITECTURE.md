# Integration Architecture

## Declared connectors

- `integrations.googleTagManager` - required; environments: production
- `integrations.googleAnalytics4` - required; environments: production
- `integrations.googleAds` - required; environments: production
- `integrations.meta` - required; environments: production
- `integrations.googleSearchConsole` - optional; environments: production
- `integrations.microsoftClarity` - optional; environments: production
- `integrations.crm` - optional; environments: production
- `integrations.emailProvider` - optional; environments: production

## Boundaries

- Customer organizations own their third-party provider accounts.
- NEXT F stores configuration/authorized connection references, not account ownership claims.
- Provider secrets/tokens remain protected configuration and never belong in browser/public manifest data.
- Optional connectors must not block primary Site content.
- Consent-aware marketing connectors load/dispatch only under the applicable consent state.
- Webhook transport does not replace authoritative Domain Events.

## Lead-generation boundaries

- Preserve Form -> Submission -> Lead as separate entities.
- Conversion mappings may create/update Lead state only through canonical rules.
- Analytics/tracking observations are consent-aware and remain distinct from authoritative Domain Events.
- Marketing connectors, CRM mappings and Webhook delivery are extension/destination boundaries, not ownership of Lead truth.
- Raw form payloads must not be dumped into analytics destinations.
