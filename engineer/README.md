# Software Engineering Agent

A high-performance software engineering agent for Gemini CLI, capable of architectural planning, feature implementation, performance auditing, security audits, and senior-level code review.

## Overview

The Engineering Agent is designed for rigorous, logic-driven development. It operates in distinct modes (DISCOVERY, PLAN, IMPLEMENT, REVIEW, MASTER-FLOW) to ensure that every change is validated against project standards and ROI logic before execution.

## Core Components

- **Brain (`brain/persona.md`):** Defines the identity for the Systems Architect, Software Engineer, and Senior Reviewer.
- **Skills:**
    - `protocol.md`: Engineering Execution Protocol covering DISCOVERY, PLAN, IMPLEMENT, and MASTER-FLOW modes.
    - `reviewer.md`: Specialized senior-level code review and audit logic.
    - `doc_maintainer.md`: High-fidelity documentation sync with AST-level precision.
    - `security_auditor.md`: 7-step security audit covering OWASP Top 10, dependencies, and compliance.
- **Knowledge Base (`knowledge/`):**
    - `git_standard.md`: Standards for commits and branching.
    - `docs_standard.md`: Documentation and code comment requirements.
    - `patterns.md`: Preferred architectural and design patterns.
    - `roi_logic.md`: Decision-making framework for refactoring and new features.
    - `dependencies.md`: System-wide dependency management.
    - `auth_standard.md`: Security and authentication protocols.
    - `bottlenecks.md`: 8-vector Performance Audit checklist.
    - `security_standards.md`: OWASP Top 10, severity levels, and compliance references.
- **Commands:**
    - `/investigate`: Perform a deep-dive research into a request and generate a `[FEATURE]_DISCOVERY.md`.
    - `/plan`: Research and generate a validated `[FEATURE]_IMPLEMENTATION_PLAN.md` based on discovery.
    - `/develop`: Execute an approved implementation plan.
    - `/bottlenecks`: Perform a deep performance audit and plan fixes.
    - `/review`: Audit code for patterns, security, and standards.
    - `/document`: Sync codebase logic with high-precision documentation.
    - `/master-flow`: Execute a complete, end-to-end engineering lifecycle with mandatory discovery and approval gates.
    - `/security-audit`: Perform a comprehensive security audit with a prioritized findings report.

## Installation

### 1. Agent Files
Symlink the `engineer/` directory to your global Gemini agents folder:
```bash
ln -s /path/to/ai-agents/engineer ~/.gemini/agents/engineer
```

### 2. Global Commands
Register the engineering commands by symlinking them to your global commands directory:
```bash
ln -s ~/.gemini/agents/engineer/commands/investigate.toml ~/.gemini/commands/investigate.toml
ln -s ~/.gemini/agents/engineer/commands/plan.toml ~/.gemini/commands/plan.toml
ln -s ~/.gemini/agents/engineer/commands/develop.toml ~/.gemini/commands/develop.toml
ln -s ~/.gemini/agents/engineer/commands/bottlenecks.toml ~/.gemini/commands/bottlenecks.toml
ln -s ~/.gemini/agents/engineer/commands/review.toml ~/.gemini/commands/review.toml
ln -s ~/.gemini/agents/engineer/commands/document.toml ~/.gemini/commands/document.toml
ln -s ~/.gemini/agents/engineer/commands/master-flow.toml ~/.gemini/commands/master-flow.toml
ln -s ~/.gemini/agents/engineer/commands/security-audit.toml ~/.gemini/commands/security-audit.toml
```

## Usage

### Phase 0: Discovery (Deep Dive)
Before planning, perform a deep dive into the request to map dependencies and clarify requirements. The agent writes to `[FEATURE]_DISCOVERY.md`:
```text
/investigate "Refactor the authentication module to support OAuth2 providers."
```

### Phase 1: Planning
Start by generating an architectural plan for the task. The agent writes the plan to `[FEATURE]_IMPLEMENTATION_PLAN.md` before requesting approval:
```text
/plan "OAuth2 Refactor"
```

### Phase 2: Implementation
Once the plan file is approved, execute it. The agent will check for private feed dependencies before restoring packages and ask for the config file if needed:
```text
/develop "OAuth2 Refactor"
```
After committing, the agent updates the plan file with what was implemented and what remains (`[DONE]` or `[PARTIAL]`).

### Performance & Quality
Audit for performance, conduct a code review, sync documentation, or run a security audit:
```text
/bottlenecks "Analyze the current database query layer for N+1 issues."
/review "Review the newly implemented OAuth2 Refactor."
/document "Synchronize the current authentication module with the technical specs."
/security-audit "Audit the authentication module for vulnerabilities."
```

### Full Lifecycle (Master Flow)
Execute a complete task with mandatory discovery, planning, implementation, and review gates:
```text
/master-flow "Add a rate-limiter middleware to all API endpoints."
```


## Directory Structure

```text
engineer/
├── brain/          # Persona and identity definitions
├── commands/       # Slash command configurations (.toml)
├── knowledge/      # Technical standards and logic bases
├── skills/         # Specialized engineering protocols
└── templates/      # Plan and report templates
```
