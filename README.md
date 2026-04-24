# Agentic AI Framework (Universal Agent Hub)
**Standardized orchestration for specialized AI Agents.**

## Overview
This repository defines a framework of autonomous AI Agents designed to collaborate on complex tasks using a standardized, protocol-driven pipeline. It functions as a **Universal Agent Hub**, serving specialized personas to **Gemini CLI, Claude Code, AntiGravity, and Codex**.

## The Handoff Pipeline
We follow a strict "Sequential Persona Handoff" to ensure maximum clarity and zero context dilution:

1.  **[Brainstormer](./brainstormer/) (Product Owner):** Transforms vague ideas into a validated **PRD (Product Requirements Document)**.
2.  **[Architect](./architect/) (Systems Lead):** Consumes the PRD and performs technical analysis to generate an **Implementation Plan**.
3.  **Specific Developer:** (Backend, Frontend, or Mobile) executes the plan based on the detected tech stack.

## Universal Access (agent-hub)
The framework is exposed via the `agent-hub` tool, allowing you to use these agents across any environment using `npx`.

### 1. Claude Code & AntiGravity (MCP)
Register the agents as a Model Context Protocol server:
```bash
# In Claude Code
claude mcp add agent-hub -- npx /path/to/ai-agents serve
```

### 2. Codex / Cursor / Copilot (Linker)
Inject a persona into a local project configuration:
```bash
# Link the Architect persona to a local .cursorrules file
npx /path/to/ai-agents link architect .cursorrules
```

### 3. Gemini CLI (Direct)
Use the namespaced slash commands directly:
```text
/brainstormer:discovery "Add a rate-limiter to the API"
/architect:create "Implement the rate-limiter based on the PRD"
```

## Core Agents
- **[Brainstormer](./brainstormer/)**: **Gateway Agent.** Elicitation, Research, and PRD generation.
- **[Architect](./architect/)**: Systems design, technical analysis, and senior review.
- **[Backend](./backend/)**: Server-side implementation (Node.js, Python, Go).
- **[Frontend](./frontend/)**: UI/UX specialist (Angular, React, Vue).
- **[Mobile](./mobile/)**: Cross-platform specialist (Flutter/Dart).
- **[Compliance](./compliance/)**: Regulatory audits (GDPR, HIPAA, SOC2).
- **[Researcher](./researcher/)**: General info synthesis.
- **[n8n Specialist](./n8n/)**: Complex workflow automation.

## Documentation
- [Business Flow](./docs/BUSINESS_FLOW.md) – Value proposition and use cases.
- [Technical Specifications](./docs/TECHNICAL_SPECS.md) – Entry points, logic flows, and architecture.
- [AI Context](./docs/AI_Context.md) – Architectural design, patterns, and conventions.
