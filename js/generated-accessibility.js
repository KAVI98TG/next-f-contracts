// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/accessibility/*
export const GENERATED_ACCESSIBILITY = {
  "registryVersion": "1.3.0",
  "index": {
    "registryVersion": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
        "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
      "status": "stable",
      "phase": 31,
      "sourceReference": "registry/accessibility/controls/acc_touch_001.json"
    }
  ],
  "categories": {
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
    "registryVersion": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
      "version": "1.3.0",
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
    "registry/accessibility/index.json": "e454ea0e976f3511498890cbc519027ec9374a2c255104b851dcc38506169540",
    "registry/accessibility/categories.json": "791383987a9fbdcc53921c31b17ef2bd4125c8fb4bf163acf431867cd246ae08",
    "registry/accessibility/ui-types.json": "058e60ff1f7b51b44df2b47534fc8da420edf992a89e08b108ba0b2b8327eeeb",
    "registry/accessibility/verification-methods.json": "09011282362631767834a4836d058402c4982ce043fc987025103e9666865f29",
    "registry/accessibility/surface-mapping.json": "4ac164753987e84d2f6485f3425221a97cc91480bf5758c33479513a73ddd67a",
    "registry/accessibility/portal-checklist.json": "994f89f4f5780cb554d30f3e6e96940f4e854bad8e3f072fcd6670da29a4e692",
    "registry/accessibility/accessibility-control.schema.json": "f365ae35df659bd98f1570a22a9586f691880ed15cbd7ef412f251ad6a811c2e",
    "registry/accessibility/controls/acc_admin_001.json": "c1b5114f0b56b1c2dbf8220bfc733c0937b54bd0a21ce1468a55bd072a66eb6d",
    "registry/accessibility/controls/acc_aria_001.json": "5b349b7aa4d7823f101a504a6c5801c9fa489e7d57b6ced6da008fd6a21f1351",
    "registry/accessibility/controls/acc_auth_001.json": "a4b8c525403d21c4e96a0785837176da88dbc7a15752ac48a2a0d9f0ea8469e4",
    "registry/accessibility/controls/acc_author_001.json": "e4921533c2a296c245688c3c544ffb0d8958b245fd74316b5a36f37b316b2a60",
    "registry/accessibility/controls/acc_chart_001.json": "e28d051ec1039e3f901de29e3c3ad54105fa3638d7858ae861c5fc7332e242e6",
    "registry/accessibility/controls/acc_checkout_001.json": "9e55389e773e2f3b4fa1da5fbebfaf8830bbb694ad224fd4dba66af3187b29f2",
    "registry/accessibility/controls/acc_cms_001.json": "9bf21b2354b7fbb8fb3257055d737a3a3387d9ed98cbd3872afd4e9ebb8ed6e1",
    "registry/accessibility/controls/acc_code_001.json": "2fe852a8acbff911aef0b4d96c2f4cd1ea3c1f7efa015c2cb57570dad4d0d472",
    "registry/accessibility/controls/acc_color_001.json": "71042e0120e29c603e94fb1c6dce1abfb3d7420184223cc78c48e918c70e1d2c",
    "registry/accessibility/controls/acc_contrast_001.json": "92b0575b9c654046281b4405f9038b31ab2273468d4464470621dde4e93bb7c6",
    "registry/accessibility/controls/acc_copy_001.json": "089652841e9fa44db995e35e485db04e705f8037e3573244615d075a7ca1e27e",
    "registry/accessibility/controls/acc_dlg_001.json": "2cbe81b991ed3b8651d80a04953a9321d82c8fcfbc8ccd2fa9695255d71f24d1",
    "registry/accessibility/controls/acc_drag_001.json": "34ccff4720a5c7d84a77cb9f57775d0f96227e221028624d39f34dcbf70ebdca",
    "registry/accessibility/controls/acc_drawer_001.json": "49ab6da0525e21135ed8e6aa36902a4f580de673acdb678760add3de3425a3fc",
    "registry/accessibility/controls/acc_filter_001.json": "2a1b8fa83f9c9ab08c0a4db11d736cc5349f2c6fd80fe4f2929522913f1dbd7e",
    "registry/accessibility/controls/acc_focus_001.json": "ce0d58ba1c8d82991dcb861f21d0c0e22fb27610bb147a71dd8dc4ee4ab40b02",
    "registry/accessibility/controls/acc_focus_002.json": "f1c2f2eef82ab01c4bf57cb1b393c29483a92adbfa7e962c0d7de441640edbf9",
    "registry/accessibility/controls/acc_form_001.json": "c79408750fd55bfd26ed86cbc3e5b0e049c59f542879273f4aaf27c0467f271d",
    "registry/accessibility/controls/acc_form_002.json": "00c03048c6bba89e07251310940cd4c2e4348b3ddd7cc8d69b6f96382ffd77ff",
    "registry/accessibility/controls/acc_form_003.json": "2090f4923ba8ecee0aa996a20166d6c0126657888e5be0cff3af017f61d793a1",
    "registry/accessibility/controls/acc_form_004.json": "8648047e5e95059bbb9f70a5c8277cc6385946dada88488db6b5dbbb8778d7ef",
    "registry/accessibility/controls/acc_head_001.json": "738d6d9ab5906ae50d8b59fe90d8ab8ee809b1d564155699432e696e4601505b",
    "registry/accessibility/controls/acc_heading_002.json": "3442ed0363907735435d842101d714aca0aabe30262b5e1640d04b464604206e",
    "registry/accessibility/controls/acc_icon_001.json": "382ab98ec96c06228f0ecee28eaaa620d08c93c99a7abe2ed59dbe8f41c554b5",
    "registry/accessibility/controls/acc_img_001.json": "e62647b8d9bdee423e28e15005f33cea062f129e63ec46cdcb0aabd32ef483c0",
    "registry/accessibility/controls/acc_kbd_001.json": "3bbbb194d51759ad9a9d55c98b373ae683ca55cbbd81baade8230c2e136c9462",
    "registry/accessibility/controls/acc_land_001.json": "5ae71ac3c1ab69d819eda353ddc510f1bdadee1ec12b2ed5bde1b62531054c33",
    "registry/accessibility/controls/acc_live_001.json": "57811b69a866aa7b6fc33dc239d592143524ec6df8c41d22f3164d2a8fe7be4a",
    "registry/accessibility/controls/acc_load_001.json": "ecb51b7420d746957c62a456572034b518225c408084c7955ce1d2ad384739a3",
    "registry/accessibility/controls/acc_media_001.json": "b64150d60afc985852c8ccafa45209daf64ba7b579b8184194bec45e02257a32",
    "registry/accessibility/controls/acc_media_002.json": "e3826258d262003cee39506ce6035a3257e203fde33699920d441c4cee71e899",
    "registry/accessibility/controls/acc_menu_001.json": "68f24ac2537694497b9281aace48e0186be6670afd6b2b63a5c978f4a07286af",
    "registry/accessibility/controls/acc_mobile_001.json": "883698894fc980526339ae1241429c565204e8c2cfbd8ad7593bbdcca90ca06c",
    "registry/accessibility/controls/acc_motion_001.json": "0b73561948966cb27573e16656885b2caa12abdfc3068d09c876d4d934a3116f",
    "registry/accessibility/controls/acc_name_001.json": "e47aa7bf6f341dd1d9745a29dd1eb82a5d4094f352e85a0700c5285b20f05c7a",
    "registry/accessibility/controls/acc_nav_001.json": "100777c8f5660090696307ee50120772f4720b86df22248101be2331ea530562",
    "registry/accessibility/controls/acc_palette_001.json": "19cee1763fb87c76c9fe89c30b30b5fae730757687eeb7a0613af0c416635c06",
    "registry/accessibility/controls/acc_reflow_001.json": "279f6223f89624045b8f3ac66c473f65dedbf22b78709affd5298d1eea1aed1f",
    "registry/accessibility/controls/acc_rte_001.json": "9d7ae9febc65649bae3c00d6688e1210fa220f020cd86b411a78d3eb95dab004",
    "registry/accessibility/controls/acc_sem_001.json": "2e4f0475dcc1e1af4cbc44f0b1022e2d27790e580d6d62372219990f03eea00b",
    "registry/accessibility/controls/acc_skip_001.json": "caa0aa373f280c7289c7376222b733c39902beb43f919b5e21cf1804824d09d1",
    "registry/accessibility/controls/acc_status_001.json": "f399631f1ceb86039cf8252221d718e94477670aee4a8bb55af3d443da6c6bd2",
    "registry/accessibility/controls/acc_table_001.json": "02073b3501ecd615d016a0b0841e1daf8f952db26627ce4ff03fb7a38ec4b3dc",
    "registry/accessibility/controls/acc_touch_001.json": "f43e84aeed662f2f015ca76b41664921f8754bed6c9160598d04f819ade5f588",
    "registry/accessibility/definitions/accessibilityControl.json": "37ae1a2b64ac4c3cf6545f614b214741d7a890af80d2f30f4d015ddb389f5428",
    "registry/accessibility/definitions/portalAuditCheck.json": "cbd52abcedb8c286c0279a5d6d47ed6a6c0f5daa91d62d0537a8df639b9d5305",
    "registry/accessibility/definitions/surfaceMapping.json": "d82c17154d33b8fab87508deeb0a486d952fc9dbaebb19f2451e5a18216b56ef",
    "registry/accessibility/definitions/uiType.json": "15b3b8c8972f391c3267dcac7b4320792a349f3b63899f67c9d93ee5c9fb8e80",
    "registry/accessibility/definitions/verificationMethod.json": "5be00421e14afc944b4d1306fc553f0f5baa4a0731ff1d6e509de9f8a85c5c82",
    "registry/accessibility/portal-audit.json": "bfa892103b0eaf72c43ac7bf02853edd91182591ce2a3299d67b5690ce8ac2fd"
  }
};
