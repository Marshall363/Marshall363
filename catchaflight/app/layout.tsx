import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flight Booking Assistance | Real Human Support — Catchaflight",
  description:
    "Speak with experienced travel specialists for flight reservations, changes, and booking support. Real people, not chatbots. Get help today.",
  keywords:
    "flight booking assistance, airline reservation support, book flight over phone, flight booking help, travel booking assistance",
  openGraph: {
    title: "Flight Booking, Backed by Real Human Support",
    description:
      "Speak with experienced travel specialists for flight reservations, changes, and booking support. Real people, not chatbots. Get help today.",
    type: "website",
    url: "https://www.catchaflight.com",
  },
  alternates: {
    canonical: "https://www.catchaflight.com",
  },
  icons: {
    icon: "/brand/catchaflight-favicon.svg",
    apple: "/brand/catchaflight-app-icon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Catchaflight",
  url: "https://www.catchaflight.com",
  telephone: "+1-800-XXX-XXXX",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Catchaflight",
  url: "https://www.catchaflight.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.catchaflight.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I speak with someone before booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our experienced travel specialists are available to help you understand your options, answer questions, and guide you through the booking process — no chatbots, no automated menus.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with international travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We assist with both domestic and international flight bookings, including complex multi-city itineraries, visa-required destinations, and long-haul flights.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with itinerary changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide guidance and support for flight changes, rescheduling, cancellations, and upgrades — helping you navigate airline policies without the confusion.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer assistance for family travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialize in coordinating travel plans for families, groups, and multi-generational trips, ensuring everyone's flights align and special needs are met.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased pb-14 md:pb-0">{children}</body>
    </html>
  );
}
