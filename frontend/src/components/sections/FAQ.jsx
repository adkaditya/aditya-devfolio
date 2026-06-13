import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who are you?",
    answer:
      "I'm Aditya Kumar, a Full Stack MERN Developer passionate about building modern, scalable and responsive web applications.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily work with React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Shadcn UI and REST APIs.",
  },
  {
    question: "Are you available for internships?",
    answer:
      "Yes! I'm actively looking for internship and full stack development opportunities.",
  },
  {
    question: "Can I hire you for freelance projects?",
    answer:
      "Absolutely. I'm open to freelance work, collaborations and exciting web development projects.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me through the contact form, GitHub, LinkedIn or email.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <p className="text-blue-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Got Questions?
          </h2>

          <p className="mt-5 text-slate-400">
            Here are some quick answers about me and my work.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              layout
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {active === index && (

                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  className="px-6 pb-6 text-slate-400"
                >

                  {faq.answer}

                </motion.div>

              )}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Faq;