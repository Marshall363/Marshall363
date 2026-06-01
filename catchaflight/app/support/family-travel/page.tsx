import type { Metadata } from "next";
import FamilyTravelPage from "@/components/pages/support/FamilyTravelPage";

export const metadata: Metadata = {
  title: "Family Travel Booking | Catchaflight",
  description:
    "Book comfortable flights for the whole family. We accommodate special needs, coordinate schedules, and ensure everyone travels together.",
};

export default function Page() {
  return <FamilyTravelPage />;
}
