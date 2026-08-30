"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, CalendarPlus, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Doctors", href: "/doctors", icon: Stethoscope },
  { label: "Book", href: "/book-appointment", icon: CalendarPlus, primary: true },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function MobileBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 px-2 py-2 md:hidden shadow-[0_-8px_30px_rgba(15,30,58,0.08)]">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          if (item.primary) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-1 -mt-6"
              >
                <span className="h-12 w-12 rounded-2xl bg-[#0f2a5a] text-white flex items-center justify-center shadow-lg">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-semibold text-[#0f2a5a]">{item.label}</span>
              </Link>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1 rounded-xl",
                active ? "text-[#0f2a5a]" : "text-slate-500"
              )}
            >
              <Icon className={cn("h-5 w-5", active && "fill-[#0f2a5a]/10")} />
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
