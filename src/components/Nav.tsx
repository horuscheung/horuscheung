import React from "react";
import { NAV, SOCIALS } from "../data/content";

interface NavProps {
  active: string;
  scrolled: boolean;
  onNavigate: (id: string, flight: number) => void;
  onHome: () => void;
}

const Nav: React.FC<NavProps> = ({ active, scrolled, onNavigate, onHome }) => (
  <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
    <a
      className="nav-brand"
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        onHome();
      }}
    >
      HORUS<span className="tick">//</span>CHEUNG
    </a>

    <ul className="nav-links">
      {NAV.map(({ id, label, idx, flight }) => (
        <li key={id}>
          <button
            className={active === id ? "active" : ""}
            onClick={() => onNavigate(id, flight)}
          >
            <span className="idx">{idx}</span>
            {label}
          </button>
        </li>
      ))}
    </ul>

    <div className="nav-social">
      {SOCIALS.map(({ href, icon, alt }) => (
        <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={alt} />
        </a>
      ))}
    </div>
  </nav>
);

export default Nav;
