// src/Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-navigation">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/livescore">Live Score</Link>
          <Link to="/subscription">Subscription</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="footer-social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SPORTY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
