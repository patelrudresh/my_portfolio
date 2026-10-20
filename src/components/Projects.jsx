
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Matrimonial Web Application",
    category: "Full Stack Web Application",
    description:
      "A matrimonial platform featuring responsive interfaces, profile management, search functionality and REST API integration.",
    technologies: ["React.js", "Redux", "Axios", "REST APIs","tailwind css","Springboot","Spring-data-Jpa","Sql"],
    accent: "peach",
    featured: true,
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "Tranquest UI",
    category: "Enterprise Web Application",
    description:
      "A transaction management interface with dashboards, transaction workflows and backend API integration.",
    technologies: ["React.js", "Spring Boot", "Oracle DB"],
    accent: "cyan",
    github: "https://github.com/patelrudresh/Transquent_project",
    demo: "",
  },
  {
    number: "03",
    title: "WorldWise",
    category: "React Application",
    description:
      "An interactive travel tracking application featuring map-based navigation, location data and reusable React components.",
    technologies: [
      "React.js",
      "React Leaflet",
      "Context API",
      "React Router",
    ],
    accent: "cream",
    github: "https://github.com/patelrudresh/WorldWise-",
    demo: "",
  },
  {
    number: "04",
    title: "Banking Application",
    category: "Full Stack Application",
    description:
      "A full-stack application built with React.js, Spring Boot and Oracle Database to support banking-related management workflows.",
    technologies: ["React.js", "Java", "Spring Boot", "Oracle DB"],
    accent: "cyan",
    github: "https://github.com/patelrudresh/Banking-application",
    demo: "",
  },
  {
    number: "05",
    title: "Student Management System",
    category: "Full Stack Application",
    description:
      "A student management application featuring CRUD operations, REST API integration, database connectivity and image upload support.",
    technologies: ["React.js", "Spring Boot", "REST APIs", "Oracle DB"],
    accent: "cream",
    github: "https://github.com/patelrudresh/Student-management-system",
    demo: "",
  },{
  number: "06",
  title: "Franx E-Commerce",
  category: "Web Application",
  description:
    "A web application project developed using JavaScript, focused on frontend functionality and interactive user experiences.",
  technologies: ["JavaScript", "HTML", "CSS"],
  accent: "cyan",
  github: "https://github.com/patelrudresh/shivarixIt_Intenshi_Franx",
  demo: "",
},
{
  number: "07",
  title: "E-Commerce Application",
  category: "E-Commerce Web Application",
  description:
    "An e-commerce project focused on product presentation, user interactions and a structured shopping interface.",
  technologies: ["React JS","Redux","JavaScript","Axios", "HTML", "CSS"],
  accent: "peach",
  github: "https://github.com/patelrudresh/e-commerce",
  demo: "",
},
{
    number: "08",
    title: "React Quiz Application",
    category: "Frontend Application",
    description:
      "An interactive quiz application built with React.js, focusing on reusable components and application state management.",
    technologies: ["React.js", "JavaScript", "CSS"],
    accent: "cyan",
    github: "https://github.com/patelrudresh/React-Quiz-Application",
    demo: "",
  },
  {
    number: "09",
    title: "Spring Security Demo",
    category: "Backend Application",
    description:
      "A Java and Spring Boot project demonstrating authentication and application security concepts.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT"],
    accent: "peach",
    github: "https://github.com/patelrudresh/Spring-security-demo",
    demo: "",
  },
  
  {
    number: "10",
    title: "Far Away Travel Packing List",
    category: "React Application",
    description:
      "A travel packing list app for adding items, managing quantities, marking items as packed, sorting the list and tracking progress.",
    technologies: ["React.js", "JavaScript", "CSS"],
    accent: "cream",
    github:
      "https://github.com/patelrudresh/Far-Away-Travel-Packing-List",
    demo: "",
  },
  
];

const accentStyles = {
  peach: {
    background: "bg-[#F7D8C9]",
    text: "text-[#A45D42]",
  },
  cyan: {
    background: "bg-[#D8EEEE]",
    text: "text-[#527D7D]",
  },
  cream: {
    background: "bg-[#F3DFBD]",
    text: "text-[#987344]",
  },
};

