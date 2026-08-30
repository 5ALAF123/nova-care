"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-semibold text-[#0f1e3a] pr-4 group-hover:text-[#0f2a5a] transition-colors">
          {question}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shrink-0 transition-all",
            isOpen && "bg-[#0f2a5a] border-[#0f2a5a] text-white rotate-180"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-slate-600 pr-10">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  return (
    <div className="rounded-[20px] bg-white border border-slate-100 shadow-sm px-6 divide-y divide-slate-100">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
