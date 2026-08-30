"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { departments } from "@/lib/data";
import { Heart, Brain, Baby, Bone, Sparkles, Eye, Smile, Stethoscope, HeartHandshake, Ear, Scan, Siren } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, Brain, Baby, Bone, Sparkles, Eye, Smile, Stethoscope, HeartHandshake, Ear, Scan, Siren,
};

export function DepartmentsGrid({ limit = 12, title = "Explore our departments" }: { limit?: number; title?: string }) {
  const list = departments.slice(0, limit);
  return (
    <section className="bg-[#fcfcf9] py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">DEPARTMENTS</div>
            <h2 className="mt-2 text-[28px] font-bold text-[#0f1e3a]">{title}</h2>
            <p className="mt-2 text-sm text-slate-500 max-w-xl">Twelve centers of excellence led by fellowship-trained specialists and supported by advanced diagnostics.</p>
          </div>
          <Link href="/departments" className="hidden sm:inline-flex text-sm font-semibold text-[#0f2a5a] hover:underline">
            View all departments →
          </Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list.map((dept, i) => {
            const Icon = iconMap[dept.icon] || Stethoscope;
            return (
              <motion.div
                key={dept.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/departments/${dept.slug}`} className="group block rounded-[18px] bg-white border border-slate-100 p-5 shadow-sm hover:shadow-[0_12px_30px_rgba(15,30,58,0.08)] hover:border-slate-200 transition-all h-full">
                  <div className="h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0f2a5a] group-hover:bg-[#0f2a5a] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-semibold text-[#0f1e3a]">{dept.name}</div>
                  <div className="text-xs font-medium text-cyan-600">{dept.short}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">{dept.description}</p>
                  <div className="mt-4 text-xs font-semibold text-[#0f2a5a] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore Department <span>→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
