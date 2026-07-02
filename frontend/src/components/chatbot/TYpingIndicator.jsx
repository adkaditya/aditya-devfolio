import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const dot = {
  hidden: { opacity: 0.3, y: 0 },
  visible: {
    opacity: 1,
    y: -4,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.5,
    },
  },
};

const TypingIndicator = () => {
  return (
    <div className="mb-5 flex justify-start">

      <div className="flex max-w-[85%] gap-3">

        {/* Bot Avatar */}

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">

          <Bot size={20} className="text-white" />

        </div>

        {/* Bubble */}

        <div className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3">

          <motion.span
            variants={dot}
            initial="hidden"
            animate="visible"
            className="h-2 w-2 rounded-full bg-cyan-400"
          />

          <motion.span
            variants={dot}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="h-2 w-2 rounded-full bg-cyan-400"
          />

          <motion.span
            variants={dot}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="h-2 w-2 rounded-full bg-cyan-400"
          />

        </div>

      </div>

    </div>
  );
};

export default TypingIndicator;