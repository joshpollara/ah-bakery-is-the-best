import { useEffect, useRef, useState, useCallback } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-cursor="croissant"], input[type="submit"], .cursor-croissant';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const animate = useCallback(() => {
    const lerp = 0.15;
    posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp;
    posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsSupported(true);
    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("custom-cursor-active");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, isVisible]);

  if (!isSupported) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
        willChange: "transform",
      }}
    >
      {/* Gold dot — default state */}
      <div
        style={{
          position: "absolute",
          top: "-3px",
          left: "-3px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#C8A45C",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          opacity: isHovering ? 0 : isVisible ? 1 : 0,
          transform: isHovering ? "scale(0)" : "scale(1)",
        }}
      />

      {/* Croissant SVG — hover state */}
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-8px",
          left: "-3px",
          transition: "opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
          opacity: isHovering && isVisible ? 1 : 0,
          transform: isHovering ? "scale(1) rotate(-15deg)" : "scale(0.3) rotate(-15deg)",
          transformOrigin: "3px 8px",
        }}
      >
        {/* Outer crescent shape */}
        <path
          d="M2 12C2 12 1 9.5 2.5 6.5C4 3.5 7 1.5 10 1C13 0.5 16 1.5 17.5 3.5C19 5.5 19 8 18 10C17 12 15 13.5 12.5 14C10 14.5 7 14.5 5 14C3 13.5 2 12 2 12Z"
          fill="#C8A45C"
          stroke="#A68B3C"
          strokeWidth="0.5"
        />
        {/* Inner layer line 1 */}
        <path
          d="M4.5 10.5C5.5 8 8 5 11 4"
          stroke="#A68B3C"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Inner layer line 2 */}
        <path
          d="M6 12C7.5 9.5 10 7 13 6"
          stroke="#A68B3C"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.45"
        />
        {/* Subtle highlight */}
        <path
          d="M5 7C6.5 4.5 9 2.5 12 2.5"
          stroke="#E8D5A0"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
