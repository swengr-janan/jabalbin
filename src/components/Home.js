import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Hi, I'm John Anthony Balbin!</h1>
        <h2>Get to know me more in my portfolio</h2>
        <div className="social-media-home">
          <a
            href="https://www.linkedin.com/in/jabalbin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/janaaaann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/janbalbin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/swengr-janan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://x.com/0xb4Lb1N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.hackerrank.com/profile/janny_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-hackerrank"></i>
          </a>
          <a
            href="mailto:swengr.johnbalbin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="home-image">
        <img
          src="/Balbzie.png"
          alt="JA Balbin"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Home;
