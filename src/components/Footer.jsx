import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
   { label: "Certificate", href: "#certificate" },

];

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.replaceState(null, "", href);
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#E6D9CA] bg-[#FFF9EF]">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#F7D8C9]/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#D8EEEE]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:py-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="inline-block"
            >
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-[#292521]">
                RUDRESH
                <span className="text-[#A45D42]">.</span>
              </h2>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#777069]">
              Java Full Stack Developer focused on building thoughtful,
              scalable and user-friendly digital experiences with React,
              Java and Spring Boot.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              <a
                href="https://github.com/patelrudresh"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6D9CA] bg-white text-[#292521] transition-all duration-300 hover:-translate-y-1 hover:border-[#A45D42] hover:bg-[#A45D42] hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/rudresh-kurmi-757303232"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6D9CA] bg-white text-[#292521] transition-all duration-300 hover:-translate-y-1 hover:border-[#A45D42] hover:bg-[#A45D42] hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A45D42]">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="group flex items-center gap-1.5 py-1 text-sm text-[#777069] transition-colors hover:text-[#A45D42]"
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Let's Talk */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A45D42]">
              Let's Connect
            </p>

            <h3 className="max-w-xs font-serif text-2xl leading-tight text-[#292521]">
              Have an idea?
              <br />
              Let's make it happen.
            </h3>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#A45D42] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#A45D42]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f4e38]"
            >
              Start a conversation

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-[#E6D9CA] py-6 text-xs text-[#777069] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rudresh Kurmi. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Designed & built with
            <Heart
              size={13}
              fill="currentColor"
              className="text-[#A45D42]"
            />
            using React
          </p>

          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="group flex items-center gap-1.5 font-medium text-[#292521] transition-colors hover:text-[#A45D42]"
          >
            Back to top

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}