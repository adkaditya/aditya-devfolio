import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import WelcomeCard from "./WelcomeCard";
import QuickActions from "./QuickActions";

import { sendMessage } from "../../services/chatService";

const ChatWindow = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm Aditya's AI Portfolio Assistant. Ask me anything about my skills, projects or experience.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const aiReply = await sendMessage(message);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: aiReply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleQuickAction = (text) => {
    handleSend(text);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex h-[700px] w-[420px] flex-col overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B1120] shadow-[0_0_60px_rgba(34,211,238,.18)]">

      {/* Header */}

      <div className="flex items-center justify-between bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-5 py-4">

        <div>

          <h2 className="text-lg font-bold text-white">
            AI Portfolio Assistant
          </h2>

          <p className="text-sm text-green-300">
            ● Online
          </p>

        </div>

        <button
          onClick={closeChat}
          className="rounded-full p-2 transition hover:bg-white/10"
        >
          <X className="text-white" size={22} />
        </button>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto bg-[#0F172A] p-4">

        {messages.length === 1 ? (

          <div className="flex h-full flex-col justify-center">

            <WelcomeCard />

            <QuickActions
              onSelect={handleQuickAction}
            />

          </div>

        ) : (

          <>

            {messages.map((msg, index) => (

              <MessageBubble
                key={index}
                sender={msg.sender}
                text={msg.text}
              />

            ))}

            {loading && <TypingIndicator />}

            <div ref={bottomRef}></div>

          </>

        )}

      </div>

      {/* Input */}

      <ChatInput onSend={handleSend} />

    </div>
  );
};

export default ChatWindow;