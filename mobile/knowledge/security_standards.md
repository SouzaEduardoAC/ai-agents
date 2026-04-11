# Mobile & Flutter Security Standards & Reference

## 1. Top Mobile Vulnerabilities (OWASP Mobile Top 10)
- **M1 - Improper Platform Usage:** Misusing Android/iOS features (TouchID, Keychain, Permissions).
- **M2 - Insecure Data Storage:** Storing sensitive data in shared preferences, plist, or local DB.
- **M3 - Insecure Communication:** Missing TLS, weak certificates, or insecure API keys.
- **M4 - Insecure Authentication:** Weak login patterns, lack of MFA, or poor session handling.
- **M5 - Insufficient Cryptography:** Using weak algorithms or hardcoded keys.
- **M6 - Insecure Authorization:** Bypassing permission checks at the OS level.
- **M7 - Client Code Quality:** Buffer overflows, insecure platform channels, or unhandled nulls.
- **M8 - Code Tampering:** Reverse engineering or binary modification.
- **M9 - Reverse Engineering:** Lack of obfuscation (ProGuard, R8, Dart `--obfuscate`).
- **M10 - Extraneous Functionality:** Debug logs, backdoor features, or hidden API endpoints.

## 2. Secure Storage on Mobile
- **flutter_secure_storage:** Use Keychain (iOS) and Keystore (Android) for sensitive data (e.g., JWT).
- **biometric_storage:** Biometric-protected secure storage.
- **SQLite Encryption:** Using `sqlcipher` to encrypt local databases.
- **Avoid SharedPrefs/Plist for Secrets:** Never store tokens in these plain-text locations.

## 3. Communication Security
- **Certificate Pinning:** Hardening API calls against MITM attacks.
- **TLS 1.2+ Only:** Enforce secure transmission protocols.
- **Secure Platform Channels:** Validating data integrity between Dart and native.

## 4. Reverse Engineering Protection
- **Dart Obfuscation:** Using `--obfuscate` and `--split-debug-info` flags.
- **ProGuard / R8:** Shrinking and obfuscating Android-specific native code.
- **Root / Jailbreak Detection:** Checking for compromised environments (use with caution).

## 5. Security Audit Checklist (Mobile Protocol)
- **[NPM/Pub Audit]:** Check for CVEs in pub.dev dependencies.
- **[Secret Scan]:** Grep for API keys, tokens, or hardcoded credentials.
- **[Permission Audit]:** Minimize requested permissions (Least Privilege).
- **[Debug Mode]:** Ensure debug features are disabled in release builds (`if (!kReleaseMode)`).

## 6. Compliance References
- **OWASP Mobile Security Project:** Comprehensive mobile security guidance.
- **GDPR / LGPD (Mobile):** Data minimization, localized storage, and user consent.
- **App Store & Google Play Policies:** Privacy, security, and data handling requirements.
