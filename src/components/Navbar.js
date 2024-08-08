import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"; // Ensure you have the correct path to your CSS file

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <nav className={navbarClasses.join(" ")}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src="/ja-logo.png" alt="My Logo" style={{ height: "200px" }} />
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-links">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/socials" className="nav-links">
              Socials
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
