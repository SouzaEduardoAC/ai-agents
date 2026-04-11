# Use Case: n8n Workflow Automation
**Status:** [ACTIVE] | **Last AST Sync:** 2026-04-11

## 1. Description
An autonomous workflow for designing, implementing, and optimizing complex automation workflows using n8n. It ensures that every automation is architected for scalability, reliability, and maintainability through mandatory deep-dive research.

## 2. Details
- **Primary Role:** n8n Automation Architect / Workflow Engineer
- **Success Criteria:** Validated discovery artifact, comprehensive design plan, successful manual or automated test runs, and documented workflow logic.

## 3. Visual Logic (Mermaid)
```mermaid
graph TD
    A[Role: User] --> B[Trigger: Command /n8n:workflow]
    B --> C[Phase 0: Deep Dive Investigation]
    C --> C1[Write WORKFLOW_DISCOVERY.md]
    C1 --> C2{Gate 0: Human Approval of Discovery}
    C2 -- Denied --> C
    C2 -- Approved --> D[Phase 1: Architecture Design]
    D --> E[Write WORKFLOW_DESIGN_PLAN.md]
    E --> F{Gate 1: Human Approval of Design Plan}
    F -- Denied --> D
    F -- Approved --> G[Phase 2: Node Configuration & Implementation]
    G --> H[Phase 3: Testing & Optimization]
    H --> I{Gate 2: Human Approval of Test Results}
    I -- Denied --> G
    I -- Approved --> J[Workflow Deployment & Backup]
    J --> K[Task Success]
```

## 4. Key Business Rules
* **Rule 1: Human-in-the-Loop:** No workflow deployment occurs without explicit user approval of the discovery artifact, the design plan, and the test results.
* **Rule 2: Discovery-First Persistence:** Findings and API research are written to `[WORKFLOW]_DISCOVERY.md` before planning begins.
* **Rule 3: Modularity:** Workflows must be designed using modular patterns and sub-workflows where appropriate.
* **Rule 4: Error Handling by Default:** Every workflow must include a global error handling strategy and node-level retries for external integrations.
* **Rule 5: Plan-First Persistence:** The design plan is written to `[WORKFLOW]_DESIGN_PLAN.md` before requesting approval.
* **Rule 6: Security First:** Credentials must never be hardcoded; use n8n's built-in credential management system.
