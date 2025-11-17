"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Sparkles, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

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
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
            <div className="text-gold">{icon}</div>
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal md:text-3xl">
            {title}
          </h3>
          <p className="mt-4 text-sm text-charcoal/60">Hover to learn more</p>
        </Card>

        {/* Back of Card */}
        <Card
          className="absolute inset-0 flex flex-col justify-center bg-gradient-to-br from-blush to-blush/70 p-8"
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
                <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
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
      className="relative overflow-hidden bg-gradient-to-b from-porcelain via-blush/10 to-porcelain py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 w-full text-sm font-medium tracking-[0.3em] text-gold uppercase"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full font-serif text-4xl font-bold text-charcoal md:text-5xl lg:text-6xl"
          >
            How We Bring Your Vision to Life
          </motion.h2>
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
          <p className="text-lg text-charcoal/70">
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
