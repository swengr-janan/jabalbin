import React from "react";
import "../styles/Footer.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaHackerrank,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="./favicon.png" alt="Logo" className="logo" />
        <p className="copyright">&copy; John Anthony Balbin | 2024</p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/jabalbin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/janaaaann/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/janbalbin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/swengr-janan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/0xb4Lb1N"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.hackerrank.com/profile/janny_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank />
        </a>
        <a
          href="mailto:swengr.johnbalbin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
