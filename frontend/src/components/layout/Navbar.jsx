import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container>

        <nav className="flex h-20 items-center justify-between">

          <a
            href="#home"
            className="text-2xl font-black tracking-tight text-white"
          >
            <span className="text-blue-500">Aditya</span>Dev
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 lg:block"
          >
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>

      </Container>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-white/10 bg-slate-950 lg:hidden"
        >
          <Container>

            <div className="flex flex-col py-6">

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-slate-300 transition hover:text-blue-400"
                >
                  {item.name}
                </a>
              ))}

            </div>

          </Container>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;