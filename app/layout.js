import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StarfieldCanvas, BackToTopButton } from "./effects/Background";
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
  icons: {
    icon: '/SB.png',
    shortcut: '/SB.png',
    apple: '/SB.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/SB.png" />
        <link rel="shortcut icon" href="/SB.png" />
        <link rel="apple-touch-icon" href="/SB.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StarfieldCanvas starCount={300} planetCount={2} showPlanets={true} showEmojis={true} />
        <div className="relative z-10">
          {children}
        </div>
        <BackToTopButton delay={3000} />
      </body>
    </html>
  );
}
