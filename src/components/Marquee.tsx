import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface MarqueeProps {
  items: string[];
  color?: string;
  reverse?: boolean;
  speed?: number; // seconds per loop
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  color = "transparent",
  reverse = false,
  speed = 22,
}) => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current!.querySelector(".marquee-track");
      const dir = reverse ? 1 : -1;
      const tween = gsap.fromTo(
        track,
        { xPercent: dir === 1 ? -50 : 0 },
        {
          xPercent: dir === 1 ? 0 : -50,
          ease: "none",
          duration: speed,
          repeat: -1,
        }
      );

      // reverse the tape when the user scrolls back up
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          gsap.to(tween, {
            timeScale: self.direction,
            duration: 0.4,
            overwrite: true,
          });
        },
      });
    },
    { scope: root }
  );

  // each half must be identical for a seamless -50% loop
  const half = [...items, ...items, ...items];

  return (
    <div
      className="brutal-marquee"
      ref={root}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((h) => (
          <div className="marquee-half" key={h}>
            {half.map((item, i) => (
              <span className="marquee-item" key={i}>
                {item}
                <span className="marquee-star">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
