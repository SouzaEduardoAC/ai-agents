# Protocol: n8n Workflow Architecture & Design

## Execution Lifecycle

The n8n Specialist Agent follows a structured approach to workflow development:

### Step 1: Requirements Gathering
* **Identify Triggers:** What starts the workflow?
* **Define Goals:** What is the final outcome?
* **List Dependencies:** Which external services or data sources are involved?

### Step 2: Architecture Planning
* **Map Workflow Flow:** Visualize the logical sequence of nodes.
* **Identify Sub-workflows:** Determine if modularity can be improved.
* **Determine Data Transformation:** Plan how data will be mapped between nodes.

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
