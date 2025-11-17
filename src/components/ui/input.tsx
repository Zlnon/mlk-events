import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border-2 border-charcoal/20 bg-white px-4 py-2 text-base transition-all duration-300",
          "placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:border-gold/40",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
