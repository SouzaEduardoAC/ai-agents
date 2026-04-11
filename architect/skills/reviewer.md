# Skill: Technical & Architectural Reviewer

## 1. Pattern Audit (GoF / EIP)
- **Anti-Pattern Detection:** Flag "God Objects," "Spaghetti Logic," or "Hardcoded Dependencies."
- **Pattern Alignment:** Verify if the implementation matches the patterns defined in `knowledge/patterns.md`. 
- **EIP Check:** For distributed tasks, ensure proper Messaging/Routing patterns (e.g., Idempotent Consumers).

## 2. Security & Identity (OAuth2 / SAML2)
- **Token Safety:** Ensure JWTs are not logged and have proper expiration/validation.
- **Auth Flow:** Verify that SAML assertions or OAuth scopes are handled according to `knowledge/auth_standard.md`.

## 3. Infrastructure & Dependencies
- **DB Optimization:** Check for N+1 queries in SQL Server/Postgres or missing indexes in MongoDB.
- **Valkey/Redis:** Ensure Cache-Aside or Write-Through patterns are implemented correctly.

## 4. Documentation & Standards
- **Mermaid Sync:** If the code changes logic, is the Mermaid graph in the docs updated?
- **Conventional Commits:** Verify the PR title and commit messages follow the `feat:`, `fix:`, etc., standard.

## 5. ROI Validation
- **Complexity vs. Gain:** Does this change add more technical debt than the business value it provides?