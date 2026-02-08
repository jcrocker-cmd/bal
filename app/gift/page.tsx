// "use client";

// import useGiftGuard from "@/hooks/useGiftGuard";
// import { useRouter } from "next/navigation";

// export default function Gift() {
//   useGiftGuard();
//   const router = useRouter();

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h1 className="text-2xl text-center mb-6 font-momo text-[#632ba7]">
//         These are for you, my love
//       </h1>

//       <div className="grid grid-cols-2 gap-6">
//         <Tab icon="💪" path="/gift/memories" />
//         <Tab icon="🌸" path="/gift/flowers" />
//         <Tab icon="🎵" path="/gift/reasons" />
//         <Tab icon="✉️" path="/gift/letter" />
//       </div>
//     </div>
//   );
// }

// function Tab({ icon, path }: { icon: string; path: string }) {
//   const router = useRouter();

//   return (
//     <button
//       onClick={() => router.push(path)}
//       className="border-2 border-[#632ba7] rounded-xl p-6 text-center hover:bg-[#cba6f8] transition w-full"
//     >
//       <div className="text-4xl">{icon}</div>
//     </button>
//   );
// }

"use client";

import useGiftGuard from "@/hooks/useGiftGuard";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import flower from "../../public/tab/flower.png";
import letter from "../../public/tab/letter.png";
import memories from "../../public/tab/memories.png";
import reason from "../../public/tab/reason.png";

export default function Gift() {
  useGiftGuard();
  const router = useRouter();

  // Replace these with your actual images or GIFs
  const tabs = [
    { src: memories, path: "/gift/memories" },
    { src: flower, path: "/gift/flowers" },
    { src: reason, path: "/gift/reasons" },
    { src: letter, path: "/gift/letter" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#f5ecff]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 font-momo text-[#632ba7]">
        These are for you, my love 💖
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {tabs.map((tab, idx) => (
          <Tab key={idx} src={tab.src} path={tab.path} />
        ))}
      </div>
    </div>
  );
}

function Tab({ src, path }: { src: string | StaticImageData; path: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(path)}
      className={`
        relative
        w-full
        h-40
        sm:h-44
        md:h-48
        rounded-xl
        overflow-hidden
        shadow-lg
        transform
        transition
        duration-500
        hover:scale-105
        hover:shadow-2xl
        motion-safe:animate-float
        cursor-pointer
        border-5 border-[#cdb7e7]
      `}
    >
      <Image
        src={src}
        alt="Gift Tab"
        fill
        className="object-cover object-center"
      />
      {/* Optional overlay for soft gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-50/0 to-transparent"></div> */}
      {/* <div className="absolute bg-white"></div> */}
    </button>
  );
}
