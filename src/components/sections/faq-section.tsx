"use client";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-14">
      <div className="mx-auto max-w-[880px] px-6">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">FAQ</div>
          <h2 className="mt-2 text-[28px] font-bold text-[#0f1e3a]">Frequently asked questions</h2>
          <p className="mt-2 text-sm text-slate-500">Quick answers about appointments, visits, and emergency care.</p>
        </div>
        <div className="mt-8">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
