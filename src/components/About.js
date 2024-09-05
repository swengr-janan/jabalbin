import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section software-engineer">
        <div className="icon">
          <span role="img" aria-label="hammer and wrench">
            🛠️
          </span>
        </div>
        <h2>Software Engineer</h2>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          As a Software Engineer with over seven years of experience, I have
          worked on Web Development and Blockchain Technology projects across
          various industries, including automotive and embedded systems. My
          background includes international experience, having worked in both
          Japan and the Philippines.
        </p>
        <p style={{ fontSize: "1.2em", display: "block" }}>
          <strong>
            • C Language • C++ • Visual Basic • PHP • MySQL • JavaScript • HTML
            • CSS • ReactJS • JIRA • VS Code
          </strong>
        </p>
      </div>
      <div className="about-section qa-specialist">
        <div className="icon">
          <span role="img" aria-label="wrench">
            🔧
          </span>
        </div>

        <h2>QA Specialist</h2>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          As a Quality Assurance Specialist, I have a strong focus on ensuring
          the reliability and functionality of software products across various
          industries. My expertise lies in identifying defects, optimizing
          testing processes, and collaborating closely with development teams to
          enhance overall product quality.
        </p>
        <p style={{ fontSize: "1.2em", display: "block" }}>
          <strong>
            • Cygwin • Green Hills Software • Hidemaru • JIRA • Confluence •
            Araxis Merge • Cypress • Appium • Manual and Automated Testing •
            Functional Testing • Performance Testing • Regression Testing
          </strong>
        </p>
      </div>
      <div className="about-section web-scrapper">
        <div className="icon">
          <span role="img" aria-label="spider web">
            🕸️
          </span>
        </div>
        <h2>Web Scrapper</h2>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          Recently delved into the fascinating world of web scraping and quickly
          became intrigued by its potential. I began by extracting valuable data
          from various websites and converting it into actionable insights.
          Along the way, I developed skills in writing efficient scraping
          scripts, managing large datasets, and ensuring the accuracy and
          integrity of the data collected.
        </p>
        <p style={{ fontSize: "1.2em", display: "block" }}>
          <strong>
            • Python • BeautifulSoup • Scrapy • Selenium • Pandas • NumPy
          </strong>
        </p>
      </div>
    </div>
  );
};

export default About;
