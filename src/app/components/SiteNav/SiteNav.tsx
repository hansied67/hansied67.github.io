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
        { name: "Bio", href: "/bio" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
      <nav className="fixed w-full z-20 top-0 start-0 backdrop-blur bg-opacity-30">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex flex-1 items-center mx-auto">
            <Image
              className="mx-1 mt-1 md:mb-1 size-[48px] lg:size-[64px]"
              src="/Bob Ross.png"
              alt="32x32 pixel art of lakeside mountains made by Hans in Aseprite."
              width={64}
              height={64}
              priority
            />
            <div className="">
              <span className="mx-2 text-base lg:text-2xl font-bold whitespace-nowrap">Hans Durchholz</span>
              <div className="mx-2 text-sm lg:text-base whitespace-nowrap">Software Developer, Consultant</div>
            </div>
          </div>
          <div className="flex flex-2 justify-end">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-end"
              >
                {item.href != pathname ? <Link href={item.href} className="site-nav text-sm lg:text-lg ml-6 p-2 hover:text-amber-500 hover:bg-(--color-background)/50 rounded-lg">{item.name}</Link> : <span className="site-nav text-sm lg:text-lg font-bold ml-6 p-2 text-amber-500">{item.name}</span>}  
              </div>
            ))}
          </div>
        </div>
      </nav>
    )
}