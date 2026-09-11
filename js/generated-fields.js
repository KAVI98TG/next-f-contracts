// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source: registry/fields/index.json
// SHA-256: 40345624b59c2dd9055611a5cfadbc33a007efcea515fdf75c4a6baed8fffc4e
export const GENERATED_FIELDS_SOURCE_SHA256 = "40345624b59c2dd9055611a5cfadbc33a007efcea515fdf75c4a6baed8fffc4e";
export const GENERATED_FIELDS = {
  "registryVersion": "0.9.0",
  "schemaVersion": "1.0.0",
  "title": "NEXT F Primitive Field Registry",
  "description": "Generated index of authoritative primitive field definition files.",
  "definitionCount": 33,
  "sourceDirectory": "registry/fields/definitions",
  "fields": [
    {
      "$id": "fields.address",
      "name": "Address",
      "version": "0.4.0",
      "status": "stable",
      "category": "location",
      "description": "Structured postal/business address value with explicit country code and reusable address parts.",
      "value": {
        "jsonType": "object",
        "canonical": "Structured address object. Country uses ISO 3166-1 alpha-2 code when known.",
        "absence": "Absent values are represented by omission or null only when nullable is true.",
        "shape": {
          "line1": "string",
          "line2": "string optional",
          "city": "string",
          "region": "string optional",
          "postalCode": "string optional",
          "country": "ISO 3166-1 alpha-2 string"
        }
      },
      "cms": {
        "editor": "address",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": false,
        "localizable": true,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "addressShape"
      ],
      "examples": {
        "valid": [
          {
            "line1": "1 Example Road",
            "city": "Kandy",
            "country": "LK"
          }
        ],
        "invalid": [
          "1 Example Road, Kandy"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.audio",
      "name": "Audio",
      "version": "0.4.0",
      "status": "stable",
      "category": "media",
      "description": "Reference to one audio Media Asset.",
      "value": {
        "jsonType": "string",
        "canonical": "Opaque Media Asset ID resolving to an allowed audio MIME type.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "audio-picker",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "allowedMimeTypes",
        "allowedExtensions",
        "maxFileSizeBytes",
        "accept"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "relationExists",
        "mimeType",
        "extension",
        "fileSize"
      ],
      "examples": {
        "valid": [
          "media_01AUDIO"
        ],
        "invalid": [
          "data:audio/mp3;base64,..."
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.boolean",
      "name": "Boolean",
      "version": "0.4.0",
      "status": "stable",
      "category": "numeric",
      "description": "True/false value for explicit binary state.",
      "value": {
        "jsonType": "boolean",
        "canonical": "JSON boolean true or false.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "toggle",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull"
      ],
      "examples": {
        "valid": [
          true,
          false
        ],
        "invalid": [
          0,
          1,
          "true"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.code",
      "name": "Code",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Source/code text stored as inert content for documentation or configuration displays.",
      "value": {
        "jsonType": "string",
        "canonical": "UTF-8 inert code text. Language is metadata, not execution permission.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "code-editor",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minLength",
        "maxLength",
        "language"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minLength",
        "maxLength",
        "codeText"
      ],
      "examples": {
        "valid": [
          "const answer = 42;"
        ],
        "invalid": [
          {
            "code": "x"
          }
        ]
      },
      "notes": [
        "The CMS must never execute this primitive merely because it contains code."
      ]
    },
    {
      "$id": "fields.color",
      "name": "Color",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Canonical presentation color token for controlled brand/content metadata, not arbitrary CSS.",
      "value": {
        "jsonType": "string",
        "canonical": "Lowercase 6-digit hex color such as #0067ff for V1 primitive storage.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "color",
        "inputMode": "text",
        "supportsPlaceholder": true,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": true,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "placeholder"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "colorFormat"
      ],
      "examples": {
        "valid": [
          "#0067ff",
          "#ffffff"
        ],
        "invalid": [
          "blue",
          "rgb(0,0,0)"
        ]
      },
      "notes": [
        "Future tokenized brand systems may wrap this primitive with richer contracts."
      ]
    },
    {
      "$id": "fields.coordinates",
      "name": "Coordinates",
      "version": "0.4.0",
      "status": "stable",
      "category": "location",
      "description": "Latitude and longitude pair using decimal degrees.",
      "value": {
        "jsonType": "object",
        "canonical": "Object with lat and lng decimal degree numbers.",
        "absence": "Absent values are represented by omission or null only when nullable is true.",
        "shape": {
          "lat": "number -90..90",
          "lng": "number -180..180"
        }
      },
      "cms": {
        "editor": "coordinates",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": true,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "coordinateRange"
      ],
      "examples": {
        "valid": [
          {
            "lat": 7.2906,
            "lng": 80.6337
          }
        ],
        "invalid": [
          {
            "lat": 91,
            "lng": 0
          }
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.currency",
      "name": "Currency",
      "version": "0.4.0",
      "status": "stable",
      "category": "numeric",
      "description": "Monetary amount coupled with an explicit ISO 4217 currency code.",
      "value": {
        "jsonType": "object",
        "canonical": "Object containing decimal amount and uppercase ISO 4217 currency code.",
        "absence": "Absent values are represented by omission or null only when nullable is true.",
        "shape": {
          "amount": "number",
          "currency": "3-letter ISO 4217 code"
        }
      },
      "cms": {
        "editor": "currency",
        "inputMode": "decimal",
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minimum",
        "maximum",
        "precision"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minimum",
        "maximum",
        "precision"
      ],
      "examples": {
        "valid": [
          {
            "amount": 18500,
            "currency": "LKR"
          },
          {
            "amount": 49.99,
            "currency": "USD"
          }
        ],
        "invalid": [
          18500,
          {
            "amount": 10
          }
        ]
      },
      "notes": [
        "Currency is never implicit.",
        "Historical transactional values must be snapshotted by commerce contracts."
      ]
    },
    {
      "$id": "fields.date",
      "name": "Date",
      "version": "0.4.0",
      "status": "stable",
      "category": "temporal",
      "description": "Calendar date without time-of-day or timezone.",
      "value": {
        "jsonType": "string",
        "canonical": "ISO 8601 calendar date YYYY-MM-DD.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "date",
        "inputMode": "numeric",
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minimum",
        "maximum"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "dateFormat"
      ],
      "examples": {
        "valid": [
          "2026-09-09"
        ],
        "invalid": [
          "09/09/2026",
          "2026-13-01"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.dateTime",
      "name": "DateTime",
      "version": "0.4.0",
      "status": "stable",
      "category": "temporal",
      "description": "Instant or explicitly zoned date-time for events and system timestamps.",
      "value": {
        "jsonType": "string",
        "canonical": "ISO 8601 date-time with explicit timezone offset or Z when timezoneMode requires an instant.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "date-time",
        "inputMode": "numeric",
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minimum",
        "maximum",
        "timezoneMode"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "dateTimeFormat"
      ],
      "examples": {
        "valid": [
          "2026-09-09T16:30:00Z",
          "2026-09-09T22:00:00+05:30"
        ],
        "invalid": [
          "2026-09-09 22:00"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.decimal",
      "name": "Decimal",
      "version": "0.4.0",
      "status": "stable",
      "category": "numeric",
      "description": "Finite decimal number for measurements and non-monetary numeric values.",
      "value": {
        "jsonType": "number",
        "canonical": "Finite JSON number. Precision limits are explicit configuration.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "decimal",
        "inputMode": "decimal",
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minimum",
        "maximum",
        "step",
        "precision",
        "inputMode"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minimum",
        "maximum",
        "precision",
        "step"
      ],
      "examples": {
        "valid": [
          1.5,
          0,
          -0.25
        ],
        "invalid": [
          "1.5"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.document",
      "name": "Document",
      "version": "0.4.0",
      "status": "stable",
      "category": "media",
      "description": "Reference to a downloadable or viewable document asset such as PDF or office document, constrained by allowlist.",
      "value": {
        "jsonType": "string",
        "canonical": "Opaque Media Asset ID resolving to an allowed document MIME type.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "document-picker",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "allowedMimeTypes",
        "allowedExtensions",
        "maxFileSizeBytes",
        "accept"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "relationExists",
        "mimeType",
        "extension",
        "fileSize"
      ],
      "examples": {
        "valid": [
          "media_01DOC"
        ],
        "invalid": [
          "https://unknown.example/file.pdf"
        ]
      },
      "notes": [
        "Document content indexing is a separate capability and not implied by this primitive."
      ]
    },
    {
      "$id": "fields.email",
      "name": "Email",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Email address value with syntactic validation and optional browser autocomplete hints.",
      "value": {
        "jsonType": "string",
        "canonical": "Trimmed email address string. Validation does not claim mailbox ownership or existence.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "email",
        "inputMode": "email",
        "supportsPlaceholder": true,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "placeholder",
        "minLength",
        "maxLength",
        "pattern",
        "trim",
        "normalizeWhitespace",
        "allowEmptyString",
        "autocomplete",
        "inputMode",
        "caseSensitive"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minLength",
        "maxLength",
        "emailFormat"
      ],
      "examples": {
        "valid": [
          "hello@example.com"
        ],
        "invalid": [
          "hello@",
          "example.com"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.file",
      "name": "File",
      "version": "0.4.0",
      "status": "stable",
      "category": "media",
      "description": "Reference to one generic Media/File Asset with explicit allowed type and size policy.",
      "value": {
        "jsonType": "string",
        "canonical": "Opaque Media/File Asset ID.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "file-picker",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "allowedMimeTypes",
        "allowedExtensions",
        "maxFileSizeBytes",
        "accept"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "relationExists",
        "mimeType",
        "extension",
        "fileSize"
      ],
      "examples": {
        "valid": [
          "media_01FILE"
        ],
        "invalid": [
          "/tmp/file.pdf"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.gallery",
      "name": "Gallery",
      "version": "0.4.0",
      "status": "stable",
      "category": "media",
      "description": "Ordered array of image Media Asset references.",
      "value": {
        "jsonType": "array",
        "canonical": "Ordered array of image Media Asset IDs.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "gallery-picker",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "allowedMimeTypes",
        "allowedExtensions",
        "maxFileSizeBytes",
        "accept",
        "minWidth",
        "maxWidth",
        "minHeight",
        "maxHeight",
        "aspectRatio",
        "minItems",
        "maxItems",
        "uniqueItems"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minItems",
        "maxItems",
        "uniqueItems",
        "relationExists",
        "mimeType",
        "fileSize",
        "imageDimensions"
      ],
      "examples": {
        "valid": [
          [
            "media_01",
            "media_02"
          ]
        ],
        "invalid": [
          "media_01"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.hidden",
      "name": "Hidden",
      "version": "0.4.0",
      "status": "stable",
      "category": "system",
      "description": "Field not rendered as an ordinary Customer CMS control. Visibility never grants write permission.",
      "value": {
        "jsonType": "any-json",
        "canonical": "Value type is declared by the parent schema or referenced primitive; hidden affects CMS presentation only.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "hidden",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width"
      ],
      "validationRules": [
        "required",
        "notNull",
        "hiddenWritePolicy"
      ],
      "examples": {
        "valid": [
          "system-value"
        ],
        "invalid": []
      },
      "notes": [
        "Hidden is not a security control. Server-side authorization still applies."
      ]
    },
    {
      "$id": "fields.image",
      "name": "Image",
      "version": "0.4.0",
      "status": "stable",
      "category": "media",
      "description": "Reference to one image Media Asset with optional image-specific constraints.",
      "value": {
        "jsonType": "string",
        "canonical": "Opaque Media Asset ID whose resolved asset is an allowed image MIME type.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "image-picker",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "allowedMimeTypes",
        "allowedExtensions",
        "maxFileSizeBytes",
        "accept",
        "minWidth",
        "maxWidth",
        "minHeight",
        "maxHeight",
        "aspectRatio"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "relationExists",
        "mimeType",
        "extension",
        "fileSize",
        "imageDimensions"
      ],
      "examples": {
        "valid": [
          "media_01IMAGE"
        ],
        "invalid": [
          "https://example.com/image.jpg"
        ]
      },
      "notes": [
        "ALT text belongs to the consuming image/media usage schema where contextual alternative text can be provided."
      ]
    },
    {
      "$id": "fields.integer",
      "name": "Integer",
      "version": "0.4.0",
      "status": "stable",
      "category": "numeric",
      "description": "Whole-number value with no fractional component.",
      "value": {
        "jsonType": "number",
        "canonical": "Finite JSON number with zero fractional component.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "integer",
        "inputMode": "numeric",
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minimum",
        "maximum",
        "step",
        "precision",
        "inputMode"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "integer",
        "minimum",
        "maximum",
        "step"
      ],
      "examples": {
        "valid": [
          0,
          1,
          -25,
          5000
        ],
        "invalid": [
          1.25,
          "10"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.json",
      "name": "JSON",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Structured JSON value for narrowly controlled advanced schemas where a dedicated typed contract is not yet appropriate.",
      "value": {
        "jsonType": "any-json",
        "canonical": "JSON-compatible value with no functions, undefined, circular references or executable semantics.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "json-editor",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "format"
      ],
      "validationRules": [
        "required",
        "notNull",
        "jsonValid"
      ],
      "examples": {
        "valid": [
          {
            "key": "value"
          },
          [
            "a",
            "b"
          ],
          42
        ],
        "invalid": [
          "{\"broken\":"
        ]
      },
      "notes": [
        "Prefer a dedicated typed schema over generic JSON whenever a reusable structure exists."
      ]
    },
    {
      "$id": "fields.location",
      "name": "Location",
      "version": "0.4.0",
      "status": "stable",
      "category": "location",
      "description": "Structured named location combining label, optional address and optional coordinates without implying geocoding ownership.",
      "value": {
        "jsonType": "object",
        "canonical": "Structured location object.",
        "absence": "Absent values are represented by omission or null only when nullable is true.",
        "shape": {
          "name": "string optional",
          "address": "Address primitive optional",
          "coordinates": "Coordinates primitive optional"
        }
      },
      "cms": {
        "editor": "location",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": false,
        "localizable": true,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "locationShape",
        "coordinateRange"
      ],
      "examples": {
        "valid": [
          {
            "name": "Kandy",
            "coordinates": {
              "lat": 7.2906,
              "lng": 80.6337
            }
          }
        ],
        "invalid": [
          "Kandy"
        ]
      },
      "notes": [
        "At least one meaningful locator must be supplied when required by the parent schema."
      ]
    },
    {
      "$id": "fields.multiSelect",
      "name": "Multi Select",
      "version": "0.4.0",
      "status": "stable",
      "category": "choice",
      "description": "Array of canonical values selected from configured options.",
      "value": {
        "jsonType": "array",
        "canonical": "Array of stable option machine values.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "multi-select",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minItems",
        "maxItems",
        "uniqueItems",
        "options",
        "allowCustomOptions"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "allowedValues",
        "minItems",
        "maxItems",
        "uniqueItems"
      ],
      "examples": {
        "valid": [
          [
            "seo",
            "web-development"
          ]
        ],
        "invalid": [
          "seo",
          [
            "SEO",
            "SEO"
          ]
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.percentage",
      "name": "Percentage",
      "version": "0.4.0",
      "status": "stable",
      "category": "numeric",
      "description": "Percentage value with explicit numeric bounds, normally 0 through 100 unless parent semantics declare otherwise.",
      "value": {
        "jsonType": "number",
        "canonical": "Finite JSON number representing percentage points, not a 0..1 fraction.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "percentage",
        "inputMode": "decimal",
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minimum",
        "maximum",
        "step",
        "precision",
        "inputMode"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minimum",
        "maximum",
        "precision",
        "step",
        "percentageRange"
      ],
      "examples": {
        "valid": [
          0,
          12.5,
          100
        ],
        "invalid": [
          "12%"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.phone",
      "name": "Phone",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Telephone number stored in a normalized international-friendly representation when normalization is possible.",
      "value": {
        "jsonType": "string",
        "canonical": "Phone string, preferably normalized to E.164 by a server-side phone adapter when country context is available.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "phone",
        "inputMode": "tel",
        "supportsPlaceholder": true,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "placeholder",
        "minLength",
        "maxLength",
        "pattern",
        "trim",
        "normalizeWhitespace",
        "allowEmptyString",
        "autocomplete",
        "inputMode",
        "caseSensitive"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minLength",
        "maxLength",
        "phoneFormat"
      ],
      "examples": {
        "valid": [
          "+94771234567"
        ],
        "invalid": [
          771234567
        ]
      },
      "notes": [
        "Do not invent a country when normalization lacks sufficient context."
      ]
    },
    {
      "$id": "fields.readonly",
      "name": "Readonly",
      "version": "0.4.0",
      "status": "stable",
      "category": "system",
      "description": "Field displayed to authorized users but not directly editable, typically derived or system-managed.",
      "value": {
        "jsonType": "any-json",
        "canonical": "Value type is declared by the parent schema or referenced primitive; read-only affects write policy and editor behavior.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "read-only",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "readOnlyReason",
        "computedFrom"
      ],
      "validationRules": [
        "required",
        "notNull",
        "readonly"
      ],
      "examples": {
        "valid": [
          "Derived value",
          123
        ],
        "invalid": []
      },
      "notes": [
        "Read-only values may still change through trusted system processes."
      ]
    },
    {
      "$id": "fields.relation",
      "name": "Relation",
      "version": "0.4.0",
      "status": "stable",
      "category": "relationship",
      "description": "Reference to one or more entities governed by a declared target contract and cardinality.",
      "value": {
        "jsonType": "string-or-array",
        "canonical": "Opaque canonical entity ID for cardinality one, or array of IDs for cardinality many.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "relation-picker",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": true,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "relationshipTarget",
        "relationshipCardinality",
        "minItems",
        "maxItems",
        "uniqueItems"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "relationTarget",
        "relationExists",
        "minItems",
        "maxItems",
        "uniqueItems"
      ],
      "examples": {
        "valid": [
          "prod_01ABC",
          [
            "prod_01ABC",
            "prod_01XYZ"
          ]
        ],
        "invalid": [
          {
            "id": "prod_01ABC"
          }
        ]
      },
      "notes": [
        "Authorization and existence checks are server-side.",
        "A relation never embeds the full target entity as its canonical value."
      ]
    },
    {
      "$id": "fields.richText",
      "name": "Rich Text",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Structured rich editorial content stored as safe document JSON, not arbitrary executable HTML.",
      "value": {
        "jsonType": "object",
        "canonical": "Structured rich-text document object using the NEXT F rich-content envelope.",
        "absence": "Absent values are represented by omission or null only when nullable is true.",
        "shape": {
          "type": "doc",
          "content": "array of safe rich-content nodes"
        }
      },
      "cms": {
        "editor": "rich-text-editor",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": false,
        "sortable": false,
        "localizable": true,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minLength",
        "maxLength",
        "format"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull"
      ],
      "examples": {
        "valid": [
          {
            "type": "doc",
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Hello"
                  }
                ]
              }
            ]
          }
        ],
        "invalid": [
          "<script>alert(1)</script>"
        ]
      },
      "notes": [
        "Raw script execution is never implied.",
        "HTML import/export may be an adapter concern, not the canonical stored value."
      ]
    },
    {
      "$id": "fields.select",
      "name": "Select",
      "version": "0.4.0",
      "status": "stable",
      "category": "choice",
      "description": "Single value selected from configured canonical options.",
      "value": {
        "jsonType": "string",
        "canonical": "Stable option machine value, never the display label.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "select",
        "inputMode": null,
        "supportsPlaceholder": true,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "placeholder",
        "options",
        "allowCustomOptions"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "allowedValues"
      ],
      "examples": {
        "valid": [
          "draft"
        ],
        "invalid": [
          "Draft"
        ]
      },
      "notes": [
        "Option labels may be localized. Option machine values remain stable."
      ]
    },
    {
      "$id": "fields.slug",
      "name": "Slug",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Stable URL path segment generated or edited under a lowercase URL-safe policy.",
      "value": {
        "jsonType": "string",
        "canonical": "Lowercase ASCII slug using letters, digits and single hyphen separators.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "slug",
        "inputMode": "text",
        "supportsPlaceholder": true,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": true,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "placeholder",
        "minLength",
        "maxLength",
        "pattern",
        "trim",
        "normalizeWhitespace",
        "allowEmptyString",
        "autocomplete",
        "inputMode",
        "caseSensitive"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minLength",
        "maxLength",
        "slugFormat"
      ],
      "examples": {
        "valid": [
          "web-development",
          "about-us"
        ],
        "invalid": [
          "About Us",
          "web--development",
          "/about"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.tag",
      "name": "Tag",
      "version": "0.4.0",
      "status": "stable",
      "category": "choice",
      "description": "Array of lightweight taxonomy/tag values, optionally allowing controlled custom additions.",
      "value": {
        "jsonType": "array",
        "canonical": "Array of normalized tag strings or configured tag machine values.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "tag-input",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": false,
        "localizable": true,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minItems",
        "maxItems",
        "uniqueItems",
        "options",
        "allowCustomOptions",
        "caseSensitive"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minItems",
        "maxItems",
        "uniqueItems"
      ],
      "examples": {
        "valid": [
          [
            "SEO",
            "Technical"
          ]
        ],
        "invalid": [
          "SEO"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.text",
      "name": "Text",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Single-line human-readable text.",
      "value": {
        "jsonType": "string",
        "canonical": "UTF-8 string. No implicit HTML interpretation.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "single-line-text",
        "inputMode": "text",
        "supportsPlaceholder": true,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": true,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "placeholder",
        "minLength",
        "maxLength",
        "pattern",
        "trim",
        "normalizeWhitespace",
        "allowEmptyString",
        "autocomplete",
        "inputMode",
        "caseSensitive"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minLength",
        "maxLength",
        "pattern"
      ],
      "examples": {
        "valid": [
          "NEXT F",
          "Preventive maintenance"
        ],
        "invalid": [
          123,
          {
            "text": "value"
          }
        ]
      },
      "notes": [
        "Whitespace normalization occurs only when explicitly configured.",
        "Empty string and null are distinct values."
      ]
    },
    {
      "$id": "fields.textarea",
      "name": "Textarea",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Multi-line plain text without rich formatting semantics.",
      "value": {
        "jsonType": "string",
        "canonical": "UTF-8 plain text preserving line breaks.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "multi-line-text",
        "inputMode": "text",
        "supportsPlaceholder": true,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": false,
        "localizable": true,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "placeholder",
        "minLength",
        "maxLength",
        "pattern",
        "trim",
        "normalizeWhitespace",
        "allowEmptyString",
        "autocomplete",
        "inputMode",
        "caseSensitive"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minLength",
        "maxLength",
        "pattern"
      ],
      "examples": {
        "valid": [
          "Line one\nLine two"
        ],
        "invalid": [
          42,
          [
            "line"
          ]
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.time",
      "name": "Time",
      "version": "0.4.0",
      "status": "stable",
      "category": "temporal",
      "description": "Time-of-day without an implicit calendar date or timezone.",
      "value": {
        "jsonType": "string",
        "canonical": "ISO local time HH:MM[:SS[.sss]].",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "time",
        "inputMode": "numeric",
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "minimum",
        "maximum"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "timeFormat"
      ],
      "examples": {
        "valid": [
          "09:30",
          "21:45:30"
        ],
        "invalid": [
          "9:30 PM"
        ]
      },
      "notes": []
    },
    {
      "$id": "fields.url",
      "name": "URL",
      "version": "0.4.0",
      "status": "stable",
      "category": "text",
      "description": "Web or application URL with explicit allowed-scheme validation.",
      "value": {
        "jsonType": "string",
        "canonical": "URL string. Parent contracts define allowed schemes and whether relative URLs are permitted.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "url",
        "inputMode": "url",
        "supportsPlaceholder": true,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": true,
        "filterable": true,
        "sortable": true,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "placeholder",
        "minLength",
        "maxLength",
        "pattern",
        "trim",
        "normalizeWhitespace",
        "allowEmptyString",
        "autocomplete",
        "inputMode",
        "caseSensitive"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "minLength",
        "maxLength",
        "urlFormat"
      ],
      "examples": {
        "valid": [
          "https://example.com/path"
        ],
        "invalid": [
          "javascript:alert(1)"
        ]
      },
      "notes": [
        "Dangerous executable schemes are not valid public navigation destinations."
      ]
    },
    {
      "$id": "fields.video",
      "name": "Video",
      "version": "0.4.0",
      "status": "stable",
      "category": "media",
      "description": "Reference to one video Media Asset or approved media provider reference through a future wrapper contract.",
      "value": {
        "jsonType": "string",
        "canonical": "Opaque Media Asset ID resolving to an allowed video MIME type.",
        "absence": "Absent values are represented by omission or null only when nullable is true."
      },
      "cms": {
        "editor": "video-picker",
        "inputMode": null,
        "supportsPlaceholder": false,
        "supportsHelpText": true,
        "supportsWidth": true
      },
      "capabilities": {
        "searchable": false,
        "filterable": false,
        "sortable": false,
        "localizable": false,
        "revisionTracked": true
      },
      "supportedConfig": [
        "key",
        "label",
        "description",
        "helpText",
        "required",
        "nullable",
        "defaultValue",
        "customerEditable",
        "adminEditable",
        "searchable",
        "filterable",
        "sortable",
        "localizable",
        "revisionTracked",
        "conditionalVisibility",
        "width",
        "allowedMimeTypes",
        "allowedExtensions",
        "maxFileSizeBytes",
        "accept"
      ],
      "validationRules": [
        "required",
        "type",
        "notNull",
        "relationExists",
        "mimeType",
        "extension",
        "fileSize"
      ],
      "examples": {
        "valid": [
          "media_01VIDEO"
        ],
        "invalid": [
          "<iframe>...</iframe>"
        ]
      },
      "notes": [
        "Arbitrary embed HTML is not a primitive video value."
      ]
    }
  ]
};
