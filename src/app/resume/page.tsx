import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Hans Durchholz - Resume",
  description: "Full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience.",
  generator: "hansdurchholz.com",
  referrer: "strict-origin-when-cross-origin",
  keywords: ["Hans Durchholz Resume", "hansdurchholz.com", "St. Louis, MO", "Missouri", "Programmer", "Software Developer", "Software Engineer", "Implementation Consultant", "Computer Science", "Programming", "App Development", "Pixel Art", "React", "Next.js", "Tailwind", "TypeScript", "Python", "C++", "Java", "Javascript", "Frontend", "Backend", "SQL", "UX"],
  creator: "Hans Durchholz",
  publisher: "Hans Durchholz",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: "Hans Durchholz - Resume",
    description: "Full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience.",
    url: "https://hansdurchholz.com/resume",
    siteName: "hansdurchholz.com",
    images: [
      {
        url: "https://hansdurchholz.com/HansDurchholz-Resume.pdf.png"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};


export default function Resume() {
  return (
    redirect('/docs/HansDurchholz-Resume.pdf')
  )
}