import { Hero } from "@/components/sections/hero";
import { EmergencyBanner } from "@/components/sections/emergency-banner";
import { QuickActions } from "@/components/sections/quick-actions";
import { AboutSection } from "@/components/sections/about-section";
import { DepartmentsGrid } from "@/components/sections/departments-grid";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import Link from "next/link";
import { articles } from "@/lib/data";
import { ArrowRight, Clock3 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <EmergencyBanner />
      <QuickActions />
      <AboutSection />
      <DepartmentsGrid />
      <DoctorsSection />
      <ServicesSection />
      <WhyChooseUs />

      {/* Health Library Preview */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">HEALTH LIBRARY</div>
              <h2 className="mt-2 text-[28px] font-bold text-[#0f1e3a]">Health insights, plain and simple</h2>
              <p className="mt-2 text-sm text-slate-500">Trusted, easy-to-understand articles from our specialists. Not medical advice—just good information.</p>
            </div>
            <Link href="/health-library" className="hidden sm:inline-flex text-sm font-semibold text-[#0f2a5a] hover:underline">
              View all articles →
            </Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/health-library/${a.slug}`} className="group rounded-[20px] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={a.image} alt={a.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 font-semibold border border-cyan-100">{a.category}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500"><Clock3 className="h-3 w-3" /> {a.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-semibold text-[#0f1e3a] leading-snug group-hover:text-[#0f2a5a]">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">{a.excerpt}</p>
                  <div className="mt-4 text-xs font-semibold text-[#0f2a5a] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ArrowRight className="h-3.5 w-3.5" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />

      {/* Location / Map */}
      <section className="bg-[#fcfcf9] py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-[28px] bg-white border border-slate-100 shadow-sm overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 lg:p-10">
              <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">FIND US</div>
              <h3 className="mt-2 text-2xl font-bold text-[#0f1e3a]">Visit Nova Care</h3>
              <p className="mt-2 text-sm text-slate-500">Fictional location for portfolio demonstration. Not a real hospital address.</p>
              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-[#0f1e3a]">Main Campus</div>
                  <div className="text-slate-600">1234 Wellness Way, Northview, CA 90210</div>
                  <div className="text-slate-500 text-xs">Near Central Park • Free valet & parking</div>
                </div>
                <div>
                  <div className="font-semibold text-[#0f1e3a]">Opening Hours</div>
                  <div className="text-slate-600">Outpatient: Mon–Sat 8AM–8PM • Emergency: 24/7</div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="https://maps.google.com" target="_blank" className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#0f2a5a] text-white text-sm font-semibold">Get Directions</a>
                  <a href="tel:+18005550199" className="inline-flex items-center justify-center h-10 px-5 rounded-full border border-slate-200 text-sm font-semibold text-[#0f1e3a]">Call +1 (800) 555-0199</a>
                </div>
              </div>
            </div>
            <div className="relative h-[340px] lg:h-auto bg-slate-100">
              {/* Map placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-[#0f2a5a] flex items-center justify-center text-white font-bold">NC</div>
                  <div className="mt-3 font-semibold text-[#0f1e3a]">Nova Care Main Campus</div>
                  <div className="text-xs text-slate-500">Interactive map placeholder — fictional location</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs bg-white border border-slate-200 rounded-full px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> 24/7 Emergency • Open now
                  </div>
                </div>
              </div>
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#0f1e3a 1px, transparent 1px), linear-gradient(90deg, #0f1e3a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">Map is a fictional placeholder for portfolio purposes and does not represent a real hospital location.</p>
        </div>
      </section>

      {/* Callback */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-[20px] bg-gradient-to-r from-cyan-50 to-blue-50 border border-blue-100 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-[#0f1e3a]">Need help choosing a doctor?</div>
              <div className="text-sm text-slate-600">Our care coordinators can help you find the right specialist and book within minutes.</div>
            </div>
            <a href="/contact" className="inline-flex h-10 px-6 rounded-full bg-[#0f2a5a] text-white items-center justify-center text-sm font-semibold shrink-0">Request a Callback</a>
          </div>
        </div>
      </section>
    </div>
  );
}
