import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Smartphone,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend",
    description: "Developing scalable backend services and REST APIs.",
    tech: ["Python", "Flask", "MySQL", "REST APIs"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Building intelligent and data-driven applications.",
    tech: [
      "Machine Learning",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Modern Android applications using Kotlin.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design",
      "KMP",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
            {/* Background Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage:
          `
          linear-gradient(#fff 1px, transparent 1px),
          linear-gradient(90deg,#fff 1px, transparent 1px)
          `,
          backgroundSize:"60px 60px"
        }}
      />
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-400 tracking-[6px] text-sm"
        >
          CORE TECHNOLOGIES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-5 text-5xl font-bold text-white"
        >
          Technologies I work with.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Icon className="text-blue-400" size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/60 leading-7">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}