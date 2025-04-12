import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hans Durchholz - Bio",
  description: "Full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience.",
  generator: "hansdurchholz.com",
  applicationName: "hansdurchholz.com",
  referrer: "strict-origin-when-cross-origin",
  keywords: ["Hans Durchholz", "Bio", "Hans Durchholz Bio", "hansdurchholz.com", "Durchholz", "St. Louis, MO", "St. Louis", "MO", "Missouri", "Software Developer", "Implementation Consultant", "Consultant", "Computer Science", "Programming", "App Development", "Pixel Art", "React", "Next.js", "Tailwind", "TypeScript", "Python", "C++", "Java", "JavaScript"],
  creator: "Hans Durchholz",
  publisher: "Hans Durchholz",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: "Hans Durchholz - Bio",
    description: "Full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience.",
    url: "https://hansdurchholz.com/bio",
    siteName: "hansdurchholz.com",
    images: [
      {
        url: "https://hansdurchholz.com/HeidiHans.jpg",
      },
    ],
    locale: "en_US",
    type: "website"
  },
};

export default function Bio() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-0 gap-16 sm:p-20 sm:pb-0">
        <main className="flex flex-col gap-[32px] row-start-2">
          <h1 className="hidden">Hans Durchholz&apos;s Bio &amp; Info</h1>
          <div className="">
            *put a good bio and pic here lol!!*
          </div>
          <div className="">
            <h2 className="text-lg lg:text-4xl text-amber-600"><b>SKILLS</b></h2>
            <br />
            <h2 className="text-base lg:text-2xl text-[var(--foreground)]/80"><b>Languages and Frameworks</b></h2>
            <span className="text-sm lg:text-lg">
              SQL/MySQL/SQLite, ReactJS, NextJS, Typescript, TailwindCSS, bootstrap, HTML/CSS, Python, C, C++, C#, Java, PHP, Visual Basic, Flutter, Dart, Godot, .NET, Flask
            </span>
            <h2 className="text-base lg:text-2xl text-[var(--foreground)]/80"><b>TOOLS</b></h2>
            <span className="text-sm lg:text-lg">
              Github, Jira, VSCode, Oracle Enterprise Manager, SQL Server Management Studio, JetBrains Intellij IDEA, Junit Testing, gradle, ESLint, RegEx
            </span>
            <h2 className="text-base lg:text-2xl text-[var(--foreground)]/80"><b>SOFT SKILLS</b></h2>
            <span className="text-sm lg:text-lg">
              Communication, Teamwork, Problem Solving, Flexibility, Accessibility
            </span>
          </div>
        </main>
      </div>
    )
}