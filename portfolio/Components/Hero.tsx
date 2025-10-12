import { Github } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  return (
    <>
      {/* Animated Geometric Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10 bg-black">
        <svg className="absolute inset-0 w-full h-full ">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div
          className="absolute top-1/4 left-1/4 w-96 h-96"
          style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <polygon
              points="100,20 180,180 20,180"
              fill="none"
              stroke="white"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      {/* Hero Content Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-black">
        <div className="max-w-7xl w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="w-12 h-px bg-white" />
                <h1 className="text-7xl md:text-8xl font-light tracking-tighter leading-none">
                  DESIGN
                  <br />
                  <span className="font-bold">DEVELOP</span>
                  <br />
                  DELIVER
                </h1>
                <div className="w-12 h-px bg-white" />
              </div>
              <p className="text-lg text-white/70 max-w-md leading-relaxed">
                Intern Software Engineer crafting pixel-perfect interfaces and
                elegant code.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="px-6 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all text-sm tracking-wider"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <Image
                src="/black.png"
                alt="Portfolio"
                width={800}
                height={800}
                className="w-full rounded-sm"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
