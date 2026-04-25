- type:: [[Visuals]]
- status:: [SYNC]

- # Architectural Visualizations
	- ## Logic Mixing Component
		- ```mermaid
		  graph TD
		      A[MCP Request] --> B{Agent Hub}
		      B --> C[Load Agent Persona]
		      B --> D[Load Common Knowledge]
		      B --> E[Detect Project Stack]
		      E --> F[Inject Stack Skills]
		      C & D & F --> G[Final Prompt Assembly]
		      G --> H[MCP Response]
		  ```
