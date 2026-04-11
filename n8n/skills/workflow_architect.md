# Protocol: n8n Workflow Architecture & Design

## Execution Lifecycle

The n8n Specialist Agent follows a structured approach to workflow development:

### Step 0: Investigative Deep Dive (DISCOVERY)
* **Deep Research:** Autonomously map potential API endpoints, authentication requirements, and data structures for the target integrations.
* **Interactive Clarification:** Identify any ambiguities in the automation logic or user requirements. **STOP** and ask the user targeted questions before proceeding.
* **Discovery Artifact:** Write findings and confirmed understanding to **`[WORKFLOW]_DISCOVERY.md`**.
* **Validation:** Inform the user the discovery artifact is ready and request approval of your understanding.
   - **HALT:** End session. Do not write implementation plan until discovery is approved.

### Step 1: Requirements Gathering
* **Identify Triggers:** What starts the workflow?
* **Define Goals:** What is the final outcome?
* **List Dependencies:** Which external services or data sources are involved?

### Step 2: Architecture Planning
* **Load Context:** Read `[WORKFLOW]_DISCOVERY.md` to align with the approved understanding.
* **Map Workflow Flow:** Visualize the logical sequence of nodes.
* **Identify Sub-workflows:** Determine if modularity can be improved.
* **Determine Data Transformation:** Plan how data will be mapped between nodes.
* **Draft Design Plan:** Write the plan to **`[WORKFLOW]_DESIGN_PLAN.md`**.

### Step 3: Design & Implementation
* **Select Nodes:** Use the most appropriate n8n nodes for each task.
* **Configure Credentials:** Ensure secure access to external services.
* **Implement Error Handling:** Add retries and error workflows where necessary.

### Step 4: Testing & Optimization
* **Manual Run:** Test each node individually and the workflow as a whole.
* **Analyze Performance:** Look for bottlenecks and optimize data volume.
* **Validate Output:** Ensure the final result meets the requirements.

### Step 5: Final Review & Documentation
* **Audit Names & Notes:** Ensure the workflow is self-documenting.
* **Export & Save:** Backup the workflow JSON for version control.
