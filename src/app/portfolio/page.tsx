import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PortfolioEntry from "../components/PortfolioEntry/PortfolioEntry";


export const metadata: Metadata = {
  title: "Hans Durchholz - Portfolio",
  description: "Relevant details of my past and ongoing professional backend work, as well as personal full-stack app development projects.",
  generator: "hansdurchholz.com",
  applicationName: "hansdurchholz.com",
  referrer: "origin-when-cross-origin",
  keywords: ["Hans Durchholz", "Portfolio", "hansdurchholz.com", "Durchholz", "St. Louis, MO", "St. Louis", "MO", "Missouri", "Software Developer", "Implementation Consultant", "Consultant", "Computer Science", "Programming", "App Development", "Pixel Art", "React", "Next.js", "Tailwind", "TypeScript", "Python", "C++", "Java", "JavaScript"],
  creator: "Hans Durchholz",
  publisher: "Hans Durchholz",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: "Hans Durchholz - Portfolio",
    description: "Relevant details of my past and ongoing professional backend work, as well as personal full-stack app development projects.",
    url: "https://hansdurchholz.com/portfolio",
    siteName: "hansdurchholz.com",
    images: [
      {
        url: "https://hansdurchholz.com/PortfolioSC.png",
      },
    ],
    locale: "en_US",
    type: "website"
  },
};

