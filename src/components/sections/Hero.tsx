"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback to gradient background if video fails */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Fallback gradient background */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-charcoal via-charcoal/90 to-gold/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl"
        >
          {/* Eyebrow Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-sm font-medium tracking-[0.3em] text-gold uppercase text-shadow-gold-bold">
              EST. 2025 • DOHA, QATAR
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 font-serif text-5xl font-bold leading-[1.1] md:text-7xl lg:text-8xl text-gradient-hero text-shadow-hero-title"
          >
            We Create Magic.
            <br />
            You Live the Moment.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12 text-lg leading-[1.6] text-white md:text-xl lg:text-2xl font-medium text-shadow-hero"
          >
            MLKs Events: Bespoke Wedding & Event Planning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="btn-glass-gold px-10 py-6 text-lg font-semibold text-white"
              onClick={() => {
                const inquireSection = document.getElementById("inquire");
                inquireSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Consultation
            </Button>
            <Link href="/packages">
              <Button
                size="lg"
                className="btn-metallic-gold px-10 py-6 text-lg font-semibold text-white"
              >
                View Our Packages
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
          onClick={scrollToNextSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
            >
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronDown className="h-8 w-8 text-white/80 group-hover:text-gold transition-colors relative" />
            </motion.div>
            <span className="mt-2 text-sm text-white/60 group-hover:text-gold/80 transition-colors">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
