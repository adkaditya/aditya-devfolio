import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    title: "15+",
    subtitle: "Repositories",
  },
  {
    icon: <FaCodeBranch />,
    title: "50+",
    subtitle: "Commits",
  },
  {
    icon: <FaStar />,
    title: "10+",
    subtitle: "Projects",
  },
];

const GithubStats = () => {
  return (
    <section
      id="github"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-blue-400">
            Open Source Journey
          </p>

          <h2 className="mt-4 text-6xl font-black">
            GitHub Stats
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Passionate about building modern applications,
            exploring new technologies and contributing
            through personal projects.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-blue-500/10 p-5 text-blue-400">

                <FaGithub size={40} />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  adkaditya
                </h3>

                <p className="text-slate-400">
                  Full Stack MERN Developer
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-400">
              Creating scalable web applications using
              React, Node.js, Express.js and MongoDB with
              modern UI and responsive design.
            </p>

            <a
              href="https://github.com/adkaditya"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Visit GitHub
            </a>
          </motion.div>

          {/* Right Stats */}

          <div className="grid gap-6 sm:grid-cols-3">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:border-blue-500"
              >

                <div className="mb-5 flex justify-center text-4xl text-blue-400">

                  {item.icon}

                </div>

                <h3 className="text-4xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.subtitle}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubStats;