import { motion } from "framer-motion";
import { Bot, X, Minimize2 } from "lucide-react";

const ChatHeader = ({ onClose }) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-500/30">
          <Bot className="text-white" size={22} />
        </div>

        <div>
          <h2 className="font-semibold text-white">
            AI Portfolio Assistant
          </h2>

          <div className="flex items-center gap-2 text-sm text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Online
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-lg p-2 transition hover:bg-white/10">
          <Minimize2 size={18} className="text-slate-300" />
        </button>

        <button
          onClick={onClose}
          className="rounded-lg p-2 transition hover:bg-red-500"
        >
          <X size={18} className="text-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default ChatHeader;