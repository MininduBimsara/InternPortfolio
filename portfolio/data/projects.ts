// src/data/projects.ts
import { Project } from "@/components/InteractiveProjectShowcase";

export const projectData: Project[] = [
  {
    id: 1,
    title: "EventLanka",
    category: "Full Stack MERN Platform",
    year: "2025",
    image: "/Eventlanka.png",
    description:
      "A responsive event creation and ticket booking platform for Sri Lanka. Features include a user portal, organizer dashboard, admin panel, QR e-ticketing, and secure payments.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Redux",
      "JWT",
      "Google OAuth",
      "PayPal API",
    ],
    liveLink: "https://eventlanka.vercel.app",
    repoLink: "https://github.com/MininduBimsara/EventLanka",
  },
  {
    id: 2,
    title: "Haritha Ceylon",
    category: "Microservices Architecture",
    year: "2025",
    image: "/HarithaCeylon.png",
    description:
      "An eco-conscious MERN platform built using microservices with secure JWT authentication and Redux state management. The application is fully containerized using Docker and deployed with RabbitMQ.",
    techStack: [
      "Microservices",
      "MongoDB",
      "Express.js",
      "React (TypeScript)",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "RabbitMQ",
      "Docker",
    ],
    repoLink: "https://linktr.ee/minindubim",
  },
  {
    id: 3,
    title: "FuelWiseLK",
    category: "Java Full Stack Application",
    year: "2025",
    image: "/Home_Page.png",
    description:
      "A fuel quota system for vehicle owners and station operators in Sri Lanka, built with RESTful APIs, JWT authentication, and Twilio/Mailgun integration for notifications.",
    techStack: [
      "Spring Boot",
      "Java",
      "JPA",
      "MySQL",
      "React",
      "Tailwind CSS",
      "REST API",
    ],
    repoLink: "https://github.com/MininduBimsara/FuelWiseLK.git",
  },
  {
    id: 4,
    title: "SwiftConnect",
    category: "Courier Management Platform",
    year: "2024",
    image: "/swiftconnect.png",
    description:
      "A courier management platform featuring package tracking, rate calculation, and real-time logistics. Includes web-based admin tools with full CRUD features.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    repoLink: "https://github.com/MininduBimsara/SwiftConnect.git",
  },
];
