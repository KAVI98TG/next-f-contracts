# NEXT F Contracts Phase 31 Acceptance Report

## Release

- Phase: **31 — Accessibility Standards**
- Version: **V0.32.0**
- Status: **PASS**
- Production Registry status: **pre-V1 / not production-eligible**

## Implemented

- Machine-readable Accessibility Registry under `registry/accessibility/`.
- **44 canonical controls across 14 categories**.
- Controlled UI-type and verification-method vocabularies.
- Surface mappings for customer websites, Customer CMS, NEXT F Admin and the Contract Portal.
- Cross-links to canonical CMS editor metadata, Blocks, Fields, Commerce and Admin definitions without duplicating their business-data authority.
- Data-driven `Standards -> Accessibility` portal with overview, control filters/detail, surface coverage, portal audit evidence and raw JSON.
- Portal improvements for mobile drawer Escape handling, keyboard focus containment and focus restoration.
- Global Search and Relationship Explorer discovery integration.
- V0.32.0 Changelog, exact Contract Diff snapshot and Compatibility Center integration.

## Portal accessibility baseline

- Audit result: **16 PASS / 0 FAIL / 0 NOT RUN**.
- Deterministic static/source checks cover skip navigation, landmarks, route announcements, modal semantics, labels, focus indication, reduced motion, command palette logic, mobile drawer semantics, text-bearing status, filters and copy actions.
- The keyboard-path and responsive-reflow items are recorded as **manual source-level reviews**, not live browser automation.
- The managed Chromium environment used for this release enforces `URLBlocklist=*` for localhost and `file://` URLs, so interactive local browser automation could not be run. The release does **not** claim that it ran.
- Static/source checks are evidence only and are **not** represented as universal accessibility certification. Individual controls preserve keyboard, screen-reader, visual, contrast, content and reflow review requirements where applicable.

## Validation evidence

- Phase 31 validation: **4,756 PASS / 0 FAIL** (`checks/phase-31-validation.txt`).
- Phase 31 smoke: **26 PASS / 0 FAIL** (`checks/phase-31-smoke.txt`).
- Current forward regression gate: **2,318 PASS / 0 FAIL** (`checks/phase-31-regression.txt`).
- Portal accessibility audit: **16 PASS / 0 FAIL** (`checks/phase-31-accessibility-audit.json`).
- JSON/source/syntax/duplicate-ID/discovery/lifecycle integrity checks are included in the Phase 31 validator and regression gate.

## Final registry state

- Registry items: **2080**
- Accessibility Registry items: **58**
- Accessibility controls: **44**
- Search documents: **6999**
- Relationship nodes: **2080**
- Relationship edges: **7264**
- Changelog releases: **32**
- Changelog entries: **552**
- Exact Diff releases: **27**
- Compatibility target: **0.32.0**
- Registry SHA-256: `f9381723186b6c5799aeef495d3baa863e701576dbaf502a15167831ade93da7`
- V0.32.0 Diff SHA-256: `f9381723186b6c5799aeef495d3baa863e701576dbaf502a15167831ade93da7`
- Registry/Diff SHA match: **PASS**

## Truthful limitations

- Phase 31 defines reusable accessibility standards and portal evidence; it does not claim external accessibility certification.
- Interactive local Chromium keyboard/reflow automation was blocked by the managed browser policy described above. No bypass or fabricated browser result was used.
- Customer CMS, NEXT F Admin and future customer-site runtimes must still execute the manual verification methods declared by applicable controls when those products are implemented/tested.
- V1.0.0 production stability remains reserved for Phase 37 acceptance.

## Release gate

All blocking Phase 31 machine-readable registry, portal, discovery, lifecycle, validation and forward-regression checks pass. **Phase 32 has not been started.**
