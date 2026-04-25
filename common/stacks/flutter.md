# Knowledge: Flutter & Dart — Performance & Best Practices

> Applies to: Flutter 3.x, Dart 3.x+
> Scope: Cross-platform Mobile (iOS/Android), Web, and Desktop.

---

## 1. State Management & Architecture

### Rules
- **ALWAYS** use a robust state management solution (Provider, Riverpod, BLoC, or Signals).
- **ALWAYS** separate business logic from the UI (Presentation Layer).
- **ALWAYS** use `const` constructors for widgets whenever possible to optimize re-renders.
- **PREFER** composition over deep widget trees.

### Hard Guardrails
| Forbidden | Reason |
|---|---|
| Calling `setState()` in every widget | Causes unnecessary full-tree re-builds; use scoped state |
| Large build methods | Hard to maintain and debug; split into smaller widgets |
| Direct API calls in Widgets | Violates SOC; use Repository pattern |
| Using `GlobalKey` excessively | Performance overhead; use only when necessary for state across trees |

---

## 2. Performance & Rendering

### Rules
- **ALWAYS** use `ListView.builder` for long lists instead of `ListView`.
- **ALWAYS** avoid heavy computations inside `build()` methods.
- **ALWAYS** use `RepaintBoundary` for complex animations or static parts of a moving tree.
- **ALWAYS** use the Flutter DevTools to profile for junk and memory leaks.

### Hard Guardrails
| Forbidden | Reason |
|---|---|
| Large images without resizing | Memory exhaustion; use `cacheHeight` / `cacheWidth` |
| Unbounded `Column` inside `ListView` | Layout overflow and performance issues |
| Opacity widget on large trees | Expensive; use `AnimatedOpacity` or simpler alternatives |

---

## 3. Async & Concurrency

### Rules
- **ALWAYS** use `FutureBuilder` or `StreamBuilder` for asynchronous data in the UI.
- **ALWAYS** use `Isolates` for heavy CPU-bound tasks to keep the UI thread responsive.
- **ALWAYS** handle errors in `Future` and `Stream` chains.
- **ALWAYS** respect the `mounted` property before calling `setState` or navigating after an async gap.

### Hard Guardrails
| Forbidden | Reason |
|---|---|
| Blocking the UI thread | Causes app freezing (jank) |
| Missing `await` on critical async tasks | Race conditions and inconsistent state |
| Swallowing async errors | Silent failures that are hard to debug |

---

## 4. Dart Best Practices

### Rules
- **ALWAYS** use `final` for variables that don't change.
- **ALWAYS** use null-safe operators (`?`, `??`, `!.`).
- **ALWAYS** follow the official [Dart Style Guide](https://dart.dev/guides/language/effective-dart/style).
- **ALWAYS** define explicit types for public APIs.
