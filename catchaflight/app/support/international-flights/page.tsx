import type { Metadata } from "next";
import InternationalFlightsPage from "@/components/pages/support/InternationalFlightsPage";

export const metadata: Metadata = {
  title: "International Flight Booking | Catchaflight",
  description:
    "Expert assistance for international flight reservations. Multi-city itineraries, visa routes, and long-haul bookings handled with care.",
};

export default function Page() {
  return <InternationalFlightsPage />;
}
