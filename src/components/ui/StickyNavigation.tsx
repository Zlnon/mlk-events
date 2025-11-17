"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-100, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#inquire" },
  ];

  if (!isVisible) return null;

  return (
    <motion.nav
      style={{ opacity, y }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 border-b border-gold/10 shadow-lg"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-script text-3xl text-gold hover:text-gold/80 transition-colors">
            MLKs Events
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-charcoal/80 hover:text-gold transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-sm font-semibold text-white bg-gold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                Packages
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-charcoal">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
