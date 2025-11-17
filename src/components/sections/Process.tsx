"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Palette, CheckSquare, Sparkles } from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ProcessStep({ icon, title, description, index }: ProcessStepProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center text-center"
    >
      {/* Icon Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blush shadow-lg"
      >
        <div className="text-gold">{icon}</div>
      </motion.div>

      {/* Step Number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
        className="mb-3 font-serif text-sm font-bold text-gold"
      >
        Step {index + 1}
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
        className="mb-3 font-serif text-2xl font-bold text-charcoal"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
        className="max-w-xs leading-[1.6] text-charcoal/70"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLineInView = useInView(lineRef, { once: true });

  const steps = [
    {
      icon: <Coffee className="h-12 w-12" />,
      title: "Connect",
      description: "Share your vision in our complimentary consultation.",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Design",
      description: "We craft a bespoke design plan and budget.",
    },
    {
      icon: <CheckSquare className="h-12 w-12" />,
      title: "Plan",
      description: "We secure your vendors and manage all logistics.",
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Celebrate",
      description: "You enjoy your event, knowing every detail is perfect.",
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-br from-porcelain via-blush/20 to-porcelain py-16 md:py-24 lg:py-32"
    >
      {/* Marble Texture Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
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
            className="mb-6 text-sm font-medium tracking-[0.3em] text-gold uppercase"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 font-serif text-4xl font-bold leading-[1.2] text-charcoal md:text-5xl lg:text-6xl"
          >
            From Vision to Reality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg leading-[1.6] text-charcoal/70"
          >
            Our proven process ensures a seamless journey from your first
            consultation to your flawless celebration
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-12 hidden h-1 w-full lg:block"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full bg-gold/20">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isLineInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full w-full origin-left bg-gold"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg leading-[1.6] text-charcoal/70">
            Ready to get started?{" "}
            <a
              href="#inquire"
              className="font-semibold text-gold underline-offset-4 transition-all hover:underline"
            >
              Book your consultation today.
            </a>
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blush/30 blur-3xl" />
    </section>
  );
}
