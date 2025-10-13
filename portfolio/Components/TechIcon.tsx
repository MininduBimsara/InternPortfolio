import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import * as simpleIcons from "simple-icons";
import { type SimpleIcon } from "simple-icons";

const iconMap: Record<string, keyof typeof simpleIcons> = {
  JavaScript: "siJavascript",
  TypeScript: "siTypescript",
  React: "siReact",
  "Node.js": "siNodedotjs",
  "Express.js": "siExpress",
  "Spring Boot": "siSpringboot",
  "Tailwind CSS": "siTailwindcss",
  MongoDB: "siMongodb",
  MySQL: "siMysql",
  Docker: "siDocker",
  Git: "siGit",
  AWS: "siAmazonwebservices",
  Azure: "siMicrosoftazure",
  Figma: "siFigma",
};

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon = ({ name, className = "" }: TechIconProps) => {
  // Custom Java SVG using Next.js Image component
  if (name === "Java") {
    return (
      <Image
        src="./icons/java.svg"
        alt="Java"
        width={48}  // Required for local images
        height={48} // Required for local images
        className={className}
        style={{ filter: "invert(70%) brightness(200%)" }} // Style is passed directly
      />
    );
  }

  const iconKey = iconMap[name];
  const icon: SimpleIcon | undefined = iconKey
    ? simpleIcons[iconKey]
       : undefined;

  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w.3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};

export default TechIcon;