import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Portfolio Website",
    description:
      "A production-ready MERN Stack portfolio featuring an AI-powered chatbot using OpenRouter AI, JWT authentication, MongoDB integration, responsive UI, and deployment on Netlify & Render.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "OpenRouter AI",
      "Framer Motion",
    ],
    github: "https://github.com/adkaditya/-aditya-devfolio",
    live: "https://aditya-devportfolio-pages.netlify.app",
    featured: true,
  },

  {
    title: "AI Food Recipe Recommendation",
    description:
      "AI-powered recipe recommendation system with ingredient search, CRUD operations, smart suggestions, and a modern responsive UI.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    github: "https://github.com/adkaditya",
    live: "#",
    featured: false,
  },

  {
    title: "AI Quiz Platform",
    description:
      "Modern quiz application with authentication, role-based access, admin dashboard, and secure REST APIs.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/adkaditya",
    live: "#",
    featured: false,
  },

  {
    title: "Student Management System",
    description:
      "A complete MERN dashboard for managing students with authentication, CRUD operations, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/adkaditya",
    live: "#",
    featured: false,
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-28 text-white"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

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
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mb-20 text-center"
        >

          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-widest text-cyan-400 uppercase">

            Featured Projects

          </span>

          <h2 className="mt-8 text-5xl font-black md:text-7xl">

            My Work

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

            Here are some of my best Full Stack MERN applications,
            AI-powered products and scalable web applications built
            with modern technologies and clean architecture.

          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="grid gap-10 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -12,
              }}
              transition={{
                duration: 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,255,255,.08)] backdrop-blur-xl"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                {project.featured && (

                  <span className="absolute left-5 top-5 z-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">

                    ⭐ Featured

                  </span>

                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold">

                  {project.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-400">

                  {project.description}

                </p>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>
                                {/* Action Buttons */}

                <div className="mt-8 flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    <FaGithub className="text-lg" />

                    Source Code

                  </a>

                  {project.live !== "#" && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                    >
                      <FaExternalLinkAlt className="text-sm" />

                      Live Demo

                    </a>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;