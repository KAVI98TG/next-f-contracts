// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/deprecations/*
export const GENERATED_DEPRECATIONS = {
  "registryVersion": "1.0.0",
  "index": {
    "registryVersion": "1.0.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Deprecation Registry",
    "description": "Authoritative lifecycle-management records for deprecated and removed NEXT F Registry definitions.",
    "currentVersion": "1.0.0",
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
    "registryVersion": "1.0.0",
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
    "registryVersion": "1.0.0",
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
    "registryVersion": "1.0.0",
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
      "version": "1.0.0",
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
      "version": "1.0.0",
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
      "version": "1.0.0",
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
      "version": "1.0.0",
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
      "version": "1.0.0",
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
    "registry/deprecations/index.json": "dd3e2e83ca2107f2bb6fc802ad95c2f4c21d196c85aeeadbe29c13e864e3c8ae",
    "registry/deprecations/policy.json": "7a5189f5edd3c2b1c29e5d88cb668e9c9a8bfe2b351be5a599de8c8494d67cae",
    "registry/deprecations/lifecycle-states.json": "65d5da195af3310c54070bb7317816fec0899fb31a177038d8e2c39d86d35b9d",
    "registry/deprecations/severity-levels.json": "c767329ab8b36af0fcc66ef4c4f5c855f2d0cd80f6feba759fe585c5a5ed8cd5",
    "registry/deprecations/deprecation.schema.json": "a3c87672f9af245c90d0c66b9614d15bd32c66e817e0cd9bb0a1f46127b4ad95",
    "registry/deprecations/replacement.schema.json": "72f66bb342a0c782d67ac0ffd7bf83d7aff53c67d8ca960a4d31d30194310c6c",
    "registry/deprecations/definitions/deprecationRecord.json": "4e227cac4d88b52ae49ccf5634f706f5d199757fb6d6d7c8025cfd3b2e2ffbb8",
    "registry/deprecations/definitions/impactScope.json": "fd9eecdbed9531b0771dce75ec39e4776cf23a8f3ce86aa2a1dcfb8ab073d0f9",
    "registry/deprecations/definitions/lifecycleState.json": "f0203c5f228cb6269fd3d4d8be9bc7799f92e33731217bb8ae599f08c77eaedc",
    "registry/deprecations/definitions/replacementReference.json": "799387acb2539d27ab48988de9f71b9db9235a932e859417ef7da82e369e5901",
    "registry/deprecations/definitions/supportWindow.json": "4c1d8741f6883a4be04d97ec8363de7ed63c0a84f2ab8e9d00b692fe799d8b22"
  }
};
