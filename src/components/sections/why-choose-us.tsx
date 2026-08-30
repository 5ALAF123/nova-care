"use client";
import { motion } from "framer-motion";
import { Award, Building2, HeartHandshake, Microscope, PhoneCall, CalendarCheck } from "lucide-react";

const reasons = [
  { title: "Experienced Specialists", desc: "150+ fellowship-trained doctors with global training and peer-reviewed research.", icon: Award },
  { title: "Modern Facilities", desc: "320 beds, 12 OTs, 3T MRI, low-dose CT, and smart ICU monitoring.", icon: Building2 },
  { title: "Patient-Centered Care", desc: "We listen first. Shared decision-making and clear communication at every step.", icon: HeartHandshake },
  { title: "Advanced Diagnostics", desc: "Same-day labs, rapid radiology reporting, and AI-assisted second reads.", icon: Microscope },
  { title: "24/7 Emergency Support", desc: "Triage in under 3 minutes, trauma surgeons and critical care on standby.", icon: PhoneCall },
  { title: "Easy Online Booking", desc: "Find a doctor, pick a slot, and confirm in under a minute—on any device.", icon: CalendarCheck },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="rounded-[28px] bg-[#0f1e3a] p-8 lg:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e3a] via-[#162e5c] to-[#1e3a7a]" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.16em] text-cyan-300">WHY CHOOSE US</div>
              <h2 className="mt-3 text-3xl font-bold leading-tight">Why patients choose Nova Care</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">Trust is earned through consistency—clinical rigor, transparent communication, and a healing environment designed around you.</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[#0f1e3a] px-4 py-2 text-sm font-semibold">
                <Award className="h-4 w-4" /> JCI Accredited • NABH Aligned
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-5"
                >
                  <div className="h-9 w-9 rounded-xl bg-white text-[#0f1e3a] flex items-center justify-center">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 font-semibold text-sm">{r.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
