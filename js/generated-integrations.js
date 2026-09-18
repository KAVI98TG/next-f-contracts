// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source: registry/integrations/index.json
// SHA-256: 43408b6857fc68e69fc88aa2358ecdcdd1213e1c1b6d6baef28c4130a1d9f4e4
export const GENERATED_INTEGRATIONS_SOURCE_SHA256 = "43408b6857fc68e69fc88aa2358ecdcdd1213e1c1b6d6baef28c4130a1d9f4e4";
export const GENERATED_INTEGRATIONS = {
  "registryVersion": "1.2.0",
  "schemaVersion": "1.0.0",
  "title": "NEXT F Integration Contract Registry",
  "description": "Generated index of authoritative Phase 10 Integration definitions and provider connectors.",
  "definitionCount": 35,
  "connectorCount": 15,
  "categoryCount": 8,
  "capabilityCount": 20,
  "providerCount": 11,
  "sourceDirectory": "registry/integrations/definitions",
  "connectorDirectory": "registry/integrations/connectors",
  "categories": [
    {
      "key": "foundation",
      "label": "Foundation",
      "description": "Provider, connector, connection and capability contracts."
    },
    {
      "key": "authentication",
      "label": "Authentication",
      "description": "Secret references, credentials, OAuth and API key contracts."
    },
    {
      "key": "configuration",
      "label": "Configuration",
      "description": "Typed settings, accounts, resources and environment bindings."
    },
    {
      "key": "mapping",
      "label": "Mapping",
      "description": "Events, conversions, data and provider action mappings."
    },
    {
      "key": "runtime",
      "label": "Runtime",
      "description": "Client/server execution and data-policy boundaries."
    },
    {
      "key": "sync",
      "label": "Synchronization",
      "description": "Controlled pull/push synchronization state and results."
    },
    {
      "key": "health",
      "label": "Health",
      "description": "Connection checks, health snapshots and safe diagnostics."
    },
    {
      "key": "resilience",
      "label": "Resilience",
      "description": "Rate-limit and retry behavior."
    }
  ],
  "capabilities": [
    {
      "key": "tag.load",
      "label": "Load Tag",
      "runtime": "client"
    },
    {
      "key": "event.dispatch.client",
      "label": "Dispatch Client Event",
      "runtime": "client"
    },
    {
      "key": "event.dispatch.server",
      "label": "Dispatch Server Event",
      "runtime": "server"
    },
    {
      "key": "conversion.dispatch.client",
      "label": "Dispatch Client Conversion",
      "runtime": "client"
    },
    {
      "key": "conversion.dispatch.server",
      "label": "Dispatch Server Conversion",
      "runtime": "server"
    },
    {
      "key": "reporting.read",
      "label": "Read Reporting Data",
      "runtime": "server"
    },
    {
      "key": "resource.discover",
      "label": "Discover Provider Resources",
      "runtime": "server"
    },
    {
      "key": "account.verify",
      "label": "Verify Account Access",
      "runtime": "server"
    },
    {
      "key": "data.sync.pull",
      "label": "Pull Data",
      "runtime": "server"
    },
    {
      "key": "data.sync.push",
      "label": "Push Data",
      "runtime": "server"
    },
    {
      "key": "message.send",
      "label": "Send Message",
      "runtime": "server"
    },
    {
      "key": "crm.record.push",
      "label": "Push CRM Record",
      "runtime": "server"
    },
    {
      "key": "crm.record.pull",
      "label": "Pull CRM Record",
      "runtime": "server"
    },
    {
      "key": "webhook.dispatch",
      "label": "Dispatch Webhook",
      "runtime": "server"
    },
    {
      "key": "api.request",
      "label": "API Request",
      "runtime": "server"
    },
    {
      "key": "gaming.catalog.sync",
      "label": "Sync Gaming Catalog",
      "runtime": "server"
    },
    {
      "key": "gaming.availability.sync",
      "label": "Sync Gaming Availability",
      "runtime": "server"
    },
    {
      "key": "gaming.account.validate",
      "label": "Validate Gaming Account",
      "runtime": "server"
    },
    {
      "key": "gaming.fulfillment.submit",
      "label": "Submit Gaming Fulfillment",
      "runtime": "server"
    },
    {
      "key": "gaming.fulfillment.refresh",
      "label": "Refresh Gaming Fulfillment",
      "runtime": "server"
    }
  ],
  "providers": [
    {
      "key": "google",
      "label": "Google",
      "ownershipDefault": "customer"
    },
    {
      "key": "meta",
      "label": "Meta",
      "ownershipDefault": "customer"
    },
    {
      "key": "microsoft",
      "label": "Microsoft",
      "ownershipDefault": "customer"
    },
    {
      "key": "tiktok",
      "label": "TikTok",
      "ownershipDefault": "customer"
    },
    {
      "key": "linkedin",
      "label": "LinkedIn",
      "ownershipDefault": "customer"
    },
    {
      "key": "generic-email",
      "label": "Generic Email Provider",
      "ownershipDefault": "customer"
    },
    {
      "key": "generic-crm",
      "label": "Generic CRM",
      "ownershipDefault": "customer"
    },
    {
      "key": "generic-webhook",
      "label": "Generic Webhook",
      "ownershipDefault": "customer"
    },
    {
      "key": "generic-api",
      "label": "Generic API",
      "ownershipDefault": "customer"
    },
    {
      "key": "gaming-supplier",
      "label": "Generic Gaming Supplier",
      "ownershipDefault": "nextf"
    },
    {
      "key": "fazercards",
      "label": "FazerCards",
      "ownershipDefault": "nextf"
    }
  ],
  "schemas": [
    {
      "$id": "integrations.accountReference",
      "name": "Account Reference",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "configuration",
      "description": "Non-secret reference to an external provider account.",
      "purpose": "Lets a connection identify the customer-owned provider account without embedding credentials.",
      "integrationModel": {
        "kind": "external-reference",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "providerKey",
          "required": true,
          "nullable": false,
          "description": "Provider key.",
          "primitive": "fields.text"
        },
        {
          "key": "externalAccountId",
          "required": true,
          "nullable": false,
          "description": "Provider account ID.",
          "primitive": "fields.text"
        },
        {
          "key": "displayName",
          "required": false,
          "nullable": true,
          "description": "Human account label.",
          "primitive": "fields.text"
        },
        {
          "key": "ownerType",
          "required": true,
          "nullable": false,
          "description": "Account owner.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "customer",
              "nextf",
              "external-party"
            ]
          }
        },
        {
          "key": "verifiedAt",
          "required": false,
          "nullable": true,
          "description": "Most recent verification.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "noCredentials",
          "description": "Account references contain no credentials."
        },
        {
          "id": "customerOwnershipExplicit",
          "description": "Ownership is explicit and defaults operationally to customer."
        }
      ],
      "cms": {
        "label": "Account Reference",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "providerKey",
          "externalAccountId",
          "displayName",
          "ownerType"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.actionBinding",
      "name": "Action Binding",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "mapping",
      "description": "Binds a canonical workflow/event to a registered provider action.",
      "purpose": "Supports controlled external actions such as send email or upsert CRM record.",
      "integrationModel": {
        "kind": "binding",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "actionKey",
          "required": true,
          "nullable": false,
          "description": "Registered provider action.",
          "primitive": "fields.text"
        },
        {
          "key": "trigger",
          "required": true,
          "nullable": false,
          "description": "Canonical trigger/event/workflow key.",
          "primitive": "fields.text"
        },
        {
          "key": "mapping",
          "required": false,
          "nullable": true,
          "description": "Data mapping.",
          "schema": "integrations.dataMapping"
        },
        {
          "key": "resource",
          "required": false,
          "nullable": true,
          "description": "Target resource.",
          "schema": "integrations.resourceReference"
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether binding is enabled.",
          "primitive": "fields.boolean"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.dataMapping",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.resourceReference",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "registeredActionOnly",
          "description": "Action must exist on connector definition."
        },
        {
          "id": "triggerCanonical",
          "description": "Trigger resolves to canonical event/workflow vocabulary."
        },
        {
          "id": "consentAndPermissionsStillApply",
          "description": "Binding does not bypass consent or authorization."
        }
      ],
      "cms": {
        "label": "Action Binding",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "actionKey",
          "trigger",
          "mapping",
          "resource"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.apiKeyConfiguration",
      "name": "API Key Configuration",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "authentication",
      "description": "API-key authentication configuration using a protected secret reference.",
      "purpose": "Standardizes API key placement while keeping the key server-side by default.",
      "integrationModel": {
        "kind": "auth-configuration",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "secret"
      },
      "fields": [
        {
          "key": "secretRef",
          "required": true,
          "nullable": false,
          "description": "Protected API key.",
          "schema": "integrations.secretReference"
        },
        {
          "key": "placement",
          "required": true,
          "nullable": false,
          "description": "Provider-required placement.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "header",
              "query",
              "body",
              "provider-sdk"
            ]
          }
        },
        {
          "key": "name",
          "required": false,
          "nullable": true,
          "description": "Header/query/body field name.",
          "primitive": "fields.text"
        },
        {
          "key": "prefix",
          "required": false,
          "nullable": true,
          "description": "Optional non-secret prefix such as Bearer.",
          "primitive": "fields.text"
        },
        {
          "key": "publicClientEligible",
          "required": true,
          "nullable": false,
          "description": "Whether connector explicitly permits client exposure.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": false
          }
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.secretReference",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "serverSideDefault",
          "description": "API keys are server-side unless connector explicitly allows client exposure."
        },
        {
          "id": "noSecretInQueryLogs",
          "description": "Secret-bearing query authentication requires protections against URL/log leakage."
        }
      ],
      "cms": {
        "label": "API Key Configuration",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "secretRef",
          "placement",
          "name",
          "prefix"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.authenticationProfile",
      "name": "Authentication Profile",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "authentication",
      "description": "Canonical authentication selection for one connector or connection.",
      "purpose": "Keeps provider authentication typed and separate from ordinary configuration.",
      "integrationModel": {
        "kind": "auth-profile",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "secret"
      },
      "fields": [
        {
          "key": "type",
          "required": true,
          "nullable": false,
          "description": "Authentication type.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "none",
              "oauth2",
              "api-key",
              "bearer",
              "basic",
              "signed",
              "provider-managed"
            ]
          }
        },
        {
          "key": "credential",
          "required": false,
          "nullable": true,
          "description": "Credential reference.",
          "schema": "integrations.credentialReference"
        },
        {
          "key": "oauth",
          "required": false,
          "nullable": true,
          "description": "OAuth configuration.",
          "schema": "integrations.oauthConfiguration"
        },
        {
          "key": "apiKey",
          "required": false,
          "nullable": true,
          "description": "API-key configuration.",
          "schema": "integrations.apiKeyConfiguration"
        },
        {
          "key": "notes",
          "required": false,
          "nullable": true,
          "description": "Non-secret implementation notes.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.credentialReference",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.oauthConfiguration",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.apiKeyConfiguration",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "oneMechanism",
          "description": "Exactly the selected authentication mechanism is resolved."
        },
        {
          "id": "noPlainSecrets",
          "description": "No plaintext passwords/tokens/keys in profile."
        }
      ],
      "cms": {
        "label": "Authentication Profile",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "type",
          "credential",
          "oauth",
          "apiKey"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.capabilityBinding",
      "name": "Capability Binding",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "configuration",
      "description": "Enables and configures one declared connector capability for a connection.",
      "purpose": "Allows per-Site capability activation and optional mapping references.",
      "integrationModel": {
        "kind": "binding",
        "customerManaged": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "capabilityKey",
          "required": true,
          "nullable": false,
          "description": "Canonical capability.",
          "primitive": "fields.text"
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether enabled.",
          "primitive": "fields.boolean"
        },
        {
          "key": "resource",
          "required": false,
          "nullable": true,
          "description": "Provider resource used.",
          "schema": "integrations.resourceReference"
        },
        {
          "key": "configuration",
          "required": false,
          "nullable": true,
          "description": "Capability-specific config.",
          "itemsSchema": "integrations.configurationValue"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.resourceReference",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composesMany",
          "target": "integrations.configurationValue",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "connectorMustDeclare",
          "description": "Capability must exist on connector definition."
        },
        {
          "id": "disabledNoExecution",
          "description": "Disabled capability cannot execute."
        }
      ],
      "cms": {
        "label": "Capability Binding",
        "icon": "fa-plug",
        "customerVisible": true,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "capabilityKey",
          "enabled",
          "resource",
          "configuration"
        ],
        "primaryActions": [
          "view",
          "edit"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.capabilityDefinition",
      "name": "Capability Definition",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "foundation",
      "description": "Canonical description of an operation an integration connector can provide.",
      "purpose": "Enables feature checks independent of provider names.",
      "integrationModel": {
        "kind": "capability",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "capabilityKey",
          "required": true,
          "nullable": false,
          "description": "Canonical capability key.",
          "primitive": "fields.text"
        },
        {
          "key": "label",
          "required": true,
          "nullable": false,
          "description": "Display label.",
          "primitive": "fields.text"
        },
        {
          "key": "runtime",
          "required": true,
          "nullable": false,
          "description": "Primary runtime.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "client",
              "server",
              "either"
            ]
          }
        },
        {
          "key": "dataDirection",
          "required": true,
          "nullable": false,
          "description": "Data direction.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "outbound",
              "inbound",
              "bidirectional",
              "none"
            ]
          }
        },
        {
          "key": "sideEffectLevel",
          "required": true,
          "nullable": false,
          "description": "Operational side effect classification.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "none",
              "read-only",
              "reversible",
              "external-write"
            ]
          }
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "stableCapabilityKeys",
          "description": "Capability keys are stable and provider-neutral."
        },
        {
          "id": "declaredBeforeUse",
          "description": "Connector must declare capability before connection enables it."
        }
      ],
      "cms": {
        "label": "Capability Definition",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "capabilityKey",
          "label",
          "runtime",
          "dataDirection"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.configurationField",
      "name": "Configuration Field",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "configuration",
      "description": "Typed metadata for one connector configuration setting.",
      "purpose": "Allows Admin/Customer CMS to render safe provider configuration without hardcoded one-off forms.",
      "integrationModel": {
        "kind": "field-definition",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "key",
          "required": true,
          "nullable": false,
          "description": "Stable field key.",
          "primitive": "fields.text"
        },
        {
          "key": "label",
          "required": true,
          "nullable": false,
          "description": "UI label.",
          "primitive": "fields.text"
        },
        {
          "key": "primitive",
          "required": true,
          "nullable": false,
          "description": "Registered primitive field ID.",
          "primitive": "fields.text"
        },
        {
          "key": "required",
          "required": true,
          "nullable": false,
          "description": "Whether required.",
          "primitive": "fields.boolean"
        },
        {
          "key": "publicClientEligible",
          "required": true,
          "nullable": false,
          "description": "Whether safe/required for client runtime.",
          "primitive": "fields.boolean"
        },
        {
          "key": "secret",
          "required": true,
          "nullable": false,
          "description": "Whether value must be secret-referenced.",
          "primitive": "fields.boolean"
        },
        {
          "key": "customerEditable",
          "required": true,
          "nullable": false,
          "description": "Whether authorized customer users may edit.",
          "primitive": "fields.boolean"
        },
        {
          "key": "helpText",
          "required": false,
          "nullable": true,
          "description": "Configuration guidance.",
          "primitive": "fields.text"
        },
        {
          "key": "validation",
          "required": false,
          "nullable": true,
          "description": "Provider-specific non-secret validation metadata.",
          "primitive": "fields.json"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "secretAndPublicMutuallyExclusive",
          "description": "Secret fields cannot be public-client eligible."
        },
        {
          "id": "registeredPrimitive",
          "description": "Primitive must resolve to NEXT F Field Registry."
        },
        {
          "id": "noSecretDefaults",
          "description": "Secret fields never have literal default values."
        }
      ],
      "cms": {
        "label": "Configuration Field",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "key",
          "label",
          "primitive",
          "required"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.configurationValue",
      "name": "Configuration Value",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "configuration",
      "description": "Value assigned to a connector configuration field.",
      "purpose": "Stores non-secret values or opaque secret references with source and environment context.",
      "integrationModel": {
        "kind": "configuration",
        "customerManaged": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "fieldKey",
          "required": true,
          "nullable": false,
          "description": "Connector field key.",
          "primitive": "fields.text"
        },
        {
          "key": "value",
          "required": false,
          "nullable": true,
          "description": "Non-secret typed value.",
          "primitive": "fields.json"
        },
        {
          "key": "secretRef",
          "required": false,
          "nullable": true,
          "description": "Protected secret value reference.",
          "schema": "integrations.secretReference"
        },
        {
          "key": "source",
          "required": true,
          "nullable": false,
          "description": "How value was set.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "customer",
              "admin",
              "oauth",
              "system",
              "import"
            ]
          }
        },
        {
          "key": "updatedAt",
          "required": true,
          "nullable": false,
          "description": "Last update time.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.secretReference",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "valueOrSecretRef",
          "description": "Use literal value or secretRef according to field metadata, never both for secret fields."
        },
        {
          "id": "publicEligibilityChecked",
          "description": "Client delivery requires configuration field publicClientEligible=true."
        }
      ],
      "cms": {
        "label": "Configuration Value",
        "icon": "fa-plug",
        "customerVisible": true,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "fieldKey",
          "value",
          "secretRef",
          "source"
        ],
        "primaryActions": [
          "view",
          "edit"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.connectionStatus",
      "name": "Connection Status",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "foundation",
      "description": "Normalized provider-independent integration connection state.",
      "purpose": "Makes Admin/CMS health behavior consistent across providers.",
      "integrationModel": {
        "kind": "status",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "state",
          "required": true,
          "nullable": false,
          "description": "Normalized state.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "draft",
              "connecting",
              "connected",
              "degraded",
              "reauthorizationRequired",
              "disabled",
              "error",
              "revoked"
            ]
          }
        },
        {
          "key": "reasonCode",
          "required": false,
          "nullable": true,
          "description": "Safe machine reason code.",
          "primitive": "fields.text"
        },
        {
          "key": "message",
          "required": false,
          "nullable": true,
          "description": "Safe human-readable status message.",
          "primitive": "fields.text"
        },
        {
          "key": "changedAt",
          "required": true,
          "nullable": false,
          "description": "When state last changed.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "providerStatesMapped",
          "description": "Provider-specific states must map to one canonical state."
        },
        {
          "id": "noSecretErrors",
          "description": "Status messages cannot include secrets or authorization data."
        }
      ],
      "cms": {
        "label": "Connection Status",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "state",
          "reasonCode",
          "message",
          "changedAt"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.connectionTest",
      "name": "Connection Test",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "health",
      "description": "Result of one safe connector/resource verification step.",
      "purpose": "Provides consistent diagnostics for setup and health monitoring.",
      "integrationModel": {
        "kind": "test-result",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "testKey",
          "required": true,
          "nullable": false,
          "description": "Test key.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Test outcome.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "passed",
              "warning",
              "failed",
              "skipped"
            ]
          }
        },
        {
          "key": "checkedAt",
          "required": true,
          "nullable": false,
          "description": "Test time.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "message",
          "required": true,
          "nullable": false,
          "description": "Safe actionable message.",
          "primitive": "fields.text"
        },
        {
          "key": "error",
          "required": false,
          "nullable": true,
          "description": "Normalized error.",
          "schema": "integrations.integrationError"
        },
        {
          "key": "sideEffectCreated",
          "required": true,
          "nullable": false,
          "description": "Whether test created an external side effect.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": false
          }
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.integrationError",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "noProductionSideEffectDefault",
          "description": "Tests must not create real production side effects by default."
        },
        {
          "id": "sideEffectDisclosure",
          "description": "Any side effect must be explicit and visible."
        },
        {
          "id": "safeDiagnostics",
          "description": "No secrets/auth headers/full provider bodies exposed."
        }
      ],
      "cms": {
        "label": "Connection Test",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "testKey",
          "status",
          "checkedAt",
          "message"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.connectorDefinition",
      "name": "Connector Definition",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "foundation",
      "description": "Canonical capabilities, runtime modes, authentication and configuration contract for one integration adapter.",
      "purpose": "Defines how a provider or generic adapter participates in NEXT F without changing canonical Site models.",
      "integrationModel": {
        "kind": "connector",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "connectorKey",
          "required": true,
          "nullable": false,
          "description": "Stable connector key.",
          "primitive": "fields.text"
        },
        {
          "key": "providerKey",
          "required": true,
          "nullable": false,
          "description": "Provider key.",
          "primitive": "fields.text"
        },
        {
          "key": "displayName",
          "required": true,
          "nullable": false,
          "description": "Connector display name.",
          "primitive": "fields.text"
        },
        {
          "key": "runtimeModes",
          "required": true,
          "nullable": false,
          "description": "Supported runtime modes.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "capabilities",
          "required": true,
          "nullable": false,
          "description": "Declared capability keys.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "authentication",
          "required": false,
          "nullable": true,
          "description": "Default authentication contract.",
          "schema": "integrations.authenticationProfile"
        },
        {
          "key": "configurationFields",
          "required": false,
          "nullable": true,
          "description": "Typed connector configuration fields.",
          "itemsSchema": "integrations.configurationField"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Connector availability.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "available",
              "limited",
              "disabled",
              "deprecated"
            ]
          }
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.authenticationProfile",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composesMany",
          "target": "integrations.configurationField",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "capabilityDeclarationRequired",
          "description": "Runtime operations are limited to declared connector capabilities."
        },
        {
          "id": "noSecretValues",
          "description": "Connector definitions contain secret references or descriptors, never secret values."
        },
        {
          "id": "providerAdapterBoundary",
          "description": "Provider semantics are adapted to canonical NEXT F contracts."
        }
      ],
      "cms": {
        "label": "Connector Definition",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "connectorKey",
          "providerKey",
          "displayName",
          "runtimeModes"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.consentBinding",
      "name": "Consent Binding",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "configuration",
      "description": "Binds an integration capability to Phase 9 consent requirements.",
      "purpose": "Ensures browser and server integration behavior uses the same canonical consent state.",
      "integrationModel": {
        "kind": "policy-binding",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "requiredCategories",
          "required": true,
          "nullable": false,
          "description": "Required consent category keys.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "appliesToClient",
          "required": true,
          "nullable": false,
          "description": "Apply to client-side dispatch.",
          "primitive": "fields.boolean"
        },
        {
          "key": "appliesToServer",
          "required": true,
          "nullable": false,
          "description": "Apply to server-side dispatch.",
          "primitive": "fields.boolean"
        },
        {
          "key": "deniedBehavior",
          "required": true,
          "nullable": false,
          "description": "Behavior when consent is denied/unknown.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "block",
              "redact",
              "limited-mode",
              "provider-consent-mode"
            ]
          }
        },
        {
          "key": "policyRef",
          "required": false,
          "nullable": true,
          "description": "Optional Phase 9 consent policy reference.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "marketing.consentPolicy",
          "description": "Uses Phase 9 consent semantics."
        }
      ],
      "validationRules": [
        {
          "id": "serverNotExempt",
          "description": "Server-side dispatch does not bypass consent."
        },
        {
          "id": "unknownNotGranted",
          "description": "Unknown optional consent is not treated as granted."
        },
        {
          "id": "providerModeCannotOverridePolicy",
          "description": "Provider consent modes cannot weaken Site policy."
        }
      ],
      "cms": {
        "label": "Consent Binding",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "requiredCategories",
          "appliesToClient",
          "appliesToServer",
          "deniedBehavior"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.conversionMapping",
      "name": "Conversion Mapping",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "mapping",
      "description": "Maps a canonical NEXT F conversion definition to a provider conversion resource.",
      "purpose": "Keeps Google/Meta/etc conversion identifiers outside the canonical conversion contract.",
      "integrationModel": {
        "kind": "mapping",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "conversionKey",
          "required": true,
          "nullable": false,
          "description": "Canonical NEXT F conversion key.",
          "primitive": "fields.text"
        },
        {
          "key": "providerConversionId",
          "required": false,
          "nullable": true,
          "description": "Provider conversion action/rule ID.",
          "primitive": "fields.text"
        },
        {
          "key": "providerLabel",
          "required": false,
          "nullable": true,
          "description": "Provider conversion label/name.",
          "primitive": "fields.text"
        },
        {
          "key": "resource",
          "required": false,
          "nullable": true,
          "description": "Provider conversion resource.",
          "schema": "integrations.resourceReference"
        },
        {
          "key": "dispatchMode",
          "required": true,
          "nullable": false,
          "description": "Dispatch mode.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "client",
              "server",
              "both"
            ]
          }
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether mapping is enabled.",
          "primitive": "fields.boolean"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.resourceReference",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "references",
          "target": "marketing.conversionDefinition",
          "description": "Maps Phase 9 canonical conversions."
        }
      ],
      "validationRules": [
        {
          "id": "canonicalConversionPreserved",
          "description": "NEXT F conversion key remains authoritative."
        },
        {
          "id": "providerIdsAdapterSpecific",
          "description": "Provider IDs remain integration mapping data."
        },
        {
          "id": "consentAppliedAtDispatch",
          "description": "Conversion dispatch evaluates applicable consent/data policy."
        }
      ],
      "cms": {
        "label": "Conversion Mapping",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "conversionKey",
          "providerConversionId",
          "providerLabel",
          "resource"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.credentialReference",
      "name": "Credential Reference",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "authentication",
      "description": "Reference to one protected credential set.",
      "purpose": "Groups an authentication mechanism with protected secret references and non-secret account context.",
      "integrationModel": {
        "kind": "credential-reference",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "secret"
      },
      "fields": [
        {
          "key": "credentialId",
          "required": true,
          "nullable": false,
          "description": "Credential record ID.",
          "primitive": "fields.text"
        },
        {
          "key": "authType",
          "required": true,
          "nullable": false,
          "description": "Authentication type.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "none",
              "oauth2",
              "api-key",
              "bearer",
              "basic",
              "signed",
              "provider-managed"
            ]
          }
        },
        {
          "key": "secretRefs",
          "required": false,
          "nullable": true,
          "description": "Protected secret references.",
          "itemsSchema": "integrations.secretReference"
        },
        {
          "key": "account",
          "required": false,
          "nullable": true,
          "description": "Associated external account.",
          "schema": "integrations.accountReference"
        },
        {
          "key": "expiresAt",
          "required": false,
          "nullable": true,
          "description": "Known credential expiry.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "composesMany",
          "target": "integrations.secretReference",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.accountReference",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "noSecretMaterial",
          "description": "Credential reference does not contain token/password material."
        },
        {
          "id": "expiryHandled",
          "description": "Known expiry should drive reauthorization health state."
        }
      ],
      "cms": {
        "label": "Credential Reference",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "credentialId",
          "authType",
          "secretRefs",
          "account"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.dataMapping",
      "name": "Mapping",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "mapping",
      "description": "Reusable directional data mapping between a canonical NEXT F object and a provider object.",
      "purpose": "Supports CRM, email, API and sync adapters without dumping raw records to providers.",
      "integrationModel": {
        "kind": "mapping",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "mappingKey",
          "required": true,
          "nullable": false,
          "description": "Stable mapping key.",
          "primitive": "fields.text"
        },
        {
          "key": "sourceContract",
          "required": true,
          "nullable": false,
          "description": "Canonical source contract ID.",
          "primitive": "fields.text"
        },
        {
          "key": "targetObject",
          "required": true,
          "nullable": false,
          "description": "Provider target object/type.",
          "primitive": "fields.text"
        },
        {
          "key": "direction",
          "required": true,
          "nullable": false,
          "description": "Mapping direction.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "outbound",
              "inbound",
              "bidirectional"
            ]
          }
        },
        {
          "key": "fields",
          "required": true,
          "nullable": false,
          "description": "Explicit field mappings.",
          "itemsSchema": "integrations.dataMappingField"
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether mapping is enabled.",
          "primitive": "fields.boolean"
        }
      ],
      "relationships": [
        {
          "type": "composesMany",
          "target": "integrations.dataMappingField",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "explicitFieldsOnly",
          "description": "Only explicitly mapped fields cross provider boundary."
        },
        {
          "id": "noRawPayloadDump",
          "description": "Whole canonical objects are not sent by default."
        },
        {
          "id": "typeConversionExplicit",
          "description": "Non-trivial type conversion is explicit."
        }
      ],
      "cms": {
        "label": "Mapping",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "mappingKey",
          "sourceContract",
          "targetObject",
          "direction"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.dataMappingField",
      "name": "Mapping Field",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "mapping",
      "description": "One explicit source-to-target field mapping.",
      "purpose": "Defines data minimization, transformation and sensitivity behavior at field level.",
      "integrationModel": {
        "kind": "mapping-field",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "sourcePath",
          "required": true,
          "nullable": false,
          "description": "Canonical source path.",
          "primitive": "fields.text"
        },
        {
          "key": "targetField",
          "required": true,
          "nullable": false,
          "description": "Provider target field.",
          "primitive": "fields.text"
        },
        {
          "key": "required",
          "required": true,
          "nullable": false,
          "description": "Whether target requires it.",
          "primitive": "fields.boolean"
        },
        {
          "key": "transform",
          "required": false,
          "nullable": true,
          "description": "Approved transform.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "none",
              "trim",
              "lowercase",
              "uppercase",
              "sha256-normalized",
              "date-format",
              "boolean-map",
              "custom-approved"
            ]
          }
        },
        {
          "key": "personalData",
          "required": true,
          "nullable": false,
          "description": "Whether mapping carries personal data.",
          "primitive": "fields.boolean"
        },
        {
          "key": "omitWhenEmpty",
          "required": true,
          "nullable": false,
          "description": "Omit null/empty values.",
          "primitive": "fields.boolean"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "personalDataExplicit",
          "description": "Personal data status is explicit."
        },
        {
          "id": "hashNotAnonymous",
          "description": "Hash transforms do not reclassify personal data automatically."
        },
        {
          "id": "customTransformApproved",
          "description": "Custom transforms require approved code, not arbitrary expressions."
        }
      ],
      "cms": {
        "label": "Mapping Field",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "sourcePath",
          "targetField",
          "required",
          "transform"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.dataPolicyBinding",
      "name": "Runtime Binding Data Policy",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "runtime",
      "description": "Data minimization and sensitivity policy applied to one connection.",
      "purpose": "Controls which classifications and canonical fields can leave NEXT F for a provider.",
      "integrationModel": {
        "kind": "policy-binding",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "allowedClassifications",
          "required": true,
          "nullable": false,
          "description": "Allowed data classifications.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "blockedPaths",
          "required": false,
          "nullable": true,
          "description": "Canonical paths always blocked.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "allowedPaths",
          "required": false,
          "nullable": true,
          "description": "Explicit allowed paths where restrictive allowlisting is used.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "retentionPurpose",
          "required": false,
          "nullable": true,
          "description": "Declared provider-side purpose.",
          "primitive": "fields.text"
        },
        {
          "key": "requiresConsent",
          "required": true,
          "nullable": false,
          "description": "Whether optional consent is required.",
          "primitive": "fields.boolean"
        },
        {
          "key": "notes",
          "required": false,
          "nullable": true,
          "description": "Implementation notes.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "denySecrets",
          "description": "Secret classification is never provider payload data."
        },
        {
          "id": "minimumNecessary",
          "description": "Mapped data is limited to configured purpose."
        },
        {
          "id": "providerPolicyNotAuthority",
          "description": "Provider capabilities do not override NEXT F/customer policy."
        }
      ],
      "cms": {
        "label": "Runtime Binding Data Policy",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "allowedClassifications",
          "blockedPaths",
          "allowedPaths",
          "retentionPurpose"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.environmentBinding",
      "name": "Environment Binding",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "configuration",
      "description": "Binds one integration connection to a NEXT F Site environment and provider resources/configuration.",
      "purpose": "Prevents accidental mixing of preview, staging and production provider state.",
      "integrationModel": {
        "kind": "binding",
        "customerManaged": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "secret"
      },
      "fields": [
        {
          "key": "environment",
          "required": true,
          "nullable": false,
          "description": "Site environment.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "preview",
              "staging",
              "production"
            ]
          }
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether active in this environment.",
          "primitive": "fields.boolean"
        },
        {
          "key": "account",
          "required": false,
          "nullable": true,
          "description": "Provider account.",
          "schema": "integrations.accountReference"
        },
        {
          "key": "resources",
          "required": false,
          "nullable": true,
          "description": "Provider resources.",
          "itemsSchema": "integrations.resourceReference"
        },
        {
          "key": "configuration",
          "required": false,
          "nullable": true,
          "description": "Environment config.",
          "itemsSchema": "integrations.configurationValue"
        },
        {
          "key": "credentials",
          "required": false,
          "nullable": true,
          "description": "Environment credential set.",
          "schema": "integrations.credentialReference"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.accountReference",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composesMany",
          "target": "integrations.resourceReference",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composesMany",
          "target": "integrations.configurationValue",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.credentialReference",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "oneBindingPerEnvironment",
          "description": "A connection has at most one active binding per Site environment."
        },
        {
          "id": "productionIsolation",
          "description": "Production resources/credentials are not silently inherited from non-production."
        },
        {
          "id": "credentialsServerSide",
          "description": "Credential references remain server-side."
        }
      ],
      "cms": {
        "label": "Environment Binding",
        "icon": "fa-plug",
        "customerVisible": true,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "environment",
          "enabled",
          "account",
          "resources"
        ],
        "primaryActions": [
          "view",
          "edit"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.eventMapping",
      "name": "Event Mapping",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "mapping",
      "description": "Maps one canonical NEXT F event to a provider event/action representation.",
      "purpose": "Allows provider adapters to translate Phase 9 event vocabulary without changing Site event names.",
      "integrationModel": {
        "kind": "mapping",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "canonicalEventKey",
          "required": true,
          "nullable": false,
          "description": "NEXT F canonical event key.",
          "primitive": "fields.text"
        },
        {
          "key": "providerEventName",
          "required": true,
          "nullable": false,
          "description": "Provider event name/action.",
          "primitive": "fields.text"
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether mapping is active.",
          "primitive": "fields.boolean"
        },
        {
          "key": "parameterMappings",
          "required": false,
          "nullable": true,
          "description": "Field mappings.",
          "itemsSchema": "integrations.dataMappingField"
        },
        {
          "key": "resource",
          "required": false,
          "nullable": true,
          "description": "Target provider resource.",
          "schema": "integrations.resourceReference"
        },
        {
          "key": "deduplicationKeyPath",
          "required": false,
          "nullable": true,
          "description": "Canonical path used for deduplication.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "composesMany",
          "target": "integrations.dataMappingField",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.resourceReference",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "references",
          "target": "marketing.standardTrackingEvents",
          "description": "Uses Phase 9 canonical tracking vocabulary."
        }
      ],
      "validationRules": [
        {
          "id": "canonicalKeyAuthoritative",
          "description": "Provider event name never replaces canonical event key."
        },
        {
          "id": "mappingMinimized",
          "description": "Only needed fields are mapped."
        },
        {
          "id": "deduplicationExplicit",
          "description": "Dual client/server event delivery uses explicit deduplication where provider supports it."
        }
      ],
      "cms": {
        "label": "Event Mapping",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "canonicalEventKey",
          "providerEventName",
          "enabled",
          "parameterMappings"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.healthCheck",
      "name": "Health Check",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "health",
      "description": "Definition of a safe provider/connection health probe.",
      "purpose": "Standardizes connection verification without relying on destructive production actions.",
      "integrationModel": {
        "kind": "health-definition",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "checkKey",
          "required": true,
          "nullable": false,
          "description": "Stable health check key.",
          "primitive": "fields.text"
        },
        {
          "key": "label",
          "required": true,
          "nullable": false,
          "description": "Check label.",
          "primitive": "fields.text"
        },
        {
          "key": "type",
          "required": true,
          "nullable": false,
          "description": "Probe type.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "credentials",
              "resource-access",
              "configuration",
              "delivery",
              "sync",
              "provider-status"
            ]
          }
        },
        {
          "key": "sideEffectFree",
          "required": true,
          "nullable": false,
          "description": "Whether probe is side-effect free.",
          "primitive": "fields.boolean"
        },
        {
          "key": "timeoutSeconds",
          "required": true,
          "nullable": false,
          "description": "Maximum check duration.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 1,
            "maximum": 60
          }
        },
        {
          "key": "requiredCapability",
          "required": false,
          "nullable": true,
          "description": "Capability required.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "safeByDefault",
          "description": "Health probes should be side-effect free by default."
        },
        {
          "id": "boundedTimeout",
          "description": "Health probes use bounded timeouts."
        }
      ],
      "cms": {
        "label": "Health Check",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "checkKey",
          "label",
          "type",
          "sideEffectFree"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.healthSnapshot",
      "name": "Health Snapshot",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "health",
      "description": "Latest normalized health status for an integration connection.",
      "purpose": "Allows Customer CMS/Admin to show integration health without leaking provider diagnostics.",
      "integrationModel": {
        "kind": "health-state",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "state",
          "required": true,
          "nullable": false,
          "description": "Health state.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "unknown",
              "healthy",
              "degraded",
              "unhealthy",
              "reauthorizationRequired",
              "disabled"
            ]
          }
        },
        {
          "key": "checkedAt",
          "required": true,
          "nullable": false,
          "description": "Health check time.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "checks",
          "required": false,
          "nullable": true,
          "description": "Safe check results.",
          "itemsSchema": "integrations.connectionTest"
        },
        {
          "key": "summary",
          "required": false,
          "nullable": true,
          "description": "Safe summary.",
          "primitive": "fields.text"
        },
        {
          "key": "nextCheckAt",
          "required": false,
          "nullable": true,
          "description": "Scheduled next check.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "composesMany",
          "target": "integrations.connectionTest",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "safeSummary",
          "description": "Health output cannot expose credentials or raw personal data."
        },
        {
          "id": "freshnessExplicit",
          "description": "Health has explicit checkedAt timestamp."
        }
      ],
      "cms": {
        "label": "Health Snapshot",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "state",
          "checkedAt",
          "checks",
          "summary"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.integrationConnection",
      "name": "Integration Connection",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "foundation",
      "description": "A configured Site/environment connection to one connector.",
      "purpose": "Represents a real customer integration instance without mixing provider secrets into public Site data.",
      "integrationModel": {
        "kind": "connection",
        "customerManaged": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": true,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable connection identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Site.",
          "schema": "core.tenantScope"
        },
        {
          "key": "connectorKey",
          "required": true,
          "nullable": false,
          "description": "Canonical connector key.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Normalized connection state.",
          "schema": "integrations.connectionStatus"
        },
        {
          "key": "environmentBindings",
          "required": true,
          "nullable": false,
          "description": "Environment-specific configuration.",
          "itemsSchema": "integrations.environmentBinding"
        },
        {
          "key": "capabilities",
          "required": false,
          "nullable": true,
          "description": "Enabled connection capabilities.",
          "itemsSchema": "integrations.capabilityBinding"
        },
        {
          "key": "consent",
          "required": false,
          "nullable": true,
          "description": "Consent policy binding.",
          "schema": "integrations.consentBinding"
        },
        {
          "key": "dataPolicy",
          "required": false,
          "nullable": true,
          "description": "Data minimization policy.",
          "schema": "integrations.dataPolicyBinding"
        },
        {
          "key": "health",
          "required": false,
          "nullable": true,
          "description": "Latest safe health snapshot.",
          "schema": "integrations.healthSnapshot"
        },
        {
          "key": "updatedAt",
          "required": true,
          "nullable": false,
          "description": "Last connection update.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "core.entityIdentity",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "core.tenantScope",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.connectionStatus",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composesMany",
          "target": "integrations.environmentBinding",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composesMany",
          "target": "integrations.capabilityBinding",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.consentBinding",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.dataPolicyBinding",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.healthSnapshot",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "siteScoped",
          "description": "Connections belong to one Site."
        },
        {
          "id": "environmentExplicit",
          "description": "Provider resources and credentials are explicitly environment-bound."
        },
        {
          "id": "noRawSecrets",
          "description": "Connection records never contain raw secret values."
        },
        {
          "id": "disabledMeansNoDispatch",
          "description": "Disabled/revoked connections cannot dispatch or sync."
        }
      ],
      "cms": {
        "label": "Integration Connection",
        "icon": "fa-plug",
        "customerVisible": true,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "identity",
          "scope",
          "connectorKey",
          "status"
        ],
        "primaryActions": [
          "view",
          "edit"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.integrationError",
      "name": "Integration Error",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "health",
      "description": "Normalized safe error produced by a connector.",
      "purpose": "Prevents provider-specific raw errors from leaking while preserving actionable diagnostics.",
      "integrationModel": {
        "kind": "error",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "code",
          "required": true,
          "nullable": false,
          "description": "Canonical safe error code.",
          "primitive": "fields.text"
        },
        {
          "key": "category",
          "required": true,
          "nullable": false,
          "description": "Error category.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "authentication",
              "authorization",
              "configuration",
              "validation",
              "rate-limit",
              "provider",
              "network",
              "timeout",
              "mapping",
              "consent",
              "unknown"
            ]
          }
        },
        {
          "key": "message",
          "required": true,
          "nullable": false,
          "description": "Safe message.",
          "primitive": "fields.text"
        },
        {
          "key": "retryable",
          "required": true,
          "nullable": false,
          "description": "Whether retry may succeed.",
          "primitive": "fields.boolean"
        },
        {
          "key": "providerCode",
          "required": false,
          "nullable": true,
          "description": "Non-sensitive provider error code.",
          "primitive": "fields.text"
        },
        {
          "key": "occurredAt",
          "required": true,
          "nullable": false,
          "description": "Occurrence time.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "requestId",
          "required": false,
          "nullable": true,
          "description": "NEXT F request/trace ID.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "noSecrets",
          "description": "Error cannot contain credentials/auth headers."
        },
        {
          "id": "noRawPersonalPayload",
          "description": "Error cannot embed raw personal provider request/response."
        },
        {
          "id": "stackTracePrivate",
          "description": "Internal stack traces are not customer/public error fields."
        }
      ],
      "cms": {
        "label": "Integration Error",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "code",
          "category",
          "message",
          "retryable"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.oauthConfiguration",
      "name": "OAuth Configuration",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "authentication",
      "description": "OAuth 2 connection configuration without access/refresh token values.",
      "purpose": "Defines authorization metadata and protected token references for provider connectors.",
      "integrationModel": {
        "kind": "auth-configuration",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "secret"
      },
      "fields": [
        {
          "key": "authorizationUrl",
          "required": true,
          "nullable": false,
          "description": "Authorization endpoint.",
          "primitive": "fields.url"
        },
        {
          "key": "tokenUrl",
          "required": true,
          "nullable": false,
          "description": "Token endpoint.",
          "primitive": "fields.url"
        },
        {
          "key": "scopes",
          "required": true,
          "nullable": false,
          "description": "Requested scopes.",
          "primitive": "fields.multiSelect"
        },
        {
          "key": "clientId",
          "required": false,
          "nullable": true,
          "description": "OAuth client identifier.",
          "primitive": "fields.text"
        },
        {
          "key": "clientSecretRef",
          "required": false,
          "nullable": true,
          "description": "Protected client secret.",
          "schema": "integrations.secretReference"
        },
        {
          "key": "accessTokenRef",
          "required": false,
          "nullable": true,
          "description": "Protected access token.",
          "schema": "integrations.secretReference"
        },
        {
          "key": "refreshTokenRef",
          "required": false,
          "nullable": true,
          "description": "Protected refresh token.",
          "schema": "integrations.secretReference"
        },
        {
          "key": "redirectUri",
          "required": false,
          "nullable": true,
          "description": "Registered callback URL.",
          "primitive": "fields.url"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.secretReference",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "tokensNeverInline",
          "description": "Access and refresh tokens are secret references only."
        },
        {
          "id": "minimumScopes",
          "description": "Request only scopes required for enabled capabilities."
        },
        {
          "id": "stateAndPkceImplementation",
          "description": "Runtime OAuth implementation must use appropriate anti-forgery protections such as state and PKCE where applicable."
        }
      ],
      "cms": {
        "label": "OAuth Configuration",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "authorizationUrl",
          "tokenUrl",
          "scopes",
          "clientId"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.providerActionDefinition",
      "name": "Provider Action Definition",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "mapping",
      "description": "Typed external provider operation exposed by a connector.",
      "purpose": "Makes provider writes/read operations inspectable and capability-gated.",
      "integrationModel": {
        "kind": "action-definition",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "actionKey",
          "required": true,
          "nullable": false,
          "description": "Stable connector action key.",
          "primitive": "fields.text"
        },
        {
          "key": "label",
          "required": true,
          "nullable": false,
          "description": "Action label.",
          "primitive": "fields.text"
        },
        {
          "key": "capabilityKey",
          "required": true,
          "nullable": false,
          "description": "Required canonical capability.",
          "primitive": "fields.text"
        },
        {
          "key": "method",
          "required": true,
          "nullable": false,
          "description": "Operation semantic.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "read",
              "create",
              "update",
              "delete",
              "send",
              "verify",
              "test"
            ]
          }
        },
        {
          "key": "sideEffectLevel",
          "required": true,
          "nullable": false,
          "description": "Side effect classification.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "none",
              "read-only",
              "reversible",
              "external-write"
            ]
          }
        },
        {
          "key": "idempotent",
          "required": true,
          "nullable": false,
          "description": "Whether operation is safe to retry with same idempotency key.",
          "primitive": "fields.boolean"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "capabilityGated",
          "description": "Action requires declared/enabled capability."
        },
        {
          "id": "sideEffectsDeclared",
          "description": "External side effects are explicit."
        },
        {
          "id": "noArbitraryOperation",
          "description": "Only registered provider actions are callable."
        }
      ],
      "cms": {
        "label": "Provider Action Definition",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "actionKey",
          "label",
          "capabilityKey",
          "method"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.providerDefinition",
      "name": "Provider Definition",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "foundation",
      "description": "Provider-neutral identity and ownership metadata for an external service provider.",
      "purpose": "Gives connectors a stable provider identity without embedding provider assumptions throughout Sites.",
      "integrationModel": {
        "kind": "provider",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "providerKey",
          "required": true,
          "nullable": false,
          "description": "Stable provider key.",
          "primitive": "fields.text"
        },
        {
          "key": "displayName",
          "required": true,
          "nullable": false,
          "description": "Human provider name.",
          "primitive": "fields.text"
        },
        {
          "key": "family",
          "required": true,
          "nullable": false,
          "description": "Provider family.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "analytics",
              "advertising",
              "search",
              "tag-manager",
              "crm",
              "email",
              "webhook",
              "api",
              "other"
            ]
          }
        },
        {
          "key": "accountOwnership",
          "required": true,
          "nullable": false,
          "description": "Normal account ownership model.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "customer",
              "nextf",
              "external-party"
            ]
          }
        },
        {
          "key": "documentationUrl",
          "required": false,
          "nullable": true,
          "description": "Provider documentation URL.",
          "primitive": "fields.url"
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether new connections may use this provider.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": true
          }
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "customerOwnershipDefault",
          "description": "Customer Organization is the default external account owner."
        },
        {
          "id": "noCredentials",
          "description": "Provider definitions never contain credentials."
        },
        {
          "id": "stableProviderKey",
          "description": "Provider keys are stable machine identifiers."
        }
      ],
      "cms": {
        "label": "Provider Definition",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "providerKey",
          "displayName",
          "family",
          "accountOwnership"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.rateLimitState",
      "name": "Rate Limit State",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "resilience",
      "description": "Normalized provider rate-limit information.",
      "purpose": "Allows connectors to throttle/retry consistently while respecting provider guidance.",
      "integrationModel": {
        "kind": "rate-limit",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "limited",
          "required": true,
          "nullable": false,
          "description": "Whether currently rate limited.",
          "primitive": "fields.boolean"
        },
        {
          "key": "limit",
          "required": false,
          "nullable": true,
          "description": "Known allowance.",
          "primitive": "fields.integer"
        },
        {
          "key": "remaining",
          "required": false,
          "nullable": true,
          "description": "Known remaining allowance.",
          "primitive": "fields.integer"
        },
        {
          "key": "resetAt",
          "required": false,
          "nullable": true,
          "description": "Known reset time.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "retryAfterSeconds",
          "required": false,
          "nullable": true,
          "description": "Provider-supplied retry delay.",
          "primitive": "fields.integer"
        },
        {
          "key": "observedAt",
          "required": true,
          "nullable": false,
          "description": "Observation time.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "nonNegative",
          "description": "Limit/remaining/retry values cannot be negative."
        },
        {
          "id": "providerGuidanceRespected",
          "description": "Retry-After/reset information is respected when present."
        }
      ],
      "cms": {
        "label": "Rate Limit State",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "limited",
          "limit",
          "remaining",
          "resetAt"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.resourceReference",
      "name": "Resource Reference",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "configuration",
      "description": "Reference to a provider resource within an account.",
      "purpose": "Standardizes identifiers for properties, containers, pixels, datasets, conversion actions and similar resources.",
      "integrationModel": {
        "kind": "external-reference",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "providerKey",
          "required": true,
          "nullable": false,
          "description": "Provider key.",
          "primitive": "fields.text"
        },
        {
          "key": "resourceType",
          "required": true,
          "nullable": false,
          "description": "Provider resource type.",
          "primitive": "fields.text"
        },
        {
          "key": "externalResourceId",
          "required": true,
          "nullable": false,
          "description": "Provider resource identifier.",
          "primitive": "fields.text"
        },
        {
          "key": "displayName",
          "required": false,
          "nullable": true,
          "description": "Human label.",
          "primitive": "fields.text"
        },
        {
          "key": "account",
          "required": false,
          "nullable": true,
          "description": "Owning external account.",
          "schema": "integrations.accountReference"
        },
        {
          "key": "environment",
          "required": false,
          "nullable": true,
          "description": "NEXT F environment binding.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "preview",
              "staging",
              "production"
            ]
          }
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.accountReference",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "noSecretResourceIds",
          "description": "Resource references must not be used to store secret tokens."
        },
        {
          "id": "environmentAware",
          "description": "Environment-specific provider resources are identified explicitly."
        }
      ],
      "cms": {
        "label": "Resource Reference",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "providerKey",
          "resourceType",
          "externalResourceId",
          "displayName"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.retryPolicy",
      "name": "Retry Policy",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "resilience",
      "description": "Bounded retry behavior for integration operations.",
      "purpose": "Prevents uncontrolled retry storms and unsafe repetition of non-idempotent provider writes.",
      "integrationModel": {
        "kind": "retry-policy",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether retries are enabled.",
          "primitive": "fields.boolean"
        },
        {
          "key": "maxAttempts",
          "required": true,
          "nullable": false,
          "description": "Maximum total attempts.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 1,
            "maximum": 10
          }
        },
        {
          "key": "strategy",
          "required": true,
          "nullable": false,
          "description": "Backoff strategy.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "fixed",
              "linear",
              "exponential"
            ]
          }
        },
        {
          "key": "baseDelaySeconds",
          "required": true,
          "nullable": false,
          "description": "Base delay.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 1,
            "maximum": 3600
          }
        },
        {
          "key": "maxDelaySeconds",
          "required": true,
          "nullable": false,
          "description": "Maximum delay.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 1,
            "maximum": 86400
          }
        },
        {
          "key": "retryableCategories",
          "required": true,
          "nullable": false,
          "description": "Error categories eligible for retry.",
          "primitive": "fields.multiSelect"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "boundedAttempts",
          "description": "Retries have a strict maximum."
        },
        {
          "id": "nonIdempotentProtected",
          "description": "Non-idempotent operations are not blindly retried."
        },
        {
          "id": "rateLimitOverrides",
          "description": "Provider Retry-After guidance overrides shorter local delay."
        }
      ],
      "cms": {
        "label": "Retry Policy",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "enabled",
          "maxAttempts",
          "strategy",
          "baseDelaySeconds"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.runtimeBinding",
      "name": "Runtime Binding",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "runtime",
      "description": "Declares where and how an integration capability executes.",
      "purpose": "Separates Site Runtime, tag-manager and trusted server/provider API execution.",
      "integrationModel": {
        "kind": "runtime",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "mode",
          "required": true,
          "nullable": false,
          "description": "Runtime mode.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "site-runtime",
              "tag-manager",
              "nextf-server",
              "provider-api",
              "webhook-adapter",
              "manual-approved"
            ]
          }
        },
        {
          "key": "clientLoadAllowed",
          "required": true,
          "nullable": false,
          "description": "Whether client runtime code may load.",
          "primitive": "fields.boolean"
        },
        {
          "key": "serverExecutionAllowed",
          "required": true,
          "nullable": false,
          "description": "Whether trusted server execution may occur.",
          "primitive": "fields.boolean"
        },
        {
          "key": "scriptPolicy",
          "required": true,
          "nullable": false,
          "description": "Script behavior.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "none",
              "approved-provider-loader",
              "tag-manager-controlled",
              "manual-approved"
            ]
          }
        },
        {
          "key": "configurationExposure",
          "required": false,
          "nullable": true,
          "description": "Public configuration keys permitted to client.",
          "primitive": "fields.multiSelect"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "noArbitraryJavascript",
          "description": "Runtime binding never authorizes arbitrary JS execution."
        },
        {
          "id": "publicConfigAllowlist",
          "description": "Only explicitly public-client-eligible keys may be exposed."
        },
        {
          "id": "serverSecretsProtected",
          "description": "Server execution may resolve secrets; client execution may not."
        }
      ],
      "cms": {
        "label": "Runtime Binding",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "mode",
          "clientLoadAllowed",
          "serverExecutionAllowed",
          "scriptPolicy"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.secretReference",
      "name": "Secret Reference",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "authentication",
      "description": "Opaque reference to a server-side secret.",
      "purpose": "Allows contracts to point to protected credentials without storing or exposing secret values.",
      "integrationModel": {
        "kind": "secret-reference",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "secret"
      },
      "fields": [
        {
          "key": "secretRef",
          "required": true,
          "nullable": false,
          "description": "Opaque server-side secret reference.",
          "primitive": "fields.text"
        },
        {
          "key": "purpose",
          "required": true,
          "nullable": false,
          "description": "Credential purpose.",
          "primitive": "fields.text"
        },
        {
          "key": "version",
          "required": false,
          "nullable": true,
          "description": "Secret rotation version.",
          "primitive": "fields.integer"
        },
        {
          "key": "rotatedAt",
          "required": false,
          "nullable": true,
          "description": "Last rotation time.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "opaqueOnly",
          "description": "Reference must not encode the secret value."
        },
        {
          "id": "serverSideResolution",
          "description": "Secret reference resolves only in trusted server infrastructure."
        },
        {
          "id": "neverPublic",
          "description": "Secret references are not delivered to public clients."
        }
      ],
      "cms": {
        "label": "Secret Reference",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "secretRef",
          "purpose",
          "version",
          "rotatedAt"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.syncCursor",
      "name": "Sync Cursor",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "sync",
      "description": "Protected progress pointer for incremental provider synchronization.",
      "purpose": "Allows resumable sync without exposing provider pagination tokens publicly.",
      "integrationModel": {
        "kind": "sync-state",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "cursorType",
          "required": true,
          "nullable": false,
          "description": "Cursor type.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "cursor",
              "page",
              "timestamp",
              "provider-token"
            ]
          }
        },
        {
          "key": "value",
          "required": true,
          "nullable": false,
          "description": "Opaque cursor/token value.",
          "primitive": "fields.text"
        },
        {
          "key": "updatedAt",
          "required": true,
          "nullable": false,
          "description": "Cursor update time.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "expiresAt",
          "required": false,
          "nullable": true,
          "description": "Known expiry.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "privateOperationalState",
          "description": "Sync cursor is private operational state."
        },
        {
          "id": "tokenSensitive",
          "description": "Provider tokens are protected from public delivery/logging."
        }
      ],
      "cms": {
        "label": "Sync Cursor",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "cursorType",
          "value",
          "updatedAt",
          "expiresAt"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.syncPolicy",
      "name": "Sync Policy",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "sync",
      "description": "Defines controlled synchronization behavior with an external provider.",
      "purpose": "Makes direction, cadence, pagination and conflict handling explicit.",
      "integrationModel": {
        "kind": "sync-policy",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "direction",
          "required": true,
          "nullable": false,
          "description": "Sync direction.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "pull",
              "push",
              "bidirectional"
            ]
          }
        },
        {
          "key": "mode",
          "required": true,
          "nullable": false,
          "description": "Execution mode.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "manual",
              "scheduled",
              "event-driven"
            ]
          }
        },
        {
          "key": "conflictPolicy",
          "required": true,
          "nullable": false,
          "description": "Conflict handling.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "nextf-wins",
              "provider-wins",
              "newest-wins",
              "manual-review",
              "field-specific"
            ]
          }
        },
        {
          "key": "batchSize",
          "required": false,
          "nullable": true,
          "description": "Maximum batch size.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 1,
            "maximum": 1000
          }
        },
        {
          "key": "cursorStrategy",
          "required": false,
          "nullable": true,
          "description": "Pagination/cursor strategy.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "none",
              "cursor",
              "page",
              "updated-since",
              "provider-token"
            ]
          }
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether sync may run.",
          "primitive": "fields.boolean"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "boundedBatch",
          "description": "Sync batch size is bounded."
        },
        {
          "id": "conflictExplicit",
          "description": "Bidirectional sync requires explicit conflict policy."
        },
        {
          "id": "disabledNoSync",
          "description": "Disabled policy prevents runs."
        }
      ],
      "cms": {
        "label": "Sync Policy",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "direction",
          "mode",
          "conflictPolicy",
          "batchSize"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.syncResult",
      "name": "Sync Result",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "sync",
      "description": "Normalized result of a synchronization run.",
      "purpose": "Provides provider-neutral counts and safe failure information.",
      "integrationModel": {
        "kind": "operation-result",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Result state.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "succeeded",
              "partial",
              "failed",
              "cancelled"
            ]
          }
        },
        {
          "key": "readCount",
          "required": false,
          "nullable": true,
          "description": "Records read.",
          "primitive": "fields.integer"
        },
        {
          "key": "createdCount",
          "required": false,
          "nullable": true,
          "description": "Records created.",
          "primitive": "fields.integer"
        },
        {
          "key": "updatedCount",
          "required": false,
          "nullable": true,
          "description": "Records updated.",
          "primitive": "fields.integer"
        },
        {
          "key": "skippedCount",
          "required": false,
          "nullable": true,
          "description": "Records skipped.",
          "primitive": "fields.integer"
        },
        {
          "key": "failedCount",
          "required": false,
          "nullable": true,
          "description": "Records failed.",
          "primitive": "fields.integer"
        },
        {
          "key": "errors",
          "required": false,
          "nullable": true,
          "description": "Normalized errors.",
          "itemsSchema": "integrations.integrationError"
        }
      ],
      "relationships": [
        {
          "type": "composesMany",
          "target": "integrations.integrationError",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "countsNonNegative",
          "description": "All counters are non-negative."
        },
        {
          "id": "noRawProviderDump",
          "description": "Result does not store whole provider responses."
        }
      ],
      "cms": {
        "label": "Sync Result",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "status",
          "readCount",
          "createdCount",
          "updatedCount"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "integrations.syncRun",
      "name": "Sync Run",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "category": "sync",
      "description": "One execution of a provider synchronization policy.",
      "purpose": "Provides auditable sync timing, cursor boundaries and normalized result.",
      "integrationModel": {
        "kind": "operation",
        "customerManaged": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "supportsRevision": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "runId",
          "required": true,
          "nullable": false,
          "description": "Sync run ID.",
          "primitive": "fields.text"
        },
        {
          "key": "connectionRef",
          "required": true,
          "nullable": false,
          "description": "Integration connection ID.",
          "primitive": "fields.text"
        },
        {
          "key": "startedAt",
          "required": true,
          "nullable": false,
          "description": "Start time.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "completedAt",
          "required": false,
          "nullable": true,
          "description": "Completion time.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "cursorBefore",
          "required": false,
          "nullable": true,
          "description": "Starting cursor.",
          "schema": "integrations.syncCursor"
        },
        {
          "key": "cursorAfter",
          "required": false,
          "nullable": true,
          "description": "Ending cursor.",
          "schema": "integrations.syncCursor"
        },
        {
          "key": "result",
          "required": false,
          "nullable": true,
          "description": "Run result.",
          "schema": "integrations.syncResult"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "integrations.syncCursor",
          "description": "Uses the referenced canonical contract."
        },
        {
          "type": "composes",
          "target": "integrations.syncResult",
          "description": "Uses the referenced canonical contract."
        }
      ],
      "validationRules": [
        {
          "id": "cursorAdvanceOnSuccess",
          "description": "Cursor advances only according to safe provider semantics."
        },
        {
          "id": "auditableRun",
          "description": "Sync run retains normalized outcome without raw secret payloads."
        }
      ],
      "cms": {
        "label": "Sync Run",
        "icon": "fa-plug",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "integration-schema",
        "defaultPlacement": "integrations",
        "summaryFields": [
          "runId",
          "connectionRef",
          "startedAt",
          "completedAt"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Only explicitly public-eligible fields may enter client/runtime configuration; secrets and privileged operational metadata remain server-side."
      },
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18",
        "privacy": "phase-30"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    }
  ],
  "connectors": [
    {
      "$id": "integrations.crm",
      "name": "CRM",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "generic-crm",
      "family": "crm",
      "description": "Generic CRM connector using explicit canonical field mappings for leads and other approved records.",
      "ownership": "customer",
      "runtimeModes": [
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "crm.record.push",
        "crm.record.pull",
        "data.sync.pull",
        "data.sync.push",
        "account.verify",
        "resource.discover"
      ],
      "authentication": {
        "type": "configurable",
        "supported": [
          "oauth2",
          "api-key",
          "bearer",
          "provider-managed"
        ]
      },
      "configurationFields": [
        {
          "key": "providerKey",
          "label": "Provider Adapter Key",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Provider Adapter Key",
          "validation": {}
        },
        {
          "key": "accountId",
          "label": "Account ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Account ID",
          "validation": {}
        },
        {
          "key": "credentialRef",
          "label": "Credential Reference",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Credential Reference",
          "validation": {}
        },
        {
          "key": "defaultObjectType",
          "label": "Default Object Type",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Default Object Type",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [],
        "mode": "mapped-data-purpose"
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [
        "Complete form payloads must not be forwarded by default."
      ],
      "aliases": [
        "CRM"
      ]
    },
    {
      "$id": "integrations.customApi",
      "name": "Custom API",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "generic-api",
      "family": "api",
      "description": "Restricted server-side custom API connector for integrations not covered by a dedicated provider adapter.",
      "ownership": "customer",
      "runtimeModes": [
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "api.request",
        "data.sync.pull",
        "data.sync.push"
      ],
      "authentication": {
        "type": "configurable",
        "supported": [
          "none",
          "oauth2",
          "api-key",
          "bearer",
          "signed"
        ]
      },
      "configurationFields": [
        {
          "key": "providerLabel",
          "label": "Provider Label",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Provider Label",
          "validation": {}
        },
        {
          "key": "baseUrl",
          "label": "Base URL",
          "primitive": "fields.url",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "HTTPS base URL.",
          "validation": {
            "scheme": "https"
          }
        },
        {
          "key": "authProfileRef",
          "label": "Authentication Profile",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "Authentication Profile",
          "validation": {}
        },
        {
          "key": "timeoutSeconds",
          "label": "Timeout Seconds",
          "primitive": "fields.integer",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Bounded timeout.",
          "validation": {
            "minimum": 1,
            "maximum": 30
          }
        },
        {
          "key": "allowedPaths",
          "label": "Allowed Paths",
          "primitive": "fields.multiSelect",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "Explicit path allowlist.",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [],
        "mode": "mapping-specific"
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [
        "Hosts and paths must be allowlisted.",
        "This connector is not an arbitrary script runner or unrestricted URL fetcher.",
        "Outbound requests must reject loopback, link-local, metadata-service and private-network destinations by default.",
        "DNS resolution and HTTP redirects must remain inside the configured host/path allowlist."
      ],
      "aliases": [
        "API",
        "Custom API"
      ]
    },
    {
      "$id": "integrations.emailProvider",
      "name": "Email Provider",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "generic-email",
      "family": "email",
      "description": "Generic transactional email provider connector for approved NEXT F workflows.",
      "ownership": "customer",
      "runtimeModes": [
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "message.send",
        "account.verify"
      ],
      "authentication": {
        "type": "configurable",
        "supported": [
          "api-key",
          "oauth2",
          "provider-managed"
        ]
      },
      "configurationFields": [
        {
          "key": "providerKey",
          "label": "Provider Adapter Key",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Provider Adapter Key",
          "validation": {}
        },
        {
          "key": "senderEmail",
          "label": "Sender Email",
          "primitive": "fields.email",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Sender Email",
          "validation": {}
        },
        {
          "key": "senderName",
          "label": "Sender Name",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Sender Name",
          "validation": {}
        },
        {
          "key": "credentialRef",
          "label": "Credential Reference",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Credential Reference",
          "validation": {}
        },
        {
          "key": "replyToEmail",
          "label": "Reply-To Email",
          "primitive": "fields.email",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Reply-To Email",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [],
        "mode": "purpose-dependent"
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [
        "Transactional form notifications do not automatically imply marketing consent."
      ],
      "aliases": [
        "Email",
        "Transactional Email"
      ]
    },
    {
      "$id": "integrations.fazerCards",
      "name": "FazerCards",
      "version": "1.2.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "fazercards",
      "family": "gaming-supplier",
      "description": "FazerCards server-side Gaming supplier adapter descriptor. It is an implementation adapter, not the NEXT F canonical public model.",
      "ownership": "nextf",
      "runtimeModes": [
        "nextf-server",
        "provider-api",
        "webhook-adapter"
      ],
      "capabilities": [
        "api.request",
        "account.verify",
        "data.sync.pull",
        "gaming.catalog.sync",
        "gaming.availability.sync",
        "gaming.account.validate",
        "gaming.fulfillment.submit",
        "gaming.fulfillment.refresh"
      ],
      "authentication": {
        "type": "api-key",
        "supported": [
          "api-key",
          "signed"
        ]
      },
      "configurationFields": [
        {
          "key": "providerKey",
          "label": "Provider Key",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "Non-secret provider key.",
          "validation": {}
        },
        {
          "key": "baseUrl",
          "label": "Base URL",
          "primitive": "fields.url",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "Provider API base URL.",
          "validation": {
            "scheme": "https"
          }
        },
        {
          "key": "credentialSecretRef",
          "label": "Credential Secret Reference",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Protected credential reference.",
          "validation": {}
        },
        {
          "key": "webhookSigningSecretRef",
          "label": "Webhook Signing Secret Reference",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Protected inbound webhook signing reference.",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [],
        "mode": "business-purpose"
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [
        {
          "key": "offer-mapping",
          "canonicalContract": "gaming.supplierOfferMapping"
        }
      ],
      "futureBindings": {
        "events": "phase-39",
        "webhooks": "phase-39",
        "permissions": "phase-39",
        "siteManifest": "phase-39",
        "api": "phase-39"
      },
      "notes": [
        "Provider-native payloads remain adapter-private and must not become public Gaming contracts."
      ],
      "aliases": [
        "FazerCards",
        "Fazer Cards"
      ]
    },
    {
      "$id": "integrations.gamingSupplier",
      "name": "Gaming Supplier",
      "version": "1.2.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "gaming-supplier",
      "family": "gaming-supplier",
      "description": "Provider-neutral server-side Gaming supplier adapter descriptor.",
      "ownership": "nextf",
      "runtimeModes": [
        "nextf-server",
        "provider-api",
        "webhook-adapter"
      ],
      "capabilities": [
        "api.request",
        "account.verify",
        "data.sync.pull",
        "gaming.catalog.sync",
        "gaming.availability.sync",
        "gaming.account.validate",
        "gaming.fulfillment.submit",
        "gaming.fulfillment.refresh"
      ],
      "authentication": {
        "type": "api-key",
        "supported": [
          "api-key",
          "signed"
        ]
      },
      "configurationFields": [
        {
          "key": "providerKey",
          "label": "Provider Key",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "Non-secret provider key.",
          "validation": {}
        },
        {
          "key": "baseUrl",
          "label": "Base URL",
          "primitive": "fields.url",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "Provider API base URL.",
          "validation": {
            "scheme": "https"
          }
        },
        {
          "key": "credentialSecretRef",
          "label": "Credential Secret Reference",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Protected credential reference.",
          "validation": {}
        },
        {
          "key": "webhookSigningSecretRef",
          "label": "Webhook Signing Secret Reference",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Protected inbound webhook signing reference.",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [],
        "mode": "business-purpose"
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [
        {
          "key": "offer-mapping",
          "canonicalContract": "gaming.supplierOfferMapping"
        }
      ],
      "futureBindings": {
        "events": "phase-39",
        "webhooks": "phase-39",
        "permissions": "phase-39",
        "siteManifest": "phase-39",
        "api": "phase-39"
      },
      "notes": [
        "Provider-native payloads remain adapter-private and must not become public Gaming contracts."
      ],
      "aliases": [
        "Gaming Supplier",
        "Supplier Router"
      ]
    },
    {
      "$id": "integrations.googleAds",
      "name": "Google Ads",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "google",
      "family": "advertising",
      "description": "Google Ads conversion and reporting connector preserving canonical NEXT F conversion keys.",
      "ownership": "customer",
      "runtimeModes": [
        "site-runtime",
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "conversion.dispatch.client",
        "conversion.dispatch.server",
        "reporting.read",
        "resource.discover",
        "account.verify"
      ],
      "authentication": {
        "type": "mixed",
        "supported": [
          "none",
          "oauth2"
        ]
      },
      "configurationFields": [
        {
          "key": "customerId",
          "label": "Customer ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Customer ID",
          "validation": {}
        },
        {
          "key": "conversionId",
          "label": "Conversion ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Conversion ID",
          "validation": {
            "pattern": "^AW-[0-9]+$"
          }
        },
        {
          "key": "conversionActionId",
          "label": "Conversion Action ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Conversion Action ID",
          "validation": {}
        },
        {
          "key": "conversionLabel",
          "label": "Conversion Label",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Conversion Label",
          "validation": {}
        },
        {
          "key": "oauthProfileRef",
          "label": "OAuth Profile",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "OAuth Profile",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [
          "marketing"
        ],
        "requiredFor": [
          "conversion.dispatch.client",
          "conversion.dispatch.server"
        ]
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [],
      "aliases": [
        "Google Ads",
        "GAds"
      ]
    },
    {
      "$id": "integrations.googleAnalytics4",
      "name": "Google Analytics 4",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "google",
      "family": "analytics",
      "description": "GA4 measurement and reporting connector with explicit client/server boundaries.",
      "ownership": "customer",
      "runtimeModes": [
        "site-runtime",
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "event.dispatch.client",
        "event.dispatch.server",
        "reporting.read",
        "resource.discover",
        "account.verify"
      ],
      "authentication": {
        "type": "mixed",
        "supported": [
          "none",
          "oauth2",
          "api-key"
        ]
      },
      "configurationFields": [
        {
          "key": "measurementId",
          "label": "Measurement ID",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Measurement ID",
          "validation": {
            "pattern": "^G-[A-Z0-9]+$"
          }
        },
        {
          "key": "propertyId",
          "label": "Property ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Property ID",
          "validation": {}
        },
        {
          "key": "streamId",
          "label": "Stream ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Stream ID",
          "validation": {}
        },
        {
          "key": "apiSecretRef",
          "label": "Measurement Protocol API Secret",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Opaque integrations.secretReference ID.",
          "validation": {}
        },
        {
          "key": "oauthProfileRef",
          "label": "OAuth Profile",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "OAuth Profile",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [
          "analytics"
        ],
        "requiredFor": [
          "event.dispatch.client",
          "event.dispatch.server"
        ]
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [],
      "aliases": [
        "GA4",
        "Google Analytics"
      ]
    },
    {
      "$id": "integrations.googleSearchConsole",
      "name": "Google Search Console",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "google",
      "family": "search",
      "description": "Server-side Search Console reporting and property verification connector.",
      "ownership": "customer",
      "runtimeModes": [
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "reporting.read",
        "resource.discover",
        "account.verify"
      ],
      "authentication": {
        "type": "oauth2"
      },
      "configurationFields": [
        {
          "key": "propertyUri",
          "label": "Search Console Property URI",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Exact Search Console property identifier, including URL-prefix properties or sc-domain: domain properties.",
          "validation": {
            "minLength": 1,
            "examples": [
              "https://example.com/",
              "sc-domain:example.com"
            ]
          }
        },
        {
          "key": "oauthProfileRef",
          "label": "OAuth Profile",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "OAuth Profile",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [],
        "mode": "not-tracking"
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [
        "Search Console data source/freshness must remain visible in SEO/reporting records."
      ],
      "aliases": [
        "GSC",
        "Search Console"
      ]
    },
    {
      "$id": "integrations.googleTagManager",
      "name": "Google Tag Manager",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "google",
      "family": "tag-manager",
      "description": "Loads a customer-owned Google Tag Manager container through the NEXT F Site Runtime.",
      "ownership": "customer",
      "runtimeModes": [
        "site-runtime",
        "tag-manager"
      ],
      "capabilities": [
        "tag.load",
        "event.dispatch.client"
      ],
      "authentication": {
        "type": "none"
      },
      "configurationFields": [
        {
          "key": "containerId",
          "label": "Container ID",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Container ID",
          "validation": {
            "pattern": "^GTM-[A-Z0-9]+$"
          }
        },
        {
          "key": "dataLayerName",
          "label": "Data Layer Name",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Defaults to dataLayer when omitted.",
          "validation": {}
        },
        {
          "key": "enabled",
          "label": "Enabled",
          "primitive": "fields.boolean",
          "required": true,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Enabled",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [
          "analytics",
          "marketing"
        ],
        "mode": "container-dependent"
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [
        "The GTM container can load third-party tags; container governance remains important.",
        "GTM does not grant arbitrary NEXT F CMS script execution."
      ],
      "aliases": [
        "GTM"
      ]
    },
    {
      "$id": "integrations.linkedin",
      "name": "LinkedIn",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "linkedin",
      "family": "advertising",
      "description": "LinkedIn Insight/advertising connector with provider-specific conversion identifiers isolated in mappings.",
      "ownership": "customer",
      "runtimeModes": [
        "site-runtime",
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "tag.load",
        "conversion.dispatch.client",
        "conversion.dispatch.server",
        "reporting.read",
        "resource.discover"
      ],
      "authentication": {
        "type": "mixed",
        "supported": [
          "none",
          "oauth2"
        ]
      },
      "configurationFields": [
        {
          "key": "partnerId",
          "label": "Partner ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Partner ID",
          "validation": {}
        },
        {
          "key": "adAccountId",
          "label": "Ad Account ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Ad Account ID",
          "validation": {}
        },
        {
          "key": "conversionRuleId",
          "label": "Conversion Rule ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Conversion Rule ID",
          "validation": {}
        },
        {
          "key": "oauthProfileRef",
          "label": "OAuth Profile",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "OAuth Profile",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [
          "marketing"
        ]
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [],
      "aliases": [
        "LinkedIn Insight Tag",
        "Insight Tag"
      ]
    },
    {
      "$id": "integrations.meta",
      "name": "Meta",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "meta",
      "family": "advertising",
      "description": "Meta browser Pixel and server-side event connector with explicit deduplication and consent mapping.",
      "ownership": "customer",
      "runtimeModes": [
        "site-runtime",
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "event.dispatch.client",
        "event.dispatch.server",
        "conversion.dispatch.client",
        "conversion.dispatch.server",
        "reporting.read",
        "resource.discover",
        "account.verify"
      ],
      "authentication": {
        "type": "mixed",
        "supported": [
          "none",
          "bearer"
        ]
      },
      "configurationFields": [
        {
          "key": "pixelId",
          "label": "Pixel ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Pixel ID",
          "validation": {}
        },
        {
          "key": "datasetId",
          "label": "Dataset ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Dataset ID",
          "validation": {}
        },
        {
          "key": "adAccountId",
          "label": "Ad Account ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Ad Account ID",
          "validation": {}
        },
        {
          "key": "accessTokenSecretRef",
          "label": "Access Token Secret Reference",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Access Token Secret Reference",
          "validation": {}
        },
        {
          "key": "testEventCode",
          "label": "Test Event Code",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "Test Event Code",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [
          "marketing"
        ],
        "requiredFor": [
          "event.dispatch.client",
          "event.dispatch.server",
          "conversion.dispatch.client",
          "conversion.dispatch.server"
        ]
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [
        "Browser and server copies of the same event must use a stable deduplication identifier where configured."
      ],
      "aliases": [
        "Facebook",
        "Facebook Pixel",
        "Meta Pixel",
        "Conversions API",
        "CAPI"
      ]
    },
    {
      "$id": "integrations.microsoftAds",
      "name": "Microsoft Ads",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "microsoft",
      "family": "advertising",
      "description": "Microsoft Advertising UET/conversion/reporting connector mapped to canonical NEXT F conversions.",
      "ownership": "customer",
      "runtimeModes": [
        "site-runtime",
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "tag.load",
        "conversion.dispatch.client",
        "conversion.dispatch.server",
        "reporting.read",
        "resource.discover"
      ],
      "authentication": {
        "type": "mixed",
        "supported": [
          "none",
          "oauth2"
        ]
      },
      "configurationFields": [
        {
          "key": "uetTagId",
          "label": "UET Tag ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "UET Tag ID",
          "validation": {}
        },
        {
          "key": "customerId",
          "label": "Customer ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Customer ID",
          "validation": {}
        },
        {
          "key": "accountId",
          "label": "Account ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Account ID",
          "validation": {}
        },
        {
          "key": "conversionGoalId",
          "label": "Conversion Goal ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Conversion Goal ID",
          "validation": {}
        },
        {
          "key": "oauthProfileRef",
          "label": "OAuth Profile",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "OAuth Profile",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [
          "marketing"
        ]
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [],
      "aliases": [
        "Microsoft Advertising",
        "UET"
      ]
    },
    {
      "$id": "integrations.microsoftClarity",
      "name": "Microsoft Clarity",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "microsoft",
      "family": "analytics",
      "description": "Browser-side Microsoft Clarity connector controlled by Site consent and runtime policy.",
      "ownership": "customer",
      "runtimeModes": [
        "site-runtime"
      ],
      "capabilities": [
        "tag.load",
        "event.dispatch.client"
      ],
      "authentication": {
        "type": "none"
      },
      "configurationFields": [
        {
          "key": "projectId",
          "label": "Project ID",
          "primitive": "fields.text",
          "required": true,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Project ID",
          "validation": {}
        },
        {
          "key": "enabled",
          "label": "Enabled",
          "primitive": "fields.boolean",
          "required": true,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Enabled",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [
          "analytics"
        ]
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [],
      "aliases": [
        "Clarity"
      ]
    },
    {
      "$id": "integrations.tiktok",
      "name": "TikTok",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "tiktok",
      "family": "advertising",
      "description": "TikTok advertising measurement connector using canonical NEXT F events and conversions.",
      "ownership": "customer",
      "runtimeModes": [
        "site-runtime",
        "nextf-server",
        "provider-api"
      ],
      "capabilities": [
        "event.dispatch.client",
        "event.dispatch.server",
        "conversion.dispatch.client",
        "conversion.dispatch.server",
        "reporting.read"
      ],
      "authentication": {
        "type": "mixed",
        "supported": [
          "none",
          "bearer"
        ]
      },
      "configurationFields": [
        {
          "key": "pixelId",
          "label": "Pixel ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": true,
          "secret": false,
          "customerEditable": true,
          "helpText": "Pixel ID",
          "validation": {}
        },
        {
          "key": "advertiserId",
          "label": "Advertiser ID",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Advertiser ID",
          "validation": {}
        },
        {
          "key": "accessTokenSecretRef",
          "label": "Access Token Secret Reference",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Access Token Secret Reference",
          "validation": {}
        }
      ],
      "consent": {
        "categories": [
          "marketing"
        ]
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [],
      "aliases": [
        "TikTok Pixel"
      ]
    },
    {
      "$id": "integrations.webhook",
      "name": "Webhook",
      "version": "0.11.0",
      "status": "stable",
      "domain": "integrations",
      "type": "connector",
      "providerKey": "generic-webhook",
      "family": "webhook",
      "description": "Generic outbound webhook adapter. Full webhook platform contracts remain Phase 14 authority.",
      "ownership": "customer",
      "runtimeModes": [
        "nextf-server",
        "webhook-adapter"
      ],
      "capabilities": [
        "webhook.dispatch"
      ],
      "authentication": {
        "type": "configurable",
        "supported": [
          "none",
          "bearer",
          "api-key",
          "signed"
        ]
      },
      "configurationFields": [
        {
          "key": "endpointUrl",
          "label": "Endpoint URL",
          "primitive": "fields.url",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "HTTPS endpoint.",
          "validation": {
            "scheme": "https"
          }
        },
        {
          "key": "authProfileRef",
          "label": "Authentication Profile",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": false,
          "helpText": "Authentication Profile",
          "validation": {}
        },
        {
          "key": "signingSecretRef",
          "label": "Signing Secret Reference",
          "primitive": "fields.text",
          "required": false,
          "publicClientEligible": false,
          "secret": true,
          "customerEditable": false,
          "helpText": "Signing Secret Reference",
          "validation": {}
        },
        {
          "key": "timeoutSeconds",
          "label": "Timeout Seconds",
          "primitive": "fields.integer",
          "required": true,
          "publicClientEligible": false,
          "secret": false,
          "customerEditable": true,
          "helpText": "Bounded request timeout.",
          "validation": {
            "minimum": 1,
            "maximum": 30
          }
        }
      ],
      "consent": {
        "categories": [],
        "mode": "event-specific"
      },
      "dataHandling": {
        "minimize": true,
        "secretsServerSide": true,
        "rawPayloadForwarding": false
      },
      "health": {
        "supportsConnectionTest": true,
        "supportsHealthSnapshot": true
      },
      "actions": [],
      "mappings": [],
      "futureBindings": {
        "events": "phase-13",
        "webhooks": "phase-14",
        "permissions": "phase-15",
        "siteManifest": "phase-16",
        "api": "phase-18"
      },
      "notes": [
        "Phase 10 does not define final webhook signing/retry/subscription semantics.",
        "Outbound requests must enforce SSRF protections and must not resolve to loopback, link-local, metadata-service or private network targets unless an explicitly trusted NEXT F policy allows that destination.",
        "HTTP redirects must not escape the validated destination policy."
      ],
      "aliases": [
        "Webhook"
      ]
    }
  ]
};
