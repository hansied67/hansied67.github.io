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
  id?: string | undefined
}


// Custom component for easy portfolio additions/modifications
export default function PortfolioEntry(
  props: PortfolioProps) {
    const portClass = (props.className ? "portfolio-entry " + props.className : "portfolio-entry scroll-mt-[92px] md:scroll-mt-[76px]")
    return (
      <div className={portClass} id={props.id}>
        <div className="flex flex-col xl:flex-row gap-2 border-2 shadow-lg rounded-xl p-2">
          <div className="flex flex-row py-2 pl-2">
            <div className="flex flex-col">
              <h2 className="font-bold text-lg md:text-6xl">{props.title}</h2>
              <h2 className="text-sm md:text-2xl">{props.subtitle}</h2>
              <h2 className="text-xs md:text-lg text-[var(--foreground)]/80"><b>{props.dates}</b></h2>
              <div><br /></div>
              <h2 className="mt-auto text-sm md:text-xl">{props.description}</h2>
            </div>
          </div>
          {/* Conditionally render nothing if no children, image if single child, carousel if multiple children. */}
          { !props.children ? <div /> :
          <div className="mx-auto my-auto min-w-[350px] max-w-[350px]">
            { Children.count(props.children) !== 1 ? 
            <CustomCarousel className="border-1 rounded-lg shadow-lg md:mb-2 items-center">
              {props.children}
            </CustomCarousel>
            : props.children
            }
          </div> }
        </div>
      </div>
    )
}