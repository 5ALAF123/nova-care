"use client";
import { useState, useMemo } from "react";
import { doctors, departments } from "@/lib/data";
import { DoctorCard } from "@/components/doctors/doctor-card";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

export function DoctorsDirectory() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("all");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sort, setSort] = useState("rating");

  const filtered = useMemo(() => {
    let list = [...doctors];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialty.toLowerCase().includes(q) ||
          d.expertise.join(" ").toLowerCase().includes(q)
      );
    }
    if (dept !== "all") list = list.filter((d) => d.departmentSlug === dept);
    if (availableOnly) list = list.filter((d) => d.available);
    if (sort === "experience") list.sort((a, b) => b.experience - a.experience);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [query, dept, availableOnly, sort]);

  return (
    <div className="bg-[#fcfcf9]">
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">OUR DOCTORS</div>
          <h1 className="mt-2 text-3xl font-bold text-[#0f1e3a]">Meet our specialists</h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">Search by specialty, experience or languages. Every profile includes biography, education, expertise and live availability.</p>
          <div className="mt-6 grid lg:grid-cols-[1.4fr_0.8fr_auto_auto] gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search doctors, specialty, expertise..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-10 h-11" />
            </div>
            <select value={dept} onChange={(e) => setDept(e.target.value)} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
              <option value="all">All Departments</option>
              {departments.map((d) => (
                <option key={d.slug} value={d.slug}>{d.name}</option>
              ))}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
              <option value="rating">Sort: Rating</option>
              <option value="experience">Sort: Experience</option>
              <option value="name">Sort: Name</option>
            </select>
            <label className="inline-flex items-center gap-2 h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm cursor-pointer">
              <input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} className="rounded" />
              Available today
            </label>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Showing {filtered.length} of {doctors.length} specialists
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
            <div className="text-sm font-semibold text-[#0f1e3a]">No doctors match your filters</div>
            <div className="text-xs text-slate-500 mt-1">Try adjusting search or department filter</div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
