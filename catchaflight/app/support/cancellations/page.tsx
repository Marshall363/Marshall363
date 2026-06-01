import type { Metadata } from "next";
import CancellationsPage from "@/components/pages/support/CancellationsPage";

export const metadata: Metadata = {
  title: "Flight Cancellations & Refunds | Catchaflight",
  description:
    "Navigate flight cancellations and refunds with expert guidance. We help you understand policies and maximize your refund options.",
};

export default function Page() {
  return <CancellationsPage />;
}
