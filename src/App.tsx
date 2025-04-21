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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pastHeroSection, setPastHeroSection] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    about: null,
    skills: null,
    knowledge: null,
    contact: null,
  });
  const isScrollingRef = useRef(false);
  const currentSectionIndexRef = useRef(0);
  const sectionOrder = ["hero", "about", "skills", "knowledge", "contact"];

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRefs.current.hero) {
        const heroHeight = sectionRefs.current.hero.offsetHeight;
        const isScrolled = window.scrollY > 50;
        const isPastHero = window.scrollY > heroHeight * 0.7; // Show nav after scrolling 70% past hero

        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }

        if (isPastHero !== pastHeroSection) {
          setPastHeroSection(isPastHero);
        }
      }

      Object.entries(sectionRefs.current).forEach(([id, section]) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight * 0.5 && rect.bottom > 100;

          if (isVisible) {
            section.classList.add("visible");
            currentSectionIndexRef.current = sectionOrder.indexOf(id);
            setActiveSection(id);
          }
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, pastHeroSection]);

  // Section-based scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrollingRef.current) return;
      isScrollingRef.current = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      let nextSectionIndex = currentSectionIndexRef.current + direction;

      // Ensure index is within bounds
      nextSectionIndex = Math.max(
        0,
        Math.min(nextSectionIndex, sectionOrder.length - 1)
      );

      if (nextSectionIndex !== currentSectionIndexRef.current) {
        const nextSectionId = sectionOrder[nextSectionIndex];
        document
          .getElementById(nextSectionId)
          ?.scrollIntoView({ behavior: "smooth" });
        currentSectionIndexRef.current = nextSectionIndex;
      }

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Initialize text scramble effect
  useEffect(() => {
    if (heroTextRef.current) {
      const phrases = ["DESIGN.", "DEVELOP.", "DELIVER."];

      const el = heroTextRef.current;
      const fx = new TextScramble(el);

      let counter = 0;
      let animationTimer: number;

      const next = () => {
        // Clear any existing animation
        window.clearTimeout(animationTimer);

        // Set a fixed text length to prevent excessive animation
        const text = phrases[counter % phrases.length];
        fx.setText(text, 20) // Add a second parameter to limit scramble length
          .then(() => {
            // Set a fixed delay between animations
            animationTimer = window.setTimeout(next, 2000);
          });

        counter += 1;
      };

      next();

      // Cleanup function
      return () => {
        window.clearTimeout(animationTimer);
      };
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
    // Close mobile menu when a nav item is clicked
    setMobileMenuOpen(false);

    // Update current section index
    currentSectionIndexRef.current = sectionOrder.indexOf(id);
  };

  // Detect device type for cursor follower
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="brutalist-grid-bg">
      {!isMobile && <CursorFollower />}

      <nav
        className={`brutalist-nav ${scrolled ? "scrolled" : ""} ${
          mobileMenuOpen ? "mobile-open" : ""
        } ${pastHeroSection ? "visible" : "hidden"}`}
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "#ffffff",
          boxShadow: scrolled ? "0 5px 0 #000000" : "none",
          transition:
            "transform 0.3s ease, background-color 0.3s, box-shadow 0.3s",
          transform: pastHeroSection ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="nav-container">
          <div className="mobile-nav-header">
            <h3 className="mobile-logo">HORUS CHEUNG</h3>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              ></span>
            </button>
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? "show" : ""}`}>
            {["hero", "about", "skills", "knowledge", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    className={`brutalist-nav-link ${
                      activeSection === section ? "active" : ""
                    }`}
                    onClick={() => handleScrollToSection(section)}
                    onMouseMove={isMobile ? undefined : handleMagneticMouseMove}
                    onMouseLeave={
                      isMobile ? undefined : handleMagneticMouseLeave
                    }
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      <div className="content-wrapper">
        <section
          id="hero"
          className="brutalist-hero"
          ref={(el) => (sectionRefs.current.hero = el)}
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            position: "relative", // Add this for positioning the scroll indicator
          }}
        >
          {/* left half: hero image */}
          <div
            className="brutalist-hero-image"
            style={{
              flex: 1,
              backgroundImage: "url('src/hero.png')", // <-- replace with your image path
              backgroundSize: "contain", // show entire image
              backgroundRepeat: "no-repeat", // prevent tiling
              backgroundPosition: "center", // center within its box
              minHeight: "100vh",
              transform: "translateX(10px)", // shift image right
            }}
          />

          {/* right half: existing content */}
          <div
            className="brutalist-hero-content"
            style={{
              flex: 1,
              padding: "40px",
              backgroundColor: "#ffffff",
              border: "3px solid #000000",
              boxShadow: "5px 5px 0px #000000",
              marginLeft: "0px", // overlap content onto image
              zIndex: 2,
            }}
          >
            <h1
              ref={heroTextRef}
              className="brutalist-glitch"
              data-text=""
              style={{
                color: "#000000",
                fontSize: "clamp(1.8rem, 5vw, 4rem)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
            ></h1>
            <p className="brutalist-hero-subtitle">
              Hi, I'm Horus Cheung —
              <span style={{ color: "#e63946", fontWeight: "bold" }}>
                {" "}
                Developer
              </span>
              ,
              <span style={{ color: "#2a9d8f", fontWeight: "bold" }}>
                {" "}
                Innovator
              </span>
              ,
              <span style={{ color: "#e76f51", fontWeight: "bold" }}>
                {" "}
                Creator
              </span>
              , and
              <span style={{ color: "#4361ee", fontWeight: "bold" }}>
                {" "}
                Problem Solver
              </span>
              .
              <br />
              Crafting digital experiences that matter.
            </p>
          </div>

          {/* Add scroll indicator */}
          <div className="scroll-indicator-container">
            <div className="scroll-indicator">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <span className="scroll-text">Scroll Down</span>
            </div>
          </div>
        </section>

        <section id="about" ref={(el) => (sectionRefs.current.about = el)}>
          <div className="section-content-container">
            <h2 className="brutalist-title animate-on-scroll">About Me</h2>
            <p className="brutalist-text section-subtitle animate-on-scroll">
              Problem solver with a sharp mind for breaking down complexity.
              <br />
              Blending tech, finance, and AI with a disciplined, growth-driven
              mindset.
            </p>

            <div className="about-content">
              <div className="brutalist-box animate-on-scroll">
                <p className="brutalist-text">
                  I'm a problem solver who loves breaking down complicated
                  issues into clear, simple steps. I have a strong ability to
                  understand the core of a problem and find practical, efficient
                  solutions through structured thinking.
                </p>
                <p className="brutalist-text">
                  My professional experience blends software development,
                  finance, and artificial intelligence. I enjoy turning complex
                  ideas into easy-to-use systems. Outside of work, I stay
                  disciplined through regular fitness, basketball, reading, and
                  actively practicing habits that help me continually grow and
                  improve.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" ref={(el) => (sectionRefs.current.skills = el)}>
          <div className="section-content-container">
            <h2 className="brutalist-title animate-on-scroll">Skills</h2>
            <p className="brutalist-text section-subtitle animate-on-scroll">
              This section is boring, but my code isn’t.
            </p>
            <div className="brutalist-grid responsive-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`brutalist-box animate-on-scroll skill-card
                    ${skill.name === "More!" ? "highlighted-skill" : ""}`}
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
          id="knowledge"
          ref={(el) => (sectionRefs.current.knowledge = el)}
        >
          <div className="section-content-container">
            <h2 className="brutalist-title animate-on-scroll">Knowledge</h2>
            <p className="brutalist-text section-subtitle animate-on-scroll">
              Beyond Code: What I Think, Learn, and Explore.
            </p>

            <div className="brutalist-grid responsive-grid-knowledge">
              <div className="brutalist-knowledge animate-on-scroll">
                <div className="brutalist-knowledge-header">
                  <h3>Financial & Trading</h3>
                </div>
                <div className="brutalist-knowledge-content">
                  <p className="brutalist-text">
                    Hands-on experience in fintech, including building trading
                    platforms, processing real-time order flows, and integrating
                    market data APIs.
                    <br />
                    Skilled in analyzing price action, applying trading
                    psychology to make disciplined, strategic decisions.
                  </p>
                </div>
              </div>

              <div className="brutalist-knowledge animate-on-scroll">
                <div className="brutalist-knowledge-header">
                  <h3>AI & Automation</h3>
                </div>
                <div className="brutalist-knowledge-content">
                  <p className="brutalist-text">
                    Built smart systems like customer-service chatbots using
                    Retrieval-Augmented Generation (RAG) and vector databases to
                    deliver fast, context-aware answers.
                    <br />
                    Strong understanding of LLM behavior, knowledge
                    embeddings,AI Agents, and how to design AI tools that
                    actually solve user problems—not just look smart.
                  </p>
                </div>
              </div>

              <div className="brutalist-knowledge animate-on-scroll">
                <div className="brutalist-knowledge-header">
                  <h3>Multidisciplinary</h3>
                </div>
                <div className="brutalist-knowledge-content">
                  <p className="brutalist-text">
                    I love reading, I love learning across fields—connecting
                    ideas from psychology, history, productivity, and investing
                    to improve how I think and work. Some favorites that shaped
                    me: Poor Charlie’s Almanack, Atomic Habits, Sapiens,Deep
                    Work
                  </p>
                </div>
              </div>
              <div className="brutalist-knowledge animate-on-scroll">
                <div className="brutalist-knowledge-header">
                  <h3>Sports & Discipline</h3>
                </div>
                <div className="brutalist-knowledge-content">
                  <p className="brutalist-text">
                    I stay active through basketball and regular training—not
                    just for health, but to sharpen focus, build discipline, and
                    practice teamwork. Playing sports has taught me how to stay
                    calm under pressure, support others, and commit to long-term
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" ref={(el) => (sectionRefs.current.contact = el)}>
          <div className="section-content-container">
            <h2 className="brutalist-title animate-on-scroll">Let's Connect</h2>

            <form
              action="mailto:horuscheung.coding@gmail.com"
              method="post"
              encType="text/plain"
              className="animate-on-scroll brutalist-box responsive-form"
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
                  placeholder="YOUR MESSAGE..."
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
            padding: "15px",
            borderWidth: "3px 0 0 0",
            backgroundColor: "var(--brutalist-light)",
            textAlign: "center",
          }}
        >
          <div className="container">
            <p
              className="brutalist-text"
              style={{ fontWeight: 700, fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
            >
              © {new Date().getFullYear()} HORUS_CHEUNG. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
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
  {
    name: "More!",
    icon: "src/brain.svg",
    description:
      "I pick up any technology required to solve problems and deliver real results.",
  },
];

export default App;
