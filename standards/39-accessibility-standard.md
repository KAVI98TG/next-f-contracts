# NEXT F ACCESSIBILITY STANDARD

**Phase:** 31  
**Introduced in:** V0.32.0  
**Scope:** Customer websites, NEXT F Customer CMS, NEXT F Admin and `contract.nextf.lk`

## 1. Purpose

Accessibility is a mandatory implementation quality for NEXT F interfaces. It is not optional visual polish. This standard defines reusable requirements and verification metadata for customer websites, management interfaces and the Contract Portal.

## 2. Authority

`registry/accessibility/controls/` is the machine-readable control source. The portal and generated fallbacks are discovery layers and must not override those controls.

## 3. Core rules

- Prefer semantic HTML and native controls before ARIA.
- Maintain logical headings and labeled landmarks.
- Every interactive control requires an accessible name.
- Forms require labels, associated help/instructions and actionable error association.
- All functionality must remain keyboard operable with visible focus.
- Dialogs, drawers and command palettes require intentional focus behavior.
- Images, audio and video require appropriate alternatives when meaningful.
- Status and validation meaning must not depend on color alone.
- Interfaces must support zoom/reflow, usable touch targets and reduced motion.
- Dynamic status should be announced without unnecessary focus movement.
- Drag-and-drop interactions require a non-drag keyboard alternative.
- Charts require an equivalent textual/table or programmatic data alternative.
- Customer CMS and NEXT F Admin must apply the same accessibility controls as customer-facing interfaces.


## 3.1 Component and flow coverage

The baseline explicitly covers menus, tables, rich text editors, captions and transcripts, contrast, live regions, ecommerce checkout and authentication flows in addition to the core rules above. Loading and error states must expose understandable status, and ARIA should be used with restraint only when native semantics are insufficient.

## 4. Authoring metadata

Schema/UI metadata may describe accessibility-relevant authoring requirements such as `altText`, accessible labels, field help, error association, keyboard alternatives, focus behavior, heading-level constraints and caption/transcript references. Business-data contracts should not absorb visual implementation details that do not belong to their semantics.

## 5. Verification

Automated/static checks are useful but cannot prove accessibility. Controls declare verification methods, and controls marked for manual review require keyboard, assistive-technology, visual, content or reflow review as appropriate. A green static validator must never be represented as full accessibility certification.

## 6. Contract Portal baseline

`contract.nextf.lk` itself must preserve skip navigation, labeled navigation, visible focus, keyboard command-palette operation, mobile navigation semantics, route announcements, accessible filters, code/copy controls, non-color-only status and reduced-motion behavior. Phase 31 records automated/source/browser review evidence in the Portal Accessibility Audit.

## 7. Codex rule

When implementing NEXT F UI, Codex must resolve applicable `accessibility.control.*` definitions, preserve semantic/native behavior, run available static checks, and report which manual accessibility reviews were performed versus not run. Codex must not claim full accessibility from static checks alone.
