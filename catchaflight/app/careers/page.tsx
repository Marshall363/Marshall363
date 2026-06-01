import type { Metadata } from "next";
import CareersPage from "@/components/pages/CareersPage";

export const metadata: Metadata = {
  title: "Careers | Join Our Team | Catchaflight",
  description: "Join the Catchaflight team. We're looking for passionate travel specialists and professionals who want to make travel booking better.",
};

export default function Page() {
  return <CareersPage />;
}
