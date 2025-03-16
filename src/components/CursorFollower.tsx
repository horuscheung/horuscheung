import React, { useEffect, useState, useRef } from "react";
import "../styles/cursor.scss";

const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleMouseEnterLink = () => {
      setLinkHovered(true);
    };

    const handleMouseLeaveLink = () => {
      setLinkHovered(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Track mouse position
    window.addEventListener("mousemove", updatePosition);

    // Handle click states
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Handle cursor visibility
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Handle links and buttons
    const links = document.querySelectorAll('a, button, input[type="submit"]');
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnterLink);
      link.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnterLink);
        link.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, []);

  const styles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 9999,
    transform: `translate(${position.x}px, ${position.y}px)`,
    mixBlendMode: "difference",
    transition: "transform 0.1s ease, width 0.2s, height 0.2s, opacity 0.2s",
    opacity: hidden ? 0 : 1,
  };

  return (
    <div ref={cursorRef} style={styles}>
      <div
        style={{
          width: clicked ? "30px" : linkHovered ? "45px" : "20px",
          height: clicked ? "30px" : linkHovered ? "45px" : "20px",
          backgroundColor: "white",
          borderRadius: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
    </div>
  );
};

export default CursorFollower;
