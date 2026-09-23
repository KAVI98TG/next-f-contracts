// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/deprecations/*
export const GENERATED_DEPRECATIONS = {
  "registryVersion": "1.3.0",
  "index": {
    "registryVersion": "1.3.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Deprecation Registry",
    "description": "Authoritative lifecycle-management records for deprecated and removed NEXT F Registry definitions.",
    "currentVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
    "registry/deprecations/index.json": "08258263b00089ab4377e1adf47e4824b8063b46c496e5fafcbdec5134c96fc4",
    "registry/deprecations/policy.json": "9de31ab65a5ec14e3d8776c284f2df28d1dcf6c64f478cf6c085ba2e445500a3",
    "registry/deprecations/lifecycle-states.json": "e716f966810adbe01dc0fc513bbddf4b9f8ddc7e815e7c839fb2a944a715dc92",
    "registry/deprecations/severity-levels.json": "94cc6f9fa498a3731f7626edddd44bb9931f339311a8eae9ed2c07cdb3601cba",
    "registry/deprecations/deprecation.schema.json": "a3c87672f9af245c90d0c66b9614d15bd32c66e817e0cd9bb0a1f46127b4ad95",
    "registry/deprecations/replacement.schema.json": "72f66bb342a0c782d67ac0ffd7bf83d7aff53c67d8ca960a4d31d30194310c6c",
    "registry/deprecations/definitions/deprecationRecord.json": "ce05cd6855b4d7f1a2adf6236d2b9ad5195088abd44c7a9fbbf2b1fb2c998acb",
    "registry/deprecations/definitions/impactScope.json": "c9d18d813a933c866e0c3d06d042a77de4129f3d46d8c84b5c7a2b5f880affaa",
    "registry/deprecations/definitions/lifecycleState.json": "c39f2f5650c11287a16177156ac72f9babf60e65d91888aa2a293c400f6bd6b7",
    "registry/deprecations/definitions/replacementReference.json": "01119650a6e49673af012f9ce96a015bbb1ca704236b55d3a224c955827ec0e9",
    "registry/deprecations/definitions/supportWindow.json": "ae0f6285c14f580a485fe0353756d8dfe5a8200ff02ef63a880fa2655d9d9eb2"
  }
};
