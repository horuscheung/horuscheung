import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chars from "./Chars";
import PixelScatter from "./PixelScatter";
import pixelHorus from "../assets/pixel-horus.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/*
 * Section 06 — contact. Entrance choreography referenced from the
 * ram-portfolio: a gaussian curtain of bars sweeps up as the section
 * scrolls in, the inner content parallaxes, and everything holds
 * until the pixel artwork has loaded — then masked lines slide up
 * and the pixel-scatter converges on the left.
 */

const CURTAIN_BARS = 5;
/* gaussian weights over the 5 bars (sigma = 5/3.5) */
const WEIGHTS = Array.from({ length: CURTAIN_BARS }, (_, i) => {
  const s = 5 / 3.5;
  const d = i - (CURTAIN_BARS - 1) / 2;
  return Math.exp(-(d * d) / (2 * s * s));
});

const Contact: React.FC = () => {
  const secRef = useRef<HTMLElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imgReady, setImgReady] = useState(false);
  const [inView, setInView] = useState(false);
  const [forced, setForced] = useState(false);

  /* the section only shows once the artwork is loaded (or after a
     safety timeout, so a failed CDN never hides the contact form) */
  const shown = (imgReady || forced) && inView;

  useEffect(() => {
    if (!inView || imgReady) return;
    const t = window.setTimeout(() => setForced(true), 4000);
    return () => window.clearTimeout(t);
  }, [inView, imgReady]);

  useGSAP(
    () => {
      const sec = secRef.current!;

      /* curtain: bars sweep up with gaussian offsets as we scroll in */
      ScrollTrigger.create({
        trigger: sec,
        start: "top bottom",
        end: "top top",
        onUpdate: (self) => {
          barRefs.current.forEach((bar, i) => {
            if (!bar) return;
            const w = WEIGHTS[i];
            const startAt = (1 - w) * 0.4;
            const t = Math.min(1, Math.max(0, (self.progress - startAt) / 0.6));
            bar.style.transform = `translateY(${-101 * t}%)`;
          });
        },
      });

      /* inner content parallax while entering */
      gsap.fromTo(
        ".contact-parallax",
        { yPercent: -14 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      /* arm the reveal gate */
      ScrollTrigger.create({
        trigger: sec,
        start: "top 68%",
        once: true,
        onEnter: () => setInView(true),
      });
    },
    { scope: secRef }
  );

  /* entrance timeline — fires only when artwork is ready AND in view */
  useGSAP(
    () => {
      if (!shown) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(secRef.current, { "--sec-alpha": 1, duration: 0.01 } as gsap.TweenVars)
        .from(".sec-num", { y: 46, autoAlpha: 0, duration: 1 }, 0)
        .from(
          ".sec-title .c",
          { yPercent: 120, duration: 0.85, stagger: 0.045 },
          0.05
        )
        .from(".sec-rule", { scaleX: 0, duration: 1.3, ease: "power2.inOut" }, 0.1);
      secRef.current!.classList.add("in");
    },
    { scope: secRef, dependencies: [shown] }
  );

  return (
    <section
      className="sec contact-sec"
      id="contact"
      ref={secRef}
      data-shown={shown ? "1" : "0"}
    >
      <div className="curtain" aria-hidden="true">
        {Array.from({ length: CURTAIN_BARS }, (_, i) => (
          <div
            className="bar"
            key={i}
            ref={(el) => {
              barRefs.current[i] = el;
            }}
          />
        ))}
      </div>

      <div className="sec-inner contact-parallax">
        <header className="sec-head">
          <span className="sec-num">06</span>
          <div className="sec-head-text">
            <span className="sec-kicker">
              <span className="dot">◆</span> FINAL APPROACH
            </span>
            <h2 className="sec-title">
              <Chars text="LET'S CONNECT" />
            </h2>
          </div>
          <div className="sec-rule" />
        </header>

        <div className="contact-grid">
          <div className="contact-left">
            <PixelScatter
              className="pixel-canvas"
              src={pixelHorus}
              play={shown}
              onReady={(ok) => setImgReady(ok)}
            />
            <p className="lede mask-line" style={{ "--d": "0.35s" } as React.CSSProperties}>
              <span>Let's build something</span>
            </p>
            <div className="cta-big">
              <span className="mask-line" style={{ "--d": "0.52s" } as React.CSSProperties}>
                <span>OUT OF</span>
              </span>
              <span className="mask-line" style={{ "--d": "0.66s" } as React.CSSProperties}>
                <span>THIS WORLD</span>
              </span>
            </div>
            <ul className="contact-links">
              {[
                ["mailto:horuscheung.coding@gmail.com", "horuscheung.coding@gmail.com", "0.85s"],
                ["https://github.com/horuscheung", "github.com/horuscheung", "0.97s"],
                ["https://linkedin.com/in/horuscheung", "linkedin.com/in/horuscheung", "1.09s"],
              ].map(([href, label, d]) => (
                <li
                  className="mask-line"
                  style={{ "--d": d } as React.CSSProperties}
                  key={label}
                >
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="contact-form mask-line"
            style={{ "--d": "0.75s" } as React.CSSProperties}
            action="mailto:horuscheung.coding@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="form-body">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                Send message
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path
                    d="M1 6 H 14 M9 1 L 15 6 L 9 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
