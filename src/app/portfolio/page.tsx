import Image from "next/image";
import Link from "next/link";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";

export default function Portfolio() {
    return (
        <div className="light grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] row-start-2">
            <div className="flex flex-row gap-[32px] border-2 rounded-xl p-2">
              <div className="flex flex-3 py-2 pl-2">
                <div className="flex flex-col">
                  <h1 className="font-bold underline text-6xl">CTRBot</h1>
                  <div className="my-auto">
                    <h2 className="italic text-lg">
                      A discord bot written in python interfacing with
                      <Link
                        className="text-yellow-500 hover:text-blue-500 visited:text-amber-500"
                        href="https://crashteamranking.com/nftttable/"
                        target="_blank">
                          &nbsp;Crash Team Ranking
                      </Link>
                      &apos;s back-end, a tool for Crash Team Racing: Nitro Fueled.
                      <br />
                    </h2>
                    <h2 className="text-lg">
                      This bot was a collaborative project with my friends to be used by other friends! We spun up a Python bot, made an API to hook-up to the site&apos;s back-end, and hosted the server on Linux.
                      <br />
                      CTRBot exists to streamline the Crash Team Ranking user experience by replacing the site&apos;s UI functionalities with command-based ones. This provides efficiency, reliability, and the ability to perform several site functions concurrently. Furthermore, this bot contains custom functionality such as track generation and custom track pools, to further act as a general-use competitive tool.
                      <br />
                      This bot was beta tested and utilized by hundreds of members of competitive CTR communities within discord. I led the development team of 2 other developers, teaching them Git, Python, Linux Operations, JSON, the works!
                      <br />
                      While the bot is now out of commission due to an inactive community, this was a very fun and fulfilling project. I love collaborating and making useful tools!
                    </h2>
                  </div>
                </div>
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