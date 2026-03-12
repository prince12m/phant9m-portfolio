---
project: Phant9m Portfolio
project_slug: phant9m-portfolio
phase: Phase 2
step: Homepage refactor, project pages, and routing fixes
type: Refactor
status: completed
tool: ChatGPT, Codex, Claude, Manual
date: 2026-03-12
time_spent_hours:
tags: ["Refactor", "Routing", "Static Export", "Next.js", "Cloudflare"]
files_changed:
  - app/page.tsx
  - app/projects/[slug]/page.tsx
  - app/projects/[slug]/journal/page.tsx
  - app/projects/projectsData.ts
  - app/projects/devlogsData.ts
  - app/layout.tsx
  - app/globals.css
  - components/home/hero-section.tsx
  - components/home/skills-section.tsx
  - components/home/featured-projects-section.tsx
  - components/home/about-section.tsx
  - components/home/contact-section.tsx
  - components/projects/project-card.tsx
  - components/projects/project-status-badge.tsx
  - data/site.ts
  - data/projects.ts
  - data/devlogs.ts
build_result: passed
commit_sha:
commit_url:
cloudflare_url: https://phant9m.dev
problem: Dynamic project pages and static export compatibility caused repeated build/runtime issues in newer Next.js versions, especially around params handling and generateStaticParams.
fix: Refactored homepage into reusable components, centralized data into shared files, updated project routing, added generateStaticParams support, and adjusted dynamic route params handling for the installed Next.js version.
prompt_instruction: Refactor the portfolio into reusable Phase 2 structure while keeping static export compatibility and preserving working features.
resolution: Project pages, homepage, and devlog system now work locally with static export-compatible routing and reusable structure.
assistant_output_summary: Refactor completed successfully; homepage and project pages were reorganized into reusable components and shared typed data, and routing issues were resolved.
---

# Summary

Phase 2 refactor reorganized the portfolio into reusable homepage components, centralized site/project/devlog content, and improved project detail pages and journal pages. The biggest challenge was keeping everything compatible with static export and newer Next.js routing behaviour.

# Detailed Notes

The homepage was split into reusable components such as HeroSection, SkillsSection, FeaturedProjectsSection, AboutSection, and ContactSection. Shared data was moved into central files so the homepage and project pages use one source of truth.

Project pages were upgraded visually and structurally. The devlog system was added with journal routes per project. The project routing required several fixes because dynamic routes and static export behaved differently than expected in the installed Next.js version.

The final working fix used async params handling in the dynamic route page and preserved generateStaticParams for static export. This made the project pages render correctly while keeping Cloudflare Pages compatibility.

# Code Snippets

Add important code snippets here later if needed.

# Errors Encountered

- Duplicate projects constant conflict in app/page.tsx
- Dynamic route issues with static export
- Missing generateStaticParams
- Incorrect helper import/export names
- Newer Next.js params handling differences
- Build errors caused by partial pasted code and invalid placeholder content

# Next Step

Set up the GitHub-to-Notion automation workflow so future journal entries can be pushed automatically into Notion databases.
