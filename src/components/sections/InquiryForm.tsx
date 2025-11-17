"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please provide your ideal date"),
  venue: z.string().min(1, "Please select a venue option"),
  guestCount: z.string().min(1, "Please provide estimated guest count"),
  budget: z.string().min(1, "Please select a budget range"),
  story: z.string().min(20, "Please tell us more about your event (at least 20 characters)"),
  referral: z.string().min(1, "Please let us know how you found us"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export default function InquiryForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);

    // Here you would send the data to your backend/API
    // For now, we'll simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inquire"
      className="relative overflow-hidden bg-gradient-to-b from-porcelain to-blush/20 py-16 md:py-24 lg:py-32"
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
              Get In Touch
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 font-serif text-4xl font-bold leading-[1.2] text-charcoal md:text-5xl lg:text-6xl"
          >
            Let's Create Something Beautiful
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto max-w-2xl text-lg leading-[1.85] text-charcoal/80 tracking-elegant"
          >
            We're so excited to hear about your event. Please share a few
            details, and we'll be in touch to schedule your complimentary
            consultation.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 rounded-2xl bg-white/90 p-8 shadow-lg border border-gold/20 md:p-12 transition-all duration-300 hover:shadow-xl"
          >
            {/* Success Message */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-gold/10 p-4 text-center"
              >
                <p className="font-semibold text-gold">
                  Thank you! We'll be in touch shortly.
                </p>
              </motion.div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-charcoal">
                Full Name <span className="text-gold">*</span>
              </label>
              <Input
                id="fullName"
                {...register("fullName")}
                placeholder="John & Jane Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
                  Email <span className="text-gold">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
                  Phone Number <span className="text-gold">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+974 1234 5678"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label htmlFor="eventType" className="mb-2 block text-sm font-medium text-charcoal">
                I'm Planning a... <span className="text-gold">*</span>
              </label>
              <select
                id="eventType"
                {...register("eventType")}
                className="flex h-12 w-full rounded-md border border-charcoal/20 bg-white px-4 py-2 text-base transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="social">Social Celebration</option>
                <option value="other">Other</option>
              </select>
              {errors.eventType && (
                <p className="mt-1 text-sm text-red-500">{errors.eventType.message}</p>
              )}
            </div>

            {/* Event Date & Venue */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="eventDate" className="mb-2 block text-sm font-medium text-charcoal">
                  My Ideal Date(s) are... <span className="text-gold">*</span>
                </label>
                <Input
                  id="eventDate"
                  {...register("eventDate")}
                  placeholder="e.g., June 2025 or specific date"
                />
                {errors.eventDate && (
                  <p className="mt-1 text-sm text-red-500">{errors.eventDate.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="venue" className="mb-2 block text-sm font-medium text-charcoal">
                  My Venue is... <span className="text-gold">*</span>
                </label>
                <select
                  id="venue"
                  {...register("venue")}
                  className="flex h-12 w-full rounded-md border border-charcoal/20 bg-white px-4 py-2 text-base transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">Select option</option>
                  <option value="booked">Already Booked</option>
                  <option value="need-help">I Need Your Help Scouting!</option>
                </select>
                {errors.venue && (
                  <p className="mt-1 text-sm text-red-500">{errors.venue.message}</p>
                )}
              </div>
            </div>

            {/* Guest Count & Budget */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="guestCount" className="mb-2 block text-sm font-medium text-charcoal">
                  Estimated Guest Count <span className="text-gold">*</span>
                </label>
                <Input
                  id="guestCount"
                  {...register("guestCount")}
                  placeholder="e.g., 100-150"
                />
                {errors.guestCount && (
                  <p className="mt-1 text-sm text-red-500">{errors.guestCount.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-charcoal">
                  Total Event Budget <span className="text-gold">*</span>
                </label>
                <select
                  id="budget"
                  {...register("budget")}
                  className="flex h-12 w-full rounded-md border border-charcoal/20 bg-white px-4 py-2 text-base transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">Select budget range</option>
                  <option value="20-35k">$20k - $35k</option>
                  <option value="35-50k">$35k - $50k</option>
                  <option value="50-75k">$50k - $75k</option>
                  <option value="75k+">$75k+</option>
                  <option value="unsure">Unsure</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                )}
              </div>
            </div>

            {/* Story */}
            <div>
              <label htmlFor="story" className="mb-2 block text-sm font-medium text-charcoal">
                Tell us your story! <span className="text-gold">*</span>
              </label>
              <p className="mb-2 text-sm text-charcoal/60">
                This is our favorite part. What's the occasion? What's the vibe you're
                dreaming of? Don't be shy!
              </p>
              <Textarea
                id="story"
                {...register("story")}
                placeholder="e.g., 'A modern, romantic wedding by the water,' 'A fun 50th birthday party with a vintage theme,' 'A high-end corporate gala for 200 guests'"
                rows={5}
              />
              {errors.story && (
                <p className="mt-1 text-sm text-red-500">{errors.story.message}</p>
              )}
            </div>

            {/* Referral */}
            <div>
              <label htmlFor="referral" className="mb-2 block text-sm font-medium text-charcoal">
                How did you hear about us? <span className="text-gold">*</span>
              </label>
              <select
                id="referral"
                {...register("referral")}
                className="flex h-12 w-full rounded-md border border-charcoal/20 bg-white px-4 py-2 text-base transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              >
                <option value="">Select option</option>
                <option value="instagram">Instagram</option>
                <option value="google">Google</option>
                <option value="vendor">Vendor Referral</option>
                <option value="friend">Friend/Family</option>
                <option value="other">Other</option>
              </select>
              {errors.referral && (
                <p className="mt-1 text-sm text-red-500">{errors.referral.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-blush/40 blur-3xl" />
    </section>
  );
}
