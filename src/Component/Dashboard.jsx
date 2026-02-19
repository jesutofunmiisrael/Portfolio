


import React, { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

import profilePic from "../assets/Profile.jpg.jpeg";
import aiprofilepic from "../assets/ai.jpg.jpeg";
import bankpic from "../assets/bank.jpg.jpeg";
import javapic from "../assets/java.jpg.jpeg";
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

  return (
    <>
    <div className="dashboard">

      <Toaster position="top-right" reverseOrder={false} />


      <div className="hero">
        <h1>
          Hi, <span>I'm Israel</span>
        </h1>
        <h2>Full-Stack Developer | React & Node.js</h2>
        <p>
          I build accessible, pixel-perfect, and performant web experiences.
          Bridging the gap between design and engineering with clean code.
        </p>
        <button >View Projects</button>
      </div>


      <section className="about" id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Israel, a Full-Stack Developer specializing in React and Node.js.
              I love building web applications that are accessible, performant, and user-friendly.
              My passion is crafting clean, maintainable code and turning ideas into engaging digital experiences.
            </p>
            <p>
              I’ve worked on projects for a variety of clients, from startups to larger organizations,
              always focusing on creating inclusive digital experiences.
            </p>
            <p>
              When I'm not coding, I enjoy reading sci-fi novels and exploring new technologies.
            </p>
          </div>
          <div className="about-pic">
            <img src={profilePic} alt="Israel" />
          </div>
        </div>
      </section>

 
      <section className="skills" id="skills">
        <h2>Technical Arsenal</h2>
        <p>
          I've worked with a range of technologies in the web development world. From back-end to front-end, here's my current tech stack.
        </p>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <div className="tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind CSS</span>
              <span>HTML5/CSS3</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <div className="tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>REST APIs</span>
              <span>JWT</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Database & Cloud</h3>
            <div className="tags">
              <span>MongoDB</span>
              <span>Firebase</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Tools & Others</h3>
            <div className="tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>

  
      <section className="projects" id="projects">
        <h2>Featured Projects</h2>
        <p>A selection of things I've built. Some for fun, some for clients, all with love.</p>
        <div className="projects-grid">

       
          <div className="project-card">
            <img src={bankpic} alt="Bank Website" />
            <h3>Bank Website</h3>
            <p>A simulated bank app with deposit, transfer, and transaction history features.</p>
            <div className="tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <div className="project-links">
              <a href="https://bank-chi-sandy.vercel.app/" target="_blank" rel="noopener noreferrer">
                TRY Bank
              </a>
            </div>
          </div>

 
          <div className="project-card">
            <img src={javapic} alt="E-commerce Website" />
            <h3>E-commerce Website</h3>
            <p>An online store with product listings, cart functionality, and checkout simulation.</p>
            <div className="tags">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a href="https://tofunmi-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                TRY E-commerce
              </a>
            </div>
          </div>


          <div className="project-card">
            <img src={aiprofilepic} alt="AI Website" />
            <h3>AI Website</h3>
            <p>
              An interactive AI-powered web application. Users can:
              <ul>
                <li>Generate images from text</li>
                <li>Convert text to speech</li>
                <li>Generate videos</li>
              </ul>
            </p>
            <div className="tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <div className="project-links">
              <a href="https://ai-vault-frontend-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                Try AI
              </a>
            </div>
          </div>

        </div>
      </section>


      <section className="contact" id="contact">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          I’m always open to new opportunities or collaborations. Feel free to reach out!
        </p>

        <div className="contact-container">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-social">
            <h3>Connect with me:</h3>
            <div className="social-links">
              <a href="https://github.com/jesutofunmiisrael/" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:jesutofunmiisrael30@gmail.com">Email</a>
              
<a href="https://wa.me/2347087136825" target="_blank">
  WhatsApp
</a>
            </div>
          </div>
        </div>
      </section>
  </div>


<footer className="footer">
  <p>
    Designed & Built by <span>Jesutofunmi Israel Omole</span> © {new Date().getFullYear()}
  </p>
 <div className="social-links">
  <a href="https://github.com/jesutofunmiisrael/" target="_blank" rel="noopener noreferrer">
    GitHub
  </a>

  <a href="https://linkedin.com/jesutofunmi" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>

  <a href="https://www.tiktok.com/@jesutofunmi1230" target="_blank" rel="noopener noreferrer">
    TikTok
  </a>

  <a href="https://x.com/@Jesutofunm50939" target="_blank" rel="noopener noreferrer">
    X
  </a>

  <a href="mailto:jesutofunmiisrael30@gmail.com">
    Email
  </a>
</div>

</footer>

  
     </>
  );
};

export default Dashboard;
