import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "AI Quiz Platform",
    description:
      "AI-powered quiz platform with JWT authentication, Admin/User roles and responsive UI.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/adkaditya",
    live: "#",
  },

  {
    title: "AI Food Recipe",
    description:
      "Recipe recommendation system with ingredient search and CRUD functionality.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    tech: ["React", "Node", "MongoDB"],
    github: "https://github.com/adkaditya",
    live: "#",
  },

  {
    title: "Student Management",
    description:
      "Full Stack MERN dashboard for managing students with authentication.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/adkaditya",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-blue-400">
            Featured Work
          </p>

          <h2 className="mt-4 text-6xl font-black">
            Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Modern Full Stack MERN applications with
            beautiful UI and scalable backend architecture.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-500 hover:scale-110"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-blue-500"
                  >
                    <FaGithub />

                    Github

                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 transition hover:bg-blue-700"
                  >
                    <FaExternalLinkAlt />

                    Live

                  </a>

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