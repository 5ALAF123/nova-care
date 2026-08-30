import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export const metadata: Metadata = {
  title: "Services — Nova Care",
  description: "Explore Nova Care services: Emergency, Diagnostics, Surgery, Pharmacy, Telemedicine and more.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#fcfcf9]">
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">SERVICES</div>
          <h1 className="mt-2 text-3xl font-bold text-[#0f1e3a]">Comprehensive care under one roof</h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">Integrated services for every need — from emergency to prevention and rehabilitation.</p>
        </div>
      </div>
      <ServicesSection />
      <WhyChooseUs />
    </div>
  );
}
