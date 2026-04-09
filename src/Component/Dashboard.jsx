


// import React, { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import toast, { Toaster } from "react-hot-toast";

// import Header from "./Header";

// import profilePic from "../assets/Profile.jpg.jpeg";
// import aiprofilepic from "../assets/ai.jpg.jpeg";
// import bankpic from "../assets/bank.jpg.jpeg";
// import javapic from "../assets/java.jpg.jpeg";
// import fitgeniepic from "../assets/fitgenie.jpg.jpeg"; // add a screenshot to your assets folder

// import "./temp.css";

// const Dashboard = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_8dibpic",
//         "template_a5gtfgs",
//         form.current,
//         "Rs1_znBDlK8z5cL2E"
//       )
//       .then(
//         () => {
//           toast.success("Message sent successfully! 🎉");
//           e.target.reset();
//         },
//         (error) => {
//           console.error(error.text);
//           toast.error("Oops! Something went wrong 😅");
//         }
//       );
//   };

//   useEffect(() => {
//     const revealElements = document.querySelectorAll(".fade-up");

//     const revealOnScroll = () => {
//       revealElements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight - 100) {
//           el.classList.add("visible");
//         }
//       });
//     };

//     window.addEventListener("scroll", revealOnScroll);
//     revealOnScroll();

//     return () => window.removeEventListener("scroll", revealOnScroll);
//   }, []);

//   return (
//     <>
//       <Toaster position="top-right" />

//       {/* ✅ Header added here */}
//       <Header />

//       <div className="particle"></div>
//       <div className="particle"></div>
//       <div className="particle"></div>
//       <div className="particle"></div>
//       <div className="particle"></div>
//       <div className="particle"></div>
//       <div className="particle"></div>

//       <div className="portfolio-container">

//         <section className="hero-section">
//           <div className="hero-content hero-glow fade-up">
//             <h1>
//               Hello, I'm <span className="gradient-text">Israel</span>
//             </h1>

//             <h2 className="typing">
//               Full‑Stack Developer | React & Node.js
//             </h2>

//             <p>
//               I build clean, modern and scalable web applications with
//               a focus on excellent user experience and performance.
//             </p>

//             <div className="hero-buttons">
//               <a href="#projects" className="btn-primary">View Projects</a>
//               <a href="#about" className="btn-outline">About Me</a>
//             </div>
//           </div>
//         </section>

//         <section className="section about" id="about">
//           <h2 className="section-title">About Me</h2>

//           <div className="about-grid fade-up">
//             <div className="about-text">
//               <p>
//                 I'm Israel, a passionate Full‑Stack Developer specializing
//                 in React, Node.js, and modern web technologies.
//               </p>

//               <p>
//                 I focus on writing clean, scalable and maintainable code.
//                 I love turning ideas into seamless digital experiences.
//               </p>

//               <p>
//                 Outside development, I explore new technologies and
//                 enjoy sci‑fi and AI innovations.
//               </p>
//             </div>

//             <div className="about-pic">
//               <img src={profilePic} alt="Israel" />
//             </div>
//           </div>
//         </section>

//         <section className="section skills" id="skills">
//           <h2 className="section-title">Skills & Technologies</h2>

//           <div className="skills-grid fade-up">
//             <div className="skill-card">
//               <h3>Frontend</h3>
//               <div className="tags">
//                 <span>React</span>
//                 <span>Next.js</span>
//                 <span>Tailwind</span>
//                 <span>HTML5/CSS3</span>
//               </div>
//             </div>

//             <div className="skill-card">
//               <h3>Backend</h3>
//               <div className="tags">
//                 <span>Node.js</span>
//                 <span>Express</span>
//                 <span>REST APIs</span>
//                 <span>JWT</span>
//               </div>
//             </div>

//             <div className="skill-card">
//               <h3>Database</h3>
//               <div className="tags">
//                 <span>MongoDB</span>
//                 <span>Firebase</span>
//               </div>
//             </div>

//             <div className="skill-card">
//               <h3>Tools</h3>
//               <div className="tags">
//                 <span>Git</span>
//                 <span>GitHub</span>
//                 <span>Figma</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section projects" id="projects">
//           <h2 className="section-title">Featured Projects</h2>

//           <div className="projects-grid fade-up">

//             <div className="project-card">
//               <img src={bankpic} alt="Bank App" />
//               <h3>Bank Website</h3>
//               <p>
//                 A bank simulation with deposits, transfers, and
//                 transaction history.
//               </p>
//               <div className="tags">
//                 <span>React</span>
//                 <span>Node.js</span>
//                 <span>MongoDB</span>
//               </div>
//               <div className="project-links">
//                 <a href="https://bank-chi-sandy.vercel.app/" target="_blank" rel="noreferrer">
//                   Live Demo
//                 </a>
//               </div>
//             </div>

//             <div className="project-card">
//               <img src={javapic} alt="Ecommerce" />
//               <h3>E-commerce App</h3>
//               <p>A modern online store with cart and checkout simulation.</p>
//               <div className="tags">
//                 <span>JavaScript</span>
//                 <span>HTML</span>
//                 <span>CSS</span>
//               </div>
//               <div className="project-links">
//                 <a href="https://tofunmi-store.vercel.app/" target="_blank" rel="noreferrer">
//                   Live Demo
//                 </a>
//               </div>
//             </div>

//             <div className="project-card">
//               <img src={aiprofilepic} alt="AI Website" />
//               <h3>AI Website</h3>
//               <p>
//                 Generate images, convert text to speech, and create AI videos.
//               </p>
//               <div className="tags">
//                 <span>React</span>
//                 <span>Node.js</span>
//                 <span>MongoDB</span>
//               </div>
//               <div className="project-links">
//                 <a href="https://ai-vault-frontend-psi.vercel.app/" target="_blank" rel="noreferrer">
//                   Live Demo
//                 </a>
//               </div>
//             </div>

