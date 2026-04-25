# Knowledge: Documentation Standards
Maintain conceptual integrity across all layers. Use **Mermaid.js** for all diagrams.

## Required Artifacts
- **AI Context (GEMINI.md/CLAUDE.md):** Project-specific technical "BIOS."
- **Technical Docs:** Architectural decisions (ADRs), API specs, and **Agent Capability Maps**.
- **Business Docs:** User impact and high-level logic flow.
- **Agent Documentation (Depth-First Mandate):** Every agent persona MUST have a dedicated, meticulous documentation node containing:
    - **Identity & Philosophy:** Deep-dive into core traits and operating principles.
    - **Functions & Commands:** Exhaustive list of TOML/MCP tools with internal logic descriptions.
    - **Guardrails & Boundaries:** Precise rules of engagement and "Halt" conditions.
    - **Technical Expertise:** Stack-specific deep-dives (ref: `index.js -> getDynamicKnowledge`).
- **Standard of Precision:** 
    - No superficial stubs.
    - Every claim MUST include an AST citation `(ref: symbol)`.
    - Mermaid diagrams for ANY logic exceeding the "Triviality Threshold" (Distributed flows, recursive logic).