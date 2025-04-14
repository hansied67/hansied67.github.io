'use client';

import Image from "next/image";

export default function Bio() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-0 gap-16 sm:p-20 sm:pb-0">
        <main id="main" className="flex flex-col gap-[32px] row-start-2 scroll-mt-[92px] md:scroll-mt-[76px]">
          <div className="relative z-0 select-all w-[465px]">
            <Image
            src="/signature-bg.png"
            title="64x64 'worm on string' pixel art made by Hans in Aseprite"
            alt="Worm pixel art"
            // width={465}
            // height={64}
            fill={true}
            priority
            />
            <div className="flex relative flex-row z-1">
              <Image
              src="/worm_foreground.png"
              title="64x64 'worm on string' pixel art made by Hans in Aseprite"
              alt="Worm pixel art"
              width={64}
              height={64}
              unoptimized
              priority
              className="mr-2"
              />
              <div className="flex flex-col my-auto text-amber-500">
                <span>
                  Hans Durchholz
                </span>
                <span>Software Developer</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }