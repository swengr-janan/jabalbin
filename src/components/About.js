import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section software-engineer">
        <div className="icon">🛠️</div>
        <h2>Software Engineer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <ul className="tech-stack">
          <li>C Language</li>
          <li>C++</li>
          <li>Visual Basic</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>ReactJS</li>
          <li>JIRA</li>
          <li>VS Code</li>
        </ul>
      </div>
      <div className="about-section qa-specialist">
        <div className="icon">🔧</div>
        <h2>QA Specialist</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <ul className="tech-stack">
          <li>Cygwin</li>
          <li>Green Hills Software</li>
          <li>Hidemaru</li>
          <li>JIRA</li>
          <li>Confluence</li>
          <li>Araxis Merge</li>
          <li>Cypress</li>
          <li>Appium</li>
          <li>Manual and Automated Testing</li>
          <li>Functional Testing</li>
          <li>Performance Testing</li>
          <li>Regression Testing</li>
        </ul>
      </div>
      <div className="about-section web-scrapper">
        <div className="icon">🕸️</div>
        <h2>Web Scrapper</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <ul className="tech-stack">
          <li>Jupyter</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
