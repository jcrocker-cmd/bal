"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useGiftGuard() {
  const router = useRouter();

  useEffect(() => {
    const unlocked = localStorage.getItem("giftUnlocked") === "true";
    if (!unlocked) {
      router.replace("/locked");
    }
  }, [router]);
}
