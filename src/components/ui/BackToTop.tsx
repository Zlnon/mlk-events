"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Back to top"
    >
      {/* Circular Progress Ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        width="56"
        height="56"
        viewBox="0 0 56 56"
      >
        <circle
          cx="28"
          cy="28"
          r="26"
          stroke="rgba(212, 175, 55, 0.2)"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          cx="28"
          cy="28"
          r="26"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength,
            strokeDasharray: "0 1",
          }}
        />
      </svg>

      {/* Button Content */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
        <ArrowUp className="h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-y-1" />
      </div>
    </motion.button>
  );
}
