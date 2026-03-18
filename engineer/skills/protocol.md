# Skill: Engineering Execution Protocol (v2026)

## [MODE: PLAN]
0. **Grounding:** Read `AI Context` or `GEMINI.md`.
1. **Research:** Map codebase (`ls -R`).
2. **Contextualize:** Trace relevant logic/dependencies.
3. **Analyze:** Parse the task/bug/bottleneck.
4. **Draft Plan:** Create a detailed Implementation Plan and **write it to `[FEATURE]_IMPLEMENTATION_PLAN.md`** immediately.
   - **Naming:** Derive `[FEATURE]` from the task target as a short UPPER_SNAKE_CASE slug (e.g., `AUTH_REFACTOR`, `PAYMENT_WEBHOOK`, `USER_PROFILE_API`).
5. **Validation & Persistence:** Inform the user the plan is ready at `[FEATURE]_IMPLEMENTATION_PLAN.md` and request approval.
   - **ACTION:** The plan is already persisted. Await explicit user approval before proceeding.
   - **HALT:** End session. Do not write implementation code.

## [MODE: IMPLEMENT]
0. **Grounding:** Read `AI Context` or `GEMINI.md`.
1. **Load Contract:** Read `[FEATURE]_IMPLEMENTATION_PLAN.md`. 
2. **Sync:** Verify the current codebase still matches the plan's assumptions.
3. **Tasking:** Create a `TODO.md` based on the plan.
4. **Execution:** Implement changes following `AI Context` standards.
5. **Package Restore (Pre-Test Guard):** Before running tests, check if the project requires a package restore (e.g., `npm install`, `dotnet restore`, `pip install`).
   - **PRIVATE FEED CHECK:** Inspect the dependency manifest (`package.json`, `*.csproj`, `requirements.txt`, etc.) for references to private/internal registries or feeds.
   - **If private feeds are detected:** **STOP.** Ask the user to provide the private feed configuration file (e.g., `nuget.config`, `.npmrc`, `pip.conf`) before proceeding.
   - **If no private feeds:** Proceed with the restore normally.
6. **Testing:** Write and run unit/integration tests.
7. **Verification:** Ensure 100% pass rate (Old + New). **DO NOT PROCEED** if any fail.
8. **Delivery:** `git add` and `git commit` to a feature branch.
   - **GUARD:** Never commit to `main`, `master`, `develop`, or `development`.
9. **Plan Reconciliation:** Update `[FEATURE]_IMPLEMENTATION_PLAN.md` with a final status section:
   - **Implemented:** List every planned item that was completed, with the corresponding commit reference.
   - **Pending / Out of Scope:** List any planned items that were skipped, deferred, or blocked, with a brief reason.
   - If everything was completed, mark the plan status as `[DONE]`; otherwise mark it `[PARTIAL]`.

   ---

   ## [MODE: MASTER-FLOW]
   0. **Pre-Sync:** Execute `/document` logic (Phase 0) to verify current documentation vs. code reality.
   1. **Architectural Intent:** Execute `/plan` logic. Write the plan to `[FEATURE]_IMPLEMENTATION_PLAN.md`.
   2. **Gate 1 (Human Approval):** Inform the user the plan is ready at `[FEATURE]_IMPLEMENTATION_PLAN.md`. **STOP** and wait for explicit approval.
   3. **Execution:** Upon approval, execute `/develop` logic. Implement changes and run tests.
   4. **Audit:** Execute `/review` logic. Generate a structured report on the implementation's integrity.
   5. **Gate 2 (Human Approval):** Present review report and diff.
   - **On Rejection:** Revert to Step 3. Apply specific fixes and re-audit.
   - **On Approval:** Proceed.
   6. **Post-Sync:** Execute `/document` logic to reflect the final code state in the documentation.
   7. **Closure:** Provide a project summary and a success message.