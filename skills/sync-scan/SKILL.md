---
name: sync-scan
description: >
  Use this skill when the user wants to scan, analyze, or extract project conventions.
  Triggers include: "scan project", "analyze project structure", "extract conventions",
  "initialize context", "project conventions", "what's my project using",
  "understand my codebase", "read project rules", "setup context", "project style guide".
  Also use when starting work on an unfamiliar codebase or onboarding to a new project.
---

# sync-scan — Project Context Scanner

You are a project archaeologist. Your job: excavate every convention, pattern, and rule embedded in this codebase — then distill it into a single reference file the AI will never forget.

## Methodology

Follow these steps in order. Do not skip steps.

### Step 1: Tech Stack Detection

Scan for dependency manifests in this order of priority:

| File | Extract |
|------|---------|
| `package.json` | language (JS/TS), framework (React/Next/Vue/etc), dependencies, devDependencies |
| `pyproject.toml` / `setup.py` / `requirements.txt` | language (Python), framework (Django/FastAPI/Flask), dependencies |
| `go.mod` | language (Go), module path, dependencies |
| `Cargo.toml` | language (Rust), crate name, dependencies |
| `pom.xml` / `build.gradle` | language (Java), framework (Spring/Quarkus), dependencies |

Record: language, framework, key dependency names and versions.

### Step 2: Code Style Inference

Read 3-5 core source files (prefer files in `src/`, `lib/`, `app/`, or root). Extract:

- **Naming convention**: camelCase / snake_case / PascalCase / kebab-case (for variables, functions, classes, files)
- **Indentation**: 2 spaces / 4 spaces / tabs
- **Import order**: stdlib → third-party → local? Grouped? Sorted?
- **Comment style**: `//` vs `/* */` vs `#`, JSDoc/docstring presence
- **Quote style**: single `'` vs double `"`
- **Semicolons**: present or absent
- **Max line length**: approximate from observed files

### Step 3: Directory Convention Extraction

Analyze the directory tree. Record placement rules:

- Where do source files live? (`src/`, `lib/`, `app/`, `pkg/`)
- Where do tests live? (`tests/`, `test/`, `__tests__/`, `*_test.go`)
- Where do configs live? (root, `config/`, `.github/`)
- Where do docs live? (`docs/`, `doc/`, root README)
- Where do components/modules live? (domain-based? feature-based? layer-based?)

### Step 4: Config Rule Collection

Read these config files if they exist:

| File | Extract |
|------|---------|
| `.editorconfig` | indentation, charset, line endings, trim trailing whitespace |
| `.eslintrc*` / `eslint.config.*` | JS/TS lint rules |
| `.prettierrc*` / `prettier.config.*` | formatting rules |
| `ruff.toml` / `pyproject.toml [tool.ruff]` | Python lint rules |
| `mypy.ini` / `pyproject.toml [tool.mypy]` | Python type checking rules |
| `tsconfig.json` | TypeScript compiler options |
| `.rubocop.yml` | Ruby lint rules |

### Step 5: CLAUDE.md Rule Merge

If `CLAUDE.md` exists in the project root, read it and extract:
- Explicit rules and constraints
- Coding conventions
- Architecture decisions
- Forbidden patterns

### Step 6: Generate project-context.md

Write output to `.claude/project-context.md` using the template in `references/context-template.md`.

Fill in all `[auto]` sections with detected values. Leave `[manual]` section empty for user customization.

Use the scan checklist in `references/scan-checklist.md` to verify completeness.

## Done When

- [ ] Tech stack detected and recorded
- [ ] Code style inferred from existing files
- [ ] Directory conventions extracted
- [ ] Config rules collected
- [ ] CLAUDE.md rules merged (if exists)
- [ ] project-context.md generated at `.claude/project-context.md`
