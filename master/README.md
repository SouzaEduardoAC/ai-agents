# Master Orchestrator Agent (Project Manager)

The Master Orchestrator is the **Chief Operating Officer** of the framework. It doesn't write code or draft PRDs itself; instead, it manages the specialized agents to ensure a high-fidelity delivery.

## Overview
The Master agent is designed to solve "Context Dilution" by keeping the AI focused on the **Process**. It pulls in sub-agent personas (Brainstormer, Architect, etc.) only when their specific phase is active.

## Core Components
- **Brain (`brain/persona.md`):** Defines the identity as a Senior Project Manager and Pipeline Orchestrator.
- **Commands:**
    - `/master:run`: The primary entry point for full-lifecycle tasks.

## The Master Protocol
When initialized, the Master agent follows this 3-step loop:
1.  **Requirement Capture:** Calls the `brainstormer` to finalize the PRD.
2.  **Technical Design:** Calls the `architect` to finalize the Implementation Plan.
3.  **Production:** Calls the appropriate `developer` (Backend/Frontend/Mobile) to execute the code.

## Usage
### 1. Full Pipeline Execution
Start a complex project from scratch:
```text
/master "Implement a real-time notification system using WebSockets"
```

## Why use the Master?
Using the Master ensures that the AI never forgets to ask for approval gates and always uses the correct technical standards for the detected stack.
