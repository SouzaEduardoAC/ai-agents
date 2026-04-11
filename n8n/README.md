# n8n Specialist Agent

A specialized agent for n8n workflow automation, node development, and system integration.

## Overview

The n8n Specialist Agent is designed to architect, implement, and optimize complex automation workflows. It operates in distinct modes (DISCOVERY, PLAN, IMPLEMENT) to ensure that every automation is validated against best practices and user requirements.

## Core Components

- **Brain (`brain/persona.md`):** Defines the identity of the n8n Automation Architect and Workflow Engineer.
- **Skills:**
    - `workflow_architect.md`: Protocol for designing, implementing, and debugging n8n workflows covering DISCOVERY and PLAN modes.
- **Knowledge Base (`knowledge/`):**
    - `n8n_core.md`: Reference to n8n core concepts and the official GitHub repository.
    - `best_practices.md`: Industry standards for n8n workflow design and error handling.
- **Commands:**
    - `/n8n:investigate`: Deep-dive research into APIs, auth, and data structures to generate `[WORKFLOW]_DISCOVERY.md`.
    - `/n8n:workflow`: Research and generate a validated `[WORKFLOW]_DESIGN_PLAN.md` based on discovery.

## Installation

### 1. Agent Files
Symlink the `n8n/` directory to your global Gemini agents folder:
```bash
ln -s /path/to/ai-agents/n8n ~/.gemini/agents/n8n
```

### 2. Global Commands
Register the n8n commands by symlinking the namespaced directory to your global commands:
```bash
ln -s ~/.gemini/agents/n8n/commands/n8n ~/.gemini/commands/n8n
```

## Usage

### Phase 0: Discovery (Deep Dive)
Before planning, perform a deep dive into the integration requirements. The agent writes to `[WORKFLOW]_DISCOVERY.md`:
```text
/n8n:investigate "Sync HubSpot CRM contacts with a Google Sheets spreadsheet."
```

### Phase 1: Planning
Start by generating an architectural design plan. The agent writes the plan to `[WORKFLOW]_DESIGN_PLAN.md` before requesting approval:
```text
/n8n:workflow "HubSpot Sync"
```

## Directory Structure

```text
n8n/
├── brain/          # Persona and identity definitions
├── commands/       # Slash command configurations (.toml)
├── knowledge/      # Technical standards and logic bases
├── skills/         # Specialized engineering protocols
└── templates/      # Plan and report templates
```
