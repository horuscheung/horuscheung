import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chars from "./Chars";
import { SKILLS, KNOWLEDGE } from "../data/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* Section 05 — stack + beyond-code knowledge tiles.
   Entrance: the flight line carries on — a glowing curve draws
   itself from the previous page down into the toolkit as you
   scroll across the boundary. */

const Toolkit: React.FC = () => {
  const secRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const sec = secRef.current!;
      const path = pathRef.current!;

      /* the curve draws in sync with the hand-off scroll */
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top bottom",
          end: "top 20%",
          scrub: 0.5,
        },
      });

      /* touchdown diamond appears once the line has landed */
      gsap.fromTo(
        ".jc-end",
        { autoAlpha: 0, scale: 0.4, transformOrigin: "50% 50%" },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: sec,
            start: "top 24%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: secRef }
  );

  return (
    <section className="sec" id="toolkit" ref={secRef}>
      <svg
        className="journey-curve"
        viewBox="0 0 1440 640"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="jc-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M 720 0 C 750 120, 520 160, 470 260 C 420 360, 980 340, 950 460 C 925 560, 420 570, 215 610"
          fill="none"
          stroke="url(#jc-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <text className="jc-end" x="215" y="618" textAnchor="middle">
          ◆
        </text>
      </svg>
      <div className="sec-inner">
        <header className="sec-head">
          <span className="sec-num">05</span>
          <div className="sec-head-text">
            <span className="sec-kicker">
              <span className="dot">◆</span> STACK + BEYOND CODE
            </span>
            <h2 className="sec-title">
              <Chars text="THE TOOLKIT" />
            </h2>
          </div>
          <div className="sec-rule" />
        </header>

        <div className="toolkit-grid">
          {SKILLS.map((s) => (
            <div className="tool-card" key={s.name}>
              <img src={s.icon} alt={s.name} loading="lazy" />
              <div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="knowledge-grid">
          {KNOWLEDGE.map((k) => (
            <div className="knowledge-tile" key={k.idx}>
              <span className="k-idx">{k.idx}</span>
              <h3>{k.title}</h3>
              <p>{k.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
