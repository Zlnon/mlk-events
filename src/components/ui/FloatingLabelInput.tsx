"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, type, label, id, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== "");
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className={cn(
          "peer flex h-14 w-full rounded-md border-2 border-charcoal/20 bg-white px-4 pt-6 pb-2 text-base transition-all duration-300",
          "placeholder:text-transparent focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:border-gold/40",
          className
        )}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        placeholder={label}
        {...props}
      />
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          top: isFocused || hasValue ? "0.5rem" : "50%",
          fontSize: isFocused || hasValue ? "0.75rem" : "1rem",
          y: isFocused || hasValue ? 0 : "-50%",
          color: isFocused ? "#D4AF37" : "#333333",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-4 pointer-events-none font-medium tracking-wide"
        style={{ opacity: 0.7 }}
      >
        {label}
      </motion.label>
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
