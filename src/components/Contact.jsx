import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      form.current.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      alert("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-20 left-0 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-violet-600/10 blur-[150px]" />

      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            Contact
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-bold leading-tight">

            Let's Build
            <br />

            Something Amazing.

          </h2>

          <p className="mt-8 text-white/60 leading-8 max-w-xl">

            I'm actively looking for opportunities as a
            Software Engineer, Full Stack Developer,
            Frontend Developer, Python Developer and
            AI / Machine Learning Engineer.

            If you think I'd be a good fit for your team,
            I'd love to hear from you.

          </p>

          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            <Download size={18} />
            Download Resume
          </a>

          {/* Contact Cards */}

          <div className="mt-14 space-y-5">

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

                <Mail className="text-blue-400" />

              </div>

              <div>

                <p className="text-white/40 text-sm">
                  Email
                </p>

                <p className="text-white">
                  m.meghana1225@gmail.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

                <Phone className="text-blue-400" />

              </div>

              <div>

                <p className="text-white/40 text-sm">
                  Phone
                </p>

                <p className="text-white">
                  +91 7671881782
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

                <MapPin className="text-blue-400" />

              </div>

              <div>

                <p className="text-white/40 text-sm">
                  Location
                </p>

                <p className="text-white">
                  Hyderabad, India
                </p>

              </div>

            </div>

          </div>

          {/* Social */}

          <div className="flex gap-5 mt-12">

            <a
              href="https://github.com/meghana-1703"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-blue-500 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/muduthanapally-meghana-77baa7287"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-blue-500 transition"
            >
              <FaLinkedin size={22} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE FORM */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
                      <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 lg:p-10"
          >

            <h3 className="text-3xl font-bold">
              Send me a message
            </h3>

            <p className="mt-3 text-white/50 leading-7">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-6">

              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Full Name
                </label>

                <input
                  name="from_name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-blue-500
                  "
                />

              </div>

              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Email Address
                </label>

                <input
                  name="from_email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-blue-500
                  "
                />

              </div>

              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Company
                </label>

                <input
                  name="company"
                  type="text"
                  placeholder="Company (Optional)"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-blue-500
                  "
                />

              </div>

              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-blue-500
                  "
                />

              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: .98 }}
                type="submit"
                disabled={loading}
                className="
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                py-4
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                disabled:opacity-60
                "
              >

                <Send size={18} />

                {loading ? "Sending..." : "Send Message"}

              </motion.button>

              {success && (

                <motion.div
                  initial={{ opacity:0, y:15 }}
                  animate={{ opacity:1, y:0 }}
                  className="
                  rounded-2xl
                  border
                  border-green-500/30
                  bg-green-500/10
                  p-4
                  text-green-400
                  "
                >

                  ✅ Your message has been sent successfully.
                  I'll get back to you soon.

                </motion.div>

              )}

            </div>

          </form>
                  </motion.div>

      </div>

     
    </section>
  );
}