export default function Portfolio() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-0 gap-16 sm:p-20 sm:pb-0">
          <main className="flex flex-col gap-[32px] row-start-2">
            <PortfolioEntry
            title={
            <span>
              This website!&nbsp;
            <Link
            href="https://github.com/hansied67/hansied67.github.io"
            target="_blank">
              (GitHub)
            </Link>
            </span>}
            dates="March 2025 - April 2025"
            subtitle={
            <span>
              A website coded from scratch using&nbsp;
              <Link
              href="https://nextjs.org"
              target="_blank">
                NextJS
              </Link>
              ,&nbsp;
              <Link
              href="https://tailwindcss.com/"
              target="_blank">
                Tailwind CSS
              </Link>
              , and&nbsp;
              <Link
              href="https://www.typescriptlang.org/"
              target="_blank">
                TypeScript
              </Link>
              &nbsp;- hosted via&nbsp;
              <Link
              href="https://pages.github.com/"
              target="_blank">
                GitHub Pages
              </Link>
              .
            </span>}
            description={
            <span>
              <br />
              I put in a great deal of work into this website to de-rust and improve my web development skillset after doing so much backend-heavy work professionally in the last few years. I focused heavily on a responsive UX via tailwind, custom components, and adhering to&nbsp;
              <Link
              href="https://developer.mozilla.org/en-US/"
              target="_blank">
                MDN&apos;s
              </Link>
              &nbsp;
              <Link
              href="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
              target="_blank">
                accessibility
              </Link>
              &nbsp;and&nbsp;
              <Link
              href="https://developer.mozilla.org/en-US/docs/Glossary/SEO"
              target="_blank">
                SEO
              </Link>
              &nbsp;guidelines via alt text, site/asset metadata, media queries, color contrast adherence, etc.
              <br />
              I spent a ton of time tweaking the UI and creating my own assets. It&apos;s been so fun combining my hobby of pixel art with web development to really give my site personality!
              <br />
              I&apos;m particularly proud of this site&apos;s scalability. My use of custom components and interfaces has allowed for much simpler UI refactoring - a prime example being these portfolio entries and their modular &quot;props.&quot;
            </span>}>
            </PortfolioEntry>
            <PortfolioEntry
            title={
            <Link
            href="https://pros.com/"
            target="_blank"
            className="inline-block">
              <Image
              src="https://s28006.pcdn.co/wp-content/uploads/2024/07/PROS-dual-Logo-2.svg"
              title="https://pros.com"
              alt="PROS Icon"
              width={200}
              height={0}
              sizes="100vw"
              />
            </Link>}
            dates="August 2022 - September 2023"
            subtitle="Implementation Consultant II"
            description={
            <span>
              <br />
              High-level consulting for various industries across a wealth of technologies in an agile environment. I worked closely with clients to build/iterate on UAT applications with a focus on back-end operations in&nbsp;
              <Link
              href="https://learn.microsoft.com/en-us/ssms/sql-server-management-studio-ssms"
              target="_blank">
                SQL Server Management Studio (SSMS)
              </Link>
              &nbsp;&&nbsp;
              <Link
              href="https://www.oracle.com/database/sqldeveloper/"
              target="_blank">
                Oracle SQL Developer
              </Link>
              &nbsp;environments. I led production deployments which utilized the installation guides and users&apos; manuals I wrote. I processed data-loads, monitored jobs, and managed databases to fulfill our clients&apos; contracts. I regularly worked in <u>remote linux servers</u> via tunneling and scripting <u>(SQL MySQL, XML configs, batch scripts)</u> and managed our clients&apos; permissions to keep our environments secure. Modified the application&apos;s web UI via <u>Java, HTML, CSS & Javascript</u>.
              <br />
              I worked on several projects concurrently, each with their own clients and technical constraints. The main focus of my work was SQL/Oracle back-end operations, customer interfacing via scrums and on-call messaging, and documentation/deployments; each listed skill/responsibility made me a vital part of every project I was involved with.
            </span>}>
            </PortfolioEntry>
            <PortfolioEntry
            title={
            <span>
              <Link
              href="https://github.com/Software-Squids/Glass-Bridge-Memory-Game"
              target="_blank">
                Glass Bridge Memory Game
              </Link>
            </span>}
            dates="October 2021 - December 2021"
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
                src="/GlassBridgeGameScreen.png"
                title="Glass Bridge Memory Game - Game Screen (debug screenshot). Shows how the path generation, input, and round systems work."
                alt="Glass Bridge Memory Game - Game Screen"
                width={400}
                height={0}
                sizes="100vw"
                />
              </div>
              <div className='flex h-full justify-center items-center'>
                <Image
                src="/GlassBridgeLoginDialogue.png"
                title="Glass Bridge Memory Game - Login Dialogue. This Material UI dialogue is a form for creating or logging into an account, making API calls to our Flask/Heroku back-end for validation."
                alt="Glass Bridge Memory Game - Login Dialogue"
                width={400}
                height={0}
                sizes="100vw"
                />
              </div>
            </PortfolioEntry>
            <PortfolioEntry
            title={
            <span>
              <Link
              href="https://hansdurchholz.com/flutter_dice_roller"
              target="_blank">
                D&D Dice Roller
              </Link>
            </span>}
            dates="April 2020 - June 2020"
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
            description={
            <span>
              This was my first full-stack cross-platform app I published to the&nbsp;
              <Link
              href="https://play.google.com/store/"
              target="_blank">
                Google Play Store
              </Link>
              . It was available on for over 5 years; the site has since replaced the mobile app. It still runs perfectly on Android/iOS/web - the app publishing was more of a formality.
              <br />
              The app serves as a standard dice rolling app with a &quot;Custom Roller&quot; tab for specific, spells, actions, etc. I had a great time designing the app&apos;s sleek Material design and custom assets.
              <br />
              I developed this app for a friend! They were dissatisfied with the customization available in other popular free dice roller apps. Seeing the fruits of my labor with my own eyes in a casual setting was very fulfilling!
            </span>}
            >
              <div className='flex h-full justify-center items-center'>
                <Image
                src="/DiceRoller1.gif"
                title="Dice Roller tab showcase - Footage of a user rolls 1 of each standard die type, re-rolling a few times, and clearing the output."
                alt="D&D Dice Roller app - Dice Roller tab gif"
                width={350}
                height={0}
                sizes="100vw"
                unoptimized
                />
              </div>
              <div className='flex h-full justify-center items-center'>
                <Image
                src="/DiceRoller2.gif"
                title="Custom Roller showcase - Footage of the user using the Custom Roller, acting as 'macros' for dice roll and modifier combinations."
                alt="D&D Dice Roller app - Custom Roller gif"
                width={350}
                height={0}
                sizes="100vw"
                unoptimized
                />
              </div>
              <div className='flex h-full justify-center items-center'>
                <Image
                src="/DiceRoller3.png"
                title="History showcase - Screenshot of the app's history interface, displaying the rolls enacted by the user in prior gifs."
                alt="D&D Dice Roller app - Roll History"
                width={350}
                height={0}
                sizes="100vw"
                />
              </div>
            </PortfolioEntry>
            <PortfolioEntry
            title="CTRBot"
            dates="September 2019 - July 2020"
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
                />
              </div>
              <div className='flex h-full justify-center items-center'>
                <Image
                src="/CTRBot SC2.png"
                title="A screenshot of a Discord Chat window between a user and CTRBot, showcasing the bot's aggregation and display of top track times submitted to CrashTeamRanking.com. The bot outputs a neatly formatted embedded message containing all the information and hyperlinks present on that track's leaderboard."
                alt="Discord Screenshot - CTRBot record commands"
                width={400}
                height={0}
                sizes="100vw"
                />
              </div>
            </PortfolioEntry>
            <PortfolioEntry
            title="Gensys Consulting, Chesterfield, MO"
            dates="June 2017 - July 2017"
            subtitle="Freelance Backend Scripter"
            description={
            <span>
              Wrote SQL scripts to use with Oracle Enterprise Manager for database management, query optimizations, and file operations such as automatic backups.
              <br />
              Optimized queries, built database schemae, and performed ad-hoc requests on-site.
            </span>}>
            </PortfolioEntry>
            <PortfolioEntry
            title="Miscellaneous Projects & Contract Work"
            dates="2015 - 2025"
            subtitle={
            <span>
              Various apps, bots, websites, tools, prototypes, etc.
            </span>}
            description={
            <span>
              I wanted to add this section to quickly go over some of my smaller projects that didn&apos;t quite warrant their own entry.
              <br />
              For my <b>OTHER</b> senior capstone project, I was the front-end lead for another&nbsp;
              <Link
              href="https://flutter.dev/"
              target="_blank">
                Flutter
              </Link>
              &nbsp;app published to the&nbsp;
              <Link
              href="https://play.google.com/store/"
              target="_blank">
                Google Play storefront
              </Link>
              . I handled <u>SEO</u>, <u>optimization</u>, and <u>responsive UI</u> implementation. Writing <u>API hooks</u> to our&nbsp;
              <Link
              href="https://scipy.org/"
              target="_blank">
                SciPy
              </Link>
              &nbsp;back-end and implementing <u>computer vision technology</u> was a fulfilling challenge to calculate the statistical best combination of lands in&nbsp;
              <Link
              href="https://magic.wizards.com/"
              target="_blank">
                Magic: The Gathering
              </Link>.
              <br />
              Another major aspect of my skillset utilized in my projects is <u>prototyping</u>. I frequently use&nbsp;
              <Link
              href="https://www.python.org/"
              target="_blank">
                Python
              </Link>
              &nbsp;<u>to mock-up UIs, test systems, and write scripts.</u> The second image in this showcase details the prototype written for my D&D Dice Roller App, utilizing&nbsp;
              <Link
              href="https://docs.python.org/3/library/tkinter.html"
              target="_blank">
                tkinter
              </Link>
              .
              <br />
              Furthermore, I was a major contributor to each and every project I have been apart of, university-related or otherwise. I have been apart of an <u>award-winning game development team</u> using&nbsp;
              <Link
              href="https://www.pygame.org/"
              target="_blank">
                pygame
              </Link>
              , I have built <u>extensive and interconnected</u>&nbsp;
              <Link
              href="https://learn.microsoft.com/en-us/sql/"
              target="_blank">
                SQL Server
              </Link>
              &nbsp;&amp;&nbsp;
              <Link
              href="https://www.oracle.com/"
              target="_blank">
                Oracle
              </Link>
              &nbsp;back-ends for various school and professional ventures, and I have assisted friends in developing various mods for video games in&nbsp;
              <Link
              href="https://www.lua.org/"
              target="_blank">
                LUA
              </Link>
              &nbsp;and&nbsp;
              <Link
              href="https://docs.oracle.com/cd/E19253-01/817-5477/817-5477.pdf"
              type="application/pdf"
              target="_blank">
                Assembly
              </Link>
              .
              <br />
              I have experience doing contract work in&nbsp;
              <Link
              href="https://learn.microsoft.com/en-us/office/vba/api/overview/"
              target="_blank">
                VBA
              </Link>
              &nbsp;for&nbsp;
              <Link
              href="https://www.microsoft.com/en-us/microsoft-365/excel"
              target="_blank">
                Microsoft Excel
              </Link>
              &nbsp;- and am remarkably proficient with the Software as a result of that and my professional work.
            </span>}>
              <div className='flex h-full justify-center items-center'>
                <Image
                src="/MTG SLO.png"
                title="MTG: Statistical Land Optimization - UI for senior capstone project"
                alt="Screenshot of Hans's old app - MTG: Statistical Land Optimization"
                width={400}
                height={0}
                sizes="100vw"
                />
              </div>
              <div className='flex h-full justify-center items-center'>
                <Image
                src="/DiceRollerBeta.png"
                title="D&D Dice Roller Mockup made with Python's UI framework 'tkinter.' Same functionality as the final Flutter app, with a much rougher visual design."
                alt="D&D Dice Roller Mockup Python tkinter"
                width={400}
                height={0}
                sizes="100vw"
                />
              </div>
            </PortfolioEntry>
          </main>
        </div>
    );
}