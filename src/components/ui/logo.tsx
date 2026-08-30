import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
  iconOnly?: boolean;
};

export function Logo({ variant = "light", size = "md", showTagline = true, className, iconOnly = false }: LogoProps) {
  const isDark = variant === "dark";
  const sizes = {
    sm: { mark: 32, text: "text-[13px]", tagline: "text-[8px]", gap: "gap-2" },
    md: { mark: 36, text: "text-[16px]", tagline: "text-[10px]", gap: "gap-3" },
    lg: { mark: 44, text: "text-[20px]", tagline: "text-[11px]", gap: "gap-3.5" },
  };
  const s = sizes[size];

  return (
    <div className={cn("flex items-center", s.gap, className)}>
      {/* Mark */}
      <div
        className="shrink-0 rounded-xl flex items-center justify-center relative overflow-hidden"
        style={{
          width: s.mark,
          height: s.mark,
          background: isDark ? "#ffffff" : "#0f1e3a",
          borderRadius: s.mark * 0.28,
          boxShadow: isDark ? "0 2px 12px rgba(0,0,0,0.15)" : "0 4px 14px rgba(15,42,90,0.18)",
        }}
        aria-hidden
      >
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: isDark
              ? "linear-gradient(135deg, #e0f2fe 0%, transparent 60%)"
              : "linear-gradient(135deg, rgba(6,182,214,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Cross */}
        <svg
          width={s.mark * 0.5}
          height={s.mark * 0.5}
          viewBox="0 0 20 20"
          fill="none"
          className="relative z-10"
        >
          {/* vertical */}
          <rect x="8" y="2" width="4" height="16" rx="1.2" fill={isDark ? "#0f1e3a" : "white"} />
          {/* horizontal */}
          <rect x="2" y="8" width="16" height="4" rx="1.2" fill={isDark ? "#0f1e3a" : "white"} />
          {/* center dot subtle */}
          <circle cx="10" cy="10" r="1.1" fill={isDark ? "#0f1e3a" : "white"} opacity={0} />
        </svg>
        {/* Nova sparkle */}
        <div
          className="absolute z-20 flex items-center justify-center"
          style={{
            right: s.mark * 0.12,
            top: s.mark * 0.12,
            width: s.mark * 0.32,
            height: s.mark * 0.32,
          }}
        >
          <svg viewBox="0 0 12 12" className="w-full h-full drop-shadow-sm">
            <path
              d="M6 0L7.1 3.6L10.8 4.8L7.2 6.1L6 10L4.8 6.1L1.2 4.8L4.9 3.6L6 0Z"
              fill={isDark ? "#06b6d4" : "#22d3ee"}
            />
            <circle cx="6" cy="4.9" r="1.3" fill="white" />
          </svg>
        </div>
      </div>

      {!iconOnly && (
        <div className="leading-none">
          <div
            className={cn("font-extrabold tracking-[0.14em]", s.text, isDark ? "text-white" : "text-[#0f1e3a]")}
            style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", letterSpacing: "0.13em" }}
          >
            NOVA CARE
          </div>
          {showTagline && (
            <div
              className={cn("font-semibold tracking-[0.18em] mt-[1px]", s.tagline, isDark ? "text-white/60" : "text-slate-500")}
              style={{ letterSpacing: "0.18em" }}
            >
              ADVANCED MEDICINE
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function LogoMark({ variant = "light", size = 40, className }: { variant?: "light" | "dark"; size?: number; className?: string }) {
  return <Logo variant={variant} size={size === 40 ? "md" : size < 36 ? "sm" : "lg"} iconOnly className={className} />;
}
