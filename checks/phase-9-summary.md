# Phase 9 Summary - Marketing and Tracking Contracts

Version: **V0.10.0**

Phase 9 establishes the provider-neutral measurement layer that sits between NEXT F customer websites and future third-party connectors.

## Core outcome

A NEXT F website can emit one canonical observation such as `form.submitted`, `lead.created` or `cta.clicked`. The website does not need to know whether that observation will later be delivered to GA4, Google Ads, Meta, an internal analytics store or another destination.

## Contract groups

- Configuration and data policy
- Tracking event definitions and observations
- Page, session, visitor, device and referrer context
- UTM, campaign and traffic attribution
- Advertising click identifiers
- Conversion definitions and occurrences
- Consent categories, policy, preferences, state and records
- Marketing destinations, mapping and dispatch
- Analytics metrics, dimensions, observations and snapshots
- Campaign and conversion reporting snapshots

## Privacy and safety boundary

The contracts prohibit browser/device fingerprinting, generic storage of raw form payloads, public exposure of click identifiers, secrets in tracking properties, and implicit marketing consent.

## Provider boundary

Google, Meta and other provider-specific credentials, APIs, IDs, authentication flows, health checks and dispatch adapters are intentionally deferred to Phase 10 Integrations.
