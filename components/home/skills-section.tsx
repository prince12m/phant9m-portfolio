import { Cpu, Gamepad2, Wrench } from "lucide-react";
import { skillCategories } from "@/data/site";

const icons = [Gamepad2, Cpu, Wrench, Cpu];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
          Core stack
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Tools and disciplines I reach for most often.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            The focus stays on clean foundations, readable systems, and building
            enough polish for the work to speak for itself.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = icons[index] ?? Cpu;

          return (
            <article
              key={category.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(2,8,23,0.24)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    {category.title}
                  </p>
                  <p className="text-sm leading-7 text-slate-300">
                    {category.description}
                  </p>
                </div>
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
