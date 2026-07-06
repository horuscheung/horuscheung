import React from "react";
import { SOCIALS } from "../data/content";

const Footer: React.FC = () => (
  <footer className="footer">
    <span>© {new Date().getFullYear()} HORUS CHEUNG</span>
    <div className="footer-social">
      {SOCIALS.map(({ href, icon, alt }) => (
        <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={alt} />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
