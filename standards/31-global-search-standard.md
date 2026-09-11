# Global Search Standard

## Purpose

Global Search is the single discovery layer for `contract.nextf.lk`. It must make canonical contracts, field names, schema IDs, Events, Webhooks, Permissions, Roles, Modules, Capabilities, API operations, examples, standards and developer documentation discoverable without requiring users or Codex operators to know the registry layout in advance.

## Authority

Search is a discovery mechanism only. Search results never override the authoritative source contract. The result must link back to the canonical registry item, portal route or source document.

## Coverage

The Phase 23 search index must cover:

- every item in `registry/registry.json`
- top-level fields exposed by authoritative schema/contract definitions
- portal routes
- standards and developer documentation
- reference examples and their canonical registry entries

Search may index additional descriptive text from authoritative JSON sources to improve recall, but must not fabricate searchable facts.

## Exact machine identifier behavior

Exact machine identifiers receive the highest ranking. Examples include:

- `content.blogPost`
- `order.paid`
- `commerce.orders.manage`
- `modules.commerce`
- API operation IDs

Dot, hyphen and underscore separators are token boundaries for natural-language search while the original identifier remains searchable exactly.

## Natural-language behavior

Search should tolerate ordinary terms such as `order payment`, `facebook tracking`, `blog title`, `ecommerce checkout`, `google analytics`, or `SEO metadata`.

A controlled synonym table may expand common technology/product vocabulary. Synonyms affect discovery ranking only and never change canonical terminology.

## Ranking

Ranking should prioritize, in order:

1. exact machine ID
2. exact title
3. machine ID prefix
4. title prefix or phrase
5. exact query-token coverage in title/machine ID
6. field/key matches
7. description/tags/aliases
8. fuzzy token similarity for sufficiently long terms

Search must remain deterministic for the same index, query and filters.

## Fuzzy matching

Fuzzy matching is a fallback, not the primary strategy. It must not outrank exact identifiers or exact words. Short tokens should not use fuzzy matching because they create excessive false positives.

## Search result types

Canonical result kinds are:

- Registry
- Field
- Portal route
- Documentation

Field results must always identify and link to their parent contract.

## Global command palette

`Ctrl+K` and `Cmd+K` open the search command palette.

The palette must support:

- keyboard-only navigation
- Up/Down selection
- Enter to open
- Escape to close
- focus trapping while open
- visible result type
- machine ID where relevant
- a route to full search results

The palette must remain useful on mobile through the top-bar search action.

## Full Search page

The portal must expose a dedicated full Search page that supports:

- free-text query
- result-kind filter
- domain filter
- lifecycle-status filter
- URL-persisted search state
- total result count
- result type and canonical target
- clear filters action
- empty-query guidance
- no-result guidance

## Search privacy

The static portal performs search locally in the browser. Search queries must not be sent to a remote analytics or search provider merely to provide registry discovery.

Recent-search behavior, if introduced, must remain local to the browser unless a later explicit standard says otherwise.

## Search index generation

The searchable index is generated from authoritative repository files.

`registry/search/search-index.json` is authoritative for the generated search snapshot.

A browser fallback may be generated for `file://` review, but must contain a SHA-256 digest of the authoritative search index so stale generated data can be detected by validation.

## Security

Search indexing must not include secrets, credentials, private runtime values or customer records. The Contract Registry itself must contain only safe technical documentation and fictional examples under existing security standards.

## Accessibility

Search labels, status text and result counts must be available to assistive technology. Highlighting cannot be the only method used to communicate relevance.

## No fabricated results

Global Search may only return indexed repository content. Planned phases may appear as portal routes if they are explicitly present in portal navigation, but search must not generate nonexistent contracts merely from a query.
