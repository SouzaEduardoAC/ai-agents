# Knowledge: TypeScript — Best Practices & Guardrails

> Scope: Type-safe development across all JS-based stacks.

## 1. Type Safety
- **ALWAYS** enable `strict: true` in `tsconfig.json`.
- **NEVER** use `any`. Use `unknown` if the type is truly unknown.
- **ALWAYS** define explicit return types for public functions/methods.
- **ALWAYS** use interfaces for object shapes and types for unions/aliases.

## 2. Patterns
- **ALWAYS** use Discriminated Unions for complex state.
- **ALWAYS** use Type Guards (`isType`) to narrow types safely.
- **ALWAYS** use `readonly` for immutable arrays and objects.
- **PREFER** Enums (or Const Enums) for fixed sets of values.

## 3. Guardrails
- **NEVER** use non-null assertions (`!`) unless absolutely necessary.
- **NEVER** use `@ts-ignore`. Use `@ts-expect-error` with a reason if unavoidable.
- **ALWAYS** handle the `null` / `undefined` cases (Optional Chaining, Nullish Coalescing).
