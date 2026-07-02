import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import basketballArt from "../assets/chapter-basketball.webp";
import catArt from "../assets/chapter-cat.webp";
import aiArt from "../assets/chapter-ai.webp";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Chapter {
  id: string;
  num: string;
  title: string;
  tagline: string;
  accent: string;
  bg: string;
  copy: string;
  facts: string[];
  art: string;
  artAlt: string;
}

const CHAPTERS: Chapter[] = [
  {
    id: "basketball",
    num: "01",
    title: "BASKETBALL",
    tagline: "DISCIPLINE // TEAMWORK // PRESSURE",
    accent: "#e76f51",
    bg: "#f5f0e8",
    copy: "Basketball taught me what no bootcamp could — staying calm when the shot clock runs out, trusting the team, and training when nobody is watching. The same rules apply to shipping software.",
    facts: ["STAY CALM UNDER PRESSURE", "TRUST THE TEAM", "TRAIN EVERY DAY"],
    art: basketballArt,
    artAlt: "Basketball player dunking, bold comic illustration",
  },
  {
    id: "cats",
    num: "02",
    title: "CATS",
    tagline: "CURIOSITY // PATIENCE // CHAOS",
    accent: "#2a9d8f",
    bg: "#e9f5f3",
    copy: "Living with cats is pair-programming with chaos: unpredictable input, brutal code reviews, zero respect for deadlines. They keep me curious, patient and humble — and occasionally deploy to prod by walking across my keyboard.",
    facts: ["UNPREDICTABLE INPUT", "BRUTAL CODE REVIEWS", "INFINITE CURIOSITY"],
    art: catArt,
    artAlt: "Colorful cat with round glasses and a ball of yarn",
  },
  {
    id: "ai-code",
    num: "03",
    title: "AI × CODE",
    tagline: "BUILD // AUTOMATE // SOLVE",
    accent: "#4361ee",
    bg: "#eef1fd",
    copy: "Software developer by craft. I build AI systems that actually solve problems — RAG chatbots, trading platforms, automation pipelines. Structured thinking in, working products out.",
    facts: ["RAG + VECTOR DBS", "LLM AGENTS", "REAL-TIME SYSTEMS"],
    art: aiArt,
    artAlt: "Friendly robot beside a retro computer running code",
  },
];

const Chapters: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".chapter");

      panels.forEach((panel, i) => {
        // character reveal for the big title
        gsap.from(panel.querySelectorAll(".chapter-title .char"), {
          yPercent: 120,
          duration: 0.7,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(
          panel.querySelectorAll(".chapter-tag, .chapter-copy, .chapter-facts li"),
          {
            y: 40,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 55%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // giant chapter number drifts sideways as you scroll through
        gsap.fromTo(
          panel.querySelector(".chapter-num"),
          { xPercent: 14 },
          {
            xPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {
          // art card floats against scroll (desktop only)
          gsap.fromTo(
            panel.querySelector(".chapter-art"),
            { y: 70, rotate: i % 2 ? -2 : 2 },
            {
              y: -70,
              rotate: i % 2 ? 2 : -2,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );

        });

        // when the next chapter slides over, push this one back into depth
        if (i < panels.length - 1) {
          gsap.to(panel.querySelector(".chapter-frame"), {
            scale: 0.9,
            yPercent: -5,
            rotate: i % 2 ? 2 : -2,
            autoAlpha: 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: panels[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: root }
  );

  return (
    <div className="chapters" ref={root}>
      {CHAPTERS.map((c, i) => (
        <section
          className="chapter"
          key={c.id}
          style={{ backgroundColor: c.bg, zIndex: i + 1 }}
        >
          <div className="chapter-frame">
            <div className="chapter-num" aria-hidden="true">
              {c.num}
            </div>
            <div className="chapter-inner">
              <div className="chapter-text">
                <span
                  className="chapter-tag"
                  style={{ backgroundColor: c.accent }}
                >
                  {c.tagline}
                </span>
                <h3 className="chapter-title">
                  {c.title.split(" ").map((word, wi) => (
                    <span className="word-wrap" key={wi}>
                      {word.split("").map((ch, j) => (
                        <span className="char-mask" key={j}>
                          <span className="char">{ch}</span>
                        </span>
                      ))}
                    </span>
                  ))}
                </h3>
                <p className="chapter-copy brutalist-text">{c.copy}</p>
                <ul className="chapter-facts">
                  {c.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="chapter-art">
                <img src={c.art} alt={c.artAlt} loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Chapters;
