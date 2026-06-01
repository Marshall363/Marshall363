import type { Metadata } from "next";
import DestinationsPage from "@/components/pages/DestinationsPage";

export const metadata: Metadata = {
  title: "Popular Flight Destinations | Catchaflight",
  description:
    "Explore popular flight destinations worldwide. Get expert booking assistance for domestic and international travel from experienced travel specialists.",
};

export default function Page() {
  return <DestinationsPage />;
}
