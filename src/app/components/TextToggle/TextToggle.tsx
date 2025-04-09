'use client';

import { useEffect, useState } from "react";

export default function TextToggle(props: { className: string | undefined; }) {
    const [isPixelFont, setPixelFont] = useState(true);

    useEffect(() => {
        const preference = window?.localStorage.getItem('font-preference');
        const mainContainer = document.getElementById("main-container");
        if (preference === null) {
            mainContainer?.classList.remove("font-sans");
            mainContainer?.classList.add("font-pixel");
            window.localStorage.setItem('font-preference', 'pixel');
            setPixelFont(true);
        }
        else {
            if (preference == "pixel") {
                mainContainer?.classList.remove("font-sans");
                mainContainer?.classList.add("font-pixel");
                window.localStorage.setItem('font-preference', 'pixel');
                setPixelFont(true);  
            }
            else {
                mainContainer?.classList.remove("font-pixel");
                mainContainer?.classList.add("font-sans");
                window.localStorage.setItem('font-preference', 'sans');
                setPixelFont(false);  
            }
        }
    }, [])

    function toggleFont() {
        const mainContainer = document.getElementById("main-container");
        if (isPixelFont) {
            mainContainer?.classList.remove("font-pixel");
            mainContainer?.classList.add("font-sans");
            window.localStorage.setItem('font-preference', 'sans');
        }
        else {
            mainContainer?.classList.remove("font-sans");
            mainContainer?.classList.add("font-pixel");
            window.localStorage.setItem('font-preference', 'pixel');
        }
        setPixelFont(!isPixelFont);
    }

    return (
        <div className={props.className}>
            <button onClick={toggleFont} className="self-center opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-2xl text-xl w-[64px] h-[64px]">
                Aa
            </button>
        </div>
    )
}