# Knowledge Base: LGPD (Brazil) - Technical Grounding

## The 10 Legal Bases (Art. 7)
Unlike GDPR's 6, LGPD offers 10, including:
1. Consent.
2. Compliance with a legal/regulatory obligation.
3. Public administration execution.
4. Research studies.
5. Contract execution.
6. Regular exercise of rights in judicial proceedings.
7. Protection of life.
8. Health protection (by health professionals).
9. Legitimate interest.
10. Credit protection.

## 1. Landmark Update (Jan 2026)
* **Brazil-EU Adequacy:** As of Jan 26, 2026, the ANPD and European Commission recognize reciprocal adequacy. International data transfers between Brazil and the EU/EEA no longer require Standard Contractual Clauses (SCCs), provided the recipient is under GDPR/LGPD jurisdiction.

## 2. Fundamental Rights (Art. 18) - 15-Day SLA
The system must technically support the following within a 15-day legal window:
* **Portability:** Data must be exportable in a structured, interoperable format (JSON/CSV preferred).
* **Anonymization:** Use of irreversible technical means so data can no longer identify the subject (Art. 12).
* **Information on Sharing:** A detailed log of all third-party entities (Public/Private) that accessed the PII.

## 3. Security Standards (Art. 46)
* **Technical Measures:** Adoption of AES-256 for data at rest and TLS 1.3 for transit.
* **Access Control:** Mandatory MFA (Multi-Factor Authentication) and RBAC for any personnel accessing databases.
* **Privacy by Design:** Documented evidence that privacy was integrated into the container/microservice architecture from inception.

## 4. Evidence Artifacts
* **RIPD/DPIA:** Mandatory for high-risk processing (e.g., biometric, health, or children's data).
* **RoPA:** A living Record of Processing Activities documenting every data lifecycle stage.
* **ECA Digital (2026):** Specific compliance for minors (Law 15.211/2025) taking effect March 2026.