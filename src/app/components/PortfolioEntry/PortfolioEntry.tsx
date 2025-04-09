'use client';

import { Children } from "react";
import CustomCarousel from "../CustomCarousel/CustomCarousel";

interface PortfolioProps {
  children?: React.ReactNode,
  className?: string | undefined,
  title: string | React.ReactElement,
  dates?: string | React.ReactElement | undefined,
  subtitle?: string | React.ReactElement,
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
              <h2 className="text-xs lg:text-lg text-[var(--foreground)]/80"><b>{props.dates}</b></h2>
              <h2 className="flex mt-auto text-sm lg:text-xl overflow-auto">{props.description}</h2>
            </div>
          </div>
          {/* Conditionally render nothing if no children, image if single child, carousel if multiple children. */}
          { !props.children ? <div /> :
          <div className="w-3/4 lg:w-1/2 mx-auto">
            { Children.count(props.children) !== 1 ? 
            <CustomCarousel className="border-1 rounded-lg shadow-lg md:mb-2">
              {props.children}
            </CustomCarousel>
            : props.children
            }
          </div> }
        </div>
      </div>
    )
}