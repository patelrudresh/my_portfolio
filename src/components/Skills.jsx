import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
  ArrowUpRight,
} from "lucide-react";


const skillSections = [
  {
    number: "01",
    title: "Frontend Development",
    icon: Code2,
    description: "Responsive interfaces & reusable components",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    icon: Server,
    description: "Business logic, APIs & server-side development",
    skills: [
      "Core Java",
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
      "JDBC",
    ],
  },
  {
    number: "03",
    title: "Database",
    icon: Database,
    description: "SQL queries, data access & persistence",
    skills: [
      "SQL",
      "Oracle DB",
      "MySQL",
    ],
  },
  {
    number: "04",
    title: "Tools & Integration",
    icon: Wrench,
    description: "Version control, API integration & testing",
    skills: [
      "Git",
      "GitHub",
      "Axios",
      "Postman",
      "Maven",
      "Gradle",
      "JUnit",
    ],
  },
  {
    number: "05",
    title: "State Management",
    icon: Code2,
    description: "Managing application state and data flow",
    skills: [
      "Redux",
      "React Context API",
    ],
  },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#FFF9EF] px-5 py-24 text-[#292521] sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F7D8C9]/35 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D8EEEE]/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-[#E6D9CA] pb-10 lg:grid-cols-[1fr_0.65fr]"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#A45D42]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A45D42]">
                Skills & Expertise
              </span>
            </div>

            <h2 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              My technical
              <span className="block text-[#A45D42]">
                toolkit.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-md text-sm leading-7 text-[#777069] sm:text-base">
              A focused collection of technologies I use to create
              responsive interfaces, scalable APIs and reliable
              full-stack applications.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SKILLS LIST
        ====================================================== */}
        <div className="mt-4">
          {skillSections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group border-b border-[#E6D9CA] py-8 sm:py-10"
              >
                <div className="grid gap-6 lg:grid-cols-[90px_0.75fr_1.25fr] lg:items-center">

                  {/* Number */}
                  <div className="hidden lg:block">
                    <span className="font-serif text-4xl font-medium text-[#D8C9BA] transition-colors duration-300 group-hover:text-[#A45D42]">
                      {section.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#A45D42] shadow-sm ring-1 ring-[#E6D9CA] transition-all duration-300 group-hover:bg-[#A45D42] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                        {section.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#777069] sm:text-sm">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                    {section.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.15 + skillIndex * 0.04,
                        }}
                        className="rounded-full border border-[#DCCFC1] bg-white/60 px-4 py-2 text-xs font-medium text-[#5F5953] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A45D42] hover:bg-[#F7D8C9]/30 hover:text-[#A45D42] sm:text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM FEATURE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-[#E6D9CA] bg-white/55 p-7 backdrop-blur-md sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A45D42]">
                How I Work
              </span>

              <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Technology should make
                <span className="text-[#A45D42]">
                  {" "}
                  complexity feel simple.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#777069]">
                I focus on clean architecture, reusable components,
                maintainable code and experiences that feel effortless
                for the user.
              </p>
            </div>

            <a
              href="#projects"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border bg-[#A45D42]/25
  px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A45D42]"
            >
              Explore Projects

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            SMALL FOOTNOTE
        ====================================================== */}
        <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#A39A91]">
          <span>React · Java · Spring Boot</span>
          <span>Full Stack Development</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;