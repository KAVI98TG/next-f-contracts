// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/performance/*
export const GENERATED_PERFORMANCE = {
  "registryVersion": "1.4.0",
  "index": {
    "registryVersion": "1.4.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Performance Registry",
    "description": "Machine-readable performance rules, budgets and Contract Portal measurement evidence.",
    "ruleCount": 36,
    "budgetCount": 17,
    "categories": [
      {
        "id": "payload",
        "label": "Payload Discipline",
        "description": "HTML, CSS, JavaScript and generated-data payload size discipline.",
        "ruleCount": 3,
        "budgetCount": 6
      },
      {
        "id": "loading",
        "label": "Loading & Routing",
        "description": "Route loading, lazy loading, code splitting and registry-data loading.",
        "ruleCount": 4,
        "budgetCount": 2
      },
      {
        "id": "caching",
        "label": "Caching",
        "description": "Public-content caching and authenticated/private caching boundaries.",
        "ruleCount": 3,
        "budgetCount": 0
      },
      {
        "id": "media",
        "label": "Images & Media",
        "description": "Responsive images, modern formats, lazy media and delivery sizing.",
        "ruleCount": 4,
        "budgetCount": 0
      },
      {
        "id": "fonts",
        "label": "Fonts",
        "description": "Font loading, system stacks, preload restraint and rendering behavior.",
        "ruleCount": 1,
        "budgetCount": 0
      },
      {
        "id": "third-party",
        "label": "Third-party Integrations",
        "description": "Non-blocking provider loading, consent and failure isolation.",
        "ruleCount": 4,
        "budgetCount": 2
      },
      {
        "id": "api",
        "label": "API & Data Access",
        "description": "Request counts, batching, pagination and response shaping.",
        "ruleCount": 3,
        "budgetCount": 0
      },
      {
        "id": "search",
        "label": "Search",
        "description": "Search-index size, bounded results and query behavior.",
        "ruleCount": 1,
        "budgetCount": 2
      },
      {
        "id": "relationships",
        "label": "Relationship Explorer",
        "description": "Bounded graph traversal and rendering.",
        "ruleCount": 1,
        "budgetCount": 2
      },
      {
        "id": "diff",
        "label": "Contract Diff",
        "description": "Historical snapshot isolation and lazy loading.",
        "ruleCount": 1,
        "budgetCount": 2
      },
      {
        "id": "large-data",
        "label": "Large Data Rendering",
        "description": "Raw JSON, large tables and list rendering boundaries.",
        "ruleCount": 2,
        "budgetCount": 1
      },
      {
        "id": "memory",
        "label": "Memory",
        "description": "Bounded in-memory state and cleanup of expensive route data.",
        "ruleCount": 1,
        "budgetCount": 0
      },
      {
        "id": "mobile",
        "label": "Mobile",
        "description": "Mobile CPU, network and interaction responsiveness.",
        "ruleCount": 1,
        "budgetCount": 0
      },
      {
        "id": "web-vitals",
        "label": "Core Web Vitals",
        "description": "Measurement guidance for LCP, INP and CLS without ranking guarantees.",
        "ruleCount": 2,
        "budgetCount": 0
      },
      {
        "id": "observability",
        "label": "Observability",
        "description": "Performance evidence and future connector/runtime timing visibility.",
        "ruleCount": 3,
        "budgetCount": 0
      },
      {
        "id": "resilience",
        "label": "Resilience",
        "description": "Optional integration failure isolation from primary content and navigation.",
        "ruleCount": 2,
        "budgetCount": 0
      }
    ],
    "rules": [
      {
        "ruleId": "PERF-RULE-001",
        "name": "HTML payload discipline",
        "category": "payload",
        "requirement": "Keep page shells semantic and compact; do not embed large Registry payloads directly into HTML.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_001.json"
      },
      {
        "ruleId": "PERF-RULE-002",
        "name": "CSS payload discipline",
        "category": "payload",
        "requirement": "Use shared tokens/components and avoid duplicated or oversized inline styles.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_002.json"
      },
      {
        "ruleId": "PERF-RULE-003",
        "name": "JavaScript payload discipline",
        "category": "payload",
        "requirement": "Prefer small ES modules, shared utilities and data-driven rendering over duplicated page-specific code.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_003.json"
      },
      {
        "ruleId": "PERF-RULE-004",
        "name": "Route-lazy heavy features",
        "category": "loading",
        "requirement": "Heavy features and historical datasets must load only when the user opens the relevant route.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_004.json"
      },
      {
        "ruleId": "PERF-RULE-005",
        "name": "Generated fallbacks are failure-path assets",
        "category": "loading",
        "requirement": "Generated local fallbacks must load dynamically only when authoritative JSON cannot be read; normal hosted runtime must not eagerly parse them.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_005.json"
      },
      {
        "ruleId": "PERF-RULE-006",
        "name": "Registry JSON loading",
        "category": "loading",
        "requirement": "Load only the Registry data required by the current shell or feature, and avoid duplicating the same authoritative data into unrelated runtime bundles.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_006.json"
      },
      {
        "ruleId": "PERF-RULE-007",
        "name": "Public content caching",
        "category": "caching",
        "requirement": "Public immutable or versioned content may use cache-friendly policies appropriate to freshness and invalidation requirements.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_007.json"
      },
      {
        "ruleId": "PERF-RULE-008",
        "name": "Authenticated cache boundary",
        "category": "caching",
        "requirement": "Authenticated, tenant-specific or permission-filtered responses must not be placed into unsafe shared caches.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_008.json"
      },
      {
        "ruleId": "PERF-RULE-009",
        "name": "Image optimization",
        "category": "media",
        "requirement": "Customer sites should deliver appropriately compressed images sized for their rendered use.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_009.json"
      },
      {
        "ruleId": "PERF-RULE-010",
        "name": "Responsive images",
        "category": "media",
        "requirement": "Use srcset/sizes or equivalent responsive-image delivery when one image asset serves materially different viewport sizes.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_010.json"
      },
      {
        "ruleId": "PERF-RULE-011",
        "name": "Modern image formats",
        "category": "media",
        "requirement": "Prefer efficient modern formats when browser and content requirements permit while preserving a compatible delivery path.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_011.json"
      },
      {
        "ruleId": "PERF-RULE-012",
        "name": "Lazy non-critical images",
        "category": "media",
        "requirement": "Images below the initial viewport should normally use lazy loading; critical/LCP media must not be lazily delayed without evidence.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_012.json"
      },
      {
        "ruleId": "PERF-RULE-013",
        "name": "Font loading discipline",
        "category": "fonts",
        "requirement": "Prefer system or locally controlled fonts where appropriate; preload only fonts required for initial rendering and avoid unnecessary weights/styles.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_013.json"
      },
      {
        "ruleId": "PERF-RULE-014",
        "name": "Third-party scripts are non-blocking",
        "category": "third-party",
        "requirement": "Optional third-party integrations must not block primary content rendering or core navigation.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_014.json"
      },
      {
        "ruleId": "PERF-RULE-015",
        "name": "Consent-gated marketing scripts",
        "category": "third-party",
        "requirement": "Analytics and advertising scripts that require consent must not load or dispatch before the applicable consent state permits them.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "marketing.consentState",
          "privacy.consentBoundaries"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_015.json"
      },
      {
        "ruleId": "PERF-RULE-016",
        "name": "No duplicate provider scripts",
        "category": "third-party",
        "requirement": "Load a provider runtime at most once per page/runtime unless the provider contract explicitly requires otherwise.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_016.json"
      },
      {
        "ruleId": "PERF-RULE-017",
        "name": "Enabled connectors only",
        "category": "third-party",
        "requirement": "Load only connectors enabled by the Site Manifest/configuration for the current Site and environment.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "manifest.siteManifest",
          "integrations.connectorDefinition"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_017.json"
      },
      {
        "ruleId": "PERF-RULE-018",
        "name": "Connector failure isolation",
        "category": "resilience",
        "requirement": "Third-party provider failure must not break primary site content, forms unrelated to that provider, or navigation.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_018.json"
      },
      {
        "ruleId": "PERF-RULE-019",
        "name": "API request discipline",
        "category": "api",
        "requirement": "Avoid avoidable request waterfalls and repeated reads of identical resources within one interaction.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_019.json"
      },
      {
        "ruleId": "PERF-RULE-020",
        "name": "Batching where safe",
        "category": "api",
        "requirement": "Use batching or aggregate endpoints when it reduces request overhead without weakening authorization, caching or data ownership boundaries.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "api.apiContractStandard"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_020.json"
      },
      {
        "ruleId": "PERF-RULE-021",
        "name": "Pagination for unbounded collections",
        "category": "api",
        "requirement": "APIs and management interfaces must paginate or otherwise bound collections that can grow without a small deterministic maximum.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "api.apiContractStandard"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_021.json"
      },
      {
        "ruleId": "PERF-RULE-022",
        "name": "Bounded Global Search rendering",
        "category": "search",
        "requirement": "Global Search must keep palette/page result rendering bounded independently from total index size.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "search.searchIndex",
          "search.searchConfiguration"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_022.json"
      },
      {
        "ruleId": "PERF-RULE-023",
        "name": "Bounded Relationship Explorer",
        "category": "relationships",
        "requirement": "Relationship traversal, neighbor rendering, path depth and edge-table rows must remain bounded by machine-readable configuration.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "relationships.relationshipIndex",
          "relationships.relationshipConfiguration"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_023.json"
      },
      {
        "ruleId": "PERF-RULE-024",
        "name": "Lazy Contract Diff history",
        "category": "diff",
        "requirement": "Historical Diff snapshots and large release history must not load on ordinary Registry, Search or Overview routes.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "diff.releaseIndex"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_024.json"
      },
      {
        "ruleId": "PERF-RULE-025",
        "name": "Lazy raw JSON",
        "category": "large-data",
        "requirement": "Very large raw JSON should not be eagerly rendered into the DOM; show it on explicit detail/expand actions where practical.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_025.json"
      },
      {
        "ruleId": "PERF-RULE-026",
        "name": "Bounded large tables and lists",
        "category": "large-data",
        "requirement": "Large tables/lists must paginate, virtualize, filter, collapse or otherwise remain usable instead of rendering unbounded rows.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_026.json"
      },
      {
        "ruleId": "PERF-RULE-027",
        "name": "Bounded memory use",
        "category": "memory",
        "requirement": "Release references to route-only large datasets when no longer needed where the runtime architecture supports it, and avoid unbounded caches.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_027.json"
      },
      {
        "ruleId": "PERF-RULE-028",
        "name": "Mobile-first performance review",
        "category": "mobile",
        "requirement": "Evaluate expensive routes and integrations under constrained mobile CPU/network assumptions rather than desktop-only conditions.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_028.json"
      },
      {
        "ruleId": "PERF-RULE-029",
        "name": "Core Web Vitals guidance",
        "category": "web-vitals",
        "requirement": "Use LCP, INP and CLS as user-experience signals with environment/context recorded; do not present them as guaranteed search-ranking outcomes.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_029.json"
      },
      {
        "ruleId": "PERF-RULE-030",
        "name": "Provider timing observability",
        "category": "observability",
        "requirement": "Future Site Runtime connector observability should expose slow/failing integration timing without leaking secret or personal payload data.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "integrations.connectorDefinition"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_030.json"
      },
      {
        "ruleId": "PERF-RULE-031",
        "name": "Measure generated artifact growth",
        "category": "observability",
        "requirement": "Search, Relationship, Diff and local fallback artifact sizes must be measured during release validation so growth is visible before packaging.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_031.json"
      },
      {
        "ruleId": "PERF-RULE-032",
        "name": "Performance evidence is environment-specific",
        "category": "observability",
        "requirement": "Synthetic/static checks and browser profiles must record environment and method; a repository size check is not equivalent to field performance.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_032.json"
      },
      {
        "ruleId": "PERF-RULE-033",
        "name": "No ranking guarantee",
        "category": "web-vitals",
        "requirement": "Performance improvements may support usability and technical quality, but NEXT F must not claim guaranteed search-engine ranking improvements.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_033.json"
      },
      {
        "ruleId": "PERF-RULE-034",
        "name": "Route data isolation",
        "category": "loading",
        "requirement": "Heavy route-only data must not be pulled into the main shell merely because a generated fallback exists.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_034.json"
      },
      {
        "ruleId": "PERF-RULE-035",
        "name": "Authenticated response cache variation",
        "category": "caching",
        "requirement": "Where authenticated caching is used, cache keys and variation must preserve identity, tenant, permission and representation boundaries.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "static-analysis",
          "browser-profile"
        ],
        "relatedRegistryIds": [
          "api.cachePolicy"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_035.json"
      },
      {
        "ruleId": "PERF-RULE-036",
        "name": "Primary content survives marketing failure",
        "category": "resilience",
        "requirement": "Analytics, advertising and optional marketing-provider failures must degrade independently from primary content and commerce-critical flows.",
        "applicability": [
          "customer-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "verificationMethods": [
          "manual-review"
        ],
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/rules/perf_rule_036.json"
      }
    ],
    "budgets": [
      {
        "budgetId": "PERF-BUDGET-001",
        "name": "Portal HTML payload",
        "category": "payload",
        "scope": "contract-portal",
        "metric": "portal.indexHtmlBytes",
        "target": 65536,
        "warningThreshold": 98304,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-file-size",
        "environment": "Hosted and file review",
        "notes": "Keeps the shell small enough to parse quickly; generated data must not be embedded into HTML.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_001.json"
      },
      {
        "budgetId": "PERF-BUDGET-002",
        "name": "Local CSS aggregate",
        "category": "payload",
        "scope": "contract-portal",
        "metric": "portal.localCssBytes",
        "target": 196608,
        "warningThreshold": 262144,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-file-size",
        "environment": "Hosted and file review",
        "notes": "All portal CSS combined. Route-specific growth should be monitored even though styles remain static assets.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_002.json"
      },
      {
        "budgetId": "PERF-BUDGET-003",
        "name": "Non-generated JavaScript source",
        "category": "payload",
        "scope": "contract-portal",
        "metric": "portal.localJsSourceBytes",
        "target": 921600,
        "warningThreshold": 1258291,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-file-size",
        "environment": "Hosted and file review",
        "notes": "Excludes generated fallbacks so authored runtime complexity can be monitored independently.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_003.json"
      },
      {
        "budgetId": "PERF-BUDGET-004",
        "name": "Generated fallback aggregate",
        "category": "payload",
        "scope": "contract-portal",
        "metric": "portal.generatedFallbackBytes",
        "target": 94371840,
        "warningThreshold": 134217728,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-file-size",
        "environment": "Repository/local review",
        "notes": "Phase 36 RC keeps the original 90 MiB target but expands the hard-fail ceiling to 128 MiB because exact-history/local fallback growth is expected; crossing the target remains a visible warning.",
        "relatedRegistryIds": [
          "diff.releaseIndex",
          "search.searchIndex",
          "relationships.relationshipIndex"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_004.json"
      },
      {
        "budgetId": "PERF-BUDGET-005",
        "name": "Eager generated fallback bytes",
        "category": "loading",
        "scope": "contract-portal",
        "metric": "portal.eagerGeneratedFallbackBytes",
        "target": 0,
        "warningThreshold": 524288,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-import-graph",
        "environment": "Hosted runtime",
        "notes": "Normal hosted loading must not parse generated local fallbacks before authoritative JSON fails.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_005.json"
      },
      {
        "budgetId": "PERF-BUDGET-006",
        "name": "Registry index size",
        "category": "large-data",
        "scope": "contract-portal",
        "metric": "registry.registryJsonBytes",
        "target": 3145728,
        "warningThreshold": 4194304,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-file-size",
        "environment": "Repository and hosted runtime",
        "notes": "Canonical Registry index size budget.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_006.json"
      },
      {
        "budgetId": "PERF-BUDGET-007",
        "name": "Global Search index size",
        "category": "search",
        "scope": "contract-portal",
        "metric": "search.indexBytes",
        "target": 12582912,
        "warningThreshold": 16777216,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-file-size",
        "environment": "Repository and hosted runtime",
        "notes": "Search remains a local index; growth beyond the warning threshold requires segmentation/compression review.",
        "relatedRegistryIds": [
          "search.searchIndex"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_007.json"
      },
      {
        "budgetId": "PERF-BUDGET-008",
        "name": "Relationship index size",
        "category": "relationships",
        "scope": "contract-portal",
        "metric": "relationships.indexBytes",
        "target": 4194304,
        "warningThreshold": 6291456,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-file-size",
        "environment": "Repository and hosted runtime",
        "notes": "Relationship graph must remain bounded and compact enough for interactive local traversal.",
        "relatedRegistryIds": [
          "relationships.relationshipIndex"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_008.json"
      },
      {
        "budgetId": "PERF-BUDGET-009",
        "name": "Diff snapshot storage",
        "category": "diff",
        "scope": "contract-portal",
        "metric": "diff.snapshotsBytes",
        "target": 367001600,
        "warningThreshold": 536870912,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-file-size",
        "environment": "Repository storage",
        "notes": "Phase 36 RC keeps the original 350 MiB target but expands the hard-fail ceiling to 512 MiB for accumulated exact Diff history; crossing the target remains a visible storage warning and does not affect initial-route transfer.",
        "relatedRegistryIds": [
          "diff.releaseIndex"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_009.json"
      },
      {
        "budgetId": "PERF-BUDGET-010",
        "name": "Inline script payload",
        "category": "payload",
        "scope": "contract-portal",
        "metric": "portal.inlineScriptBytes",
        "target": 0,
        "warningThreshold": 4096,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-html-scan",
        "environment": "Hosted and file review",
        "notes": "Avoid large inline scripts that bypass caching and content-policy boundaries.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_010.json"
      },
      {
        "budgetId": "PERF-BUDGET-011",
        "name": "Inline style payload",
        "category": "payload",
        "scope": "contract-portal",
        "metric": "portal.inlineStyleBytes",
        "target": 0,
        "warningThreshold": 4096,
        "comparator": "lte",
        "unit": "bytes",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-html-scan",
        "environment": "Hosted and file review",
        "notes": "Keep styling in cacheable CSS assets.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_011.json"
      },
      {
        "budgetId": "PERF-BUDGET-012",
        "name": "External blocking scripts",
        "category": "third-party",
        "scope": "contract-portal",
        "metric": "portal.externalScriptCount",
        "target": 0,
        "warningThreshold": 0,
        "comparator": "lte",
        "unit": "count",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-html-scan",
        "environment": "Hosted runtime",
        "notes": "Contract Portal core operation must not depend on blocking external scripts.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_012.json"
      },
      {
        "budgetId": "PERF-BUDGET-013",
        "name": "External stylesheet dependencies",
        "category": "third-party",
        "scope": "contract-portal",
        "metric": "portal.externalStylesheetCount",
        "target": 1,
        "warningThreshold": 2,
        "comparator": "lte",
        "unit": "count",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-html-scan",
        "environment": "Hosted runtime",
        "notes": "The current Font Awesome stylesheet is the only intended external stylesheet dependency.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_013.json"
      },
      {
        "budgetId": "PERF-BUDGET-014",
        "name": "Eager Diff imports",
        "category": "diff",
        "scope": "contract-portal",
        "metric": "portal.eagerDiffImportCount",
        "target": 0,
        "warningThreshold": 0,
        "comparator": "lte",
        "unit": "count",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-import-graph",
        "environment": "Hosted runtime",
        "notes": "Contract Diff history must remain route-lazy and must not load during normal portal bootstrap.",
        "relatedRegistryIds": [
          "diff.releaseIndex"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_014.json"
      },
      {
        "budgetId": "PERF-BUDGET-015",
        "name": "Relationship render bound",
        "category": "relationships",
        "scope": "contract-portal",
        "metric": "relationships.maxRenderedNeighbors",
        "target": 80,
        "warningThreshold": 100,
        "comparator": "lte",
        "unit": "count",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "config-inspection",
        "environment": "Hosted and file review",
        "notes": "Prevents unbounded graph rendering on high-degree Registry nodes.",
        "relatedRegistryIds": [
          "relationships.relationshipConfiguration"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_015.json"
      },
      {
        "budgetId": "PERF-BUDGET-016",
        "name": "Search page result bound",
        "category": "search",
        "scope": "contract-portal",
        "metric": "search.defaultPageLimit",
        "target": 50,
        "warningThreshold": 100,
        "comparator": "lte",
        "unit": "count",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "config-inspection",
        "environment": "Hosted and file review",
        "notes": "Keeps result rendering bounded even when the index grows.",
        "relatedRegistryIds": [
          "search.searchConfiguration"
        ],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_016.json"
      },
      {
        "budgetId": "PERF-BUDGET-017",
        "name": "Bootstrap registry loaders",
        "category": "loading",
        "scope": "contract-portal",
        "metric": "portal.bootstrapRegistryLoaderCount",
        "target": 24,
        "warningThreshold": 30,
        "comparator": "lte",
        "unit": "count",
        "applicability": [
          "contract-portal"
        ],
        "measurementMethod": "static-import-graph",
        "environment": "Hosted runtime",
        "notes": "Counts authoritative data loaders invoked by the current app shell. Future work may route-lazy more domains.",
        "relatedRegistryIds": [],
        "version": "1.4.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_017.json"
      }
    ],
    "definitions": [
      {
        "$id": "performance.measurementMethod",
        "name": "Performance Measurement Method",
        "version": "1.4.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled method used to gather performance evidence."
      },
      {
        "$id": "performance.performanceAudit",
        "name": "Performance Audit",
        "version": "1.4.0",
        "status": "stable",
        "domain": "performance",
        "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
      },
      {
        "$id": "performance.performanceBudget",
        "name": "Performance Budget",
        "version": "1.4.0",
        "status": "stable",
        "domain": "performance",
        "description": "Machine-readable target/warning threshold for one performance metric."
      },
      {
        "$id": "performance.performanceMetric",
        "name": "Performance Metric",
        "version": "1.4.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled measurable metric used by a Performance Budget."
      },
      {
        "$id": "performance.performanceRule",
        "name": "Performance Rule",
        "version": "1.4.0",
        "status": "stable",
        "domain": "performance",
        "description": "Machine-readable implementation requirement for performance behavior."
      }
    ],
    "portalAuditSummary": {
      "budgetCount": 17,
      "budgetPass": 16,
      "budgetWarning": 1,
      "budgetFail": 0,
      "checkCount": 18,
      "checkPass": 18,
      "checkFail": 0
    },
    "sources": {
      "standard": "standards/40-performance-standard.md",
      "budgetSchema": "registry/performance/performance-budget.schema.json",
      "ruleSchema": "registry/performance/performance-rule.schema.json",
      "categories": "registry/performance/categories.json",
      "metrics": "registry/performance/metrics.json",
      "measurementMethods": "registry/performance/measurement-methods.json",
      "thirdPartyRules": "registry/performance/third-party-rules.json",
      "portalAudit": "registry/performance/portal-audit.json"
    }
  },
  "rules": [
    {
      "ruleId": "PERF-RULE-001",
      "name": "HTML payload discipline",
      "category": "payload",
      "requirement": "Keep page shells semantic and compact; do not embed large Registry payloads directly into HTML.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_001.json"
    },
    {
      "ruleId": "PERF-RULE-002",
      "name": "CSS payload discipline",
      "category": "payload",
      "requirement": "Use shared tokens/components and avoid duplicated or oversized inline styles.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_002.json"
    },
    {
      "ruleId": "PERF-RULE-003",
      "name": "JavaScript payload discipline",
      "category": "payload",
      "requirement": "Prefer small ES modules, shared utilities and data-driven rendering over duplicated page-specific code.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_003.json"
    },
    {
      "ruleId": "PERF-RULE-004",
      "name": "Route-lazy heavy features",
      "category": "loading",
      "requirement": "Heavy features and historical datasets must load only when the user opens the relevant route.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_004.json"
    },
    {
      "ruleId": "PERF-RULE-005",
      "name": "Generated fallbacks are failure-path assets",
      "category": "loading",
      "requirement": "Generated local fallbacks must load dynamically only when authoritative JSON cannot be read; normal hosted runtime must not eagerly parse them.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_005.json"
    },
    {
      "ruleId": "PERF-RULE-006",
      "name": "Registry JSON loading",
      "category": "loading",
      "requirement": "Load only the Registry data required by the current shell or feature, and avoid duplicating the same authoritative data into unrelated runtime bundles.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_006.json"
    },
    {
      "ruleId": "PERF-RULE-007",
      "name": "Public content caching",
      "category": "caching",
      "requirement": "Public immutable or versioned content may use cache-friendly policies appropriate to freshness and invalidation requirements.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_007.json"
    },
    {
      "ruleId": "PERF-RULE-008",
      "name": "Authenticated cache boundary",
      "category": "caching",
      "requirement": "Authenticated, tenant-specific or permission-filtered responses must not be placed into unsafe shared caches.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_008.json"
    },
    {
      "ruleId": "PERF-RULE-009",
      "name": "Image optimization",
      "category": "media",
      "requirement": "Customer sites should deliver appropriately compressed images sized for their rendered use.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_009.json"
    },
    {
      "ruleId": "PERF-RULE-010",
      "name": "Responsive images",
      "category": "media",
      "requirement": "Use srcset/sizes or equivalent responsive-image delivery when one image asset serves materially different viewport sizes.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_010.json"
    },
    {
      "ruleId": "PERF-RULE-011",
      "name": "Modern image formats",
      "category": "media",
      "requirement": "Prefer efficient modern formats when browser and content requirements permit while preserving a compatible delivery path.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_011.json"
    },
    {
      "ruleId": "PERF-RULE-012",
      "name": "Lazy non-critical images",
      "category": "media",
      "requirement": "Images below the initial viewport should normally use lazy loading; critical/LCP media must not be lazily delayed without evidence.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_012.json"
    },
    {
      "ruleId": "PERF-RULE-013",
      "name": "Font loading discipline",
      "category": "fonts",
      "requirement": "Prefer system or locally controlled fonts where appropriate; preload only fonts required for initial rendering and avoid unnecessary weights/styles.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_013.json"
    },
    {
      "ruleId": "PERF-RULE-014",
      "name": "Third-party scripts are non-blocking",
      "category": "third-party",
      "requirement": "Optional third-party integrations must not block primary content rendering or core navigation.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_014.json"
    },
    {
      "ruleId": "PERF-RULE-015",
      "name": "Consent-gated marketing scripts",
      "category": "third-party",
      "requirement": "Analytics and advertising scripts that require consent must not load or dispatch before the applicable consent state permits them.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "marketing.consentState",
        "privacy.consentBoundaries"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_015.json"
    },
    {
      "ruleId": "PERF-RULE-016",
      "name": "No duplicate provider scripts",
      "category": "third-party",
      "requirement": "Load a provider runtime at most once per page/runtime unless the provider contract explicitly requires otherwise.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_016.json"
    },
    {
      "ruleId": "PERF-RULE-017",
      "name": "Enabled connectors only",
      "category": "third-party",
      "requirement": "Load only connectors enabled by the Site Manifest/configuration for the current Site and environment.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "manifest.siteManifest",
        "integrations.connectorDefinition"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_017.json"
    },
    {
      "ruleId": "PERF-RULE-018",
      "name": "Connector failure isolation",
      "category": "resilience",
      "requirement": "Third-party provider failure must not break primary site content, forms unrelated to that provider, or navigation.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_018.json"
    },
    {
      "ruleId": "PERF-RULE-019",
      "name": "API request discipline",
      "category": "api",
      "requirement": "Avoid avoidable request waterfalls and repeated reads of identical resources within one interaction.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_019.json"
    },
    {
      "ruleId": "PERF-RULE-020",
      "name": "Batching where safe",
      "category": "api",
      "requirement": "Use batching or aggregate endpoints when it reduces request overhead without weakening authorization, caching or data ownership boundaries.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "api.apiContractStandard"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_020.json"
    },
    {
      "ruleId": "PERF-RULE-021",
      "name": "Pagination for unbounded collections",
      "category": "api",
      "requirement": "APIs and management interfaces must paginate or otherwise bound collections that can grow without a small deterministic maximum.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "api.apiContractStandard"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_021.json"
    },
    {
      "ruleId": "PERF-RULE-022",
      "name": "Bounded Global Search rendering",
      "category": "search",
      "requirement": "Global Search must keep palette/page result rendering bounded independently from total index size.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "search.searchIndex",
        "search.searchConfiguration"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_022.json"
    },
    {
      "ruleId": "PERF-RULE-023",
      "name": "Bounded Relationship Explorer",
      "category": "relationships",
      "requirement": "Relationship traversal, neighbor rendering, path depth and edge-table rows must remain bounded by machine-readable configuration.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "relationships.relationshipIndex",
        "relationships.relationshipConfiguration"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_023.json"
    },
    {
      "ruleId": "PERF-RULE-024",
      "name": "Lazy Contract Diff history",
      "category": "diff",
      "requirement": "Historical Diff snapshots and large release history must not load on ordinary Registry, Search or Overview routes.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "diff.releaseIndex"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_024.json"
    },
    {
      "ruleId": "PERF-RULE-025",
      "name": "Lazy raw JSON",
      "category": "large-data",
      "requirement": "Very large raw JSON should not be eagerly rendered into the DOM; show it on explicit detail/expand actions where practical.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_025.json"
    },
    {
      "ruleId": "PERF-RULE-026",
      "name": "Bounded large tables and lists",
      "category": "large-data",
      "requirement": "Large tables/lists must paginate, virtualize, filter, collapse or otherwise remain usable instead of rendering unbounded rows.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_026.json"
    },
    {
      "ruleId": "PERF-RULE-027",
      "name": "Bounded memory use",
      "category": "memory",
      "requirement": "Release references to route-only large datasets when no longer needed where the runtime architecture supports it, and avoid unbounded caches.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_027.json"
    },
    {
      "ruleId": "PERF-RULE-028",
      "name": "Mobile-first performance review",
      "category": "mobile",
      "requirement": "Evaluate expensive routes and integrations under constrained mobile CPU/network assumptions rather than desktop-only conditions.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_028.json"
    },
    {
      "ruleId": "PERF-RULE-029",
      "name": "Core Web Vitals guidance",
      "category": "web-vitals",
      "requirement": "Use LCP, INP and CLS as user-experience signals with environment/context recorded; do not present them as guaranteed search-ranking outcomes.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_029.json"
    },
    {
      "ruleId": "PERF-RULE-030",
      "name": "Provider timing observability",
      "category": "observability",
      "requirement": "Future Site Runtime connector observability should expose slow/failing integration timing without leaking secret or personal payload data.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "integrations.connectorDefinition"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_030.json"
    },
    {
      "ruleId": "PERF-RULE-031",
      "name": "Measure generated artifact growth",
      "category": "observability",
      "requirement": "Search, Relationship, Diff and local fallback artifact sizes must be measured during release validation so growth is visible before packaging.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_031.json"
    },
    {
      "ruleId": "PERF-RULE-032",
      "name": "Performance evidence is environment-specific",
      "category": "observability",
      "requirement": "Synthetic/static checks and browser profiles must record environment and method; a repository size check is not equivalent to field performance.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_032.json"
    },
    {
      "ruleId": "PERF-RULE-033",
      "name": "No ranking guarantee",
      "category": "web-vitals",
      "requirement": "Performance improvements may support usability and technical quality, but NEXT F must not claim guaranteed search-engine ranking improvements.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_033.json"
    },
    {
      "ruleId": "PERF-RULE-034",
      "name": "Route data isolation",
      "category": "loading",
      "requirement": "Heavy route-only data must not be pulled into the main shell merely because a generated fallback exists.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_034.json"
    },
    {
      "ruleId": "PERF-RULE-035",
      "name": "Authenticated response cache variation",
      "category": "caching",
      "requirement": "Where authenticated caching is used, cache keys and variation must preserve identity, tenant, permission and representation boundaries.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "static-analysis",
        "browser-profile"
      ],
      "relatedRegistryIds": [
        "api.cachePolicy"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_035.json"
    },
    {
      "ruleId": "PERF-RULE-036",
      "name": "Primary content survives marketing failure",
      "category": "resilience",
      "requirement": "Analytics, advertising and optional marketing-provider failures must degrade independently from primary content and commerce-critical flows.",
      "applicability": [
        "customer-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "verificationMethods": [
        "manual-review"
      ],
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/rules/perf_rule_036.json"
    }
  ],
  "budgets": [
    {
      "budgetId": "PERF-BUDGET-001",
      "name": "Portal HTML payload",
      "category": "payload",
      "scope": "contract-portal",
      "metric": "portal.indexHtmlBytes",
      "target": 65536,
      "warningThreshold": 98304,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-file-size",
      "environment": "Hosted and file review",
      "notes": "Keeps the shell small enough to parse quickly; generated data must not be embedded into HTML.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_001.json"
    },
    {
      "budgetId": "PERF-BUDGET-002",
      "name": "Local CSS aggregate",
      "category": "payload",
      "scope": "contract-portal",
      "metric": "portal.localCssBytes",
      "target": 196608,
      "warningThreshold": 262144,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-file-size",
      "environment": "Hosted and file review",
      "notes": "All portal CSS combined. Route-specific growth should be monitored even though styles remain static assets.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_002.json"
    },
    {
      "budgetId": "PERF-BUDGET-003",
      "name": "Non-generated JavaScript source",
      "category": "payload",
      "scope": "contract-portal",
      "metric": "portal.localJsSourceBytes",
      "target": 921600,
      "warningThreshold": 1258291,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-file-size",
      "environment": "Hosted and file review",
      "notes": "Excludes generated fallbacks so authored runtime complexity can be monitored independently.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_003.json"
    },
    {
      "budgetId": "PERF-BUDGET-004",
      "name": "Generated fallback aggregate",
      "category": "payload",
      "scope": "contract-portal",
      "metric": "portal.generatedFallbackBytes",
      "target": 94371840,
      "warningThreshold": 134217728,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-file-size",
      "environment": "Repository/local review",
      "notes": "Phase 36 RC keeps the original 90 MiB target but expands the hard-fail ceiling to 128 MiB because exact-history/local fallback growth is expected; crossing the target remains a visible warning.",
      "relatedRegistryIds": [
        "diff.releaseIndex",
        "search.searchIndex",
        "relationships.relationshipIndex"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_004.json"
    },
    {
      "budgetId": "PERF-BUDGET-005",
      "name": "Eager generated fallback bytes",
      "category": "loading",
      "scope": "contract-portal",
      "metric": "portal.eagerGeneratedFallbackBytes",
      "target": 0,
      "warningThreshold": 524288,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-import-graph",
      "environment": "Hosted runtime",
      "notes": "Normal hosted loading must not parse generated local fallbacks before authoritative JSON fails.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_005.json"
    },
    {
      "budgetId": "PERF-BUDGET-006",
      "name": "Registry index size",
      "category": "large-data",
      "scope": "contract-portal",
      "metric": "registry.registryJsonBytes",
      "target": 3145728,
      "warningThreshold": 4194304,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-file-size",
      "environment": "Repository and hosted runtime",
      "notes": "Canonical Registry index size budget.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_006.json"
    },
    {
      "budgetId": "PERF-BUDGET-007",
      "name": "Global Search index size",
      "category": "search",
      "scope": "contract-portal",
      "metric": "search.indexBytes",
      "target": 12582912,
      "warningThreshold": 16777216,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-file-size",
      "environment": "Repository and hosted runtime",
      "notes": "Search remains a local index; growth beyond the warning threshold requires segmentation/compression review.",
      "relatedRegistryIds": [
        "search.searchIndex"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_007.json"
    },
    {
      "budgetId": "PERF-BUDGET-008",
      "name": "Relationship index size",
      "category": "relationships",
      "scope": "contract-portal",
      "metric": "relationships.indexBytes",
      "target": 4194304,
      "warningThreshold": 6291456,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-file-size",
      "environment": "Repository and hosted runtime",
      "notes": "Relationship graph must remain bounded and compact enough for interactive local traversal.",
      "relatedRegistryIds": [
        "relationships.relationshipIndex"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_008.json"
    },
    {
      "budgetId": "PERF-BUDGET-009",
      "name": "Diff snapshot storage",
      "category": "diff",
      "scope": "contract-portal",
      "metric": "diff.snapshotsBytes",
      "target": 367001600,
      "warningThreshold": 536870912,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-file-size",
      "environment": "Repository storage",
      "notes": "Phase 36 RC keeps the original 350 MiB target but expands the hard-fail ceiling to 512 MiB for accumulated exact Diff history; crossing the target remains a visible storage warning and does not affect initial-route transfer.",
      "relatedRegistryIds": [
        "diff.releaseIndex"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_009.json"
    },
    {
      "budgetId": "PERF-BUDGET-010",
      "name": "Inline script payload",
      "category": "payload",
      "scope": "contract-portal",
      "metric": "portal.inlineScriptBytes",
      "target": 0,
      "warningThreshold": 4096,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-html-scan",
      "environment": "Hosted and file review",
      "notes": "Avoid large inline scripts that bypass caching and content-policy boundaries.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_010.json"
    },
    {
      "budgetId": "PERF-BUDGET-011",
      "name": "Inline style payload",
      "category": "payload",
      "scope": "contract-portal",
      "metric": "portal.inlineStyleBytes",
      "target": 0,
      "warningThreshold": 4096,
      "comparator": "lte",
      "unit": "bytes",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-html-scan",
      "environment": "Hosted and file review",
      "notes": "Keep styling in cacheable CSS assets.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_011.json"
    },
    {
      "budgetId": "PERF-BUDGET-012",
      "name": "External blocking scripts",
      "category": "third-party",
      "scope": "contract-portal",
      "metric": "portal.externalScriptCount",
      "target": 0,
      "warningThreshold": 0,
      "comparator": "lte",
      "unit": "count",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-html-scan",
      "environment": "Hosted runtime",
      "notes": "Contract Portal core operation must not depend on blocking external scripts.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_012.json"
    },
    {
      "budgetId": "PERF-BUDGET-013",
      "name": "External stylesheet dependencies",
      "category": "third-party",
      "scope": "contract-portal",
      "metric": "portal.externalStylesheetCount",
      "target": 1,
      "warningThreshold": 2,
      "comparator": "lte",
      "unit": "count",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-html-scan",
      "environment": "Hosted runtime",
      "notes": "The current Font Awesome stylesheet is the only intended external stylesheet dependency.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_013.json"
    },
    {
      "budgetId": "PERF-BUDGET-014",
      "name": "Eager Diff imports",
      "category": "diff",
      "scope": "contract-portal",
      "metric": "portal.eagerDiffImportCount",
      "target": 0,
      "warningThreshold": 0,
      "comparator": "lte",
      "unit": "count",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-import-graph",
      "environment": "Hosted runtime",
      "notes": "Contract Diff history must remain route-lazy and must not load during normal portal bootstrap.",
      "relatedRegistryIds": [
        "diff.releaseIndex"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_014.json"
    },
    {
      "budgetId": "PERF-BUDGET-015",
      "name": "Relationship render bound",
      "category": "relationships",
      "scope": "contract-portal",
      "metric": "relationships.maxRenderedNeighbors",
      "target": 80,
      "warningThreshold": 100,
      "comparator": "lte",
      "unit": "count",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "config-inspection",
      "environment": "Hosted and file review",
      "notes": "Prevents unbounded graph rendering on high-degree Registry nodes.",
      "relatedRegistryIds": [
        "relationships.relationshipConfiguration"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_015.json"
    },
    {
      "budgetId": "PERF-BUDGET-016",
      "name": "Search page result bound",
      "category": "search",
      "scope": "contract-portal",
      "metric": "search.defaultPageLimit",
      "target": 50,
      "warningThreshold": 100,
      "comparator": "lte",
      "unit": "count",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "config-inspection",
      "environment": "Hosted and file review",
      "notes": "Keeps result rendering bounded even when the index grows.",
      "relatedRegistryIds": [
        "search.searchConfiguration"
      ],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_016.json"
    },
    {
      "budgetId": "PERF-BUDGET-017",
      "name": "Bootstrap registry loaders",
      "category": "loading",
      "scope": "contract-portal",
      "metric": "portal.bootstrapRegistryLoaderCount",
      "target": 24,
      "warningThreshold": 30,
      "comparator": "lte",
      "unit": "count",
      "applicability": [
        "contract-portal"
      ],
      "measurementMethod": "static-import-graph",
      "environment": "Hosted runtime",
      "notes": "Counts authoritative data loaders invoked by the current app shell. Future work may route-lazy more domains.",
      "relatedRegistryIds": [],
      "version": "1.4.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_017.json"
    }
  ],
  "categories": {
    "registryVersion": "1.4.0",
    "schemaVersion": "1.0.0",
    "categories": [
      {
        "id": "payload",
        "label": "Payload Discipline",
        "description": "HTML, CSS, JavaScript and generated-data payload size discipline."
      },
      {
        "id": "loading",
        "label": "Loading & Routing",
        "description": "Route loading, lazy loading, code splitting and registry-data loading."
      },
      {
        "id": "caching",
        "label": "Caching",
        "description": "Public-content caching and authenticated/private caching boundaries."
      },
      {
        "id": "media",
        "label": "Images & Media",
        "description": "Responsive images, modern formats, lazy media and delivery sizing."
      },
      {
        "id": "fonts",
        "label": "Fonts",
        "description": "Font loading, system stacks, preload restraint and rendering behavior."
      },
      {
        "id": "third-party",
        "label": "Third-party Integrations",
        "description": "Non-blocking provider loading, consent and failure isolation."
      },
      {
        "id": "api",
        "label": "API & Data Access",
        "description": "Request counts, batching, pagination and response shaping."
      },
      {
        "id": "search",
        "label": "Search",
        "description": "Search-index size, bounded results and query behavior."
      },
      {
        "id": "relationships",
        "label": "Relationship Explorer",
        "description": "Bounded graph traversal and rendering."
      },
      {
        "id": "diff",
        "label": "Contract Diff",
        "description": "Historical snapshot isolation and lazy loading."
      },
      {
        "id": "large-data",
        "label": "Large Data Rendering",
        "description": "Raw JSON, large tables and list rendering boundaries."
      },
      {
        "id": "memory",
        "label": "Memory",
        "description": "Bounded in-memory state and cleanup of expensive route data."
      },
      {
        "id": "mobile",
        "label": "Mobile",
        "description": "Mobile CPU, network and interaction responsiveness."
      },
      {
        "id": "web-vitals",
        "label": "Core Web Vitals",
        "description": "Measurement guidance for LCP, INP and CLS without ranking guarantees."
      },
      {
        "id": "observability",
        "label": "Observability",
        "description": "Performance evidence and future connector/runtime timing visibility."
      },
      {
        "id": "resilience",
        "label": "Resilience",
        "description": "Optional integration failure isolation from primary content and navigation."
      }
    ]
  },
  "metrics": {
    "registryVersion": "1.4.0",
    "schemaVersion": "1.0.0",
    "metrics": [
      {
        "id": "portal.indexHtmlBytes",
        "label": "Index HTML bytes",
        "unit": "bytes"
      },
      {
        "id": "portal.localCssBytes",
        "label": "Local CSS aggregate bytes",
        "unit": "bytes"
      },
      {
        "id": "portal.localJsSourceBytes",
        "label": "Non-generated portal JavaScript bytes",
        "unit": "bytes"
      },
      {
        "id": "portal.generatedFallbackBytes",
        "label": "Generated local fallback aggregate bytes",
        "unit": "bytes"
      },
      {
        "id": "portal.eagerGeneratedFallbackBytes",
        "label": "Generated fallback bytes statically reachable from app bootstrap",
        "unit": "bytes"
      },
      {
        "id": "registry.registryJsonBytes",
        "label": "Registry JSON bytes",
        "unit": "bytes"
      },
      {
        "id": "search.indexBytes",
        "label": "Global Search index bytes",
        "unit": "bytes"
      },
      {
        "id": "relationships.indexBytes",
        "label": "Relationship index bytes",
        "unit": "bytes"
      },
      {
        "id": "diff.snapshotsBytes",
        "label": "Contract Diff snapshot storage bytes",
        "unit": "bytes"
      },
      {
        "id": "portal.inlineScriptBytes",
        "label": "Inline script bytes",
        "unit": "bytes"
      },
      {
        "id": "portal.inlineStyleBytes",
        "label": "Inline style bytes",
        "unit": "bytes"
      },
      {
        "id": "portal.externalScriptCount",
        "label": "External script count",
        "unit": "count"
      },
      {
        "id": "portal.externalStylesheetCount",
        "label": "External stylesheet count",
        "unit": "count"
      },
      {
        "id": "portal.eagerDiffImportCount",
        "label": "Eager Contract Diff import count",
        "unit": "count"
      },
      {
        "id": "relationships.maxRenderedNeighbors",
        "label": "Relationship maximum rendered neighbors",
        "unit": "count"
      },
      {
        "id": "search.defaultPageLimit",
        "label": "Global Search default page result limit",
        "unit": "count"
      },
      {
        "id": "portal.bootstrapRegistryLoaderCount",
        "label": "Registry/data loaders invoked by app bootstrap",
        "unit": "count"
      }
    ]
  },
  "measurementMethods": {
    "registryVersion": "1.4.0",
    "schemaVersion": "1.0.0",
    "methods": [
      {
        "id": "static-file-size",
        "label": "Static file-size inspection",
        "description": "Measure repository artifact bytes without executing a browser."
      },
      {
        "id": "static-import-graph",
        "label": "Static import-graph inspection",
        "description": "Trace static ES-module imports reachable from the app bootstrap."
      },
      {
        "id": "static-html-scan",
        "label": "Static HTML scan",
        "description": "Inspect inline/external resources and loading hints in HTML."
      },
      {
        "id": "config-inspection",
        "label": "Configuration inspection",
        "description": "Read bounded search/relationship/runtime limits from machine-readable config."
      },
      {
        "id": "browser-profile",
        "label": "Browser profiling",
        "description": "Measure runtime/network/layout behavior in a representative browser environment."
      },
      {
        "id": "field-observation",
        "label": "Field observation",
        "description": "Measure production runtime telemetry where a future runtime exposes it."
      },
      {
        "id": "manual-review",
        "label": "Manual review",
        "description": "Review loading, pagination, media and integration behavior where static proof is insufficient."
      }
    ]
  },
  "thirdPartyRules": {
    "registryVersion": "1.4.0",
    "schemaVersion": "1.0.0",
    "rules": [
      {
        "id": "non-blocking",
        "requirement": "Optional integrations must not block initial rendering or primary navigation."
      },
      {
        "id": "consent-aware",
        "requirement": "Analytics/advertising providers requiring consent must load or dispatch only when consent permits."
      },
      {
        "id": "no-duplicates",
        "requirement": "Do not load duplicate copies of the same provider runtime."
      },
      {
        "id": "enabled-only",
        "requirement": "Load only connectors enabled for the current Site/environment."
      },
      {
        "id": "failure-isolation",
        "requirement": "Provider failure must not break primary content or unrelated core flows."
      },
      {
        "id": "future-observability",
        "requirement": "Future Site Runtime should expose connector timing/failure observability without leaking protected data."
      }
    ]
  },
  "portalAudit": {
    "registryVersion": "1.4.0",
    "phase": 32,
    "overallStatus": "warning",
    "measuredAt": null,
    "measurementEnvironment": "repository-static-audit",
    "measurements": {
      "portal.indexHtmlBytes": 19533,
      "portal.localCssBytes": 181928,
      "portal.localJsSourceBytes": 794543,
      "portal.generatedFallbackBytes": 46031262,
      "portal.eagerGeneratedFallbackBytes": 0,
      "registry.registryJsonBytes": 2819097,
      "search.indexBytes": 12695019,
      "relationships.indexBytes": 3887201,
      "diff.snapshotsBytes": 77381096,
      "portal.inlineScriptBytes": 0,
      "portal.inlineStyleBytes": 0,
      "portal.externalScriptCount": 0,
      "portal.externalStylesheetCount": 1,
      "portal.eagerDiffImportCount": 0,
      "relationships.maxRenderedNeighbors": 80,
      "search.defaultPageLimit": 50,
      "portal.bootstrapRegistryLoaderCount": 23
    },
    "budgetResults": [
      {
        "budgetId": "PERF-BUDGET-001",
        "name": "Portal HTML payload",
        "metric": "portal.indexHtmlBytes",
        "unit": "bytes",
        "target": 65536,
        "warningThreshold": 98304,
        "comparator": "lte",
        "actual": 19533,
        "result": "pass",
        "measurementMethod": "static-file-size",
        "environment": "Hosted and file review"
      },
      {
        "budgetId": "PERF-BUDGET-002",
        "name": "Local CSS aggregate",
        "metric": "portal.localCssBytes",
        "unit": "bytes",
        "target": 196608,
        "warningThreshold": 262144,
        "comparator": "lte",
        "actual": 181928,
        "result": "pass",
        "measurementMethod": "static-file-size",
        "environment": "Hosted and file review"
      },
      {
        "budgetId": "PERF-BUDGET-003",
        "name": "Non-generated JavaScript source",
        "metric": "portal.localJsSourceBytes",
        "unit": "bytes",
        "target": 921600,
        "warningThreshold": 1258291,
        "comparator": "lte",
        "actual": 794543,
        "result": "pass",
        "measurementMethod": "static-file-size",
        "environment": "Hosted and file review"
      },
      {
        "budgetId": "PERF-BUDGET-004",
        "name": "Generated fallback aggregate",
        "metric": "portal.generatedFallbackBytes",
        "unit": "bytes",
        "target": 94371840,
        "warningThreshold": 134217728,
        "comparator": "lte",
        "actual": 46031262,
        "result": "pass",
        "measurementMethod": "static-file-size",
        "environment": "Repository/local review"
      },
      {
        "budgetId": "PERF-BUDGET-005",
        "name": "Eager generated fallback bytes",
        "metric": "portal.eagerGeneratedFallbackBytes",
        "unit": "bytes",
        "target": 0,
        "warningThreshold": 524288,
        "comparator": "lte",
        "actual": 0,
        "result": "pass",
        "measurementMethod": "static-import-graph",
        "environment": "Hosted runtime"
      },
      {
        "budgetId": "PERF-BUDGET-006",
        "name": "Registry index size",
        "metric": "registry.registryJsonBytes",
        "unit": "bytes",
        "target": 3145728,
        "warningThreshold": 4194304,
        "comparator": "lte",
        "actual": 2819097,
        "result": "pass",
        "measurementMethod": "static-file-size",
        "environment": "Repository and hosted runtime"
      },
      {
        "budgetId": "PERF-BUDGET-007",
        "name": "Global Search index size",
        "metric": "search.indexBytes",
        "unit": "bytes",
        "target": 12582912,
        "warningThreshold": 16777216,
        "comparator": "lte",
        "actual": 12695019,
        "result": "warning",
        "measurementMethod": "static-file-size",
        "environment": "Repository and hosted runtime"
      },
      {
        "budgetId": "PERF-BUDGET-008",
        "name": "Relationship index size",
        "metric": "relationships.indexBytes",
        "unit": "bytes",
        "target": 4194304,
        "warningThreshold": 6291456,
        "comparator": "lte",
        "actual": 3887201,
        "result": "pass",
        "measurementMethod": "static-file-size",
        "environment": "Repository and hosted runtime"
      },
      {
        "budgetId": "PERF-BUDGET-009",
        "name": "Diff snapshot storage",
        "metric": "diff.snapshotsBytes",
        "unit": "bytes",
        "target": 367001600,
        "warningThreshold": 536870912,
        "comparator": "lte",
        "actual": 77381096,
        "result": "pass",
        "measurementMethod": "static-file-size",
        "environment": "Repository storage"
      },
      {
        "budgetId": "PERF-BUDGET-010",
        "name": "Inline script payload",
        "metric": "portal.inlineScriptBytes",
        "unit": "bytes",
        "target": 0,
        "warningThreshold": 4096,
        "comparator": "lte",
        "actual": 0,
        "result": "pass",
        "measurementMethod": "static-html-scan",
        "environment": "Hosted and file review"
      },
      {
        "budgetId": "PERF-BUDGET-011",
        "name": "Inline style payload",
        "metric": "portal.inlineStyleBytes",
        "unit": "bytes",
        "target": 0,
        "warningThreshold": 4096,
        "comparator": "lte",
        "actual": 0,
        "result": "pass",
        "measurementMethod": "static-html-scan",
        "environment": "Hosted and file review"
      },
      {
        "budgetId": "PERF-BUDGET-012",
        "name": "External blocking scripts",
        "metric": "portal.externalScriptCount",
        "unit": "count",
        "target": 0,
        "warningThreshold": 0,
        "comparator": "lte",
        "actual": 0,
        "result": "pass",
        "measurementMethod": "static-html-scan",
        "environment": "Hosted runtime"
      },
      {
        "budgetId": "PERF-BUDGET-013",
        "name": "External stylesheet dependencies",
        "metric": "portal.externalStylesheetCount",
        "unit": "count",
        "target": 1,
        "warningThreshold": 2,
        "comparator": "lte",
        "actual": 1,
        "result": "pass",
        "measurementMethod": "static-html-scan",
        "environment": "Hosted runtime"
      },
      {
        "budgetId": "PERF-BUDGET-014",
        "name": "Eager Diff imports",
        "metric": "portal.eagerDiffImportCount",
        "unit": "count",
        "target": 0,
        "warningThreshold": 0,
        "comparator": "lte",
        "actual": 0,
        "result": "pass",
        "measurementMethod": "static-import-graph",
        "environment": "Hosted runtime"
      },
      {
        "budgetId": "PERF-BUDGET-015",
        "name": "Relationship render bound",
        "metric": "relationships.maxRenderedNeighbors",
        "unit": "count",
        "target": 80,
        "warningThreshold": 100,
        "comparator": "lte",
        "actual": 80,
        "result": "pass",
        "measurementMethod": "config-inspection",
        "environment": "Hosted and file review"
      },
      {
        "budgetId": "PERF-BUDGET-016",
        "name": "Search page result bound",
        "metric": "search.defaultPageLimit",
        "unit": "count",
        "target": 50,
        "warningThreshold": 100,
        "comparator": "lte",
        "actual": 50,
        "result": "pass",
        "measurementMethod": "config-inspection",
        "environment": "Hosted and file review"
      },
      {
        "budgetId": "PERF-BUDGET-017",
        "name": "Bootstrap registry loaders",
        "metric": "portal.bootstrapRegistryLoaderCount",
        "unit": "count",
        "target": 24,
        "warningThreshold": 30,
        "comparator": "lte",
        "actual": 23,
        "result": "pass",
        "measurementMethod": "static-import-graph",
        "environment": "Hosted runtime"
      }
    ],
    "checks": [
      {
        "checkId": "PORTAL-PERF-001",
        "title": "Bootstrap generated fallbacks are failure-path only",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Static app bootstrap graph reaches 0 generated-fallback bytes; target is 0."
      },
      {
        "checkId": "PORTAL-PERF-002",
        "title": "Contract Diff remains route-lazy",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Diff engine is dynamically imported from the lifecycle route and absent from app bootstrap."
      },
      {
        "checkId": "PORTAL-PERF-003",
        "title": "Diff snapshots are not referenced by normal bootstrap",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Normal app/router static imports do not include snapshots.json or generated-diff."
      },
      {
        "checkId": "PORTAL-PERF-004",
        "title": "Global Search rendering is bounded",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Page limit 50; palette limit 14."
      },
      {
        "checkId": "PORTAL-PERF-005",
        "title": "Relationship rendering is bounded",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "neighbors=80, expanded=500, rows=200"
      },
      {
        "checkId": "PORTAL-PERF-006",
        "title": "No inline script payload",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "0 inline script bytes."
      },
      {
        "checkId": "PORTAL-PERF-007",
        "title": "No inline style payload",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "0 inline style bytes."
      },
      {
        "checkId": "PORTAL-PERF-008",
        "title": "No external script dependency",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "0 external scripts in index.html."
      },
      {
        "checkId": "PORTAL-PERF-009",
        "title": "External stylesheets stay bounded",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "1 external stylesheets in index.html."
      },
      {
        "checkId": "PORTAL-PERF-010",
        "title": "Font Awesome host is preconnected",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "cdnjs.cloudflare.com is preconnected before the Font Awesome stylesheet."
      },
      {
        "checkId": "PORTAL-PERF-011",
        "title": "Performance route is lazy",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Performance engine/pages are dynamically imported only when the route is opened."
      },
      {
        "checkId": "PORTAL-PERF-012",
        "title": "Generated fallback growth is measured",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Generated fallback aggregate bytes are included in machine-readable budget results."
      },
      {
        "checkId": "PORTAL-PERF-013",
        "title": "Search index growth is measured",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Search index bytes are included in machine-readable budget results."
      },
      {
        "checkId": "PORTAL-PERF-014",
        "title": "Relationship index growth is measured",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Relationship index bytes are included in machine-readable budget results."
      },
      {
        "checkId": "PORTAL-PERF-015",
        "title": "Diff storage growth is measured",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Diff snapshot storage bytes are included separately from initial-route budgets."
      },
      {
        "checkId": "PORTAL-PERF-016",
        "title": "Bootstrap loader count is bounded",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "23 authoritative data loaders are invoked by app bootstrap."
      },
      {
        "checkId": "PORTAL-PERF-017",
        "title": "Performance stylesheet is local",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Performance UI styles load from a local cacheable stylesheet."
      },
      {
        "checkId": "PORTAL-PERF-018",
        "title": "Theme styles remain token-driven",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "The shared local theme stylesheet provides token-driven dark styling without a route-specific media override."
      }
    ],
    "summary": {
      "budgetCount": 17,
      "budgetPass": 16,
      "budgetWarning": 1,
      "budgetFail": 0,
      "checkCount": 18,
      "checkPass": 18,
      "checkFail": 0
    },
    "notes": [
      "Static repository audit does not claim browser Core Web Vitals or production field performance.",
      "Diff snapshot storage is intentionally measured separately because Contract Diff history is route-lazy."
    ]
  },
  "definitions": [
    {
      "$id": "performance.measurementMethod",
      "name": "Performance Measurement Method",
      "version": "1.4.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled method used to gather performance evidence."
    },
    {
      "$id": "performance.performanceAudit",
      "name": "Performance Audit",
      "version": "1.4.0",
      "status": "stable",
      "domain": "performance",
      "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
    },
    {
      "$id": "performance.performanceBudget",
      "name": "Performance Budget",
      "version": "1.4.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable target/warning threshold for one performance metric."
    },
    {
      "$id": "performance.performanceMetric",
      "name": "Performance Metric",
      "version": "1.4.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled measurable metric used by a Performance Budget."
    },
    {
      "$id": "performance.performanceRule",
      "name": "Performance Rule",
      "version": "1.4.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable implementation requirement for performance behavior."
    }
  ],
  "sourceHashes": {
    "registry/performance/index.json": "4035f4bf2ab6c6a332ed954aaf6412a2fa539ebfabf72e169f142ed7211f8584",
    "registry/performance/categories.json": "f079d6ab59fcd646b3b6eb4df6e29ded40e4d412d2791038dbe2b15929d9dc13",
    "registry/performance/metrics.json": "19cf3c9fab4de52368df162e32059a862aa554648155a7dc214b315041e605e0",
    "registry/performance/measurement-methods.json": "fd047fddbb81bbf25e07755c0e4ae089735b7d11a6b48749b227a0d2075180ce",
    "registry/performance/third-party-rules.json": "aa74a6c3a4536e5281cce43800ee4c6da2af90d04d5d3dc1b3b276d4912bb86b",
    "registry/performance/performance-budget.schema.json": "334ce1fa1408f855349457f390cac93e68b21eec6546ee36a9ba0e70f3692a29",
    "registry/performance/performance-rule.schema.json": "98e054d64135bce5901f1868f113938daaf0c4267188fbe68d6e5baa45200124",
    "registry/performance/portal-audit.json": "9bf89ca42d3d215370a096618e525c0a811d9cab7622211ed7e71f1a7a654aa1",
    "registry/performance/budgets/perf_budget_001.json": "19c7400f73ac9765e9e2c9f367ae0f8ff44e416c0bd46183fca74350bbd54f9d",
    "registry/performance/budgets/perf_budget_002.json": "5983ddd3c6a4a93c920a4d03684cd45534ed0c9b94a2a1e344d05ba0de057572",
    "registry/performance/budgets/perf_budget_003.json": "eb6dbc9c2cd5334fb17cf2a76eb95fde22d164b351650317187e017a261fe1fa",
    "registry/performance/budgets/perf_budget_004.json": "938fd50aeb38f4fd20c863394bdd71c20b4e13f7fba2cdad785523cd00af5e2c",
    "registry/performance/budgets/perf_budget_005.json": "134c49ba6b7b5761c8bfbe722ade6678fb2796cbcd86e8c3f164972faea6b6ee",
    "registry/performance/budgets/perf_budget_006.json": "f9d9fd0d4a779a5ef90edbcaf86e4170e4a0ec9a6459f54866ca27c9494c67f4",
    "registry/performance/budgets/perf_budget_007.json": "92e5248238c401733643baec7532fc7696b9fcb9a6892c357ad050667f713f1a",
    "registry/performance/budgets/perf_budget_008.json": "6056a35c84bb82d6354c066cbbd4376f16efcb54f0b017ef1d67b25e734a5e42",
    "registry/performance/budgets/perf_budget_009.json": "7e50020c2b3385b98b1b7281e755f1f8767b98db932b90375d6f962dfefdcc26",
    "registry/performance/budgets/perf_budget_010.json": "b361036a421c900a5aded0044e980ffe6835896c0b69b3c2e8794cb15305d7f7",
    "registry/performance/budgets/perf_budget_011.json": "62ba2e4af3e178290abe80efb5073be6234b510564c9b3127576bdd728bfe66c",
    "registry/performance/budgets/perf_budget_012.json": "9a3d7d9183e9a0fad9b319afdf458fe90e39d26bb9d4f6ca6aeb03e48e4ffcb9",
    "registry/performance/budgets/perf_budget_013.json": "7325e86cba2ad8e49404b2fa21f657dd6a60447093092bb069756032b7b2ad0e",
    "registry/performance/budgets/perf_budget_014.json": "d024b4b52a4c715354c738b4fb2472f2ce9c330f51b2dd865391ee37e54bd0e3",
    "registry/performance/budgets/perf_budget_015.json": "abd7575e62d302f8ef9eb461c40946b19cb4de540dd11732021a7ebde422e0df",
    "registry/performance/budgets/perf_budget_016.json": "59a6ffd1aa23432f7e65b52e60697227d33e8c911fcedec4a6bdf6a4df6faea5",
    "registry/performance/budgets/perf_budget_017.json": "a38b1153af0de105fb89f16d02f95444bd41f48dbd5a056abd36ad8d6ad368aa",
    "registry/performance/rules/perf_rule_001.json": "f819c8524c7be94b51ff4abd6b0ef46b969c705405bf3688e4db96c22c3c49cf",
    "registry/performance/rules/perf_rule_002.json": "2a3babeadff287bf24d9d8c5e9c3434e4f17d3285bfa19390ca39bdebbe1e498",
    "registry/performance/rules/perf_rule_003.json": "5dcc65477be5b3d6d883c18420b20dab07cac30c777c4dfb94561ee6b0132606",
    "registry/performance/rules/perf_rule_004.json": "a19b03bfa5be22e4980a998df80e69932fa4f77649209ebea18418a5d56d322f",
    "registry/performance/rules/perf_rule_005.json": "51df6c65337e31204bdd6365d6088ddbb6e2397daef727206a400411a0773b05",
    "registry/performance/rules/perf_rule_006.json": "c8d3e3fb44f6a480a3a518f04a84bdbb501e3a3ecd17a7f1bc9046e6668203c3",
    "registry/performance/rules/perf_rule_007.json": "aa178d0fbbd4690d7d6c18d8a300ebcdd80e43299cc01911cc092356a1d634f6",
    "registry/performance/rules/perf_rule_008.json": "2a92036a420f0e628d2e23ab01c6b7cca625fd64ffe64a47f2735d89a4070d69",
    "registry/performance/rules/perf_rule_009.json": "1f2c50d69e8ad3c54ab8a2891700dc434877a37ce3beccd7eb2932e8943eb867",
    "registry/performance/rules/perf_rule_010.json": "5f64627c93dc549998022b99a6058bd359ab1fe10a2142514e70193e2cc4c365",
    "registry/performance/rules/perf_rule_011.json": "2e67d8c2b409484ab914e87c29ad2b71a8e4cb72050038229ecf23c2d4f1ef96",
    "registry/performance/rules/perf_rule_012.json": "fb869c1a275a75632dc109329202319e99b32f96c6e389e2c1df183d980a9ab6",
    "registry/performance/rules/perf_rule_013.json": "7b5bb5fa0bd6bb8a8c84b7a242d20e54175be7c855fa0ee10c4f7fbbc959e025",
    "registry/performance/rules/perf_rule_014.json": "93d72bc4c0609646062fa80fae7b86e0bcdd25216133f974979d9c257d09620f",
    "registry/performance/rules/perf_rule_015.json": "ad2b2b8df96b93d39b455f7f4bfb189c0046fb3c241d87bf41b444966cd3811d",
    "registry/performance/rules/perf_rule_016.json": "138164972157f1bc8fd54b74aa4455fa77c48ffa33e9b7f7089b7db1f5c74998",
    "registry/performance/rules/perf_rule_017.json": "48e00593f9dfe5020644b02546eb3e6c2aeb8176d27fb3e99eb84e2bd13ffa15",
    "registry/performance/rules/perf_rule_018.json": "f00d21c23edbd026957e59a84709abf15cd74daa20b18aae35314a06bc6c84ee",
    "registry/performance/rules/perf_rule_019.json": "2a864686d9a8b8cc56a88cb404722fe413a9be12a772ab4ade0b46ad475e319d",
    "registry/performance/rules/perf_rule_020.json": "96685e4aa5c0c0e1b07b0df778967db5caa0e2c0f38809a89633e2218c1514f7",
    "registry/performance/rules/perf_rule_021.json": "dfa2b7e64b85937764dfef1c36f883e828eddef9f5d9e940836206b9dee23ddb",
    "registry/performance/rules/perf_rule_022.json": "3799e2d554a8d965d761157408f296ae80e45ba97ea8a3633bf80869bfa43594",
    "registry/performance/rules/perf_rule_023.json": "42a7de86020cc42a5e4b406a41cceb18a4b72f9b8d93c5c884f410b5e63eb653",
    "registry/performance/rules/perf_rule_024.json": "d62f1315f8b191c577872932368140cf4cadc75f86393caf73e94075f806640c",
    "registry/performance/rules/perf_rule_025.json": "e9d91075e9367b1f1af77c8e23b256120514c50dc419a77f0984e83210cc79dc",
    "registry/performance/rules/perf_rule_026.json": "0231b075b626f4cd22e3ec70a6a4ec740221b6314fb114278aac6fe4574a5956",
    "registry/performance/rules/perf_rule_027.json": "fbfdbb8b95f5699097d21009d9d75478c67f168b2c2f516adca186ec1ae3fbe7",
    "registry/performance/rules/perf_rule_028.json": "02d0e065d8f20f98da0a4acbdb860eff370f8419a4eb580173a2239313c81f8a",
    "registry/performance/rules/perf_rule_029.json": "f935804770eb0841b3e7a942b0a458f94e6cf068e2b700e5539b90b761e2c8b2",
    "registry/performance/rules/perf_rule_030.json": "7299a879f7a64944f3993f547ec37c21ff9d6134e74996a0cc97ff32bcad07be",
    "registry/performance/rules/perf_rule_031.json": "a422170f427304ab803a1c33091f8a73833ab52ae7950721dc2a4f24ac9e2365",
    "registry/performance/rules/perf_rule_032.json": "3730ea435aa28f15615276f66b30c8f405ea5fa926b72ab365b92fd7a081d44f",
    "registry/performance/rules/perf_rule_033.json": "b531fa719636d31fcb6613adc970a9b0223b5b24b4d4a3fc2223ef27c774a2df",
    "registry/performance/rules/perf_rule_034.json": "3d371856d3e1226f5f897a919ba5a73328365014157861942d04b9bfa6530558",
    "registry/performance/rules/perf_rule_035.json": "35fb1a9eb1ce01a52be9e55434251f53d78aa27c6f3b7faa04655280c6ca08b1",
    "registry/performance/rules/perf_rule_036.json": "cacf735a49511fd96e45e66f99fcaa818a3f3cfc2d5e7b192e4083d6d32e7e60",
    "registry/performance/definitions/measurementMethod.json": "7de4ddfe662e04acfc2a25dc35f4da6ce09bc2629347631996e2343fc58e5e72",
    "registry/performance/definitions/performanceAudit.json": "a1de06b8c6bb502819210f885426737364577ed3fe57d31cc77075f05620b6c5",
    "registry/performance/definitions/performanceBudget.json": "b3816c86c2d417160209516189a537e0746c5629e93f53c16237019fe050792f",
    "registry/performance/definitions/performanceMetric.json": "3adc16401097ff13357dc54d82efc81f81462839b8a2d26b004f2c59ac7d741f",
    "registry/performance/definitions/performanceRule.json": "67cccef757f769888678efd806571c29aaa063ef7c9cd39699cf355ffb56c509"
  }
};
