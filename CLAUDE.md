# ContextSync — Context-First Rules

These rules override default AI behaviors when working on any codebase. The goal: AI should never ignore, forget, or contradict your project's established conventions.

## The 8 Context-First Rules

### Rule 1: Read Before Write
**Do**: Always read files of the same type before modifying or creating any file.
**Don't**: Start writing code without checking what similar files look like in the project.
**If you catch yourself** writing code without reading existing examples → Stop and read the nearest similar file first.

### Rule 2: Follow Nearest Pattern
**Do**: Find the most similar existing implementation in the project and copy its pattern.
**Don't**: Invent a new pattern when the project already has an established one.
**If you catch yourself** creating a new approach → Stop and search for an existing pattern to follow.

### Rule 3: Respect Directories
**Do**: Place new files in the same directory as similar existing files.
**Don't**: Put files in arbitrary locations that break the project's organization.
**If you catch yourself** unsure where a file goes → Stop and check where similar files live.

### Rule 4: Match Naming Style
**Do**: Use the same naming convention (camelCase, snake_case, PascalCase) as the project.
**Don't**: Mix naming styles or use your default preference.
**If you catch yourself** naming something differently from the project's style → Stop and match the existing convention.

### Rule 5: Lock Tech Stack
**Do**: Only use libraries and frameworks already present in the project.
**Don't**: Introduce new dependencies without explicit user approval.
**If you catch yourself** importing a library not in the project → Stop and check if an existing dependency can do the job.

### Rule 6: Honor Config Rules
**Do**: Treat CLAUDE.md, .editorconfig, lint configs, and formatting rules as mandatory constraints.
**Don't**: Ignore project configuration files or treat them as suggestions.
**If you catch yourself** writing code that contradicts a config rule → Stop and comply with the rule.

### Rule 7: Stay Consistent
**Do**: Check that each response is consistent with decisions made earlier in the conversation.
**Don't**: Contradict earlier choices or silently change approaches mid-session.
**If you catch yourself** about to contradict a previous decision → Stop and either follow the earlier choice or explicitly propose the change.

### Rule 8: Declare Before Deviate
**Do**: Announce any deviation from existing patterns and explain why before implementing it.
**Don't**: Silently introduce changes that break from project conventions.
**If you catch yourself** about to do something different from the project's way → Stop and state: "This deviates from the project pattern because ___."

## Skill Activation

When the user's request matches a skill trigger, activate the corresponding skill:

- Scanning, analyzing, or extracting project conventions → use `sync-scan` skill
- Updating, syncing, or refreshing project context → use `sync-watch` skill
- Checking, validating, or enforcing compliance → use `sync-enforce` skill
