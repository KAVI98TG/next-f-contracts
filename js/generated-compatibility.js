// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/compatibility/*
export const GENERATED_COMPATIBILITY = {
  "index": {
    "registryVersion": "1.1.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Compatibility Center",
    "description": "Operational release, Site Manifest and platform-surface compatibility metadata for contract.nextf.lk.",
    "standard": "standards/34-compatibility-center-standard.md",
    "baselinePolicy": "standards/07-compatibility-policy.md",
    "targetContractVersion": "1.1.0",
    "definitionCount": 16,
    "statusCount": 7,
    "supportLevelCount": 8,
    "dimensionCount": 13,
    "sources": {
      "statuses": "registry/compatibility/statuses.json",
      "supportLevels": "registry/compatibility/support-levels.json",
      "dimensions": "registry/compatibility/dimensions.json",
      "componentTypes": "registry/compatibility/component-types.json",
      "findingCodes": "registry/compatibility/finding-codes.json",
      "policy": "registry/compatibility/policy.json",
      "releaseCompatibility": "registry/compatibility/release-compatibility.json",
      "componentMatrix": "registry/compatibility/component-matrix.json",
      "referenceSites": "registry/compatibility/reference-site-assessments.json",
      "definitions": "registry/compatibility/definitions"
    },
    "releaseCount": 39,
    "exactReleaseCount": 34,
    "componentCount": 18,
    "referenceAssessmentCount": 6,
    "productionEligible": true
  },
  "statuses": {
    "registryVersion": "1.1.0",
    "statuses": [
      {
        "id": "compatible",
        "label": "Compatible",
        "rank": 10,
        "blocking": false,
        "description": "All evaluated required dimensions are satisfied."
      },
      {
        "id": "compatible-with-upgrade",
        "label": "Compatible, upgrade available",
        "rank": 20,
        "blocking": false,
        "description": "No detected blocking change, but an explicit newer target is available."
      },
      {
        "id": "unknown",
        "label": "Unknown",
        "rank": 50,
        "blockingForProduction": true,
        "description": "Evidence is insufficient or an exact/runtime declaration is unavailable."
      },
      {
        "id": "review-required",
        "label": "Review required",
        "rank": 60,
        "blockingForProduction": true,
        "description": "Potentially breaking, deprecated or semantic/security-sensitive evidence needs review."
      },
      {
        "id": "migration-required",
        "label": "Migration required",
        "rank": 80,
        "blocking": true,
        "description": "Detected change requires implementation/data migration before adoption."
      },
      {
        "id": "incompatible",
        "label": "Incompatible",
        "rank": 100,
        "blocking": true,
        "description": "A required binding cannot operate against the target as declared."
      },
      {
        "id": "not-applicable",
        "label": "Not applicable",
        "rank": 0,
        "blocking": false,
        "description": "This compatibility dimension does not apply."
      }
    ]
  },
  "supportlevels": {
    "registryVersion": "1.1.0",
    "levels": [
      {
        "id": "current-development",
        "label": "Current development",
        "production": false,
        "newSitesAllowed": true,
        "description": "Current pre-1.0 development foundation release."
      },
      {
        "id": "historical-development",
        "label": "Historical development",
        "production": false,
        "newSitesAllowed": false,
        "description": "Exact previous pre-1.0 development release retained for comparison/migration work."
      },
      {
        "id": "production-current",
        "label": "Production current",
        "production": true,
        "newSitesAllowed": true,
        "description": "Current production support train release after formal Production Acceptance."
      },
      {
        "id": "production-supported",
        "label": "Production supported",
        "production": true,
        "newSitesAllowed": true,
        "description": "Supported production release within an explicit support window."
      },
      {
        "id": "maintenance",
        "label": "Maintenance",
        "production": true,
        "newSitesAllowed": false,
        "description": "Limited production maintenance; upgrade recommended."
      },
      {
        "id": "deprecated",
        "label": "Deprecated",
        "production": false,
        "newSitesAllowed": false,
        "description": "Support is ending/ended; migration required according to declared policy."
      },
      {
        "id": "unsupported",
        "label": "Unsupported",
        "production": false,
        "newSitesAllowed": false,
        "description": "No active support declaration."
      },
      {
        "id": "history-only",
        "label": "History only",
        "production": false,
        "newSitesAllowed": false,
        "description": "Release metadata exists but evidence/support is insufficient for runtime compatibility claims."
      }
    ]
  },
  "dimensions": {
    "registryVersion": "1.1.0",
    "dimensions": [
      {
        "id": "contract-release",
        "label": "Contract Registry",
        "required": true
      },
      {
        "id": "site-manifest",
        "label": "Site Manifest",
        "required": true
      },
      {
        "id": "modules",
        "label": "Modules",
        "required": true
      },
      {
        "id": "capabilities",
        "label": "Capabilities",
        "required": true
      },
      {
        "id": "api",
        "label": "API Bindings",
        "required": true
      },
      {
        "id": "permissions",
        "label": "Permissions",
        "required": true
      },
      {
        "id": "events",
        "label": "Events",
        "required": true
      },
      {
        "id": "webhooks",
        "label": "Webhooks",
        "required": false
      },
      {
        "id": "integrations",
        "label": "Integrations",
        "required": false
      },
      {
        "id": "customer-cms-ui",
        "label": "Customer CMS UI",
        "required": false
      },
      {
        "id": "nextf-admin-ui",
        "label": "NEXT F Admin UI",
        "required": false
      },
      {
        "id": "site-runtime",
        "label": "Site Runtime",
        "required": true
      },
      {
        "id": "data-migration",
        "label": "Data Migration",
        "required": false
      }
    ]
  },
  "componenttypes": {
    "registryVersion": "1.1.0",
    "types": [
      {
        "id": "contract-registry",
        "label": "Contract Registry"
      },
      {
        "id": "site-manifest-spec",
        "label": "Site Manifest Specification"
      },
      {
        "id": "module-registry",
        "label": "Module Registry"
      },
      {
        "id": "permission-registry",
        "label": "Permission Registry"
      },
      {
        "id": "event-registry",
        "label": "Event Registry"
      },
      {
        "id": "webhook-registry",
        "label": "Webhook Registry"
      },
      {
        "id": "integration-registry",
        "label": "Integration Registry"
      },
      {
        "id": "api-group",
        "label": "API Group"
      },
      {
        "id": "customer-cms-ui-metadata",
        "label": "Customer CMS UI Metadata"
      },
      {
        "id": "nextf-admin-ui-metadata",
        "label": "NEXT F Admin UI Metadata"
      },
      {
        "id": "site-runtime",
        "label": "Site Runtime / SDK"
      },
      {
        "id": "reference-site",
        "label": "Reference Site"
      },
      {
        "id": "customer-access-policy-registry",
        "label": "Customer Access Policy Registry"
      }
    ]
  },
  "findingcodes": {
    "registryVersion": "1.1.0",
    "codes": [
      {
        "id": "contract.current",
        "dimension": "contract-release",
        "defaultStatus": "compatible"
      },
      {
        "id": "contract.upgrade-available",
        "dimension": "contract-release",
        "defaultStatus": "compatible-with-upgrade"
      },
      {
        "id": "contract.breaking-change",
        "dimension": "contract-release",
        "defaultStatus": "migration-required"
      },
      {
        "id": "contract.review-change",
        "dimension": "contract-release",
        "defaultStatus": "review-required"
      },
      {
        "id": "contract.history-unavailable",
        "dimension": "contract-release",
        "defaultStatus": "unknown"
      },
      {
        "id": "support.pre-1-development",
        "dimension": "contract-release",
        "defaultStatus": "unknown"
      },
      {
        "id": "manifest.valid",
        "dimension": "site-manifest",
        "defaultStatus": "compatible"
      },
      {
        "id": "manifest.invalid",
        "dimension": "site-manifest",
        "defaultStatus": "incompatible"
      },
      {
        "id": "module.unknown",
        "dimension": "modules",
        "defaultStatus": "incompatible"
      },
      {
        "id": "module.required-dependency-missing",
        "dimension": "modules",
        "defaultStatus": "incompatible"
      },
      {
        "id": "capability.unknown",
        "dimension": "capabilities",
        "defaultStatus": "incompatible"
      },
      {
        "id": "capability.reserved",
        "dimension": "capabilities",
        "defaultStatus": "incompatible"
      },
      {
        "id": "api.binding-supported",
        "dimension": "api",
        "defaultStatus": "compatible"
      },
      {
        "id": "api.binding-unknown",
        "dimension": "api",
        "defaultStatus": "unknown"
      },
      {
        "id": "permission.missing",
        "dimension": "permissions",
        "defaultStatus": "incompatible"
      },
      {
        "id": "event.missing",
        "dimension": "events",
        "defaultStatus": "incompatible"
      },
      {
        "id": "webhook.event-ineligible",
        "dimension": "webhooks",
        "defaultStatus": "incompatible"
      },
      {
        "id": "integration.connector-missing",
        "dimension": "integrations",
        "defaultStatus": "incompatible"
      },
      {
        "id": "runtime.not-released",
        "dimension": "site-runtime",
        "defaultStatus": "unknown"
      },
      {
        "id": "migration.required",
        "dimension": "data-migration",
        "defaultStatus": "migration-required"
      }
    ]
  },
  "policy": {
    "registryVersion": "1.1.0",
    "schemaVersion": "1.0.0",
    "standard": "standards/34-compatibility-center-standard.md",
    "baselinePolicy": "standards/07-compatibility-policy.md",
    "currentContractRelease": "1.1.0",
    "productionAcceptanceVersion": "1.0.0",
    "preOneReleasePolicy": {
      "active": false,
      "currentSupportLevel": "production-current",
      "historicalExactSupportLevel": "historical-development",
      "missingHistorySupportLevel": "history-only",
      "productionSupportDeclared": true,
      "note": "Contract Registry production stability is active from V1.0.0; consumer runtimes retain independent evidence states."
    },
    "statusPrecedence": [
      "incompatible",
      "migration-required",
      "review-required",
      "unknown",
      "compatible-with-upgrade",
      "compatible",
      "not-applicable"
    ],
    "releaseDiffMapping": {
      "breaking": "migration-required",
      "potentially-breaking": "review-required",
      "review-required": "review-required",
      "deprecation": "review-required",
      "non-breaking": "compatible-with-upgrade",
      "documentation": "compatible-with-upgrade",
      "metadata": "compatible-with-upgrade",
      "none": "compatible"
    },
    "unknownBlocksProduction": true,
    "securitySensitiveManualReview": [
      "authentication",
      "permissions",
      "secrets",
      "payments",
      "tenant-isolation",
      "webhook-signing",
      "privacy",
      "personal-data"
    ],
    "noSideEffects": true
  },
  "releasecompatibility": {
    "registryVersion": "1.1.0",
    "targetVersion": "1.1.0",
    "generatedAt": "2026-09-11T00:00:00Z",
    "scope": "consumer-relevant canonical Registry changes; tooling-only search/relationship/diff/compatibility definitions excluded from upgrade severity",
    "releases": [
      {
        "version": "0.1.0",
        "phase": 0,
        "exactSnapshotAvailable": false,
        "availability": "registry-missing",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-0-V0.1.0.zip",
        "diffRoute": null
      },
      {
        "version": "0.2.0",
        "phase": 1,
        "exactSnapshotAvailable": false,
        "availability": "registry-missing",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-1-V0.2.0.zip",
        "diffRoute": null
      },
      {
        "version": "0.3.0",
        "phase": 2,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 10,
          "deprecation": 0,
          "non-breaking": 2215,
          "documentation": 0,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-2-V0.3.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.3.0&to=1.1.0"
      },
      {
        "version": "0.4.0",
        "phase": 3,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 15,
          "deprecation": 0,
          "non-breaking": 2176,
          "documentation": 34,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-3-V0.4.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.4.0&to=1.1.0"
      },
      {
        "version": "0.5.0",
        "phase": 4,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 17,
          "deprecation": 0,
          "non-breaking": 2156,
          "documentation": 52,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-4-V0.5.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.5.0&to=1.1.0"
      },
      {
        "version": "0.6.0",
        "phase": 5,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 37,
          "deprecation": 0,
          "non-breaking": 2135,
          "documentation": 53,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-5-V0.6.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.6.0&to=1.1.0"
      },
      {
        "version": "0.7.0",
        "phase": 6,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 36,
          "deprecation": 0,
          "non-breaking": 2104,
          "documentation": 85,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-6-V0.7.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.7.0&to=1.1.0"
      },
      {
        "version": "0.8.0",
        "phase": 7,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 42,
          "deprecation": 0,
          "non-breaking": 2081,
          "documentation": 106,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-7-V0.8.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.8.0&to=1.1.0"
      },
      {
        "version": "0.9.0",
        "phase": 8,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 46,
          "deprecation": 0,
          "non-breaking": 2045,
          "documentation": 138,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-8-V0.9.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.9.0&to=1.1.0"
      },
      {
        "version": "0.10.0",
        "phase": 9,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 55,
          "deprecation": 0,
          "non-breaking": 2000,
          "documentation": 174,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-9-V0.10.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.10.0&to=1.1.0"
      },
      {
        "version": "0.11.0",
        "phase": 10,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 58,
          "deprecation": 0,
          "non-breaking": 1951,
          "documentation": 220,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-10-V0.11.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.11.0&to=1.1.0"
      },
      {
        "version": "0.12.0",
        "phase": 11,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 73,
          "deprecation": 0,
          "non-breaking": 1878,
          "documentation": 278,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-11-V0.12.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.12.0&to=1.1.0"
      },
      {
        "version": "0.13.0",
        "phase": 12,
        "exactSnapshotAvailable": false,
        "availability": "snapshot-unavailable",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": null,
        "diffRoute": null
      },
      {
        "version": "0.14.0",
        "phase": 13,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 78,
          "deprecation": 0,
          "non-breaking": 1601,
          "documentation": 550,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-13-V0.14.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.14.0&to=1.1.0"
      },
      {
        "version": "0.15.0",
        "phase": 14,
        "exactSnapshotAvailable": false,
        "availability": "snapshot-unavailable",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": null,
        "diffRoute": null
      },
      {
        "version": "0.16.0",
        "phase": 15,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 25,
          "deprecation": 0,
          "non-breaking": 1180,
          "documentation": 1024,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-15-V0.16.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.16.0&to=1.1.0"
      },
      {
        "version": "0.17.0",
        "phase": 16,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 2,
          "review-required": 29,
          "deprecation": 0,
          "non-breaking": 1157,
          "documentation": 1041,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-16-V0.17.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.17.0&to=1.1.0"
      },
      {
        "version": "0.18.0",
        "phase": 17,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "migration-required",
        "summary": "Breaking contract evidence requires migration before target adoption.",
        "changeSummary": "2327 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 96,
          "potentially-breaking": 6,
          "review-required": 31,
          "deprecation": 0,
          "non-breaking": 1142,
          "documentation": 1048,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-17-V0.18.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.18.0&to=1.1.0"
      },
      {
        "version": "0.19.0",
        "phase": 18,
        "exactSnapshotAvailable": false,
        "availability": "snapshot-unavailable",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": null,
        "diffRoute": null
      },
      {
        "version": "0.20.0",
        "phase": 19,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 111,
          "deprecation": 0,
          "non-breaking": 717,
          "documentation": 1401,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-19-V0.20.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.20.0&to=1.1.0"
      },
      {
        "version": "0.21.0",
        "phase": 20,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 186,
          "deprecation": 0,
          "non-breaking": 554,
          "documentation": 1473,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-20-V0.21.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.21.0&to=1.1.0"
      },
      {
        "version": "0.22.0",
        "phase": 21,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 187,
          "deprecation": 0,
          "non-breaking": 481,
          "documentation": 1545,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-21-V0.22.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.22.0&to=1.1.0"
      },
      {
        "version": "0.23.0",
        "phase": 22,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-22-V0.23.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "version": "0.24.0",
        "phase": 23,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-23-V0.24.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.24.0&to=1.1.0"
      },
      {
        "version": "0.25.0",
        "phase": 24,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-24-V0.25.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.25.0&to=1.1.0"
      },
      {
        "version": "0.26.0",
        "phase": 25,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.26.0&to=1.1.0"
      },
      {
        "version": "0.27.0",
        "phase": 26,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.27.0&to=1.1.0"
      },
      {
        "version": "0.28.0",
        "phase": 27,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2189 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 196,
          "deprecation": 0,
          "non-breaking": 422,
          "documentation": 1556,
          "metadata": 15,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.28.0&to=1.1.0"
      },
      {
        "version": "0.29.0",
        "phase": 28,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2188 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 201,
          "deprecation": 0,
          "non-breaking": 409,
          "documentation": 1558,
          "metadata": 20,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.29.0&to=1.1.0"
      },
      {
        "version": "0.30.0",
        "phase": 29,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2187 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 209,
          "deprecation": 0,
          "non-breaking": 346,
          "documentation": 1608,
          "metadata": 24,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.30.0&to=1.1.0"
      },
      {
        "version": "0.31.0",
        "phase": 30,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2186 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 284,
          "deprecation": 0,
          "non-breaking": 263,
          "documentation": 1609,
          "metadata": 30,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.31.0&to=1.1.0"
      },
      {
        "version": "0.32.0",
        "phase": 31,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2185 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 292,
          "deprecation": 0,
          "non-breaking": 204,
          "documentation": 1610,
          "metadata": 79,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.32.0&to=1.1.0"
      },
      {
        "version": "0.33.0",
        "phase": 32,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2184 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 301,
          "deprecation": 0,
          "non-breaking": 136,
          "documentation": 1612,
          "metadata": 135,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.33.0&to=1.1.0"
      },
      {
        "version": "0.34.0",
        "phase": 33,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2183 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 303,
          "deprecation": 0,
          "non-breaking": 130,
          "documentation": 1615,
          "metadata": 135,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.34.0&to=1.1.0"
      },
      {
        "version": "0.35.0",
        "phase": 34,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2182 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 305,
          "deprecation": 0,
          "non-breaking": 124,
          "documentation": 1618,
          "metadata": 135,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.35.0&to=1.1.0"
      },
      {
        "version": "0.36.0",
        "phase": 34,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2181 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 307,
          "deprecation": 0,
          "non-breaking": 114,
          "documentation": 1619,
          "metadata": 141,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.36.0&to=1.1.0"
      },
      {
        "version": "0.37.0",
        "phase": 34,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2180 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 309,
          "deprecation": 0,
          "non-breaking": 108,
          "documentation": 1619,
          "metadata": 144,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.37.0&to=1.1.0"
      },
      {
        "version": "1.0.0",
        "phase": 37,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "production-supported",
        "productionEligible": true,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2179 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 310,
          "deprecation": 0,
          "non-breaking": 102,
          "documentation": 1623,
          "metadata": 144,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=1.0.0&to=1.1.0"
      },
      {
        "version": "1.1.0",
        "phase": 34,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "production-current",
        "productionEligible": true,
        "compatibilityStatus": "compatible",
        "summary": "This is the current coordinated Contract Registry release.",
        "changeSummary": "Current release",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 0,
          "deprecation": 0,
          "non-breaking": 0,
          "documentation": 0,
          "metadata": 0,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": null
      }
    ]
  },
  "componentmatrix": {
    "registryVersion": "1.1.0",
    "targetContractVersion": "1.1.0",
    "generatedAt": "2026-09-11T00:00:00Z",
    "components": [
      {
        "componentId": "contracts.registry",
        "componentType": "contract-registry",
        "name": "NEXT F Contract Registry",
        "specificationVersion": "1.1.0",
        "registryRelease": "1.1.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "static-authoritative-repository",
        "source": "registry/registry.json",
        "compatibilityStatus": "compatible",
        "summary": "Current authoritative stable Contract Registry release."
      },
      {
        "componentId": "manifest.specification",
        "componentType": "site-manifest-spec",
        "name": "Site Manifest Specification",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.17.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "json-schema",
        "source": "registry/manifests/nextf-site-manifest.schema.json",
        "compatibilityStatus": "compatible",
        "summary": "Machine-readable Site Manifest schema is available."
      },
      {
        "componentId": "modules.registry",
        "componentType": "module-registry",
        "name": "Module Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.18.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/modules/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical Module and Capability registry is available."
      },
      {
        "componentId": "permissions.registry",
        "componentType": "permission-registry",
        "name": "Permission Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.16.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/permissions/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical Permission and role metadata is available."
      },
      {
        "componentId": "events.registry",
        "componentType": "event-registry",
        "name": "Event Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.15.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/events/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical Event definitions are available."
      },
      {
        "componentId": "webhooks.registry",
        "componentType": "webhook-registry",
        "name": "Webhook Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.15.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/webhooks/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical Webhook delivery contracts are available."
      },
      {
        "componentId": "integrations.registry",
        "componentType": "integration-registry",
        "name": "Integration Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.11.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/integrations/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical provider-neutral integration and connector contracts are available."
      },
      {
        "componentId": "customer-cms-ui.metadata",
        "componentType": "customer-cms-ui-metadata",
        "name": "Customer CMS UI Metadata",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.20.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "metadata-only",
        "source": "registry/cms-ui/index.json",
        "compatibilityStatus": "unknown",
        "summary": "UI metadata exists; the final Customer CMS runtime has not been declared as a production runtime here. V1.1.0 Customer Access policy consumption remains a runtime integration responsibility."
      },
      {
        "componentId": "nextf-admin-ui.metadata",
        "componentType": "nextf-admin-ui-metadata",
        "name": "NEXT F Admin UI Metadata",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.21.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "metadata-only",
        "source": "registry/admin-ui/index.json",
        "compatibilityStatus": "unknown",
        "summary": "Admin UI metadata exists; the final NEXT F Admin runtime is outside this public static registry. V1.1.0 Customer Access policy consumption remains a runtime integration responsibility."
      },
      {
        "componentId": "site-runtime",
        "componentType": "site-runtime",
        "name": "NEXT F Site Runtime / SDK",
        "specificationVersion": null,
        "registryRelease": null,
        "runtimeImplemented": false,
        "runtimeEvidence": "not-yet-released",
        "source": null,
        "compatibilityStatus": "unknown",
        "summary": "Required runtime primitives are specified by Site Manifest contracts, but a formal Site Runtime/SDK release is not yet declared."
      },
      {
        "componentId": "api.commerce",
        "componentType": "api-group",
        "name": "Commerce API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/commerce.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "api.customer-cms",
        "componentType": "api-group",
        "name": "Customer CMS API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/customer-cms.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk. V1.1.0 Customer Access policy consumption remains a runtime integration responsibility."
      },
      {
        "componentId": "api.events",
        "componentType": "api-group",
        "name": "Event API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/events.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "api.nextf-admin",
        "componentType": "api-group",
        "name": "NEXT F Admin API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/nextf-admin.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk. V1.1.0 Customer Access policy consumption remains a runtime integration responsibility."
      },
      {
        "componentId": "api.public-content",
        "componentType": "api-group",
        "name": "Public Content API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/public-content.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "api.public-interaction",
        "componentType": "api-group",
        "name": "Public Interaction API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/public-interaction.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "api.webhooks",
        "componentType": "api-group",
        "name": "Webhook Management API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/webhooks.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "customer-access.policy-registry",
        "componentType": "customer-access-policy-registry",
        "name": "Customer Capability Access Policy Registry",
        "specificationVersion": "1.1.0",
        "registryRelease": "1.1.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/customer-access/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical policy metadata is available; consuming CMS, Admin and API runtimes must explicitly declare V1.1.0 policy awareness."
      }
    ]
  },
  "referencesiteassessments": {
    "registryVersion": "1.1.0",
    "targetVersion": "1.1.0",
    "generatedAt": "2026-09-11T00:00:00Z",
    "evidenceMode": "repository-reference-manifests",
    "productionData": false,
    "assessments": [
      {
        "id": "site_example_corporate",
        "name": "Example Corporate Website",
        "siteType": "corporate",
        "manifestSource": "registry/manifests/examples/corporate.json",
        "manifestRoute": "#/development/site-manifest?example=corporate",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_service",
        "name": "Example Service Website",
        "siteType": "service",
        "manifestSource": "registry/manifests/examples/service.json",
        "manifestRoute": "#/development/site-manifest?example=service",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_leadgen",
        "name": "Example Lead Generation Website",
        "siteType": "lead-generation",
        "manifestSource": "registry/manifests/examples/lead-generation.json",
        "manifestRoute": "#/development/site-manifest?example=lead-generation",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_commerce",
        "name": "Example Commerce Website",
        "siteType": "commerce",
        "manifestSource": "registry/manifests/examples/commerce.json",
        "manifestRoute": "#/development/site-manifest?example=commerce",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_docs",
        "name": "Example Documentation Website",
        "siteType": "documentation",
        "manifestSource": "registry/manifests/examples/documentation.json",
        "manifestRoute": "#/development/site-manifest?example=documentation",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_custom",
        "name": "Example Custom Website",
        "siteType": "custom",
        "manifestSource": "registry/manifests/examples/custom.json",
        "manifestRoute": "#/development/site-manifest?example=custom",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      }
    ]
  },
  "supportLevels": {
    "registryVersion": "1.1.0",
    "levels": [
      {
        "id": "current-development",
        "label": "Current development",
        "production": false,
        "newSitesAllowed": true,
        "description": "Current pre-1.0 development foundation release."
      },
      {
        "id": "historical-development",
        "label": "Historical development",
        "production": false,
        "newSitesAllowed": false,
        "description": "Exact previous pre-1.0 development release retained for comparison/migration work."
      },
      {
        "id": "production-current",
        "label": "Production current",
        "production": true,
        "newSitesAllowed": true,
        "description": "Current production support train release after formal Production Acceptance."
      },
      {
        "id": "production-supported",
        "label": "Production supported",
        "production": true,
        "newSitesAllowed": true,
        "description": "Supported production release within an explicit support window."
      },
      {
        "id": "maintenance",
        "label": "Maintenance",
        "production": true,
        "newSitesAllowed": false,
        "description": "Limited production maintenance; upgrade recommended."
      },
      {
        "id": "deprecated",
        "label": "Deprecated",
        "production": false,
        "newSitesAllowed": false,
        "description": "Support is ending/ended; migration required according to declared policy."
      },
      {
        "id": "unsupported",
        "label": "Unsupported",
        "production": false,
        "newSitesAllowed": false,
        "description": "No active support declaration."
      },
      {
        "id": "history-only",
        "label": "History only",
        "production": false,
        "newSitesAllowed": false,
        "description": "Release metadata exists but evidence/support is insufficient for runtime compatibility claims."
      }
    ]
  },
  "componentTypes": {
    "registryVersion": "1.1.0",
    "types": [
      {
        "id": "contract-registry",
        "label": "Contract Registry"
      },
      {
        "id": "site-manifest-spec",
        "label": "Site Manifest Specification"
      },
      {
        "id": "module-registry",
        "label": "Module Registry"
      },
      {
        "id": "permission-registry",
        "label": "Permission Registry"
      },
      {
        "id": "event-registry",
        "label": "Event Registry"
      },
      {
        "id": "webhook-registry",
        "label": "Webhook Registry"
      },
      {
        "id": "integration-registry",
        "label": "Integration Registry"
      },
      {
        "id": "api-group",
        "label": "API Group"
      },
      {
        "id": "customer-cms-ui-metadata",
        "label": "Customer CMS UI Metadata"
      },
      {
        "id": "nextf-admin-ui-metadata",
        "label": "NEXT F Admin UI Metadata"
      },
      {
        "id": "site-runtime",
        "label": "Site Runtime / SDK"
      },
      {
        "id": "reference-site",
        "label": "Reference Site"
      },
      {
        "id": "customer-access-policy-registry",
        "label": "Customer Access Policy Registry"
      }
    ]
  },
  "findingCodes": {
    "registryVersion": "1.1.0",
    "codes": [
      {
        "id": "contract.current",
        "dimension": "contract-release",
        "defaultStatus": "compatible"
      },
      {
        "id": "contract.upgrade-available",
        "dimension": "contract-release",
        "defaultStatus": "compatible-with-upgrade"
      },
      {
        "id": "contract.breaking-change",
        "dimension": "contract-release",
        "defaultStatus": "migration-required"
      },
      {
        "id": "contract.review-change",
        "dimension": "contract-release",
        "defaultStatus": "review-required"
      },
      {
        "id": "contract.history-unavailable",
        "dimension": "contract-release",
        "defaultStatus": "unknown"
      },
      {
        "id": "support.pre-1-development",
        "dimension": "contract-release",
        "defaultStatus": "unknown"
      },
      {
        "id": "manifest.valid",
        "dimension": "site-manifest",
        "defaultStatus": "compatible"
      },
      {
        "id": "manifest.invalid",
        "dimension": "site-manifest",
        "defaultStatus": "incompatible"
      },
      {
        "id": "module.unknown",
        "dimension": "modules",
        "defaultStatus": "incompatible"
      },
      {
        "id": "module.required-dependency-missing",
        "dimension": "modules",
        "defaultStatus": "incompatible"
      },
      {
        "id": "capability.unknown",
        "dimension": "capabilities",
        "defaultStatus": "incompatible"
      },
      {
        "id": "capability.reserved",
        "dimension": "capabilities",
        "defaultStatus": "incompatible"
      },
      {
        "id": "api.binding-supported",
        "dimension": "api",
        "defaultStatus": "compatible"
      },
      {
        "id": "api.binding-unknown",
        "dimension": "api",
        "defaultStatus": "unknown"
      },
      {
        "id": "permission.missing",
        "dimension": "permissions",
        "defaultStatus": "incompatible"
      },
      {
        "id": "event.missing",
        "dimension": "events",
        "defaultStatus": "incompatible"
      },
      {
        "id": "webhook.event-ineligible",
        "dimension": "webhooks",
        "defaultStatus": "incompatible"
      },
      {
        "id": "integration.connector-missing",
        "dimension": "integrations",
        "defaultStatus": "incompatible"
      },
      {
        "id": "runtime.not-released",
        "dimension": "site-runtime",
        "defaultStatus": "unknown"
      },
      {
        "id": "migration.required",
        "dimension": "data-migration",
        "defaultStatus": "migration-required"
      }
    ]
  },
  "releaseCompatibility": {
    "registryVersion": "1.1.0",
    "targetVersion": "1.1.0",
    "generatedAt": "2026-09-11T00:00:00Z",
    "scope": "consumer-relevant canonical Registry changes; tooling-only search/relationship/diff/compatibility definitions excluded from upgrade severity",
    "releases": [
      {
        "version": "0.1.0",
        "phase": 0,
        "exactSnapshotAvailable": false,
        "availability": "registry-missing",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-0-V0.1.0.zip",
        "diffRoute": null
      },
      {
        "version": "0.2.0",
        "phase": 1,
        "exactSnapshotAvailable": false,
        "availability": "registry-missing",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-1-V0.2.0.zip",
        "diffRoute": null
      },
      {
        "version": "0.3.0",
        "phase": 2,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 10,
          "deprecation": 0,
          "non-breaking": 2215,
          "documentation": 0,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-2-V0.3.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.3.0&to=1.1.0"
      },
      {
        "version": "0.4.0",
        "phase": 3,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 15,
          "deprecation": 0,
          "non-breaking": 2176,
          "documentation": 34,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-3-V0.4.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.4.0&to=1.1.0"
      },
      {
        "version": "0.5.0",
        "phase": 4,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 17,
          "deprecation": 0,
          "non-breaking": 2156,
          "documentation": 52,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-4-V0.5.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.5.0&to=1.1.0"
      },
      {
        "version": "0.6.0",
        "phase": 5,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 37,
          "deprecation": 0,
          "non-breaking": 2135,
          "documentation": 53,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-5-V0.6.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.6.0&to=1.1.0"
      },
      {
        "version": "0.7.0",
        "phase": 6,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 36,
          "deprecation": 0,
          "non-breaking": 2104,
          "documentation": 85,
          "metadata": 8,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-6-V0.7.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.7.0&to=1.1.0"
      },
      {
        "version": "0.8.0",
        "phase": 7,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 42,
          "deprecation": 0,
          "non-breaking": 2081,
          "documentation": 106,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-7-V0.8.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.8.0&to=1.1.0"
      },
      {
        "version": "0.9.0",
        "phase": 8,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 46,
          "deprecation": 0,
          "non-breaking": 2045,
          "documentation": 138,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-8-V0.9.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.9.0&to=1.1.0"
      },
      {
        "version": "0.10.0",
        "phase": 9,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 55,
          "deprecation": 0,
          "non-breaking": 2000,
          "documentation": 174,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-9-V0.10.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.10.0&to=1.1.0"
      },
      {
        "version": "0.11.0",
        "phase": 10,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 58,
          "deprecation": 0,
          "non-breaking": 1951,
          "documentation": 220,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-10-V0.11.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.11.0&to=1.1.0"
      },
      {
        "version": "0.12.0",
        "phase": 11,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 73,
          "deprecation": 0,
          "non-breaking": 1878,
          "documentation": 278,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-11-V0.12.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.12.0&to=1.1.0"
      },
      {
        "version": "0.13.0",
        "phase": 12,
        "exactSnapshotAvailable": false,
        "availability": "snapshot-unavailable",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": null,
        "diffRoute": null
      },
      {
        "version": "0.14.0",
        "phase": 13,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 78,
          "deprecation": 0,
          "non-breaking": 1601,
          "documentation": 550,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-13-V0.14.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.14.0&to=1.1.0"
      },
      {
        "version": "0.15.0",
        "phase": 14,
        "exactSnapshotAvailable": false,
        "availability": "snapshot-unavailable",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": null,
        "diffRoute": null
      },
      {
        "version": "0.16.0",
        "phase": 15,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 25,
          "deprecation": 0,
          "non-breaking": 1180,
          "documentation": 1024,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-15-V0.16.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.16.0&to=1.1.0"
      },
      {
        "version": "0.17.0",
        "phase": 16,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 2,
          "review-required": 29,
          "deprecation": 0,
          "non-breaking": 1157,
          "documentation": 1041,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-16-V0.17.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.17.0&to=1.1.0"
      },
      {
        "version": "0.18.0",
        "phase": 17,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "migration-required",
        "summary": "Breaking contract evidence requires migration before target adoption.",
        "changeSummary": "2327 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 96,
          "potentially-breaking": 6,
          "review-required": 31,
          "deprecation": 0,
          "non-breaking": 1142,
          "documentation": 1048,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-17-V0.18.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.18.0&to=1.1.0"
      },
      {
        "version": "0.19.0",
        "phase": 18,
        "exactSnapshotAvailable": false,
        "availability": "snapshot-unavailable",
        "supportLevel": "history-only",
        "productionEligible": false,
        "compatibilityStatus": "unknown",
        "summary": "Exact compatibility evidence is unavailable.",
        "changeSummary": "No exact comparison",
        "impactCounts": null,
        "sourceReference": null,
        "diffRoute": null
      },
      {
        "version": "0.20.0",
        "phase": 19,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2233 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 111,
          "deprecation": 0,
          "non-breaking": 717,
          "documentation": 1401,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-19-V0.20.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.20.0&to=1.1.0"
      },
      {
        "version": "0.21.0",
        "phase": 20,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 186,
          "deprecation": 0,
          "non-breaking": 554,
          "documentation": 1473,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-20-V0.21.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.21.0&to=1.1.0"
      },
      {
        "version": "0.22.0",
        "phase": 21,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 187,
          "deprecation": 0,
          "non-breaking": 481,
          "documentation": 1545,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-21-V0.22.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.22.0&to=1.1.0"
      },
      {
        "version": "0.23.0",
        "phase": 22,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-22-V0.23.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "version": "0.24.0",
        "phase": 23,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-23-V0.24.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.24.0&to=1.1.0"
      },
      {
        "version": "0.25.0",
        "phase": 24,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "NEXT-F-CONTRACTS-PHASE-24-V0.25.0.zip",
        "diffRoute": "#/lifecycle/diff?from=0.25.0&to=1.1.0"
      },
      {
        "version": "0.26.0",
        "phase": 25,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.26.0&to=1.1.0"
      },
      {
        "version": "0.27.0",
        "phase": 26,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2217 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 188,
          "deprecation": 0,
          "non-breaking": 472,
          "documentation": 1553,
          "metadata": 4,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.27.0&to=1.1.0"
      },
      {
        "version": "0.28.0",
        "phase": 27,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2189 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 196,
          "deprecation": 0,
          "non-breaking": 422,
          "documentation": 1556,
          "metadata": 15,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.28.0&to=1.1.0"
      },
      {
        "version": "0.29.0",
        "phase": 28,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2188 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 201,
          "deprecation": 0,
          "non-breaking": 409,
          "documentation": 1558,
          "metadata": 20,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.29.0&to=1.1.0"
      },
      {
        "version": "0.30.0",
        "phase": 29,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2187 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 209,
          "deprecation": 0,
          "non-breaking": 346,
          "documentation": 1608,
          "metadata": 24,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.30.0&to=1.1.0"
      },
      {
        "version": "0.31.0",
        "phase": 30,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2186 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 284,
          "deprecation": 0,
          "non-breaking": 263,
          "documentation": 1609,
          "metadata": 30,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.31.0&to=1.1.0"
      },
      {
        "version": "0.32.0",
        "phase": 31,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2185 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 292,
          "deprecation": 0,
          "non-breaking": 204,
          "documentation": 1610,
          "metadata": 79,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.32.0&to=1.1.0"
      },
      {
        "version": "0.33.0",
        "phase": 32,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2184 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 301,
          "deprecation": 0,
          "non-breaking": 136,
          "documentation": 1612,
          "metadata": 135,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.33.0&to=1.1.0"
      },
      {
        "version": "0.34.0",
        "phase": 33,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2183 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 303,
          "deprecation": 0,
          "non-breaking": 130,
          "documentation": 1615,
          "metadata": 135,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.34.0&to=1.1.0"
      },
      {
        "version": "0.35.0",
        "phase": 34,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2182 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 305,
          "deprecation": 0,
          "non-breaking": 124,
          "documentation": 1618,
          "metadata": 135,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.35.0&to=1.1.0"
      },
      {
        "version": "0.36.0",
        "phase": 34,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2181 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 307,
          "deprecation": 0,
          "non-breaking": 114,
          "documentation": 1619,
          "metadata": 141,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.36.0&to=1.1.0"
      },
      {
        "version": "0.37.0",
        "phase": 34,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "historical-development",
        "productionEligible": false,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2180 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 309,
          "deprecation": 0,
          "non-breaking": 108,
          "documentation": 1619,
          "metadata": 144,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=0.37.0&to=1.1.0"
      },
      {
        "version": "1.0.0",
        "phase": 37,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "production-supported",
        "productionEligible": true,
        "compatibilityStatus": "review-required",
        "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade.",
        "changeSummary": "2179 consumer-relevant changed/added/removed definitions",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 310,
          "deprecation": 0,
          "non-breaking": 102,
          "documentation": 1623,
          "metadata": 144,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": "#/lifecycle/diff?from=1.0.0&to=1.1.0"
      },
      {
        "version": "1.1.0",
        "phase": 34,
        "exactSnapshotAvailable": true,
        "availability": "exact",
        "supportLevel": "production-current",
        "productionEligible": true,
        "compatibilityStatus": "compatible",
        "summary": "This is the current coordinated Contract Registry release.",
        "changeSummary": "Current release",
        "impactCounts": {
          "breaking": 0,
          "potentially-breaking": 0,
          "review-required": 0,
          "deprecation": 0,
          "non-breaking": 0,
          "documentation": 0,
          "metadata": 0,
          "none": 0
        },
        "sourceReference": "registry/registry.json",
        "diffRoute": null
      }
    ]
  },
  "componentMatrix": {
    "registryVersion": "1.1.0",
    "targetContractVersion": "1.1.0",
    "generatedAt": "2026-09-11T00:00:00Z",
    "components": [
      {
        "componentId": "contracts.registry",
        "componentType": "contract-registry",
        "name": "NEXT F Contract Registry",
        "specificationVersion": "1.1.0",
        "registryRelease": "1.1.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "static-authoritative-repository",
        "source": "registry/registry.json",
        "compatibilityStatus": "compatible",
        "summary": "Current authoritative stable Contract Registry release."
      },
      {
        "componentId": "manifest.specification",
        "componentType": "site-manifest-spec",
        "name": "Site Manifest Specification",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.17.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "json-schema",
        "source": "registry/manifests/nextf-site-manifest.schema.json",
        "compatibilityStatus": "compatible",
        "summary": "Machine-readable Site Manifest schema is available."
      },
      {
        "componentId": "modules.registry",
        "componentType": "module-registry",
        "name": "Module Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.18.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/modules/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical Module and Capability registry is available."
      },
      {
        "componentId": "permissions.registry",
        "componentType": "permission-registry",
        "name": "Permission Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.16.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/permissions/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical Permission and role metadata is available."
      },
      {
        "componentId": "events.registry",
        "componentType": "event-registry",
        "name": "Event Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.15.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/events/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical Event definitions are available."
      },
      {
        "componentId": "webhooks.registry",
        "componentType": "webhook-registry",
        "name": "Webhook Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.15.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/webhooks/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical Webhook delivery contracts are available."
      },
      {
        "componentId": "integrations.registry",
        "componentType": "integration-registry",
        "name": "Integration Registry",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.11.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/integrations/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical provider-neutral integration and connector contracts are available."
      },
      {
        "componentId": "customer-cms-ui.metadata",
        "componentType": "customer-cms-ui-metadata",
        "name": "Customer CMS UI Metadata",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.20.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "metadata-only",
        "source": "registry/cms-ui/index.json",
        "compatibilityStatus": "unknown",
        "summary": "UI metadata exists; the final Customer CMS runtime has not been declared as a production runtime here. V1.1.0 Customer Access policy consumption remains a runtime integration responsibility."
      },
      {
        "componentId": "nextf-admin-ui.metadata",
        "componentType": "nextf-admin-ui-metadata",
        "name": "NEXT F Admin UI Metadata",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.21.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "metadata-only",
        "source": "registry/admin-ui/index.json",
        "compatibilityStatus": "unknown",
        "summary": "Admin UI metadata exists; the final NEXT F Admin runtime is outside this public static registry. V1.1.0 Customer Access policy consumption remains a runtime integration responsibility."
      },
      {
        "componentId": "site-runtime",
        "componentType": "site-runtime",
        "name": "NEXT F Site Runtime / SDK",
        "specificationVersion": null,
        "registryRelease": null,
        "runtimeImplemented": false,
        "runtimeEvidence": "not-yet-released",
        "source": null,
        "compatibilityStatus": "unknown",
        "summary": "Required runtime primitives are specified by Site Manifest contracts, but a formal Site Runtime/SDK release is not yet declared."
      },
      {
        "componentId": "api.commerce",
        "componentType": "api-group",
        "name": "Commerce API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/commerce.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "api.customer-cms",
        "componentType": "api-group",
        "name": "Customer CMS API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/customer-cms.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk. V1.1.0 Customer Access policy consumption remains a runtime integration responsibility."
      },
      {
        "componentId": "api.events",
        "componentType": "api-group",
        "name": "Event API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/events.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "api.nextf-admin",
        "componentType": "api-group",
        "name": "NEXT F Admin API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/nextf-admin.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk. V1.1.0 Customer Access policy consumption remains a runtime integration responsibility."
      },
      {
        "componentId": "api.public-content",
        "componentType": "api-group",
        "name": "Public Content API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/public-content.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "api.public-interaction",
        "componentType": "api-group",
        "name": "Public Interaction API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/public-interaction.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "api.webhooks",
        "componentType": "api-group",
        "name": "Webhook Management API",
        "specificationVersion": "1.0.0",
        "registryRelease": "0.19.0",
        "runtimeImplemented": false,
        "runtimeEvidence": "not-declared",
        "source": "registry/api/groups/webhooks.json",
        "compatibilityStatus": "unknown",
        "summary": "Canonical API contract exists; no deployed runtime implementation is declared by contract.nextf.lk."
      },
      {
        "componentId": "customer-access.policy-registry",
        "componentType": "customer-access-policy-registry",
        "name": "Customer Capability Access Policy Registry",
        "specificationVersion": "1.1.0",
        "registryRelease": "1.1.0",
        "runtimeImplemented": true,
        "runtimeEvidence": "machine-registry",
        "source": "registry/customer-access/index.json",
        "compatibilityStatus": "compatible",
        "summary": "Canonical policy metadata is available; consuming CMS, Admin and API runtimes must explicitly declare V1.1.0 policy awareness."
      }
    ]
  },
  "referenceSites": {
    "registryVersion": "1.1.0",
    "targetVersion": "1.1.0",
    "generatedAt": "2026-09-11T00:00:00Z",
    "evidenceMode": "repository-reference-manifests",
    "productionData": false,
    "assessments": [
      {
        "id": "site_example_corporate",
        "name": "Example Corporate Website",
        "siteType": "corporate",
        "manifestSource": "registry/manifests/examples/corporate.json",
        "manifestRoute": "#/development/site-manifest?example=corporate",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_service",
        "name": "Example Service Website",
        "siteType": "service",
        "manifestSource": "registry/manifests/examples/service.json",
        "manifestRoute": "#/development/site-manifest?example=service",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_leadgen",
        "name": "Example Lead Generation Website",
        "siteType": "lead-generation",
        "manifestSource": "registry/manifests/examples/lead-generation.json",
        "manifestRoute": "#/development/site-manifest?example=lead-generation",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_commerce",
        "name": "Example Commerce Website",
        "siteType": "commerce",
        "manifestSource": "registry/manifests/examples/commerce.json",
        "manifestRoute": "#/development/site-manifest?example=commerce",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_docs",
        "name": "Example Documentation Website",
        "siteType": "documentation",
        "manifestSource": "registry/manifests/examples/documentation.json",
        "manifestRoute": "#/development/site-manifest?example=documentation",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      },
      {
        "id": "site_example_custom",
        "name": "Example Custom Website",
        "siteType": "custom",
        "manifestSource": "registry/manifests/examples/custom.json",
        "manifestRoute": "#/development/site-manifest?example=custom",
        "sourceContractVersion": "0.23.0",
        "targetContractVersion": "1.1.0",
        "overallStatus": "review-required",
        "productionDecision": "not-approved-runtime-evidence",
        "summary": "Manifest structure resolves, but the 0.23.0 → 1.1.0 release path requires review and formal Site Runtime/SDK support is not yet declared.",
        "dimensions": [
          {
            "dimension": "contract-release",
            "status": "review-required",
            "required": true,
            "summary": "Exact history is available, but one or more consumer-relevant changes require review before upgrade."
          },
          {
            "dimension": "site-manifest",
            "status": "compatible",
            "required": true,
            "summary": "Manifest uses the supported 1.0.0 specification shape."
          },
          {
            "dimension": "modules",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Modules exist and required Module dependencies resolve."
          },
          {
            "dimension": "capabilities",
            "status": "compatible",
            "required": true,
            "summary": "All enabled Capabilities exist, belong to their Module and are not reserved."
          },
          {
            "dimension": "api",
            "status": "compatible",
            "required": true,
            "summary": "All declared API bindings resolve to exact canonical API versions."
          },
          {
            "dimension": "permissions",
            "status": "not-applicable",
            "required": false,
            "summary": "Site Manifest examples do not declare role assignments; runtime authorization is assessed by the Permission Registry."
          },
          {
            "dimension": "events",
            "status": "compatible",
            "required": true,
            "summary": "All declared canonical Events resolve."
          },
          {
            "dimension": "webhooks",
            "status": "not-applicable",
            "required": false,
            "summary": "No explicit Webhook subscription/runtime declaration is required by these reference manifests."
          },
          {
            "dimension": "integrations",
            "status": "compatible",
            "required": false,
            "summary": "All enabled Integration connector IDs resolve."
          },
          {
            "dimension": "customer-cms-ui",
            "status": "unknown",
            "required": false,
            "summary": "Customer CMS metadata exists, but a final production CMS runtime is not declared by this static registry."
          },
          {
            "dimension": "nextf-admin-ui",
            "status": "not-applicable",
            "required": false,
            "summary": "NEXT F Admin runtime compatibility is an internal platform concern, not a public reference Site assertion."
          },
          {
            "dimension": "site-runtime",
            "status": "unknown",
            "required": true,
            "summary": "All five runtime primitives are declared by the Manifest, but no formal Site Runtime/SDK release/version compatibility declaration exists yet."
          },
          {
            "dimension": "data-migration",
            "status": "review-required",
            "required": false,
            "summary": "Upgrade path requires explicit review/migration planning."
          }
        ],
        "findings": [],
        "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.1.0"
      }
    ]
  },
  "registryVersion": "1.1.0",
  "sourceHashes": {
    "registry/compatibility/index.json": "cc32d2affd33aae2fbbf34286ca2bc384ddd4ad12f1b4df86bc96efadeecd145",
    "registry/compatibility/statuses.json": "9a0cd11de5c1bf90304135473c1bb473b73f24493cec4ad2c075ffa06a433c26",
    "registry/compatibility/support-levels.json": "36f8e72df374fd6aee0e44525667efc0edab4b1854d0343ebaf8a5d12cf88553",
    "registry/compatibility/dimensions.json": "54c0c9da586cfcc1a0ed7c403980885862c5169f8d1d3904f3d18bbc84270c36",
    "registry/compatibility/component-types.json": "4d873ed312aea99db83fe9957eabd8bda6db6b49073cd90e4fe4a1d0a25ee06f",
    "registry/compatibility/finding-codes.json": "f8c8a4d6bacc243d9757e303da74b75b7e786281fc75c9d0018c064d274daa1f",
    "registry/compatibility/policy.json": "8040258a2cc0de142d70a890133965f18bb6dfbea0f543f33d6060e29e5c6ee6",
    "registry/compatibility/release-compatibility.json": "544394375850e86dae2656804b62fbf2aa7c0897c42ce79b310a58cad9bb6bd9",
    "registry/compatibility/component-matrix.json": "0952044055cd390f9ca03133a9624a120320f1bcce1f6b21fd507f5d2eb9912c",
    "registry/compatibility/reference-site-assessments.json": "b1318eef04bd256e5a7bd4423c18a4aa49108598e861b7842fa93f1a537a9f8f"
  },
  "definitions": [
    {
      "$id": "compatibility.apiBindingCheck",
      "name": "API Binding Compatibility Check",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Result for one exact Site API binding.",
      "category": "compatibility",
      "fields": [
        {
          "key": "groupId",
          "required": true,
          "nullable": false,
          "description": "Canonical API group.",
          "primitive": "fields.text"
        },
        {
          "key": "requestedVersion",
          "required": true,
          "nullable": false,
          "description": "Exact requested API version.",
          "primitive": "fields.text"
        },
        {
          "key": "availableVersion",
          "required": false,
          "nullable": true,
          "description": "Registry API version.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Compatibility result.",
          "primitive": "fields.select"
        },
        {
          "key": "contractVersion",
          "required": true,
          "nullable": false,
          "description": "Contract target.",
          "primitive": "fields.text"
        },
        {
          "key": "message",
          "required": true,
          "nullable": false,
          "description": "Result message.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "groupId uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "status uses fields.select."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.assessment",
      "name": "Compatibility Assessment",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Aggregates multidimensional compatibility evidence for one subject and target.",
      "category": "compatibility",
      "fields": [
        {
          "key": "assessmentId",
          "required": true,
          "nullable": false,
          "description": "Assessment identity.",
          "primitive": "fields.text"
        },
        {
          "key": "subjectType",
          "required": true,
          "nullable": false,
          "description": "Site, release or component subject.",
          "primitive": "fields.select"
        },
        {
          "key": "subjectId",
          "required": true,
          "nullable": false,
          "description": "Non-secret subject identifier.",
          "primitive": "fields.text"
        },
        {
          "key": "sourceContractVersion",
          "required": false,
          "nullable": true,
          "description": "Pinned/source Contract Version.",
          "primitive": "fields.text"
        },
        {
          "key": "targetContractVersion",
          "required": true,
          "nullable": false,
          "description": "Target Contract Version.",
          "primitive": "fields.text"
        },
        {
          "key": "overallStatus",
          "required": true,
          "nullable": false,
          "description": "Aggregated compatibility status.",
          "primitive": "fields.select"
        },
        {
          "key": "dimensions",
          "required": true,
          "nullable": false,
          "description": "Dimension results.",
          "primitive": "fields.json"
        },
        {
          "key": "findings",
          "required": false,
          "nullable": true,
          "description": "Compatibility findings.",
          "primitive": "fields.json"
        },
        {
          "key": "evaluatedAt",
          "required": true,
          "nullable": false,
          "description": "Assessment generation time.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "evidenceMode",
          "required": true,
          "nullable": false,
          "description": "Exact/reference/runtime evidence mode.",
          "primitive": "fields.select"
        },
        {
          "key": "productionDecision",
          "required": true,
          "nullable": false,
          "description": "Whether this result can be used for production approval.",
          "primitive": "fields.select"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "assessmentId uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "subjectType uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.json",
          "description": "dimensions uses fields.json."
        },
        {
          "type": "uses",
          "target": "fields.dateTime",
          "description": "evaluatedAt uses fields.dateTime."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.component",
      "name": "Compatibility Component",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Identifies a canonical platform surface assessed for compatibility.",
      "category": "compatibility",
      "fields": [
        {
          "key": "componentId",
          "required": true,
          "nullable": false,
          "description": "Stable component identifier.",
          "primitive": "fields.slug"
        },
        {
          "key": "componentType",
          "required": true,
          "nullable": false,
          "description": "Component type vocabulary.",
          "primitive": "fields.select"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Display name.",
          "primitive": "fields.text"
        },
        {
          "key": "specificationVersion",
          "required": false,
          "nullable": true,
          "description": "Own specification/API version.",
          "primitive": "fields.text"
        },
        {
          "key": "registryRelease",
          "required": false,
          "nullable": true,
          "description": "Registry release that introduced/published the current definition.",
          "primitive": "fields.text"
        },
        {
          "key": "runtimeImplemented",
          "required": true,
          "nullable": false,
          "description": "Whether an actual runtime implementation is declared.",
          "primitive": "fields.boolean"
        },
        {
          "key": "source",
          "required": false,
          "nullable": true,
          "description": "Authoritative non-secret source reference.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.slug",
          "description": "componentId uses fields.slug."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "componentType uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "name uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "runtimeImplemented uses fields.boolean."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.componentConstraint",
      "name": "Component Compatibility Constraint",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Declares a compatibility requirement between two canonical surfaces.",
      "category": "compatibility",
      "fields": [
        {
          "key": "sourceComponentId",
          "required": true,
          "nullable": false,
          "description": "Source component.",
          "primitive": "fields.slug"
        },
        {
          "key": "targetComponentId",
          "required": true,
          "nullable": false,
          "description": "Required/related component.",
          "primitive": "fields.slug"
        },
        {
          "key": "relationship",
          "required": true,
          "nullable": false,
          "description": "Compatibility relationship.",
          "primitive": "fields.select"
        },
        {
          "key": "versionRange",
          "required": false,
          "nullable": true,
          "description": "Allowed version range.",
          "schema": "compatibility.versionRange"
        },
        {
          "key": "required",
          "required": true,
          "nullable": false,
          "description": "Whether failure blocks the source.",
          "primitive": "fields.boolean"
        },
        {
          "key": "notes",
          "required": false,
          "nullable": true,
          "description": "Constraint notes.",
          "primitive": "fields.textarea"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.slug",
          "description": "sourceComponentId uses fields.slug."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "relationship uses fields.select."
        },
        {
          "type": "composes",
          "target": "compatibility.versionRange",
          "description": "versionRange reuses compatibility.versionRange."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "required uses fields.boolean."
        },
        {
          "type": "uses",
          "target": "fields.textarea",
          "description": "notes uses fields.textarea."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.dimension",
      "name": "Compatibility Dimension",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Describes one independently assessed compatibility dimension.",
      "category": "compatibility",
      "fields": [
        {
          "key": "dimensionId",
          "required": true,
          "nullable": false,
          "description": "Controlled dimension ID.",
          "primitive": "fields.slug"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Compatibility status.",
          "primitive": "fields.select"
        },
        {
          "key": "required",
          "required": true,
          "nullable": false,
          "description": "Whether this dimension blocks overall compatibility.",
          "primitive": "fields.boolean"
        },
        {
          "key": "summary",
          "required": true,
          "nullable": false,
          "description": "Human-readable result.",
          "primitive": "fields.text"
        },
        {
          "key": "evidence",
          "required": false,
          "nullable": true,
          "description": "Non-secret bounded evidence references.",
          "primitive": "fields.json"
        },
        {
          "key": "findingIds",
          "required": false,
          "nullable": true,
          "description": "Related finding IDs.",
          "primitive": "fields.multiSelect"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.slug",
          "description": "dimensionId uses fields.slug."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "status uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "required uses fields.boolean."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "summary uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.json",
          "description": "evidence uses fields.json."
        },
        {
          "type": "uses",
          "target": "fields.multiSelect",
          "description": "findingIds uses fields.multiSelect."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.eventPermissionCheck",
      "name": "Event and Permission Compatibility Check",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Normalized check for canonical Event or Permission references.",
      "category": "compatibility",
      "fields": [
        {
          "key": "kind",
          "required": true,
          "nullable": false,
          "description": "event or permission.",
          "primitive": "fields.select"
        },
        {
          "key": "identifier",
          "required": true,
          "nullable": false,
          "description": "Canonical identifier.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Compatibility result.",
          "primitive": "fields.select"
        },
        {
          "key": "existsInTarget",
          "required": true,
          "nullable": false,
          "description": "Whether target contains the identifier.",
          "primitive": "fields.boolean"
        },
        {
          "key": "message",
          "required": true,
          "nullable": false,
          "description": "Result message.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "kind uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "identifier uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "existsInTarget uses fields.boolean."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.finding",
      "name": "Compatibility Finding",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Normalized evidence/action item emitted by a compatibility assessment.",
      "category": "compatibility",
      "fields": [
        {
          "key": "findingId",
          "required": true,
          "nullable": false,
          "description": "Stable finding instance ID.",
          "primitive": "fields.text"
        },
        {
          "key": "code",
          "required": true,
          "nullable": false,
          "description": "Canonical finding code.",
          "primitive": "fields.select"
        },
        {
          "key": "dimension",
          "required": true,
          "nullable": false,
          "description": "Compatibility dimension.",
          "primitive": "fields.select"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Result status.",
          "primitive": "fields.select"
        },
        {
          "key": "blocking",
          "required": true,
          "nullable": false,
          "description": "Whether this finding blocks target adoption.",
          "primitive": "fields.boolean"
        },
        {
          "key": "message",
          "required": true,
          "nullable": false,
          "description": "Human-readable explanation.",
          "primitive": "fields.textarea"
        },
        {
          "key": "affectedIds",
          "required": false,
          "nullable": true,
          "description": "Affected canonical identifiers.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "evidenceRefs",
          "required": false,
          "nullable": true,
          "description": "Authoritative source references.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "recommendedAction",
          "required": false,
          "nullable": true,
          "description": "Action when remediation/review is needed.",
          "primitive": "fields.textarea"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "findingId uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "code uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "blocking uses fields.boolean."
        },
        {
          "type": "uses",
          "target": "fields.textarea",
          "description": "message uses fields.textarea."
        },
        {
          "type": "uses",
          "target": "fields.multiSelect",
          "description": "affectedIds uses fields.multiSelect."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.matrix",
      "name": "Compatibility Matrix",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "A bounded matrix of compatibility results across releases or platform surfaces.",
      "category": "compatibility",
      "fields": [
        {
          "key": "matrixId",
          "required": true,
          "nullable": false,
          "description": "Stable matrix ID.",
          "primitive": "fields.slug"
        },
        {
          "key": "title",
          "required": true,
          "nullable": false,
          "description": "Matrix title.",
          "primitive": "fields.text"
        },
        {
          "key": "generatedForRelease",
          "required": true,
          "nullable": false,
          "description": "Target Registry release.",
          "primitive": "fields.text"
        },
        {
          "key": "rows",
          "required": true,
          "nullable": false,
          "description": "Matrix rows.",
          "primitive": "fields.json"
        },
        {
          "key": "columns",
          "required": false,
          "nullable": true,
          "description": "Optional matrix columns.",
          "primitive": "fields.json"
        },
        {
          "key": "cells",
          "required": true,
          "nullable": false,
          "description": "Compatibility cells.",
          "primitive": "fields.json"
        },
        {
          "key": "generatedAt",
          "required": true,
          "nullable": false,
          "description": "Generation time.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.slug",
          "description": "matrixId uses fields.slug."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "title uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.json",
          "description": "rows uses fields.json."
        },
        {
          "type": "uses",
          "target": "fields.dateTime",
          "description": "generatedAt uses fields.dateTime."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.matrixCell",
      "name": "Compatibility Matrix Cell",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "One source-target cell in a compatibility matrix.",
      "category": "compatibility",
      "fields": [
        {
          "key": "sourceId",
          "required": true,
          "nullable": false,
          "description": "Source component/release.",
          "primitive": "fields.text"
        },
        {
          "key": "targetId",
          "required": true,
          "nullable": false,
          "description": "Target component/release.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Compatibility result.",
          "primitive": "fields.select"
        },
        {
          "key": "evidenceMode",
          "required": true,
          "nullable": false,
          "description": "Evidence mode.",
          "primitive": "fields.select"
        },
        {
          "key": "summary",
          "required": true,
          "nullable": false,
          "description": "Short explanation.",
          "primitive": "fields.text"
        },
        {
          "key": "constraints",
          "required": false,
          "nullable": true,
          "description": "Applicable constraints.",
          "primitive": "fields.json"
        },
        {
          "key": "links",
          "required": false,
          "nullable": true,
          "description": "Diff/registry/source links.",
          "primitive": "fields.json"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "sourceId uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "status uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.json",
          "description": "constraints uses fields.json."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.moduleCapabilityCheck",
      "name": "Module and Capability Compatibility Check",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Result for Module ownership, dependencies and Capability gates.",
      "category": "compatibility",
      "fields": [
        {
          "key": "moduleId",
          "required": true,
          "nullable": false,
          "description": "Canonical Module.",
          "primitive": "fields.text"
        },
        {
          "key": "capabilityId",
          "required": false,
          "nullable": true,
          "description": "Canonical Capability.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Compatibility result.",
          "primitive": "fields.select"
        },
        {
          "key": "requiredDependencies",
          "required": false,
          "nullable": true,
          "description": "Required dependencies.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "missingDependencies",
          "required": false,
          "nullable": true,
          "description": "Unresolved dependencies.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "reserved",
          "required": false,
          "nullable": true,
          "description": "Whether capability is reserved.",
          "primitive": "fields.boolean"
        },
        {
          "key": "message",
          "required": true,
          "nullable": false,
          "description": "Result message.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "moduleId uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "status uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.multiSelect",
          "description": "requiredDependencies uses fields.multiSelect."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "reserved uses fields.boolean."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.releaseSupport",
      "name": "Release Support Descriptor",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Describes support posture for one coordinated Contract Registry release.",
      "category": "compatibility",
      "fields": [
        {
          "key": "releaseVersion",
          "required": true,
          "nullable": false,
          "description": "Exact coordinated Registry release.",
          "primitive": "fields.text"
        },
        {
          "key": "phase",
          "required": false,
          "nullable": true,
          "description": "Phase number when known.",
          "primitive": "fields.integer"
        },
        {
          "key": "supportLevel",
          "required": true,
          "nullable": false,
          "description": "Support level from compatibility support vocabulary.",
          "primitive": "fields.select"
        },
        {
          "key": "exactSnapshotAvailable",
          "required": true,
          "nullable": false,
          "description": "Whether exact Registry evidence is available.",
          "primitive": "fields.boolean"
        },
        {
          "key": "productionEligible",
          "required": true,
          "nullable": false,
          "description": "Whether this release belongs to a declared production support train.",
          "primitive": "fields.boolean"
        },
        {
          "key": "supportStartsAt",
          "required": false,
          "nullable": true,
          "description": "Explicit support start when declared.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "supportEndsAt",
          "required": false,
          "nullable": true,
          "description": "Explicit support end when declared.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "notes",
          "required": false,
          "nullable": true,
          "description": "Non-secret support notes.",
          "primitive": "fields.textarea"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "releaseVersion uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.integer",
          "description": "phase uses fields.integer."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "supportLevel uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "exactSnapshotAvailable uses fields.boolean."
        },
        {
          "type": "uses",
          "target": "fields.dateTime",
          "description": "supportStartsAt uses fields.dateTime."
        },
        {
          "type": "uses",
          "target": "fields.textarea",
          "description": "notes uses fields.textarea."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.runtimeDeclaration",
      "name": "Runtime Compatibility Declaration",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Declares an implemented runtime surface and the exact contracts/specifications it supports.",
      "category": "compatibility",
      "fields": [
        {
          "key": "runtimeId",
          "required": true,
          "nullable": false,
          "description": "Stable runtime identifier.",
          "primitive": "fields.slug"
        },
        {
          "key": "runtimeVersion",
          "required": true,
          "nullable": false,
          "description": "Exact runtime release version.",
          "primitive": "fields.text"
        },
        {
          "key": "supportedContractVersions",
          "required": true,
          "nullable": false,
          "description": "Explicit supported Contract Versions.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "supportedManifestVersions",
          "required": true,
          "nullable": false,
          "description": "Supported Site Manifest schema versions.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "supportedApiVersions",
          "required": false,
          "nullable": true,
          "description": "API group/version support.",
          "primitive": "fields.json"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Runtime release status.",
          "primitive": "fields.select"
        },
        {
          "key": "source",
          "required": true,
          "nullable": false,
          "description": "Authoritative runtime release source.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.slug",
          "description": "runtimeId uses fields.slug."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "runtimeVersion uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.multiSelect",
          "description": "supportedContractVersions uses fields.multiSelect."
        },
        {
          "type": "uses",
          "target": "fields.json",
          "description": "supportedApiVersions uses fields.json."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "status uses fields.select."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.siteSnapshot",
      "name": "Site Compatibility Snapshot",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Non-secret Site declaration projected from nextf.site.json for compatibility evaluation.",
      "category": "compatibility",
      "fields": [
        {
          "key": "siteType",
          "required": true,
          "nullable": false,
          "description": "Declared Site type.",
          "primitive": "fields.select"
        },
        {
          "key": "contractVersion",
          "required": true,
          "nullable": false,
          "description": "Pinned Contract Version.",
          "primitive": "fields.text"
        },
        {
          "key": "manifestSchemaVersion",
          "required": true,
          "nullable": false,
          "description": "Manifest schema/specification version.",
          "primitive": "fields.text"
        },
        {
          "key": "modules",
          "required": true,
          "nullable": false,
          "description": "Enabled Modules.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "capabilities",
          "required": false,
          "nullable": true,
          "description": "Enabled Capabilities.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "apiBindings",
          "required": false,
          "nullable": true,
          "description": "Exact API bindings.",
          "primitive": "fields.json"
        },
        {
          "key": "events",
          "required": false,
          "nullable": true,
          "description": "Declared canonical Events.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "trackingEvents",
          "required": false,
          "nullable": true,
          "description": "Declared tracking observations.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "integrations",
          "required": false,
          "nullable": true,
          "description": "Declared connectors.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "runtimeCapabilities",
          "required": true,
          "nullable": false,
          "description": "Mandatory Site Runtime primitives.",
          "primitive": "fields.multiSelect"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "siteType uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "contractVersion uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.multiSelect",
          "description": "modules uses fields.multiSelect."
        },
        {
          "type": "uses",
          "target": "fields.json",
          "description": "apiBindings uses fields.json."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.supportWindow",
      "name": "Compatibility Support Window",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Explicit dated support window; never inferred from SemVer.",
      "category": "compatibility",
      "fields": [
        {
          "key": "releaseOrRange",
          "required": true,
          "nullable": false,
          "description": "Release/range covered.",
          "primitive": "fields.text"
        },
        {
          "key": "supportLevel",
          "required": true,
          "nullable": false,
          "description": "Declared support level.",
          "primitive": "fields.select"
        },
        {
          "key": "startsAt",
          "required": true,
          "nullable": false,
          "description": "Window start.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "endsAt",
          "required": false,
          "nullable": true,
          "description": "Window end when finite.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "securityFixes",
          "required": true,
          "nullable": false,
          "description": "Whether security fixes are included.",
          "primitive": "fields.boolean"
        },
        {
          "key": "compatibilityFixes",
          "required": true,
          "nullable": false,
          "description": "Whether compatibility fixes are included.",
          "primitive": "fields.boolean"
        },
        {
          "key": "newSiteAdoption",
          "required": true,
          "nullable": false,
          "description": "Whether new Sites may adopt this version.",
          "primitive": "fields.boolean"
        },
        {
          "key": "notes",
          "required": false,
          "nullable": true,
          "description": "Support policy notes.",
          "primitive": "fields.textarea"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "releaseOrRange uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "supportLevel uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.dateTime",
          "description": "startsAt uses fields.dateTime."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "securityFixes uses fields.boolean."
        },
        {
          "type": "uses",
          "target": "fields.textarea",
          "description": "notes uses fields.textarea."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.upgradePath",
      "name": "Compatibility Upgrade Path",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Describes an explicit non-executing path from a source release to a target.",
      "category": "compatibility",
      "fields": [
        {
          "key": "sourceVersion",
          "required": true,
          "nullable": false,
          "description": "Source Contract Version.",
          "primitive": "fields.text"
        },
        {
          "key": "targetVersion",
          "required": true,
          "nullable": false,
          "description": "Target Contract Version.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Upgrade readiness.",
          "primitive": "fields.select"
        },
        {
          "key": "intermediateVersions",
          "required": false,
          "nullable": true,
          "description": "Required intermediate releases if any.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "diffRoute",
          "required": false,
          "nullable": true,
          "description": "Contract Diff route.",
          "primitive": "fields.url"
        },
        {
          "key": "migrationRefs",
          "required": false,
          "nullable": true,
          "description": "Migration references when available.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "reviewRequirements",
          "required": false,
          "nullable": true,
          "description": "Required manual review gates.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "validationRequired",
          "required": true,
          "nullable": false,
          "description": "Target validation requirement.",
          "primitive": "fields.boolean"
        },
        {
          "key": "automatic",
          "required": true,
          "nullable": false,
          "description": "Must remain false for NEXT F contract upgrades.",
          "primitive": "fields.boolean"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "sourceVersion uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.select",
          "description": "status uses fields.select."
        },
        {
          "type": "uses",
          "target": "fields.multiSelect",
          "description": "intermediateVersions uses fields.multiSelect."
        },
        {
          "type": "uses",
          "target": "fields.url",
          "description": "diffRoute uses fields.url."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "validationRequired uses fields.boolean."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    },
    {
      "$id": "compatibility.versionRange",
      "name": "Version Range",
      "version": "1.1.0",
      "status": "stable",
      "domain": "lifecycle",
      "type": "schema",
      "description": "Represents an explicit compatibility range without using a floating latest value.",
      "category": "compatibility",
      "fields": [
        {
          "key": "minimum",
          "required": false,
          "nullable": true,
          "description": "Inclusive minimum version when bounded.",
          "primitive": "fields.text"
        },
        {
          "key": "maximum",
          "required": false,
          "nullable": true,
          "description": "Inclusive maximum version when bounded.",
          "primitive": "fields.text"
        },
        {
          "key": "includeMinimum",
          "required": true,
          "nullable": false,
          "description": "Whether minimum is inclusive.",
          "primitive": "fields.boolean"
        },
        {
          "key": "includeMaximum",
          "required": true,
          "nullable": false,
          "description": "Whether maximum is inclusive.",
          "primitive": "fields.boolean"
        },
        {
          "key": "exactVersions",
          "required": false,
          "nullable": true,
          "description": "Explicit exact versions where a range is not sufficient.",
          "primitive": "fields.multiSelect"
        }
      ],
      "relationships": [
        {
          "type": "implements",
          "target": "compatibility.compatibilityCenterStandard",
          "description": "Governed by the Compatibility Center Standard."
        },
        {
          "type": "uses",
          "target": "fields.text",
          "description": "minimum uses fields.text."
        },
        {
          "type": "uses",
          "target": "fields.boolean",
          "description": "includeMinimum uses fields.boolean."
        },
        {
          "type": "uses",
          "target": "fields.multiSelect",
          "description": "exactVersions uses fields.multiSelect."
        }
      ],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Compatibility metadata and evidence must not contain secrets or customer-sensitive payloads."
        }
      ],
      "cms": {
        "customerVisible": false,
        "adminVisible": true,
        "customerEditable": false,
        "adminEditable": false
      },
      "publicDelivery": false
    }
  ]
};
