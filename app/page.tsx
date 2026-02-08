"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomButton from "../components/Button";
import GIF from "../public/home-GIF.gif";
import Image from "next/image";

const texts = ["My Love", "Bal", "Langga", "Baby"];

export default function Home() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setFade(false);

      setTimeout(() => {
        // change text
        setIndex((prev) => (prev + 1) % texts.length);
        // fade in
        setFade(true);
      }, 600);
    }, 2100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background bg-white h-screen flex flex-col items-center justify-center text-center gap-6">
      <Image src={GIF} alt="Love" className="w-28 h-28 mb-2" />
      <h1 className="text-4xl font-momo text-gray-500">Hello,</h1>
      <h1
        className={`
          text-6xl
          font-momo
          transition-opacity
          text-[#cba6f8]
          duration-600
          ${fade ? "opacity-100" : "opacity-0"}
        `}
      >
        {texts[index]}
      </h1>
      <h1 className="text-xl font-edu text-gray-500 mt-10">
        Do you want to open your gift?
      </h1>

      <div className="flex gap-6">
        <CustomButton
          text="Yes 💖"
          href="/unlock"
          className="bg-[#b98dee] text-white"
        />

        <CustomButton
          text="No 🙈"
          href="/promise"
          className="bg-gray-400 text-white"
        />
      </div>
    </div>
  );
}
