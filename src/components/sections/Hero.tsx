"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Fallback gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-gold/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl"
        >
          {/* Eyebrow Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 w-full text-sm font-medium tracking-[0.3em] text-gold uppercase"
          >
            EST. 2025 • DOHA, QATAR
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6 w-full font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl"
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
            className="mb-10 w-full text-lg text-white/90 md:text-xl lg:text-2xl"
          >
            MLKs Events: Bespoke Wedding & Event Planning.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-gold bg-transparent px-10 py-6 text-lg font-semibold text-white transition-all duration-500 hover:bg-gold hover:text-white"
              onClick={() => {
                const inquireSection = document.getElementById("inquire");
                inquireSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="h-8 w-8 text-white/80" />
            <span className="mt-2 text-sm text-white/60">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
