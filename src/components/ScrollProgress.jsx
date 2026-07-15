import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      right-0
      h-[3px]
      bg-gradient-to-r
      from-blue-500
      via-cyan-400
      to-violet-500
      origin-left
      z-[9999]
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}