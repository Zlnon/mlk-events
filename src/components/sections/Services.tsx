"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Sparkles, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  details: string[];
  delay: number;
}

function ServiceCard({ title, icon, details, delay }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="perspective-1000 h-[400px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <Card
          className="card-elegant absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold/5 shadow-inner">
            <div className="text-gold">{icon}</div>
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal md:text-3xl tracking-tight">
            {title}
          </h3>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mt-4 text-xs tracking-[0.2em] text-charcoal/50 uppercase hidden md:block">Hover to explore</p>
        </Card>

        {/* Back of Card */}
        <Card
          className="absolute inset-0 flex flex-col justify-center bg-linear-to-br from-blush to-blush/70 p-8"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="mb-6 font-serif text-xl font-bold text-charcoal">
            {title}
          </h3>
          <ul className="space-y-3 text-left">
            {details.map((detail, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-charcoal/80"
              >
                <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {detail}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Weddings",
      icon: <Heart className="h-10 w-10" />,
      details: [
        "Full-service wedding planning & design",
        "Venue scouting & selection",
        "Vendor sourcing & management",
        "Timeline creation & coordination",
        "Day-of coordination",
        "Custom décor & styling",
      ],
    },
    {
      title: "Social Celebrations",
      icon: <Sparkles className="h-10 w-10" />,
      details: [
        "Birthday parties & anniversaries",
        "Engagement celebrations",
        "Baby showers & bridal showers",
        "Milestone celebrations",
        "Custom event theming",
        "Entertainment coordination",
      ],
    },
    {
      title: "Corporate & Galas",
      icon: <Briefcase className="h-10 w-10" />,
      details: [
        "Corporate event planning",
        "Gala dinners & fundraisers",
        "Conference & seminar coordination",
        "Team building events",
        "Product launches",
        "Award ceremonies",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-linear-to-b from-porcelain via-blush/10 to-porcelain py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40" />
            <p className="text-sm font-medium tracking-[0.3em] text-gold uppercase">
              Our Services
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl font-bold leading-[1.2] text-charcoal md:text-5xl lg:text-6xl"
          >
            How We Bring Your Vision to Life
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              details={service.details}
              delay={0.4 + index * 0.2}
            />
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <Link href="/packages">
            <Button
              size="lg"
              className="mb-6 px-10 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5B8 50%, #D4AF37 100%)',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 4px 15px rgba(0, 0, 0, 0.3)'
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
          <p className="text-lg leading-[1.6] text-charcoal/70">
            Not sure which package is right for you?{" "}
            <a
              href="#inquire"
              className="font-semibold text-gold underline-offset-4 transition-all hover:underline"
            >
              Let's talk about it.
            </a>
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blush/20 blur-3xl" />
    </section>
  );
}
