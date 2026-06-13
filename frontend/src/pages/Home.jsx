import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About"
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Certificates from "../components/sections/Certificates";
import GithubStats from "../components/sections/GithubStats";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import Experience from "../components/sections/Experience";
import FAQ from "../components/sections/FAQ";
const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />
      <Education />
      <Certificates />
      <GithubStats />
      <Experience />
      <Contact /> 
      <Footer/>
      <FAQ/>


    </>
  );
};

export default Home;