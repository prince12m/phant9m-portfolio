// app/projects/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getAllProjectSlugs } from "../projectsData";
import { hasDevlogForProject } from "../devlogsData";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return notFound();
  }

  const showDevlogLink = hasDevlogForProject(slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 md:py-16 space-y-8">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
        Project · {project.tag}
      </p>

      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
        {project.status && (
          <p className="text-sm text-cyan-300 uppercase tracking-[0.2em]">
            {project.status}
          </p>
        )}
        {project.description && (
          <p className="text-slate-300 text-sm md:text-base">
            {project.description}
          </p>
        )}
      </header>

      {/* Optional extra long-form content if you add it later */}
      {project.content && project.content.length > 0 && (
        <section className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed">
          {project.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      )}

      {/* Optional links section */}
      {project.links && project.links.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* NEW: devlog link if entries exist */}
      {showDevlogLink && (
        <div className="pt-4">
          <Link
            href={`/projects/${slug}/journal`}
            className="text-sm text-cyan-300 hover:text-cyan-200 transition"
          >
            View development journal →
          </Link>
        </div>
      )}

      <div className="pt-8">
        <Link
          href="/"
          className="text-sm text-slate-400 hover:text-cyan-300 transition"
        >
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}
