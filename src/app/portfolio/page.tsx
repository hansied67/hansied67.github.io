import Image from "next/image";
import Link from "next/link";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";

export default function Portfolio() {
    return (
        <div className="light grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] row-start-2">
            <div className="flex flex-row gap-[32px] border-2 rounded-xl p-2">
              <div className="flex flex-3 py-2 pl-2">
                <h1 className="font-bold underline text-6xl">CTRBot</h1>
                <h2 className="italic text-lg self-center flex">
                  Interface for
                  <Link
                    className="text-blue-500 hover:text-green-500 visited:text-purple-500"
                    href="https://crashteamranking.com/nftttable/"
                    target="_blank">
                      &nbsp;Crash Team Ranking
                  </Link>
                  &apos;s back-end.
                </h2>
              </div>
              <CustomCarousel className="flex flex-1 border-1 rounded-lg">
                <Image src="/CTRBot SC1.png" alt="" width={600} height={0} className="h-full w-full m-auto"/>
                <Image src="/CTRBot SC2.png" alt="" width={600} height={0} className="h-full w-full m-auto"/>
              </CustomCarousel>
            </div>
          </main>
        </div>
    );
}