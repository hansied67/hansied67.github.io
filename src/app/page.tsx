import React from "react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="light grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-5xl bold font-bold">
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
      </main>
    </div>
  );
}
