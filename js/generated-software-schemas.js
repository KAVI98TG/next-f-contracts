// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source: registry/software/index.json
// SHA-256: 034599e2a3a147682ae09e8945fe7bf611513c0860afd7b30ed0b96bc162faa4
export const GENERATED_SOFTWARE_SOURCE_SHA256 = "034599e2a3a147682ae09e8945fe7bf611513c0860afd7b30ed0b96bc162faa4";
export const GENERATED_SOFTWARE_SCHEMAS = {
  "registryVersion": "1.3.0",
  "schemaVersion": "1.0.0",
  "title": "NEXT F Software Contract Registry",
  "description": "Canonical Software catalog, commerce extension, licensing, entitlement, release, update, download and support contracts.",
  "standard": "standards/48-software-contract-standard.md",
  "definitionCount": 19,
  "categoryCount": 7,
  "sourceDirectory": "registry/software/definitions",
  "categories": [
    {
      "id": "catalog",
      "label": "Catalog",
      "description": "Software products, editions, prices and bundle grants."
    },
    {
      "id": "commerce",
      "label": "Software Commerce",
      "description": "Software customer, order-extension and subscription concepts that reference canonical Commerce financial truth."
    },
    {
      "id": "licensing",
      "label": "Licensing",
      "description": "Licenses, activations and normalized site identity."
    },
    {
      "id": "entitlements",
      "label": "Entitlements",
      "description": "Machine-readable capability grants and grandfathered access."
    },
    {
      "id": "delivery",
      "label": "Releases & Delivery",
      "description": "Releases, artifacts, compatibility, update checks and short-lived download grants."
    },
    {
      "id": "support",
      "label": "Support",
      "description": "Software support entitlement and customer support access."
    },
    {
      "id": "audit",
      "label": "Audit",
      "description": "References to immutable operational audit evidence."
    }
  ],
  "customerCapabilities": [
    {
      "capabilityId": "software.account.view-own",
      "description": "View own Software account",
      "scope": "authenticated-owner",
      "crossCustomerAccess": false
    },
    {
      "capabilityId": "software.orders.view-own",
      "description": "View own Software orders",
      "scope": "authenticated-owner",
      "crossCustomerAccess": false
    },
    {
      "capabilityId": "software.subscriptions.view-own",
      "description": "View own Software subscriptions",
      "scope": "authenticated-owner",
      "crossCustomerAccess": false
    },
    {
      "capabilityId": "software.subscriptions.cancel-own",
      "description": "Cancel own Software subscription according to policy",
      "scope": "authenticated-owner",
      "crossCustomerAccess": false
    },
    {
      "capabilityId": "software.licenses.view-own",
      "description": "View own masked Software licenses",
      "scope": "authenticated-owner",
      "crossCustomerAccess": false
    },
    {
      "capabilityId": "software.activations.manage-own",
      "description": "Manage own Software license activations",
      "scope": "authenticated-owner",
      "crossCustomerAccess": false
    },
    {
      "capabilityId": "software.downloads.create-own",
      "description": "Create own eligible Software download grants",
      "scope": "authenticated-owner",
      "crossCustomerAccess": false
    },
    {
      "capabilityId": "software.support.create-own",
      "description": "Create support requests under own Software support entitlement",
      "scope": "authenticated-owner",
      "crossCustomerAccess": false
    }
  ],
  "schemas": [
    {
      "$id": "software.product",
      "name": "Software Product",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "catalog",
      "description": "Stable downloadable-software product identity used for Documentation, Blog Suite and Publisher Suite.",
      "purpose": "Stable downloadable-software product identity used for Documentation, Blog Suite and Publisher Suite.",
      "softwareModel": {
        "kind": "entity",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": true,
        "immutableSnapshot": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Immutable Software product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Public product slug.",
          "primitive": "fields.slug"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Customer-facing product name.",
          "primitive": "fields.text"
        },
        {
          "key": "productType",
          "required": true,
          "nullable": false,
          "description": "Product kind.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "plugin",
              "bundle"
            ]
          }
        },
        {
          "key": "publicDescription",
          "required": false,
          "nullable": true,
          "description": "Public product description.",
          "primitive": "fields.textarea"
        },
        {
          "key": "mediaRef",
          "required": false,
          "nullable": true,
          "description": "Governed public media reference.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Product lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "draft",
              "active",
              "archived"
            ]
          }
        },
        {
          "key": "publicVisible",
          "required": true,
          "nullable": false,
          "description": "Whether the product is visible in public catalog projections.",
          "primitive": "fields.boolean"
        }
      ],
      "relationships": [
        {
          "type": "uses",
          "target": "shared.mediaReference",
          "description": "Product media should use governed Media references."
        }
      ],
      "validationRules": [
        {
          "id": "authorityBoundary",
          "description": "Mutation is accepted only by the declared trusted Software authority."
        },
        {
          "id": "noSecrets",
          "description": "Contract examples and public projections never contain service credentials, signing keys or raw download tokens."
        }
      ],
      "cms": {
        "label": "Software Product",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "productId",
          "slug",
          "name",
          "productType"
        ],
        "primaryActions": [
          "view",
          "create",
          "edit",
          "publish"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.edition",
      "name": "Software Edition",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "catalog",
      "description": "Commercial edition/plan identity and grant policy for a Software Product.",
      "purpose": "Commercial edition/plan identity and grant policy for a Software Product.",
      "softwareModel": {
        "kind": "entity",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": true,
        "immutableSnapshot": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "editionId",
          "required": true,
          "nullable": false,
          "description": "Immutable Software edition ID.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Owning Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "code",
          "required": true,
          "nullable": false,
          "description": "Canonical edition code.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "free",
              "single",
              "studio",
              "lifetime"
            ]
          }
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Customer-facing edition label.",
          "primitive": "fields.text"
        },
        {
          "key": "billingMode",
          "required": true,
          "nullable": false,
          "description": "Billing mode.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "free",
              "annual",
              "one-time"
            ]
          }
        },
        {
          "key": "activationPolicy",
          "required": true,
          "nullable": false,
          "description": "Activation-limit policy.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "single",
              "bounded",
              "unlimited"
            ]
          }
        },
        {
          "key": "activationLimit",
          "required": false,
          "nullable": true,
          "description": "Activation limit only when policy is bounded.",
          "primitive": "fields.integer"
        },
        {
          "key": "updateDuration",
          "required": true,
          "nullable": false,
          "description": "Update entitlement duration policy.",
          "primitive": "fields.text"
        },
        {
          "key": "supportDuration",
          "required": true,
          "nullable": false,
          "description": "Support entitlement duration policy.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Edition lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "draft",
              "scheduled",
              "active",
              "retired"
            ]
          }
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "software.product",
          "description": "Edition belongs to a Software Product."
        }
      ],
      "validationRules": [
        {
          "id": "activationPolicyExplicit",
          "description": "Unlimited is explicit; activation limits never use magic sentinel numbers."
        },
        {
          "id": "editionIdImmutable",
          "description": "Edition IDs do not change after production use."
        }
      ],
      "cms": {
        "label": "Software Edition",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "editionId",
          "productId",
          "code",
          "name"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.price",
      "name": "Software Price",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "catalog",
      "description": "Immutable effective Software price record by edition, currency, market and time window.",
      "purpose": "Immutable effective Software price record by edition, currency, market and time window.",
      "softwareModel": {
        "kind": "effective-record",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": true,
        "immutableSnapshot": true,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "priceId",
          "required": true,
          "nullable": false,
          "description": "Immutable Software price ID.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "editionId",
          "required": true,
          "nullable": false,
          "description": "Software Edition ID.",
          "primitive": "fields.text"
        },
        {
          "key": "currency",
          "required": true,
          "nullable": false,
          "description": "ISO currency code.",
          "primitive": "fields.text"
        },
        {
          "key": "amount",
          "required": true,
          "nullable": false,
          "description": "Exact decimal amount represented according to Commerce money rules.",
          "primitive": "fields.text"
        },
        {
          "key": "market",
          "required": true,
          "nullable": false,
          "description": "Market identifier.",
          "primitive": "fields.text"
        },
        {
          "key": "billingCadence",
          "required": true,
          "nullable": false,
          "description": "Billing cadence.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "none",
              "annual",
              "one-time"
            ]
          }
        },
        {
          "key": "taxBehavior",
          "required": true,
          "nullable": false,
          "description": "Tax display/handling behavior.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "exclusive",
              "inclusive",
              "tax-ready"
            ]
          }
        },
        {
          "key": "effectiveFrom",
          "required": true,
          "nullable": false,
          "description": "Price effective start.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "effectiveUntil",
          "required": false,
          "nullable": true,
          "description": "Price effective end.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "renewalPolicy",
          "required": true,
          "nullable": false,
          "description": "Renewal-price policy.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "not-applicable",
              "original-first-renewal",
              "current-effective-price",
              "explicit-snapshot"
            ]
          }
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Price lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "draft",
              "scheduled",
              "active",
              "retired"
            ]
          }
        }
      ],
      "relationships": [
        {
          "type": "uses",
          "target": "commerce.moneySnapshot",
          "description": "Money semantics reuse canonical Commerce money snapshots."
        },
        {
          "type": "references",
          "target": "software.edition",
          "description": "Price belongs to a Software Edition."
        }
      ],
      "validationRules": [
        {
          "id": "serverAuthoritative",
          "description": "Browsers never supply a trusted final Software price."
        },
        {
          "id": "effectiveRecordsImmutable",
          "description": "Published/effective prices are immutable historical records."
        }
      ],
      "cms": {
        "label": "Software Price",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "priceId",
          "productId",
          "editionId",
          "currency"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.bundleComponent",
      "name": "Software Bundle Component",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "catalog",
      "description": "Product and edition grant created by purchasing a bundle.",
      "purpose": "Product and edition grant created by purchasing a bundle.",
      "softwareModel": {
        "kind": "grant-policy",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "bundleComponentId",
          "required": true,
          "nullable": false,
          "description": "Bundle component ID.",
          "primitive": "fields.text"
        },
        {
          "key": "bundleProductId",
          "required": true,
          "nullable": false,
          "description": "Bundle Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "componentProductId",
          "required": true,
          "nullable": false,
          "description": "Granted component product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "componentEditionId",
          "required": true,
          "nullable": false,
          "description": "Granted component edition ID.",
          "primitive": "fields.text"
        },
        {
          "key": "grantPolicy",
          "required": true,
          "nullable": false,
          "description": "Grant behavior.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "exact-edition",
              "equivalent-tier",
              "explicit-capabilities"
            ]
          }
        },
        {
          "key": "capabilitySet",
          "required": false,
          "nullable": true,
          "description": "Explicit capabilities when grant policy requires them.",
          "primitive": "fields.json"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "software.product",
          "description": "Bundle and components resolve to canonical Software Products."
        },
        {
          "type": "references",
          "target": "software.edition",
          "description": "Bundle grants resolve to canonical editions."
        }
      ],
      "validationRules": [
        {
          "id": "authorityBoundary",
          "description": "Mutation is accepted only by the declared trusted Software authority."
        },
        {
          "id": "noSecrets",
          "description": "Contract examples and public projections never contain service credentials, signing keys or raw download tokens."
        }
      ],
      "cms": {
        "label": "Software Bundle Component",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "bundleComponentId",
          "bundleProductId",
          "componentProductId",
          "componentEditionId"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.customer",
      "name": "Software Customer",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "commerce",
      "description": "Software account linked to platform identity and canonical Commerce customer references.",
      "purpose": "Software account linked to platform identity and canonical Commerce customer references.",
      "softwareModel": {
        "kind": "entity",
        "customerOwned": true,
        "containsPersonalData": true,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "personal"
      },
      "fields": [
        {
          "key": "customerId",
          "required": true,
          "nullable": false,
          "description": "Software customer ID.",
          "primitive": "fields.text"
        },
        {
          "key": "identityRef",
          "required": true,
          "nullable": false,
          "description": "Platform identity reference.",
          "primitive": "fields.text"
        },
        {
          "key": "commerceCustomerRef",
          "required": true,
          "nullable": false,
          "description": "Canonical Commerce customer reference.",
          "primitive": "fields.text"
        },
        {
          "key": "billingIdentityRef",
          "required": false,
          "nullable": true,
          "description": "Billing identity reference.",
          "primitive": "fields.text"
        },
        {
          "key": "supportProfileRef",
          "required": false,
          "nullable": true,
          "description": "Support profile reference.",
          "primitive": "fields.text"
        },
        {
          "key": "createdAt",
          "required": true,
          "nullable": false,
          "description": "Account creation timestamp.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "commerce.commerceCustomer",
          "description": "Generic buyer identity remains a Commerce concept."
        }
      ],
      "validationRules": [
        {
          "id": "authorityBoundary",
          "description": "Mutation is accepted only by the declared trusted Software authority."
        },
        {
          "id": "noSecrets",
          "description": "Contract examples and public projections never contain service credentials, signing keys or raw download tokens."
        }
      ],
      "cms": {
        "label": "Software Customer",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "customerId",
          "identityRef",
          "commerceCustomerRef",
          "billingIdentityRef"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.orderExtension",
      "name": "Software Order Extension",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "commerce",
      "description": "Software-specific immutable commercial snapshot and fulfillment linkage extending a canonical Commerce Order.",
      "purpose": "Software-specific immutable commercial snapshot and fulfillment linkage extending a canonical Commerce Order.",
      "softwareModel": {
        "kind": "transaction-extension",
        "customerOwned": true,
        "containsPersonalData": true,
        "publicEligible": false,
        "immutableSnapshot": true,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "softwareOrderId",
          "required": true,
          "nullable": false,
          "description": "Software order ID.",
          "primitive": "fields.text"
        },
        {
          "key": "commerceOrderId",
          "required": true,
          "nullable": false,
          "description": "Canonical Commerce Order ID.",
          "primitive": "fields.text"
        },
        {
          "key": "publicOrderNumber",
          "required": true,
          "nullable": false,
          "description": "Immutable customer-visible order number.",
          "primitive": "fields.text"
        },
        {
          "key": "customerId",
          "required": true,
          "nullable": false,
          "description": "Software customer ID.",
          "primitive": "fields.text"
        },
        {
          "key": "lineGrantSnapshots",
          "required": true,
          "nullable": false,
          "description": "Immutable product/edition/price/grant snapshots.",
          "primitive": "fields.json"
        },
        {
          "key": "checkoutSessionRef",
          "required": false,
          "nullable": true,
          "description": "Checkout session reference.",
          "primitive": "fields.text"
        },
        {
          "key": "captureRefs",
          "required": false,
          "nullable": true,
          "description": "Verified Checkout capture references.",
          "primitive": "fields.json"
        },
        {
          "key": "fulfillmentState",
          "required": true,
          "nullable": false,
          "description": "Software fulfillment state.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "pending",
              "fulfilled",
              "review",
              "reversed"
            ]
          }
        },
        {
          "key": "fulfilledAt",
          "required": false,
          "nullable": true,
          "description": "Fulfillment timestamp.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "commerce.order",
          "description": "Software order extension is linked to canonical Commerce Order financial truth."
        },
        {
          "type": "references",
          "target": "commerce.paymentCapture",
          "description": "Paid state is derived only from verified payment capture evidence."
        }
      ],
      "validationRules": [
        {
          "id": "redirectNotEvidence",
          "description": "Browser return/success redirects cannot mark this order paid or fulfilled."
        },
        {
          "id": "fulfillExactlyOnce",
          "description": "Equivalent verified capture events grant Software access exactly once."
        },
        {
          "id": "historicalSnapshotImmutable",
          "description": "Purchased product, edition and price/grant snapshots remain immutable."
        }
      ],
      "cms": {
        "label": "Software Order Extension",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "softwareOrderId",
          "commerceOrderId",
          "publicOrderNumber",
          "customerId"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.subscription",
      "name": "Software Subscription",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "commerce",
      "description": "Recurring-plan lifecycle owned by Software while each payment attempt remains Checkout/Commerce payment truth.",
      "purpose": "Recurring-plan lifecycle owned by Software while each payment attempt remains Checkout/Commerce payment truth.",
      "softwareModel": {
        "kind": "entity",
        "customerOwned": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "subscriptionId",
          "required": true,
          "nullable": false,
          "description": "Software subscription ID.",
          "primitive": "fields.text"
        },
        {
          "key": "customerId",
          "required": true,
          "nullable": false,
          "description": "Software customer ID.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "editionId",
          "required": true,
          "nullable": false,
          "description": "Software Edition ID.",
          "primitive": "fields.text"
        },
        {
          "key": "sourceOrderId",
          "required": true,
          "nullable": false,
          "description": "Originating Software order ID.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Subscription lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "pending",
              "active",
              "past_due",
              "cancelled",
              "expired"
            ]
          }
        },
        {
          "key": "renewalMode",
          "required": true,
          "nullable": false,
          "description": "Renewal orchestration mode.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "customer-initiated",
              "automatic-reserved"
            ]
          }
        },
        {
          "key": "currentPeriodStart",
          "required": true,
          "nullable": false,
          "description": "Current period start.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "currentPeriodEnd",
          "required": true,
          "nullable": false,
          "description": "Current period end.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "graceUntil",
          "required": false,
          "nullable": true,
          "description": "Grace-period end.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "cancelAtPeriodEnd",
          "required": true,
          "nullable": false,
          "description": "Whether cancellation is scheduled at period end.",
          "primitive": "fields.boolean"
        },
        {
          "key": "renewalPriceSnapshot",
          "required": true,
          "nullable": false,
          "description": "Renewal amount snapshot/policy reference.",
          "primitive": "fields.json"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "software.orderExtension",
          "description": "Subscription originates from a fulfilled Software order."
        },
        {
          "type": "uses",
          "target": "commerce.moneySnapshot",
          "description": "Renewal prices use canonical Commerce money semantics."
        }
      ],
      "validationRules": [
        {
          "id": "manualLaunchRenewal",
          "description": "V1.3.0 launch subscriptions use customer-initiated renewal; automatic-reserved is not an active launch capability."
        },
        {
          "id": "paymentAttemptExternal",
          "description": "Software Subscription never stores provider credentials or becomes payment-attempt authority."
        }
      ],
      "cms": {
        "label": "Software Subscription",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "subscriptionId",
          "customerId",
          "productId",
          "editionId"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.license",
      "name": "Software License",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "licensing",
      "description": "Human-manageable Software license identity and lifecycle without exposing raw license keys in ordinary projections.",
      "purpose": "Human-manageable Software license identity and lifecycle without exposing raw license keys in ordinary projections.",
      "softwareModel": {
        "kind": "entity",
        "customerOwned": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "licenseId",
          "required": true,
          "nullable": false,
          "description": "Software license ID.",
          "primitive": "fields.text"
        },
        {
          "key": "customerId",
          "required": true,
          "nullable": false,
          "description": "Owning Software customer ID.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "editionId",
          "required": true,
          "nullable": false,
          "description": "Software Edition ID.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "License lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "pending",
              "active",
              "grace",
              "expired",
              "suspended",
              "revoked"
            ]
          }
        },
        {
          "key": "keyLookupRef",
          "required": true,
          "nullable": false,
          "description": "Protected lookup/hash/encrypted key reference.",
          "primitive": "fields.text"
        },
        {
          "key": "keyDisplayMask",
          "required": true,
          "nullable": false,
          "description": "Masked license display value.",
          "primitive": "fields.text"
        },
        {
          "key": "activationPolicy",
          "required": true,
          "nullable": false,
          "description": "Activation policy.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "single",
              "bounded",
              "unlimited"
            ]
          }
        },
        {
          "key": "activationLimit",
          "required": false,
          "nullable": true,
          "description": "Activation limit when bounded.",
          "primitive": "fields.integer"
        },
        {
          "key": "issuedAt",
          "required": true,
          "nullable": false,
          "description": "Issue timestamp.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "expiresAt",
          "required": false,
          "nullable": true,
          "description": "License/update/support expiry where applicable.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "software.entitlement",
          "description": "Capabilities are granted through entitlements rather than plan-name checks."
        }
      ],
      "validationRules": [
        {
          "id": "rawKeyHidden",
          "description": "Ordinary CMS, analytics, logs and list projections never expose a raw license key."
        },
        {
          "id": "expiryNoRemoteDisable",
          "description": "License expiry can affect updates/support but must not remotely disable installed plugin functionality."
        }
      ],
      "cms": {
        "label": "Software License",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "licenseId",
          "customerId",
          "productId",
          "editionId"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.activation",
      "name": "Software Activation",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "licensing",
      "description": "Normalized installation/site activation associated with a Software License.",
      "purpose": "Normalized installation/site activation associated with a Software License.",
      "softwareModel": {
        "kind": "entity",
        "customerOwned": true,
        "containsPersonalData": true,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "activationId",
          "required": true,
          "nullable": false,
          "description": "Activation ID.",
          "primitive": "fields.text"
        },
        {
          "key": "licenseId",
          "required": true,
          "nullable": false,
          "description": "Software License ID.",
          "primitive": "fields.text"
        },
        {
          "key": "siteUrlNormalized",
          "required": true,
          "nullable": false,
          "description": "Normalized site URL.",
          "primitive": "fields.text"
        },
        {
          "key": "environment",
          "required": true,
          "nullable": false,
          "description": "Installation environment.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "production",
              "staging",
              "development",
              "local"
            ]
          }
        },
        {
          "key": "installationFingerprint",
          "required": true,
          "nullable": false,
          "description": "Privacy-minimized installation fingerprint.",
          "primitive": "fields.text"
        },
        {
          "key": "pluginVersion",
          "required": true,
          "nullable": false,
          "description": "Observed plugin version.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Activation lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "active",
              "deactivated",
              "blocked"
            ]
          }
        },
        {
          "key": "activatedAt",
          "required": true,
          "nullable": false,
          "description": "Activation timestamp.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "lastSeenAt",
          "required": false,
          "nullable": true,
          "description": "Last validation/update contact time.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "software.license",
          "description": "Activation consumes capacity from one Software License."
        }
      ],
      "validationRules": [
        {
          "id": "noSiteContent",
          "description": "Activation never contains page/post/document content or visitor analytics."
        }
      ],
      "cms": {
        "label": "Software Activation",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "activationId",
          "licenseId",
          "siteUrlNormalized",
          "environment"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.entitlement",
      "name": "Software Entitlement",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "entitlements",
      "description": "Machine-readable capability grant with source, scope and validity window.",
      "purpose": "Machine-readable capability grant with source, scope and validity window.",
      "softwareModel": {
        "kind": "capability-grant",
        "customerOwned": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "entitlementId",
          "required": true,
          "nullable": false,
          "description": "Entitlement ID.",
          "primitive": "fields.text"
        },
        {
          "key": "customerId",
          "required": true,
          "nullable": false,
          "description": "Owning customer ID.",
          "primitive": "fields.text"
        },
        {
          "key": "sourceType",
          "required": true,
          "nullable": false,
          "description": "Grant source.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "order",
              "subscription",
              "license",
              "grandfather-grant",
              "manual-exception"
            ]
          }
        },
        {
          "key": "sourceRef",
          "required": true,
          "nullable": false,
          "description": "Source record reference.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "capability",
          "required": true,
          "nullable": false,
          "description": "Machine-readable capability identifier.",
          "primitive": "fields.text"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Capability scope.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Entitlement lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "scheduled",
              "active",
              "expired",
              "revoked"
            ]
          }
        },
        {
          "key": "startsAt",
          "required": true,
          "nullable": false,
          "description": "Grant start.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "endsAt",
          "required": false,
          "nullable": true,
          "description": "Grant end.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "capabilitiesNotPlanNames",
          "description": "Authorization checks evaluate capability identifiers, not presentation plan names."
        },
        {
          "id": "sourceAuditable",
          "description": "Every entitlement has an auditable source and immutable grant reason."
        }
      ],
      "cms": {
        "label": "Software Entitlement",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "entitlementId",
          "customerId",
          "sourceType",
          "sourceRef"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.grandfatherGrant",
      "name": "Software Grandfather Grant",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "entitlements",
      "description": "Immutable capability protection for existing pre-commercial installations/users.",
      "purpose": "Immutable capability protection for existing pre-commercial installations/users.",
      "softwareModel": {
        "kind": "immutable-grant",
        "customerOwned": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": true,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "grantId",
          "required": true,
          "nullable": false,
          "description": "Grandfather grant ID.",
          "primitive": "fields.text"
        },
        {
          "key": "customerId",
          "required": true,
          "nullable": false,
          "description": "Software customer ID.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "sourceVersion",
          "required": true,
          "nullable": false,
          "description": "Last complete ungated/source version evidence.",
          "primitive": "fields.text"
        },
        {
          "key": "installationEvidenceRef",
          "required": true,
          "nullable": false,
          "description": "Reviewed installation/source evidence reference.",
          "primitive": "fields.text"
        },
        {
          "key": "capabilitySet",
          "required": true,
          "nullable": false,
          "description": "Capabilities protected by the grant.",
          "primitive": "fields.json"
        },
        {
          "key": "reason",
          "required": true,
          "nullable": false,
          "description": "Immutable grant reason.",
          "primitive": "fields.textarea"
        },
        {
          "key": "createdAt",
          "required": true,
          "nullable": false,
          "description": "Grant creation timestamp.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "notPaidOrder",
          "description": "Grandfathering never manufactures payment/capture records."
        },
        {
          "id": "cannotSilentlyWiden",
          "description": "Grandfather capability sets cannot be silently expanded without a new audited decision."
        }
      ],
      "cms": {
        "label": "Software Grandfather Grant",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "grantId",
          "customerId",
          "productId",
          "sourceVersion"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.release",
      "name": "Software Release",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "delivery",
      "description": "Versioned plugin release metadata, channel, requirements, changelog, artifact linkage and rollback relationship.",
      "purpose": "Versioned plugin release metadata, channel, requirements, changelog, artifact linkage and rollback relationship.",
      "softwareModel": {
        "kind": "entity",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": true,
        "immutableSnapshot": true,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "releaseId",
          "required": true,
          "nullable": false,
          "description": "Release ID.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "version",
          "required": true,
          "nullable": false,
          "description": "Plugin/package semantic version.",
          "primitive": "fields.text"
        },
        {
          "key": "channel",
          "required": true,
          "nullable": false,
          "description": "Release channel.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "stable",
              "beta",
              "rc",
              "development"
            ]
          }
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Release lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "draft",
              "published",
              "deprecated",
              "withdrawn"
            ]
          }
        },
        {
          "key": "artifactRef",
          "required": true,
          "nullable": false,
          "description": "Software Release Artifact ID.",
          "primitive": "fields.text"
        },
        {
          "key": "compatibilityRefs",
          "required": true,
          "nullable": false,
          "description": "Structured compatibility requirement IDs.",
          "primitive": "fields.json"
        },
        {
          "key": "changelog",
          "required": true,
          "nullable": false,
          "description": "Release changelog.",
          "primitive": "fields.textarea"
        },
        {
          "key": "rollbackReleaseId",
          "required": false,
          "nullable": true,
          "description": "Eligible rollback release ID.",
          "primitive": "fields.text"
        },
        {
          "key": "publishedAt",
          "required": false,
          "nullable": true,
          "description": "Publication timestamp.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "software.releaseArtifact",
          "description": "Package evidence is modeled separately from public release metadata."
        },
        {
          "type": "references",
          "target": "software.compatibilityRequirement",
          "description": "Compatibility is structured by runtime/version range."
        }
      ],
      "validationRules": [
        {
          "id": "authorityBoundary",
          "description": "Mutation is accepted only by the declared trusted Software authority."
        },
        {
          "id": "noSecrets",
          "description": "Contract examples and public projections never contain service credentials, signing keys or raw download tokens."
        }
      ],
      "cms": {
        "label": "Software Release",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "releaseId",
          "productId",
          "version",
          "channel"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.releaseArtifact",
      "name": "Software Release Artifact",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "delivery",
      "description": "Private release-package metadata and server-calculated integrity evidence.",
      "purpose": "Private release-package metadata and server-calculated integrity evidence.",
      "softwareModel": {
        "kind": "secure-record",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "artifactId",
          "required": true,
          "nullable": false,
          "description": "Release artifact ID.",
          "primitive": "fields.text"
        },
        {
          "key": "releaseId",
          "required": true,
          "nullable": false,
          "description": "Software Release ID.",
          "primitive": "fields.text"
        },
        {
          "key": "packageRef",
          "required": true,
          "nullable": false,
          "description": "Opaque private object-storage reference.",
          "primitive": "fields.text"
        },
        {
          "key": "sizeBytes",
          "required": true,
          "nullable": false,
          "description": "Server-calculated package size.",
          "primitive": "fields.integer"
        },
        {
          "key": "sha256",
          "required": true,
          "nullable": false,
          "description": "Server-calculated SHA-256 checksum.",
          "primitive": "fields.text"
        },
        {
          "key": "signatureRef",
          "required": true,
          "nullable": false,
          "description": "Signing-key/signature evidence reference.",
          "primitive": "fields.text"
        },
        {
          "key": "scanStatus",
          "required": true,
          "nullable": false,
          "description": "Package scan status.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "pending",
              "passed",
              "failed",
              "review"
            ]
          }
        },
        {
          "key": "calculatedAt",
          "required": true,
          "nullable": false,
          "description": "Integrity calculation timestamp.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "privatePackageRef",
          "description": "Artifacts contain opaque private storage references, never public bucket credentials."
        },
        {
          "id": "checksumServerCalculated",
          "description": "CMS/browser supplied checksums are never accepted as authoritative."
        }
      ],
      "cms": {
        "label": "Software Release Artifact",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "artifactId",
          "releaseId",
          "packageRef",
          "sizeBytes"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.compatibilityRequirement",
      "name": "Software Compatibility Requirement",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "delivery",
      "description": "Structured runtime/version compatibility for a Software Release.",
      "purpose": "Structured runtime/version compatibility for a Software Release.",
      "softwareModel": {
        "kind": "requirement",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "internal"
      },
      "fields": [
        {
          "key": "requirementId",
          "required": true,
          "nullable": false,
          "description": "Compatibility requirement ID.",
          "primitive": "fields.text"
        },
        {
          "key": "releaseId",
          "required": true,
          "nullable": false,
          "description": "Software Release ID.",
          "primitive": "fields.text"
        },
        {
          "key": "runtime",
          "required": true,
          "nullable": false,
          "description": "Runtime/component kind.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "wordpress",
              "php",
              "elementor",
              "plugin",
              "browser"
            ]
          }
        },
        {
          "key": "component",
          "required": true,
          "nullable": false,
          "description": "Component identifier.",
          "primitive": "fields.text"
        },
        {
          "key": "minimumVersion",
          "required": false,
          "nullable": true,
          "description": "Minimum supported version.",
          "primitive": "fields.text"
        },
        {
          "key": "maximumVersion",
          "required": false,
          "nullable": true,
          "description": "Maximum supported version.",
          "primitive": "fields.text"
        },
        {
          "key": "constraint",
          "required": true,
          "nullable": false,
          "description": "Canonical version-range/constraint expression.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "authorityBoundary",
          "description": "Mutation is accepted only by the declared trusted Software authority."
        },
        {
          "id": "noSecrets",
          "description": "Contract examples and public projections never contain service credentials, signing keys or raw download tokens."
        }
      ],
      "cms": {
        "label": "Software Compatibility Requirement",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "requirementId",
          "releaseId",
          "runtime",
          "component"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.downloadGrant",
      "name": "Software Download Grant",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "delivery",
      "description": "Short-lived owner/product/release-scoped authorization for private Software package delivery.",
      "purpose": "Short-lived owner/product/release-scoped authorization for private Software package delivery.",
      "softwareModel": {
        "kind": "secure-grant",
        "customerOwned": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "secret"
      },
      "fields": [
        {
          "key": "grantId",
          "required": true,
          "nullable": false,
          "description": "Download grant ID.",
          "primitive": "fields.text"
        },
        {
          "key": "customerId",
          "required": true,
          "nullable": false,
          "description": "Authorized Software customer ID.",
          "primitive": "fields.text"
        },
        {
          "key": "licenseId",
          "required": false,
          "nullable": true,
          "description": "Authorizing Software License ID.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Authorized Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "releaseId",
          "required": true,
          "nullable": false,
          "description": "Authorized Software Release ID.",
          "primitive": "fields.text"
        },
        {
          "key": "purpose",
          "required": true,
          "nullable": false,
          "description": "Grant purpose.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "manual-download",
              "plugin-update"
            ]
          }
        },
        {
          "key": "tokenRef",
          "required": true,
          "nullable": false,
          "description": "Protected raw-token reference, not the token value.",
          "primitive": "fields.text"
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Grant lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "issued",
              "consumed",
              "expired",
              "revoked"
            ]
          }
        },
        {
          "key": "expiresAt",
          "required": true,
          "nullable": false,
          "description": "Grant expiry.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "consumedAt",
          "required": false,
          "nullable": true,
          "description": "Consumption timestamp.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "singlePurpose",
          "description": "Download grants cannot cross customers, products, releases or purposes."
        },
        {
          "id": "shortLived",
          "description": "Download grants are short-lived and revocable."
        }
      ],
      "cms": {
        "label": "Software Download Grant",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "grantId",
          "customerId",
          "licenseId",
          "productId"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.updateRequest",
      "name": "Software Update Request",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "delivery",
      "description": "Privacy-minimized license-scoped plugin update request.",
      "purpose": "Privacy-minimized license-scoped plugin update request.",
      "softwareModel": {
        "kind": "request",
        "customerOwned": false,
        "containsPersonalData": true,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "licenseCredentialRef",
          "required": true,
          "nullable": false,
          "description": "License-scoped credential/reference.",
          "primitive": "fields.text"
        },
        {
          "key": "siteUrlNormalized",
          "required": true,
          "nullable": false,
          "description": "Normalized site URL.",
          "primitive": "fields.text"
        },
        {
          "key": "environment",
          "required": true,
          "nullable": false,
          "description": "Installation environment.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "production",
              "staging",
              "development",
              "local"
            ]
          }
        },
        {
          "key": "pluginVersion",
          "required": true,
          "nullable": false,
          "description": "Installed plugin version.",
          "primitive": "fields.text"
        },
        {
          "key": "installationFingerprint",
          "required": true,
          "nullable": false,
          "description": "Privacy-minimized installation fingerprint.",
          "primitive": "fields.text"
        },
        {
          "key": "requestedChannel",
          "required": true,
          "nullable": false,
          "description": "Requested update channel.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "stable",
              "beta",
              "rc",
              "development"
            ]
          }
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "noContent",
          "description": "Request does not contain WordPress page/post/document content, visitor queries or unrelated analytics."
        },
        {
          "id": "rateLimited",
          "description": "Validation/update endpoints are abuse-controlled and rate-limited."
        }
      ],
      "cms": {
        "label": "Software Update Request",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "productId",
          "licenseCredentialRef",
          "siteUrlNormalized",
          "environment"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.updateResponse",
      "name": "Software Update Response",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "delivery",
      "description": "License/entitlement-aware update metadata response without exposing private package credentials.",
      "purpose": "License/entitlement-aware update metadata response without exposing private package credentials.",
      "softwareModel": {
        "kind": "response",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "eligible",
          "required": true,
          "nullable": false,
          "description": "Whether update entitlement is currently valid.",
          "primitive": "fields.boolean"
        },
        {
          "key": "activationStatus",
          "required": true,
          "nullable": false,
          "description": "Normalized activation/license result.",
          "primitive": "fields.text"
        },
        {
          "key": "capabilities",
          "required": true,
          "nullable": false,
          "description": "Effective capability entitlements.",
          "primitive": "fields.json"
        },
        {
          "key": "offlineValidUntil",
          "required": true,
          "nullable": false,
          "description": "Signed offline-cache validity.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "releaseId",
          "required": false,
          "nullable": true,
          "description": "Eligible Software Release ID.",
          "primitive": "fields.text"
        },
        {
          "key": "version",
          "required": false,
          "nullable": true,
          "description": "Eligible version.",
          "primitive": "fields.text"
        },
        {
          "key": "channel",
          "required": false,
          "nullable": true,
          "description": "Eligible channel.",
          "primitive": "fields.text"
        },
        {
          "key": "downloadGrantRef",
          "required": false,
          "nullable": true,
          "description": "Short-lived download-grant reference.",
          "primitive": "fields.text"
        },
        {
          "key": "sha256",
          "required": false,
          "nullable": true,
          "description": "Release artifact checksum.",
          "primitive": "fields.text"
        },
        {
          "key": "signatureRef",
          "required": false,
          "nullable": true,
          "description": "Release signature evidence reference.",
          "primitive": "fields.text"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "software.entitlement",
          "description": "Update eligibility follows capability entitlement."
        },
        {
          "type": "references",
          "target": "software.downloadGrant",
          "description": "Eligible package delivery uses a short-lived grant."
        }
      ],
      "validationRules": [
        {
          "id": "authorityBoundary",
          "description": "Mutation is accepted only by the declared trusted Software authority."
        },
        {
          "id": "noSecrets",
          "description": "Contract examples and public projections never contain service credentials, signing keys or raw download tokens."
        }
      ],
      "cms": {
        "label": "Software Update Response",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "eligible",
          "activationStatus",
          "capabilities",
          "offlineValidUntil"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.supportEntitlement",
      "name": "Software Support Entitlement",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "support",
      "description": "Software support level and validity derived from purchase/grant policy.",
      "purpose": "Software support level and validity derived from purchase/grant policy.",
      "softwareModel": {
        "kind": "capability-grant",
        "customerOwned": true,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": false,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "supportEntitlementId",
          "required": true,
          "nullable": false,
          "description": "Support entitlement ID.",
          "primitive": "fields.text"
        },
        {
          "key": "customerId",
          "required": true,
          "nullable": false,
          "description": "Software customer ID.",
          "primitive": "fields.text"
        },
        {
          "key": "productId",
          "required": true,
          "nullable": false,
          "description": "Software Product ID.",
          "primitive": "fields.text"
        },
        {
          "key": "sourceRef",
          "required": true,
          "nullable": false,
          "description": "Order/subscription/license/grandfather source.",
          "primitive": "fields.text"
        },
        {
          "key": "level",
          "required": true,
          "nullable": false,
          "description": "Support level.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "community",
              "priority"
            ]
          }
        },
        {
          "key": "status",
          "required": true,
          "nullable": false,
          "description": "Support entitlement lifecycle.",
          "primitive": "fields.select",
          "config": {
            "options": [
              "scheduled",
              "active",
              "expired",
              "revoked"
            ]
          }
        },
        {
          "key": "startsAt",
          "required": true,
          "nullable": false,
          "description": "Support start.",
          "primitive": "fields.dateTime"
        },
        {
          "key": "endsAt",
          "required": false,
          "nullable": true,
          "description": "Support end.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "authorityBoundary",
          "description": "Mutation is accepted only by the declared trusted Software authority."
        },
        {
          "id": "noSecrets",
          "description": "Contract examples and public projections never contain service credentials, signing keys or raw download tokens."
        }
      ],
      "cms": {
        "label": "Software Support Entitlement",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "supportEntitlementId",
          "customerId",
          "productId",
          "sourceRef"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    },
    {
      "$id": "software.auditReference",
      "name": "Software Audit Reference",
      "version": "1.3.0",
      "status": "stable",
      "domain": "software",
      "category": "audit",
      "description": "Reference from Software domain mutations to append-oriented immutable audit evidence.",
      "purpose": "Reference from Software domain mutations to append-oriented immutable audit evidence.",
      "softwareModel": {
        "kind": "audit-reference",
        "customerOwned": false,
        "containsPersonalData": false,
        "publicEligible": false,
        "immutableSnapshot": true,
        "dataSensitivity": "sensitive"
      },
      "fields": [
        {
          "key": "auditRef",
          "required": true,
          "nullable": false,
          "description": "Audit evidence reference.",
          "primitive": "fields.text"
        },
        {
          "key": "subjectType",
          "required": true,
          "nullable": false,
          "description": "Software subject type.",
          "primitive": "fields.text"
        },
        {
          "key": "subjectId",
          "required": true,
          "nullable": false,
          "description": "Software subject ID.",
          "primitive": "fields.text"
        },
        {
          "key": "action",
          "required": true,
          "nullable": false,
          "description": "Audited action.",
          "primitive": "fields.text"
        },
        {
          "key": "actorRef",
          "required": true,
          "nullable": false,
          "description": "Staff/service/customer actor reference.",
          "primitive": "fields.text"
        },
        {
          "key": "correlationId",
          "required": true,
          "nullable": false,
          "description": "Correlation/request ID.",
          "primitive": "fields.text"
        },
        {
          "key": "evidenceRef",
          "required": false,
          "nullable": true,
          "description": "Supporting evidence reference.",
          "primitive": "fields.text"
        },
        {
          "key": "occurredAt",
          "required": true,
          "nullable": false,
          "description": "Audit occurrence timestamp.",
          "primitive": "fields.dateTime"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "authorityBoundary",
          "description": "Mutation is accepted only by the declared trusted Software authority."
        },
        {
          "id": "noSecrets",
          "description": "Contract examples and public projections never contain service credentials, signing keys or raw download tokens."
        }
      ],
      "cms": {
        "label": "Software Audit Reference",
        "icon": "fa-code",
        "customerVisible": false,
        "adminVisible": true,
        "editorMode": "software-schema",
        "defaultPlacement": "software",
        "summaryFields": [
          "auditRef",
          "subjectType",
          "subjectId",
          "action"
        ],
        "primaryActions": [
          "view"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Software business truth is served through scoped Software APIs."
      },
      "futureBindings": {
        "modules": "phase-40",
        "api": "phase-40",
        "permissions": "phase-40",
        "events": "phase-40",
        "webhooks": "phase-40",
        "privacy": "phase-30",
        "security": "phase-29"
      },
      "examples": {
        "valid": [],
        "invalid": []
      },
      "notes": []
    }
  ]
};
