import { departments, doctors, faqs } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, CheckCircle2, Users, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { DoctorCard } from "@/components/doctors/doctor-card";

export async function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return { title: "Department not found" };
  return { title: `${dept.name} — Nova Care`, description: dept.description };
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) notFound();
  const deptDoctors = doctors.filter((d) => d.departmentSlug === dept.slug);

  return (
    <div className="bg-[#fcfcf9]">
      <div className="mx-auto max-w-[1280px] px-6 py-6">
        <Link href="/departments" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0f1e3a]">
          <ArrowLeft className="h-4 w-4" /> All departments
        </Link>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="rounded-[28px] bg-white border border-slate-100 shadow-sm overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 lg:p-10">
            <div className="inline-flex px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-xs font-semibold text-cyan-700">{dept.short}</div>
            <h1 className="mt-3 text-3xl font-bold text-[#0f1e3a]">{dept.name}</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{dept.longDescription}</p>
            <div className="mt-6 flex gap-3">
              <Link href={`/book-appointment?department=${dept.slug}`}>
                <Button>Book Appointment</Button>
              </Link>
              <Link href="/doctors">
                <Button variant="secondary">Find a Doctor</Button>
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                <div className="text-lg font-bold text-[#0f1e3a]">{deptDoctors.length}</div>
                <div className="text-xs text-slate-500">Specialists</div>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                <div className="text-lg font-bold text-[#0f1e3a]">24/7</div>
                <div className="text-xs text-slate-500">Support</div>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                <div className="text-lg font-bold text-[#0f1e3a]">98%</div>
                <div className="text-xs text-slate-500">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative h-[320px] lg:h-auto">
            <img src={dept.image} alt={dept.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e3a]/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-10 grid lg:grid-cols-[1.6fr_0.9fr] gap-8">
        <div className="space-y-6">
          <div className="rounded-2xl bg-white border border-slate-100 p-6">
            <h2 className="font-semibold text-[#0f1e3a]">Overview</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              The {dept.name} department at Nova Care delivers compassionate, evidence-based care. Our specialists collaborate across disciplines, ensuring every patient benefits from collective expertise, advanced imaging, and personalized follow-up. This page contains fictional, general information for portfolio purposes and does not constitute medical advice.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-slate-100 p-6">
              <h3 className="font-semibold text-[#0f1e3a] flex items-center gap-2"><Users className="h-4 w-4" /> Conditions Treated</h3>
              <ul className="mt-3 space-y-2">
                {dept.conditions.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> {c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-6">
              <h3 className="font-semibold text-[#0f1e3a]">Treatments & Services</h3>
              <ul className="mt-3 space-y-2">
                {dept.treatments.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" /> {t}</li>
                ))}
              </ul>
            </div>
          </div>

          {deptDoctors.length > 0 && (
            <div>
              <h3 className="font-semibold text-[#0f1e3a]">Doctors in {dept.name}</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-5">
                {deptDoctors.map((d) => <DoctorCard key={d.id} doctor={d} />)}
              </div>
            </div>
          )}

          <div className="rounded-2xl bg-white border border-slate-100 p-6">
            <h3 className="font-semibold text-[#0f1e3a]">Frequently asked questions</h3>
            <div className="mt-4">
              <Accordion items={faqs.slice(0, 4)} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-[#0f1e3a] text-white p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e3a] to-[#1e3a7a]" />
            <div className="relative">
              <h3 className="font-semibold">Book an appointment</h3>
              <p className="mt-1 text-sm text-white/70">Choose {dept.name} and get a confirmed slot in under a minute.</p>
              <Link href={`/book-appointment?department=${dept.slug}`} className="mt-4 block">
                <Button variant="secondary" className="w-full rounded-full">Book Now</Button>
              </Link>
              <div className="mt-3 text-xs text-white/60 text-center">Instant confirmation • Free reschedule 24h</div>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-slate-100 p-6">
            <h3 className="font-semibold text-[#0f1e3a] flex items-center gap-2"><Clock3 className="h-4 w-4" /> Opening Hours</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between"><span>Mon – Fri</span><span className="font-medium">8:00 AM – 8:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="font-medium">8:00 AM – 6:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="font-medium">9:00 AM – 5:00 PM</span></div>
              <div className="flex justify-between text-emerald-600 font-semibold"><span>Emergency</span><span>24/7 Open</span></div>
            </div>
            <a href="tel:+18005550199" className="mt-4 inline-flex w-full h-10 rounded-full bg-emerald-50 border border-emerald-100 items-center justify-center gap-2 text-sm font-semibold text-emerald-700">
              <PhoneCall className="h-4 w-4" /> +1 (800) 555-0199
            </a>
          </div>
          <div className="rounded-2xl bg-white border border-slate-100 p-6">
            <h3 className="font-semibold text-[#0f1e3a]">Need help?</h3>
            <p className="mt-2 text-sm text-slate-600">Our coordinators can guide you to the right specialist for your concern.</p>
            <Link href="/contact" className="mt-3 inline-flex text-sm font-semibold text-[#0f2a5a]">Request a callback →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
