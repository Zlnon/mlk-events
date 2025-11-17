"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would integrate with your newsletter service (e.g., Mailchimp, ConvertKit)
    setTimeout(() => {
      alert("Thank you for joining our guest list!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  // Sample Instagram images - replace with actual Instagram API integration
  const instagramImages = [
    "/instagram/1.jpg",
    "/instagram/2.jpg",
    "/instagram/3.jpg",
    "/instagram/4.jpg",
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h3 className="font-script text-4xl text-gold">MLKs Events</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Creating unforgettable moments through meticulous planning and
              elegant design. Your celebration, perfected.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/mlksevents"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/mlksevents"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@mlksevents.com"
                className="transition-colors hover:text-gold"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Navigate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold text-gold">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-gold hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-gold hover:underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="transition-colors hover:text-gold hover:underline"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="transition-colors hover:text-gold hover:underline"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="/packages"
                  className="transition-colors hover:text-gold hover:underline"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#inquire"
                  className="transition-colors hover:text-gold hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Instagram Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold text-gold">
              Follow
            </h4>
            <p className="mb-4 text-sm text-white/70">See Our Latest Work</p>
            <div className="grid grid-cols-2 gap-2">
              {instagramImages.map((image, index) => (
                <a
                  key={index}
                  href="https://instagram.com/mlksevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-md"
                >
                  <Image
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="150px"
                  />
                  <div className="absolute inset-0 bg-gold/0 transition-all duration-300 group-hover:bg-gold/20" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold text-gold">
              Connect
            </h4>
            <p className="mb-4 text-sm text-white/70">Join the Guest List</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-gold"
              />
              <Button
                type="submit"
                variant="gold"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <span>Doha, Qatar</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-1 h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+97412345678"
                  className="transition-colors hover:text-gold"
                >
                  +974 1234 5678
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-1 h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@mlksevents.com"
                  className="transition-colors hover:text-gold"
                >
                  info@mlksevents.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
            <p>
              © {new Date().getFullYear()} MLKs Events. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="transition-colors hover:text-gold">
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors hover:text-gold">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
