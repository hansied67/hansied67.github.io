'use client';

import { Carousel, IconButton } from "../MaterialWrapper/MaterialWrapper";

interface CarouselProps {
  children: React.ReactNode,
  className?: string | undefined,
  title?: string | undefined,
}


// Custom Carousel component for easy refactoring, will be re-used often
// Aria documentation for screen readers & keyboard controls:
//     https://www.w3.org/TR/wai-aria-1.1/
export default function CustomCarousel(props: CarouselProps) {
    const carouselTitle = props.title ? props.title : "Portfolio Entry Slideshow";
    const carouselId = props.title ? props.title.replace(/\s+/g, "-") : props.title; 

    return (
        <div>
          <Carousel
          {...props}
          id={carouselId}
          loop={true}
          aria-roledescription="Portfolio Slideshow"
          aria-label={carouselTitle}
          role="region"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="amber"
              size="lg"
              aria-label={"Previous slide"}
              aria-controls={carouselId}
              onClick={handlePrev}
              className="!absolute top-2/4 left-2 -translate-y-2/4"
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
              aria-label={"Next slide"}
              aria-controls={carouselId}
              onClick={handleNext}
              className="!absolute top-2/4 !right-2 -translate-y-2/4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <ul role="tablist" aria-label="Choose slide to display" className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <li
                  key={i}
                  role="tab"
                  aria-label={carouselTitle + " Jump to Slide " + (i+1).toString()}
                  aria-controls={carouselId}
                  aria-selected={activeIndex === i ? true : false}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-amber-500" : "w-4 bg-amber-500/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </ul>
          )}
          >
            {props.children}
          </Carousel>
        </div>
    );
}