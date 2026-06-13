const PrimaryButton = ({
  children,
  href,
  onClick,
  className = "",
}) => {
  const classes =
    "inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl";

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

export default PrimaryButton;