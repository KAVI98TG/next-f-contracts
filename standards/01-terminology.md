# Canonical Terminology

## Platform
The complete NEXT F website management ecosystem that may include Admin, Customer CMS, APIs, contract registry, runtime connectors and supporting services.

## Contract Registry
The authoritative collection of versioned NEXT F contract definitions and their metadata.

## Contract Portal
The human and AI-friendly web interface at `contract.nextf.lk` that presents the Contract Registry.

## Organization
The business or legal customer entity that owns one or more Sites. Use `Organization` in platform models instead of `Client` or unqualified `Customer` as the tenant entity.

## Site
A customer website integrated with NEXT F website contracts. A Site is independent of the customer's hosting provider or domain registrar.

## Workspace
The customer-facing CMS context for managing one Site. A Workspace is not a separate CMS deployment.

## Environment
A technical execution target for a Site, such as preview, staging or production.

## Module
A major optional or required functional area composed of related contracts, permissions, events and capabilities.

Examples: pages, blog, seo, forms, commerce, analytics, integrations, consent.

## Capability
A smaller feature that belongs to a Module and may be enabled or disabled independently when the Module permits it.

Examples: `commerce.reviews`, `commerce.returns`, `blog.scheduling`.

## Schema
A machine-readable structural definition of data and validation requirements.

## Entity
A modeled business or platform concept with identity and lifecycle, such as Product, Order or BlogPost.

## Entry
A stored instance of an Entity or Custom Collection definition.

## Field
A single typed property within a Schema.

## Field Group
A reusable group of Fields that can be embedded or referenced by multiple Schemas.

## Block
A structured content unit that a coded frontend can render using a developer-controlled component. A Block controls content structure, not arbitrary page design.

## Collection
A named set of structured entries. The term must be qualified when domain-specific, such as Commerce Collection or Custom Collection.

## Content Type
A schema intended for customer-managed website content.

## Manifest
A machine-readable declaration of the Site's contract version, modules, capabilities and integration expectations.

## Site Manifest
The authoritative Manifest for one customer Site.

## Contract
A versioned authoritative definition of data, behavior, event semantics, permissions or interfaces.

## Contract Version
The semantic version of a contract or coordinated registry release.

## API Version
The version of an HTTP or programmatic API surface. API Version and Contract Version are related but not identical.

## Event
A standardized statement that something has happened. Event names describe completed facts.

Examples: `content.published`, `order.created`, `payment.succeeded`.

## Event Producer
The component that creates an Event.

## Event Consumer
A component that processes an Event.

## Webhook
An outbound HTTP delivery mechanism for a supported Event. A Webhook is not the Event itself.

## Webhook Subscription
A configured destination and event selection describing which Webhook deliveries should occur.

## Permission
A stable machine identifier granting one action on one resource or domain.

## Role
A named collection of Permissions. Roles do not replace permission checks.

## Integration
A configured connection between NEXT F website capabilities and an external system.

## Connector
The reusable implementation contract that defines how a category or provider Integration works.

## Public Content
Published Site data explicitly allowed to be delivered to unauthenticated website visitors.

## Draft
Content saved but not currently public.

## Published
Content approved for public delivery according to the Publishing Contract.

## Admin
The NEXT F internal management interface and associated privileged capabilities.

## Customer CMS
The customer-facing Site Workspace used by authorized Organization Users.

## Organization User
A person authorized to access one or more Organization or Site workspaces.

## Commerce Customer
A buyer or account holder interacting with an ecommerce Site.

Never use `Organization` and `Commerce Customer` interchangeably.

## CMS User
Deprecated as an ambiguous generic term. Prefer `Organization User`.

## Client
Marketing and human conversation term only. Do not use `Client` as a canonical tenant schema name.

## Customer
Ambiguous unless qualified. Use `Organization` for NEXT F's business tenant and `Commerce Customer` for a store buyer.
