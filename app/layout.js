import { Geist } from "next/font/google";
import "./globals.css";
import { StarfieldCanvas, BackToTopButton } from "./effects/Background";
import { SITE_DESCRIPTION } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_TITLE = "Samyam Bhattarai";

export const metadata = {
  metadataBase: new URL('https://samyambhattarai.com.np'),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ["Samyam Bhattarai", "Portfolio", "Web Developer", "Software Engineer", "React", "Next.js"],
  authors: [{ name: SITE_TITLE }],
  creator: SITE_TITLE,
  icons: {
    icon: '/icon.png',
    apple: '/SB.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samyambhattarai.com.np',
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/SB.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <StarfieldCanvas starCount={300} planetCount={2} showPlanets showEmojis />
        <div className="relative z-10">
          {children}
        </div>
        <BackToTopButton delay={3000} />
      </body>
    </html>
  );
}
