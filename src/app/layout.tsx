import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBar } from "@/components/layout/mobile-bar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Care — Exceptional Healthcare, Centered Around You",
  description:
    "Nova Care is a fictional modern hospital website offering specialist care, medical services, appointments, and patient resources. Portfolio project.",
  keywords: ["hospital", "healthcare", "Nova Care", "doctors", "appointment", "medical"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo-mark.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Nova Care — Exceptional Healthcare, Centered Around You",
    description:
      "A premium fictional hospital website. Find doctors, explore departments, and book appointments.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.svg", width: 168, height: 36, alt: "Nova Care logo" }],
  },
  metadataBase: new URL("https://nova-care.example"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fcfcf9]">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <MobileBar />
        {/* bottom padding for mobile bar */}
        <div className="h-[72px] md:hidden" aria-hidden />
      </body>
    </html>
  );
}
