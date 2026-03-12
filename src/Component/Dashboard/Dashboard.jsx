import React from "react";
import "./Dashboard.css";
import myimg2 from "../../assets/myimg2.png";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard-content">
        <h2>My Dashboard Project</h2>
        <p>
          This is a modern admin dashboard built with React featuring charts,
          analytics, user management and responsive layout.
        </p>
        <button>View Project</button>
      </div>

      <div className="dashboard-image">
        <img src={myimg2} alt="dashboard preview" />
      </div>
    </section>
  );
};

export default Dashboard;