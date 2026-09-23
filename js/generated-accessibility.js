// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/accessibility/*
export const GENERATED_ACCESSIBILITY = {
  "registryVersion": "1.4.0",
  "index": {
    "registryVersion": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
        "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_touch_001.json"
    }
  ],
  "categories": {
    "registryVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
    "registryVersion": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
      "version": "1.4.0",
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
    "registry/accessibility/index.json": "e3c3a58704bb17aaa5c8eadd709369af385fe5fc67e5531938c6401b4685a1e5",
    "registry/accessibility/categories.json": "110d06c99cb8b1d197ec353d25b228febf4fbc83b0bdbb26589a7a253044c24c",
    "registry/accessibility/ui-types.json": "edf0727ff447e0abddfa688148e2952c3c3ea76bff836f65643d4fdf1c40b6fd",
    "registry/accessibility/verification-methods.json": "8e11ffd101d1908b81e8ca520b5208630b3a94e5c2bcf5c8abfebdb96a28686e",
    "registry/accessibility/surface-mapping.json": "53d3c8fa265834321f9e990fe9356280f6d93f0a37dc05c7385ae79470fbf8a2",
    "registry/accessibility/portal-checklist.json": "1c367c3565f72b9adb81f731e28b6b35d3a514fda550b04a82838b0ab307c580",
    "registry/accessibility/accessibility-control.schema.json": "f365ae35df659bd98f1570a22a9586f691880ed15cbd7ef412f251ad6a811c2e",
    "registry/accessibility/controls/acc_admin_001.json": "6c11f3758bc35308ddac3a945f7ebd0c92daf4f55d1f1a46ff74f5962bc8a144",
    "registry/accessibility/controls/acc_aria_001.json": "b878ac013515ea2459584bf40f684f62f49acf0ec911361427def7fce4021306",
    "registry/accessibility/controls/acc_auth_001.json": "7ea0511d98b78eba637fb6c9b34668efe720cf9d90667157cb288f64aee5f0f5",
    "registry/accessibility/controls/acc_author_001.json": "5ecfb93c7895599328a24fe645cd30b86bd844dae2c5533c01f6f20becbff7b4",
    "registry/accessibility/controls/acc_chart_001.json": "f8171a2b33b39089b0a91ea137af781788605a1b64ad184779f96abdb5097e7d",
    "registry/accessibility/controls/acc_checkout_001.json": "974383a075c79d5d4592cc60a03812156373d742a7ee36d0f55b5b35942606b1",
    "registry/accessibility/controls/acc_cms_001.json": "7f24ac2e012786bb26fdb78f008a144f1b52b0f0ecba477927678b91731ebb4b",
    "registry/accessibility/controls/acc_code_001.json": "457e1f087f54ff7dfcfad757dcb540bc531bc6cc49e77fc69cfcd189d8881beb",
    "registry/accessibility/controls/acc_color_001.json": "f2f7ea9383f458e19e79fa221c66c72bfb388a949d763a0f2024b5e0b82acf78",
    "registry/accessibility/controls/acc_contrast_001.json": "1e78285fb55c86297ad0586afd6efd1c2a7aae61dcbb394ba49b2a4b44016f35",
    "registry/accessibility/controls/acc_copy_001.json": "10c53334f06374daaf18bd475806eab33e0ded494489f9b9575e4eb144e44261",
    "registry/accessibility/controls/acc_dlg_001.json": "9561e06b012bc0916a948c6d9651481c046a0e31ddca3f86bc210f5b51582f95",
    "registry/accessibility/controls/acc_drag_001.json": "4d2d7640bebff0ee97eeba4821aac3352cd38f3bb90bcd6be8517721e74fe266",
    "registry/accessibility/controls/acc_drawer_001.json": "cb8a48e6dd2103d266595fe72dbfc649505e1981a893bf9ef94a5237daa47bc0",
    "registry/accessibility/controls/acc_filter_001.json": "aa70f9e36b0699cdca333aadd52ca1c9d043d8654fc4f598c0bd1887a64cf04a",
    "registry/accessibility/controls/acc_focus_001.json": "19d0cb737ae28447b04230521315ba0f9532e575cb31064703dd83a2c0226fe4",
    "registry/accessibility/controls/acc_focus_002.json": "01e1246279b76252b141896631b35d922aafa221521e4ccbdfddbfcdcac8080e",
    "registry/accessibility/controls/acc_form_001.json": "5ff8bdf6268862db34a2e3edb4d905646a6ef691bd8a26462db4a487dd57b6a9",
    "registry/accessibility/controls/acc_form_002.json": "e4068cce9ae250c28842c7360297ff9e78a75e581d51ad121a1afc5d8a43a330",
    "registry/accessibility/controls/acc_form_003.json": "1f13253190364ac8c7d8c21b4d742e5928548253419089b1992d9b348e1465f6",
    "registry/accessibility/controls/acc_form_004.json": "4b3cc388e0f101f3c779bbc7cab5ac7c46df8aa187d2f6cce7f7d34f6e366f5e",
    "registry/accessibility/controls/acc_head_001.json": "2c603637ec9e82a59d5008afbbe4e8bf67738f23d161e3a9be55246eabbabc71",
    "registry/accessibility/controls/acc_heading_002.json": "4d71d4b10c4b5ecc6334f6d85f54e168979f210a33d2f86be3089a64d46c8b69",
    "registry/accessibility/controls/acc_icon_001.json": "66be416c2c3cbca282fca9128b8fe98a75a2b5275e537ca50d94a56270469046",
    "registry/accessibility/controls/acc_img_001.json": "ef960f24f21ce74683a88ae08878dd144e05a76349844c6b74e493a0c99a3728",
    "registry/accessibility/controls/acc_kbd_001.json": "28e0cf54b10fea64a8302d52e47340e68d501ce9264ca78313cc20b36053ef11",
    "registry/accessibility/controls/acc_land_001.json": "2c9b4c5b2e9b8d835a530e6d38fc9ab3ad6a97697599cd918765b451c60616af",
    "registry/accessibility/controls/acc_live_001.json": "88c0365acb60ad5274255b511d7e731ae9d43a7830a7ac5205086c5c05dbdfc4",
    "registry/accessibility/controls/acc_load_001.json": "30281bff4c986bcc98a8a270292545d2f76d7a18740d73c48e319e19f142b6d1",
    "registry/accessibility/controls/acc_media_001.json": "376a237c644105255e6da2599426f260648da5f05bf58e0f46eaae3f1fa3e3e5",
    "registry/accessibility/controls/acc_media_002.json": "89af6f4ebc37f56ad108ca3ec8d6e26a4736c0c15acee1b59e34b027f9c8c12a",
    "registry/accessibility/controls/acc_menu_001.json": "9c102c8a1a3b0ee5d5ddac52e8519aa17c3c84f8cda6a1d57eab90c03f9634fc",
    "registry/accessibility/controls/acc_mobile_001.json": "a8eae13e3713bb7414830d9a539b920156844318a7e181b679c2c86466710e2a",
    "registry/accessibility/controls/acc_motion_001.json": "b8f495609c1bce22417637f52f4abbe0684c84bff8dced7fab1cf6029ab49a7e",
    "registry/accessibility/controls/acc_name_001.json": "753e489ddbe3af31e4df0998ccd8a8b9c8236f64a857befe8ab7212bdb4164cd",
    "registry/accessibility/controls/acc_nav_001.json": "226611b943913e9a5ce1f1ed37fb0a4691d890a243561d6efafebbb385621cc2",
    "registry/accessibility/controls/acc_palette_001.json": "8f5f5622a26b42b491eea3aab4a078c8518b96e619e8e23fc238d30ec6dc25ae",
    "registry/accessibility/controls/acc_reflow_001.json": "8ae8dba6ff611baf7bd2cefbfea050ccbac2dd0f7120406b348516e80a45062e",
    "registry/accessibility/controls/acc_rte_001.json": "df74ddc8293c2b5e633cdd9e2ff9737d0be79924b7f7eb572b3397292a37e3d8",
    "registry/accessibility/controls/acc_sem_001.json": "b3af1e8b9291848323458cb105592fb13bd527b9d96169f7a9033fa031014ade",
    "registry/accessibility/controls/acc_skip_001.json": "9db9d92e6e7c37e92efd61f13a4be5b1593de91faee02ee9b5d6391030ed7b23",
    "registry/accessibility/controls/acc_status_001.json": "8b2293fc1bee2643b6d32f84b730ebb0010cc84e809f91f1f01d65ab9cc0a7c5",
    "registry/accessibility/controls/acc_table_001.json": "3135bdc654e7d24f85fa166acd08882e72ef6f936199645a8979a202d0f3665e",
    "registry/accessibility/controls/acc_touch_001.json": "3a78656d1f28268c935e6da84793bc15621e8c9fcf169539d22639cc440ed233",
    "registry/accessibility/definitions/accessibilityControl.json": "36fa9f944064ca2983cb699bcccb319a6e27d6e5b4a905d0248c914d2982d923",
    "registry/accessibility/definitions/portalAuditCheck.json": "bcf0c4e3b6275076ca8b4572cf973faaa9f7d08999873875fe1a9ba96b1f9884",
    "registry/accessibility/definitions/surfaceMapping.json": "054735ea2b3c36f0ed8fde3e295b2b89fe0bdf6c7fd8df837c5213aeea54854f",
    "registry/accessibility/definitions/uiType.json": "5b53f9f75f7493ccf15594580fba6dbddc4cbdefa32a74094411a7937e58ec6d",
    "registry/accessibility/definitions/verificationMethod.json": "5381eb40c05ba7a1025619326af4155481f032f5eee656d37df7cf5838a27af8",
    "registry/accessibility/portal-audit.json": "fb6ad0a290bd53be3b778836d63888f01fe8cfb79c2885e7c710241240fe60f4"
  }
};
