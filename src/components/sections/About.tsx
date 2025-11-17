"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden bg-porcelain py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 font-serif text-4xl font-bold leading-[1.2] text-gold md:text-5xl lg:text-6xl"
            >
              The Art of Celebration.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-lg leading-[1.75] text-charcoal"
            >
              <p>
                Planning an event shouldn't feel like work. At MLKs Events, we
                believe in the power of moments. We handle the chaos, the
                contracts, and the countless details so you can focus on the
                champagne.
              </p>
              <p>
                From intimate gatherings to grand ballrooms, our passion is
                bringing your vision to life, flawlessly. Every detail is
                curated with intention, every moment is designed to be
                unforgettable.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <p className="font-script text-5xl text-gold">M.L.K.</p>
              <p className="mt-2 text-sm text-charcoal/60">Founder, MLKs Events</p>
            </motion.div>
          </motion.div>

          {/* Arch-Shaped Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Blush Rose Circle Background */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -right-6 -top-6 h-80 w-80 rounded-full bg-blush md:h-96 md:w-96"
                style={{ zIndex: 0 }}
              />

              {/* Arch-Shaped Image Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.7 }}
                className="relative z-10"
                style={{
                  clipPath:
                    "path('M 0 100 Q 0 0, 100 0 T 200 100 L 200 400 L 0 400 Z')",
                }}
              >
                <div
                  className="relative overflow-hidden shadow-xl"
                  style={{
                    borderRadius: "200px 200px 0 0",
                    aspectRatio: "3/4",
                  }}
                >
                  <Image
                    src="/about-image.jpg"
                    alt="MLKs Events Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/20 to-transparent" />
                </div>
              </motion.div>

              {/* Decorative Gold Border */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute left-4 top-4 -z-10 h-full w-full"
                style={{
                  borderRadius: "200px 200px 0 0",
                  border: "3px solid var(--champagne-gold)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-blush/30 blur-3xl" />
    </section>
  );
}
