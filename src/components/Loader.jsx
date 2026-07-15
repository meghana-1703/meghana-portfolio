import { motion } from "framer-motion";
import logo from "../assets/images/logo.webp";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#09090b]">

      <div className="text-center">

<motion.img
  src={logo}
  alt="Meghana Logo"
  initial={{
    opacity: 0,
    scale: 0.7,
    rotate: -10,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    rotate: 0,
  }}
transition={{
  duration: 1.2,
}}
 className="h-20 md:h-28 w-auto mx-auto object-contain"
/>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{
  duration: 2.4,
  ease: "easeInOut",
}}
className="mt-3 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
         transition={{
  delay: 0.8,
}}
          className="mt-2 text-white/50 tracking-[4px] text-sm"
        >
          CRAFTING DIGITAL EXPERIENCES...
        </motion.p>

      </div>

    </div>
  );
}