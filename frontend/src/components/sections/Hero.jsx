import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

import profile from "../../assets/images/adity.png";
import { useEffect, useState } from "react";
const Hero = () => {
  const words = ["Modern", "Beautiful", "Responsive", "Creative", "Scalable"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Blur */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>

      {/* Main Container */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              🚀 Available for Internship
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
              Crafting
              <br />
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                {words[index]}
              </motion.span>
              <span className="text-white">Modern</span>
              <br />
              Web Experiences
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Hi, I'm
              <span className="font-semibold text-white"> Aditya Kumar</span>, a
              passionate Full Stack MERN Developer building scalable and
              beautiful web applications using React, Node.js, Express.js and
              MongoDB.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-700">
                View Projects
              </button>

              <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-blue-500">
                Resume
                <FaArrowRight />
              </button>
            </div>

            <div className="mt-10 flex gap-6 text-3xl">
              <a
                href="https://github.com/adkaditya"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-110 hover:text-blue-400"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="transition hover:scale-110 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex items-center justify-center"
          >
            {/* Outer Ring */}
            <motion.div
              className="absolute h-[450px] w-[450px] rounded-full border-2 border-blue-500/40"
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Middle Ring */}

            <motion.div
              className="absolute h-[360px] w-[360px] rounded-full border border-cyan-500/40"
              animate={{ rotate: -360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Inner Ring */}

            <motion.div
              className="absolute h-[280px] w-[280px] rounded-full border border-violet-500/40"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Blur Glow */}

            <div className="absolute h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-3xl" />

            {/* Profile Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative z-20 overflow-hidden rounded-full border-4 border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-2xl"
            >
              <img
                src={profile}
                alt="Aditya Kumar"
                className="h-[280px] w-[280px] rounded-full object-cover"
              />
            </motion.div>

            {/* Floating Tech */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-0 top-10 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              ⚛ React
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-0 top-24 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              🚀 Node.js
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-10 left-10 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              🍃 MongoDB
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
              className="absolute bottom-0 right-12 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              ⚡ Tailwind
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Mouse Glow */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]"></div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-blue-400"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
