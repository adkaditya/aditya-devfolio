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

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#030712] py-32 text-white"
    >
      {/* Background */}

      <div className="absolute inset-0">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff22 1px,transparent 1px),
              linear-gradient(90deg,#ffffff22 1px,transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* Glow */}

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[130px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[130px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >

          <p className="mb-4 tracking-[5px] uppercase text-cyan-400">

            MY TECH STACK

          </p>

          <h2 className="text-5xl font-black md:text-7xl">

            Skills &

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

              {" "}Technologies

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">

            Modern technologies, frameworks and AI tools
            that I use to build scalable web applications
            and intelligent software.

          </p>

        </motion.div>

        {/* Categories */}

        <div className="mt-20 space-y-16">
                    {/* ================= FRONTEND ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="mb-8 flex items-center gap-4">

              <div className="h-1 w-16 rounded-full bg-cyan-400" />

              <h3 className="text-3xl font-black">

                Frontend Development

              </h3>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {/* React */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <FaReact className="text-5xl text-cyan-400" />

                    <div>

                      <h4 className="text-xl font-bold">

                        React.js

                      </h4>

                      <p className="text-slate-400">

                        Advanced

                      </p>

                    </div>

                  </div>

                  <span className="text-cyan-400 font-bold">

                    90%

                  </span>

                </div>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "90%",
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />

                </div>

              </motion.div>

              {/* JavaScript */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <SiJavascript className="text-5xl text-yellow-400" />

                    <div>

                      <h4 className="text-xl font-bold">

                        JavaScript

                      </h4>

                      <p className="text-slate-400">

                        Advanced

                      </p>

                    </div>

                  </div>

                  <span className="font-bold text-yellow-400">

                    88%

                  </span>

                </div>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "88%",
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                  />

                </div>

              </motion.div>

            </div>

          </motion.div>
                    {/* ================= FRONTEND - PART 2 ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="mt-8"
          ></motion.div>

           <div className="grid gap-6 md:grid-cols-3">

              {/* HTML */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <FaHtml5 className="text-6xl text-orange-500 transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  HTML5

                </h4>

                <p className="mt-2 text-slate-400">

                  Semantic Markup

                </p>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                  />

                </div>

              </motion.div>

              {/* CSS */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-blue-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <FaCss3Alt className="text-6xl text-blue-500 transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  CSS3

                </h4>

                <p className="mt-2 text-slate-400">

                  Responsive UI

                </p>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  />

                </div>

              </motion.div>

              {/* Tailwind */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <SiTailwindcss className="text-6xl text-cyan-400 transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  Tailwind CSS

                </h4>

                <p className="mt-2 text-slate-400">

                  Utility First

                </p>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />

                </div>

              </motion.div>

            </div>

                   {/* ================= BACKEND ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mt-24"
          >

            <div className="mb-8 flex items-center gap-4">

              <div className="h-1 w-16 rounded-full bg-green-400"></div>

              <h3 className="text-3xl font-black">

                Backend & Database

              </h3>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {/* Node.js */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-green-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <FaNodeJs className="text-6xl text-green-500 transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  Node.js

                </h4>

                <p className="mt-2 text-slate-400">

                  Runtime Environment

                </p>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
                  />

                </div>

              </motion.div>

              {/* Express */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-gray-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <SiExpress className="text-6xl text-white transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  Express.js

                </h4>

                <p className="mt-2 text-slate-400">

                  REST API

                </p>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-gray-300 to-white"
                  />

                </div>

              </motion.div>

              {/* MongoDB */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-green-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <SiMongodb className="text-6xl text-green-400 transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  MongoDB

                </h4>

                <p className="mt-2 text-slate-400">

                  NoSQL Database

                </p>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "86%" }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600"
                  />

                </div>

              </motion.div>

              {/* MySQL */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-blue-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <SiMysql className="text-6xl text-blue-400 transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  MySQL

                </h4>

                <p className="mt-2 text-slate-400">

                  Relational Database

                </p>

                <div className="mt-6 h-2 rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"
                  />

                </div>

              </motion.div>

            </div>

          </motion.div>
                    {/* ================= TOOLS & AI ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mt-24"
          >

            <div className="mb-8 flex items-center gap-4">

              <div className="h-1 w-16 rounded-full bg-purple-400"></div>

              <h3 className="text-3xl font-black">

                Tools & AI Technologies

              </h3>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* Git */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <FaGitAlt className="text-6xl text-orange-500 transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  Git

                </h4>

                <p className="mt-2 text-slate-400">

                  Version Control

                </p>

              </motion.div>

              {/* GitHub */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <FaGithub className="text-6xl text-white transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  GitHub

                </h4>

                <p className="mt-2 text-slate-400">

                  Code Collaboration

                </p>

              </motion.div>

              {/* Postman */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-orange-400/20 bg-white/5 p-6 backdrop-blur-xl"
              >

                <SiPostman className="text-6xl text-orange-400 transition duration-500 group-hover:rotate-12" />

                <h4 className="mt-6 text-2xl font-bold">

                  Postman

                </h4>

                <p className="mt-2 text-slate-400">

                  API Testing

                </p>

              </motion.div>

              {/* Generative AI */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur-xl"
              >

                <div className="text-6xl">🤖</div>

                <h4 className="mt-6 text-2xl font-bold">

                  Generative AI

                </h4>

                <p className="mt-2 text-slate-400">

                  Currently Learning

                </p>

              </motion.div>

              {/* Agentic AI */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 p-6 backdrop-blur-xl"
              >

                <div className="text-6xl">⚡</div>

                <h4 className="mt-6 text-2xl font-bold">

                  Agentic AI

                </h4>

                <p className="mt-2 text-slate-400">

                  Learning AI Agents

                </p>

              </motion.div>

              {/* Coming Soon */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 backdrop-blur-xl"
              >

                <div className="text-6xl">🚀</div>

                <h4 className="mt-6 text-2xl font-bold">

                  AI Roadmap

                </h4>

                <p className="mt-2 text-slate-400">

                  LangChain • RAG • MCP • OpenAI • Gemini

                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
};

export default Skills;