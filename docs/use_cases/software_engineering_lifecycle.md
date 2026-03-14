# Use Case: Software Engineering Lifecycle
**Status:** [ACTIVE] | **Last AST Sync:** 2026-03-03

## 1. Description
An autonomous workflow that moves from a business requirement to a validated, documented implementation through research, planning, execution, and review.

## 2. Details
- **Primary Role:** Software Engineer / Systems Architect
- **Success Criteria:** 100% test pass rate, updated documentation, and a peer-reviewed implementation plan.

## 3. Visual Logic (Mermaid)
```mermaid
graph TD
    A[Role: User] --> B[Trigger: Command /master-flow]
    B --> C[Phase 1: Research & Plan]
    C --> D{Gate 1: Human Approval}
    D -- Denied --> C
    D -- Approved --> E[Phase 2: Implementation]
    E --> F[Phase 3: Code Review]
    F --> G{Gate 2: Human Approval}
    G -- Denied --> E
    G -- Approved --> H[Phase 4: Sync & Document]
    H --> I[Task Success]
```

## 4. Key Business Rules
* **Rule 1: Human-in-the-Loop:** No implementation or commit occurs without explicit user approval of the plan or the final review.
* **Rule 2: Zero Trust:** Unverified code is never merged. All changes must be backed by unit or integration tests.
* **Rule 3: Conceptual Integrity:** All code changes must be reflected in the documentation immediately after implementation.
