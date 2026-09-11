# Acceptance Checklist

- [ ] nextf.site.json validates and pins the exact Contract Version.
- [ ] All enabled Modules exist in the Module Registry and all required dependencies resolve.
- [ ] All selected Capabilities belong to enabled Modules and are not reserved/unsupported.
- [ ] Customer-editable data maps to canonical schemas rather than hardcoded presentation values.
- [ ] Public API usage exposes only permitted published/public projections.
- [ ] Protected CMS/Admin actions map to canonical permissions and are re-authorized server-side.
- [ ] Standard Events and tracking names are used without project-local synonyms.
- [ ] Configured integrations use canonical Connectors and preserve consent/environment rules.
- [ ] No secrets are present in nextf.site.json, public bundles, example payloads or public logs.
- [ ] Codex reports actual verification results and any deviations/extensions before handoff.
- [ ] The implementation includes only the Site-specific page/content architecture required for the Custom Website Extension Reference and does not convert contracts into a generic page builder.
- [ ] CMS navigation is derived from enabled Modules/Capabilities and filtered by canonical permissions.
- [ ] NEXT F Admin retains internal diagnostics/configuration boundaries that are not exposed as customer privileges.
- [ ] Every custom extension is namespaced, documented, conflict-free and represented by a Contract Extension Proposal when reusable canonical coverage is missing.
