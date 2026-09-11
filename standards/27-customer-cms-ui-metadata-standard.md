# Customer CMS UI Metadata Standard

Version: 0.20.0  
Phase: 19  
Status: Stable

## 1. Purpose

Customer CMS UI Metadata is the declarative bridge between authoritative NEXT F contracts and the customer-facing Site Workspace. It defines how permitted contract data is presented and edited without allowing each customer project or Codex implementation to invent a new CMS interface model.

The metadata is presentation guidance. It never replaces schema validation, API rules, permissions, Commerce Rules, consent rules, or server-side authorization.

## 2. Core authority order

1. Canonical data/schema contract defines what a value means and whether it is structurally valid.
2. Permission Registry defines whether the current principal may perform an action.
3. Business rules and API contracts define whether an operation is allowed now.
4. Customer CMS UI Metadata defines how the authorized operation is presented.
5. Customer-specific visual styling may change appearance but not contract semantics.

A hidden button is never an authorization control.

## 3. Full-page editing rule

Complex content must use a dedicated page/workspace, not a tiny generic modal.

Full-page or dedicated workspace editors are required for:

- Pages
- Blog Posts
- Documentation Articles
- Services with structured content
- Legal Pages
- Products
- Forms
- Navigation builders
- Custom Collection definitions
- Integration configuration when multiple settings or tests are involved

Small confirmation dialogs and focused quick-edit dialogs are allowed for bounded actions, but must not replace the complete editor.

## 4. Structured editor rule

Customer CMS is a structured management interface. It does not become a general-purpose source-code editor.

The Customer CMS edits canonical structured values. It is not an arbitrary HTML/CSS/JavaScript editor.

Rich text stores the canonical structured rich-content document. Media insertion references canonical Media Assets. Relation controls store canonical entity IDs. Blocks are selected only from registered Block contracts supported by the Site Manifest.

## 5. Field binding rules

A UI field binding must resolve to a real field in its target contract unless it is explicitly marked `virtual` and documents a trusted read-only source.

UI metadata may make a field more restrictive than the contract, but may not make a field more permissive. In particular:

- `customerEditable: false` in a contract cannot become editable through UI metadata.
- hidden/system fields cannot become customer-writable merely because a component exists.
- secrets are never rendered as ordinary text values.
- read-only operational snapshots stay read-only even if visually similar to editable objects.

## 6. Editor registry

Primitive fields use the editor declared by the Primitive Field Registry unless a compatible specialized editor is explicitly selected.

Composite editors must preserve the target schema. A composite editor is a UX composition, not a new data model.

Examples:

- `rich-text-editor`
- `block-composer`
- `publishing-panel`
- `seo-workspace`
- `media-library-picker`
- `form-builder`
- `variant-builder`
- `inventory-grid`
- `integration-configurator`

## 7. Layout zones

Customer CMS metadata uses canonical zones:

- page-header
- main
- sidebar
- tabs
- secondary
- sticky-actions
- drawer
- modal
- hidden-system

Main business content belongs in `main`. Secondary publishing, taxonomy, featured media and compact state controls normally belong in `sidebar`. System identifiers and diagnostics belong in `hidden-system` or read-only Advanced sections.

## 8. Responsive behavior

Desktop layout metadata must not create a desktop-only CMS.

On narrow screens:

- sidebars collapse beneath main content or into accessible accordions/drawers
- data tables expose a readable card/stack alternative
- sticky actions remain reachable without covering form controls
- editors preserve labels, help text and validation messages
- horizontal scrolling is used only when the data genuinely requires it
- drag-only interactions must have keyboard/button alternatives

## 9. Validation presentation

Validation has three layers:

1. immediate field feedback for obvious local format issues
2. page-level validation summary on save/publish failure
3. authoritative server/API validation response

Client-side validation never establishes server acceptance.

Errors must identify the affected field/section where possible and move focus predictably when the user requests error navigation.

