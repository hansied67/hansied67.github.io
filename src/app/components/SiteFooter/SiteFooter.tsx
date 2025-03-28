'use client';

import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import TextToggle from "../TextToggle/TextToggle";


export default function SiteFooter() {
    return(
        <footer className="md:fixed w-full bottom-0 items-stretch backdrop-blur">
          <div className="max-w-screen-xl flex mx-auto">
            <ThemeToggle className="flex flex-2"/>
            <div className="flex flex-6 justify-center flex-col text-xs md:text-base">
              <div className="text-center justify-items-center">Made with&nbsp;
                <Link
                className="text-yellow-500 hover:text-green-500 visited:text-amber-500"
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer">
                    Next.js
                </Link>
                &nbsp;using&nbsp;
                <Link
                className="text-yellow-500 hover:text-green-500 visited:text-amber-500"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer">
                    Tailwind CSS.
                </Link>
                &nbsp;Assets made with&nbsp;
                <Link
                className="text-yellow-500 hover:text-green-500 visited:text-amber-500"
                href="https://www.aseprite.org/"
                target="_blank">
                    Aseprite
                </Link>
                &nbsp;by&nbsp;
                <Link
                className="text-yellow-500 hover:text-green-500 visited:text-amber-500"
                href="https://bsky.app/profile/grunchyhands.bsky.social"
                target="_blank">
                    Me :)
                </Link>
              </div>
              <div className="text-center justify-items-center">
                <Link
                className="text-yellow-500 hover:text-green-500 visited:text-amber-500"
                href="https://chevyray.itch.io/pixel-font-banter"
                target="_blank">
                    Banter
                </Link>
                &nbsp;Font made by&nbsp;
                <Link
                className="text-yellow-500 hover:text-green-500 visited:text-amber-500"
                href="https://chevyray.dev/"
                target="_blank">
                    Chevy Ray
                </Link>
                &nbsp;|&nbsp;
                <Link
                className="text-yellow-500 hover:text-green-500 visited:text-amber-500"
                href="https://raw.githubusercontent.com/ChevyRay/pixel_font_megapack_license/main/LICENSE.txt"
                target="_blank">
                    [LICENSE]
                </Link>
              </div>
            </div>
            <TextToggle className="flex flex-2 justify-end"/>
          </div>
        </footer>
    )
}