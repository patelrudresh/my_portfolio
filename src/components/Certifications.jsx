
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  ExternalLink,
  FileBadge,
} from "lucide-react";

const certificates = [
  {
    number: "01",
    title: "Java Full Stack Development",
    issuer: "Your Training Institute",
    date: "Add completion date",
    description:
      "Training and learning in Java, backend development, databases and full-stack application development.",
    file: "/public/certificate-1.pdf",
    accent: "bg-[#F7D8C9]",
  },
  {
    number: "02",
    title: "Web Development",
    issuer: "Your Certificate Provider",
    date: "Add completion date",
    description:
      "Practical learning in web technologies and building responsive, user-friendly applications.",
    file: "/public/certificate-02.pdf",
    accent: "bg-[#D8EEEE]",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#FFF9EF] px-5 py-8 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F7D8C9]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#D8EEEE]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A45D42]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A45D42]">
              Certifications
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#292521] sm:text-5xl lg:text-6xl">
              Learning that
              <span className="text-[#A45D42]"> moves me forward.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#777069]">
              A few milestones that reflect my commitment to continuous
              learning and professional growth.
            </p>
          </div>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group overflow-hidden rounded-[2rem] border border-[#E6D9CA] bg-white/85 p-5 shadow-[0_15px_45px_rgba(78,52,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(78,52,36,0.11)] sm:p-7"
            >
              {/* Preview Area */}
              <div
                className={`relative flex min-h-52 items-center justify-center overflow-hidden rounded-2xl ${certificate.accent}`}
              >
                <div className="absolute left-4 top-4 text-xs font-semibold tracking-widest text-[#777069]">
                  CERTIFICATE / {certificate.number}
                </div>

                <div className="flex flex-col items-center px-5 py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/70 bg-white/75 text-[#A45D42] shadow-sm">
                    <Award size={34} strokeWidth={1.4} />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777069]">
                    Certificate of Achievement
                  </p>

                  <h3 className="mt-3 max-w-sm font-serif text-xl text-[#292521] sm:text-2xl">
                    {certificate.title}
                  </h3>

                  <div className="mt-4 h-px w-16 bg-[#A45D42]/50" />
                </div>

                <FileBadge
                  size={24}
                  className="absolute bottom-4 right-4 text-[#A45D42]/60"
                />
              </div>

              {/* Details */}
              <div className="px-1 pb-1 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A45D42]">
                      Issued by
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#292521]">
                      {certificate.issuer}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-[#E6D9CA] px-3 py-1.5 text-xs text-[#777069]">
                    {certificate.date}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#777069]">
                  {certificate.description}
                </p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-2 rounded-full bg-[#A45D42] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#8F4E38]"
                >
                  View Certificate
                  <ExternalLink
                    size={15}
                    className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-center gap-4 rounded-2xl border border-[#E6D9CA] bg-white/60 p-5 sm:p-6"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3DFBD] text-[#A45D42]">
            <Award size={23} />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-[#292521]">
              Always learning, always growing.
            </h4>
            <p className="mt-1 text-sm leading-6 text-[#777069]">
              I believe consistent learning is an essential part of becoming
              a better developer.
            </p>
          </div>

          <ArrowUpRight
            size={20}
            className="hidden shrink-0 text-[#A45D42] sm:block"
          />
        </motion.div>
      </div>
    </section>
  );
}