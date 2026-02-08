"use client";

import { useRouter } from "next/navigation";

interface CustomButtonProps {
  text: string; // button text
  href?: string; // optional route
  onClick?: () => void; // optional custom click
  className?: string; // Tailwind classes or inline styling
}

export default function CustomButton({
  text,
  href,
  onClick,
  className = "",
}: CustomButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer font-edu px-10 py-3 rounded-full transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
}
