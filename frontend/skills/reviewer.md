# Skill: Frontend Technical Reviewer (Extension)

This skill extends the `base_reviewer.md`.

## 1. UI/UX Integrity
- **Component Lifecycle:** Verify efficient use of hooks (React) or lifecycle hooks (Angular/Vue) to prevent memory leaks.
- **State Management:** Check for proper use of global vs local state (Redux, Pinia, NgRx).
- **Performance:** Identify unnecessary re-renders and verify use of Lazy Loading / Code Splitting.

## 2. Browser Safety & Accessibility
- **Bundle Size:** Flag large dependencies that impact First Contentful Paint.
- **A11y:** Verify proper use of ARIA roles and semantic HTML.
- **Responsive Design:** Ensure changes are tested across mobile, tablet, and desktop breakpoints.
