# Mobile Testing Tools & Patterns (Flutter/Dart)

## 1. Unit Testing (Dart)
- **Tool:** `flutter_test`.
- **Focus:** Domain logic, BLoC/Provider state transitions, and Model serialization.
- **Mocking:** Use `mockito` or `mocktail`.

## 2. Widget Testing
- **Tool:** `flutter_test`.
- **Focus:** Verifying that specific widgets are present, and they respond correctly to taps and scrolls.
- **Goldens:** Use Golden Tests to prevent unintended UI regressions.

## 3. Integration Testing
- **Tool:** `integration_test` (Flutter).
- **Focus:** Running the app on a real device or emulator to verify full flows.
- **Offline First:** Explicitly test synchronization logic and local database (Hive/SQLite) persistence.
