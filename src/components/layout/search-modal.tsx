"use client";
import { useEffect, useState } from "react";
import { Search, X, ArrowRight, Stethoscope, Building2, BookOpen, HeartPulse } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { departments, doctors, services, articles } from "@/lib/data";

type SearchItem = { label: string; sub: string; href: string; icon: React.ReactNode; type: string };

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const items: SearchItem[] = [
    ...doctors.map((d) => ({
      label: d.name,
      sub: `${d.specialty} • ${d.experience} yrs`,
      href: `/doctors/${d.id}`,
      icon: <Stethoscope className="h-4 w-4" />,
      type: "Doctor",
    })),
    ...departments.map((d) => ({
      label: d.name,
      sub: d.short,
      href: `/departments/${d.slug}`,
      icon: <Building2 className="h-4 w-4" />,
      type: "Department",
    })),
    ...services.map((s) => ({
      label: s.title,
      sub: s.description.slice(0, 48) + "...",
      href: `/departments`,
      icon: <HeartPulse className="h-4 w-4" />,
      type: "Service",
    })),
    ...articles.map((a) => ({
      label: a.title,
      sub: `${a.category} • ${a.readTime}`,
      href: `/health-library/${a.slug}`,
      icon: <BookOpen className="h-4 w-4" />,
      type: "Article",
    })),
  ];

  const filtered = query.trim()
    ? items.filter(
        (i) =>
          i.label.toLowerCase().includes(query.toLowerCase()) ||
          i.sub.toLowerCase().includes(query.toLowerCase()) ||
          i.type.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : items.slice(0, 6);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0f1e3a]/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            className="fixed left-1/2 top-[12%] -translate-x-1/2 w-[95%] max-w-[640px] bg-white rounded-[20px] shadow-[0_20px_60px_rgba(15,30,58,0.25)] z-50 overflow-hidden border border-slate-100"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                autoFocus
                placeholder="Search doctors, departments, services, articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-slate-400"
              />
              <button onClick={onClose} className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[420px] overflow-auto p-3">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-sm text-slate-500">No results for “{query}”</div>
              ) : (
                <div className="space-y-1">
                  {filtered.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 group transition"
                    >
                      <div className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#0f2a5a] group-hover:text-white transition">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[#0f1e3a] truncate">{item.label}</div>
                        <div className="text-xs text-slate-500 truncate">{item.sub}</div>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600">{item.type}</span>
                      <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-[#0f2a5a] opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Press ESC to close</span>
              <span className="hidden sm:inline">Navigate • Select • Explore</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
