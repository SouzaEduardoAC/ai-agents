# Base Skill: Technical & Architectural Reviewer

## 1. Pattern Audit & ROI
- **Pattern Alignment:** Verify if the implementation matches the defined architectural patterns.
- **ROI Validation:** Does this change add more technical debt than business value?
- **Anti-Pattern Detection:** Flag "God Objects," "Spaghetti Logic," or "Hardcoded Dependencies."

## 2. Standards & Conventionality
- **Conventional Commits:** Verify commit messages follow the `feat:`, `fix:`, etc., standard.
- **Documentation Sync:** Ensure Mermaid diagrams and technical specs are updated to reflect logic changes.

## 3. Security & Identity
- **Auth Flow:** Verify handling of OAuth2/OIDC/SAML2 against established standards.
- **Token Safety:** Ensure JWTs are not logged and have proper validation.

## 4. Testing & Quality
- **Coverage:** Verify that all business logic changed or added is covered by unit tests. Leverage `sonarqube` metrics if available.
- **Automated Analysis:** Use `sonarqube` or similar static analysis tools to identify bugs, vulnerabilities, and code smells before manual review.
- **Regression:** For bug fixes, confirm a test case exists that specifically targets the fixed vulnerability or error.
- **Test Integrity:** Ensure tests are deterministic, independent, and readable.
- **Pass Rate:** Verify that 100% of the test suite passes before implementation approval.
