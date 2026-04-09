// import React, { useState } from "react";
// import "./header.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header className="header">

//       <div className="logo">
//         <span className="logo-icon">&gt;_</span>
//         <span className="logo-text">israel.dev</span>
//       </div>

//       <nav className={`nav ${menuOpen ? "active" : ""}`}>
//         <a href="#about">About</a>
//         <a href="#skills">Skills</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//         <a href="/resume.pdf" className="resume-btn">Resume</a>
//       </nav>

     
//       <div className="hamburger" onClick={toggleMenu}>
//         <span className={menuOpen ? "bar open" : "bar"}></span>
//         <span className={menuOpen ? "bar open" : "bar"}></span>
//         <span className={menuOpen ? "bar open" : "bar"}></span>
//       </div>

//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import "./header.css";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
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
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </header>
  );
};

export default Header;



