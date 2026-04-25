# Knowledge: React — Performance & Best Practices

> Scope: Web Applications, SPAs, and UI Components.

## 1. Component Design
- **ALWAYS** use Functional Components and Hooks.
- **ALWAYS** keep components small and focused (Single Responsibility).
- **PREFER** composition over deep prop drilling.
- **USE** `memo` for expensive components that re-render with the same props.

## 2. State Management
- **ALWAYS** lift state up only as far as necessary.
- **USE** `useReducer` for complex state logic.
- **NEVER** use `useContext` for frequently changing state (performance bottleneck).
- **ALWAYS** initialize state with the correct type.

## 3. Performance Guardrails
- **NEVER** define components inside other components.
- **NEVER** use indexes as `key` props for dynamic lists.
- **ALWAYS** cleanup effects in `useEffect` return functions.
- **USE** `useCallback` and `useMemo` sparingly — only when performance profiling proves a bottleneck.

## 4. Hooks Rules
- **ONLY** call hooks at the top level.
- **ONLY** call hooks from React functions.
- **ALWAYS** include all dependencies in the `useEffect` / `useCallback` dependency array.
