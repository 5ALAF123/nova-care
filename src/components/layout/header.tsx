"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Phone, Clock3, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SearchModal } from "./search-modal";
import { Logo } from "@/components/ui/logo";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Health Library", href: "/health-library" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#0f1e3a] text-white text-xs">
        <div className="mx-auto max-w-[1280px] px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              24/7 Emergency Care
            </span>
            <span className="hidden lg:flex items-center gap-2 text-white/80">
              <Phone className="h-3.5 w-3.5" /> Call: +1 (800) 555-0199
            </span>
            <span className="hidden xl:flex items-center gap-2 text-white/80">
              <Clock3 className="h-3.5 w-3.5" /> Mon–Sun: Open 24 Hours
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="hidden lg:inline">1234 Wellness Way, Northview, CA 90210 • Fictional Location</span>
            <Link href="/contact" className="text-white hover:text-cyan-200 transition font-medium">
              Get Directions →
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 h-[68px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Nova Care - Home">
            <Logo variant="light" size="md" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition ${
                    active ? "bg-slate-900 text-white" : "text-slate-600 hover:text-[#0f1e3a] hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition hidden sm:flex"
            >
              <Search className="h-4 w-4" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 mr-2">
              <span className="hidden xl:inline-flex items-center gap-1.5 border border-slate-200 rounded-full px-2.5 py-1 bg-white">
                <span className="text-[11px] font-semibold">⌘ K</span>
              </span>
            </div>
            <Link href="/book-appointment" className="hidden sm:inline-flex">
              <Button size="default" className="rounded-full h-10 px-6">
                Book an Appointment
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden h-10 w-10 rounded-full bg-[#0f1e3a] text-white flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0f1e3a]/40 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 h-full w-[86%] max-w-[380px] bg-white z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <Logo variant="light" size="sm" />
                <button onClick={() => setMobileOpen(false)} className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-auto px-6 py-6">
                <nav className="space-y-1">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium transition ${
                        pathname === item.href ? "bg-[#0f2a5a] text-white" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                      <ChevronRight className="h-4 w-4 opacity-40" />
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                  <div className="text-sm font-semibold text-[#0f1e3a] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> Emergency 24/7
                  </div>
                  <div className="mt-1 text-sm font-bold text-[#0f1e3a]">+1 (800) 555-0199</div>
                  <div className="text-xs text-slate-500">Immediate care, always open.</div>
                </div>
              </div>
              <div className="p-6 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                  className="w-full h-11 rounded-full border border-slate-200 flex items-center justify-center gap-2 text-sm font-medium text-slate-700"
                >
                  <Search className="h-4 w-4" /> Search
                </button>
                <Link href="/book-appointment" onClick={() => setMobileOpen(false)} className="block">
                  <Button className="w-full h-12 text-sm">Book an Appointment</Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
