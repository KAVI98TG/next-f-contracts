// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/accessibility/*
export const GENERATED_ACCESSIBILITY = {
  "registryVersion": "1.2.0",
  "index": {
    "registryVersion": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
        "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_touch_001.json"
    }
  ],
  "categories": {
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
    "registryVersion": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
      "version": "1.2.0",
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
    "registry/accessibility/index.json": "b8225715871fb5837e8582a3f5c3c1e09b35d5499bb62105e6cf90e20ae8fbd6",
    "registry/accessibility/categories.json": "18877a5ca9a7ee3eae24e87e4dcfcf1a3c0cc508b7248e9f043cb76fdbfc7012",
    "registry/accessibility/ui-types.json": "78cf762daac002ec3e47a36a9effd2a8826e456fa8dae593dd2f65ee41af1cfa",
    "registry/accessibility/verification-methods.json": "f50819f6dec5225635b4e245da3a31070a0568d3d8f6070d5b6dbe83ec581736",
    "registry/accessibility/surface-mapping.json": "9527c2c0e6dca608db8d87ca6c192893f52b111808387438fa9b4bb5449a470b",
    "registry/accessibility/portal-checklist.json": "4dcc0151e33b5572303974e2b9d3abbd020075e88d358318456a2a83c3a5bb26",
    "registry/accessibility/accessibility-control.schema.json": "293b1e7ba5bb9ff29f925f0a31e2da1594d4d192d7accf72e32e9e5ab62b3ae0",
    "registry/accessibility/controls/acc_admin_001.json": "9edd1901c2abcb0cac6e94cfad4105dccf02a92ce49c136aec7538cb07de81ad",
    "registry/accessibility/controls/acc_aria_001.json": "15e6d7a378c9ecb9f75ca92cb23cef0bbd3deff670cd47b076c13c11f3675a31",
    "registry/accessibility/controls/acc_auth_001.json": "624b319af4a47fa83eb9cc48af22a2f85161ad155595f1d60981076085694daa",
    "registry/accessibility/controls/acc_author_001.json": "585f4873133caad9ad383fa92ed964353a4b9c0dfc41614a58b5b6aa0d0f36da",
    "registry/accessibility/controls/acc_chart_001.json": "e7917b2e2749be521dbb97ddc44841fa6cb0dc0e9699a34970f6cde662480485",
    "registry/accessibility/controls/acc_checkout_001.json": "788b7abaf431a03c932b34886a5b1c08d12ea10ba6958bad9b54a9651e37d959",
    "registry/accessibility/controls/acc_cms_001.json": "132a38e5c5bb3da1ef97e39ceb1c674d8bd268431114fe199d6a6363da445223",
    "registry/accessibility/controls/acc_code_001.json": "70c9da75b91fcb6ec8bc8b056ad519129de2007b616e94428c8beab03952f728",
    "registry/accessibility/controls/acc_color_001.json": "065411b30ef417e62e6b732f20955e07b490c10daeb43c43a4c2bb9a34171122",
    "registry/accessibility/controls/acc_contrast_001.json": "0e864b86ff73e9d69c846a4cbfebf496827bc2b47f8567d9b3ded893f6df03d0",
    "registry/accessibility/controls/acc_copy_001.json": "2daad92aa56cfd33a49be7102522962b93a1d3dd47fb5e4560e8befeaf6b48c4",
    "registry/accessibility/controls/acc_dlg_001.json": "7db4d21dab72307edb81f5977fa86d21c98af5bf403a9304abd4053787fd3afe",
    "registry/accessibility/controls/acc_drag_001.json": "2f867997809c1b8b75ea70c0301f5785a6033a36e3db3aac9df307d7688e8f3a",
    "registry/accessibility/controls/acc_drawer_001.json": "fbf2fb15ae8ae10e5a74a4065b114509cfad5bc76fc9480903284ffa123979ee",
    "registry/accessibility/controls/acc_filter_001.json": "2efdb4de2453408d699cb55898db177367ad96217e854adee69614de1059461d",
    "registry/accessibility/controls/acc_focus_001.json": "8822d13f187cd58e8f2d029d9f603a2e5c5d21e85135e445175a289df42fdd79",
    "registry/accessibility/controls/acc_focus_002.json": "d81bfcb3ed04ba75f3ec893c4f0a004b483b2cedc4ef2484cd7793757c03bafb",
    "registry/accessibility/controls/acc_form_001.json": "6a53748f8049ffa148a9c7a6665cdfaabf01283ce0ea1e362cfdb3731d419443",
    "registry/accessibility/controls/acc_form_002.json": "691fc9e720518c04a83289635bb137a24c7947ad37a640bd1f237acface39cdb",
    "registry/accessibility/controls/acc_form_003.json": "9206cb926872c22f252a92598a9075b4f99daae3c86508fff748d2be62f08568",
    "registry/accessibility/controls/acc_form_004.json": "ff76e40052e091fac3123bd9da483f342fbfd85b98b2b29727014c726036f0a5",
    "registry/accessibility/controls/acc_head_001.json": "4b7c1c12f2191db80ca81ad8e1fd760bd89fe64dda31ef1da96f2acfc6a221c9",
    "registry/accessibility/controls/acc_heading_002.json": "ea0cd97f3ceb47ef4e1807fe639e2448c63aec194e17a17d6cee166c4c363707",
    "registry/accessibility/controls/acc_icon_001.json": "8d93f806abc5f87f33bc2460efd0439829ccb82dac9c18244be1b058bd955ce7",
    "registry/accessibility/controls/acc_img_001.json": "ad861d19d65c6636d7d1e4c32d4a6190f4adf3f9deb6b8b75a6a497277b62d9f",
    "registry/accessibility/controls/acc_kbd_001.json": "0d8fb30353f31b0b6a60ec5de69f1390bea7b13477c803cbadbb5e256d39c66c",
    "registry/accessibility/controls/acc_land_001.json": "85e97aa40c52b90a717ba95d10720e36edad4f554cdf1810a97e9618897ae45a",
    "registry/accessibility/controls/acc_live_001.json": "ab1376bb85258d72ebdce6d41085e6ad8e07640d945f15af23f2e37620b620a1",
    "registry/accessibility/controls/acc_load_001.json": "3ad148b9336affad53585bd8893d86958429ec6574a274715888951c8ff01980",
    "registry/accessibility/controls/acc_media_001.json": "a62713619f32e2df6bf399dcba71a2b8538db9a5a23bbfd3ad89c630bd8ab60e",
    "registry/accessibility/controls/acc_media_002.json": "9a7734406a1488563513441c7b0ac0fa0eba6e6fe8be02a5ffd04600a2b15224",
    "registry/accessibility/controls/acc_menu_001.json": "1dc590ec25d5e826aaeb88f552615037d6cdc63c8bb7dc09339c626ae59be533",
    "registry/accessibility/controls/acc_mobile_001.json": "c0705bdc2e2547182077be41639790eefb48197b5b7954c30bb51ac071caa296",
    "registry/accessibility/controls/acc_motion_001.json": "68a7ef22458e6afb533012ca40e7158f843f8a8ed7abe3c0cea65ec84079604f",
    "registry/accessibility/controls/acc_name_001.json": "98bf9be5271c56a6f1e3983b3437e2fa3b07b827fb75d6c8b9fd8d61f4f50082",
    "registry/accessibility/controls/acc_nav_001.json": "3d882b89b20c88b61c1b11f9bc733c28eaf2b9634558c8fc7837e73a79975b0b",
    "registry/accessibility/controls/acc_palette_001.json": "cd3b30814cad21d24e82b6e36cc3d93b980d4a9f0adc9a52f1e72f99c4abdec3",
    "registry/accessibility/controls/acc_reflow_001.json": "3778368e98da0e4fcac649f070858186305adf05be7465e59cb4c946f1d6758e",
    "registry/accessibility/controls/acc_rte_001.json": "34771287e75ee78650b1f86141698a53f1cf939825634ed794d1db4d543b6a68",
    "registry/accessibility/controls/acc_sem_001.json": "b646fa4b1ce4be42ea44c5da825564f2d2c6c4b5af21f9e8f985a114862ec4b9",
    "registry/accessibility/controls/acc_skip_001.json": "07d47aa6f1e1fb2fb6ec55c5544e8a0f5fe1be266e7baef887eb420639408634",
    "registry/accessibility/controls/acc_status_001.json": "62d342d2c8cda933d92feb23658a9a9068a1f92e63abce5a29c41d53e3e117fe",
    "registry/accessibility/controls/acc_table_001.json": "ba7dd6a36f412b2d171f49da5a21680d0dc5399cf746020185961f45d21c6860",
    "registry/accessibility/controls/acc_touch_001.json": "a5a65c07e3cce5d501df3511e4b705718c6a29cb302c0f09a3b1ca2c70ae024b",
    "registry/accessibility/definitions/accessibilityControl.json": "38cd8781c76185feb2a8337326dceca7da439b3cdc0717e7fded98b408e29d24",
    "registry/accessibility/definitions/portalAuditCheck.json": "1eb89b64a951d85429314ffb3e375e996a523d93d701cedc0b7d0143d0fffdb8",
    "registry/accessibility/definitions/surfaceMapping.json": "d1579dc9d47d41f285581eb59f353eba5866f54d6d3e42715d3d95f3c80a644d",
    "registry/accessibility/definitions/uiType.json": "8c61839efe293df3587e107ce114bc895fb6d0930ac66066b28e9cf191fa6cfd",
    "registry/accessibility/definitions/verificationMethod.json": "544f4ce110359dcb71217633624e0c54e7e13b94b407d69fa6acf5a56c6fb73a",
    "registry/accessibility/portal-audit.json": "9f3660d1c5c44fda946011134e591fc096923f86d0f3ca2d72d16b62b5eae74b"
  }
};
