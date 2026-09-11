// GENERATED FILE - DO NOT EDIT DIRECTLY.
export const GENERATED_VALIDATION = {
  "registryVersion": "1.0.0",
  "schemaVersion": "1.0.0",
  "title": "NEXT F Browser Contract Validation",
  "description": "Local-only deterministic nextf.site.json validation data shared with future developer tooling.",
  "currentContractVersion": "1.0.0",
  "manifestSchema": {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://contract.nextf.lk/registry/manifests/nextf-site-manifest.schema.json",
    "title": "NEXT F Site Manifest",
    "description": "Validation schema for nextf.site.json, specification v1.0.0.",
    "type": "object",
    "additionalProperties": false,
    "required": [
      "manifestVersion",
      "contracts",
      "site",
      "localization",
      "environments",
      "contentDelivery",
      "modules",
      "runtime",
      "cms",
      "events",
      "tracking",
      "integrations",
      "configuration"
    ],
    "properties": {
      "manifestVersion": {
        "const": "1.0.0"
      },
      "contracts": {
        "$ref": "#/$defs/contractBinding"
      },
      "site": {
        "$ref": "#/$defs/siteDescriptor"
      },
      "localization": {
        "$ref": "#/$defs/localization"
      },
      "environments": {
        "type": "array",
        "minItems": 1,
        "items": {
          "$ref": "#/$defs/environment"
        }
      },
      "contentDelivery": {
        "$ref": "#/$defs/contentDelivery"
      },
      "modules": {
        "type": "array",
        "uniqueItems": true,
        "items": {
          "$ref": "#/$defs/moduleSelection"
        }
      },
      "runtime": {
        "$ref": "#/$defs/runtime"
      },
      "cms": {
        "$ref": "#/$defs/cms"
      },
      "apiBindings": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/apiBinding"
        },
        "default": []
      },
      "events": {
        "$ref": "#/$defs/eventSupport"
      },
      "tracking": {
        "$ref": "#/$defs/trackingSupport"
      },
      "integrations": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/integrationSupport"
        }
      },
      "configuration": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/configurationBinding"
        }
      },
      "extensions": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/extensionDeclaration"
        },
        "default": []
      }
    },
    "$defs": {
      "semver": {
        "type": "string",
        "pattern": "^\\d+\\.\\d+\\.\\d+$"
      },
      "environmentId": {
        "type": "string",
        "pattern": "^[a-z][a-z0-9-]{0,39}$"
      },
      "contractBinding": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "contractVersion",
          "manifestSpecVersion",
          "compatibilityMode"
        ],
        "properties": {
          "contractVersion": {
            "$ref": "#/$defs/semver"
          },
          "manifestSpecVersion": {
            "const": "1.0.0"
          },
          "compatibilityMode": {
            "const": "strict-major"
          }
        }
      },
      "siteDescriptor": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "siteId",
          "name",
          "siteType"
        ],
        "properties": {
          "siteId": {
            "type": "string",
            "pattern": "^site_[A-Za-z0-9_-]+$"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "siteType": {
            "enum": [
              "corporate",
              "service",
              "lead-generation",
              "commerce",
              "documentation",
              "custom"
            ]
          },
          "primaryUrl": {
            "type": "string",
            "format": "uri",
            "pattern": "^https://"
          }
        }
      },
      "localization": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "defaultLocale",
          "supportedLocales",
          "timeZone"
        ],
        "properties": {
          "defaultLocale": {
            "type": "string",
            "minLength": 2
          },
          "supportedLocales": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true,
            "items": {
              "type": "string",
              "minLength": 2
            }
          },
          "timeZone": {
            "type": "string",
            "minLength": 1
          }
        }
      },
      "environment": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "id",
          "kind",
          "enabled"
        ],
        "properties": {
          "id": {
            "$ref": "#/$defs/environmentId"
          },
          "kind": {
            "enum": [
              "development",
              "preview",
              "staging",
              "production"
            ]
          },
          "baseUrl": {
            "type": "string",
            "format": "uri"
          },
          "enabled": {
            "type": "boolean"
          }
        }
      },
      "contentDelivery": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "mode",
          "publishedOnly",
          "previewSupported"
        ],
        "properties": {
          "mode": {
            "enum": [
              "runtime",
              "build-time",
              "hybrid"
            ]
          },
          "publishedOnly": {
            "const": true
          },
          "previewSupported": {
            "type": "boolean"
          }
        }
      },
      "capabilitySelection": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "capabilityId",
          "enabled"
        ],
        "properties": {
          "capabilityId": {
            "type": "string",
            "pattern": "^[a-z][a-z0-9-]*\\.[a-z][a-z0-9-]*$"
          },
          "enabled": {
            "type": "boolean"
          }
        }
      },
      "moduleSelection": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "moduleId",
          "enabled"
        ],
        "properties": {
          "moduleId": {
            "type": "string",
            "pattern": "^[a-z][a-z0-9-]{0,79}$"
          },
          "enabled": {
            "type": "boolean"
          },
          "capabilities": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/capabilitySelection"
            },
            "default": []
          }
        }
      },
      "runtime": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "siteIdentity",
          "contentConnector",
          "eventLayer",
          "consentLayer",
          "integrationLoader"
        ],
        "properties": {
          "siteIdentity": {
            "const": true
          },
          "contentConnector": {
            "const": true
          },
          "eventLayer": {
            "const": true
          },
          "consentLayer": {
            "const": true
          },
          "integrationLoader": {
            "const": true
          }
        }
      },
      "cms": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "enabled",
          "workspaceMode",
          "editingMode",
          "previewEnabled",
          "publishingEnabled",
          "revisionHistoryEnabled",
          "arbitraryCodeEditing"
        ],
        "properties": {
          "enabled": {
            "type": "boolean"
          },
          "workspaceMode": {
            "const": "site"
          },
          "editingMode": {
            "const": "structured"
          },
          "previewEnabled": {
            "type": "boolean"
          },
          "publishingEnabled": {
            "type": "boolean"
          },
          "revisionHistoryEnabled": {
            "type": "boolean"
          },
          "arbitraryCodeEditing": {
            "const": false
          }
        }
      },
      "apiBinding": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "apiId",
          "version",
          "environments"
        ],
        "properties": {
          "apiId": {
            "type": "string",
            "pattern": "^api\\.[a-z][a-z0-9.-]*$"
          },
          "version": {
            "$ref": "#/$defs/semver"
          },
          "environments": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true,
            "items": {
              "$ref": "#/$defs/environmentId"
            }
          }
        }
      },
      "eventSupport": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "produces",
          "consumes"
        ],
        "properties": {
          "produces": {
            "type": "array",
            "uniqueItems": true,
            "items": {
              "type": "string",
              "pattern": "^[a-z][a-z0-9-]*\\.[a-z][a-z0-9-]*$"
            }
          },
          "consumes": {
            "type": "array",
            "uniqueItems": true,
            "items": {
              "type": "string",
              "pattern": "^[a-z][a-z0-9-]*\\.[a-z][a-z0-9-]*$"
            }
          }
        }
      },
      "trackingSupport": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "events"
        ],
        "properties": {
          "events": {
            "type": "array",
            "uniqueItems": true,
            "items": {
              "type": "string",
              "pattern": "^[a-z][a-z0-9-]*\\.[a-z][a-z0-9-]*$"
            }
          }
        }
      },
      "integrationSupport": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "connectorId",
          "environments",
          "enabled"
        ],
        "properties": {
          "connectorId": {
            "type": "string",
            "pattern": "^integrations\\.[A-Za-z0-9]+$"
          },
          "environments": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true,
            "items": {
              "$ref": "#/$defs/environmentId"
            }
          },
          "enabled": {
            "type": "boolean"
          }
        }
      },
      "configurationBinding": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "key",
          "exposure",
          "required",
          "environments",
          "purpose"
        ],
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[A-Z][A-Z0-9_]*$"
          },
          "exposure": {
            "enum": [
              "public",
              "server",
              "secret"
            ]
          },
          "required": {
            "type": "boolean"
          },
          "environments": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true,
            "items": {
              "$ref": "#/$defs/environmentId"
            }
          },
          "purpose": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1000
          }
        }
      },
      "extensionDeclaration": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "extensionId",
          "version",
          "source",
          "reason",
          "promotionCandidate"
        ],
        "properties": {
          "extensionId": {
            "type": "string",
            "pattern": "^extension\\.[a-z][a-z0-9-]*\\.[a-z][a-z0-9.-]*$"
          },
          "version": {
            "$ref": "#/$defs/semver"
          },
          "source": {
            "type": "string",
            "pattern": "^(?!/)(?!.*\\.\\.)[A-Za-z0-9._/-]+\\.(json|md)$"
          },
          "reason": {
            "type": "string",
            "minLength": 10,
            "maxLength": 2000
          },
          "promotionCandidate": {
            "type": "boolean"
          }
        }
      }
    }
  },
  "modules": [
    {
      "$id": "modules.core",
      "moduleId": "core",
      "name": "Core",
      "version": "0.18.0",
      "status": "stable",
      "category": "foundation",
      "icon": "fa-cubes",
      "order": 10,
      "description": "Tenant identity, Site scope, publishing, versioning, audit and shared platform primitives required by every NEXT F Site.",
      "selection": {
        "mandatory": true,
        "defaultEnabled": true,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": false
      },
      "dependencies": [],
      "conflicts": [],
      "capabilityIds": [
        "core.identity",
        "core.publishing",
        "core.versioning",
        "core.audit",
        "core.tenant-isolation"
      ],
      "defaultCapabilityIds": [
        "core.identity",
        "core.publishing",
        "core.versioning",
        "core.audit",
        "core.tenant-isolation"
      ],
      "contractBindings": [
        "core.actorReference",
        "core.auditRecord",
        "core.entityIdentity",
        "core.entityReference",
        "core.organization",
        "core.publishing",
        "core.revisionPointer",
        "core.scheduleWindow",
        "core.sharedCoreStandard",
        "core.site",
        "core.tenantScope",
        "core.versionRecord",
        "core.visibility",
        "shared.address",
        "shared.contactPoint",
        "shared.cta",
        "shared.externalReference",
        "shared.link",
        "shared.mediaAsset",
        "shared.mediaReference"
      ],
      "permissionBindings": [
        "core.audit.export",
        "core.audit.view",
        "core.members.create",
        "core.members.delete",
        "core.members.edit",
        "core.members.manage",
        "core.members.view",
        "core.settings.edit",
        "core.settings.manage",
        "core.settings.view",
        "core.sitehealth.view",
        "core.workspace.manage",
        "core.workspace.view",
        "platform.sites.create",
        "platform.sites.delete",
        "platform.sites.edit",
        "platform.sites.export",
        "platform.sites.manage",
        "platform.sites.view"
      ],
      "eventBindings": [
        "site.activated",
        "site.connection-degraded",
        "site.connection-restored",
        "site.created",
        "site.suspended",
        "site.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Foundation",
        "navigation": [
          {
            "label": "Overview",
            "path": "/overview",
            "icon": "fa-gauge-high",
            "order": 10
          },
          {
            "label": "Activity",
            "path": "/activity",
            "icon": "fa-clock-rotate-left",
            "order": 90
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Site Overview",
            "path": "/sites/:siteId",
            "icon": "fa-globe",
            "order": 10
          },
          {
            "label": "Activity",
            "path": "/sites/:siteId/activity",
            "icon": "fa-clock-rotate-left",
            "order": 90
          }
        ]
      },
      "manifest": {
        "moduleId": "core",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.media",
      "moduleId": "media",
      "name": "Media",
      "version": "0.18.0",
      "status": "stable",
      "category": "foundation",
      "icon": "fa-photo-film",
      "order": 20,
      "description": "Reusable Site-scoped media library and asset metadata used by content and commerce without tying contracts to one storage provider.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": true,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Media assets are Site-scoped and audited through Core."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "media.library",
        "media.images",
        "media.documents",
        "media.video",
        "media.audio",
        "media.contextual-metadata"
      ],
      "defaultCapabilityIds": [
        "media.library",
        "media.images",
        "media.contextual-metadata"
      ],
      "contractBindings": [
        "shared.mediaAsset",
        "shared.mediaReference"
      ],
      "permissionBindings": [
        "content.media.create",
        "content.media.delete",
        "content.media.edit",
        "content.media.manage",
        "content.media.view"
      ],
      "eventBindings": [
        "media.created",
        "media.deleted",
        "media.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Foundation",
        "navigation": [
          {
            "label": "Media",
            "path": "/content/media",
            "icon": "fa-photo-film",
            "order": 40
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Media",
            "path": "/sites/:siteId/media",
            "icon": "fa-photo-film",
            "order": 40
          }
        ]
      },
      "manifest": {
        "moduleId": "media",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.pages",
      "moduleId": "pages",
      "name": "Pages",
      "version": "0.18.0",
      "status": "stable",
      "category": "content",
      "icon": "fa-file-lines",
      "order": 100,
      "description": "Structured pages, sections, reusable content, navigation, legal content and custom collections for coded customer websites.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "All page content is Site-scoped and publishable."
        },
        {
          "moduleId": "media",
          "kind": "required",
          "reason": "Page blocks may reference canonical media assets."
        },
        {
          "moduleId": "seo",
          "kind": "recommended",
          "reason": "Routable pages should normally use canonical SEO metadata."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "pages.sections",
        "pages.reusable-content",
        "pages.navigation",
        "pages.legal-pages",
        "pages.custom-collections",
        "pages.scheduling",
        "pages.approvals"
      ],
      "defaultCapabilityIds": [
        "pages.sections",
        "pages.reusable-content",
        "pages.navigation"
      ],
      "contractBindings": [
        "content.page",
        "content.pageSection",
        "content.reusableContent",
        "content.navigation",
        "content.navigationItem",
        "content.legalPage",
        "content.customCollection",
        "content.customCollectionEntry",
        "blocks.actionGroup",
        "blocks.blockContractStandard",
        "blocks.cta",
        "blocks.custom",
        "blocks.documents",
        "blocks.faq",
        "blocks.featureGrid",
        "blocks.featureItem",
        "blocks.form",
        "blocks.gallery",
        "blocks.galleryItem",
        "blocks.heading",
        "blocks.hero",
        "blocks.locations",
        "blocks.logoGrid",
        "blocks.logoItem",
        "blocks.pricing",
        "blocks.pricingPlan",
        "blocks.process",
        "blocks.processStep",
        "blocks.relatedContent",
        "blocks.relatedContentItem",
        "blocks.richText",
        "blocks.services",
        "blocks.statItem",
        "blocks.stats",
        "blocks.team",
        "blocks.testimonials",
        "blocks.textImage",
        "blocks.video"
      ],
      "permissionBindings": [
        "content.customcollections.create",
        "content.customcollections.delete",
        "content.customcollections.edit",
        "content.customcollections.manage",
        "content.customcollections.view",
        "content.navigation.edit",
        "content.navigation.manage",
        "content.navigation.publish",
        "content.navigation.view",
        "content.pages.approve",
        "content.pages.create",
        "content.pages.delete",
        "content.pages.edit",
        "content.pages.publish",
        "content.pages.view",
        "content.reusablecontent.approve",
        "content.reusablecontent.create",
        "content.reusablecontent.delete",
        "content.reusablecontent.edit",
        "content.reusablecontent.publish",
        "content.reusablecontent.view"
      ],
      "eventBindings": [
        "content.archived",
        "content.created",
        "content.deleted",
        "content.published",
        "content.restored",
        "content.scheduled",
        "content.unpublished",
        "content.updated",
        "content.version-created",
        "navigation.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Content",
        "navigation": [
          {
            "label": "Pages",
            "path": "/content/pages",
            "icon": "fa-file-lines",
            "order": 10
          },
          {
            "label": "Reusable Content",
            "path": "/content/reusable",
            "icon": "fa-clone",
            "order": 20
          },
          {
            "label": "Navigation",
            "path": "/website/navigation",
            "icon": "fa-bars",
            "order": 30
          },
          {
            "label": "Custom Collections",
            "path": "/content/collections",
            "icon": "fa-table-list",
            "order": 50
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Content Model",
            "path": "/sites/:siteId/content",
            "icon": "fa-diagram-project",
            "order": 20
          }
        ]
      },
      "manifest": {
        "moduleId": "pages",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.blog",
      "moduleId": "blog",
      "name": "Blog",
      "version": "0.18.0",
      "status": "stable",
      "category": "content",
      "icon": "fa-newspaper",
      "order": 110,
      "description": "Editorial publishing for Blog Posts, categories, tags, authors, related posts, scheduling and approval workflows.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Blog content uses Core publishing/versioning."
        },
        {
          "moduleId": "media",
          "kind": "required",
          "reason": "Blog posts use canonical media references."
        },
        {
          "moduleId": "seo",
          "kind": "recommended",
          "reason": "Published posts should normally use canonical SEO metadata."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "blog.categories",
        "blog.tags",
        "blog.authors",
        "blog.related-posts",
        "blog.scheduling",
        "blog.approvals"
      ],
      "defaultCapabilityIds": [
        "blog.categories",
        "blog.tags",
        "blog.authors"
      ],
      "contractBindings": [
        "content.blogPost",
        "content.blogCategory",
        "content.blogTag",
        "content.author"
      ],
      "permissionBindings": [
        "content.blogcategories.create",
        "content.blogcategories.delete",
        "content.blogcategories.edit",
        "content.blogcategories.manage",
        "content.blogcategories.view",
        "content.blogposts.approve",
        "content.blogposts.create",
        "content.blogposts.delete",
        "content.blogposts.edit",
        "content.blogposts.publish",
        "content.blogposts.view",
        "content.blogtags.create",
        "content.blogtags.delete",
        "content.blogtags.edit",
        "content.blogtags.manage",
        "content.blogtags.view"
      ],
      "eventBindings": [
        "content.archived",
        "content.created",
        "content.deleted",
        "content.published",
        "content.restored",
        "content.scheduled",
        "content.unpublished",
        "content.updated",
        "content.version-created"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Content",
        "navigation": [
          {
            "label": "Blog",
            "path": "/content/blog",
            "icon": "fa-newspaper",
            "order": 20
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Blog",
            "path": "/sites/:siteId/blog",
            "icon": "fa-newspaper",
            "order": 30
          }
        ]
      },
      "manifest": {
        "moduleId": "blog",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.documentation",
      "moduleId": "documentation",
      "name": "Documentation",
      "version": "0.18.0",
      "status": "stable",
      "category": "content",
      "icon": "fa-book-open",
      "order": 120,
      "description": "Structured documentation collections, categories and articles with attachments, visibility, related content and version-aware publishing.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Documentation is versioned and Site-scoped."
        },
        {
          "moduleId": "media",
          "kind": "required",
          "reason": "Documentation may reference attachments/media."
        },
        {
          "moduleId": "seo",
          "kind": "recommended",
          "reason": "Public documentation benefits from canonical SEO metadata."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "documentation.collections",
        "documentation.categories",
        "documentation.attachments",
        "documentation.related-articles",
        "documentation.versioning",
        "documentation.visibility"
      ],
      "defaultCapabilityIds": [
        "documentation.collections",
        "documentation.categories",
        "documentation.versioning",
        "documentation.visibility"
      ],
      "contractBindings": [
        "content.documentationCollection",
        "content.documentationCategory",
        "content.documentationArticle"
      ],
      "permissionBindings": [
        "content.documentation.approve",
        "content.documentation.create",
        "content.documentation.delete",
        "content.documentation.edit",
        "content.documentation.publish",
        "content.documentation.view"
      ],
      "eventBindings": [
        "content.archived",
        "content.created",
        "content.deleted",
        "content.published",
        "content.restored",
        "content.scheduled",
        "content.unpublished",
        "content.updated",
        "content.version-created"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Content",
        "navigation": [
          {
            "label": "Documentation",
            "path": "/content/documentation",
            "icon": "fa-book-open",
            "order": 30
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Documentation",
            "path": "/sites/:siteId/documentation",
            "icon": "fa-book-open",
            "order": 35
          }
        ]
      },
      "manifest": {
        "moduleId": "documentation",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.seo",
      "moduleId": "seo",
      "name": "SEO",
      "version": "0.18.0",
      "status": "stable",
      "category": "growth",
      "icon": "fa-magnifying-glass-chart",
      "order": 200,
      "description": "Canonical metadata, keywords, social metadata, structured data, redirects, sitemap, robots, audits and search-performance records.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "SEO records belong to a Site and target canonical entities."
        },
        {
          "moduleId": "integrations",
          "kind": "optional",
          "reason": "Search performance and indexing data may be sourced through supported connectors."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "seo.metadata",
        "seo.keywords",
        "seo.social-sharing",
        "seo.structured-data",
        "seo.redirects",
        "seo.sitemap",
        "seo.robots",
        "seo.audits",
        "seo.search-performance",
        "seo.indexing"
      ],
      "defaultCapabilityIds": [
        "seo.metadata",
        "seo.social-sharing",
        "seo.sitemap",
        "seo.robots"
      ],
      "contractBindings": [
        "seo.alternateLanguage",
        "seo.auditIssue",
        "seo.auditResult",
        "seo.brokenLink",
        "seo.indexingStatus",
        "seo.internalLink",
        "seo.keywordSet",
        "seo.keywordTarget",
        "seo.metadata",
        "seo.openGraph",
        "seo.redirect",
        "seo.robotsDirective",
        "seo.robotsPolicy",
        "seo.robotsRule",
        "seo.searchPerformance",
        "seo.searchPreview",
        "seo.searchQuery",
        "seo.seoContractStandard",
        "seo.siteDefaults",
        "seo.sitemapEntry",
        "seo.socialCard",
        "seo.structuredData",
        "seo.urlInspectionResult"
      ],
      "permissionBindings": [
        "seo.audits.export",
        "seo.audits.manage",
        "seo.audits.view",
        "seo.indexing.manage",
        "seo.indexing.view",
        "seo.metadata.edit",
        "seo.metadata.view",
        "seo.redirects.create",
        "seo.redirects.delete",
        "seo.redirects.edit",
        "seo.redirects.manage",
        "seo.redirects.view",
        "seo.robots.edit",
        "seo.robots.manage",
        "seo.robots.view",
        "seo.searchperformance.export",
        "seo.searchperformance.view",
        "seo.sitemap.edit",
        "seo.sitemap.manage",
        "seo.sitemap.view",
        "seo.structureddata.edit",
        "seo.structureddata.view"
      ],
      "eventBindings": [
        "redirect.created",
        "redirect.deleted",
        "redirect.updated",
        "seo.updated",
        "sitemap.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Growth",
        "navigation": [
          {
            "label": "SEO",
            "path": "/growth/seo",
            "icon": "fa-magnifying-glass-chart",
            "order": 10
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "SEO",
            "path": "/sites/:siteId/seo",
            "icon": "fa-magnifying-glass-chart",
            "order": 40
          }
        ]
      },
      "manifest": {
        "moduleId": "seo",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.forms",
      "moduleId": "forms",
      "name": "Forms",
      "version": "0.18.0",
      "status": "stable",
      "category": "growth",
      "icon": "fa-rectangle-list",
      "order": 210,
      "description": "Structured forms, submissions, validation, notifications, spam handling, consent capture and conversion mapping.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Forms and submissions are Site-scoped."
        },
        {
          "moduleId": "consent",
          "kind": "conditional",
          "reason": "Consent module is required when optional analytics/marketing consent is collected or enforced."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "forms.multi-step",
        "forms.conditional-logic",
        "forms.file-uploads",
        "forms.notifications",
        "forms.auto-response",
        "forms.spam-protection",
        "forms.consent-fields",
        "forms.conversion-mapping"
      ],
      "defaultCapabilityIds": [
        "forms.notifications",
        "forms.spam-protection",
        "forms.consent-fields"
      ],
      "contractBindings": [
        "forms.autoResponse",
        "forms.condition",
        "forms.conditionGroup",
        "forms.confirmation",
        "forms.consentFieldConfig",
        "forms.consentRecord",
        "forms.conversionMapping",
        "forms.dataHandling",
        "forms.fieldMapping",
        "forms.fieldOption",
        "forms.fieldValidationRule",
        "forms.form",
        "forms.formAvailability",
        "forms.formField",
        "forms.formSection",
        "forms.formStep",
        "forms.formsLeadsContractStandard",
        "forms.notificationRecipient",
        "forms.notificationRule",
        "forms.rateLimitPolicy",
        "forms.requestContext",
        "forms.spamDecision",
        "forms.spamPolicy",
        "forms.spamSignal",
        "forms.submission",
        "forms.submissionFile",
        "forms.submissionValue",
        "forms.uploadPolicy"
      ],
      "permissionBindings": [
        "forms.consent.export",
        "forms.consent.view",
        "forms.forms.create",
        "forms.forms.delete",
        "forms.forms.edit",
        "forms.forms.manage",
        "forms.forms.publish",
        "forms.forms.view",
        "forms.notifications.edit",
        "forms.notifications.manage",
        "forms.notifications.view",
        "forms.spam.manage",
        "forms.spam.view",
        "forms.submissions.delete",
        "forms.submissions.export",
        "forms.submissions.manage",
        "forms.submissions.view"
      ],
      "eventBindings": [
        "form.archived",
        "form.created",
        "form.published",
        "form.rejected",
        "form.submitted",
        "form.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Growth",
        "navigation": [
          {
            "label": "Forms",
            "path": "/growth/forms",
            "icon": "fa-rectangle-list",
            "order": 20
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Forms",
            "path": "/sites/:siteId/forms",
            "icon": "fa-rectangle-list",
            "order": 50
          }
        ]
      },
      "manifest": {
        "moduleId": "forms",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.leads",
      "moduleId": "leads",
      "name": "Leads",
      "version": "0.18.0",
      "status": "stable",
      "category": "growth",
      "icon": "fa-user-plus",
      "order": 220,
      "description": "Lead records, status, assignment, notes, activity, deduplication and export generated from approved sources such as Forms.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Leads are Site-scoped business records."
        },
        {
          "moduleId": "forms",
          "kind": "required",
          "reason": "Phase 17 Lead workflows use the Forms/Lead contract family as their canonical source."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "leads.status",
        "leads.assignment",
        "leads.notes",
        "leads.activity",
        "leads.deduplication",
        "leads.export"
      ],
      "defaultCapabilityIds": [
        "leads.status",
        "leads.activity",
        "leads.deduplication"
      ],
      "contractBindings": [
        "forms.fieldMapping",
        "forms.lead",
        "forms.leadActivity",
        "forms.leadAssignment",
        "forms.leadDedupePolicy",
        "forms.leadMapping",
        "forms.leadNote",
        "forms.leadSource",
        "forms.leadStatusDefinition"
      ],
      "permissionBindings": [
        "forms.leads.create",
        "forms.leads.delete",
        "forms.leads.edit",
        "forms.leads.export",
        "forms.leads.manage",
        "forms.leads.view"
      ],
      "eventBindings": [
        "lead.assigned",
        "lead.created",
        "lead.merged",
        "lead.status-changed",
        "lead.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Growth",
        "navigation": [
          {
            "label": "Leads",
            "path": "/growth/leads",
            "icon": "fa-user-plus",
            "order": 30
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Leads",
            "path": "/sites/:siteId/leads",
            "icon": "fa-user-plus",
            "order": 55
          }
        ]
      },
      "manifest": {
        "moduleId": "leads",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.consent",
      "moduleId": "consent",
      "name": "Consent",
      "version": "0.18.0",
      "status": "stable",
      "category": "platform",
      "icon": "fa-shield-halved",
      "order": 300,
      "description": "Tracking and marketing consent preferences, states, policies and immutable consent records used to gate optional integrations.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Consent state is Site-scoped and auditable."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "consent.preferences",
        "consent.records",
        "consent.categories",
        "consent.integration-gating"
      ],
      "defaultCapabilityIds": [
        "consent.preferences",
        "consent.records",
        "consent.categories",
        "consent.integration-gating"
      ],
      "contractBindings": [
        "forms.consentFieldConfig",
        "forms.consentRecord",
        "marketing.consentCategory",
        "marketing.consentPolicy",
        "marketing.consentPreference",
        "marketing.consentState",
        "marketing.trackingConsentRecord"
      ],
      "permissionBindings": [
        "forms.consent.export",
        "forms.consent.view",
        "marketing.consent.edit",
        "marketing.consent.manage",
        "marketing.consent.view"
      ],
      "eventBindings": [
        "consent.recorded",
        "consent.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Platform",
        "navigation": [
          {
            "label": "Consent & Privacy",
            "path": "/website/consent",
            "icon": "fa-shield-halved",
            "order": 20
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Consent",
            "path": "/sites/:siteId/consent",
            "icon": "fa-shield-halved",
            "order": 60
          }
        ]
      },
      "manifest": {
        "moduleId": "consent",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.analytics",
      "moduleId": "analytics",
      "name": "Analytics",
      "version": "0.18.0",
      "status": "stable",
      "category": "growth",
      "icon": "fa-chart-line",
      "order": 230,
      "description": "Provider-neutral website measurement, analytics observations, reporting, attribution and campaign performance summaries.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Analytics configuration is Site-scoped."
        },
        {
          "moduleId": "consent",
          "kind": "required",
          "reason": "Optional analytics measurement must honor canonical consent state."
        },
        {
          "moduleId": "integrations",
          "kind": "recommended",
          "reason": "Provider reporting normally arrives through supported integration connectors."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "analytics.measurement",
        "analytics.reporting",
        "analytics.attribution",
        "analytics.campaign-performance"
      ],
      "defaultCapabilityIds": [
        "analytics.measurement",
        "analytics.reporting"
      ],
      "contractBindings": [
        "marketing.analyticsConfiguration",
        "marketing.analyticsObservation",
        "marketing.analyticsSnapshot",
        "marketing.attributionCredit",
        "marketing.attributionModel",
        "marketing.attributionTouchpoint",
        "marketing.campaignAttribution",
        "marketing.campaignPerformanceSnapshot",
        "marketing.conversionAttribution",
        "marketing.dimensionDefinition",
        "marketing.metricDefinition"
      ],
      "permissionBindings": [
        "marketing.analytics.export",
        "marketing.analytics.view",
        "marketing.attribution.export",
        "marketing.attribution.manage",
        "marketing.attribution.view"
      ],
      "eventBindings": [
        "conversion.recorded",
        "consent.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Growth",
        "navigation": [
          {
            "label": "Analytics",
            "path": "/growth/analytics",
            "icon": "fa-chart-line",
            "order": 40
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Analytics",
            "path": "/sites/:siteId/analytics",
            "icon": "fa-chart-line",
            "order": 65
          }
        ]
      },
      "manifest": {
        "moduleId": "analytics",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.marketing",
      "moduleId": "marketing",
      "name": "Marketing",
      "version": "0.18.0",
      "status": "stable",
      "category": "growth",
      "icon": "fa-bullseye",
      "order": 240,
      "description": "Conversions, campaign attribution, UTM/click identifiers, marketing destinations and provider-neutral tracking configuration.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Marketing configuration is Site-scoped."
        },
        {
          "moduleId": "consent",
          "kind": "required",
          "reason": "Optional marketing destinations must honor consent."
        },
        {
          "moduleId": "analytics",
          "kind": "recommended",
          "reason": "Attribution and reporting can consume Analytics capability."
        },
        {
          "moduleId": "integrations",
          "kind": "recommended",
          "reason": "Ad platforms and marketing tools connect through canonical connectors."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "marketing.conversions",
        "marketing.campaigns",
        "marketing.utm-attribution",
        "marketing.ad-click-identifiers",
        "marketing.destinations"
      ],
      "defaultCapabilityIds": [
        "marketing.conversions",
        "marketing.utm-attribution",
        "marketing.destinations"
      ],
      "contractBindings": [
        "marketing.adClickIdentifier",
        "marketing.analyticsConfiguration",
        "marketing.attributionCredit",
        "marketing.attributionModel",
        "marketing.attributionTouchpoint",
        "marketing.campaignAttribution",
        "marketing.campaignContext",
        "marketing.campaignDefinition",
        "marketing.campaignPerformanceSnapshot",
        "marketing.conversionAttribution",
        "marketing.conversionDeduplicationPolicy",
        "marketing.conversionDefinition",
        "marketing.conversionOccurrence",
        "marketing.conversionSummary",
        "marketing.conversionValue",
        "marketing.dataLayerConfiguration",
        "marketing.destinationMapping",
        "marketing.deviceContext",
        "marketing.dimensionDefinition",
        "marketing.dispatchRequest",
        "marketing.dispatchResult",
        "marketing.eventContext",
        "marketing.eventDestination",
        "marketing.eventPropertyDefinition",
        "marketing.marketingDestination",
        "marketing.marketingTrackingContractStandard",
        "marketing.metricDefinition",
        "marketing.pageContext",
        "marketing.referrerContext",
        "marketing.sessionContext",
        "marketing.standardTrackingEvents",
        "marketing.trackingConfiguration",
        "marketing.trackingDataPolicy",
        "marketing.trackingEvent",
        "marketing.trackingEventDefinition",
        "marketing.trafficSource",
        "marketing.utmParameters",
        "marketing.visitorContext"
      ],
      "permissionBindings": [
        "marketing.attribution.export",
        "marketing.attribution.manage",
        "marketing.attribution.view",
        "marketing.campaigns.create",
        "marketing.campaigns.delete",
        "marketing.campaigns.edit",
        "marketing.campaigns.manage",
        "marketing.campaigns.view",
        "marketing.conversions.create",
        "marketing.conversions.delete",
        "marketing.conversions.edit",
        "marketing.conversions.manage",
        "marketing.conversions.view",
        "marketing.destinations.create",
        "marketing.destinations.delete",
        "marketing.destinations.edit",
        "marketing.destinations.manage",
        "marketing.destinations.view",
        "marketing.tracking.edit",
        "marketing.tracking.manage",
        "marketing.tracking.view"
      ],
      "eventBindings": [
        "conversion.recorded"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Growth",
        "navigation": [
          {
            "label": "Conversions",
            "path": "/growth/conversions",
            "icon": "fa-bullseye",
            "order": 50
          },
          {
            "label": "Marketing",
            "path": "/growth/marketing",
            "icon": "fa-megaphone",
            "order": 60
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Marketing",
            "path": "/sites/:siteId/marketing",
            "icon": "fa-bullseye",
            "order": 70
          }
        ]
      },
      "manifest": {
        "moduleId": "marketing",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.integrations",
      "moduleId": "integrations",
      "name": "Integrations",
      "version": "0.18.0",
      "status": "stable",
      "category": "platform",
      "icon": "fa-plug",
      "order": 310,
      "description": "Approved provider connectors, credentials references, environment bindings, mappings, synchronization and health diagnostics.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Connections are Site-scoped and permission-controlled."
        },
        {
          "moduleId": "consent",
          "kind": "conditional",
          "reason": "Tracking/advertising connectors require consent-aware runtime behavior."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "integrations.gtm",
        "integrations.ga4",
        "integrations.google-ads",
        "integrations.search-console",
        "integrations.meta",
        "integrations.clarity",
        "integrations.tiktok",
        "integrations.linkedin",
        "integrations.microsoft-ads",
        "integrations.email",
        "integrations.crm",
        "integrations.webhooks",
        "integrations.custom-api",
        "integrations.health",
        "integrations.sync"
      ],
      "defaultCapabilityIds": [
        "integrations.health"
      ],
      "contractBindings": [
        "integrations.accountReference",
        "integrations.actionBinding",
        "integrations.apiKeyConfiguration",
        "integrations.authenticationProfile",
        "integrations.capabilityBinding",
        "integrations.capabilityDefinition",
        "integrations.configurationField",
        "integrations.configurationValue",
        "integrations.connectionStatus",
        "integrations.connectionTest",
        "integrations.connectorDefinition",
        "integrations.consentBinding",
        "integrations.conversionMapping",
        "integrations.credentialReference",
        "integrations.crm",
        "integrations.customApi",
        "integrations.dataMapping",
        "integrations.dataMappingField",
        "integrations.dataPolicyBinding",
        "integrations.emailProvider",
        "integrations.environmentBinding",
        "integrations.eventMapping",
        "integrations.googleAds",
        "integrations.googleAnalytics4",
        "integrations.googleSearchConsole",
        "integrations.googleTagManager",
        "integrations.healthCheck",
        "integrations.healthSnapshot",
        "integrations.integrationConnection",
        "integrations.integrationContractStandard",
        "integrations.integrationError",
        "integrations.linkedin",
        "integrations.meta",
        "integrations.microsoftAds",
        "integrations.microsoftClarity",
        "integrations.oauthConfiguration",
        "integrations.providerActionDefinition",
        "integrations.providerDefinition",
        "integrations.rateLimitState",
        "integrations.resourceReference",
        "integrations.retryPolicy",
        "integrations.runtimeBinding",
        "integrations.secretReference",
        "integrations.syncCursor",
        "integrations.syncPolicy",
        "integrations.syncResult",
        "integrations.syncRun",
        "integrations.tiktok",
        "integrations.webhook",
        "webhooks.dataAccessPolicy",
        "webhooks.deadLetter",
        "webhooks.defaultPolicies",
        "webhooks.delivery",
        "webhooks.deliveryAttempt",
        "webhooks.deliveryFailure",
        "webhooks.deliveryLogRecord",
        "webhooks.deliveryMetricSnapshot",
        "webhooks.deliveryQueuePolicy",
        "webhooks.deliveryRequest",
        "webhooks.deliveryResponse",
        "webhooks.deliverySummary",
        "webhooks.endpoint",
        "webhooks.endpointAuthentication",
        "webhooks.endpointHealth",
        "webhooks.endpointNetworkPolicy",
        "webhooks.endpointVerification",
        "webhooks.endpointVerificationPayload",
        "webhooks.endpointVerificationResponse",
        "webhooks.environmentBinding",
        "webhooks.eventCatalog",
        "webhooks.eventExposure",
        "webhooks.eventSelection",
        "webhooks.failureClassification",
        "webhooks.failureCodeVocabulary",
        "webhooks.headerPolicy",
        "webhooks.headerVocabulary",
        "webhooks.httpOutcomePolicy",
        "webhooks.pausePolicy",
        "webhooks.payloadEnvelope",
        "webhooks.payloadPolicy",
        "webhooks.ratePolicy",
        "webhooks.redactionPolicy",
        "webhooks.redeliveryRequest",
        "webhooks.replayProtection",
        "webhooks.requestHeader",
        "webhooks.responsePolicy",
        "webhooks.retentionPolicy",
        "webhooks.retryPolicy",
        "webhooks.secretRotation",
        "webhooks.signaturePolicy",
        "webhooks.signingKeyReference",
        "webhooks.statusVocabulary",
        "webhooks.subscription",
        "webhooks.subscriptionFilter",
        "webhooks.subscriptionOwnership",
        "webhooks.subscriptionState",
        "webhooks.testDelivery",
        "webhooks.timeoutPolicy",
        "webhooks.webhookReference",
        "webhooks.webhookRegistryStandard"
      ],
      "permissionBindings": [
        "integrations.connections.create",
        "integrations.connections.delete",
        "integrations.connections.edit",
        "integrations.connections.manage",
        "integrations.connections.view",
        "integrations.credentials.manage",
        "integrations.credentials.view",
        "integrations.health.view",
        "integrations.mappings.edit",
        "integrations.mappings.manage",
        "integrations.mappings.view",
        "integrations.sync.manage",
        "integrations.sync.view",
        "webhooks.deadletters.manage",
        "webhooks.deadletters.view",
        "webhooks.deliveries.export",
        "webhooks.deliveries.manage",
        "webhooks.deliveries.view",
        "webhooks.endpoints.create",
        "webhooks.endpoints.delete",
        "webhooks.endpoints.edit",
        "webhooks.endpoints.manage",
        "webhooks.endpoints.view",
        "webhooks.secrets.manage",
        "webhooks.subscriptions.create",
        "webhooks.subscriptions.delete",
        "webhooks.subscriptions.edit",
        "webhooks.subscriptions.manage",
        "webhooks.subscriptions.view",
        "webhooks.tests.create",
        "webhooks.tests.view"
      ],
      "eventBindings": [
        "integration.connected",
        "integration.disconnected",
        "integration.health-degraded",
        "integration.health-restored",
        "integration.sync-failed",
        "integration.sync-started",
        "integration.sync-succeeded",
        "webhook.delivery-dead-lettered",
        "webhook.endpoint-degraded",
        "webhook.endpoint-disabled",
        "webhook.endpoint-restored",
        "webhook.endpoint-verification-failed",
        "webhook.endpoint-verified",
        "webhook.redelivery-requested",
        "webhook.signing-secret-rotated",
        "webhook.subscription-created",
        "webhook.subscription-disabled",
        "webhook.subscription-paused",
        "webhook.subscription-resumed"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Platform",
        "navigation": [
          {
            "label": "Integrations",
            "path": "/website/integrations",
            "icon": "fa-plug",
            "order": 10
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Integrations",
            "path": "/sites/:siteId/integrations",
            "icon": "fa-plug",
            "order": 80
          }
        ]
      },
      "manifest": {
        "moduleId": "integrations",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    },
    {
      "$id": "modules.commerce",
      "moduleId": "commerce",
      "name": "Commerce",
      "version": "0.18.0",
      "status": "stable",
      "category": "commerce",
      "icon": "fa-cart-shopping",
      "order": 400,
      "description": "Full transactional commerce foundation covering catalog, inventory, customers, cart, checkout, orders, payments, fulfillment, discounts, returns, reviews and tax/shipping models.",
      "selection": {
        "mandatory": false,
        "defaultEnabled": false,
        "explicitManifestSelection": true,
        "customerCanEnable": false,
        "nextfAdminCanEnable": true
      },
      "dependencies": [
        {
          "moduleId": "core",
          "kind": "required",
          "reason": "Commerce requires tenant scope, audit and authoritative Site identity."
        },
        {
          "moduleId": "media",
          "kind": "required",
          "reason": "Catalog products and commerce content may reference canonical media."
        },
        {
          "moduleId": "seo",
          "kind": "recommended",
          "reason": "Product/category storefront content should use canonical SEO."
        },
        {
          "moduleId": "consent",
          "kind": "recommended",
          "reason": "Commerce sites frequently enable analytics/marketing consent."
        },
        {
          "moduleId": "integrations",
          "kind": "recommended",
          "reason": "Payment, shipping, tax and marketing providers connect through canonical integrations."
        }
      ],
      "conflicts": [],
      "capabilityIds": [
        "commerce.catalog",
        "commerce.variants",
        "commerce.attributes",
        "commerce.categories",
        "commerce.collections",
        "commerce.inventory",
        "commerce.multi-location-inventory",
        "commerce.customers",
        "commerce.carts",
        "commerce.checkout",
        "commerce.orders",
        "commerce.payments",
        "commerce.refunds",
        "commerce.shipping",
        "commerce.fulfillment",
        "commerce.discounts",
        "commerce.promotions",
        "commerce.returns",
        "commerce.reviews",
        "commerce.taxes"
      ],
      "defaultCapabilityIds": [
        "commerce.catalog",
        "commerce.variants",
        "commerce.categories",
        "commerce.inventory",
        "commerce.customers",
        "commerce.carts",
        "commerce.checkout",
        "commerce.orders",
        "commerce.payments"
      ],
      "contractBindings": [
        "commerce.cart",
        "commerce.cartLine",
        "commerce.cartTotals",
        "commerce.checkout",
        "commerce.checkoutAddressSnapshot",
        "commerce.checkoutContact",
        "commerce.checkoutLine",
        "commerce.checkoutPaymentSelection",
        "commerce.checkoutShippingSelection",
        "commerce.collectionRule",
        "commerce.commerceCoreStandard",
        "commerce.commerceCustomer",
        "commerce.commerceRulesStandard",
        "commerce.customerAddress",
        "commerce.customerNote",
        "commerce.customerSnapshot",
        "commerce.customerTag",
        "commerce.deliveryEstimate",
        "commerce.discount",
        "commerce.discountAllocation",
        "commerce.discountCode",
        "commerce.fulfillment",
        "commerce.fulfillmentLine",
        "commerce.inventoryAdjustment",
        "commerce.inventoryItem",
        "commerce.inventoryLevel",
        "commerce.inventoryLocation",
        "commerce.inventoryReservation",
        "commerce.inventoryTransfer",
        "commerce.inventoryTransferLine",
        "commerce.moneySnapshot",
        "commerce.order",
        "commerce.orderAddressSnapshot",
        "commerce.orderLine",
        "commerce.orderSource",
        "commerce.orderTotals",
        "commerce.package",
        "commerce.payment",
        "commerce.paymentAttempt",
        "commerce.paymentAuthorization",
        "commerce.paymentCapture",
        "commerce.paymentMethodReference",
        "commerce.product",
        "commerce.productAttributeDefinition",
        "commerce.productAttributeValue",
        "commerce.productAvailability",
        "commerce.productCategory",
        "commerce.productCollection",
        "commerce.productOption",
        "commerce.productOptionValue",
        "commerce.productPrice",
        "commerce.productReview",
        "commerce.productVariant",
        "commerce.promotionBenefit",
        "commerce.promotionCondition",
        "commerce.quantity",
        "commerce.refund",
        "commerce.refundLine",
        "commerce.returnLine",
        "commerce.returnRequest",
        "commerce.returnResolution",
        "commerce.reviewModeration",
        "commerce.rule.approvedReviewOnlyPublic",
        "commerce.rule.authoritativeServerCalculation",
        "commerce.rule.authorizationCaptureBound",
        "commerce.rule.authorizationExpiryEnforced",
        "commerce.rule.backorderPolicyExplicit",
        "commerce.rule.bookingCapabilityGate",
        "commerce.rule.buyXGetYQuantityGuard",
        "commerce.rule.cancelledOrderCannotNewFulfill",
        "commerce.rule.cancelledOrderFulfillmentGuard",
        "commerce.rule.captureCumulativeBound",
        "commerce.rule.captureCurrencyMatch",
        "commerce.rule.captureRequiresValidAuthorization",
        "commerce.rule.cartConvertedTerminal",
        "commerce.rule.cartExpiredNotMutable",
        "commerce.rule.cartIdentityStable",
        "commerce.rule.cartMutationRecalculatesTotals",
        "commerce.rule.catalogArchivePreservesTransactions",
        "commerce.rule.catalogCurrencyPolicy",
        "commerce.rule.catalogRelationshipsValid",
        "commerce.rule.checkoutCatalogRevalidation",
        "commerce.rule.checkoutDiscountRevalidation",
        "commerce.rule.checkoutInventoryRevalidation",
        "commerce.rule.checkoutSingleOrderConversion",
        "commerce.rule.checkoutSnapshotsCart",
        "commerce.rule.checkoutTaxShippingRevalidation",
        "commerce.rule.commandCorrelation",
        "commerce.rule.commerceAuditAppendOnly",
        "commerce.rule.commercePermissionGate",
        "commerce.rule.commercePublicDeliveryWhitelist",
        "commerce.rule.commerceSensitiveDataMinimized",
        "commerce.rule.commerceTenantIsolation",
        "commerce.rule.committedTimestampOrdering",
        "commerce.rule.couponPerCustomerLimit",
        "commerce.rule.couponUsageAtomic",
        "commerce.rule.cumulativeFulfillmentBound",
        "commerce.rule.cumulativeReturnBound",
        "commerce.rule.customerDeletionPreservesOrderSnapshots",
        "commerce.rule.customerSafeCommerceErrors",
        "commerce.rule.deliveredRequiresEvidence",
        "commerce.rule.digitalDeliveryCapabilityGate",
        "commerce.rule.digitalProductNoPhysicalShipping",
        "commerce.rule.discountAllocationBound",
        "commerce.rule.discountCurrencyConsistency",
        "commerce.rule.discountEligibilityRevalidated",
        "commerce.rule.discountStackingExplicit",
        "commerce.rule.externalReferenceDoesNotOverrideTruth",
        "commerce.rule.failedPaymentNoPaidState",
        "commerce.rule.failedRefundNoFinancialEffect",
        "commerce.rule.fulfillmentDoesNotImplyPayment",
        "commerce.rule.fulfillmentQuantityBound",
        "commerce.rule.fulfillmentRequiresEligibleOrder",
        "commerce.rule.giftCardCapabilityGate",
        "commerce.rule.historicalDiscountAllocationImmutable",
        "commerce.rule.historicalTaxImmutable",
        "commerce.rule.idempotencyPayloadStable",
        "commerce.rule.idempotencyReplaySameResult",
        "commerce.rule.idempotencyRetentionWindow",
        "commerce.rule.idempotencyScope",
        "commerce.rule.inventoryAdjustmentLedgerRequired",
        "commerce.rule.inventoryBalanceReconcile",
        "commerce.rule.inventoryConcurrentMutationGuard",
        "commerce.rule.inventoryTransferConservesQuantity",
        "commerce.rule.inventoryTransferStateGuard",
        "commerce.rule.lockOrderingDeadlockAvoidance",
        "commerce.rule.marketplaceCapabilityGate",
        "commerce.rule.materialCommerceActionAudit",
        "commerce.rule.minimumSpendBasisExplicit",
        "commerce.rule.monetaryPrecisionRounding",
        "commerce.rule.multiCurrencyCapabilityGate",
        "commerce.rule.negativeInventoryGuard",
        "commerce.rule.nonNegativePayableTotal",
        "commerce.rule.optimisticConcurrency",
        "commerce.rule.orderCancellationGuard",
        "commerce.rule.orderCancellationReleasesReservation",
        "commerce.rule.orderCompletionGuard",
        "commerce.rule.orderCurrencyLocked",
        "commerce.rule.orderFulfillmentStatusDerived",
        "commerce.rule.orderHistoricalSnapshotsImmutable",
        "commerce.rule.orderLineTotalsReconcile",
        "commerce.rule.orderNumberUniquePerSite",
        "commerce.rule.orderPaymentStatusDerived",
        "commerce.rule.orderTotalsReconcile",
        "commerce.rule.partialFulfillmentDerived",
        "commerce.rule.paymentAmountWithinOrderBalance",
        "commerce.rule.paymentAttemptNoDuplicateFinancialFact",
        "commerce.rule.paymentProviderReferenceUnique",
        "commerce.rule.paymentStatusReconcile",
        "commerce.rule.preorderCapabilityGate",
        "commerce.rule.productPriceValid",
        "commerce.rule.promotionWindow",
        "commerce.rule.providerCallbackDeduplication",
        "commerce.rule.providerSecretsServerOnly",
        "commerce.rule.purchasableVariantActive",
        "commerce.rule.rawCardDataProhibited",
        "commerce.rule.refundCumulativeBound",
        "commerce.rule.refundCurrencyMatch",
        "commerce.rule.refundDoesNotImplyReturn",
        "commerce.rule.refundLineQuantityBound",
        "commerce.rule.refundOrderStateReconcile",
        "commerce.rule.refundRequiresCapturedFunds",
        "commerce.rule.refundRestockSeparateDecision",
        "commerce.rule.refundSuccessChangesFinancialBalance",
        "commerce.rule.rejectedReturnNoOperationalMutation",
        "commerce.rule.reservationCommitConsumes",
        "commerce.rule.reservationExpiryReleasesStock",
        "commerce.rule.reservationRequiresAvailability",
        "commerce.rule.reservationTerminalNoReactivation",
        "commerce.rule.retrySafeSideEffects",
        "commerce.rule.returnEligibilityWindow",
        "commerce.rule.returnOwnershipScope",
        "commerce.rule.returnQuantityBound",
        "commerce.rule.returnRefundSeparate",
        "commerce.rule.returnResolutionIdempotent",
        "commerce.rule.returnResolutionRequired",
        "commerce.rule.returnRestockExplicit",
        "commerce.rule.returnStateTransition",
        "commerce.rule.serverSideCommerceEnforcement",
        "commerce.rule.serviceFulfillmentPolicyExplicit",
        "commerce.rule.shipmentRequiresFulfillment",
        "commerce.rule.shippingRateSnapshotImmutable",
        "commerce.rule.shippingTaxPolicyExplicit",
        "commerce.rule.skuUniqueWithinSite",
        "commerce.rule.staleStateRevalidation",
        "commerce.rule.subscriptionCapabilityGate",
        "commerce.rule.taxCalculationBasisExplicit",
        "commerce.rule.taxCurrencyConsistency",
        "commerce.rule.taxExemptionEvidence",
        "commerce.rule.taxJurisdictionResolvedBeforeCommit",
        "commerce.rule.taxLinesReconcile",
        "commerce.rule.taxModeConsistent",
        "commerce.rule.taxRateSnapshot",
        "commerce.rule.taxRoundingConsistent",
        "commerce.rule.transactionCurrencyConsistency",
        "commerce.rule.transactionDeletionProhibited",
        "commerce.rule.transactionSnapshotImmutability",
        "commerce.rule.transactionalCommandIdempotency",
        "commerce.rule.transactionalWriteAtomicity",
        "commerce.rule.variantCombinationUnique",
        "commerce.rule.verifiedReviewEvidenceDerived",
        "commerce.salesChannel",
        "commerce.shipment",
        "commerce.shippingMethod",
        "commerce.shippingRate",
        "commerce.shippingZone",
        "commerce.storeSettings",
        "commerce.taxClass",
        "commerce.taxConfiguration",
        "commerce.taxLine",
        "commerce.taxRate",
        "commerce.trackingReference"
      ],
      "permissionBindings": [
        "commerce.carts.manage",
        "commerce.carts.view",
        "commerce.categories.create",
        "commerce.categories.delete",
        "commerce.categories.edit",
        "commerce.categories.manage",
        "commerce.categories.view",
        "commerce.checkouts.manage",
        "commerce.checkouts.view",
        "commerce.collections.create",
        "commerce.collections.delete",
        "commerce.collections.edit",
        "commerce.collections.manage",
        "commerce.collections.view",
        "commerce.customers.edit",
        "commerce.customers.export",
        "commerce.customers.manage",
        "commerce.customers.view",
        "commerce.discounts.create",
        "commerce.discounts.delete",
        "commerce.discounts.edit",
        "commerce.discounts.manage",
        "commerce.discounts.view",
        "commerce.fulfillments.create",
        "commerce.fulfillments.edit",
        "commerce.fulfillments.manage",
        "commerce.fulfillments.view",
        "commerce.inventory.edit",
        "commerce.inventory.export",
        "commerce.inventory.manage",
        "commerce.inventory.view",
        "commerce.orders.edit",
        "commerce.orders.export",
        "commerce.orders.manage",
        "commerce.orders.view",
        "commerce.payments.export",
        "commerce.payments.manage",
        "commerce.payments.view",
        "commerce.products.approve",
        "commerce.products.create",
        "commerce.products.delete",
        "commerce.products.edit",
        "commerce.products.publish",
        "commerce.products.view",
        "commerce.refunds.create",
        "commerce.refunds.export",
        "commerce.refunds.manage",
        "commerce.refunds.view",
        "commerce.returns.edit",
        "commerce.returns.manage",
        "commerce.returns.view",
        "commerce.reviews.delete",
        "commerce.reviews.edit",
        "commerce.reviews.manage",
        "commerce.reviews.view",
        "commerce.settings.edit",
        "commerce.settings.manage",
        "commerce.settings.view",
        "commerce.shipping.create",
        "commerce.shipping.delete",
        "commerce.shipping.edit",
        "commerce.shipping.manage",
        "commerce.shipping.view",
        "commerce.taxes.edit",
        "commerce.taxes.manage",
        "commerce.taxes.view"
      ],
      "eventBindings": [
        "cart.abandoned",
        "cart.converted",
        "cart.created",
        "cart.expired",
        "cart.updated",
        "checkout.abandoned",
        "checkout.completed",
        "checkout.expired",
        "checkout.started",
        "checkout.updated",
        "collection.created",
        "collection.updated",
        "customer.archived",
        "customer.created",
        "customer.updated",
        "discount.activated",
        "discount.created",
        "discount.deactivated",
        "discount.updated",
        "fulfillment.cancelled",
        "fulfillment.completed",
        "fulfillment.created",
        "fulfillment.updated",
        "inventory.adjusted",
        "inventory.back-in-stock",
        "inventory.committed",
        "inventory.low",
        "inventory.out-of-stock",
        "inventory.released",
        "inventory.reserved",
        "inventory.transferred",
        "order.archived",
        "order.cancelled",
        "order.completed",
        "order.created",
        "order.fulfilled",
        "order.on-hold",
        "order.paid",
        "order.partially-fulfilled",
        "order.partially-paid",
        "order.partially-refunded",
        "order.refunded",
        "order.updated",
        "payment.authorized",
        "payment.captured",
        "payment.created",
        "payment.failed",
        "payment.succeeded",
        "product.archived",
        "product.created",
        "product.published",
        "product.updated",
        "refund.created",
        "refund.failed",
        "refund.succeeded",
        "return.approved",
        "return.cancelled",
        "return.completed",
        "return.received",
        "return.rejected",
        "return.requested",
        "review.approved",
        "review.created",
        "review.published",
        "review.rejected",
        "shipment.created",
        "shipment.delivered",
        "shipment.delivery-failed",
        "shipment.dispatched",
        "variant.created",
        "variant.updated"
      ],
      "cms": {
        "customerVisible": true,
        "group": "Commerce",
        "navigation": [
          {
            "label": "Products",
            "path": "/commerce/products",
            "icon": "fa-box",
            "order": 10
          },
          {
            "label": "Categories",
            "path": "/commerce/categories",
            "icon": "fa-tags",
            "order": 20
          },
          {
            "label": "Collections",
            "path": "/commerce/collections",
            "icon": "fa-layer-group",
            "order": 30
          },
          {
            "label": "Inventory",
            "path": "/commerce/inventory",
            "icon": "fa-warehouse",
            "order": 40
          },
          {
            "label": "Orders",
            "path": "/commerce/orders",
            "icon": "fa-receipt",
            "order": 50
          },
          {
            "label": "Customers",
            "path": "/commerce/customers",
            "icon": "fa-users",
            "order": 60
          },
          {
            "label": "Discounts",
            "path": "/commerce/discounts",
            "icon": "fa-percent",
            "order": 70
          },
          {
            "label": "Returns",
            "path": "/commerce/returns",
            "icon": "fa-rotate-left",
            "order": 80
          },
          {
            "label": "Reviews",
            "path": "/commerce/reviews",
            "icon": "fa-star",
            "order": 90
          },
          {
            "label": "Store Settings",
            "path": "/commerce/settings",
            "icon": "fa-gear",
            "order": 100
          }
        ]
      },
      "admin": {
        "visible": true,
        "group": "Sites",
        "navigation": [
          {
            "label": "Commerce",
            "path": "/sites/:siteId/commerce",
            "icon": "fa-cart-shopping",
            "order": 100
          }
        ]
      },
      "manifest": {
        "moduleId": "commerce",
        "capabilitySelection": "module-scoped",
        "dependencyValidation": "strict"
      },
      "notes": []
    }
  ],
  "capabilities": [
    {
      "$id": "modules.capability.core.identity",
      "capabilityId": "core.identity",
      "name": "Identity and Tenant Scope",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "core",
      "mode": "always-on",
      "selectable": false,
      "defaultEnabled": true,
      "description": "Identity and Tenant Scope capability within the Core module.",
      "contractBindings": [
        "core.organization",
        "core.site",
        "core.entityIdentity",
        "core.tenantScope"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.core.publishing",
      "capabilityId": "core.publishing",
      "name": "Publishing",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "core",
      "mode": "always-on",
      "selectable": false,
      "defaultEnabled": true,
      "description": "Publishing capability within the Core module.",
      "contractBindings": [
        "core.publishing",
        "core.visibility",
        "core.scheduleWindow"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.core.versioning",
      "capabilityId": "core.versioning",
      "name": "Versioning",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "core",
      "mode": "always-on",
      "selectable": false,
      "defaultEnabled": true,
      "description": "Versioning capability within the Core module.",
      "contractBindings": [
        "core.versionRecord",
        "core.revisionPointer"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.core.audit",
      "capabilityId": "core.audit",
      "name": "Audit",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "core",
      "mode": "always-on",
      "selectable": false,
      "defaultEnabled": true,
      "description": "Audit capability within the Core module.",
      "contractBindings": [
        "core.auditRecord",
        "core.actorReference",
        "core.entityReference"
      ],
      "permissionBindings": [
        "core.audit.export",
        "core.audit.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.core.tenant-isolation",
      "capabilityId": "core.tenant-isolation",
      "name": "Tenant Isolation",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "core",
      "mode": "always-on",
      "selectable": false,
      "defaultEnabled": true,
      "description": "Tenant Isolation capability within the Core module.",
      "contractBindings": [
        "core.tenantScope"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.media.library",
      "capabilityId": "media.library",
      "name": "Media Library",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "media",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Media Library capability within the Media module.",
      "contractBindings": [
        "shared.mediaAsset",
        "shared.mediaReference"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.media.images",
      "capabilityId": "media.images",
      "name": "Image Assets",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "media",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Image Assets capability within the Media module.",
      "contractBindings": [
        "shared.mediaAsset",
        "shared.mediaReference"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.media.documents",
      "capabilityId": "media.documents",
      "name": "Document Assets",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "media",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Document Assets capability within the Media module.",
      "contractBindings": [
        "shared.mediaAsset",
        "shared.mediaReference"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.media.video",
      "capabilityId": "media.video",
      "name": "Video Assets",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "media",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Video Assets capability within the Media module.",
      "contractBindings": [
        "shared.mediaAsset",
        "shared.mediaReference"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.media.audio",
      "capabilityId": "media.audio",
      "name": "Audio Assets",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "media",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Audio Assets capability within the Media module.",
      "contractBindings": [
        "shared.mediaAsset",
        "shared.mediaReference"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.media.contextual-metadata",
      "capabilityId": "media.contextual-metadata",
      "name": "Contextual Media Metadata",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "media",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Contextual Media Metadata capability within the Media module.",
      "contractBindings": [
        "shared.mediaReference"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.pages.sections",
      "capabilityId": "pages.sections",
      "name": "Structured Sections",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "pages",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Structured Sections capability within the Pages module.",
      "contractBindings": [
        "content.page",
        "content.pageSection"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.pages.reusable-content",
      "capabilityId": "pages.reusable-content",
      "name": "Reusable Content",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "pages",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Reusable Content capability within the Pages module.",
      "contractBindings": [
        "content.reusableContent"
      ],
      "permissionBindings": [
        "content.reusablecontent.approve",
        "content.reusablecontent.create",
        "content.reusablecontent.delete",
        "content.reusablecontent.edit",
        "content.reusablecontent.publish",
        "content.reusablecontent.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.pages.navigation",
      "capabilityId": "pages.navigation",
      "name": "Navigation",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "pages",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Navigation capability within the Pages module.",
      "contractBindings": [
        "content.navigation",
        "content.navigationItem"
      ],
      "permissionBindings": [
        "content.navigation.edit",
        "content.navigation.manage",
        "content.navigation.publish",
        "content.navigation.view"
      ],
      "eventBindings": [
        "navigation.updated"
      ],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.pages.legal-pages",
      "capabilityId": "pages.legal-pages",
      "name": "Legal Pages",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "pages",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Legal Pages capability within the Pages module.",
      "contractBindings": [
        "content.legalPage"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.pages.custom-collections",
      "capabilityId": "pages.custom-collections",
      "name": "Custom Collections",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "pages",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Custom Collections capability within the Pages module.",
      "contractBindings": [
        "content.customCollection",
        "content.customCollectionEntry"
      ],
      "permissionBindings": [
        "content.customcollections.create",
        "content.customcollections.delete",
        "content.customcollections.edit",
        "content.customcollections.manage",
        "content.customcollections.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.pages.scheduling",
      "capabilityId": "pages.scheduling",
      "name": "Scheduled Publishing",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "pages",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Scheduled Publishing capability within the Pages module.",
      "contractBindings": [
        "core.scheduleWindow",
        "core.publishing"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.pages.approvals",
      "capabilityId": "pages.approvals",
      "name": "Approval Workflow",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "pages",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Approval Workflow capability within the Pages module.",
      "contractBindings": [
        "core.publishing"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.blog.categories",
      "capabilityId": "blog.categories",
      "name": "Categories",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "blog",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Categories capability within the Blog module.",
      "contractBindings": [
        "content.blogCategory"
      ],
      "permissionBindings": [
        "content.blogcategories.create",
        "content.blogcategories.delete",
        "content.blogcategories.edit",
        "content.blogcategories.manage",
        "content.blogcategories.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.blog.tags",
      "capabilityId": "blog.tags",
      "name": "Tags",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "blog",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Tags capability within the Blog module.",
      "contractBindings": [
        "content.blogTag"
      ],
      "permissionBindings": [
        "content.blogtags.create",
        "content.blogtags.delete",
        "content.blogtags.edit",
        "content.blogtags.manage",
        "content.blogtags.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.blog.authors",
      "capabilityId": "blog.authors",
      "name": "Authors",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "blog",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Authors capability within the Blog module.",
      "contractBindings": [
        "content.author"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.blog.related-posts",
      "capabilityId": "blog.related-posts",
      "name": "Related Posts",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "blog",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Related Posts capability within the Blog module.",
      "contractBindings": [
        "content.blogPost"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.blog.scheduling",
      "capabilityId": "blog.scheduling",
      "name": "Scheduled Publishing",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "blog",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Scheduled Publishing capability within the Blog module.",
      "contractBindings": [
        "content.blogPost",
        "core.scheduleWindow"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.blog.approvals",
      "capabilityId": "blog.approvals",
      "name": "Approval Workflow",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "blog",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Approval Workflow capability within the Blog module.",
      "contractBindings": [
        "content.blogPost",
        "core.publishing"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.documentation.collections",
      "capabilityId": "documentation.collections",
      "name": "Collections",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "documentation",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Collections capability within the Documentation module.",
      "contractBindings": [
        "content.documentationCollection"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.documentation.categories",
      "capabilityId": "documentation.categories",
      "name": "Categories",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "documentation",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Categories capability within the Documentation module.",
      "contractBindings": [
        "content.documentationCategory"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.documentation.attachments",
      "capabilityId": "documentation.attachments",
      "name": "Attachments",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "documentation",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Attachments capability within the Documentation module.",
      "contractBindings": [
        "content.documentationArticle",
        "shared.mediaReference"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.documentation.related-articles",
      "capabilityId": "documentation.related-articles",
      "name": "Related Articles",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "documentation",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Related Articles capability within the Documentation module.",
      "contractBindings": [
        "content.documentationArticle"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.documentation.versioning",
      "capabilityId": "documentation.versioning",
      "name": "Article Versioning",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "documentation",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Article Versioning capability within the Documentation module.",
      "contractBindings": [
        "content.documentationArticle",
        "core.versionRecord"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.documentation.visibility",
      "capabilityId": "documentation.visibility",
      "name": "Visibility",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "documentation",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Visibility capability within the Documentation module.",
      "contractBindings": [
        "content.documentationArticle",
        "core.visibility"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.metadata",
      "capabilityId": "seo.metadata",
      "name": "Metadata",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Metadata capability within the SEO module.",
      "contractBindings": [
        "seo.metadata"
      ],
      "permissionBindings": [
        "seo.metadata.edit",
        "seo.metadata.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.keywords",
      "capabilityId": "seo.keywords",
      "name": "Keywords",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Keywords capability within the SEO module.",
      "contractBindings": [
        "seo.keywordSet",
        "seo.keywordTarget"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.social-sharing",
      "capabilityId": "seo.social-sharing",
      "name": "Social Sharing",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Social Sharing capability within the SEO module.",
      "contractBindings": [
        "seo.openGraph",
        "seo.socialCard"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.structured-data",
      "capabilityId": "seo.structured-data",
      "name": "Structured Data",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Structured Data capability within the SEO module.",
      "contractBindings": [
        "seo.structuredData"
      ],
      "permissionBindings": [
        "seo.structureddata.edit",
        "seo.structureddata.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.redirects",
      "capabilityId": "seo.redirects",
      "name": "Redirects",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Redirects capability within the SEO module.",
      "contractBindings": [
        "seo.redirect"
      ],
      "permissionBindings": [
        "seo.redirects.create",
        "seo.redirects.delete",
        "seo.redirects.edit",
        "seo.redirects.manage",
        "seo.redirects.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.sitemap",
      "capabilityId": "seo.sitemap",
      "name": "Sitemap",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Sitemap capability within the SEO module.",
      "contractBindings": [
        "seo.sitemapEntry"
      ],
      "permissionBindings": [
        "seo.sitemap.edit",
        "seo.sitemap.manage",
        "seo.sitemap.view"
      ],
      "eventBindings": [
        "sitemap.updated"
      ],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.robots",
      "capabilityId": "seo.robots",
      "name": "Robots",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Robots capability within the SEO module.",
      "contractBindings": [
        "seo.robotsPolicy",
        "seo.robotsRule"
      ],
      "permissionBindings": [
        "seo.robots.edit",
        "seo.robots.manage",
        "seo.robots.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.audits",
      "capabilityId": "seo.audits",
      "name": "SEO Audits",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "SEO Audits capability within the SEO module.",
      "contractBindings": [
        "seo.auditResult",
        "seo.auditIssue"
      ],
      "permissionBindings": [
        "seo.audits.export",
        "seo.audits.manage",
        "seo.audits.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.search-performance",
      "capabilityId": "seo.search-performance",
      "name": "Search Performance",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Search Performance capability within the SEO module.",
      "contractBindings": [
        "seo.searchPerformance",
        "seo.searchQuery"
      ],
      "permissionBindings": [
        "seo.searchperformance.export",
        "seo.searchperformance.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.seo.indexing",
      "capabilityId": "seo.indexing",
      "name": "Indexing",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "seo",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Indexing capability within the SEO module.",
      "contractBindings": [
        "seo.indexingStatus"
      ],
      "permissionBindings": [
        "seo.indexing.manage",
        "seo.indexing.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.forms.multi-step",
      "capabilityId": "forms.multi-step",
      "name": "Multi-step Forms",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "forms",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Multi-step Forms capability within the Forms module.",
      "contractBindings": [],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.forms.conditional-logic",
      "capabilityId": "forms.conditional-logic",
      "name": "Conditional Logic",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "forms",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Conditional Logic capability within the Forms module.",
      "contractBindings": [
        "forms.condition",
        "forms.conditionGroup"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.forms.file-uploads",
      "capabilityId": "forms.file-uploads",
      "name": "File Uploads",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "forms",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "File Uploads capability within the Forms module.",
      "contractBindings": [
        "forms.uploadPolicy",
        "forms.submissionFile"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.forms.notifications",
      "capabilityId": "forms.notifications",
      "name": "Notifications",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "forms",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Notifications capability within the Forms module.",
      "contractBindings": [
        "forms.notificationRule",
        "forms.notificationRecipient"
      ],
      "permissionBindings": [
        "forms.notifications.edit",
        "forms.notifications.manage",
        "forms.notifications.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.forms.auto-response",
      "capabilityId": "forms.auto-response",
      "name": "Auto Response",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "forms",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Auto Response capability within the Forms module.",
      "contractBindings": [
        "forms.autoResponse"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.forms.spam-protection",
      "capabilityId": "forms.spam-protection",
      "name": "Spam Protection",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "forms",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Spam Protection capability within the Forms module.",
      "contractBindings": [
        "forms.spamPolicy",
        "forms.spamSignal",
        "forms.spamDecision"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.forms.consent-fields",
      "capabilityId": "forms.consent-fields",
      "name": "Consent Fields",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "forms",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Consent Fields capability within the Forms module.",
      "contractBindings": [
        "forms.consentFieldConfig",
        "forms.consentRecord"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.forms.conversion-mapping",
      "capabilityId": "forms.conversion-mapping",
      "name": "Conversion Mapping",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "forms",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Conversion Mapping capability within the Forms module.",
      "contractBindings": [
        "forms.conversionMapping"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.leads.status",
      "capabilityId": "leads.status",
      "name": "Lead Status",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "leads",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Lead Status capability within the Leads module.",
      "contractBindings": [
        "forms.lead"
      ],
      "permissionBindings": [],
      "eventBindings": [
        "lead.status-changed"
      ],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.leads.assignment",
      "capabilityId": "leads.assignment",
      "name": "Assignment",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "leads",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Assignment capability within the Leads module.",
      "contractBindings": [
        "forms.leadAssignment"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.leads.notes",
      "capabilityId": "leads.notes",
      "name": "Notes",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "leads",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Notes capability within the Leads module.",
      "contractBindings": [
        "forms.leadNote"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.leads.activity",
      "capabilityId": "leads.activity",
      "name": "Activity Timeline",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "leads",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Activity Timeline capability within the Leads module.",
      "contractBindings": [
        "forms.leadActivity"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.leads.deduplication",
      "capabilityId": "leads.deduplication",
      "name": "Deduplication",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "leads",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Deduplication capability within the Leads module.",
      "contractBindings": [],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.leads.export",
      "capabilityId": "leads.export",
      "name": "Export",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "leads",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Export capability within the Leads module.",
      "contractBindings": [
        "forms.lead"
      ],
      "permissionBindings": [
        "forms.leads.export"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.consent.preferences",
      "capabilityId": "consent.preferences",
      "name": "Consent Preferences",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "consent",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Consent Preferences capability within the Consent module.",
      "contractBindings": [
        "marketing.consentPreference",
        "marketing.consentState"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.consent.records",
      "capabilityId": "consent.records",
      "name": "Consent Records",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "consent",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Consent Records capability within the Consent module.",
      "contractBindings": [
        "marketing.trackingConsentRecord"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.consent.categories",
      "capabilityId": "consent.categories",
      "name": "Consent Categories",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "consent",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Consent Categories capability within the Consent module.",
      "contractBindings": [
        "marketing.consentCategory"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.consent.integration-gating",
      "capabilityId": "consent.integration-gating",
      "name": "Integration Gating",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "consent",
      "mode": "always-on",
      "selectable": false,
      "defaultEnabled": true,
      "description": "Integration Gating capability within the Consent module.",
      "contractBindings": [
        "marketing.consentPolicy"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.analytics.measurement",
      "capabilityId": "analytics.measurement",
      "name": "Measurement",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "analytics",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Measurement capability within the Analytics module.",
      "contractBindings": [
        "marketing.analyticsConfiguration"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.analytics.reporting",
      "capabilityId": "analytics.reporting",
      "name": "Reporting",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "analytics",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Reporting capability within the Analytics module.",
      "contractBindings": [
        "marketing.analyticsObservation",
        "marketing.analyticsSnapshot"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.analytics.attribution",
      "capabilityId": "analytics.attribution",
      "name": "Attribution",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "analytics",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Attribution capability within the Analytics module.",
      "contractBindings": [
        "marketing.attributionModel",
        "marketing.attributionTouchpoint",
        "marketing.attributionCredit"
      ],
      "permissionBindings": [
        "marketing.attribution.export",
        "marketing.attribution.manage",
        "marketing.attribution.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.analytics.campaign-performance",
      "capabilityId": "analytics.campaign-performance",
      "name": "Campaign Performance",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "analytics",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Campaign Performance capability within the Analytics module.",
      "contractBindings": [],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.marketing.conversions",
      "capabilityId": "marketing.conversions",
      "name": "Conversions",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "marketing",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Conversions capability within the Marketing module.",
      "contractBindings": [
        "marketing.conversionDefinition",
        "marketing.conversionOccurrence",
        "marketing.conversionValue"
      ],
      "permissionBindings": [
        "marketing.conversions.create",
        "marketing.conversions.delete",
        "marketing.conversions.edit",
        "marketing.conversions.manage",
        "marketing.conversions.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.marketing.campaigns",
      "capabilityId": "marketing.campaigns",
      "name": "Campaigns",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "marketing",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Campaigns capability within the Marketing module.",
      "contractBindings": [
        "marketing.campaignDefinition",
        "marketing.campaignContext"
      ],
      "permissionBindings": [
        "marketing.campaigns.create",
        "marketing.campaigns.delete",
        "marketing.campaigns.edit",
        "marketing.campaigns.manage",
        "marketing.campaigns.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.marketing.utm-attribution",
      "capabilityId": "marketing.utm-attribution",
      "name": "UTM Attribution",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "marketing",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "UTM Attribution capability within the Marketing module.",
      "contractBindings": [
        "marketing.utmParameters",
        "marketing.trafficSource"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.marketing.ad-click-identifiers",
      "capabilityId": "marketing.ad-click-identifiers",
      "name": "Ad Click Identifiers",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "marketing",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Ad Click Identifiers capability within the Marketing module.",
      "contractBindings": [
        "marketing.adClickIdentifier"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.marketing.destinations",
      "capabilityId": "marketing.destinations",
      "name": "Marketing Destinations",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "marketing",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Marketing Destinations capability within the Marketing module.",
      "contractBindings": [
        "marketing.marketingDestination",
        "marketing.destinationMapping"
      ],
      "permissionBindings": [
        "marketing.destinations.create",
        "marketing.destinations.delete",
        "marketing.destinations.edit",
        "marketing.destinations.manage",
        "marketing.destinations.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.gtm",
      "capabilityId": "integrations.gtm",
      "name": "Google Tag Manager",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Google Tag Manager capability within the Integrations module.",
      "contractBindings": [
        "integrations.googleTagManager"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.ga4",
      "capabilityId": "integrations.ga4",
      "name": "Google Analytics 4",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Google Analytics 4 capability within the Integrations module.",
      "contractBindings": [
        "integrations.googleAnalytics4"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.google-ads",
      "capabilityId": "integrations.google-ads",
      "name": "Google Ads",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Google Ads capability within the Integrations module.",
      "contractBindings": [
        "integrations.googleAds"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.search-console",
      "capabilityId": "integrations.search-console",
      "name": "Google Search Console",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Google Search Console capability within the Integrations module.",
      "contractBindings": [
        "integrations.googleSearchConsole"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.meta",
      "capabilityId": "integrations.meta",
      "name": "Meta",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Meta capability within the Integrations module.",
      "contractBindings": [
        "integrations.meta"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.clarity",
      "capabilityId": "integrations.clarity",
      "name": "Microsoft Clarity",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Microsoft Clarity capability within the Integrations module.",
      "contractBindings": [
        "integrations.microsoftClarity"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.tiktok",
      "capabilityId": "integrations.tiktok",
      "name": "TikTok",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "TikTok capability within the Integrations module.",
      "contractBindings": [
        "integrations.tiktok"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.linkedin",
      "capabilityId": "integrations.linkedin",
      "name": "LinkedIn",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "LinkedIn capability within the Integrations module.",
      "contractBindings": [
        "integrations.linkedin"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.microsoft-ads",
      "capabilityId": "integrations.microsoft-ads",
      "name": "Microsoft Ads",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Microsoft Ads capability within the Integrations module.",
      "contractBindings": [
        "integrations.microsoftAds"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.email",
      "capabilityId": "integrations.email",
      "name": "Email Provider",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Email Provider capability within the Integrations module.",
      "contractBindings": [
        "integrations.emailProvider"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.crm",
      "capabilityId": "integrations.crm",
      "name": "CRM",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "CRM capability within the Integrations module.",
      "contractBindings": [
        "integrations.crm"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.webhooks",
      "capabilityId": "integrations.webhooks",
      "name": "Webhook Connector",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Webhook Connector capability within the Integrations module.",
      "contractBindings": [
        "integrations.webhook"
      ],
      "permissionBindings": [
        "webhooks.deadletters.manage",
        "webhooks.deadletters.view",
        "webhooks.deliveries.export",
        "webhooks.deliveries.manage",
        "webhooks.deliveries.view",
        "webhooks.endpoints.create",
        "webhooks.endpoints.delete",
        "webhooks.endpoints.edit",
        "webhooks.endpoints.manage",
        "webhooks.endpoints.view",
        "webhooks.secrets.manage",
        "webhooks.subscriptions.create",
        "webhooks.subscriptions.delete",
        "webhooks.subscriptions.edit",
        "webhooks.subscriptions.manage",
        "webhooks.subscriptions.view",
        "webhooks.tests.create",
        "webhooks.tests.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.custom-api",
      "capabilityId": "integrations.custom-api",
      "name": "Custom API",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Custom API capability within the Integrations module.",
      "contractBindings": [
        "integrations.customApi"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.health",
      "capabilityId": "integrations.health",
      "name": "Integration Health",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Integration Health capability within the Integrations module.",
      "contractBindings": [
        "integrations.healthCheck"
      ],
      "permissionBindings": [
        "integrations.health.view"
      ],
      "eventBindings": [
        "integration.health-degraded",
        "integration.health-restored"
      ],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.integrations.sync",
      "capabilityId": "integrations.sync",
      "name": "Synchronization",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "integrations",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Synchronization capability within the Integrations module.",
      "contractBindings": [
        "integrations.syncRun"
      ],
      "permissionBindings": [
        "integrations.sync.manage",
        "integrations.sync.view"
      ],
      "eventBindings": [
        "integration.sync-failed",
        "integration.sync-started",
        "integration.sync-succeeded"
      ],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.catalog",
      "capabilityId": "commerce.catalog",
      "name": "Catalog",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Catalog capability within the Commerce module.",
      "contractBindings": [
        "commerce.product"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.variants",
      "capabilityId": "commerce.variants",
      "name": "Variants",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Variants capability within the Commerce module.",
      "contractBindings": [
        "commerce.productVariant",
        "commerce.productOption"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.attributes",
      "capabilityId": "commerce.attributes",
      "name": "Attributes",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Attributes capability within the Commerce module.",
      "contractBindings": [],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.categories",
      "capabilityId": "commerce.categories",
      "name": "Categories",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Categories capability within the Commerce module.",
      "contractBindings": [
        "commerce.productCategory"
      ],
      "permissionBindings": [
        "commerce.categories.create",
        "commerce.categories.delete",
        "commerce.categories.edit",
        "commerce.categories.manage",
        "commerce.categories.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.collections",
      "capabilityId": "commerce.collections",
      "name": "Collections",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Collections capability within the Commerce module.",
      "contractBindings": [],
      "permissionBindings": [
        "commerce.collections.create",
        "commerce.collections.delete",
        "commerce.collections.edit",
        "commerce.collections.manage",
        "commerce.collections.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.inventory",
      "capabilityId": "commerce.inventory",
      "name": "Inventory",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Inventory capability within the Commerce module.",
      "contractBindings": [
        "commerce.inventoryItem",
        "commerce.inventoryLevel",
        "commerce.inventoryAdjustment",
        "commerce.inventoryReservation"
      ],
      "permissionBindings": [
        "commerce.inventory.edit",
        "commerce.inventory.export",
        "commerce.inventory.manage",
        "commerce.inventory.view"
      ],
      "eventBindings": [
        "inventory.adjusted",
        "inventory.back-in-stock",
        "inventory.committed",
        "inventory.low",
        "inventory.out-of-stock",
        "inventory.released",
        "inventory.reserved",
        "inventory.transferred"
      ],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.multi-location-inventory",
      "capabilityId": "commerce.multi-location-inventory",
      "name": "Multi-location Inventory",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Multi-location Inventory capability within the Commerce module.",
      "contractBindings": [
        "commerce.inventoryLocation",
        "commerce.inventoryTransfer"
      ],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.customers",
      "capabilityId": "commerce.customers",
      "name": "Commerce Customers",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Commerce Customers capability within the Commerce module.",
      "contractBindings": [
        "commerce.customerAddress"
      ],
      "permissionBindings": [
        "commerce.customers.edit",
        "commerce.customers.export",
        "commerce.customers.manage",
        "commerce.customers.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.carts",
      "capabilityId": "commerce.carts",
      "name": "Carts",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Carts capability within the Commerce module.",
      "contractBindings": [
        "commerce.cart",
        "commerce.cartLine"
      ],
      "permissionBindings": [
        "commerce.carts.manage",
        "commerce.carts.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.checkout",
      "capabilityId": "commerce.checkout",
      "name": "Checkout",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Checkout capability within the Commerce module.",
      "contractBindings": [
        "commerce.checkout",
        "commerce.checkoutLine"
      ],
      "permissionBindings": [
        "commerce.checkouts.manage",
        "commerce.checkouts.view"
      ],
      "eventBindings": [
        "checkout.abandoned",
        "checkout.completed",
        "checkout.expired",
        "checkout.started",
        "checkout.updated"
      ],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.orders",
      "capabilityId": "commerce.orders",
      "name": "Orders",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Orders capability within the Commerce module.",
      "contractBindings": [
        "commerce.order"
      ],
      "permissionBindings": [
        "commerce.orders.edit",
        "commerce.orders.export",
        "commerce.orders.manage",
        "commerce.orders.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.payments",
      "capabilityId": "commerce.payments",
      "name": "Payments",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "default-on",
      "selectable": true,
      "defaultEnabled": true,
      "description": "Payments capability within the Commerce module.",
      "contractBindings": [
        "commerce.payment",
        "commerce.paymentAttempt",
        "commerce.paymentAuthorization",
        "commerce.paymentCapture"
      ],
      "permissionBindings": [
        "commerce.payments.export",
        "commerce.payments.manage",
        "commerce.payments.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": false
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.refunds",
      "capabilityId": "commerce.refunds",
      "name": "Refunds",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Refunds capability within the Commerce module.",
      "contractBindings": [
        "commerce.refund"
      ],
      "permissionBindings": [
        "commerce.refunds.create",
        "commerce.refunds.export",
        "commerce.refunds.manage",
        "commerce.refunds.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.shipping",
      "capabilityId": "commerce.shipping",
      "name": "Shipping",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Shipping capability within the Commerce module.",
      "contractBindings": [
        "commerce.shippingZone",
        "commerce.shippingMethod"
      ],
      "permissionBindings": [
        "commerce.shipping.create",
        "commerce.shipping.delete",
        "commerce.shipping.edit",
        "commerce.shipping.manage",
        "commerce.shipping.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.fulfillment",
      "capabilityId": "commerce.fulfillment",
      "name": "Fulfillment",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Fulfillment capability within the Commerce module.",
      "contractBindings": [
        "commerce.fulfillment",
        "commerce.shipment"
      ],
      "permissionBindings": [
        "commerce.fulfillments.create",
        "commerce.fulfillments.edit",
        "commerce.fulfillments.manage",
        "commerce.fulfillments.view"
      ],
      "eventBindings": [
        "fulfillment.cancelled",
        "fulfillment.completed",
        "fulfillment.created",
        "fulfillment.updated"
      ],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.discounts",
      "capabilityId": "commerce.discounts",
      "name": "Discounts",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Discounts capability within the Commerce module.",
      "contractBindings": [
        "commerce.discount"
      ],
      "permissionBindings": [
        "commerce.discounts.create",
        "commerce.discounts.delete",
        "commerce.discounts.edit",
        "commerce.discounts.manage",
        "commerce.discounts.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.promotions",
      "capabilityId": "commerce.promotions",
      "name": "Automatic Promotions",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Automatic Promotions capability within the Commerce module.",
      "contractBindings": [],
      "permissionBindings": [],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.returns",
      "capabilityId": "commerce.returns",
      "name": "Returns",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Returns capability within the Commerce module.",
      "contractBindings": [],
      "permissionBindings": [
        "commerce.returns.edit",
        "commerce.returns.manage",
        "commerce.returns.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.reviews",
      "capabilityId": "commerce.reviews",
      "name": "Reviews",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Reviews capability within the Commerce module.",
      "contractBindings": [
        "commerce.productReview"
      ],
      "permissionBindings": [
        "commerce.reviews.delete",
        "commerce.reviews.edit",
        "commerce.reviews.manage",
        "commerce.reviews.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    },
    {
      "$id": "modules.capability.commerce.taxes",
      "capabilityId": "commerce.taxes",
      "name": "Tax",
      "version": "0.18.0",
      "status": "stable",
      "moduleId": "commerce",
      "mode": "optional",
      "selectable": true,
      "defaultEnabled": false,
      "description": "Tax capability within the Commerce module.",
      "contractBindings": [
        "commerce.taxConfiguration",
        "commerce.taxLine"
      ],
      "permissionBindings": [
        "commerce.taxes.edit",
        "commerce.taxes.manage",
        "commerce.taxes.view"
      ],
      "eventBindings": [],
      "requiresCapabilities": [],
      "requiresModules": [],
      "cms": {
        "customerVisible": true,
        "adminVisible": true
      },
      "manifest": {
        "allowed": true,
        "explicitSelectionRequired": true
      },
      "notes": []
    }
  ],
  "reservedCapabilities": [
    {
      "capabilityId": "commerce.subscriptions",
      "reason": "Requires dedicated recurring billing, entitlement and lifecycle contracts before use."
    },
    {
      "capabilityId": "commerce.bookings",
      "reason": "Requires scheduling, resource availability and reservation contracts before use."
    },
    {
      "capabilityId": "commerce.gift-cards",
      "reason": "Requires stored-value issuance, redemption and liability contracts before use."
    },
    {
      "capabilityId": "commerce.marketplace",
      "reason": "Requires seller, commission, settlement and marketplace governance contracts before use."
    },
    {
      "capabilityId": "commerce.preorders",
      "reason": "Requires preorder authorization, inventory and fulfillment rules before use."
    }
  ],
  "apiGroups": [
    {
      "apiId": "api.public-content",
      "version": "1.0.0"
    },
    {
      "apiId": "api.public-interaction",
      "version": "1.0.0"
    },
    {
      "apiId": "api.customer-cms",
      "version": "1.0.0"
    },
    {
      "apiId": "api.nextf-admin",
      "version": "1.0.0"
    },
    {
      "apiId": "api.commerce",
      "version": "1.0.0"
    },
    {
      "apiId": "api.events",
      "version": "1.0.0"
    },
    {
      "apiId": "api.webhooks",
      "version": "1.0.0"
    }
  ],
  "events": [
    "cart.abandoned",
    "cart.converted",
    "cart.created",
    "cart.expired",
    "cart.updated",
    "checkout.abandoned",
    "checkout.completed",
    "checkout.expired",
    "checkout.started",
    "checkout.updated",
    "collection.created",
    "collection.updated",
    "consent.recorded",
    "consent.updated",
    "content.archived",
    "content.created",
    "content.deleted",
    "content.published",
    "content.restored",
    "content.scheduled",
    "content.unpublished",
    "content.updated",
    "content.version-created",
    "conversion.recorded",
    "customer.archived",
    "customer.created",
    "customer.updated",
    "discount.activated",
    "discount.created",
    "discount.deactivated",
    "discount.updated",
    "form.archived",
    "form.created",
    "form.published",
    "form.rejected",
    "form.submitted",
    "form.updated",
    "fulfillment.cancelled",
    "fulfillment.completed",
    "fulfillment.created",
    "fulfillment.updated",
    "integration.connected",
    "integration.disconnected",
    "integration.health-degraded",
    "integration.health-restored",
    "integration.sync-failed",
    "integration.sync-started",
    "integration.sync-succeeded",
    "inventory.adjusted",
    "inventory.back-in-stock",
    "inventory.committed",
    "inventory.low",
    "inventory.out-of-stock",
    "inventory.released",
    "inventory.reserved",
    "inventory.transferred",
    "lead.assigned",
    "lead.created",
    "lead.merged",
    "lead.status-changed",
    "lead.updated",
    "media.created",
    "media.deleted",
    "media.updated",
    "navigation.updated",
    "order.archived",
    "order.cancelled",
    "order.completed",
    "order.created",
    "order.fulfilled",
    "order.on-hold",
    "order.paid",
    "order.partially-fulfilled",
    "order.partially-paid",
    "order.partially-refunded",
    "order.refunded",
    "order.updated",
    "payment.authorized",
    "payment.captured",
    "payment.created",
    "payment.failed",
    "payment.succeeded",
    "product.archived",
    "product.created",
    "product.published",
    "product.updated",
    "redirect.created",
    "redirect.deleted",
    "redirect.updated",
    "refund.created",
    "refund.failed",
    "refund.succeeded",
    "return.approved",
    "return.cancelled",
    "return.completed",
    "return.received",
    "return.rejected",
    "return.requested",
    "review.approved",
    "review.created",
    "review.published",
    "review.rejected",
    "seo.updated",
    "shipment.created",
    "shipment.delivered",
    "shipment.delivery-failed",
    "shipment.dispatched",
    "site.activated",
    "site.connection-degraded",
    "site.connection-restored",
    "site.created",
    "site.suspended",
    "site.updated",
    "sitemap.updated",
    "variant.created",
    "variant.updated",
    "webhook.delivery-dead-lettered",
    "webhook.endpoint-degraded",
    "webhook.endpoint-disabled",
    "webhook.endpoint-restored",
    "webhook.endpoint-verification-failed",
    "webhook.endpoint-verified",
    "webhook.redelivery-requested",
    "webhook.signing-secret-rotated",
    "webhook.subscription-created",
    "webhook.subscription-disabled",
    "webhook.subscription-paused",
    "webhook.subscription-resumed"
  ],
  "trackingEvents": [
    "page.viewed",
    "cta.clicked",
    "phone.clicked",
    "email.clicked",
    "whatsapp.clicked",
    "document.downloaded",
    "form.started",
    "form.submitted",
    "lead.created",
    "search.performed",
    "video.started",
    "video.completed",
    "newsletter.subscribed"
  ],
  "connectors": [
    "integrations.crm",
    "integrations.customApi",
    "integrations.emailProvider",
    "integrations.googleAds",
    "integrations.googleAnalytics4",
    "integrations.googleSearchConsole",
    "integrations.googleTagManager",
    "integrations.linkedin",
    "integrations.meta",
    "integrations.microsoftAds",
    "integrations.microsoftClarity",
    "integrations.tiktok",
    "integrations.webhook"
  ],
  "compatibilityReleases": [
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
      "changeSummary": "2123 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 2,
        "deprecation": 0,
        "non-breaking": 2113,
        "documentation": 0,
        "metadata": 8,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-2-V0.3.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.3.0&to=1.0.0"
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
      "changeSummary": "2088 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 6,
        "deprecation": 0,
        "non-breaking": 2074,
        "documentation": 0,
        "metadata": 8,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-3-V0.4.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.4.0&to=1.0.0"
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
      "changeSummary": "2069 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 7,
        "deprecation": 0,
        "non-breaking": 2054,
        "documentation": 0,
        "metadata": 8,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-4-V0.5.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.5.0&to=1.0.0"
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
      "changeSummary": "2067 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 26,
        "deprecation": 0,
        "non-breaking": 2033,
        "documentation": 0,
        "metadata": 8,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-5-V0.6.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.6.0&to=1.0.0"
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
      "changeSummary": "2034 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 24,
        "deprecation": 0,
        "non-breaking": 2002,
        "documentation": 0,
        "metadata": 8,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-6-V0.7.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.7.0&to=1.0.0"
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
      "changeSummary": "2012 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 29,
        "deprecation": 0,
        "non-breaking": 1979,
        "documentation": 0,
        "metadata": 4,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-7-V0.8.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.8.0&to=1.0.0"
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
      "changeSummary": "1978 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 32,
        "deprecation": 0,
        "non-breaking": 1943,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-8-V0.9.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.9.0&to=1.0.0"
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
      "changeSummary": "1941 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 40,
        "deprecation": 0,
        "non-breaking": 1898,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-9-V0.10.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.10.0&to=1.0.0"
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
      "changeSummary": "1894 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 42,
        "deprecation": 0,
        "non-breaking": 1849,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-10-V0.11.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.11.0&to=1.0.0"
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
      "changeSummary": "1835 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 56,
        "deprecation": 0,
        "non-breaking": 1776,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-11-V0.12.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.12.0&to=1.0.0"
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
      "changeSummary": "1561 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 59,
        "deprecation": 0,
        "non-breaking": 1499,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-13-V0.14.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.14.0&to=1.0.0"
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
      "changeSummary": "1084 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 3,
        "deprecation": 0,
        "non-breaking": 1078,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-15-V0.16.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.16.0&to=1.0.0"
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
      "changeSummary": "1064 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 2,
        "review-required": 3,
        "deprecation": 0,
        "non-breaking": 1055,
        "documentation": 1,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-16-V0.17.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.17.0&to=1.0.0"
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
      "changeSummary": "1151 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 96,
        "potentially-breaking": 6,
        "review-required": 5,
        "deprecation": 0,
        "non-breaking": 1040,
        "documentation": 1,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-17-V0.18.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.18.0&to=1.0.0"
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
      "changeSummary": "622 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 3,
        "deprecation": 0,
        "non-breaking": 615,
        "documentation": 1,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-19-V0.20.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.20.0&to=1.0.0"
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
      "changeSummary": "459 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 3,
        "deprecation": 0,
        "non-breaking": 452,
        "documentation": 1,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-20-V0.21.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.21.0&to=1.0.0"
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
      "changeSummary": "386 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 3,
        "deprecation": 0,
        "non-breaking": 379,
        "documentation": 1,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-21-V0.22.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.22.0&to=1.0.0"
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
      "changeSummary": "376 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 3,
        "deprecation": 0,
        "non-breaking": 370,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-22-V0.23.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.23.0&to=1.0.0"
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
      "changeSummary": "376 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 3,
        "deprecation": 0,
        "non-breaking": 370,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-23-V0.24.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.24.0&to=1.0.0"
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
      "changeSummary": "375 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 2,
        "deprecation": 0,
        "non-breaking": 370,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "NEXT-F-CONTRACTS-PHASE-24-V0.25.0.zip",
      "diffRoute": "#/lifecycle/diff?from=0.25.0&to=1.0.0"
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
      "changeSummary": "375 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 2,
        "deprecation": 0,
        "non-breaking": 370,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.26.0&to=1.0.0"
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
      "changeSummary": "375 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 2,
        "deprecation": 0,
        "non-breaking": 370,
        "documentation": 0,
        "metadata": 3,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.27.0&to=1.0.0"
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
      "changeSummary": "347 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 9,
        "deprecation": 0,
        "non-breaking": 320,
        "documentation": 0,
        "metadata": 18,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.28.0&to=1.0.0"
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
      "changeSummary": "346 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 13,
        "deprecation": 0,
        "non-breaking": 307,
        "documentation": 0,
        "metadata": 26,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.29.0&to=1.0.0"
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
      "changeSummary": "344 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 19,
        "deprecation": 0,
        "non-breaking": 244,
        "documentation": 0,
        "metadata": 81,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.30.0&to=1.0.0"
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
      "changeSummary": "343 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 93,
        "deprecation": 0,
        "non-breaking": 161,
        "documentation": 0,
        "metadata": 89,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.31.0&to=1.0.0"
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
      "changeSummary": "342 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 100,
        "deprecation": 0,
        "non-breaking": 102,
        "documentation": 0,
        "metadata": 140,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.32.0&to=1.0.0"
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
      "changeSummary": "341 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 108,
        "deprecation": 0,
        "non-breaking": 34,
        "documentation": 0,
        "metadata": 199,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.33.0&to=1.0.0"
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
      "changeSummary": "340 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 109,
        "deprecation": 0,
        "non-breaking": 28,
        "documentation": 0,
        "metadata": 203,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.34.0&to=1.0.0"
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
      "changeSummary": "339 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 110,
        "deprecation": 0,
        "non-breaking": 22,
        "documentation": 0,
        "metadata": 207,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.35.0&to=1.0.0"
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
      "changeSummary": "338 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 111,
        "deprecation": 0,
        "non-breaking": 12,
        "documentation": 0,
        "metadata": 215,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.36.0&to=1.0.0"
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
      "changeSummary": "335 consumer-relevant changed/added/removed definitions",
      "impactCounts": {
        "breaking": 0,
        "potentially-breaking": 0,
        "review-required": 112,
        "deprecation": 0,
        "non-breaking": 6,
        "documentation": 0,
        "metadata": 217,
        "none": 0
      },
      "sourceReference": "registry/registry.json",
      "diffRoute": "#/lifecycle/diff?from=0.37.0&to=1.0.0"
    },
    {
      "version": "1.0.0",
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
  ],
  "deprecations": [],
  "samples": [
    {
      "id": "corporate",
      "label": "Corporate",
      "source": "examples/corporate/nextf.site.json",
      "manifest": {
        "manifestVersion": "1.0.0",
        "contracts": {
          "contractVersion": "0.23.0",
          "manifestSpecVersion": "1.0.0",
          "compatibilityMode": "strict-major"
        },
        "site": {
          "siteId": "site_example_corporate",
          "name": "Example Corporate Website",
          "siteType": "corporate",
          "primaryUrl": "https://corporate.example.com"
        },
        "localization": {
          "defaultLocale": "en-LK",
          "supportedLocales": [
            "en-LK"
          ],
          "timeZone": "Asia/Colombo"
        },
        "environments": [
          {
            "id": "development",
            "kind": "development",
            "baseUrl": "http://localhost:5173",
            "enabled": true
          },
          {
            "id": "preview",
            "kind": "preview",
            "baseUrl": "https://preview.corporate.example.com",
            "enabled": true
          },
          {
            "id": "production",
            "kind": "production",
            "baseUrl": "https://corporate.example.com",
            "enabled": true
          }
        ],
        "contentDelivery": {
          "mode": "hybrid",
          "publishedOnly": true,
          "previewSupported": true
        },
        "modules": [
          {
            "moduleId": "core",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "media",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "pages",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "pages.reusable-content",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "blog",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "blog.scheduling",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "seo",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "seo.redirects",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "forms",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "forms.spam-protection",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "consent",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "consent.preferences",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "analytics",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "analytics.reporting",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "integrations",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "integrations.health",
                "enabled": true
              }
            ]
          }
        ],
        "runtime": {
          "siteIdentity": true,
          "contentConnector": true,
          "eventLayer": true,
          "consentLayer": true,
          "integrationLoader": true
        },
        "cms": {
          "enabled": true,
          "workspaceMode": "site",
          "editingMode": "structured",
          "previewEnabled": true,
          "publishingEnabled": true,
          "revisionHistoryEnabled": true,
          "arbitraryCodeEditing": false
        },
        "apiBindings": [
          {
            "apiId": "api.public-content",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.public-interaction",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.events",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          }
        ],
        "events": {
          "produces": [],
          "consumes": []
        },
        "tracking": {
          "events": [
            "page.viewed",
            "cta.clicked",
            "form.started",
            "form.submitted"
          ]
        },
        "integrations": [
          {
            "connectorId": "integrations.googleTagManager",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleAnalytics4",
            "environments": [
              "production"
            ],
            "enabled": true
          }
        ],
        "configuration": [
          {
            "key": "NEXTF_SITE_ID",
            "exposure": "public",
            "required": true,
            "environments": [
              "development",
              "preview",
              "production"
            ],
            "purpose": "Identifies the Site to the NEXT F runtime without containing a secret value."
          }
        ],
        "extensions": []
      }
    },
    {
      "id": "service",
      "label": "Service",
      "source": "examples/service/nextf.site.json",
      "manifest": {
        "manifestVersion": "1.0.0",
        "contracts": {
          "contractVersion": "0.23.0",
          "manifestSpecVersion": "1.0.0",
          "compatibilityMode": "strict-major"
        },
        "site": {
          "siteId": "site_example_service",
          "name": "Example Service Website",
          "siteType": "service",
          "primaryUrl": "https://service.example.com"
        },
        "localization": {
          "defaultLocale": "en-LK",
          "supportedLocales": [
            "en-LK"
          ],
          "timeZone": "Asia/Colombo"
        },
        "environments": [
          {
            "id": "development",
            "kind": "development",
            "baseUrl": "http://localhost:5173",
            "enabled": true
          },
          {
            "id": "preview",
            "kind": "preview",
            "baseUrl": "https://preview.service.example.com",
            "enabled": true
          },
          {
            "id": "production",
            "kind": "production",
            "baseUrl": "https://service.example.com",
            "enabled": true
          }
        ],
        "contentDelivery": {
          "mode": "hybrid",
          "publishedOnly": true,
          "previewSupported": true
        },
        "modules": [
          {
            "moduleId": "core",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "media",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "pages",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "pages.reusable-content",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "blog",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "blog.scheduling",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "seo",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "seo.redirects",
                "enabled": true
              },
              {
                "capabilityId": "seo.audits",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "forms",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "forms.spam-protection",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "leads",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "leads.assignment",
                "enabled": true
              },
              {
                "capabilityId": "leads.deduplication",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "consent",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "consent.preferences",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "analytics",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "analytics.reporting",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "marketing",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "marketing.conversions",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "integrations",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "integrations.health",
                "enabled": true
              }
            ]
          }
        ],
        "runtime": {
          "siteIdentity": true,
          "contentConnector": true,
          "eventLayer": true,
          "consentLayer": true,
          "integrationLoader": true
        },
        "cms": {
          "enabled": true,
          "workspaceMode": "site",
          "editingMode": "structured",
          "previewEnabled": true,
          "publishingEnabled": true,
          "revisionHistoryEnabled": true,
          "arbitraryCodeEditing": false
        },
        "apiBindings": [
          {
            "apiId": "api.public-content",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.public-interaction",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.events",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          }
        ],
        "events": {
          "produces": [],
          "consumes": []
        },
        "tracking": {
          "events": [
            "page.viewed",
            "cta.clicked",
            "form.started",
            "form.submitted"
          ]
        },
        "integrations": [
          {
            "connectorId": "integrations.googleTagManager",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleAnalytics4",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleSearchConsole",
            "environments": [
              "production"
            ],
            "enabled": true
          }
        ],
        "configuration": [
          {
            "key": "NEXTF_SITE_ID",
            "exposure": "public",
            "required": true,
            "environments": [
              "development",
              "preview",
              "production"
            ],
            "purpose": "Identifies the Site to the NEXT F runtime without containing a secret value."
          }
        ],
        "extensions": []
      }
    },
    {
      "id": "lead-generation",
      "label": "Lead Generation",
      "source": "examples/lead-generation/nextf.site.json",
      "manifest": {
        "manifestVersion": "1.0.0",
        "contracts": {
          "contractVersion": "0.23.0",
          "manifestSpecVersion": "1.0.0",
          "compatibilityMode": "strict-major"
        },
        "site": {
          "siteId": "site_example_leadgen",
          "name": "Example Lead Generation Website",
          "siteType": "lead-generation",
          "primaryUrl": "https://leads.example.com"
        },
        "localization": {
          "defaultLocale": "en-LK",
          "supportedLocales": [
            "en-LK"
          ],
          "timeZone": "Asia/Colombo"
        },
        "environments": [
          {
            "id": "development",
            "kind": "development",
            "baseUrl": "http://localhost:5173",
            "enabled": true
          },
          {
            "id": "preview",
            "kind": "preview",
            "baseUrl": "https://preview.leads.example.com",
            "enabled": true
          },
          {
            "id": "production",
            "kind": "production",
            "baseUrl": "https://leads.example.com",
            "enabled": true
          }
        ],
        "contentDelivery": {
          "mode": "hybrid",
          "publishedOnly": true,
          "previewSupported": true
        },
        "modules": [
          {
            "moduleId": "core",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "media",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "pages",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "pages.reusable-content",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "seo",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "seo.redirects",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "forms",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "forms.multi-step",
                "enabled": true
              },
              {
                "capabilityId": "forms.conditional-logic",
                "enabled": true
              },
              {
                "capabilityId": "forms.spam-protection",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "leads",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "leads.assignment",
                "enabled": true
              },
              {
                "capabilityId": "leads.deduplication",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "consent",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "consent.preferences",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "analytics",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "analytics.reporting",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "marketing",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "marketing.conversions",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "integrations",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "integrations.health",
                "enabled": true
              }
            ]
          }
        ],
        "runtime": {
          "siteIdentity": true,
          "contentConnector": true,
          "eventLayer": true,
          "consentLayer": true,
          "integrationLoader": true
        },
        "cms": {
          "enabled": true,
          "workspaceMode": "site",
          "editingMode": "structured",
          "previewEnabled": true,
          "publishingEnabled": true,
          "revisionHistoryEnabled": true,
          "arbitraryCodeEditing": false
        },
        "apiBindings": [
          {
            "apiId": "api.public-content",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.public-interaction",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.events",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          }
        ],
        "events": {
          "produces": [],
          "consumes": []
        },
        "tracking": {
          "events": [
            "page.viewed",
            "cta.clicked",
            "phone.clicked",
            "email.clicked",
            "whatsapp.clicked",
            "form.started",
            "form.submitted",
            "lead.created"
          ]
        },
        "integrations": [
          {
            "connectorId": "integrations.googleTagManager",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleAnalytics4",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleAds",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.meta",
            "environments": [
              "production"
            ],
            "enabled": true
          }
        ],
        "configuration": [
          {
            "key": "NEXTF_SITE_ID",
            "exposure": "public",
            "required": true,
            "environments": [
              "development",
              "preview",
              "production"
            ],
            "purpose": "Identifies the Site to the NEXT F runtime without containing a secret value."
          }
        ],
        "extensions": []
      }
    },
    {
      "id": "commerce",
      "label": "Commerce",
      "source": "examples/commerce/nextf.site.json",
      "manifest": {
        "manifestVersion": "1.0.0",
        "contracts": {
          "contractVersion": "0.23.0",
          "manifestSpecVersion": "1.0.0",
          "compatibilityMode": "strict-major"
        },
        "site": {
          "siteId": "site_example_commerce",
          "name": "Example Commerce Website",
          "siteType": "commerce",
          "primaryUrl": "https://shop.example.com"
        },
        "localization": {
          "defaultLocale": "en-LK",
          "supportedLocales": [
            "en-LK"
          ],
          "timeZone": "Asia/Colombo"
        },
        "environments": [
          {
            "id": "development",
            "kind": "development",
            "baseUrl": "http://localhost:5173",
            "enabled": true
          },
          {
            "id": "preview",
            "kind": "preview",
            "baseUrl": "https://preview.shop.example.com",
            "enabled": true
          },
          {
            "id": "production",
            "kind": "production",
            "baseUrl": "https://shop.example.com",
            "enabled": true
          }
        ],
        "contentDelivery": {
          "mode": "hybrid",
          "publishedOnly": true,
          "previewSupported": true
        },
        "modules": [
          {
            "moduleId": "core",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "media",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "pages",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "pages.reusable-content",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "blog",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "blog.scheduling",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "seo",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "seo.redirects",
                "enabled": true
              },
              {
                "capabilityId": "seo.structured-data",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "consent",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "consent.preferences",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "analytics",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "analytics.reporting",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "marketing",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "marketing.conversions",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "integrations",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "integrations.health",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "commerce",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "commerce.variants",
                "enabled": true
              },
              {
                "capabilityId": "commerce.inventory",
                "enabled": true
              },
              {
                "capabilityId": "commerce.checkout",
                "enabled": true
              },
              {
                "capabilityId": "commerce.orders",
                "enabled": true
              },
              {
                "capabilityId": "commerce.payments",
                "enabled": true
              },
              {
                "capabilityId": "commerce.shipping",
                "enabled": true
              },
              {
                "capabilityId": "commerce.discounts",
                "enabled": true
              },
              {
                "capabilityId": "commerce.refunds",
                "enabled": true
              },
              {
                "capabilityId": "commerce.returns",
                "enabled": true
              },
              {
                "capabilityId": "commerce.reviews",
                "enabled": true
              },
              {
                "capabilityId": "commerce.taxes",
                "enabled": true
              }
            ]
          }
        ],
        "runtime": {
          "siteIdentity": true,
          "contentConnector": true,
          "eventLayer": true,
          "consentLayer": true,
          "integrationLoader": true
        },
        "cms": {
          "enabled": true,
          "workspaceMode": "site",
          "editingMode": "structured",
          "previewEnabled": true,
          "publishingEnabled": true,
          "revisionHistoryEnabled": true,
          "arbitraryCodeEditing": false
        },
        "apiBindings": [
          {
            "apiId": "api.public-content",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.public-interaction",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.commerce",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.events",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          }
        ],
        "events": {
          "produces": [
            "cart.created",
            "checkout.started",
            "checkout.completed",
            "order.created"
          ],
          "consumes": []
        },
        "tracking": {
          "events": [
            "page.viewed",
            "cta.clicked",
            "form.started",
            "form.submitted"
          ]
        },
        "integrations": [
          {
            "connectorId": "integrations.googleTagManager",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleAnalytics4",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleAds",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.meta",
            "environments": [
              "production"
            ],
            "enabled": true
          }
        ],
        "configuration": [
          {
            "key": "NEXTF_SITE_ID",
            "exposure": "public",
            "required": true,
            "environments": [
              "development",
              "preview",
              "production"
            ],
            "purpose": "Identifies the Site to the NEXT F runtime without containing a secret value."
          }
        ],
        "extensions": []
      }
    },
    {
      "id": "documentation",
      "label": "Documentation",
      "source": "examples/documentation/nextf.site.json",
      "manifest": {
        "manifestVersion": "1.0.0",
        "contracts": {
          "contractVersion": "0.23.0",
          "manifestSpecVersion": "1.0.0",
          "compatibilityMode": "strict-major"
        },
        "site": {
          "siteId": "site_example_docs",
          "name": "Example Documentation Website",
          "siteType": "documentation",
          "primaryUrl": "https://docs.example.com"
        },
        "localization": {
          "defaultLocale": "en-LK",
          "supportedLocales": [
            "en-LK"
          ],
          "timeZone": "Asia/Colombo"
        },
        "environments": [
          {
            "id": "development",
            "kind": "development",
            "baseUrl": "http://localhost:5173",
            "enabled": true
          },
          {
            "id": "preview",
            "kind": "preview",
            "baseUrl": "https://preview.docs.example.com",
            "enabled": true
          },
          {
            "id": "production",
            "kind": "production",
            "baseUrl": "https://docs.example.com",
            "enabled": true
          }
        ],
        "contentDelivery": {
          "mode": "hybrid",
          "publishedOnly": true,
          "previewSupported": true
        },
        "modules": [
          {
            "moduleId": "core",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "media",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "pages",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "pages.reusable-content",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "documentation",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "documentation.versioning",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "seo",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "seo.redirects",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "consent",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "consent.preferences",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "analytics",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "analytics.reporting",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "integrations",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "integrations.health",
                "enabled": true
              }
            ]
          }
        ],
        "runtime": {
          "siteIdentity": true,
          "contentConnector": true,
          "eventLayer": true,
          "consentLayer": true,
          "integrationLoader": true
        },
        "cms": {
          "enabled": true,
          "workspaceMode": "site",
          "editingMode": "structured",
          "previewEnabled": true,
          "publishingEnabled": true,
          "revisionHistoryEnabled": true,
          "arbitraryCodeEditing": false
        },
        "apiBindings": [
          {
            "apiId": "api.public-content",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          },
          {
            "apiId": "api.public-interaction",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          }
        ],
        "events": {
          "produces": [],
          "consumes": []
        },
        "tracking": {
          "events": [
            "page.viewed",
            "search.performed",
            "document.downloaded"
          ]
        },
        "integrations": [
          {
            "connectorId": "integrations.googleAnalytics4",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleSearchConsole",
            "environments": [
              "production"
            ],
            "enabled": true
          }
        ],
        "configuration": [
          {
            "key": "NEXTF_SITE_ID",
            "exposure": "public",
            "required": true,
            "environments": [
              "development",
              "preview",
              "production"
            ],
            "purpose": "Identifies the Site to the NEXT F runtime without containing a secret value."
          }
        ],
        "extensions": []
      }
    },
    {
      "id": "custom",
      "label": "Custom",
      "source": "examples/custom/nextf.site.json",
      "manifest": {
        "manifestVersion": "1.0.0",
        "contracts": {
          "contractVersion": "0.23.0",
          "manifestSpecVersion": "1.0.0",
          "compatibilityMode": "strict-major"
        },
        "site": {
          "siteId": "site_example_custom",
          "name": "Example Custom Website",
          "siteType": "custom",
          "primaryUrl": "https://custom.example.com"
        },
        "localization": {
          "defaultLocale": "en-LK",
          "supportedLocales": [
            "en-LK"
          ],
          "timeZone": "Asia/Colombo"
        },
        "environments": [
          {
            "id": "development",
            "kind": "development",
            "baseUrl": "http://localhost:5173",
            "enabled": true
          },
          {
            "id": "preview",
            "kind": "preview",
            "baseUrl": "https://preview.custom.example.com",
            "enabled": true
          },
          {
            "id": "production",
            "kind": "production",
            "baseUrl": "https://custom.example.com",
            "enabled": true
          }
        ],
        "contentDelivery": {
          "mode": "hybrid",
          "publishedOnly": true,
          "previewSupported": true
        },
        "modules": [
          {
            "moduleId": "core",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "media",
            "enabled": true,
            "capabilities": []
          },
          {
            "moduleId": "pages",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "pages.reusable-content",
                "enabled": true
              },
              {
                "capabilityId": "pages.custom-collections",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "seo",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "seo.redirects",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "forms",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "forms.spam-protection",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "consent",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "consent.preferences",
                "enabled": true
              }
            ]
          },
          {
            "moduleId": "integrations",
            "enabled": true,
            "capabilities": [
              {
                "capabilityId": "integrations.health",
                "enabled": true
              }
            ]
          }
        ],
        "runtime": {
          "siteIdentity": true,
          "contentConnector": true,
          "eventLayer": true,
          "consentLayer": true,
          "integrationLoader": true
        },
        "cms": {
          "enabled": true,
          "workspaceMode": "site",
          "editingMode": "structured",
          "previewEnabled": true,
          "publishingEnabled": true,
          "revisionHistoryEnabled": true,
          "arbitraryCodeEditing": false
        },
        "apiBindings": [
          {
            "apiId": "api.public-content",
            "version": "1.0.0",
            "environments": [
              "development",
              "preview",
              "production"
            ]
          }
        ],
        "events": {
          "produces": [],
          "consumes": []
        },
        "tracking": {
          "events": [
            "page.viewed",
            "cta.clicked",
            "form.started",
            "form.submitted"
          ]
        },
        "integrations": [
          {
            "connectorId": "integrations.googleTagManager",
            "environments": [
              "production"
            ],
            "enabled": true
          },
          {
            "connectorId": "integrations.googleAnalytics4",
            "environments": [
              "production"
            ],
            "enabled": true
          }
        ],
        "configuration": [
          {
            "key": "NEXTF_SITE_ID",
            "exposure": "public",
            "required": true,
            "environments": [
              "development",
              "preview",
              "production"
            ],
            "purpose": "Identifies the Site to the NEXT F runtime without containing a secret value."
          }
        ],
        "extensions": [
          {
            "extensionId": "extension.example.locations-map",
            "version": "1.0.0",
            "source": "contracts/extensions/locations-map.json",
            "reason": "The customer requires a project-specific interactive location dataset not covered by a canonical contract yet.",
            "promotionCandidate": true
          }
        ]
      }
    }
  ],
  "layers": [
    "parse",
    "schema",
    "contract-version",
    "module-existence",
    "module-dependencies",
    "capabilities",
    "api-bindings",
    "events",
    "tracking-events",
    "integrations",
    "environments",
    "configuration-exposure",
    "extensions",
    "compatibility"
  ],
  "privacy": {
    "processing": "local-browser-only",
    "uploads": false,
    "externalDispatch": false,
    "analyticsDispatch": false,
    "mutation": false,
    "autoUpgrade": false
  },
  "sources": {
    "standard": "standards/41-browser-contract-validation-standard.md",
    "manifestSchema": "registry/manifests/nextf-site-manifest.schema.json",
    "modules": "registry/modules/index.json",
    "api": "registry/api/index.json",
    "events": "registry/events/index.json",
    "tracking": "registry/marketing/index.json",
    "integrations": "registry/integrations/index.json",
    "compatibility": "registry/compatibility/release-compatibility.json",
    "deprecations": "registry/deprecations/index.json"
  },
  "sourceHashes": {
    "standards/41-browser-contract-validation-standard.md": "f710c83512a9f7b305e507d8482a2456b92fd12e9380a78b82d87d673af5c611",
    "registry/manifests/nextf-site-manifest.schema.json": "a9961b8d90fec7924a92d9901b5a46053966b0199aa0d7fc3e195a17544e07dd",
    "registry/modules/index.json": "6e64301ae23a1c53cf543d36a54747e3c912177f2edd0cc39b2acf36bcd29ac8",
    "registry/api/index.json": "5d5ef8adc0ff3865dce6550028fa296dbf881afb36d1aa2ff8ac99ea5cd7e25c",
    "registry/events/index.json": "1338e6f14c201f95a9ca13bff41ab261c51dbb55d5fe5a8193a9598197d4a62c",
    "registry/marketing/index.json": "27f88077b8255c2b76176f281d4a7056cc4b8167d6fcc038b286827c4d7e6e0a",
    "registry/integrations/index.json": "169d27c1dda2ffc92ae04e3c5fd9d0b5569dfbcf9c6c42bf11790cab94254ca0",
    "registry/compatibility/release-compatibility.json": "beda80376b07f99e27d77c451209af7573fd7f81b43b893ee7c83b93204e5569",
    "registry/deprecations/index.json": "dd3e2e83ca2107f2bb6fc802ad95c2f4c21d196c85aeeadbe29c13e864e3c8ae"
  }
};
