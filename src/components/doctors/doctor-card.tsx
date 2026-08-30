import Link from "next/link";
import { Star, Clock3, Languages, MapPin } from "lucide-react";
import { Doctor } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="rounded-[20px] bg-white border border-slate-100 shadow-sm hover:shadow-[0_12px_30px_rgba(15,30,58,0.08)] overflow-hidden group transition-all flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={doctor.available ? "success" : "secondary"}>{doctor.available ? "Available Today" : "On Leave"}</Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold text-[#0f1e3a] shadow-sm">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {doctor.rating}
            <span className="text-slate-400">•</span> {doctor.reviews}
          </span>
          <span className="inline-flex items-center gap-1 bg-[#0f1e3a] text-white px-2.5 py-1 rounded-full text-xs font-medium">
            <Clock3 className="h-3 w-3" /> {doctor.experience} yrs
          </span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="font-semibold text-[#0f1e3a]">{doctor.name}</div>
        <div className="text-sm text-cyan-600 font-medium">{doctor.specialty}</div>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
          <Languages className="h-3.5 w-3.5" /> {doctor.languages.join(" • ")}
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin className="h-3.5 w-3.5" /> {doctor.location}
        </div>
        <div className="mt-3 text-xs text-slate-500 line-clamp-2">{doctor.expertise.join(" • ")}</div>
        <div className="mt-4 flex gap-2">
          <Link href={`/doctors/${doctor.id}`} className="flex-1">
            <Button variant="secondary" size="sm" className="w-full rounded-full h-9">View Profile</Button>
          </Link>
          <Link href={`/book-appointment?doctor=${doctor.id}`} className="flex-1">
            <Button size="sm" className="w-full rounded-full h-9">Book</Button>
          </Link>
        </div>
        <div className="mt-3 text-center text-xs text-slate-400">Consultation fee: ${doctor.fee === 0 ? "Emergency" : `$${doctor.fee}`}</div>
      </div>
    </div>
  );
}
