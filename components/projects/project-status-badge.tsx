import { getProjectStatusMeta, type ProjectStatus } from "@/data/projects";

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
  className?: string;
};

export function ProjectStatusBadge({
  status,
  className = "",
}: ProjectStatusBadgeProps) {
  const meta = getProjectStatusMeta(status);

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em]",
        meta.className,
        className,
      ].join(" ")}
    >
      {meta.label}
    </span>
  );
}
