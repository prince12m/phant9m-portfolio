import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const previewTech = project.tech.slice(0, 3);
  const remainingTechCount = project.tech.length - previewTech.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-950/90"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="absolute -right-12 top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/20" />

      <div className="relative flex h-full flex-col gap-6">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[0.7rem] uppercase tracking-[0.26em] text-slate-400">
            {project.tag}
          </p>
          <ProjectStatusBadge status={project.status} />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-100">
            {project.title}
          </h3>
          <p className="text-sm leading-7 text-slate-300">{project.summary}</p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {previewTech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
            {remainingTechCount > 0 && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                +{remainingTechCount} more
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition group-hover:gap-3">
            View project
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
