const questions = [
  "Tell me about yourself",
  "What are your skills?",
  "Show me your projects",
  "Can I download your resume?",
];

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-3">
      {questions.map((question, index) => (
        <button
          key={index}
          onClick={() => onSelect(question)}
          className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-sm text-blue-400 transition hover:bg-blue-600 hover:text-white"
        >
          {question}
        </button>
      ))}
    </div>
  );
};

export default SuggestedQuestions;