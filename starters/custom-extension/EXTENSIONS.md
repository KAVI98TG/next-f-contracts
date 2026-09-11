# Extension Guidance

- Reuse canonical contracts before proposing an extension.
- Extensions must use a collision-safe customer/project namespace.
- Never override canonical NEXT F identifiers.
- Document the reason, namespace, data shape, permissions, Events and migration implications.
- Validate the extension namespace through NEXT F validation.

## Extension workflow

1. Reuse canonical contracts first.
2. Identify the exact missing capability.
3. Choose a customer/project namespace that cannot collide with NEXT F canonical IDs.
4. Document the extension proposal before implementation.
5. Add custom collection/Block/capability only inside that namespace.
6. Never override or shadow a canonical NEXT F ID.
7. Report the extension and validation evidence in the completion summary.
