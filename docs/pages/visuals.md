- type:: [[Visuals]]
- status:: [SYNC]
- project:: [[ai-agents]]

- # Architectural Diagrams
	- ## Universal Agent Hub (Hub-and-Spoke)
		- ```mermaid
		  graph TD
		      CLI[Gemini/Claude CLI] -->|Execute| AH[Agent Hub bin/agent-hub.js]
		      AH -->|Resolve Probes| FS[Filesystem]
		      AH -->|Inject| CS[Common Standards]
		      AH -->|Inject| CK[Common Skills]
		      AH -->|Dynamic Detection| DK[Stack-Specific Knowledge]
		      AH -->|Compose| AP[Agent Persona & Skills]
		      AP -->|Target| LLM[LLM Output]
		  ```
