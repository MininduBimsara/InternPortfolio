"use client";

import React from "react";
import { ArrowUpRight, Award } from "lucide-react";
import {
  SiUdemy,
  SiAmazon,
  SiGithub,
  SiSololearn,
  SiMiro, // used as tech replacement for Microsoft
  SiImdb, // used as fallback for IBM
} from "react-icons/si";

// Define the TypeScript type for a single certification
// This data structure remains unchanged.
type Certification = {
  id: number;
  title: string;
  provider: string;
  issueDate: string;
  verifyUrl: string;
  logo: React.ElementType; // icon component
  category: string;
};

// Certification data remains unchanged.
const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Java for Beginners",
    provider: "Udemy",
    issueDate: "Jun 2024",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-36788f9ab-66c7-4be0-a58c-c251441d1239/",
    logo: SiUdemy,
    category: "Programming",
  },
  {
    id: 2,
    title: "AWS Educate: Introduction to Cloud 101",
    provider: "Amazon Web Services",
    issueDate: "May 2025",
    verifyUrl:
      "https://www.credly.com/badges/61212020-d6d2-4ea0-98f4-80ff390e1d45/public_url",
    logo: SiAmazon,
    category: "Cloud",
  },
  {
    id: 3,
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    issueDate: "Apr 2025",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/abeywardenamb-3331/achievements/pldz6534?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    logo: SiMiro, // visually close tech replacement for Microsoft
    category: "Cloud",
  },
  {
    id: 4,
    title: "JavaScript for Beginners",
    provider: "Alison",
    issueDate: "May 2024",
    verifyUrl: "https://alison.com/certification/check/331a01eb09",
    logo: Award, // fallback icon for Alison
    category: "Programming",
  },
  {
    id: 5,
    title: "Introduction to GitHub",
    provider: "Microsoft",
    issueDate: "May 2025",
    verifyUrl:
      "https://learn.microsoft.com/api/achievements/share/en-us/ABEYWARDENAMB-3331/BC6AJEUD?sharingId=699F40254D109152",
    logo: SiGithub,
    category: "Development Tools",
  },
  {
    id: 6,
    title: "Getting Started with Cybersecurity",
    provider: "IBM",
    issueDate: "Apr 2025",
    verifyUrl:
      "https://www.credly.com/badges/19971531-e85a-4eca-8a06-6ff35a311226e/public_url",
    logo: SiImdb, // fallback icon used for IBM
    category: "Security",
  },
  {
    id: 7,
    title: "Foundations of Artificial Intelligence",
    provider: "SoloLearn",
    issueDate: "Jun 2024",
    verifyUrl:
      "https://www.sololearn.com/certificates/course/en/ABEYWARDENAMB/1234567",
    logo: SiSololearn,
    category: "AI & Data",
  },
];

// Updated main component to match the UI of other sections
const CertificationsGallery = () => {
  return (
    <section
      id="certifications"
      className="py-32 px-6 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light mb-16 tracking-tight">
          CERTIFICATIONS
        </h2>

        {/* Container for timeline-style list, matching the Education section */}
        <div className="space-y-px bg-white/10">
          {certificationsData.map((cert) => (
            <a
              key={cert.id}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black p-8 md:p-12 hover:bg-white hover:text-black transition-all group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-4">
                {/* Left side: Provider & Date */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <p className="text-xl text-white group-hover:text-black transition-colors">
                    {cert.provider}
                  </p>
                  <p className="text-sm tracking-wider text-white/50 group-hover:text-black/50 transition-colors mt-1">
                    Issued: {cert.issueDate}
                  </p>
                </div>

                {/* Right side: Title & Verification Arrow */}
                <div className="w-full md:w-2/3 flex justify-between items-start gap-4">
                  <h3 className="text-3xl font-light tracking-tight text-white group-hover:text-black transition-colors">
                    {cert.title}
                  </h3>
                  <ArrowUpRight className="h-6 w-6 flex-shrink-0 text-white/50 group-hover:text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsGallery;
