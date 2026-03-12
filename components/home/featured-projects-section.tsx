import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
          Selected work
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Featured projects built around systems, feel, and iteration.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Each case study shares the same project source data, so the homepage
            preview and the detail page stay consistent as the portfolio grows.
          </p>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
