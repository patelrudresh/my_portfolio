import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "prudresh66@gmail.com",
    href: "mailto:prudresh66@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6263502087",
    href: "tel:+916263502087",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, Madhya Pradesh",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF9EF] px-5 py-8 sm:px-8 lg:px-12"
    >
      {/* Background */}
      {/* <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F7D8C9]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#D8EEEE]/70 blur-3xl" /> */}

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A45D42]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A45D42]">
              Contact
            </span>
          </div>

          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[#292521] sm:text-5xl lg:text-6xl">
            Let’s build something
            <span className="text-[#A45D42]"> meaningful.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#777069] sm:text-base">
            Have a project, an opportunity, or simply want to connect?
            I’d love to hear from you. Send me a message and let’s start
            a conversation.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-[#E6D9CA] bg-white/75 p-7 shadow-[0_20px_60px_rgba(78,52,36,0.07)] backdrop-blur-xl sm:p-9"
          >
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777069]">
                Get in touch
              </p>

              <h3 className="mt-3 font-serif text-3xl text-[#292521]">
                Let’s talk.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#777069]">
                Whether you’re looking for a developer, discussing a
                collaboration, or exploring an idea, feel free to reach out.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 rounded-2xl border border-[#E6D9CA] bg-[#FFF9EF]/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#A45D42]/40 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7D8C9] text-[#A45D42]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-[#777069]">
                        {item.label}
                      </p>
                      <p className="mt-1 truncate text-sm font-semibold text-[#292521]">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="ml-auto text-[#777069] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A45D42]"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Social */}
            <div className="mt-10 border-t border-[#E6D9CA] pt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#777069]">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/patelrudresh"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6D9CA] bg-white text-[#292521] transition-all hover:border-[#A45D42] hover:bg-[#A45D42] hover:text-white"
                >
                  <FaGithub size={18} />
                </a>

                <a
                                href="https://www.linkedin.com/in/rudresh-kurmi-757303232"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6D9CA] bg-white text-[#292521] transition-all hover:border-[#A45D42] hover:bg-[#A45D42] hover:text-white"
                >
                  <FaLinkedinIn size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-[#E6D9CA] bg-white p-7 shadow-[0_20px_60px_rgba(78,52,36,0.07)] sm:p-9"
          >
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-[#D8EEEE] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#426464]">
                Start a conversation
              </span>

              <h3 className="mt-5 font-serif text-3xl text-[#292521] sm:text-4xl">
                Tell me about your idea.
              </h3>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#292521]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="enter your name"
                    className="w-full rounded-xl border border-[#E6D9CA] bg-[#FFF9EF]/60 px-4 py-3.5 text-sm text-[#292521] outline-none transition-all placeholder:text-[#aaa09a] focus:border-[#A45D42] focus:ring-2 focus:ring-[#A45D42]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#292521]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="enter your email"
                    className="w-full rounded-xl border border-[#E6D9CA] bg-[#FFF9EF]/60 px-4 py-3.5 text-sm text-[#292521] outline-none transition-all placeholder:text-[#aaa09a] focus:border-[#A45D42] focus:ring-2 focus:ring-[#A45D42]/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#292521]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project / Collaboration"
                  className="w-full rounded-xl border border-[#E6D9CA] bg-[#FFF9EF]/60 px-4 py-3.5 text-sm text-[#292521] outline-none transition-all placeholder:text-[#aaa09a] focus:border-[#A45D42] focus:ring-2 focus:ring-[#A45D42]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#292521]">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none rounded-xl border border-[#E6D9CA] bg-[#FFF9EF]/60 px-4 py-3.5 text-sm text-[#292521] outline-none transition-all placeholder:text-[#aaa09a] focus:border-[#A45D42] focus:ring-2 focus:ring-[#A45D42]/10"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#A45D42] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#A45D42]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f4e38]"
              >
                Send Message
                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 border-t border-[#E6D9CA] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-[#777069]">
            Open to exciting projects, collaborations & opportunities.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#A45D42]"
          >
            Back to top
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}