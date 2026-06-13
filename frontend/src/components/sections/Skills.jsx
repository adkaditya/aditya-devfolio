import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
    color: "text-cyan-400",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    color: "text-green-500",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    color: "text-white",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "text-green-400",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    color: "text-blue-400",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    color: "text-yellow-400",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    color: "text-sky-400",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    color: "text-orange-500",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    color: "text-blue-500",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "text-orange-600",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    color: "text-white",
  },
  {
    icon: <SiPostman />,
    name: "Postman",
    color: "text-orange-400",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background */}

      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >

          <p className="mb-4 text-blue-400">
            Technologies I Use
          </p>

          <h2 className="text-6xl font-black">
            Skills
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Modern technologies and tools that I use to build
            scalable, responsive and beautiful applications.
          </p>

        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500"
            >

              <div
                className={`text-6xl ${skill.color} transition duration-500 group-hover:rotate-12`}
              >
                {skill.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {skill.name}
              </h3>

              <p className="mt-3 text-slate-400">
                Modern Development
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;