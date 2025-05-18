import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageHoverSwap from "./components/ImageHoverSwap/ImageHoverSwap";


export const metadata: Metadata = {
  metadataBase: new URL("https://hansdurchholz.com"),
  title: "Hans Durchholz's Website",
  description: "Hans Durchholz is a full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience. Check out my portfolio!",
  generator: "hansdurchholz.com",
  applicationName: "hansdurchholz.com",
  referrer: "strict-origin-when-cross-origin",
  keywords: ["Hans Durchholz", "hansdurchholz.com", "Heidi", "Frog", "Site", "St. Louis, MO", "Missouri", "Programmer", "Software", "Developer", "Consultant", "Computer Science", "App Development", "Pixel Art", "React", "Next.js", "Tailwind", "TypeScript", "Python", "C++", "Java", "Javascript", "Frontend", "Backend", "SQL", "UX", "Frog", "Worm String", "Portfolio"],
  creator: "Hans Durchholz",
  publisher: "Hans Durchholz",
  alternates: {
    canonical: "./"
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: "Hans Durchholz's Website",
    description: "Hans Durchholz is full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience. Check out my portfolio!",
    url: "https://hansdurchholz.com",
    siteName: "hansdurchholz.com",
    images: [
      {
        url: "https://hansdurchholz.com/HomeSC.gif",
        alt: "hansdurchholz.com Home Page Screenshot",
      },
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hans Durchholz's Website",
    description: "Hans Durchholz is a full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience. Check out my portfolio!",
    siteId: "1297850698772750336",
    creatorId: "1297850698772750336",
    images: [
      {
        url: "https://hansdurchholz.com/HomeSC.gif",
        alt: "hansdurchholz.com Home Page Screenshot",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-0 gap-16 sm:p-20 sm:pb-0">
      <main id="main" className="flex flex-col gap-[32px] row-start-2 items-center scroll-mt-[92px] md:scroll-mt-[76px]">
        <div className="flex flex-col items-center rounded-xl">
          <h1 className="sr-only">Hans Durchholz</h1>
          <h2 className="text-lg md:text-5xl font-bold">
            Hi! Wanna see a frog?
          </h2>
          <div className="grid grid-cols-1 justify-items-center">
            <Link
            className="hover:bg-(--color-background)/50 rounded-2xl"
            href="/resume"
            target="_blank">
              <div>
                <Image
                src="/Frog.gif"
                title="64x64 frog pixel art gif made by Hans in Aseprite"
                alt="Frog pixel art animation"
                width={256}
                height={256}
                unoptimized
                priority
                />
              </div>
              <div className="text-xs text-[var(--foreground)]/80 -translate-y-[22px] text-center">
                Click the frog for Hans&apos;s résumé!
              </div>
            </Link>
          </div>
          <div className="text-lg">
            <h2>Thanks for checking out my site!</h2>
            <p>I&apos;m Hans Durchholz, a full-stack software developer/consultant in Missouri with a Bachelor&apos;s degree in Computer Science. I have professional experience building and maintaining back-ends in customer-facing agile roles for fortune 500 companies.</p>
            <p>I <b>LOVE</b> the connectivity provided by the internet - I think it&apos;s genuinely beautiful. In my free time, I enjoy making tools for gaming communities and collaborating with other developers/artists. I&apos;ve met so many cool people and made so many cool things, all thanks to the World Wide Web!</p>
            <p>
              Learn more in my&nbsp;
              <Link href="/bio">extended bio</Link>
              ,&nbsp;
              <Link href="/portfolio">portfolio</Link>
              , or&nbsp;
              <Link href="https://www.linkedin.com/in/hdurchholz/" target="_blank">contact me!</Link>
            </p>
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <Link
            className="hover:bg-(--color-background)/50 rounded-2xl"
            href="mailto:hans.durchholz@gmail.com"
            target="_blank">
              <ImageHoverSwap>
                <Image
                src="/worm_foreground.png"
                title="64x64 'worm on string' pixel art made by Hans in Aseprite"
                alt="Worm pixel art"
                width={256}
                height={256}
                unoptimized
                priority
                />
                <Image
                src="/worm_petpet.gif"
                title="64x64 'worm on string' pixel art made by Hans in Aseprite. Pet variant"
                alt="Worm pixel art pet gif"
                width={256}
                height={256}
                unoptimized
                loading="eager"
                />
              </ImageHoverSwap>
              <div className="text-xs text-[var(--foreground)]/80 -translate-y-[22px] text-center">
                Click the worm for Hans&apos;s email!
              </div>
            </Link>
          </div>
          <div role="region" aria-label="Heidi Dog Pics!!">
            <br role="none" />
            <h3 className="text-center">Please enjoy these lovely pictures of me and my dog Heidi!</h3>
            <div className="flex flex-col 2xl:flex-row divide-y-2 2xl:divide-x-2 2xl:divide-y-0 divide-solid divide-[var(--foreground)] border-2 rounded-sm shadow-2xl mt-4 items-center">
              <Image
              src="/Heidi1.jpg"
              title="Hans's dog Heidi, a German Shepherd Mix with fawn and brindle fur. She is fast asleep on Hans's bed."
              alt="Hans's dog Heidi sleeping"
              width={450}
              height={800}
              className="w-[450px] 2xl:h-[800px]"
              />
              <Image
              src="/HeidiHans.jpg"
              title="Hans with his adorable dog Heidi, a German Shepherd Mix with fawn and brindle fur."
              alt="Hans & his dog Heidi"
              width={450}
              height={800}
              className="w-[450px] 2xl:h-[800px]"
              />
              <Image
              src="/Heidi2.jpg"
              title="Hans's dog Heidi, a German Shepherd Mix with fawn and brindle fur. She is being pet while on her doggy bed, eyes glowing from the camera's flash."
              alt="Hans's dog Heidi being patted on the head"
              width={450}
              height={800}
              priority
              className="w-[450px] 2xl:h-[800px]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
