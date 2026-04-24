# Base Skill: Security Auditor Protocol

## Universal Audit Steps

### 1. Code & Vulnerability Scan
- Examine code for OWASP Top 10 vulnerabilities.
- Review authentication and authorization flows for logic flaws.
- Scan for hardcoded secrets (passwords, tokens, API keys).

### 2. Dependency & Input Safety
- Review dependency manifests for known CVEs.
- Verify all user-controlled inputs are validated and sanitized.
- Identify sensitive data exposure in responses, logs, or storage.

### 3. Data Protection
- Verify encryption is applied at rest and in transit.
- Confirm no secrets appear in source code, logs, or error messages.

## Output Format Requirements
For each finding, report: Severity, Description, Location, Impact, Remediation, and Prevention.
Deliver a final **Prioritized Findings Summary** ordered by severity.
