# Knowledge: Angular — Performance & Best Practices

> Scope: Enterprise Web Applications and Modular UIs.

## 1. Architecture
- **ALWAYS** use a layered architecture (Component -> Service -> API).
- **ALWAYS** use Standalone Components (Angular 14+).
- **ALWAYS** use `OnPush` change detection by default.
- **ALWAYS** use Type-safe Reactive Forms.

## 2. Dependency Injection
- **ALWAYS** use Constructor Injection.
- **PREFER** `providedIn: 'root'` for singletons.
- **USE** local providers for component-specific state.

## 3. Performance & RxJS
- **ALWAYS** unsubscribe from Observables using `takeUntil` or `AsyncPipe`.
- **NEVER** nested `subscribe()` calls — use flattening operators like `switchMap`.
- **ALWAYS** handle errors in RxJS streams.
- **NEVER** run heavy logic inside templates or getters.

## 4. Guardrails
- **NEVER** manipulate the DOM directly (use `Renderer2`).
- **ALWAYS** use `trackBy` in `*ngFor`.
- **ALWAYS** use strict template type checking.
