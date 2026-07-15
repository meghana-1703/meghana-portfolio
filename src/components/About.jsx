import { motion } from "framer-motion";

export default function About(){

  const stats = [
   {
 number:"2026",
 label:"Graduation Year"
},
{
 number:"7.8",
 label:"CGPA"
},
{
 number:"10+",
 label:"Projects Built"
}
  ];


  return (


    <section
      id="about"
      className="
      relative
      py-32
      px-6
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
        max-w-6xl
        mx-auto
        "
      >


        {/* Heading */}

        <motion.p
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          className="
          text-blue-400
          tracking-[5px]
          text-sm
          "
        >
          ABOUT ME
        </motion.p>



        <motion.h2

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          mt-6
          text-5xl
          font-bold
          "
        >

          Computer Science Graduate
          <br/>

          specializing in Data Science.

        </motion.h2>



        {/* Main Card */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          className="
          mt-16
          p-10
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          "

        >

          <p
          className="
          text-lg
          text-white/60
          leading-8
          max-w-4xl
          "
          >

        I am a Computer Science graduate specializing in Data Science,
passionate about building modern software solutions using
Web Development, Artificial Intelligence, Machine Learning,
and Mobile technologies.

I enjoy transforming ideas into scalable applications
with clean UI, efficient backend systems, and intelligent
data-driven solutions.
          </p>



          <div
          className="
          flex
          flex-wrap
          gap-4
          mt-10
          "
          >

          {
            [
              "React.js",
              "Python",
              "Flask",
              "Machine Learning",
              "TensorFlow"
            ].map(skill=>(

              <span
              key={skill}
              className="
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              text-sm
              text-white/70
              "
              >

                {skill}

              </span>

            ))
          }


          </div>


        </motion.div>



        {/* Stats */}

        <div
        className="
        grid
        md:grid-cols-3
        gap-6
        mt-10
        "
        >

        {
          stats.map((item)=>(

            <motion.div

            whileHover={{
              y:-8
            }}

            key={item.label}

            className="
            p-8
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            "

            >

              <h3
              className="
              text-4xl
              font-bold
              "
              >
                {item.number}
              </h3>


              <p
              className="
              mt-2
              text-white/50
              "
              >
                {item.label}
              </p>


            </motion.div>

          ))
        }

        </div>


      </div>


    </section>

  )

}