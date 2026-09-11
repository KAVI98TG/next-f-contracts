# NEXT F PERFORMANCE STANDARD

**Phase:** 32  
**Introduced in:** V0.33.0  
**Scope:** Customer websites, NEXT F Customer CMS, NEXT F Admin, APIs, integrations, Site Runtime boundaries and `contract.nextf.lk`

## 1. Purpose

Performance is an implementation quality and operational constraint. This standard defines reusable performance rules, measurable budgets and validation expectations without claiming that a particular metric guarantees search-engine ranking or business outcomes.

## 2. Authority

- `registry/performance/rules/` is the machine-readable implementation-rule source.
- `registry/performance/budgets/` is the machine-readable performance-budget source.
- `registry/performance/portal-audit.json` contains measured Contract Portal evidence for the release.
- Generated portal views and fallbacks are discovery layers and must not override these sources.

## 3. Payload and route loading

- Keep HTML, CSS and JavaScript payloads disciplined and avoid duplicated generated data.
- Heavy route-only features must use lazy loading/code splitting where practical without changing the Vanilla JavaScript architecture.
- Generated local fallbacks exist for offline/file review, but hosted runtime must not eagerly parse them before authoritative JSON fails.
- Registry JSON should load only where required by the shell or current feature.
- Contract Diff historical data must remain lazy and must not load on normal Overview, Registry, Search or Standards routes.
- Very large raw JSON must not be rendered eagerly when a collapsed/detail presentation can avoid unnecessary DOM and memory cost.
- Large tables/lists must paginate, virtualize, filter, collapse or otherwise remain bounded and usable.

## 4. Caching boundaries

- Public versioned or immutable content may use cache-friendly policies matched to freshness/invalidation needs.
- Authenticated, tenant-specific and permission-filtered responses must not enter unsafe shared caches.
- Any authenticated caching must vary correctly by identity, tenant, permission context and representation.
- Cache behavior must never weaken authorization, privacy or security boundaries.

## 5. Images, media and fonts

- Optimize images for rendered use rather than shipping source-size assets blindly.
- Use responsive images (`srcset`/`sizes` or equivalent) where viewport needs materially differ.
- Prefer efficient modern image formats when requirements permit.
- Lazy-load non-critical below-the-fold images; do not delay the actual LCP image merely to satisfy a generic lazy-loading rule.
- Prefer system/local font strategies where appropriate. Preload only initial-render-critical fonts and avoid unused weights/styles.

## 6. Third-party integrations, analytics and advertising

- Optional integrations must not block initial rendering or primary navigation.
- Consent-required analytics/advertising scripts must respect the canonical consent state before loading or dispatch.
- Avoid duplicate provider runtimes.
- Load only enabled connectors.
- Provider failures must not break primary site content or unrelated core flows.
- Future Site Runtime observability should expose slow connector timing/failure evidence without leaking secret or personal payload data.

## 7. APIs and data access

- Avoid request waterfalls and duplicate reads of identical data within one interaction.
- Use batching/aggregate operations where safe and where authorization/data ownership remain correct.
- Use pagination or otherwise bound unbounded collections.
- Public content caching and authenticated caching are separate concerns.
- API request count is a design constraint, not a reason to merge unrelated authorization or domain boundaries.

## 8. Search, Relationships and Diff

- Global Search rendering remains bounded by its machine-readable page/palette limits.
- Relationship traversal, neighbor rendering, path depth and edge-table rows remain bounded by `registry/relationships/relationship-config.json`.
- Contract Diff snapshot storage is monitored separately from initial-route transfer size because history is route-lazy.
- Search/index growth, relationship graph growth and generated fallback growth are measured on every Phase 32+ release.

## 9. Memory and large Registry behavior

- Avoid unbounded browser caches and retained route-only datasets.
- Prefer explicit detail/expand flows for huge raw representations.
- Large Registry growth must not silently multiply identical data across unrelated runtime artifacts.
- Release validation must inspect generated fallback and index sizes for abnormal growth.

## 10. Mobile and Core Web Vitals guidance

- Review expensive routes and integrations under constrained mobile CPU/network assumptions.
- Use LCP, INP and CLS as user-experience signals with environment/context recorded.
- Core Web Vitals are guidance and evidence, not a guaranteed search-ranking promise.
- Browser/field profiling is required for real user-experience conclusions; static repository checks alone cannot prove runtime performance.

## 11. Contract Portal implementation rules

`contract.nextf.lk` specifically locks the following:

- Global Search results are bounded.
- Relationship Explorer graph expansion is bounded.
- Contract Diff history remains lazy-loaded.
- Generated local fallback modules are dynamically imported only on authoritative-JSON failure for bootstrap-loaded registries.
- Huge Diff snapshot data is not part of normal portal bootstrap.
- Inline scripts/styles remain avoided unless there is a justified measured need.
- Generated fallback/index sizes are monitored in `portal-audit.json`.

## 12. Performance budgets

Every machine-readable budget declares:

- budget ID;
- scope;
- metric;
- target;
- warning threshold;
- comparator;
- unit;
- applicability;
- measurement method;
- environment;
- notes.

A target breach is a Phase 32 acceptance failure for mandatory Contract Portal budgets. A warning-threshold breach requires explicit remediation or documented acceptance before packaging.

## 13. Measurement honesty

Static size checks, synthetic browser profiles and production field measurements are different evidence classes. Record the method/environment. Do not translate static repository bytes directly into unsupported LCP/INP/CLS claims.

## 14. Non-goals

Phase 32 does not create a production Site Runtime telemetry system, CDN, image transformation service or monitoring platform. It defines the standards and validates what can be proven in the Contract Registry/Portal today.
