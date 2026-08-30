import type { Metadata } from "next";
import { ContactClient } from "./client";

export const metadata: Metadata = {
  title: "Contact — Nova Care",
  description: "Contact Nova Care. Address, phone, email, opening hours and a message form. Fictional hospital for portfolio demo.",
};

export default function ContactPage() {
  return <ContactClient />;
}
