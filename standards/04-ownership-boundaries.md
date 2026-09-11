# Ownership and Responsibility Boundaries

## Customer Organization owns

- domain registration and renewals
- hosting subscription and hosting payments
- business content
- uploaded business media
- advertising accounts
- analytics properties
- Search Console properties
- payment-provider accounts
- third-party service accounts unless a separate agreement states otherwise
- decisions about authorized Organization Users
- lawful business policy decisions for content and campaigns

## NEXT F owns or controls

- NEXT F contract definitions
- NEXT F platform software
- NEXT F CMS/Admin implementation
- NEXT F API implementation
- NEXT F Site Runtime/SDK implementation
- standard integration connectors
- standard event and webhook contracts
- permission models
- platform security controls
- developer tooling
- contract validation
- reusable technical architecture

## Customer CMS may manage when enabled and permitted

- pages and structured content
- blog
- documentation
- media
- SEO content
- navigation data
- forms
- leads
- store catalog and operational commerce data
- approved integrations
- conversions
- consent configuration
- publishing
- Organization Users within granted boundaries

## Customer CMS cannot inherently manage

- arbitrary source code
- raw server configuration
- hosting subscription
- domain registration
- NEXT F platform internals
- canonical contract definitions
- unrestricted scripting
- another Organization's data

## NEXT F Admin may manage

- Organization records
- Site records
- module and capability enablement
- contract version visibility
- technical connections
- integration health
- platform permissions and role policies
- support
- audit and diagnostics
- contract migration state
- explicitly permitted system-level overrides

## Hosting-independent requirement

Site integration must remain provider-neutral at the contract level. Provider-specific deployment adapters may exist without changing canonical contracts.
