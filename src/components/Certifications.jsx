import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
  title: "Letter of Recommendation",
  issuer: "Future Interns",
  year: "2026",
  description:
    "Awarded in recognition of outstanding performance, dedication, and contribution during the UI/UX Design Internship.",
  file: "/certificates/future-interns-lor.pdf",
  featured: true,
},
  {
    title: "Advanced Emerging Technologies",
    issuer: "Code Unnati • SAP • Edunet Foundation",
    year: "2025",
    file: "/certificates/emerging technologies.pdf",
  },
  {
    title: "Advanced Competitive Coding & SAP HANA",
    issuer: "Code Unnati • SAP • Edunet Foundation",
    year: "2026",
    file: "/certificates/advanced competitive.pdf",
  },
  {
    title: "Machine Learning",
    issuer: "Corizo",
    year: "2025",
    file: "/certificates/machine learning corizo.pdf",
  },

  {
    title: "Full Stack Web Development",
    issuer: "Mind Luster",
    year: "2025",
    file: "/certificates/fullstack mind luster.pdf",
  },
  {
    title: "UI/UX Design Internship",
    issuer: "Future Interns",
    year: "2026",
    file: "/certificates/future interns uiux.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 uppercase tracking-[6px] text-sm"
        >
          Credentials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-5xl font-bold text-white"
        >
          Certifications & Professional Learning
        </motion.h2>

        <p className="mt-6 max-w-2xl text-white/60 leading-8">
          Industry-recognized certifications and training programs completed
          across software engineering, AI, machine learning, enterprise
          technologies, and UI/UX design.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {certificates.map((certificate) => (

            <motion.div
              key={certificate.title}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8"
            >

              <div className="flex items-start justify-between">
{certificate.featured && (
  <div className="mt-5 inline-flex items-center rounded-full bg-amber-400/15 border border-amber-400/30 px-4 py-1">
    <span className="text-xs font-semibold tracking-wide text-amber-300">
      ⭐ FEATURED
    </span>
  </div>
)}
               

                <span className="text-sm text-blue-400">
                  {certificate.year}
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white">
                {certificate.title}
              </h3>

              <p className="mt-3 text-white/60">
                {certificate.issuer}
              </p>
<p className="mt-4 text-white/60 leading-7">
  {certificate.description}
</p>
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
              >
                {certificate.featured ? "View Recommendation" : "View Credential"}
                <ExternalLink size={16} />
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}