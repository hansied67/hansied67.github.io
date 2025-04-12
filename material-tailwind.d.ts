import {} from "@material-tailwind/react";

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module "@material-tailwind/react" {
  export interface CarouselProps extends EventCapture {
    placeholder?: unknown;
  }
  
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface IconButtonProps extends EventCapture {
    placeholder?: unknown;
  }

  export interface AlertProps extends EventCapture {
    placeholder?: unknown;
  }
}