## 10. Unsaved work and autosave

Editors must detect unsaved work.

Autosave may save a draft/revision when the underlying workflow supports it. Autosave must never silently publish, approve, refund, fulfill, delete, disconnect an integration, or execute another materially consequential operation.

Navigation away from unsaved non-autosaved changes requires a warning.

## 11. Publishing UX

`Save Draft`, `Preview`, `Schedule`, `Publish`, `Unpublish`, `Archive`, `Restore`, and `Approve` remain distinct actions and are displayed only when supported by the target contract/capability and authorized by canonical permissions.

A published revision remains stable until an explicit publish transition succeeds.

## 12. SEO composition

Routable content can show an SEO panel that edits `seo.metadata` by canonical target reference. SEO data is not copied into Blog/Post/Page contracts simply to make the editor convenient.

SEO preview is guidance only and must not claim guaranteed ranking or exact search-engine rendering.

## 13. Media UX

Media selection must expose enough context to choose the correct asset and maintain accessibility metadata. Upload and selection are separate permissions/actions where the permission model distinguishes them.

Private form uploads are never silently promoted into the public Media Library.

## 14. Relation controls

Relation pickers must:

- respect Site/Organization scope
- query only authorized targets
- show stable human labels plus enough disambiguation
- store canonical IDs
- prevent invalid self-relations where the target contract forbids them

## 15. Lists and operational tables

List metadata defines canonical columns, filters, sort options, row actions, bulk actions and empty states.

Bulk actions must re-check authorization for every affected resource and must not bypass business rules.

Sensitive exports require the canonical export permission and use the API's export/data-handling controls.

## 16. Destructive and sensitive actions

Delete, refund, disconnect, secret rotation, bulk destructive actions and other high-impact operations use the action catalog's confirmation/recent-authentication requirements.

A confirmation dialog describes the actual effect. It must not use generic wording such as “Are you sure?” without identifying the operation.

## 17. Operational commerce UX

Orders, payments, refunds, fulfillment and inventory screens display authoritative server state. Editable controls invoke canonical commands; they do not mutate totals, statuses or stock snapshots directly in the browser.

Payment, fulfillment and order statuses remain separate.

## 18. Integrations and secrets

Integration screens display secret state/reference metadata, never raw reusable secret values after secure entry unless a dedicated security contract explicitly permits one-time display.

Connection tests, sync actions and health indicators remain separate from configuration editing.

## 19. Accessibility

All generated Customer CMS controls require:

- programmatic labels
- help/error association
- visible keyboard focus
- semantic controls
- keyboard access to every action
- accessible names for icon-only controls
- focus management for dialogs/drawers
- non-color-only status communication

## 20. UI states

Every asynchronous screen must support, where applicable:

- initial/loading
- empty
- populated
- partial/degraded
- validation error
- authorization denied
- not found
- conflict/stale revision
- offline/network failure
- success confirmation

A blank screen is never a valid error state.

## 21. Site Manifest and Modules

The Customer CMS renders only Modules and Capabilities enabled for the current Site Manifest. UI metadata cannot activate a disabled Module or reserved Capability.

Module navigation remains the authority for whether a feature appears in the Site Workspace. UI profiles define the screens behind that navigation.

## 22. Custom Collections

Custom Collection entry editors may be generated from registered field definitions. They must use the same canonical editor registry, validation behavior and permission checks as built-in content types.

Customer users manage entries. NEXT F controls collection/schema definition unless a future capability explicitly delegates schema design.

## 23. Customer-specific UI styling

NEXT F Customer CMS may use a consistent SaaS design system. Customer website branding must not force the management UI to inherit unsafe or unreadable customer CSS.

## 24. Codex rule

When building a NEXT F-integrated customer website, Codex must not create a separate customer admin panel for capabilities already represented by Customer CMS UI Metadata. It should implement website presentation and contract integration, then allow the common Customer CMS to manage the declared data.
