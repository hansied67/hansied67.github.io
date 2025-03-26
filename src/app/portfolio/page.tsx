import Image from "next/image";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";

export default function Portfolio() {
    return (
        <div className="light grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] row-start-2">
            <CustomCarousel>
              <Image src="/worm_foreground.png" alt="worm :)" width={64} height={64} className="h-full w-full object-cover"/>
              <Image src="/worm_foreground.png" alt="worm :)" width={64} height={64} className="h-full w-full object-cover"/>
            </CustomCarousel>
          </main>
        </div>
    );
}