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
        if (isDark) {
            document.documentElement.style.setProperty('--background', '#ededed')
            document.documentElement.style.setProperty('--foreground', '#0a0a0a')
            document.documentElement.style.setProperty('--background-image', `url("/site-bg-light.png")`)
        } else {
            document.documentElement.style.setProperty('--background', '#0a0a0a')
            document.documentElement.style.setProperty('--foreground', '#ededed')
            document.documentElement.style.setProperty('--background-image', `url("/site-bg-dark.png")`)
        }
        setTheme(!isDark);
    }

    const darkButton = <button onClick={toggleTheme}>
      <Image
        className="opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-md"
        src="/Moon.png"
        alt="Light mode toggle"
        width={64}
        height={64}
        priority
      />
    </button>
    const lightButton = <button onClick={toggleTheme}>
    <Image
      className="opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-md"
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