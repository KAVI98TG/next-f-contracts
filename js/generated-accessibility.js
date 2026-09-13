// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/accessibility/*
export const GENERATED_ACCESSIBILITY = {
  "registryVersion": "1.1.0",
  "index": {
    "registryVersion": "1.1.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Accessibility Control Registry",
    "description": "Machine-readable accessibility standards for customer websites, Customer CMS, NEXT F Admin and the Contract Portal.",
    "controlCount": 44,
    "manualReviewCount": 44,
    "categories": [
      {
        "id": "structure",
        "label": "Structure & Semantics",
        "description": "Semantic HTML, headings and landmarks.",
        "controlCount": 6
      },
      {
        "id": "forms",
        "label": "Forms & Validation",
        "description": "Labels, instructions, help and error association.",
        "controlCount": 4
      },
      {
        "id": "keyboard",
        "label": "Keyboard & Focus",
        "description": "Keyboard operation, visible focus and focus management.",
        "controlCount": 3
      },
      {
        "id": "components",
        "label": "Interactive Components",
        "description": "Dialogs, drawers, menus, tables and complex controls.",
        "controlCount": 7
      },
      {
        "id": "authoring",
        "label": "Authoring & Editors",
        "description": "Accessible editing, rich text and content-authoring metadata.",
        "controlCount": 3
      },
      {
        "id": "media",
        "label": "Images & Media",
        "description": "Alternative text, captions and transcripts.",
        "controlCount": 3
      },
      {
        "id": "visual",
        "label": "Visual Presentation",
        "description": "Contrast, reflow, touch targets and non-color-only meaning.",
        "controlCount": 5
      },
      {
        "id": "motion",
        "label": "Motion",
        "description": "Reduced-motion and animation behavior.",
        "controlCount": 1
      },
      {
        "id": "status",
        "label": "Status & Feedback",
        "description": "Live regions, loading, errors and status messages.",
        "controlCount": 3
      },
      {
        "id": "navigation",
        "label": "Navigation & Discovery",
        "description": "Navigation, skip links, filters and command palette.",
        "controlCount": 4
      },
      {
        "id": "data-viz",
        "label": "Data Visualization",
        "description": "Charts and visual data alternatives.",
        "controlCount": 1
      },
      {
        "id": "commerce",
        "label": "Commerce",
        "description": "Accessible checkout and transaction flows.",
        "controlCount": 1
      },
      {
        "id": "authentication",
        "label": "Authentication",
        "description": "Accessible sign-in and authentication flows.",
        "controlCount": 1
      },
      {
        "id": "management",
        "label": "Management Interfaces",
        "description": "Customer CMS, Admin and operational interfaces.",
        "controlCount": 2
      }
    ],
    "controls": [
      {
        "controlId": "ACC-ADMIN-001",
        "name": "NEXT F Admin accessibility",
        "category": "management",
        "requirement": "NEXT F Admin tables, context selectors, diagnostics, dialogs and privileged actions must satisfy applicable accessibility controls and must not communicate risk/status by color alone.",
        "rationale": "Internal administration must remain operable and understandable for keyboard and assistive-technology users.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "admin",
          "table",
          "dialog",
          "form"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "screen-reader-manual",
          "zoom-reflow"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [
          "adminUi.adminProfile",
          "adminUi.riskPresentation"
        ],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_admin_001.json"
      },
      {
        "controlId": "ACC-ARIA-001",
        "name": "Use ARIA with restraint",
        "category": "structure",
        "requirement": "ARIA must supplement native semantics only when necessary and must not contradict native roles, states or properties.",
        "rationale": "Incorrect ARIA can make otherwise accessible native controls unusable.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "dialog",
          "drawer",
          "menu",
          "table"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_aria_001.json"
      },
      {
        "controlId": "ACC-AUTH-001",
        "name": "Accessible authentication flows",
        "category": "authentication",
        "requirement": "Sign-in, verification, recovery and recent-authentication flows must expose labels, instructions, errors, status and keyboard operation without inaccessible challenge assumptions.",
        "rationale": "Authentication accessibility failures can completely block account access.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "authentication",
          "form"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "screen-reader-manual",
          "integration-test"
        ],
        "severity": "critical",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_auth_001.json"
      },
      {
        "controlId": "ACC-AUTHOR-001",
        "name": "Author accessibility metadata",
        "category": "authoring",
        "requirement": "Schema/UI metadata should expose accessibility-relevant authoring requirements such as alt text, accessible labels, help/error association, caption/transcript references and heading constraints where applicable.",
        "rationale": "Schema-driven editors need machine-readable cues to present accessible authoring requirements consistently.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "rich-text-editor",
          "image",
          "audio-video",
          "form"
        ],
        "verificationMethods": [
          "automated-static",
          "content-review"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.fieldBinding",
          "cmsUi.helpContent",
          "cmsUi.validationPresentation"
        ],
        "relatedBlocks": [
          "blocks.heading",
          "blocks.gallery",
          "blocks.video",
          "blocks.form"
        ],
        "relatedFields": [
          "fields.image",
          "fields.video",
          "fields.audio",
          "fields.richText"
        ],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_author_001.json"
      },
      {
        "controlId": "ACC-CHART-001",
        "name": "Provide data alternatives for charts",
        "category": "data-viz",
        "requirement": "Charts and visual data representations must provide an accessible textual/table alternative or equivalent programmatic data representation.",
        "rationale": "Visual position and color cannot be the only path to underlying data.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "chart"
        ],
        "verificationMethods": [
          "content-review",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_chart_001.json"
      },
      {
        "controlId": "ACC-CHECKOUT-001",
        "name": "Accessible checkout flow",
        "category": "commerce",
        "requirement": "Checkout must preserve labels, validation, error recovery, keyboard operation, progress/status context and review/confirmation access without pointer-only interaction.",
        "rationale": "Checkout is a critical transaction flow where accessibility failures can block purchase completion.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "checkout",
          "form"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "screen-reader-manual",
          "integration-test"
        ],
        "severity": "critical",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [
          "commerce.checkout",
          "commerce.order"
        ],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_checkout_001.json"
      },
      {
        "controlId": "ACC-CMS-001",
        "name": "Customer CMS accessibility",
        "category": "management",
        "requirement": "Customer CMS resource lists, editors, actions, dialogs and validation must satisfy the applicable accessibility controls and preserve keyboard alternatives for authoring workflows.",
        "rationale": "Customers must be able to manage content without accessibility regressions in the management interface.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "customer-cms",
          "form",
          "table",
          "dialog",
          "rich-text-editor"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "screen-reader-manual",
          "zoom-reflow"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.resourceProfile",
          "cmsUi.editorDefinition",
          "cmsUi.action",
          "cmsUi.validationPresentation"
        ],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_cms_001.json"
      },
      {
        "controlId": "ACC-CODE-001",
        "name": "Accessible code and raw-data views",
        "category": "components",
        "requirement": "Code/raw-data viewers must preserve selectable text, readable overflow behavior and keyboard-accessible copy actions without requiring syntax color to understand content.",
        "rationale": "Technical source views are primary content in the Contract Portal.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "code-viewer"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "zoom-reflow",
          "visual-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_code_001.json"
      },
      {
        "controlId": "ACC-COLOR-001",
        "name": "Do not rely on color alone",
        "category": "visual",
        "requirement": "Status, validation, risk and selection states must communicate meaning with text, iconography, shape or semantics in addition to color.",
        "rationale": "Color alone excludes users with color-vision differences and can disappear in forced/high-contrast modes.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "status-message",
          "form",
          "table",
          "checkout",
          "customer-cms",
          "admin"
        ],
        "verificationMethods": [
          "automated-static",
          "visual-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_color_001.json"
      },
      {
        "controlId": "ACC-CONTRAST-001",
        "name": "Meet contrast requirements",
        "category": "visual",
        "requirement": "Text, interactive states and essential non-text UI indicators must provide sufficient contrast against adjacent backgrounds.",
        "rationale": "Low contrast can make content and controls unreadable.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "form",
          "navigation",
          "status-message",
          "chart"
        ],
        "verificationMethods": [
          "contrast-tool",
          "visual-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_contrast_001.json"
      },
      {
        "controlId": "ACC-COPY-001",
        "name": "Accessible copy actions",
        "category": "components",
        "requirement": "Copy actions must be semantic buttons with an accessible name and must expose success/failure feedback without relying only on visual change.",
        "rationale": "Copy is a frequent action in technical interfaces.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "code-viewer",
          "status-message"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_copy_001.json"
      },
      {
        "controlId": "ACC-DLG-001",
        "name": "Accessible dialogs",
        "category": "components",
        "requirement": "Dialogs must expose dialog semantics, an accessible name, keyboard containment while modal, predictable close behavior and focus restoration.",
        "rationale": "Modal content requires explicit semantics and focus management.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "dialog",
          "command-palette"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual",
          "screen-reader-manual",
          "integration-test"
        ],
        "severity": "critical",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_dlg_001.json"
      },
      {
        "controlId": "ACC-DRAG-001",
        "name": "Provide alternatives to drag and drop",
        "category": "components",
        "requirement": "Any drag-and-drop operation must have a keyboard-accessible non-drag alternative that performs the same action.",
        "rationale": "Dragging can be inaccessible to keyboard and some motor-input users.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "drag-drop"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "integration-test"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_drag_001.json"
      },
      {
        "controlId": "ACC-DRAWER-001",
        "name": "Accessible drawers",
        "category": "components",
        "requirement": "Navigation and action drawers must expose their state, support keyboard closing, and manage focus without trapping users behind the drawer.",
        "rationale": "Drawers are modal-like interactions on smaller screens and need equivalent keyboard behavior.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "drawer",
          "navigation"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual",
          "integration-test"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_drawer_001.json"
      },
      {
        "controlId": "ACC-FILTER-001",
        "name": "Accessible filters",
        "category": "navigation",
        "requirement": "Search and filter controls must have labels, keyboard operation, deterministic state, clear/reset behavior and a discoverable result count.",
        "rationale": "Filters are core navigation tools in management and technical interfaces.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "filter"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.filter"
        ],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_filter_001.json"
      },
      {
        "controlId": "ACC-FOCUS-001",
        "name": "Visible keyboard focus",
        "category": "keyboard",
        "requirement": "Keyboard focus must always have a clearly visible indicator on interactive controls.",
        "rationale": "Visible focus is required for users to understand current keyboard position.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "navigation",
          "form",
          "dialog",
          "drawer",
          "menu",
          "filter",
          "command-palette"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual",
          "visual-manual"
        ],
        "severity": "critical",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_focus_001.json"
      },
      {
        "controlId": "ACC-FOCUS-002",
        "name": "Manage focus across UI transitions",
        "category": "keyboard",
        "requirement": "Dialogs, drawers and route-level transitions must move, contain, restore or announce focus intentionally according to the interaction pattern.",
        "rationale": "Unmanaged focus can leave keyboard and screen-reader users disoriented.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "dialog",
          "drawer",
          "command-palette",
          "page"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "integration-test"
        ],
        "severity": "critical",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_focus_002.json"
      },
      {
        "controlId": "ACC-FORM-001",
        "name": "Associate labels with inputs",
        "category": "forms",
        "requirement": "Every user-editable form control must have an explicitly associated visible or programmatic label.",
        "rationale": "Labels provide the accessible name and persistent context for input controls.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "form",
          "checkout",
          "authentication"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.fieldBinding"
        ],
        "relatedBlocks": [],
        "relatedFields": [
          "fields.text",
          "fields.textarea",
          "fields.select",
          "fields.multiSelect",
          "fields.email",
          "fields.phone",
          "fields.date",
          "fields.dateTime"
        ],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_form_001.json"
      },
      {
        "controlId": "ACC-FORM-002",
        "name": "Associate descriptions and help",
        "category": "forms",
        "requirement": "Help text, constraints and descriptions must be programmatically associated with the field when they affect successful input.",
        "rationale": "Visible helper text that is not associated may be missed by assistive technology.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "form",
          "checkout",
          "authentication"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.helpContent",
          "cmsUi.fieldBinding"
        ],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_form_002.json"
      },
      {
        "controlId": "ACC-FORM-003",
        "name": "Associate validation errors",
        "category": "forms",
        "requirement": "Validation errors must identify the affected field programmatically and provide actionable text.",
        "rationale": "Users need to locate and understand validation failures without relying on color or position alone.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "form",
          "checkout",
          "authentication"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.validationPresentation"
        ],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_form_003.json"
      },
      {
        "controlId": "ACC-FORM-004",
        "name": "Communicate required input",
        "category": "forms",
        "requirement": "Required state and input requirements must be conveyed in text or semantics, not only by visual styling.",
        "rationale": "Required-field meaning must remain available independent of color and visual layout.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "form",
          "checkout",
          "authentication"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.validationPresentation"
        ],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_form_004.json"
      },
      {
        "controlId": "ACC-HEAD-001",
        "name": "Logical heading structure",
        "category": "structure",
        "requirement": "Pages and authored content must use a logical heading hierarchy without using heading level only for visual styling.",
        "rationale": "Heading structure supports orientation and efficient navigation.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "rich-text-editor"
        ],
        "verificationMethods": [
          "automated-static",
          "content-review"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.editorDefinition"
        ],
        "relatedBlocks": [
          "blocks.heading",
          "blocks.richText"
        ],
        "relatedFields": [
          "fields.richText",
          "fields.text"
        ],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_head_001.json"
      },
      {
        "controlId": "ACC-HEADING-002",
        "name": "Constrain authored heading levels",
        "category": "authoring",
        "requirement": "Structured content blocks that expose headings must support a valid content outline and must not use heading levels only for typography.",
        "rationale": "Schema-driven content can otherwise generate invalid heading hierarchy even when the editor shell is accessible.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "rich-text-editor",
          "page"
        ],
        "verificationMethods": [
          "content-review",
          "automated-static"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [
          "blocks.heading",
          "blocks.hero",
          "blocks.richText"
        ],
        "relatedFields": [
          "fields.richText"
        ],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_heading_002.json"
      },
      {
        "controlId": "ACC-ICON-001",
        "name": "Handle icon semantics correctly",
        "category": "structure",
        "requirement": "Decorative icons must be hidden from assistive technology; meaningful icon-only controls must receive an accessible name.",
        "rationale": "Repeated decorative icon names can create noise while unlabeled icon buttons hide control purpose.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "navigation",
          "form",
          "dialog",
          "drawer",
          "menu"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_icon_001.json"
      },
      {
        "controlId": "ACC-IMG-001",
        "name": "Alternative text for meaningful images",
        "category": "media",
        "requirement": "Meaningful images must have appropriate alternative text; decorative images must be intentionally hidden from assistive technology.",
        "rationale": "Image purpose must remain available when visual content cannot be perceived.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "image"
        ],
        "verificationMethods": [
          "automated-static",
          "content-review",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.fieldBinding"
        ],
        "relatedBlocks": [
          "blocks.gallery",
          "blocks.textImage",
          "blocks.hero"
        ],
        "relatedFields": [
          "fields.image",
          "fields.gallery"
        ],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_img_001.json"
      },
      {
        "controlId": "ACC-KBD-001",
        "name": "Full keyboard operation",
        "category": "keyboard",
        "requirement": "All functionality must be operable from a keyboard without requiring pointer-specific interaction.",
        "rationale": "Keyboard access is fundamental for many assistive-technology and motor-impaired users.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "navigation",
          "form",
          "dialog",
          "drawer",
          "menu",
          "table",
          "filter",
          "command-palette"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "integration-test"
        ],
        "severity": "critical",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_kbd_001.json"
      },
      {
        "controlId": "ACC-LAND-001",
        "name": "Expose page landmarks",
        "category": "structure",
        "requirement": "Primary page regions such as navigation and main content must use semantic landmarks or equivalent labeled regions.",
        "rationale": "Landmarks help assistive-technology users navigate major regions.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "navigation"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_land_001.json"
      },
      {
        "controlId": "ACC-LIVE-001",
        "name": "Use live regions deliberately",
        "category": "status",
        "requirement": "Live regions must use an appropriate politeness level, avoid noisy repeated announcements and contain concise status text.",
        "rationale": "Overly broad or frequent live regions can make dynamic interfaces unusable.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "status-message",
          "command-palette"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_live_001.json"
      },
      {
        "controlId": "ACC-LOAD-001",
        "name": "Accessible loading and error states",
        "category": "status",
        "requirement": "Loading, empty and error states must provide text that identifies the state and the next available action where applicable.",
        "rationale": "Users must not depend on spinners, color or visual placement to understand system state.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "form",
          "checkout",
          "customer-cms",
          "admin"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_load_001.json"
      },
      {
        "controlId": "ACC-MEDIA-001",
        "name": "Captions for synchronized media",
        "category": "media",
        "requirement": "Prerecorded video with meaningful spoken content must support captions when the content requires them.",
        "rationale": "Captions provide equivalent access to spoken audio.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "audio-video"
        ],
        "verificationMethods": [
          "content-review",
          "visual-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [
          "blocks.video"
        ],
        "relatedFields": [
          "fields.video"
        ],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_media_001.json"
      },
      {
        "controlId": "ACC-MEDIA-002",
        "name": "Transcripts where applicable",
        "category": "media",
        "requirement": "Audio-first or information-dense media must provide a text transcript or equivalent alternative where applicable.",
        "rationale": "Transcripts support users who cannot access audio and improve review/searchability.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "audio-video"
        ],
        "verificationMethods": [
          "content-review"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [
          "fields.audio",
          "fields.video"
        ],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_media_002.json"
      },
      {
        "controlId": "ACC-MENU-001",
        "name": "Accessible menus",
        "category": "components",
        "requirement": "Menus and menu-like controls must use an interaction model consistent with their semantic role and provide keyboard equivalents for every action.",
        "rationale": "Custom menus can create keyboard traps or inconsistent navigation if roles and keys disagree.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "menu",
          "navigation"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_menu_001.json"
      },
      {
        "controlId": "ACC-MOBILE-001",
        "name": "Preserve accessibility on responsive layouts",
        "category": "visual",
        "requirement": "Responsive transformations must preserve reading order, control names, keyboard access, focus visibility and complete functionality on narrow viewports.",
        "rationale": "Mobile/tablet layout changes must not create a separate inaccessible interaction model.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "navigation",
          "drawer",
          "table",
          "customer-cms",
          "admin"
        ],
        "verificationMethods": [
          "zoom-reflow",
          "keyboard-manual",
          "visual-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_mobile_001.json"
      },
      {
        "controlId": "ACC-MOTION-001",
        "name": "Respect reduced motion",
        "category": "motion",
        "requirement": "Non-essential animation and transitions must respect the user reduced-motion preference and must not be required to understand content.",
        "rationale": "Motion can cause discomfort or prevent successful interaction for some users.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "navigation",
          "dialog",
          "drawer"
        ],
        "verificationMethods": [
          "automated-static",
          "visual-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_motion_001.json"
      },
      {
        "controlId": "ACC-NAME-001",
        "name": "Accessible names for controls",
        "category": "structure",
        "requirement": "Every interactive control must expose a stable accessible name that communicates its purpose.",
        "rationale": "Unnamed controls are difficult or impossible to operate with assistive technology.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "form",
          "dialog",
          "drawer",
          "menu",
          "filter",
          "command-palette"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.action",
          "cmsUi.fieldBinding"
        ],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_name_001.json"
      },
      {
        "controlId": "ACC-NAV-001",
        "name": "Accessible navigation state",
        "category": "navigation",
        "requirement": "Navigation must expose meaningful link text, current-route state and an operable small-screen alternative without hiding functionality from keyboard users.",
        "rationale": "Navigation is a repeated critical path across the portal and management interfaces.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "navigation",
          "drawer"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_nav_001.json"
      },
      {
        "controlId": "ACC-PALETTE-001",
        "name": "Accessible command palette",
        "category": "navigation",
        "requirement": "Command palettes must support keyboard opening, result navigation, Escape closing, focus containment/restoration and announced result state.",
        "rationale": "Keyboard-first discovery must remain predictable to keyboard and screen-reader users.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "command-palette",
          "dialog"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual",
          "screen-reader-manual",
          "integration-test"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_palette_001.json"
      },
      {
        "controlId": "ACC-REFLOW-001",
        "name": "Support zoom and reflow",
        "category": "visual",
        "requirement": "Content and primary workflows must remain usable under browser zoom and narrow reflow without requiring two-dimensional scrolling except where intrinsically necessary.",
        "rationale": "Zoom and reflow are essential for low-vision access and smaller displays.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "table",
          "form",
          "checkout",
          "customer-cms",
          "admin"
        ],
        "verificationMethods": [
          "zoom-reflow",
          "visual-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_reflow_001.json"
      },
      {
        "controlId": "ACC-RTE-001",
        "name": "Accessible rich-text editing",
        "category": "authoring",
        "requirement": "Rich-text editors must expose toolbar controls, editing context and formatting actions to keyboard and assistive technology, with a non-pointer path for all supported operations.",
        "rationale": "Authoring tools must not make content editing dependent on pointer input.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "rich-text-editor"
        ],
        "verificationMethods": [
          "keyboard-manual",
          "screen-reader-manual",
          "integration-test"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [
          "cmsUi.editorDefinition"
        ],
        "relatedBlocks": [],
        "relatedFields": [
          "fields.richText"
        ],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_rte_001.json"
      },
      {
        "controlId": "ACC-SEM-001",
        "name": "Use semantic HTML",
        "category": "structure",
        "requirement": "Use native semantic HTML elements for structure and controls before adding ARIA or custom interaction roles.",
        "rationale": "Native semantics provide robust names, roles and behaviors across browsers and assistive technologies.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "page",
          "navigation",
          "form"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [
          "portal.uiStandard"
        ],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_sem_001.json"
      },
      {
        "controlId": "ACC-SKIP-001",
        "name": "Provide skip navigation",
        "category": "navigation",
        "requirement": "Repeated navigation must provide a keyboard-accessible mechanism to move directly to main content.",
        "rationale": "Skip links reduce repetitive keyboard navigation.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "navigation",
          "page"
        ],
        "verificationMethods": [
          "automated-static",
          "keyboard-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_skip_001.json"
      },
      {
        "controlId": "ACC-STATUS-001",
        "name": "Announce important status changes",
        "category": "status",
        "requirement": "Important asynchronous status changes must be exposed to assistive technology without unexpectedly moving focus.",
        "rationale": "Users need feedback when operations complete, fail or update asynchronously.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "status-message",
          "form",
          "checkout",
          "customer-cms",
          "admin"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual",
          "integration-test"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_status_001.json"
      },
      {
        "controlId": "ACC-TABLE-001",
        "name": "Accessible data tables",
        "category": "components",
        "requirement": "Data tables must identify headers and relationships programmatically; responsive transformations must preserve data context.",
        "rationale": "Table structure is needed to associate cells with their meaning.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "table"
        ],
        "verificationMethods": [
          "automated-static",
          "screen-reader-manual",
          "zoom-reflow"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_table_001.json"
      },
      {
        "controlId": "ACC-TOUCH-001",
        "name": "Provide usable touch targets",
        "category": "visual",
        "requirement": "Frequently used interactive targets must be large and separated enough for reliable touch operation.",
        "rationale": "Small adjacent targets increase accidental activation.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "contract-portal"
        ],
        "affectedUiTypes": [
          "navigation",
          "form",
          "checkout",
          "customer-cms",
          "admin"
        ],
        "verificationMethods": [
          "visual-manual"
        ],
        "severity": "high",
        "relatedCmsEditorTypes": [],
        "relatedBlocks": [],
        "relatedFields": [],
        "relatedRegistryIds": [],
        "manualReviewRequired": true,
        "subrequirements": [],
        "version": "1.0.0",
        "status": "stable",
        "phase": 31,
        "sourceReference": "registry/accessibility/controls/acc_touch_001.json"
      }
    ],
    "portalAuditSummary": {
      "overallStatus": "pass",
      "checkCount": 16,
      "passed": 16,
      "failed": 0,
      "notRun": 0
    },
    "sources": {
      "standard": "standards/39-accessibility-standard.md",
      "controlSchema": "registry/accessibility/accessibility-control.schema.json",
      "categories": "registry/accessibility/categories.json",
      "uiTypes": "registry/accessibility/ui-types.json",
      "verificationMethods": "registry/accessibility/verification-methods.json",
      "surfaceMapping": "registry/accessibility/surface-mapping.json",
      "portalChecklist": "registry/accessibility/portal-checklist.json",
      "portalAudit": "registry/accessibility/portal-audit.json",
      "severityLevels": "registry/security/severity-levels.json"
    }
  },
  "controls": [
    {
      "controlId": "ACC-ADMIN-001",
      "name": "NEXT F Admin accessibility",
      "category": "management",
      "requirement": "NEXT F Admin tables, context selectors, diagnostics, dialogs and privileged actions must satisfy applicable accessibility controls and must not communicate risk/status by color alone.",
      "rationale": "Internal administration must remain operable and understandable for keyboard and assistive-technology users.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "admin",
        "table",
        "dialog",
        "form"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "screen-reader-manual",
        "zoom-reflow"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [
        "adminUi.adminProfile",
        "adminUi.riskPresentation"
      ],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_admin_001.json"
    },
    {
      "controlId": "ACC-ARIA-001",
      "name": "Use ARIA with restraint",
      "category": "structure",
      "requirement": "ARIA must supplement native semantics only when necessary and must not contradict native roles, states or properties.",
      "rationale": "Incorrect ARIA can make otherwise accessible native controls unusable.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "dialog",
        "drawer",
        "menu",
        "table"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_aria_001.json"
    },
    {
      "controlId": "ACC-AUTH-001",
      "name": "Accessible authentication flows",
      "category": "authentication",
      "requirement": "Sign-in, verification, recovery and recent-authentication flows must expose labels, instructions, errors, status and keyboard operation without inaccessible challenge assumptions.",
      "rationale": "Authentication accessibility failures can completely block account access.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "authentication",
        "form"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "screen-reader-manual",
        "integration-test"
      ],
      "severity": "critical",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_auth_001.json"
    },
    {
      "controlId": "ACC-AUTHOR-001",
      "name": "Author accessibility metadata",
      "category": "authoring",
      "requirement": "Schema/UI metadata should expose accessibility-relevant authoring requirements such as alt text, accessible labels, help/error association, caption/transcript references and heading constraints where applicable.",
      "rationale": "Schema-driven editors need machine-readable cues to present accessible authoring requirements consistently.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "rich-text-editor",
        "image",
        "audio-video",
        "form"
      ],
      "verificationMethods": [
        "automated-static",
        "content-review"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.fieldBinding",
        "cmsUi.helpContent",
        "cmsUi.validationPresentation"
      ],
      "relatedBlocks": [
        "blocks.heading",
        "blocks.gallery",
        "blocks.video",
        "blocks.form"
      ],
      "relatedFields": [
        "fields.image",
        "fields.video",
        "fields.audio",
        "fields.richText"
      ],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_author_001.json"
    },
    {
      "controlId": "ACC-CHART-001",
      "name": "Provide data alternatives for charts",
      "category": "data-viz",
      "requirement": "Charts and visual data representations must provide an accessible textual/table alternative or equivalent programmatic data representation.",
      "rationale": "Visual position and color cannot be the only path to underlying data.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "chart"
      ],
      "verificationMethods": [
        "content-review",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_chart_001.json"
    },
    {
      "controlId": "ACC-CHECKOUT-001",
      "name": "Accessible checkout flow",
      "category": "commerce",
      "requirement": "Checkout must preserve labels, validation, error recovery, keyboard operation, progress/status context and review/confirmation access without pointer-only interaction.",
      "rationale": "Checkout is a critical transaction flow where accessibility failures can block purchase completion.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "checkout",
        "form"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "screen-reader-manual",
        "integration-test"
      ],
      "severity": "critical",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [
        "commerce.checkout",
        "commerce.order"
      ],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_checkout_001.json"
    },
    {
      "controlId": "ACC-CMS-001",
      "name": "Customer CMS accessibility",
      "category": "management",
      "requirement": "Customer CMS resource lists, editors, actions, dialogs and validation must satisfy the applicable accessibility controls and preserve keyboard alternatives for authoring workflows.",
      "rationale": "Customers must be able to manage content without accessibility regressions in the management interface.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "customer-cms",
        "form",
        "table",
        "dialog",
        "rich-text-editor"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "screen-reader-manual",
        "zoom-reflow"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.resourceProfile",
        "cmsUi.editorDefinition",
        "cmsUi.action",
        "cmsUi.validationPresentation"
      ],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_cms_001.json"
    },
    {
      "controlId": "ACC-CODE-001",
      "name": "Accessible code and raw-data views",
      "category": "components",
      "requirement": "Code/raw-data viewers must preserve selectable text, readable overflow behavior and keyboard-accessible copy actions without requiring syntax color to understand content.",
      "rationale": "Technical source views are primary content in the Contract Portal.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "code-viewer"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "zoom-reflow",
        "visual-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_code_001.json"
    },
    {
      "controlId": "ACC-COLOR-001",
      "name": "Do not rely on color alone",
      "category": "visual",
      "requirement": "Status, validation, risk and selection states must communicate meaning with text, iconography, shape or semantics in addition to color.",
      "rationale": "Color alone excludes users with color-vision differences and can disappear in forced/high-contrast modes.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "status-message",
        "form",
        "table",
        "checkout",
        "customer-cms",
        "admin"
      ],
      "verificationMethods": [
        "automated-static",
        "visual-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_color_001.json"
    },
    {
      "controlId": "ACC-CONTRAST-001",
      "name": "Meet contrast requirements",
      "category": "visual",
      "requirement": "Text, interactive states and essential non-text UI indicators must provide sufficient contrast against adjacent backgrounds.",
      "rationale": "Low contrast can make content and controls unreadable.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "form",
        "navigation",
        "status-message",
        "chart"
      ],
      "verificationMethods": [
        "contrast-tool",
        "visual-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_contrast_001.json"
    },
    {
      "controlId": "ACC-COPY-001",
      "name": "Accessible copy actions",
      "category": "components",
      "requirement": "Copy actions must be semantic buttons with an accessible name and must expose success/failure feedback without relying only on visual change.",
      "rationale": "Copy is a frequent action in technical interfaces.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "code-viewer",
        "status-message"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_copy_001.json"
    },
    {
      "controlId": "ACC-DLG-001",
      "name": "Accessible dialogs",
      "category": "components",
      "requirement": "Dialogs must expose dialog semantics, an accessible name, keyboard containment while modal, predictable close behavior and focus restoration.",
      "rationale": "Modal content requires explicit semantics and focus management.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "dialog",
        "command-palette"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual",
        "screen-reader-manual",
        "integration-test"
      ],
      "severity": "critical",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_dlg_001.json"
    },
    {
      "controlId": "ACC-DRAG-001",
      "name": "Provide alternatives to drag and drop",
      "category": "components",
      "requirement": "Any drag-and-drop operation must have a keyboard-accessible non-drag alternative that performs the same action.",
      "rationale": "Dragging can be inaccessible to keyboard and some motor-input users.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "drag-drop"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "integration-test"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_drag_001.json"
    },
    {
      "controlId": "ACC-DRAWER-001",
      "name": "Accessible drawers",
      "category": "components",
      "requirement": "Navigation and action drawers must expose their state, support keyboard closing, and manage focus without trapping users behind the drawer.",
      "rationale": "Drawers are modal-like interactions on smaller screens and need equivalent keyboard behavior.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "drawer",
        "navigation"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual",
        "integration-test"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_drawer_001.json"
    },
    {
      "controlId": "ACC-FILTER-001",
      "name": "Accessible filters",
      "category": "navigation",
      "requirement": "Search and filter controls must have labels, keyboard operation, deterministic state, clear/reset behavior and a discoverable result count.",
      "rationale": "Filters are core navigation tools in management and technical interfaces.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "filter"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.filter"
      ],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_filter_001.json"
    },
    {
      "controlId": "ACC-FOCUS-001",
      "name": "Visible keyboard focus",
      "category": "keyboard",
      "requirement": "Keyboard focus must always have a clearly visible indicator on interactive controls.",
      "rationale": "Visible focus is required for users to understand current keyboard position.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "navigation",
        "form",
        "dialog",
        "drawer",
        "menu",
        "filter",
        "command-palette"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual",
        "visual-manual"
      ],
      "severity": "critical",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_focus_001.json"
    },
    {
      "controlId": "ACC-FOCUS-002",
      "name": "Manage focus across UI transitions",
      "category": "keyboard",
      "requirement": "Dialogs, drawers and route-level transitions must move, contain, restore or announce focus intentionally according to the interaction pattern.",
      "rationale": "Unmanaged focus can leave keyboard and screen-reader users disoriented.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "dialog",
        "drawer",
        "command-palette",
        "page"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "integration-test"
      ],
      "severity": "critical",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_focus_002.json"
    },
    {
      "controlId": "ACC-FORM-001",
      "name": "Associate labels with inputs",
      "category": "forms",
      "requirement": "Every user-editable form control must have an explicitly associated visible or programmatic label.",
      "rationale": "Labels provide the accessible name and persistent context for input controls.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "form",
        "checkout",
        "authentication"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.fieldBinding"
      ],
      "relatedBlocks": [],
      "relatedFields": [
        "fields.text",
        "fields.textarea",
        "fields.select",
        "fields.multiSelect",
        "fields.email",
        "fields.phone",
        "fields.date",
        "fields.dateTime"
      ],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_form_001.json"
    },
    {
      "controlId": "ACC-FORM-002",
      "name": "Associate descriptions and help",
      "category": "forms",
      "requirement": "Help text, constraints and descriptions must be programmatically associated with the field when they affect successful input.",
      "rationale": "Visible helper text that is not associated may be missed by assistive technology.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "form",
        "checkout",
        "authentication"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.helpContent",
        "cmsUi.fieldBinding"
      ],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_form_002.json"
    },
    {
      "controlId": "ACC-FORM-003",
      "name": "Associate validation errors",
      "category": "forms",
      "requirement": "Validation errors must identify the affected field programmatically and provide actionable text.",
      "rationale": "Users need to locate and understand validation failures without relying on color or position alone.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "form",
        "checkout",
        "authentication"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.validationPresentation"
      ],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_form_003.json"
    },
    {
      "controlId": "ACC-FORM-004",
      "name": "Communicate required input",
      "category": "forms",
      "requirement": "Required state and input requirements must be conveyed in text or semantics, not only by visual styling.",
      "rationale": "Required-field meaning must remain available independent of color and visual layout.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "form",
        "checkout",
        "authentication"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.validationPresentation"
      ],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_form_004.json"
    },
    {
      "controlId": "ACC-HEAD-001",
      "name": "Logical heading structure",
      "category": "structure",
      "requirement": "Pages and authored content must use a logical heading hierarchy without using heading level only for visual styling.",
      "rationale": "Heading structure supports orientation and efficient navigation.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "rich-text-editor"
      ],
      "verificationMethods": [
        "automated-static",
        "content-review"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.editorDefinition"
      ],
      "relatedBlocks": [
        "blocks.heading",
        "blocks.richText"
      ],
      "relatedFields": [
        "fields.richText",
        "fields.text"
      ],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_head_001.json"
    },
    {
      "controlId": "ACC-HEADING-002",
      "name": "Constrain authored heading levels",
      "category": "authoring",
      "requirement": "Structured content blocks that expose headings must support a valid content outline and must not use heading levels only for typography.",
      "rationale": "Schema-driven content can otherwise generate invalid heading hierarchy even when the editor shell is accessible.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "rich-text-editor",
        "page"
      ],
      "verificationMethods": [
        "content-review",
        "automated-static"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [
        "blocks.heading",
        "blocks.hero",
        "blocks.richText"
      ],
      "relatedFields": [
        "fields.richText"
      ],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_heading_002.json"
    },
    {
      "controlId": "ACC-ICON-001",
      "name": "Handle icon semantics correctly",
      "category": "structure",
      "requirement": "Decorative icons must be hidden from assistive technology; meaningful icon-only controls must receive an accessible name.",
      "rationale": "Repeated decorative icon names can create noise while unlabeled icon buttons hide control purpose.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "navigation",
        "form",
        "dialog",
        "drawer",
        "menu"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_icon_001.json"
    },
    {
      "controlId": "ACC-IMG-001",
      "name": "Alternative text for meaningful images",
      "category": "media",
      "requirement": "Meaningful images must have appropriate alternative text; decorative images must be intentionally hidden from assistive technology.",
      "rationale": "Image purpose must remain available when visual content cannot be perceived.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "image"
      ],
      "verificationMethods": [
        "automated-static",
        "content-review",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.fieldBinding"
      ],
      "relatedBlocks": [
        "blocks.gallery",
        "blocks.textImage",
        "blocks.hero"
      ],
      "relatedFields": [
        "fields.image",
        "fields.gallery"
      ],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_img_001.json"
    },
    {
      "controlId": "ACC-KBD-001",
      "name": "Full keyboard operation",
      "category": "keyboard",
      "requirement": "All functionality must be operable from a keyboard without requiring pointer-specific interaction.",
      "rationale": "Keyboard access is fundamental for many assistive-technology and motor-impaired users.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "navigation",
        "form",
        "dialog",
        "drawer",
        "menu",
        "table",
        "filter",
        "command-palette"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "integration-test"
      ],
      "severity": "critical",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_kbd_001.json"
    },
    {
      "controlId": "ACC-LAND-001",
      "name": "Expose page landmarks",
      "category": "structure",
      "requirement": "Primary page regions such as navigation and main content must use semantic landmarks or equivalent labeled regions.",
      "rationale": "Landmarks help assistive-technology users navigate major regions.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "navigation"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_land_001.json"
    },
    {
      "controlId": "ACC-LIVE-001",
      "name": "Use live regions deliberately",
      "category": "status",
      "requirement": "Live regions must use an appropriate politeness level, avoid noisy repeated announcements and contain concise status text.",
      "rationale": "Overly broad or frequent live regions can make dynamic interfaces unusable.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "status-message",
        "command-palette"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_live_001.json"
    },
    {
      "controlId": "ACC-LOAD-001",
      "name": "Accessible loading and error states",
      "category": "status",
      "requirement": "Loading, empty and error states must provide text that identifies the state and the next available action where applicable.",
      "rationale": "Users must not depend on spinners, color or visual placement to understand system state.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "form",
        "checkout",
        "customer-cms",
        "admin"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_load_001.json"
    },
    {
      "controlId": "ACC-MEDIA-001",
      "name": "Captions for synchronized media",
      "category": "media",
      "requirement": "Prerecorded video with meaningful spoken content must support captions when the content requires them.",
      "rationale": "Captions provide equivalent access to spoken audio.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "audio-video"
      ],
      "verificationMethods": [
        "content-review",
        "visual-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [
        "blocks.video"
      ],
      "relatedFields": [
        "fields.video"
      ],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_media_001.json"
    },
    {
      "controlId": "ACC-MEDIA-002",
      "name": "Transcripts where applicable",
      "category": "media",
      "requirement": "Audio-first or information-dense media must provide a text transcript or equivalent alternative where applicable.",
      "rationale": "Transcripts support users who cannot access audio and improve review/searchability.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "audio-video"
      ],
      "verificationMethods": [
        "content-review"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [
        "fields.audio",
        "fields.video"
      ],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_media_002.json"
    },
    {
      "controlId": "ACC-MENU-001",
      "name": "Accessible menus",
      "category": "components",
      "requirement": "Menus and menu-like controls must use an interaction model consistent with their semantic role and provide keyboard equivalents for every action.",
      "rationale": "Custom menus can create keyboard traps or inconsistent navigation if roles and keys disagree.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "menu",
        "navigation"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_menu_001.json"
    },
    {
      "controlId": "ACC-MOBILE-001",
      "name": "Preserve accessibility on responsive layouts",
      "category": "visual",
      "requirement": "Responsive transformations must preserve reading order, control names, keyboard access, focus visibility and complete functionality on narrow viewports.",
      "rationale": "Mobile/tablet layout changes must not create a separate inaccessible interaction model.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "navigation",
        "drawer",
        "table",
        "customer-cms",
        "admin"
      ],
      "verificationMethods": [
        "zoom-reflow",
        "keyboard-manual",
        "visual-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_mobile_001.json"
    },
    {
      "controlId": "ACC-MOTION-001",
      "name": "Respect reduced motion",
      "category": "motion",
      "requirement": "Non-essential animation and transitions must respect the user reduced-motion preference and must not be required to understand content.",
      "rationale": "Motion can cause discomfort or prevent successful interaction for some users.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "navigation",
        "dialog",
        "drawer"
      ],
      "verificationMethods": [
        "automated-static",
        "visual-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_motion_001.json"
    },
    {
      "controlId": "ACC-NAME-001",
      "name": "Accessible names for controls",
      "category": "structure",
      "requirement": "Every interactive control must expose a stable accessible name that communicates its purpose.",
      "rationale": "Unnamed controls are difficult or impossible to operate with assistive technology.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "form",
        "dialog",
        "drawer",
        "menu",
        "filter",
        "command-palette"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.action",
        "cmsUi.fieldBinding"
      ],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_name_001.json"
    },
    {
      "controlId": "ACC-NAV-001",
      "name": "Accessible navigation state",
      "category": "navigation",
      "requirement": "Navigation must expose meaningful link text, current-route state and an operable small-screen alternative without hiding functionality from keyboard users.",
      "rationale": "Navigation is a repeated critical path across the portal and management interfaces.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "navigation",
        "drawer"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_nav_001.json"
    },
    {
      "controlId": "ACC-PALETTE-001",
      "name": "Accessible command palette",
      "category": "navigation",
      "requirement": "Command palettes must support keyboard opening, result navigation, Escape closing, focus containment/restoration and announced result state.",
      "rationale": "Keyboard-first discovery must remain predictable to keyboard and screen-reader users.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "command-palette",
        "dialog"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual",
        "screen-reader-manual",
        "integration-test"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_palette_001.json"
    },
    {
      "controlId": "ACC-REFLOW-001",
      "name": "Support zoom and reflow",
      "category": "visual",
      "requirement": "Content and primary workflows must remain usable under browser zoom and narrow reflow without requiring two-dimensional scrolling except where intrinsically necessary.",
      "rationale": "Zoom and reflow are essential for low-vision access and smaller displays.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "table",
        "form",
        "checkout",
        "customer-cms",
        "admin"
      ],
      "verificationMethods": [
        "zoom-reflow",
        "visual-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_reflow_001.json"
    },
    {
      "controlId": "ACC-RTE-001",
      "name": "Accessible rich-text editing",
      "category": "authoring",
      "requirement": "Rich-text editors must expose toolbar controls, editing context and formatting actions to keyboard and assistive technology, with a non-pointer path for all supported operations.",
      "rationale": "Authoring tools must not make content editing dependent on pointer input.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "rich-text-editor"
      ],
      "verificationMethods": [
        "keyboard-manual",
        "screen-reader-manual",
        "integration-test"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [
        "cmsUi.editorDefinition"
      ],
      "relatedBlocks": [],
      "relatedFields": [
        "fields.richText"
      ],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_rte_001.json"
    },
    {
      "controlId": "ACC-SEM-001",
      "name": "Use semantic HTML",
      "category": "structure",
      "requirement": "Use native semantic HTML elements for structure and controls before adding ARIA or custom interaction roles.",
      "rationale": "Native semantics provide robust names, roles and behaviors across browsers and assistive technologies.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "page",
        "navigation",
        "form"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [
        "portal.uiStandard"
      ],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_sem_001.json"
    },
    {
      "controlId": "ACC-SKIP-001",
      "name": "Provide skip navigation",
      "category": "navigation",
      "requirement": "Repeated navigation must provide a keyboard-accessible mechanism to move directly to main content.",
      "rationale": "Skip links reduce repetitive keyboard navigation.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "navigation",
        "page"
      ],
      "verificationMethods": [
        "automated-static",
        "keyboard-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_skip_001.json"
    },
    {
      "controlId": "ACC-STATUS-001",
      "name": "Announce important status changes",
      "category": "status",
      "requirement": "Important asynchronous status changes must be exposed to assistive technology without unexpectedly moving focus.",
      "rationale": "Users need feedback when operations complete, fail or update asynchronously.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "status-message",
        "form",
        "checkout",
        "customer-cms",
        "admin"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual",
        "integration-test"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_status_001.json"
    },
    {
      "controlId": "ACC-TABLE-001",
      "name": "Accessible data tables",
      "category": "components",
      "requirement": "Data tables must identify headers and relationships programmatically; responsive transformations must preserve data context.",
      "rationale": "Table structure is needed to associate cells with their meaning.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "table"
      ],
      "verificationMethods": [
        "automated-static",
        "screen-reader-manual",
        "zoom-reflow"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_table_001.json"
    },
    {
      "controlId": "ACC-TOUCH-001",
      "name": "Provide usable touch targets",
      "category": "visual",
      "requirement": "Frequently used interactive targets must be large and separated enough for reliable touch operation.",
      "rationale": "Small adjacent targets increase accidental activation.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "contract-portal"
      ],
      "affectedUiTypes": [
        "navigation",
        "form",
        "checkout",
        "customer-cms",
        "admin"
      ],
      "verificationMethods": [
        "visual-manual"
      ],
      "severity": "high",
      "relatedCmsEditorTypes": [],
      "relatedBlocks": [],
      "relatedFields": [],
      "relatedRegistryIds": [],
      "manualReviewRequired": true,
      "subrequirements": [],
      "version": "1.0.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_touch_001.json"
    }
  ],
  "categories": {
    "registryVersion": "1.0.0",
    "categories": [
      {
        "id": "structure",
        "label": "Structure & Semantics",
        "description": "Semantic HTML, headings and landmarks."
      },
      {
        "id": "forms",
        "label": "Forms & Validation",
        "description": "Labels, instructions, help and error association."
      },
      {
        "id": "keyboard",
        "label": "Keyboard & Focus",
        "description": "Keyboard operation, visible focus and focus management."
      },
      {
        "id": "components",
        "label": "Interactive Components",
        "description": "Dialogs, drawers, menus, tables and complex controls."
      },
      {
        "id": "authoring",
        "label": "Authoring & Editors",
        "description": "Accessible editing, rich text and content-authoring metadata."
      },
      {
        "id": "media",
        "label": "Images & Media",
        "description": "Alternative text, captions and transcripts."
      },
      {
        "id": "visual",
        "label": "Visual Presentation",
        "description": "Contrast, reflow, touch targets and non-color-only meaning."
      },
      {
        "id": "motion",
        "label": "Motion",
        "description": "Reduced-motion and animation behavior."
      },
      {
        "id": "status",
        "label": "Status & Feedback",
        "description": "Live regions, loading, errors and status messages."
      },
      {
        "id": "navigation",
        "label": "Navigation & Discovery",
        "description": "Navigation, skip links, filters and command palette."
      },
      {
        "id": "data-viz",
        "label": "Data Visualization",
        "description": "Charts and visual data alternatives."
      },
      {
        "id": "commerce",
        "label": "Commerce",
        "description": "Accessible checkout and transaction flows."
      },
      {
        "id": "authentication",
        "label": "Authentication",
        "description": "Accessible sign-in and authentication flows."
      },
      {
        "id": "management",
        "label": "Management Interfaces",
        "description": "Customer CMS, Admin and operational interfaces."
      }
    ]
  },
  "uiTypes": {
    "registryVersion": "1.0.0",
    "types": [
      {
        "id": "page",
        "label": "Page"
      },
      {
        "id": "navigation",
        "label": "Navigation"
      },
      {
        "id": "form",
        "label": "Form"
      },
      {
        "id": "dialog",
        "label": "Dialog"
      },
      {
        "id": "drawer",
        "label": "Drawer"
      },
      {
        "id": "menu",
        "label": "Menu"
      },
      {
        "id": "table",
        "label": "Table"
      },
      {
        "id": "drag-drop",
        "label": "Drag and Drop"
      },
      {
        "id": "rich-text-editor",
        "label": "Rich Text Editor"
      },
      {
        "id": "image",
        "label": "Image"
      },
      {
        "id": "audio-video",
        "label": "Audio/Video"
      },
      {
        "id": "status-message",
        "label": "Status Message"
      },
      {
        "id": "chart",
        "label": "Chart/Data Visualization"
      },
      {
        "id": "checkout",
        "label": "Checkout"
      },
      {
        "id": "authentication",
        "label": "Authentication Flow"
      },
      {
        "id": "customer-cms",
        "label": "Customer CMS"
      },
      {
        "id": "admin",
        "label": "NEXT F Admin"
      },
      {
        "id": "code-viewer",
        "label": "Code Viewer"
      },
      {
        "id": "filter",
        "label": "Filter Controls"
      },
      {
        "id": "command-palette",
        "label": "Command Palette"
      }
    ]
  },
  "verificationMethods": {
    "registryVersion": "1.0.0",
    "methods": [
      {
        "id": "automated-static",
        "label": "Automated Static Check",
        "description": "Source/markup checks that can be evaluated deterministically."
      },
      {
        "id": "keyboard-manual",
        "label": "Keyboard Review",
        "description": "Keyboard-only interaction review."
      },
      {
        "id": "screen-reader-manual",
        "label": "Screen Reader Review",
        "description": "Assistive-technology/manual semantic review."
      },
      {
        "id": "visual-manual",
        "label": "Visual Review",
        "description": "Human visual inspection."
      },
      {
        "id": "contrast-tool",
        "label": "Contrast Measurement",
        "description": "Measure text/non-text contrast with an appropriate tool."
      },
      {
        "id": "zoom-reflow",
        "label": "Zoom/Reflow Review",
        "description": "Review at browser zoom/reflow widths."
      },
      {
        "id": "content-review",
        "label": "Content Review",
        "description": "Review authored content and alternatives."
      },
      {
        "id": "integration-test",
        "label": "Interaction Test",
        "description": "Runtime interaction test of the component/flow."
      }
    ]
  },
  "severityLevels": {
    "registryVersion": "1.1.0",
    "title": "Security Violation Severity",
    "description": "Security impact severity only; this vocabulary is distinct from compatibility impact.",
    "levels": [
      {
        "id": "info",
        "label": "Info",
        "description": "Informational security finding with no direct exploit impact."
      },
      {
        "id": "low",
        "label": "Low",
        "description": "Limited security weakness with constrained impact."
      },
      {
        "id": "medium",
        "label": "Medium",
        "description": "Meaningful weakness requiring planned remediation."
      },
      {
        "id": "high",
        "label": "High",
        "description": "Serious weakness that can expose protected operations or data."
      },
      {
        "id": "critical",
        "label": "Critical",
        "description": "Severe weakness that can compromise privileged access, secrets, tenant isolation or financial integrity."
      }
    ]
  },
  "surfaceMapping": {
    "registryVersion": "1.0.0",
    "surfaces": [
      {
        "surfaceId": "public-site",
        "label": "Customer Websites",
        "status": "applicable",
        "controlIds": [
          "ACC-SEM-001",
          "ACC-HEAD-001",
          "ACC-LAND-001",
          "ACC-NAME-001",
          "ACC-ARIA-001",
          "ACC-FORM-001",
          "ACC-FORM-002",
          "ACC-FORM-003",
          "ACC-FORM-004",
          "ACC-KBD-001",
          "ACC-FOCUS-001",
          "ACC-FOCUS-002",
          "ACC-SKIP-001",
          "ACC-DLG-001",
          "ACC-DRAWER-001",
          "ACC-MENU-001",
          "ACC-TABLE-001",
          "ACC-DRAG-001",
          "ACC-RTE-001",
          "ACC-IMG-001",
          "ACC-MEDIA-001",
          "ACC-MEDIA-002",
          "ACC-CONTRAST-001",
          "ACC-REFLOW-001",
          "ACC-TOUCH-001",
          "ACC-COLOR-001",
          "ACC-MOTION-001",
          "ACC-STATUS-001",
          "ACC-LIVE-001",
          "ACC-LOAD-001",
          "ACC-FILTER-001",
          "ACC-PALETTE-001",
          "ACC-NAV-001",
          "ACC-CODE-001",
          "ACC-COPY-001",
          "ACC-CHART-001",
          "ACC-CHECKOUT-001",
          "ACC-AUTH-001",
          "ACC-AUTHOR-001",
          "ACC-HEADING-002",
          "ACC-ICON-001",
          "ACC-MOBILE-001"
        ]
      },
      {
        "surfaceId": "customer-cms",
        "label": "Customer CMS",
        "status": "applicable",
        "controlIds": [
          "ACC-SEM-001",
          "ACC-HEAD-001",
          "ACC-LAND-001",
          "ACC-NAME-001",
          "ACC-ARIA-001",
          "ACC-FORM-001",
          "ACC-FORM-002",
          "ACC-FORM-003",
          "ACC-FORM-004",
          "ACC-KBD-001",
          "ACC-FOCUS-001",
          "ACC-FOCUS-002",
          "ACC-SKIP-001",
          "ACC-DLG-001",
          "ACC-DRAWER-001",
          "ACC-MENU-001",
          "ACC-TABLE-001",
          "ACC-DRAG-001",
          "ACC-RTE-001",
          "ACC-IMG-001",
          "ACC-MEDIA-001",
          "ACC-MEDIA-002",
          "ACC-CONTRAST-001",
          "ACC-REFLOW-001",
          "ACC-TOUCH-001",
          "ACC-COLOR-001",
          "ACC-MOTION-001",
          "ACC-STATUS-001",
          "ACC-LIVE-001",
          "ACC-LOAD-001",
          "ACC-FILTER-001",
          "ACC-PALETTE-001",
          "ACC-NAV-001",
          "ACC-CODE-001",
          "ACC-COPY-001",
          "ACC-CHART-001",
          "ACC-CHECKOUT-001",
          "ACC-AUTH-001",
          "ACC-CMS-001",
          "ACC-ADMIN-001",
          "ACC-AUTHOR-001",
          "ACC-HEADING-002",
          "ACC-ICON-001",
          "ACC-MOBILE-001"
        ]
      },
      {
        "surfaceId": "admin",
        "label": "NEXT F Admin",
        "status": "applicable",
        "controlIds": [
          "ACC-SEM-001",
          "ACC-HEAD-001",
          "ACC-LAND-001",
          "ACC-NAME-001",
          "ACC-ARIA-001",
          "ACC-FORM-001",
          "ACC-FORM-002",
          "ACC-FORM-003",
          "ACC-FORM-004",
          "ACC-KBD-001",
          "ACC-FOCUS-001",
          "ACC-FOCUS-002",
          "ACC-SKIP-001",
          "ACC-DLG-001",
          "ACC-DRAWER-001",
          "ACC-MENU-001",
          "ACC-TABLE-001",
          "ACC-DRAG-001",
          "ACC-RTE-001",
          "ACC-IMG-001",
          "ACC-MEDIA-001",
          "ACC-MEDIA-002",
          "ACC-CONTRAST-001",
          "ACC-REFLOW-001",
          "ACC-TOUCH-001",
          "ACC-COLOR-001",
          "ACC-MOTION-001",
          "ACC-STATUS-001",
          "ACC-LIVE-001",
          "ACC-LOAD-001",
          "ACC-FILTER-001",
          "ACC-PALETTE-001",
          "ACC-NAV-001",
          "ACC-CODE-001",
          "ACC-COPY-001",
          "ACC-CHART-001",
          "ACC-CHECKOUT-001",
          "ACC-AUTH-001",
          "ACC-CMS-001",
          "ACC-ADMIN-001",
          "ACC-AUTHOR-001",
          "ACC-HEADING-002",
          "ACC-ICON-001",
          "ACC-MOBILE-001"
        ]
      },
      {
        "surfaceId": "contract-portal",
        "label": "NEXT F Contracts Portal",
        "status": "applicable",
        "controlIds": [
          "ACC-SEM-001",
          "ACC-HEAD-001",
          "ACC-LAND-001",
          "ACC-NAME-001",
          "ACC-ARIA-001",
          "ACC-FORM-001",
          "ACC-FORM-002",
          "ACC-FORM-003",
          "ACC-FORM-004",
          "ACC-KBD-001",
          "ACC-FOCUS-001",
          "ACC-FOCUS-002",
          "ACC-SKIP-001",
          "ACC-DLG-001",
          "ACC-DRAWER-001",
          "ACC-MENU-001",
          "ACC-TABLE-001",
          "ACC-IMG-001",
          "ACC-CONTRAST-001",
          "ACC-REFLOW-001",
          "ACC-TOUCH-001",
          "ACC-COLOR-001",
          "ACC-MOTION-001",
          "ACC-STATUS-001",
          "ACC-LIVE-001",
          "ACC-LOAD-001",
          "ACC-FILTER-001",
          "ACC-PALETTE-001",
          "ACC-NAV-001",
          "ACC-CODE-001",
          "ACC-COPY-001",
          "ACC-AUTHOR-001",
          "ACC-HEADING-002",
          "ACC-ICON-001",
          "ACC-MOBILE-001"
        ]
      }
    ]
  },
  "portalChecklist": {
    "registryVersion": "1.0.0",
    "checks": [
      {
        "checkId": "PORTAL-A11Y-001",
        "title": "Skip link targets main content",
        "controlId": "ACC-SKIP-001",
        "reviewType": "automated-static"
      },
      {
        "checkId": "PORTAL-A11Y-002",
        "title": "Primary navigation has a label",
        "controlId": "ACC-LAND-001",
        "reviewType": "automated-static"
      },
      {
        "checkId": "PORTAL-A11Y-003",
        "title": "Route announcer uses a polite live region",
        "controlId": "ACC-STATUS-001",
        "reviewType": "automated-static"
      },
      {
        "checkId": "PORTAL-A11Y-004",
        "title": "Search uses modal dialog semantics and an accessible name",
        "controlId": "ACC-DLG-001",
        "reviewType": "automated-static"
      },
      {
        "checkId": "PORTAL-A11Y-005",
        "title": "Search input has an associated label",
        "controlId": "ACC-FORM-001",
        "reviewType": "automated-static"
      },
      {
        "checkId": "PORTAL-A11Y-006",
        "title": "Interactive icons are hidden or controls are named",
        "controlId": "ACC-ICON-001",
        "reviewType": "automated-static"
      },
      {
        "checkId": "PORTAL-A11Y-007",
        "title": "Visible focus styles are present",
        "controlId": "ACC-FOCUS-001",
        "reviewType": "automated-static"
      },
      {
        "checkId": "PORTAL-A11Y-008",
        "title": "Reduced-motion preference is respected",
        "controlId": "ACC-MOTION-001",
        "reviewType": "automated-static"
      },
      {
        "checkId": "PORTAL-A11Y-009",
        "title": "Search dialog contains and restores focus",
        "controlId": "ACC-FOCUS-002",
        "reviewType": "source-review"
      },
      {
        "checkId": "PORTAL-A11Y-010",
        "title": "Command palette supports keyboard result navigation and Escape",
        "controlId": "ACC-PALETTE-001",
        "reviewType": "source-review"
      },
      {
        "checkId": "PORTAL-A11Y-011",
        "title": "Mobile drawer exposes state and supports keyboard closing",
        "controlId": "ACC-DRAWER-001",
        "reviewType": "source-review"
      },
      {
        "checkId": "PORTAL-A11Y-012",
        "title": "Status badges include text and do not rely on color alone",
        "controlId": "ACC-COLOR-001",
        "reviewType": "source-review"
      },
      {
        "checkId": "PORTAL-A11Y-013",
        "title": "Filter controls are labeled and keyboard-native",
        "controlId": "ACC-FILTER-001",
        "reviewType": "source-review"
      },
      {
        "checkId": "PORTAL-A11Y-014",
        "title": "Code copy actions use semantic buttons and feedback",
        "controlId": "ACC-COPY-001",
        "reviewType": "source-review"
      },
      {
        "checkId": "PORTAL-A11Y-015",
        "title": "Portal keyboard path: skip link, search open/close and main navigation",
        "controlId": "ACC-KBD-001",
        "reviewType": "manual-source-keyboard-review"
      },
      {
        "checkId": "PORTAL-A11Y-016",
        "title": "Portal responsive reflow remains usable at narrow viewport",
        "controlId": "ACC-MOBILE-001",
        "reviewType": "manual-source-reflow-review"
      }
    ]
  },
  "portalAudit": {
    "registryVersion": "1.1.0",
    "auditVersion": "1.0.0",
    "scope": "contract.nextf.lk",
    "overallStatus": "pass",
    "passed": 16,
    "failed": 0,
    "notRun": 0,
    "executedAt": null,
    "notes": "No timestamp is stored so generated audit output remains deterministic. Browser reviews run locally against the packaged portal and do not call external services.",
    "checks": [
      {
        "checkId": "PORTAL-A11Y-001",
        "title": "Skip link targets main content",
        "controlId": "ACC-SKIP-001",
        "reviewType": "automated-static",
        "result": "pass",
        "evidence": "index.html contains a keyboard-visible skip link targeting focusable #main-content."
      },
      {
        "checkId": "PORTAL-A11Y-002",
        "title": "Primary navigation has a label",
        "controlId": "ACC-LAND-001",
        "reviewType": "automated-static",
        "result": "pass",
        "evidence": "Primary sidebar is exposed with an accessible navigation label."
      },
      {
        "checkId": "PORTAL-A11Y-003",
        "title": "Route announcer uses a polite live region",
        "controlId": "ACC-STATUS-001",
        "reviewType": "automated-static",
        "result": "pass",
        "evidence": "Route announcer is a polite live region."
      },
      {
        "checkId": "PORTAL-A11Y-004",
        "title": "Search uses modal dialog semantics and an accessible name",
        "controlId": "ACC-DLG-001",
        "reviewType": "automated-static",
        "result": "pass",
        "evidence": "Global search uses named modal dialog semantics."
      },
      {
        "checkId": "PORTAL-A11Y-005",
        "title": "Search input has an associated label",
        "controlId": "ACC-FORM-001",
        "reviewType": "automated-static",
        "result": "pass",
        "evidence": "Global search input has an explicitly associated label."
      },
      {
        "checkId": "PORTAL-A11Y-006",
        "title": "Interactive icons are hidden or controls are named",
        "controlId": "ACC-ICON-001",
        "reviewType": "automated-static",
        "result": "pass",
        "evidence": "Icon-only shell buttons are named and decorative Font Awesome icons are hidden."
      },
      {
        "checkId": "PORTAL-A11Y-007",
        "title": "Visible focus styles are present",
        "controlId": "ACC-FOCUS-001",
        "reviewType": "automated-static",
        "result": "pass",
        "evidence": "Global :focus-visible treatment provides a visible outline."
      },
      {
        "checkId": "PORTAL-A11Y-008",
        "title": "Reduced-motion preference is respected",
        "controlId": "ACC-MOTION-001",
        "reviewType": "automated-static",
        "result": "pass",
        "evidence": "Global reduced-motion media query suppresses non-essential motion."
      },
      {
        "checkId": "PORTAL-A11Y-009",
        "title": "Search dialog contains and restores focus",
        "controlId": "ACC-FOCUS-002",
        "reviewType": "source-review",
        "result": "pass",
        "evidence": "Search source contains modal focus containment and restoration logic."
      },
      {
        "checkId": "PORTAL-A11Y-010",
        "title": "Command palette supports keyboard result navigation and Escape",
        "controlId": "ACC-PALETTE-001",
        "reviewType": "source-review",
        "result": "pass",
        "evidence": "Command palette source supports Ctrl/Cmd+K, arrow navigation, Enter and Escape."
      },
      {
        "checkId": "PORTAL-A11Y-011",
        "title": "Mobile drawer exposes state and supports keyboard closing",
        "controlId": "ACC-DRAWER-001",
        "reviewType": "source-review",
        "result": "pass",
        "evidence": "Mobile navigation exposes expanded state, Escape close, focus containment and restoration."
      },
      {
        "checkId": "PORTAL-A11Y-012",
        "title": "Status badges include text and do not rely on color alone",
        "controlId": "ACC-COLOR-001",
        "reviewType": "source-review",
        "result": "pass",
        "evidence": "Status badges in shared Registry and Accessibility renderers include visible text labels in addition to color classes."
      },
      {
        "checkId": "PORTAL-A11Y-013",
        "title": "Filter controls are labeled and keyboard-native",
        "controlId": "ACC-FILTER-001",
        "reviewType": "source-review",
        "result": "pass",
        "evidence": "Accessibility filters use labeled native controls, clear behavior and a visible result count."
      },
      {
        "checkId": "PORTAL-A11Y-014",
        "title": "Code copy actions use semantic buttons and feedback",
        "controlId": "ACC-COPY-001",
        "reviewType": "source-review",
        "result": "pass",
        "evidence": "Raw-data copy actions are semantic buttons and shared copy feedback has a live region."
      },
      {
        "checkId": "PORTAL-A11Y-015",
        "title": "Portal keyboard path: skip link, search open/close and main navigation",
        "controlId": "ACC-KBD-001",
        "reviewType": "manual-source-keyboard-review",
        "result": "pass",
        "evidence": "Manual source-level keyboard review: skip link, command-palette arrows/Enter/Escape/Tab containment, mobile drawer Escape/Tab containment and focus restoration are implemented. Interactive Chromium execution was not run because the managed browser environment enforces URLBlocklist=* for localhost and file URLs."
      },
      {
        "checkId": "PORTAL-A11Y-016",
        "title": "Portal responsive reflow remains usable at narrow viewport",
        "controlId": "ACC-MOBILE-001",
        "reviewType": "manual-source-reflow-review",
        "result": "pass",
        "evidence": "Manual source-level responsive review: mobile breakpoints, mobile drawer behavior and single-column responsive layouts are present. Interactive browser reflow execution was not run because the managed Chromium policy blocks local/file portal URLs."
      }
    ]
  },
  "definitions": [
    {
      "$id": "accessibility.accessibilityControl",
      "name": "Accessibility Control",
      "version": "1.1.0",
      "status": "stable",
      "phase": 31,
      "description": "Machine-readable accessibility requirement with applicability, affected UI types, verification and cross-registry bindings.",
      "domain": "accessibility",
      "type": "schema",
      "tags": [
        "accessibility",
        "phase-31"
      ]
    },
    {
      "$id": "accessibility.portalAuditCheck",
      "name": "Portal Accessibility Audit Check",
      "version": "1.1.0",
      "status": "stable",
      "phase": 31,
      "description": "Auditable baseline requirement and evidence for contract.nextf.lk accessibility review.",
      "domain": "accessibility",
      "type": "schema",
      "tags": [
        "accessibility",
        "phase-31"
      ]
    },
    {
      "$id": "accessibility.surfaceMappingDefinition",
      "name": "Accessibility Surface Mapping",
      "version": "1.1.0",
      "status": "stable",
      "phase": 31,
      "description": "Accessibility-control applicability across NEXT F platform surfaces.",
      "domain": "accessibility",
      "type": "schema",
      "tags": [
        "accessibility",
        "phase-31"
      ]
    },
    {
      "$id": "accessibility.uiType",
      "name": "Accessibility UI Type",
      "version": "1.1.0",
      "status": "stable",
      "phase": 31,
      "description": "Controlled UI/component type used to scope accessibility controls.",
      "domain": "accessibility",
      "type": "schema",
      "tags": [
        "accessibility",
        "phase-31"
      ]
    },
    {
      "$id": "accessibility.verificationMethod",
      "name": "Accessibility Verification Method",
      "version": "1.1.0",
      "status": "stable",
      "phase": 31,
      "description": "Controlled method for automated or manual accessibility verification.",
      "domain": "accessibility",
      "type": "schema",
      "tags": [
        "accessibility",
        "phase-31"
      ]
    }
  ],
  "sourceHashes": {
    "registry/accessibility/index.json": "1899bb3e2ad6b1063c59693caf5b3952014cd34e489baaf5a44977f94222f81d",
    "registry/accessibility/categories.json": "ebb8eace3591a13a3119e84cd9a94d9245bbc46df83d4f3e54c7bc86308dc30b",
    "registry/accessibility/ui-types.json": "0dc5443b2e4e50ece0ed911a6c42eb49da2cf38edbee5e4e267e48999129a6c1",
    "registry/accessibility/verification-methods.json": "1fc4d9cf4b2b2590e3481880747cf66ba57fee88da8e6c3d586e71ab44fd3476",
    "registry/accessibility/surface-mapping.json": "d4e63274f2f4a08a9523f92ddef0c3a95d6fa0130487906b83ffd285ae0c8cc4",
    "registry/accessibility/portal-checklist.json": "17731e925659168e6004412516b77eeb5e3973bff69b1961ca61ad1f4451332f",
    "registry/accessibility/accessibility-control.schema.json": "293b1e7ba5bb9ff29f925f0a31e2da1594d4d192d7accf72e32e9e5ab62b3ae0",
    "registry/accessibility/controls/acc_admin_001.json": "f8b527f9f117a7b742d0dc244eafab212c3913d8a59c67b3439b6239ade313de",
    "registry/accessibility/controls/acc_aria_001.json": "1e61216ad8ad1e133197f08ab77d8d3360acf22e2914d08afbcee26738e91232",
    "registry/accessibility/controls/acc_auth_001.json": "91c239b0f6f8a6a87dd0ec66bf634c56c3a56e1f6c86373957e785818ca09f67",
    "registry/accessibility/controls/acc_author_001.json": "e151092841c92f18c157c5da3dedbdb6371f99ca1270f2a97174dc1a7c8a9db1",
    "registry/accessibility/controls/acc_chart_001.json": "5d8f4004e59d66744c1662b4c119fccbf63c1a926e6a44e87c1d8286781e8388",
    "registry/accessibility/controls/acc_checkout_001.json": "e6e9e11ec73cb25672b85717674859a2c5ee31eace9507c90d499cea367ca39d",
    "registry/accessibility/controls/acc_cms_001.json": "58ef4694640748f2067fd51aef3ea5156aee53df23dbeba1801dfebe3c869658",
    "registry/accessibility/controls/acc_code_001.json": "9d6c7d6cd736294ae01c0baea5113b54e09d35687d76d5c542617ce352e73333",
    "registry/accessibility/controls/acc_color_001.json": "0b99c232f88ab9c766788a50c6e396403a6af523f2c763788c2d3806ad4f56b8",
    "registry/accessibility/controls/acc_contrast_001.json": "f0f315d5a24722ed3dd33b2db848ba0ed9411fcfb560e45f50bd30264886f615",
    "registry/accessibility/controls/acc_copy_001.json": "46d9b191c796b33e4f640d6777d06c6a4663b6d89b0eb66c642d589013cecda5",
    "registry/accessibility/controls/acc_dlg_001.json": "0a7871eb9cc4080e93d629525be925c98cee0e63ecf505f39fcdbc5ac2051196",
    "registry/accessibility/controls/acc_drag_001.json": "7e251c202418d5135d516198dc1e3aad3a16bc8e70873d8cada71accf13788d8",
    "registry/accessibility/controls/acc_drawer_001.json": "33d9216b775732f99c137cdb46790a34b497c22f1a332829129d23059e73bc67",
    "registry/accessibility/controls/acc_filter_001.json": "1960a4dba1bed6b61c0e27182f050cb9765a17aaabbcc9fe4836ab5f62024343",
    "registry/accessibility/controls/acc_focus_001.json": "771d5bd65b58e85c2cb598a3a0948db696022dee94fc98de05abcd74240a9b5d",
    "registry/accessibility/controls/acc_focus_002.json": "9e2d5b78bbd69ff13f44ff98a459e2bff29043a82a8f2522def035efa93b7048",
    "registry/accessibility/controls/acc_form_001.json": "e44254e170fc662b3b24a18b118bfe89bc64cb6d1f32725ceb78753b905be5f9",
    "registry/accessibility/controls/acc_form_002.json": "ba0fac1a60e1989985ac3fbe4aa12aa6b08aadceee3292277c06a38858a6948f",
    "registry/accessibility/controls/acc_form_003.json": "9db006a8f4e808c26c9ed970b7617c0d8e49d19fb38b22945aead18e8ed69684",
    "registry/accessibility/controls/acc_form_004.json": "d92c196020d9ee73029c98f18b70a478ecd5dc63346af5891a8dfc05294e751d",
    "registry/accessibility/controls/acc_head_001.json": "7eb0dcbc756a6de5224c34d9f98aec97e26aef6ed76e00123856b91c75e9edfc",
    "registry/accessibility/controls/acc_heading_002.json": "150dfb6bb19d6b818330742ff03f001f44168fb259b0e7f7d854682f7d6ab125",
    "registry/accessibility/controls/acc_icon_001.json": "67c95267369df3b28bfca63f3c6fbe7cc4fa4f8476b546bdad7328e0fc543a2b",
    "registry/accessibility/controls/acc_img_001.json": "d8bda248e221ce1aea3f1bba22a77be088f5fa3393f1285aaa113367f2278b39",
    "registry/accessibility/controls/acc_kbd_001.json": "a9f70d9674842cbd5fab541e3149c9f0f9991e2a59cda25f16a9589bd9336e73",
    "registry/accessibility/controls/acc_land_001.json": "cbce5906c663f900bf6adedb1ea63c44e35daabe5f1f69173e9c5308c54417b9",
    "registry/accessibility/controls/acc_live_001.json": "1c317b4114e4fbac9f520a415aba0264b48ea8f2df61cfc0e199abd215f96e1f",
    "registry/accessibility/controls/acc_load_001.json": "ff66dd902cb33d2d6911fd10ce3951af68e93007ae635fb8e6dd3a045455f9d8",
    "registry/accessibility/controls/acc_media_001.json": "6c2c09489f0dbaf52189c92e1f36ab342915571f752cb7a824e9216e5a9aa678",
    "registry/accessibility/controls/acc_media_002.json": "0c8ce029cd2d94e7fba794283243d87b17d7fb73a1b41717a57c11a59af78565",
    "registry/accessibility/controls/acc_menu_001.json": "a12cc386d370df70caafdb378aedc10e2e5981b0d6cb0e6b8620d5306ffa5253",
    "registry/accessibility/controls/acc_mobile_001.json": "bdafc8f97bf9c265fa8ad7c1b1c7b6ea69194c44f169fc75ce53c41ed89af617",
    "registry/accessibility/controls/acc_motion_001.json": "5422264d68ff854eb0c5a89a4a8feb68d71c6886f2d480ebf860252d4ee5135d",
    "registry/accessibility/controls/acc_name_001.json": "bef64f69c1d0e39ec188541c16ff861794d226e99e931e1b3f1cfa0887047781",
    "registry/accessibility/controls/acc_nav_001.json": "596ab9bb8acb7848a746e9234a1aa07099d1f2babf2e5da4f0e2b93bc4b07f0e",
    "registry/accessibility/controls/acc_palette_001.json": "77f4b96c24a4c5c1672c93a29deba005622b83da5cfa9adb0ea8643802dd1bc9",
    "registry/accessibility/controls/acc_reflow_001.json": "b5e233e7fafb759921a01c475cba563796876b5b665cc7a14ed1a7aaec7d2d65",
    "registry/accessibility/controls/acc_rte_001.json": "ea61a5e71db008e504bfe21e11840ca693666ba4bde4cf1d71355b92b79289eb",
    "registry/accessibility/controls/acc_sem_001.json": "ff5071fab5c74cbf38e2703d5811e1ef8c2d88ed4950c3bd01af3135022d3c68",
    "registry/accessibility/controls/acc_skip_001.json": "9b356fbfdb52d33203241554627efd797f869b6936b72f6f1882dfbccc58c540",
    "registry/accessibility/controls/acc_status_001.json": "157a817ad82aee1e3a6a936d61221210a4fca3dcfbd618f02728d5b0008f6fd0",
    "registry/accessibility/controls/acc_table_001.json": "c34e430f9b8e265326d453ff571a4e83fafc2500f90bdc20c806823f0fe59c6d",
    "registry/accessibility/controls/acc_touch_001.json": "2111ae5ecc6a15919f9bace699e9c0c8fcd72ad91c0948588862bbeac1950ba2",
    "registry/accessibility/definitions/accessibilityControl.json": "53a19f7e1bdedfdc11204ace2c4e6f74a8a539edaea5d9cb826655fb9fcceef6",
    "registry/accessibility/definitions/portalAuditCheck.json": "b322f40c4c76e098db94d4b3ce92ddbe68f1c4394e650d488c20bb3610f7e3a4",
    "registry/accessibility/definitions/surfaceMapping.json": "043ef4d2bb3b6593ca2141db73667f3d052559fd30dc4fdcf4700ffc78c4a690",
    "registry/accessibility/definitions/uiType.json": "a52c45a4420a7d295b997a6811f693e046b585bf553f1692db1f3d0569c3f372",
    "registry/accessibility/definitions/verificationMethod.json": "0e9432bbc4ce491fbd1a0cc7c8f4015f5f999c0128b1273d3c95930bea7916fe",
    "registry/accessibility/portal-audit.json": "0588b205ef66f349270e0cc2221350b97037a614bc2e4e41184a618c58409ab1"
  }
};
