'use client';

import { Carousel } from "../MaterialWrapper/MaterialWrapper";
import type { CarouselProps } from "@material-tailwind/react";
// import Image from "next/image";


// Custom Carousel component for easy refactoring, will be re-used often
export default function CustomCarousel(props: CarouselProps) {
    return (
        <Carousel {...props}>
            {props.children}
        </Carousel>
    );
}