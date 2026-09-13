// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/deprecations/*
export const GENERATED_DEPRECATIONS = {
  "registryVersion": "1.1.0",
  "index": {
    "registryVersion": "1.1.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Deprecation Registry",
    "description": "Authoritative lifecycle-management records for deprecated and removed NEXT F Registry definitions.",
    "currentVersion": "1.1.0",
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
    "registryVersion": "1.1.0",
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
    "registryVersion": "1.1.0",
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
    "registryVersion": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
      "version": "1.1.0",
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
    "registry/deprecations/index.json": "e71bbb784937ef8ba5e5f8d7ce77f4069bb9e8f04df8a1a2ef5a5a05fafff3b6",
    "registry/deprecations/policy.json": "cabbd0db1d47bb360b79da9eb5ad11daca33a1126c37d1773d45902eb4c4bcdb",
    "registry/deprecations/lifecycle-states.json": "4743d7eb79504305adf7e219d75077e6967b77a083931ff23108f0bc7503d1e5",
    "registry/deprecations/severity-levels.json": "e0eab31c3c2385903e683c3314c13b43664515b9c7e5462402ceb06740d3aee0",
    "registry/deprecations/deprecation.schema.json": "5b86aebb5e58afa0eef0a19a1ba2bc051153c1995cb0c06cf8ef80f20baee71e",
    "registry/deprecations/replacement.schema.json": "7f8c4b4c76322a38c8b4899dc5d15283c8ea384622dccd6482a459822c9c6b81",
    "registry/deprecations/definitions/deprecationRecord.json": "1b84a49ad3bb586169ef28ac69c3c5ae2d21ebeac8ed06622e8f4ece340549f2",
    "registry/deprecations/definitions/impactScope.json": "4bff275ca4ec86cabc03567d51142f3bab3dea15d65b2243c319e9db96d3a576",
    "registry/deprecations/definitions/lifecycleState.json": "3b6509451f8f2b94e2fe23a41ab3aabbaf1b4e18fb377c4f7a81cd7696ebcb0b",
    "registry/deprecations/definitions/replacementReference.json": "6c97b1cc78ca368f10c74b7475fcadfc0d5c764952cf643201840858e9112fc5",
    "registry/deprecations/definitions/supportWindow.json": "c9b431ffbe09c3dfeef7088fc28c1504eb7b073284eaf213732c8aadcfb81fab"
  }
};
