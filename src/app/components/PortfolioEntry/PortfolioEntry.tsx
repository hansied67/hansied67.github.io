'use client';

// import Link from "next/link";
import CustomCarousel from "../CustomCarousel/CustomCarousel";

interface PortfolioProps {
  children: React.ReactNode,
  className: string | undefined,
  title: string,
  subtitle: React.ReactElement,
  description: React.ReactElement,
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
            <h2 className="text-sm lg:text-2xl">{props.subtitle}</h2>
            <h2 className="flex mt-auto text-sm lg:text-lg overflow-auto">{props.description}</h2>
            </div>
          </div>
          <CustomCarousel className="border-1 rounded-lg shadow-lg md:mb-2 w-1/2 mx-auto">
            {props.children}
          </CustomCarousel>
        </div>
      </div>
    )
}