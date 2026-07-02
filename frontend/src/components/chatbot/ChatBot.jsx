import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";

import ChatWindow from "./ChatWindow";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <ChatWindow closeChat={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}

      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-[0_0_40px_rgba(34,211,238,.5)]"
      >
        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute inset-0 rounded-full bg-cyan-500"
        />

        {open ? (
          <X className="relative z-10" size={28} />
        ) : (
          <Bot className="relative z-10" size={28} />
        )}
      </motion.button>
    </>
  );
};

export default ChatBot;