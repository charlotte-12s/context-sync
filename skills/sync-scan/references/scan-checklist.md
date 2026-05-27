# Scan Checklist

Use this checklist when running `/sync-scan` to ensure no project aspect is missed.

## Dependency Manifests

- [ ] Check for `package.json`
- [ ] Check for `pyproject.toml` or `setup.py` or `requirements.txt`
- [ ] Check for `go.mod`
- [ ] Check for `Cargo.toml`
- [ ] Check for `pom.xml` or `build.gradle`
- [ ] Record language, framework, and key dependencies

## Source Code Analysis

- [ ] Read 3-5 core source files
- [ ] Identify naming convention (camelCase / snake_case / PascalCase / kebab-case)
- [ ] Identify indentation style (2 spaces / 4 spaces / tabs)
- [ ] Identify import order pattern
- [ ] Identify comment style
- [ ] Identify quote preference (single / double)
- [ ] Identify semicolon usage (present / absent)
- [ ] Estimate max line length

## Directory Structure

- [ ] Map the top-level directory tree
- [ ] Identify source code location
- [ ] Identify test location
- [ ] Identify config location
- [ ] Identify documentation location
- [ ] Identify component/module organization pattern

## Configuration Files

- [ ] Check for `.editorconfig`
- [ ] Check for `.eslintrc*` or `eslint.config.*`
- [ ] Check for `.prettierrc*` or `prettier.config.*`
- [ ] Check for `ruff.toml` or `pyproject.toml [tool.ruff]`
- [ ] Check for `mypy.ini` or `pyproject.toml [tool.mypy]`
- [ ] Check for `tsconfig.json`
- [ ] Check for `.rubocop.yml`
- [ ] Record all enforced rules

## Project Rules

- [ ] Check for `CLAUDE.md` in project root
- [ ] Extract explicit rules
- [ ] Extract coding conventions
- [ ] Extract architecture decisions
- [ ] Extract forbidden patterns

## Output

- [ ] Generate `.claude/project-context.md` using the context template
- [ ] All `[auto]` sections filled
- [ ] `[manual]` section left empty for user customization
- [ ] Changelog entry added with today's date
