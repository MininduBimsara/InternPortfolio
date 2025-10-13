import React from "react";
import Image from "next/image";
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
  PHP: "siPhp",
  HTML5: "siHtml5",
  CSS3: "siCss3",
  Redux: "siRedux",
  Nextjs: "siNextdotjs",
  Framer: "siFramer",
  RabbitMQ: "siRabbitmq",
  PayPal: "siPaypal",
  Nestjs: "siNestjs",
};

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon = ({ name, className = "" }: TechIconProps) => {
  if (name === "Java") {
    return (
      <Image
        src="/icons/java.svg" // Make sure it's under /public/icons/java.svg
        alt="Java"
        width={48}
        height={48}
        className={className}
        style={{ filter: "invert(70%) brightness(200%)" }}
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
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={icon.hex || "currentColor"} // Use brand color or fallback
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};

export default TechIcon;
