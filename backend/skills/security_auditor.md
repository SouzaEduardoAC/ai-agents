# Skill: Backend Security Auditor (Extension)

This skill extends the `base_security_auditor.md`.

## 1. Server-Side Protection
- **Injection:** Deep-audit for SQLi, NoSQL Injection, and Command Injection.
- **CSRF/XSS:** Verify backend protection headers and SameSite cookie policies.
- **SSRF:** Check for unsafe URL fetching from internal resources.

## 2. Infrastructure Security
- **Config:** Audit `.env` usage and verify no secrets are exposed in logs or error stack traces.
- **TLS:** Confirm all internal and external communication is encrypted (HTTPS/mTLS).
