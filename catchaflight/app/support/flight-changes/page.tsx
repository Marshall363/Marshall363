import type { Metadata } from "next";
import FlightChangesPage from "@/components/pages/support/FlightChangesPage";

export const metadata: Metadata = {
  title: "Flight Changes & Rescheduling | Catchaflight",
  description:
    "Need to change your flight? Our specialists handle schedule modifications, route changes, and rebooking with expert guidance.",
};

export default function Page() {
  return <FlightChangesPage />;
}
