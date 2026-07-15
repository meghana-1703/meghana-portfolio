import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);
 if (loading) {
    return <Loader />;
  }
  return (
<div className="relative min-h-screen bg-[#09090b] text-white overflow-x-hidden">

  {/* Global Background Grid */}
  <div
    className="fixed inset-0 opacity-[0.04] pointer-events-none -z-10"
    style={{
      backgroundImage: `
        linear-gradient(#fff 1px, transparent 1px),
        linear-gradient(90deg, #fff 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;