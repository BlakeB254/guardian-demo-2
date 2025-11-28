"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#c9a227] hover:bg-[#e4c865] text-[#1a1a2e] focus:ring-[#c9a227] shadow-lg hover:shadow-xl",
        secondary:
          "bg-[#1a1a2e] hover:bg-[#16213e] text-white focus:ring-[#1a1a2e] shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-[#1a1a2e] focus:ring-[#c9a227]",
        outlineLight:
          "border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e] focus:ring-white",
        ghost:
          "text-[#1a1a2e] hover:bg-gray-100 focus:ring-gray-300",
        ghostLight:
          "text-white hover:bg-white/10 focus:ring-white/30",
        danger:
          "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-lg",
        success:
          "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500 shadow-lg",
        shimmer:
          "gold-shimmer text-[#1a1a2e] focus:ring-[#c9a227] shadow-lg hover:shadow-xl",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-base rounded-lg",
        lg: "px-8 py-4 text-lg rounded-xl",
        xl: "px-10 py-5 text-xl rounded-xl",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
