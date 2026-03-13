import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const REQUIRED_ENV_VARS = ["NOTION_TOKEN", "NOTION_BUILD_DEV_JOURNAL_ID"];

for (const key of REQUIRED_ENV_VARS) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

const entryFile = process.argv[2];

if (!entryFile) {
  console.error("No journal entry file path was provided.");
  process.exit(1);
}

const entryPath = path.resolve(process.cwd(), entryFile);

function titleCase(value) {
  if (!value) return "";
  return String(value)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizeStatus(value) {
  if (!value) return undefined;
  const lower = String(value).trim().toLowerCase();

  if (["completed", "complete", "done"].includes(lower)) return "Completed";
  if (["in-progress", "in progress", "progress"].includes(lower))
    return "In progress";
  if (["not-started", "not started", "todo", "to-do"].includes(lower))
    return "Not started";

  return titleCase(value);
}

function normalizeBuildResult(value) {
  if (!value) return undefined;
  const lower = String(value).trim().toLowerCase();

  if (lower === "passed" || lower === "pass") return "Passed";
  if (lower === "failed" || lower === "fail") return "Failed";

  return titleCase(value);
}

function normalizeType(value) {
  if (!value) return undefined;
  return titleCase(value);
}

function toRichText(content) {
  return [
    {
      type: "text",
      text: {
        content,
      },
    },
  ];
}

function splitLongText(text, maxLength = 1800) {
  if (!text) return [];
  const chunks = [];
  let remaining = text.trim();

  while (remaining.length > maxLength) {
    let splitIndex = remaining.lastIndexOf(" ", maxLength);
    if (splitIndex <= 0) splitIndex = maxLength;
    chunks.push(remaining.slice(0, splitIndex).trim());
    remaining = remaining.slice(splitIndex).trim();
  }

  if (remaining.length > 0) {
    chunks.push(remaining);
  }

  return chunks;
}

function paragraphBlocks(text) {
  return splitLongText(text).map((chunk) => ({
    object: "block",
    type: "paragraph",
    paragraph: {
      rich_text: toRichText(chunk),
    },
  }));
}

function headingBlock(text) {
  return {
    object: "block",
    type: "heading_2",
    heading_2: {
      rich_text: toRichText(text),
    },
  };
}

function bulletBlock(text) {
  return {
    object: "block",
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: toRichText(text),
    },
  };
}

