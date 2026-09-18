// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/performance/*
export const GENERATED_PERFORMANCE = {
  "registryVersion": "1.2.0",
  "index": {
    "registryVersion": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
        "status": "stable",
        "phase": 32,
        "sourceReference": "registry/performance/budgets/perf_budget_017.json"
      }
    ],
    "definitions": [
      {
        "$id": "performance.measurementMethod",
        "name": "Performance Measurement Method",
        "version": "1.2.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled method used to gather performance evidence."
      },
      {
        "$id": "performance.performanceAudit",
        "name": "Performance Audit",
        "version": "1.2.0",
        "status": "stable",
        "domain": "performance",
        "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
      },
      {
        "$id": "performance.performanceBudget",
        "name": "Performance Budget",
        "version": "1.2.0",
        "status": "stable",
        "domain": "performance",
        "description": "Machine-readable target/warning threshold for one performance metric."
      },
      {
        "$id": "performance.performanceMetric",
        "name": "Performance Metric",
        "version": "1.2.0",
        "status": "stable",
        "domain": "performance",
        "description": "Controlled measurable metric used by a Performance Budget."
      },
      {
        "$id": "performance.performanceRule",
        "name": "Performance Rule",
        "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
      "status": "stable",
      "phase": 32,
      "sourceReference": "registry/performance/budgets/perf_budget_017.json"
    }
  ],
  "categories": {
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
      "version": "1.2.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled method used to gather performance evidence."
    },
    {
      "$id": "performance.performanceAudit",
      "name": "Performance Audit",
      "version": "1.2.0",
      "status": "stable",
      "domain": "performance",
      "description": "Measured Contract Portal performance evidence against Phase 32 budgets."
    },
    {
      "$id": "performance.performanceBudget",
      "name": "Performance Budget",
      "version": "1.2.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable target/warning threshold for one performance metric."
    },
    {
      "$id": "performance.performanceMetric",
      "name": "Performance Metric",
      "version": "1.2.0",
      "status": "stable",
      "domain": "performance",
      "description": "Controlled measurable metric used by a Performance Budget."
    },
    {
      "$id": "performance.performanceRule",
      "name": "Performance Rule",
      "version": "1.2.0",
      "status": "stable",
      "domain": "performance",
      "description": "Machine-readable implementation requirement for performance behavior."
    }
  ],
  "sourceHashes": {
    "registry/performance/index.json": "b7b34857983eaa263ee488265031e12a94ea55d0f409adc0a645554ba599119d",
    "registry/performance/categories.json": "87ac4439613f3332a0212ab2c8c03adda8291a6e319ad33f3879305603cdf004",
    "registry/performance/metrics.json": "c6ac169515100eb2367a9f91c11fbf41596bccf860567304e368d8788eef8c08",
    "registry/performance/measurement-methods.json": "f1d883058cafdfa3d6351413c07d3fdee34656632cab18ab542d17ecc941f950",
    "registry/performance/third-party-rules.json": "1e6817b567d2b6f97524746b049d4e7ba26ba4193c0fb7f13f10f24cd0bde0b9",
    "registry/performance/performance-budget.schema.json": "4f1d7e2ad0dbe87c81b4abda9ea953144edda4af399e817c4bbc211d3504730a",
    "registry/performance/performance-rule.schema.json": "5dff7a25f7f9890472cfa25f63fc166e2de7f0f5a06569ce1090969e09e8c551",
    "registry/performance/portal-audit.json": "fa75829145bd289b67611a1d44ae7876042d3641d1a22827042d0b7ecba0008e",
    "registry/performance/budgets/perf_budget_001.json": "27e13db892ef6ab13c6ef556dd451d1940320e96254b3c3835e7c3c049965547",
    "registry/performance/budgets/perf_budget_002.json": "7c1c480d94c67a28f7457dcb6c4236e26de17a444f09334b84e365860c3fe049",
    "registry/performance/budgets/perf_budget_003.json": "49b0fafd5d7f281058e4de18cbed5e4459c73cd54f2d06d2728ff5569e4a1dcc",
    "registry/performance/budgets/perf_budget_004.json": "fea7e573e4d08340fc6f047f2518e48616ad8037f01121c663c444ec3aae7fe8",
    "registry/performance/budgets/perf_budget_005.json": "7e2f66715d83a0f75787c7e925be28326f7a45c87ef374626c7e2c07a972d5c2",
    "registry/performance/budgets/perf_budget_006.json": "f95ce93e915f37000f68081d29b6bb2136ab63d87d3dacd685e4aaac2a1d0354",
    "registry/performance/budgets/perf_budget_007.json": "40e8d58806ade271b85e20b69720fd5aba63ab8636dfa6a2d78dba8e6d6ca0fa",
    "registry/performance/budgets/perf_budget_008.json": "1af0ba32956c9e28e259818d4afff1bef74e68f021b2194592c477839aa6b1a7",
    "registry/performance/budgets/perf_budget_009.json": "87d5ba71c839307cc047410da661e6dd115108b77691f79b45e2f1fd27c0e41c",
    "registry/performance/budgets/perf_budget_010.json": "2d88be1615b7672047894688b5dc115dfc29295d21254395bb42442df1c4f915",
    "registry/performance/budgets/perf_budget_011.json": "5512f4e45076c9b008e1ae50f025cc90c84418c32b0f293cf64393f64946d441",
    "registry/performance/budgets/perf_budget_012.json": "27ae9defde32be149a49d151baf31bcfd84c833426201a2706c44336a1b01426",
    "registry/performance/budgets/perf_budget_013.json": "59521938125c5dec9c8f9c58aedb58b72c1932f2efd3adac45c4f171ea95630c",
    "registry/performance/budgets/perf_budget_014.json": "e7c494090ee6845d4cd035e2d520bafddc92734e65f1e2c47c1bee160e8c56cf",
    "registry/performance/budgets/perf_budget_015.json": "42cc331f6722e31e44dec9e3f5cfc72589d3ebcde4fbcbcaf3f10b688c78f443",
    "registry/performance/budgets/perf_budget_016.json": "b6e7f4fa9f39be6133b044586e4589d4cd6833c4e9046cb3732897d6b4c83ad9",
    "registry/performance/budgets/perf_budget_017.json": "0ad3216d0ee46fdb5719992ae44ce7ab83ccf11404f52461d25be87c3d5d76ec",
    "registry/performance/rules/perf_rule_001.json": "e487058b214006cd1f61586cb30998285c9f3d90e565f3a2114a466bf6d0a5d6",
    "registry/performance/rules/perf_rule_002.json": "b97d1c44cd4d3ca7affe10fde4e1ebb10f98613f51b468bff7cef07237b8fd15",
    "registry/performance/rules/perf_rule_003.json": "459f76ee85e741fbc9907b3075b5477045cb141da58d04d7a92ffe2792bce5f7",
    "registry/performance/rules/perf_rule_004.json": "6d753e68b4e988c03d6085724c875cab33b1567e0872ce6f957f88bbe93bbea9",
    "registry/performance/rules/perf_rule_005.json": "0df5a14f2b348e40a195d3ab7a45e273712ab7b8ee1af9685af44cc303cde619",
    "registry/performance/rules/perf_rule_006.json": "db8d23047cf11e75561f9f2fcdbb4379768a9e4f6663fe62b4b161da17df82a8",
    "registry/performance/rules/perf_rule_007.json": "de42b60b0970355772bd856d7584ad04fd3552223ec1e58cabe4758625d7c420",
    "registry/performance/rules/perf_rule_008.json": "e78fabde92fd2bb7fb2f41e3333afa55c5b804adfad3e797bf75b4dfb83e807c",
    "registry/performance/rules/perf_rule_009.json": "c10017b3a0ee8080096814c0f6acffcae2051747ba59d9c7f7e4c5e40433e6ed",
    "registry/performance/rules/perf_rule_010.json": "b036bf5d0f164d53591e3cff0798c24981934e89e105f6fc989c6314fa4a6dd2",
    "registry/performance/rules/perf_rule_011.json": "d3381fdb9e84aa0abf97df9b49dc1766cbe762678245f6411a675a6840a064c7",
    "registry/performance/rules/perf_rule_012.json": "65db9d4d47e87659600557bcbef33583a83b94052c9d686b421605437e8e0415",
    "registry/performance/rules/perf_rule_013.json": "8b7bf0307b32809fd793b2ca2bae580f32c3eff52085c1042b05a16fc359957b",
    "registry/performance/rules/perf_rule_014.json": "af298c7d0ccfc45aab7ddbcfed8016b8a496372ea9a27e3cc8b9fd2a54cbb1ef",
    "registry/performance/rules/perf_rule_015.json": "57ef17c8cc4b40f3174c14d43401e9d2c19176f68d9d601ec709faed29ed665d",
    "registry/performance/rules/perf_rule_016.json": "ed65771c665fb79ddaacc91b6ee0f8f2720dc1681ba547ca0e322499367829d5",
    "registry/performance/rules/perf_rule_017.json": "a2ba5200f10ae67a4fc6f137ae83e71d391bc90985fdad2f25a88c94ea499b0e",
    "registry/performance/rules/perf_rule_018.json": "dc748f4229ff86c104e9a0e41c131224fda3fbb52b5e2d0b02b6a16d4c01e99e",
    "registry/performance/rules/perf_rule_019.json": "702240bf7e5ec66757bf3a703f10a1a554fb3cfc54bea7852bc9e6920d960489",
    "registry/performance/rules/perf_rule_020.json": "3a8fe24296668a6525cf9fabdb0c57b8e6400018863a615543e3e9d865388a66",
    "registry/performance/rules/perf_rule_021.json": "eb9cdb058f28cd2583208e4436f71ccb196904a938ec6a2057e5496ae4e08ad1",
    "registry/performance/rules/perf_rule_022.json": "cb3ea233e24b17b37ae299d20644e4269aa26782f058d87b81ce9218234d58ea",
    "registry/performance/rules/perf_rule_023.json": "cdc135c44bc4aa3f69b45194252a725822391c7f71de6474e22911716509e11d",
    "registry/performance/rules/perf_rule_024.json": "5e410383c9c5c2951b12a313392b1c11132fabb0446261f1a7d744fd6e789d1d",
    "registry/performance/rules/perf_rule_025.json": "bd9f289f4a59b95c77dd996172ea6538f6fbfe7932b7c8a3c11e1ca8e4e92434",
    "registry/performance/rules/perf_rule_026.json": "1ce23807856a334c2aaeac9f4ed7577b4cbbe8a555523045b9e34a3c0d46b58a",
    "registry/performance/rules/perf_rule_027.json": "072ab361eb1ffd422b8416dc292593a286f15ca940b4e756e399277927b03181",
    "registry/performance/rules/perf_rule_028.json": "f566cb2daaf510158237619a465d98858ecf72a84e0f8fe96c9b93d9d537b94a",
    "registry/performance/rules/perf_rule_029.json": "5ca9d4326c933f0ab0048a1fe762a07530daeb802f9622b2fa865cf98a570080",
    "registry/performance/rules/perf_rule_030.json": "df3e4e733e498f2d8089a198a68cfafdcb94d83d154422bcaf21f025866bf21c",
    "registry/performance/rules/perf_rule_031.json": "8afb0d322fbc730c40bb6cabbd565675d2ab608b22bdc4ec30d57eb5da085e2c",
    "registry/performance/rules/perf_rule_032.json": "f2ea40c8f1a920e7abefe743396053c5f9ae644ccb31d39b2c1c88e1113a9770",
    "registry/performance/rules/perf_rule_033.json": "466b8c4dedf8f2fd947f487ff15345e4b50653cd911b10ba046ec2f60dbd6b69",
    "registry/performance/rules/perf_rule_034.json": "061edb3a46a249036488946ad883448261b13280188318a62f9e26c46837fa4f",
    "registry/performance/rules/perf_rule_035.json": "2cb82b102ed55987cb752bd3f7e82c246f645eb1075926e56b5597944c72f2e2",
    "registry/performance/rules/perf_rule_036.json": "c8a5f80d865dcd18fa69df73e0bfae6e23e3a6494856b4abbcf6ae06fc7b22cf",
    "registry/performance/definitions/measurementMethod.json": "82a3c2f3092a0c05bb26c76f2ebd6d83ab4a9706c6629cea152a49a2edfe8c02",
    "registry/performance/definitions/performanceAudit.json": "a044936bbee5ec88ace5558a5c7861c8bccede9af246fc427674d83e7fcd50ef",
    "registry/performance/definitions/performanceBudget.json": "37106da98691d31d5ec9883648797db4f0c6712424e7ae9b49781711e5f89d3f",
    "registry/performance/definitions/performanceMetric.json": "9120b55a0b85160180bc5966b54cf85bcaaddb47d4b98ea8956cd8b54742e082",
    "registry/performance/definitions/performanceRule.json": "279cdbad4754a4ad9e407600cd72b69134226f7592d25b4c2bc028b2af02cad0"
  }
};
