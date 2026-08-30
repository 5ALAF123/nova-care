"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, CalendarPlus, Building2, PhoneCall, ArrowRight } from "lucide-react";

const actions = [
  {
    title: "Find a Doctor",
    desc: "Search specialists and find the right doctor for your needs.",
    icon: Stethoscope,
    href: "/doctors",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Book an Appointment",
    desc: "Choose a doctor, date and available time in 60 seconds.",
    icon: CalendarPlus,
    href: "/book-appointment",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Our Departments",
    desc: "Explore our medical specialties and centers of excellence.",
    icon: Building2,
    href: "/departments",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Contact Us",
    desc: "Get directions, phone numbers and opening hours.",
    icon: PhoneCall,
    href: "/contact",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export function QuickActions() {
  return (
    <section className="bg-[#fcfcf9] py-8">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={a.href}
                className="group block rounded-[20px] bg-white border border-slate-100 p-6 shadow-sm hover:shadow-[0_12px_30px_rgba(15,30,58,0.08)] hover:border-slate-200 transition-all h-full"
              >
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${a.color}`}>
                  <a.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-[15px] font-semibold text-[#0f1e3a] flex items-center gap-2">
                  {a.title}
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400" />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{a.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
