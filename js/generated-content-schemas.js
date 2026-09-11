// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source: registry/content/index.json
// SHA-256: de3d0e347c7898af508ffd7e98604c27dc4414435d8cf5f16c1f551a6f6a08c5
export const GENERATED_CONTENT_SCHEMAS_SOURCE_SHA256 = "de3d0e347c7898af508ffd7e98604c27dc4414435d8cf5f16c1f551a6f6a08c5";
export const GENERATED_CONTENT_SCHEMAS = {
  "registryVersion": "0.9.0",
  "schemaVersion": "1.0.0",
  "title": "NEXT F Content Contract Registry",
  "description": "Generated index of authoritative Phase 5 Content Contract definitions.",
  "definitionCount": 20,
  "sourceDirectory": "registry/content/definitions",
  "schemas": [
    {
      "$id": "content.author",
      "name": "Author",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "blog",
      "description": "Public editorial author profile referenced by blog and documentation content.",
      "purpose": "Prevents author identity and biography data from being duplicated across individual posts and documentation articles.",
      "contentModel": {
        "kind": "entity",
        "routing": "optional",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "displayName",
          "required": true,
          "nullable": false,
          "description": "Public author name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "sortable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": false,
          "nullable": true,
          "description": "Optional public author archive/profile slug.",
          "primitive": "fields.slug",
          "config": {
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "position",
          "required": false,
          "nullable": true,
          "description": "Optional professional role or title.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "photo",
          "required": false,
          "nullable": true,
          "description": "Optional author photo.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "bio",
          "required": false,
          "nullable": true,
          "description": "Structured author biography.",
          "primitive": "fields.richText",
          "config": {
            "maxLength": 12000,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "contact",
          "required": false,
          "nullable": true,
          "description": "Optional public contact details where explicitly intended.",
          "schema": "shared.contactPoint"
        },
        {
          "key": "website",
          "required": false,
          "nullable": true,
          "description": "Optional author website/profile link.",
          "schema": "shared.link"
        },
        {
          "key": "socialLinks",
          "required": false,
          "nullable": true,
          "description": "Optional ordered list of public social links; each item must validate as shared.link.",
          "primitive": "fields.json",
          "config": {
            "format": "array",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "optionallyComposes",
          "target": "shared.mediaReference",
          "description": "Authors may use a photo."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.contactPoint",
          "description": "Authors may expose approved public contact data."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.link",
          "description": "Author website/social destinations use shared link semantics."
        }
      ],
      "validationRules": [
        {
          "id": "socialLinksValidate",
          "description": "Every socialLinks item must validate against shared.link."
        },
        {
          "id": "contactPublicIntentRequired",
          "description": "Contact fields included in public author data must be explicitly intended for public display."
        },
        {
          "id": "slugUniqueWhenRoutable",
          "description": "When author profile routes are enabled, slug must be unique within the Site."
        }
      ],
      "cms": {
        "label": "Author",
        "icon": "fa-user-pen",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "displayName",
          "position",
          "publishing"
        ],
        "editorMode": "full-page-editor",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published author profiles may be included with public editorial content."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "displayName": "Editorial Team",
            "position": "Content Team"
          }
        ],
        "invalid": [
          {
            "displayName": ""
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.blogCategory",
      "name": "Blog Category",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "blog",
      "description": "Hierarchical classification for Blog Posts.",
      "purpose": "Provides reusable blog taxonomy instead of storing free-form category labels on every post.",
      "contentModel": {
        "kind": "entity",
        "routing": "optional",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Category name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 120,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "sortable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Category slug.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 140,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "description",
          "required": false,
          "nullable": true,
          "description": "Optional category description.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 2000,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "parentCategory",
          "required": false,
          "nullable": true,
          "description": "Optional parent category.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.blogCategory",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "featuredMedia",
          "required": false,
          "nullable": true,
          "description": "Optional category image.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "selfReferences",
          "target": "content.blogCategory",
          "description": "Categories may form a hierarchy through parentCategory."
        }
      ],
      "validationRules": [
        {
          "id": "categorySlugUnique",
          "description": "slug must be unique within the Site blog taxonomy."
        },
        {
          "id": "noCategoryCycles",
          "description": "Parent relationships must not create cycles."
        },
        {
          "id": "cannotParentSelf",
          "description": "A category cannot be its own parent."
        }
      ],
      "cms": {
        "label": "Blog Category",
        "icon": "fa-folder-tree",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "slug",
          "publishing"
        ],
        "editorMode": "compact-editor",
        "primaryActions": [
          "save",
          "publish"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published categories may be used for archive routes and post classification."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "Maintenance",
            "slug": "maintenance"
          }
        ],
        "invalid": [
          {
            "name": "Maintenance",
            "slug": "maintenance",
            "parentCategory": "self"
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.blogPost",
      "name": "Blog Post",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "blog",
      "description": "Full editorial blog entry with rich content, taxonomy, author attribution and publishing state.",
      "purpose": "Provides the production-grade blog authoring contract required by the Customer CMS rather than a simple title-and-text placeholder.",
      "contentModel": {
        "kind": "entity",
        "routing": "required",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "title",
          "required": true,
          "nullable": false,
          "description": "Public post title.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 220,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Post URL slug.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "excerpt",
          "required": false,
          "nullable": true,
          "description": "Short editorial summary used in listings and previews.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 1200,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "content",
          "required": true,
          "nullable": false,
          "description": "Structured main article content supporting safe editorial nodes such as headings, paragraphs, media references, lists, tables, quotes and links.",
          "primitive": "fields.richText",
          "config": {
            "minLength": 1,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "featuredMedia",
          "required": false,
          "nullable": true,
          "description": "Optional featured image/media.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "author",
          "required": false,
          "nullable": true,
          "description": "Primary post author.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.author",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "categories",
          "required": false,
          "nullable": true,
          "description": "Blog categories assigned to the post.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.blogCategory",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "minItems": 0,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "tags",
          "required": false,
          "nullable": true,
          "description": "Blog tags assigned to the post.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.blogTag",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "minItems": 0,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "relatedPosts",
          "required": false,
          "nullable": true,
          "description": "Optional manually selected related posts.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.blogPost",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "minItems": 0,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "isFeatured",
          "required": true,
          "nullable": false,
          "description": "Whether the post may be prioritized in supported editorial listings.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": false,
            "customerEditable": true,
            "adminEditable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "readingTimeMinutes",
          "required": false,
          "nullable": true,
          "description": "Computed approximate reading time for the current revision.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 1,
            "customerEditable": false,
            "adminEditable": false,
            "sortable": true,
            "revisionTracked": false
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "content.author",
          "description": "Posts may reference one Author."
        },
        {
          "type": "references",
          "target": "content.blogCategory",
          "description": "Posts may reference categories."
        },
        {
          "type": "references",
          "target": "content.blogTag",
          "description": "Posts may reference tags."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.mediaReference",
          "description": "Posts may use featured media."
        }
      ],
      "validationRules": [
        {
          "id": "postSlugUnique",
          "description": "Published Blog Post slugs must be unique within the Site and locale."
        },
        {
          "id": "publishedContentRequired",
          "description": "A published Blog Post requires non-empty main content."
        },
        {
          "id": "relatedPostsNotSelf",
          "description": "relatedPosts must not contain the current Blog Post."
        },
        {
          "id": "taxonomySameSite",
          "description": "Authors, categories, tags and related posts must belong to the same Site unless a future explicit cross-site contract permits otherwise."
        },
        {
          "id": "readingTimeComputed",
          "description": "readingTimeMinutes is system-computed from the canonical rich-content revision."
        }
      ],
      "cms": {
        "label": "Blog Post",
        "icon": "fa-newspaper",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "title",
          "author",
          "publishing"
        ],
        "editorMode": "editorial-workspace",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "schedule",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Only published versions and public-safe author/taxonomy/media references may be delivered."
      },
      "futureBindings": {
        "blocks": "phase-6-rich-content-nodes",
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "title": "How Preventive Maintenance Reduces Downtime",
            "slug": "preventive-maintenance",
            "content": {
              "type": "doc",
              "content": []
            },
            "isFeatured": false
          }
        ],
        "invalid": [
          {
            "title": "",
            "slug": "bad slug",
            "content": "<script>alert(1)</script>"
          }
        ]
      },
      "notes": [
        "SEO controls, focus keywords and social metadata are added through the Phase 7 SEO contract rather than duplicated here.",
        "The Customer CMS editor is expected to be a full-page editorial workspace with structured rich-text/media tools."
      ]
    },
    {
      "$id": "content.blogTag",
      "name": "Blog Tag",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "blog",
      "description": "Lightweight reusable tag for Blog Posts.",
      "purpose": "Standardizes editorial tags and avoids uncontrolled duplicate tag strings.",
      "contentModel": {
        "kind": "entity",
        "routing": "optional",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Tag name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 100,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "sortable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Tag slug.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 120,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "description",
          "required": false,
          "nullable": true,
          "description": "Optional tag description.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 1000,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "tagSlugUnique",
          "description": "slug must be unique within the Site blog tags."
        },
        {
          "id": "tagNameNormalized",
          "description": "Equivalent tags should not be duplicated only by casing or whitespace."
        }
      ],
      "cms": {
        "label": "Blog Tag",
        "icon": "fa-tags",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "slug"
        ],
        "editorMode": "compact-editor",
        "primaryActions": [
          "save",
          "publish"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published tags may be exposed as post taxonomy."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "SEO",
            "slug": "seo"
          }
        ],
        "invalid": [
          {
            "name": "",
            "slug": ""
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.customCollection",
      "name": "Custom Collection",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "custom",
      "description": "NEXT F-defined schema configuration for a customer-specific structured content collection.",
      "purpose": "Allows future customer websites to add domain-specific content such as Projects, Properties, Courses, Vehicles or Jobs without creating a new CMS codebase.",
      "contentModel": {
        "kind": "configuration",
        "routing": "none",
        "cardinality": "many",
        "customerManaged": false,
        "supportsPublishing": false,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Collection display name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": false,
            "adminEditable": true,
            "searchable": true
          }
        },
        {
          "key": "key",
          "required": true,
          "nullable": false,
          "description": "Stable machine key unique within the Site.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 100,
            "customerEditable": false,
            "adminEditable": true,
            "searchable": true,
            "filterable": true
          }
        },
        {
          "key": "singularLabel",
          "required": true,
          "nullable": false,
          "description": "Singular CMS label for one entry.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 120,
            "customerEditable": false,
            "adminEditable": true
          }
        },
        {
          "key": "pluralLabel",
          "required": true,
          "nullable": false,
          "description": "Plural CMS label for navigation/list views.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 120,
            "customerEditable": false,
            "adminEditable": true
          }
        },
        {
          "key": "description",
          "required": false,
          "nullable": true,
          "description": "Admin/developer guidance for the collection.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 2000,
            "customerEditable": false,
            "adminEditable": true
          }
        },
        {
          "key": "fieldDefinitions",
          "required": true,
          "nullable": false,
          "description": "Ordered field definition array using registered primitive fields and approved schema references.",
          "primitive": "fields.json",
          "config": {
            "format": "array",
            "customerEditable": false,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "displayField",
          "required": true,
          "nullable": false,
          "description": "Field key used as the primary entry label in CMS lists.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 100,
            "customerEditable": false,
            "adminEditable": true
          }
        },
        {
          "key": "slugField",
          "required": false,
          "nullable": true,
          "description": "Optional field key used to derive public entry routes.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 100,
            "customerEditable": false,
            "adminEditable": true
          }
        },
        {
          "key": "routing",
          "required": true,
          "nullable": false,
          "description": "Whether entries require, may have or never have public routes.",
          "primitive": "fields.select",
          "config": {
            "options": [
              {
                "value": "required",
                "label": "Required"
              },
              {
                "value": "optional",
                "label": "Optional"
              },
              {
                "value": "none",
                "label": "None"
              }
            ],
            "defaultValue": "none",
            "customerEditable": false,
            "adminEditable": true,
            "filterable": true
          }
        },
        {
          "key": "customerCanCreateEntries",
          "required": true,
          "nullable": false,
          "description": "Whether authorized customer users may create entries.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": true,
            "customerEditable": false,
            "adminEditable": true
          }
        },
        {
          "key": "customerCanDeleteEntries",
          "required": true,
          "nullable": false,
          "description": "Whether authorized customer users may delete entries.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": false,
            "customerEditable": false,
            "adminEditable": true
          }
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether the collection is enabled for the Site.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": true,
            "customerEditable": false,
            "adminEditable": true,
            "filterable": true
          }
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "collectionKeyUnique",
          "description": "key must be unique within the Site."
        },
        {
          "id": "fieldKeysUnique",
          "description": "fieldDefinitions must contain unique field keys."
        },
        {
          "id": "registeredFieldsOnly",
          "description": "Every field definition must reference an existing allowed primitive/schema contract."
        },
        {
          "id": "displayFieldExists",
          "description": "displayField must name a field defined in fieldDefinitions."
        },
        {
          "id": "slugFieldExistsWhenSet",
          "description": "slugField must name a compatible field defined in fieldDefinitions."
        },
        {
          "id": "noExecutableDefinitions",
          "description": "Field definitions cannot introduce arbitrary executable code or unsafe HTML."
        },
        {
          "id": "stableKeyAfterData",
          "description": "Changing key or existing field semantics after entries exist requires explicit migration."
        },
        {
          "id": "reservedFieldNamesProtected",
          "description": "Definitions must not shadow reserved identity/scope/publishing system fields."
        }
      ],
      "cms": {
        "label": "Custom Collection",
        "icon": "fa-table-list",
        "customerVisible": false,
        "adminVisible": true,
        "defaultPlacement": "system",
        "summaryFields": [
          "name",
          "key",
          "enabled"
        ],
        "editorMode": "schema-builder",
        "primaryActions": [
          "save",
          "validate",
          "enable",
          "disable"
        ]
      },
      "delivery": {
        "publicAllowed": false,
        "notes": "Custom Collection definitions are platform/CMS configuration and are not public content."
      },
      "futureBindings": {
        "blocks": "phase-6-optional",
        "seo": "phase-7-entry-augmentation",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "Projects",
            "key": "projects",
            "singularLabel": "Project",
            "pluralLabel": "Projects",
            "fieldDefinitions": [
              {
                "key": "title",
                "primitive": "fields.text",
                "required": true
              }
            ],
            "displayField": "title",
            "routing": "optional",
            "customerCanCreateEntries": true,
            "customerCanDeleteEntries": false,
            "enabled": true
          }
        ],
        "invalid": [
          {
            "name": "Projects",
            "key": "projects",
            "fieldDefinitions": [
              {
                "key": "title",
                "primitive": "unknown.field"
              }
            ],
            "displayField": "missing"
          }
        ]
      },
      "notes": [
        "Ordinary customer users manage entries, not the collection schema itself, unless a future permission explicitly permits schema design.",
        "This is the foundation for reusable customer-specific content without building one-off CMS modules."
      ]
    },
    {
      "$id": "content.customCollectionEntry",
      "name": "Custom Collection Entry",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "custom",
      "description": "Customer-managed entry that validates against one Custom Collection definition.",
      "purpose": "Provides the generic storage contract for customer-specific structured content while keeping its schema centrally controlled by NEXT F.",
      "contentModel": {
        "kind": "entity",
        "routing": "optional",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "collection",
          "required": true,
          "nullable": false,
          "description": "Owning Custom Collection definition.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.customCollection",
            "relationshipCardinality": "one",
            "customerEditable": false,
            "adminEditable": false,
            "filterable": true
          }
        },
        {
          "key": "displayLabel",
          "required": true,
          "nullable": false,
          "description": "CMS list label snapshot/derived display value.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 220,
            "customerEditable": false,
            "adminEditable": false,
            "searchable": true,
            "sortable": true
          }
        },
        {
          "key": "slug",
          "required": false,
          "nullable": true,
          "description": "Optional route slug when collection routing permits it.",
          "primitive": "fields.slug",
          "config": {
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "data",
          "required": true,
          "nullable": false,
          "description": "Structured entry data validated against the owning collection fieldDefinitions.",
          "primitive": "fields.json",
          "config": {
            "format": "object",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "belongsTo",
          "target": "content.customCollection",
          "description": "Entry behavior and field validation are defined by the owning Custom Collection."
        }
      ],
      "validationRules": [
        {
          "id": "dataMatchesCollection",
          "description": "data must validate against the current compatible fieldDefinitions for collection."
        },
        {
          "id": "displayLabelDerived",
          "description": "displayLabel is derived from the collection displayField and is not trusted customer input."
        },
        {
          "id": "slugPolicyMatchesCollection",
          "description": "slug presence/uniqueness follows the owning collection routing and slugField policy."
        },
        {
          "id": "sameSite",
          "description": "Entry and collection must belong to the same Site."
        },
        {
          "id": "schemaMigrationRequired",
          "description": "Entries must not be silently reinterpreted after an incompatible collection schema change."
        }
      ],
      "cms": {
        "label": "Custom Collection Entry",
        "icon": "fa-table-cells",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "displayLabel",
          "publishing"
        ],
        "editorMode": "generated-collection-editor",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published entry data may be public only if the owning collection/routing/site permits it and only public fields are selected."
      },
      "futureBindings": {
        "blocks": "phase-6-optional",
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "collection": "collection-id",
            "displayLabel": "Project Alpha",
            "slug": "project-alpha",
            "data": {
              "title": "Project Alpha"
            }
          }
        ],
        "invalid": [
          {
            "collection": null,
            "displayLabel": "",
            "data": "raw html"
          }
        ]
      },
      "notes": [
        "The CMS editor for this entity is generated from content.customCollection.fieldDefinitions."
      ]
    },
    {
      "$id": "content.documentationArticle",
      "name": "Documentation Article",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "documentation",
      "description": "Versioned structured documentation article.",
      "purpose": "Supports searchable manuals, guides, help content and policy documentation with collection/category organization and revision history.",
      "contentModel": {
        "kind": "entity",
        "routing": "required",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "title",
          "required": true,
          "nullable": false,
          "description": "Article title.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 220,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Article slug within its documentation route.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "summary",
          "required": false,
          "nullable": true,
          "description": "Short article summary.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 1200,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "content",
          "required": true,
          "nullable": false,
          "description": "Structured documentation body.",
          "primitive": "fields.richText",
          "config": {
            "minLength": 1,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "collection",
          "required": true,
          "nullable": false,
          "description": "Owning documentation collection.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.documentationCollection",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "category",
          "required": false,
          "nullable": true,
          "description": "Optional documentation category.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.documentationCategory",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "author",
          "required": false,
          "nullable": true,
          "description": "Optional editorial author.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.author",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "versionLabel",
          "required": false,
          "nullable": true,
          "description": "Optional version applicability label.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 80,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "tableOfContents",
          "required": true,
          "nullable": false,
          "description": "Whether supported frontend implementations may render a generated table of contents.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": true,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "relatedArticles",
          "required": false,
          "nullable": true,
          "description": "Optional manually related documentation.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.documentationArticle",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "attachments",
          "required": false,
          "nullable": true,
          "description": "Optional ordered list of shared.mediaReference-compatible download attachments.",
          "primitive": "fields.json",
          "config": {
            "format": "array",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "belongsTo",
          "target": "content.documentationCollection",
          "description": "Article belongs to one collection."
        },
        {
          "type": "optionallyReferences",
          "target": "content.documentationCategory",
          "description": "Article may be categorized."
        },
        {
          "type": "optionallyReferences",
          "target": "content.author",
          "description": "Article may identify an Author."
        }
      ],
      "validationRules": [
        {
          "id": "categoryMatchesCollection",
          "description": "If category is set, it must belong to collection."
        },
        {
          "id": "articleSlugUniqueWithinCollection",
          "description": "slug must be unique within the collection and locale."
        },
        {
          "id": "relatedArticlesNotSelf",
          "description": "relatedArticles cannot include the current article."
        },
        {
          "id": "attachmentsValidate",
          "description": "Each attachment must resolve to an approved Media Asset/reference and must not expose private files through a public article."
        }
      ],
      "cms": {
        "label": "Documentation Article",
        "icon": "fa-book-open",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "title",
          "collection",
          "publishing"
        ],
        "editorMode": "editorial-workspace",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "schedule",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published documentation may be delivered with only visibility-eligible related records and attachments."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "title": "Installation",
            "slug": "installation",
            "collection": "doc-collection-id",
            "content": {
              "type": "doc",
              "content": []
            },
            "tableOfContents": true
          }
        ],
        "invalid": [
          {
            "title": "Installation",
            "slug": "bad slug",
            "collection": null,
            "content": "raw html"
          }
        ]
      },
      "notes": [
        "Table of contents is derived from structured headings; it is not a manually trusted HTML fragment."
      ]
    },
    {
      "$id": "content.documentationCategory",
      "name": "Documentation Category",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "documentation",
      "description": "Hierarchical category within a Documentation Collection.",
      "purpose": "Provides reusable documentation navigation grouping without encoding category strings inside each article.",
      "contentModel": {
        "kind": "entity",
        "routing": "optional",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Category name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "sortable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Category slug.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 150,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "description",
          "required": false,
          "nullable": true,
          "description": "Optional category description.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 1600,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "collection",
          "required": true,
          "nullable": false,
          "description": "Owning documentation collection.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.documentationCollection",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "parentCategory",
          "required": false,
          "nullable": true,
          "description": "Optional parent category inside the same collection.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.documentationCategory",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "order",
          "required": true,
          "nullable": false,
          "description": "Display order within the collection/parent.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 0,
            "customerEditable": true,
            "adminEditable": true,
            "sortable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "belongsTo",
          "target": "content.documentationCollection",
          "description": "Category belongs to one collection."
        },
        {
          "type": "selfReferences",
          "target": "content.documentationCategory",
          "description": "Categories may be nested."
        }
      ],
      "validationRules": [
        {
          "id": "sameCollectionHierarchy",
          "description": "parentCategory must belong to the same collection."
        },
        {
          "id": "noCategoryCycles",
          "description": "Parent relationships must not form cycles."
        },
        {
          "id": "slugUniqueWithinCollection",
          "description": "slug must be unique within its collection."
        }
      ],
      "cms": {
        "label": "Documentation Category",
        "icon": "fa-folder-open",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "collection",
          "order"
        ],
        "editorMode": "compact-editor",
        "primaryActions": [
          "save",
          "publish"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published categories may be used for public documentation navigation."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "Getting Started",
            "slug": "getting-started",
            "collection": "collection-id",
            "order": 0
          }
        ],
        "invalid": [
          {
            "name": "Loop",
            "slug": "loop",
            "parentCategory": "self"
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.documentationCollection",
      "name": "Documentation Collection",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "documentation",
      "description": "Top-level documentation set containing categorized or ordered documentation articles.",
      "purpose": "Allows manuals, guides, policies and knowledge-base documentation to be organized independently from the blog.",
      "contentModel": {
        "kind": "entity",
        "routing": "optional",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Collection name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "sortable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Collection slug.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "description",
          "required": false,
          "nullable": true,
          "description": "Collection summary.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 2500,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "versionLabel",
          "required": false,
          "nullable": true,
          "description": "Optional product/manual version label displayed to readers.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 80,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "featuredMedia",
          "required": false,
          "nullable": true,
          "description": "Optional collection artwork.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "categories",
          "required": false,
          "nullable": true,
          "description": "Categories belonging to this collection.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.documentationCategory",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "articles",
          "required": false,
          "nullable": true,
          "description": "Ordered/managed articles belonging to this collection.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.documentationArticle",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "contains",
          "target": "content.documentationCategory",
          "description": "Collections contain documentation categories."
        },
        {
          "type": "contains",
          "target": "content.documentationArticle",
          "description": "Collections contain documentation articles."
        }
      ],
      "validationRules": [
        {
          "id": "collectionSlugUnique",
          "description": "slug must be unique within documentation collections for the Site."
        },
        {
          "id": "membersSameSite",
          "description": "Referenced categories and articles must belong to the same Site."
        },
        {
          "id": "membershipConsistent",
          "description": "An article included in the collection must reference the same collection."
        }
      ],
      "cms": {
        "label": "Documentation Collection",
        "icon": "fa-book",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "versionLabel",
          "publishing"
        ],
        "editorMode": "full-page-editor",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published collections may drive documentation index/navigation views."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "Product Manual",
            "slug": "product-manual",
            "versionLabel": "v2"
          }
        ],
        "invalid": [
          {
            "name": "",
            "slug": ""
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.faq",
      "name": "FAQ",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "business",
      "description": "Reusable question-and-answer content record.",
      "purpose": "Allows FAQs to be authored once and referenced by pages, services and future structured blocks without duplication.",
      "contentModel": {
        "kind": "entity",
        "routing": "none",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "question",
          "required": true,
          "nullable": false,
          "description": "FAQ question.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 320,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "answer",
          "required": true,
          "nullable": false,
          "description": "Structured FAQ answer.",
          "primitive": "fields.richText",
          "config": {
            "minLength": 1,
            "maxLength": 20000,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "group",
          "required": false,
          "nullable": true,
          "description": "Optional human-readable grouping label.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 120,
            "customerEditable": true,
            "adminEditable": true,
            "filterable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "order",
          "required": false,
          "nullable": true,
          "description": "Optional default ordering hint.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 0,
            "customerEditable": true,
            "adminEditable": true,
            "sortable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "questionNonEmpty",
          "description": "Published FAQ requires a non-empty question."
        },
        {
          "id": "answerNonEmpty",
          "description": "Published FAQ requires a non-empty structured answer."
        }
      ],
      "cms": {
        "label": "FAQ",
        "icon": "fa-circle-question",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "question",
          "group",
          "publishing"
        ],
        "editorMode": "compact-rich-editor",
        "primaryActions": [
          "saveDraft",
          "publish",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published FAQs may be reused across public pages and services."
      },
      "futureBindings": {
        "blocks": null,
        "seo": null,
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "question": "How long does delivery take?",
            "answer": {
              "type": "doc",
              "content": []
            }
          }
        ],
        "invalid": [
          {
            "question": "",
            "answer": null
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.legalPage",
      "name": "Legal Page",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "legal",
      "description": "Structured versioned legal/policy page managed as customer content.",
      "purpose": "Standardizes common legal content lifecycle while preserving that NEXT F is not automatically the author or legal authority for customer policies.",
      "contentModel": {
        "kind": "entity",
        "routing": "required",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "title",
          "required": true,
          "nullable": false,
          "description": "Public legal page title.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 220,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Legal page slug.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "legalType",
          "required": true,
          "nullable": false,
          "description": "Canonical policy category.",
          "primitive": "fields.select",
          "config": {
            "options": [
              {
                "value": "privacy",
                "label": "Privacy Policy"
              },
              {
                "value": "terms",
                "label": "Terms"
              },
              {
                "value": "refund",
                "label": "Refund Policy"
              },
              {
                "value": "return",
                "label": "Return Policy"
              },
              {
                "value": "shipping",
                "label": "Shipping Policy"
              },
              {
                "value": "cancellation",
                "label": "Cancellation Policy"
              },
              {
                "value": "cookie",
                "label": "Cookie Policy"
              },
              {
                "value": "disclaimer",
                "label": "Disclaimer"
              },
              {
                "value": "accessibility",
                "label": "Accessibility Statement"
              },
              {
                "value": "custom",
                "label": "Custom"
              }
            ],
            "customerEditable": true,
            "adminEditable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "content",
          "required": true,
          "nullable": false,
          "description": "Structured legal/policy content.",
          "primitive": "fields.richText",
          "config": {
            "minLength": 1,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "effectiveDate",
          "required": false,
          "nullable": true,
          "description": "Date this policy becomes effective.",
          "primitive": "fields.date",
          "config": {
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "lastReviewedDate",
          "required": false,
          "nullable": true,
          "description": "Date the Organization last reviewed the policy.",
          "primitive": "fields.date",
          "config": {
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "jurisdiction",
          "required": false,
          "nullable": true,
          "description": "Optional human-readable jurisdiction context.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "contact",
          "required": false,
          "nullable": true,
          "description": "Optional policy contact information.",
          "schema": "shared.contactPoint"
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "optionallyComposes",
          "target": "shared.contactPoint",
          "description": "Legal pages may include policy contact information."
        }
      ],
      "validationRules": [
        {
          "id": "legalSlugUnique",
          "description": "slug must be unique within the Site."
        },
        {
          "id": "publishedLegalContentRequired",
          "description": "Published legal pages require non-empty content."
        },
        {
          "id": "reviewNotBeforeEffective",
          "description": "When both dates exist, lastReviewedDate should not precede effectiveDate unless the review explicitly prepared a future effective revision."
        }
      ],
      "cms": {
        "label": "Legal Page",
        "icon": "fa-scale-balanced",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "title",
          "legalType",
          "effectiveDate",
          "publishing"
        ],
        "editorMode": "editorial-workspace",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "schedule",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published legal content may be delivered publicly."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "title": "Privacy Policy",
            "slug": "privacy",
            "legalType": "privacy",
            "content": {
              "type": "doc",
              "content": []
            }
          }
        ],
        "invalid": [
          {
            "title": "Privacy",
            "slug": "privacy",
            "legalType": "privacy",
            "content": ""
          }
        ]
      },
      "notes": [
        "The contract structures legal content; it does not provide legal advice or guarantee legal compliance."
      ]
    },
    {
      "$id": "content.location",
      "name": "Business Location",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "business",
      "description": "Structured public business location and opening information.",
      "purpose": "Provides one canonical content entity for branches/offices without confusing CMS locations with hosting or infrastructure regions.",
      "contentModel": {
        "kind": "entity",
        "routing": "optional",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Public location/branch name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "sortable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": false,
          "nullable": true,
          "description": "Optional public location page slug.",
          "primitive": "fields.slug",
          "config": {
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "address",
          "required": true,
          "nullable": false,
          "description": "Structured postal address.",
          "schema": "shared.address"
        },
        {
          "key": "coordinates",
          "required": false,
          "nullable": true,
          "description": "Optional map coordinates.",
          "primitive": "fields.coordinates",
          "config": {
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "contact",
          "required": false,
          "nullable": true,
          "description": "Optional location-specific contact details.",
          "schema": "shared.contactPoint"
        },
        {
          "key": "businessHours",
          "required": false,
          "nullable": true,
          "description": "Structured weekly opening-hours data using future-normalized day/time entries.",
          "primitive": "fields.json",
          "config": {
            "format": "object",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "directionsUrl",
          "required": false,
          "nullable": true,
          "description": "Optional external maps/directions URL.",
          "primitive": "fields.url",
          "config": {
            "maxLength": 2048,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "featuredMedia",
          "required": false,
          "nullable": true,
          "description": "Optional branch/location media.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "displayOrder",
          "required": false,
          "nullable": true,
          "description": "Default location listing order.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 0,
            "customerEditable": true,
            "adminEditable": true,
            "sortable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "shared.address",
          "description": "Location uses the canonical address structure."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.contactPoint",
          "description": "Location may define branch contact details."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.mediaReference",
          "description": "Location may use featured media."
        }
      ],
      "validationRules": [
        {
          "id": "coordinatesValid",
          "description": "Coordinates must satisfy the primitive latitude/longitude bounds."
        },
        {
          "id": "hoursStructured",
          "description": "businessHours must not be stored as executable markup; normalized hours adapters may evolve later."
        },
        {
          "id": "locationSlugUniqueWhenUsed",
          "description": "When location routes are enabled, slug must be unique within the Site."
        }
      ],
      "cms": {
        "label": "Business Location",
        "icon": "fa-location-dot",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "address",
          "publishing"
        ],
        "editorMode": "full-page-editor",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published business location details may be delivered publicly."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "Kandy Office",
            "coordinates": {
              "latitude": 7.2906,
              "longitude": 80.6337
            }
          }
        ],
        "invalid": [
          {
            "name": "",
            "coordinates": {
              "latitude": 200,
              "longitude": 80
            }
          }
        ]
      },
      "notes": [
        "This Location content type represents a customer business location, not a server, hosting or cloud region."
      ]
    },
    {
      "$id": "content.navigation",
      "name": "Navigation",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "navigation",
      "description": "Named navigation structure such as header, footer or utility navigation.",
      "purpose": "Lets customers control approved navigation labels, destinations and hierarchy without changing navbar/footer source code.",
      "contentModel": {
        "kind": "configuration",
        "routing": "none",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Internal/customer-visible navigation name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 140,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "key",
          "required": true,
          "nullable": false,
          "description": "Stable developer-consumed navigation key.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 100,
            "customerEditable": false,
            "adminEditable": true,
            "searchable": true,
            "filterable": true
          }
        },
        {
          "key": "location",
          "required": true,
          "nullable": false,
          "description": "Intended semantic placement.",
          "primitive": "fields.select",
          "config": {
            "options": [
              {
                "value": "header",
                "label": "Header"
              },
              {
                "value": "footer",
                "label": "Footer"
              },
              {
                "value": "utility",
                "label": "Utility"
              },
              {
                "value": "sidebar",
                "label": "Sidebar"
              },
              {
                "value": "custom",
                "label": "Custom"
              }
            ],
            "customerEditable": false,
            "adminEditable": true,
            "filterable": true
          }
        },
        {
          "key": "items",
          "required": false,
          "nullable": true,
          "description": "Ordered navigation items.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.navigationItem",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "contains",
          "target": "content.navigationItem",
          "description": "Navigation contains ordered Navigation Items."
        }
      ],
      "validationRules": [
        {
          "id": "keyUniqueWithinSite",
          "description": "Navigation key must be unique within the Site."
        },
        {
          "id": "itemsSameSite",
          "description": "All items must belong to the same Site."
        },
        {
          "id": "treeAcyclic",
          "description": "Navigation hierarchy must be acyclic."
        },
        {
          "id": "siblingOrderDeterministic",
          "description": "Sibling item ordering must resolve deterministically."
        }
      ],
      "cms": {
        "label": "Navigation",
        "icon": "fa-bars",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "location",
          "publishing"
        ],
        "editorMode": "navigation-builder",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published navigation structures may be delivered to the coded frontend."
      },
      "futureBindings": {
        "blocks": null,
        "seo": null,
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "Main Navigation",
            "key": "main",
            "location": "header",
            "items": []
          }
        ],
        "invalid": [
          {
            "name": "",
            "key": "main nav",
            "location": "top"
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.navigationItem",
      "name": "Navigation Item",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "navigation",
      "description": "One ordered link entry inside a Navigation container.",
      "purpose": "Standardizes labels, destinations, hierarchy and visibility while leaving navbar/footer presentation to the coded website.",
      "contentModel": {
        "kind": "embedded",
        "routing": "none",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": false,
        "supportsRevision": false
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "label",
          "required": true,
          "nullable": false,
          "description": "Public navigation label.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 120,
            "customerEditable": true,
            "adminEditable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "link",
          "required": true,
          "nullable": false,
          "description": "Canonical destination and link behavior.",
          "schema": "shared.link"
        },
        {
          "key": "parentItem",
          "required": false,
          "nullable": true,
          "description": "Optional parent item for nested navigation.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.navigationItem",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "order",
          "required": true,
          "nullable": false,
          "description": "Order within the same parent/navigation level.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 0,
            "customerEditable": true,
            "adminEditable": true,
            "sortable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "iconKey",
          "required": false,
          "nullable": true,
          "description": "Optional developer-approved icon key; never raw executable icon markup.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 120,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether the item is active.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": true,
            "customerEditable": true,
            "adminEditable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "visibility",
          "required": true,
          "nullable": false,
          "description": "Visibility policy applied to the navigation item.",
          "schema": "core.visibility"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "shared.link",
          "description": "Navigation Items use shared link semantics."
        },
        {
          "type": "selfReferences",
          "target": "content.navigationItem",
          "description": "Items may form a hierarchy."
        }
      ],
      "validationRules": [
        {
          "id": "noNavigationCycles",
          "description": "parentItem relationships must not form cycles."
        },
        {
          "id": "parentSameNavigation",
          "description": "Parent and child must belong to the same Navigation container."
        },
        {
          "id": "enabledLinkValid",
          "description": "Enabled items require a valid safe Link."
        },
        {
          "id": "iconKeyNotMarkup",
          "description": "iconKey must be an approved identifier, not raw HTML/SVG/script content."
        }
      ],
      "cms": {
        "label": "Navigation Item",
        "icon": "fa-link",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "embedded",
        "summaryFields": [
          "label",
          "order",
          "enabled"
        ],
        "editorMode": "navigation-item-editor",
        "primaryActions": [
          "edit",
          "reorder",
          "disable"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Enabled visibility-eligible items may be delivered in public navigation payloads."
      },
      "futureBindings": {
        "blocks": null,
        "seo": null,
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "label": "Services",
            "link": {
              "action": "internal",
              "destination": "/services",
              "newTab": false
            },
            "order": 1,
            "enabled": true
          }
        ],
        "invalid": [
          {
            "label": "Bad",
            "link": {
              "action": "external",
              "destination": "javascript:alert(1)"
            },
            "order": -1,
            "enabled": true
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.page",
      "name": "Page",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "pages",
      "description": "Customer-managed routable website page.",
      "purpose": "Defines editable page identity, routing content and section composition while the coded frontend retains presentation control.",
      "contentModel": {
        "kind": "entity",
        "routing": "required",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "title",
          "required": true,
          "nullable": false,
          "description": "Public page title.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "internalName",
          "required": false,
          "nullable": true,
          "description": "CMS-only label used when a page needs a different internal name.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Site-relative canonical page slug.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "pageKind",
          "required": true,
          "nullable": false,
          "description": "Functional page classification.",
          "primitive": "fields.select",
          "config": {
            "options": [
              {
                "value": "standard",
                "label": "Standard"
              },
              {
                "value": "home",
                "label": "Home"
              },
              {
                "value": "landing",
                "label": "Landing"
              },
              {
                "value": "system",
                "label": "System"
              }
            ],
            "defaultValue": "standard",
            "customerEditable": false,
            "adminEditable": true,
            "filterable": true
          }
        },
        {
          "key": "templateKey",
          "required": false,
          "nullable": true,
          "description": "Developer-defined presentation template key.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 120,
            "customerEditable": false,
            "adminEditable": true,
            "filterable": true
          }
        },
        {
          "key": "summary",
          "required": false,
          "nullable": true,
          "description": "Optional page summary for CMS discovery and approved frontend use.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 1000,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "sections",
          "required": false,
          "nullable": true,
          "description": "Ordered section records used by the coded page renderer.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.pageSection",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "minItems": 0,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "featuredMedia",
          "required": false,
          "nullable": true,
          "description": "Optional featured media reference.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "composes",
          "target": "content.pageSection",
          "description": "Pages compose ordered section envelopes."
        },
        {
          "type": "composes",
          "target": "core.publishing",
          "description": "Pages use canonical publication state."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.mediaReference",
          "description": "Pages may identify featured media."
        }
      ],
      "validationRules": [
        {
          "id": "siteSlugUnique",
          "description": "Published page slugs must be unique within the Site and relevant locale."
        },
        {
          "id": "homePageUnique",
          "description": "Only one active home page may exist per Site and locale."
        },
        {
          "id": "sectionsSameSite",
          "description": "Every referenced section must belong to the same Site."
        },
        {
          "id": "templateKeyDeveloperControlled",
          "description": "templateKey cannot be changed by ordinary customer editors."
        },
        {
          "id": "publishedPageHasTitle",
          "description": "Published pages require a non-empty title."
        }
      ],
      "cms": {
        "label": "Page",
        "icon": "fa-file-lines",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "title",
          "slug",
          "publishing"
        ],
        "editorMode": "full-page-editor",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "schedule",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Only the published, visibility-eligible version and approved public fields may be delivered."
      },
      "futureBindings": {
        "blocks": "phase-6",
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "title": "About Us",
            "slug": "about-us",
            "pageKind": "standard"
          }
        ],
        "invalid": [
          {
            "title": "",
            "slug": "about us"
          }
        ]
      },
      "notes": [
        "SEO metadata is intentionally not embedded until the Phase 7 SEO contract exists.",
        "Page sections store structured data; customer editors do not receive arbitrary HTML/CSS/JavaScript control."
      ]
    },
    {
      "$id": "content.pageSection",
      "name": "Page Section",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "pages",
      "description": "Structured envelope for one ordered page section.",
      "purpose": "Provides a stable page-to-block boundary so page composition can be stored before concrete Block contracts are introduced in Phase 6.",
      "contentModel": {
        "kind": "embedded",
        "routing": "none",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": false,
        "supportsRevision": false
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "sectionKey",
          "required": true,
          "nullable": false,
          "description": "Stable developer-readable key within the parent page.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 120,
            "customerEditable": false,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "blockType",
          "required": true,
          "nullable": false,
          "description": "Canonical Block contract ID to be validated against the Phase 6 Block Registry.",
          "primitive": "fields.text",
          "config": {
            "minLength": 3,
            "maxLength": 160,
            "customerEditable": false,
            "adminEditable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "blockVersion",
          "required": false,
          "nullable": true,
          "description": "Pinned compatible version of the referenced Block contract.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 32,
            "customerEditable": false,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "anchor",
          "required": false,
          "nullable": true,
          "description": "Optional stable in-page anchor.",
          "primitive": "fields.slug",
          "config": {
            "maxLength": 120,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "order",
          "required": true,
          "nullable": false,
          "description": "Zero-based or implementation-normalized display order within the parent page.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 0,
            "customerEditable": true,
            "adminEditable": true,
            "sortable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "enabled",
          "required": true,
          "nullable": false,
          "description": "Whether the section participates in the rendered page.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": true,
            "customerEditable": true,
            "adminEditable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "lockedByNextF",
          "required": true,
          "nullable": false,
          "description": "Whether ordinary customer editors may change the section structure.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": false,
            "customerEditable": false,
            "adminEditable": true,
            "filterable": true
          }
        },
        {
          "key": "content",
          "required": true,
          "nullable": false,
          "description": "Structured Block payload; must validate against blockType once the Block Registry is available.",
          "primitive": "fields.json",
          "config": {
            "format": "object",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        }
      ],
      "relationships": [
        {
          "type": "belongsTo",
          "target": "content.page",
          "description": "Sections are composed by Pages."
        }
      ],
      "validationRules": [
        {
          "id": "blockPayloadStructured",
          "description": "content must be structured data and must never imply arbitrary executable HTML or JavaScript."
        },
        {
          "id": "blockContractRequiredAtRuntime",
          "description": "Once Phase 6 is active, blockType must resolve to a compatible Block contract and content must validate against it."
        },
        {
          "id": "lockedStructureProtected",
          "description": "When lockedByNextF is true, ordinary customer users cannot change blockType or structural configuration."
        },
        {
          "id": "anchorUniqueWithinPage",
          "description": "Non-null anchors must be unique within the parent page."
        }
      ],
      "cms": {
        "label": "Page Section",
        "icon": "fa-table-columns",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "sectionKey",
          "blockType",
          "enabled"
        ],
        "editorMode": "embedded-section-editor",
        "primaryActions": [
          "edit",
          "duplicate",
          "reorder"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Enabled sections may be included only through an eligible published parent Page."
      },
      "futureBindings": {
        "blocks": "phase-6-required",
        "seo": null,
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "sectionKey": "hero",
            "blockType": "blocks.hero",
            "order": 0,
            "enabled": true,
            "lockedByNextF": false,
            "content": {}
          }
        ],
        "invalid": [
          {
            "sectionKey": "hero",
            "blockType": "<script>",
            "order": -1,
            "enabled": true,
            "content": "<script>alert(1)</script>"
          }
        ]
      },
      "notes": [
        "Phase 5 defines the section envelope only. Concrete block field contracts arrive in Phase 6."
      ]
    },
    {
      "$id": "content.reusableContent",
      "name": "Reusable Content",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "reusable",
      "description": "Named structured content value intended for safe reuse across multiple website locations.",
      "purpose": "Allows frequently repeated business content such as a phone number, company description or primary CTA to be updated once and referenced consistently.",
      "contentModel": {
        "kind": "entity",
        "routing": "none",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "key",
          "required": true,
          "nullable": false,
          "description": "Stable machine key unique within the Site.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 120,
            "customerEditable": false,
            "adminEditable": true,
            "searchable": true,
            "filterable": true
          }
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Human-readable CMS label.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "description",
          "required": false,
          "nullable": true,
          "description": "CMS guidance describing intended reuse.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 1000,
            "customerEditable": false,
            "adminEditable": true
          }
        },
        {
          "key": "valueContract",
          "required": false,
          "nullable": true,
          "description": "Canonical primitive/schema/Block contract ID defining the value when one is assigned.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 180,
            "customerEditable": false,
            "adminEditable": true,
            "filterable": true
          }
        },
        {
          "key": "value",
          "required": true,
          "nullable": false,
          "description": "Structured reusable value validated by valueContract where defined.",
          "primitive": "fields.json",
          "config": {
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [],
      "validationRules": [
        {
          "id": "keyUniqueWithinSite",
          "description": "key must be unique within a Site."
        },
        {
          "id": "valueMatchesContract",
          "description": "When valueContract is present, value must validate against that registered contract."
        },
        {
          "id": "noSecrets",
          "description": "Reusable Content must not be used to expose platform secrets or credentials."
        },
        {
          "id": "noExecutablePayloads",
          "description": "Reusable Content must not be used as an arbitrary JavaScript or executable HTML channel."
        }
      ],
      "cms": {
        "label": "Reusable Content",
        "icon": "fa-repeat",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "key",
          "publishing"
        ],
        "editorMode": "structured-value-editor",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published reusable values may be delivered wherever an authorized page/component references them."
      },
      "futureBindings": {
        "blocks": null,
        "seo": null,
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "key": "main-phone",
            "name": "Main phone",
            "valueContract": "fields.phone",
            "value": "+94 77 123 4567"
          }
        ],
        "invalid": [
          {
            "key": "api-secret",
            "name": "Secret",
            "value": "sk_live_secret"
          }
        ]
      },
      "notes": [
        "valueContract is intentionally generic so future registered schemas can be reused without creating one-off storage models."
      ]
    },
    {
      "$id": "content.service",
      "name": "Service",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "business",
      "description": "Structured business service offered by the Organization.",
      "purpose": "Creates one reusable service entity for service listings, dedicated service pages, related FAQs/testimonials and conversion CTAs.",
      "contentModel": {
        "kind": "entity",
        "routing": "required",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Service name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "sortable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": true,
          "nullable": false,
          "description": "Service route slug when a dedicated service page exists.",
          "primitive": "fields.slug",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "shortDescription",
          "required": false,
          "nullable": true,
          "description": "Concise service summary.",
          "primitive": "fields.textarea",
          "config": {
            "maxLength": 1200,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "overview",
          "required": false,
          "nullable": true,
          "description": "Structured long-form service overview.",
          "primitive": "fields.richText",
          "config": {
            "maxLength": 40000,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "featuredMedia",
          "required": false,
          "nullable": true,
          "description": "Optional primary media.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "sections",
          "required": false,
          "nullable": true,
          "description": "Optional structured service-specific sections rendered by supported service templates.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.pageSection",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "faqs",
          "required": false,
          "nullable": true,
          "description": "Reusable FAQs associated with the service.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.faq",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "testimonials",
          "required": false,
          "nullable": true,
          "description": "Reusable testimonials associated with the service.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.testimonial",
            "relationshipCardinality": "many",
            "customerEditable": true,
            "adminEditable": true,
            "uniqueItems": true,
            "revisionTracked": true
          }
        },
        {
          "key": "primaryCta",
          "required": false,
          "nullable": true,
          "description": "Optional primary conversion CTA.",
          "schema": "shared.cta"
        },
        {
          "key": "isFeatured",
          "required": true,
          "nullable": false,
          "description": "Whether supported service listings may prioritize this service.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": false,
            "customerEditable": true,
            "adminEditable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "references",
          "target": "content.faq",
          "description": "Services may reuse FAQ records."
        },
        {
          "type": "references",
          "target": "content.testimonial",
          "description": "Services may reuse Testimonial records."
        },
        {
          "type": "composes",
          "target": "content.pageSection",
          "description": "Service detail presentation may compose Page Section envelopes."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.cta",
          "description": "Services may define a primary CTA."
        }
      ],
      "validationRules": [
        {
          "id": "serviceSlugUnique",
          "description": "Published service slugs must be unique within the Site and locale."
        },
        {
          "id": "relatedRecordsSameSite",
          "description": "Referenced FAQ, Testimonial and Section records must belong to the same Site."
        },
        {
          "id": "testimonialBackReferenceConsistent",
          "description": "When a testimonial declares relatedService, cross-references should remain consistent."
        }
      ],
      "cms": {
        "label": "Service",
        "icon": "fa-briefcase",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "slug",
          "publishing"
        ],
        "editorMode": "full-page-editor",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "schedule",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published service data and approved related content may be delivered publicly."
      },
      "futureBindings": {
        "blocks": "phase-6",
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "Web Development",
            "slug": "web-development",
            "isFeatured": true
          }
        ],
        "invalid": [
          {
            "name": "",
            "slug": "web development"
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.teamMember",
      "name": "Team Member",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "business",
      "description": "Structured public team-member profile.",
      "purpose": "Allows people information to be managed as reusable content while keeping sensitive staff identity/account data separate from public profiles.",
      "contentModel": {
        "kind": "entity",
        "routing": "optional",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "name",
          "required": true,
          "nullable": false,
          "description": "Public display name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "sortable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "slug",
          "required": false,
          "nullable": true,
          "description": "Optional public profile slug.",
          "primitive": "fields.slug",
          "config": {
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "role",
          "required": false,
          "nullable": true,
          "description": "Public role/title.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "photo",
          "required": false,
          "nullable": true,
          "description": "Optional public profile image.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "biography",
          "required": false,
          "nullable": true,
          "description": "Structured public biography.",
          "primitive": "fields.richText",
          "config": {
            "maxLength": 20000,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "contact",
          "required": false,
          "nullable": true,
          "description": "Optional intentionally public contact information.",
          "schema": "shared.contactPoint"
        },
        {
          "key": "socialLinks",
          "required": false,
          "nullable": true,
          "description": "Optional ordered public social-link list validated against shared.link.",
          "primitive": "fields.json",
          "config": {
            "format": "array",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "displayOrder",
          "required": false,
          "nullable": true,
          "description": "Default listing order.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 0,
            "customerEditable": true,
            "adminEditable": true,
            "sortable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "optionallyComposes",
          "target": "shared.mediaReference",
          "description": "Team profiles may use media."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.contactPoint",
          "description": "Team profiles may include public contact information."
        }
      ],
      "validationRules": [
        {
          "id": "socialLinksValidate",
          "description": "Every social link must validate against shared.link."
        },
        {
          "id": "publicContactIntent",
          "description": "Only intentionally public contact details may be delivered."
        },
        {
          "id": "profileSlugUniqueWhenUsed",
          "description": "If public team routes are enabled, slug must be unique within the Site."
        }
      ],
      "cms": {
        "label": "Team Member",
        "icon": "fa-user-group",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "name",
          "role",
          "publishing"
        ],
        "editorMode": "full-page-editor",
        "primaryActions": [
          "saveDraft",
          "preview",
          "publish",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Only explicitly published profile fields are public; Organization User account details are never inferred from this content type."
      },
      "futureBindings": {
        "blocks": null,
        "seo": "seo.metadata",
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "name": "Alex Silva",
            "role": "Engineer",
            "displayOrder": 0
          }
        ],
        "invalid": [
          {
            "name": ""
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "content.testimonial",
      "name": "Testimonial",
      "version": "0.6.0",
      "status": "stable",
      "domain": "content",
      "category": "business",
      "description": "Reusable customer testimonial or review excerpt approved for website publication.",
      "purpose": "Provides structured attribution, rating and service relationships while avoiding duplicated testimonial text across pages.",
      "contentModel": {
        "kind": "entity",
        "routing": "none",
        "cardinality": "many",
        "customerManaged": true,
        "supportsPublishing": true,
        "supportsRevision": true
      },
      "fields": [
        {
          "key": "identity",
          "required": true,
          "nullable": false,
          "description": "Stable entity identity.",
          "schema": "core.entityIdentity"
        },
        {
          "key": "scope",
          "required": true,
          "nullable": false,
          "description": "Owning Organization and Site scope.",
          "schema": "core.tenantScope"
        },
        {
          "key": "quote",
          "required": true,
          "nullable": false,
          "description": "Approved testimonial text.",
          "primitive": "fields.textarea",
          "config": {
            "minLength": 1,
            "maxLength": 4000,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "localizable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "personName",
          "required": true,
          "nullable": false,
          "description": "Public attribution name.",
          "primitive": "fields.text",
          "config": {
            "minLength": 1,
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "position",
          "required": false,
          "nullable": true,
          "description": "Optional public role/title.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 160,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "company",
          "required": false,
          "nullable": true,
          "description": "Optional company name.",
          "primitive": "fields.text",
          "config": {
            "maxLength": 180,
            "customerEditable": true,
            "adminEditable": true,
            "searchable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "photo",
          "required": false,
          "nullable": true,
          "description": "Optional attribution photo/logo.",
          "schema": "shared.mediaReference"
        },
        {
          "key": "rating",
          "required": false,
          "nullable": true,
          "description": "Optional rating on a five-point scale.",
          "primitive": "fields.integer",
          "config": {
            "minimum": 1,
            "maximum": 5,
            "customerEditable": true,
            "adminEditable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "relatedService",
          "required": false,
          "nullable": true,
          "description": "Optional related Service.",
          "primitive": "fields.relation",
          "config": {
            "relationshipTarget": "content.service",
            "relationshipCardinality": "one",
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "sourceUrl",
          "required": false,
          "nullable": true,
          "description": "Optional public source URL for verifiable attribution.",
          "primitive": "fields.url",
          "config": {
            "maxLength": 2048,
            "customerEditable": true,
            "adminEditable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "isFeatured",
          "required": true,
          "nullable": false,
          "description": "Whether supported components may prioritize this testimonial.",
          "primitive": "fields.boolean",
          "config": {
            "defaultValue": false,
            "customerEditable": true,
            "adminEditable": true,
            "filterable": true,
            "revisionTracked": true
          }
        },
        {
          "key": "publishing",
          "required": true,
          "nullable": false,
          "description": "Canonical publishing, visibility and scheduling state.",
          "schema": "core.publishing"
        },
        {
          "key": "revision",
          "required": false,
          "nullable": true,
          "description": "Current and published revision pointers.",
          "schema": "core.revisionPointer"
        }
      ],
      "relationships": [
        {
          "type": "optionallyReferences",
          "target": "content.service",
          "description": "Testimonials may be associated with a Service."
        },
        {
          "type": "optionallyComposes",
          "target": "shared.mediaReference",
          "description": "Testimonials may use attribution media."
        }
      ],
      "validationRules": [
        {
          "id": "ratingRange",
          "description": "rating must be between 1 and 5 when present."
        },
        {
          "id": "publicationApproval",
          "description": "Only testimonials approved for public use may be published; contractual/legal permission remains the Organization responsibility."
        }
      ],
      "cms": {
        "label": "Testimonial",
        "icon": "fa-quote-left",
        "customerVisible": true,
        "adminVisible": true,
        "defaultPlacement": "main",
        "summaryFields": [
          "personName",
          "company",
          "rating",
          "publishing"
        ],
        "editorMode": "compact-editor",
        "primaryActions": [
          "saveDraft",
          "publish",
          "restore"
        ]
      },
      "delivery": {
        "publicAllowed": true,
        "notes": "Published approved testimonial content may be displayed publicly."
      },
      "futureBindings": {
        "blocks": null,
        "seo": null,
        "events": "phase-13",
        "permissions": "phase-15"
      },
      "examples": {
        "valid": [
          {
            "quote": "Excellent service.",
            "personName": "Customer",
            "rating": 5,
            "isFeatured": false
          }
        ],
        "invalid": [
          {
            "quote": "",
            "personName": "",
            "rating": 8
          }
        ]
      },
      "notes": []
    }
  ]
};
