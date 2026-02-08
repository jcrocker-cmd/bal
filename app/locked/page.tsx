"use client";
import { useRouter } from "next/navigation";

export default function Locked() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl">Hey… wait 💕</h2>
      <p>I promise you’ll like what’s inside 🥺</p>

      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-pink-500 text-white rounded-xl"
      >
        Go Back 💖
      </button>
    </div>
  );
}
