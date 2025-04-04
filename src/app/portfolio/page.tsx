import Link from "next/link";
import Image from "next/image";
import PortfolioEntry from "../components/PortfolioEntry/PortfolioEntry";

export default function Portfolio() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 gap-16 sm:p-20">
          <main className="flex flex-col gap-[32px] row-start-2">
            <PortfolioEntry
            className=""
            title={
            <span>
              <Link
              href="https://hansied67.github.io/flutter_dice_roller"
              target="_blank">
                D&D Dice Roller
              </Link>
            </span>}
            subtitle={
            <span>
              A cross-platform, mobile-first app written in&nbsp;
              <Link
              href="https://flutter.dev/"
              target="_blank">
                Flutter
              </Link>.
              <br /><br />
            </span>}
            description={
            <span>
              This was an app I made for a friend! They were dissatisfied with the customization available in other popular free dice roller apps.
              <br />
              The app serves as a standard dice rolling app with a &quot;Custom Roller&quot; tab for specific, spells, actions, etc. I had a great time designing the app&apos;s sleek, professional Material design and custom assets. Seeing the fruits of my labor with my own eyes in a casual setting was very fulfilling! One of my favorite pet projects for this reason!
              <br />
              Primarily used for&nbsp;
              <Link
              href="https://company.wizards.com/"
              target="_blank">
                Wizards of the Coast&apos;s
              </Link>
              &nbsp;properties:&nbsp;
              <Link
              href="https://dnd.wizards.com/"
              target="_blank">
                Dungeons & Dragons
              </Link>
              &nbsp;and&nbsp;
              <Link
              href="https://magic.wizards.com/"
              target="_blank">
                Magic: The Gathering
              </Link>.
            </span>}
            >
              <Image
              src="/DiceRoller1.gif"
              title="D&D Dice Roller showcase"
              alt="D&D app gif"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              unoptimized
              />
              <Image
              src="/DiceRoller2.gif"
              title="D&D Dice Roller: Custom Roller showcase"
              alt="D&D app custom roller gif"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              unoptimized
              />
              <Image
              src="/DiceRoller3.png"
              title="D&D Dice Roller: History showcase"
              alt="D&D app history"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              />
            </PortfolioEntry>
            <PortfolioEntry
            className=""
            title="CTRBot"
            subtitle={
            <span>
              A discord bot written in python interfacing with
              <Link
              href="https://crashteamranking.com/"
              target="_blank">
                &nbsp;Crash Team Ranking&apos;s
              </Link>
              &nbsp;back-end, a tool for&nbsp;
              <Link
              href="https://www.crashbandicoot.com/crashteamracing"
              target="_blank">
                Activision
              </Link>
              &apos;s&nbsp;
              <Link
              href="https://www.crashbandicoot.com/crashteamracing"
              target="_blank">
                Crash Team Racing: Nitro Fueled
              </Link>.
              <br /><br />
            </span>}
            description={
            <span>
              This bot was a collaborative project with my friends to be used by other friends! We spun up a Python bot, made an API to hook-up to the site&apos;s back-end, and hosted the server on Linux.
              <br />
              CTRBot exists to streamline the Crash Team Ranking user experience by replacing the site&apos;s UI functionalities with command-based ones. This provides efficiency, reliability, and the ability to perform several site functions concurrently. Furthermore, this bot contains custom functionality such as track generation and custom track pools, to further act as a general-use competitive tool.
              <br />
              This bot was beta tested and utilized by hundreds of members of competitive CTR communities within discord. I led the development team of 2 other developers, teaching them Git, Python, Linux Operations, JSON, the works!
              <br />
              While the bot is now out of commission due to an inactive community, this was a very fun and fulfilling project. I love collaborating and making useful tools!
            </span>}>
              <Image
              src="/CTRBot SC1.png"
              title="A screenshot of a Discord Chat window between a user and CTRBot, showcasing track generation adhering to custom pools. The user inputs '.p bs'. The bot outputs an image of 8 tracks with their names using CTR's font, stacked horizontally."
              alt="Discord Screenshot - CTRBot track command"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              />
              <Image
              src="/CTRBot SC2.png"
              title="A screenshot of a Discord Chat window between a user and CTRBot, showcasing the bot's aggregation and display of top 10 player times per track. The user inputs '.lap10 inferno', and the bot outputs an embedded message detailing the 10 fastest lap times for the track Inferno Island. The embedded message contains a hyperlink to the track's leaderboard on CrashTeamRanking.com, a hyperlink to CrashTeamRanking.com's home page via its icon, and 10 embedded messages for each player's time. Said embeds contain: position, username, country flag, engine type (icon), lap time hyperlinked to its Youtube URL, platform (icon), and a link to the user's CrashTeamRanking profile."
              alt="Discord Screenshot - CTRBot record commands"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              />
            </PortfolioEntry>
            <PortfolioEntry
            className=""
            title="Glass Bridge Memory Game"
            subtitle={
            <span>
              A Progressive Web Application coded in ReactJS, CSS, and a flask back-end, hosted via heroku (now out of commission). This was a cross-platform game based on the popular Netflix series
              <Link
              href="https://www.netflix.com/title/81040344"
              target="_blank">
                &nbsp;Squid Game
              </Link>
              .
              <br /><br />
            </span>}
            description={
            <span>
              As the developer with the most experience making responsive web apps, I took the lead on the UI team for my Senior Capstone project. We were prompted to make a game for small children to be played at a Girl Scouts retreat. Squid Game was huge at the time, so we based our game and its aesthetic on the show to draw players in.
              <br />
              I created the front-end&apos;s styles, components, and signals, complete with persistent state management, hooks to our Flask &quot;High Scores&quot; back-end, and custom assets.
              <br />
              I also set up a manifest and service workers in order for our game to be a Progressive Web App. This allowed our users to pin the site to their home screens like a normal app, and play offline with local high scores.
              <br />
              Finally, I managed all the bells and whistles pertinent to our scope, including internal/external metadata, documentation, responsive design, video production for remote presentation, etc.
            </span>}>
              <Image
              src="/GlassBridge.png"
              title="Icon for Glass Bridge Memory Game. Text font is cyan with a pink shadow, rendered in a font resembling the one used in Netflix's hit show. Black Background."
              alt="Glass Bridge Icon"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              />
              <Image
              src="/Frog.gif"
              title="64x64 frog pixel art gif made by Hans in Aseprite"
              alt="Frog pixel art animation"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
              unoptimized
              />
          </PortfolioEntry>
          </main>
        </div>
    );
}