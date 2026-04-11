# Frontend Security Standards & Reference

## 1. Top Web Vulnerabilities (Frontend Focus)
- **XSS (Cross-Site Scripting):** Improper sanitization of user-controlled inputs (Reflected, Stored, DOM-based).
- **CSRF (Cross-Site Request Forgery):** Forging requests from the user's browser.
- **CORS (Cross-Origin Resource Sharing):** Misconfigured headers allowing unauthorized cross-origin requests.
- **CSP (Content Security Policy):** Missing or weak policies allowing script injection.
- **Broken Auth (Client-side):** Storing JWTs or sensitive data in `localStorage` instead of HttpOnly cookies.
- **Insecure Components:** Using vulnerable NPM packages (CVEs).

## 2. Secure Data Storage in Browser
- **Avoid LocalStorage for Secrets:** Never store sensitive tokens (JWT, API keys) in `localStorage`.
- **HttpOnly & Secure Cookies:** Use `HttpOnly` to prevent JS access and `Secure` for HTTPS-only transmission.
- **SameSite Cookie Attribute:** Use `Strict` or `Lax` to prevent CSRF.
- **IndexedDB for Large Data:** Only store non-sensitive state in IndexedDB.

## 3. Communication Security
- **Always HTTPS:** Mandatory for all API calls and frontend serving.
- **HSTS (HTTP Strict Transport Security):** Enforce HTTPS at the browser level.
- **Secure API Integration:** Validate all API responses before rendering.

## 4. Input Sanitization & Output Encoding
- **React/Vue Native Escaping:** Leverage framework-native escaping to prevent XSS.
- **DOMPurify:** Use DOMPurify for sanitizing raw HTML content before rendering (`dangerouslySetInnerHTML`, `v-html`).
- **Template Sanitization:** Ensure dynamic templates are sanitized to prevent injection.

## 5. Security Checklists (Audit Protocol)
- **[A11y + Security]:** ARIA attributes can be used for CSS-based data exfiltration.
- **[Third-Party Scripts]:** Audit all third-party scripts (GTM, Pixel, Analytics) for integrity.
- **[Subresource Integrity]:** Use `integrity` and `crossorigin` attributes for external CDNs.
- **[NPM Audit]:** Run `npm audit` or `yarn audit` for every release.

## 6. Compliance References
- **WCAG 2.1:** Accessibility standards (often linked with security).
- **OWASP TOP 10 (Web):** Modern web security vulnerabilities.
- **NIST SP 800-63:** Digital Identity Guidelines (Auth handling).
