import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/path/to/logo.png" alt="MyPortfolio" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
