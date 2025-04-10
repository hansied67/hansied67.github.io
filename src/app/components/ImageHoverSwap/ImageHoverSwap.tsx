'use client';

import { Children, useState } from "react";


export default function ImageHoverSwap(props: { className?: string | undefined; children: React.ReactNode }) {
    const [isHover, setIsHover] = useState(false);

    const childrenList = Children.toArray(props.children);
    const firstImage = childrenList[0];
    const secondImage = childrenList[1];

    return (
      <div
        onPointerEnter={() => setIsHover(true)}
        onPointerDown={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        onPointerCancel={() => setIsHover(false)}
      >
        { isHover ? secondImage : firstImage }
      </div>
    )
}