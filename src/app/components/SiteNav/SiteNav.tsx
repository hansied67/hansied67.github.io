'use client';

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


// Custom Navbar component for easy refactoring
export default function SiteNav() {
    // const [page, setPage] = useState("");

    const  navItems = [
        { name: "Home", href: "/" },
        { name: "Bio", href: "/" },
        { name: "Projects", href: "/" },
        { name: "Contact", href: "/" },
    ];

    /*useEffect(() => {
        setPage("/");
        console.log(page);
        console.log(navItems);
    }, [page, navItems])*/

    return (
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Image src="/Bob Ross.png" alt="32x32 pixel art of lakeside mountains" width={64} height={64} priority />
          <div className="">
            <span className="self-center text-2xl font-bold whitespace-nowrap">Hans Durchholz</span>
            <div className="self-center text-xs font-semibold whitespace-nowrap">Software Developer, Consultant</div>
          </div>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="text-lg inline"
            >
              <Link href={item.href} className="">
                {item.name}
              </Link>
            </div>
          ))}
          {/* <div className="items-center justify-between">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-lg inline"
                >
                  <Link href={item.href} className="">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </nav>
    )
}