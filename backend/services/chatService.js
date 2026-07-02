const Hero = require("../models/Hero");
const About = require("../models/About");
const Skill = require("../models/Skill");
const Project = require("../models/Project");

const client = require("../config/openrouter");

const askAI = async (message) => {
  // Fetch portfolio data
  const hero = await Hero.findOne().lean();
  const about = await About.findOne().lean();
  const skills = await Skill.find().lean();
  const projects = await Project.find().lean();

  // Build context
  const portfolioContext = `
Hero:
${JSON.stringify(hero, null, 2)}

About:
${JSON.stringify(about, null, 2)}

Skills:
${JSON.stringify(skills, null, 2)}

Projects:
${JSON.stringify(projects, null, 2)}
`;

  // AI Request
  const completion = await client.chat.completions.create({
    model: "nvidia/nemotron-3-super-120b-a12b:free",

    messages: [
      {
        role: "system",
        content: `
You are Aditya Kumar's AI Portfolio Assistant.

You MUST answer only using the portfolio information below.

${portfolioContext}

Rules:
1. Answer only portfolio-related questions.
2. Never make up information.
3. If information is not available, reply:
   "This information is not available in Aditya's portfolio."
4. Keep answers short, professional, and friendly.
5. If someone asks unrelated questions (movies, cricket, politics, etc.), politely say:
   "I'm designed to answer questions about Aditya Kumar's portfolio only."
`,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return completion.choices[0].message.content;
};

module.exports = {
  askAI,
};