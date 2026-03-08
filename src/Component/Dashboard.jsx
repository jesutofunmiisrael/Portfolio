

// import React, { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import toast, { Toaster } from "react-hot-toast";

// import profilePic from "../assets/Profile.jpg.jpeg";
// import aiprofilepic from "../assets/ai.jpg.jpeg";
// import bankpic from "../assets/bank.jpg.jpeg";
// import javapic from "../assets/java.jpg.jpeg";

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
//                 <a href="https://bank-chi-sandy.vercel.app/" target="_blank">
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
//                 <a href="https://tofunmi-store.vercel.app/" target="_blank">
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
//                 <a href="https://ai-vault-frontend-psi.vercel.app/" target="_blank">
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

//               <a href="https://github.com/jesutofunmiisrael/" target="_blank">
//                 GitHub
//               </a>
//               <a href="https://linkedin.com/in/yourusername" target="_blank">
//                 LinkedIn
//               </a>
//               <a href="mailto:jesutofunmiisrael30@gmail.com">
//                 Email
//               </a>
//               <a href="https://wa.me/2347087136825" target="_blank">
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



import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

import Header from "./Header";

import profilePic from "../assets/Profile.jpg.jpeg";
import aiprofilepic from "../assets/ai.jpg.jpeg";
import bankpic from "../assets/bank.jpg.jpeg";
import javapic from "../assets/java.jpg.jpeg";
import fitgeniepic from "../assets/fitgenie.jpg.jpeg"; // add a screenshot to your assets folder

import "./temp.css";

const Dashboard = () => {
  const form = useRef();

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
        if (rect.top < window.innerHeight - 100) {
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

      {/* ✅ Header added here */}
      <Header />

      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      <div className="portfolio-container">

        <section className="hero-section">
          <div className="hero-content hero-glow fade-up">
            <h1>
              Hello, I'm <span className="gradient-text">Israel</span>
            </h1>

            <h2 className="typing">
              Full‑Stack Developer | React & Node.js
            </h2>

            <p>
              I build clean, modern and scalable web applications with
              a focus on excellent user experience and performance.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#about" className="btn-outline">About Me</a>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <h2 className="section-title">About Me</h2>

          <div className="about-grid fade-up">
            <div className="about-text">
              <p>
                I'm Israel, a passionate Full‑Stack Developer specializing
                in React, Node.js, and modern web technologies.
              </p>

              <p>
                I focus on writing clean, scalable and maintainable code.
                I love turning ideas into seamless digital experiences.
              </p>

              <p>
                Outside development, I explore new technologies and
                enjoy sci‑fi and AI innovations.
              </p>
            </div>

            <div className="about-pic">
              <img src={profilePic} alt="Israel" />
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="skills-grid fade-up">
            <div className="skill-card">
              <h3>Frontend</h3>
              <div className="tags">
                <span>React</span>
                <span>Next.js</span>
                <span>Tailwind</span>
                <span>HTML5/CSS3</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <div className="tags">
                <span>Node.js</span>
                <span>Express</span>
                <span>REST APIs</span>
                <span>JWT</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <div className="tags">
                <span>MongoDB</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <div className="tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid fade-up">

            <div className="project-card">
              <img src={bankpic} alt="Bank App" />
              <h3>Bank Website</h3>
              <p>
                A bank simulation with deposits, transfers, and
                transaction history.
              </p>
              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://bank-chi-sandy.vercel.app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src={javapic} alt="Ecommerce" />
              <h3>E-commerce App</h3>
              <p>A modern online store with cart and checkout simulation.</p>
              <div className="tags">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="https://tofunmi-store.vercel.app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src={aiprofilepic} alt="AI Website" />
              <h3>AI Website</h3>
              <p>
                Generate images, convert text to speech, and create AI videos.
              </p>
              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://ai-vault-frontend-psi.vercel.app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>

            {/* ✅ FitGenie project added here */}
            <div className="project-card">
              <img src={fitgeniepic} alt="FitGenie" />
              <h3>FitGenie</h3>
              <p>
                AI-powered fitness app with personalized workout plans,
                nutrition tracking, and performance analytics.
              </p>
              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>AI</span>
              </div>
              <div className="project-links">
                <a href="https://fit-geniee.vercel.app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>

          </div>
        </section>

        <section className="section contact" id="contact">
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-subtitle">Let's work together!</p>

          <div className="contact-grid fade-up">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="user_name" placeholder="Full Name" required />
              <input type="email" name="user_email" placeholder="Email Address" required />
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
              />
              <button type="submit" className="btn-primary">Send Message</button>
            </form>

            <div className="contact-links">
              <h3>Connect With Me</h3>

              <a href="https://github.com/jesutofunmiisrael/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:jesutofunmiisrael30@gmail.com">
                Email
              </a>
              <a href="https://wa.me/2347087136825" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Jesutofunmi Israel Omole — Built with ❤️</p>
      </footer>
    </>
  );
};

export default Dashboard;
