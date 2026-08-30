import type { Metadata } from "next";
import { DoctorsDirectory } from "./directory";

export const metadata: Metadata = {
  title: "Doctors — Nova Care",
  description: "Find specialist doctors at Nova Care. Search by specialty, experience, languages and availability.",
};

export default function DoctorsPage() {
  return <DoctorsDirectory />;
}
