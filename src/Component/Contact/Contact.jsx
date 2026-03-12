import React, { useState } from "react"; // <-- useState yaha import karein
import "./Contact.css";
import image from "../../assets/image.png"; // Yahan apne logo ka path use karein

function Contact() {
  const [message, setMessage] = useState(""); // User ko dikhane ke liye

  const handleSubmit = (e) => {
  e.preventDefault(); // Page reload nahi hoga

  // Form data get karein
  const name = e.target[0].value;
  const email = e.target[1].value;
  const userMessage = e.target[2].value;

  // Alert me message show karein
  alert(`Thank you ${name}! Your message has been sent.`);

  // Form reset
  e.target.reset();
};
  return (
    <section className="contact-section">
      <img src={image} alt="Logo" className="contact-logo" />
      <img src={image} alt="Logo" className="contact-logo1" />

      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have any questions? We'd love to hear from you.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* User ko message display karne ke liye */}
        {message && <p className="success-message">{message}</p>}
      </div>
    </section>
  );
}

export default Contact;