function ProjectLinks({ project }) {
  const hasLinks = project.github || project.demo;

  if (!hasLinks) return null;

  return (
    <div id="projects"
     className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E6D9CA] pt-5">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#292521] transition-colors hover:text-[#A45D42]"
        >
          <FaGithub size={17} />
          View Code
          <ArrowUpRight size={15} />
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live demo`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#292521] transition-colors hover:text-[#A45D42]"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const styles = accentStyles[project.accent] || accentStyles.peach;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.55,
        delay: (index % 2) * 0.08,
      }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-[#E6D9CA] bg-white/80 p-6 shadow-[0_15px_50px_rgba(90,65,45,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(90,65,45,0.10)] sm:p-8"
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${styles.background} opacity-50 blur-3xl`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span className="font-serif text-4xl text-[#D8C9BA]">
            {project.number}
          </span>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E6D9CA] bg-[#FFF9EF] transition-all duration-300 hover:border-[#A45D42] hover:bg-[#A45D42] hover:text-white"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>

        <p
          className={`mt-7 text-xs font-semibold uppercase tracking-[0.18em] ${styles.text}`}
        >
          {project.category}
        </p>

        <h3 className="mt-3 break-words font-serif text-2xl font-semibold leading-tight text-[#292521] sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#777069]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#E6D9CA] bg-[#FFF9EF] px-3 py-1.5 text-[11px] font-medium text-[#777069] sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

const Projects = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-[#FFF9EF] px-5 py-4 text-[#292521] sm:px-8 lg:px-12 lg:py-12"
    >
      {/* Background Decorations */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F7D8C9]/35 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#D8EEEE]/45 blur-3xl" />
      </div> */}

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 border-b border-[#E6D9CA] pb-10 lg:grid-cols-[1fr_0.65fr]"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#A45D42]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A45D42]">
                Selected Work
              </span>
            </div>

            <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Things I've
              <span className="block text-[#A45D42]">built.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-md text-sm leading-7 text-[#777069] sm:text-base">
              A selection of applications and interfaces showcasing my
              experience with frontend development, Java, Spring Boot
              and database integration.
            </p>
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-12"
        >
          <article className="group relative overflow-hidden rounded-[2rem] border border-[#E6D9CA] bg-white/80 shadow-[0_25px_70px_rgba(90,65,45,0.07)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Screenshot */}
              <div className="relative flex min-h-[300px] items-center  overflow-hidden bg-[#F7D8C9]/50 p-5 sm:p-8 lg:min-h-[430px]">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D8EEEE]/60 blur-3xl" />

                <div className="relative w-full overflow-hidden rounded-2xl border border-[#E6D9CA] bg-white shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2 border-b border-[#E6D9CA] bg-[#FFF9EF] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D98B72]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EAB308]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9BCACA]" />

                    <div className="ml-3 min-w-0 flex-1 truncate rounded-full bg-white px-3 py-1 text-[10px] text-[#777069]">
                      {featuredProject.title}
                    </div>
                  </div>

                  <div className="aspect-[4/3] overflow-hidden bg-white sm:aspect-[16/10]">
                    <img
                      src="/matrimonial-project.png"
                      alt="Preview of the Matrimonial Web Application"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Featured Project Details */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-4xl text-[#D8C9BA]">
                    {featuredProject.number}
                  </span>

                  <span className="rounded-full bg-[#F7D8C9] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#A45D42]">
                    Featured Project
                  </span>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#A45D42]">
                  {featuredProject.category}
                </p>

                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-6 text-sm leading-7 text-[#777069] sm:text-base">
                  {featuredProject.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#E6D9CA] bg-[#FFF9EF] px-3 py-1.5 text-xs font-medium text-[#777069]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ProjectLinks project={featuredProject} />
              </div>
            </div>
          </article>
        </motion.div>

        {/* Other Projects */}
        <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 border-t border-[#E6D9CA] pt-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-2xl font-semibold">
                Have a project in mind?
              </p>
              <p className="mt-1 text-sm text-[#777069]">
                Let's build something meaningful together.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start rounded-full bg-[#A45D42] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F4E38]"
            >
              Let's Talk
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
