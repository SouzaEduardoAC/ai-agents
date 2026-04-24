# Agentic AI Framework (Universal Agent Hub)
**Standardized orchestration for specialized AI Agents.**

## Overview
This repository defines a framework of autonomous AI Agents designed to collaborate on complex tasks using a standardized, protocol-driven pipeline. It functions as a **Universal Agent Hub**, serving specialized personas to **Gemini CLI, Claude Code, AntiGravity, and Codex**.

## The Handoff Pipeline
We follow a strict "Sequential Persona Handoff" to ensure maximum clarity and zero context dilution:

1.  **[Master Orchestrator](./master/) (Project Manager):** The entry point for all major tasks. Orchestrates the handoffs between sub-agents.
2.  **[Brainstormer](./brainstormer/) (Product Owner):** Transforms vague ideas into a validated **PRD (Product Requirements Document)**.
3.  **[Architect](./architect/) (Systems Lead):** Consumes the PRD and performs technical analysis to generate an **Implementation Plan**.
4.  **Specific Developer:** (Backend, Frontend, or Mobile) executes the plan based on the detected tech stack.

## Universal Access (agent-hub)
The framework is exposed via the `agent-hub` tool. You can run it using a local path or directly from GitHub.

### 1. Claude Code & AntiGravity (MCP)
Register the agents as a Model Context Protocol server.

**Option A: Local Path (Recommended for Development)**
```bash
claude mcp add agent-hub -- npx /path/to/ai-agents serve
```

**Option B: Direct from GitHub (Recommended for Work Machines)**
```bash
claude mcp add agent-hub -- npx github:SouzaEduardoAC/ai-agents serve
```

### 2. Codex / Cursor / Copilot (Linker)
Inject a persona into a local project configuration:
```bash
# Using GitHub version
npx github:SouzaEduardoAC/ai-agents link architect .cursorrules
```

### 3. Gemini CLI (MCP + Slash Commands)
Register the hub as an MCP server and run the bootstrap to install the slash commands:

```bash
# Register the MCP tools
gemini mcp add agent-hub -- npx github:SouzaEduardoAC/ai-agents serve

# One-time setup to install the /master and /architect commands
npx github:SouzaEduardoAC/ai-agents bootstrap
```

Then use the namespaced slash commands directly:
```text
/master "Build a new feature for X"
```

## Core Agents
- **[Master](./master/)**: **Chief Orchestrator.** Manages the full PRD -> Plan -> Code lifecycle.
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
