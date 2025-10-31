import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`px-6 py-3 rounded-full border transition-colors bg-white/80 ${className}`}
      {...props}
    />
  );
}
