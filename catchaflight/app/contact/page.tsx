import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Catchaflight",
  description: "Get in touch with Catchaflight. Speak with experienced travel specialists for flight booking assistance, changes, and support. Available 24/7.",
};

export default function Page() {
  return <ContactPage />;
}
