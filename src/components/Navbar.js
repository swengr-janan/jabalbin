import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "../styles/Navbar.css"; // Ensure you have the correct path to your CSS file

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Add state for burger menu

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

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle burger menu state
  };

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <nav className={navbarClasses.join(" ")}>
      <div className="navbar-container">
        <div class="navbar-logo">
          <img src={`${process.env.PUBLIC_URL}/ja-logo.png`} alt="Logo" />
        </div>
        <ul className={`nav-menu ${isOpen ? "is-active" : ""}`}>
          {" "}
          {/* Add conditional class for mobile menu */}
          <li className="nav-item">
            <Link to="home" className="nav-links" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-links" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              className="nav-links"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              className="nav-links"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          {/* <li className="nav-item">
              <Link
                to="socials"
                className="nav-links"
                smooth={true}
                duration={500}
              >
                Socials
              </Link>
            </li> */}
        </ul>
        <div className="navbar-burger" onClick={toggleMenu}>
          {" "}
          {/* Add burger menu */}
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
