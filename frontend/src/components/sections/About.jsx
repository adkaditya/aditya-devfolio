import { motion } from "framer-motion";

import {
  Brain,
  Sparkles,
  Rocket,
  Code2,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020817] py-32 text-white"
    >
      {/* ================= Background ================= */}

      <div className="absolute inset-0">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
            linear-gradient(#ffffff 1px,transparent 1px),
            linear-gradient(90deg,#ffffff 1px,transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow */}

        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />

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

          <Badge className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">

            ABOUT ME

          </Badge>

          <h2 className="mt-8 text-5xl font-black md:text-7xl">

            Building

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

              {" "}AI Powered

            </span>

            <br />

            Digital Experiences

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">

            Passionate MERN Stack Developer currently
            exploring

            <span className="font-semibold text-cyan-400">

              {" "}Generative AI

            </span>

            ,

            <span className="font-semibold text-cyan-400">

              {" "}Agentic AI

            </span>

            {" "}and intelligent software systems.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
                    {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="relative flex h-[650px] items-center justify-center"
          >

            {/* Background Glow */}

            <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[120px]" />

            {/* Outer Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[420px] w-[420px] rounded-full border border-cyan-500/20"
            />

            {/* Middle Ring */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[320px] w-[320px] rounded-full border border-blue-500/20"
            />

            {/* Inner Ring */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute h-[240px] w-[240px] rounded-full border border-cyan-400/30"
            />

            {/* AI Core */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative z-20 flex h-44 w-44 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-[0_0_80px_rgba(34,211,238,.35)]"
            >

              <Brain
                size={80}
                className="text-cyan-400"
              />

            </motion.div>

            {/* Floating Card 1 */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-4 top-20"
            >

              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

                <CardContent className="flex items-center gap-3 p-5">

                  <Code2 className="text-cyan-400" />

                  <div>

                    <h4 className="font-semibold">
                      MERN Stack
                    </h4>

                    <p className="text-xs text-slate-400">
                      Full Stack Development
                    </p>

                  </div>

                </CardContent>

              </Card>

            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute right-4 top-32"
            >

              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

                <CardContent className="flex items-center gap-3 p-5">

                  <Brain className="text-cyan-400" />

                  <div>

                    <h4 className="font-semibold">
                      Generative AI
                    </h4>

                    <p className="text-xs text-slate-400">
                      Learning
                    </p>

                  </div>

                </CardContent>

              </Card>

            </motion.div>
                        {/* Floating Card 3 */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
              className="absolute bottom-28 left-8"
            >

              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

                <CardContent className="flex items-center gap-3 p-5">

                  <Rocket className="text-cyan-400" />

                  <div>

                    <h4 className="font-semibold">
                      Agentic AI
                    </h4>

                    <p className="text-xs text-slate-400">
                      Exploring AI Agents
                    </p>

                  </div>

                </CardContent>

              </Card>

            </motion.div>

            {/* Floating Card 4 */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-16 right-4"
            >

              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

                <CardContent className="flex items-center gap-3 p-5">

                  <Sparkles className="text-cyan-400" />

                  <div>

                    <h4 className="font-semibold">
                      Future Ready
                    </h4>

                    <p className="text-xs text-slate-400">
                      Always Learning
                    </p>

                  </div>

                </CardContent>

              </Card>

            </motion.div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >

            <Badge className="border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

              🚀 Full Stack Developer

            </Badge>

            <h3 className="mt-6 text-5xl font-black leading-tight">

              Passionate About

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

                {" "}Modern Development

              </span>

            </h3>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              I'm a passionate Full Stack MERN Developer who
              enjoys building scalable web applications,
              beautiful user interfaces and AI-powered
              solutions.

              My current learning journey focuses on

              <span className="font-semibold text-cyan-400">

                {" "}Generative AI

              </span>

              ,

              <span className="font-semibold text-cyan-400">

                {" "}Agentic AI

              </span>

              , AI Agents, LangChain, RAG and intelligent
              automation.

            </p>

            {/* Timeline */}

            <div className="mt-10 space-y-5">
                            {/* Timeline Item */}

              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

                <CardContent className="flex gap-5 p-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 font-bold text-cyan-400">

                    2023

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">

                      Started Programming Journey

                    </h4>

                    <p className="mt-2 text-slate-400">

                      Started with C, C++, Java and learned
                      programming fundamentals.

                    </p>

                  </div>

                </CardContent>

              </Card>

              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

                <CardContent className="flex gap-5 p-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 font-bold text-cyan-400">

                    2024

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">

                      MERN Stack Development

                    </h4>

                    <p className="mt-2 text-slate-400">

                      Built multiple full-stack projects using
                      React, Node.js, Express and MongoDB.

                    </p>

                  </div>

                </CardContent>

              </Card>

              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

                <CardContent className="flex gap-5 p-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 font-bold text-cyan-400">

                    2025

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">

                      AI Learning Journey

                    </h4>

                    <p className="mt-2 text-slate-400">

                      Learning Generative AI, Agentic AI,
                      LangChain, RAG and AI Agents.

                    </p>

                  </div>

                </CardContent>

              </Card>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600"
              >

                Download Resume

              </Button>

              <Button
                size="lg"
                variant="outline"
              >

                GitHub

              </Button>

              <Button
                size="lg"
                variant="outline"
              >

                LinkedIn

              </Button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
};

export default About;
            