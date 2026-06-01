import type { Metadata } from "next";
import BusinessTravelPage from "@/components/pages/support/BusinessTravelPage";

export const metadata: Metadata = {
  title: "Business Travel Booking | Catchaflight",
  description:
    "Corporate flight booking with schedule optimization, premium cabin access, and loyalty program management. Professional travel support.",
};

export default function Page() {
  return <BusinessTravelPage />;
}
