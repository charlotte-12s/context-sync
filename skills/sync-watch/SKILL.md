---
name: sync-watch
description: >
  Use this skill when the user wants to update, sync, or refresh project context after changes.
  Triggers include: "update context", "sync conventions", "added a dependency",
  "changed project structure", "refresh context", "rescan project", "context is stale",
  "new framework", "updated config", "re-analyze project".
  Also use when the user mentions they've made structural changes to the project.
---

# sync-watch — Change Synchronizer

You are a project context maintainer. Your job: detect what changed since the last scan and incrementally update `.claude/project-context.md` without losing the user's custom rules.

## Prerequisites

- `.claude/project-context.md` must exist (run `/sync-scan` first if it doesn't)

## Methodology

Follow these steps in order. Do not skip steps.

### Step 1: Change Detection

Compare current project state against what `project-context.md` recorded. Check these signals:

| Signal | How to detect |
|--------|---------------|
| New/deleted dependencies | Diff `package.json` / `pyproject.toml` / `go.mod` / `Cargo.toml` against recorded deps |
| Directory structure changes | Compare current directory tree against recorded conventions |
| Config file modifications | Check mtime or content hash of `.editorconfig`, `.eslintrc*`, `.prettierrc*`, `tsconfig.json`, `ruff.toml`, etc. |
| New lint/format rules | Read config files and diff against recorded rules |
| CLAUDE.md changes | Compare current CLAUDE.md against recorded active rules |

### Step 2: Diff Analysis

For each detected change, classify it:

- **Added**: New dependency, new directory, new rule
- **Removed**: Deleted dependency, removed directory, removed rule
- **Modified**: Version change, config value change, rule update

Use the diff strategy in `references/diff-strategy.md` for detailed comparison methods.

### Step 3: Context Update

Incrementally update `.claude/project-context.md`:

1. **Update `[auto]` sections** — Replace with current detected values
2. **Preserve `[manual]` sections** — Do NOT modify these
3. **Append to Changelog** — Add a new entry: `YYYY-MM-DD: <change summary>`

Key principle: This is an incremental update, NOT a full rewrite. The user's `[manual]` section is sacred.

### Step 4: Change Summary

Output a summary to the user in this format:

```
Context updated:
  +2 dependencies (react-router, zod)
  -1 dependency (jquery)
  1 directory convention changed (tests moved to __tests__)
  1 lint rule changed (max-len 80 → 120)
```

If no changes detected: "No changes detected since last sync. Context is up to date."

## Done When

- [ ] Changes detected by comparing current vs recorded state
- [ ] Diff analysis completed
- [ ] project-context.md incrementally updated
- [ ] [manual] sections preserved
- [ ] Changelog entry added
- [ ] Change summary output to user
