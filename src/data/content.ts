import brainIcon from "../brain.svg";
import instagramIcon from "../assets/instagram.svg";
import githubIcon from "../assets/github.svg";
import xIcon from "../assets/x.svg";
import linkedinIcon from "../assets/linkedin.svg";

/* Central site content — every section reads from here. */

export interface NavItem {
  id: string;
  label: string;
  idx: string;
  /** index into flightStore.checkpoints, or -1 for a normal section */
  flight: number;
}

export const NAV: NavItem[] = [
  { id: "tradepulse", label: "Trade", idx: "01", flight: 0 },
  { id: "ragdesk", label: "RAG", idx: "02", flight: 1 },
  { id: "flowops", label: "Flow", idx: "03", flight: 2 },
  { id: "designlab", label: "Design", idx: "04", flight: 3 },
  { id: "toolkit", label: "Toolkit", idx: "05", flight: -1 },
  { id: "contact", label: "Contact", idx: "06", flight: -1 },
];

export const SKILLS = [
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    desc: "Scalable, type-safe applications end to end.",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    desc: "Interactive interfaces with modern React.",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    desc: "Server-side systems and APIs.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    desc: "Document data modelling and querying.",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    desc: "Backend development, OOP foundations.",
  },
  {
    name: "Anything else",
    icon: brainIcon,
    desc: "I pick up whatever the problem needs.",
  },
];

export const KNOWLEDGE = [
  {
    idx: "K-01",
    title: "Financial & Trading",
    copy: "Built trading platforms, processed real-time order flows, integrated market data APIs. Price action analysis with disciplined trading psychology.",
  },
  {
    idx: "K-02",
    title: "AI & Automation",
    copy: "Customer-service chatbots with RAG and vector databases. Deep understanding of LLM behavior, embeddings and agents that solve real user problems.",
  },
  {
    idx: "K-03",
    title: "Multidisciplinary",
    copy: "Reading across psychology, history, productivity and investing. Shaped by Poor Charlie's Almanack, Atomic Habits, Sapiens and Deep Work.",
  },
  {
    idx: "K-04",
    title: "Sports & Discipline",
    copy: "Regular training — sharpening focus, building discipline, staying calm under pressure and committing to long-term growth.",
  },
];

export const SOCIALS = [
  { href: "https://x.com/horuscheung", icon: xIcon, alt: "X" },
  { href: "https://github.com/horuscheung", icon: githubIcon, alt: "GitHub" },
  {
    href: "https://instagram.com/horus.developer",
    icon: instagramIcon,
    alt: "Instagram",
  },
  {
    href: "https://linkedin.com/in/horuscheung",
    icon: linkedinIcon,
    alt: "LinkedIn",
  },
];

export const MARQUEE_TOP = [
  "DEVELOPER",
  "AI",
  "TRADING",
  "PROBLEM SOLVER",
  "UI",
];

export const MARQUEE_STACK = [
  "TYPESCRIPT",
  "REACT",
  "NODE.JS",
  "MONGODB",
  "JAVA",
  "LLM AGENTS",
  "RAG",
];
