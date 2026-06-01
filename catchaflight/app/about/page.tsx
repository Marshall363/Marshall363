import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Catchaflight",
  description: "Learn about Catchaflight — premium flight booking assistance built on real human support, transparency, and traveler confidence.",
};

export default function Page() {
  return <AboutPage />;
}
