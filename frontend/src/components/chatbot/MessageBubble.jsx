import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

const MessageBubble = ({ sender, text }) => {
  const isBot = sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`mb-5 flex ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex max-w-[85%] gap-3 ${
          isBot ? "" : "flex-row-reverse"
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            isBot
              ? "bg-gradient-to-r from-cyan-500 to-blue-600"
              : "bg-gradient-to-r from-violet-500 to-fuchsia-500"
          }`}
        >
          {isBot ? (
            <Bot size={20} className="text-white" />
          ) : (
            <User size={20} className="text-white" />
          )}
        </div>

        {/* Message */}

        <div
          className={`rounded-2xl px-4 py-3 shadow-lg ${
            isBot
              ? "bg-slate-800 text-white border border-slate-700"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
          }`}
        >
          <p className="leading-7 whitespace-pre-wrap">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;