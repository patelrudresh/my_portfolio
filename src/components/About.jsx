
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Download,
} from "lucide-react";

const technologies = [
  "Java",
  "React.js",
  "Spring Boot",
  "JavaScript",
  "Redux",
  "REST APIs",
  "Spring Data JPA",
  "JDBC",
  "Oracle DB",
  "SQL",
];

const details = [
  {
    icon: BriefcaseBusiness,
    label: "Current Role",
    value: "Associate System Engineer / Application Developer",
    color: "bg-[#F7D8C9] text-[#A45D42]",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Integrated MCA · RGPV",
    color: "bg-[#D8EEEE] text-[#497979]",
  },
  {
    icon: Code2,
    label: "Specialization",
    value: "Java Full Stack Development",
    color: "bg-[#F3DFBD] text-[#8A6840]",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#FFF9EF] px-5 py-24 text-[#292521] sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A45D42]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A45D42]">
              About Me
            </span>
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building digital experiences
            <span className="block text-[#A45D42]">
              with purpose &amp; precision.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#777069] sm:text-base">
            A little about my journey, the work I do, and the technology
            I use to turn ideas into useful digital products.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#E6D9CA] bg-white/80 p-6 shadow-[0_25px_70px_rgba(90,65,45,0.08)] backdrop-blur-xl sm:p-9"
          >
            <div className="relative">
              {/* Identity */}
              <div className="flex items-center gap-4 border-b border-[#E6D9CA] pb-7 sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F3DFBD] font-serif text-2xl font-semibold text-[#A45D42] sm:h-20 sm:w-20 sm:text-3xl">
                  RK
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                    Rudresh Kurmi
                  </h3>
                  <p className="mt-1 text-sm text-[#777069]">
                    Associate System Engineer / Application Developer
                  </p>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#777069]">
                    <MapPin size={14} className="shrink-0 text-[#A45D42]" />
                    Indore, Madhya Pradesh
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 py-7">
                <div className="rounded-2xl bg-[#FFF9EF] p-4 sm:p-5">
                  <p className="font-serif text-3xl font-semibold text-[#A45D42]">
                    2+
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#777069]">
                    Years of Experience
                  </p>
                </div>

                <div className="rounded-2xl bg-[#D8EEEE]/50 p-4 sm:p-5">
                  <p className="font-serif text-3xl font-semibold text-[#497979]">
                    MCA
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#777069]">
                    Integrated Degree
                  </p>
                </div>
              </div>

              {/* Professional Details */}
              <div className="space-y-5 border-t border-[#E6D9CA] pt-6">
                {details.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-[#777069]">
                          {item.label}
                        </p>
                        <p className="mt-0.5 break-words text-sm font-semibold text-[#292521]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Employment Timeline */}
              <div className="mt-6 rounded-2xl border border-[#E6D9CA] bg-[#FFF9EF] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A45D42]">
                  Professional Experience
                </p>
                <p className="mt-2 text-sm font-semibold text-[#292521]">
                  Shivarix IT Service
                </p>
                <p className="mt-1 text-xs text-[#777069]">
                  Nov 2024 – Present · Indore
                </p>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-base leading-8 text-[#777069] sm:text-lg">
              I'm Rudresh Kurmi, an{" "}
              <span className="font-semibold text-[#292521]">
                Associate System Engineer / Application Developer
              </span>{" "}
              specializing in Java Full Stack Development. I build
              web applications that combine responsive user interfaces
              with structured backend services.
            </p>

            <p className="mt-5 text-base leading-8 text-[#777069] sm:text-lg">
              At{" "}
              <span className="font-semibold text-[#292521]">
                Shivarix IT Service
              </span>
              , I work with Java, Spring Boot, React.js, Redux, Axios
              and Oracle Database. My experience includes developing
              application features, integrating APIs, managing frontend
              state, testing code and troubleshooting issues.
            </p>

            <p className="mt-5 text-base leading-8 text-[#777069] sm:text-lg">
              I completed my Integrated MCA from{" "}
              <span className="font-semibold text-[#292521]">
                Acropolis Institute of Technology and Research, Indore
              </span>
              , affiliated with RGPV, Bhopal, in July 2024. I enjoy
              learning new technologies, writing maintainable code
              and improving my problem-solving skills through practical work.
            </p>

            {/* Technologies */}
            <div className="mt-8 border-t border-[#E6D9CA] pt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A45D42]">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E6D9CA] bg-white px-3.5 py-2 text-xs font-medium text-[#777069] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A45D42] hover:text-[#A45D42] sm:px-4"
                  >
                    <Check size={13} className="shrink-0 text-[#A45D42]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="mt-8">
              <a
                href="/Resume_Rudresh.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-[#A45D42] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#A45D42]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F4E38]"
              >
                <Download size={16} />
                Download Resume
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-[#E6D9CA] bg-[#F3DFBD]/45 p-6 sm:p-9"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-serif text-2xl font-semibold sm:text-3xl">
                Code with clarity.
                <span className="text-[#A45D42]">
                  {" "}Build with purpose.
                </span>
              </p>

              <p className="mt-2 text-sm leading-6 text-[#777069]">
                Focused on quality, performance, maintainability and
                meaningful user experiences.
              </p>
            </div>

            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A45D42] text-white sm:flex">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
