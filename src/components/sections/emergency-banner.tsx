"use client";
import { PhoneCall, Clock3, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function EmergencyBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[20px] bg-gradient-to-r from-[#0f1e3a] to-[#162e5c] p-6 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-6 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,214,0.15),transparent_50%)]" />
          <div className="relative flex items-start gap-4">
            <span className="hidden sm:flex h-11 w-11 rounded-xl bg-white/10 backdrop-blur items-center justify-center shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <div className="text-lg font-semibold">Need urgent medical attention?</div>
              <p className="text-sm text-white/70 mt-1 max-w-xl">Nova Care Emergency Department is open 24 hours a day, 7 days a week. Our triage team responds in under 3 minutes.</p>
              <div className="mt-3 flex items-center gap-4 text-xs text-white/60">
                <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" /> No appointment needed</span>
                <span className="hidden sm:inline-flex items-center gap-1.5"><PhoneCall className="h-3.5 w-3.5" /> Average wait 7 min</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center gap-3 w-full lg:w-auto">
            <div className="flex-1 lg:flex-none text-left lg:text-right">
              <div className="text-xs text-white/60">Emergency Hotline</div>
              <div className="text-lg font-bold">+1 (800) 555-0199</div>
            </div>
            <a href="tel:+18005550199" className="shrink-0">
              <Button variant="emergency" size="lg" className="rounded-full">
                <PhoneCall className="h-4 w-4" /> Call Emergency
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
