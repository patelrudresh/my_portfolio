
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const technologies = [
    "React.js",
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "JavaScript",
    "Redux",
    "REST API",
    "Oracle SQL/Pl SQL",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF9EF] px-5 pt-[105px] text-[#292521] sm:px-8 lg:px-12 lg:pt-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F7D8C9]/40 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#D8EEEE]/45 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E6D9CA] bg-white/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-700 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-700" />
              </span>
              Available for Work
            </motion.div>

            <p className="mb-2 text-base font-medium tracking-wide text-[#777069] sm:text-lg">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="max-w-4xl font-serif text-[3.5rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              RUDRESH
              {/* <span className="block text-[#A45D42]">KURMI</span> */}
            </h1>

            {/* Role */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="h-px w-10 bg-[#A45D42]" />
              <p className="font-serif text-xl italic text-[#A45D42] sm:text-2xl">
                Java Full Stack Developer
              </p>
            </div>

            {/* Professional Summary */}
            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#777069] sm:text-base sm:leading-8">
               Application Developer at{" "}
              <span className="font-semibold text-[#292521]">
                  Shivarix IT Service 
              </span>
              , building web applications using{" "}
              <span className="font-semibold text-[#292521]">
                
                Java, Spring Boot, React.js
              </span>{" "}
              and REST APIs.
            </p>

            {/* Experience and Location */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#777069]">
              <span className="inline-flex items-center gap-2">
                <Sparkles size={15} className="text-[#A45D42]" />
                1+ Years Experience
              </span>

              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-[#A45D42]" />
                Indore, Madhya Pradesh, India
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#A45D42] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#A45D42]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F4E38]"
              >
                View My Work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/Resume_Rudresh.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-[#D9CABB] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#292521] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#A45D42] hover:text-[#A45D42]"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/patelrudresh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6D9CA] bg-white/70 text-[#292521] transition-all duration-300 hover:-translate-y-1 hover:bg-[#292521] hover:text-white"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/rudresh-kurmi-757303232"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6D9CA] bg-white/70 text-[#292521] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A45D42] hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </motion.div>

          {/* Right Developer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px] lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E6D9CA] bg-white/75 p-4 shadow-[0_25px_70px_rgba(90,65,45,0.10)] backdrop-blur-xl sm:p-7">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#E6D9CA] pb-2">
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#292521]">
                    Developer
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#777069]">
                    Creative · Technical · Curious
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7D8C9] text-[#A45D42]">
                  <Sparkles size={19} />
                </div>
              </div>

              {/* Code Window */}
              <div className="mt-6 rounded-2xl border border-[#E6D9CA] bg-[#FFF9EF] p-5">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D98B72]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EAB308]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9BCACA]" />
                  <span className="ml-auto text-[10px] text-[#777069]">
                    portfolio.jsx
                  </span>
                </div>

                <div className="space-y-3 break-words font-mono text-xs leading-6 sm:text-sm">
                  <p>
                    <span className="text-[#A45D42]">const</span>{" "}
                    <span className="text-[#292521]">developer</span>{" "}
                    <span className="text-[#777069]">=</span>{" "}
                    <span className="text-[#7B6A4B]">{"{"}</span>
                  </p>

                  <p className="pl-5">
                    <span className="text-[#777069]">name:</span>{" "}
                    <span className="text-[#A45D42]">"Rudresh Kurmi"</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#777069]">role:</span>{" "}
                    <span className="text-[#A45D42]">
                      "Application Developer"
                    </span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#777069]">company:</span>{" "}
                    <span className="text-[#292521]">" Shivarix IT Service</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#777069]">frontend:</span>{" "}
                    <span className="text-[#292521]">"React.js"</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#777069]">backend:</span>{" "}
                    <span className="text-[#292521]">"Java + Spring Boot"</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#777069]">database:</span>{" "}
                    <span className="text-[#292521]">"Oracle SQL /PLSQL"</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#777069]">experience:</span>{" "}
                    <span className="text-[#A45D42]">"1+ years"</span>
                  </p>

                  <p>
                    <span className="text-[#7B6A4B]">{"}"}</span>
                  </p>
                </div>
              </div>

              {/* Technology Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#E6D9CA] bg-white px-3 py-1.5 text-xs font-medium text-[#777069]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 border-t border-[#E6D9CA]  pt-4">
                <div className="border-r border-[#E6D9CA] text-center">
                  <p className="font-serif text-2xl font-semibold text-[#A45D42]">
                    1+
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-[#777069]">
                    Years
                  </p>
                </div>

                <div className="border-r border-[#E6D9CA] text-center">
                  <p className="font-serif text-2xl font-semibold text-[#A45D42]">
                    MCA
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-[#777069]">
                  Dual  Degree
                  </p>
                </div>

                <div className="text-center">
                  <p className="font-serif text-2xl font-semibold text-[#A45D42]">
                  Java
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-[#777069]">
                    Full Stack
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-[#777069] md:flex"
      >
        <span className="h-8 w-px bg-[#CDBEAE]" />
        Scroll to explore
      </motion.div>
    </section>
  );
};

export default Hero;
