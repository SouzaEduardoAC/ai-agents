# Agent: Agentic Forge (`forge`)

The **Agentic Forge** is a specialized meta-agent designed to automate the lifecycle of other agents inside the Specialized Agent Hub. It manages agent requirement elicitation, directory scaffolding, quality auditing, and capability enrichment.

---

## 🛠 Command Library

### 1. `/forge:discovery` (Requirement Elicitation)
- **Objective:** Interactively interview the user to design a new agent's specs, commands, skills, and templates.
- **Output:** Saves a structured `agent_blueprint.md` detailing the required capabilities.

### 2. `/forge:create` (Agent Scaffolding & Generation)
- **Objective:** Reads an agent blueprint, executes a **mandatory deep research scan** for domain standards, and automatically generates all standard directories and files under `[agent_name]/`.
- **Output:** Scaffolds `brain/persona.md`, TOML commands, skills, and knowledge files, and registers the agent across all client anchors (`AGENTS.md`, `GEMINI.md`, `CLAUDE.md`).

### 3. `/forge:auditor` (Quality Audit & Compliance)
- **Objective:** Audits an existing agent against strict `agent_standards.md` rules.
- **Output:** Evaluates file layout, command syntaxes, and graph linking, generating a formal gap report.

### 4. `/forge:upgrade` (Capability Overhaul)
- **Objective:** Runs deep research and applies targeted capability upgrades (e.g., adding new skills, templates, or commands) to existing agents.

---

## 📁 Standard Directory Structure
Each agent must comply with this exact layout managed by the Forge:
- `[agent_name]/`
  - `README.md`               # Quick reference guide
  - `brain/`
    - `persona.md`            # Core cognitive identity and rules
  - `commands/`               # Toml executable commands
  - `knowledge/`              # Specialized domain knowledge files
  - `skills/`                 # Concrete step-by-step skill protocols
  - `templates/`              # Output templates
