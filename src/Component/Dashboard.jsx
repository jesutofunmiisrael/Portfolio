import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import Header from "./Header";

import profilePic from "../assets/Profile.jpg.jpeg";
import aiprofilepic from "../assets/ai.jpg.jpeg";
import bankpic from "../assets/bank.jpg.jpeg";
import javapic from "../assets/java.jpg.jpeg";
import fitgeniepic from "../assets/fitgenie.jpg.jpeg";
import chatpic from "../assets/chatimg.jpeg";
import apexchatpic from "../assets/Apex.png";   
import cardcheckpic from "../assets/card.png"; 

import "./temp.css";

const projects = [
  {
    img: apexchatpic,
    alt: "ApexChat AI",
    title: "ApexChat AI",
    featured: true,
    badge: "SaaS Platform",
    desc: "Multi-tenant SaaS customer support platform with AI automation, real-time messaging via Socket.io, and an embeddable chat widget. Built for businesses to resolve customer inquiries instantly.",
    tags: ["React", "Node.js", "Socket.io", "AI", "SaaS"],
    live: "https://apexchat-ai-frontend.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: cardcheckpic,
    alt: "Card Check",
    title: "Card Check",
    featured: true,
    badge: "Fintech App",
    desc: "Instant gift card balance checker — pick a card, enter the details, and the platform verifies and pays you out. Supports Google Play, Steam, eBay, Xbox and more.",
    tags: ["React", "Node.js", "MongoDB"],
    live: "https://cardcheck-zeta.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: bankpic,
    alt: "Bank App",
    title: "Banking Platform",
    featured: false,
    badge: "Banking Simulation",
    desc: "Full-stack banking simulation with deposits, withdrawals, and transaction history. JWT-secured routes and clean MVC backend architecture.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://bank-chi-sandy.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: aiprofilepic,
    alt: "AI Platform",
    title: "AI Content Studio",
    featured: false,
    badge: "AI Platform",
    desc: "Multi-feature AI platform for image generation, text-to-speech, and video creation using powerful external AI APIs.",
    tags: ["React", "Node.js", "AI APIs"],
    live: "https://ai-vault-frontend-psi.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: fitgeniepic,
    alt: "FitGenie",
    title: "FitGenie",
    featured: false,
    badge: "fitness App",
    desc: "AI-powered fitness app generating personalised workout and diet plans based on user goals, preferences, and fitness level.",
    tags: ["React", "Node.js", "AI"],
    live: "https://fit-geniee.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: chatpic,
    alt: "Real-Time Chat",
    title: "Real-Time Chat App",
    featured: false,
    badge: "Messaging App",
    desc: "1-on-1 real-time messaging app with Socket.io, JWT authentication, and live user presence indicators.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    live: "https://chat-app-beta-jade-21.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: javapic,
    alt: "Ecommerce",
    title: "E-Commerce Store",
    featured: false,
    badge: "E-Commerce",
    desc: "Modern online store with product listings, cart functionality, and Firebase authentication.",
    tags: ["JavaScript", "Firebase", "HTML/CSS"],
    live: "https://tofunmi-store.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
];

const filters = ["All", "React", "Node.js", "AI", "Socket.io", "SaaS"];

const Dashboard = () => {
  const form = useRef();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) =>
            t.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8dibpic",
        "template_a5gtfgs",
        form.current,
        "Rs1_znBDlK8z5cL2E"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🎉");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Oops! Something went wrong 😅");
        }
      );
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll(".fade-up");
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <Header />

      {[...Array(7)].map((_, i) => (
        <div key={i} className="particle" />
      ))}

      <div className="portfolio-container">

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="hero-section" id="home">
          <div className="hero-eyebrow fade-up">
            <span className="eyebrow-dot" />
            Available for work
          </div>

          <div className="hero-content hero-glow fade-up">
            <h1>
              Hi, I'm <span className="gradient-text">Israel</span>
            </h1>
            <h2 className="typing">Full‑Stack Developer · MERN Stack</h2>
            <p>
              I build clean, scalable web applications — from real-time backends
              to polished React frontends. From idea to deployment, I make it happen.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Hire Me</a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">7+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">1+</span>
                <span className="stat-label">Year XP</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">MERN</span>
                <span className="stat-label">Stack</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">AI</span>
                <span className="stat-label">Integrations</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ───────────────────────────────────────────────── */}
        <section className="section about" id="about">
          <div className="section-label">About Me</div>
          <h2 className="section-title">The Developer Behind the Code</h2>

          <div className="about-grid fade-up">
            <div className="about-text">
              <p>
                I'm Israel — a self-taught Full‑Stack Developer with a deep love
                for the MERN stack. I turn ideas into real, working products,
                from the database to the browser.
              </p>
              <p>
                I specialise in building AI-integrated platforms, real-time
                communication systems, and multi-tenant SaaS applications. I care
                about clean architecture, smooth UX, and code that scales.
              </p>
              <p>
                When I'm not coding, I'm exploring the latest in AI and dreaming
                up the next product to build.
              </p>

              <div className="about-tags">
                <span>Problem Solver</span>
                <span>Fast Learner</span>
                <span>Team Player</span>
                <span>Open to Remote</span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            <div className="about-pic">
              <div className="about-pic-border" />
              <img src={profilePic} alt="Israel Omole" />
            </div>
          </div>
        </section>

        {/* ── SKILLS ──────────────────────────────────────────────── */}
        <section className="section skills" id="skills">
          <div className="section-label">What I Know</div>
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="skills-grid fade-up">
            {[
              {
                icon: "⬡",
                title: "Frontend",
                items: ["React.js", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
              },
              {
                icon: "⚙",
                title: "Backend",
                items: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
              },
              {
                icon: "🗄",
                title: "Database & Auth",
                items: ["MongoDB", "Firebase / Firestore", "JWT", "Bcrypt"],
              },
              {
                icon: "🛠",
                title: "Tools & Deploy",
                items: ["Git & GitHub", "Postman", "Vercel / Render", "VS Code"],
              },
            ].map((card) => (
              <div className="skill-card" key={card.title}>
                <div className="skill-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ────────────────────────────────────────────── */}
        <section className="section projects" id="projects">
          <div className="section-label">My Work</div>
          <h2 className="section-title">Featured Projects</h2>

          <div className="project-filters fade-up">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects-grid fade-up">
            {filteredProjects.map((p) => (
              <div
                className={`project-card ${p.featured ? "project-featured" : ""}`}
                key={p.title}
              >
                {p.featured && (
                  <div className="featured-badge">★ {p.badge}</div>
                )}
                <div className="project-img-wrap">
                  <img src={p.img} alt={p.alt} />
                  <div className="project-overlay">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="overlay-btn"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="overlay-btn outline"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────────── */}
        <section className="section contact" id="contact">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Open to freelance, remote, or full-time roles. Reach out!
          </p>

          <div className="contact-grid fade-up">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
              <button type="submit" className="btn-primary full-width">
                Send Message →
              </button>
            </form>

            <div className="contact-links">
              <h3>Connect With Me</h3>
              <p className="contact-links-sub">
                I typically reply within 24 hours.
              </p>

              {[
                {
                  label: "GitHub",
                  url: "https://github.com/jesutofunmiisrael/",
                  icon: "⌥",
                },
                {
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/jesutofunmi-israel-2193073b5/",
                  icon: "in",
                },
                {
                  label: "jesutofunmiisrael30@gmail.com",
                  url: "mailto:jesutofunmiisrael30@gmail.com",
                  icon: "@",
                },
                {
                  label: "WhatsApp",
                  url: "https://wa.me/2347087136825",
                  icon: "✆",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-item"
                >
                  <span className="link-icon">{link.icon}</span>
                  <span>{link.label}</span>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>

      <footer className="footer">
        <p>
          Designed & built by{" "}
          <span className="gradient-text">Jesutofunmi Israel Omole</span>
        </p>
        <p className="footer-sub">© {new Date().getFullYear()} · All rights reserved</p>
      </footer>
    </>
  );
};

export default Dashboard;