import React from "react";
import Chars from "./Chars";
import { SKILLS, KNOWLEDGE } from "../data/content";

/* Section 05 — stack + beyond-code knowledge tiles. */

const Toolkit: React.FC = () => (
  <section className="sec" id="toolkit">
    <div className="sec-inner">
      <div className="descent-line" aria-hidden="true" />
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

export default Toolkit;
