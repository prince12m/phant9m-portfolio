import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { SkillsSection } from "@/components/home/skills-section";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-8 md:px-6 md:py-14 lg:gap-24">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
