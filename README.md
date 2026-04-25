# Agentic AI Framework (Universal Agent Hub) v1.1.0
**Standardized orchestration for specialized AI Agents across Gemini, Claude, AntiGravity, and Codex.**

## Overview
This repository is a **Universal Agent Hub**. It centralizes personas, technical knowledge, and engineering protocols, serving them dynamically to your preferred AI assistant via the Model Context Protocol (MCP).

## Key Features
- **Sequential Handoff:** Clean separation of concerns (Brainstormer -> Architect -> Developer).
- **Dynamic Stack Detection:** Automatically injects knowledge for .NET, Java, Go, React, Angular, Vue, TS, JS, and Flutter.
- **MCP Native:** Deep integration with Claude Code, Gemini CLI, and AntiGravity.
- **One-Command Setup:** Universal bootstrap for all environments.
- **Probe Resolution:** `!{cat ...}` support for real-time file injection in prompts.

---

## Installation & Setup

### 1. The Hub Server (MCP)
Required for **Claude Code** and **Gemini CLI**.
```bash
# In Claude Code or Gemini CLI
mcp add agent-hub -- npx github:SouzaEduardoAC/ai-agents serve
```

### 2. The Universal Bootstrap (One-Time Setup)
Run this to install **all** Gemini commands and **all** AntiGravity personas automatically.
```bash
npx github:SouzaEduardoAC/ai-agents bootstrap
```

### 3. Codex / Cursor / IDE Setup
For IDE-specific instructions (like `.cursorrules`), link your desired agent:
```bash
npx github:SouzaEduardoAC/ai-agents link [agent-name] [target-file]
```

---

## Usage Examples

### Claude Code
```text
"Use the agent-hub to call the 'master' 'run' command for task: Build a task manager"
```

### Gemini CLI
```text
/master "Implement OAuth2 login for our Express API"
/architect:auditor security "Audit the auth module"
```

---

## Documentation Suite
- **[AI Context](./docs/AI_Context.md)**: Technical "BIOS" and architecture.
- **[Business Flow](./docs/BUSINESS_FLOW.md)**: Use cases and global rules.
- **[Technical Specs](./docs/TECHNICAL_SPECS.md)**: Entry points and internal logic.
- **[Use Cases](./docs/use_cases/)**: Detailed process flows.

---

## Core Agents
- **[Master](./master/)**: Chief Orchestrator.
- **[Brainstormer](./brainstormer/)**: Gateway Agent (PRD generation).
- **[Architect](./architect/)**: Systems design and review.
- **[Backend](./backend/)**, **[Frontend](./frontend/)**, **[Mobile](./mobile/)**: Implementation specialists.
- **[Compliance](./compliance/)**: Regulatory audits.
- **[n8n Specialist](./n8n/)**: Automation workflow architect.
- **[Researcher](./researcher/)**: Information synthesis and browsing.
