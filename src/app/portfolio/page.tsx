import Image from "next/image";
import Link from "next/link";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";

export default function Portfolio() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-[32px] row-start-2">
            <div className="flex flex-col lg:flex-row gap-[32px] border-2 shadow-lg rounded-xl p-2">
              <div className="flex py-2 pl-2">
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg lg:text-6xl">CTRBot</h1>
                  <h2 className="text-sm lg:text-2xl">
                      A discord bot written in python interfacing with
                      <Link
                        className="text-yellow-500 hover:text-blue-500 visited:text-amber-500"
                        href="https://crashteamranking.com/nftttable/"
                        target="_blank">
                          &nbsp;Crash Team Ranking
                      </Link>
                      &apos;s back-end, a tool for Crash Team Racing: Nitro Fueled.
                      <br /><br />
                  </h2>
                  <h2 className="flex mt-auto text-sm lg:text-lg overflow-auto">
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
              <CustomCarousel className="border-1 rounded-lg shadow-lg md:mb-2 w-1/2 mx-auto">
                <Image src="/CTRBot SC1.png" alt="" width={300} height={0} className="m-auto h-full"/>
                <Image src="/CTRBot SC2.png" alt="" width={300} height={0} className="m-auto h-full"/>
              </CustomCarousel>
            </div>
            <div className="flex flex-col lg:flex-row gap-[32px] border-2 shadow-lg rounded-xl p-2">
              {/* TODO: Fill out the rest of these entries! Get a good selfie dummy! */}
              <div className="flex py-2 pl-2">
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg lg:text-6xl">Glass Bridge Memory Game</h1>
                  <h2 className="text-sm lg:text-2xl">
                      A Progressive Web Application coded in ReactJS, CSS, and a flask back-end, hosted via heroku (now out of commission). This was a game based on the popular Netflix series
                      <Link
                        className="text-yellow-500 hover:text-blue-500 visited:text-amber-500"
                        href="https://crashteamranking.com/nftttable/"
                        target="_blank">
                          &nbsp;Squid Game
                      </Link>
                      .
                      <br /><br />
                  </h2>
                  <h2 className="flex mt-auto text-sm lg:text-lg grow">
                    As the developer with the most experience making responsive web apps, I took the lead on the UI team for my Senior Capstone project. We were prompted to make a game for small children to be played at a Girl Scouts retreat. Squid Game was huge at the time, so we based our game and its aesthetic on the show to draw players in.
                    <br />
                    I created the front-end&apos;s styles, components, and signals, complete with persistent state management, hooks to our Flask &quot;High Scores&quot; back-end, and custom assets.
                    <br />
                    I also set up a manifest and service workers in order for our game to be a Progressive Web App. This allowed our users to pin the site to their home screens like a normal app, and play offline with local high scores.
                    <br />
                    Finally, I managed all the bells and whistles pertinent to our scope, including internal/external metadata, documentation, responsive design, video production for remote presentation, etc.
                  </h2>
                </div>
              </div>
              <CustomCarousel className="border-1 rounded-lg shadow-lg md:mb-2 w-1/2 mx-auto">
                <Image src="/GlassBridge.png" alt="" width={300} height={0} className="m-auto h-full"/>
                <Image src="/Frog.gif" alt="TODO: temp, fill all alt text!" width={300} height={0} className="m-auto h-full"/>
              </CustomCarousel>
            </div>
          </main>
        </div>
    );
}