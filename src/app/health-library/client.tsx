"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { articles } from "@/lib/data";
import { Search, Clock3, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Heart Health", "Preventive Care", "Nutrition", "Mental Wellness", "Women's Health", "Children's Health"];

export function HealthLibraryClient() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = cat === "All" || a.category === cat;
      const matchQuery = !query || a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, cat]);

  return (
    <div className="bg-[#fcfcf9]">
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">HEALTH LIBRARY</div>
          <h1 className="mt-2 text-3xl font-bold text-[#0f1e3a]">Trusted health insights</h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">Clear, evidence-informed articles from our clinicians. For general information only — not a substitute for professional medical advice.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search articles..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-10" />
            </div>
            <div className="flex gap-2 overflow-auto pb-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition ${
                    cat === c ? "bg-[#0f1e3a] text-white border-[#0f1e3a]" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 text-sm text-slate-500">No articles match your search.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <Link key={a.slug} href={`/health-library/${a.slug}`} className="group rounded-[20px] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={a.image} alt={a.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 font-semibold border border-cyan-100">{a.category}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500"><Clock3 className="h-3 w-3" /> {a.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-semibold text-[#0f1e3a] leading-snug group-hover:text-[#0f2a5a]">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2 flex-1">{a.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{a.date} • {a.author}</span>
                    <span className="text-xs font-semibold text-[#0f2a5a] inline-flex items-center gap-1">Read <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
