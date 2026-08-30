import type { Metadata } from "next";
import { DepartmentsGrid } from "@/components/sections/departments-grid";

export const metadata: Metadata = {
  title: "Departments — Nova Care",
  description: "Explore Nova Care's 12 medical departments, from Cardiology to Emergency Medicine.",
};

export default function DepartmentsPage() {
  return (
    <div className="bg-[#fcfcf9]">
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <div className="text-xs font-semibold tracking-[0.16em] text-cyan-600">DEPARTMENTS</div>
          <h1 className="mt-2 text-3xl font-bold text-[#0f1e3a]">Medical departments & centers</h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">Twelve centers of excellence. Click any department to see conditions treated, treatments, and specialists.</p>
        </div>
      </div>
      <DepartmentsGrid limit={12} title="All departments" />
    </div>
  );
}
