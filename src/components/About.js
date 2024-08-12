import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section software-engineer">
        <div className="icon">🛠️</div>
        <h2>Software Engineer</h2>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          As a Software Engineer with over seven years of experience, I have
          worked on Web Development and Blockchain Technology projects across
          various industries, including automotive and embedded systems. My
          background includes international experience, having worked in both
          Japan and the Philippines.
        </p>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          <strong>
            • C Language • C++ • Visual Basic • PHP • MySQL • JavaScript • HTML
            • CSS • ReactJS • JIRA • VS Code
          </strong>
        </p>
      </div>
      <div className="about-section qa-specialist">
        <div className="icon">🔧</div>
        <h2>QA Specialist</h2>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          As a Quality Assurance Specialist, I have a strong focus on ensuring
          the reliability and functionality of software products across various
          industries. My expertise lies in identifying defects, optimizing
          testing processes, and collaborating closely with development teams to
          enhance overall product quality.
        </p>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          <strong>
            • Cygwin • Green Hills Software • Hidemaru • JIRA • Confluence •
            Araxis Merge • Cypress • Appium • Manual and Automated Testing •
            Functional Testing • Performance Testing • Regression Testing
          </strong>
        </p>
      </div>
      <div className="about-section web-scrapper">
        <div className="icon">🕸️</div>
        <h2>Web Scrapper</h2>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          As a Web Scrapper, I specialize in extracting valuable data from
          various websites and transforming it into actionable insights. My
          skills include writing efficient scraping scripts, handling large
          datasets, and ensuring data accuracy and integrity.
        </p>
        <p style={{ fontSize: "0.9em", display: "block" }}>
          <strong>
            • Python • BeautifulSoup • Scrapy • Selenium • Pandas • NumPy
          </strong>
        </p>
      </div>
    </div>
  );
};

export default About;
