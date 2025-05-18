import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://hansdurchholz.com"),
  title: "Hans Durchholz - Resume",
  description: "Full-stack computer science grad, software developer & implementation consultant with professional agile back-end experience.",
  generator: "hansdurchholz.com",
  referrer: "strict-origin-when-cross-origin",
  keywords: ["Hans Durchholz Resume", "MO", "PROS", "Implementation Consultant II", "Github", "VSCode", "SQL", "C", "Python", "Java", "Javascript", "HTML", "ReactJS", "Accessibility", "Communication", "UMSL", "Missouri S&T"],
  creator: "Hans Durchholz",
  publisher: "Hans Durchholz",
  alternates: {
    canonical: "https://hansdurchholz.com/docs/HansDurchholz-Resume.pdf"
  },
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