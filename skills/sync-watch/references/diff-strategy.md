# Diff Strategy

How to detect and compute differences between current project state and recorded context.

## Dependency Changes

### package.json (JavaScript/TypeScript)

1. Read current `package.json`
2. Compare `dependencies` and `devDependencies` against `## Tech Stack [auto]` in `project-context.md`
3. Output:
   - Added: keys present now but not in context
   - Removed: keys in context but not present now
   - Modified: keys present in both but different versions

### pyproject.toml / requirements.txt (Python)

1. Read current `pyproject.toml` `[project.dependencies]` or `requirements.txt`
2. Compare against recorded dependencies
3. Same added/removed/modified classification

### go.mod (Go)

1. Read current `go.mod` `require` block
2. Compare against recorded dependencies
3. Same added/removed/modified classification

### Cargo.toml (Rust)

1. Read current `Cargo.toml` `[dependencies]`
2. Compare against recorded dependencies
3. Same added/removed/modified classification

## Directory Structure Changes

1. Run `find . -type d -not -path '*/node_modules/*' -not -path '*/.git/*' -not -path '*/venv/*' -not -path '*/__pycache__/*'`
2. Compare directory list against recorded `## Directory Conventions [auto]`
3. Classify:
   - New directories not matching recorded patterns
   - Directories that were recorded but no longer exist
   - New organizational patterns (e.g., new `features/` directory suggests feature-based organization)

## Config File Changes

For each known config file:
1. Read current content
2. Compare against recorded `## Lint/Format Rules [auto]`
3. Extract changed rules with old → new values

### .editorconfig
Compare: indent_style, indent_size, end_of_line, charset, trim_trailing_whitespace, insert_final_newline

### .eslintrc* / eslint.config.*
Compare: rules object, extends array, parser options

### .prettierrc* / prettier.config.*
Compare: semi, singleQuote, tabWidth, trailingComma, printWidth, arrowParens

### tsconfig.json
Compare: strict, target, module, moduleResolution, esModuleInterop, paths

### ruff.toml / pyproject.toml [tool.ruff]
Compare: line-length, select, ignore, target-version

## CLAUDE.md Changes

1. Read current `CLAUDE.md`
2. Compare against `## Active Rules from CLAUDE.md [auto]` in `project-context.md`
3. Extract:
   - New rules not previously recorded
   - Rules that were removed
   - Rules that were modified

## Changelog Format

Each sync appends one line to `## Changelog [auto]`:

    - 2026-05-27: +2 deps, -1 dep, 1 dir change, 1 lint rule change

For a clean sync with no changes:

    - 2026-05-27: No changes detected
