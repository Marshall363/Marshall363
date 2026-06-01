"use client";

import { Phone } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "outline";
  size?: "default" | "large";
  showPhone?: boolean;
  href?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  showPhone = false,
  href,
  fullWidth = false,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-white shadow-[0_4px_16px_rgba(232,98,42,0.3)] hover:brightness-105 hover:scale-[1.03]",
    secondary:
      "bg-primary text-white hover:brightness-110 hover:scale-[1.03]",
    white:
      "bg-white text-primary font-bold hover:bg-white/95 hover:scale-[1.03]",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    default: "px-8 py-4 text-base",
    large: "px-10 py-[18px] text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {showPhone && <Phone className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
