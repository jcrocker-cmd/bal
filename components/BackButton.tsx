"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

interface BackButtonProps {
  text?: string; // optional custom text
  className?: string; // optional additional styles
}

const BackButton: FC<BackButtonProps> = ({ text = "← Back", className }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`
        px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300
        text-gray-700 font-edu transition duration-300
        ${className || ""}
      `}
    >
      {text}
    </button>
  );
};

export default BackButton;
