"use client";

import { useEffect, useRef } from "react";
import useGiftGuard from "@/hooks/useGiftGuard";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import BackButton from "@/components/BackButton";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const memories = [
  { src: "/memories/1.JPG", tilt: "-rotate-6" },
  { src: "/memories/2.jpg", tilt: "rotate-4" },
  { src: "/memories/3.jpg", tilt: "-rotate-3" },
  { src: "/memories/4.jpg", tilt: "rotate-6" },
  { src: "/memories/5.jpg", tilt: "-rotate-5" },
  { src: "/memories/6.jpeg", tilt: "rotate-3" },

  { src: "/memories/7.png", tilt: "-rotate-6" },
  { src: "/memories/8.JPG", tilt: "rotate-4" },
  { src: "/memories/9.jpg", tilt: "-rotate-3" },
  { src: "/memories/10.jpg", tilt: "rotate-6" },
  { src: "/memories/11.jpg", tilt: "-rotate-5" },
  { src: "/memories/12.jpg", tilt: "rotate-3" },

  { src: "/memories/13.jpg", tilt: "-rotate-6" },
  { src: "/memories/14.jpg", tilt: "rotate-4" },
  { src: "/memories/15.jpg", tilt: "-rotate-3" },
  { src: "/memories/16.jpg", tilt: "rotate-6" },
  { src: "/memories/17.jpg", tilt: "-rotate-5" },
  { src: "/memories/18.jpg", tilt: "rotate-3" },

  { src: "/memories/19.jpg", tilt: "-rotate-6" },
  { src: "/memories/20.jpg", tilt: "rotate-4" },
  { src: "/memories/21.JPG", tilt: "-rotate-3" },
  { src: "/memories/22.jpg", tilt: "rotate-6" },
  { src: "/memories/23.JPG", tilt: "-rotate-5" },
  { src: "/memories/24.JPG", tilt: "rotate-3" },

  { src: "/memories/25.JPG", tilt: "-rotate-6" },
  { src: "/memories/26.jpg", tilt: "rotate-4" },
  { src: "/memories/27.JPG", tilt: "-rotate-3" },
  { src: "/memories/28.JPG", tilt: "rotate-6" },
  { src: "/memories/29.jpeg", tilt: "-rotate-5" },
  { src: "/memories/30.jpeg", tilt: "rotate-3" },

  { src: "/memories/31.jpeg", tilt: "-rotate-6" },
  { src: "/memories/32.jpg", tilt: "rotate-4" },
  { src: "/memories/33.jpg", tilt: "-rotate-3" },
  { src: "/memories/34.jpeg", tilt: "rotate-6" },
  { src: "/memories/35.jpg", tilt: "-rotate-5" },
  { src: "/memories/36.jpg", tilt: "rotate-3" },

  { src: "/memories/37.jpg", tilt: "-rotate-6" },
  { src: "/memories/38.jpg", tilt: "rotate-4" },
  { src: "/memories/39.jpg", tilt: "-rotate-3" },
  { src: "/memories/40.jpg", tilt: "-rotate-6" },
  { src: "/memories/41.jpg", tilt: "rotate-4" },
  { src: "/memories/42.jpg", tilt: "-rotate-3" },

  { src: "/memories/43.jpg", tilt: "-rotate-6" },
  { src: "/memories/44.jpg", tilt: "rotate-4" },
  { src: "/memories/45.jpeg", tilt: "-rotate-3" },
  { src: "/memories/46.jpg", tilt: "-rotate-6" },
  { src: "/memories/47.webp", tilt: "rotate-4" },
  { src: "/memories/48.webp", tilt: "-rotate-3" },

  { src: "/memories/49.jpg", tilt: "-rotate-6" },
  { src: "/memories/50.webp", tilt: "rotate-4" },
  { src: "/memories/51.jpg", tilt: "-rotate-3" },
  { src: "/memories/52.webp", tilt: "-rotate-6" },
  { src: "/memories/53.webp", tilt: "rotate-4" },
  { src: "/memories/54.webp", tilt: "-rotate-3" },

  { src: "/memories/55.webp", tilt: "-rotate-6" },
  { src: "/memories/56.jpg", tilt: "rotate-4" },
];

export default function MemoriesPage() {
  useGiftGuard();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    const playAudio = () => {
      audio.play().catch(() => {}); // try to play
      // remove all listeners once played
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("pointerdown", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };

    // first user interaction
    window.addEventListener("scroll", playAudio, { passive: true });
    window.addEventListener("pointerdown", playAudio);
    window.addEventListener("touchstart", playAudio);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("pointerdown", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5ecff] p-6">
      {/* Audio */}
      <audio ref={audioRef} preload="auto" loop>
        <source src="/music/date2.mp3" type="audio/mpeg" />
      </audio>

      <BackButton className="relative top-6 left-6 mb-16" />

      <div className=" text-center text-[#632ba7] mb-14">
        <h1 className="text-4xl font-momo">Our Memories 💕</h1>
        <p className="animate-pulse font-edu mt-2">
          Little moments, forever treasured.
        </p>
      </div>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-6
          gap-y-14
          max-w-5xl
          mx-auto
          justify-items-center
        "
      >
        {memories.map((m, i) => (
          <a key={i} href={m.src} className="group">
            {/* Polaroid */}
            <div
              className={`
                bg-white
                p-4
                w-[290px]
                shadow-2xl
                rounded-sm
                transition-all
                duration-500
                ${m.tilt}
                group-hover:rotate-0
                group-hover:-translate-y-3
                group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]
              `}
            >
              <img
                src={m.src}
                alt="memory"
                className="w-full h-[260px] object-cover"
              />
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
