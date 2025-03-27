import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
//import localFont from "next/font/local";
import "./globals.css";
import SiteNav from "./components/SiteNav/SiteNav";
import SiteFooter from "./components/SiteFooter/SiteFooter";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
})

// const pixelFont = localFont({
//   src: "",
// });

export const metadata: Metadata = {
  title: "Hans Durchholz's Website",
  description: "Hans Durchholz's Personal Website, with a bio, portfolio, and contact page.",
  generator: "hansdurchholz.com",
  applicationName: "hansdurchholz.com",
  referrer: "origin-when-cross-origin",
  keywords: ["Hans", "Durchholz", "Software", "Developer", "Implementation", "Consultant", "React", "Next.js", "Tailwind", "TypeScript", "Python", "C++", "Java", "JavaScript"],
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
    description: "Hans Durchholz's Personal Website, with a bio, portfolio, and contact page.",
    url: "https://hansdurchholz.com",
    siteName: "hansdurchholz.com",
    images: [
      {
        url: "https://hansdurchholz.com/Frog.gif",
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
        url: "https://hansdurchholz.com/Worm_Foreground.png",
        width: 128,
        height: 128,
      },
      {
        url: "https://hansdurchholz.com/flower.png",
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
        className={`${banter.className} ${geistMono.variable} antialiased`}
      >
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
