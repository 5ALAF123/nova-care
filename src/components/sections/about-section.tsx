"use client";
import { useCountUp } from "@/hooks/use-count-up";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Stat({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { ref, count } = useCountUp(value);
  return (
    <div className="text-center">
      <div ref={ref} className="text-2xl font-bold text-[#0f1e3a]">
        {count}
        {suffix}
      </div>
      <div className="text-xs font-medium text-slate-500 mt-1">{label}</div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">ABOUT NOVA CARE</div>
            <h2 className="mt-3 text-3xl lg:text-[34px] font-bold leading-tight text-[#0f1e3a]">
              Care built on experience, technology, and trust.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              For over 25 years, Nova Care has been a beacon of medical excellence in Northview. What started as a community clinic is now a 320-bed multispecialty hospital recognized for patient safety, clinical outcomes, and human-centered design. Our fictional story reflects the values of real world-class hospitals: evidence-based medicine, interdisciplinary teamwork, and kindness at every touchpoint.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["JCI-accredited with NABH-aligned protocols", "Interdisciplinary boards for complex cases", "Transparent pricing & insurance support"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/about"><Button variant="secondary">Learn more about us</Button></Link>
              <Link href="/book-appointment"><Button variant="ghost">Book a visit →</Button></Link>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-6 rounded-2xl bg-slate-50 border border-slate-100 p-6">
              <Stat value={25} suffix="+" label="Years of Experience" />
              <Stat value={150} suffix="+" label="Medical Specialists" />
              <Stat value={50} suffix="K+" label="Patients Served" />
              <Stat value={24} suffix="/7" label="Emergency Care" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(15,30,58,0.15)] border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
                alt="Hospital lobby"
                className="h-[460px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-4 max-w-[320px]">
              <img src="https://i.pravatar.cc/80?img=32" alt="doctor" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold text-[#0f1e3a]">“We treat the person, not just the condition.”</div>
                <div className="text-xs text-slate-500">Dr. Sarah Mitchell — Cardiology</div>
              </div>
            </div>
            <div className="absolute -z-10 -right-6 -top-6 h-40 w-40 rounded-full bg-cyan-100 blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
