# Knowledge: Documentation Standards
Maintain conceptual integrity across all layers. Use **Mermaid.js** for all diagrams.

## Required Artifacts
- **AI Context (GEMINI.md/CLAUDE.md):** Project-specific technical "BIOS."
- **Technical Docs:** Architectural decisions (ADRs), API specs, and **Agent Capability Maps**.
- **Business Docs:** User impact and high-level logic flow.
- **Agent Documentation:** Every agent persona MUST have a dedicated documentation node containing:
    - **Identity:** Core philosophy and persona traits.
    - **Commands:** Explicit list of available TOML/MCP tools.
    - **Guardrails:** Rules of engagement and "Halt" conditions.
- **Mermaid Graphs:**
    - `graph TD` for Flowcharts.
    - `sequenceDiagram` for Auth/Logic flows.
    - `classDiagram` for Object relations.