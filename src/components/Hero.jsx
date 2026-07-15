import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profile from "../assets/images/profile.webp";


export default function Hero(){

  return (

    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        pt-32
      "
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


      <div
className="
relative
z-10
max-w-7xl
mx-auto
w-full
grid
grid-cols-1
lg:grid-cols-2
gap-12
lg:gap-16
items-center
"
      >


        {/* LEFT */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

        >
<motion.div
  initial={{
    opacity:0,
    y:20
  }}
  animate={{
    opacity:1,
    y:0
  }}
  transition={{
    duration:0.6
  }}
  className="
    inline-flex
    items-center
    gap-3
    px-5
    py-2
    rounded-full
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    text-sm
    text-white/70
    mb-8
  "
>

  <span
    className="
      w-2
      h-2
      rounded-full
      bg-green-400
      animate-pulse
    "
  />

  Available for Software Engineer Roles

</motion.div>
          <p
            className="
            text-blue-400
            tracking-[6px]
            text-sm
            mb-6
            "
          >
           COMPUTER SCIENCE GRADUATE
          </p>



          <h1
            className="
text-5xl
sm:text-6xl
lg:text-8xl
            font-bold
            leading-none
            "
          >

            MEGHANA

          </h1>


          <h1
            className="
text-4xl
sm:text-5xl
lg:text-7xl
            font-bold
            text-white/40
            mt-2
            "
          >

            MUDUTHANAPALLY

          </h1>



          <p
            className="
            mt-8
max-w-xl
text-base
sm:text-lg
            text-white/60
            leading-8
            "
          >

       Computer Science graduate specializing in Data Science,
passionate about building modern web applications,
AI-powered solutions, and Android applications using
React.js, Python, Kotlin and Machine Learning.

          </p>



          <div
           className="
flex
flex-col
sm:flex-row
gap-4
mt-10
"
          >

           <a
  href="#projects"
  className="
  flex
  items-center
  justify-center
  gap-2
  px-7
  py-4
  rounded-xl
  bg-white
  text-black
  font-medium
  hover:scale-105
  transition
  "
>
  View Projects
  <ArrowRight size={18} />
</a>



            <a
             href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
className="
flex
justify-center
items-center
gap-2
w-full
sm:w-auto
px-7
py-4
rounded-xl
border
border-white/10
bg-white/5
"
            >

              Resume

              <Download size={18}/>

            </a>


          </div>


        </motion.div>



        {/* RIGHT IMAGE */}


        <motion.div

          initial={{
            opacity:0,
            scale:0.9
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1
          }}

className="
flex
justify-center
lg:justify-end
"

        >


          <div
            className="
            relative
            "
          >


            <div
              className="
              absolute
              inset-0
              bg-blue-500/20
              blur-[100px]
              "
            />


            <div
className="
relative
w-[280px]
h-[360px]
sm:w-[330px]
sm:h-[430px]
rounded-[40px]
overflow-hidden
border
border-white/10
bg-white/5
backdrop-blur-xl
"
            >

              <img

                src={profile}

                alt="Meghana"

                className="
                w-full
                h-full
                object-cover
                "

              />


            </div>


          </div>


        </motion.div>


      </div>


    </section>

  )

}