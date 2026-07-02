import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.scss";
import "./brutalism.scss";
import "./styles/journey.scss";
import heroImg from "./hero.webp";
import brainIcon from "./brain.svg";
import instagramIcon from "./assets/instagram.svg";
import githubIcon from "./assets/github.svg";
import xIcon from "./assets/x.svg";
import linkedinIcon from "./assets/linkedin.svg";
import CursorFollower from "./components/CursorFollower";
import Marquee from "./components/Marquee";
import Chapters from "./components/Chapters";
import useSmoothScroll, { scrollToSection } from "./hooks/useSmoothScroll";
import {
  handleMagneticMouseMove,
  handleMagneticMouseLeave,
  TextScramble,
  initTiltEffect,
} from "./utils/animations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SECTION_IDS = ["hero", "about", "journey", "skills", "knowledge", "contact"];

const STATEMENT_WORDS =
  "I break complex problems into clear, simple steps — blending software, finance & AI into systems people actually use.".split(
    " "
  );
const STATEMENT_ACCENTS: Record<string, string> = {
  software: "#e63946",
  finance: "#2a9d8f",
  AI: "#4361ee",
  use: "#e76f51",
};

const App: React.FC = () => {
  useSmoothScroll();

  const rootRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // hero headline scramble loop
  useEffect(() => {
    if (!heroTextRef.current) return;
    const phrases = ["DESIGN.", "DEVELOP.", "DELIVER."];
    const fx = new TextScramble(heroTextRef.current);
    let counter = 0;
    let timer: number;
    let cancelled = false;

    const next = () => {
      if (cancelled) return;
      fx.setText(phrases[counter % phrases.length], 20).then(() => {
        timer = window.setTimeout(next, 2000);
      });
      counter += 1;
    };
    next();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  // tilt effect on skill cards
  useEffect(() => {
    const cleanups = skillsRef.current
      .filter(Boolean)
      .map((card) => initTiltEffect(card));
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useGSAP(
    () => {
      // top progress bar
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });

      // nav appears once the hero is mostly gone
      ScrollTrigger.create({
        start: () => window.innerHeight * 0.7,
        end: "max",
        onToggle: (self) => setNavVisible(self.isActive),
      });

      // track active section for the nav
      SECTION_IDS.forEach((id) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => self.isActive && setActiveSection(id),
        });
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        // hero scrubs apart as you scroll away (desktop only —
        // mobile CSS forces transform: none on these elements)
        const heroScrub = {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        };
        gsap.to(".brutalist-hero-image", {
          yPercent: 20,
          scale: 1.08,
          ease: "none",
          scrollTrigger: heroScrub,
        });
        gsap.to(".brutalist-hero-content", {
          yPercent: -36,
          rotate: -4,
          ease: "none",
          scrollTrigger: heroScrub,
        });
        gsap.to(".hero-watermark", {
          xPercent: -22,
          ease: "none",
          scrollTrigger: heroScrub,
        });
      });

      gsap.to(".scroll-indicator-container", {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "25% top",
          scrub: true,
        },
      });

      // statement: words light up as you scroll through
      gsap.to(".statement-text .word", {
        opacity: 1,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: ".statement-text",
          start: "top 78%",
          end: "bottom 45%",
          scrub: true,
        },
      });

      gsap.from(".about-card", {
        y: 70,
        autoAlpha: 0,
        rotate: 1.5,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // journey intro kicker
      gsap.from(".journey-intro .kicker-line", {
        yPercent: 110,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".journey-intro",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // batch-reveal cards in skills & knowledge
      ScrollTrigger.batch(".skill-card", {
        start: "top 85%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 80, autoAlpha: 0, rotate: 2 },
            { y: 0, autoAlpha: 1, rotate: 0, stagger: 0.1, duration: 0.7, ease: "power3.out", overwrite: true }
          ),
      });
      ScrollTrigger.batch(".brutalist-knowledge", {
        start: "top 85%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 80, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.12, duration: 0.7, ease: "power3.out", overwrite: true }
          ),
      });

      gsap.from(".contact-form", {
        y: 60,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // section headers pop in
      gsap.utils.toArray<HTMLElement>(".reveal-title").forEach((el) => {
        gsap.from(el, {
          y: 60,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="brutalist-grid-bg" ref={rootRef}>
      {!isMobile && <CursorFollower />}
      <div className="scroll-progress" aria-hidden="true" />

      <nav
        className={`brutalist-nav ${navVisible ? "visible" : "hidden"}`}
        style={{
          transition: "transform 0.3s ease",
          transform: navVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="nav-container">
          <div className="desktop-logo">HORUS CHEUNG</div>
          <div className="mobile-nav-header">
            <h3 className="mobile-logo">HORUS CHEUNG</h3>
          </div>

          <ul className="nav-links">
            {SECTION_IDS.map((section) => (
              <li key={section}>
                <button
                  className={`brutalist-nav-link ${
                    activeSection === section ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                  onMouseMove={isMobile ? undefined : handleMagneticMouseMove}
                  onMouseLeave={isMobile ? undefined : handleMagneticMouseLeave}
                >
                  {section === "journey"
                    ? "Journey"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-social-icons">
            <a href="https://x.com/horuscheung" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="X" className="social-icon" />
            </a>
            <a href="https://github.com/horuscheung" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://instagram.com/horus.developer" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/horuscheung" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        {/* ============ HERO ============ */}
        <section
          id="hero"
          className="brutalist-hero"
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="brutalist-hero-image"
            style={{
              flex: 1,
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "100vh",
              transform: "translateX(10px)",
            }}
          />

          <div
            className="brutalist-hero-content"
            style={{
              flex: 1,
              padding: "40px",
              backgroundColor: "#ffffff",
              border: "3px solid #000000",
              boxShadow: "5px 5px 0px #000000",
              marginLeft: "0px",
              zIndex: 2,
              alignSelf: "center",
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
              <span style={{ color: "#e63946", fontWeight: "bold" }}> Developer</span>,
              <span style={{ color: "#2a9d8f", fontWeight: "bold" }}> Innovator</span>,
              <span style={{ color: "#e76f51", fontWeight: "bold" }}> Creator</span>, and
              <span style={{ color: "#4361ee", fontWeight: "bold" }}> Problem Solver</span>.
              <br />
              Crafting digital experiences that matter.
            </p>
          </div>

          <div className="hero-watermark" aria-hidden="true">
            HORUS CHEUNG ✦ HORUS CHEUNG
          </div>

          <div className="scroll-indicator-container">
            <div className="scroll-indicator">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <span className="scroll-text">Scroll Down</span>
            </div>
          </div>
        </section>

        <Marquee
          items={["DEVELOPER", "BASKETBALL", "CATS", "AI", "PROBLEM SOLVER"]}
          color="#faff00"
        />

        {/* ============ ABOUT ============ */}
        <section id="about" className="about-section">
          <div className="section-content-container">
            <p className="statement-text" aria-label={STATEMENT_WORDS.join(" ")}>
              {STATEMENT_WORDS.map((word, i) => {
                const key = word.replace(/[^a-zA-Z]/g, "");
                const accent = STATEMENT_ACCENTS[key];
                return (
                  <span
                    className="word"
                    key={i}
                    style={accent ? { color: accent } : undefined}
                  >
                    {word}
                  </span>
                );
              })}
            </p>

            <div className="about-card brutalist-box">
              <p className="brutalist-text">
                I'm a problem solver who loves breaking complicated issues into
                clear, simple steps. My professional experience blends software
                development, finance and artificial intelligence — turning
                complex ideas into easy-to-use systems.
              </p>
              <p className="brutalist-text">
                Outside of work I stay disciplined through basketball and
                regular training, keep curious with my cats, and read across
                psychology, history and investing to sharpen how I think.
              </p>
            </div>
          </div>
        </section>

        {/* ============ JOURNEY (chapters) ============ */}
        <div id="journey" className="journey-zone">
          <section className="journey-intro">
            <div className="kicker-mask">
              <span className="kicker-line">WHAT DRIVES ME</span>
            </div>
            <div className="kicker-mask">
              <span className="kicker-line kicker-sub">
                ( SCROLL TO DISCOVER ↓ )
              </span>
            </div>
          </section>
          <Chapters />
        </div>

        <Marquee
          items={["TYPESCRIPT", "REACT", "NODE.JS", "MONGODB", "JAVA", "LLM AGENTS", "RAG"]}
          color="#e9f5f3"
          reverse
          speed={26}
        />

        {/* ============ SKILLS ============ */}
        <section id="skills">
          <div className="section-content-container">
            <h2 className="brutalist-title reveal-title">Skills</h2>
            <p className="brutalist-text section-subtitle reveal-title">
              This section is boring, but my code isn't.
            </p>
            <div className="brutalist-grid responsive-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`brutalist-box skill-card ${
                    skill.name === "More!" ? "highlighted-skill" : ""
                  }`}
                  ref={(el) => {
                    if (el) skillsRef.current[index] = el;
                  }}
                >
                  <div className="skill-icon-wrapper">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  </div>
                  <h3 style={{ color: "#000000", fontWeight: 800 }}>{skill.name}</h3>
                  <p className="brutalist-text" style={{ fontWeight: 600 }}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ KNOWLEDGE ============ */}
        <section id="knowledge">
          <div className="section-content-container">
            <h2 className="brutalist-title reveal-title">Knowledge</h2>
            <p className="brutalist-text section-subtitle reveal-title">
              Beyond Code: What I Think, Learn, and Explore.
            </p>

            <div className="brutalist-grid responsive-grid-knowledge">
              <div className="brutalist-knowledge">
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

              <div className="brutalist-knowledge">
                <div className="brutalist-knowledge-header">
                  <h3>AI & Automation</h3>
                </div>
                <div className="brutalist-knowledge-content">
                  <p className="brutalist-text">
                    Built smart systems like customer-service chatbots using
                    Retrieval-Augmented Generation (RAG) and vector databases to
                    deliver fast, context-aware answers.
                    <br />
                    Strong understanding of LLM behavior, knowledge embeddings,
                    AI Agents, and how to design AI tools that actually solve
                    user problems—not just look smart.
                  </p>
                </div>
              </div>

              <div className="brutalist-knowledge">
                <div className="brutalist-knowledge-header">
                  <h3>Multidisciplinary</h3>
                </div>
                <div className="brutalist-knowledge-content">
                  <p className="brutalist-text">
                    I love reading, I love learning across fields—connecting
                    ideas from psychology, history, productivity, and investing
                    to improve how I think and work. Some favorites that shaped
                    me: Poor Charlie's Almanack, Atomic Habits, Sapiens, Deep
                    Work.
                  </p>
                </div>
              </div>

              <div className="brutalist-knowledge">
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

        <Marquee
          items={["LET'S CONNECT", "SAY HELLO", "GET IN TOUCH"]}
          color="#ffd166"
          speed={18}
        />

        {/* ============ CONTACT ============ */}
        <section id="contact">
          <div className="section-content-container">
            <h2 className="brutalist-title reveal-title">Let's Connect</h2>

            <form
              action="mailto:horuscheung.coding@gmail.com"
              method="post"
              encType="text/plain"
              className="brutalist-box responsive-form contact-form"
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
    icon: brainIcon,
    description:
      "I pick up any technology required to solve problems and deliver real results.",
  },
];

export default App;
