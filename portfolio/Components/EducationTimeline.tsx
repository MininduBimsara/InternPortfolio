import React from "react";

// Define the type for a single education entry for type safety
type EducationItem = {
  dates: string;
  degree: string;
  institution: string;
  details: string[];
};

// Extract and structure education data from the resume
const educationHistory: EducationItem[] = [
  {
    dates: "2023 - Present",
    degree: "BSc (Hons) in Software Engineering",
    institution: "University of Kelaniya",
    details: [
      "Current GPA: 3.85/4.0",
      "Key Domains: Data Science and Machine Learning, Net-Centric Web Applications, Health Informatics",
    ],
  },
  {
    dates: "2022 - 2023",
    degree: "Pearson Diploma in Information Technology",
    institution: "ESOFT Metro Campus, Kegalle",
    details: [
      "Completed a foundational diploma focused on core IT principles and practices.",
    ],
  },
  {
    dates: "2021",
    degree: "G.C.E. Advanced Level - Physical Science",
    institution: "Trinity College Kandy",
    details: ["Results: 3 Bs", "Z-score: 1.5781"],
  },
];

const EducationTimeline = () => {
  return (
    // Section designed to match the 'Projects' or 'Skills' sections from the example
    <section id="education" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light mb-16 tracking-tight text-white">
          EDUCATION
        </h2>

        {/* Container for timeline items, matching the project list style */}
        <div className="space-y-px bg-white/10">
          {educationHistory.map((item, index) => (
            <div
              key={index}
              className="bg-black p-8 md:p-12 hover:bg-white hover:text-black transition-all group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-8">
                {/* Left side: Dates */}
                <div className="w-full md:w-1/4 flex-shrink-0">
                  <p className="text-sm tracking-wider text-white/50 group-hover:text-black/50 transition-colors">
                    {item.dates}
                  </p>
                </div>

                {/* Right side: Details */}
                <div className="w-full md:w-3/4">
                  <h3 className="text-3xl font-light tracking-tight text-white group-hover:text-black transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-lg text-white/70 group-hover:text-black/70 mt-2 mb-4 transition-colors">
                    {item.institution}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/60 group-hover:text-black/60 transition-colors">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
