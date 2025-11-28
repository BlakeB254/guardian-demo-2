"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-800",
        gold: "bg-gradient-to-r from-[#c9a227] to-[#e4c865] text-[#1a1a2e]",
        primary: "bg-[#1a1a2e] text-white",
        secondary: "bg-[#16213e] text-white",
        success: "bg-emerald-100 text-emerald-800",
        warning: "bg-amber-100 text-amber-800",
        danger: "bg-red-100 text-red-800",
        outline: "border-2 border-[#c9a227] text-[#c9a227] bg-transparent",
        outlineLight: "border-2 border-white text-white bg-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-xs rounded",
        md: "px-3 py-1 text-sm rounded-md",
        lg: "px-4 py-1.5 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
