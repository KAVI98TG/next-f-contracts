// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/performance/*
export const GENERATED_PERFORMANCE = {
  "registryVersion": "1.3.0",
  "index": {
    "registryVersion": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_017.json"
      }
    ],
    "definitions": [
      {
        "$id": "performance.measurementMethod",
        "name": "Performance Measurement Method",
        "version": "1.3.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled method used to gather performance evidence."
      },
      {
        "$id": "performance.performanceAudit",
        "name": "Performance Audit",
        "version": "1.3.0",
        "status": "stable",
        "domain": "performance",
        "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
      },
      {
        "$id": "performance.performanceBudget",
        "name": "Performance Budget",
        "version": "1.3.0",
        "status": "stable",
        "domain": "performance",
        "description": "Machine-readable target/warning threshold for one performance metric."
      },
      {
        "$id": "performance.performanceMetric",
        "name": "Performance Metric",
        "version": "1.3.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled measurable metric used by a Performance Budget."
      },
      {
        "$id": "performance.performanceRule",
        "name": "Performance Rule",
        "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_017.json"
    }
  ],
  "categories": {
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
      "version": "1.3.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled method used to gather performance evidence."
    },
    {
      "$id": "performance.performanceAudit",
      "name": "Performance Audit",
      "version": "1.3.0",
      "status": "stable",
      "domain": "performance",
      "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
    },
    {
      "$id": "performance.performanceBudget",
      "name": "Performance Budget",
      "version": "1.3.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable target/warning threshold for one performance metric."
    },
    {
      "$id": "performance.performanceMetric",
      "name": "Performance Metric",
      "version": "1.3.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled measurable metric used by a Performance Budget."
    },
    {
      "$id": "performance.performanceRule",
      "name": "Performance Rule",
      "version": "1.3.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable implementation requirement for performance behavior."
    }
  ],
  "sourceHashes": {
    "registry/performance/index.json": "c5a9263bfce5d1c23de9436e65f75aca7ab0a808c8759357e5cf416b339fa879",
    "registry/performance/categories.json": "1c2a2c1765dffba9ce8e742916151e8bd903699cf7304a12102172898888a895",
    "registry/performance/metrics.json": "346b3c648e059d50d6246038c859fad28c272c3f969a9b5dccd9072a35cffd35",
    "registry/performance/measurement-methods.json": "e99a39b478bd89cc47a2811764736b6351d85770bc0d290157949a78aa969f50",
    "registry/performance/third-party-rules.json": "807ef3a7f94f8c5f6895ee321446841cc23cbd280ed9fa9848dede304a6cb454",
    "registry/performance/performance-budget.schema.json": "334ce1fa1408f855349457f390cac93e68b21eec6546ee36a9ba0e70f3692a29",
    "registry/performance/performance-rule.schema.json": "98e054d64135bce5901f1868f113938daaf0c4267188fbe68d6e5baa45200124",
    "registry/performance/portal-audit.json": "d7ca58160b599a36c2983c9401caeab7165c22fb49a96e4027d0ffabf28fc44a",
    "registry/performance/budgets/perf_budget_001.json": "1074706aeace10d04c670ee2c751ef153073ea10ce78d3499870e76c0390fee3",
    "registry/performance/budgets/perf_budget_002.json": "28f76b15d37ae30dab5390432e9dc7ca6ebbf1899ee89a62f60613ea219eb525",
    "registry/performance/budgets/perf_budget_003.json": "752c9dc30a6dffd432ec1247819954efdcb670b99d53bb60a4d135dee281f181",
    "registry/performance/budgets/perf_budget_004.json": "400554094cea7ca53d936fa48ff61f706218ba90ab207807ccca56e4353042b3",
    "registry/performance/budgets/perf_budget_005.json": "a033e984fe79791ec99b02968f2a6dc9b181c0325fd750d37e083742da419bd3",
    "registry/performance/budgets/perf_budget_006.json": "5af29515e1efe01df73e571f193bfe5d777ac7dac0df1bfdb5f482c7d34bc9fd",
    "registry/performance/budgets/perf_budget_007.json": "f26d4978098dc166241b0603b56250fcbf4fe618ecf42d14cc57e6f9fce3c5f0",
    "registry/performance/budgets/perf_budget_008.json": "028d3cdc727cf11b8ce35deee0b67e4d733a7029198bff879e2308db341e426c",
    "registry/performance/budgets/perf_budget_009.json": "d59f10bd163c0526d4fee7a1a2802d01c5997fb008df5cf6b71e37bed2de5079",
    "registry/performance/budgets/perf_budget_010.json": "1a763eafd0ee83430d892318ea629125668349caa83f8f05d4e2edfd478fc235",
    "registry/performance/budgets/perf_budget_011.json": "b61e008baceedd5d50e9a6d76b8a219a5c47e4ac0a98b33b944f011542008efd",
    "registry/performance/budgets/perf_budget_012.json": "dcc7674eb46a821d60477f957d8dcd403cc20d6e1598ba441d362a6b1881dab6",
    "registry/performance/budgets/perf_budget_013.json": "338030743713db8dd26afa2902edeba389ca5f3ff9c07555effa7ee0db8f1c03",
    "registry/performance/budgets/perf_budget_014.json": "65b39602e38e310cd7a2c47c722c8efa74dcb35b2f35b83260d6af1a0fe0b657",
    "registry/performance/budgets/perf_budget_015.json": "a11a3281dd981871c39ae951d41aa8c74c89eeb918bcbeaf74913db4ea9c98b6",
    "registry/performance/budgets/perf_budget_016.json": "5a871ea7769e89a1de439093f451b0898a92348b8194149266010e99f3d77718",
    "registry/performance/budgets/perf_budget_017.json": "d9242566e1cf1ed6718621da9cf1d4f7aca3ef0d71b3144edc7eaf548e842b48",
    "registry/performance/rules/perf_rule_001.json": "5b295e6217a9f53862949922404ef358cc3697fbc9687853e99a80c960cddb9f",
    "registry/performance/rules/perf_rule_002.json": "1755fe3d4045fcede909af271eb7320dc874d5142919867b0d87a374f241ae8d",
    "registry/performance/rules/perf_rule_003.json": "f686f183df657cc25d8d25e297b32635733498b571ff28bcfe939545b9a533ce",
    "registry/performance/rules/perf_rule_004.json": "e7c023f66b35041e87a9610ff6834930e1d0023e7c1ffb05b3adf52a344468a4",
    "registry/performance/rules/perf_rule_005.json": "bbec5b36b5a5a0c0cc176924b9fb27a0fbe95d2d242f7dcd7a1dde5355f8f9dd",
    "registry/performance/rules/perf_rule_006.json": "2af5000bea67db154def73cae7b393f5aa59f70ec36555bb86198fdc6b667f0a",
    "registry/performance/rules/perf_rule_007.json": "98c11f3b399f54e1a5f051a5c34eaa7e1461b4a603cc4831730a1a09b163603f",
    "registry/performance/rules/perf_rule_008.json": "9b87f76eb5d3c1231de03cee059989108647b2ebdd20a0c1745e27818d9cdb46",
    "registry/performance/rules/perf_rule_009.json": "8700f2d371824f386beb8818ea81b857d566e1927332b95c165a2af5a5b870ac",
    "registry/performance/rules/perf_rule_010.json": "902bb59e80fac191d66b155c550c1784e882567ce0ce27e96edb182a72f64522",
    "registry/performance/rules/perf_rule_011.json": "fe27210809250884b295b1e0c0d1a0bf6626b864508c9c2061fb3ee2160e95ea",
    "registry/performance/rules/perf_rule_012.json": "db09f36d25439b2fd3a165060a9b0cbceb7e96c6f73d1dc55bdbcf36991e2558",
    "registry/performance/rules/perf_rule_013.json": "28ebbdad47c9f1951775b556f109dd55e78697e9ce8b96fad47b5d03e67da103",
    "registry/performance/rules/perf_rule_014.json": "4cf406696602ad614f11684672172a131b1816fca7da7b86113559caca4bdd02",
    "registry/performance/rules/perf_rule_015.json": "41e9dc3093a5fb9c40084b6abb2a70706ddfaaba8e02ecdd3deace3c22f9766c",
    "registry/performance/rules/perf_rule_016.json": "931d37cf4923784326635121992da3177ecef77db8eaf1d2b542209ff360611e",
    "registry/performance/rules/perf_rule_017.json": "2f973cf1c37d9f22c91137ac6718645cdadd59a9198a7b76407821ea5a866e28",
    "registry/performance/rules/perf_rule_018.json": "0497ae2e7bb6dd44377fa2ec10ad4dd3fdb995b33154b065421451de7347cc43",
    "registry/performance/rules/perf_rule_019.json": "97bc5e3415d22d83bb2777a5016f5467035c47fc0c47d3d495a3da6c8c494e80",
    "registry/performance/rules/perf_rule_020.json": "6fb886ce1c6c44b1a84c9394ed396bff94afbde45d1e83bcfa3f91f69ae47806",
    "registry/performance/rules/perf_rule_021.json": "d8e00efaf2bf67d62f409e1523047f347b35a679c717525ba6dabefab7fd6bf4",
    "registry/performance/rules/perf_rule_022.json": "c962ffcf9fffcdbb804c584d5e606cbccd96fe7ff4b713624596bcc43f931f30",
    "registry/performance/rules/perf_rule_023.json": "02c84a50b31219a4032d2052f85e5aff2629f501d201420c262519e36a7bdb2d",
    "registry/performance/rules/perf_rule_024.json": "2e4665418145d85af5574ffb257561c77b8aea2b634cc6536d0a6c4bf0d3a9c7",
    "registry/performance/rules/perf_rule_025.json": "d7d52432f6effc4adc7c3e0a57928945dab23d331775264e02d3125c8d1f4aee",
    "registry/performance/rules/perf_rule_026.json": "e8e96647d1d06d9d70eeabac3f562300a6af00d7541bc3490e4baa5dd53b526b",
    "registry/performance/rules/perf_rule_027.json": "c678f0540b7b72e8620f3df14207a96d8353113c9658df966e128c1d0e6ee476",
    "registry/performance/rules/perf_rule_028.json": "04630dd7c1be39ad93b4970528c5bc00f4cdeba1f5ef6e0342e14eb410ad4ceb",
    "registry/performance/rules/perf_rule_029.json": "5449984a7c85c3e77b49e2bb170f417a810a5dcf5c280275047de3e006923481",
    "registry/performance/rules/perf_rule_030.json": "0ffb4cc6050fe5f233d715f50637db2fd2b7313a4561a01c1c00df3984e217c9",
    "registry/performance/rules/perf_rule_031.json": "96e0f3bbd70334330203a6c079604c550ca07e3a912110a3b74fa5133c7512b8",
    "registry/performance/rules/perf_rule_032.json": "454a201ea10adac99623f88e08aa90636e33e93712fb2df4d19601f145258884",
    "registry/performance/rules/perf_rule_033.json": "eec8a704ae3f7bee2123c824105a1fcb45e29b9a67647e62c2fc57b37b3642ef",
    "registry/performance/rules/perf_rule_034.json": "2f7b5f66acfa8bf6abd44d08f1cadadc6810c1b6873bef0ef26987bc43b76b8b",
    "registry/performance/rules/perf_rule_035.json": "1faa4a34ec785cdc6f0d05fb5addf89db05c41474368144398da68a96f48cd9f",
    "registry/performance/rules/perf_rule_036.json": "34d52f01632017ffc183c560673ae0590fb3e07460f7f5f73c24d42b9e1341c4",
    "registry/performance/definitions/measurementMethod.json": "ba509b5d99e4454686a928cf20847613d54ec524f63b24a73a47e65b11b3fc1d",
    "registry/performance/definitions/performanceAudit.json": "529c06742faf621a41606979f9b0efa7ce3a5cb21c050379c6cda8fa280f6e1c",
    "registry/performance/definitions/performanceBudget.json": "65db4459c422ea44c0cb7f01f41630d68c839d47d2de69ae6f652d84abe872dd",
    "registry/performance/definitions/performanceMetric.json": "86497c8af98e87e40380d0d9d38d4114eb60fe7a1268de5f45ec1af73475bed6",
    "registry/performance/definitions/performanceRule.json": "51f1ce64110ccc79b58cf16cfdb8806c52bc54b102901377e4e196c048c7e90e"
  }
};
