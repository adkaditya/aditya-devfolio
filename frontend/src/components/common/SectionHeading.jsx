import { motion } from "framer-motion";

const SectionHeading = ({
  badge,
  title,
  subtitle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-black tracking-tight text-white lg:text-6xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeading;