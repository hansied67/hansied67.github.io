'use client';

// import Link from "next/link";
import Image from "next/image";
import CustomCarousel from "../CustomCarousel/CustomCarousel";

interface PortfolioProps {
  children: React.ReactNode,
  className: string | undefined,
  title: string,
  carouselImages: Array<{ src: string, alt: string }>
}


// Custom component for easy portfolio additions/modifications
export default function PortfolioEntry(
  props: PortfolioProps) {
    return (
      <div className={props.className}>
        <div className="flex flex-col lg:flex-row gap-2 border-2 shadow-lg rounded-xl p-2">
          <div className="flex py-2 pl-2">
            <div className="flex flex-col">
            <h1 className="font-bold text-lg lg:text-6xl">{props.title}</h1>
              {props.children}
            </div>
          </div>
          <CustomCarousel className="border-1 rounded-lg shadow-lg md:mb-2 w-1/2 mx-auto">
            {props.carouselImages.map((item, index) => (
              <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full" />
            ))}
          </CustomCarousel>
        </div>
      </div>
    )
}