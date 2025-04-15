'use client';

import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import TextToggle from "../TextToggle/TextToggle";


export default function SiteFooter() {
    return(
        <footer aria-label="Site Footer with Theme Toggles" className="fixed w-full bottom-0 items-stretch backdrop-blur">
          <div className="max-w-screen-xl flex mx-auto">
            <ThemeToggle className="flex flex-2 justify-end"/>
            <div role="complementary" aria-label="Site Info" className="flex flex-6 justify-center flex-col text-xs lg:text-base">
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
                . ©&nbsp;
                <Link
                href="https://github.com/hansied67/hansied67.github.io/blob/main/LICENSE"
                aria-label="Site Github License"
                target="_blank">
                  2025
                </Link>
                &nbsp;
                <Link
                href="https://bsky.app/profile/grunchyhands.bsky.social"
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
                &nbsp;
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