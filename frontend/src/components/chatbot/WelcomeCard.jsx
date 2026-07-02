import { motion } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaFolderOpen,
  FaFileDownload,
  FaEnvelope,
} from "react-icons/fa";

const actions = [
  {
    icon: <FaUser />,
    label: "About",
    prompt: "Tell me about yourself",
  },
  {
    icon: <FaCode />,
    label: "Skills",
    prompt: "What are your technical skills?",
  },
  {
    icon: <FaFolderOpen />,
    label: "Projects",
    prompt: "Show me your projects",
  },
  {
    icon: <FaFileDownload />,
    label: "Resume",
    prompt: "Can I download your resume?",
  },
  {
    icon: <FaEnvelope />,
    label: "Contact",
    prompt: "How can I contact you?",
  },
];

const WelcomeCard = ({ onSelect }) => {
  return (
    <div className="flex h-full flex-col justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-cyan-500/20 bg-slate-800/60 p-6 backdrop-blur-xl"
      >

        <div className="mb-5 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl">
            🤖
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              AI Portfolio Assistant
            </h2>

            <p className="text-sm text-green-400">
              ● Online
            </p>
          </div>

        </div>

        <h3 className="text-xl font-bold text-white">
          Welcome 👋
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          I'm Aditya's AI Assistant.
          <br />
          Ask me anything about my portfolio,
          projects, skills or experience.
        </p>

      </motion.div>

      <div className="mt-8 flex flex-wrap gap-3">

        {actions.map((item) => (

          <button
            key={item.label}
            onClick={() => onSelect(item.prompt)}
            className="rounded-full border border-cyan-500/20 bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
          >
            <span className="mr-2 inline-flex">
              {item.icon}
            </span>

            {item.label}
          </button>

        ))}

      </div>

    </div>
  );
};

export default WelcomeCard;