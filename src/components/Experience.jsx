import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Code2,
  GraduationCap,
} from "lucide-react";



const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Shivarix IT Service",
    location: "Indore, Madhya Pradesh",
    duration: "Feb 2025 – Present",
    type: "Full-time",
    current: true,
    icon: BriefcaseBusiness,
    description:
      "Developing responsive web applications using React.js and Java-based backend technologies.",
    responsibilities: [
      "Developed responsive and reusable UI components using React.js.",
      "Integrated REST APIs using Axios and managed application state with Redux.",
      "Worked with Java, Spring Boot and SQL for full-stack application development.",
      "Implemented backend business logic using Spring Data JPA and JDBC.",
      "Contributed to debugging, feature development and code improvements.",
    ],
    technologies: [
      "React.js",
      "Java",
      "Spring Boot",
      "Redux",
      "Axios",
      "REST APIs",
      "Spring Data JPA",
      "SQL",
    ],
  },
  {
    id: 2,
    role: "React.js Development Intern",
    company: "CodeBetter",
    location: "Indore, Madhya Pradesh",
    duration: "Jan 2023 – Apr 2023",
    type: "Internship",
    current: false,
    icon: GraduationCap,
    description:
      "Gained practical experience in frontend development, API integration and CRUD operations.",
    responsibilities: [
      "Worked on frontend development tasks and application features.",
      "Built user interface components using React.js.",
      "Worked with REST API integration and CRUD operations.",
      "Improved debugging and problem-solving skills.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
       "JQuery",
      "HTML",
      "CSS",
      "Bootstrap",
      "Redux",
      "REST APIs",
    ],
  },
];


const Experience = () => {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-[#FFF9EF] px-5 py-8 text-[#292521] sm:px-8 lg:px-12 lg:py-8" >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#F7D8C9]/35 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#D8EEEE]/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl sm:mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A45D42]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A45D42]">
              My Journey
            </span>
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Professional
            <span className="block text-[#A45D42]">
              Experience.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#777069] sm:text-base sm:leading-8">
            My journey of learning, building and growing through software
            development and practical industry experience.
          </p>
        </motion.div>

        {/* Horizontal Experience Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-7">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="h-full min-w-0"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E6D9CA] bg-white/90 p-5 shadow-[0_12px_35px_rgba(90,65,45,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(90,65,45,0.10)] sm:p-6">
                  {/* Card Decoration */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#F7D8C9]/40 blur-3xl" />

                  <div className="relative flex flex-1 flex-col">
                    {/* Role and Icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {experience.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D8EEEE] px-3 py-1.5 text-[10px] font-semibold text-[#497979]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#497979]" />
                            Current Role
                          </span>
                        )}

                        <span className="rounded-full border border-[#E6D9CA] bg-[#FFF9EF] px-3 py-1.5 text-[10px] font-medium text-[#777069]">
                          {experience.type}
                        </span>
                      </div>

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          experience.current
                            ? "bg-[#A45D42] text-white"
                            : "bg-[#F3DFBD] text-[#A45D42]"
                        }`}
                      >
                        <Icon size={19} />
                      </div>
                    </div>

                    {/* Job Details */}
                    <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-[#292521] sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#A45D42]">
                      {experience.company}
                    </p>

                    <div className="mt-4 space-y-2.5 text-xs text-[#777069]">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={14}
                          className="shrink-0 text-[#A45D42]"
                        />
                        <span>{experience.duration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={14}
                          className="shrink-0 text-[#A45D42]"
                        />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <div className="my-5 h-px bg-[#E6D9CA]" />

                    {/* Description */}
                    <p className="text-sm leading-6 text-[#777069]">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-5">
                      <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A45D42]">
                        Key Responsibilities
                      </h4>

                      <ul className="space-y-2.5">
                        {experience.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs leading-6 text-[#777069] sm:text-sm"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A45D42]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-auto border-t border-[#E6D9CA] pt-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Code2
                          size={15}
                          className="text-[#A45D42]"
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A45D42]">
                          Technologies
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[#E6D9CA] bg-[#FFF9EF] px-2.5 py-1.5 text-[10px] font-medium text-[#777069] transition-colors hover:border-[#A45D42] hover:text-[#A45D42] sm:text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-[#E6D9CA] bg-[#F3DFBD]/40 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A45D42]">
                Always Evolving
              </p>

              <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                Learning. Building.
                <span className="text-[#A45D42]">
                  {" "}Improving.
                </span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#777069]">
                Focused on maintainable code, continuous learning and
                meaningful software solutions.
              </p>
            </div>

            <a
              href="#skills"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#A45D42] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F4E38]"
            >
              Explore My Skills
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;