# Knowledge: Frontend Design & State Patterns

## 1. Component Architecture
- **Atomic Design:** Atoms, Molecules, Organisms, Templates, Pages.
- **Container/Presentational (Smart/Dumb):** Separation of logic (data fetching/state) from UI (rendering/props).
- **Compound Components:** Grouping components to share implicit state (e.g., Select/Option, Accordion).
- **HOCs & Render Props:** React-specific logic reuse patterns.
- **Mixins & Composables:** Logic reuse in Vue (Composables are preferred).
- **Custom Hooks:** Logic encapsulation in React.

## 2. State Management Strategies
- **Global Store:** Redux (React), Pinia (Vue), NgRx (Angular).
- **Atomic State:** Zustand (React), Recoil (React).
- **Local State:** Component-local state management (useState, ref, reactive).
- **Server State:** React Query (TanStack Query), SWR, Apollo Client (GraphQL).
- **Props vs. Context/Provide-Inject:** Deciding between explicit prop passing and implicit provider state.

## 3. Rendering & Hydration
- **SSR (Server-Side Rendering):** Next.js, Nuxt.js, Angular Universal.
- **SSG (Static Site Generation):** For content-heavy, stable pages.
- **ISR (Incremental Static Regeneration):** Hybrid approach for dynamic static sites.
- **Partial Hydration / Islands Architecture:** Minimizing JavaScript delivered to the client (Astro, Fresh).

## 4. UI/UX Standards
- **A11y (Accessibility):** WCAG 2.1 compliance, ARIA attributes, semantic HTML.
- **Mobile First & Responsive Design:** SASS, Tailwind CSS, CSS Modules.
- **Design Systems:** Storybook integration, token-based design (Tailwind, Stitches).
- **Performance:** Debouncing, Throttling, Memoization (useMemo, React.memo, computed).
