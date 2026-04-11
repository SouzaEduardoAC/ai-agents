# Frontend Performance & Stability Audit

## 1. Web Vitals & Loading
- **LCP (Largest Contentful Paint):** Large images without `priority`, render-blocking JS/CSS.
- **CLS (Cumulative Layout Shift):** Images without dimensions, late-loading fonts/ads.
- **INP (Interaction to Next Paint):** Blocking the main thread with long-running scripts.
- **FCP (First Contentful Paint):** Excessive bundle size, server response time.

## 2. Rendering & Main Thread
- **Unnecessary Re-renders:** React (missing `memo`), Vue (incorrect `reactive` usage), Angular (Zone.js overhead).
- **Expensive Computations:** Not using `computed` (Vue) or `useMemo` (React).
- **DOM Size:** Rendering massive lists without virtualization (e.g., TanStack Virtual).
- **Blocking I/O:** Reading large files in synchronous browser scripts.

## 3. Bundle & Asset Optimization
- **Large Third-Party Bundles:** Using massive libraries for simple tasks (e.g., Moment.js vs. date-fns).
- **Tree Shaking Failures:** Importing the entire library when only one function is needed.
- **Lack of Code Splitting:** Loading the entire app at once instead of per-route (Lazy Loading).
- **Unoptimized Assets:** Oversized images, unminified CSS/JS.

## 4. State & Data Fetching
- **Prop Drilling:** Passing state through 5+ levels of components.
- **Over-fetching:** Requesting more data than the UI needs.
- **Lack of Caching:** Re-fetching the same data on every component mount.
- **Race Conditions:** Improper handling of multiple async requests (RxJS `switchMap` is the fix in Angular).

## 5. Resilience & A11y
- **Fragile Selectors:** Using fragile CSS classes for tests (prefer `data-testid`).
- **Broken A11y:** Missing `alt` tags, poor contrast, non-interactive elements using `onClick`.
- **Error Boundaries:** App-wide crash when one component fails.
- **Offline Handling:** Poor behavior when the network is unstable (missing Service Workers/PWA).
