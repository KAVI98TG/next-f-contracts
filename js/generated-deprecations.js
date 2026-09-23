// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/deprecations/*
export const GENERATED_DEPRECATIONS = {
  "registryVersion": "1.4.0",
  "index": {
    "registryVersion": "1.4.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Deprecation Registry",
    "description": "Authoritative lifecycle-management records for deprecated and removed NEXT F Registry definitions.",
    "currentVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
    "registry/deprecations/index.json": "41565b560a047f9d96d25cfffcebd779f0860c6692f7ea02aaa24dfb843ac1e2",
    "registry/deprecations/policy.json": "822ac5604e3dc72740055cfb73f8d803e62efc629b0ac48f96b41e09aad1bf4c",
    "registry/deprecations/lifecycle-states.json": "437959f02c8ad0939c6d010c97adda9d7fee7149f08b54cb071522bdc44b3870",
    "registry/deprecations/severity-levels.json": "732278e04b03f70190aba27eb2169b914848f23f086e7a7a819acefb86a8ad51",
    "registry/deprecations/deprecation.schema.json": "a3c87672f9af245c90d0c66b9614d15bd32c66e817e0cd9bb0a1f46127b4ad95",
    "registry/deprecations/replacement.schema.json": "72f66bb342a0c782d67ac0ffd7bf83d7aff53c67d8ca960a4d31d30194310c6c",
    "registry/deprecations/definitions/deprecationRecord.json": "92cd642de698b9d339e458313ed6ff8aa618a900a74d47379551d224b49a857a",
    "registry/deprecations/definitions/impactScope.json": "5f2fdf5a96aa9d78bdabde721033be5e4642eeda65df602d063ea94a5d99f4bb",
    "registry/deprecations/definitions/lifecycleState.json": "0bd57a6db081d6bdc2fc07de543edc891365de6831490f238aa6df61cca5fc81",
    "registry/deprecations/definitions/replacementReference.json": "4343566bcd9f05a5747554ea2e2911b817c3af0ee7ef4f1f9bff1e9a439558a5",
    "registry/deprecations/definitions/supportWindow.json": "a5a676e25d872aeb5094e8e528262e7a9d4126415bdee5eacbbc091c6be4c392"
  }
};
