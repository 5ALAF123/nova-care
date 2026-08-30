"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { doctors } from "@/lib/data";
import { Star, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DoctorsSection() {
  const featured = doctors.slice(0, 6);
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">OUR SPECIALISTS</div>
            <h2 className="mt-2 text-[28px] font-bold text-[#0f1e3a]">Meet our specialists</h2>
            <p className="mt-2 text-sm text-slate-500">Fellowship-trained doctors who combine clinical excellence with compassionate listening.</p>
          </div>
          <Link href="/doctors" className="hidden sm:inline-flex">
            <Button variant="secondary">View all doctors</Button>
          </Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-[20px] bg-white border border-slate-100 shadow-sm hover:shadow-[0_12px_30px_rgba(15,30,58,0.08)] overflow-hidden group transition-all flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={doc.image} alt={doc.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <Badge variant={doc.available ? "success" : "secondary"}>{doc.available ? "Available Today" : "On Leave"}</Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold text-[#0f1e3a]">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {doc.rating} • {doc.reviews} reviews
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#0f1e3a] text-white px-2.5 py-1 rounded-full text-xs font-medium">
                    <Clock3 className="h-3 w-3" /> {doc.experience} yrs
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-semibold text-[#0f1e3a]">{doc.name}</div>
                <div className="text-sm text-cyan-600 font-medium">{doc.specialty}</div>
                <div className="mt-2 text-xs text-slate-500">{doc.languages.join(" • ")} • {doc.education[0]}</div>
                <div className="mt-4 flex gap-2">
                  <Link href={`/doctors/${doc.id}`} className="flex-1">
                    <Button variant="secondary" size="sm" className="w-full rounded-full">View Profile</Button>
                  </Link>
                  <Link href={`/book-appointment?doctor=${doc.id}`} className="flex-1">
                    <Button size="sm" className="w-full rounded-full">Book</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
