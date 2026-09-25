# Agent Instructions

Mission: keep Agent Budget Router small, auditable, provider-neutral, and local-first.

Rules:
- Never commit secrets or user data.
- Routing policy must remain deterministic and testable.
- External provider execution must be opt-in.
- Add tests for every routing rule change.
- Prefer standard-library code until a dependency clearly reduces risk or complexity.
- Public code must not contain YJS internal business data, prompts, or infrastructure details.
- Update README examples when CLI behavior changes.
