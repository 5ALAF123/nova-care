import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Nova Care",
  description: "Learn about Nova Care, a fictional premium hospital built as a portfolio project. Our story, values, and mission.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#fcfcf9]">
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">ABOUT US</div>
          <h1 className="mt-2 text-3xl font-bold text-[#0f1e3a]">Care built on experience, technology, and trust.</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 max-w-3xl">
            Nova Care is a fictional hospital crafted to showcase what a modern, patient-first healthcare website feels like. Our narrative imagines 25 years of growth—from a community clinic to a 320-bed multispecialty center—guided by empathy, rigor, and design.
          </p>
        </div>
      </div>

      <AboutSection />

      <section className="bg-[#fcfcf9] py-12">
        <div className="mx-auto max-w-[1280px] px-6 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border border-slate-100 p-8">
            <h3 className="font-semibold text-[#0f1e3a]">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">To deliver exceptional healthcare with humanity—combining specialist expertise, modern technology, and clear communication so every patient feels safe, heard, and respected.</p>
            <h3 className="mt-6 font-semibold text-[#0f1e3a]">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">A hospital where clinical excellence and thoughtful service design meet. Where booking is easy, waiting is minimal, and care feels calm and premium.</p>
          </div>
          <div className="rounded-2xl bg-white border border-slate-100 p-8">
            <h3 className="font-semibold text-[#0f1e3a]">Our Values</h3>
            <ul className="mt-4 space-y-3">
              {[
                ["Patient First", "We design every journey around the patient—online and bedside."],
                ["Clinical Rigor", "Evidence-based protocols, peer review, and continuous improvement."],
                ["Collaboration", "Interdisciplinary boards ensure no decision is made alone."],
                ["Transparency", "Clear pricing, open communication, and respect for choice."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[#0f1e3a]">{title}</div>
                    <div className="text-sm text-slate-600">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "JCI Accredited", desc: "Aligned with international patient safety goals." },
              { icon: ShieldCheck, title: "Patient Safety First", desc: "Checklists, audits, and simulation training." },
              { icon: Users, title: "Community Focus", desc: "Free screening camps and school health programs." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-slate-50 border border-slate-100 p-6 text-center">
                <div className="mx-auto h-11 w-11 rounded-xl bg-[#0f1e3a] text-white flex items-center justify-center"><c.icon className="h-5 w-5" /></div>
                <div className="mt-3 font-semibold text-[#0f1e3a]">{c.title}</div>
                <div className="mt-1 text-sm text-slate-600">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-[#1e3a7a] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-semibold">Nova Care is a fictional portfolio project</div>
                <div className="text-sm text-white/70">Designed to feel like a real hospital&apos;s official website. All doctors, addresses, and stories are fictional.</div>
              </div>
              <a href="/book-appointment" className="inline-flex h-10 px-6 rounded-full bg-white text-[#0f1e3a] items-center justify-center text-sm font-semibold shrink-0">Experience Booking →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
