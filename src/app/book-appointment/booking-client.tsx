"use client";
import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { departments, doctors } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ArrowLeft, ArrowRight, Calendar, Clock, User, Stethoscope, Building2, Sparkles, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const patientSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  phone: z.string().min(8, "Phone is required"),
  email: z.string().email("Valid email required"),
  dob: z.string().min(1, "Date of birth is required"),
  reason: z.string().min(6, "Please describe reason for visit"),
});
type PatientForm = z.infer<typeof patientSchema>;

const steps = ["Department", "Doctor", "Date", "Time", "Details", "Confirm"];

function generateDates() {
  const dates: { label: string; sub: string; value: string }[] = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // skip sunday as closed? but keep all except maybe
    const label = d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    const sub = d.toLocaleDateString("en-US", { weekday: "long" });
    const value = d.toISOString().split("T")[0];
    dates.push({ label, sub, value });
  }
  return dates;
}
const timeSlots = ["09:00 AM", "09:45 AM", "10:30 AM", "11:15 AM", "02:00 PM", "02:45 PM", "03:30 PM", "04:15 PM", "05:00 PM"];

export function BookingClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawDept = searchParams.get("department");
  const rawDoctor = searchParams.get("doctor");
  const derivedDept = rawDoctor ? doctors.find((d) => d.id === rawDoctor)?.departmentSlug ?? rawDept : rawDept;
  const initialStep = rawDoctor ? 3 : rawDept ? 2 : 1;

  const [step, setStep] = useState(initialStep);
  const [deptSlug, setDeptSlug] = useState<string | null>(derivedDept);
  const [doctorId, setDoctorId] = useState<string | null>(rawDoctor);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");

  const filteredDoctors = useMemo(() => {
    if (!deptSlug) return doctors;
    return doctors.filter((d) => d.departmentSlug === deptSlug);
  }, [deptSlug]);

  const selectedDept = departments.find((d) => d.slug === deptSlug);
  const selectedDoctor = doctors.find((d) => d.id === doctorId);

  const [patientData, setPatientData] = useState<PatientForm | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<PatientForm>({ resolver: zodResolver(patientSchema) });

  const canNext = () => {
    if (step === 1) return !!deptSlug;
    if (step === 2) return !!doctorId;
    if (step === 3) return !!date;
    if (step === 4) return !!time;
    return true;
  };

  const onDetailsSubmit = handleSubmit((data) => {
    setPatientData(data);
    setStep(6);
  });

  const onFinalConfirm = () => {
    const id = `NC-${Math.floor(20000 + Math.random() * 80000)}`;
    setAppointmentId(id);
    setSuccess(true);
    // In real app, would POST to API
    console.log({ deptSlug, doctorId, date, time, ...patientData, id });
  };

  if (success && step === 6) {
    const patient = patientData || getValues();
    return (
      <div className="bg-[#fcfcf9] min-h-[70vh] flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[560px] rounded-[24px] bg-white border border-slate-100 shadow-[0_20px_60px_rgba(15,30,58,0.12)] p-8 text-center"
        >
          <div className="mx-auto h-14 w-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="h-7 w-7 text-emerald-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-[#0f1e3a]">Your appointment is confirmed.</h1>
          <p className="mt-2 text-sm text-slate-500">We have sent a confirmation to {patient.email || "your email"} and SMS.</p>
          <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5 text-left">
            <div className="text-xs font-semibold tracking-[0.12em] text-slate-500">APPOINTMENT ID</div>
            <div className="mt-1 text-lg font-bold text-[#0f1e3a]">{appointmentId}</div>
            <div className="mt-4 grid gap-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Doctor</span><span className="font-medium text-[#0f1e3a]">{selectedDoctor?.name}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Department</span><span className="font-medium text-[#0f1e3a]">{selectedDept?.name}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="font-medium text-[#0f1e3a]">{date}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Time</span><span className="font-medium text-[#0f1e3a]">{time}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Patient</span><span className="font-medium text-[#0f1e3a]">{patient.fullName}</span></div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              variant="secondary"
              className="flex-1 rounded-full"
              onClick={() => {
                // create ICS
                const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${date?.replace(/-/g, "")}T${(time || "09:00 AM").replace(/[^0-9]/g, "").slice(0,4)}00\nSUMMARY:Nova Care Appointment with ${selectedDoctor?.name}\nDESCRIPTION:Appointment ${appointmentId}\nLOCATION:Nova Care Main Campus\nEND:VEVENT\nEND:VCALENDAR`;
                const blob = new Blob([icsContent], { type: "text/calendar" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `${appointmentId}.ics`;
                a.click();
              }}
            >
              <Calendar className="h-4 w-4" /> Add to Calendar
            </Button>
            <Button className="flex-1 rounded-full" onClick={() => router.push("/")}>
              Back to Home
            </Button>
          </div>
          <div className="mt-4">
            <button onClick={() => { setSuccess(false); setStep(1); setDeptSlug(null); setDoctorId(null); setDate(null); setTime(null); setPatientData(null); }} className="text-sm text-slate-500 hover:text-[#0f1e3a]">Book another appointment</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcf9] pb-12">
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[880px] px-6 py-8">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">BOOK AN APPOINTMENT</div>
          <h1 className="mt-2 text-2xl font-bold text-[#0f1e3a]">Book your visit in 1 minute</h1>
          <p className="mt-1 text-sm text-slate-500">Choose department, doctor, date and time. Mock frontend only — no real booking is created.</p>

          {/* Stepper */}
          <div className="mt-6 flex items-center gap-2 overflow-auto">
            {steps.map((s, i) => {
              const idx = i + 1;
              const active = idx === step;
              const done = idx < step;
              return (
                <div key={s} className="flex items-center gap-2 shrink-0">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border transition ${done ? "bg-emerald-500 border-emerald-500 text-white" : active ? "bg-[#0f1e3a] border-[#0f1e3a] text-white" : "bg-white border-slate-200 text-slate-500"}`}>
                    {done ? <CheckCircle2 className="h-4 w-4" /> : idx}
                  </div>
                  <span className={`text-xs font-medium whitespace-nowrap ${active ? "text-[#0f1e3a]" : done ? "text-emerald-600" : "text-slate-500"}`}>{s}</span>
                  {idx < steps.length && <div className={`h-px w-6 mx-1 ${done ? "bg-emerald-300" : "bg-slate-200"}`} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[880px] px-6 mt-6">
        <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.2 }}>
                <h2 className="font-semibold text-[#0f1e3a] flex items-center gap-2"><Building2 className="h-4 w-4" /> Choose Department</h2>
                <p className="text-sm text-slate-500 mt-1">Select the department that best matches your concern.</p>
                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  {departments.map((d) => (
                    <button
                      key={d.slug}
                      onClick={() => setDeptSlug(d.slug)}
                      className={`text-left p-4 rounded-2xl border transition ${deptSlug === d.slug ? "bg-[#0f1e3a] border-[#0f1e3a] text-white" : "bg-white border-slate-200 hover:border-slate-300"}`}
                    >
                      <div className={`font-medium ${deptSlug === d.slug ? "text-white" : "text-[#0f1e3a]"}`}>{d.name}</div>
                      <div className={`text-xs mt-1 ${deptSlug === d.slug ? "text-white/70" : "text-slate-500"}`}>{d.short}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}>
                <h2 className="font-semibold text-[#0f1e3a] flex items-center gap-2"><Stethoscope className="h-4 w-4" /> Choose Doctor</h2>
                <p className="text-sm text-slate-500 mt-1">Showing {filteredDoctors.length} specialists{selectedDept ? ` in ${selectedDept.name}` : ""}.</p>
                <div className="mt-5 grid gap-3 max-h-[420px] overflow-auto pr-1">
                  {filteredDoctors.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setDoctorId(doc.id)}
                      className={`flex gap-4 p-4 rounded-2xl border text-left transition ${doctorId === doc.id ? "bg-[#0f1e3a] border-[#0f1e3a] text-white" : "bg-white border-slate-200 hover:border-slate-300"}`}
                    >
                      <img src={doc.image} alt={doc.name} className="h-14 w-14 rounded-xl object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium truncate ${doctorId === doc.id ? "text-white" : "text-[#0f1e3a]"}`}>{doc.name} {doc.available ? "" : "(Unavailable)"}</div>
                        <div className={`text-xs ${doctorId === doc.id ? "text-white/70" : "text-slate-500"}`}>{doc.specialty} • {doc.experience} yrs • {doc.rating}★</div>
                        <div className={`text-xs truncate ${doctorId === doc.id ? "text-white/60" : "text-slate-400"}`}>{doc.languages.join(" • ")}</div>
                      </div>
                      {doctorId === doc.id && <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-1" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}>
                <h2 className="font-semibold text-[#0f1e3a] flex items-center gap-2"><Calendar className="h-4 w-4" /> Choose Date</h2>
                <p className="text-sm text-slate-500 mt-1">Select a convenient date. Clinic is open Mon–Sat.</p>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {generateDates().map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDate(d.value)}
                      className={`p-3 rounded-2xl border text-left transition ${date === d.value ? "bg-[#0f1e3a] border-[#0f1e3a] text-white" : "bg-white border-slate-200 hover:border-slate-300"}`}
                    >
                      <div className={`text-sm font-semibold ${date === d.value ? "text-white" : "text-[#0f1e3a]"}`}>{d.label}</div>
                      <div className={`text-xs ${date === d.value ? "text-white/70" : "text-slate-500"}`}>{d.sub}</div>
                    </button>
                  ))}
                </div>
                {selectedDoctor && (
                  <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center gap-3 text-sm">
                    <img src={selectedDoctor.image} alt={selectedDoctor.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-[#0f1e3a]">{selectedDoctor.name}</div>
                      <div className="text-xs text-slate-500">{selectedDoctor.specialty} • {selectedDept?.name}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}>
                <h2 className="font-semibold text-[#0f1e3a] flex items-center gap-2"><Clock className="h-4 w-4" /> Choose Time</h2>
                <p className="text-sm text-slate-500 mt-1">Slots for {date || "selected date"}.</p>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`h-11 rounded-xl border text-sm font-medium transition ${time === t ? "bg-[#0f1e3a] border-[#0f1e3a] text-white" : "bg-white border-slate-200 hover:border-slate-300 text-[#0f1e3a]"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="mt-4 text-xs text-slate-500 flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Clinic preference: morning slots fill faster.</div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="s5" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}>
                <h2 className="font-semibold text-[#0f1e3a] flex items-center gap-2"><User className="h-4 w-4" /> Patient Information</h2>
                <p className="text-sm text-slate-500 mt-1">Please provide accurate contact details.</p>
                <form onSubmit={onDetailsSubmit} className="mt-5 space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Alex Morgan" {...register("fullName")} className="mt-1.5" />
                    {errors.fullName && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.fullName.message}</span>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+1 (___) ___-____" {...register("phone")} className="mt-1.5" />
                      {errors.phone && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.phone.message}</span>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="alex@example.com" {...register("email")} className="mt-1.5" />
                      {errors.email && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.email.message}</span>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" {...register("dob")} className="mt-1.5" />
                    {errors.dob && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.dob.message}</span>}
                  </div>
                  <div>
                    <Label htmlFor="reason">Reason for Visit</Label>
                    <Textarea id="reason" placeholder="Briefly describe your concern..." {...register("reason")} className="mt-1.5" />
                    {errors.reason && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.reason.message}</span>}
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                    <div className="text-xs font-semibold text-slate-600">Summary</div>
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="flex justify-between"><span className="text-slate-500">Department</span><span className="font-medium">{selectedDept?.name}</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Doctor</span><span className="font-medium">{selectedDoctor?.name}</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Date & Time</span><span className="font-medium">{date} • {time}</span></div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-11 rounded-full">Review & Confirm</Button>
                </form>
              </motion.div>
            )}

            {step === 6 && !success && (
              <motion.div key="s6" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}>
                <h2 className="font-semibold text-[#0f1e3a] flex items-center gap-2"><Sparkles className="h-4 w-4" /> Confirm Appointment</h2>
                <p className="text-sm text-slate-500 mt-1">Please review your details before confirming.</p>
                <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-5 space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Department</span><span className="font-semibold text-[#0f1e3a]">{selectedDept?.name}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Doctor</span><span className="font-semibold text-[#0f1e3a]">{selectedDoctor?.name}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="font-semibold text-[#0f1e3a]">{date}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Time</span><span className="font-semibold text-[#0f1e3a]">{time}</span></div>
                </div>
                {patientData && (
                  <div className="mt-4 rounded-xl bg-white border border-slate-200 p-4 text-sm space-y-1">
                    <div className="flex justify-between"><span className="text-slate-500">Patient</span><span className="font-medium">{patientData.fullName}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Phone</span><span className="font-medium">{patientData.phone}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Email</span><span className="font-medium">{patientData.email}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Reason</span><span className="font-medium truncate max-w-[180px]">{patientData.reason}</span></div>
                  </div>
                )}
                <div className="mt-6 flex gap-3">
                  <Button variant="secondary" onClick={() => setStep(5)} className="flex-1 rounded-full">Back to Edit</Button>
                  <Button onClick={onFinalConfirm} className="flex-1 rounded-full">Confirm Appointment</Button>
                </div>
                <p className="mt-3 text-xs text-slate-400 text-center">By confirming, you agree to our Terms. Mock booking — no payment required.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav buttons for steps 1-4 */}
          {step < 5 && (
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <Button variant="ghost" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1} className="rounded-full">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              {step < 4 ? (
                <Button disabled={!canNext()} onClick={() => setStep((s) => s + 1)} className="rounded-full">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button disabled={!canNext()} onClick={() => setStep(5)} className="rounded-full">
                  Continue to Details <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}

          {step === 5 && (
            <div className="mt-4 flex justify-start">
              <Button variant="ghost" onClick={() => setStep(4)} className="rounded-full">
                <ArrowLeft className="h-4 w-4" /> Back to Time
              </Button>
            </div>
          )}
        </div>

        {/* Helper */}
        <div className="mt-6 text-center text-xs text-slate-400">
          Need help? Call <a href="tel:+18005550199" className="font-semibold text-[#0f1e3a]">+1 (800) 555-0199</a> • Emergency 24/7
        </div>
      </div>
    </div>
  );
}
