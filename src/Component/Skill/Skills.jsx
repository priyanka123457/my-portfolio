import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        
        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6)</li>
            <li>React JS</li>
            <li>Responsive Design</li>
            <li>Bootstrap / Tailwind</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Django</li>
            <li>REST API</li>
            <li>Basic Python</li>
          </ul>
        </div>

        {/* SEO */}
        <div className="skill-card">
          <h3>SEO & Marketing</h3>
          <ul>
            <li>On-Page SEO</li>
            <li>Keyword Research</li>
            <li>Technical SEO</li>
            <li>Backlink Building</li>
            <li>Google Search Console</li>
            <li>Google Analytics</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>Git & GitHub</li>
            <li>Figma</li>
            <li>Chrome DevTools</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Team Work</li>
            <li>Time Management</li>
          </ul>
        </div>
       
      </div>
    </section>
  );
}

export default Skills;