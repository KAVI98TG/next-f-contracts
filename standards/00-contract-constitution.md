# NEXT F Contract Constitution

## 1. Purpose

NEXT F Contracts is the technical source of truth for reusable website behavior and data across all NEXT F-built customer websites.

It exists to prevent each customer project from independently redefining the same concepts.

## 2. Scope

The contract system governs:

- content structures
- CMS-editable data
- reusable website sections and blocks
- SEO data
- forms and leads
- marketing and conversion events
- integrations
- commerce
- events
- webhooks
- permissions
- site manifests
- API contracts
- Admin-only metadata
- Customer CMS metadata
- compatibility and versioning

## 3. Source of truth

`contract.nextf.lk` is the discovery and documentation portal.

The version-controlled contract repository is authoritative.

The portal must be generated or rendered from the repository and must not maintain independent definitions.

## 4. Core boundary

NEXT F controls:

- contract definitions
- platform architecture
- code
- website presentation
- layout
- reusable components
- data validation
- integration mechanisms
- security boundaries
- platform permissions

Customer organizations control, where permitted:

- business content
- SEO content
- blog content
- documentation content
- product/catalog content
- media
- forms
- customer-facing navigation data
- approved marketing integration configuration
- approved publishing actions
- their external accounts and infrastructure

## 5. CMS boundary

The Customer CMS is a structured content and website operations interface.

It is not:

- a general website builder
- an arbitrary HTML editor
- an arbitrary JavaScript executor
- a theme marketplace
- a hosting control panel
- a domain registrar
- a raw database editor

## 6. Infrastructure boundary

NEXT F does not provide:

- domain registration
- domain renewal services
- hosting resale
- hosting subscription management
- hosting billing
- generic server control panels

The customer owns or directly contracts their domain and hosting services.

NEXT F may store non-secret technical references required to connect, publish, monitor or diagnose the website.

## 7. Reuse rule

An existing stable contract must be reused before a new contract is created.

A customer-specific requirement may extend a contract only when the extension:

- has no canonical equivalent
- is namespaced
- is documented
- does not conflict with canonical fields
- does not alter canonical event semantics
- does not weaken security or permission requirements

## 8. Separation of concerns

Data contract defines what information exists and what it means.

Presentation defines how the customer website renders information.

CMS metadata defines how authorized users edit contract fields.

API contract defines how systems exchange contract data.

Event contract defines what happened.

Webhook contract defines how an event is delivered to an external destination.

Permission contract defines who may perform an action.

These concerns may reference each other but must not be collapsed into one unstructured model.

## 9. Compatibility

Customer sites pin a contract version.

A site must never silently follow `latest`.

Breaking changes require an explicit major-version transition and migration path.

## 10. Security

Public website code must never contain platform secrets.

Public APIs expose only data explicitly classified for public delivery.

Authenticated CMS and Admin operations must enforce permission contracts.

Sensitive data must not be copied into logs, events or webhooks unless the relevant contract explicitly permits it.

## 11. Auditability

Meaningful CMS, Admin, integration, commerce and security operations must be capable of producing standardized audit records.

## 12. AI development

Codex and other agents are consumers of NEXT F Contracts, not authorities over them.

When an implementation and a contract disagree, the implementation must be corrected unless an approved contract migration or extension explicitly changes the contract.
