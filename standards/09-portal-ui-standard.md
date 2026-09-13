# Contract Portal UI Standard

Version: V0.2.0

## Purpose

This standard governs the presentation shell for `contract.nextf.lk`.

The portal is a technical reference application. Its design must prioritize clarity, scanning, stable navigation, dense-but-readable information and long-term maintenance.

## Permanent visual direction

- shared light and dark themes with a persisted user preference
- paper SaaS dashboard design
- NEXT F blue as the primary action and information color
- high-contrast paper surfaces in both themes
- subtle neutral app backgrounds
- clear neutral borders
- minimal low-elevation shadows
- no glassmorphism
- no backdrop blur
- no decorative 3D background
- no particle effects
- no excessive gradients
- no animation that competes with technical content

## Typography

Use the system sans-serif stack unless a later approved portal standard changes it.

Base body copy must not be smaller than 14px.

Code uses a system monospace stack.

Technical IDs, enum values, routes and machine names should use monospace styling when shown inline.

## Layout

Desktop:

- fixed-width left navigation column
- sticky top bar
- fluid main content area
- centered maximum content width
- paper cards for grouped technical information

Tablet/mobile:

- sidebar becomes an off-canvas navigation drawer
- a scrim blocks interaction behind the drawer
- content becomes single-column where needed
- touch targets remain usable
- search remains directly accessible

## Navigation

The permanent top-level information architecture is:

- Overview
- Standards
- Registry
- Platform
- Events
- Development
- Lifecycle

The shell may reserve routes before their contracts are implemented.

Reserved routes must clearly display `Planned` rather than presenting invented placeholder contracts as real definitions.

## Search

Phase 1 includes navigation search only.

Full registry search must be implemented from machine-readable registry data in its later phase.

Keyboard shortcut:

- Ctrl+K on Windows/Linux
- Cmd+K on macOS

Search must support keyboard navigation and Escape-to-close behavior.

## Status vocabulary

Portal UI may display lifecycle/status badges including:

- Stable
- Draft
- Experimental
- Deprecated
- Removed
- Planned
- Current

Color is supplemental. Text labels remain required.

## Accessibility baseline

Phase 1 shell requires:

- semantic header, nav, main and section elements
- skip-to-content link
- visible keyboard focus
- ARIA labels for icon-only controls
- route change announcement
- modal focus containment
- Escape-to-close for modal/drawer interactions where applicable
- reduced-motion support
- no information conveyed only by color
- responsive text and layouts

## Motion

Use short functional transitions only.

Examples:

- sidebar opening
- button state changes

Honor `prefers-reduced-motion`.

## Components established in Phase 1

- app shell
- sidebar
- navigation group
- navigation item
- top bar
- breadcrumbs
- search trigger
- search dialog
- icon button
- primary/secondary/ghost button
- release chip
- status badge
- phase badge
- tag
- paper card
- metric card
- callout
- data list
- code block
- list item
- progress track
- empty/planned state
- hero panel
- roadmap item

Later phases should reuse these before adding new portal-specific components.

## Prohibited design drift

Do not introduce a separate visual language for individual registry domains.

Commerce, SEO, Content, Webhooks and other sections must remain part of the same portal design system.

Theme differences must remain token-driven. Individual registry domains must not introduce independent palettes or theme behavior.

The portal defaults to dark when no preference has been stored. The top-bar theme control must expose an accessible name, persist the selected light or dark theme, and apply the same theme to every route and shared component.


## Phase 2 registry extension

Registry tables, filters, detail metadata, relationship lists and copy notifications must follow the same themed paper dashboard system and accessibility baseline.
