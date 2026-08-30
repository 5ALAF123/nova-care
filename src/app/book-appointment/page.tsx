import type { Metadata } from "next";
import { BookingClient } from "./booking-client";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Book an Appointment — Nova Care",
  description: "Book an appointment at Nova Care. Choose department, doctor, date and time. Instant confirmation.",
};

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-slate-500">Loading booking...</div>}>
      <BookingClient />
    </Suspense>
  );
}
