import React from "react";
import "./Experience.css";
import img1 from "../../assets/img1.png";   // apni image path
          

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">My Experience</h2>

      <div className="experience-container">

        {/* Frontend Internship */}
        <div className="experience-card">
          <img src={img1} alt="Frontend Internship" className="exp-img" />
          <h3>Frontend Developer Intern</h3>
          <h4>XYZ Company</h4>
          <span className="duration">Jan 2025 - June 2025</span>
          <p>
            Built responsive websites using HTML, CSS, JavaScript and React.
            Improved UI/UX design and optimized website performance.
          </p>
        </div>

        {/* SEO Internship */}
        <div className="experience-card">
          <img src={img1} alt="SEO Internship" className="exp-img" />
          <h3>SEO Intern</h3>
          <h4>ABC Digital Marketing Agency</h4>
          <span className="duration">July 2025 - Present</span>
          <p>
            Performed keyword research, on-page SEO, technical SEO audits and backlink building.
            Managed Google Search Console and improved search rankings.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;