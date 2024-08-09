import React from "react";
import "../styles/Home.css"; // Ensure you have the correct path to your CSS file

function Home() {
  return (
    <div id="home" className="home-container">
      <div className="home-text">
        <h1>Hi, I'm John Anthony L. Balbin!</h1>
        <h2>Get to know me more in my portfolio</h2>
      </div>
      <div className="home-image">
        <img src="/Balbz.png" alt="John Anthony L. Balbin" />
      </div>
    </div>
  );
}

export default Home;
