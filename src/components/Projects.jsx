import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Climate Change Land Suitability Prediction",
    description:
      "A Machine Learning powered web application that predicts agricultural land suitability using climate and environmental parameters.",
    stack: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "Machine Learning",
    ],
    gitHub:
      "https://github.com/meghana-1703/climate-change-land-suitability",
    
  },

  {
    number: "02",
    title: "NLP Web Text Classification",
    description:
      "Deep Learning based text classification system using BERT, BiGRU, CNN and Attention with a Flask web application.",
    stack: [
      "Python",
      "TensorFlow",
      "BERT",
      "Flask",
      "Deep Learning",
    ],
   
  },

  {
    number: "03",
    title: "Android Authentication App",
    description:
      "Modern authentication application built using Kotlin, Jetpack Compose and Material Design with login and registration screens.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design",
      "Android",
    ],
    gitHub:
      "https://github.com/meghana-1703/Android-Authentication-App",
    live: "",
  },

  {
    number: "04",
    title: "CRM Dashboard UI",
    description:
      "Premium CRM dashboard designed using React and Tailwind CSS with modern dashboard components and responsive layouts.",
    stack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "UI/UX",
    ],
    gitHub:
      "https://github.com/meghana-1703/FUTURE_UI-UX_3",
    live:
      "https://future-ui-ux-3.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-400 tracking-[6px] text-sm uppercase">
          Selected Work
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Projects that reflect my
          <br />
          engineering journey.
        </h2>

        <div className="mt-20 space-y-8">

          {projects.map((project) => (

            <motion.div
              key={project.number}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 transition-all"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

                <div className="lg:w-3/5">

                  <span className="text-blue-400 text-sm tracking-[4px]">
                    {project.number}
                  </span>

                  <h3 className="mt-4 text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-white/60 leading-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="flex flex-col justify-end gap-4">

                  {project.gitHub && (
                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 text-white hover:border-blue-500 transition"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-white hover:bg-blue-500 transition"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* More Projects */}

        <motion.div
          whileHover={{ y: -5 }}
          className="mt-12 rounded-[28px] border border-dashed border-white/10 p-8 text-center"
        >

          <h3 className="text-2xl font-semibold text-white">
            10+ Additional Projects
          </h3>

          <p className="mt-3 text-white/60">
            AI Image Generator • Disease Outbreak Prediction • Fraud Call Detection •
            Crop & Weed Detection • Binance Trading Bot • UI/UX Projects and more.
          </p>

          <a
            href="https://github.com/meghana-1703"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-8 items-center gap-2 rounded-xl bg-white px-6 py-3 text-black font-medium hover:scale-105 transition"
          >
            View GitHub Profile
            <ArrowUpRight size={18} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}