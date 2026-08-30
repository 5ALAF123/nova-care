"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff]">
      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:py-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-600">COMPASSIONATE CARE. ADVANCED MEDICINE.</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-[46px] lg:text-[52px] font-bold leading-[0.95] tracking-tight text-[#0f1e3a]">
              Exceptional
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f2a5a] to-[#2563eb]">healthcare,</span>
              <br />
              centered around you.
            </h1>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slate-600 max-w-[520px]">
              From routine checkups to advanced treatments, Nova Care brings experienced specialists, modern technology, and compassionate care together under one roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-appointment">
                <Button size="lg" className="h-12 px-7 text-sm">
                  Book an Appointment <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/doctors">
                <Button variant="secondary" size="lg" className="h-12 px-7">
                  Find a Doctor
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <a href="tel:+18005550199" className="flex items-center gap-2.5">
                <span className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-[#0f2a5a]" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500 font-medium">Emergency 24/7</span>
                  <span className="block text-sm font-bold text-[#0f1e3a]">+1 (800) 555-0199</span>
                </span>
              </a>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-slate-700">4.9/5</span> from 2,000+ patient reviews
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-xs">
              <span className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full px-3 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> JCI Accredited
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full px-3 py-2 shadow-sm">
                <Clock className="h-4 w-4 text-blue-600" /> Zero wait emergency
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative lg:h-[520px]"
          >
            <div className="relative rounded-[28px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(15,30,58,0.15)] border border-slate-100">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[520px] relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900"
                  alt="Doctor with patient"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e3a]/10 via-transparent to-transparent" />
              </div>
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute left-4 top-4 bg-white rounded-2xl shadow-lg border border-slate-100 p-3 flex items-center gap-3"
              >
                <span className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-emerald-600" />
                </span>
                <div>
                  <div className="text-xs font-bold text-[#0f1e3a]">24/7 Emergency Care</div>
                  <div className="text-xs text-slate-500">Always open for you</div>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute right-4 bottom-24 bg-white rounded-2xl shadow-lg border border-slate-100 p-3 pr-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-[#0f2a5a] text-sm">150+</div>
                <div>
                  <div className="text-xs font-bold text-[#0f1e3a]">Specialists</div>
                  <div className="text-xs text-slate-500">Across 12 departments</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute left-4 bottom-4 right-4 bg-[#0f1e3a] rounded-2xl p-4 flex items-center justify-between text-white"
              >
                <div>
                  <div className="text-xs text-white/70">Patient Satisfaction</div>
                  <div className="text-lg font-bold">98% • 50K+ patients</div>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/80?img=${10+i}`} alt="patient" className="h-8 w-8 rounded-full border-2 border-[#0f1e3a] object-cover" />
                  ))}
                  <span className="h-8 w-8 rounded-full bg-white text-[#0f1e3a] flex items-center justify-center text-xs font-bold border-2 border-[#0f1e3a]">+2k</span>
                </div>
              </motion.div>
            </div>
            {/* subtle background blob */}
            <div className="absolute -z-10 -right-10 -bottom-10 h-64 w-64 rounded-full bg-cyan-100 blur-3xl opacity-60" />
            <div className="absolute -z-10 -left-6 -top-6 h-48 w-48 rounded-full bg-blue-100 blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
