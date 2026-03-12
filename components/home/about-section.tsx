import { aboutHighlights, aboutParagraphs } from "@/data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start"
    >
      <div className="space-y-5 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            About
          </p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Building a portfolio that feels as technical as it is intentional.
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <aside className="rounded-[30px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_70px_rgba(2,8,23,0.35)]">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
          Snapshot
        </p>
        <div className="mt-5 space-y-4">
          {aboutHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
