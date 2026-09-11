# Site Manifest Specification

Version: **1.0.0**  
Introduced by NEXT F Contracts: **V0.17.0**

## Purpose

Every NEXT F-integrated customer website has one authoritative repository-side `nextf.site.json` declaration. It tells Codex, validation tooling and platform adapters what Site the code belongs to, which NEXT F Contract release it is pinned to, which environments/modules/capabilities it implements, and which runtime/integration surfaces the code supports.

The Site Manifest is technical configuration metadata. It is not customer content, a database dump, a hosting control file or a secret store.

## Authority

1. The manifest must validate against `registry/manifests/nextf-site-manifest.schema.json`.
2. `contracts.contractVersion` is exact. `latest`, version ranges and wildcards are forbidden.
3. The repository contract version determines which canonical schemas/events/integrations are available.
4. Phase 17 becomes authoritative for Module and Capability existence/dependencies.
5. Phase 18 becomes authoritative for API IDs and compatibility.

## Canonical filename

`nextf.site.json`

A TypeScript helper may later produce the exact same JSON structure, but generated or typed representations must never create a second semantic source of truth.

## Mandatory top-level sections

- `manifestVersion`
- `contracts`
- `site`
- `localization`
- `environments`
- `contentDelivery`
- `modules`
- `runtime`
- `cms`
- `events`
- `tracking`
- `integrations`
- `configuration`

`apiBindings` and `extensions` are optional arrays.

## Site type versus functionality

Site type is descriptive only. A Site marked `commerce` is not automatically allowed Commerce behavior. The Module Registry and Site Manifest Module selections determine actual functionality.

Canonical Site types in v1.0.0:

- corporate
- service
- lead-generation
- commerce
- documentation
- custom

## Baseline runtime

Every fully integrated NEXT F Site declares all five baseline runtime capabilities as enabled:

- Site Identity
- Content Connector
- Event Layer
- Consent Layer
- Integration Loader

This lets NEXT F connect future customer-managed content and approved integrations after launch without redesigning the Site architecture.

## Environment rules

- environment IDs are unique
- at most one enabled production environment
- public preview/staging/production URLs use HTTPS
- local development may use localhost HTTP
- environment data never implies NEXT F hosting ownership
- credentials, provider billing data and server-control passwords are prohibited

## Customer CMS boundary

Customer CMS editing is structured. Arbitrary HTML/CSS/JavaScript editing is prohibited. Site presentation remains developer-controlled code while customer-editable data follows canonical contracts.

## Events and tracking are different

`events` declares support for authoritative Phase 13 domain Events.

`tracking` declares Phase 9 visitor/marketing measurement observations.

A browser tracking event cannot be promoted into an authoritative order/payment/inventory fact merely because it appears in the Manifest.

## Integration support versus connection

An Integration Support entry only says the Site code/runtime can support a canonical connector. It does not mean the external account is connected, authorized or active. Credentials remain in secure platform/server storage.

## Configuration bindings

The Manifest records configuration **keys and exposure classes**, never their runtime values.

Exposure classes:

- `public` - explicitly browser-safe non-secret value
- `server` - trusted execution only
- `secret` - secure secret-store reference required; value never written to the Manifest

A secret marked as `secret` is not safe merely because its name is documented. The actual value must remain outside source-controlled public files.

## API bindings

Phase 16 defines the generic shape needed to pin APIs. Production examples keep `apiBindings` empty until Phase 18 publishes canonical API IDs and compatibility rules. No fake API contracts are introduced early.

## Module declarations

Phase 16 establishes the manifest syntax for Module selections. Phase 17 will publish the authoritative Module Registry, dependencies and allowed capabilities. After Phase 17, unknown Module/Capability IDs must fail validation.

## Site-specific extensions

Extensions are allowed only when no canonical NEXT F contract covers the requirement. They must:

- use `extension.<siteNamespace>.<name>`
- use an exact semantic version
- identify a repository-relative definition source
- explain why the canonical registry is insufficient
- never override or rename canonical semantics
- remain isolated until deliberately promoted into NEXT F Contracts

## Prohibited content

The Site Manifest must never contain:

- customer passwords
- private API keys
- OAuth access/refresh tokens
- webhook signing secrets
- payment credentials
- database credentials
- private encryption keys
- hosting control-panel credentials
- domain registrar credentials
- customer lead/submission data
- product/order databases
- blog/page body content
- arbitrary executable code

## Hosting and domain boundary

The Manifest may store Site/environment URLs because code needs them for routing, canonical references and environment identification. This does not create hosting or domain services. Domain registration, renewal, hosting subscription and hosting billing remain customer-owned third-party responsibilities.

## Codex workflow

When a customer project includes `nextf.site.json`, Codex must read it before architecture or feature implementation, resolve the pinned Contract Version, use enabled Modules, respect runtime/CMS boundaries, use canonical Events and Integration connectors, and report any extension instead of silently inventing a competing contract.

## Compatibility

The Manifest Specification has its own `manifestVersion`, separate from the repository `contractVersion`. Both are exact semantic versions. A breaking Manifest shape change requires a Manifest major-version transition.
