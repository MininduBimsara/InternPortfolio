import HeroSection from "../Components/Hero";
import TechSkillsCarousel from "@/Components/TechSkillsCarousel";
import InteractiveProjectShowcase from "@/Components/InteractiveProjectShowcase";
import { projectData } from "@/data/projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechSkillsCarousel />
      <InteractiveProjectShowcase projects={projectData} />
      {/* <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection /> */}
    </>
  );
}
