'use client';

import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import TextToggle from "../TextToggle/TextToggle";
// import { useState, useEffect } from "react";

export default function SiteFooter() {
    // gave up on this, I preferred the re-styled footer.
    // android devices with bottom bars like Pixel 7s are too much of a pain
    //
    // const [isScrollDown, setScrollDown] = useState(false);
    // const [isScrollDelay, setScrollDelay] = useState(false);
    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const currentScrollY = window.scrollY

    //     if (currentScrollY > scrollY) {
    //       setScrollDown(true);
    //       setTimeout(() => {
    //         setScrollDelay(true);
    //       }, 250)
    //     }
    //     else {
    //       setScrollDown(false);
    //       setScrollDelay(false);
    //     }
    //     setScrollY(currentScrollY);
    //   }

    //   if (typeof window !== 'undefined') {
    //     window.addEventListener('scroll', handleScroll);

    //     // cleanup
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }
    // }, [scrollY]);
  

    return(
        <footer aria-label="Site Footer with Theme Toggles" className="fixed print:relative w-full bottom-0 items-stretch backdrop-blur">
          <div className="max-w-screen-xl flex mx-auto">
            <ThemeToggle className="flex flex-2 justify-end"/>
            <div role="region" aria-label="Site Info" className="flex flex-13 justify-center flex-col text-xs md:text-base">
              <p className="text-center justify-items-center">Coded with&nbsp;
                <Link
                href="https://nextjs.org/"
                target="_blank">
                    Next.js
                </Link>
                ,&nbsp;
                <Link
                href="https://tailwindcss.com/"
                target="_blank">
                    Tailwind CSS
                </Link>
                &nbsp;and&nbsp;
                <Link
                href="https://www.typescriptlang.org/"
                target="_blank">
                  TypeScript
                </Link>
                . Assets made with&nbsp;
                <Link
                href="https://www.aseprite.org/"
                target="_blank">
                  Aseprite
                </Link>
                .&nbsp;
                <Link
                href="https://github.com/hansied67/hansied67.github.io/blob/main/LICENSE"
                aria-label="Site Github License"
                target="_blank">
                  ©&nbsp;2025
                </Link>
                &nbsp;
                <Link
                href="https://bsky.app/profile/hansdurchholz.com"
                target="_blank">
                  Hans Durchholz
                </Link>
              </p>
              <p className="text-center justify-items-center">
                <Link
                href="https://chevyray.itch.io/pixel-font-banter"
                target="_blank">
                    Banter
                </Link>
                &nbsp;Font made by&nbsp;
                <Link
                href="https://chevyray.dev/"
                target="_blank">
                    Chevy Ray
                </Link>
                &nbsp;|&nbsp;
                <Link
                href="https://raw.githubusercontent.com/ChevyRay/pixel_font_megapack_license/main/LICENSE.txt"
                target="_blank">
                    [LICENSE]
                </Link>
              </p>
            </div>
            <TextToggle className="flex flex-2"/>
          </div>
        </footer>
    )
}