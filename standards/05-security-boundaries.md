# Security Boundaries

## Public data
Only data explicitly classified for public delivery may be returned to unauthenticated visitors.

## Authentication
Contracts identify operations that require authentication. Authentication method is an implementation concern governed by platform security standards.

## Authorization
Authentication does not imply authorization. Every privileged operation evaluates required canonical permissions.

## Secrets
Secrets include private API keys, access tokens, refresh tokens, webhook signing secrets, database credentials, private encryption keys and payment-provider secrets.

Secrets must not be stored in public contract JSON, committed in examples, exposed in public browser JavaScript, included in public events or logged in plaintext.

## Personal data
Personal data must be classified before it is allowed in logs, events or webhook payloads.

## Payments
Raw card numbers and CVV data are outside the permitted NEXT F contract storage model.

## Webhooks
Webhook contracts will define HTTPS, signing, timestamps, replay resistance, retries, idempotency, secret rotation and failure handling.

## Input validation
All untrusted input must be validated server-side against the relevant contract. Client-side validation is UX, not a security boundary.

## Output safety
Public rendering implementations must use safe output handling. Rich content contracts do not imply permission to execute arbitrary scripts.

## File uploads
Future media contracts must define allowed types, size constraints, filename handling, storage rules, malware-risk handling and public/private classification.

## Tenant isolation
Organization and Site boundaries are enforced server-side. A Site ID supplied by a browser is never proof of authorization.

## Logging
Logs avoid secrets and unnecessary personal data while retaining sufficient security auditability.


## Phase 29 expansion

The complete machine-readable security-control standard is defined by `standards/37-security-standard.md` and `registry/security/`. This Phase 0 document remains the foundational boundary summary.
