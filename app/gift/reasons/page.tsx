"use client";
import { useState, useEffect, useRef } from "react";
import useGiftGuard from "@/hooks/useGiftGuard";
import BackButton from "@/components/BackButton";

const reasons: string[] = [
  "Your natural look",
  "Your Smile",
  "The way you talk",
  "Your voice",
  "You make me laugh endlessly",
  "Your hugs feel like home",
  "Your kindness",
  "The way you hold my hand",
  "You support me no matter what",
  "When you kiss me softly",
  "You make ordinary moments special",
  "How you care about others",
  "You have the sweetest heart",
  "how you care about me",
  "You believe in me",
  "The softness of your skin",
  "How you open up to me",
  "The way you think deeply",
  "You’re always there for me",
  "How you make my bad days better",
  "How you make my bad days better",
  "You understands me",
  "How your eyes shine when you’re happy",
  "For choosing me",
  "your loyalty",
  "Your soft heart",
  "How you forgive me",
  "How you make me feel safe",
  "Because loving you feels like home",
  "How comfortable everything feels with you",
  "How you make me feel loved",
  "Your cute laugh",
  "The way you make time for me",
  "The way you stay even when things are hard",
  "How you make my world brighter",
  "Your genuine personality",
  "Your imperfections that make you perfect to me",
  "Your random stories",
  "How you give without asking for anything in return",
  "Your patience with me",
  "The way you say my name",
  "Your cute little expressions",
  "The way you get shy sometimes",
  "The way you include me in your plans",
  "The happiness you bring into my life",
  "How you complete my day",
  "How you complete me",
  "The way you make me feel lucky",
  "The way you accept me at my worst",
  "You always think about us, not just yourself",
  "You make me feel chosen every day",
  "You bring out a softer side of me",
  "Life feels lighter when you’re around",
  "I smile more because of you",
  "You bring calm to my chaos",
  "You make ordinary conversations feel special",
  "You make distance feel shorter",
  "I feel stronger with you beside me",
  "You give my life more color",
  "You bring balance into my life",
  "Your laughter brightens my darkest days",
  "You are genuinely kind to everyone",
  "Your touch is comforting",
  "Your smile can make me forget my worries",
  "You make me feel valued",
  "Your sense of humor is perfect",
  "You have a heart full of love",
  "Your body",
  "You inspire me to be a better person",
  "You are stunning in every way",
  "You are exquisitely beautiful",
  "Your eyes reveal your soul",
  "Your hugs melt all my stress away",
  "Your authenticity is rare",
  "Your heart is pure",
  "Your gentle nature comforts me",
  "You make me feel proud to be yours",

  "I love that you are mine",
  "For who you are inside and out",
  "With you, I found a kind of peace I never knew I needed",
  "Through every change, you remain my constant",
  "You make me believe that love can be real and lasting",
  "You make even my hardest days feel easier to carry",
  "Simply because you are you",
  "I love you because there’s no reason not to",
  "And even after a hundred reasons, the truth is — I just love you",
];

export default function ReasonsPage() {
  useGiftGuard(); // Protect page

  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    const playAudio = () => {
      audio.play().catch(() => {});
      document.removeEventListener("pointerdown", playAudio);
    };

    // pointerdown works for mouse + touch
    document.addEventListener("pointerdown", playAudio);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("pointerdown", playAudio);
    };
  }, []);

  const [visibleCount, setVisibleCount] = useState(10); // show 10 at first

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, reasons.length));
  };

  return (
    <div className="min-h-screen bg-[#f5ecff] p-6 flex flex-col items-center">
      <audio ref={audioRef} preload="auto" loop>
        <source src="/music/date2.mp3" type="audio/mpeg" />
      </audio>
      <h1 className="text-3xl font-momo text-[#632ba7] mb-6 text-center">
        100 Reasons Why I Love You 💖
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {reasons.slice(0, visibleCount).map((reason, idx) => (
          <div
            key={idx}
            className="bg-[#fffaf0] shadow-lg rounded-lg p-4 text-gray-700 font-edu text-sm hover:scale-105 transform transition"
          >
            <span className="font-momo text-[#632ba7] mr-1">#{idx + 1} –</span>{" "}
            {reason}
          </div>
        ))}
      </div>

      {visibleCount < reasons.length && (
        <button
          onClick={loadMore}
          className="mt-6 px-6 py-3 bg-[#b98dee] text-white font-edu rounded-full hover:bg-[#cba6f8] transition"
        >
          Show More 💖
        </button>
      )}
      <BackButton className="mt-4" />
    </div>
  );
}
