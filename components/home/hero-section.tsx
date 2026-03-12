import { ArrowRight } from "lucide-react";
import { heroHighlights, heroStats, siteProfile } from "@/data/site";

export function HeroSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.38em] text-cyan-200/70">
            Portfolio | {siteProfile.domain}
          </p>
          <div className="space-y-3">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              {siteProfile.name}
              <span className="mt-3 block text-lg font-medium tracking-[0.24em] text-cyan-300 sm:text-xl">
                {siteProfile.alias}
              </span>
            </h1>
            <p className="text-lg text-slate-200 sm:text-xl">
              {siteProfile.role}
            </p>
          </div>
          <p className="max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            {siteProfile.introduction}
          </p>
          <p className="max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            {siteProfile.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/15"
          >
            View projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:text-white"
          >
            Contact me
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-slate-500">
                {stat.label}
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-100">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <aside className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(2,8,23,0.45)] sm:p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
        <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -right-12 bottom-0 h-28 w-28 rounded-full bg-fuchsia-400/10 blur-3xl" />

        <div className="relative space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
              Current focus
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Systems-first prototypes with strong moment-to-moment feel.
            </h2>
          </div>

          <ul className="space-y-3 text-sm text-slate-200">
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
