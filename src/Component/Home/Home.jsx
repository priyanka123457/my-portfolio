import About from "../About/About";
import Skills from "../Skill/Skills";
import Contact from "../Contact/Contact";
import CV from "../../assets/CV.pdf";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section id="home" className="hero-container">
        <div className="hero-content">
          <div className="right-content">
            <h2>Hello, I'm Priyanka 👋</h2>
            <h1>Frontend Developer</h1>
            <p>
                I am a passionate Frontend Developer with training in modern web 
        technologies. Currently, I am working as an SEO Specialist and 
        have experience in building responsive and user-friendly websites. 
        I also have the ability to work on backend development and enjoy 
        learning new technologies.
            </p>
            <a href={CV} download>
        <button className="btn">Download CV</button>
      </a>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;