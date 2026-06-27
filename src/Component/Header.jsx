



import React, { useEffect, useState } from "react";
import "./header.css";
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["about", "skills", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 170) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-mark">I</span>
        <span className="logo-text">Jesutofunmi Israel</span>
      </a>
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            className={activeSection === link.href.slice(1) ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
        <a href="/resume.pdf" className="resume-link" onClick={closeMenu}>
          Resume
        </a>
      </nav>
      <button
        className={`menu-button ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        type="button"
      >
        <span />
        <span />
      </button>
    </header>
  );
};
export default Header;