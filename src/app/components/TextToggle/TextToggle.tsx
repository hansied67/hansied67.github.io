"use client";

import { useEffect } from "react";

export default function TextToggle(props: { className: string | undefined; }) {

    useEffect(() => {
        const fontPreference = window?.localStorage.getItem("font-preference");
        const mainContainer = document.getElementById("main-container");

        if (fontPreference === null) {
            mainContainer?.classList.remove("font-sans");
            mainContainer?.classList.add("font-pixel");
            window.localStorage.setItem("font-preference", "pixel");
        }
        else {
            const fontPrompt = window.localStorage.getItem("font-prompt");
            if (fontPreference == "pixel") {
                mainContainer?.classList.remove("font-sans");
                mainContainer?.classList.add("font-pixel");

                window.localStorage.setItem("font-preference", "pixel");
                if (fontPrompt !== null) {
                    window.localStorage.setItem("font-prompt", "No")
                };
            }
            else {
                mainContainer?.classList.remove("font-pixel");
                mainContainer?.classList.add("font-sans");

                window.localStorage.setItem("font-preference", "sans");
                if (fontPrompt !== null) {
                    window.localStorage.setItem("font-prompt", "Yes");
                }
            }
        }
    }, [])

    function toggleFont() {
        const fontPreference = window?.localStorage.getItem("font-preference");
        const mainContainer = document.getElementById("main-container");

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
            <button onClick={toggleFont} className="self-center opacity-80 hover:opacity-100 hover:bg-(--color-background)/50 rounded-2xl text-xl w-[64px] h-[64px]">
                Aa
            </button>
        </div>
    )
}