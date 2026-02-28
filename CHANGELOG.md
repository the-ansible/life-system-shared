# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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