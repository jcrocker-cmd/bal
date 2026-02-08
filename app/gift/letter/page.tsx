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
              9 years ago, we started a journey together, and since then, you
              became my home and my greatest blessing.
              <br />
              <br />
              Happy 9th Anniversary, Bal.
              <br />
              <br />
              Wala na’y paligoy-ligoy, Bal… gusto na gyud taka pakaslan. You are
              the one I want to spend my lifetime with, the one I want to wake
              up beside every morning, and the one I want to grow old with. I’m
              praying and working hard so that one day, I can finally give you
              the life and love that you truly deserve.
              <br />
              <br />
              I'll see you soon Langga...excited nako mo hug og kiss nimo,
              <br />
              <br />
              You are not just my girlfriend, Bal. You are my partner, my best
              friend, my answered prayer, and the love of my life.
              <br />
              <br />
              Sa tanang years nga niagi, sa kalipay ug sa mga challenges, you
              stayed, you loved me, and you never gave up on us. Thank you for
              your patience, your understanding
              <br />
              <br />
              My prayer to the Lord is that I will continue to grow and become
              the man you truly deserve, ug someday, mahimong good and loving
              husband para nimo. I promise to take care of your heart, tahuron
              tika always, supportahan ang imong dreams, ug magpabilin sa imong
              side no matter what life brings.
              <br />
              <br />
              Nine years down, and forever to go. Excited pa kaayo ko sa atong
              future, sa more memories, more laughs, ug sa life nga ato pang
              buhaton together. I love you always, in all ways.
              <br />
              <br />
            </p>

            <p className="mt-2 font-momo text-right text-[#632ba7]">
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
