'use client';

import { Carousel, IconButton } from "../MaterialWrapper/MaterialWrapper";
import type { CarouselProps } from "@material-tailwind/react";
// import Image from "next/image";


// Custom Carousel component for easy refactoring, will be re-used often
export default function CustomCarousel(props: CarouselProps) {
    return (
        <Carousel
        {...props}
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="amber"
            size="lg"
            aria-label="Carousel Back Button"
            onClick={handlePrev}
            className="!absolute top-2/4 left-2 -translate-y-2/4 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="amber"
            size="lg"
            aria-label="Carousel Next Button"
            onClick={handleNext}
            className="!absolute top-2/4 !right-2 -translate-y-2/4 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-amber-500" : "w-4 bg-amber-500/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        >
            {props.children}
        </Carousel>
    );
}