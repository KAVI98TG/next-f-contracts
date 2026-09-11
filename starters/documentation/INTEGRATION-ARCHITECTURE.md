# Integration Architecture

## Declared connectors

- `integrations.googleAnalytics4` - required; environments: production
- `integrations.googleSearchConsole` - required; environments: production
- `integrations.googleTagManager` - optional; environments: production
- `integrations.microsoftClarity` - optional; environments: production

## Boundaries

- Customer organizations own their third-party provider accounts.
- NEXT F stores configuration/authorized connection references, not account ownership claims.
- Provider secrets/tokens remain protected configuration and never belong in browser/public manifest data.
- Optional connectors must not block primary Site content.
- Consent-aware marketing connectors load/dispatch only under the applicable consent state.
- Webhook transport does not replace authoritative Domain Events.
