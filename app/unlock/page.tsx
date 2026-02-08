"use client";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { InputOtp } from "primereact/inputotp";
import { Button } from "primereact/button";

const SECRET_CODE = "0209";

export default function Unlock() {
  const [code, setCode] = useState<string>(""); // always string
  const router = useRouter();

  // Redirect if gift already unlocked
  useEffect(() => {
    const unlocked = localStorage.getItem("giftUnlocked");
    if (unlocked === "true") {
      router.push("/gift");
    }
  }, [router]);

  const checkCode = () => {
    if (code === SECRET_CODE) {
      localStorage.setItem("giftUnlocked", "true");
      router.push("/gift");
    } else {
      alert("Wrong code 😢 Try again");
      setCode(""); // clear input
    }
  };

  // ✅ Form submit handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // prevent page reload
    checkCode();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <h2 className="text-xl font-edu animate-pulse">
        Enter the 4-digit code 💌
      </h2>

      {/* Wrap in form so Enter works */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <InputOtp
          value={code}
          onChange={(e) => setCode(String(e.value ?? ""))}
          length={4}
          integerOnly
          className="font-edu text-center"
        />

        <Button
          type="submit" // submit form on Enter
          label="Unlock 💖"
          className="bg-[#b98dee] border-none rounded-xl px-6 py-3 mt-2"
        />
      </form>
    </div>
  );
}
