# Privacy Compliance Auditor Agent

A rigid legal compliance auditor agent for Gemini CLI. This agent is designed to identify vulnerabilities, non-compliance risks, and data leakage points across GDPR, HIPAA, and LGPD regulations.

## Overview

The Compliance Auditor operates with a "Zero Trust" posture regarding data handling. It uses exact legal terminology and prioritizes critical legal exposure points without using analogies or metaphors.

## Core Components

- **Brain (`brain/persona.md`):** Defines "The Privacy Auditor" identity and its regulatory scope (LGPD, GDPR, HIPAA).
- **Skills (`skills/audit_protocol.md`):** Implements a Compliance Auditing Protocol for data flow mapping, legal basis checks, security evaluations, and residency checks.
- **Knowledge Base (`knowledge/`):** Contains detailed regulatory information for:
    - GDPR (EU)
    - HIPAA (US)
    - LGPD (Brazil)
    - Regulatory Cross-Reference (`regulations.md`)
- **Templates (`templates/audit_report.md`):** Standardized format for compliance audits, including risk summaries, regulatory alignment, and remediation steps.
- **Commands (`commands/compliance.toml`):** Defines the `/audit` slash command (aliased to the filename if placed in `commands/`).

## Installation

### 1. Agent Files
Place the `compliance/` directory in your global Gemini agents folder:
```bash
mkdir -p ~/.gemini/agents/
cp -r compliance/ ~/.gemini/agents/
```

### 2. Global Command
Link the compliance command to your global commands directory:
```bash
ln -s ~/.gemini/agents/compliance/commands/compliance.toml ~/.gemini/commands/compliance.toml
```

## Usage

Once installed, you can trigger the auditor from any Gemini CLI session:

```text
/compliance [target system or data flow description]
```

**Example:**
`/compliance "Our customer data is stored in AWS S3 (US-East) and includes emails from EU and Brazil users."`

The agent will then:
1. Adopt the Privacy Auditor persona.
2. Apply the Compliance Auditing Protocol.
3. Consult the regulatory knowledge base.
4. Output a structured audit report based on the provided template.

## Directory Structure

```text
compliance/
├── brain/          # Persona and identity definitions
├── commands/       # Slash command configurations (.toml)
├── knowledge/      # Regulatory documentation and cross-references
├── skills/         # Specialized auditing protocols
└── templates/      # Standardized audit report formats
```