//             {/* ✅ FitGenie project added here */}
//             <div className="project-card">
//               <img src={fitgeniepic} alt="FitGenie" />
//               <h3>FitGenie</h3>
//               <p>
//                 AI-powered fitness app with personalized workout plans,
//                 nutrition tracking, and performance analytics.
//               </p>
//               <div className="tags">
//                 <span>React</span>
//                 <span>Node.js</span>
//                 <span>AI</span>
//               </div>
//               <div className="project-links">
//                 <a href="https://fit-geniee.vercel.app/" target="_blank" rel="noreferrer">
//                   Live Demo
//                 </a>
//               </div>
//             </div>

//           </div>
//         </section>

//         <section className="section contact" id="contact">
//           <h2 className="section-title">Contact Me</h2>
//           <p className="contact-subtitle">Let's work together!</p>

//           <div className="contact-grid fade-up">
//             <form ref={form} onSubmit={sendEmail} className="contact-form">
//               <input type="text" name="user_name" placeholder="Full Name" required />
//               <input type="email" name="user_email" placeholder="Email Address" required />
//               <textarea
//                 name="message"
//                 placeholder="Write your message..."
//                 rows="5"
//                 required
//               />
//               <button type="submit" className="btn-primary">Send Message</button>
//             </form>

//             <div className="contact-links">
//               <h3>Connect With Me</h3>

//               <a href="https://github.com/jesutofunmiisrael/" target="_blank" rel="noreferrer">
//                 GitHub
//               </a>
//               <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
//                 LinkedIn
//               </a>
//               <a href="mailto:jesutofunmiisrael30@gmail.com">
//                 Email
//               </a>
//               <a href="https://wa.me/2347087136825" target="_blank" rel="noreferrer">
//                 WhatsApp
//               </a>
//             </div>
//           </div>
//         </section>

//       </div>

//       <footer className="footer">
//         <p>© {new Date().getFullYear()} Jesutofunmi Israel Omole — Built with ❤️</p>
//       </footer>
//     </>
//   );
// };

// export default Dashboard;



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

import "./temp.css";

const projects = [
  {
    img: bankpic,
    alt: "Bank App",
    title: "Banking Platform",
    desc: "Full-stack banking simulation with deposits, withdrawals, and transaction history. JWT-secured routes and MVC backend.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://bank-chi-sandy.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: javapic,
    alt: "Ecommerce",
    title: "E-Commerce Store",
    desc: "Modern online store with product listings, cart functionality, and Firebase authentication.",
    tags: ["JavaScript", "Firebase", "HTML/CSS"],
    live: "https://tofunmi-store.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: aiprofilepic,
    alt: "AI Platform",
    title: "AI Content Studio",
    desc: "Multi-feature AI platform for image generation, text-to-speech, and video creation using external AI APIs.",
    tags: ["React", "Node.js", "AI APIs"],
    live: "https://ai-vault-frontend-psi.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: fitgeniepic,
    alt: "FitGenie",
    title: "FitGenie",
    desc: "AI-powered fitness app generating personalised workout and diet plans based on user goals and preferences.",
    tags: ["React", "Node.js", "AI"],
    live: "https://fit-geniee.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
  {
    img: chatpic,
    alt: "Real-Time Chat",
    title: "Real-Time Chat App",
    desc: "1-on-1 real-time messaging app with Socket.io, JWT authentication, and live user presence indicators.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    live: "https://chat-app-beta-jade-21.vercel.app/",
    github: "https://github.com/jesutofunmiisrael",
  },
];

const Dashboard = () => {
  const form = useRef();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React", "Node.js", "AI APIs", "Socket.io"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.some((t) => t.includes(activeFilter)));

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
              I build clean, scalable web applications — from real-time
              backends to polished React frontends.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Hire Me</a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">5+</span>
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
            </div>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────── */}
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
                I focus on clean code, scalable architecture, and smooth user
                experiences. My projects range from AI-integrated platforms to
                real-time communication apps.
              </p>
              <p>
                When I'm not coding, I'm exploring what's new in AI and
                dreaming up the next project to build.
              </p>

              <div className="about-tags">
                <span>Problem Solver</span>
                <span>Fast Learner</span>
                <span>Team Player</span>
                <span>Open to Remote</span>
              </div>
            </div>

            <div className="about-pic">
              <div className="about-pic-border" />
              <img src={profilePic} alt="Israel Omole" />
            </div>
          </div>
        </section>

        {/* ── SKILLS ─────────────────────────────────────────────── */}
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
                title: "Tools",
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

        {/* ── PROJECTS ───────────────────────────────────────────── */}
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
              <div className="project-card" key={p.title}>
                <div className="project-img-wrap">
                  <img src={p.img} alt={p.alt} />
                  <div className="project-overlay">
                    <a href={p.live} target="_blank" rel="noreferrer" className="overlay-btn">
                      Live Demo ↗
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="overlay-btn outline">
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

        {/* ── CONTACT ────────────────────────────────────────────── */}
        <section className="section contact" id="contact">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Open to freelance, remote, or full-time roles. Reach out!
          </p>

          <div className="contact-grid fade-up">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <input type="text" name="user_name" placeholder="Full Name" required />
                <input type="email" name="user_email" placeholder="Email Address" required />
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
                { label: "GitHub", url: "https://github.com/jesutofunmiisrael/", icon: "⌥" },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/jesutofunmi-israel-2193073b5/", icon: "in" },
                { label: "Email", url: "mailto:jesutofunmiisrael30@gmail.com", icon: "@" },
                { label: "WhatsApp", url: "https://wa.me/2347087136825", icon: "✆" },
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