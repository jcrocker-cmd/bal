"use client";

import useGiftGuard from "@/hooks/useGiftGuard";

export default function AbsPage() {
  useGiftGuard();

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4">ABS Photos 💪🔥</h2>

      <div className="grid grid-cols-2 gap-4">
        <img src="/abs1.jpg" className="rounded-xl" />
        <img src="/abs2.jpg" className="rounded-xl" />
      </div>
    </div>
  );
}
