import React from "react";
import "./About.css";
import profileImg from "../../assets/myimg4.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h1 className="about-heading">About Me</h1>
        

        <div className="about-row">
          {/* Left Side Image */}
          <div className="about-left">
            <img src={profileImg} alt="img2" />
          </div>

          {/* Right Side Content */}
          <div className="about-right">
            

            <div className="about-box">
             <h3>🎯 Internship</h3>
<p>Frontend Intern – Working with ReactJS, JavaScript, and modern UI development.</p>
            </div>

            <div className="about-box">
             <h3>📈 Digital Marketing Experience</h3>

<p>
  <strong>SEO Specialist</strong><br />
  Managing on-page and off-page SEO strategies, conducting keyword research,
  developing backlink strategies, and improving organic search rankings.
</p>

            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
