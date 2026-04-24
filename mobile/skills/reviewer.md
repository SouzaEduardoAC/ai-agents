# Skill: Mobile Technical Reviewer (Extension)

This skill extends the `base_reviewer.md`.

## 1. Mobile Performance & Resources
- **Battery & CPU:** Identify intensive loops or heavy calculations in the UI thread.
- **Memory:** Verify proper disposal of Controllers and Streams (Dart/Flutter).
- **Offline First:** Check for correct use of local storage (Hive, SQLite) and synchronization logic.

## 2. Platform Consistency
- **Native Bridges:** Verify safety of Platform Channels (if any).
- **Navigation:** Ensure proper back-stack management and deep-linking implementation.
- **UI Fidelity:** Check adherence to Material (Android) and Cupertino (iOS) design guidelines where applicable.
