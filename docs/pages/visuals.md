- type:: [[Visuals]]
- status:: [SYNC]
- project:: [[ai-agents]]

- # Architectural Visualizations
	- ## Master Pipeline Flow
		- ```mermaid
		  sequenceDiagram
		      participant U as User
		      participant H as Agent Hub (MCP)
		      participant L as LLM (Claude/Gemini)
		  
		      U->>H: agent-hub serve
		      L->>H: call_agent_command(architect, create, "Task")
		      Note over H: Scans Stack (Go/.NET/React)
		      Note over H: Injects Common Skills
		      H-->>L: Mixed Prompt (Persona + Skills + Stack)
		      L->>U: Plan/Result
		  ```
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
