# Knowledge: Security Standards & Reference

## OWASP Top 10 (2021)
- **A01 - Broken Access Control:** Failures that allow unauthorized access to resources.
- **A02 - Cryptographic Failures:** Weak or missing encryption exposing sensitive data.
- **A03 - Injection:** SQL, NoSQL, OS, LDAP injection via untrusted data.
- **A04 - Insecure Design:** Missing or ineffective security controls by design.
- **A05 - Security Misconfiguration:** Insecure defaults, exposed debug info, unnecessary features.
- **A06 - Vulnerable Components:** Using libraries/frameworks with known CVEs.
- **A07 - Authentication Failures:** Weak credential management, session hijacking.
- **A08 - Software & Data Integrity Failures:** Code/update pipelines without integrity verification.
- **A09 - Logging & Monitoring Failures:** Insufficient logging to detect breaches.
- **A10 - SSRF:** Server-Side Request Forgery allowing internal network access.

## Severity Levels
- **Critical:** Immediate exploitation possible; direct data loss or full system compromise.
- **High:** Exploitable with low complexity; significant data or functionality at risk.
- **Medium:** Requires specific conditions; partial exposure or indirect risk.
- **Low:** Minimal exploitability; defense-in-depth improvement.

## Input Validation Rules
- Reject untrusted data before processing (allowlist over denylist).
- Sanitize all user-controlled inputs to HTML, SQL, and shell contexts.
- Validate file uploads: type, size, content (not just extension).
- Block unvalidated redirects and forwards.

## Data Protection Standards
- Encrypt sensitive data at rest (AES-256) and in transit (TLS 1.2+).
- Never log passwords, tokens, PII, or credentials.
- Apply least-privilege principle to all data access.
- Ensure secrets are stored in environment variables or a vault — never in source code.

## Dependency Security
- Flag packages with known CVEs at `moderate` severity or higher.
- Flag unmaintained packages (no releases in 18+ months).
- Prefer packages with active maintainers and a security policy.

## Compliance References
- **OWASP ASVS 4.0:** Application Security Verification Standard.
- **NIST SP 800-53:** Security and Privacy Controls for Information Systems.
- **GDPR / LGPD:** Data minimization, consent, breach notification obligations.
- **HIPAA:** PHI encryption, audit logs, access control for healthcare data.
