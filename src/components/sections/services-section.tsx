"use client";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Siren, Scan, FlaskConical, HeartPulse, ShieldCheck, Activity, Pill, Video } from "lucide-react";

const map: Record<string, React.ComponentType<{ className?: string }>> = { Siren, Scan, FlaskConical, HeartPulse, ShieldCheck, Activity, Pill, Video };

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#fcfcf9] py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">SERVICES</div>
          <h2 className="mt-2 text-[28px] font-bold text-[#0f1e3a]">Comprehensive care under one roof</h2>
          <p className="mt-2 text-sm text-slate-500">From emergency to prevention, our integrated services ensure continuity and convenience.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = map[s.icon] || HeartPulse;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[18px] bg-white border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-xl bg-[#0f2a5a] text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-semibold text-[#0f1e3a] text-sm">{s.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
