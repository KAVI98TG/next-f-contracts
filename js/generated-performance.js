// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/performance/*
export const GENERATED_PERFORMANCE = {
  "registryVersion": "1.1.0",
  "index": {
    "registryVersion": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
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
        "version": "1.1.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_017.json"
      }
    ],
    "definitions": [
      {
        "$id": "performance.measurementMethod",
        "name": "Performance Measurement Method",
        "version": "1.1.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled method used to gather performance evidence."
      },
      {
        "$id": "performance.performanceAudit",
        "name": "Performance Audit",
        "version": "1.1.0",
        "status": "stable",
        "domain": "performance",
        "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
      },
      {
        "$id": "performance.performanceBudget",
        "name": "Performance Budget",
        "version": "1.1.0",
        "status": "stable",
        "domain": "performance",
        "description": "Machine-readable target/warning threshold for one performance metric."
      },
      {
        "$id": "performance.performanceMetric",
        "name": "Performance Metric",
        "version": "1.1.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled measurable metric used by a Performance Budget."
      },
      {
        "$id": "performance.performanceRule",
        "name": "Performance Rule",
        "version": "1.1.0",
        "status": "stable",
        "domain": "performance",
        "description": "Machine-readable implementation requirement for performance behavior."
      }
    ],
    "portalAuditSummary": {
      "budgetCount": 17,
      "budgetPass": 17,
      "budgetWarning": 0,
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_017.json"
    }
  ],
  "categories": {
    "registryVersion": "1.1.0",
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
    "registryVersion": "1.1.0",
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
    "registryVersion": "1.1.0",
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
    "registryVersion": "1.1.0",
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
    "registryVersion": "1.1.0",
    "phase": 32,
    "overallStatus": "pass",
    "measuredAt": null,
    "measurementEnvironment": "repository-static-audit",
    "measurements": {
      "portal.indexHtmlBytes": 19749,
      "portal.localCssBytes": 184559,
      "portal.localJsSourceBytes": 798900,
      "portal.generatedFallbackBytes": 40801924,
      "portal.eagerGeneratedFallbackBytes": 0,
      "registry.registryJsonBytes": 2617738,
      "search.indexBytes": 11465010,
      "relationships.indexBytes": 3679797,
      "diff.snapshotsBytes": 61160141,
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
        "actual": 19749,
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
        "actual": 184559,
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
        "actual": 798900,
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
        "actual": 40801924,
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
        "actual": 2617738,
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
        "actual": 11465010,
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
        "actual": 3679797,
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
        "actual": 61160141,
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
      "budgetPass": 17,
      "budgetWarning": 0,
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
      "version": "1.1.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled method used to gather performance evidence."
    },
    {
      "$id": "performance.performanceAudit",
      "name": "Performance Audit",
      "version": "1.1.0",
      "status": "stable",
      "domain": "performance",
      "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
    },
    {
      "$id": "performance.performanceBudget",
      "name": "Performance Budget",
      "version": "1.1.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable target/warning threshold for one performance metric."
    },
    {
      "$id": "performance.performanceMetric",
      "name": "Performance Metric",
      "version": "1.1.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled measurable metric used by a Performance Budget."
    },
    {
      "$id": "performance.performanceRule",
      "name": "Performance Rule",
      "version": "1.1.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable implementation requirement for performance behavior."
    }
  ],
  "sourceHashes": {
    "registry/performance/index.json": "ddefe6cfe57038fb8af5bc55279cf3c0643bbb2e25599d3c8d2efdbf976df36b",
    "registry/performance/categories.json": "5afa01b739f735db53f1524683b8ceaa6c3f3b77a80472e9a58970245421c3ec",
    "registry/performance/metrics.json": "897c6abf9aa4246aa261ff156652859650dc102cfc162e162ed8e3763bb373a8",
    "registry/performance/measurement-methods.json": "36967a973700c8f96b00faed23d4bb023c78fc4af08e028865f7ab743df1f26b",
    "registry/performance/third-party-rules.json": "6a9416dc9fd38b34cfdaef7b82ccfc64e004b7b34ef5711df16e9bc26cce3382",
    "registry/performance/performance-budget.schema.json": "4f1d7e2ad0dbe87c81b4abda9ea953144edda4af399e817c4bbc211d3504730a",
    "registry/performance/performance-rule.schema.json": "5dff7a25f7f9890472cfa25f63fc166e2de7f0f5a06569ce1090969e09e8c551",
    "registry/performance/portal-audit.json": "dfc0974b735860855269cbaf437634c4edf3a9d4d7d10a918769bea0342e92b8",
    "registry/performance/budgets/perf_budget_001.json": "7c56befc81ee084d37ea3853d46f9dfbfbaefadced41780eb9b286b276d5018f",
    "registry/performance/budgets/perf_budget_002.json": "70e16681dbf9abb6ce28267ae430bed32f45018d2a4e9bca3d19c597ac56dc95",
    "registry/performance/budgets/perf_budget_003.json": "82adae7e94bb14e725e833fa1d814ad0559a168f0bf5e63233e145517e768747",
    "registry/performance/budgets/perf_budget_004.json": "374a26573c5ee320385c2f55021cc1c3838a214c086dc182e4cf4c7fb53ee75c",
    "registry/performance/budgets/perf_budget_005.json": "77b45bb4a71d1a48fd14fcc9bd8298d4d46643418f34a714cfc4d77b6dc3fa57",
    "registry/performance/budgets/perf_budget_006.json": "a3cfc49ee48f38609cf9a77a2ff5a1a05fd27d7bc984fc49e940e4d95dd89269",
    "registry/performance/budgets/perf_budget_007.json": "74697504b1c91684d6fe10d71368cdf6c77e95c7b25b196ef39e1a071eb3f147",
    "registry/performance/budgets/perf_budget_008.json": "523942c5d7ff5f10de6d0d313c36b9890a19bdf41aab7790e07d614a9b513d01",
    "registry/performance/budgets/perf_budget_009.json": "5dc093b4bb6a4b773062c563266f952cfce3f03fcfbdb1a8492464d6aeed0e09",
    "registry/performance/budgets/perf_budget_010.json": "2bc95900e35ee9d4ec55561b45f1abd180063cd697ba61514d8b13045b050561",
    "registry/performance/budgets/perf_budget_011.json": "7332bd3b4e593785f5330818acf24bb4b2970cbca7a4a8a2fc570be252387c14",
    "registry/performance/budgets/perf_budget_012.json": "1a209fd7c1d701c3fee2f7ecc28ae28272dd94d4676a21d95d76dd9ef27a74bb",
    "registry/performance/budgets/perf_budget_013.json": "3a8ced1ecc3955f14129189619dde13c42afc6fdfc29a78902a901e74ef790f2",
    "registry/performance/budgets/perf_budget_014.json": "3bdf27442f498f53fb0ff104904d68bd346dbedcf064c9c662f9c76fe5522e69",
    "registry/performance/budgets/perf_budget_015.json": "f396bb71eefa656792eef4b8e7b2fc796a3fc282fa4503d26e18ed5f38572e45",
    "registry/performance/budgets/perf_budget_016.json": "56958dbd49f995bc0c291c7c852423c10c37d0e380884eff888c54b28e3baae7",
    "registry/performance/budgets/perf_budget_017.json": "5332eee22acc4a735c402b2ba543775082fd9bb9e907fac3ab5a7d8e9a9244d3",
    "registry/performance/rules/perf_rule_001.json": "8387b49c2fab708d66b35146a991802090ec8c4557c6727679c9b7e988d0f1d7",
    "registry/performance/rules/perf_rule_002.json": "41dd0009418b640e4abe28e119243ea668a908bb95a2583cd83fe09c9039cb00",
    "registry/performance/rules/perf_rule_003.json": "3d16118c50264e70b0bba71ab3370d9ffc744c5e6b7c530ceec9ce07de60bb06",
    "registry/performance/rules/perf_rule_004.json": "6a9e2609b5cd0b44ca6bad5410f6d3e7a52f5dcf4c9939ce1df3d1b3e31104af",
    "registry/performance/rules/perf_rule_005.json": "a0761a28af8124e2c704bc5e50400c8f91bae57e10038e74d7b7792eb79a2dd9",
    "registry/performance/rules/perf_rule_006.json": "46dfa3102b32b1faefd7936a492f932be0df8c69fae672ccfe647a5d854ba71f",
    "registry/performance/rules/perf_rule_007.json": "b5ce4888d359dd378b6b7579c6b2d8275755be4a383932e34acb1f44aac02e89",
    "registry/performance/rules/perf_rule_008.json": "b3318b48dbaebd3f988c446ed7a1eb5485bae5e4bb54e81b2bc73ad7ac0a4a2b",
    "registry/performance/rules/perf_rule_009.json": "f8270a8c8a644c84de8881cf51de9abcc3b84ae48bfcadc981ad4e1710ca78e4",
    "registry/performance/rules/perf_rule_010.json": "98d5db067d12597ac1631cbd0867b04b7b89b9423ea2cbbc64de912cca1498a2",
    "registry/performance/rules/perf_rule_011.json": "72a75fb1353b53180ba804f63fd2d4f77be83f30ee84459311a7b0941a65a123",
    "registry/performance/rules/perf_rule_012.json": "b7f8033c743535c8f68a0c523a5c31aa4aca39ccb36d3ad73985b7b407ac1c62",
    "registry/performance/rules/perf_rule_013.json": "edebe0fdecb9fa880914e3d7b0a306a556b6974f72fde67c247757d09b4dd167",
    "registry/performance/rules/perf_rule_014.json": "d5ed27bce3d9fe663d7fc464e331094e652c514bbc8ccac36ef9a4202fc4946c",
    "registry/performance/rules/perf_rule_015.json": "28132d05b292a2c827d52625629a709661f04f90a33035f4df836b71ec4af6a3",
    "registry/performance/rules/perf_rule_016.json": "ffbed896ccdc54ab06441faf562dc9ae6f37eaae0b69602a059c4fbea5ec6bab",
    "registry/performance/rules/perf_rule_017.json": "67191f7924447c490a9d660b7e46c07ad6377220c741de5266cc6daba60d2e84",
    "registry/performance/rules/perf_rule_018.json": "9c543655477ac746c68c2dc4b260202b40748e0588b2b2b99e2a5097ee1a8e0b",
    "registry/performance/rules/perf_rule_019.json": "a07c96934fc921127ee491ed8ef8d88458092a6f64f04f969f9e3f720806ad8e",
    "registry/performance/rules/perf_rule_020.json": "bee6baac1f05179cbe03d22b5d1cbaadf17bf8eb7557bf331edbac23293af395",
    "registry/performance/rules/perf_rule_021.json": "f64785fb99b33b8ed4a110119b930fe341a0d6eb4374b489fdb0b35d6297b86d",
    "registry/performance/rules/perf_rule_022.json": "1d4f5d6f187320fe73deeec3e480a55bf985cb37703eaf56c6ec69616bf38c82",
    "registry/performance/rules/perf_rule_023.json": "1a8411fcd29abaf190342f516e816d2878c6db0534e0906a421fef2cdca1865e",
    "registry/performance/rules/perf_rule_024.json": "fde92f0b479cd6dede107a41807207276ea89cdca5c6573404e787d5d298f816",
    "registry/performance/rules/perf_rule_025.json": "67f6b64a435e24f925eaf2be6f2ff22d49a47d958c163f376783aeb73b672181",
    "registry/performance/rules/perf_rule_026.json": "13d6dd035ca9e50ca05c0f92e2f2783420a09959849cbdc1f1cd904a021d1637",
    "registry/performance/rules/perf_rule_027.json": "6e1b2c014477037380c8036c8bffcef68eb8f8570cc12af1694a44bfdca779a7",
    "registry/performance/rules/perf_rule_028.json": "c4d9f896144784e9669729f6f8de4b55460838fc58626f3874c3c6c09788ca68",
    "registry/performance/rules/perf_rule_029.json": "1f0cbb7b0d1eedec908b534dc682b70ce6bf4d295a59ef1ba8fe9d4b501fd9f8",
    "registry/performance/rules/perf_rule_030.json": "373004e15a4e5f24436ccd80cc846949820b6f9af433a6dfb33db2b5b41e4a01",
    "registry/performance/rules/perf_rule_031.json": "ce4bc3f6db0c519a9e6dd098459da5b86375e0dd84ba2e75682a9883b0d94eb3",
    "registry/performance/rules/perf_rule_032.json": "3adfe8cd99329cb27a958e73aec49ead1652dfe3dda93efd96088c555a7202eb",
    "registry/performance/rules/perf_rule_033.json": "5f053a19b2569ba84172ce344f44b33c60138e8558d7ae6b59b15c517e109496",
    "registry/performance/rules/perf_rule_034.json": "76270cf050a4f5609741f822de690f4f0bcfdb4d5f5ec8569737779e9fb6947a",
    "registry/performance/rules/perf_rule_035.json": "6f3f3c288cc295a7c24dcb658ba038760a7790b95dd68f519a36c7268cfe633e",
    "registry/performance/rules/perf_rule_036.json": "165fb6450af88c0dda4e6ee6ed443ce7aedf1199162fac9c77786abe4a8b6e11",
    "registry/performance/definitions/measurementMethod.json": "dc1b1edb99d6ec847f6ad1b53eab978df5ea49dad5567cfd6d824f3c9cd7b985",
    "registry/performance/definitions/performanceAudit.json": "eff9a1c7aaeefa7cb920b3636e99dd042cb362b051e2b59db957d2031e90f962",
    "registry/performance/definitions/performanceBudget.json": "554f0b25ed355b0cdce3dfdeea15c3ce1f75a3f8b9d6e9a28fa647fa4c05d644",
    "registry/performance/definitions/performanceMetric.json": "dd8c8412050fd108a07334c859a0a725c3097b2b322b827481b6c740554fcd98",
    "registry/performance/definitions/performanceRule.json": "94ab8129960c4e8970de200e591b5a4ee4a36ccbb8693c0f977cd9a5557f26b2"
  }
};
