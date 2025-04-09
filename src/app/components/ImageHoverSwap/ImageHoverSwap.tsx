'use client';

import { Children, useState } from "react";


export default function ImageHoverSwap(props: { className?: string | undefined; children: React.ReactNode }) {
    const [isHover, setIsHover] = useState(false);

    const childrenList = Children.toArray(props.children);
    const firstImage = childrenList[0];
    const secondImage = childrenList[1];

    return (
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        { isHover ? secondImage : firstImage }
      </div>
    )
}