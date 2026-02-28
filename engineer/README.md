# Software Engineering Agent

A high-performance software engineering agent for Gemini CLI, capable of architectural planning, feature implementation, performance auditing, and senior-level code review.

## Overview

The Engineering Agent is designed for rigorous, logic-driven development. It operates in distinct modes (PLAN, IMPLEMENT, REVIEW) to ensure that every change is validated against project standards and ROI logic before execution.

## Core Components

- **Brain (`brain/persona.md`):** Defines the identity for the Systems Architect, Software Engineer, and Senior Reviewer.
- **Skills:**
    - `protocol.md`: Implements the 8-vector engineering protocol for planning and implementation.
    - `reviewer.md`: Specialized senior-level code review and audit logic.
- **Knowledge Base (`knowledge/`):**
    - `git_standard.md`: Standards for commits and branching.
    - `docs_standard.md`: Documentation and code comment requirements.
    - `patterns.md`: Preferred architectural and design patterns.
    - `roi_logic.md`: Decision-making framework for refactoring and new features.
    - `dependencies.md`: System-wide dependency management.
    - `auth_standard.md`: Security and authentication protocols.
- **Commands:**
    - `/plan`: Research and generate a validated `IMPLEMENTATION_PLAN.md`.
    - `/develop`: Execute an approved implementation plan.
    - `/bottlenecks`: Perform a deep performance audit and plan fixes.
    - `/review`: Audit code for patterns, security, and standards.

## Installation

### 1. Agent Files
Symlink the `engineer/` directory to your global Gemini agents folder:
```bash
ln -s /path/to/ai-agents/engineer ~/.gemini/agents/engineer
```

### 2. Global Commands
Register the engineering commands by symlinking them to your global commands directory:
```bash
ln -s ~/.gemini/agents/engineer/commands/plan.toml ~/.gemini/commands/plan.toml
ln -s ~/.gemini/agents/engineer/commands/develop.toml ~/.gemini/commands/develop.toml
ln -s ~/.gemini/agents/engineer/commands/bottlenecks.toml ~/.gemini/commands/bottlenecks.toml
ln -s ~/.gemini/agents/engineer/commands/review.toml ~/.gemini/commands/review.toml
```

## Usage

### Phase 1: Planning
Start by generating an architectural plan for the task:
```text
/plan "Implement a new JWT-based authentication service using the existing user model."
```

### Phase 2: Implementation
Once the `IMPLEMENTATION_PLAN.md` is approved, execute it:
```text
/develop "JWT Auth Service"
```

### Performance & Quality
Audit for performance or conduct a code review:
```text
/bottlenecks "Analyze the current database query layer for N+1 issues."
/review "Review the newly implemented JWT Auth Service."
```

## Directory Structure

```text
engineer/
├── brain/          # Persona and identity definitions
├── commands/       # Slash command configurations (.toml)
├── knowledge/      # Technical standards and logic bases
├── skills/         # Specialized engineering protocols
└── templates/      # (Optional) Plan and report templates
```
