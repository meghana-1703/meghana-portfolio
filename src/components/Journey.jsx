import { motion } from "framer-motion";

const journey = [
  {
    year: "2022 – 2026",
    title: "Bachelor of Technology",
    company: "Samskruti College of Engineering and Technology | JNTUH",
    description:
      "Graduated in Computer Science & Engineering with a specialization in Data Science. Built a strong foundation in Software Engineering, Web Development, Databases, Machine Learning, and Problem Solving.",
  },
  {
    year: "2025",
    title: "Emerging Technologies Training",
    company: "Code Unnati Program | Edunet Foundation | SAP",
    description:
      "Completed a 6-month Advanced Training Program focused on Artificial Intelligence, Machine Learning, IoT, and SAP Business Technology Platform (SAP BTP). Developed industry-oriented projects under expert mentorship.",
  },
  {
    year: "2025 – 2026",
    title: "Advanced Competitive Coding & SAP HANA Training",
    company: "Code Unnati Program | Edunet Foundation | CSR Initiative by SAP",
    description:
      "Successfully completed a Value Added Program covering Advanced Competitive Coding and SAP HANA. Strengthened analytical thinking, logical reasoning, enterprise technology concepts, and software development fundamentals.",
  },
  {
    year: "2025",
    title: "Machine Learning Intern",
    company: "Corizo",
    description:
      "Developed real-world Machine Learning applications using Python, Flask, Scikit-learn, Pandas, and NumPy. Built predictive models and gained practical experience in AI application development.",
  },
  {
    year: "2026",
    title: "UI/UX Design Intern",
    company: "Future Interns",
    description:
      "Designed premium web and mobile user interfaces using Figma principles. Built responsive UI projects with React.js and Tailwind CSS, including CRM Dashboard, Luxury Salon App, and Business Website designs.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 tracking-[6px] uppercase text-sm"
        >
          Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-5xl font-bold text-white"
        >
          Education, Training & Experience
        </motion.h2>

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10" />

          <div className="space-y-10">

            {journey.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-16"
              >

                {/* Circle */}

                <div className="absolute left-0 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 bg-[#0B1120]">
                  <div className="h-3 w-3 rounded-full bg-blue-400" />
                </div>

                {/* Card */}

                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">

                  <span className="text-sm font-medium text-blue-400">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg text-white/70">
                    {item.company}
                  </p>

                  <p className="mt-5 leading-8 text-white/60">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}