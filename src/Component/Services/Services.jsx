import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="service">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>
              Modern and responsive websites using React.js, HTML, CSS and
              JavaScript with clean UI design.
            </p>
            <button>Read More</button>
          </div>

          <div className="service-card">
            <h3>UI / UX Design</h3>
            <p>
              Attractive and user-friendly interface design focused on better
              user experience.
            </p>
            <button>Read More</button>
          </div>

          <div className="service-card">
            <h3>Backend Integration</h3>
            <p>
              API integration and backend connectivity using Node.js and
              MongoDB.
            </p>
            <button>Read More</button>
          </div>

          <div className="service-card">
            <h3>Website Optimization</h3>
            <p>
              Performance improvement, SEO optimization and speed enhancement
              for better ranking.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;