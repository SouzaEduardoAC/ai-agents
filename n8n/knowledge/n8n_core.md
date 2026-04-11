# n8n Core Knowledge Base

## Primary Source
The n8n GitHub repository is the authoritative source for the platform's codebase, node implementations, and technical documentation.

* **GitHub Repository:** [n8n-io/n8n](https://github.com/n8n-io/n8n)
* **Official Documentation:** [docs.n8n.io](https://docs.n8n.io)

## Key Concepts

### Nodes
* **Trigger Nodes:** Start the workflow (e.g., Webhooks, Cron, Pollers).
* **Regular Nodes:** Perform actions or transform data.
* **Core Nodes:** Essential for control flow (e.g., IF, Merge, Code, Wait).

### Data Flow
* **JSON Structure:** All data in n8n is represented as an array of JSON objects.
* **Input/Output Mapping:** Understanding how data flows between nodes and how expressions access previous results.

### Execution Model
* **Execution Modes:** Manual (UI) vs. Automated.
* **Context:** Data persistency across node executions in a single run.
* **Error Handling:** Global Error Workflow vs. Node-level settings.

### Custom Nodes
* **Development:** Using the n8n-nodes-base framework to create custom integrations.
* **Publishing:** How to integrate custom nodes into a self-hosted or cloud n8n instance.
