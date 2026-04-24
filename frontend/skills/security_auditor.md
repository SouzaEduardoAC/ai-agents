# Skill: Frontend Security Auditor (Extension)

This skill extends the `base_security_auditor.md`.

## 1. Client-Side Vulnerabilities
- **XSS:** Verify sanitization of user-generated content and safe use of `dangerouslySetInnerHTML` or equivalent.
- **Client State:** Ensure no sensitive data (PII, tokens) is stored in `localStorage` or `sessionStorage` in plain text.
- **CORS:** Audit allowed origins and verify safe cross-origin communication.

## 2. API Interaction
- **Exposure:** Check for sensitive information leaking through console logs or error messages in the production build.
- **Token Handling:** Verify that JWTs are only sent over HTTPS and handled securely in the application state.
