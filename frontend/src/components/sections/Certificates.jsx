import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Trophy,
  Award,
  Rocket,
} from "lucide-react";

const certificates = [
  {
    title: "Cybersecurity",
    issuer: "Udemy",
    icon: ShieldCheck,
    color: "text-cyan-400",
  },
  {
    title: "Innovation Ambassador",
    issuer: "MoE & AICTE",
    icon: Rocket,
    color: "text-violet-400",
  },
  {
    title: "Web Development",
    issuer: "Great Learning",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    title: "Smart India Hackathon",
    issuer: "Internal Round Selection",
    icon: Trophy,
    color: "text-green-400",
  },
  {
    title: "Beat The Heat 2025",
    issuer: "1st Place",
    icon: Award,
    color: "text-yellow-400",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Achievements & Learning
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight">
            Certificates
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Continuous learning and participation in innovation,
            development and technical competitions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {certificates.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-3xl ${item.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.issuer}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>

                  <span className="text-sm text-slate-500">
                    Successfully Completed
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Certificates;