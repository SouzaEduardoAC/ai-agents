- type:: [[Use Case]]
- status:: [ACTIVE]
- tags:: #lifecycle #process

- # Standardized Engineering Lifecycle
	- ## Description
		- An autonomous workflow that moves from a business requirement to a validated, documented implementation through mandatory deep-dive research, planning, execution, and review.
	- ## Primary Roles
		- [[Architect]]
		- [[Backend]]
		- [[Frontend]]
		- [[Mobile]]
	- ## Visual Logic
		- ```mermaid
		  graph TD
		      A[Role: User] --> B[Trigger: /architect:* | /backend:* | /frontend:* | /mobile:*]
		      B --> C[Phase 0: Deep Dive Investigation]
		      C --> C1[Write FEATURE_DISCOVERY.md]
		      C1 --> C2{Gate 0: Human Approval of Discovery}
		      C2 -- Denied --> C
		      C2 -- Approved --> D[Phase 1: Architectural Planning]
		      D --> D1[Write FEATURE_IMPLEMENTATION_PLAN.md]
		      D1 --> D2{Gate 1: Human Approval of Plan File}
		      D2 -- Denied --> D
		      D2 -- Approved --> E[Phase 2: Implementation]
		      E --> E1{Private Feed Detected?}
		      E1 -- Yes --> E2[STOP: Request feed config file]
		      E2 --> E1
		      E1 -- No --> E2a[Phase 2a: Dynamic Stack Detection]
		      E2a --> E3[Restore Packages & Implement]
		      E3 --> F[Phase 3: Code Review]
		      F --> G{Gate 2: Human Approval}
		      G -- Denied --> E3
		      G -- Approved --> H[Commit to Feature Branch]
		      H --> H1[Update Plan: Implemented / Pending]
		      H1 --> I[Phase 5: Sync & Document]
		      I --> J[Task Success]
		  ```
	- ## Business Rules
		- **Rule 1: Human-in-the-Loop**: No implementation without approval of discovery, plan, and review.
		- **Rule 2: Zero Trust**: Unverified code is never merged.
		- **Rule 3: Conceptual Integrity**: Docs updated immediately after implementation.
		- **Rule 4: Discovery-First**: Findings written to `[FEATURE]_DISCOVERY.md`.
		- **Rule 5: Plan-First**: Plan written to `[FEATURE]_IMPLEMENTATION_PLAN.md`.
		- **Rule 7: Stack Detection**: System optimizes knowledge injection based on signature files.
