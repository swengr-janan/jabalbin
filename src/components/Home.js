import React from "react";
import "../styles/Home.css"; // Ensure you have the correct path to your CSS file

function Home() {
  return (
    <div className="home-container">
      {/* Replace the video element with an image element */}
      <img src="/bg-black.jpg" alt="Hero" className="hero-image" />
      <div className="overlay"></div>
      <div className="content">
        <div className="description left">
          <p>Quality Assurance Specialist</p>
        </div>
        <img src="/Balbz.png" alt="My Face" className="face-image" />
        <div className="description right">
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
