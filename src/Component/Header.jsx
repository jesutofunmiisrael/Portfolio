import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">

      {/* LEFT SIDE - LOGO */}
      <div className="logo">
        <span className="logo-icon">&gt;_</span>
        <span className="logo-text">israel.dev</span>
      </div>

      {/* NAVIGATION */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" className="resume-btn">Resume</a>
      </nav>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

    </header>
  );
};

export default Header;
