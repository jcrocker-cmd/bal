import type { Metadata } from "next";
import {
  Advent_Pro,
  Indie_Flower,
  Momo_Signature,
  Edu_SA_Hand,
} from "next/font/google";
import "./globals.css";

// Load Advent Pro
const adventPro = Advent_Pro({
  variable: "--font-advent-pro",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Load Indie Flower
const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  subsets: ["latin"],
  weight: "400",
});

const momoSignature = Momo_Signature({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-momo",
});

const eduSAHand = Edu_SA_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-edu-s-a-hand",
});

export const metadata: Metadata = {
  title: "My Romantic Gift",
  description: "A surprise website for my GF 💖",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${adventPro.variable} ${indieFlower.variable} ${momoSignature.variable} ${eduSAHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
