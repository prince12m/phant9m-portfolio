# Project Journal System

This folder stores the source-of-truth journal entries for the Phant9m Portfolio project and future projects that use the same workflow.

## Structure

- `templates/`
  - reusable templates for writing entries
- `entries/`
  - real journal entries that can be synced to Notion via GitHub Actions

## File naming rule

Use this format:

`YYYY-MM-DD-phase-step-short-title.md`

Examples:

- `2026-03-12-phase-2-refactor-and-routing-fix.md`
- `2026-03-13-phase-2-journal-ui-polish.md`
- `2026-03-14-phase-3-auth-planning.md`

## Required frontmatter fields

These should usually be filled:

- `project`
- `project_slug`
- `phase`
- `step`
- `type`
- `status`
- `date`

## Recommended fields

Fill these whenever possible:

- `tool`
- `tags`
- `files_changed`
- `build_result`
- `problem`
- `fix`
- `prompt_instruction`
- `resolution`
- `assistant_output_summary`

## Logging rule

For major updates:

- create a new entry file
- keep errors word-for-word where possible
- include important files changed
- include the actual next step

## Sync rule

When ready, run the GitHub Action manually or push journal updates so they sync into Notion.
