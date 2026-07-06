import React, { useEffect, useRef } from "react";
import { TextScramble } from "../utils/animations";

/* Landing section: name, scrambled roles, mission-map panel.
   Entrance/scroll animations live in App's useGSAP (selectors
   .hero-*), scoped to the site root. */

const ROLES = ["SOFTWARE DEVELOPER", "AI BUILDER", "PROBLEM SOLVER"];

const Hero: React.FC = () => {
  const scrambleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!scrambleRef.current) return;
    const fx = new TextScramble(scrambleRef.current);
    let counter = 0;
    let timer: number;
    let cancelled = false;

    const next = () => {
      if (cancelled) return;
      fx.setText(ROLES[counter % ROLES.length], 24).then(() => {
        timer = window.setTimeout(next, 2200);
      });
      counter += 1;
    };
    next();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-deco" aria-hidden="true">
        <svg className="deco-a" viewBox="0 0 220 90">
          <path
            className="deco-red"
            d="M2 88 C 60 80, 80 30, 140 24 S 210 8, 218 2"
          />
        </svg>
        <svg className="deco-b" viewBox="0 0 260 100">
          <path
            className="deco-blue"
            d="M2 6 C 70 14, 110 70, 170 76 S 246 92, 258 98"
          />
        </svg>
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">
            HONG KONG — MISSION: PORTFOLIO <span className="blink">▮</span>
          </p>
          <h1 className="hero-title">
            <span className="line line-1">
              {"HORUS".split("").map((c, i) => (
                <span className="c" key={i}>
                  {c}
                </span>
              ))}
            </span>
            <span className="line line-2">
              {"CHEUNG".split("").map((c, i) => (
                <span className="c" key={i}>
                  {c}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-scramble" ref={scrambleRef}></p>
          <p className="hero-desc">
            <b>Developer, innovator, creator, problem solver.</b> Strap in —
            the line launches through deep space, past four mission mockups
            that show how I think and build.
          </p>
        </div>

        <div className="hero-art">
          <div className="hero-art-frame">
            <svg
              className="mission-map"
              viewBox="0 0 340 300"
              role="img"
              aria-label="Mission flight plan"
            >
              <g className="mm-orbits">
                <ellipse cx="170" cy="150" rx="150" ry="118" />
                <ellipse cx="170" cy="150" rx="112" ry="86" />
                <ellipse cx="170" cy="150" rx="72" ry="54" />
              </g>
              <path
                className="mm-route"
                d="M28 268 C 90 236, 60 176, 118 152 S 214 130, 234 96 S 296 52, 312 32"
              />
              <g className="mm-points">
                <circle cx="28" cy="268" r="5" fill="#fb7185" />
                <circle cx="118" cy="152" r="5" fill="#2dd4bf" />
                <circle cx="234" cy="96" r="5" fill="#a78bfa" />
                <circle cx="312" cy="32" r="5" fill="#4f6df5" />
              </g>
              <g className="mm-labels">
                <text x="38" y="272">01 LAUNCH</text>
                <text x="128" y="138">02 RAGDESK</text>
                <text x="176" y="88">03 FLOWOPS</text>
                <text x="222" y="20">04 MINDSHELF</text>
              </g>
              <g className="mm-sat">
                <circle cx="170" cy="32" r="3.4" fill="#ffd166" />
              </g>
              <circle cx="170" cy="150" r="10" fill="#1a2030" stroke="#4f6df5" />
            </svg>
          </div>
          <span className="hero-art-caption">FIG. 00 — FLIGHT PLAN</span>
        </div>
      </div>

      <div className="hero-cue">
        SCROLL TO LAUNCH
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <path
            d="M7 1 V 17 M2 12 L 7 18 L 12 12"
            stroke="#9aa0ab"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
