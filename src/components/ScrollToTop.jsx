import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          whileHover={{
            scale: 1.1,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
          fixed
          bottom-8
          right-8
          z-[9999]
          h-14
          w-14
          rounded-full
          border
          border-white/10
          bg-white/[0.06]
          backdrop-blur-xl
          flex
          items-center
          justify-center
          shadow-lg
          hover:border-blue-500
          hover:bg-blue-500/10
          transition-all
          "
        >
          <ChevronUp
            size={24}
            className="text-blue-400"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}