# Skill: Compliance Auditing Protocol (v2026)

This protocol defines the **step-by-step operational procedure** for conducting a multi-framework privacy and security audit. It bridges the knowledge bases (GDPR, LGPD, HIPAA, MICS, SOC 2) into concrete, executable audit phases with binary (✅/❌) checklist items and mandatory evidence artifacts.

---

## Phase 0: Scope Declaration

Before any audit begins, declare the operational scope in writing.

1. **Identify Active Regulations:** Determine which frameworks apply:
   - [ ] **GDPR** — Is EU/EEA personal data processed or transferred?
   - [ ] **LGPD** — Is Brazilian personal data processed or transferred?
   - [ ] **HIPAA** — Is Protected Health Information (PHI/ePHI) involved?
   - [ ] **MICS** — Are internal financial controls or segregation-of-duties relevant?
   - [ ] **SOC 2** — Is a third-party trust service certification required?

2. **Classify the Data:** Identify data sensitivity tiers present in the system:
   - [ ] PII (Personally Identifiable Information)
   - [ ] Sensitive PII (race, religion, health, sexual orientation, biometric) — triggers Art. 9 GDPR / Art. 11 LGPD
   - [ ] PHI / ePHI — triggers HIPAA Security & Privacy Rules
   - [ ] Children's data (under 13/16/18 per jurisdiction) — triggers strict parental consent requirements

3. **Identify Data Controllers & Processors:** Map every entity that touches the data and their legal role.

---

## Phase 1: Data Flow Mapping

**Objective:** Produce a complete, verified map of where PII/PHI enters, lives, and exits the system.

### 1.1 Data Entry Points
- [ ] All collection forms (web, mobile, API) have a declared legal basis at the point of collection
- [ ] Collection is limited to what is strictly necessary (Data Minimization — GDPR Art. 5(1)(c), LGPD Art. 6(III))
- [ ] Consent mechanisms are granular, unambiguous, and logged with timestamp + version

