import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { Mic, Smile } from "lucide-react";
import { motion } from "framer-motion";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-slate-700 bg-[#0B1120] p-4">

      <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-3 py-2 shadow-lg">

        {/* Emoji */}

        <button className="text-slate-400 transition hover:text-cyan-400">

          <Smile size={20} />

        </button>

        {/* Input */}

        <input
          type="text"
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white placeholder:text-slate-500 outline-none"
        />

        {/* Voice */}

        <button className="text-slate-400 transition hover:text-cyan-400">

          <Mic size={20} />

        </button>

        {/* Send */}

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={handleSubmit}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transition"
        >

          <IoSend size={18} />

        </motion.button>

      </div>

    </div>
  );
};

export default ChatInput;