function markdownToBlocks(markdown) {
  const lines = markdown.split(/\r?\n/);
  const blocks = [];
  let paragraphBuffer = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return;
    const text = paragraphBuffer.join(" ").trim();
    if (text) {
      blocks.push(...paragraphBlocks(text));
    }
    paragraphBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      blocks.push(headingBlock(line.replace(/^#\s+/, "")));
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      blocks.push(headingBlock(line.replace(/^##\s+/, "")));
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      blocks.push(bulletBlock(line.replace(/^-+\s*/, "")));
      continue;
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();

  return blocks;
}

function buildTitle(frontmatter) {
  const project = frontmatter.project || "Project";
  const step = frontmatter.step || frontmatter.type || "Journal Update";
  return `${project} — ${step}`;
}

function buildCommitUrl(frontmatter) {
  if (frontmatter.commit_url) return frontmatter.commit_url;

  const repo = process.env.GITHUB_REPOSITORY;
  const sha = process.env.GITHUB_SHA;

  if (repo && sha) {
    return `https://github.com/${repo}/commit/${sha}`;
  }

  return undefined;
}

function buildChildren(frontmatter, bodyMarkdown) {
  const blocks = [];

  blocks.push(headingBlock("Metadata"));

  const metadataLines = [
    frontmatter.project ? `Project: ${frontmatter.project}` : null,
    frontmatter.project_slug
      ? `Project slug: ${frontmatter.project_slug}`
      : null,
    frontmatter.phase ? `Phase: ${frontmatter.phase}` : null,
    frontmatter.step ? `Step: ${frontmatter.step}` : null,
    frontmatter.type ? `Type: ${frontmatter.type}` : null,
    frontmatter.status ? `Status: ${frontmatter.status}` : null,
    frontmatter.tool ? `Original tools: ${frontmatter.tool}` : null,
    frontmatter.time_spent_hours
      ? `Time spent (hours): ${frontmatter.time_spent_hours}`
      : null,
    Array.isArray(frontmatter.files_changed) && frontmatter.files_changed.length
      ? `Files changed: ${frontmatter.files_changed.join(", ")}`
      : null,
    frontmatter.problem ? `Problem: ${frontmatter.problem}` : null,
    frontmatter.fix ? `Fix: ${frontmatter.fix}` : null,
    frontmatter.prompt_instruction
      ? `Prompt / Instruction: ${frontmatter.prompt_instruction}`
      : null,
    frontmatter.assistant_output_summary
      ? `Assistant output summary: ${frontmatter.assistant_output_summary}`
      : null,
    frontmatter.resolution ? `Resolution: ${frontmatter.resolution}` : null,
    frontmatter.cloudflare_url
      ? `Cloudflare URL: ${frontmatter.cloudflare_url}`
      : null,
  ].filter(Boolean);

  for (const line of metadataLines) {
    blocks.push(bulletBlock(line));
  }

  if (bodyMarkdown.trim()) {
    blocks.push(headingBlock("Journal Content"));
    blocks.push(...markdownToBlocks(bodyMarkdown));
  }

  return blocks.slice(0, 100);
}

async function main() {
  const fileContents = await fs.readFile(entryPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const title = buildTitle(frontmatter);
  const commitUrl = buildCommitUrl(frontmatter);

  const properties = {
    Title: {
      title: toRichText(title),
    },
    Date: {
      date: {
        start: frontmatter.date || new Date().toISOString().slice(0, 10),
      },
    },
    "Tool Used": {
      select: {
        name: "GitHub Action",
      },
    },
  };

  if (frontmatter.phase) {
    properties["Phase"] = {
      select: {
        name: String(frontmatter.phase),
      },
    };
  }

  if (frontmatter.step) {
    properties["Step"] = {
      rich_text: toRichText(String(frontmatter.step)),
    };
  }

  if (frontmatter.assistant_output_summary) {
    properties["Assistant Output Summary"] = {
      rich_text: toRichText(String(frontmatter.assistant_output_summary)),
    };
  }

  if (frontmatter.problem) {
    properties["Problem"] = {
      rich_text: toRichText(String(frontmatter.problem)),
    };
  }

  if (frontmatter.fix) {
    properties["Fix"] = {
      rich_text: toRichText(String(frontmatter.fix)),
    };
  }

  if (frontmatter.prompt_instruction) {
    properties["Prompt / Instruction"] = {
      rich_text: toRichText(String(frontmatter.prompt_instruction)),
    };
  }

  if (frontmatter.resolution) {
    properties["Resolution"] = {
      rich_text: toRichText(String(frontmatter.resolution)),
    };
  }

  const normalizedType = normalizeType(frontmatter.type);
  if (normalizedType) {
    properties["Type"] = {
      select: { name: normalizedType },
    };
  }

  const normalizedStatus = normalizeStatus(frontmatter.status);
  if (normalizedStatus) {
    properties["Status"] = {
      status: { name: normalizedStatus },
    };
  }

  const normalizedBuildResult = normalizeBuildResult(frontmatter.build_result);
  if (normalizedBuildResult) {
    properties["Build Result"] = {
      select: { name: normalizedBuildResult },
    };
  }

  if (Array.isArray(frontmatter.tags) && frontmatter.tags.length > 0) {
    properties["Tags"] = {
      multi_select: frontmatter.tags.map((tag) => ({
        name: String(tag),
      })),
    };
  }

  if (
    Array.isArray(frontmatter.files_changed) &&
    frontmatter.files_changed.length > 0
  ) {
    properties["Files Changed"] = {
      rich_text: toRichText(frontmatter.files_changed.join(", ")),
    };
  }

  if (
    frontmatter.time_spent_hours !== undefined &&
    frontmatter.time_spent_hours !== ""
  ) {
    const numberValue = Number(frontmatter.time_spent_hours);
    if (!Number.isNaN(numberValue)) {
      properties["Time Spent"] = {
        number: numberValue,
      };
    }
  }

  if (commitUrl) {
    properties["Commit URL"] = {
      url: commitUrl,
    };
  }

  if (frontmatter.cloudflare_url) {
    properties["Cloudflare URL"] = {
      url: frontmatter.cloudflare_url,
    };
  }

  const children = buildChildren(frontmatter, content);

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": "2026-03-11",
    },
    body: JSON.stringify({
      parent: {
        type: "data_source_id",
        data_source_id: process.env.NOTION_BUILD_DEV_JOURNAL_ID,
      },
      properties,
      children,
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    console.error("Notion API request failed.");
    console.error(JSON.stringify(payload, null, 2));
    process.exit(1);
  }

  console.log("Notion page created successfully.");
  console.log(`Page ID: ${payload.id}`);
  console.log(`Source file: ${entryFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
