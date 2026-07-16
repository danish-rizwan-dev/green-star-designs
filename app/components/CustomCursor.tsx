"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 100 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Dot - follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <div
          className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#C8A27A",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Circle - follows with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: springX, y: springY }}
      >
        <div
          className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "2px solid #C8A27A",
            transform: "translate(-50%, -50%)",
            backgroundColor: "transparent",
          }}
        />
      </motion.div>
    </>
  );
}
