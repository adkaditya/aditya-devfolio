import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

import { useEffect, useRef, useState } from "react";

import profile from "../../assets/images/adity.png";

import { getHero } from "../../services/heroService";

const Hero = () => {

  const words = [
    "Modern",
    "Creative",
    "Scalable",
    "Interactive",
    "Beautiful",
  ];

  const [index, setIndex] = useState(0);

  const [hero, setHero] = useState(null);

  const heroRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {

    const loadHero = async () => {

      try {

        const data = await getHero();

        setHero(data);

      } catch (err) {

        console.log(err);

      }

    };

    loadHero();

  }, []);

  useEffect(() => {

    const handleMouse = (e) => {

      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

    };

    window.addEventListener("mousemove", handleMouse);

    return () =>
      window.removeEventListener("mousemove", handleMouse);

  }, []);

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/adkaditya",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/aditya-kumar-96551b261",
    },
  ];

  return (

    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617] pt-28 text-white"
    >

      {/* Mouse Glow */}

      <motion.div

        animate={{
          x: mouse.x - 180,
          y: mouse.y - 180,
        }}

        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}

        className="pointer-events-none absolute h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-[120px]"

      />

      {/* Background */}

      <div className="absolute inset-0">

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

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">

          {/* LEFT SECTION */}

          <motion.div

            initial={{
              opacity: 0,
              x: -60,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}

          >
                        {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl"
            >
              🚀 Available for Internship
            </motion.div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">

              Crafting

              <br />

              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .4,
                }}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
              >
                {words[index]}
              </motion.span>

              <br />

              Digital Experiences

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              Hi, I'm

              <span className="mx-2 font-semibold text-white">

                {hero?.name || "Aditya Kumar"}

              </span>

              A passionate Full Stack MERN Developer specializing in
              React, Node.js, Express.js and MongoDB. I build
              scalable, responsive and modern web applications
              with clean UI and smooth user experience.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <motion.a

                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}

                whileTap={{
                  scale: .95,
                }}

                href="#projects"

                className="group flex h-14 items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 font-semibold shadow-xl shadow-cyan-500/20 transition"

              >

                View Projects

                <FaArrowRight className="transition group-hover:translate-x-1" />

              </motion.a>

              <motion.a

                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}

                whileTap={{
                  scale: .95,
                }}

                href="/resume.pdf"

                download

                className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 font-semibold backdrop-blur-xl transition hover:border-cyan-500 hover:bg-cyan-500/10"

              >

                <FaDownload />

                Download Resume

              </motion.a>

            </div>

            {/* Social Links */}

            <div className="mt-10 flex items-center gap-5">

              {socialLinks.map((item, index) => (

                <motion.a

                  key={index}

                  href={item.link}

                  target="_blank"

                  rel="noreferrer"

                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}

                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl backdrop-blur-xl transition hover:border-cyan-500 hover:text-cyan-400"

                >

                  {item.icon}

                </motion.a>

              ))}

            </div>
                        {/* Experience Cards */}

            <div className="mt-12 flex flex-wrap gap-5">

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-black text-cyan-400">
                  15+
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Projects Completed
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-black text-cyan-400">
                  MERN
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Full Stack Developer
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-black text-cyan-400">
                  100%
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Passion & Learning
                </p>
              </motion.div>

            </div>

          </motion.div>

          {/* ================= RIGHT SECTION ================= */}

          <motion.div
  initial={{
    opacity: 0,
    scale: .8,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1,
  }}
 className="relative flex items-center justify-center lg:-translate-y-20"
>

            {/* Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />

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
              className="absolute h-[500px] w-[500px] rounded-full border border-cyan-500/20"
            />

            {/* Ring 2 */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-blue-500/20"
            />

            {/* Ring 3 */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[300px] w-[300px] rounded-full border border-indigo-500/20"
            />

            {/* Profile */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="relative z-20 rounded-full border-[6px] border-cyan-400/30 bg-slate-900 p-2 shadow-[0_0_70px_rgba(34,211,238,.4)]"
            >

              <img
                src={profile}
                alt="Aditya Kumar"
                className="h-[320px] w-[320px] rounded-full object-cover"
              />

            </motion.div>
                        {/* ================= Orbiting Tech Icons ================= */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[480px] w-[480px]"
            >
              {/* React */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg">
                  <SiReact className="text-3xl text-cyan-400" />
                </div>
              </div>

              {/* Node */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-green-500/30 bg-slate-900/80 backdrop-blur-xl shadow-lg">
                  <SiNodedotjs className="text-3xl text-green-500" />
                </div>
              </div>

              {/* MongoDB */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-green-400/30 bg-slate-900/80 backdrop-blur-xl shadow-lg">
                  <SiMongodb className="text-3xl text-green-400" />
                </div>
              </div>

              {/* Express */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300/30 bg-slate-900/80 backdrop-blur-xl shadow-lg">
                  <SiExpress className="text-3xl text-white" />
                </div>
              </div>
            </motion.div>

            {/* Second Orbit */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[350px] w-[350px]"
            >
              {/* Tailwind */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/30 bg-slate-900 shadow-lg">
                  <SiTailwindcss className="text-2xl text-sky-400" />
                </div>
              </div>

              {/* JavaScript */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/30 bg-slate-900 shadow-lg">
                  <SiJavascript className="text-2xl text-yellow-400" />
                </div>
              </div>
            </motion.div>

            {/* Experience Badge */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-10 rounded-3xl border border-white/10 bg-slate-900/80 px-8 py-5 backdrop-blur-xl shadow-xl"
            >
              <h3 className="text-center text-3xl font-black text-cyan-400">
                MERN
              </h3>

              <p className="mt-1 text-center text-sm text-slate-400">
                Full Stack Developer
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
                {/* ================= VS Code Card ================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute left-0 top-12 hidden xl:block"
          >
            <div className="w-[330px] rounded-3xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl">

              <div className="mb-4 flex gap-2">

                <div className="h-3 w-3 rounded-full bg-red-500" />

                <div className="h-3 w-3 rounded-full bg-yellow-500" />

                <div className="h-3 w-3 rounded-full bg-green-500" />

              </div>

<pre className="text-xs leading-7 text-green-400">{`const developer = {

  name: "Aditya",

  role: "MERN Developer",

  skills: [
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Tailwind"
  ],

  available: true

};`}</pre>

            </div>

          </motion.div>

          {/* Floating Particles */}

          {[...Array(18)].map((_, i) => (

            <motion.span
              key={i}
              animate={{
                y: [0, -35, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
              }}
              className="absolute h-2 w-2 rounded-full bg-cyan-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />

          ))}

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
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
              />

            </div>
          </motion.div>

    </section>
  );
};

export default Hero;
        