// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/deprecations/*
export const GENERATED_DEPRECATIONS = {
  "registryVersion": "1.2.0",
  "index": {
    "registryVersion": "1.2.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Deprecation Registry",
    "description": "Authoritative lifecycle-management records for deprecated and removed NEXT F Registry definitions.",
    "currentVersion": "1.2.0",
    "recordCount": 0,
    "activeDeprecationCount": 0,
    "removedCount": 0,
    "upcomingRemovalCount": 0,
    "domains": [],
    "modules": [],
    "types": [],
    "severities": [],
    "records": [],
    "sources": {
      "policy": "registry/deprecations/policy.json",
      "lifecycleStates": "registry/deprecations/lifecycle-states.json",
      "severityLevels": "registry/deprecations/severity-levels.json",
      "deprecationSchema": "registry/deprecations/deprecation.schema.json",
      "replacementSchema": "registry/deprecations/replacement.schema.json",
      "recordDirectory": "registry/deprecations/records/"
    }
  },
  "policy": {
    "registryVersion": "1.2.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Deprecation Policy",
    "authoritativeRecordDirectory": "registry/deprecations/records/",
    "generatedIndex": "registry/deprecations/index.json",
    "lifecycleStates": [
      "experimental",
      "draft",
      "stable",
      "deprecated",
      "removed"
    ],
    "rules": {
      "stableRemovalRequiresMajorLifecycleTransition": true,
      "deprecatedRemainsDiscoverableUntilSupportEnds": true,
      "replacementMustBeExplicitWhenKnown": true,
      "noReplacementMustBeExplicit": true,
      "newWorkPrefersReplacement": true,
      "existingSitesNeverAutoUpgrade": true,
      "removedItemsRemainHistoricallyDiscoverable": true,
      "deprecatedIdentifiersRemainMachineIdentifiable": true,
      "unknownSupportDataMustRemainUnknown": true,
      "noFabricatedSupportDates": true
    },
    "siteUpgradePolicy": "explicit-review-and-validation",
    "productionSupportDeclared": false
  },
  "lifecycleStates": {
    "registryVersion": "1.2.0",
    "schemaVersion": "1.0.0",
    "title": "Canonical Lifecycle States Projection",
    "description": "Generated projection of registry/statuses.json for Deprecation lifecycle tooling; registry/statuses.json remains the canonical vocabulary source.",
    "source": "registry/statuses.json",
    "states": [
      {
        "id": "experimental",
        "label": "Experimental",
        "description": "May change without compatibility guarantees."
      },
      {
        "id": "draft",
        "label": "Draft",
        "description": "Under review and not yet production-stable."
      },
      {
        "id": "stable",
        "label": "Stable",
        "description": "Approved for the documented production use and compatibility policy."
      },
      {
        "id": "deprecated",
        "label": "Deprecated",
        "description": "Supported temporarily but should not be used for new implementations."
      },
      {
        "id": "removed",
        "label": "Removed",
        "description": "Not present in the active contract version."
      }
    ]
  },
  "severityLevels": {
    "registryVersion": "1.2.0",
    "schemaVersion": "1.0.0",
    "title": "Deprecation Severity Levels",
    "levels": [
      {
        "id": "info",
        "label": "Info",
        "rank": 10
      },
      {
        "id": "low",
        "label": "Low",
        "rank": 20
      },
      {
        "id": "medium",
        "label": "Medium",
        "rank": 30
      },
      {
        "id": "high",
        "label": "High",
        "rank": 40
      },
      {
        "id": "critical",
        "label": "Critical",
        "rank": 50
      }
    ]
  },
  "records": [],
  "definitions": [
    {
      "$id": "deprecations.deprecationRecord",
      "name": "Deprecation Record",
      "version": "1.2.0",
      "status": "stable",
      "phase": 28,
      "description": "Canonical lifecycle record for one deprecated or removed Registry definition.",
      "domain": "deprecations",
      "type": "schema",
      "tags": [
        "deprecations",
        "lifecycle",
        "phase-28"
      ]
    },
    {
      "$id": "deprecations.impactScope",
      "name": "Deprecation Impact Scope",
      "version": "1.2.0",
      "status": "stable",
      "phase": 28,
      "description": "Affected Site/module/API and migration dimensions for lifecycle impact.",
      "domain": "deprecations",
      "type": "schema",
      "tags": [
        "deprecations",
        "lifecycle",
        "phase-28"
      ]
    },
    {
      "$id": "deprecations.lifecycleState",
      "name": "Lifecycle State",
      "version": "1.2.0",
      "status": "stable",
      "phase": 28,
      "description": "Canonical experimental, draft, stable, deprecated and removed state vocabulary.",
      "domain": "deprecations",
      "type": "schema",
      "tags": [
        "deprecations",
        "lifecycle",
        "phase-28"
      ]
    },
    {
      "$id": "deprecations.replacementReference",
      "name": "Replacement Reference",
      "version": "1.2.0",
      "status": "stable",
      "phase": 28,
      "description": "Explicit replacement, no-replacement, or unknown replacement disposition for a deprecation.",
      "domain": "deprecations",
      "type": "schema",
      "tags": [
        "deprecations",
        "lifecycle",
        "phase-28"
      ]
    },
    {
      "$id": "deprecations.supportWindow",
      "name": "Deprecation Support Window",
      "version": "1.2.0",
      "status": "stable",
      "phase": 28,
      "description": "Optional authoritative support boundary; unknown remains explicit when not established.",
      "domain": "deprecations",
      "type": "schema",
      "tags": [
        "deprecations",
        "lifecycle",
        "phase-28"
      ]
    }
  ],
  "sourceHashes": {
    "registry/deprecations/index.json": "3ab2495261394e1706796b4589e75a332306c7b388ce16b0dd11c5ba56c670ee",
    "registry/deprecations/policy.json": "cb8eeb3cf3e8eb6e70bad25c2d24336ebc0f762247f2ada2af51c37c08a3d47e",
    "registry/deprecations/lifecycle-states.json": "e58f9d7b8a82f96aa04ba4ff04b79c5d7b10808a9412cf0c02d11295647865c5",
    "registry/deprecations/severity-levels.json": "f269f33cb6d0e85370342505ada920dea05b1b57e637319b22ec6b6d79e81637",
    "registry/deprecations/deprecation.schema.json": "5b86aebb5e58afa0eef0a19a1ba2bc051153c1995cb0c06cf8ef80f20baee71e",
    "registry/deprecations/replacement.schema.json": "7f8c4b4c76322a38c8b4899dc5d15283c8ea384622dccd6482a459822c9c6b81",
    "registry/deprecations/definitions/deprecationRecord.json": "034f1d15c470fc390c007d8b9ff7da01317af8a0bc9a894ced9a810939eafd03",
    "registry/deprecations/definitions/impactScope.json": "5d28085eb98cb65d82827b28b398d1b98348a4d131068cb7545845fb2b755931",
    "registry/deprecations/definitions/lifecycleState.json": "b1890629353cea5a01dfeace9e21683f2db3b6abebe0e5c5e3b2d3e6a66a9f25",
    "registry/deprecations/definitions/replacementReference.json": "c7e2897c44cb8616d0565d8ab9e210b90435845ead1cae5acae8d16b7b7aab4e",
    "registry/deprecations/definitions/supportWindow.json": "e0ef7bf89b67f2f5c7e9894895022d452ba80e4345f3519a42e143b73559ce89"
  }
};
