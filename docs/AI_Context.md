# AI COGNITIVE ANCHOR (v2.1)
**Stack:** Markdown, TOML, Gemini CLI, Mermaid.js

## 1. Architectural Design
- **Architecture Style:** Agentic Modular Design (AMD).
- **Layer Responsibilities:**
    - **Brain:** [Persona/Identity] Defines the agent's philosophy and communication style. (ref: `brain/persona.md`)
    - **Commands:** [Entry Points] TOML-based triggers for tasks, using Gemini CLI's context-loading. (ref: `commands/*.toml`)
    - **Skills:** [Logic/Protocols] Detailed procedures the agent follows (e.g., PLAN, IMPLEMENT). (ref: `skills/*.md`)
    - **Knowledge:** [Data/Context] Static domain-specific information (e.g., GDPR, SOC2). (ref: `knowledge/*.md`)
    - **Templates:** [Output Formats] Standardized Markdown structures for plans, reports, and context. (ref: `templates/*.md`)
- **Data Flow:** User Command -> TOML Prompt -> Context Injection (`!{cat ...}`) -> Protocol Execution -> Output Generation.

## 2. Dependency Management
- **Handling Mechanism:** File-based context injection via the Gemini CLI's shell execution syntax.
- **Lifecycle Management:** Transient. Context is re-loaded on every command trigger.
- **Third-Party Boundary:** No external libraries are used within the agent definitions themselves; the agents interact with the OS and filesystem via the Gemini CLI.

## 3. Code Design & Patterns
- **Patterns Used:** Command Pattern (TOML commands), Protocol/Strategy Pattern (Skills), Template Method (Markdown templates).
- **Usage Context:** Commands trigger specific protocols (PLAN, IMPLEMENT) to ensure consistent behavior across tasks.

## 4. Conventions & Patterns
- **Naming:** 
    - Commands: `[agent]:[action].toml` (e.g., `architect:create`). Filenames use the format `commands/[agent]/[action].toml`.
    - Skills/Persona: `snake_case.md` or `kebab-case.md` (e.g., `doc_maintainer.md`).
    - Folders: Pluralized lowercase (e.g., `skills/`, `commands/`).
- **Logging:** Protocol steps (0-7) must be explicitly announced during execution.
- **Exceptions:** Zero Trust policy. "HALT" or "STOP" gates on failure or for human approval.

## 5. Critical Paths & Constraints
- **Critical Path:** Command -> Persona -> Protocol -> Implementation.
- **Constraint:** "Infrastructure (Gemini CLI) must be used to load all context; no manual file reads outside the protocol."
- **MCP Usage:** If relevant Model Context Protocol (MCP) servers are available (e.g., Stitch, Context7, Playwright), agents MUST prioritize their tools for deep analysis and automation.

## 6. Documentation Standards
- **Path:** All technical and business documentation resides in the root `/docs` folder.
- **Naming:** Files use UPPER_SNAKE_CASE for sub-docs, but standard Markdown naming for root files.
