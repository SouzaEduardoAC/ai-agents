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
    - `/n8n:brainstorm`: Deep-dive research into APIs, auth, and data structures to generate `[WORKFLOW]_DISCOVERY.md`.
    - `/n8n:plan`: Research and generate a validated `[WORKFLOW]_DESIGN_PLAN.md` based on discovery.

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

## Usage (The n8n Lifecycle)

The agent operates in three distinct phases to ensure reliability and architectural integrity:

### Step 1: `/n8n:brainstorm` (Deep Brainstorm & Discovery)
Before any building, the agent validates your request, researches APIs, identifies edge cases, and checks for "garbage" inputs.
- **Goal:** Validate feasibility and research technical requirements.
- **Output:** `[WORKFLOW]_DISCOVERY.md`
```text
/n8n:brainstorm "Sync HubSpot CRM contacts with a Google Sheets spreadsheet."
```

### Step 2: `/n8n:plan` (Architecture Planning)
The agent takes the discovery report and builds a technical blueprint, mapping exactly which nodes and logic are needed.
- **Goal:** Create a detailed design plan.
- **Output:** `[WORKFLOW]_DESIGN_PLAN.md`
```text
/n8n:plan "HubSpot Sync"
```

### Step 3: `/n8n:create` (Implementation & JSON)
The agent transforms the approved design plan into the actual n8n workflow JSON structure.
- **Goal:** Generate a ready-to-import JSON workflow.
- **Output:** `[WORKFLOW]_IMPLEMENTATION.json`
```text
/n8n:create "HubSpot Sync"
```
*Note: You can then import this JSON directly into your n8n platform.*

## Directory Structure

```text
n8n/
├── brain/          # Persona and identity definitions
├── commands/       # Slash command configurations (.toml)
├── knowledge/      # Technical standards and logic bases
├── skills/         # Specialized engineering protocols
└── templates/      # Plan and report templates
```
