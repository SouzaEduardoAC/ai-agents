# Agentic AI Framework (Universal Agent Hub)
**Standardized orchestration for specialized AI Agents across Gemini, Claude, AntiGravity, and Codex.**

## Overview
This repository is a **Universal Agent Hub**. It centralizes personas, technical knowledge, and engineering protocols, serving them dynamically to your preferred AI assistant.

## Supported Environments
| LLM / Tool | Access Method | Bootstrap Effect |
| :--- | :--- | :--- |
| **Gemini CLI** | Slash Commands (All Agents) | Installs ALL agent commands (Master, Architect, Backend, etc.) locally. |
| **Claude Code** | MCP Tools (All Agents) | Provides dynamic prompt resolution for all agent commands via MCP. |
| **AntiGravity** | Manager View (All Agents) | Installs ALL personas into the AG Brain for parallel orchestration. |
| **Codex / IDE** | Symlinks (Individual) | Links local project config to your chosen agent persona. |

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
For IDE-specific instructions (like `.cursorrules` or `.github/copilot-instructions.md`), link your desired agent:
```bash
npx github:SouzaEduardoAC/ai-agents link [agent-name] [target-file]
```

### 🔄 Updating (Pulling Changes)
Whenever you push new agent logic, standards, or commands to your GitHub repository, update your other machines as follows:

**1. Update Slash Commands & Personas:**
Run the bootstrap command again to overwrite local Gemini/AntiGravity files:
```bash
npx github:SouzaEduardoAC/ai-agents bootstrap
```

**2. Update MCP Server (Claude/Gemini):**
`npx` caches code aggressively. To force an update of the Hub server logic:
```bash
# Force npx to fetch the latest version from GitHub
npx --prefer-online github:SouzaEduardoAC/ai-agents serve
```
*Note: If the AI still uses old logic, run `npm cache clean --force` on the machine.*

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

## Testing & Quality
The framework enforces a **"Test-First"** mindset across all technical agents:
- **Business Logic Coverage:** Mandatory unit tests for all domain rules.
- **Regression Protection:** Bug fixes must include a failing test case reproduction.
- **Unified Standards:** Centralized quality gates in `common/knowledge/testing_standard.md`.
- **100% Pass Rate:** Implementation is not complete until all tests pass.

---

## Core Agents
- **[Master](./master/)**: Chief Orchestrator.
- **[Brainstormer](./brainstormer/)**: Gateway Agent (PRD generation).
- **[Architect](./architect/)**: Systems design and review.
- **[Backend](./backend/)**, **[Frontend](./frontend/)**, **[Mobile](./mobile/)**: Implementation specialists.
- **[Compliance](./compliance/)**: Regulatory audits.
- **[n8n Specialist](./n8n/)**: Automation workflow architect.
