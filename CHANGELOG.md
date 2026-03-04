# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.1] - 2026-03-02

### Fixed

- Relax session ID validation from `z.string().uuid()` to `z.string()` in `janeSessionSchema`, `janeCommandSchema`, and `janeExecutionViewSchema` to support UUIDv7 and other ID formats

## [0.4.1] - 2026-02-28

### Changed

- Test publish from Jane's environment to verify GitHub Actions pipeline

## [0.4.0] - 2026-02-28

### Changed

- Moved repo from `black-sun-cafe` to `the-ansible` org
- Renamed package to `@the-ansible/life-system-shared`

## [0.3.0] - 2026-02-28

### Changed

- Renamed package from `@black-sun-cafe/shared` to `@black-sun-cafe/life-system-shared`

## [0.2.0] - 2026-02-27

### Added

- GitHub Actions workflow to publish to GitHub Packages on push to main
- `.npmrc` with `@life-system` scope registry mapping
- `publishConfig` and `repository` fields in package.json

### Changed

- Removed `"private": true` from package.json to enable npm publish (access control handled by GitHub repo visibility)

## [0.1.1] - 2026-02-27

### Added

- CLAUDE.md with build commands, architecture overview, and conventions for Claude Code
- GIT-COMMIT-CONVENTIONS.md with commit message format guidelines
- CHANGELOG.md

## [0.1.0] - 2026-02-27

### Added

- Initial extraction of `@life-system/shared` from monorepo
- Zod schemas for CommunicationEvent, Record, InboxLog, JaneCommand, and related types
- TypeScript type definitions inferred from schemas
- Shared constants for categories, inbox statuses, and confidence thresholds
- UUIDv7 re-export for time-sortable ID generation