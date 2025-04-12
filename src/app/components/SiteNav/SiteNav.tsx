'use client';

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


// Custom Navbar component for easy refactoring
export default function SiteNav() {

    const pathname = usePathname();

    const  navItems = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Bio", href: "/bio" },
    ];

    return (
      <nav className="fixed w-full z-20 top-0 start-0 backdrop-blur bg-opacity-30">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex flex-1 items-center mx-auto">
            <Image
              className="mx-1 mt-1 md:mb-1 size-[48px] md:size-[64px]"
              src="/Bob%20Ross.png"
              title="32x32 pixel art of lakeside mountains made by Hans in Aseprite."
              alt="Lakeside mountains pixel art"
              width={64}
              height={64}
              priority
            />
            <div className="">
              <span className="mx-2 text-base md:text-2xl font-bold whitespace-nowrap">Hans Durchholz</span>
              <div className="mx-2 text-sm md:text-base whitespace-nowrap">Software Developer, Consultant</div>
            </div>
          </div>
          <div className="flex flex-2 justify-end">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-end"
              >
                {item.href != pathname ? <Link href={item.href} className="site-nav text-sm md:text-lg ml-6 p-2 hover:text-amber-500 hover:bg-(--color-background)/50 rounded-lg">{item.name}</Link> : <span className="site-nav text-sm md:text-lg font-bold ml-6 p-2 text-amber-500">{item.name}</span>}  
              </div>
            ))}
            <div className="flex justify-end">
            <Link
            href="https://www.linkedin.com/in/hdurchholz/"
            target="_blank"
            className="site-nav text-sm md:text-lg ml-6 p-2 hover:text-amber-500 hover:bg-(--color-background)/50 rounded-lg">
              Contact
            </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}