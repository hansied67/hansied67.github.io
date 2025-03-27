'use client';

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";


export default function SiteFooter() {
    return(
        <footer className="fixed w-full bottom-0 items-center justify-center backdrop-blur">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto">
            <div className="flex flex-1">
            <ThemeToggle className="flex flex-1"/>
            </div>
            <div className="flex flex-2 justify-center flex-col">
              <div className="text-center justify-items-center">Made with&nbsp;
                <Link
                className="text-yellow-500 hover:text-gray-400 visited:text-amber-500"
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer">
                    Next.js
                </Link>
                &nbsp;using&nbsp;
                <Link
                className="text-yellow-500 hover:text-[#61DBFB] visited:text-amber-500"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer">
                    Tailwind CSS
                </Link>
              </div>
              <div className="text-center justify-items-center">Assets made with&nbsp;
                <Link
                className="text-yellow-500 hover:text-cyan-100 visited:text-amber-500"
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
            <div className="flex flex-1 justify-end">
                <Image
                aria-hidden
                src="/worm_foreground.png"
                alt="Worm 3"
                width={64}
                height={64}
                />
            </div>
          </div>
        </footer>
    )
}