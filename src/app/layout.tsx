import type { Metadata } from "next";
import { Geist,  } from "next/font/google";
import localFont from "next/font/local";
//import localFont from "next/font/local";
import "./globals.css";
import SiteNav from "./components/SiteNav/SiteNav";
import SiteFooter from "./components/SiteFooter/SiteFooter";

export const dynamic = "force-static";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

/* Banter & Banter Bold fonts by Chevy Ray: https://chevyray.itch.io/pixel-font-banter */
/* License: https://raw.githubusercontent.com/ChevyRay/pixel_font_megapack_license/main/LICENSE.txt */
const banter = localFont({
  src: [
    {
      path: "../../public/fonts/banter.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/banter_bold.ttf",
      style: "bold",
    },
  ],
  variable: "--font-banter",
  display: "swap",
})

// const pixelFont = localFont({
//   src: "",
// });

export const metadata: Metadata = {
  title: "Hans Durchholz's Website",
  description: "Full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience. Check out my portfolio!",
  generator: "hansdurchholz.com",
  applicationName: "hansdurchholz.com",
  referrer: "origin-when-cross-origin",
  keywords: ["Hans Durchholz", "Durchholz", "St. Louis, MO", "St. Louis", "MO", "Missouri", "Software Developer", "Implementation Consultant", "Consultant", "Computer Science", "Programming", "App Development", "Pixel Art", "React", "Next.js", "Tailwind", "TypeScript", "Python", "C++", "Java", "JavaScript"],
  creator: "Hans Durchholz",
  publisher: "Hans Durchholz",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Hans Durchholz's Website",
    description: "Full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience. Check out my portfolio!",
    url: "https://hansdurchholz.com",
    siteName: "hansdurchholz.com",
    images: [
      {
        url: "https://hansdurchholz.com/Frog.gif",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/Worm_Foreground.png",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/Bob Ross.png",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/Sun.png",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/Moon.png",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/flower.png",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/HeidiHans.jpg",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/GlassBridgeLoginDialogue.png",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/DiceRoller1.gif",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/MTG_SLO.png",
        width: 128,
        height: 128,
      },
    ],
    locale: "en_US",
    type: "website"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${banter.className} ${geistSans.variable} antialiased`}
      >
        <div id="main-container">
          <SiteNav />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
