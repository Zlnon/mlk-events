"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface PortfolioItemProps {
  title: string;
  image: string;
  category: string;
  index: number;
}

function PortfolioItem({ title, image, category, index }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ breakInside: "avoid" }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Image with B&W to Color effect */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110 grayscale-0" : "scale-100 grayscale"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gold Border Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 border-4 border-gold"
          style={{
            borderImage: "linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)",
            borderImageSlice: 1,
          }}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-80" : "opacity-40"
          }`}
        />

        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
        >
          <p className="mb-2 text-sm font-medium tracking-wider text-gold uppercase">
            {category}
          </p>
          <h3 className="font-serif text-2xl font-bold">{title}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Sample portfolio items - these would come from Sanity in production
  const portfolioItems = [
    {
      title: "The Al-Thani Wedding",
      image: "/portfolio/wedding-1.jpg",
      category: "Wedding",
    },
    {
      title: "Elegance Gala 2024",
      image: "/portfolio/corporate-1.jpg",
      category: "Corporate Event",
    },
    {
      title: "Sarah's 30th Birthday",
      image: "/portfolio/social-1.jpg",
      category: "Social Celebration",
    },
    {
      title: "Seaside Ceremony",
      image: "/portfolio/wedding-2.jpg",
      category: "Wedding",
    },
    {
      title: "Qatar Foundation Gala",
      image: "/portfolio/corporate-2.jpg",
      category: "Corporate Event",
    },
    {
      title: "Golden Anniversary",
      image: "/portfolio/social-2.jpg",
      category: "Social Celebration",
    },
    {
      title: "Garden Wedding",
      image: "/portfolio/wedding-3.jpg",
      category: "Wedding",
    },
    {
      title: "Product Launch Event",
      image: "/portfolio/corporate-3.jpg",
      category: "Corporate Event",
    },
    {
      title: "Enchanted Birthday",
      image: "/portfolio/social-3.jpg",
      category: "Social Celebration",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-porcelain py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
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
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl font-bold text-charcoal md:text-5xl lg:text-6xl"
          >
            Moments We've Made Magic
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70"
          >
            Hover over each image to see the beauty in full color
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              image={item.image}
              category={item.category}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-40 left-0 h-96 w-96 rounded-full bg-blush/20 blur-3xl" />
    </section>
  );
}
