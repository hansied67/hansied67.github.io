'use client';

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Alert, Button } from "../MaterialWrapper/MaterialWrapper";
import { useEffect, useState } from "react";


// Custom Navbar component for easy refactoring
export default function SiteNav() {
    const [open, setOpen] = useState(true);

    const pathname = usePathname();

    const  navItems = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Bio", href: "/bio" },
    ];
    
    // First-time visit, goes away no matter what choice
    useEffect(() => {
      const fontPrompt = window?.localStorage.getItem("font-prompt");
      if (fontPrompt !== null && fontPrompt !== "Undecided") {
        setOpen(false);
      }
      else {
        // timeout after 10 seconds
        setTimeout(() => {
          if (fontPrompt === null) {
            window?.localStorage.setItem("font-prompt", "Undecided");
          }
          setOpen(false);
        }, 10000);
      }
    }, [])

    function fontAlert(decision: string) {
      setOpen(false);
      window.localStorage.setItem("font-prompt", decision);

      const mainContainer = document.getElementById("root-container");
      if (decision === "Yes") {
        mainContainer?.classList.remove("font-pixel");
        mainContainer?.classList.add("font-sans");
        window.localStorage.setItem("font-preference", "sans");
      }
      else {
        mainContainer?.classList.remove("font-sans");
        mainContainer?.classList.add("font-pixel");
        window.localStorage.setItem("font-preference", "pixel");
      }
    }

    return (
      <div className="fixed w-full z-20 top-0 start-0" aria-label="Site Header">
        <div className="backdrop-blur bg-opacity-30">
        <a className="fixed -translate-y-full focus:translate-y-0 ml-2" href="#main">Skip to Content</a>
          <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div role="banner" className="flex flex-1 items-center mx-auto">
              <Image
                className="mx-1 mt-1 mb-1 md:mb-0 size-[48px] md:size-[64px]"
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
            <div role="menubar" aria-label="Site Navigation"
            className="flex flex-2 justify-end"
            >
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-end"
                  role="none presentation"
                >
                  {item.href != pathname
                    ? <Link href={item.href}
                      role="menuitem"
                      className="site-nav text-sm md:text-lg ml-6 p-2 hover:text-amber-500 hover:bg-(--color-background)/50 rounded-lg">
                      {item.name}
                      </Link>
                    : <Link href="#main"
                      role="menuitem"
                      className="site-nav text-sm md:text-lg font-bold ml-6 p-2 text-amber-500">
                        {item.name}
                      </Link>
                  }  
                </div>
              ))}
              <div className="flex justify-end">
                <Link href="https://www.linkedin.com/in/hdurchholz/"
                role="menuitem"
                target="_blank"
                className="site-nav text-sm md:text-lg ml-6 p-2 hover:text-amber-500 hover:bg-(--color-background)/50 rounded-lg">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <Alert
        open={open}
        className="font-serif mx-auto max-w-screen-md"
        aria-label="Change Font Alert"
        animate={{
          mount: { y: 0 },
          unmount: { y: -100 },
        }}
        action={
          <div className="ml-auto">
            <Button
            size="sm"
            className="hover:cursor-pointer hover:bg-amber-500/80"
            aria-label="Change Font Yes"
            onClick={() => fontAlert("Yes")}>
              Yes
            </Button>
            <Button
            size="sm"
            className="hover:cursor-pointer hover:bg-amber-500/80"
            aria-label="Change Font No"
            onClick={() => fontAlert("No")}>
              No
            </Button>
          </div>
        }>
          Trouble reading the site?
        </Alert>
      </div>
    )
}