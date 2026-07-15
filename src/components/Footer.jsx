import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const logo = "/logo.webp";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
  <img
  src="/logo.webp"
  alt="Meghana Logo"
  className="h-16 w-auto object-contain"
/>

          <p className="mt-2 text-white/50">
            Software Engineer • Python Developer • React Developer
          </p>
        </motion.div>

        {/* Center */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-white/50 text-sm"
        >
          Made with <Heart size={16} className="text-red-500 fill-red-500" />
          by Meghana © {new Date().getFullYear()}
        </motion.p>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <a
            href="https://github.com/meghana-1703"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/muduthanapally-meghana-77baa7287/"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </motion.div>

      </div>
    </footer>
  );
}