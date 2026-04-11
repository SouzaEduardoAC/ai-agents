# Business Flow: Agentic AI Framework
**Status:** [SYNC] | **Last AST Sync:** 2026-04-11

## 1. Value Proposition
A standardized framework for building and orchestrating specialized, autonomous AI Agents to solve complex engineering, research, and compliance tasks with high fidelity and human-in-the-loop safety.

## 2. Business Use Cases
*List of automated business processes, each with its own detailed documentation and visual logic.*

* [**Specialized Engineering Lifecycle**](./use_cases/software_engineering_lifecycle.md): Move from business requirements to validated, peer-reviewed implementations across **Architectural, Backend, Frontend, and Mobile** domains.
* [**Regulatory & Compliance Audit**](./use_cases/regulatory_compliance_audit.md): Audit codebase and processes against GDPR, HIPAA, or SOC2 standards.
* [**Research & Information Synthesis**](./use_cases/research_information_synthesis.md): Gather data and technical insights to generate comprehensive research reports with approved scope.
* [**Security Audit**](./use_cases/security_audit.md): Scan code, dependencies, and configuration for vulnerabilities and deliver a prioritized remediation roadmap.
* [**n8n Workflow Automation**](./use_cases/n8n_workflow_automation.md): Architect, implement, and optimize complex automation workflows using n8n with mandatory API research.

## 3. Global Business Rules
*General rules that apply across multiple use cases.*

* **Rule 0: Discovery-First Persistence:** Before any planning or implementation begins, agents must perform a deep-dive investigation and write their findings to a `[FEATURE]_DISCOVERY.md` artifact.
* **Rule 1: Human-in-the-Loop:** No implementation or commit occurs without explicit user approval of the discovery artifact, the plan, or the final review.
* **Rule 2: Zero Trust:** Unverified code is never merged. All changes must be backed by unit or integration tests.
* **Rule 3: Conceptual Integrity:** All code changes must be reflected in the documentation immediately after implementation.
* **Rule 4: Plan-First Persistence:** Implementation plans are written to `[FEATURE]_IMPLEMENTATION_PLAN.md` before approval is requested.
* **Rule 5: Private Feed Safety:** Execution halts if private package registries are detected until the user provides the feed configuration.
* **Rule 6: Plan Reconciliation:** After every commit, the plan file is updated with implemented and pending items.
