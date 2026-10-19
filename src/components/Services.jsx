import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  Layers3,
  Cable,
  Smartphone,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "React.js Development",
    description:
      "Building modern, responsive and reusable React interfaces with clean component architecture and smooth user experiences.",
    icon: Code2,
    tags: ["React.js", "JavaScript", "Tailwind CSS","Html-Css","Bootstrap"],
    accent: "peach",
  },

  {
    number: "02",
    title: "Java Full Stack Development",
    description:
      "Developing complete web applications with Java, Spring Boot, REST APIs, database integration and modern frontend technologies.",
    icon: Layers3,
    tags: ["Java", "Spring Boot", "SQL","Spring-Data-Jpa"],
    accent: "cyan",
  },

  {
    number: "03",
    title: "REST API Integration",
    description:
      "Connecting frontend applications with reliable REST APIs using Axios, handling data flow, state management and API responses.",
    icon: Cable,
    tags: ["Fetch","Axios", "REST API", "Redux"],
    accent: "cream",
  },

  {
    number: "04",
    title: "Responsive Web Development",
    description:
      "Creating responsive interfaces that provide a consistent experience across desktop, tablet and mobile devices.",
    icon: Smartphone,
    tags: ["Responsive UI", "CSS", "Tailwind"],
    accent: "peach",
  },
];

const accentStyles = {
  peach: {
    icon: "bg-[#F7D8C9] text-[#A45D42]",
    number: "text-[#D8B7A6]",
  },
  cyan: {
    icon: "bg-[#D8EEEE] text-[#527D7D]",
    number: "text-[#B8CECE]",
  },
  cream: {
    icon: "bg-[#F3DFBD] text-[#987344]",
    number: "text-[#D8C4A0]",
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-[#FFF9EF] px-5 py-24 text-[#292521] sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D8EEEE]/40 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F7D8C9]/40 blur-3xl" />
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
                What I Do
              </span>
            </div>

            <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Turning ideas
              <span className="block text-[#A45D42]">
                into experiences.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-md text-sm leading-7 text-[#777069] sm:text-base">
              From frontend interfaces to backend systems, I build
              thoughtful digital products with a strong focus on
              usability, performance and clean code.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SERVICES
        ====================================================== */}
        <div className="mt-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const styles = accentStyles[service.accent];

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group relative border-b border-[#E6D9CA] py-9 sm:py-11"
              >
                <div className="grid gap-7 lg:grid-cols-[90px_0.85fr_1fr_auto] lg:items-center">

                  {/* Number */}
                  <div className="hidden lg:block">
                    <span
                      className={`font-serif text-4xl font-medium transition-colors duration-300 group-hover:text-[#A45D42] ${styles.number}`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 ${styles.icon}`}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#A39A91] lg:hidden">
                        Service {service.number}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="max-w-xl text-sm leading-7 text-[#777069] sm:text-base">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="hidden lg:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E6D9CA] bg-white/60 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#A45D42] group-hover:bg-[#A45D42] group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2 lg:ml-[90px]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E6D9CA] bg-white/60 px-3.5 py-1.5 text-[11px] font-medium text-[#777069] transition-all duration-300 hover:border-[#A45D42] hover:bg-[#F7D8C9]/30 hover:text-[#A45D42]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Arrow */}
                <div className="absolute bottom-9 right-0 flex lg:hidden">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6D9CA] text-[#A45D42]">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            PROCESS STRIP
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-[#E6D9CA] bg-white/60 p-7 backdrop-blur-md sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A45D42]">
                My Approach
              </span>

              <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Simple process.
                <span className="block text-[#A45D42]">
                  Meaningful results.
                </span>
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Understand", "Understand the idea and requirements."],
                ["02", "Build", "Design and develop the right solution."],
                ["03", "Refine", "Test, improve and deliver."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl bg-[#FFF9EF] p-5"
                >
                  <span className="font-serif text-2xl text-[#A45D42]">
                    {number}
                  </span>

                  <h4 className="mt-4 font-semibold">
                    {title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-[#777069]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col gap-5 border-t border-[#E6D9CA] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-serif text-2xl font-semibold">
              Have an idea worth building?
            </p>

            <p className="mt-1 text-sm text-[#777069]">
              Let's turn it into something real.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-[#A45D42] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F4E38]"
          >
            Start a Conversation
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;