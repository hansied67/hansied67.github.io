'use client';

import Link from "next/link";


export default function SiteFooter() {
    return(
        <footer className="fixed w-full bottom-0 border-t border-gray-200 dark:border-gray-600 items-center justify-center p-1">
          <div className="text-center">Made with&nbsp;
          <Link
          className="text-blue-600 hover:text-gray-400 visited:text-purple-600"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer">
              Next.js
          </Link>
          &nbsp;using&nbsp;
          <Link
          className="text-blue-600 hover:text-[#61DBFB] visited:text-purple-600"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer">
              Tailwind CSS
          </Link>
          <br />
          Assets made with&nbsp;
          <Link
          className="text-blue-500 hover:text-cyan-100 visited:text-purple-600"
          href="https://www.aseprite.org/"
          target="_blank">
              Aseprite
          </Link>
          &nbsp;by&nbsp;
          <Link
          className="text-blue-600 hover:text-green-500 visited:text-purple-600"
          href="https://www.linkedin.com/in/hdurchholz/"
          target="_blank">
              Hans Durchholz :)
          </Link>
          </div>
        </footer>
    )
}