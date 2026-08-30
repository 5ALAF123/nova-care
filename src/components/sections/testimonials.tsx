"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-[#fcfcf9] py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">PATIENT STORIES</div>
          <h2 className="mt-2 text-[28px] font-bold text-[#0f1e3a]">What our patients say</h2>
          <p className="mt-2 text-sm text-slate-500">Fictional testimonials for portfolio illustration. Real care, real stories inspire our work.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-[20px] bg-white border border-slate-100 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#0f2a5a] text-white flex items-center justify-center text-sm font-bold">{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold text-[#0f1e3a]">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
                <Quote className="h-5 w-5 text-slate-200" />
              </div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-4 w-4 ${j < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">“{t.text}”</p>
              <div className="mt-3 text-xs text-slate-400">Fictional testimonial • Aug 2026</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
