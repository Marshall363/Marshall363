import type { Metadata } from "next";
import GroupTravelPage from "@/components/pages/support/GroupTravelPage";

export const metadata: Metadata = {
  title: "Group Travel Booking | Catchaflight",
  description:
    "Book flights for groups of any size. Expert coordination for corporate events, weddings, family reunions, and more.",
};

export default function Page() {
  return <GroupTravelPage />;
}
