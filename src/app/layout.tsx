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
  preload: false,
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
  preload: false,
})

// const pixelFont = localFont({
//   src: "",
// });

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
