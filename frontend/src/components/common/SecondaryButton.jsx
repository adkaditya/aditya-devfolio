const SecondaryButton = ({
  children,
  href,
  onClick,
  className = "",
}) => {
  const classes =
    "inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105";

  if (href) {
    return (
      <a href={href} className={`${classes} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${classes} ${className}`}>
      {children}
    </button>
  );
};

export default SecondaryButton;