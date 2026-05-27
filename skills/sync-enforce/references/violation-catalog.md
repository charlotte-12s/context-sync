# Violation Catalog

Complete catalog of violation types with detection rules and default severity.

## Naming Violations

### V-NAMING-001: Inconsistent Variable Naming
**Detection**: Variable declarations that don't match the project's naming convention.
- Project uses camelCase → flag `snake_case` or `PascalCase` variables
- Project uses snake_case → flag `camelCase` or `PascalCase` variables
**Default severity**: 🟡 Should Fix
**Check**: `const/let/var` declarations, function parameters, loop variables

### V-NAMING-002: Inconsistent Function Naming
**Detection**: Function declarations that don't match the project's naming convention.
**Default severity**: 🟡 Should Fix
**Check**: `function` declarations, arrow functions assigned to variables, class methods

### V-NAMING-003: Inconsistent File Naming
**Detection**: File names that don't match the project's naming convention.
- Project uses kebab-case → flag `PascalCase` or `snake_case` file names
- Project uses PascalCase → flag `kebab-case` or `snake_case` file names
**Default severity**: 🟡 Should Fix
**Check**: New file paths, import paths

### V-NAMING-004: Inconsistent Class Naming
**Detection**: Class declarations that don't match PascalCase (universal convention).
**Default severity**: 🟡 Should Fix
**Check**: `class` declarations

## Tech Stack Violations

### V-TECH-001: Unapproved Dependency Import
**Detection**: Import statements referencing packages not in the project's dependency list.
**Default severity**: 🔴 Must Fix
**Check**: `import` / `require` / `from ... import` statements

### V-TECH-002: Wrong Framework Pattern
**Detection**: Code using patterns from a different framework than the project's.
- Project uses React → flag Vue/Angular patterns
- Project uses Express → flag Koa/Fastify patterns
**Default severity**: 🔴 Must Fix
**Check**: Component patterns, lifecycle hooks, middleware patterns

### V-TECH-003: Deprecated API Usage
**Detection**: Using deprecated methods from the project's own dependencies.
**Default severity**: 🟡 Should Fix
**Check**: Known deprecated APIs from project's dependency versions

## Directory Violations

### V-DIR-001: Wrong File Location
**Detection**: Files placed in directories that don't match project conventions.
- Tests in `src/` when project uses `tests/`
- Components in root when project uses `src/components/`
**Default severity**: 🟡 Should Fix
**Check**: File paths relative to project root

### V-DIR-002: Missing Directory Convention
**Detection**: New file type without a clear directory home in project conventions.
**Default severity**: 🔵 FYI
**Check**: File extensions not covered by recorded directory conventions

## Code Style Violations

### V-STYLE-001: Indentation Mismatch
**Detection**: Code indentation doesn't match project's configured style.
**Default severity**: 🔴 Must Fix (if .editorconfig exists) / 🟡 Should Fix (inferred)
**Check**: Leading whitespace in code lines

### V-STYLE-002: Quote Style Mismatch
**Detection**: String quotes don't match project's configured style.
**Default severity**: 🟡 Should Fix
**Check**: String literals (single `'` vs double `"`)

### V-STYLE-003: Import Order Violation
**Detection**: Import order doesn't follow project's convention.
**Default severity**: 🟡 Should Fix
**Check**: Sequence of import statements

### V-STYLE-004: Semicolon Mismatch
**Detection**: Semicolon usage doesn't match project's convention.
**Default severity**: 🟡 Should Fix
**Check**: End of statements in JS/TS code

### V-STYLE-005: Line Length Violation
**Detection**: Lines exceeding the project's max line length.
**Default severity**: 🟡 Should Fix
**Check**: Line character count

## Config Compliance Violations

### V-CONFIG-001: EditorConfig Violation
**Detection**: Code that violates rules in `.editorconfig`.
**Default severity**: 🔴 Must Fix
**Check**: indent_style, indent_size, end_of_line, trim_trailing_whitespace, insert_final_newline

### V-CONFIG-002: ESLint Rule Violation
**Detection**: Code that would trigger an ESLint error in the project.
**Default severity**: 🔴 Must Fix (error) / 🟡 Should Fix (warning)
**Check**: Project's ESLint configuration

### V-CONFIG-003: Prettier Formatting Violation
**Detection**: Code that doesn't match Prettier output for the project's config.
**Default severity**: 🟡 Should Fix
**Check**: Project's Prettier configuration

## CLAUDE.md Compliance Violations

### V-CLAUDE-001: Rule Violation
**Detection**: Code that contradicts a rule defined in CLAUDE.md.
**Default severity**: 🔴 Must Fix
**Check**: Each rule in CLAUDE.md's Active Rules section

### V-CLAUDE-002: Forbidden Pattern
**Detection**: Code that uses a pattern explicitly forbidden by CLAUDE.md.
**Default severity**: 🔴 Must Fix
**Check**: Forbidden patterns listed in project-context.md
