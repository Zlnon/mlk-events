import { Metadata } from "next";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Gem, Crown } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Packages | MLKs Events - Doha, Qatar",
  description:
    "Explore our curated event planning packages: Platinum Bloom, Rose Gold, and Pearl. Full-service planning to day-of coordination for your perfect celebration.",
  keywords: [
    "event planning packages",
    "wedding packages Qatar",
    "event coordination Doha",
    "full-service planning",
  ],
};

const packages = [
  {
    name: "The Platinum Bloom",
    subtitle: "Full-Service Planning & Design",
    icon: Crown,
    price: "Starting at $15,000",
    description:
      "Best for the couple who wants a completely seamless, stress-free experience from 'Yes' to 'I Do.'",
    longDescription:
      "This is our all-inclusive luxury package. We are with you every step of the way, handling everything from initial concept to post-event breakdown. You simply show up and enjoy.",
    features: [
      "Full Event Design & Styling",
      "Unlimited Consultations",
      "Complete Budget Management",
      "Vendor Sourcing & Management",
      "Contract Review & Negotiation",
      "Timeline Creation & Management",
      "Guest Communication Coordination",
      "Rehearsal Coordination",
      "Full Event Day Coordination",
      "Post-Event Breakdown & Vendor Payments",
    ],
    highlight: true,
  },
  {
    name: "The Rose Gold",
    subtitle: "Partial Planning & Design",
    icon: Gem,
    price: "Starting at $8,500",
    description:
      "Best for the client who has already started planning but needs professional help to tie it all together.",
    longDescription:
      "You've booked your venue or have a few vendors, but you're feeling overwhelmed. We'll step in, review your plans, fill in the gaps, and take over vendor communication to ensure a flawless final few months.",
    features: [
      "Initial Planning Review",
      "Vendor Takeover (6-8 weeks out)",
      "Budget Review & Optimization",
      "Design Consultation & Styling",
      "Vendor Coordination & Communication",
      "Timeline Creation",
      "Rehearsal Management (for weddings)",
      "Full Event Day Coordination",
      "Day-of Emergency Kit",
    ],
  },
  {
    name: "The Pearl",
    subtitle: "Day-of / Month-of Coordination",
    icon: Sparkles,
    price: "Starting at $3,500",
    description:
      "Best for the highly organized client who needs a trusted professional to execute their vision on the day.",
    longDescription:
      "You've planned it all, but you can't be the host and the planner on your big day. Our team will step in 30 days out, become the main point of contact, and manage the entire event timeline so you can be a guest at your own party.",
    features: [
      "Initial Planning Review (30 days out)",
      "Final Vendor Confirmations",
      "Master Timeline Creation",
      "Vendor Communication & Coordination",
      "Rehearsal Management (for weddings)",
      "Full On-Site Coordination (12 hours)",
      "Setup Oversight",
      "Timeline Execution",
      "Vendor Breakdown Coordination",
    ],
  },
];

const alaCarte = [
  "Design & Styling Consultation",
  "Venue Scouting",
  "Corporate Event Management",
  "Custom Décor Design",
  "Guest List Management",
  "Invitation Design & Coordination",
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal/95 to-gold/20 py-24 md:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-gold uppercase">
            The Signature Collection
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Our Packages
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
            Choose the package that fits your vision, or let us create a custom
            plan just for you.
          </p>
        </div>
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blush/10 blur-3xl" />
      </section>

      {/* Packages Grid */}
      <section className="bg-porcelain py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <Card
                  key={pkg.name}
                  className={`relative overflow-hidden transition-shadow hover:shadow-xl ${
                    pkg.highlight
                      ? "border-2 border-gold shadow-lg ring-4 ring-gold/10"
                      : ""
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute right-0 top-6 bg-gold px-6 py-1 text-sm font-semibold text-white">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                    <CardTitle className="mb-2 text-3xl">{pkg.name}</CardTitle>
                    <p className="text-sm font-medium text-gold">
                      {pkg.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-2xl font-bold text-charcoal">
                      {pkg.price}
                    </p>
                    <p className="text-sm font-medium text-charcoal/80">
                      {pkg.description}
                    </p>
                    <p className="text-sm text-charcoal/60">
                      {pkg.longDescription}
                    </p>
                    <div className="border-t border-charcoal/10 pt-4">
                      <p className="mb-3 text-sm font-semibold uppercase text-charcoal">
                        Includes:
                      </p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/#inquire">
                      <Button
                        variant={pkg.highlight ? "gold" : "outline"}
                        className="mt-6 w-full"
                      >
                        Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* A La Carte Section */}
      <section className="bg-gradient-to-b from-blush/20 to-porcelain py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal md:text-4xl">
              À La Carte Services
            </h2>
            <p className="mb-12 text-lg text-charcoal/70">
              Need something specific? We offer individual services to complement
              your planning needs.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {alaCarte.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 text-left transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                      <Sparkles className="h-5 w-5 text-gold" />
                    </div>
                    <p className="font-medium text-charcoal">{service}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/#inquire">
                <Button variant="gold" size="lg">
                  Discuss Custom Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="bg-porcelain py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal md:text-4xl">
            Not Sure Which Package Is Right for You?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-charcoal/70">
            Every event is unique. Let's schedule a complimentary consultation to
            discuss your vision and find the perfect fit.
          </p>
          <Link href="/#inquire">
            <Button variant="gold" size="lg">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
