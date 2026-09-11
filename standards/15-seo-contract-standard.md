# NEXT F SEO Contract Standard

Version: **V0.8.0**

## 1. Purpose

The SEO Contract Registry defines one reusable SEO model for every NEXT F-built Site. Customer projects must not invent parallel metadata, redirect, sitemap, robots, audit or search-performance shapes when a canonical `seo.*` contract exists.

## 2. Separation from Content

SEO data is intentionally separated from `content.*` entities. `seo.metadata` attaches to a canonical `core.entityReference`, allowing the Customer CMS to present SEO fields inside a Page, Blog Post, Documentation or other editor without forcing each Content contract to duplicate the same fields.

Content remains the business/editorial source. SEO metadata is an optimization and delivery layer.

## 3. Search-result title and description

`metaTitle` and `metaDescription` are suggestions supplied by the Site. Search engines may rewrite or ignore them.

Length guidance belongs in audits and editor UX. Character limits must not be represented as guaranteed search-engine display limits because rendering depends on pixels, query context, device, language and provider behavior.

## 4. Focus keywords

`seo.keywordTarget` and `seo.keywordSet` document editorial targeting intent.

They must never imply:

- a required keyword density
- keyword stuffing
- guaranteed ranking
- guaranteed search volume
- guaranteed traffic

A focus keyword is a planning and analysis input only.

## 5. Canonical URLs

One eligible routable target should have one preferred canonical URL per relevant locale context.

Production canonical URLs should:

- be absolute
- use HTTP(S), normally HTTPS
- omit fragments
- resolve to the intended preferred content
- avoid redirect chains

External canonical targets require an explicit business/SEO decision and must not be silently introduced by automation.

## 6. Robots directives vs robots.txt

These are separate concerns.

`seo.robotsDirective` describes page-level index/follow and preview directives.

`seo.robotsRule` and `seo.robotsPolicy` describe robots.txt crawling policy.

robots.txt is not an authorization mechanism and must never protect private data.

## 7. Open Graph and social cards

Social metadata uses canonical media references. Vendor-specific API credentials, Pixel IDs, account IDs and advertising configuration belong to Integration/Marketing contracts, not SEO metadata.

## 8. Structured data

`seo.structuredData` stores JSON-compatible structured data only.

It must not contain executable script markup. Generated markup may be wrapped by frontend code in the appropriate JSON-LD script element at render time.

Structured data must not fabricate:

- ratings
- reviews
- prices
- inventory
- business details
- authorship
- dates
- other claims

Data should correspond to legitimate Site content and the applicable structured-data specification.

## 9. Hreflang / alternate languages

`seo.alternateLanguage` defines language/region alternate URLs and x-default behavior. Implementations should validate absolute URLs, uniqueness and reciprocal relationships where applicable.

## 10. Redirects

Redirects are Site-scoped runtime configuration, not page content.

The system must detect or prevent:

- source duplication
- self redirects
- redirect loops
- unsafe schemes
- avoidable chains

Permanent vs temporary status codes must preserve their HTTP semantics.

## 11. Sitemaps

Only public canonical URLs eligible for indexing belong in generated public sitemaps.

A noindex URL must not be added to a generated public sitemap by default.

`lastModifiedAt` must represent meaningful content modification and must not be rewritten on every deployment merely to appear fresh.

## 12. Audit scores

`seo.auditResult.score` is a NEXT F diagnostic score. It is not a Google, Bing or other search-engine score and is not a ranking guarantee.

Audit rules must expose findings and recommendations rather than hiding all meaning behind a single number.

## 13. Link health

Internal-link and broken-link records are derived operational data. Customers fix the source content; they do not edit crawl records as if they were content.

External links may fail temporarily. Detection time, last check and workflow state must remain explicit.

## 14. Search performance

Search queries and performance metrics are imported/observed data. Every metric set must retain source and freshness metadata.

The CMS must not fabricate values or present stale imported information as live provider data.

Provider-specific authorization belongs to Phase 10 Integrations.

## 15. Indexing inspection

Indexability and indexing are not the same as ranking.

A URL may be technically indexable while a search engine chooses not to index it.

Inspection results are timestamped snapshots. Provider-selected canonical values must not silently overwrite customer-declared canonical metadata.

## 16. Site defaults

Site defaults provide safe fallbacks. Explicit per-target metadata wins over defaults.

A default must never overwrite an intentional page-level noindex/canonical/social configuration.

## 17. CMS behavior

The Customer CMS may expose:

- search preview
- meta title and description
- focus keyword and secondary terms
- canonical URL
- robots controls
- Open Graph/social image controls
- structured data
- redirects
- sitemap/indexing diagnostics
- audit findings
- link health
- search performance when integrations are available

Advanced controls should include help text and safe defaults. The CMS must not promise rankings.

## 18. Public delivery boundary

Public website renderers may consume only SEO data required to generate public metadata, sitemap or robots outputs.

Audit findings, imported search metrics, integration credentials and internal diagnostics remain private.

## 19. Codex rule

Codex must reuse `seo.*` contracts. It must not hardcode a second SEO object into a customer project when the canonical SEO registry covers that requirement.

If a new SEO capability is required, Codex must report a Contract Extension Proposal rather than silently creating a competing standard.
