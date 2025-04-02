import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="flex flex-col items-center rounded-xl p-2">
          <h1 className="text-lg lg:text-5xl font-bold">
            Hi! Wanna see a frog?
          </h1>
          <div className="grid grid-cols-1 justify-items-center">
            <Link
            className="hover:bg-(--color-background)/50 rounded-2xl"
            type="application/pdf"
            href="/HansDurchholz-Resume.pdf"
            target="_blank">
              <Image
              className=""
              src="/Frog.gif"
              alt="64x64 frog pixel art gif made in Aseprite"
              width={256}
              height={256}
              unoptimized
              />
              <div className="text-xs text-[var(--foreground)]/80 -translate-y-[22px] text-center">
                Click the frog for Hans&apos;s résumé!
              </div>
            </Link>
          </div>
          <h2 className="text-lg max-w-5/6 md:max-w-2/3">
            Thanks for checking out my site!
            <br />
            I&apos;m a full-stack software developer/consultant who has professional experience building and maintaining back-ends in customer-facing agile roles for fortune 500 companies.
            <br />
            I <b>LOVE</b> the connectivity provided by the internet - I think it&apos;s genuinely beautiful. In my free time, I enjoy making tools for gaming communities and collaborating with other developers/artists. I&apos;ve met so many cool people and made so many cool things, all thanks to the World Wide Web!
            <br />
            Learn more in my
            <Link href="/bio">&nbsp;extended bio</Link>
            ,
            <Link href="/portfolio">&nbsp;portfolio</Link>
            , and
            <Link href="/contact">&nbsp;additional contact information</Link>
            &nbsp;pages!
          </h2>
          <div className="grid grid-cols-1 justify-items-center">
            <Link
            className="hover:bg-(--color-background)/50 rounded-2xl"
            href="mailto:hans.durchholz@gmail.com"
            target="_blank">
              <Image
              className=""
              src="/worm_foreground.png"
              alt="64x64 frog pixel art gif made in Aseprite"
              width={256}
              height={256}
              unoptimized
              />
              <div className="text-xs text-[var(--foreground)]/80 -translate-y-[22px] text-center">
                Click the worm for Hans&apos;s email!
              </div>
            </Link>
          </div>
          Please enjoy these lovely pictures of me and my dog Heidi!
          <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-solid divide-[var(--foreground)] border-2 rounded-sm shadow-2xl mt-4">
            <Image
            src="/Heidi1.jpg"
            alt="Hans's dog Heidi, fast asleep on a bed"
            width={400}
            height={400}
            />
            <Image
            src="/HeidiHans.jpg"
            alt="Hans with his adorable dog Heidi"
            width={400}
            height={400}
            />
            <Image
            src="/Heidi2.jpg"
            alt="Hans's dog Heidi being pet while on her doggy bed"
            width={400}
            height={400}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
