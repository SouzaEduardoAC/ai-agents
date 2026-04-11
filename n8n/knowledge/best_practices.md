# n8n Best Practices & Design Patterns

## Workflow Design

### Modularity
* **Sub-workflows:** Break complex logic into smaller, reusable sub-workflows using the "Execute Workflow" node.
* **Separation of Concerns:** Keep distinct functions (e.g., data fetching, transformation, notification) in separate nodes or sub-workflows.

### Performance
* **Limit Data Volume:** Only fetch the data you need. Use filters and pagination where possible.
* **Efficient Expressions:** Optimize n8n expressions and use the "Code" node for complex data transformations.

### Reliability & Error Handling
* **Error Workflows:** Always configure a "Global Error Workflow" to handle unexpected failures.
* **Retries:** Use node-level retry settings for external API calls that may fail transiently.
* **Wait Nodes:** Use "Wait" nodes carefully to avoid rate-limiting or race conditions with external services.

## Naming & Documentation
* **Descriptive Node Names:** Always rename nodes to clearly describe their purpose (e.g., "Get New Leads from CRM" instead of "HTTP Request").
* **Internal Notes:** Use n8n's "Notes" feature to document the purpose and logic of complex workflow branches.
* **Consistent Variables:** Use a consistent naming convention for workflow-wide variables and custom data fields.

## Security
* **Credential Management:** Use n8n's built-in credential system. Never hardcode API keys or secrets in nodes or expressions.
* **Sensitive Data:** Avoid logging sensitive data in execution history if possible.
