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
              A cross-platform, mobile-first app made with&nbsp;
              <Link
              href="https://flutter.dev/"
              target="_blank">
                Flutter
              </Link>
              &nbsp;&amp;&nbsp;
              <Link
              href="https://dart.dev/"
              target="_blank">
                Dart
              </Link>
              , styled with&nbsp;
              <Link
              href="https://m3.material.io/"
              target="_blank">
                Google&apos;s Material Design
              </Link>
              .
              <br /><br />
            </span>}
            description={
            <span>
              This was an app I made for a friend! They were dissatisfied with the customization available in other popular free dice roller apps.
              <br />
              The app serves as a standard dice rolling app with a &quot;Custom Roller&quot; tab for specific, spells, actions, etc. I had a great time designing the app&apos;s sleek Material design and custom assets. Seeing the fruits of my labor with my own eyes in a casual setting was very fulfilling! One of my favorite pet projects for this reason!
              <br />
              This was my first foray into mobile app development. It was available on Google Play Store for over 5 years; the site has since replaced the mobile app. It still runs perfectly on Android/iOS/web - the app publishing was more of a formality and a learning experience, anyway.
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
              title="Dice Roller tab showcase - Footage of a user rolls 1 of each standard die type, re-rolling a few times, and clearing the output."
              alt="D&D Dice Roller app - Dice Roller tab gif"
              width={250}
              height={0}
              sizes="100vw"
              className="mx-auto"
              unoptimized
              />
              <Image
              src="/DiceRoller2.gif"
              title="Custom Roller showcase - Footage of the user using the Custom Roller, acting as 'macros' for dice roll and modifier combinations."
              alt="D&D Dice Roller app - Custom Roller gif"
              width={250}
              height={0}
              sizes="100vw"
              className="mx-auto"
              unoptimized
              />
              <Image
              src="/DiceRoller3.png"
              title="History showcase - Screenshot of the app's history interface, displaying the rolls enacted by the user in prior gifs."
              alt="D&D Dice Roller app - Roll History"
              width={250}
              height={0}
              sizes="100vw"
              className="mx-auto"
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
              CTRBot exists to streamline the Crash Team Ranking user experience by replacing the site&apos;s UI functionalities with command-based ones, as well as adding custom filtering options. This provides efficiency, reliability, and the ability to perform several site functions concurrently. Furthermore, this bot contains custom functionality such as track generation and custom track pools, to further act as a general-use competitive tool.
              <br />
              This bot was beta tested and utilized by hundreds of members of competitive CTR communities within discord. I led the development team of 2 other developers, teaching them Git, Python, Linux Operations, JSON, the works!
              <br />
              While the bot is now out of commission due to an inactive community, this was a very fun and fulfilling project. I love collaborating and making useful tools!
            </span>}>
              <div className='flex h-full justify-center items-center'>
                <Image
                src="/CTRBot SC1.png"
                title="A screenshot of a Discord Chat window between a user and CTRBot, showcasing track generation. The bot outputs an image of a set amount of tracks with their names using CTR's font, stacked horizontally. The amount of tracks and the pool of tracks to choose from are determined by the user's input."
                alt="Discord Screenshot - CTRBot track command"
                width={400}
                height={0}
                sizes="100vw"
                className="mx-auto"
                />
              </div>
              <Image
              src="/CTRBot SC2.png"
              title="A screenshot of a Discord Chat window between a user and CTRBot, showcasing the bot's aggregation and display of top track times submitted to CrashTeamRanking.com. The bot outputs a neatly formatted embedded message containing all the information and hyperlinks present on that track's leaderboard."
              alt="Discord Screenshot - CTRBot record commands"
              width={400}
              height={0}
              sizes="100vw"
              className="mx-auto"
              />
            </PortfolioEntry>
            <PortfolioEntry
            className=""
            title="Glass Bridge Memory Game"
            subtitle={
            <span>
              A Progressive Web Application coded in&nbsp;
              <Link
              href="https://react.dev/"
              target="_blank">
                ReactJS
              </Link>
              &nbsp;&amp;&nbsp;
              <Link
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank">
                CSS
              </Link>
              &nbsp;with a&nbsp;
              <Link
              href="https://flask.palletsprojects.com/en/stable/"
              target="_blank">
                Flask
              </Link>
              &nbsp;back-end, hosted via&nbsp;
              <Link
              href="https://react.dev/"
              target="_blank">
                Heroku
              </Link>
              &nbsp;(site no longer active). This was a cross-platform game based on the popular&nbsp;
              <Link
              href="https://www.netflix.com/"
              target="_blank">
                Netflix
              </Link>
              &nbsp;series
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
              I took the lead on this Senior Capstone project, and was able to utilize my prior app development knowledge to great effect.
              <br />
              We were prompted to make a game for small children to be played at a Girl Scouts retreat. Squid Game was huge at the time, so we based our game and its aesthetic on the show to draw players in.
              <br />
              I created the front-end&apos;s styles, components, and signals, complete with persistent state management, hooks to our Flask &quot;High Scores&quot; back-end, and custom assets.
              <br />
              I also set up a manifest and service workers in order for our game to be a Progressive Web App. This allowed our users to pin the site to their home screens like a normal app, and play offline with local high scores.
              <br />
              Finally, I managed all the bells and whistles pertinent to our scope, including internal/external metadata, documentation, responsive design, and video production for remote presentation.
            </span>}>
              <div className='flex h-full justify-center items-center'>
                <Image
                  src="/GlassBridgeTitleScreen.png"
                  title="Glass Bridge Memory Game - Title Screen. Black background with pink interactive elements and a white title. The font is similar to Squid Game's title card font."
                  alt="Glass Bridge Memory Game - Title Screen"
                  width={400}
                  height={0}
                  sizes="100vw"
                  className="mx-auto"
                />
              </div>
              <Image
              src="/GlassBridgeGameScreen.png"
              title="Glass Bridge Memory Game - Game Screen (debug screenshot). Shows how the path generation, input, and round systems work."
              alt="Glass Bridge Memory Game - Game Screen"
              width={400}
              height={0}
              sizes="100vw"
              className="mx-auto"
              />
              <Image
              src="/GlassBridgeLoginDialogue.png"
              title="Glass Bridge Memory Game - Login Dialogue. This Material UI dialogue is a form for creating or logging into an account, making API calls to our Flask/Heroku back-end for validation."
              alt="Glass Bridge Memory Game - Login Dialogue"
              width={400}
              height={0}
              sizes="100vw"
              className="mx-auto"
              />
          </PortfolioEntry>
          </main>
        </div>
    );
}