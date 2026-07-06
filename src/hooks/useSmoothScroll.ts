import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Shared handle so nav clicks anywhere can drive the same Lenis instance
export const lenisStore: { lenis: Lenis | null } = { lenis: null };

export const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenisStore.lenis) {
    lenisStore.lenis.scrollTo(target, { duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

export default function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({ lerp: 0.115 });
    lenisStore.lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisStore.lenis = null;
    };
  }, []);
}
