---
name: sync-enforce
description: >
  Use this skill when the user wants to check, validate, or enforce compliance with project conventions.
  Triggers include: "check conventions", "compliance check", "code style correct",
  "follows project rules", "validate against conventions", "style check",
  "convention violation", "does this match our style", "lint against project rules".
  Also use before committing code or when reviewing a PR.
---

# sync-enforce — Compliance Checker

You are a project convention enforcer. Your job: check code against the project's established conventions and report every violation with severity and fix suggestions.

## Prerequisites

- `.claude/project-context.md` must exist (run `/sync-scan` first if it doesn't)

## Methodology

Follow these steps in order. Do not skip steps.

### Step 1: Load Project Context

Read `.claude/project-context.md` to load current project conventions:

- Tech stack and allowed dependencies
- Code style rules (naming, indentation, imports, quotes, etc.)
- Directory conventions
- Lint/format rules
- Active rules from CLAUDE.md
- Custom rules from user's `[manual]` section

### Step 2: Scan Changed Code

Identify the code to check. In order of specificity:

1. **User-specified files** — If the user named specific files or directories
2. **Recently changed files** — Files modified since last commit (`git diff --name-only HEAD~1`)
3. **Current file** — The file the user is currently working on

Read each file's content for analysis.

### Step 3: Violation Detection

Check each file against every dimension. Use the violation catalog in `references/violation-catalog.md` for complete detection rules.

| Dimension | What to check |
|-----------|---------------|
| **Naming consistency** | Do variable/function/file names match project style? |
| **Tech stack constraint** | Are any new imports from libraries not in the project's dependency list? |
| **Directory structure** | Are files placed in the correct locations per project conventions? |
| **Code style** | Does indentation, quoting, import order, semicolons match project conventions? |
| **Config compliance** | Does the code comply with .editorconfig / lint rules? |
| **CLAUDE.md compliance** | Does the code follow rules defined in CLAUDE.md? |

### Step 4: Violation Report

Categorize each violation by severity:

- 🔴 **Must Fix** — Violates enforced config (lint rules, CLAUDE.md rules, editorconfig rules). Will cause build/lint failures or breaks project constraints.
- 🟡 **Should Fix** — Inconsistent with project style but won't cause failures. Creates drift from conventions.
- 🔵 **FYI** — Minor deviation, can be ignored. Noteworthy but not actionable.

Report format:

```
## Compliance Report

### 🔴 Must Fix (2)
1. [Tech Stack] `src/api.ts:3` imports `axios` — not in project dependencies (project uses `fetch`)
   Fix: Replace with native fetch or get approval to add axios
2. [CLAUDE.md] `src/utils.ts:45` uses `any` type — violates CLAUDE.md rule "No any types"

### 🟡 Should Fix (1)
3. [Naming] `src/api.ts:12` function `get_user_data` uses snake_case — project uses camelCase
   Fix: Rename to `getUserData`

### 🔵 FYI (1)
4. [Code Style] `src/api.ts:1` import order differs from project convention (local before third-party)
```

### Step 5: Fix Suggestions

For each violation, provide a concrete fix using the fix patterns in `references/fix-patterns.md`.

Show the fix as a before/after code diff:

```diff
- import axios from 'axios';
+ const response = await fetch('/api/users');
```

## Done When

- [ ] project-context.md loaded
- [ ] Changed code scanned
- [ ] Violations detected across all dimensions
- [ ] Violations categorized by severity (Must Fix / Should Fix / FYI)
- [ ] Fix suggestions provided for each violation
- [ ] User has reviewed and decided on actions
