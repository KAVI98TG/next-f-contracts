// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Source set: registry/security/*
export const GENERATED_SECURITY = {
  "registryVersion": "1.0.0",
  "index": {
    "registryVersion": "1.0.0",
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
    "registryVersion": "0.37.0",
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
    "registryVersion": "0.37.0",
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
    "registryVersion": "0.37.0",
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
    "registryVersion": "0.37.0",
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
    "registryVersion": "0.37.0",
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
    "registryVersion": "0.37.0",
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
      "version": "1.0.0",
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
      "version": "1.0.0",
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
      "version": "1.0.0",
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
      "version": "1.0.0",
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
    "registry/security/index.json": "711e7de807245bb748926d343373207cb4eb407e9aebdd33aeae65ed595b4560",
    "registry/security/categories.json": "0dc7230982b165bc35abd433fbc111302df7c2f6b5070cc2ab2d0b89fb1e2f4e",
    "registry/security/severity-levels.json": "765170a25795783551c295c60157138322812c3a52699b39f3683a49726ec3ce",
    "registry/security/obligations.json": "925f452ae48d5bf14242f26eb7fab0ffd99642923198564c9c75fdfab44cc1d4",
    "registry/security/verification-methods.json": "21c9ee9eb9a46f8347aa329fd32520974fe1faf37799a09e9c11ff34b1ebcbac",
    "registry/security/secret-classes.json": "650c1ecbf892271ff5b1021176eb02e5893cc964ada26d7328de88ca2781da70",
    "registry/security/surface-mapping.json": "567c20caf3a24a8eba4ed416a401a76e9531ac12389ded6e600e626024b983de",
    "registry/security/security-control.schema.json": "fa8bf139f2a722bdd2db7143fae50754d4c56ee6782fc398fcae18d8b90f2b1a",
    "registry/security/controls/sec_abuse_001.json": "61c89d3c7bb7fd0a0483311009a64128ead3bc44f8c25992680419827053f067",
    "registry/security/controls/sec_audit_001.json": "b96d897a14f69eb8e1539f7eba6f50dadf63a26b89c399ff8923d9d6c0c7051f",
    "registry/security/controls/sec_auth_001.json": "d1c8ed21f1ce22c7ee6a97fa863dceea9296f3f2862aac3f4db837b87f2d77e1",
    "registry/security/controls/sec_auth_002.json": "9386164879f1ba0c0e514616a1bca838549c5e124d030167855313e41610124c",
    "registry/security/controls/sec_authz_001.json": "18bf76857df3842da51e6aa60bab5006504eb946423c35023350fa5cbae97413",
    "registry/security/controls/sec_authz_002.json": "a7f3ccedf7c457f633e17c7a84a93c1d383da5389e705db3b4611d2e906e3fcb",
    "registry/security/controls/sec_backup_001.json": "7b5a1daa470f89be60d907b515a4839b7394bb04320e8a0432f80a07c368fed1",
    "registry/security/controls/sec_brute_001.json": "59153a837a82573bd3d034e0f04d3b8b65335dc0cb6b520b1e37a2df849d2659",
    "registry/security/controls/sec_cors_001.json": "7c0d6b79c7806c2a4c780eea773893e209d3010a0f68d35cdf9f699c705813e8",
    "registry/security/controls/sec_csp_001.json": "8866ae8abd022d43d6e81b4b00bf2944a5c061dd710b2566d45dcc086ea6bfca",
    "registry/security/controls/sec_csrf_001.json": "f56c5ef479d146acfa2199e19add9f671b8ca53f80477e2e25c8ecf51eaac942",
    "registry/security/controls/sec_dep_001.json": "d4717f1050f1c1906f55cf24e1ec06ef7d68f5e2f589444bb99e7dff77ea89c4",
    "registry/security/controls/sec_env_001.json": "c8b140b6ecf2700931480077a28a0691b022194fd5d1f32f2258fe590effb2e7",
    "registry/security/controls/sec_err_001.json": "17a9e6b05945f30fa70ebba66ed1dce4662342611b6d01c12956cc3fda07f991",
    "registry/security/controls/sec_hdr_001.json": "c1ef578d5168a61b47c67b41443ae007d0066af30e5bc96f1026c6de2da3f44c",
    "registry/security/controls/sec_idemp_001.json": "3b83e73a036eef877f2c72bc7f052e5c2d01e1794286257d4a0b4c91f017a077",
    "registry/security/controls/sec_in_001.json": "8be0874aaacb180d127fd04636e245809df27c330d00b787ae1c539f47edc2b7",
    "registry/security/controls/sec_int_001.json": "11041972d76b82c85a30b5f3e37eac2b78eefb44cd685f4b956f5d7c49614d55",
    "registry/security/controls/sec_int_002.json": "92c1a2758f49148466a9f1d8dbef1bd18edbba5758fed2f8c4827397e9f1a62f",
    "registry/security/controls/sec_key_001.json": "32c8ceead888e6fe147150bf814b9734ae4f6346e799d5c94456d854bd6c4cfc",
    "registry/security/controls/sec_log_001.json": "667d2b3ae068a074839e3cd5a4f932cf4b8ce6fc3ab916b0acaa476cf19c352f",
    "registry/security/controls/sec_oauth_001.json": "5a5d1bbbb6e2c9275b65c7e36f383b42142e742b2e8a87ea2a23e2c994766b56",
    "registry/security/controls/sec_out_001.json": "9b01b372ef5db6523126b3c1f7004b533aa383aae121169cd58ce325003c79d2",
    "registry/security/controls/sec_pay_001.json": "ba3f997f9990f451a849ae38105f81d8ea8250b400cedb5f7f9d56097dce2a5a",
    "registry/security/controls/sec_pay_002.json": "22c79714a316172271012318c37a1259378fabb8e938e6451ffbc988c6010003",
    "registry/security/controls/sec_pay_003.json": "526609f3962d783ca519c21842ebc6a6a0b8f9fd7de1619521cc2364a31a3c16",
    "registry/security/controls/sec_pdata_001.json": "f5440e485d8e661c4b59106cbe341eaa4ad2e6a740649e2dbc4d162959258256",
    "registry/security/controls/sec_prev_001.json": "6c0ca44c3a0be1b31f3e3df688a10617ec9a401b5e6e4ae06536844ae4d5ee53",
    "registry/security/controls/sec_query_001.json": "27d495a99f235c8f0a3f6188370575a7cdab7c989c5fa53e076f0307b36ef756",
    "registry/security/controls/sec_rate_001.json": "ddbf41436e58ed557c622f5cf4f6a8cdae13982eaab6f6a501d02434c44e41bd",
    "registry/security/controls/sec_recovery_001.json": "76026c5bfe28a9176e360b9c628991703137918fab30166a8726636389645414",
    "registry/security/controls/sec_redir_001.json": "d76c1defbd20e51f4c3a43ee72a484d9af709241fb627770f64811d515a90d9a",
    "registry/security/controls/sec_s2s_001.json": "ee35445b8414cc241aa10e49633ab1216cf183473e6dd9645c8bbce78d70c29a",
    "registry/security/controls/sec_san_001.json": "14203bef470430efcb210eef046f2d5e2ee7dfad42ffba3bc4d7e026d7099fce",
    "registry/security/controls/sec_secret_001.json": "82ee17ac32cf76f2fa59edf07985032798950959009d5c01cf826e7ef6c22fa2",
    "registry/security/controls/sec_secret_002.json": "28a2b88ad25a8c29b8bdd0ad9d07941f8b11169d04d96452954ba51973d1bc81",
    "registry/security/controls/sec_sess_001.json": "ca9b5851ea9fe895fd82f819dd09bb2ea970401e85d60e159a6e3e68e640fc1e",
    "registry/security/controls/sec_ssrf_001.json": "84f7f8f5c80c4cb88e091edcb99195c7af56591ee3dc5dc93714b17bed423f20",
    "registry/security/controls/sec_supply_001.json": "6aaaa6f8dc2ca840b5c13fcf2dfa0129baae82f9da7e7a439dbfd9469834f7dd",
    "registry/security/controls/sec_tenant_001.json": "f022b867457b7572180b5cee926ec718fb46471194edab0ef989ff71ababfad2",
    "registry/security/controls/sec_tls_001.json": "612f0ce83321b359f3f2afdebd10a7c9cfabfd71f5f960b3aed08b88f4854869",
    "registry/security/controls/sec_token_001.json": "574d23ce2bc6420884d163c606c7bacb3cc50942ca2c907ca777dfaec0b00fa5",
    "registry/security/controls/sec_upl_001.json": "d41120f301791140833bcd428b2104e8b11338483e5b939613054202ac4c6073",
    "registry/security/controls/sec_upl_002.json": "a8ccd30b87b095d66da501539230c248e388e0a38807e1a6d9fbe90b0af22527",
    "registry/security/controls/sec_upl_003.json": "601ca2b1ee68346cebe6904d83d33acbddf8d4cfca7a289352f9ef01f654012b",
    "registry/security/controls/sec_wh_001.json": "796b4cbfa0c82096295b8e0e48e3d53911e88352db2a6d9ed73e3c6d2762d2c8",
    "registry/security/controls/sec_wh_002.json": "af6cff625d684bb6b1c646c948f5ee2310dc2983063b6e17597e54e9cf0566be",
    "registry/security/controls/sec_wh_003.json": "6cf16575980e8ee02d41956a5fddc6e7b86f12f511d7b51af3859f4805ef6ce6",
    "registry/security/controls/sec_xss_001.json": "d4c54ac9080b54b645a44dfdf13708fab102dd06bc2b8191e3f854882c977124",
    "registry/security/definitions/secretClass.json": "c56db3bdca685b7efe885ae0f154eb8ed18c71b03655407a93084a6a3e65f885",
    "registry/security/definitions/securityControl.json": "b435fe002cdf91e0bcbea634efbfa9865f6d7cc3bc1036c5bf19a7f3362f288c",
    "registry/security/definitions/surfaceMapping.json": "9ebf30fa96c133d4fe93226ba8040b979d6ead7f3e6213c01024284b01d0b436",
    "registry/security/definitions/verificationMethod.json": "19f6a5a39b94f4b739abeac3c44136b0e73fe7f625e95aab3b0af848f2821030"
  }
};
