"use client";

import useGiftGuard from "@/hooks/useGiftGuard";
import Image from "next/image";
import sunflowerImg from "@/public/holdingflower.png"; // replace with your sunflower image
import BackButton from "@/components/BackButton";

export default function FlowersPage() {
  useGiftGuard();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff7f0] p-6">
      <BackButton className="absolute top-6 left-6" />

      {/* Polaroid-style image */}
      <div className="bg-white rounded-xl shadow-2xl p-4 w-80 md:w-96 relative hover:scale-105 transform transition duration-500">
        <div className="bg-white border-4 border-gray-200 rounded-lg overflow-hidden">
          <Image
            src={sunflowerImg}
            alt="Sunflower"
            className="object-cover w-full h-84"
          />
        </div>

        {/* Caption below */}
        <div className="mt-4 text-center">
          <h2 className="font-momo text-2xl text-[#f59e0b]">
            Your Favorite Flower MAHAL 🌻
          </h2>

          <p className="mt-2 font-edu text-gray-700 text-sm leading-relaxed">
            This sunflower reminds me of your bright and warm heart. 🌞 I hope
            it brings a smile to your day. I promise I’ll give you a real one
            soon! 💛
          </p>
        </div>
      </div>
    </div>
  );
}
