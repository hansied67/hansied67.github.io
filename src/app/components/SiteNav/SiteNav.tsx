'use client';

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";


// Custom Navbar component for easy refactoring
export default function SiteNav() {
    // const [page, setPage] = useState("");

    const  navItems = [
        { name: "Home", href: "/" },
        { name: "Bio", href: "/bio" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
      <nav className="fixed w-full z-20 top-0 start-0 backdrop-blur bg-opacity-30">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex flex-1 items-center">
            <Image
              className="mx-2"
              src="/Bob Ross.png"
              alt="32x32 pixel art of lakeside mountains"
              width={64}
              height={64}
              priority
            />
            <div className="">
              <span className="mx-2 self-center text-2xl font-bold whitespace-nowrap">Hans Durchholz</span>
              <div className="mx-2 self-center text-xs font-semibold italic whitespace-nowrap">Software Developer, Consultant</div>
            </div>
          </div>
          <div className="flex flex-2 justify-around">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="text-lg"
              >
                <Link href={item.href} className="">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <ThemeToggle className="flex flex-1 justify-end"/>
        </div>
      </nav>
    )
}