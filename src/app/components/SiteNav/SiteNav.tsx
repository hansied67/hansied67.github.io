'use client';

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Alert, Button } from "../MaterialWrapper/MaterialWrapper";
import { useEffect, useRef, useState } from "react";


// Custom Navbar component for easy refactoring
export default function SiteNav() {
    const [open, setOpen] = useState(true);
    const [isFocus, setFocus] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const tabRef = useRef<HTMLAnchorElement | null>(null);
    const alertRef = useRef<HTMLDivElement | null>(null);

    const pathname = usePathname();

    const  navItems = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Bio", href: "/bio" },
        { name: "Contact", href: "https://www.linkedin.com/in/hdurchholz/"}
    ];
    
    // First-time visit, goes away no matter what choice
    useEffect(() => {
      const fontPrompt = window?.localStorage.getItem("font-prompt");
      if (fontPrompt !== null && fontPrompt !== "Undecided") {
        setOpen(false);
      }
      else {
        // wait 5 seconds to open
        setOpen(false);
        setTimeout(() => {
          setOpen(true);
        }, 5000);
        // timeout after 10 seconds
        setTimeout(() => {
          if (fontPrompt === null) {
            window?.localStorage.setItem("font-prompt", "Undecided");
          }
          setOpen(false);
        }, 10000);
      }
    }, []);

    // WAI-ARIA keyboard navigation - navigation
    useEffect(() => {
      const navElement = navRef.current as HTMLDivElement | null;
      let tabElement = tabRef.current as HTMLAnchorElement | null;

      function getPrevSibling(currentElement?: HTMLAnchorElement | null) {
        const element = currentElement == null ? tabElement : currentElement;

        if (element?.parentElement?.previousElementSibling == null) {
          return navElement?.lastElementChild?.firstChild as HTMLAnchorElement | null;
        }
        return element?.parentElement?.previousElementSibling?.firstChild as HTMLAnchorElement | null;
      }
      function getNextSibling(currentElement?: HTMLAnchorElement | null) {
        const element = currentElement == null ? tabElement : currentElement;
        
        if (element?.parentElement?.nextElementSibling == null) {
          return navElement?.firstElementChild?.firstChild as HTMLAnchorElement | null;
        }
        return element?.parentElement?.nextElementSibling?.firstChild as HTMLAnchorElement | null;
      }
      
      let prevSibling = getPrevSibling();
      let nextSibling = getNextSibling();

      const pressedKeys = new Map<string, boolean>(new Map());
      const handleGlobalInput = (e : KeyboardEvent) => {
        pressedKeys.set(e.code, true);
      }
      const handleInput = (e: KeyboardEvent) => {
        pressedKeys.set(e.code, true);
        if (e.code === "ArrowLeft") {
          prevSibling?.focus();
          tabElement = getPrevSibling()
          prevSibling = getPrevSibling();
          nextSibling = getNextSibling();
        }
        else if (e.code === "ArrowRight") {
          nextSibling?.focus();
          tabElement = getNextSibling();
          prevSibling = getPrevSibling();
          nextSibling = getNextSibling();
        }
        else if (e.code === "Space") {
          e.preventDefault();
          tabElement?.click();
        }
        // if (pressedKeys.get("ShiftLeft") && pressedKeys.get("Tab") && !isFocus) {
        //   console.log("isFocus: " + isFocus);
        //   setFocus(true);
        //   navElement?.focus();
        // }
        else if (pressedKeys.get("ShiftLeft") && pressedKeys.get("Tab")) {
          setFocus(false);
          e.preventDefault();
          document.getElementById("skip")?.focus();
        }
        // else if (pressedKeys.get("Tab") && isFocus) {
        //   setFocus(false);
        // }
      }
      const removeInput = (e: KeyboardEvent) => {
        pressedKeys.delete(e.code)
      }

      const handleFocus = () => {
        setFocus(true);
        tabElement = tabRef.current as HTMLAnchorElement | null;
        tabElement?.focus();
        prevSibling = getPrevSibling();
        nextSibling = getNextSibling();
      }

      // const handleBlur = () => {
      //   console.log("handleBlur");
      //   pressedKeys.clear();
      //   setFocus(false);
      // }

      document?.addEventListener('keyup', removeInput);
      document?.addEventListener('keydown', handleGlobalInput);
      // navElement?.addEventListener('keyup', removeInput);
      navElement?.addEventListener('keydown', handleInput);
      navElement?.addEventListener('focus', handleFocus);
      // navElement?.addEventListener('blur', handleBlur);

      return () => {
        document?.removeEventListener('keyup', removeInput);
        document?.removeEventListener('keydown', handleGlobalInput);
        // navElement?.removeEventListener('keyup', removeInput);
        navElement?.removeEventListener('keydown', handleInput);
        navElement?.removeEventListener('focus', handleFocus);
        // navElement?.removeEventListener('blur', handleBlur);
        // setFocus(false);
      }
    }, [navItems.length, isFocus])

    // WAI-ARIA keyboard navigation - Alert
    // https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/examples/alertdialog/#kbd_label
    useEffect(() => {
      // make alert focus when displayed
      // 
    }, [open]);

    // TODO reset cursor, CSS variables
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
      <header className="fixed w-full z-20 top-0 start-0 print:relative" aria-label="Site Header">
        <div className="backdrop-blur bg-opacity-30">
        <a id="skip" className="fixed -translate-y-full focus:translate-y-0 ml-2" href="#main">Skip to Content</a>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div role="region" aria-label="Banner Title" className="flex flex-1 items-center mx-auto">
              <Image
                className="p-0 md:p-0.5 size-[48px] md:size-[64px]"
                src="/Bob%20Ross.png"
                title="32x32 pixel art of lakeside mountains made by Hans in Aseprite."
                alt="Lakeside mountains pixel art"
                width={64}
                height={64}
                priority
              />
              <div className="">
                <p className="mx-2 text-base md:text-2xl font-bold whitespace-nowrap">Hans Durchholz</p>
                <p className="mx-2 text-sm md:text-base whitespace-nowrap">Software Developer, Consultant</p>
              </div>
            </div>
            <div role="navigation" aria-label="Site Navigation"
            className="flex flex-2 justify-end"
            ref={navRef} tabIndex={0}
            >
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-end"
                  role="none presentation"
                >
                  {item.href != pathname
                    ? <Link href={item.href}
                      aria-label={"Open " + item.name}
                      tabIndex={-1}
                      target={item.name !== "Contact" ? "_self" : "_blank"}
                      className="site-nav text-sm md:text-lg ml-6 p-2 hover:text-amber-500 hover:bg-(--color-background)/50 rounded-lg">
                      {item.name}
                      </Link>
                    : <Link href="#main"
                      aria-label={"Current Page (" + item.name + ")"}
                      tabIndex={-1}
                      ref={tabRef}
                      className="site-nav text-sm md:text-lg font-bold ml-6 p-2 text-amber-500 rounded-lg">
                        {item.name}
                      </Link>
                  }  
                </div>
              ))}
            </div>
          </div>
        </div>
        <Alert
        ref={alertRef}
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
      </header>
    )
}