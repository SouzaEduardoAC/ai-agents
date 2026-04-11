# Mobile & Flutter Ecosystem & Selection

The mobile choice must prioritize **Performance**, **Stability**, and **App Store Guidelines**.

| Category | Technology | Best Use Case | Mobile Trade-off |
| :--- | :--- | :--- | :--- |
| **Framework** | **Flutter** | Cross-platform, beautiful UI, 60/120 FPS. | Native-look integration, complex platform interop. |
| **State** | **Riverpod** | Global state, type-safe, compile-time safety. | Functional paradigm, learning curve. |
| **Persistence** | **Hive / Sqflite** | Local data, caching, persistent state. | Migration management (Sqflite), NoSQL vs Relational. |
| **Network** | **Dio / Chopper** | Advanced HTTP client, interceptors, type-safety. | Binary size increase compared to native `http`. |
| **Logic Reuse** | **Dart Packages** | Pure logic sharing across Flutter/Dart projects. | Requires Dart-only logic (no `flutter/material.dart`). |
| **Unit Testing** | **flutter_test** | High-speed, widget-level, and unit tests. | Limited native environment simulation. |
| **UI Testing** | **Integration Test**| Real device/emulator interaction. | Slow execution; flaky device environments. |
| **Navigation** | **GoRouter** | Declarative, simple, deep-link aware. | Declarative complexity compared to Navigator 1.0. |

## Selection Principles
1. **Prefer Official Packages:** Use `flutter.dev` or `dart.dev` verified publishers.
2. **Type-Safe Serialization:** Use `json_serializable` or `freezed` for models.
3. **Platform Adaptation:** Always check if a package supports both Android and iOS before adopting.
4. **Performance Audit:** Always audit the impact of a package on app size and startup time.
