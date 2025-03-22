'use client';

import Image from "next/image";
import Link from "next/link";


export default function SiteFooter() {
    return(
        <footer className="fixed w-full bottom-0 items-center justify-center p-1">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto">
            <div className="flex flex-1" />
            <div className="flex flex-2 justify-center">
              <div className="text-center justify-items-center">Made with&nbsp;
                  <Link
                  className="mix-blend-difference text-blue-500 hover:text-gray-400 visited:text-purple-500"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer">
                      Next.js
                  </Link>
                  &nbsp;using&nbsp;
                  <Link
                  className="text-blue-500 hover:text-[#61DBFB] visited:text-purple-500"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                      Tailwind CSS
                  </Link>
                  <br />
                  Assets made with&nbsp;
                  <Link
                  className="text-blue-500 hover:text-cyan-100 visited:text-purple-500"
                  href="https://www.aseprite.org/"
                  target="_blank">
                      Aseprite
                  </Link>
                  &nbsp;by&nbsp;
                  <Link
                  className="text-blue-500 hover:text-green-500 visited:text-purple-500"
                  href="https://www.linkedin.com/in/hdurchholz/"
                  target="_blank">
                      Hans Durchholz :)
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