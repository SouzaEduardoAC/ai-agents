# Mobile & Flutter Performance & Stability Audit

## 1. Frame Rate & Smoothness (Jank)
- **Excessive Rebuilds:** Widgets being built too often (missing `const`, improper `Provider` usage).
- **Blocking the UI Thread:** Running heavy logic on the main isolate (missing `compute()` or `Isolate.spawn()`).
- **Skia Shader Warmup:** Initial frame drop in Flutter (solved by Impeller or shader pre-compilation).
- **Expensive Layouts:** Using too many nested `IntrinsicHeight` or complex layouts in long lists.

## 2. Memory & Asset Management
- **Memory Leaks:** Uncancelled `StreamSubscription`, `AnimationController`, or `TextEditingController`.
- **Large Assets:** Oversized images, unoptimized SVGs, or embedding large data in the binary.
- **Image Cache Overflow:** Keeping too many high-resolution images in the memory cache.
- **Native Memory Leak:** Issues in platform channels or FFI native code.

## 3. App Launch & Binary Size
- **Slow Startup:** Heavy initial logic, large package footprint, or too many synchronous initialization calls.
- **Binary Bloat:** Unused assets, redundant packages, or debug symbols in release builds.
- **Cold Boot Performance:** First-frame time, splash screen management.

## 4. Network & Battery
- **Network Overhead:** Over-fetching, missing compression, or frequent polling.
- **Battery Drain:** Excessive GPS usage, unoptimized animations, or high-frequency background sync.
- **Offline Reliability:** Handling low-connectivity scenarios gracefully.

## 5. Mobile Resilience & Platform Support
- **Fragile Platform Channels:** Unchecked nulls or mismatched data types between Dart and native code.
- **Device Fragmentation:** Poor UI on small screens or tablet-specific layout issues.
- **OS Specific Crashes:** Using APIs not available on older Android/iOS versions.
- **Dependency Conflicts:** Pubspec version mismatch or native build failures (CocoaPods/Gradle).
