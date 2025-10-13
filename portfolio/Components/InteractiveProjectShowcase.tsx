// src/components/InteractiveProjectShowcase.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

// 1. Define the TypeScript type for a single project
export type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string; // URL or path to the project image
  description: string;
  techStack: string[];
  liveLink?: string; // Optional live project link
  repoLink?: string; // Optional repository link
};

// 2. Define the props for our component
interface InteractiveProjectShowcaseProps {
  projects: Project[];
}

const InteractiveProjectShowcase = ({
  projects,
}: InteractiveProjectShowcaseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!projects || projects.length === 0) {
    return (
      <section id="work" className="py-32 px-6">
        <p>No projects to display.</p>
      </section>
    );
  }

  const currentProject = projects[currentIndex];

  return (
    <section id="work" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light mb-16 tracking-tight">
          SELECTED WORK
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Project Image */}
          <div className="relative w-full aspect-[4/3] animate-fade-in">
            <Image
              key={currentProject.id}
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className="object-cover rounded-sm"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Right Side: Project Details */}
          <div className="relative">
            <div key={currentProject.id} className="animate-fade-in space-y-8">
              <div>
                <p className="text-sm text-white/50 mb-2">
                  {currentProject.category} • {currentProject.year}
                </p>
                <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                  {currentProject.title}
                </h3>
              </div>

              <p className="text-white/70 leading-relaxed">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-white/80 px-3 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                {currentProject.liveLink && (
                  <a
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 h-12 border border-white/30 hover:bg-white hover:text-black transition-all text-sm tracking-wider"
                  >
                    <ExternalLink className="w-4 h-4" /> LIVE DEMO
                  </a>
                )}
                {currentProject.repoLink && (
                  <a
                    href={currentProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute -bottom-20 md:-bottom-16 right-0 flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Next Project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProjectShowcase;
