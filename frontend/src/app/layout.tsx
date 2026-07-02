import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adkaditya.dev"),
  title: {
    default: "Aditya Kumar | MERN Stack Developer",
    template: "%s | Aditya Kumar",
  },
  description:
    "Portfolio of Aditya Kumar, a MERN Stack Developer and B.Tech Information Technology student from Lucknow building responsive, database-driven web applications.",
  keywords: [
    "Aditya Kumar",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Lucknow",
  ],
  authors: [{ name: "Aditya Kumar" }],
  creator: "Aditya Kumar",
  openGraph: {
    title: "Aditya Kumar | MERN Stack Developer",
    description:
      "Modern portfolio featuring full-stack projects, skills, experience, education, certifications, and achievements.",
    url: "https://adkaditya.dev",
    siteName: "Aditya Kumar Portfolio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        {children}
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
