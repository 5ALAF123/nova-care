import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#0f2a5a] text-white shadow-[0_4px_14px_rgba(15,42,90,0.25)] hover:bg-[#162e5c] hover:shadow-[0_6px_20px_rgba(15,42,90,0.3)]",
        secondary:
          "bg-white text-[#0f2a5a] border border-slate-200 shadow-sm hover:bg-slate-50",
        ghost: "text-[#0f2a5a] hover:bg-slate-100",
        outline:
          "border border-[#0f2a5a] text-[#0f2a5a] bg-transparent hover:bg-[#0f2a5a] hover:text-white",
        cyan: "bg-cyan-500 text-white hover:bg-cyan-600 shadow-[0_4px_14px_rgba(6,182,214,0.3)]",
        emergency:
          "bg-[#ef4444] text-white shadow-[0_4px_14px_rgba(239,68,68,0.3)] hover:bg-red-600",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-8 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
