// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/privacy/*
export const GENERATED_PRIVACY = {
  "registryVersion": "1.3.0",
  "index": {
    "registryVersion": "1.3.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Privacy & Data Registry",
    "description": "Machine-readable data classification, field handling, retention, consent and privacy-operation metadata.",
    "stats": {
      "classifications": 5,
      "qualifiers": 5,
      "fieldHandling": 54,
      "retentionClasses": 9,
      "coverageAreas": 8,
      "operations": 7
    },
    "classifications": [
      {
        "id": "public",
        "label": "Public",
        "description": "Information intentionally eligible for unauthenticated public delivery under its owning contract.",
        "defaultPublicDeliveryEligible": true,
        "defaultAnalyticsEligible": true,
        "defaultLogEligibility": "allowed"
      },
      {
        "id": "internal",
        "label": "Internal",
        "description": "Operational or configuration information that is not public but is not inherently personal or secret.",
        "defaultPublicDeliveryEligible": false,
        "defaultAnalyticsEligible": false,
        "defaultLogEligibility": "conditional"
      },
      {
        "id": "personal",
        "label": "Personal",
        "description": "Information relating to or reasonably linkable to a person, visitor, customer, lead or staff principal.",
        "defaultPublicDeliveryEligible": false,
        "defaultAnalyticsEligible": false,
        "defaultLogEligibility": "redacted-only"
      },
      {
        "id": "sensitive",
        "label": "Sensitive",
        "description": "Higher-risk personal, financial, authentication, transaction or operational information requiring restricted handling.",
        "defaultPublicDeliveryEligible": false,
        "defaultAnalyticsEligible": false,
        "defaultLogEligibility": "redacted-only"
      },
      {
        "id": "secret",
        "label": "Secret",
        "description": "Credentials, tokens, signing material, encryption keys or equivalent values that must not be disclosed through public/runtime data flows.",
        "defaultPublicDeliveryEligible": false,
        "defaultAnalyticsEligible": false,
        "defaultLogEligibility": "prohibited"
      }
    ],
    "qualifiers": [
      {
        "id": "financial",
        "label": "Financial",
        "description": "Payment, refund, billing or transaction context."
      },
      {
        "id": "authentication",
        "label": "Authentication",
        "description": "Identity, principal, session, authorization or credential context."
      },
      {
        "id": "tracking",
        "label": "Tracking",
        "description": "Analytics, advertising, attribution, consent or visitor-observation context."
      },
      {
        "id": "content",
        "label": "Content",
        "description": "Editorial/customer-managed content or content metadata."
      },
      {
        "id": "system-metadata",
        "label": "System Metadata",
        "description": "IDs, timestamps, status, diagnostics or other operational metadata."
      }
    ],
    "eligibilityValues": [
      {
        "id": "allowed",
        "label": "Allowed",
        "description": "Allowed when the owning contract and authorization permit it."
      },
      {
        "id": "conditional",
        "label": "Conditional",
        "description": "Allowed only after purpose, consent, authorization or destination-specific checks."
      },
      {
        "id": "redacted-only",
        "label": "Redacted Only",
        "description": "Only a redacted/minimized representation may flow to this destination."
      },
      {
        "id": "prohibited",
        "label": "Prohibited",
        "description": "Must not flow to this destination."
      }
    ],
    "retentionClasses": [
      {
        "id": "ephemeral",
        "label": "Ephemeral",
        "description": "Short-lived request/session processing data; retain only as operationally necessary."
      },
      {
        "id": "operational",
        "label": "Operational",
        "description": "Routine operational data retained under the Site/organization retention policy."
      },
      {
        "id": "customer-record",
        "label": "Customer/Business Record",
        "description": "Business-purpose records such as submissions/leads retained according to customer policy and obligations."
      },
      {
        "id": "consent-history",
        "label": "Consent History",
        "description": "Consent evidence/history retained according to applicable policy and evidence needs."
      },
      {
        "id": "financial-record",
        "label": "Financial Record",
        "description": "Transaction/payment records retained according to financial/accounting/provider policy; raw card data remains prohibited."
      },
      {
        "id": "security-audit",
        "label": "Security/Audit",
        "description": "Security and audit evidence retained according to operational/security policy."
      },
      {
        "id": "credential-lifecycle",
        "label": "Credential Lifecycle",
        "description": "Credential references and lifecycle metadata retained only while required for the authorized integration/security lifecycle."
      },
      {
        "id": "content-lifecycle",
        "label": "Content Lifecycle",
        "description": "Content and publishing data retained according to content lifecycle/version policy."
      },
      {
        "id": "legal-hold",
        "label": "Legal Hold",
        "description": "Exceptional retention override only when an authorized legal/operational hold exists; not an automatic default."
      }
    ],
    "redactionBehaviors": [
      {
        "id": "none",
        "label": "None",
        "description": "No redaction needed within an authorized context."
      },
      {
        "id": "mask",
        "label": "Mask",
        "description": "Mask most of the value for display/diagnostics."
      },
      {
        "id": "partial",
        "label": "Partial",
        "description": "Expose only the contract-approved safe subset."
      },
      {
        "id": "pseudonymize",
        "label": "Pseudonymize",
        "description": "Replace direct identity with a bounded pseudonymous identifier; this is not automatically anonymous."
      },
      {
        "id": "remove",
        "label": "Remove",
        "description": "Omit the value entirely from the destination or output."
      }
    ],
    "deletionBehaviors": [
      {
        "id": "delete",
        "label": "Delete",
        "description": "Delete when the governing operation/policy authorizes deletion."
      },
      {
        "id": "anonymize",
        "label": "Anonymize",
        "description": "Remove identifying linkage using the approved anonymization process."
      },
      {
        "id": "retain-per-policy",
        "label": "Retain Per Policy",
        "description": "Retain according to the owning retention class/policy."
      },
      {
        "id": "protected-retention",
        "label": "Protected Retention",
        "description": "Do not delete automatically because integrity/security/financial evidence may require retention."
      },
      {
        "id": "review-required",
        "label": "Review Required",
        "description": "A human/policy decision is required before deletion or anonymization."
      }
    ],
    "consentRelevance": [
      {
        "id": "none",
        "label": "None",
        "description": "No consent gate is implied by this metadata; other lawful/business/security requirements may still apply."
      },
      {
        "id": "business-purpose",
        "label": "Business Purpose",
        "description": "Collected/used for the requested business interaction such as a form submission or lead workflow; distinct from optional analytics consent."
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "description": "Subject to analytics/measurement consent rules where configured/applicable."
      },
      {
        "id": "marketing",
        "label": "Marketing",
        "description": "Subject to marketing/advertising consent rules where configured/applicable."
      },
      {
        "id": "functional",
        "label": "Functional",
        "description": "Required for a requested functional service rather than optional analytics/marketing."
      },
      {
        "id": "multiple",
        "label": "Multiple",
        "description": "Different fields/flows within the value may require different consent/purpose treatment."
      }
    ],
    "exportSensitivity": [
      {
        "id": "normal",
        "label": "Normal",
        "description": "Normal authorized export handling."
      },
      {
        "id": "restricted",
        "label": "Restricted",
        "description": "Export requires explicit authorization and appropriate minimization/audit."
      },
      {
        "id": "highly-restricted",
        "label": "Highly Restricted",
        "description": "Export is generally prohibited or requires exceptional privileged handling."
      }
    ],
    "fieldHandling": [
      {
        "handlingId": "PRIV-FLD-001",
        "targetId": "permissions.principalReference",
        "fieldPath": "fields.principalId",
        "classification": "personal",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference the authenticated/authorized principal.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-AUTHZ-001",
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-002",
        "targetId": "permissions.principalReference",
        "fieldPath": "fields.organizationId",
        "classification": "internal",
        "qualifiers": [
          "authentication",
          "system-metadata"
        ],
        "purpose": "Scope authorization to the owning Organization.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-TENANT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-003",
        "targetId": "permissions.authorizationDecision",
        "fieldPath": "fields.principalId",
        "classification": "personal",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Record the principal evaluated by authorization.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-AUTHZ-001",
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-004",
        "targetId": "permissions.authorizationDecision",
        "fieldPath": "fields.matchedRoleIds",
        "classification": "internal",
        "qualifiers": [
          "authentication",
          "system-metadata"
        ],
        "purpose": "Preserve authorization-decision evidence.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-AUTHZ-001",
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-010",
        "targetId": "forms.submission",
        "fieldPath": "fields.values",
        "classification": "sensitive",
        "qualifiers": [],
        "purpose": "Process user-submitted form values for the requested business interaction.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-011",
        "targetId": "forms.submission",
        "fieldPath": "fields.files",
        "classification": "sensitive",
        "qualifiers": [],
        "purpose": "Process user-submitted attachments under the form purpose.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-UPL-001",
          "SEC-UPL-002",
          "SEC-UPL-003"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-012",
        "targetId": "forms.submission",
        "fieldPath": "fields.consents",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Preserve consent/acknowledgement evidence associated with a submission.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-013",
        "targetId": "forms.submission",
        "fieldPath": "fields.requestContext",
        "classification": "personal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Support request integrity, abuse prevention and operational diagnosis.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "ephemeral",
        "exportSensitivity": "restricted",
        "consentRelevance": "functional",
        "deletionBehavior": "delete",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-ABUSE-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-014",
        "targetId": "forms.submission",
        "fieldPath": "fields.spamDecision",
        "classification": "internal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Record spam/abuse decision metadata.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-ABUSE-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-015",
        "targetId": "forms.lead",
        "fieldPath": "fields.displayName",
        "classification": "personal",
        "qualifiers": [],
        "purpose": "Identify the lead for customer follow-up.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-016",
        "targetId": "forms.lead",
        "fieldPath": "fields.contactPoints",
        "classification": "personal",
        "qualifiers": [],
        "purpose": "Contact the lead through customer-authorized business workflows.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-017",
        "targetId": "forms.lead",
        "fieldPath": "fields.organizationName",
        "classification": "personal",
        "qualifiers": [],
        "purpose": "Maintain lead business context where supplied.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-018",
        "targetId": "forms.lead",
        "fieldPath": "fields.submissionIds",
        "classification": "personal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Link the Lead to source submissions without merging the entities.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-019",
        "targetId": "forms.consentRecord",
        "fieldPath": "fields.accepted",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Preserve the consent/acknowledgement decision.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-020",
        "targetId": "forms.consentRecord",
        "fieldPath": "fields.textSnapshot",
        "classification": "internal",
        "qualifiers": [
          "content"
        ],
        "purpose": "Preserve the text shown when consent/acknowledgement was recorded.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "consent-history",
        "exportSensitivity": "normal",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-021",
        "targetId": "forms.consentRecord",
        "fieldPath": "fields.recordedAt",
        "classification": "personal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Timestamp consent evidence.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-030",
        "targetId": "marketing.trackingEvent",
        "fieldPath": "fields.context",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Provide bounded measurement context for a canonical tracking observation.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "conditional",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-031",
        "targetId": "marketing.trackingEvent",
        "fieldPath": "fields.properties",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Carry allowlisted event properties without raw form payload dumping.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "conditional",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-032",
        "targetId": "marketing.trackingConsentRecord",
        "fieldPath": "fields.sessionId",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Associate consent state with the bounded first-party session.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "conditional",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-033",
        "targetId": "marketing.trackingConsentRecord",
        "fieldPath": "fields.anonymousVisitorId",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Associate consent state with a pseudonymous first-party visitor ID.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "conditional",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-034",
        "targetId": "marketing.trackingConsentRecord",
        "fieldPath": "fields.preferences",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Record consent preferences by category.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "conditional",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-035",
        "targetId": "marketing.sessionContext",
        "fieldPath": "fields.sessionId",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Correlate bounded first-party session observations.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "conditional",
        "retentionClass": "ephemeral",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-036",
        "targetId": "marketing.sessionContext",
        "fieldPath": "fields.landingPage",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Measure landing-page context without treating the URL as a place for sensitive data.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "conditional",
        "retentionClass": "ephemeral",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-QUERY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-037",
        "targetId": "marketing.sessionContext",
        "fieldPath": "fields.initialTrafficSource",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Record bounded attribution context.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "conditional",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-040",
        "targetId": "integrations.credentialReference",
        "fieldPath": "fields.credentialId",
        "classification": "internal",
        "qualifiers": [
          "authentication",
          "system-metadata"
        ],
        "purpose": "Reference credential lifecycle metadata without exposing credential material.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-SECRET-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-041",
        "targetId": "integrations.credentialReference",
        "fieldPath": "fields.secretRefs",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference protected secrets used by an authorized connector.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-SECRET-001",
          "SEC-KEY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-042",
        "targetId": "integrations.secretReference",
        "fieldPath": "fields.secretRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference server-side secret storage without exposing raw material.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-SECRET-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-043",
        "targetId": "integrations.apiKeyConfiguration",
        "fieldPath": "fields.secretRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference an API key in protected storage.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-KEY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-044",
        "targetId": "integrations.oauthConfiguration",
        "fieldPath": "fields.clientId",
        "classification": "internal",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Identify the OAuth client without treating it as secret material.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-OAUTH-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-045",
        "targetId": "integrations.oauthConfiguration",
        "fieldPath": "fields.clientSecretRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference the OAuth client secret in protected storage.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-OAUTH-001",
          "SEC-SECRET-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-046",
        "targetId": "integrations.oauthConfiguration",
        "fieldPath": "fields.accessTokenRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference access-token material without browser/public exposure.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-OAUTH-001",
          "SEC-TOKEN-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-047",
        "targetId": "integrations.oauthConfiguration",
        "fieldPath": "fields.refreshTokenRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference refresh-token material without browser/public exposure.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-OAUTH-001",
          "SEC-TOKEN-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-050",
        "targetId": "commerce.payment",
        "fieldPath": "fields.orderId",
        "classification": "sensitive",
        "qualifiers": [
          "financial",
          "system-metadata"
        ],
        "purpose": "Link payment facts to the owning order.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-PAY-002"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-051",
        "targetId": "commerce.payment",
        "fieldPath": "fields.amount",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Record authoritative payment amount/currency value.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "redacted-only",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-PAY-002"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-052",
        "targetId": "commerce.payment",
        "fieldPath": "fields.method",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Reference the safe payment-method representation; raw PAN/CVV remains prohibited.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PAY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-053",
        "targetId": "commerce.payment",
        "fieldPath": "fields.providerPaymentId",
        "classification": "sensitive",
        "qualifiers": [
          "financial",
          "system-metadata"
        ],
        "purpose": "Correlate the provider-side payment without exposing provider secrets.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PAY-002"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-054",
        "targetId": "commerce.payment",
        "fieldPath": "fields.refundedAmount",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Maintain immutable/reconciled refund financial facts.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "redacted-only",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-PAY-003"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-055",
        "targetId": "commerce.paymentMethodReference",
        "fieldPath": "fields.providerMethodId",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Hold only the opaque provider payment-method reference.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PAY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-056",
        "targetId": "commerce.paymentMethodReference",
        "fieldPath": "fields.last4",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Display the contract-approved safe last-four representation only.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PAY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-060",
        "targetId": "webhooks.delivery",
        "fieldPath": "fields.eventId",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Correlate the authoritative Event to delivery state without treating transport as business truth.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "allowed",
        "webhookEligibility": "allowed",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-WH-003"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-061",
        "targetId": "webhooks.delivery",
        "fieldPath": "fields.lastFailure",
        "classification": "internal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Persist sanitized delivery failure diagnostics.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-062",
        "targetId": "webhooks.deliveryAttempt",
        "fieldPath": "fields.request",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Persist only sanitized request metadata for delivery evidence.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-WH-002",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-063",
        "targetId": "webhooks.deliveryAttempt",
        "fieldPath": "fields.response",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Persist only sanitized response metadata for delivery evidence.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-064",
        "targetId": "webhooks.signingKeyReference",
        "fieldPath": "fields.secretReference",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference webhook signing material in protected server-side storage.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-WH-002",
          "SEC-SECRET-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-070",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.actor",
        "classification": "personal",
        "qualifiers": [
          "authentication",
          "system-metadata"
        ],
        "purpose": "Identify the actor responsible for an auditable change.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-071",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.before",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Retain bounded pre-change evidence with secret/personal-field redaction.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-AUDIT-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-072",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.after",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Retain bounded post-change evidence with secret/personal-field redaction.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-AUDIT-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-073",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.requestId",
        "classification": "internal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Correlate audit evidence to an operational request.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-074",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.metadata",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Store bounded audit metadata while excluding secrets and unnecessary personal data.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-AUDIT-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-080",
        "targetId": "content.page",
        "fieldPath": "fields.title",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Render the customer-managed public page title when the Page is published.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-081",
        "targetId": "content.page",
        "fieldPath": "fields.slug",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Resolve the published Page URL path.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-082",
        "targetId": "content.page",
        "fieldPath": "fields.summary",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Render the published Page summary where the frontend uses it.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-083",
        "targetId": "content.blogPost",
        "fieldPath": "fields.title",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Render the published Blog Post title.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-084",
        "targetId": "content.blogPost",
        "fieldPath": "fields.excerpt",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Render the published Blog Post excerpt.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      }
    ],
    "coverage": [
      {
        "area": "authentication",
        "status": "covered",
        "targetRegistryIds": [
          "permissions.principalReference",
          "permissions.authorizationDecision",
          "security.control.sec_auth_001",
          "security.control.sec_sess_001",
          "security.secretClasses"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-001",
          "PRIV-FLD-002",
          "PRIV-FLD-003",
          "PRIV-FLD-004"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "forms-leads",
        "status": "covered",
        "targetRegistryIds": [
          "forms.submission",
          "forms.lead",
          "forms.consentRecord"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-010",
          "PRIV-FLD-011",
          "PRIV-FLD-012",
          "PRIV-FLD-013",
          "PRIV-FLD-014",
          "PRIV-FLD-015",
          "PRIV-FLD-016",
          "PRIV-FLD-017",
          "PRIV-FLD-018",
          "PRIV-FLD-019",
          "PRIV-FLD-020",
          "PRIV-FLD-021"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "marketing",
        "status": "covered",
        "targetRegistryIds": [
          "marketing.trackingEvent",
          "marketing.trackingConsentRecord",
          "marketing.sessionContext",
          "marketing.consentPolicy"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-030",
          "PRIV-FLD-031",
          "PRIV-FLD-032",
          "PRIV-FLD-033",
          "PRIV-FLD-034",
          "PRIV-FLD-035",
          "PRIV-FLD-036",
          "PRIV-FLD-037"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "integrations",
        "status": "covered",
        "targetRegistryIds": [
          "integrations.credentialReference",
          "integrations.secretReference",
          "integrations.apiKeyConfiguration",
          "integrations.oauthConfiguration"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-040",
          "PRIV-FLD-041",
          "PRIV-FLD-042",
          "PRIV-FLD-043",
          "PRIV-FLD-044",
          "PRIV-FLD-045",
          "PRIV-FLD-046",
          "PRIV-FLD-047"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "commerce",
        "status": "covered",
        "targetRegistryIds": [
          "commerce.payment",
          "commerce.paymentMethodReference",
          "commerce.order"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-050",
          "PRIV-FLD-051",
          "PRIV-FLD-052",
          "PRIV-FLD-053",
          "PRIV-FLD-054",
          "PRIV-FLD-055",
          "PRIV-FLD-056"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "payments",
        "status": "covered",
        "targetRegistryIds": [
          "commerce.payment",
          "commerce.paymentMethodReference",
          "commerce.rule.rawCardDataProhibited"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-050",
          "PRIV-FLD-051",
          "PRIV-FLD-052",
          "PRIV-FLD-053",
          "PRIV-FLD-054",
          "PRIV-FLD-055",
          "PRIV-FLD-056"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "webhooks",
        "status": "covered",
        "targetRegistryIds": [
          "webhooks.delivery",
          "webhooks.deliveryAttempt",
          "webhooks.signingKeyReference"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-060",
          "PRIV-FLD-061",
          "PRIV-FLD-062",
          "PRIV-FLD-063",
          "PRIV-FLD-064"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "audit",
        "status": "covered",
        "targetRegistryIds": [
          "core.auditRecord",
          "security.control.sec_audit_001"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-070",
          "PRIV-FLD-071",
          "PRIV-FLD-072",
          "PRIV-FLD-073",
          "PRIV-FLD-074"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      }
    ],
    "operations": [
      {
        "id": "export",
        "label": "Export",
        "status": "future-capability",
        "description": "Produce an authorized export of in-scope customer/personal data with classification-aware handling.",
        "implementedRuntime": false
      },
      {
        "id": "deletion-request",
        "label": "Deletion Request",
        "status": "future-capability",
        "description": "Request deletion of eligible data subject to retention/integrity constraints.",
        "implementedRuntime": false
      },
      {
        "id": "anonymization-request",
        "label": "Anonymization Request",
        "status": "future-capability",
        "description": "Request anonymization when deletion is not the correct operation.",
        "implementedRuntime": false
      },
      {
        "id": "retention-expiration",
        "label": "Retention Expiration",
        "status": "contract-primitive",
        "description": "Represent policy-driven expiration without inventing legal durations.",
        "implementedRuntime": false
      },
      {
        "id": "legal-hold",
        "label": "Legal Hold",
        "status": "future-capability",
        "description": "Represent an authorized hold that blocks normal deletion/expiration.",
        "implementedRuntime": false
      },
      {
        "id": "consent-history",
        "label": "Consent History",
        "status": "contract-primitive",
        "description": "Existing consent contracts provide evidence primitives; Phase 30 does not claim a complete request portal.",
        "implementedRuntime": false
      },
      {
        "id": "processing-record-reference",
        "label": "Processing Record Reference",
        "status": "future-capability",
        "description": "Reference future processing-record evidence without embedding a legal-compliance engine in the Registry.",
        "implementedRuntime": false
      }
    ],
    "consentBoundaries": [
      {
        "id": "analytics-vs-business-purpose",
        "statement": "Analytics/marketing consent and consent or acknowledgement for a requested form/business purpose are distinct concepts and must not be collapsed into one boolean."
      },
      {
        "id": "unknown-optional-not-granted",
        "statement": "Unknown optional analytics/marketing consent is not silently treated as granted."
      },
      {
        "id": "security-not-weakened",
        "statement": "Customer-controlled consent configuration does not disable mandatory security, fraud, integrity or transaction controls."
      },
      {
        "id": "destination-gating",
        "statement": "Tracking destinations evaluate the relevant consent category/state before optional dispatch."
      },
      {
        "id": "no-raw-form-tracking",
        "statement": "Raw form payloads are not copied wholesale into analytics/advertising events."
      },
      {
        "id": "hashed-not-anonymous",
        "statement": "Hashed or pseudonymized personal data is not automatically anonymous and remains classified according to linkability and purpose."
      }
    ],
    "sources": {
      "standard": "standards/38-privacy-data-standard.md",
      "dataHandlingSchema": "registry/privacy/data-handling.schema.json",
      "classifications": "registry/privacy/classifications.json",
      "fieldHandling": "registry/privacy/field-handling.json",
      "coverage": "registry/privacy/coverage.json",
      "security": "registry/security/index.json"
    }
  },
  "classifications": {
    "registryVersion": "1.3.0",
    "title": "Primary Data Classifications",
    "description": "Single primary sensitivity classification used by NEXT F privacy metadata.",
    "classes": [
      {
        "id": "public",
        "label": "Public",
        "description": "Information intentionally eligible for unauthenticated public delivery under its owning contract.",
        "defaultPublicDeliveryEligible": true,
        "defaultAnalyticsEligible": true,
        "defaultLogEligibility": "allowed"
      },
      {
        "id": "internal",
        "label": "Internal",
        "description": "Operational or configuration information that is not public but is not inherently personal or secret.",
        "defaultPublicDeliveryEligible": false,
        "defaultAnalyticsEligible": false,
        "defaultLogEligibility": "conditional"
      },
      {
        "id": "personal",
        "label": "Personal",
        "description": "Information relating to or reasonably linkable to a person, visitor, customer, lead or staff principal.",
        "defaultPublicDeliveryEligible": false,
        "defaultAnalyticsEligible": false,
        "defaultLogEligibility": "redacted-only"
      },
      {
        "id": "sensitive",
        "label": "Sensitive",
        "description": "Higher-risk personal, financial, authentication, transaction or operational information requiring restricted handling.",
        "defaultPublicDeliveryEligible": false,
        "defaultAnalyticsEligible": false,
        "defaultLogEligibility": "redacted-only"
      },
      {
        "id": "secret",
        "label": "Secret",
        "description": "Credentials, tokens, signing material, encryption keys or equivalent values that must not be disclosed through public/runtime data flows.",
        "defaultPublicDeliveryEligible": false,
        "defaultAnalyticsEligible": false,
        "defaultLogEligibility": "prohibited"
      }
    ]
  },
  "qualifiers": {
    "registryVersion": "1.3.0",
    "title": "Data Qualifiers",
    "description": "Operational purpose/context qualifiers that do not replace the primary sensitivity class.",
    "qualifiers": [
      {
        "id": "financial",
        "label": "Financial",
        "description": "Payment, refund, billing or transaction context."
      },
      {
        "id": "authentication",
        "label": "Authentication",
        "description": "Identity, principal, session, authorization or credential context."
      },
      {
        "id": "tracking",
        "label": "Tracking",
        "description": "Analytics, advertising, attribution, consent or visitor-observation context."
      },
      {
        "id": "content",
        "label": "Content",
        "description": "Editorial/customer-managed content or content metadata."
      },
      {
        "id": "system-metadata",
        "label": "System Metadata",
        "description": "IDs, timestamps, status, diagnostics or other operational metadata."
      }
    ]
  },
  "eligibility": {
    "registryVersion": "1.3.0",
    "title": "Data Flow Eligibility",
    "values": [
      {
        "id": "allowed",
        "label": "Allowed",
        "description": "Allowed when the owning contract and authorization permit it."
      },
      {
        "id": "conditional",
        "label": "Conditional",
        "description": "Allowed only after purpose, consent, authorization or destination-specific checks."
      },
      {
        "id": "redacted-only",
        "label": "Redacted Only",
        "description": "Only a redacted/minimized representation may flow to this destination."
      },
      {
        "id": "prohibited",
        "label": "Prohibited",
        "description": "Must not flow to this destination."
      }
    ]
  },
  "retention": {
    "registryVersion": "1.3.0",
    "title": "Retention Classes",
    "description": "Policy-oriented retention classes. They do not invent legal durations.",
    "classes": [
      {
        "id": "ephemeral",
        "label": "Ephemeral",
        "description": "Short-lived request/session processing data; retain only as operationally necessary."
      },
      {
        "id": "operational",
        "label": "Operational",
        "description": "Routine operational data retained under the Site/organization retention policy."
      },
      {
        "id": "customer-record",
        "label": "Customer/Business Record",
        "description": "Business-purpose records such as submissions/leads retained according to customer policy and obligations."
      },
      {
        "id": "consent-history",
        "label": "Consent History",
        "description": "Consent evidence/history retained according to applicable policy and evidence needs."
      },
      {
        "id": "financial-record",
        "label": "Financial Record",
        "description": "Transaction/payment records retained according to financial/accounting/provider policy; raw card data remains prohibited."
      },
      {
        "id": "security-audit",
        "label": "Security/Audit",
        "description": "Security and audit evidence retained according to operational/security policy."
      },
      {
        "id": "credential-lifecycle",
        "label": "Credential Lifecycle",
        "description": "Credential references and lifecycle metadata retained only while required for the authorized integration/security lifecycle."
      },
      {
        "id": "content-lifecycle",
        "label": "Content Lifecycle",
        "description": "Content and publishing data retained according to content lifecycle/version policy."
      },
      {
        "id": "legal-hold",
        "label": "Legal Hold",
        "description": "Exceptional retention override only when an authorized legal/operational hold exists; not an automatic default."
      }
    ]
  },
  "redaction": {
    "registryVersion": "1.3.0",
    "title": "Redaction Behaviors",
    "values": [
      {
        "id": "none",
        "label": "None",
        "description": "No redaction needed within an authorized context."
      },
      {
        "id": "mask",
        "label": "Mask",
        "description": "Mask most of the value for display/diagnostics."
      },
      {
        "id": "partial",
        "label": "Partial",
        "description": "Expose only the contract-approved safe subset."
      },
      {
        "id": "pseudonymize",
        "label": "Pseudonymize",
        "description": "Replace direct identity with a bounded pseudonymous identifier; this is not automatically anonymous."
      },
      {
        "id": "remove",
        "label": "Remove",
        "description": "Omit the value entirely from the destination or output."
      }
    ]
  },
  "deletion": {
    "registryVersion": "1.3.0",
    "title": "Deletion / Anonymization Behaviors",
    "values": [
      {
        "id": "delete",
        "label": "Delete",
        "description": "Delete when the governing operation/policy authorizes deletion."
      },
      {
        "id": "anonymize",
        "label": "Anonymize",
        "description": "Remove identifying linkage using the approved anonymization process."
      },
      {
        "id": "retain-per-policy",
        "label": "Retain Per Policy",
        "description": "Retain according to the owning retention class/policy."
      },
      {
        "id": "protected-retention",
        "label": "Protected Retention",
        "description": "Do not delete automatically because integrity/security/financial evidence may require retention."
      },
      {
        "id": "review-required",
        "label": "Review Required",
        "description": "A human/policy decision is required before deletion or anonymization."
      }
    ]
  },
  "consentRelevance": {
    "registryVersion": "1.3.0",
    "title": "Consent Relevance",
    "values": [
      {
        "id": "none",
        "label": "None",
        "description": "No consent gate is implied by this metadata; other lawful/business/security requirements may still apply."
      },
      {
        "id": "business-purpose",
        "label": "Business Purpose",
        "description": "Collected/used for the requested business interaction such as a form submission or lead workflow; distinct from optional analytics consent."
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "description": "Subject to analytics/measurement consent rules where configured/applicable."
      },
      {
        "id": "marketing",
        "label": "Marketing",
        "description": "Subject to marketing/advertising consent rules where configured/applicable."
      },
      {
        "id": "functional",
        "label": "Functional",
        "description": "Required for a requested functional service rather than optional analytics/marketing."
      },
      {
        "id": "multiple",
        "label": "Multiple",
        "description": "Different fields/flows within the value may require different consent/purpose treatment."
      }
    ]
  },
  "exportSensitivity": {
    "registryVersion": "1.3.0",
    "title": "Export Sensitivity",
    "values": [
      {
        "id": "normal",
        "label": "Normal",
        "description": "Normal authorized export handling."
      },
      {
        "id": "restricted",
        "label": "Restricted",
        "description": "Export requires explicit authorization and appropriate minimization/audit."
      },
      {
        "id": "highly-restricted",
        "label": "Highly Restricted",
        "description": "Export is generally prohibited or requires exceptional privileged handling."
      }
    ]
  },
  "operations": {
    "registryVersion": "1.3.0",
    "title": "Data Subject / Customer Privacy Operations",
    "description": "Future-safe operation primitives. Phase 30 does not claim a complete legal-compliance workflow engine.",
    "operations": [
      {
        "id": "export",
        "label": "Export",
        "status": "future-capability",
        "description": "Produce an authorized export of in-scope customer/personal data with classification-aware handling.",
        "implementedRuntime": false
      },
      {
        "id": "deletion-request",
        "label": "Deletion Request",
        "status": "future-capability",
        "description": "Request deletion of eligible data subject to retention/integrity constraints.",
        "implementedRuntime": false
      },
      {
        "id": "anonymization-request",
        "label": "Anonymization Request",
        "status": "future-capability",
        "description": "Request anonymization when deletion is not the correct operation.",
        "implementedRuntime": false
      },
      {
        "id": "retention-expiration",
        "label": "Retention Expiration",
        "status": "contract-primitive",
        "description": "Represent policy-driven expiration without inventing legal durations.",
        "implementedRuntime": false
      },
      {
        "id": "legal-hold",
        "label": "Legal Hold",
        "status": "future-capability",
        "description": "Represent an authorized hold that blocks normal deletion/expiration.",
        "implementedRuntime": false
      },
      {
        "id": "consent-history",
        "label": "Consent History",
        "status": "contract-primitive",
        "description": "Existing consent contracts provide evidence primitives; Phase 30 does not claim a complete request portal.",
        "implementedRuntime": false
      },
      {
        "id": "processing-record-reference",
        "label": "Processing Record Reference",
        "status": "future-capability",
        "description": "Reference future processing-record evidence without embedding a legal-compliance engine in the Registry.",
        "implementedRuntime": false
      }
    ]
  },
  "consentBoundaries": {
    "registryVersion": "1.3.0",
    "title": "Consent Boundaries",
    "rules": [
      {
        "id": "analytics-vs-business-purpose",
        "statement": "Analytics/marketing consent and consent or acknowledgement for a requested form/business purpose are distinct concepts and must not be collapsed into one boolean."
      },
      {
        "id": "unknown-optional-not-granted",
        "statement": "Unknown optional analytics/marketing consent is not silently treated as granted."
      },
      {
        "id": "security-not-weakened",
        "statement": "Customer-controlled consent configuration does not disable mandatory security, fraud, integrity or transaction controls."
      },
      {
        "id": "destination-gating",
        "statement": "Tracking destinations evaluate the relevant consent category/state before optional dispatch."
      },
      {
        "id": "no-raw-form-tracking",
        "statement": "Raw form payloads are not copied wholesale into analytics/advertising events."
      },
      {
        "id": "hashed-not-anonymous",
        "statement": "Hashed or pseudonymized personal data is not automatically anonymous and remains classified according to linkability and purpose."
      }
    ]
  },
  "fieldHandling": {
    "registryVersion": "1.3.0",
    "schemaVersion": "1.0.0",
    "title": "Field-level Privacy Handling",
    "description": "Explicit Phase 30 privacy metadata for high-risk fields. Coverage grows with future contracts; absence does not imply public eligibility.",
    "entries": [
      {
        "handlingId": "PRIV-FLD-001",
        "targetId": "permissions.principalReference",
        "fieldPath": "fields.principalId",
        "classification": "personal",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference the authenticated/authorized principal.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-AUTHZ-001",
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-002",
        "targetId": "permissions.principalReference",
        "fieldPath": "fields.organizationId",
        "classification": "internal",
        "qualifiers": [
          "authentication",
          "system-metadata"
        ],
        "purpose": "Scope authorization to the owning Organization.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-TENANT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-003",
        "targetId": "permissions.authorizationDecision",
        "fieldPath": "fields.principalId",
        "classification": "personal",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Record the principal evaluated by authorization.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-AUTHZ-001",
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-004",
        "targetId": "permissions.authorizationDecision",
        "fieldPath": "fields.matchedRoleIds",
        "classification": "internal",
        "qualifiers": [
          "authentication",
          "system-metadata"
        ],
        "purpose": "Preserve authorization-decision evidence.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-AUTHZ-001",
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-010",
        "targetId": "forms.submission",
        "fieldPath": "fields.values",
        "classification": "sensitive",
        "qualifiers": [],
        "purpose": "Process user-submitted form values for the requested business interaction.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-011",
        "targetId": "forms.submission",
        "fieldPath": "fields.files",
        "classification": "sensitive",
        "qualifiers": [],
        "purpose": "Process user-submitted attachments under the form purpose.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-UPL-001",
          "SEC-UPL-002",
          "SEC-UPL-003"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-012",
        "targetId": "forms.submission",
        "fieldPath": "fields.consents",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Preserve consent/acknowledgement evidence associated with a submission.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-013",
        "targetId": "forms.submission",
        "fieldPath": "fields.requestContext",
        "classification": "personal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Support request integrity, abuse prevention and operational diagnosis.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "ephemeral",
        "exportSensitivity": "restricted",
        "consentRelevance": "functional",
        "deletionBehavior": "delete",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-ABUSE-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-014",
        "targetId": "forms.submission",
        "fieldPath": "fields.spamDecision",
        "classification": "internal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Record spam/abuse decision metadata.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-ABUSE-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-015",
        "targetId": "forms.lead",
        "fieldPath": "fields.displayName",
        "classification": "personal",
        "qualifiers": [],
        "purpose": "Identify the lead for customer follow-up.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-016",
        "targetId": "forms.lead",
        "fieldPath": "fields.contactPoints",
        "classification": "personal",
        "qualifiers": [],
        "purpose": "Contact the lead through customer-authorized business workflows.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-017",
        "targetId": "forms.lead",
        "fieldPath": "fields.organizationName",
        "classification": "personal",
        "qualifiers": [],
        "purpose": "Maintain lead business context where supplied.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-018",
        "targetId": "forms.lead",
        "fieldPath": "fields.submissionIds",
        "classification": "personal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Link the Lead to source submissions without merging the entities.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "customer-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "business-purpose",
        "deletionBehavior": "review-required",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-019",
        "targetId": "forms.consentRecord",
        "fieldPath": "fields.accepted",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Preserve the consent/acknowledgement decision.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-020",
        "targetId": "forms.consentRecord",
        "fieldPath": "fields.textSnapshot",
        "classification": "internal",
        "qualifiers": [
          "content"
        ],
        "purpose": "Preserve the text shown when consent/acknowledgement was recorded.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "consent-history",
        "exportSensitivity": "normal",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-021",
        "targetId": "forms.consentRecord",
        "fieldPath": "fields.recordedAt",
        "classification": "personal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Timestamp consent evidence.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-030",
        "targetId": "marketing.trackingEvent",
        "fieldPath": "fields.context",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Provide bounded measurement context for a canonical tracking observation.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "conditional",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-PDATA-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-031",
        "targetId": "marketing.trackingEvent",
        "fieldPath": "fields.properties",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Carry allowlisted event properties without raw form payload dumping.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "conditional",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PDATA-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-032",
        "targetId": "marketing.trackingConsentRecord",
        "fieldPath": "fields.sessionId",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Associate consent state with the bounded first-party session.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "conditional",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-033",
        "targetId": "marketing.trackingConsentRecord",
        "fieldPath": "fields.anonymousVisitorId",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Associate consent state with a pseudonymous first-party visitor ID.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "conditional",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-034",
        "targetId": "marketing.trackingConsentRecord",
        "fieldPath": "fields.preferences",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Record consent preferences by category.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "conditional",
        "retentionClass": "consent-history",
        "exportSensitivity": "restricted",
        "consentRelevance": "multiple",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-035",
        "targetId": "marketing.sessionContext",
        "fieldPath": "fields.sessionId",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Correlate bounded first-party session observations.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "conditional",
        "retentionClass": "ephemeral",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-036",
        "targetId": "marketing.sessionContext",
        "fieldPath": "fields.landingPage",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Measure landing-page context without treating the URL as a place for sensitive data.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "conditional",
        "retentionClass": "ephemeral",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-QUERY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-037",
        "targetId": "marketing.sessionContext",
        "fieldPath": "fields.initialTrafficSource",
        "classification": "personal",
        "qualifiers": [
          "tracking"
        ],
        "purpose": "Record bounded attribution context.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "conditional",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "analytics",
        "deletionBehavior": "anonymize",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-040",
        "targetId": "integrations.credentialReference",
        "fieldPath": "fields.credentialId",
        "classification": "internal",
        "qualifiers": [
          "authentication",
          "system-metadata"
        ],
        "purpose": "Reference credential lifecycle metadata without exposing credential material.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-SECRET-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-041",
        "targetId": "integrations.credentialReference",
        "fieldPath": "fields.secretRefs",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference protected secrets used by an authorized connector.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-SECRET-001",
          "SEC-KEY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-042",
        "targetId": "integrations.secretReference",
        "fieldPath": "fields.secretRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference server-side secret storage without exposing raw material.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-SECRET-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-043",
        "targetId": "integrations.apiKeyConfiguration",
        "fieldPath": "fields.secretRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference an API key in protected storage.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-KEY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-044",
        "targetId": "integrations.oauthConfiguration",
        "fieldPath": "fields.clientId",
        "classification": "internal",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Identify the OAuth client without treating it as secret material.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-OAUTH-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-045",
        "targetId": "integrations.oauthConfiguration",
        "fieldPath": "fields.clientSecretRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference the OAuth client secret in protected storage.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-OAUTH-001",
          "SEC-SECRET-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-046",
        "targetId": "integrations.oauthConfiguration",
        "fieldPath": "fields.accessTokenRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference access-token material without browser/public exposure.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-OAUTH-001",
          "SEC-TOKEN-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-047",
        "targetId": "integrations.oauthConfiguration",
        "fieldPath": "fields.refreshTokenRef",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference refresh-token material without browser/public exposure.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-OAUTH-001",
          "SEC-TOKEN-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-050",
        "targetId": "commerce.payment",
        "fieldPath": "fields.orderId",
        "classification": "sensitive",
        "qualifiers": [
          "financial",
          "system-metadata"
        ],
        "purpose": "Link payment facts to the owning order.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-PAY-002"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-051",
        "targetId": "commerce.payment",
        "fieldPath": "fields.amount",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Record authoritative payment amount/currency value.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "redacted-only",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-PAY-002"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-052",
        "targetId": "commerce.payment",
        "fieldPath": "fields.method",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Reference the safe payment-method representation; raw PAN/CVV remains prohibited.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PAY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-053",
        "targetId": "commerce.payment",
        "fieldPath": "fields.providerPaymentId",
        "classification": "sensitive",
        "qualifiers": [
          "financial",
          "system-metadata"
        ],
        "purpose": "Correlate the provider-side payment without exposing provider secrets.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PAY-002"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-054",
        "targetId": "commerce.payment",
        "fieldPath": "fields.refundedAmount",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Maintain immutable/reconciled refund financial facts.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "redacted-only",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-PAY-003"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-055",
        "targetId": "commerce.paymentMethodReference",
        "fieldPath": "fields.providerMethodId",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Hold only the opaque provider payment-method reference.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PAY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-056",
        "targetId": "commerce.paymentMethodReference",
        "fieldPath": "fields.last4",
        "classification": "sensitive",
        "qualifiers": [
          "financial"
        ],
        "purpose": "Display the contract-approved safe last-four representation only.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "redacted-only",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "financial-record",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-PAY-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-060",
        "targetId": "webhooks.delivery",
        "fieldPath": "fields.eventId",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Correlate the authoritative Event to delivery state without treating transport as business truth.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "allowed",
        "webhookEligibility": "allowed",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-WH-003"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-061",
        "targetId": "webhooks.delivery",
        "fieldPath": "fields.lastFailure",
        "classification": "internal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Persist sanitized delivery failure diagnostics.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-062",
        "targetId": "webhooks.deliveryAttempt",
        "fieldPath": "fields.request",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Persist only sanitized request metadata for delivery evidence.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-WH-002",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-063",
        "targetId": "webhooks.deliveryAttempt",
        "fieldPath": "fields.response",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Persist only sanitized response metadata for delivery evidence.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "operational",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-064",
        "targetId": "webhooks.signingKeyReference",
        "fieldPath": "fields.secretReference",
        "classification": "secret",
        "qualifiers": [
          "authentication"
        ],
        "purpose": "Reference webhook signing material in protected server-side storage.",
        "publicDeliveryEligible": false,
        "logEligibility": "prohibited",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "credential-lifecycle",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "remove",
        "relatedSecurityControls": [
          "SEC-WH-002",
          "SEC-SECRET-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-070",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.actor",
        "classification": "personal",
        "qualifiers": [
          "authentication",
          "system-metadata"
        ],
        "purpose": "Identify the actor responsible for an auditable change.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "conditional",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "pseudonymize",
        "relatedSecurityControls": [
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-071",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.before",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Retain bounded pre-change evidence with secret/personal-field redaction.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-AUDIT-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-072",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.after",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Retain bounded post-change evidence with secret/personal-field redaction.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "highly-restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-AUDIT-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-073",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.requestId",
        "classification": "internal",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Correlate audit evidence to an operational request.",
        "publicDeliveryEligible": false,
        "logEligibility": "allowed",
        "eventEligibility": "conditional",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "none",
        "relatedSecurityControls": [
          "SEC-AUDIT-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-074",
        "targetId": "core.auditRecord",
        "fieldPath": "fields.metadata",
        "classification": "sensitive",
        "qualifiers": [
          "system-metadata"
        ],
        "purpose": "Store bounded audit metadata while excluding secrets and unnecessary personal data.",
        "publicDeliveryEligible": false,
        "logEligibility": "redacted-only",
        "eventEligibility": "prohibited",
        "webhookEligibility": "prohibited",
        "analyticsEligibility": "prohibited",
        "retentionClass": "security-audit",
        "exportSensitivity": "restricted",
        "consentRelevance": "none",
        "deletionBehavior": "protected-retention",
        "redactionBehavior": "partial",
        "relatedSecurityControls": [
          "SEC-AUDIT-001",
          "SEC-LOG-001"
        ],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-080",
        "targetId": "content.page",
        "fieldPath": "fields.title",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Render the customer-managed public page title when the Page is published.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-081",
        "targetId": "content.page",
        "fieldPath": "fields.slug",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Resolve the published Page URL path.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-082",
        "targetId": "content.page",
        "fieldPath": "fields.summary",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Render the published Page summary where the frontend uses it.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-083",
        "targetId": "content.blogPost",
        "fieldPath": "fields.title",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Render the published Blog Post title.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      },
      {
        "handlingId": "PRIV-FLD-084",
        "targetId": "content.blogPost",
        "fieldPath": "fields.excerpt",
        "classification": "public",
        "qualifiers": [
          "content"
        ],
        "purpose": "Render the published Blog Post excerpt.",
        "publicDeliveryEligible": true,
        "logEligibility": "allowed",
        "eventEligibility": "allowed",
        "webhookEligibility": "conditional",
        "analyticsEligibility": "allowed",
        "retentionClass": "content-lifecycle",
        "exportSensitivity": "normal",
        "consentRelevance": "none",
        "deletionBehavior": "retain-per-policy",
        "redactionBehavior": "none",
        "relatedSecurityControls": [],
        "status": "stable",
        "version": "1.3.0"
      }
    ]
  },
  "coverage": {
    "registryVersion": "1.3.0",
    "title": "High-risk Privacy Coverage",
    "areas": [
      {
        "area": "authentication",
        "status": "covered",
        "targetRegistryIds": [
          "permissions.principalReference",
          "permissions.authorizationDecision",
          "security.control.sec_auth_001",
          "security.control.sec_sess_001",
          "security.secretClasses"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-001",
          "PRIV-FLD-002",
          "PRIV-FLD-003",
          "PRIV-FLD-004"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "forms-leads",
        "status": "covered",
        "targetRegistryIds": [
          "forms.submission",
          "forms.lead",
          "forms.consentRecord"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-010",
          "PRIV-FLD-011",
          "PRIV-FLD-012",
          "PRIV-FLD-013",
          "PRIV-FLD-014",
          "PRIV-FLD-015",
          "PRIV-FLD-016",
          "PRIV-FLD-017",
          "PRIV-FLD-018",
          "PRIV-FLD-019",
          "PRIV-FLD-020",
          "PRIV-FLD-021"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "marketing",
        "status": "covered",
        "targetRegistryIds": [
          "marketing.trackingEvent",
          "marketing.trackingConsentRecord",
          "marketing.sessionContext",
          "marketing.consentPolicy"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-030",
          "PRIV-FLD-031",
          "PRIV-FLD-032",
          "PRIV-FLD-033",
          "PRIV-FLD-034",
          "PRIV-FLD-035",
          "PRIV-FLD-036",
          "PRIV-FLD-037"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "integrations",
        "status": "covered",
        "targetRegistryIds": [
          "integrations.credentialReference",
          "integrations.secretReference",
          "integrations.apiKeyConfiguration",
          "integrations.oauthConfiguration"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-040",
          "PRIV-FLD-041",
          "PRIV-FLD-042",
          "PRIV-FLD-043",
          "PRIV-FLD-044",
          "PRIV-FLD-045",
          "PRIV-FLD-046",
          "PRIV-FLD-047"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "commerce",
        "status": "covered",
        "targetRegistryIds": [
          "commerce.payment",
          "commerce.paymentMethodReference",
          "commerce.order"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-050",
          "PRIV-FLD-051",
          "PRIV-FLD-052",
          "PRIV-FLD-053",
          "PRIV-FLD-054",
          "PRIV-FLD-055",
          "PRIV-FLD-056"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "payments",
        "status": "covered",
        "targetRegistryIds": [
          "commerce.payment",
          "commerce.paymentMethodReference",
          "commerce.rule.rawCardDataProhibited"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-050",
          "PRIV-FLD-051",
          "PRIV-FLD-052",
          "PRIV-FLD-053",
          "PRIV-FLD-054",
          "PRIV-FLD-055",
          "PRIV-FLD-056"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "webhooks",
        "status": "covered",
        "targetRegistryIds": [
          "webhooks.delivery",
          "webhooks.deliveryAttempt",
          "webhooks.signingKeyReference"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-060",
          "PRIV-FLD-061",
          "PRIV-FLD-062",
          "PRIV-FLD-063",
          "PRIV-FLD-064"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      },
      {
        "area": "audit",
        "status": "covered",
        "targetRegistryIds": [
          "core.auditRecord",
          "security.control.sec_audit_001"
        ],
        "fieldHandlingIds": [
          "PRIV-FLD-070",
          "PRIV-FLD-071",
          "PRIV-FLD-072",
          "PRIV-FLD-073",
          "PRIV-FLD-074"
        ],
        "notes": "Explicit Phase 30 classification/handling coverage for this high-risk area. Additional fields inherit owning-contract/security rules unless explicitly classified."
      }
    ]
  },
  "definitions": [
    {
      "$id": "privacy.consentBoundary",
      "name": "Consent Boundary",
      "version": "1.3.0",
      "status": "stable",
      "phase": 30,
      "description": "Rule distinguishing business-purpose consent/acknowledgement from analytics and marketing consent.",
      "domain": "privacy",
      "type": "schema",
      "tags": [
        "privacy",
        "phase-30"
      ]
    },
    {
      "$id": "privacy.dataClassification",
      "name": "Data Classification",
      "version": "1.3.0",
      "status": "stable",
      "phase": 30,
      "description": "Primary public/internal/personal/sensitive/secret classification.",
      "domain": "privacy",
      "type": "schema",
      "tags": [
        "privacy",
        "phase-30"
      ]
    },
    {
      "$id": "privacy.dataQualifier",
      "name": "Data Qualifier",
      "version": "1.3.0",
      "status": "stable",
      "phase": 30,
      "description": "Operational qualifier such as financial, authentication, tracking, content or system metadata.",
      "domain": "privacy",
      "type": "schema",
      "tags": [
        "privacy",
        "phase-30"
      ]
    },
    {
      "$id": "privacy.fieldHandling",
      "name": "Field Privacy Handling",
      "version": "1.3.0",
      "status": "stable",
      "phase": 30,
      "description": "Field-level classification, purpose, flow eligibility, retention, consent, deletion and redaction metadata.",
      "domain": "privacy",
      "type": "schema",
      "tags": [
        "privacy",
        "phase-30"
      ]
    },
    {
      "$id": "privacy.privacyOperation",
      "name": "Privacy Operation",
      "version": "1.3.0",
      "status": "stable",
      "phase": 30,
      "description": "Future-safe export/deletion/anonymization/retention/legal-hold/consent-history operation primitive.",
      "domain": "privacy",
      "type": "schema",
      "tags": [
        "privacy",
        "phase-30"
      ]
    },
    {
      "$id": "privacy.retentionClass",
      "name": "Retention Class",
      "version": "1.3.0",
      "status": "stable",
      "phase": 30,
      "description": "Policy-oriented retention class without fabricated legal duration.",
      "domain": "privacy",
      "type": "schema",
      "tags": [
        "privacy",
        "phase-30"
      ]
    }
  ],
  "sourceHashes": {
    "registry/privacy/index.json": "20eda0211a200e9ef3da8740a4cb8e00e161592ebf0db6f21ccf59ffc212a538",
    "registry/privacy/classifications.json": "4438df78278496d37870180ce8176413d6575e1598320fffc625df75de3f0c72",
    "registry/privacy/qualifiers.json": "834d9d4abdd8e81304e27e480dad04716d43d988bc3313edb393cc5dcb43abb0",
    "registry/privacy/eligibility-values.json": "65eb810ef2c42f070da1d9a19aa734fa6aac28fc4761fa7e97b7197df6164456",
    "registry/privacy/retention-classes.json": "79892f68b87d333b12fe2608bf6c4eb53b2ae1a9cf4361a9b9dab8539ed0a643",
    "registry/privacy/redaction-behaviors.json": "6aa4b6822bbec20328385e23037352ebe6205df961223d30041042d1bdfb5240",
    "registry/privacy/deletion-behaviors.json": "beeef80ba248ecf09bbc2b8f97a1df27d53b3c17e1591b7099f546ce5b482892",
    "registry/privacy/consent-relevance.json": "1394a1acf04b6937e3d811e368ca8c54835eb1f8b5b3c2b33f3bf77746f23ee5",
    "registry/privacy/export-sensitivity.json": "c2449e4126317df3f0f1eb29b5d46168b38b97c84be0d3f3e1016b52262fd677",
    "registry/privacy/operations.json": "981562df40bffaf037122a657ba66a97db0f8654dafff2783f34733793484213",
    "registry/privacy/consent-boundaries.json": "ddb4cd51f20a6e2bac2a3775947e1520e59db30b6653edd9eb2d789294d3edf9",
    "registry/privacy/field-handling.json": "9d66b0e19f7dfc333f16e858a045bd782e49225128bb24d0b89e879b7f9fc5ef",
    "registry/privacy/coverage.json": "7acbf875263b5e0784d921474f464a09b6dec9f6919537dc3d2f4cfecfd60d93",
    "registry/privacy/data-handling.schema.json": "e0fd62ec369c184491abb3b7d2b3b4ca1a927a80dd0d9ebf2c9f5b5466a2a1ff",
    "registry/privacy/definitions/consentBoundary.json": "5a3a9f82dfda26480b600dc9dc6e09b3663a9719758d5f59117efe23870f6543",
    "registry/privacy/definitions/dataClassification.json": "3151200d8644d42ddb16d3b53b35f25b53fe72d309f1f0932ffcd3bdfcd770ff",
    "registry/privacy/definitions/dataQualifier.json": "5c8376796c65fa6d986fdf6e68b0aaf38b49ab92a07225aef4ca33041e74cb02",
    "registry/privacy/definitions/fieldHandling.json": "8658f3261d0a780494fd80ed8f09e35bac1ef9209826e8e7e6e685ac7d794889",
    "registry/privacy/definitions/privacyOperation.json": "51ff5c01437bf26cfce0a65ad11337db4577db4994fe15ce06f5439b0a6141d1",
    "registry/privacy/definitions/retentionClass.json": "383a0412ca126877b3d1e82b54b1a75aaa85387f2921a57ba08882809c2c8554"
  }
};
