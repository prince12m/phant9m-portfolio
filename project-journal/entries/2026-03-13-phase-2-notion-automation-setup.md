---
project: Phant9m Portfolio
project_slug: phant9m-portfolio
phase: Phase 2
step: Notion automation setup
type: Automation
status: completed
tool: ChatGPT, Manual, GitHub Actions
date: 2026-03-13
time_spent_hours:
tags: ["Notion", "GitHub Actions", "Automation", "Workflow", "Debugging"]
files_changed:
  - .github/workflows/sync-journal-to-notion.yml
  - scripts/sync-journal-to-notion.mjs
  - project-journal/templates/journal-entry-template.md
  - project-journal/templates/quick-entry-template.md
  - project-journal/README.md
build_result: passed
commit_sha:
commit_url:
cloudflare_url: https://phant9m.dev
problem: The initial GitHub-to-Notion journal sync workflow and script had multiple failures related to commit resolution, Notion target IDs, missing project rows, and relation property mismatches.
fix: Updated the GitHub Actions workflow, corrected Notion secret IDs, repaired the sync script, created the missing Project Master row, changed Build & Dev Journal Project to a relation, and added Project Master updates.
prompt_instruction: Build a long-route GitHub-to-Notion automation system for structured project journaling.
resolution: Journal entries now sync from the repo into Notion, link to the correct Project Master record, and update Project Master fields automatically.
assistant_output_summary: The Notion automation pipeline is now working with structured journal sync, project relation linking, and project-level updates.
---

# Summary

Set up the first working GitHub-to-Notion automation system for the portfolio project. The repo journal entries now act as the source of truth and sync into Notion through GitHub Actions.

# Detailed Notes

Created the Notion integration and connected it to the three databases: Project Master, Build & Dev Journal, and Session Log.

Added a project-journal folder in the repo with templates and entries. Built the first GitHub Actions workflow and a Node-based sync script to parse frontmatter and create structured Notion entries.

Resolved multiple failures related to commit history resolution in GitHub Actions, wrong Notion target IDs, schema mismatches, missing project rows, and relation property configuration.

Extended the sync pipeline so journal entries are linked to Project Master and Project Master updates automatically when a journal entry syncs.

# Code Snippets

Add important final workflow/script excerpts here later if needed.

# Errors Encountered

fatal: bad object 7d254bc2dbc9b4c0f66b59bddd94233aafda8f45

Notion API request failed.
{
"object": "error",
"status": 400,
"code": "validation_error",
"message": "Title is not a property that exists. Tool Used is not a property that exists. Type is not a property that exists. Status is not a property that exists. Build Result is not a property that exists. Tags is not a property that exists. Time Spent is not a property that exists. Commit URL is not a property that exists. Cloudflare URL is not a property that exists.",
"request_id": "2cff7b31-e699-45e7-b914-1d30aaa3cc8e"
}

ReferenceError: fileContents is not defined

No project found in Project Master with slug: phant9m-portfolio

Notion API request failed.
{
"object": "error",
"status": 400,
"code": "validation_error",
"message": "Project is expected to be rich_text.",
"request_id": "3f69bf39-95cc-44f8-ace7-cb9a0482f58f"
}

# Testing / Verification

- Workflow manual run succeeded
- Journal entry synced into Build & Dev Journal
- Project relation linked to Project Master
- Project Master updated automatically
- Existing portfolio site still live at phant9m.dev

# Next Step

Improve the Notion automation further and decide whether to automate Session Log or return focus to portfolio website feature development.
