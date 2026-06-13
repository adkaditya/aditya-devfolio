import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">

      <Container>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <h2 className="text-2xl font-black">
              <span className="text-blue-500">Aditya</span>Dev
            </h2>

            <p className="mt-2 text-slate-400">
              Full Stack MERN Developer
            </p>

          </div>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/adkaditya"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 Aditya Kumar. All Rights Reserved.
        </div>

      </Container>

    </footer>
  );
};

export default Footer;