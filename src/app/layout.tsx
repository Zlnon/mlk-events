import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLKs Events - Bespoke Wedding & Event Planning | Doha, Qatar",
  description:
    "Create unforgettable moments with MLKs Events. Full-service wedding and event planning in Doha, Qatar. From intimate gatherings to grand celebrations, we bring your vision to life with effortless elegance.",
  keywords: [
    "wedding planner Qatar",
    "event planning Doha",
    "luxury events Qatar",
    "wedding coordinator Doha",
    "corporate events Qatar",
    "party planner Doha",
    "MLKs Events",
  ],
  authors: [{ name: "MLKs Events" }],
  openGraph: {
    title: "MLKs Events - Bespoke Wedding & Event Planning",
    description:
      "Full-service wedding and event planning in Doha, Qatar. We create magic, you live the moment.",
    url: "https://mlksevents.com",
    siteName: "MLKs Events",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLKs Events - Bespoke Wedding & Event Planning",
    description:
      "Full-service wedding and event planning in Doha, Qatar. We create magic, you live the moment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
