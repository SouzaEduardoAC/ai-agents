# Knowledge: Mobile & Flutter Design Patterns

## 1. Architectural Patterns
- **BLoC (Business Logic Component):** Reactive, stream-based separation of UI and logic (using `flutter_bloc`).
- **Provider / Riverpod:** Dependency injection and simple state management (Riverpod is preferred for its compile-time safety).
- **Redux / StateNotifier:** For complex, global app-wide state.
- **Clean Architecture (Flutter):** Layered separation (Entities, Use Cases, Repositories, Data Sources, UI).
- **MVVM (Model-View-ViewModel):** Common in mobile apps using `ChangeNotifier`.

## 2. Flutter UI Patterns
- **Widget Tree Management:** Understanding `StatelessWidget` vs `StatefulWidget` lifecycles.
- **Builders:** `FutureBuilder`, `StreamBuilder`, `LayoutBuilder` for responsive UI.
- **Composition over Inheritance:** Building complex UI by nesting small, reusable widgets.
- **Custom Painters:** For high-end, low-level custom UI and animations.
- **Responsiveness:** Using `MediaQuery`, `LayoutBuilder`, and `OrientationBuilder` for multi-device support.

## 3. Navigation & Routing
- **Navigator 2.0 (Router API):** Declarative, URL-aware routing (using `go_router` or `auto_route`).
- **Deep Linking:** Handling platform-specific URI schemes and universal links.
- **Modal Sheets / Dialogs:** Mobile-specific overlay management.

## 4. Mobile UX Standards
- **Material Design (Android) & Cupertino (iOS):** Adapting UI based on the platform.
- **A11y (Accessibility):** `Semantics` widget, screen reader support, large text handling.
- **Animations:** `ImplicitlyAnimatedWidget`, `AnimationController`, `Tween`, and `Hero` transitions.
- **Offline First:** Local persistence (Sqflite, Hive, Drift) with sync strategies.
