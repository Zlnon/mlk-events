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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
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
