# IMPLEMENTATION_PLAN: [MODE: MASTER-FLOW] High-Fidelity Orchestration

## 1. Goal
Create a comprehensive `MASTER-FLOW` workflow that automates the lifecycle of a task from initial documentation sync to final verification and summary, featuring two distinct human-in-the-loop approval gates.

## 2. Affected Files
- **`engineer/commands/master-flow.toml`**: (New) Defines the command orchestration.
- **`engineer/skills/protocol.md`**: (Modified) Add `## [MODE: MASTER-FLOW]` without altering existing `PLAN` or `IMPLEMENT` modes.
- **`engineer/README.md`**: (Modified) Add documentation and installation for the `/master-flow` command.

## 3. Logic Changes (The MASTER-FLOW Sequence)

### Phase 1: Context Grounding (Step 1 & 2)
1. **Pre-Sync:** Execute Documentation Maintainer logic (`/document`) to ensure the current AST is accurately reflected in `/docs`.
2. **Initial Plan:** Execute Architectural Planning logic (`/plan`). Generate `IMPLEMENTATION_PLAN.md` with ROI and testing strategy.

### Phase 2: Approval Gate 1 (Step 3)
3. **Plan Approval:** Present the plan. **HALT** for user confirmation.
   - If **Rejected**: Re-run Step 2 with user feedback.
   - If **Approved**: Commit the plan and proceed.

### Phase 3: Execution & Audit (Step 4 & 5)
4. **Implementation:** Execute Implementation Protocol (`/develop`). Update `TODO.md`, write code, and run tests.
5. **Quality Audit:** Execute Senior Reviewer logic (`/review`). Generate a report on patterns, security, and ROI.

### Phase 4: Approval Gate 2 (Step 6)
6. **Implementation Approval:** Present the review report and diff to the user.
   - If **Rejected**: Revert to **Step 4 (Implementation)**. Apply fixes based on user feedback and re-run Step 5.
   - If **Approved**: Proceed.

### Phase 5: Finalization (Step 7 & 8)
7. **Post-Sync:** Re-run Documentation Maintainer logic (`/document`) to reflect the new implementation in the documentation suite.
8. **Project Summary:** Provide a concise breakdown of the implemented features, test results, and documentation updates.

## 4. Testing Strategy
- **Simulated Rejection (Gate 2):** Force a rejection during the implementation phase to verify the agent stays in "Implementation Fix" mode rather than restarting the entire plan.
- **AST Sync Verification:** Compare the `AI_Context.md` before and after a master run to ensure the "Post-Sync" captured new exports/dependencies.

## 5. ROI Assessment
- **Benefits:** Eliminates documentation drift; ensures every line of code is peer-reviewed and tested before final sync.
- **Costs:** Higher token consumption per task due to the multi-phase execution.
