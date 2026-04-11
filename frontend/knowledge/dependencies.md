# Frontend Ecosystem & Selection

The frontend choice must prioritize **Performance**, **DX (Developer Experience)**, and **Lighthouse Score**.

| Category | Technology | Best Use Case | Frontend Trade-off |
| :--- | :--- | :--- | :--- |
| **Framework** | **ReactJS** | Massive ecosystem, flexible, large-scale apps. | High churn, complex state management, render-heavy. |
| **Framework** | **VueJS (3)** | Clean architecture, SFCs, high performance. | Smaller ecosystem than React, Vue 2 legacy. |
| **Framework** | **Angular** | Enterprise, strict architecture, full-featured. | High learning curve (RxJS), rigid structures. |
| **Build Tool** | **Vite** | Fast HMR, ESM-based, modern default. | Less mature plugin ecosystem than Webpack. |
| **CSS System** | **Tailwind CSS** | Atomic CSS, rapid UI development. | Learning curve for utility classes, utility bloat. |
| **CSS System** | **SASS/Modules**| Explicit scoping, complex logic. | Harder to maintain consistency than utility CSS. |
| **Unit Testing** | **Vitest** | Vite-native, high speed, Jest-compatible. | Younger than Jest/Mocha. |
| **E2E Testing** | **Cypress / Playwright** | Real browser interaction, stable tests. | Slow execution; requires separate environment. |
| **API Client** | **Axios / TanStack Query** | Type-safe, data fetching with caching. | Increases bundle size compared to native `fetch`. |

## Selection Principles
1. **Prefer Modern Build Tools:** Vite/Turbo over Webpack.
2. **Type-Safe Development:** Strict TypeScript is mandatory for all components.
3. **Optimized Bundle Size:** Always audit bundle impact of new dependencies (`bundle-phobia`).
4. **Accessible by Default:** Choose libraries with ARIA built-in (e.g., Headless UI, Radix UI).
