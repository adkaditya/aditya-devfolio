import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center text-blue-400">
            Get To Know
          </p>

          <h2 className="mb-16 text-center text-5xl font-bold">
            About Me
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="flex h-96 w-80 items-center justify-center rounded-3xl border border-blue-500 bg-slate-800">
              <span className="text-7xl font-bold text-blue-500">
                AK
              </span>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-3xl font-bold">
              Full Stack MERN Developer
            </h3>

            <p className="mb-8 leading-8 text-slate-300">
              Passionate MERN Stack Developer with experience in
              React, Node.js, Express.js and MongoDB. I enjoy
              building scalable, responsive and modern web
              applications with clean UI and efficient backend
              architecture.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" />
                Responsive Web Applications
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" />
                REST API Development
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" />
                Modern UI with React & Tailwind
              </div>

            </div>

            <div className="mt-10 grid grid-cols-3 gap-5">

              <div className="rounded-2xl bg-slate-800 p-6 text-center">
                <h4 className="text-4xl font-bold text-blue-500">
                  1+
                </h4>

                <p className="mt-2 text-sm text-slate-400">
                  Experience
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-6 text-center">
                <h4 className="text-4xl font-bold text-blue-500">
                  10+
                </h4>

                <p className="mt-2 text-sm text-slate-400">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-6 text-center">
                <h4 className="text-4xl font-bold text-blue-500">
                  15+
                </h4>

                <p className="mt-2 text-sm text-slate-400">
                  Technologies
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;