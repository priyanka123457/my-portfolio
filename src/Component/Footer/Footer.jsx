import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left */}
        <div className="footer-about">
          <h2>Priyanka</h2>
          <p>
            Passionate Frontend Developer building modern, responsive 
            and user-friendly web applications.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
           <li><HashLink smooth to="/#home">Home</HashLink></li>
          <li><HashLink smooth to="/#about">About</HashLink></li>
          <li><HashLink smooth to="/#skills">Skills</HashLink></li>
          <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-social">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <a href="https://github.com/priyanka123457"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/priyanka-sen-406a51308/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/__priya_sen__1?igsh=b2c5ajI1NDRuczVs"><FaInstagram /></a>
             <a
    href="https://mail.google.com/mail/u/0/?fs=1&to=senp4891@gmail.com&su=Hello&body=Hi%20Priyanka&tf=cm"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaEnvelope />
  </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Priyanka | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;