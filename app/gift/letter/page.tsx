"use client";

import { useState, useRef } from "react";
import useGiftGuard from "@/hooks/useGiftGuard";
import BackButton from "@/components/BackButton";

export default function LetterPage() {
  useGiftGuard();

  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const openLetter = () => {
    if (open) return;

    setOpen(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(console.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5ecff] p-6">
      <BackButton className="absolute top-6 left-6" />
      {/* Audio */}
      <audio ref={audioRef} preload="auto" loop>
        <source src="/music/love.wav" type="audio/webm" />
        <source src="/music/love.mp3" type="audio/mpeg" />
      </audio>

      {/* CLICKABLE LETTER */}
      <button
        onClick={openLetter}
        className="w-[400px] flex flex-col items-center bg-transparent border-none p-0"
      >
        {/* Paper container */}
        <div
          className={`
            relative
            w-[400px]
            bg-[#fffaf0]
            rounded-md
            py-5
            shadow-xl
            transition-all
            duration-700
            overflow-hidden
            ${open ? "h-[550px]" : "h-[90px]"}
          `}
        >
          {/* Fold / top flap */}
          <div
            className={`
              absolute top-0 left-0 w-full h-[190px]
              bg-[#f8efd8]
              border-b
              origin-top
              transition-transform duration-700
              ${open ? "rotate-x-180" : ""}
            `}
            style={{ transformStyle: "preserve-3d" }}
          />

          {/* Letter content */}
          <div
            className={`
    p-6 pt-10
    h-full
    overflow-y-auto
    transition-opacity duration-500 delay-500
    ${open ? "opacity-100" : "opacity-0"}
  `}
          >
            <h2 className="font-momo text-2xl text-[#632ba7]">My Bal 💖</h2>

            <p className="font-edu text-gray-700 leading-relaxed text-left">
              I made this little world for you because you mean so much to me.
              Every click, every page, every detail… it’s all you. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Architecto officia,
              deleniti veritatis dicta impedit sunt nobis alias sapiente quo eum
              nisi quam modi labore culpa unde itaque aliquam laborum? Illum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              suscipit? Labore minus quisquam doloribus, in hic fugiat mollitia
              explicabo consequatur est reiciendis distinctio harum animi quasi.
              Tempora, illo! Corrupti, soluta. I made this little world for you
              because you mean so much to me. Every click, every page, every
              detail… it’s all you. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Architecto officia, deleniti veritatis dicta
              impedit sunt nobis alias sapiente quo eum nisi quam modi labore
              culpa unde itaque aliquam laborum? Illum! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Porro, suscipit? Labore minus
              quisquam doloribus, in hic fugiat mollitia explicabo consequatur
              est reiciendis distinctio harum animi quasi. Tempora, illo!
              Corrupti, soluta.
              <br />
              <br />
              Thank you for being my safe place, my smile, and my heart.
            </p>

            <p className="mt-6 font-momo text-right text-[#632ba7]">
              — Always yours 💕
            </p>
          </div>
        </div>

        {!open && (
          <p className="mt-4 font-edu text-gray-500 animate-pulse">
            Tap to open 💌
          </p>
        )}
      </button>
    </div>
  );
}
