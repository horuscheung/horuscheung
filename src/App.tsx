import React, { useEffect, useState, useRef } from "react";
import "./App.scss";
import "./brutalism.scss"; // Import the new brutalism styles
import CursorFollower from "./components/CursorFollower";
import {
  handleMagneticMouseMove,
  handleMagneticMouseLeave,
  TextScramble,
  initTiltEffect,
} from "./utils/animations";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    about: null,
    skills: null,
    projects: null,
    contact: null,
  });

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Detect visible sections
      Object.entries(sectionRefs.current).forEach(([id, section]) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight * 0.75 && rect.bottom > 100;

          if (isVisible) {
            section.classList.add("visible");
          }
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Initialize text scramble effect
  useEffect(() => {
    if (heroTextRef.current) {
      const phrases = ["DESIGN.", "DEVELOP.", "DESTROY.", "REBUILD."];

      const el = heroTextRef.current;
      const fx = new TextScramble(el);

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter % phrases.length]).then(() => {
          setTimeout(next, 2000);
        });
        counter += 1;
      };

      next();
    }
  }, []);

  // Initialize tilt effect for skills
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    skillsRef.current.forEach((skillCard) => {
      if (skillCard) {
        const cleanup = initTiltEffect(skillCard);
        cleanups.push(cleanup);
      }
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  // Scroll monitoring for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="brutalist-grid-bg">
      <CursorFollower />

      <nav
        className={`brutalist-nav ${scrolled ? "scrolled" : ""}`}
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "#ffffff", // Changed to white for better contrast
          boxShadow: scrolled ? "0 5px 0 #000000" : "none",
        }}
      >
        <ul>
          {["hero", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                className="brutalist-nav-link"
                onClick={() => handleScrollToSection(section)}
                onMouseMove={handleMagneticMouseMove}
                onMouseLeave={handleMagneticMouseLeave}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="hero"
        className="brutalist-hero"
        ref={(el) => (sectionRefs.current.hero = el)}
      >
        <div className="brutalist-hero-content">
          <h1
            ref={heroTextRef}
            className="brutalist-glitch"
            data-text="DESIGN. DEVELOP. DESTROY."
            style={{ color: "#000000" }} // Ensuring black color for main text
          ></h1>
          <p className="brutalist-hero-subtitle animate-on-scroll">
            I'M HORUS CHEUNG — DEVELOPER, INNOVATOR, CREATOR, AND PROBLEM
            SOLVER, CRAFTING DIGITAL EXPERIENCES THAT MATTER.
          </p>
          <div className="cta animate-on-scroll">
            <button
              className="brutalist-button"
              onClick={() => handleScrollToSection("contact")}
              onMouseMove={handleMagneticMouseMove}
              onMouseLeave={handleMagneticMouseLeave}
              style={{ fontWeight: "bold" }} // Improved button text weight
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section-padding"
        ref={(el) => (sectionRefs.current.about = el)}
      >
        <div className="container">
          <h2 className="brutalist-title animate-on-scroll">About Me</h2>
          <p className="brutalist-text section-subtitle animate-on-scroll">
            Passionate about creating intuitive, pixel-perfect user experiences
            with clean and efficient code.
          </p>

          <div className="about-content">
            <div className="brutalist-box animate-on-scroll">
              <p className="brutalist-text">
                I'm a full-stack developer specialized in modern web
                technologies. With expertise in the MERN stack and a passion for
                clean, efficient code, I transform complex problems into elegant
                solutions that deliver exceptional user experiences.
              </p>
              <p className="brutalist-text">
                My approach combines technical excellence with creative
                thinking, ensuring that every project not only meets but exceeds
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="section-padding"
        ref={(el) => (sectionRefs.current.skills = el)}
      >
        <div className="container">
          <h2 className="brutalist-title animate-on-scroll">My Skills</h2>
          <p className="brutalist-text section-subtitle animate-on-scroll">
            A CURATED SHOWCASE OF MY TECHNICAL EXPERTISE AND PROFESSIONAL
            CAPABILITIES
          </p>
          <div className="brutalist-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="brutalist-box animate-on-scroll"
                ref={(el) => {
                  if (el) skillsRef.current[index] = el;
                }}
              >
                <div className="skill-icon-wrapper">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                </div>
                <h3 style={{ color: "#000000", fontWeight: 800 }}>
                  {skill.name}
                </h3>
                <p className="brutalist-text" style={{ fontWeight: 600 }}>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="section-padding"
        ref={(el) => (sectionRefs.current.projects = el)}
      >
        <div className="container">
          <h2 className="brutalist-title animate-on-scroll">
            Featured Projects
          </h2>
          <p className="brutalist-text section-subtitle animate-on-scroll">
            EXPLORE SOME OF MY RECENT WORK SHOWCASING MY DEVELOPMENT SKILLS AND
            CREATIVITY
          </p>

          <div className="brutalist-grid">
            <div className="brutalist-project animate-on-scroll">
              <div className="brutalist-project-header">
                <h3>PROJECT_01</h3>
              </div>
              <div className="brutalist-project-content">
                <p className="brutalist-text">
                  Check back later for my upcoming project showcase
                </p>
              </div>
            </div>

            <div className="brutalist-project animate-on-scroll">
              <div className="brutalist-project-header">
                <h3>PROJECT_02</h3>
              </div>
              <div className="brutalist-project-content">
                <p className="brutalist-text">
                  Under construction. Raw code. Pure function.
                </p>
              </div>
            </div>

            <div className="brutalist-project animate-on-scroll">
              <div className="brutalist-project-header">
                <h3>PROJECT_03</h3>
              </div>
              <div className="brutalist-project-content">
                <p className="brutalist-text">
                  Launching soon. Brutalist design meets modern tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="section-padding"
        ref={(el) => (sectionRefs.current.contact = el)}
      >
        <div className="container">
          <h2 className="brutalist-title animate-on-scroll">Let's Connect</h2>
          <p className="brutalist-text section-subtitle animate-on-scroll">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>

          <form
            action="mailto:horuscheung.coding@gmail.com"
            method="post"
            encType="text/plain"
            className="animate-on-scroll brutalist-box"
          >
            <div className="brutalist-form-field">
              <label htmlFor="name">NAME:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="YOUR NAME"
                required
                className="brutalist-input"
              />
            </div>

            <div className="brutalist-form-field">
              <label htmlFor="email">EMAIL:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="YOUR.EMAIL@EXAMPLE.COM"
                required
                className="brutalist-input"
              />
            </div>

            <div className="brutalist-form-field">
              <label htmlFor="message">MESSAGE:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                required
                className="brutalist-input"
              ></textarea>
            </div>

            <button
              type="submit"
              className="brutalist-button"
              onMouseMove={handleMagneticMouseMove}
              onMouseLeave={handleMagneticMouseLeave}
            >
              <span>SEND MESSAGE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </section>

      <footer
        className="brutalist-box"
        style={{
          margin: "20px",
          borderWidth: "3px 0 0 0",
          backgroundColor: "var(--brutalist-light)",
        }}
      >
        <div className="container">
          <p className="brutalist-text" style={{ fontWeight: 700 }}>
            © {new Date().getFullYear()} HORUS_CHEUNG. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

const skills = [
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    description:
      "Strong expertise in building scalable applications with TypeScript.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    description:
      "Experience with MongoDB for database management and querying.",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    description: "Proficient in building backend APIs using Express.js.",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    description: "Skilled in building interactive user interfaces with React.",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    description: "Experienced in server-side development using Node.js.",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    description:
      "Experienced in Java for backend development and object-oriented programming.",
  },
];

export default App;
