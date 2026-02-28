# Skill: Engineering Execution Protocol (v2026)

## [MODE: PLAN]
0. **Grounding:** Read `AI Context` or `GEMINI.md`.
1. **Research:** Map codebase (`ls -R`).
2. **Contextualize:** Trace relevant logic/dependencies.
3. **Analyze:** Parse the task/bug/bottleneck.
4. **Draft Plan:** Create a detailed Implementation Plan.
5. **Validation & Persistence:** Present plan to user. 
   - **ACTION:** Once approved, write the plan to `./IMPLEMENTATION_PLAN.md`.
   - **HALT:** End session. Do not write implementation code.

## [MODE: IMPLEMENT]
0. **Grounding:** Read `AI Context` or `GEMINI.md`.
1. **Load Contract:** Read `./IMPLEMENTATION_PLAN.md`. 
2. **Sync:** Verify the current codebase still matches the plan's assumptions.
3. **Tasking:** Create a `TODO.md` based on the plan.
4. **Execution:** Implement changes following `AI Context` standards.
5. **Testing:** Write and run unit/integration tests.
6. **Verification:** Ensure 100% pass rate (Old + New). **DO NOT PROCEED** if any fail.
7. **Delivery:** `git add` and `git commit` to a feature branch. 
   - **GUARD:** Never commit to `main`, `master`, `develop`, or `development`.