import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";


export default function Home() {
  return (
    <div className="light grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <ThemeToggle />
        <h1 className="text-5xl dark:text-violet-800">
          Wanna see a frog?
        </h1>
        <Image
        className=""
        src="/Frog.gif"
        alt="64x64 frog pixel art gif made in Aseprite"
        width={256}
        height={256}
        unoptimized
        />
      </main>
      <footer className="row-start-3 items-center justify-center">
        <div className="flex gap-[24px] flex-wrap justify-center">
          <Image
          aria-hidden
          src="/worm_foreground.png"
          alt="Worm 1"
          width={64}
          height={64}
            />
          <Image
          aria-hidden
          src="/flower.png"
          alt="flower"
          width={64}
          height={64}
          />
          <Image
          aria-hidden
          src="/worm_foreground.png"
          alt="Worm 3"
          width={64}
          height={64}
          />
        </div>
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
    </div>
  );
}
