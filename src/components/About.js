import React from "react";
import "../styles/About.css"; // Ensure you have the correct path to your CSS file

function About() {
  return (
    <div id="about" className="about-container">
      <img src="/Balbz.png" alt="My Face" className="about-image" />
      <div className="about-text">
        <h2>Software Engineer</h2>
        <p>
          A Dynamic Software Engineer / QA Engineer with over 7 years of
          versatile experience in the field, blending multiple disciplines to
          deliver exceptional results. My passion lies in ensuring top-notch
          software quality through proficient testing methodologies and
          cutting-edge tools. Skilled in creating and executing comprehensive
          test plans, I excel in conducting rigorous regression and user
          acceptance testing. My keen eye for detail enables me to adeptly
          identify and meticulously document defects in software products,
          driving continuous improvement and delivering unparalleled user
          experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
