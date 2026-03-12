import type { LucideIcon } from "lucide-react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { contactIntro, contactLinks } from "@/data/site";

const iconMap: Record<(typeof contactLinks)[number]["kind"], LucideIcon> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  cv: Download,
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start"
    >
      <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Contact
          </p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Open to collaborations, internships, and technical conversations.
          </h2>
          <p className="max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            {contactIntro}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.kind];

            return (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2.5 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      <aside className="rounded-[30px] border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-[0_24px_70px_rgba(6,182,212,0.12)]">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/70">
          Availability
        </p>
        <p className="mt-4 text-lg font-semibold text-cyan-50">
          Best reached by email for anything time-sensitive.
        </p>
        <p className="mt-3 text-sm leading-7 text-cyan-50/80">
          If you want to talk through a project, portfolio review, or role, I
          can point you to the most relevant work quickly.
        </p>
      </aside>
    </section>
  );
}
