'use client';

// import Link from "next/link";
import CustomCarousel from "../CustomCarousel/CustomCarousel";

interface PortfolioProps {
  children: React.ReactNode,
  className: string | undefined,
  title: string | React.ReactElement,
  subtitle: string | React.ReactElement,
  description: string | React.ReactElement,
}


// Custom component for easy portfolio additions/modifications
export default function PortfolioEntry(
  props: PortfolioProps) {
    return (
      <div className={props.className}>
        <div className="flex flex-col lg:flex-row gap-2 border-2 shadow-lg rounded-xl p-2">
          <div className="flex flex-row py-2 pl-2">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg lg:text-6xl">{props.title}</h1>
              <h2 className="text-sm lg:text-2xl">{props.subtitle}</h2>
              <h2 className="flex mt-auto text-sm lg:text-xl overflow-auto">{props.description}</h2>
            </div>
          </div>
          <div className="w-3/4 lg:w-1/2 mx-auto">
            <CustomCarousel className="border-1 rounded-lg shadow-lg md:mb-2">
              {props.children}
            </CustomCarousel>
          </div>
        </div>
      </div>
    )
}