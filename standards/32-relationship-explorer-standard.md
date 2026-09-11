# Relationship Explorer Standard

## Purpose

The Relationship Explorer is the canonical discovery layer for connections between definitions in the NEXT F Contract Registry. It exists so developers, Codex, Customer CMS implementers and NEXT F Admin implementers can answer questions such as:

- What does this contract depend on?
- Which contracts depend on this contract?
- Which permissions and Events are associated with this definition?
- How does one registry definition connect to another?
- What is the likely impact area of changing a contract?
- Which definitions are currently isolated from the registry graph?

The Explorer is a discovery and impact-analysis tool. It does not change contract semantics and it is not a runtime dependency injector.

## Authority

`registry/registry.json` remains authoritative for registry metadata and explicit `relationships`, `permissions` and `events` associations.

`registry/relationships/relationship-index.json` is a deterministic generated projection of that authoritative registry. It must be regenerated whenever source registry relationships change.

The Relationship Explorer must never create a relationship because two items merely have similar names, tags or search terms.

## Graph nodes

Every item in `registry/registry.json` is represented as exactly one graph node.

A node carries discovery metadata only:

- machine ID
- name
- domain
- type
- lifecycle status
- phase
- source path
- incoming edge count
- outgoing edge count
- total degree

A graph node does not replace the registry item.

## Graph edges

The graph contains three authoritative edge origins.

### Explicit relationship edge

Generated from an entry in a registry item's `relationships` array.

The source relationship `type`, `target` and `description` must be preserved exactly. Multiple explicit relationships between the same source, type and target are allowed when they represent different semantic paths or fields. The generated graph must preserve those parallel edges rather than silently deduplicating them.

### Permission association edge

Generated from a registry item's `permissions` array when the permission identifier resolves to a canonical Permission registry node.

This graph-only edge type is `associatedPermission`.

It means that the source registry definition is directly associated with the permission identifier. It does not independently define when or how the permission check is enforced.

### Event association edge

Generated from a registry item's `events` array when the Event identifier resolves to a canonical Event registry node.

This graph-only edge type is `associatedEvent`.

It means that the source registry definition is directly associated with the Event identifier. It does not state whether the source produces, consumes or merely documents that Event unless an explicit relationship says so.

When a canonical Event Registry node lists its own Event ID in its `events` discovery metadata, the generator does not create a self-edge. That self-identification adds no cross-definition relationship information.

## Symbolic associations

Some controlled vocabularies can legitimately contain identifiers that do not exist as standalone Registry nodes. Phase 9 tracking-event names are one example.

These values must not be fabricated into Registry nodes merely to make the graph resolve.

The generated relationship index records them separately as symbolic associations with a reason and origin. They are excluded from graph traversal and are not classified as broken explicit relationships.

## Relationship type vocabulary

Every explicit relationship type allowed by `registry/registry-meta.json` must have one controlled definition in `registry/relationships/relationship-types.json`.

Each relationship type definition declares:

- label
- family
- directionality
- requiredness or advisory character
- inverse label
- description
- whether self-reference is normally meaningful
- whether the type is graph-only derived metadata

Relationship families are discovery categories and do not change source semantics.

Canonical families are:

- composition
- dependency
- reference
- hierarchy
- governance
- derivation
- association
- authorization
- event

## Direction

Edges are directed from source to target.

The Explorer may traverse:

- outgoing edges
- incoming edges
- both directions

A both-direction traversal is for discovery only. It must still display the real source-to-target direction of every edge.

## Focus exploration

A user must be able to focus any Registry node and inspect:

- direct incoming relationships
- direct outgoing relationships
- relationship type and family
- source and target metadata
- relationship description
- edge origin
- parallel-edge multiplicity
- additional layers to a bounded depth

The default depth is one hop.

The portal must enforce configured node and depth limits so a high-degree definition cannot lock the browser UI.

## Dependency analysis

Outgoing traversal is used as a dependency-oriented view. It shows what the focused definition directly or transitively reaches through selected relationship types.

This is a discovery aid. Not every outgoing relationship implies a deploy-time or runtime dependency.

## Impact analysis

Incoming traversal is used as an impact-oriented view. It shows definitions that directly or transitively point toward the focused definition.

Impact results indicate where a developer should inspect. They do not prove that every returned definition requires a code change.

## Path finder

The Explorer must support a bounded shortest-path search between two Registry nodes.

The path finder must:

- use only indexed graph edges
- preserve actual edge direction in the rendered path
- allow outgoing-only or bidirectional discovery
- enforce a maximum path depth
- return no path rather than fabricate a relationship
- identify relationship type and edge origin for each step

A shortest path is a graph-discovery path, not proof of runtime call flow, data flow or causal behavior.

## Relationship filters

The Explorer may filter by:

- relationship type
- relationship family
- edge origin
- connected domain
- direction
- traversal depth

Filtering changes discovery output only. It never changes Registry definitions.

## Isolated definitions

Definitions with no indexed incoming or outgoing graph edges are listed as isolated nodes.

An isolated node is not automatically invalid. Support schemas, future-facing metadata and leaf definitions can be intentionally isolated.

Isolation is a review signal, not a validation failure unless another contract requires a connection.

## Integrity metrics

The Relationship Explorer must expose at least:

- total graph nodes
- total graph edges
- explicit relationship edges
- permission association edges
- Event association edges
- relationship type count
- isolated node count
- parallel edge group count
- self-loop count
- symbolic association count
- unresolved explicit relationship count

Unresolved explicit relationship targets are a validation failure.

## Deterministic generation

The relationship index must be generated deterministically from the authoritative registry.

The index records a SHA-256 digest of `registry/registry.json`.

The browser fallback records a SHA-256 digest of the authoritative relationship index. Validation must fail if either generated projection is stale.

## URL state

The portal should preserve shareable Relationship Explorer state in the URL, including the focused node and selected filters where practical.

A developer must be able to share a URL that opens the relationship context for a specific Registry machine ID.

## Registry detail integration

Every Registry detail screen should provide a direct route to the Relationship Explorer focused on that Registry item where the common portal shell can safely add the action.

The Explorer must always provide a route back to the canonical Registry detail page.

## Performance

The Relationship Explorer runs locally in the browser.

It must use precomputed adjacency-friendly index data and bounded traversal. It must not require a remote graph database or third-party graph service for ordinary portal browsing.

The graph may contain thousands of edges; therefore rendering must show bounded summaries rather than attempting to draw every node at once.

## Accessibility

The canonical relationship experience must remain usable without interpreting a visual canvas.

Relationship information must be represented using semantic HTML, text labels, lists, tables and links. Any visual connectors are supplementary.

Keyboard users must be able to:

- select a focus node
- change filters
- follow relationships
- run a path search
- open canonical Registry definitions

Color must not be the only signal for relationship family, origin or direction.

## Light SaaS presentation

The Relationship Explorer follows the permanent light-only paper-dashboard portal standard.

Do not introduce:

- dark mode
- glass effects
- backdrop blur
- 3D scenes
- decorative animated graph particles

## Security and privacy

The relationship index contains only public technical registry metadata already eligible for the Contract Portal.

It must not include:

- runtime secrets
- customer data
- credentials
- private provider tokens
- production logs
- raw operational records

## Codex use

Codex should use the Relationship Explorer/index to discover canonical dependencies and impact areas before creating an extension or changing a contract.

The graph is not permission to alter related definitions. Contract authority, compatibility, migration and extension rules remain independently applicable.

## No fabrication

If no indexed path or relationship exists, the Explorer must say so.

Search similarity, matching tags, shared words or developer expectation must never be converted into a graph edge automatically.
