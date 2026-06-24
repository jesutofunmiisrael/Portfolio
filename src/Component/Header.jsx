import React, { useState, useEffect } from "react";
import "./header.css";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen]    = useState(false);
  const [scrolled, setScrolled]    = useState(false);
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "skills", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  // Close menu on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".nav") &&
        !e.target.closest(".hamburger")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="logo" onClick={close}>
        <span className="logo-icon">&gt;_</span>
        <span className="logo-text">israel.dev</span>
      </a>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={activeSection === href.slice(1) ? "nav-active" : ""}
            onClick={close}
          >
            {label}
          </a>
        ))}
        <a href="/resume.pdf" className="resume-btn" onClick={close}>
          Resume ↓
        </a>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setMenuOpen((prev) => !prev)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </header>
  );
};

export default Header;