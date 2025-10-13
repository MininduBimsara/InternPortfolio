import HeroSection from "../Components/Hero";
import TechSkillsCarousel from "@/Components/TechSkillsCarousel";
import InteractiveProjectShowcase from "@/Components/InteractiveProjectShowcase";
import { projectData } from "@/data/projects";
import EducationTimeline from "@/Components/EducationTimeline";
import CertificationsGallery from "@/Components/CertificationsGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechSkillsCarousel />

      <InteractiveProjectShowcase projects={projectData} />
      <EducationTimeline />
      <CertificationsGallery />
      
    </>
  );
}
