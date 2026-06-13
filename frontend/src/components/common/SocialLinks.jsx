import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 text-2xl text-slate-300">

      <a
        href="https://github.com/adkaditya"
        target="_blank"
        rel="noreferrer"
        className="transition hover:scale-110 hover:text-blue-400"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="transition hover:scale-110 hover:text-blue-400"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="transition hover:scale-110 hover:text-pink-400"
      >
        <FaInstagram />
      </a>

    </div>
  );
};

export default SocialLinks;