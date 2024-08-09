import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="hero"></div>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="socials">
          <Socials />
        </section>
      </main>
    </div>
  );
}

export default App;
