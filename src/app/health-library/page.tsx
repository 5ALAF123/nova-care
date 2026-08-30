import type { Metadata } from "next";
import { HealthLibraryClient } from "./client";

export const metadata: Metadata = {
  title: "Health Library — Nova Care",
  description: "Trusted health articles from Nova Care specialists. Heart health, nutrition, preventive care and more.",
};

export default function HealthLibraryPage() {
  return <HealthLibraryClient />;
}
