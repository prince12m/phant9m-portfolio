import Link from "next/link";
import { ArrowUpRight, ChevronLeft, NotebookPen } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import { hasDevlogForProject } from "@/data/devlogs";
import { getAllProjectSlugs, getProject } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return notFound();
  }

  const showDevlogLink = hasDevlogForProject(slug);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-14">
      <section className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/80 shadow-[0_30px_80px_rgba(2,8,23,0.45)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
        <div className="absolute -left-12 top-10 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-3xl" />

        <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:p-10">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                Project | {project.tag}
              </p>
              <ProjectStatusBadge status={project.status} />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-sm leading-8 text-slate-300 md:text-base">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {showDevlogLink && (
                <Link
                  href={`/projects/${slug}/journal`}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/15"
                >
                  <NotebookPen className="h-4 w-4" />
                  Development journal
                </Link>
              )}

              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Project status
              </p>
              <ProjectStatusBadge status={project.status} className="mt-4" />
              <p className="mt-4 text-sm leading-7 text-slate-400">
                The project page, homepage card, and journal availability all
                come from the same shared data source.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Tech stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
        <article className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Overview
          </p>
          <div className="mt-5 space-y-4 text-sm leading-8 text-slate-300 md:text-base">
            {project.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="space-y-4">
          <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to portfolio
              </Link>
              {showDevlogLink && (
                <Link
                  href={`/projects/${slug}/journal`}
                  className="inline-flex items-center gap-2 text-slate-400 transition hover:text-cyan-200"
                >
                  <NotebookPen className="h-4 w-4" />
                  Open development journal
                </Link>
              )}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
