# Knowledge: JavaScript — Performance & Best Practices

> Scope: Web, Node.js, and general scripting.

## 1. Modern JS (ES6+)
- **ALWAYS** use `const` and `let`. Never use `var`.
- **ALWAYS** use Arrow Functions for lexical `this`.
- **ALWAYS** use Template Literals for string interpolation.
- **ALWAYS** use Destructuring for objects and arrays.

## 2. Async Programming
- **ALWAYS** use `async/await`. Avoid callback hell and raw `.then()` chains.
- **ALWAYS** wrap `await` calls in `try/catch`.
- **ALWAYS** use `Promise.all()` for independent parallel tasks.

## 3. Guardrails
- **NEVER** use `==`. Always use `===`.
- **NEVER** modify built-in prototypes.
- **NEVER** use `eval()`.
- **ALWAYS** use strict mode (usually implicit in modules).
- **ALWAYS** use `console.error` for actual errors, not just `console.log`.
