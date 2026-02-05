import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StarfieldCanvas, BackToTopButton } from "./effects/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://samyambhattarai.com.np'),
  title: "Samyam Bhattarai's Portfolio",
  description: "A modern, elegant showcase of Samyam Bhattarai's work—highlighting projects, skills, and creative solutions in web development and design.",
  keywords: ["Samyam Bhattarai", "Portfolio", "Web Developer", "Software Engineer", "React", "Next.js"],
  authors: [{ name: "Samyam Bhattarai" }],
  creator: "Samyam Bhattarai",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/SB.png', type: 'image/png' },
    ],
    apple: '/SB.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samyambhattarai.com.np',
    siteName: "Samyam Bhattarai's Portfolio",
    title: "Samyam Bhattarai's Portfolio",
    description: "A modern, elegant showcase of Samyam Bhattarai's work—highlighting projects, skills, and creative solutions in web development and design.",
    images: [
      {
        url: '/SB.png',
        width: 512,
        height: 512,
        alt: 'Samyam Bhattarai Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Samyam Bhattarai's Portfolio",
    description: "A modern, elegant showcase of Samyam Bhattarai's work—highlighting projects, skills, and creative solutions in web development and design.",
    images: ['/SB.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
