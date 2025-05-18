import Image from "next/image";
import Link from "next/link";


const flowerImage = <Image
  src="/flower.png"
  title="32x32 Flower Pixel Art"
  alt="Flower pixel art - blue & white"
  width={32}
  height={32}
  unoptimized
  />
;


export default function NotFound() {
    return (
        <div className="flex h-screen">
          <main id="main" className="m-auto">
            <div className="flex justify-center mb-5">
              {flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}
            </div>
            <h2 className="flex text-lg md:text-5xl font-bold justify-center">
              404 - NOT FOUND
            </h2>
            <div className="flex justify-center my-5">
              {flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}{flowerImage}
            </div>
            <h3 className="flex text-md md:text-3xl justify-center">
              <Link href="/">Go Home</Link>
            </h3>
          </main>
        </div>
    )
}