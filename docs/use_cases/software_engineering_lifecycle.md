# Use Case: Specialized Engineering Lifecycle
**Status:** [ACTIVE] | **Last AST Sync:** 2026-04-11

## 1. Description
An autonomous workflow that moves from a business requirement to a validated, documented implementation through mandatory deep-dive research, planning, execution, and review. This lifecycle is specialized for **Systems Architecture, Backend logic, Frontend UI, and Mobile apps**.

## 2. Details
- **Primary Roles:** Systems Architect, Backend Engineer, Frontend Specialist, Mobile Specialist.
- **Success Criteria:** 100% test pass rate, updated documentation, mandatory discovery artifact, peer-reviewed plan, and plan reconciliation log.

## 3. Visual Logic (Mermaid)
```mermaid
graph TD
    A[Role: User] --> B[Trigger: /architect:* | /backend:* | /frontend:* | /mobile:*]
    B --> C[Phase 0: Deep Dive Investigation]
    C --> C1[Write FEATURE_DISCOVERY.md]
    C1 --> C2{Gate 0: Human Approval of Discovery}
    C2 -- Denied --> C
    C2 -- Approved --> D[Phase 1: Architectural Planning]
    D --> D1[Write FEATURE_IMPLEMENTATION_PLAN.md]
    D1 --> D2{Gate 1: Human Approval of Plan File}
    D2 -- Denied --> D
    D2 -- Approved --> E[Phase 2: Implementation]
    E --> E1{Private Feed Detected?}
    E1 -- Yes --> E2[STOP: Request feed config file]
    E2 --> E1
    E1 -- No --> E2a[Phase 2a: Dynamic Stack Detection]
    E2a --> E3[Restore Packages & Implement]
    E3 --> F[Phase 3: Code Review]
    F --> G{Gate 2: Human Approval}
    G -- Denied --> E3
    G -- Approved --> H[Commit to Feature Branch]
    H --> H1[Update Plan: Implemented / Pending]
    H1 --> I[Phase 5: Sync & Document]
    I --> J[Task Success]
```

## 4. Key Business Rules
* **Rule 1: Human-in-the-Loop:** No implementation or commit occurs without explicit user approval of the discovery artifact, the plan, and the final review.
* **Rule 2: Zero Trust:** Unverified code is never merged. All changes must be backed by unit or integration tests.
* **Rule 3: Conceptual Integrity:** All code changes must be reflected in the documentation immediately after implementation.
* **Rule 4: Discovery-First Persistence:** Findings and confirmed understanding are written to `[FEATURE]_DISCOVERY.md` before planning begins.
* **Rule 5: Plan-First Persistence:** The implementation plan is written to `[FEATURE]_IMPLEMENTATION_PLAN.md` before requesting approval.
* **Rule 6: Private Feed Safety:** If private/internal package registries are detected, execution halts until the user provides the feed configuration file.
* **Rule 7: Stack Detection:** The system automatically optimizes knowledge injection based on detected signature files (.csproj, go.mod, etc.) or task hints.
* **Rule 8: Plan Reconciliation:** After every commit, the plan file is updated with what was implemented (with commit ref) and what remains pending, stamped `[DONE]` or `[PARTIAL]`.
