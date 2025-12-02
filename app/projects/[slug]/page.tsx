import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject, projects } from "../projectsData";

export function generateStaticParams() {
  // Tell Next which slugs to pre-render for static export
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 md:py-16 space-y-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-300"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          {project.tag}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{project.title}</h1>
        <p className="text-slate-300 text-sm md:text-base max-w-2xl">
          {project.summary}
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            Role & status
          </h2>
          <p className="text-sm text-slate-300">{project.role}</p>
          <p className="text-xs text-slate-400">
            Status:{" "}
            <span className="uppercase tracking-[0.18em] text-cyan-300">
              {project.status === "proto"
                ? "Prototype"
                : project.status === "in-progress"
                ? "In progress"
                : "Released"}
            </span>
          </p>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
          <h2 className="text-sm font-semibold text-slate-100">Tech stack</h2>
          <ul className="flex flex-wrap gap-2 text-xs">
            {project.tech.map((t) => (
              <li
                key={t}
                className="px-3 py-1 rounded-full border border-slate-700 bg-slate-950/60 text-slate-200"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-100">
          Highlights & responsibilities
        </h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {project.highlights.map((h) => (
            <li key={h}>• {h}</li>
          ))}
        </ul>
      </section>

      {project.links && project.links.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Links & media
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                <ExternalLink className="w-3 h-3" />
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
