# Skill: Agent Auditing & Compliance Protocol (v2026)

This protocol defines the **zero-trust structural and alignment check** for evaluating existing specialized agents inside the Hub.

---

## 1. Structural Auditing Checklist (The 6-File Rules)

Every agent must be scanned for directory and file completeness. Score each check as a binary (1/0) value:

*   **[Check 1] README Completeness:** Does `[agent_name]/README.md` exist? Does it describe the command library and show the folder layout?
*   **[Check 2] Core Persona:** Does `[agent_name]/brain/persona.md` exist? Does it carry clear "Core Identity", "Extended Team", and "Operating Principles" sections?
*   **[Check 3] Command Scaffolding:** Does `[agent_name]/commands/[agent_name]/` contain at least one TOML file?
*   **[Check 4] Domain Knowledge:** Does `[agent_name]/knowledge/` contain at least one descriptive `.md` file?
*   **[Check 5] Operational Skills:** Does `[agent_name]/skills/` contain at least one step-by-step protocol?
*   **[Check 6] Standard Templates:** Does `[agent_name]/templates/` contain at least one template file?

*Structural Integrity Score Calculation:*
$$\text{Structural Score} = \frac{\text{Passed Checks}}{6} \times 100\%$$

---

## 2. Prompt & Integration Alignment Auditing

Audit the agent's prompts and files against these alignment criteria:

1.  **Late-Binding Check:** Do the command TOML files use `!{cat ...}` probes to dynamically load the persona, skills, and knowledge files? (Any hardcoded duplication is a **Medium Severity** finding).
2.  **Path Sanitization:** Are there any hardcoded user paths or environment variables? (e.g. `/home/user/` is a **Critical Severity** finding).
3.  **Registration Check:** Is the agent registered in `AGENTS.md`, `GEMINI.md`, and `CLAUDE.md`? (Any missing anchor is a **High Severity** finding).
4.  **Logseq Symmetry:** Does the outliner page `docs/pages/[Agent].md` exist? Is it registered under `Active Features` in `docs/pages/registry.md`? (Any missing graph link is a **Medium Severity** finding).

---

## 3. Auditing Output Format

Every audit run must generate a structured Markdown audit report matching the following template:

```markdown
# Agent Audit Report: [Agent Name]
**Status:** [PASS / FAIL] | **Structural Score:** [Score]% | **Auditor:** Forge

## 1. Executive Summary
[Brief description of the agent's structural health and major findings].

## 2. Structural Checks (Binary)
- [ ] README Completeness: [1 or 0]
- [ ] Core Persona: [1 or 0]
- [ ] Command Scaffolding: [1 or 0]
- [ ] Domain Knowledge: [1 or 0]
- [ ] Operational Skills: [1 or 0]
- [ ] Standard Templates: [1 or 0]

## 3. Alignment Findings & Gap Analysis
List all findings grouped by severity:

### 🔴 Critical Severity
- **[Finding Name]:** [Description of the blocker, e.g. hardcoded dev paths].
- **Remediation:** [Exact manual or automated fix required].

### 🟡 High Severity
- **[Finding Name]:** [Description, e.g. missing CLAUDE.md anchor].
- **Remediation:** [Exact fix].

### 🔵 Medium / Low Severity
- **[Finding Name]:** [Description, e.g. missing outliner registry entry].
- **Remediation:** [Exact fix].

## 4. Auditor Recommendation
- **Verdict:** [Approve for production / Halt and remediate].
- **Owner Allocation:** [Assigned remediation tasks].
```
