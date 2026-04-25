# Knowledge: VueJS — Performance & Best Practices

> Scope: Web Applications and Interactive UIs.

## 1. Composition API
- **ALWAYS** prefer Composition API (`<script setup>`) over Options API.
- **ALWAYS** use `ref` and `reactive` appropriately (use `ref` for primitives, `reactive` for objects).
- **ALWAYS** keep logic organized in composables (`useSomething.ts`).

## 2. State Management
- **ALWAYS** use Pinia for global state.
- **NEVER** mutate props directly (follow "Props down, Events up").
- **USE** `computed` for derived state to benefit from caching.

## 3. Performance Guardrails
- **ALWAYS** use `key` in `v-for`.
- **NEVER** use `v-if` and `v-for` on the same element.
- **ALWAYS** use `shallowRef` or `shallowReactive` for large, read-only data sets.
- **ALWAYS** cleanup event listeners and timers in `onUnmounted`.

## 4. Templates
- **ALWAYS** use PascalCase for component tags in templates.
- **ALWAYS** use shorthand syntax (`@click`, `:prop`).
