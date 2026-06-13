import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const stats = [
  {
    number: "01+",
    title: "Years Experience",
  },
  {
    number: "15+",
    title: "Projects Completed",
  },
  {
    number: "20+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Passion",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background */}

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <p className="mb-4 text-blue-400">
            Get To Know Me
          </p>

          <h2 className="text-6xl font-black tracking-tight">
            About Me
          </h2>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-6xl font-bold">

              AK

            </div>

            <h3 className="mt-8 text-center text-3xl font-bold">

              Full Stack MERN Developer

            </h3>

            <p className="mt-6 text-center leading-8 text-slate-400">

              Passionate developer focused on creating
              scalable applications and beautiful user
              experiences using modern technologies.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5 text-4xl">

              <FaReact className="text-cyan-400" />

              <FaNodeJs className="text-green-500" />

              <SiExpress />

              <FaDatabase className="text-green-400" />

              <SiTailwindcss className="text-sky-400" />

              <FaGithub />

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-6">

              {stats.map((item) => (

                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500"
                >

                  <h2 className="text-5xl font-black text-blue-400">

                    {item.number}

                  </h2>

                  <p className="mt-3 text-slate-400">

                    {item.title}

                  </p>

                </div>

              ))}

            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">

                Developer Philosophy

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                I enjoy transforming ideas into modern,
                responsive and scalable web applications.
                My goal is to create products that are
                beautiful, performant and user-friendly.

              </p>

              <button className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold transition hover:scale-105">

                Download Resume

              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;