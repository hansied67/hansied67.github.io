export default function Bio() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2">
          <div className="">
            <h1 className="text-lg lg:text-2xl text-amber-600"><b>SKILLS</b></h1>
            <br />
            <h2 className="text-base lg:text-lg text-[var(--foreground)]/80"><b>Languages and Frameworks</b></h2>
            <span className="text-sm lg:text-base">
              SQL/MySQL/SQLite, ReactJS, NextJS, Typescript, TailwindCSS, bootstrap, HTML/CSS, Python, C, C++, C#, Java, PHP, Visual Basic, Flutter, Dart, Godot, .NET, Flask
            </span>
            <h2 className="text-base lg:text-lg text-[var(--foreground)]/80"><b>TOOLS</b></h2>
            <span className="text-sm lg:text-base">
              Github, Jira, VSCode, Oracle Enterprise Manager, SQL Server Management Studio, JetBrains Intellij IDEA, Junit Testing, gradle, ESLint, RegEx
            </span>
            <h2 className="text-base lg:text-lg text-[var(--foreground)]/80"><b>SOFT SKILLS</b></h2>
            <span className="text-sm lg:text-base">
              Communication, Teamwork, Problem Solving, Flexibility, Accessibility
            </span>
          </div>
        </main>
      </div>
    )
}