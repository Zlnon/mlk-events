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
            <p
              className="text-sm font-medium tracking-[0.3em] text-gold uppercase"
              style={{
                textShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.4), 0 2px 10px rgba(0, 0, 0, 0.8)'
              }}
            >
              EST. 2025 • DOHA, QATAR
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 font-serif text-5xl font-bold leading-[1.1] md:text-7xl lg:text-8xl relative"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #D4AF37 40%, #FFFFFF 70%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.6)) drop-shadow(0 6px 25px rgba(0, 0, 0, 0.9))'
            }}
          >
            We Create Magic.
            <br />
            You Live the Moment.
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12 text-lg leading-[1.6] text-white md:text-xl lg:text-2xl font-medium"
            style={{
              textShadow: '0 2px 20px rgba(212, 175, 55, 0.4), 0 4px 15px rgba(0, 0, 0, 0.8)'
            }}
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
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-gold bg-transparent px-10 py-6 text-lg font-semibold text-white transition-all duration-500 hover:bg-gold hover:text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              style={{
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3), 0 4px 15px rgba(0, 0, 0, 0.5)'
              }}
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
                className="border-2 border-gold bg-gold px-10 py-6 text-lg font-semibold transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5B8 50%, #D4AF37 100%)',
                  boxShadow: '0 0 25px rgba(212, 175, 55, 0.5), 0 4px 20px rgba(0, 0, 0, 0.6)'
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 20%, #FFF8DC 50%, #FFFFFF 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 'bold'
                  }}
                >
                  View Our Packages
                </span>
              </Button>
            </Link>
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
