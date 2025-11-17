"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  event: string;
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials: Testimonial[] = [
    {
      quote:
        "MLKs Events didn't just plan our wedding; they saved our sanity. The décor was breathtaking, and we were actually able to enjoy our own party. Every detail was perfect, and our guests are still talking about it months later.",
      author: "Sarah & James",
      event: "Wedding, Doha 2024",
    },
    {
      quote:
        "From start to finish, the MLKs team was professional, creative, and attentive. Our corporate gala was a massive success, and we received countless compliments. They turned our vision into a stunning reality.",
      author: "Ahmed Al-Mansouri",
      event: "Corporate Gala, Qatar Foundation 2024",
    },
    {
      quote:
        "I wanted my 50th birthday to be special, and MLKs Events delivered beyond my wildest dreams. The attention to detail, the creativity, and the flawless execution made it a night I'll never forget.",
      author: "Layla Hassan",
      event: "Birthday Celebration, 2024",
    },
    {
      quote:
        "Working with MLKs Events was the best decision we made for our wedding. They handled everything with grace and professionalism, allowing us to be fully present on our special day. Absolutely incredible!",
      author: "Michael & Fatima",
      event: "Wedding, Doha 2024",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal/95 to-gold/20 py-24 md:py-32"
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-sm font-medium tracking-[0.3em] text-gold uppercase"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-5xl">
          {/* Giant Quote Mark Background */}
          <div className="pointer-events-none absolute left-0 top-0 -translate-x-8 -translate-y-8 select-none opacity-10 md:-translate-x-16 md:-translate-y-12">
            <Quote className="h-48 w-48 text-white md:h-64 md:w-64" strokeWidth={1} />
          </div>

          {/* Testimonial Slider */}
          <div className="relative min-h-[400px] overflow-hidden md:min-h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="px-8 py-12 text-center md:px-16">
                  <blockquote className="mb-8 font-serif text-2xl leading-relaxed text-white md:text-3xl lg:text-4xl">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="text-white/80">
                    <p className="mb-1 text-xl font-semibold text-gold">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm">{testimonials[currentIndex].event}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(-1)}
              className="rounded-full border-2 border-white/30 bg-transparent p-3 text-white hover:border-gold hover:bg-gold hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gold"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(1)}
              className="rounded-full border-2 border-white/30 bg-transparent p-3 text-white hover:border-gold hover:bg-gold hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-blush/10 blur-3xl" />
    </section>
  );
}
