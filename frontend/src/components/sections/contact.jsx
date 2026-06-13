import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>

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
            Get In Touch
          </p>

          <h2 className="mt-4 text-6xl font-black">
            Contact Me
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Let's build something amazing together.
            Feel free to reach out for internships,
            collaborations or freelance opportunities.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-5">

                <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <p className="text-slate-400">
                    Email
                  </p>

                  <p>
                    adityakumar@example.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
                  <FaPhone size={22} />
                </div>

                <div>
                  <p className="text-slate-400">
                    Phone
                  </p>

                  <p>
                    +91 XXXXX XXXXX
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <p className="text-slate-400">
                    Location
                  </p>

                  <p>
                    Lucknow, Uttar Pradesh
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-10 flex gap-5 text-3xl">

              <a
                href="https://github.com/adkaditya"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-400"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="transition hover:text-blue-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none transition focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none transition focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold transition hover:scale-[1.02]"
              >
                Send Message
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;