# Strategic Researcher Agent

A high-fidelity information filter and strategic analyst agent for Gemini CLI. This agent is designed to provide factual foundations for decision-making by mapping landscapes before taking action.

## Overview

The Researcher agent operates with a clinical, objective, and intellectually honest persona (INTJ-A profile). It avoids analogies and conversational filler, prioritizing raw data and verified facts from primary sources.

## Core Components

- **Brain (`brain/persona.md`):** Defines the "Strategic Researcher" identity, communication style, and operational logic.
- **Skills (`skills/browsing.md`):** Implements a strict Research & Browsing Protocol, including:
    - **Triangulation:** Cross-referencing at least three independent sources.
    - **Temporal Relevance:** Prioritizing data from the last 12-24 months (6 months for fast-moving sectors).
    - **Data Hierarchy:** Prioritizing primary documentation and official statistics.
- **Templates (`templates/report.md`):** Standardized markdown format for research outputs, including executive summaries, verified knowledge bases, and critical analysis.
- **Commands (`commands/research.toml`):** Defines the `/research` slash command.

## Installation

### 1. Agent Files
Place the `researcher/` directory in your global Gemini agents folder:
```bash
mkdir -p ~/.gemini/agents/
cp -r researcher/ ~/.gemini/agents/
```

### 2. Global Command
Link the research command to your global commands directory:
```bash
ln -s ~/.gemini/agents/researcher/commands/research.toml ~/.gemini/commands/research.toml
```

## Usage

Once installed, you can trigger the researcher from any Gemini CLI session:

```text
/research [target subject]
```

**Example:**
`/research "the current state of the Rust-to-WebAssembly ecosystem"`

The agent will then:
1. Adopt the Strategic Researcher persona.
2. Execute the Research & Browsing Protocol.
3. Output a structured report based on the provided template.

## Directory Structure

```text
researcher/
├── brain/          # Persona and identity definitions
├── commands/       # Slash command configurations (.toml)
├── knowledge/      # (Optional) Static reference data
├── skills/         # Specialized protocols and skills
└── templates/      # Standardized output formats
```
