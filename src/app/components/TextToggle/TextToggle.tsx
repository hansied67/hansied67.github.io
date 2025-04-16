"use client";

import { useEffect } from "react";

export default function TextToggle(props: { className: string | undefined; }) {

    useEffect(() => {
        const fontPreference = window?.localStorage.getItem("font-preference");
        const mainContainer = document.getElementById("root-container");

        if (fontPreference === null) {
            mainContainer?.classList.remove("font-sans");
            mainContainer?.classList.add("font-pixel");
            window.localStorage.setItem("font-preference", "pixel");
        }
        else {
            if (fontPreference == "pixel") {
                mainContainer?.classList.remove("font-sans");
                mainContainer?.classList.add("font-pixel");

                window.localStorage.setItem("font-preference", "pixel");
            }
            else {
                mainContainer?.classList.remove("font-pixel");
                mainContainer?.classList.add("font-sans");

                window.localStorage.setItem("font-preference", "sans");
            }
        }
    }, [])

    function toggleFont() {
        const fontPreference = window?.localStorage.getItem("font-preference");
        const mainContainer = document.getElementById("root-container");

        if (fontPreference == "pixel") {
            mainContainer?.classList.remove("font-pixel");
            mainContainer?.classList.add("font-sans");

            window.localStorage.setItem("font-prompt", "Yes");
            window.localStorage.setItem("font-preference", "sans");
        }
        else {
            mainContainer?.classList.remove("font-sans");
            mainContainer?.classList.add("font-pixel");

            window.localStorage.setItem("font-prompt", "No");
            window.localStorage.setItem("font-preference", "pixel");
        }
    }

    return (
        <div className={props.className}>
            <button onClick={toggleFont} aria-label="Font Toggle Button" aria-controls="main" className="self-center opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-2xl h-full w-full max-w-[64px] max-h-[64px] text-base xl:text-xl md:text-lg sm:text-base">
                Aa
            </button>
        </div>
    )
}