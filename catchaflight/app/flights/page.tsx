import type { Metadata } from "next";
import FlightsPage from "@/components/pages/FlightsPage";

export const metadata: Metadata = {
  title: "Flight Booking Assistance | Catchaflight",
  description:
    "Get expert help booking flights with major airlines. Speak with travel specialists for reservations, changes, and booking support.",
};

export default function Page() {
  return <FlightsPage />;
}
