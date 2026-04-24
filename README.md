# Agentic AI Framework (Universal Agent Hub)
**Standardized orchestration for specialized AI Agents across Gemini, Claude, AntiGravity, and Codex.**

## Overview
This repository is a **Universal Agent Hub**. It centralizes personas, technical knowledge, and engineering protocols, serving them dynamically to your preferred AI assistant.

## Supported Environments
| LLM / Tool | Access Method | Bootstrap Effect |
| :--- | :--- | :--- |
| **Gemini CLI** | Slash Commands (`/master`, `/architect`) | Installs ALL `.toml` commands locally. |
| **Claude Code** | MCP Tools (`call_agent_command`) | Provides dynamic prompt resolution via MCP. |
| **AntiGravity** | Manager View Personas | Installs `.md` personas into the AG Brain. |
| **Codex / IDE** | Symlinks (`.cursorrules`, `.github/`) | Links local config to central persona files. |

---

## Installation & Setup

### 1. The Hub Server (MCP)
Required for **Claude Code** and **Gemini CLI** to access the full power of the agents.
```bash
# In Claude Code or Gemini CLI
mcp add agent-hub -- npx github:SouzaEduardoAC/ai-agents serve
```

### 2. The Universal Bootstrap (One-Time Setup)
Run this command on any new machine to install Gemini commands and AntiGravity personas automatically.
```bash
npx github:SouzaEduardoAC/ai-agents bootstrap
```

---

## The Handoff Pipeline
We follow a "Sequential Persona Handoff" to ensure zero context dilution:

1.  **[Master Orchestrator](./master/) (Project Manager):** The entry point. Orchestrates the full lifecycle.
2.  **[Brainstormer](./brainstormer/) (Product Owner):** Transforms ideas into a validated **PRD**.
3.  **[Architect](./architect/) (Systems Lead):** Transforms PRD into an **Implementation Plan**.
4.  **Specialized Developer:** (Backend, Frontend, or Mobile) executes the code.

---

## Usage Examples

### Gemini CLI
```text
/master "Implement OAuth2 login for our Express API"
/architect:auditor security "Audit the auth module"
```

### Claude Code
```text
"Use the agent-hub to call the 'master' 'run' command for task: Build a task manager"
"Fetch the 'architect' persona and review this file"
```

### AntiGravity
Open the **Manager View**; all agents (Brainstormer, Architect, etc.) are now available as native personas.

### Codex / Cursor / Copilot
```bash
npx github:SouzaEduardoAC/ai-agents link architect .cursorrules
```

---

## Core Agents
- **[Master](./master/)**: Chief Orchestrator.
- **[Brainstormer](./brainstormer/)**: Gateway Agent (PRD generation).
- **[Architect](./architect/)**: Systems design and review.
- **[Backend](./backend/)**, **[Frontend](./frontend/)**, **[Mobile](./mobile/)**: Implementation specialists.
- **[Compliance](./compliance/)**: Regulatory audits.
- **[n8n Specialist](./n8n/)**: Automation workflow architect.
