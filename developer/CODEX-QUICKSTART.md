# Codex Quick Start

Use this sequence at the start of a NEXT F project.

## Preflight

- identify the repository and requested outcome
- inspect existing project conventions and commands
- locate `nextf.site.json`
- resolve the exact Contract Version
- resolve selected Modules/Capabilities
- resolve related canonical contracts
- identify APIs, Permissions, Events, Webhooks and Integrations
- identify server/client and tenant boundaries
- identify migration or compatibility impact

## Implementation

- preserve project conventions
- implement the smallest coherent change
- keep presentation customer-specific and contract data canonical
- reuse Customer CMS/Admin metadata instead of building duplicate management surfaces
- keep secrets server-side
- preserve environment isolation

## Finish

- run relevant checks
- compare result with Site Manifest/contracts
- document deviations/extensions
- report what changed and what was actually verified

If canonical coverage is missing, create a Contract Extension Proposal instead of inventing a competing standard.
