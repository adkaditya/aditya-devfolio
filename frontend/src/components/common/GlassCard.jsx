const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:bg-white/10
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;