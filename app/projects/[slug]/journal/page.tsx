import Link from "next/link";
import { ChevronLeft, NotebookText } from "lucide-react";
import { notFound } from "next/navigation";
import { getDevlogEntriesForProject } from "@/data/devlogs";
import { getAllProjectSlugs, getProject } from "@/data/projects";

type JournalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectJournalPage(props: JournalPageProps) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return notFound();
  }

  const entries = getDevlogEntriesForProject(slug);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-14">
      <section className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(2,8,23,0.4)] md:p-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Journal | {project.tag}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {project.title} dev journal
          </h1>
          <p className="max-w-3xl text-sm leading-8 text-slate-400 md:text-base">
            Notes, progress logs, and iteration details for this project.
          </p>
        </div>
      </section>

      {entries.length === 0 ? (
        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-sm leading-8 text-slate-300 md:text-base">
          No devlog entries yet. Updates will appear here as the project grows.
        </section>
      ) : (
        <section className="mt-8 space-y-5">
          {entries.map((entry) => (
            <article
              key={entry.id}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              <div className="relative space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      {new Date(entry.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                      {entry.title}
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                    <NotebookText className="h-5 w-5" />
                  </div>
                </div>

                {entry.summary && (
                  <p className="text-sm leading-7 text-slate-300 md:text-base">
                    {entry.summary}
                  </p>
                )}

                <div className="space-y-3 text-sm leading-8 text-slate-300 md:text-base">
                  {entry.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to project page
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 transition hover:text-cyan-200"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
