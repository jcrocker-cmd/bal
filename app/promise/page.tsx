"use client";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/Button";
import GIF from "@/public/promise-GIF.gif";
import Image from "next/image";

export default function Promise() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Image src={GIF} alt="Love" className="w-28 h-28 mb-2" />
      <h2 className="text-2xl font-momo text-[#cba6f8]">
        I promise you’ll like it
      </h2>

      <CustomButton
        text="Try Again 💕"
        href="/"
        className="bg-gray-400 text-white"
      />
    </div>
  );
}
