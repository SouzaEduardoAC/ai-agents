# AI COGNITIVE ANCHOR (v3.1)
**Stack:** Node.js (ESM), @modelcontextprotocol/sdk, Gemini CLI, Claude Code, AntiGravity, Codex
**Version:** 1.1.0 (ref: package.json)

## 1. Architectural Design
- **Architecture Style:** Universal Agent Hub (UAH) / AMD v2.1.
- **The Hub (agent-hub):** A central Node.js bridge that serves agents via the Model Context Protocol (MCP) and manages local environment bootstrapping. (ref: bin/agent-hub.js)
- **Layer Responsibilities:**
    - **Master Orchestrator:** [Foreman] Manages the sequential handoff between specialized agents. (ref: `master/`)
    - **Brain:** [Persona/Identity] Defines the agent's philosophy. Served via MCP `get_agent_prompt`. (ref: `brain/persona.md`)
    - **Common Layer:** [Shared Assets] Universal knowledge (Licensing, Git, Auth, Testing) and base skills injected into all technical agents. (ref: `common/`)
    - **Commands:** [Entry Points] Universal MCP tools (`call_agent_command`) and environment-specific triggers (Gemini TOMLs). (ref: index.js)
    - **Skills:** [Logic/Protocols] Specialized procedures (Reviewer, Auditor, Maintainer) tailored for specific stacks. (ref: `common/skills/`)
- **Data Flow:** Universal Trigger -> Agent Hub -> Dynamic Context Mixing (Common + Specific + Stack) -> Protocol Execution -> Artifact Generation.

## 2. Dependency & Context Management
- **Handling Mechanism:** Dynamic MCP injection. The Hub server "mixes" common standards with agent-specific logic at runtime. (ref: index.js -> `get_agent_prompt`)
- **Dynamic Stack Detection:** The Hub automatically detects environment stacks (.NET, Java, Go, React, Angular, Vue, TS, JS, Flutter) to inject specialized knowledge. (ref: index.js -> `getDynamicKnowledge`)
- **Probe Resolution:** Supports internal probes like `!{cat path}` to inject file content directly into prompts. (ref: index.js -> `resolveProbes`)
- **Lifecycle Management:** Decoupled. Personas and skills are served as dynamic resources.
- **Third-Party Boundary:** Enforced via `common/knowledge/licensing.md`.

## 3. Code Design & Patterns
- **Patterns Used:** Command Pattern, Sequential Persona Handoff, Base+Extension (Skills), Resource Mixins (Knowledge).
- **Usage Context:** The **Master agent** ensures that the **Brainstormer** completes the PRD before the **Architect** starts the technical design.

## 4. Conventions & Patterns
- **Naming:** 
    - Namespaced commands: `[agent]:[action]` (e.g., `architect:create`).
    - Artifacts: `[FEATURE]_PRD.md`, `[FEATURE]_TECHNICAL_ANALYSIS.md`, `[FEATURE]_IMPLEMENTATION_PLAN.md`.
- **Handoffs:** Agents must explicitly state "Requirements validated. Handoff to..." upon completing a pipeline gate.
- **Testing:** "Test-First" philosophy. Unverified logic is considered debt. (ref: `common/knowledge/testing_standard.md`)

## 5. Critical Paths & Constraints
- **Critical Path:** PRD (Brainstormer) -> Plan (Architect) -> Implementation (Developer).
- **Constraint:** Agents MUST halt and ask permission for commercial libraries.
- **Universal Access:** Use `npx github:... bootstrap` for new machine initialization.

## 6. Documentation Standards
- **Path:** Root `/docs` folder for strategic docs; project root for tactical artifacts (PRDs, Plans).
- **Live Sync:** Documentation Maintainer skill (ref: `common/skills/doc_maintainer.md`) ensures AST-accurate updates.
- **Logseq Transition:** Documentation is moving towards a Graph-First (Outliner) format in `docs/pages/`. (ref: `common/skills/logseq_knowledge.md`)
