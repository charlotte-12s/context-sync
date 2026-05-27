<div align="center">

# ContextSync

**8 rules and 3 skills that make AI respect your project conventions**

[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD--3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![GitHub Stars](https://img.shields.io/github/stars/charlotte-12s/context-sync?style=social)](https://github.com/charlotte-12s/context-sync/stargazers)
[![CI](https://github.com/charlotte-12s/context-sync/actions/workflows/validate.yml/badge.svg)](https://github.com/charlotte-12s/context-sync/actions/workflows/validate.yml)

**Never let AI forget your project again.**

```bash
npx context-sync
```

[Getting Started](#-quick-start) · [The 8 Rules](#-the-8-context-first-rules) · [The 3 Skills](#-the-3-skills) · [Supported Tools](#supported-tools)

</div>

---

## 🎯 The Problem

Every AI coding assistant does this:

| ❌ Bad Default | 💡 What ContextSync Does |
|:-:|:-:|
| Ignores your project's code style | Scans and enforces your conventions |
| Introduces random new dependencies | Locks the tech stack to what you already use |
| Puts files in wrong directories | Respects your directory structure |
| Forgets rules mid-conversation | Maintains persistent context across sessions |
| Silently breaks from patterns | Forces explicit declaration before deviation |

**ContextSync encodes your project's DNA** into skills that make AI respect it.

---

## ⚡ Quick Start

```bash
# Install with npx (recommended)
npx context-sync

# Or with curl
curl -fsSL https://raw.githubusercontent.com/charlotte-12s/context-sync/main/install.sh | bash
```

```bash
# Install only the scanner
npx context-sync --bundle scan-only

# Install only the enforcer
npx context-sync --bundle enforce-only

# Install for a specific tool
npx context-sync --tool cursor --tool codex --tool gemini
```

---

## 📜 The 8 Context-First Rules

These rules override default AI behaviors on any codebase:

| | Rule | Anti-Pattern |
|:-:|------|:------------|
| 1 | **Read Before Write** — Always read similar files before creating new ones | Writing code without checking existing examples |
| 2 | **Follow Nearest Pattern** — Copy the closest existing implementation | Inventing a new pattern when one exists |
| 3 | **Respect Directories** — Place files where similar files live | Putting files in arbitrary locations |
| 4 | **Match Naming Style** — Use the project's naming convention | Mixing camelCase with snake_case |
| 5 | **Lock Tech Stack** — Only use libraries already in the project | Importing new dependencies without approval |
| 6 | **Honor Config Rules** — Treat lint/format configs as mandatory | Ignoring .editorconfig and lint rules |
| 7 | **Stay Consistent** — Keep consistent with earlier decisions | Contradicting earlier choices mid-session |
| 8 | **Declare Before Deviate** — Announce and explain any deviation | Silently breaking from project conventions |

---

## 🛠️ The 3 Skills

| Skill | Command | Stage | What It Does |
|-------|---------|:-----:|-------------|
| **Context Scan** | `/sync-scan` | 🔍 Scan | Tech stack detection → Code style inference → Directory conventions → Config rules → Context generation |
| **Context Sync** | `/sync-watch` | 🔄 Sync | Change detection → Diff analysis → Incremental update → Change summary |
| **Context Enforce** | `/sync-enforce` | ✅ Enforce | Load context → Scan code → Violation detection → Severity report → Fix suggestions |

### Skill Detail

<details>
<summary><b>🔍 sync-scan</b> — Scan Your Project's DNA</summary>

6-step archaeological scan that extracts every convention:

1. **Tech Stack Detection** — Scan package.json / pyproject.toml / go.mod / Cargo.toml. Extract language, framework, dependency versions.
2. **Code Style Inference** — Read 3-5 core source files. Extract naming patterns, indentation, import order, quotes.
3. **Directory Convention Extraction** — Analyze directory tree. Record where source, tests, configs, docs live.
4. **Config Rule Collection** — Read .editorconfig / .eslintrc / .prettierrc / ruff.toml / mypy.ini / tsconfig.json.
5. **CLAUDE.md Rule Merge** — Incorporate existing CLAUDE.md rules into context.
6. **Generate project-context.md** — Output to `.claude/project-context.md` with auto/manual section separation.

**Includes:** Scan checklist · Context template with auto/manual section markers

</details>

<details>
<summary><b>🔄 sync-watch</b> — Keep Context in Sync</summary>

4-step incremental sync that preserves your custom rules:

1. **Change Detection** — Compare current project state against recorded context
2. **Diff Analysis** — Classify changes as Added / Removed / Modified
3. **Context Update** — Incrementally update `[auto]` sections, preserve `[manual]` sections
4. **Change Summary** — Output: "Context updated: +2 deps, 1 style rule changed"

**Key principle:** Incremental update, NOT full rewrite. Your custom rules are sacred.

**Includes:** Diff strategy for dependency, directory, config, and CLAUDE.md changes

</details>

<details>
<summary><b>✅ sync-enforce</b> — Enforce Your Conventions</summary>

5-step compliance check with severity-graded violations:

1. **Load Project Context** — Read current project conventions from `.claude/project-context.md`
2. **Scan Changed Code** — Examine specified or recently changed files
3. **Violation Detection** — Check 6 dimensions: naming, tech stack, directory, code style, config, CLAUDE.md
4. **Violation Report** — Categorized by severity:
   - 🔴 **Must Fix** — Violates enforced config (lint, CLAUDE.md rules)
   - 🟡 **Should Fix** — Inconsistent with project style
   - 🔵 **FYI** — Minor deviation
5. **Fix Suggestions** — Concrete before/after code diffs for each violation

**Includes:** 20+ violation types catalog · Fix patterns for naming, tech stack, directory, style, config

</details>

---

## 🔌 Supported Tools

| Tool | Format | Auto-Detected |
|------|--------|:---:|
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | `.claude/skills/` + `SKILL.md` | ✅ |
| [Cursor](https://cursor.sh) | `.cursor/rules/` | ✅ |
| [Codex CLI](https://github.com/openai/codex) | `AGENTS.md` | ✅ |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | `GEMINI.md` | ✅ |
| [GitHub Copilot](https://github.com/features/copilot) | `.github/copilot-instructions.md` | ✅ |
| [Windsurf](https://codeium.com/windsurf) | `.windsurfrules` | ✅ |

The installer auto-detects which tools you're using and generates the right format.

---

## 🧩 How It Works

```
┌─────────────────────────────────────────────────┐
│                  CLAUDE.md                        │
│       8 Context-First Rules (always active)       │
│  Override default AI behavior on any codebase     │
└──────────────────────┬──────────────────────────┘
                       │ routes to
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ sync-scan   │ │ sync-watch  │ │ sync-enforce│
│  🔍 Scan    │ │  🔄 Sync    │ │  ✅ Enforce │
└──────┬──────┘ └──────┬──────┘ └──────┬──────┘
       │               │               │
       ▼               ▼               ▼
  references/      references/      references/
  · checklist      · diff strategy  · violation catalog
  · template                        · fix patterns
       │               │               │
       └───────────────┼───────────────┘
                       ▼
            ┌─────────────────────┐
            │  project-context.md │
            │  [auto] + [manual]  │
            └─────────────────────┘
```

1. **CLAUDE.md** activates automatically when you're working on any codebase
2. The 8 rules modify AI behavior without you asking
3. **sync-scan** extracts your project's DNA into `project-context.md`
4. **sync-watch** keeps it in sync as your project evolves
5. **sync-enforce** checks code against your conventions and suggests fixes

---

## 🤝 Contributing

Contributions are welcome! Areas of particular interest:

- More reference templates for specific frameworks and languages
- Additional violation detection rules
- Translations of the 8 rules into other languages
- Improvements to the install script for more tools

Please read the existing skill structure before submitting PRs.

---

<div align="center">

**ContextSync** — Because AI should respect your project, not reinvent it.

[⭐ Star this repo](https://github.com/charlotte-12s/context-sync) · [🐛 Report Bug](https://github.com/charlotte-12s/context-sync/issues) · [💡 Request Feature](https://github.com/charlotte-12s/context-sync/issues)

</div>
