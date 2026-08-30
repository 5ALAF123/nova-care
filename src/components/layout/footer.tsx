import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe, Heart, Share2, Star } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-[#0f1e3a] text-white mt-auto">
      <div className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] gap-10">
          {/* Brand */}
          <div>
            <Logo variant="dark" size="md" />
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
              Advanced medicine. Human care. A fictional premium hospital crafted as a portfolio project—designed to feel like a real, trustworthy healthcare institution.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Heart, Share2, Star].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-semibold tracking-wide">Quick Links</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Doctors", "/doctors"],
                ["Departments", "/departments"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <div className="text-sm font-semibold tracking-wide">Patient Resources</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><Link href="/book-appointment" className="hover:text-white transition">Book Appointment</Link></li>
              <li><Link href="/doctors" className="hover:text-white transition">Find a Doctor</Link></li>
              <li><Link href="/health-library" className="hover:text-white transition">Health Library</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition">FAQs</Link></li>
              <li><Link href="/departments" className="hover:text-white transition">Our Departments</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Emergency Info</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold tracking-wide">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-cyan-300" />
                <span>1234 Wellness Way, Northview, CA 90210<br /><span className="text-white/50 text-xs">Fictional address for portfolio demo</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-300" /> +1 (800) 555-0199 <span className="text-white/50 text-xs">• 24/7 Emergency</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-300" /> +1 (800) 555-0142 <span className="text-white/50 text-xs">• Appointments</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-300" /> hello@novacare.example
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-cyan-300" /> Open 24 hours — Every day
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© 2026 Nova Care. Fictional portfolio project. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
