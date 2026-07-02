import { MessageCircle } from "lucide-react";

const ChatButton = ({ toggleChat }) => {
  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition duration-300"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default ChatButton;