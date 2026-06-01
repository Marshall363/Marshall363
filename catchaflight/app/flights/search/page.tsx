import type { Metadata } from "next";
import FlightSearchResults from "@/components/pages/FlightSearchResults";

export const metadata: Metadata = {
  title: "Flight Search Results | Catchaflight",
  description:
    "Compare flight options and prices. Book with confidence through real human support.",
};

export default function Page() {
  return <FlightSearchResults />;
}
