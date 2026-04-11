# Knowledge: Conventional Commits 1.0.0
Follow the <type>[optional scope]: <description> structure.

## Core Types
- **feat:** A new feature (correlates with MINOR in SemVer).
- **fix:** A bug fix (correlates with PATCH in SemVer).
- **docs:** Documentation only changes.
- **style:** Changes that do not affect the meaning of the code (white-space, formatting).
- **refactor:** Code change that neither fixes a bug nor adds a feature.
- **perf:** Code change that improves performance.
- **test:** Adding missing tests or correcting existing tests.
- **chore:** Changes to the build process or auxiliary tools/libraries.

## Breaking Changes
Indicate with a `!` after the type/scope or `BREAKING CHANGE:` in the footer.