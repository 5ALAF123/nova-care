import { doctors, departments } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Star, Clock3, Languages, GraduationCap, MapPin, BadgeCheck, CalendarPlus, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return doctors.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const doc = doctors.find((d) => d.id === id);
  if (!doc) return { title: "Doctor not found" };
  return { title: `${doc.name} — ${doc.specialty} | Nova Care`, description: doc.bio.slice(0, 140) };
}

export default async function DoctorProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);
  if (!doctor) notFound();
  const dept = departments.find((d) => d.slug === doctor.departmentSlug);

  const slots = ["09:00 AM", "10:30 AM", "11:45 AM", "02:00 PM", "03:30 PM", "04:45 PM"];

  return (
    <div className="bg-[#fcfcf9]">
      <div className="mx-auto max-w-[1280px] px-6 py-6">
        <Link href="/doctors" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0f1e3a]">
          <ArrowLeft className="h-4 w-4" /> Back to doctors
        </Link>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-10">
        <div className="grid lg:grid-cols-[1.7fr_0.9fr] gap-6">
          {/* Main */}
          <div className="space-y-6">
            <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <img src={doctor.image} alt={doctor.name} className="h-56 w-56 rounded-2xl object-cover shrink-0 mx-auto md:mx-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="cyan">{dept?.name}</Badge>
                    <Badge variant={doctor.available ? "success" : "secondary"}>{doctor.available ? "Available Today" : "Currently Unavailable"}</Badge>
                  </div>
                  <h1 className="mt-3 text-2xl font-bold text-[#0f1e3a]">{doctor.name}</h1>
                  <div className="text-cyan-600 font-medium">{doctor.specialty} • {doctor.experience} years experience</div>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full font-semibold">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {doctor.rating} ({doctor.reviews} reviews)
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-slate-700">
                      <Languages className="h-4 w-4" /> {doctor.languages.join(", ")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{doctor.bio}</p>
                  <div className="mt-4 flex gap-3">
                    <Link href={`/book-appointment?doctor=${doctor.id}`} className="flex-1 sm:flex-none">
                      <Button className="w-full sm:w-auto px-8">Book Appointment <CalendarPlus className="h-4 w-4" /></Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="secondary">Contact Clinic</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-slate-100 p-6">
                <div className="font-semibold text-[#0f1e3a] flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Education</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {doctor.education.map((e) => <li key={e} className="flex gap-2"><span className="text-slate-300">•</span> {e}</li>)}
                  <li className="flex gap-2"><span className="text-slate-300">•</span> Board Certified — {doctor.specialty}</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-slate-100 p-6">
                <div className="font-semibold text-[#0f1e3a] flex items-center gap-2"><Award className="h-4 w-4" /> Areas of Expertise</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctor.expertise.map((ex) => (
                    <span key={ex} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">{ex}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-100 p-6">
              <div className="font-semibold text-[#0f1e3a]">About {doctor.name.split(" ").slice(-1)}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {doctor.bio} {dept?.longDescription} Patients appreciate clear explanations, unhurried consultations, and a warm, collaborative approach. The doctor participates in weekly multidisciplinary boards and contributes to Nova Care&apos;s continuous quality and patient safety programs.
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                  <div className="font-semibold text-[#0f1e3a] flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Experience</div>
                  <div className="text-slate-600 mt-1">{doctor.experience} years • {doctor.reviews}+ consultations</div>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                  <div className="font-semibold text-[#0f1e3a] flex items-center gap-1"><BadgeCheck className="h-3.5 w-3.5" /> Fee</div>
                  <div className="text-slate-600 mt-1">${doctor.fee === 0 ? "Emergency — no fee" : `$${doctor.fee} per consultation`}</div>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                  <div className="font-semibold text-[#0f1e3a] flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Location</div>
                  <div className="text-slate-600 mt-1">{doctor.location}</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-100 p-6">
              <div className="font-semibold text-[#0f1e3a]">Patient Reviews</div>
              <div className="mt-4 space-y-4">
                {[1,2,3].map((i) => (
                  <div key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center gap-2 text-sm font-medium text-[#0f1e3a]">
                      <img src={`https://i.pravatar.cc/80?img=${20+i}`} alt="patient" className="h-7 w-7 rounded-full object-cover" />
                      Patient {i} • <span className="inline-flex items-center gap-1 text-amber-500"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 5.0</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">“Highly professional and kind. Explained everything clearly and the follow-up was excellent. Would recommend {doctor.name.split(" ").pop()} to anyone.”</p>
                    <div className="mt-1 text-xs text-slate-400">Fictional review • Aug 2026</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-[20px] bg-[#0f1e3a] text-white p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e3a] to-[#1e3a7a] opacity-100" />
              <div className="relative">
                <div className="text-sm font-semibold">Book with {doctor.name.split(" ").slice(0,2).join(" ")}</div>
                <div className="text-xs text-white/70 mt-1">Choose a convenient time. Instant confirmation.</div>
                <div className="mt-4">
                  <div className="text-xs font-semibold text-white/80">Available today</div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {slots.map((s) => (
                      <Link key={s} href={`/book-appointment?doctor=${doctor.id}`} className="h-9 rounded-xl bg-white text-[#0f1e3a] flex items-center justify-center text-xs font-semibold hover:bg-cyan-50 transition">
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href={`/book-appointment?doctor=${doctor.id}`} className="mt-4 block">
                  <Button variant="secondary" className="w-full rounded-full">Book an Appointment</Button>
                </Link>
                <div className="mt-3 text-xs text-white/60 text-center">Free reschedule up to 24h • Instant email confirmation</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-100 p-6">
              <div className="font-semibold text-[#0f1e3a]">Hospital Location</div>
              <div className="mt-2 text-sm text-slate-600">{doctor.location}</div>
              <div className="mt-1 text-xs text-slate-500">1234 Wellness Way, Northview, CA 90210 • Fictional</div>
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-100 p-3 text-xs text-slate-600">
                <div className="font-semibold text-[#0f1e3a]">Opening Hours</div>
                <div>Mon–Sat: 8AM – 8PM • Emergency: 24/7</div>
              </div>
              <a href="https://maps.google.com" target="_blank" className="mt-3 inline-flex w-full h-10 rounded-full bg-white border border-slate-200 items-center justify-center text-sm font-semibold">Get Directions</a>
            </div>

            {dept && (
              <div className="rounded-2xl bg-white border border-slate-100 p-6">
                <div className="font-semibold text-[#0f1e3a]">{dept.name} Department</div>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">{dept.description}</p>
                <Link href={`/departments/${dept.slug}`} className="mt-3 inline-flex text-sm font-semibold text-[#0f2a5a]">Explore Department →</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
