// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/security/*
export const GENERATED_SECURITY = {
  "registryVersion": "1.2.0",
  "index": {
    "registryVersion": "1.2.0",
    "schemaVersion": "1.0.0",
    "title": "NEXT F Security Control Registry",
    "description": "Machine-readable security standards for NEXT F platform surfaces.",
    "controlCount": 49,
    "mandatoryCount": 49,
    "recommendedCount": 0,
    "categories": [
      {
        "id": "authentication",
        "label": "Authentication",
        "description": "Identity verification and authentication boundaries.",
        "controlCount": 2
      },
      {
        "id": "sessions",
        "label": "Session Management",
        "description": "Session creation, rotation, expiry and revocation.",
        "controlCount": 1
      },
      {
        "id": "authorization",
        "label": "Authorization",
        "description": "Permission evaluation and privileged operation controls.",
        "controlCount": 2
      },
      {
        "id": "browser",
        "label": "Browser Security",
        "description": "CSRF, XSS, sanitization, redirects and browser execution boundaries.",
        "controlCount": 6
      },
      {
        "id": "api",
        "label": "API & Service Security",
        "description": "CORS, rate limits, service authentication and safe API boundaries.",
        "controlCount": 5
      },
      {
        "id": "secrets",
        "label": "Secrets & Credentials",
        "description": "Secrets, API keys, OAuth credentials and token handling.",
        "controlCount": 5
      },
      {
        "id": "uploads",
        "label": "File Uploads",
        "description": "Upload type, size, scanning, storage and download safety.",
        "controlCount": 3
      },
      {
        "id": "abuse",
        "label": "Abuse Prevention",
        "description": "Rate limiting, brute force and automated abuse resistance.",
        "controlCount": 3
      },
      {
        "id": "isolation",
        "label": "Isolation",
        "description": "Tenant, Site and environment isolation.",
        "controlCount": 2
      },
      {
        "id": "logging",
        "label": "Logging & Audit",
        "description": "Security logging, auditability and safe error behavior.",
        "controlCount": 3
      },
      {
        "id": "transport",
        "label": "Transport & Headers",
        "description": "TLS, HTTPS, CSP and security headers.",
        "controlCount": 3
      },
      {
        "id": "supply-chain",
        "label": "Dependency & Supply Chain",
        "description": "Dependency hygiene and build artifact integrity.",
        "controlCount": 2
      },
      {
        "id": "recovery",
        "label": "Backup & Recovery",
        "description": "Contract-data backup and recovery expectations.",
        "controlCount": 2
      },
      {
        "id": "commerce",
        "label": "Commerce Security",
        "description": "Payment and transaction security boundaries.",
        "controlCount": 3
      },
      {
        "id": "privacy",
        "label": "Personal Data Security",
        "description": "Security handling for personal and sensitive information.",
        "controlCount": 1
      },
      {
        "id": "integrations",
        "label": "Integration Security",
        "description": "External-provider connection and credential boundaries.",
        "controlCount": 2
      },
      {
        "id": "environments",
        "label": "Preview & Environment Security",
        "description": "Preview, staging and production separation.",
        "controlCount": 1
      },
      {
        "id": "webhooks",
        "label": "Webhook Security",
        "description": "Endpoint security, signing, replay resistance and delivery trust.",
        "controlCount": 3
      }
    ],
    "controls": [
      {
        "controlId": "SEC-ABUSE-001",
        "name": "Abuse prevention",
        "category": "abuse",
        "requirement": "Forms, authentication and other abuse-prone surfaces must apply layered controls appropriate to risk without treating one signal as authoritative.",
        "rationale": "Automated abuse can bypass simple client-side checks.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.forms"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "medium",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_abuse_001.json"
      },
      {
        "controlId": "SEC-AUDIT-001",
        "name": "Audit privileged changes",
        "category": "logging",
        "requirement": "Security-relevant and privileged state changes must produce sufficient audit evidence to identify actor, action, scope, outcome and time.",
        "rationale": "Privileged actions need traceability and incident-review evidence.",
        "applicability": [
          "admin",
          "customer-cms",
          "api"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [
          "platform.audit.view",
          "core.audit.view"
        ],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_audit_001.json"
      },
      {
        "controlId": "SEC-AUTH-001",
        "name": "Authentication required for protected operations",
        "category": "authentication",
        "requirement": "Protected and privileged operations must require an authenticated principal using an approved authentication mechanism.",
        "rationale": "Unauthenticated access must never be treated as sufficient proof of identity.",
        "applicability": [
          "customer-cms",
          "admin",
          "api",
          "commerce",
          "integrations"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "permissions.authorizationContext"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_auth_001.json"
      },
      {
        "controlId": "SEC-AUTH-002",
        "name": "Recent authentication for high-risk actions",
        "category": "authentication",
        "requirement": "High-risk operations that declare recent-authentication requirements must re-establish sufficiently recent user authentication before execution.",
        "rationale": "Long-lived sessions must not silently authorize sensitive account or credential changes.",
        "applicability": [
          "admin",
          "customer-cms"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "adminUi.adminAction"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_auth_002.json"
      },
      {
        "controlId": "SEC-AUTHZ-001",
        "name": "Server-side permission enforcement",
        "category": "authorization",
        "requirement": "Every privileged operation must enforce canonical permissions at the server boundary; UI visibility is never the authorization decision.",
        "rationale": "Client-side controls are bypassable and cannot protect authoritative state.",
        "applicability": [
          "customer-cms",
          "admin",
          "api"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "permissions.authorizationDecision",
          "permissions.authorizationContext"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_authz_001.json"
      },
      {
        "controlId": "SEC-AUTHZ-002",
        "name": "Privileged operation confirmation",
        "category": "authorization",
        "requirement": "Destructive or privileged operations must apply the confirmation and recent-authentication requirements declared by their operational metadata.",
        "rationale": "High-impact operations require explicit user intent and policy enforcement.",
        "applicability": [
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "both",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "adminUi.adminAction"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_authz_002.json"
      },
      {
        "controlId": "SEC-BACKUP-001",
        "name": "Contract-data backup",
        "category": "recovery",
        "requirement": "Authoritative contract source and critical registry release artifacts must be recoverable from version-controlled or otherwise verified backups.",
        "rationale": "Loss or silent corruption of contract authority would affect every consumer.",
        "applicability": [
          "registry",
          "portal"
        ],
        "obligation": "mandatory",
        "scope": "operations",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_backup_001.json"
      },
      {
        "controlId": "SEC-BRUTE-001",
        "name": "Brute-force resistance",
        "category": "abuse",
        "requirement": "Authentication and sensitive verification flows must limit repeated attempts and support lockout/backoff or equivalent defenses without exposing account-enumeration details.",
        "rationale": "Repeated guessing attacks target credentials and verification factors.",
        "applicability": [
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_brute_001.json"
      },
      {
        "controlId": "SEC-CORS-001",
        "name": "Explicit CORS policy",
        "category": "api",
        "requirement": "APIs must apply the canonical CORS policy appropriate to their surface and must not use permissive credentialed cross-origin access.",
        "rationale": "Cross-origin access must be deliberate and least-privileged.",
        "applicability": [
          "api"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "api.cors-policies"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_cors_001.json"
      },
      {
        "controlId": "SEC-CSP-001",
        "name": "Content Security Policy",
        "category": "transport",
        "requirement": "Web applications should use a restrictive, deployment-appropriate CSP and integrations must not silently weaken it with uncontrolled script origins.",
        "rationale": "CSP limits the blast radius of injection and third-party script compromise.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.integrations",
          "modules.marketing"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_csp_001.json"
      },
      {
        "controlId": "SEC-CSRF-001",
        "name": "CSRF protection for browser-authenticated writes",
        "category": "browser",
        "requirement": "Browser-authenticated state-changing requests must use CSRF-resistant request patterns and must not rely on ambient credentials alone.",
        "rationale": "Cross-site requests must not be able to trigger privileged mutations.",
        "applicability": [
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "both",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_csrf_001.json"
      },
      {
        "controlId": "SEC-DEP-001",
        "name": "Dependency vulnerability management",
        "category": "supply-chain",
        "requirement": "Runtime and build dependencies must be inventoried, reviewed and updated when security risk requires it.",
        "rationale": "Known vulnerable dependencies can compromise otherwise-correct application code.",
        "applicability": [
          "build-tooling",
          "portal",
          "customer-sites"
        ],
        "obligation": "mandatory",
        "scope": "build",
        "affectedModules": [],
        "verificationMethods": [
          "dependency-scan",
          "manual-review"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_dep_001.json"
      },
      {
        "controlId": "SEC-ENV-001",
        "name": "Environment isolation",
        "category": "isolation",
        "requirement": "Development, preview/staging and production environments must keep credentials, data access and integrations appropriately isolated.",
        "rationale": "Environment crossover can expose production data or credentials.",
        "applicability": [
          "site-manifest",
          "integrations",
          "api"
        ],
        "obligation": "mandatory",
        "scope": "operations",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "integrations.environmentBinding"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_env_001.json"
      },
      {
        "controlId": "SEC-ERR-001",
        "name": "Customer-safe error handling",
        "category": "logging",
        "requirement": "Errors returned to untrusted clients must not expose secrets, stack traces, internal credentials, private paths or cross-tenant data.",
        "rationale": "Verbose internal failures can disclose exploitable implementation detail.",
        "applicability": [
          "api",
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "medium",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_err_001.json"
      },
      {
        "controlId": "SEC-HDR-001",
        "name": "Security headers baseline",
        "category": "transport",
        "requirement": "Web surfaces must apply security headers appropriate to their runtime, including framing, content-type and referrer protections where applicable.",
        "rationale": "Browser security headers provide defense-in-depth against common web attacks.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "medium",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_hdr_001.json"
      },
      {
        "controlId": "SEC-IDEMP-001",
        "name": "Replay-safe idempotency for sensitive commands",
        "category": "api",
        "requirement": "Sensitive retried commands must use contract-defined idempotency/replay protections where duplicate execution could alter security or financial state.",
        "rationale": "Retries and replay can otherwise duplicate privileged or financial effects.",
        "applicability": [
          "api",
          "commerce",
          "webhooks"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [
          "commerce.rule.providerCallbackDeduplication"
        ],
        "relatedRegistryIds": [
          "api.idempotencyContext"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_idemp_001.json"
      },
      {
        "controlId": "SEC-IN-001",
        "name": "Authoritative server input validation",
        "category": "api",
        "requirement": "All untrusted input must be validated server-side against the relevant canonical contract before authoritative use.",
        "rationale": "Client validation is UX only and cannot establish trust.",
        "applicability": [
          "api",
          "customer-cms",
          "admin",
          "public-site"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_in_001.json"
      },
      {
        "controlId": "SEC-INT-001",
        "name": "Integration credential isolation",
        "category": "integrations",
        "requirement": "Third-party connections must keep provider credentials protected, environment-scoped and separate from customer-visible configuration.",
        "rationale": "External providers often grant access beyond one page or request.",
        "applicability": [
          "integrations"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.integrations"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "integrations.authenticationProfile",
          "integrations.credentialReference",
          "integrations.secretReference"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_int_001.json"
      },
      {
        "controlId": "SEC-INT-002",
        "name": "Integration failure containment",
        "category": "integrations",
        "requirement": "Optional external providers must not become a trust dependency for primary content and must fail without exposing credentials or bypassing canonical validation.",
        "rationale": "Provider outages or malformed responses must not break platform trust boundaries.",
        "applicability": [
          "integrations",
          "public-site"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.integrations"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "medium",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_int_002.json"
      },
      {
        "controlId": "SEC-KEY-001",
        "name": "API key handling",
        "category": "secrets",
        "requirement": "Private API keys must be stored and transmitted only through protected server-side mechanisms; public identifiers must be distinguished from secret keys.",
        "rationale": "Provider keys frequently have broad external authority.",
        "applicability": [
          "integrations",
          "api"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "integrations.apiKeyConfiguration"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_key_001.json"
      },
      {
        "controlId": "SEC-LOG-001",
        "name": "Secret-safe logging",
        "category": "logging",
        "requirement": "Logs must exclude secrets and credentials and minimize personal data while preserving operational security evidence.",
        "rationale": "Logs are broadly retained and accessed and can become a secondary data breach source.",
        "applicability": [
          "api",
          "integrations",
          "webhooks",
          "commerce"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_log_001.json"
      },
      {
        "controlId": "SEC-OAUTH-001",
        "name": "OAuth credential and token handling",
        "category": "secrets",
        "requirement": "OAuth client secrets, access tokens and refresh tokens must remain protected; redirect/callback configuration must be explicit and validated.",
        "rationale": "OAuth bearer material grants external-system access.",
        "applicability": [
          "integrations"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "integrations.oauthConfiguration",
          "integrations.authenticationProfile"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_oauth_001.json"
      },
      {
        "controlId": "SEC-OUT-001",
        "name": "Context-aware output encoding",
        "category": "browser",
        "requirement": "Untrusted values must be encoded for the output context in which they are rendered.",
        "rationale": "Escaping requirements differ across HTML, attributes, URLs and script-adjacent contexts.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "client",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_out_001.json"
      },
      {
        "controlId": "SEC-PAY-001",
        "name": "No PAN/CVV storage",
        "category": "commerce",
        "requirement": "NEXT F contracts and implementations must not store raw payment card PAN or CVV; provider tokenization or equivalent provider-hosted handling is required.",
        "rationale": "Raw card storage materially expands payment-security scope and is outside the NEXT F model.",
        "applicability": [
          "commerce"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.commerce"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [
          "commerce.rule.rawCardDataProhibited"
        ],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_pay_001.json"
      },
      {
        "controlId": "SEC-PAY-002",
        "name": "Server-authoritative payment reconciliation",
        "category": "commerce",
        "requirement": "Payment, authorization, capture and refund state must be reconciled from trusted server/provider evidence and canonical business invariants; browser-calculated totals or states are never authoritative.",
        "rationale": "Financial integrity cannot depend on client-controlled values.",
        "applicability": [
          "commerce",
          "api"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.commerce"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [
          "commerce.rule.paymentStatusReconcile",
          "commerce.rule.captureRequiresValidAuthorization",
          "commerce.rule.refundRequiresCapturedFunds",
          "commerce.rule.providerCallbackDeduplication"
        ],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_pay_002.json"
      },
      {
        "controlId": "SEC-PAY-003",
        "name": "Payment/refund authorization",
        "category": "commerce",
        "requirement": "Payment export/manage and refund creation/management operations must enforce their canonical permissions and business invariants server-side.",
        "rationale": "Financial operations require explicit least-privilege authorization.",
        "applicability": [
          "commerce",
          "admin",
          "api"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [
          "commerce.payments.manage",
          "commerce.refunds.create",
          "commerce.refunds.manage"
        ],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_pay_003.json"
      },
      {
        "controlId": "SEC-PDATA-001",
        "name": "Personal-data security minimization",
        "category": "privacy",
        "requirement": "Personal data must be collected, exposed, logged, emitted and delivered only when the owning contract and purpose require it, with appropriate authorization.",
        "rationale": "Reducing unnecessary exposure reduces breach impact.",
        "applicability": [
          "forms",
          "commerce",
          "marketing",
          "events",
          "webhooks"
        ],
        "obligation": "mandatory",
        "scope": "both",
        "affectedModules": [
          "modules.forms",
          "modules.leads",
          "modules.commerce",
          "modules.marketing"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_pdata_001.json"
      },
      {
        "controlId": "SEC-PREV-001",
        "name": "Preview and staging access control",
        "category": "environments",
        "requirement": "Non-production environments containing customer data, privileged previews or production-like integrations must be access-controlled and clearly isolated from public production.",
        "rationale": "Preview URLs are not inherently private.",
        "applicability": [
          "preview",
          "staging",
          "customer-sites"
        ],
        "obligation": "mandatory",
        "scope": "operations",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_prev_001.json"
      },
      {
        "controlId": "SEC-QUERY-001",
        "name": "Sensitive values excluded from URLs",
        "category": "browser",
        "requirement": "Sensitive values must not be placed in query strings or fragments unless an explicit contract permits a narrowly scoped safe token.",
        "rationale": "URLs leak through history, logs, referrers and screenshots.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin",
          "api"
        ],
        "obligation": "mandatory",
        "scope": "both",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_query_001.json"
      },
      {
        "controlId": "SEC-RATE-001",
        "name": "Rate limiting",
        "category": "abuse",
        "requirement": "Public and authenticated endpoints must apply an appropriate canonical rate-limit class based on abuse and resource risk.",
        "rationale": "Unbounded request rates enable denial of service and automation abuse.",
        "applicability": [
          "api",
          "public-site"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "medium",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "api.rate-limit-classes",
          "api.rateLimitState"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_rate_001.json"
      },
      {
        "controlId": "SEC-RECOVERY-001",
        "name": "Recovery verification",
        "category": "recovery",
        "requirement": "Recovery procedures for authoritative contract data must preserve integrity, version identity and auditability rather than restoring an unverifiable latest state.",
        "rationale": "A backup is not sufficient if restoration cannot be trusted.",
        "applicability": [
          "registry",
          "portal"
        ],
        "obligation": "mandatory",
        "scope": "operations",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_recovery_001.json"
      },
      {
        "controlId": "SEC-REDIR-001",
        "name": "Safe redirects",
        "category": "browser",
        "requirement": "Redirect destinations derived from input must be constrained to explicitly allowed destinations or validated safe origins.",
        "rationale": "Open redirects enable phishing and token leakage.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "medium",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_redir_001.json"
      },
      {
        "controlId": "SEC-S2S-001",
        "name": "Service-to-service authentication",
        "category": "api",
        "requirement": "Internal service calls that can access protected data or perform privileged operations must authenticate the calling service and authorize the requested scope.",
        "rationale": "Network location alone is not identity or authorization.",
        "applicability": [
          "api",
          "integrations"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_s2s_001.json"
      },
      {
        "controlId": "SEC-SAN-001",
        "name": "Content sanitization",
        "category": "browser",
        "requirement": "Rich or user-supplied content that permits markup must be sanitized according to its contract before trusted rendering.",
        "rationale": "Stored or reflected untrusted markup can become executable content.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "both",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "fields.richText"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_san_001.json"
      },
      {
        "controlId": "SEC-SECRET-001",
        "name": "No privileged secrets in public delivery",
        "category": "secrets",
        "requirement": "Secrets, credentials, tokens, signing secrets and encryption keys must never be embedded in public Site Manifests, browser bundles, public events, examples or unauthenticated responses.",
        "rationale": "Public delivery permanently destroys confidentiality.",
        "applicability": [
          "public-site",
          "site-manifest",
          "api",
          "events"
        ],
        "obligation": "mandatory",
        "scope": "both",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "integrations.secretReference",
          "integrations.credentialReference",
          "manifest.configurationExposureKinds"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_secret_001.json"
      },
      {
        "controlId": "SEC-SECRET-002",
        "name": "Server-side secret references",
        "category": "secrets",
        "requirement": "Provider and platform secrets must be represented by protected references rather than raw values in canonical public/configuration contracts.",
        "rationale": "References preserve separation between declarative configuration and credential storage.",
        "applicability": [
          "integrations",
          "commerce",
          "webhooks"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [
          "commerce.rule.providerSecretsServerOnly"
        ],
        "relatedRegistryIds": [
          "integrations.secretReference",
          "integrations.credentialReference",
          "webhooks.signingKeyReference"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_secret_002.json"
      },
      {
        "controlId": "SEC-SESS-001",
        "name": "Secure session lifecycle",
        "category": "sessions",
        "requirement": "Sessions must have bounded lifetime, secure invalidation, rotation where appropriate, and server-authoritative revocation.",
        "rationale": "Stale or stolen sessions must not remain indefinitely usable.",
        "applicability": [
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "permissions.authorizationContext"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_sess_001.json"
      },
      {
        "controlId": "SEC-SSRF-001",
        "name": "Server-side outbound request restrictions",
        "category": "api",
        "requirement": "Server-side URL fetching and callback delivery must reject unsafe schemes/targets and apply network policy before connecting.",
        "rationale": "Untrusted URLs can otherwise reach internal or privileged network resources.",
        "applicability": [
          "api",
          "integrations",
          "webhooks"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [
          "webhooks.endpointNetworkPolicy"
        ],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_ssrf_001.json"
      },
      {
        "controlId": "SEC-SUPPLY-001",
        "name": "Build and generated-artifact integrity",
        "category": "supply-chain",
        "requirement": "Generated contract artifacts and release packages must retain integrity evidence and must not silently diverge from authoritative source.",
        "rationale": "Supply-chain integrity protects consumers from tampered or stale generated data.",
        "applicability": [
          "portal",
          "build-tooling",
          "customer-sites"
        ],
        "obligation": "mandatory",
        "scope": "build",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "registry.index"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_supply_001.json"
      },
      {
        "controlId": "SEC-TENANT-001",
        "name": "Organization and Site isolation",
        "category": "isolation",
        "requirement": "Tenant and Site scope must be derived and enforced server-side; browser-supplied tenant identifiers are never proof of authorization.",
        "rationale": "Cross-tenant access is a critical platform boundary.",
        "applicability": [
          "api",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "permissions.authorizationContext"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_tenant_001.json"
      },
      {
        "controlId": "SEC-TLS-001",
        "name": "HTTPS/TLS required",
        "category": "transport",
        "requirement": "Production network communication carrying authenticated, personal, secret or webhook data must use HTTPS/TLS with certificate validation.",
        "rationale": "Transport confidentiality and integrity are foundational security properties.",
        "applicability": [
          "api",
          "integrations",
          "webhooks",
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "operations",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [
          "webhooks.endpointNetworkPolicy"
        ],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_tls_001.json"
      },
      {
        "controlId": "SEC-TOKEN-001",
        "name": "Bearer and token exposure prevention",
        "category": "secrets",
        "requirement": "Bearer/session/access/refresh tokens must not be logged, placed in public content, or exposed in query strings unless an explicit contract safely requires a short-lived token.",
        "rationale": "Tokens commonly function as credentials.",
        "applicability": [
          "api",
          "integrations",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "both",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_token_001.json"
      },
      {
        "controlId": "SEC-UPL-001",
        "name": "Upload type and size enforcement",
        "category": "uploads",
        "requirement": "File uploads must enforce contract-defined allowed media/types and size limits server-side.",
        "rationale": "Client-provided filenames and MIME declarations are not trust boundaries.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.media",
          "modules.forms"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "api.uploadSession"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_upl_001.json"
      },
      {
        "controlId": "SEC-UPL-002",
        "name": "Upload normalization and quarantine",
        "category": "uploads",
        "requirement": "Upload handling must normalize filenames, restrict executable content, and support scan/quarantine state before risky content becomes available.",
        "rationale": "Uploaded files can carry executable or malicious payloads.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.media",
          "modules.forms"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [
          "Normalize filenames and never trust path components.",
          "Keep private-by-default where the owning contract is private.",
          "Do not serve quarantined content as trusted media.",
          "Distinguish managed media assets from form-submission attachments."
        ],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_upl_002.json"
      },
      {
        "controlId": "SEC-UPL-003",
        "name": "Authorized download and safe headers",
        "category": "uploads",
        "requirement": "Protected uploaded files must require authorization and use safe download/content headers appropriate to the file contract.",
        "rationale": "Upload authorization must continue at retrieval time.",
        "applicability": [
          "customer-cms",
          "admin",
          "api"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [
          "modules.media",
          "modules.forms"
        ],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_upl_003.json"
      },
      {
        "controlId": "SEC-WH-001",
        "name": "Webhook endpoint validation",
        "category": "webhooks",
        "requirement": "Webhook destinations must satisfy HTTPS/network-policy validation before activation and must not permit unsafe internal targets.",
        "rationale": "Outbound webhooks can become an SSRF path.",
        "applicability": [
          "webhooks"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [
          "webhooks.endpointNetworkPolicy",
          "webhooks.endpointVerification"
        ],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_wh_001.json"
      },
      {
        "controlId": "SEC-WH-002",
        "name": "Webhook signing and secret rotation",
        "category": "webhooks",
        "requirement": "Webhook deliveries requiring authenticity must use the canonical signature policy and protected signing-key references with finite secret-rotation overlap.",
        "rationale": "Receivers need verifiable origin without exposing long-lived signing secrets.",
        "applicability": [
          "webhooks"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [
          "webhooks.signaturePolicy",
          "webhooks.signingKeyReference",
          "webhooks.secretRotation"
        ],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_wh_002.json"
      },
      {
        "controlId": "SEC-WH-003",
        "name": "Webhook replay resistance",
        "category": "webhooks",
        "requirement": "Webhook delivery/verification must apply timestamp, signature and replay-protection rules so captured valid requests cannot be reused outside policy.",
        "rationale": "Signed messages can still be replayed if freshness and uniqueness are ignored.",
        "applicability": [
          "webhooks"
        ],
        "obligation": "mandatory",
        "scope": "server",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "high",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [
          "webhooks.replayProtection",
          "webhooks.deliveryAttempt"
        ],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_wh_003.json"
      },
      {
        "controlId": "SEC-XSS-001",
        "name": "No arbitrary script execution from managed content",
        "category": "browser",
        "requirement": "CMS/content values must not create arbitrary executable script paths in customer websites or management interfaces.",
        "rationale": "Structured content is data, not trusted executable code.",
        "applicability": [
          "public-site",
          "customer-cms",
          "admin"
        ],
        "obligation": "mandatory",
        "scope": "both",
        "affectedModules": [],
        "verificationMethods": [
          "configuration-review",
          "integration-test"
        ],
        "evidenceTypes": [
          "configuration",
          "test-result"
        ],
        "violationSeverity": "critical",
        "relatedPermissions": [],
        "relatedApiRules": [],
        "relatedWebhookRules": [],
        "relatedCommerceRules": [],
        "relatedRegistryIds": [
          "fields.richText"
        ],
        "subrequirements": [],
        "version": "0.30.0",
        "status": "stable",
        "phase": 29,
        "sourceReference": "registry/security/controls/sec_xss_001.json"
      }
    ],
    "sources": {
      "standard": "standards/37-security-standard.md",
      "foundation": "standards/05-security-boundaries.md",
      "controlSchema": "registry/security/security-control.schema.json",
      "secretClasses": "registry/security/secret-classes.json",
      "severityLevels": "registry/security/severity-levels.json",
      "verificationMethods": "registry/security/verification-methods.json",
      "surfaceMapping": "registry/security/surface-mapping.json"
    }
  },
  "controls": [
    {
      "controlId": "SEC-ABUSE-001",
      "name": "Abuse prevention",
      "category": "abuse",
      "requirement": "Forms, authentication and other abuse-prone surfaces must apply layered controls appropriate to risk without treating one signal as authoritative.",
      "rationale": "Automated abuse can bypass simple client-side checks.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.forms"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "medium",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_abuse_001.json"
    },
    {
      "controlId": "SEC-AUDIT-001",
      "name": "Audit privileged changes",
      "category": "logging",
      "requirement": "Security-relevant and privileged state changes must produce sufficient audit evidence to identify actor, action, scope, outcome and time.",
      "rationale": "Privileged actions need traceability and incident-review evidence.",
      "applicability": [
        "admin",
        "customer-cms",
        "api"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [
        "platform.audit.view",
        "core.audit.view"
      ],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_audit_001.json"
    },
    {
      "controlId": "SEC-AUTH-001",
      "name": "Authentication required for protected operations",
      "category": "authentication",
      "requirement": "Protected and privileged operations must require an authenticated principal using an approved authentication mechanism.",
      "rationale": "Unauthenticated access must never be treated as sufficient proof of identity.",
      "applicability": [
        "customer-cms",
        "admin",
        "api",
        "commerce",
        "integrations"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "permissions.authorizationContext"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_auth_001.json"
    },
    {
      "controlId": "SEC-AUTH-002",
      "name": "Recent authentication for high-risk actions",
      "category": "authentication",
      "requirement": "High-risk operations that declare recent-authentication requirements must re-establish sufficiently recent user authentication before execution.",
      "rationale": "Long-lived sessions must not silently authorize sensitive account or credential changes.",
      "applicability": [
        "admin",
        "customer-cms"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "adminUi.adminAction"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_auth_002.json"
    },
    {
      "controlId": "SEC-AUTHZ-001",
      "name": "Server-side permission enforcement",
      "category": "authorization",
      "requirement": "Every privileged operation must enforce canonical permissions at the server boundary; UI visibility is never the authorization decision.",
      "rationale": "Client-side controls are bypassable and cannot protect authoritative state.",
      "applicability": [
        "customer-cms",
        "admin",
        "api"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "permissions.authorizationDecision",
        "permissions.authorizationContext"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_authz_001.json"
    },
    {
      "controlId": "SEC-AUTHZ-002",
      "name": "Privileged operation confirmation",
      "category": "authorization",
      "requirement": "Destructive or privileged operations must apply the confirmation and recent-authentication requirements declared by their operational metadata.",
      "rationale": "High-impact operations require explicit user intent and policy enforcement.",
      "applicability": [
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "both",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "adminUi.adminAction"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_authz_002.json"
    },
    {
      "controlId": "SEC-BACKUP-001",
      "name": "Contract-data backup",
      "category": "recovery",
      "requirement": "Authoritative contract source and critical registry release artifacts must be recoverable from version-controlled or otherwise verified backups.",
      "rationale": "Loss or silent corruption of contract authority would affect every consumer.",
      "applicability": [
        "registry",
        "portal"
      ],
      "obligation": "mandatory",
      "scope": "operations",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_backup_001.json"
    },
    {
      "controlId": "SEC-BRUTE-001",
      "name": "Brute-force resistance",
      "category": "abuse",
      "requirement": "Authentication and sensitive verification flows must limit repeated attempts and support lockout/backoff or equivalent defenses without exposing account-enumeration details.",
      "rationale": "Repeated guessing attacks target credentials and verification factors.",
      "applicability": [
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_brute_001.json"
    },
    {
      "controlId": "SEC-CORS-001",
      "name": "Explicit CORS policy",
      "category": "api",
      "requirement": "APIs must apply the canonical CORS policy appropriate to their surface and must not use permissive credentialed cross-origin access.",
      "rationale": "Cross-origin access must be deliberate and least-privileged.",
      "applicability": [
        "api"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "api.cors-policies"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_cors_001.json"
    },
    {
      "controlId": "SEC-CSP-001",
      "name": "Content Security Policy",
      "category": "transport",
      "requirement": "Web applications should use a restrictive, deployment-appropriate CSP and integrations must not silently weaken it with uncontrolled script origins.",
      "rationale": "CSP limits the blast radius of injection and third-party script compromise.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.integrations",
        "modules.marketing"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_csp_001.json"
    },
    {
      "controlId": "SEC-CSRF-001",
      "name": "CSRF protection for browser-authenticated writes",
      "category": "browser",
      "requirement": "Browser-authenticated state-changing requests must use CSRF-resistant request patterns and must not rely on ambient credentials alone.",
      "rationale": "Cross-site requests must not be able to trigger privileged mutations.",
      "applicability": [
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "both",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_csrf_001.json"
    },
    {
      "controlId": "SEC-DEP-001",
      "name": "Dependency vulnerability management",
      "category": "supply-chain",
      "requirement": "Runtime and build dependencies must be inventoried, reviewed and updated when security risk requires it.",
      "rationale": "Known vulnerable dependencies can compromise otherwise-correct application code.",
      "applicability": [
        "build-tooling",
        "portal",
        "customer-sites"
      ],
      "obligation": "mandatory",
      "scope": "build",
      "affectedModules": [],
      "verificationMethods": [
        "dependency-scan",
        "manual-review"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_dep_001.json"
    },
    {
      "controlId": "SEC-ENV-001",
      "name": "Environment isolation",
      "category": "isolation",
      "requirement": "Development, preview/staging and production environments must keep credentials, data access and integrations appropriately isolated.",
      "rationale": "Environment crossover can expose production data or credentials.",
      "applicability": [
        "site-manifest",
        "integrations",
        "api"
      ],
      "obligation": "mandatory",
      "scope": "operations",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "integrations.environmentBinding"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_env_001.json"
    },
    {
      "controlId": "SEC-ERR-001",
      "name": "Customer-safe error handling",
      "category": "logging",
      "requirement": "Errors returned to untrusted clients must not expose secrets, stack traces, internal credentials, private paths or cross-tenant data.",
      "rationale": "Verbose internal failures can disclose exploitable implementation detail.",
      "applicability": [
        "api",
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "medium",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_err_001.json"
    },
    {
      "controlId": "SEC-HDR-001",
      "name": "Security headers baseline",
      "category": "transport",
      "requirement": "Web surfaces must apply security headers appropriate to their runtime, including framing, content-type and referrer protections where applicable.",
      "rationale": "Browser security headers provide defense-in-depth against common web attacks.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "medium",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_hdr_001.json"
    },
    {
      "controlId": "SEC-IDEMP-001",
      "name": "Replay-safe idempotency for sensitive commands",
      "category": "api",
      "requirement": "Sensitive retried commands must use contract-defined idempotency/replay protections where duplicate execution could alter security or financial state.",
      "rationale": "Retries and replay can otherwise duplicate privileged or financial effects.",
      "applicability": [
        "api",
        "commerce",
        "webhooks"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [
        "commerce.rule.providerCallbackDeduplication"
      ],
      "relatedRegistryIds": [
        "api.idempotencyContext"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_idemp_001.json"
    },
    {
      "controlId": "SEC-IN-001",
      "name": "Authoritative server input validation",
      "category": "api",
      "requirement": "All untrusted input must be validated server-side against the relevant canonical contract before authoritative use.",
      "rationale": "Client validation is UX only and cannot establish trust.",
      "applicability": [
        "api",
        "customer-cms",
        "admin",
        "public-site"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_in_001.json"
    },
    {
      "controlId": "SEC-INT-001",
      "name": "Integration credential isolation",
      "category": "integrations",
      "requirement": "Third-party connections must keep provider credentials protected, environment-scoped and separate from customer-visible configuration.",
      "rationale": "External providers often grant access beyond one page or request.",
      "applicability": [
        "integrations"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.integrations"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "integrations.authenticationProfile",
        "integrations.credentialReference",
        "integrations.secretReference"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_int_001.json"
    },
    {
      "controlId": "SEC-INT-002",
      "name": "Integration failure containment",
      "category": "integrations",
      "requirement": "Optional external providers must not become a trust dependency for primary content and must fail without exposing credentials or bypassing canonical validation.",
      "rationale": "Provider outages or malformed responses must not break platform trust boundaries.",
      "applicability": [
        "integrations",
        "public-site"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.integrations"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "medium",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_int_002.json"
    },
    {
      "controlId": "SEC-KEY-001",
      "name": "API key handling",
      "category": "secrets",
      "requirement": "Private API keys must be stored and transmitted only through protected server-side mechanisms; public identifiers must be distinguished from secret keys.",
      "rationale": "Provider keys frequently have broad external authority.",
      "applicability": [
        "integrations",
        "api"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "integrations.apiKeyConfiguration"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_key_001.json"
    },
    {
      "controlId": "SEC-LOG-001",
      "name": "Secret-safe logging",
      "category": "logging",
      "requirement": "Logs must exclude secrets and credentials and minimize personal data while preserving operational security evidence.",
      "rationale": "Logs are broadly retained and accessed and can become a secondary data breach source.",
      "applicability": [
        "api",
        "integrations",
        "webhooks",
        "commerce"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_log_001.json"
    },
    {
      "controlId": "SEC-OAUTH-001",
      "name": "OAuth credential and token handling",
      "category": "secrets",
      "requirement": "OAuth client secrets, access tokens and refresh tokens must remain protected; redirect/callback configuration must be explicit and validated.",
      "rationale": "OAuth bearer material grants external-system access.",
      "applicability": [
        "integrations"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "integrations.oauthConfiguration",
        "integrations.authenticationProfile"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_oauth_001.json"
    },
    {
      "controlId": "SEC-OUT-001",
      "name": "Context-aware output encoding",
      "category": "browser",
      "requirement": "Untrusted values must be encoded for the output context in which they are rendered.",
      "rationale": "Escaping requirements differ across HTML, attributes, URLs and script-adjacent contexts.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "client",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_out_001.json"
    },
    {
      "controlId": "SEC-PAY-001",
      "name": "No PAN/CVV storage",
      "category": "commerce",
      "requirement": "NEXT F contracts and implementations must not store raw payment card PAN or CVV; provider tokenization or equivalent provider-hosted handling is required.",
      "rationale": "Raw card storage materially expands payment-security scope and is outside the NEXT F model.",
      "applicability": [
        "commerce"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.commerce"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [
        "commerce.rule.rawCardDataProhibited"
      ],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_pay_001.json"
    },
    {
      "controlId": "SEC-PAY-002",
      "name": "Server-authoritative payment reconciliation",
      "category": "commerce",
      "requirement": "Payment, authorization, capture and refund state must be reconciled from trusted server/provider evidence and canonical business invariants; browser-calculated totals or states are never authoritative.",
      "rationale": "Financial integrity cannot depend on client-controlled values.",
      "applicability": [
        "commerce",
        "api"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.commerce"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [
        "commerce.rule.paymentStatusReconcile",
        "commerce.rule.captureRequiresValidAuthorization",
        "commerce.rule.refundRequiresCapturedFunds",
        "commerce.rule.providerCallbackDeduplication"
      ],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_pay_002.json"
    },
    {
      "controlId": "SEC-PAY-003",
      "name": "Payment/refund authorization",
      "category": "commerce",
      "requirement": "Payment export/manage and refund creation/management operations must enforce their canonical permissions and business invariants server-side.",
      "rationale": "Financial operations require explicit least-privilege authorization.",
      "applicability": [
        "commerce",
        "admin",
        "api"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [
        "commerce.payments.manage",
        "commerce.refunds.create",
        "commerce.refunds.manage"
      ],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_pay_003.json"
    },
    {
      "controlId": "SEC-PDATA-001",
      "name": "Personal-data security minimization",
      "category": "privacy",
      "requirement": "Personal data must be collected, exposed, logged, emitted and delivered only when the owning contract and purpose require it, with appropriate authorization.",
      "rationale": "Reducing unnecessary exposure reduces breach impact.",
      "applicability": [
        "forms",
        "commerce",
        "marketing",
        "events",
        "webhooks"
      ],
      "obligation": "mandatory",
      "scope": "both",
      "affectedModules": [
        "modules.forms",
        "modules.leads",
        "modules.commerce",
        "modules.marketing"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_pdata_001.json"
    },
    {
      "controlId": "SEC-PREV-001",
      "name": "Preview and staging access control",
      "category": "environments",
      "requirement": "Non-production environments containing customer data, privileged previews or production-like integrations must be access-controlled and clearly isolated from public production.",
      "rationale": "Preview URLs are not inherently private.",
      "applicability": [
        "preview",
        "staging",
        "customer-sites"
      ],
      "obligation": "mandatory",
      "scope": "operations",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_prev_001.json"
    },
    {
      "controlId": "SEC-QUERY-001",
      "name": "Sensitive values excluded from URLs",
      "category": "browser",
      "requirement": "Sensitive values must not be placed in query strings or fragments unless an explicit contract permits a narrowly scoped safe token.",
      "rationale": "URLs leak through history, logs, referrers and screenshots.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin",
        "api"
      ],
      "obligation": "mandatory",
      "scope": "both",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_query_001.json"
    },
    {
      "controlId": "SEC-RATE-001",
      "name": "Rate limiting",
      "category": "abuse",
      "requirement": "Public and authenticated endpoints must apply an appropriate canonical rate-limit class based on abuse and resource risk.",
      "rationale": "Unbounded request rates enable denial of service and automation abuse.",
      "applicability": [
        "api",
        "public-site"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "medium",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "api.rate-limit-classes",
        "api.rateLimitState"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_rate_001.json"
    },
    {
      "controlId": "SEC-RECOVERY-001",
      "name": "Recovery verification",
      "category": "recovery",
      "requirement": "Recovery procedures for authoritative contract data must preserve integrity, version identity and auditability rather than restoring an unverifiable latest state.",
      "rationale": "A backup is not sufficient if restoration cannot be trusted.",
      "applicability": [
        "registry",
        "portal"
      ],
      "obligation": "mandatory",
      "scope": "operations",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_recovery_001.json"
    },
    {
      "controlId": "SEC-REDIR-001",
      "name": "Safe redirects",
      "category": "browser",
      "requirement": "Redirect destinations derived from input must be constrained to explicitly allowed destinations or validated safe origins.",
      "rationale": "Open redirects enable phishing and token leakage.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "medium",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_redir_001.json"
    },
    {
      "controlId": "SEC-S2S-001",
      "name": "Service-to-service authentication",
      "category": "api",
      "requirement": "Internal service calls that can access protected data or perform privileged operations must authenticate the calling service and authorize the requested scope.",
      "rationale": "Network location alone is not identity or authorization.",
      "applicability": [
        "api",
        "integrations"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_s2s_001.json"
    },
    {
      "controlId": "SEC-SAN-001",
      "name": "Content sanitization",
      "category": "browser",
      "requirement": "Rich or user-supplied content that permits markup must be sanitized according to its contract before trusted rendering.",
      "rationale": "Stored or reflected untrusted markup can become executable content.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "both",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "fields.richText"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_san_001.json"
    },
    {
      "controlId": "SEC-SECRET-001",
      "name": "No privileged secrets in public delivery",
      "category": "secrets",
      "requirement": "Secrets, credentials, tokens, signing secrets and encryption keys must never be embedded in public Site Manifests, browser bundles, public events, examples or unauthenticated responses.",
      "rationale": "Public delivery permanently destroys confidentiality.",
      "applicability": [
        "public-site",
        "site-manifest",
        "api",
        "events"
      ],
      "obligation": "mandatory",
      "scope": "both",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "integrations.secretReference",
        "integrations.credentialReference",
        "manifest.configurationExposureKinds"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_secret_001.json"
    },
    {
      "controlId": "SEC-SECRET-002",
      "name": "Server-side secret references",
      "category": "secrets",
      "requirement": "Provider and platform secrets must be represented by protected references rather than raw values in canonical public/configuration contracts.",
      "rationale": "References preserve separation between declarative configuration and credential storage.",
      "applicability": [
        "integrations",
        "commerce",
        "webhooks"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [
        "commerce.rule.providerSecretsServerOnly"
      ],
      "relatedRegistryIds": [
        "integrations.secretReference",
        "integrations.credentialReference",
        "webhooks.signingKeyReference"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_secret_002.json"
    },
    {
      "controlId": "SEC-SESS-001",
      "name": "Secure session lifecycle",
      "category": "sessions",
      "requirement": "Sessions must have bounded lifetime, secure invalidation, rotation where appropriate, and server-authoritative revocation.",
      "rationale": "Stale or stolen sessions must not remain indefinitely usable.",
      "applicability": [
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "permissions.authorizationContext"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_sess_001.json"
    },
    {
      "controlId": "SEC-SSRF-001",
      "name": "Server-side outbound request restrictions",
      "category": "api",
      "requirement": "Server-side URL fetching and callback delivery must reject unsafe schemes/targets and apply network policy before connecting.",
      "rationale": "Untrusted URLs can otherwise reach internal or privileged network resources.",
      "applicability": [
        "api",
        "integrations",
        "webhooks"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [
        "webhooks.endpointNetworkPolicy"
      ],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_ssrf_001.json"
    },
    {
      "controlId": "SEC-SUPPLY-001",
      "name": "Build and generated-artifact integrity",
      "category": "supply-chain",
      "requirement": "Generated contract artifacts and release packages must retain integrity evidence and must not silently diverge from authoritative source.",
      "rationale": "Supply-chain integrity protects consumers from tampered or stale generated data.",
      "applicability": [
        "portal",
        "build-tooling",
        "customer-sites"
      ],
      "obligation": "mandatory",
      "scope": "build",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "registry.index"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_supply_001.json"
    },
    {
      "controlId": "SEC-TENANT-001",
      "name": "Organization and Site isolation",
      "category": "isolation",
      "requirement": "Tenant and Site scope must be derived and enforced server-side; browser-supplied tenant identifiers are never proof of authorization.",
      "rationale": "Cross-tenant access is a critical platform boundary.",
      "applicability": [
        "api",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "permissions.authorizationContext"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_tenant_001.json"
    },
    {
      "controlId": "SEC-TLS-001",
      "name": "HTTPS/TLS required",
      "category": "transport",
      "requirement": "Production network communication carrying authenticated, personal, secret or webhook data must use HTTPS/TLS with certificate validation.",
      "rationale": "Transport confidentiality and integrity are foundational security properties.",
      "applicability": [
        "api",
        "integrations",
        "webhooks",
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "operations",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [
        "webhooks.endpointNetworkPolicy"
      ],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_tls_001.json"
    },
    {
      "controlId": "SEC-TOKEN-001",
      "name": "Bearer and token exposure prevention",
      "category": "secrets",
      "requirement": "Bearer/session/access/refresh tokens must not be logged, placed in public content, or exposed in query strings unless an explicit contract safely requires a short-lived token.",
      "rationale": "Tokens commonly function as credentials.",
      "applicability": [
        "api",
        "integrations",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "both",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_token_001.json"
    },
    {
      "controlId": "SEC-UPL-001",
      "name": "Upload type and size enforcement",
      "category": "uploads",
      "requirement": "File uploads must enforce contract-defined allowed media/types and size limits server-side.",
      "rationale": "Client-provided filenames and MIME declarations are not trust boundaries.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.media",
        "modules.forms"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "api.uploadSession"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_upl_001.json"
    },
    {
      "controlId": "SEC-UPL-002",
      "name": "Upload normalization and quarantine",
      "category": "uploads",
      "requirement": "Upload handling must normalize filenames, restrict executable content, and support scan/quarantine state before risky content becomes available.",
      "rationale": "Uploaded files can carry executable or malicious payloads.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.media",
        "modules.forms"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [
        "Normalize filenames and never trust path components.",
        "Keep private-by-default where the owning contract is private.",
        "Do not serve quarantined content as trusted media.",
        "Distinguish managed media assets from form-submission attachments."
      ],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_upl_002.json"
    },
    {
      "controlId": "SEC-UPL-003",
      "name": "Authorized download and safe headers",
      "category": "uploads",
      "requirement": "Protected uploaded files must require authorization and use safe download/content headers appropriate to the file contract.",
      "rationale": "Upload authorization must continue at retrieval time.",
      "applicability": [
        "customer-cms",
        "admin",
        "api"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [
        "modules.media",
        "modules.forms"
      ],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_upl_003.json"
    },
    {
      "controlId": "SEC-WH-001",
      "name": "Webhook endpoint validation",
      "category": "webhooks",
      "requirement": "Webhook destinations must satisfy HTTPS/network-policy validation before activation and must not permit unsafe internal targets.",
      "rationale": "Outbound webhooks can become an SSRF path.",
      "applicability": [
        "webhooks"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [
        "webhooks.endpointNetworkPolicy",
        "webhooks.endpointVerification"
      ],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_wh_001.json"
    },
    {
      "controlId": "SEC-WH-002",
      "name": "Webhook signing and secret rotation",
      "category": "webhooks",
      "requirement": "Webhook deliveries requiring authenticity must use the canonical signature policy and protected signing-key references with finite secret-rotation overlap.",
      "rationale": "Receivers need verifiable origin without exposing long-lived signing secrets.",
      "applicability": [
        "webhooks"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [
        "webhooks.signaturePolicy",
        "webhooks.signingKeyReference",
        "webhooks.secretRotation"
      ],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_wh_002.json"
    },
    {
      "controlId": "SEC-WH-003",
      "name": "Webhook replay resistance",
      "category": "webhooks",
      "requirement": "Webhook delivery/verification must apply timestamp, signature and replay-protection rules so captured valid requests cannot be reused outside policy.",
      "rationale": "Signed messages can still be replayed if freshness and uniqueness are ignored.",
      "applicability": [
        "webhooks"
      ],
      "obligation": "mandatory",
      "scope": "server",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "high",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [
        "webhooks.replayProtection",
        "webhooks.deliveryAttempt"
      ],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_wh_003.json"
    },
    {
      "controlId": "SEC-XSS-001",
      "name": "No arbitrary script execution from managed content",
      "category": "browser",
      "requirement": "CMS/content values must not create arbitrary executable script paths in customer websites or management interfaces.",
      "rationale": "Structured content is data, not trusted executable code.",
      "applicability": [
        "public-site",
        "customer-cms",
        "admin"
      ],
      "obligation": "mandatory",
      "scope": "both",
      "affectedModules": [],
      "verificationMethods": [
        "configuration-review",
        "integration-test"
      ],
      "evidenceTypes": [
        "configuration",
        "test-result"
      ],
      "violationSeverity": "critical",
      "relatedPermissions": [],
      "relatedApiRules": [],
      "relatedWebhookRules": [],
      "relatedCommerceRules": [],
      "relatedRegistryIds": [
        "fields.richText"
      ],
      "subrequirements": [],
      "version": "0.30.0",
      "status": "stable",
      "phase": 29,
      "sourceReference": "registry/security/controls/sec_xss_001.json"
    }
  ],
  "categories": {
    "registryVersion": "1.2.0",
    "categories": [
      {
        "id": "authentication",
        "label": "Authentication",
        "description": "Identity verification and authentication boundaries."
      },
      {
        "id": "sessions",
        "label": "Session Management",
        "description": "Session creation, rotation, expiry and revocation."
      },
      {
        "id": "authorization",
        "label": "Authorization",
        "description": "Permission evaluation and privileged operation controls."
      },
      {
        "id": "browser",
        "label": "Browser Security",
        "description": "CSRF, XSS, sanitization, redirects and browser execution boundaries."
      },
      {
        "id": "api",
        "label": "API & Service Security",
        "description": "CORS, rate limits, service authentication and safe API boundaries."
      },
      {
        "id": "secrets",
        "label": "Secrets & Credentials",
        "description": "Secrets, API keys, OAuth credentials and token handling."
      },
      {
        "id": "uploads",
        "label": "File Uploads",
        "description": "Upload type, size, scanning, storage and download safety."
      },
      {
        "id": "abuse",
        "label": "Abuse Prevention",
        "description": "Rate limiting, brute force and automated abuse resistance."
      },
      {
        "id": "isolation",
        "label": "Isolation",
        "description": "Tenant, Site and environment isolation."
      },
      {
        "id": "logging",
        "label": "Logging & Audit",
        "description": "Security logging, auditability and safe error behavior."
      },
      {
        "id": "transport",
        "label": "Transport & Headers",
        "description": "TLS, HTTPS, CSP and security headers."
      },
      {
        "id": "supply-chain",
        "label": "Dependency & Supply Chain",
        "description": "Dependency hygiene and build artifact integrity."
      },
      {
        "id": "recovery",
        "label": "Backup & Recovery",
        "description": "Contract-data backup and recovery expectations."
      },
      {
        "id": "commerce",
        "label": "Commerce Security",
        "description": "Payment and transaction security boundaries."
      },
      {
        "id": "privacy",
        "label": "Personal Data Security",
        "description": "Security handling for personal and sensitive information."
      },
      {
        "id": "integrations",
        "label": "Integration Security",
        "description": "External-provider connection and credential boundaries."
      },
      {
        "id": "environments",
        "label": "Preview & Environment Security",
        "description": "Preview, staging and production separation."
      },
      {
        "id": "webhooks",
        "label": "Webhook Security",
        "description": "Endpoint security, signing, replay resistance and delivery trust."
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
  "obligations": {
    "registryVersion": "1.2.0",
    "values": [
      {
        "id": "mandatory",
        "label": "Mandatory"
      },
      {
        "id": "recommended",
        "label": "Recommended"
      }
    ]
  },
  "verificationMethods": {
    "registryVersion": "1.2.0",
    "methods": [
      {
        "id": "schema-validation",
        "label": "Schema validation"
      },
      {
        "id": "static-analysis",
        "label": "Static analysis"
      },
      {
        "id": "unit-test",
        "label": "Unit test"
      },
      {
        "id": "integration-test",
        "label": "Integration test"
      },
      {
        "id": "security-test",
        "label": "Security test"
      },
      {
        "id": "configuration-review",
        "label": "Configuration review"
      },
      {
        "id": "dependency-scan",
        "label": "Dependency scan"
      },
      {
        "id": "manual-review",
        "label": "Manual review"
      },
      {
        "id": "runtime-observation",
        "label": "Runtime observation"
      },
      {
        "id": "audit-log-review",
        "label": "Audit-log review"
      }
    ]
  },
  "secretClasses": {
    "registryVersion": "1.2.0",
    "title": "Security Value Classes",
    "classes": [
      {
        "id": "public-identifier",
        "label": "Public Identifier",
        "publicDeliveryEligible": true,
        "description": "Non-sensitive identifier explicitly safe for public delivery."
      },
      {
        "id": "configuration-value",
        "label": "Configuration Value",
        "publicDeliveryEligible": true,
        "description": "Non-sensitive operational configuration that may be public only when the owning contract allows it."
      },
      {
        "id": "protected-configuration",
        "label": "Protected Configuration",
        "publicDeliveryEligible": false,
        "description": "Configuration restricted to authenticated/authorized operational surfaces."
      },
      {
        "id": "secret",
        "label": "Secret",
        "publicDeliveryEligible": false,
        "description": "Confidential value that must remain server-side/protected."
      },
      {
        "id": "credential",
        "label": "Credential",
        "publicDeliveryEligible": false,
        "description": "Authentication material such as client secrets or passwords."
      },
      {
        "id": "token",
        "label": "Token",
        "publicDeliveryEligible": false,
        "description": "Access, refresh, session or equivalent bearer/token material."
      },
      {
        "id": "signing-secret",
        "label": "Signing Secret",
        "publicDeliveryEligible": false,
        "description": "Secret used to generate or verify signatures."
      },
      {
        "id": "encryption-key",
        "label": "Encryption Key",
        "publicDeliveryEligible": false,
        "description": "Cryptographic key material used for encryption/decryption."
      }
    ]
  },
  "surfaceMapping": {
    "registryVersion": "1.2.0",
    "surfaces": [
      {
        "surfaceId": "public-site",
        "label": "Customer public website",
        "status": "applicable",
        "controlIds": [
          "SEC-XSS-001",
          "SEC-SAN-001",
          "SEC-OUT-001",
          "SEC-IN-001",
          "SEC-SECRET-001",
          "SEC-REDIR-001",
          "SEC-QUERY-001",
          "SEC-UPL-001",
          "SEC-UPL-002",
          "SEC-RATE-001",
          "SEC-ABUSE-001",
          "SEC-ERR-001",
          "SEC-HDR-001",
          "SEC-CSP-001",
          "SEC-TLS-001",
          "SEC-DEP-001",
          "SEC-SUPPLY-001",
          "SEC-INT-002",
          "SEC-PREV-001"
        ],
        "reason": null
      },
      {
        "surfaceId": "customer-cms",
        "label": "Customer CMS",
        "status": "applicable",
        "controlIds": [
          "SEC-AUTH-001",
          "SEC-AUTH-002",
          "SEC-SESS-001",
          "SEC-AUTHZ-001",
          "SEC-CSRF-001",
          "SEC-XSS-001",
          "SEC-SAN-001",
          "SEC-OUT-001",
          "SEC-IN-001",
          "SEC-TOKEN-001",
          "SEC-REDIR-001",
          "SEC-QUERY-001",
          "SEC-UPL-001",
          "SEC-UPL-002",
          "SEC-UPL-003",
          "SEC-ABUSE-001",
          "SEC-BRUTE-001",
          "SEC-TENANT-001",
          "SEC-AUDIT-001",
          "SEC-ERR-001",
          "SEC-HDR-001",
          "SEC-CSP-001",
          "SEC-TLS-001"
        ],
        "reason": null
      },
      {
        "surfaceId": "admin",
        "label": "NEXT F Admin",
        "status": "applicable",
        "controlIds": [
          "SEC-AUTH-001",
          "SEC-AUTH-002",
          "SEC-SESS-001",
          "SEC-AUTHZ-001",
          "SEC-AUTHZ-002",
          "SEC-CSRF-001",
          "SEC-XSS-001",
          "SEC-SAN-001",
          "SEC-OUT-001",
          "SEC-IN-001",
          "SEC-TOKEN-001",
          "SEC-REDIR-001",
          "SEC-QUERY-001",
          "SEC-UPL-001",
          "SEC-UPL-002",
          "SEC-UPL-003",
          "SEC-ABUSE-001",
          "SEC-BRUTE-001",
          "SEC-TENANT-001",
          "SEC-AUDIT-001",
          "SEC-ERR-001",
          "SEC-HDR-001",
          "SEC-CSP-001",
          "SEC-TLS-001",
          "SEC-PAY-003"
        ],
        "reason": null
      },
      {
        "surfaceId": "api",
        "label": "NEXT F APIs",
        "status": "applicable",
        "controlIds": [
          "SEC-AUTH-001",
          "SEC-AUTHZ-001",
          "SEC-CORS-001",
          "SEC-SSRF-001",
          "SEC-IN-001",
          "SEC-SECRET-001",
          "SEC-KEY-001",
          "SEC-TOKEN-001",
          "SEC-QUERY-001",
          "SEC-UPL-003",
          "SEC-RATE-001",
          "SEC-TENANT-001",
          "SEC-ENV-001",
          "SEC-LOG-001",
          "SEC-AUDIT-001",
          "SEC-ERR-001",
          "SEC-TLS-001",
          "SEC-PAY-002",
          "SEC-PAY-003",
          "SEC-S2S-001",
          "SEC-IDEMP-001"
        ],
        "reason": null
      },
      {
        "surfaceId": "integrations",
        "label": "Integrations",
        "status": "applicable",
        "controlIds": [
          "SEC-AUTH-001",
          "SEC-SSRF-001",
          "SEC-SECRET-002",
          "SEC-KEY-001",
          "SEC-OAUTH-001",
          "SEC-TOKEN-001",
          "SEC-ENV-001",
          "SEC-LOG-001",
          "SEC-TLS-001",
          "SEC-INT-001",
          "SEC-INT-002",
          "SEC-S2S-001"
        ],
        "reason": null
      },
      {
        "surfaceId": "webhooks",
        "label": "Webhooks",
        "status": "applicable",
        "controlIds": [
          "SEC-SSRF-001",
          "SEC-SECRET-002",
          "SEC-LOG-001",
          "SEC-TLS-001",
          "SEC-PDATA-001",
          "SEC-IDEMP-001",
          "SEC-WH-001",
          "SEC-WH-002",
          "SEC-WH-003"
        ],
        "reason": null
      },
      {
        "surfaceId": "commerce",
        "label": "Commerce",
        "status": "applicable",
        "controlIds": [
          "SEC-AUTH-001",
          "SEC-SECRET-002",
          "SEC-LOG-001",
          "SEC-PAY-001",
          "SEC-PAY-002",
          "SEC-PAY-003",
          "SEC-PDATA-001",
          "SEC-IDEMP-001"
        ],
        "reason": null
      },
      {
        "surfaceId": "site-manifest",
        "label": "Site Manifest",
        "status": "applicable",
        "controlIds": [
          "SEC-SECRET-001",
          "SEC-ENV-001"
        ],
        "reason": null
      },
      {
        "surfaceId": "portal",
        "label": "Contract Portal",
        "status": "applicable",
        "controlIds": [
          "SEC-DEP-001",
          "SEC-SUPPLY-001",
          "SEC-BACKUP-001",
          "SEC-RECOVERY-001"
        ],
        "reason": null
      },
      {
        "surfaceId": "build-tooling",
        "label": "Build/validation tooling",
        "status": "applicable",
        "controlIds": [
          "SEC-DEP-001",
          "SEC-SUPPLY-001"
        ],
        "reason": null
      }
    ]
  },
  "definitions": [
    {
      "$id": "security.secretClass",
      "name": "Security Value Class",
      "version": "1.2.0",
      "status": "stable",
      "phase": 29,
      "description": "Classification of public identifiers, configuration, secrets, credentials, tokens, signing secrets and encryption keys.",
      "domain": "security",
      "type": "schema",
      "tags": [
        "security",
        "phase-29"
      ]
    },
    {
      "$id": "security.securityControl",
      "name": "Security Control",
      "version": "1.2.0",
      "status": "stable",
      "phase": 29,
      "description": "Machine-readable security requirement with applicability, verification and cross-registry bindings.",
      "domain": "security",
      "type": "schema",
      "tags": [
        "security",
        "phase-29"
      ]
    },
    {
      "$id": "security.surfaceMapping",
      "name": "Security Surface Mapping",
      "version": "1.2.0",
      "status": "stable",
      "phase": 29,
      "description": "Security-control applicability mapping for a platform surface.",
      "domain": "security",
      "type": "schema",
      "tags": [
        "security",
        "phase-29"
      ]
    },
    {
      "$id": "security.verificationMethod",
      "name": "Security Verification Method",
      "version": "1.2.0",
      "status": "stable",
      "phase": 29,
      "description": "Controlled verification method for security evidence.",
      "domain": "security",
      "type": "schema",
      "tags": [
        "security",
        "phase-29"
      ]
    }
  ],
  "sourceHashes": {
    "registry/security/index.json": "947255ac7474c7f77ae8513508560d61249d33456a535cceebbc38c1d3d5fa4b",
    "registry/security/categories.json": "985eb8477ed0422e7435a9b892295c8879e6c128cb9443296faba7bc5fef1547",
    "registry/security/severity-levels.json": "32e54e4cb7d8f39313eb5218129e4668f5d7f9c478eaed8415ec42286d5982d5",
    "registry/security/obligations.json": "fff1edbebc3318f6bfb288d29284953e083690403f5c5a2aa09d35855796bdbb",
    "registry/security/verification-methods.json": "c623373f8e3bfd067f1d2883971aa122bfde45282cbc51bafcd055b496b8c92d",
    "registry/security/secret-classes.json": "45ae104e3811ed992b19b273c3d291956c8a9a28c2dadbd19206f4de3f346403",
    "registry/security/surface-mapping.json": "f6757e77819ef75c055adf43297c5089b2ba90ed697040f5ff88092b9de06c4f",
    "registry/security/security-control.schema.json": "965328e941a487920ffea9e41f88c8f648223d322b2bd957665028aae7f424f7",
    "registry/security/controls/sec_abuse_001.json": "00fef16318292b032adf72e950779e077bbb189d0b5ba97927313d1d89c074c9",
    "registry/security/controls/sec_audit_001.json": "43bed3679d0e66d8a16e9c1ef4e7ae88d858d96f3e9a8e23a15003b76e9189aa",
    "registry/security/controls/sec_auth_001.json": "4f5034fa932216a146f21a4bb1f44765ac57159c1010651b6444861e879e57de",
    "registry/security/controls/sec_auth_002.json": "639c0abb68338afd31ad5917994cd0e29b2da7a46598873e3ce26c49635841fb",
    "registry/security/controls/sec_authz_001.json": "d03e981b9f0400a8f7199feebe25d0a3b5414dee028ef2ff94806e5c35d2c96c",
    "registry/security/controls/sec_authz_002.json": "c57dabdcde562322e197785f0f6834ee3551ed3c4e477c0aaf3a6fd34a90cea5",
    "registry/security/controls/sec_backup_001.json": "ddb5c80194e60288a97c01fc71a559961dd2e8ab2b8597f10d65974c1871402f",
    "registry/security/controls/sec_brute_001.json": "666337a87bfb6b025f9ba31ca748410172fe2927bd68e1466071163c3ea66524",
    "registry/security/controls/sec_cors_001.json": "5374399d0b843a19473621dc15a57e8c6caa6c766ac28b7faa74f58d86df0218",
    "registry/security/controls/sec_csp_001.json": "f3257c0266c39648c2336597ea509174f75472f6db21b78b42530970feceb956",
    "registry/security/controls/sec_csrf_001.json": "d5ed7fcbf80f21924011c4ed60452302e6c399ccceb5be27726433f249da1784",
    "registry/security/controls/sec_dep_001.json": "7dab7399ebe0b7ab51dc162ce0b2124834420f056ab85686264c838e73ed22aa",
    "registry/security/controls/sec_env_001.json": "871a8b979daaebf237c968ed281ce0ebc3676d3a1aaa4eb315a3130b974a2733",
    "registry/security/controls/sec_err_001.json": "cf7cb1d8b65302d573f0d2202c214203097684b884691ce4ace122edebc815ea",
    "registry/security/controls/sec_hdr_001.json": "2fd42330dffe4727e1401ab6c72db8d3188b5f6e15fdb6580da3a9f30b7c62c5",
    "registry/security/controls/sec_idemp_001.json": "1fd0ceba6040c3047092f2f4ed6298375d2c6c346277f70092b29f7221130ae3",
    "registry/security/controls/sec_in_001.json": "8c9af283b8fe5b9fd29d2c4602899a254d8576ce67dd1c7e4ba659f823496e1b",
    "registry/security/controls/sec_int_001.json": "e0f14150694c88b301b6f19d4204e372917e9ec3bb5e9aec206127e11f7b3188",
    "registry/security/controls/sec_int_002.json": "ac010ef589e150c8f6ea4228a351a4477f5140fef5733bd0a741fe2f7a97d500",
    "registry/security/controls/sec_key_001.json": "676d15735b7e750c3d394a475ecd0b3b3dab265b5d75f51c1165692aa856edcc",
    "registry/security/controls/sec_log_001.json": "30d08cb13de959f7035c0a8a2b75d39f63df16b3deb930e6ea0b8526325faf38",
    "registry/security/controls/sec_oauth_001.json": "566fc3b04e3a8e5de87c5a6d8f0465379b60ea5aa87df70dfa2a1fe83f008846",
    "registry/security/controls/sec_out_001.json": "f7004229942b790092d5cef568e574c7e6df1560cfb0d6993c4f288e67285ee4",
    "registry/security/controls/sec_pay_001.json": "121b2d6cc8abc0cf828ca7eb98f175c789c3760a663c9e48cf00e678b8608d32",
    "registry/security/controls/sec_pay_002.json": "aaf68cb84c47fdee371b6a7a794be243854ac46fb689dbdbd62e5998d06679e8",
    "registry/security/controls/sec_pay_003.json": "460e14defe52628153e51cebdbfadd877acc277e0f38f48282a9964add2b5805",
    "registry/security/controls/sec_pdata_001.json": "e1e7bc1eeb301bb574240e62268ee51cacc17904e116e72f17cf64162048999b",
    "registry/security/controls/sec_prev_001.json": "69d6d7056dd2468d20bda2c732b193a03c4e3ab2f77651891815dda5aa5e06a8",
    "registry/security/controls/sec_query_001.json": "913f17d722df06a10ab75b64349a23b3e4582da6f66603f6635c302390e94692",
    "registry/security/controls/sec_rate_001.json": "8cb182fd832b58abfa1f4f717c2b292c0b06252305b3fda6046a8ee6a875aa21",
    "registry/security/controls/sec_recovery_001.json": "efa6f1544088ec090d18344e930630dbaf49a16827973d034c8cb4bee944cb44",
    "registry/security/controls/sec_redir_001.json": "58a7bb1f6c54935e6bfbf9b46582f4ef6aacef4a463c72b4872ed8d62043e012",
    "registry/security/controls/sec_s2s_001.json": "7ebadb683792723d19fdbce986219bdd3e9d7e018349508e170103edbcf19e90",
    "registry/security/controls/sec_san_001.json": "b089958eef62267fd8955d0989ca4e4695cbd84c83a9732c40500dd4652cff89",
    "registry/security/controls/sec_secret_001.json": "48ecd926100b5f8efeb580489c30fba745ac48e09bc5da040c011119883a6106",
    "registry/security/controls/sec_secret_002.json": "1c3aa84abfb69f67771d2d716ba6c4665935acd7889f7a50d3a1f94e01785288",
    "registry/security/controls/sec_sess_001.json": "a93498d8567864d6db98e50178e997d06ff74ef0b622b14a15c1d8c1ef5c8e78",
    "registry/security/controls/sec_ssrf_001.json": "b2c2d22147da8f5d79964f56f31927cb2ccecd3f6513de1e21efe686703805b9",
    "registry/security/controls/sec_supply_001.json": "5c14e5f3df459d7f265256475091052ceb0039d2e137e1e8eb3d28525745379f",
    "registry/security/controls/sec_tenant_001.json": "c0775b58ac1938aeea14705ace50bdba31621fe8703f361255d0fb164667489a",
    "registry/security/controls/sec_tls_001.json": "ba65dbb5d50eb9d70a2e7893a805610071927a8d5ce9d094ca6a8f7d24615555",
    "registry/security/controls/sec_token_001.json": "d9719e0e2aff1a808525ee9f6ba14495b5c6cfcff1b43a6bd624bdcdea0e22b6",
    "registry/security/controls/sec_upl_001.json": "87c29f54a97e72067db7aa482995a21517da2a5cb40bba88c79706def2375219",
    "registry/security/controls/sec_upl_002.json": "1db0c466a97689dddad519e14e44437cf62e2dae335a8798564e182e6a5f610e",
    "registry/security/controls/sec_upl_003.json": "a15a184292640b7751f916e1148841c2b16057885efe3620697c89e0631eeb7d",
    "registry/security/controls/sec_wh_001.json": "8321a38dc574f16f74e0197c1f56f1d090d39cc4210e1d85e7bc1697d9047aae",
    "registry/security/controls/sec_wh_002.json": "3db97e53690e167179169de0af6cfc6fbe2a1a5db5eedc7ce8ec38bd05b33516",
    "registry/security/controls/sec_wh_003.json": "2a6f603e9aa6b43f2ccf18223d388be64faed6a3b0b91c9a4be0ccc7e77db978",
    "registry/security/controls/sec_xss_001.json": "11bd14df7cd51d9232aec06f91fcb943e7db7259c931867185f5d6defcb7415c",
    "registry/security/definitions/secretClass.json": "b07fb42139c0a6a1fc5f068f1946482f31d7dee8f7045c7b588641832b783010",
    "registry/security/definitions/securityControl.json": "2a93126d5876655c88807e1b26080fe693cd1a00347788bd12f7d03fa77dfeeb",
    "registry/security/definitions/surfaceMapping.json": "abed6e7eed9e984dad79ee07883148fa41e4bf9513e3365cc53a3b5f9e9b7932",
    "registry/security/definitions/verificationMethod.json": "be93139fd0a1fccd010eedffb310061ac7c2e7971157fef528f5f14ffb56b85d"
  }
};
