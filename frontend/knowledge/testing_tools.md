# Frontend Testing Tools & Patterns

## 1. Unit & Component Testing
- **Preferred Tools:** Vitest (React/Vue/Angular), Jest, or Component Testing via Cypress.
- **Library:** React Testing Library or equivalent for non-implementation detail testing.
- **Pattern:** Focus on UI logic and state changes. Test "what the user sees" rather than "how the code is written."

## 2. E2E & Browser Testing
- **Preferred Tools:** Playwright or Cypress.
- **Golden Path:** Maintain E2E tests for critical user journeys (Login, Checkout, Profile Edit).
- **A11y:** Include accessibility audits (e.g., using `axe-core`) in the CI pipeline.

## 3. Visual & Responsive
- **Responsive:** Test critical UI components across Mobile, Tablet, and Desktop breakpoints.
- **Cross-Browser:** Verify functionality in Chrome, Firefox, and Safari using Playwright.
