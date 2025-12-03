// app/projects/[slug]/journal/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getAllProjectSlugs } from "../../projectsData";
import { getDevlogEntriesForProject } from "../../devlogsData";

type JournalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectJournalPage(props: JournalPageProps) {
  const { slug } = await props.params;

  const project = getProject(slug);
  if (!project) return notFound();

  const entries = getDevlogEntriesForProject(slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 md:py-16 space-y-8">
      {/* HEADER */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Journal · {project.tag}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">
          {project.title} – Devlog
        </h1>
        <p className="text-sm text-slate-400">
          Notes, progress logs and experiments for this project.
        </p>
      </header>

      {/* ENTRIES */}
      {entries.length === 0 ? (
        <p className="text-slate-300 text-sm md:text-base">
          No devlog entries yet. I&apos;ll start logging updates for this
          project soon.
        </p>
      ) : (
        <section className="space-y-6">
          {entries.map((entry) => (
            <article
              key={entry.id}
              className="relative rounded-2xl border border-slate-700 bg-slate-900/70 p-5 space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                {new Date(entry.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-lg font-semibold">{entry.title}</h2>
              {entry.summary && (
                <p className="text-sm text-slate-300">{entry.summary}</p>
              )}
              <div className="mt-2 space-y-2 text-sm md:text-base text-slate-200 leading-relaxed">
                {entry.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}

      {/* LINKS */}
      <div className="pt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href={`/projects/${slug}`}
          className="text-slate-400 hover:text-cyan-300 transition"
        >
          ← Back to project page
        </Link>
        <Link
          href="/"
          className="text-slate-500 hover:text-cyan-300 transition"
        >
          ← Back to portfolio home
        </Link>
      </div>
    </main>
  );
}
