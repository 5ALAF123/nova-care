"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type FormValues = z.infer<typeof schema>;

export function ContactClient() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="bg-[#fcfcf9]">
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">CONTACT</div>
          <h1 className="mt-2 text-3xl font-bold text-[#0f1e3a]">Get in touch</h1>
          <p className="mt-2 text-sm text-slate-500">We are here to help. Reach us by phone, email, or the form below. Fictional contact for portfolio demo.</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        {/* Info */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#0f1e3a] text-white p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e3a] to-[#1e3a7a]" />
            <div className="relative">
              <h3 className="font-semibold">Nova Care Main Campus</h3>
              <p className="mt-1 text-sm text-white/70">1234 Wellness Way, Northview, CA 90210<br />Fictional address — portfolio demo</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-300" /> +1 (800) 555-0199 <span className="text-white/60 text-xs">• 24/7 Emergency</span></div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-300" /> +1 (800) 555-0142 <span className="text-white/60 text-xs">• Appointments</span></div>
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-300" /> hello@novacare.example</div>
                <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-cyan-300" /> Open 24 hours — Every day</div>
                <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-cyan-300 mt-0.5" /> <span>Near Central Park • Free valet & underground parking<br /><span className="text-white/50 text-xs">Generic map placeholder — fictional location</span></span></div>
              </div>
              <div className="mt-6 flex gap-2">
                <a href="https://maps.google.com" target="_blank" className="inline-flex h-9 px-4 rounded-full bg-white text-[#0f1e3a] items-center justify-center text-sm font-semibold">Get Directions</a>
                <a href="tel:+18005550199" className="inline-flex h-9 px-4 rounded-full bg-white/10 border border-white/20 text-white items-center justify-center text-sm font-semibold">Call Now</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-100 p-6">
            <h4 className="font-semibold text-[#0f1e3a]">Opening Hours</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between"><span>Outpatient</span><span className="font-medium">Mon–Sat 8AM–8PM</span></div>
              <div className="flex justify-between"><span>Pharmacy</span><span className="font-medium">24/7</span></div>
              <div className="flex justify-between"><span>Laboratory</span><span className="font-medium">6AM–10PM</span></div>
              <div className="flex justify-between text-emerald-600 font-semibold"><span>Emergency</span><span>24/7 Open</span></div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 h-64 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
              <div className="text-center">
                <div className="h-10 w-10 rounded-xl bg-[#0f2a5a] mx-auto flex items-center justify-center text-white font-bold text-xs">NC</div>
                <div className="mt-2 text-sm font-semibold text-[#0f1e3a]">Map Placeholder</div>
                <div className="text-xs text-slate-500">Fictional location — not a real hospital</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-[24px] bg-white border border-slate-100 shadow-sm p-6 md:p-8">
          <h3 className="font-semibold text-[#0f1e3a]">Send us a message</h3>
          <p className="text-sm text-slate-500 mt-1">We will respond within 2 hours during working hours.</p>

          {success && (
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
              <CheckCircle2 className="h-4 w-4" /> Message sent successfully. We will contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Alex Morgan" {...register("name")} className="mt-1.5" />
                {errors.name && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.name.message}</span>}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 (___) ___-____" {...register("phone")} className="mt-1.5" />
                {errors.phone && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.phone.message}</span>}
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="alex@example.com" {...register("email")} className="mt-1.5" />
              {errors.email && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.email.message}</span>}
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Appointment inquiry" {...register("subject")} className="mt-1.5" />
              {errors.subject && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.subject.message}</span>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help you?" {...register("message")} className="mt-1.5" />
              {errors.message && <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" />{errors.message.message}</span>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full h-11 rounded-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <p className="text-xs text-slate-400 text-center">By sending, you agree to our fictional Privacy Policy for this portfolio demo.</p>
          </form>

          <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-4">
            <div className="text-sm font-semibold text-[#0f1e3a]">Need urgent help?</div>
            <div className="text-sm text-slate-600">For emergencies, call <a href="tel:+18005550199" className="font-semibold text-emerald-600">+1 (800) 555-0199</a> — 24/7 triage.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
