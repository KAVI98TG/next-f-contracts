# Integration Architecture

## Declared connectors

- `integrations.googleTagManager` - required; environments: production
- `integrations.googleAnalytics4` - required; environments: production
- `integrations.googleSearchConsole` - optional; environments: production
- `integrations.microsoftClarity` - optional; environments: production

## Boundaries

- Customer organizations own their third-party provider accounts.
- NEXT F stores configuration/authorized connection references, not account ownership claims.
- Provider secrets/tokens remain protected configuration and never belong in browser/public manifest data.
- Optional connectors must not block primary Site content.
- Consent-aware marketing connectors load/dispatch only under the applicable consent state.
- Webhook transport does not replace authoritative Domain Events.

## Extension workflow

1. Reuse canonical contracts first.
2. Identify the exact missing capability.
3. Choose a customer/project namespace that cannot collide with NEXT F canonical IDs.
4. Document the extension proposal before implementation.
5. Add custom collection/Block/capability only inside that namespace.
6. Never override or shadow a canonical NEXT F ID.
7. Report the extension and validation evidence in the completion summary.
