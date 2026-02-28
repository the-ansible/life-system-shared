# Git Commit Conventions

## Overview
This document defines the git commit message conventions for this project.

## Commit Message Format

### 1. Check for Project Conventions
Before creating a commit, check for:
- `.gitmessage` file in the repository root
- `CONTRIBUTING.md` guidelines
- Recent commit history patterns (use `git log` to review)

### 2. Default Format (if no specific convention exists)

#### Structure
```
<type>: <subject>

<body>

<footer>
```

#### Type
Choose from:
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `perf`: Performance improvements
- `chore`: Maintenance tasks

#### Subject
- Use imperative mood ("add" not "added")
- Don't capitalize first letter
- No period at the end
- Maximum 50 characters

#### Body
- Explain the "why" not the "what"
- Wrap at 72 characters
- Can include multiple paragraphs

#### Footer (Optional)
- References to issues
- Breaking changes
- Co-authorship (if appropriate for the project)

### 3. Example Commit Messages

#### Simple commit
```
fix: resolve deadlock in bluetooth discovery

The mutex acquisition order was inconsistent between
discovery start and device found handlers, causing
occasional deadlocks.
```

#### With co-author (if project uses this convention)
```
feat: implement event-driven audio mixer

Replaced mutex-based synchronization with event queue
to eliminate contention between adapter threads.

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Important Notes

1. **No hardcoded formats** - Always check project conventions first
2. **No emojis by default** - Only use if project already uses them
3. **Co-authorship is optional** - Include only if appropriate for the project
4. **Focus on clarity** - The message should explain why the change was made