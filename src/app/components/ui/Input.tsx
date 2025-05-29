// app/components/ui/Input.tsx
import { cn } from "@/lib/utils";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn(
        "w-full px-3 py-2 border rounded bg-white-100 focus:outline-none focus:ring-2 focus:ring-primary-green",
        className
      )}
    />
  );
};
