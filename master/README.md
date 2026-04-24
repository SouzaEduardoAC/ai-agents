# Master Orchestrator Agent (Project Manager)

The Master Orchestrator is the **Chief Operating Officer** of the framework. It manages the specialized agents to ensure a high-fidelity delivery across **all four supported environments**.

## Universal Integration
The Master is compatible with:
1. **Gemini CLI:** Use `/master:run "Goal"`.
2. **Claude Code:** Use the MCP tool `call_agent_command(agent="master", command="run", args="Goal")`.
3. **AntiGravity:** Select the "Master" persona from the Manager View.
4. **Codex:** Use `agent-hub link master .cursorrules`.

## The Master Protocol
When initialized, the Master agent follows this 3-step loop:
1.  **Requirement Capture:** Calls the `brainstormer` to finalize the PRD.
2.  **Technical Design:** Calls the `architect` to finalize the Implementation Plan.
3.  **Production:** Calls the appropriate `developer` (Backend/Frontend/Mobile) to execute the code.

## Why use the Master?
Using the Master ensures that the AI never forgets to ask for approval gates and always uses the correct technical standards for the detected stack, regardless of whether you are in your IDE or your CLI.
