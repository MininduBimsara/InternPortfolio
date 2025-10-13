"use client";

import React from "react";
import TechIcon from "./TechIcon";
import "../app/animations.css";

const techSkills: string[] = [
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Docker",
  "Git",
  "AWS",
  "Azure",
  "Figma",
  "PHP",
  "HTML5",
  "CSS3",
  "Redux",
  "Nextjs",
  "Framer",
  "RabbitMQ",
  "PayPal",
  "Nestjs",
];

const TechSkillsCarousel = () => {
  const extendedSkills = [...techSkills, ...techSkills];

  return (
    <section className="py-24 px-6 border-t border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl font-light tracking-widest text-white/50 uppercase mb-12">
          Technologies I Work With
        </h2>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
          }}
        >
          {/* Slower scroll - 90s duration */}
          <div className="flex w-max animate-[scroll_90s_linear_infinite]">
            {extendedSkills.map((skillName, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 flex flex-col items-center justify-center p-6 group"
              >
                <TechIcon
                  name={skillName}
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="mt-3 text-sm text-white/60 transition-colors duration-300 group-hover:text-white">
                  {skillName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkillsCarousel;
