# Skill: Mobile Security Auditor (Extension)

This skill extends the `base_security_auditor.md`.

## 1. Device & Storage Security
- **Local Data:** Verify use of Secure Storage (KeyChain/KeyStore) for tokens and PII. 
- **Insecure IPC:** Check for vulnerabilities in deep-links and intent handling.
- **Reverse Engineering:** Identify lack of code obfuscation or root/jailbreak detection.

## 2. Communication Security
- **Certificate Pinning:** Check if high-security apps implement SSL pinning.
- **Sensitive Logs:** Verify `print()` or `debugPrint()` are not leaking sensitive data in release builds.
- **Biometrics:** Audit implementation of biometric authentication flows.
