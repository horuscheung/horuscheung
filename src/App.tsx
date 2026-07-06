import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/site.scss";
import CursorFollower from "./components/CursorFollower";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FlightPath, { flightStore } from "./components/FlightPath";
import Toolkit from "./components/Toolkit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MARQUEE_TOP, MARQUEE_STACK } from "./data/content";
import useSmoothScroll, {
  lenisStore,
  scrollToSection,
} from "./hooks/useSmoothScroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/*
 * Page layout (top to bottom):
 *   <Nav />          fixed header, tracks the active section
 *   <Hero />         name + mission map
 *   <Marquee />      scrolling tape
 *   <FlightPath />   pinned 3D space flight, project cards 01–04
 *   <Marquee />      scrolling tape (reverse)
 *   <Toolkit />      section 05 — skills + knowledge
 *   <Contact />      section 06 — links + form
 *   <Footer />
 *
 * All scroll-driven choreography for Hero/Toolkit/Contact lives in
 * the useGSAP block below (scoped to rootRef); FlightPath owns its
 * own Three.js scene and ScrollTrigger pin.
 */

const App: React.FC = () => {
  useSmoothScroll();

  const rootRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* nav clicks: flight legs jump into the pinned timeline */
  const handleNav = (id: string, flight: number) => {
    const st = flightStore.st;
    if (flight >= 0 && st) {
      const y =
        st.start + flightStore.checkpoints[flight] * (st.end - st.start);
      if (lenisStore.lenis) {
        lenisStore.lenis.scrollTo(y, { duration: 1.6 });
      } else {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      scrollToSection(id);
    }
  };

  useGSAP(
    () => {
      // top progress bar
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });

      // nav backdrop after leaving the top
      ScrollTrigger.create({
        start: 40,
        end: "max",
        onToggle: (self) => setScrolled(self.isActive),
      });

      // active nav for the non-flight sections
      ["toolkit", "contact"].forEach((id) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(id);
            } else {
              setActiveSection((prev) => (prev === id ? "" : prev));
            }
          },
        });
      });

      // ------- hero entrance -------
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero-title .c", {
          yPercent: 120,
          duration: 0.9,
          stagger: 0.03,
        })
        .from(
          ".hero-eyebrow, .hero-scramble, .hero-desc",
          { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.12 },
          "-=0.5"
        )
        .from(
          ".hero-art",
          { y: 60, autoAlpha: 0, rotate: 6, duration: 0.9 },
          "-=0.6"
        )
        .from(".hero-cue", { autoAlpha: 0, duration: 0.6 }, "-=0.3");

      // vectr-style red/blue lines drawing in
      gsap.utils
        .toArray<SVGPathElement>(".hero-deco path")
        .forEach((path, i) => {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
          intro.to(
            path,
            { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" },
            0.4 + i * 0.25
          );
        });

      // hero drifts apart on scroll
      gsap.to(".hero-inner", {
        yPercent: -14,
        autoAlpha: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-cue", {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "20% top",
          scrub: true,
        },
      });

      // ------- shared section reveals (contact runs its own, gated
      // on the pixel artwork loading) -------
      gsap.utils
        .toArray<HTMLElement>(".sec:not(.contact-sec)")
        .forEach((sec) => {
        const reveal = (targets: string | NodeListOf<Element>, vars: gsap.TweenVars, start = "top 68%") => {
          const els =
            typeof targets === "string" ? sec.querySelectorAll(targets) : targets;
          if (!els.length) return;
          gsap.from(els, {
            ...vars,
            scrollTrigger: {
              trigger: sec,
              start,
              toggleActions: "play none none reverse",
            },
          });
        };

        reveal(".sec-title .c", {
          yPercent: 120,
          duration: 0.7,
          stagger: 0.03,
          ease: "power3.out",
        });
        reveal(".sec-num", {
          y: 46,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
        });
        reveal(".sec-rule", {
          scaleX: 0,
          duration: 1,
          ease: "power2.inOut",
        });
        reveal(
          ".reveal",
          {
            y: 46,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "top 58%"
        );
      });

      // the line descends into the toolkit
      gsap.fromTo(
        ".descent-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#toolkit",
            start: "top 92%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      // cards batch in
      ScrollTrigger.batch(".tool-card, .knowledge-tile", {
        start: "top 86%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 46, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.08,
              duration: 0.6,
              ease: "power3.out",
              overwrite: true,
            }
          ),
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="site" ref={rootRef}>
      {!isMobile && <CursorFollower />}
      <div className="scroll-progress" aria-hidden="true" />

      <Nav
        active={activeSection}
        scrolled={scrolled}
        onNavigate={handleNav}
        onHome={() => scrollToSection("hero")}
      />

      <main className="page">
        <Hero />
        <Marquee items={MARQUEE_TOP} />
        <FlightPath onActiveChapter={setActiveSection} />
        <Marquee items={MARQUEE_STACK} reverse speed={26} />
        <Toolkit />
        <div className="pre-contact-spacer" aria-hidden="true" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
