import type { Metadata } from "next";
import SupportPage from "@/components/pages/SupportPage";

export const metadata: Metadata = {
  title: "Support | Flight Booking Help | Catchaflight",
  description: "Get expert support for flight bookings, itinerary changes, cancellations, and travel planning. Real human specialists available 24/7.",
};

export default function Page() {
  return <SupportPage />;
}
