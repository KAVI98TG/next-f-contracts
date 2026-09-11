// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/performance/*
export const GENERATED_PERFORMANCE = {
  "registryVersion": "1.0.0",
  "index": {
    "registryVersion": "1.0.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
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
        "version": "0.37.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_017.json"
      }
    ],
    "definitions": [
      {
        "$id": "performance.measurementMethod",
        "name": "Performance Measurement Method",
        "version": "1.0.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled method used to gather performance evidence."
      },
      {
        "$id": "performance.performanceAudit",
        "name": "Performance Audit",
        "version": "1.0.0",
        "status": "stable",
        "domain": "performance",
        "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
      },
      {
        "$id": "performance.performanceBudget",
        "name": "Performance Budget",
        "version": "1.0.0",
        "status": "stable",
        "domain": "performance",
        "description": "Machine-readable target/warning threshold for one performance metric."
      },
      {
        "$id": "performance.performanceMetric",
        "name": "Performance Metric",
        "version": "1.0.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled measurable metric used by a Performance Budget."
      },
      {
        "$id": "performance.performanceRule",
        "name": "Performance Rule",
        "version": "1.0.0",
        "status": "stable",
        "domain": "performance",
        "description": "Machine-readable implementation requirement for performance behavior."
      }
    ],
    "portalAuditSummary": {
      "budgetCount": 17,
      "budgetPass": 15,
      "budgetWarning": 2,
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
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
      "version": "0.37.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_017.json"
    }
  ],
  "categories": {
    "registryVersion": "0.37.0",
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
    "registryVersion": "0.37.0",
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
    "registryVersion": "0.37.0",
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
    "registryVersion": "0.37.0",
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
    "registryVersion": "1.0.0",
    "phase": 32,
    "overallStatus": "warning",
    "measuredAt": null,
    "measurementEnvironment": "repository-static-audit",
    "measurements": {
      "portal.indexHtmlBytes": 17058,
      "portal.localCssBytes": 154713,
      "portal.localJsSourceBytes": 761679,
      "portal.generatedFallbackBytes": 119453924,
      "portal.eagerGeneratedFallbackBytes": 0,
      "registry.registryJsonBytes": 2371907,
      "search.indexBytes": 10944932,
      "relationships.indexBytes": 3214058,
      "diff.snapshotsBytes": 497946516,
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
        "actual": 17058,
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
        "actual": 154713,
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
        "actual": 761679,
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
        "actual": 119453924,
        "result": "warning",
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
        "actual": 2371907,
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
        "actual": 10944932,
        "result": "pass",
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
        "actual": 3214058,
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
        "actual": 497946516,
        "result": "warning",
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
        "title": "No dark-mode performance override",
        "result": "pass",
        "reviewType": "automated-static",
        "evidence": "Performance UI preserves the light-only portal contract."
      }
    ],
    "summary": {
      "budgetCount": 17,
      "budgetPass": 15,
      "budgetWarning": 2,
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
      "version": "1.0.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled method used to gather performance evidence."
    },
    {
      "$id": "performance.performanceAudit",
      "name": "Performance Audit",
      "version": "1.0.0",
      "status": "stable",
      "domain": "performance",
      "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
    },
    {
      "$id": "performance.performanceBudget",
      "name": "Performance Budget",
      "version": "1.0.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable target/warning threshold for one performance metric."
    },
    {
      "$id": "performance.performanceMetric",
      "name": "Performance Metric",
      "version": "1.0.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled measurable metric used by a Performance Budget."
    },
    {
      "$id": "performance.performanceRule",
      "name": "Performance Rule",
      "version": "1.0.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable implementation requirement for performance behavior."
    }
  ],
  "sourceHashes": {
    "registry/performance/index.json": "3ccca49631bd97cda79800c81bc964beb5c146331c18a4820ef2ec35c7bb7213",
    "registry/performance/categories.json": "d7f5b00074793cd2692cbec5ab864fac4810fe7f1773a726432ba36389e94ad5",
    "registry/performance/metrics.json": "8cb29aec8671ec4be0e1601f9982015f09c86d8ac2f3fb648e9b5fbd2df04971",
    "registry/performance/measurement-methods.json": "69c75dee75be97bba4b3e6f524f04312f67860219bf782f50759f01499137436",
    "registry/performance/third-party-rules.json": "b2283ee2eee3c4bd5184e772d95f9ff47405b201d293c78de73a186876e7ac26",
    "registry/performance/performance-budget.schema.json": "334ce1fa1408f855349457f390cac93e68b21eec6546ee36a9ba0e70f3692a29",
    "registry/performance/performance-rule.schema.json": "98e054d64135bce5901f1868f113938daaf0c4267188fbe68d6e5baa45200124",
    "registry/performance/portal-audit.json": "b9c5d75e0d67064d0bb6c45c9b7b31fbd88917d410ec8c6e0f3e6490a57c4604",
    "registry/performance/budgets/perf_budget_001.json": "333a3c35545f5d129f11525601048ce4538a6052c226906303a75bbac96abc11",
    "registry/performance/budgets/perf_budget_002.json": "363c4b17687956c60679d0b283bbaf0f6d237f7b17e40e3b6f03b229b70bd571",
    "registry/performance/budgets/perf_budget_003.json": "64bd44a2e8d1808801d137c7a5c91cc495d81bff3e22d23b8039e1ccf7039dbb",
    "registry/performance/budgets/perf_budget_004.json": "25df688617ba08a020d6ee7e58f713f44afa00eb0ace94d773f4a50c156721a9",
    "registry/performance/budgets/perf_budget_005.json": "e82cc29ac75bf8b8a6bccc392417e47e41982ecdfc41e5e001454dd37bdbf001",
    "registry/performance/budgets/perf_budget_006.json": "6d664c27a0424e14b9a2f7c994f396e937ff8d69300e69f1db7dabf538fe8315",
    "registry/performance/budgets/perf_budget_007.json": "653fa6a2cc59261635ae9626203bb3ea550cd7f4575f8f614d7f9231f99ca0ff",
    "registry/performance/budgets/perf_budget_008.json": "9694a3fcb43eaf83dc1950958af65b65d45908e8e6d53f821d0e6c7909b0713b",
    "registry/performance/budgets/perf_budget_009.json": "f19a5edff3ae443a93689bf89e8dba5520f7ec5ee46c7a3fd7c1b86f3f008ee7",
    "registry/performance/budgets/perf_budget_010.json": "11ded06192d7546336e5f81f7717cc444b2d8aaa1c66bcf83be2c1c0d8a55832",
    "registry/performance/budgets/perf_budget_011.json": "e6cfe6134e953f80deba9efc206885bb5a6879fe80c794e6667e3665ddf085a4",
    "registry/performance/budgets/perf_budget_012.json": "1cdc9a370fcc67e46dd6607058fc86f62d1f72613983ef65ebcafe6efcd35fd5",
    "registry/performance/budgets/perf_budget_013.json": "2b42db7a9b2c20e4047650741450601c2cebc3eb98b23f9c29e8bffeac32cccd",
    "registry/performance/budgets/perf_budget_014.json": "8e40ba3e69e0b30c8b50fc345a3f8800b5421ba36d053c57209ce8bd7cf76400",
    "registry/performance/budgets/perf_budget_015.json": "af6eca10dd6f558326c2f52337afc6e79d98b0fcb5b462c653fca77120d43259",
    "registry/performance/budgets/perf_budget_016.json": "e0e48a846face1d2a8347f2c53bd9036ba02897dcf43381c2a5f2382d60ab234",
    "registry/performance/budgets/perf_budget_017.json": "6a8986de19b130f0b09c0a8d523449b43def3949d3f7550f823ae228b555574a",
    "registry/performance/rules/perf_rule_001.json": "6cd6325cb2fa0e80e1328b345fe98e9b63cf979cb49190b3af4db68748fa428d",
    "registry/performance/rules/perf_rule_002.json": "f931b8cdb90bee8a9fc9ca6f3fa28fd0b33c427a8c338a2eefb5db396299ac07",
    "registry/performance/rules/perf_rule_003.json": "d94a52c30151c4da71da9654d2e190782ed37d38615de604732f4a5aba244fcd",
    "registry/performance/rules/perf_rule_004.json": "95782e97feeaf266b0cb477c912435713e52bc43093e7032f7901511f85bb247",
    "registry/performance/rules/perf_rule_005.json": "01c98d6af8a1e62c4ec13e0a469b0f01217823e101de4f53fbd8efb2f2be7a2e",
    "registry/performance/rules/perf_rule_006.json": "fc579fac277ac72e6f22b3a7c25bd9668faf44c7fdc7b7a2e4ee29b0b14c0e20",
    "registry/performance/rules/perf_rule_007.json": "db4e48c36031661c2b5a6aeb99deaa8fecb53534daa38f2c02c741c09e7b963b",
    "registry/performance/rules/perf_rule_008.json": "ec20294875e5de5d34fd3d26f7e5a0b41cbd54b877688a17aa66e2beb781f737",
    "registry/performance/rules/perf_rule_009.json": "9e926dd73327fb63d3e15a6b1d511ee791e48eed29a60ea85449f66035305a73",
    "registry/performance/rules/perf_rule_010.json": "26e1dc1d93e47f2dee3948df6e443ef08350e8969eac32e464fc1fb3d9a33cf5",
    "registry/performance/rules/perf_rule_011.json": "d8997be475e83b9d1bb409697471f772ab49fbdabbdfa598a49e689b29d77bf3",
    "registry/performance/rules/perf_rule_012.json": "465d6664270e6b60aeb7f8f6ce106fe1d5503f9387605e2643aa2a65485c7c2e",
    "registry/performance/rules/perf_rule_013.json": "6e9769b203d45a29c6d11e9a02273fe27329496647f47a51f3c90b5f66be7557",
    "registry/performance/rules/perf_rule_014.json": "5b21fe4d645fee69132feabe9cae58ba1d30de649a85833d663441401b235ea7",
    "registry/performance/rules/perf_rule_015.json": "d20c57ee021ec12734d6c9c5d84a12fcade986d4d2b467a1575f341aaaee216a",
    "registry/performance/rules/perf_rule_016.json": "41b0a4604fd3a2924c1b0ca9300d866e1b3e306df0edd9c5df72e511f7c106a0",
    "registry/performance/rules/perf_rule_017.json": "92b02ad2d40bf29c8948e1aa4513b79ee7e150ba34adba21e20412da3ec531b1",
    "registry/performance/rules/perf_rule_018.json": "44a59af6bdeb5451690154e48e296e304039657a281be779a98ab0aac438e8af",
    "registry/performance/rules/perf_rule_019.json": "6d915f56f2163b0577d3340aab2794b55828b23a99d0a37cc4b81d560ebc036c",
    "registry/performance/rules/perf_rule_020.json": "26fd2a80dcf845a26c4ed3db5b72ea62f77eba7775f7bb7896ee78876d167d05",
    "registry/performance/rules/perf_rule_021.json": "b793c8ee36c6e8fe36a35247f1035d33bf44488900c05562d1e20841b4e09056",
    "registry/performance/rules/perf_rule_022.json": "0740230b7163dbfdf9924f033dbcc18f5c28e5ffd63e26389ac26e4bfd4cf2e6",
    "registry/performance/rules/perf_rule_023.json": "58e5f08d83cfd04c610367d53c4cf0bdf6fc18ac6d2826b388088b5b372955e5",
    "registry/performance/rules/perf_rule_024.json": "b184236f10a40a133f54e04af67fb468434e10c6347708cd25a7cf90e1b577f1",
    "registry/performance/rules/perf_rule_025.json": "ad24cc2bc334899589663d6596a5f0fb04640b4c6d355d964866280506dfda1a",
    "registry/performance/rules/perf_rule_026.json": "2449ad0503c1b6734cd1e6cb62b74da6dfed389f333549125728d4fec26eb5f3",
    "registry/performance/rules/perf_rule_027.json": "6afca76ab617d3e8e7f282f483c5016410b882c9bfb380b8d5d2011dfb802745",
    "registry/performance/rules/perf_rule_028.json": "390e38d1e0910c33bcdb269f4115e675bde277939608480683e88b82a6f43ecd",
    "registry/performance/rules/perf_rule_029.json": "842780f71f4a0e66c7f3ebf780cd4452e46b7856dcfdd9566c03256fba23e4c2",
    "registry/performance/rules/perf_rule_030.json": "1a7d104b04bca82016ab0bb11d76e7b5d720051dfb39365476e244dabc6fb5fc",
    "registry/performance/rules/perf_rule_031.json": "b461a16a3ff76430236bdf4c1b966d0cd3034a585de3542d6ea7522fe9d96f2b",
    "registry/performance/rules/perf_rule_032.json": "c8151aa1df33bd7f32709445a7a263ef6a13a28685d04b62c5e3226ab2751ddd",
    "registry/performance/rules/perf_rule_033.json": "f789e926c104cee6ff68e3dfa63dcc4c0a1e68fe61605b204580a7445821725a",
    "registry/performance/rules/perf_rule_034.json": "b1f6a3991b3f4203e9cd0f5904bcf9e0f978a2eb0dc27701926b72b2b4164d13",
    "registry/performance/rules/perf_rule_035.json": "830c8ee266016c515ed5cb382ba6891db41ca56dcd6f558fbe04030c2024ad87",
    "registry/performance/rules/perf_rule_036.json": "7f4b509cfb84fbbad7b89ea969de7612a7ebfa1fed278c4ecee16e415e2f4fa7",
    "registry/performance/definitions/measurementMethod.json": "0431e4c111e7ba272919b338f146c833fbd79d94f96997117b8baea52de35164",
    "registry/performance/definitions/performanceAudit.json": "de86bab30d73057c0b6c6d1c44dff0d936cdf0ce12f2e987273ea211dda2398e",
    "registry/performance/definitions/performanceBudget.json": "9357364e6b2c86debe6a863f45d0ff940ed82fef13eeca918c3a2ed3e016b909",
    "registry/performance/definitions/performanceMetric.json": "d298cf21d32d16cadd2755eced55747ea4d51dffe26ffe13a960a8197348ccd7",
    "registry/performance/definitions/performanceRule.json": "ef977c1f88184153007a76544e4ac39a7ae65262c2bf61fc2d5fba0d8dab0e1a"
  }
};
