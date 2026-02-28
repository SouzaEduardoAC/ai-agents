# Knowledge Base: HIPAA (USA) - Technical Grounding

## 1. 2026 Regulatory Context
* **HHS Cybersecurity Performance Goals (CPGs):** As of 2026, the Office for Civil Rights (OCR) uses the CPGs as the benchmark for "Reasonable Security." Failing to meet "Essential" goals during a breach carries higher Tier 4 penalties.
* **AI Transparency (2025 Rule):** Any AI used for clinical decision-making or PHI processing must have a "Transparency Profile" explaining the data inputs and risk mitigation strategies.

## 2. The Security Rule (Technical Safeguards - 45 CFR § 164.312)
* **Access Control:** Unique User Identification is mandatory. Systems must implement "Automatic Log-off" and "Emergency Access Procedures" (Break-glass protocols).
* **Audit Controls:** Hardware and software must record and examine activity in all systems containing or examining PHI. 
    - *Audit Requirement: 6-month minimum retention for access logs.*
* **Integrity:** Mechanisms to corroborate that PHI has not been altered or destroyed in an unauthorized manner (e.g., Checksums, Digital Signatures).
* **Transmission Security:** Encryption is "Addressable" but effectively mandatory in 2026. Use TLS 1.3 for data in motion and AES-256 for data at rest.

## 3. The Privacy Rule (Administrative & Organizational)
* **Minimum Necessary Standard:** Systems must be architected to limit PHI access to the specific "need to know" for a particular job function.
* **Business Associate Agreements (BAA):** Any service provider (Cloud, MSP, SaaS) with potential access to PHI must have a signed BAA.
    - *Note: On Fedora/Linux, ensure your cloud provider (AWS/GCP) has a signed BAA covering the specific region/services used.*

## 4. Breach Notification & Penalties
* **60-Day Rule:** Notification to individuals and the HHS Secretary must occur without unreasonable delay and no later than 60 days.
* **Tiered Penalties:**
    - Tier 1: No Knowledge (Up to $30k/year)
    - Tier 2: Reasonable Cause ($1k - $67k per violation)
    - Tier 3: Willful Neglect - Corrected ($13k - $80k per violation)
    - Tier 4: Willful Neglect - Not Corrected ($67k - $2M+ per year)

## 5. Evidence Artifacts
* **SRA (Security Risk Assessment):** An annual, documented review of all technical and physical risks.
* **Inventory of PHI:** A map of where Protected Health Information is stored (including "Shadow PHI" in logs or backups).
* **Training Logs:** Evidence that all workforce members have completed HIPAA training within the last 12 months.