// app/page.tsx

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { projects } from "./projects/projectsData";

const skills = [
  "Game Dev: Unity, Unreal Engine 5, Roblox Studio",
  "Languages: C#, C++, TypeScript, Lua",
  "Web: Next.js, React, Tailwind CSS",
  "Tools: Git/GitHub, Cloudflare, Linux",
  "Focus: Gameplay systems, combat, AI, movement",
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 md:py-16 space-y-16">
      {/* HERO */}
      <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Portfolio · phant9m.dev
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Prince Malonga
            <span className="block text-slate-400 text-xl md:text-2xl">
              aka <span className="text-cyan-400">Phant9m</span>
            </span>
          </h1>
          <p className="text-slate-300 max-w-xl">
            Game programmer and creative technologist. I build systems-heavy
            experiences across Roblox, Unity and Unreal — focusing on movement,
            combat, AI and immersive worlds you can actually feel.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-slate-600 text-sm hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <div className="relative w-full max-w-xs mx-auto">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-fuchsia-500/40 to-sky-500/40 blur-lg" />
            <div className="relative rounded-3xl border border-slate-700 bg-slate-900/70 p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Focus Areas
              </p>
              <ul className="text-sm space-y-1.5 text-slate-200">
                <li>• Advanced movement &amp; combat systems</li>
                <li>• Procedural levels &amp; AI behaviour</li>
                <li>• Portfolio-ready, polished prototypes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">What I work with</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Featured projects
          </h2>
          <p className="text-xs text-slate-400 uppercase tracking-[0.25em]">
            In progress · more coming
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-2xl border border-slate-700 bg-slate-900/70 p-4 flex flex-col justify-between hover:border-cyan-400/70 hover:-translate-y-1 transition"
            >
              <header className="space-y-2">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan-300">
                  {project.tag}
                </p>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.summary}</p>
              </header>

              <footer className="mt-4">
                <span className="inline-flex items-center gap-2 text-xs text-cyan-300 group-hover:gap-3 transition">
                  View case study
                </span>
              </footer>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">About me</h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          I&apos;m a London-based developer studying Games Programming and
          building a portfolio of systems-driven projects across engines and
          platforms. I enjoy designing movement, combat and AI as much as I
          enjoy polishing the final player experience.
        </p>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Outside of game dev, I explore cybersecurity, AI tools and creative
          media — everything that feeds back into building smarter, more
          reactive games.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="space-y-4 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold">Contact</h2>
        <p className="text-slate-300 text-sm md:text-base">
          For collaborations, opportunities or questions about any of my
          projects, you can reach me via email or LinkedIn. A current CV is also
          available.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:pmalonga2005@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <Mail className="w-4 h-4" />
            pmalonga2005@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/prince-m-9a0492214/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/prince12m"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="/cv/prince-malonga-cv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-500/20 transition"
          >
            Download CV (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
