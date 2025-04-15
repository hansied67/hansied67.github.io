'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import ImageHoverSwap from "../ImageHoverSwap/ImageHoverSwap";


//TODO: Change sprite on click. Easy implementation, make new worm sprite?
export default function ThemeToggle(props: { className: string | undefined; }) {
    const [isDark, setTheme] = useState(true);

    useEffect(() => {
        const preference = window?.localStorage.getItem('theme-preference');
        const root = document.querySelector<HTMLElement>(":root");

        if (preference === null) {
          const browserPreference = window.matchMedia("(prefers-color-scheme:dark)").matches;
          root?.style.setProperty('--background', '#0a0a0a')
          root?.style.setProperty('--foreground', '#ededed')
          root?.style.setProperty('--background-image', `url("/site-bg-dark.png")`)
          window.localStorage.setItem('theme-preference', (browserPreference ? 'dark': 'light'))
          setTheme(browserPreference)
        }
        else {
            if (preference == "dark") {
              root?.style.setProperty('--background', '#0a0a0a')
              root?.style.setProperty('--foreground', '#ededed')
              root?.style.setProperty('--background-image', `url("/site-bg-dark.png")`)
              window.localStorage.setItem('theme-preference', 'dark');
              setTheme(true);
            }
            else {
              root?.style.setProperty('--background', '#ededed')
              root?.style.setProperty('--foreground', '#0a0a0a')
              root?.style.setProperty('--background-image', `url("/site-bg-light.png")`)
              window.localStorage.setItem('theme-preference', 'light');
              setTheme(false);
            }
        }
    }, [])

    function toggleTheme() {
        const root = document.querySelector<HTMLElement>(":root");
        if (isDark) {
            root?.style.setProperty('--background', '#ededed')
            root?.style.setProperty('--foreground', '#0a0a0a')
            root?.style.setProperty('--background-image', `url("/site-bg-light.png")`)
            window.localStorage.setItem('theme-preference', 'light');
        } else {
            root?.style.setProperty('--background', '#0a0a0a')
            root?.style.setProperty('--foreground', '#ededed')
            root?.style.setProperty('--background-image', `url("/site-bg-dark.png")`)
            window.localStorage.setItem('theme-preference', 'dark');
        }
        setTheme(!isDark);
    }

    const darkButton = <button className="rounded-2xl h-full" aria-label="Light mode toggle button" aria-controls="main" onClick={toggleTheme}>
      <Image
        className="opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-2xl"
        src="/Moon.png"
        alt="Light mode toggle"
        width={64}
        height={64}
        loading="eager"
      />
    </button>
    const lightButton = <button className="rounded-2xl h-full" aria-label="Dark mode toggle button" aria-controls="main" onClick={toggleTheme}>
      <Image
        className="opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-2xl"
        src="/Sun.png"
        alt="Dark mode toggle"
        width={64}
        height={64}
        loading="eager"
      />
  </button>

    return (
        <div className={props.className}>
          <ImageHoverSwap>
            {isDark ? darkButton : lightButton}
            {isDark ? lightButton : darkButton}
          </ImageHoverSwap>
        </div>
    )
}