### 1.2 Data Storage & Residency
- [ ] All databases and storage buckets containing PII/PHI are inventoried (including "shadow" locations: logs, backups, analytics, AI training sets)
- [ ] Data residency is confirmed: EU data stays in EU/EEA (or adequacy-recognized jurisdictions); Brazilian data is subject to ANPD transfer rules
- [ ] **Brazil-EU Adequacy (Jan 26, 2026):** If transferring between Brazil ↔ EU/EEA, verify SCCs are no longer required — document the adequacy basis instead
- [ ] **EU-US Data Privacy Framework (DPF):** If transferring to the US, verify the US vendor is **currently active** on the DPF list at [dataprivacyframework.gov](https://www.dataprivacyframework.gov) before relying on adequacy

### 1.3 Data Sharing & Third Parties
- [ ] A full list of third-party processors (cloud providers, SaaS tools, analytics) is documented in the RoPA/Record of Processing Activities
- [ ] **HIPAA:** Every vendor with PHI access has a signed **Business Associate Agreement (BAA)**
- [ ] **Shadow AI:** Any use of LLMs, AI APIs, or third-party AI tools is documented in the RoPA — this is a 2026 Red Flag (ref: `compliance/knowledge/regulations.md`)
- [ ] Data exits (deletion pipelines, export APIs, archival) are mapped and have documented retention policies

---

## Phase 2: Legal Basis Check

**Objective:** Confirm every processing activity has a valid, documented legal basis.

### 2.1 GDPR — Lawful Bases (Art. 6 & 9)
For each processing activity, confirm ONE of the following applies and is documented:
- [ ] **Art. 6(1)(a) Consent** — Freely given, specific, informed, unambiguous; withdrawable at any time
- [ ] **Art. 6(1)(b) Contract** — Processing necessary for contract performance with the data subject
- [ ] **Art. 6(1)(c) Legal Obligation** — Required by EU/member state law
- [ ] **Art. 6(1)(d) Vital Interests** — Life-or-death emergency
- [ ] **Art. 6(1)(e) Public Task** — Public interest or official authority
- [ ] **Art. 6(1)(f) Legitimate Interests** — Balanced against data subject rights (requires LIA)
- [ ] **Special Category Data (Art. 9):** If processing health, biometric, racial, or political data, an explicit Art. 9(2) exception is documented (explicit consent, vital interests, or legal claim)

### 2.2 LGPD — Legal Bases (Art. 7, 10 options)
For each processing activity, confirm ONE of the following applies:
- [ ] **Art. 7(I) Consent** — Express, informed, specific, revocable
- [ ] **Art. 7(II) Legal/Regulatory Obligation** — Required by Brazilian law
- [ ] **Art. 7(III) Public Administration** — For public policy execution
- [ ] **Art. 7(IV) Research** — Academic/scientific; anonymization preferred
- [ ] **Art. 7(V) Contract** — Processing necessary for contract with the data subject
- [ ] **Art. 7(VI) Rights in Legal Proceedings** — Defense or exercise of rights
- [ ] **Art. 7(VII) Protection of Life** — Physical safety of the data subject or third parties
- [ ] **Art. 7(VIII) Health (Art. 11)** — By health professionals, for health protection
- [ ] **Art. 7(IX) Legitimate Interest** — Must not override fundamental rights; requires balancing test
- [ ] **Art. 7(X) Credit Protection** — Governed by the Financial System legislation (Law 4.595/64)

### 2.3 HIPAA — Authorization & Minimum Necessary
- [ ] PHI processing is limited to **Treatment, Payment, or Healthcare Operations (TPO)** — or a signed patient authorization exists
- [ ] **Minimum Necessary Standard** is applied: access to PHI is scoped to the specific "need to know" per job function
- [ ] No PHI is used for marketing or sold to third parties without explicit authorization (45 CFR § 164.508)

---

## Phase 3: Technical & Organizational Measures (TOMs)

**Objective:** Verify the "Unified Control Set" — controls that satisfy all frameworks simultaneously.

### 3.1 Encryption (Unified — ALL frameworks)
- [ ] **Data at Rest:** AES-256 encryption on all databases, backups, and storage containing PII/PHI
- [ ] **Data in Transit:** TLS 1.3 enforced on all APIs and service-to-service communication; TLS 1.2 or below must be disabled
- [ ] **Key Management:** Encryption keys are rotated on a documented schedule and stored separately from the data they protect

### 3.2 Identity & Access Control (Unified — ALL frameworks)
- [ ] **Unique User Identification:** Every user/service account has a unique ID; shared accounts are prohibited (HIPAA 45 CFR § 164.312(a)(2)(i))
- [ ] **MFA (Multi-Factor Authentication):** Enforced for all personnel accessing PII/PHI — now effectively required under HIPAA 2026 and LGPD Art. 46
- [ ] **RBAC (Role-Based Access Control):** Principle of least privilege applied; access rights reviewed quarterly
- [ ] **HIPAA — Automatic Log-off:** Sessions containing PHI have an inactivity timeout
- [ ] **HIPAA — Emergency Access (Break-glass):** A documented procedure exists for emergency PHI access, and all break-glass events are logged and reviewed

### 3.3 Logging & Audit Trails (HIPAA required, SOC 2 required, MICS critical)
- [ ] **Immutable logs** of all access to PII/PHI are maintained for a minimum of **6 months** (HIPAA 45 CFR § 164.312(b))
- [ ] Logs include: user ID, timestamp, action type, resource accessed, source IP
- [ ] Log access is itself a restricted, audited event (MICS Segregation of Duties — raw PII in logs requires log anonymization)
- [ ] Logs are protected from tampering (write-once storage or SIEM integration)

### 3.4 Privacy by Design & Default (GDPR Art. 25, LGPD Art. 46)
- [ ] Privacy impact was assessed during system design — documented evidence exists (DPIA/RIPD)
- [ ] Default settings expose the minimum amount of personal data (e.g., public profiles default to private)
- [ ] Pseudonymization is applied where possible to reduce risk

### 3.5 AI & Automated Decision-Making (GDPR Art. 22, LGPD, HIPAA 2025 AI Rule)
- [ ] **GDPR Art. 22:** If AI makes decisions with legal or similarly significant effects, the data subject has the right to opt out and request human review
- [ ] **AI Explainability:** The logic and data inputs of any AI processing PHI/PII are documented in an "AI Transparency Profile"
- [ ] **Shadow AI Check:** All LLMs and AI APIs used are inventoried; any PHI/PII sent to external AI APIs is verified against the provider's BAA (HIPAA) and DPA (GDPR/LGPD)

### 3.6 HIPAA 2025 NPRM Preparedness (Proposed → Treat as Required Now)

> The 2025 HIPAA Security Rule NPRM proposes eliminating the “Addressable” vs. “Required” distinction for encryption and MFA — making them **fully mandatory**. Compliance window: ~240 days after final rule publication. Audit against these now.

- [ ] **Encryption at rest:** Explicitly listed as a **Required** control in policy — not merely “Addressable”
- [ ] **Encryption in transit:** TLS 1.3 enforced, documented as Required
- [ ] **MFA:** Enforced for **all** ePHI system access — no exceptions
- [ ] **Vulnerability scanning:** Scheduled at minimum every **6 months**; results documented and remediated
- [ ] **Penetration testing:** Conducted at minimum **annually** by a qualified tester; findings tracked to closure
- [ ] **Technology asset inventory + network map:** Updated at minimum **annually** — covers all devices, cloud services, and remote endpoints with ePHI access
- [ ] **Annual written BA verification:** Each Business Associate provides written confirmation (validated by a subject matter expert) that their technical safeguards are operational
- [ ] **HIPAA De-identification safe harbor (§164.514(b)):** If de-identification is used as a privacy control, confirm all 18 identifying elements are removed AND re-identification risk is documented as very small; method is on file

---

## Phase 4: Data Subject Rights Verification

**Objective:** Confirm the system technically supports all mandatory data subject rights.

### 4.1 Rights & Deadlines

| Right | GDPR Deadline | LGPD Deadline | Technical Requirement |
|-------|--------------|--------------|----------------------|
| Access (SAR) | 30 days | **15 days** ⚠️ | Self-service portal or documented manual process |
| Rectification | 30 days | **15 days** | User-facing edit capability or admin workflow |
| Erasure / Forgotten | 30 days | **15 days** | Cascading delete across all storage (incl. backups) |
| Portability | 30 days | **15 days** | Export in JSON/CSV structured format |
| Restriction of Processing | 30 days | **15 days** | Flag/freeze mechanism without deleting data |
| Objection | 30 days | **15 days** | Opt-out mechanism per processing purpose |

> **Agent Rule:** If any Brazilian data is in scope, enforce the **15-day SLA** for ALL rights requests — it is the strictest deadline and eliminates dual-deadline management risk.

### 4.2 Retention vs. Deletion Conflict Check
- [ ] Does a legal retention obligation (HIPAA: 6 years; Brazilian tax law: 5 years; EU financial: 7 years) override the deletion request?
- [ ] If yes: data must be moved to a **Locked/Read-Only archive** state — not fully purged — with a documented expiry date
- [ ] The data subject must be informed that deletion is deferred due to legal retention, with the expected erasure date

### 4.3 Children's Data
- [ ] **ECA Digital (Brazil, Law 15.211/2025, effective March 2026):** Any processing of data from minors requires explicit parental consent; profiling for commercial purposes is prohibited
- [ ] **GDPR:** Parental consent required for children under 16 (or lower threshold set by member state, minimum 13)
- [ ] **COPPA (if US users under 13 are involved):** Verifiable parental consent required

---

## Phase 5: Breach Notification Readiness

**Objective:** Verify the system can detect, contain, and report a breach within regulatory deadlines.

| Framework | Notification Target | Deadline | Trigger |
|-----------|-------------------|----------|---------|
| **GDPR** | Lead Supervisory Authority (LSA) | **72 hours** from awareness (Art. 33) | Any breach likely to risk individuals' rights |
| **GDPR** | Affected Data Subjects | Without undue delay (Art. 34) | High-risk breaches only |
| **LGPD** | ANPD + Data Subjects | **3 business days** from confirmation (Res. CD/ANPD No. 15/2024) | Significant risk or harm to data subjects |
| **LGPD (supplementary)** | ANPD | Up to **20 business days** from initial notification | Full details following the initial report |
| **HIPAA** | HHS Secretary + Affected Individuals | **60 calendar days** from discovery (45 CFR § 164.404) | Any unsecured PHI breach |
| **HIPAA (≥500 individuals)** | Prominent media in affected state | **60 calendar days** | Same trigger as above |

> **Agent Rule:** Run the **72-hour** internal SLA as the default for all frameworks simultaneously. Log ALL incidents — including non-reportable ones — for a minimum of **5 years** (LGPD Res. 15/2024).

- [ ] An automated breach detection system (SIEM, anomaly detection) is in place and tested
- [ ] A documented **Incident Response Plan (IRP)** exists with named roles and escalation paths
- [ ] The IRP includes the **72-hour clock** trigger and a designated DPO/Privacy Official as the notification authority
- [ ] Breach notification templates for regulators and individuals are pre-approved and ready

---

## Phase 6: Evidence Artifact Checklist

**Objective:** Confirm all mandatory documentary evidence exists and is current.

| Artifact | Required By | Minimum Frequency |
|----------|------------|-------------------|
| **DPIA / RIPD** (Data Protection Impact Assessment) | GDPR Art. 35, LGPD Art. 38 | Per high-risk activity; also required for LGPD legitimate interest basis |
| **RoPA** (Record of Processing Activities) | GDPR Art. 30, LGPD | Living document — updated on any processing change |
| **SRA** (Security Risk Assessment) | HIPAA 45 CFR § 164.308(a)(1) | Annual minimum; must cover ALL ePHI incl. cloud, logs, backups |
| **PHI Inventory** | HIPAA | Annual minimum (incl. shadow PHI in logs/backups/remote devices) |
| **Technology Asset Inventory + Network Map** | HIPAA 2025 NPRM | Annual minimum; all devices and services with ePHI access |
| **BAAs** (Business Associate Agreements) | HIPAA 45 CFR § 164.308(b) | Before any vendor PHI access; annual written verification (NPRM) |
| **DPAs** (Data Processing Agreements) | GDPR Art. 28, LGPD Art. 39 | Before any processor PII/PHI access; must authorize sub-processors |
| **Training Logs** | HIPAA, LGPD | Annual; all workforce members with regulated data access |
| **Penetration Test Report** | GDPR Art. 32, SOC 2, HIPAA 2025 NPRM | Annual minimum (HIPAA NPRM); quarterly for Tier 1 (high-risk GDPR) |
| **Vulnerability Scan Reports** | HIPAA 2025 NPRM | Every 6 months minimum |
| **Backup Restore Test** | GDPR Art. 32 (availability), HIPAA Contingency Plan | Semi-annual minimum; results documented |
| **AI Transparency Profiles** | GDPR (AI Act bridge), LGPD, HIPAA 2025 AI Rule | Per AI/LLM system processing PII/PHI |
| **Incident Log** (all incidents, incl. non-reportable) | LGPD Res. 15/2024 | Retained 5 years minimum |

---

## Phase 7: Audit Output

After completing all phases, produce the following:

1. **Findings Summary:** A table of all ❌ failures with severity (Critical / High / Medium / Low)
2. **Remediation Roadmap:** Ordered list of required fixes with estimated effort and owner
3. **Cross-Framework Risk Matrix:** Highlight any finding that violates multiple frameworks simultaneously (highest priority)
4. **Penalty Exposure Summary:** Quantify maximum theoretical fine exposure per active framework:
   - **GDPR:** Up to **€20M or 4% of global annual turnover** (Tier 2 violations — Art. 83)
   - **LGPD:** Up to **2% of Brazilian gross revenue**, capped at **R$ 50 million per infraction** (ANPD — Art. 52)
   - **HIPAA Tier 4 (willful neglect, uncorrected):** ~**$71,162 per violation**, ~**$2.13M annual cap per provision** (OCR, inflation-adjusted 2026)
5. **Gut Check Question:** Close with a single, pointed question that tests whether the most critical risk has been truly understood by the stakeholder

> **Output format:** Use the Audit Report Template at `compliance/templates/audit_report.md`.