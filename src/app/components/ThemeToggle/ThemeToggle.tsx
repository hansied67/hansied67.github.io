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
        } else {
            document.documentElement.style.setProperty('--background', '#0a0a0a')
            document.documentElement.style.setProperty('--foreground', '#ededed')
        }
        setTheme(!isDark);
    }

    const darkButton = <button onClick={toggleTheme}>
      <Image
        className="opacity-80 hover:opacity-100"
        src="/worm_foreground.png"
        alt="Light mode toggle"
        width={64}
        height={64}
        priority
      />
    </button>
    const lightButton = <button onClick={toggleTheme}>
    <Image
      className="opacity-80 hover:opacity-100"
      src="/flower.png"
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