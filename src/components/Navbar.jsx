import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
const logo = "/logo.webp";

export default function Navbar() {
  

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Journey", id: "journey" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];
const [active, setActive] = useState("home");
const [menuOpen, setMenuOpen] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (
        window.scrollY >= top &&
        window.scrollY < top + height
      ) {
        setActive(id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        w-[90%]
        max-w-5xl
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          px-6
          py-4
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        "
      >

        {/* Logo */}

       <a
  href="#home"
className="flex items-center pl-2"
>
  <img
    src={logo}
    alt="Meghana Logo"
      className="h-14 md:h-16 w-auto"
  />
</a>


        {/* Links */}

<div className="hidden lg:flex items-center gap-8">

  {navLinks.map((item) => (

    <a
      key={item.id}
      href={`#${item.id}`}
      className={`px-4 py-2 rounded-full transition-all duration-300 ${
  active === item.id
    ? "bg-white text-black"
    : "text-white/60 hover:text-white"
}`}
    >
      {item.name}
    </a>

  ))}

</div>


        {/* Resume Button */}

        <a
          href="/resume.pdf"
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-white
            text-black
            text-sm
            font-medium
            hover:scale-105
            transition
          "
        >

          Resume

          <ArrowUpRight size={16}/>

        </a>

{/* Mobile Menu Button */}

<button
  className="lg:hidden text-white"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={28}/> : <Menu size={28}/>}
</button>

{/* Mobile Navigation */}

{menuOpen && (
  <div className="
    absolute
    top-20
    left-0
    w-full
    rounded-2xl
    border
    border-white/10
    bg-black/80
    backdrop-blur-xl
    p-6
    lg:hidden
  ">

    <div className="flex flex-col gap-4">

      {navLinks.map((item)=>(
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={()=>setMenuOpen(false)}
          className="text-white/80 hover:text-white"
        >
          {item.name}
        </a>
      ))}

    </div>

  </div>
)}
      </div>


    </motion.nav>
  );
}