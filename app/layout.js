import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StarfieldCanvas, BackToTopButton } from "./components/Effects";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samyam Bhattarai's Portfolio",
  description: "A modern, elegant showcase of Samyam Bhattarai's work—highlighting projects, skills, and creative solutions in web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StarfieldCanvas starCount={500} planetCount={3} showPlanets={true} showEmojis={true} />
        <div className="relative z-10">
          {children}
        </div>
        <BackToTopButton />
      </body>
    </html>
  );
}
