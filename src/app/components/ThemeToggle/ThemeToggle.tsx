'use client';

import { useEffect, useState } from "react";
import Image from "next/image";


//TODO: Change sprite on click. Easy implementation, make new worm sprite?
export default function ThemeToggle(props: { className: string | undefined; }) {
    const [isDark, setTheme] = useState(false);

    useEffect(() => {
        setTheme(window.matchMedia("(prefers-color-scheme:dark)").matches)
    }, [])

    function toggleTheme() {
      const root = document.querySelector<HTMLElement>(":root");
        if (isDark) {
            root?.style.setProperty('--background', '#ededed')
            root?.style.setProperty('--foreground', '#0a0a0a')
            root?.style.setProperty('--background-image', `url("/site-bg-light.png")`)
        } else {
            root?.style.setProperty('--background', '#0a0a0a')
            root?.style.setProperty('--foreground', '#ededed')
            root?.style.setProperty('--background-image', `url("/site-bg-dark.png")`)
        }
        setTheme(!isDark);
    }

    const darkButton = <button onClick={toggleTheme}>
      <Image
        className="opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-2xl"
        src="/Moon.png"
        alt="Light mode toggle"
        width={64}
        height={64}
        priority
      />
    </button>
    const lightButton = <button onClick={toggleTheme}>
    <Image
      className="opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-2xl"
      src="/Sun.png"
      alt="Dark mode toggle"
      width={64}
      height={64}
      priority
    />
  </button>

    return (
        <div className={props.className}>
          {isDark ? darkButton : lightButton}
        </div>
    )
}