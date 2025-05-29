// app/components/ui/Button.tsx
import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({ className, variant = "primary", ...props }: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition";
  const variants = {
    primary: "bg-primary-green text-white hover:bg-emerald-700",
    secondary: "bg-primary-gray text-white hover:bg-gray-600",
  };

  return (
    <button
      {...props}
      className={cn(baseStyle, variants[variant], className)}
    />
  );
};
