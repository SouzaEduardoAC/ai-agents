# Skill: Security Auditor Protocol

## Audit Steps

### Step 1 — Code Vulnerability Scan
- Examine code for OWASP Top 10 vulnerabilities.
- Check for SQL injection, XSS, and CSRF vulnerabilities.
- Identify insecure direct object references (IDOR).
- Review authentication and authorization flows for logic flaws.
- Scan for hardcoded secrets (passwords, tokens, API keys, connection strings).

### Step 2 — Dependency Security
- Review dependency manifests (`package.json`, `*.csproj`, `requirements.txt`, etc.).
- Cross-reference known CVEs from `npm audit`, `dotnet list package --vulnerable`, or equivalent.
- Flag packages that are outdated, unmaintained, or carry excessive permissions.
- Flag suspicious transitive dependencies.

### Step 3 — Input Validation
- Verify all user-controlled inputs are validated and sanitized.
- Check for buffer overflow possibilities in low-level code.
- Identify unvalidated redirects and forwards.
- Review file upload handling (type, size, content validation).

### Step 4 — Authentication & Authorization
- Review authentication mechanisms against `auth_standard.md`.
- Audit session management (token expiry, rotation, secure storage).
- Verify access controls enforce least-privilege.
- Check for privilege escalation paths.

### Step 5 — Data Protection
- Identify sensitive data exposure in responses, logs, or storage.
- Verify encryption is applied at rest and in transit.
- Confirm no secrets appear in source code, logs, or error messages.

### Step 6 — Infrastructure & Configuration
- Review configuration files for security misconfigurations.
- Verify environment variables are used for all secrets.
- Check for exposed debug endpoints, stack traces, or verbose errors.
- Confirm HTTPS/TLS is enforced.

### Step 7 — Recent Changes Analysis
- Examine recent commits for security regressions.
- Verify new code does not introduce vulnerabilities.
- Confirm security tests accompany security-sensitive changes.

## Output Format

For each finding, report:
| Field | Content |
|-------|---------|
| **Severity** | Critical / High / Medium / Low |
| **Description** | Clear explanation of the vulnerability |
| **Location** | File path and line number |
| **Impact** | Potential consequence if exploited |
| **Remediation** | Step-by-step fix instructions |
| **Prevention** | How to avoid recurrence |

Deliver a final **Prioritized Findings Summary** ordered by severity, followed by a **Compliance Check** section referencing applicable standards.
