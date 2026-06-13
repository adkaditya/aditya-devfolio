import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (Information Technology)",
    college: "Goel Institute of Technology & Management",
    year: "2023 - 2027",
    location: "Lucknow, Uttar Pradesh",
    score: "SGPA : 7.0",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background Glow */}

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
            Academic Journey
          </p>

          <h2 className="mt-4 text-6xl font-black">
            Education
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Building a strong foundation in Information Technology
            while continuously learning modern web development.
          </p>
        </motion.div>

        {/* Card */}

        <div className="mx-auto max-w-5xl">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/50"
            >

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <GraduationCap size={34} />
                  </div>

                  <h3 className="text-3xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-xl text-slate-300">
                    {item.college}
                  </p>

                </div>

                <div className="space-y-4 text-slate-400">

                  <div className="flex items-center gap-3">
                    <Calendar size={18} />
                    {item.year}
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin size={18} />
                    {item.location}
                  </div>

                  <div className="inline-block rounded-full bg-blue-500/10 px-5 py-2 text-blue-400">
                    {item.score}
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;