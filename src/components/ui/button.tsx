import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gold" | "blush";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-charcoal text-white hover:bg-opacity-90": variant === "default",
            "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-white":
              variant === "outline",
            "bg-gold text-white hover:bg-opacity-90 shadow-md":
              variant === "gold",
            "bg-blush text-charcoal hover:bg-opacity-80": variant === "blush",
            "hover:bg-charcoal/10": variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "default",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
