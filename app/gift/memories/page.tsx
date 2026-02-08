"use client";

import useGiftGuard from "@/hooks/useGiftGuard";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import BackButton from "@/components/BackButton";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const memories = [
  {
    src: "/memories/1.jpg",
    caption: "Our first smile",
    tilt: "-rotate-6",
  },
  {
    src: "/memories/2.jpg",
    caption: "Late night laughter",
    tilt: "rotate-4",
  },
  {
    src: "/memories/3.jpg",
    caption: "Just you and me",
    tilt: "-rotate-3",
  },
  {
    src: "/memories/4.jpg",
    caption: "Forever my favorite",
    tilt: "rotate-6",
  },
  {
    src: "/memories/5.jpg",
    caption: "Stolen moments",
    tilt: "-rotate-5",
  },
  {
    src: "/memories/6.jpeg",
    caption: "Always my home",
    tilt: "rotate-3",
  },
];

export default function MemoriesPage() {
  useGiftGuard();

  return (
    <div className="min-h-screen bg-[#f5ecff] p-6">
      <BackButton className="relative top-6 left-6 mb-16" />
      <h1 className="text-4xl font-momo text-center text-[#632ba7] mb-14">
        Our Memories 💕
      </h1>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
  gap-x-6
  gap-y-18
      max-w-5xl
    mx-auto
          justify-items-center
        "
      >
        {memories.map((m, i) => (
          <a
            key={i}
            href={m.src}
            data-sub-html={`<p class='font-edu text-lg'>${m.caption}</p>`}
            className="group"
          >
            {/* Polaroid */}
            <div
              className={`
                bg-white
                p-4
                pb-8
                w-[260px]
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
                alt={m.caption}
                className="w-full h-[240px] object-cover"
              />

              <p className="mt-4 text-center font-edu text-base text-gray-700">
                {m.caption}
              </p>
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
