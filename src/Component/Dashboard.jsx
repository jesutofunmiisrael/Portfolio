



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
    category: "SaaS Platform",
    desc: "Multi-tenant customer support platform with AI automation, real-time messaging, and an embeddable chat widget.",
    tags: ["React", "Node.js", "Socket.io", "AI", "SaaS"],
    live: "https://apexchat-ai-frontend.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: cardcheckpic,
    alt: "Card Check",
    title: "Card Check",
    featured: true,
    category: "Fintech App",
    desc: "Instant gift card balance checker where users verify cards and request fast payout across multiple card types.",
    tags: ["React", "Node.js", "MongoDB"],
    live: "https://cardcheck-zeta.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: bankpic,
    alt: "Bank App",
    title: "Banking Platform",
    featured: false,
    category: "Banking Simulation",
    desc: "Secure banking simulation with deposits, withdrawals, transaction history, protected routes, and clean backend structure.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://bank-chi-sandy.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: aiprofilepic,
    alt: "AI Platform",
    title: "AI Content Studio",
    featured: false,
    category: "AI Platform",
    desc: "AI platform for generating images, speech, and video content using modern external AI APIs.",
    tags: ["React", "Node.js", "AI APIs"],
    live: "https://ai-vault-frontend-psi.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: fitgeniepic,
    alt: "FitGenie",
    title: "FitGenie",
    featured: false,
    category: "Fitness App",
    desc: "AI-powered fitness app that creates personalised workout and diet plans based on user goals and preferences.",
    tags: ["React", "Node.js", "AI"],
    live: "https://fit-geniee.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: chatpic,
    alt: "Real-Time Chat",
    title: "Real-Time Chat App",
    featured: false,
    category: "Messaging App",
    desc: "1-on-1 real-time messaging app with Socket.io, JWT authentication, and live presence indicators.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    live: "https://chat-app-beta-jade-21.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: javapic,
    alt: "Ecommerce",
    title: "E-Commerce Store",
    featured: false,
    category: "E-Commerce",
    desc: "Modern online store with product listings, cart experience, and Firebase authentication.",
    tags: ["JavaScript", "Firebase", "HTML/CSS"],
    live: "https://tofunmi-store.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
];
const filters = ["All", "React", "Node.js", "AI", "Socket.io", "SaaS"];
const skills = [
  {
    title: "Frontend Engineering",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "MVC Structure",
    ],
  },
  {
    title: "Database & Security",
    items: [
      "MongoDB",
      "Firebase",
      "JWT Auth",
      "Bcrypt",
      "Protected Routes",
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      "Git & GitHub",
      "Postman",
      "Vercel",
      "Render",
      "VS Code",
    ],
  },
];
const Dashboard = () => {
  const form = useRef();
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase())
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
          toast.success("Message sent successfully.");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 90) {
          element.classList.add("visible");
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
      <main className="site-shell">
        <section className="hero" id="home">
          <div className="hero-bg-orb hero-bg-orb-one" />
          <div className="hero-bg-orb hero-bg-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="availability-pill">
                <span />
                Available for freelance and remote roles
              </div>
              <p className="hero-kicker">Full-Stack MERN Developer</p>
              <h1>
                I build reliable web products with clean interfaces and scalable
                backend systems.
              </h1>
              <p className="hero-description">
                I’m Jesutofunmi Israel , a developer focused on React,
                Node.js, real-time applications, AI integrations, and SaaS-style
                products that are easy to use and ready to grow.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View selected work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Let’s talk
                </a>
              </div>
            </div>
            <div className="hero-panel reveal">
              <div className="profile-card">
                <div className="profile-image-wrap">
                  <img src={profilePic} alt="Jesutofunmi Israel " />
                </div>
                <div className="profile-meta">
                  <p className="profile-name">Jesutofunmi Israel</p>
                  <p className="profile-role">MERN Stack Developer</p>
                </div>
                <div className="profile-lines">
                  <div>
                    <span>Focus</span>
                    <strong>SaaS · AI · Realtime</strong>
                  </div>
                  <div>
                    <span>Location</span>
                    <strong>Lagos, Nigeria</strong>
                  </div>
                  <div>
                    <span>Status</span>
                    <strong>Open to work</strong>
                  </div>
                </div>
              </div>
              <div className="metrics-card">
                <div>
                  <strong>7+</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>2+</strong>
                  <span>Year XP</span>
                </div>
                <div>
                  <strong>MERN</strong>
                  <span>Main Stack</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="about">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-label">About</p>
              <h2>A practical developer who turns ideas into working products.</h2>
            </div>
            <div className="about-layout reveal">
              <div className="about-copy">
                <p>
                  I’m a self-taught Full-Stack Developer with a strong interest in
                  building useful, real-world products. My main stack is React,
                  Node.js, Express, and MongoDB.
                </p>
                <p>
                  I enjoy working on applications that need more than just a nice
                  interface — authentication, dashboards, real-time messaging,
                  database structure, API integration, and deployment.
                </p>
                <p>
                  My goal is simple: build clean products that users understand
                  quickly and businesses can rely on.
                </p>
              </div>
              <div className="about-card">
                <h3>What I bring</h3>
                <div className="value-list">
                  <span>Clean frontend implementation</span>
                  <span>Secure backend architecture</span>
                  <span>AI and API integrations</span>
                  <span>Real-time communication systems</span>
                  <span>Fast learning and product thinking</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-label">Skills</p>
              <h2>Technologies I use to build full-stack products.</h2>
            </div>
            <div className="skills-grid reveal">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.title}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading section-heading-row reveal">
              <div>
                <p className="section-label">Projects</p>
                <h2>Selected builds with real product logic.</h2>
              </div>
              <div className="filter-row">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`filter-btn ${
                      activeFilter === filter ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="projects-grid reveal">
              {filteredProjects.map((project) => (
                <article
                  className={`project-card ${
                    project.featured ? "featured" : ""
                  }`}
                  key={project.title}
                >
                  <div className="project-image">
                    <img src={project.img} alt={project.alt} />
                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-topline">
                      <span>{project.category}</span>
                      {project.featured && <strong>Featured</strong>}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-label">Contact</p>
              <h2>Have a project, role, or idea? Let’s discuss it.</h2>
            </div>
            <div className="contact-grid reveal">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full name"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email address"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                />
                <button type="submit" className="btn btn-primary full-width">
                  Send message
                </button>
              </form>
              <aside className="contact-card">
                <h3>Connect directly</h3>
                <p>I usually reply within 24 hours.</p>
                <a href="mailto:jesutofunmiisrael30@gmail.com">
                  jesutofunmiisrael30@gmail.com
                </a>
                <a
                  href="https://github.com/jesutofunmiisrael/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jesutofunmi-israel-2193073b5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/2347087136825"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jesutofunmi Israel Omole.</p>
        <span>Designed and built with React.</span>
      </footer>
    </>
  );
};
export default Dashboard;