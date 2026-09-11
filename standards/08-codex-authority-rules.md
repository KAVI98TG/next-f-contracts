# Codex and AI Development Authority Rules

## Purpose
AI coding agents accelerate customer website delivery but must not create architectural fragmentation.

## Contract-first workflow
Before implementation, resolve Contract Version, Site Manifest, enabled Modules, enabled Capabilities, relevant Schemas, Permissions, Events, Webhooks and Integration requirements.

## Existing contract authority
If a canonical contract exists, use it.

Do not create `productPrice` when the canonical field is `price`, `sale.completed` when the canonical event is `order.paid`, or a custom SEO metadata object when the canonical SEO schema exists.

## Customer-specific presentation
Agents may build customer-specific visual design, components, layouts, responsive behavior, animations and conversion-focused presentation while mapping editable data correctly to NEXT F contracts.

## Missing capability
Do not silently create a parallel architecture. Create a Contract Extension Proposal.

## Required implementation report
For major customer-site implementation work, report:

- contract version used
- modules implemented
- contracts consumed
- events emitted
- webhooks supported
- permissions required
- project-specific extensions
- validation result
- known deviations

## Prohibited shortcuts
Do not hardcode editable business data merely to save development time, place privileged secrets in public environment variables, bypass the NEXT F event layer for supported integrations, expose Admin-only data to Customer CMS, cross Organization boundaries, silently upgrade contracts, or treat examples as more authoritative than machine-readable contracts.
