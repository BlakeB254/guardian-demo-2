import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guardian Elite Security Academy | Chicago's Premier Security Training",
  description:
    "World-class security guard training in Chicago. Get certified, get hired within 30 days, or your money back. Individual and corporate training programs available.",
  keywords: [
    "security training chicago",
    "PERC card training",
    "security guard certification",
    "corporate security training",
    "executive protection training",
    "hospitality security",
    "conflict resolution training",
  ],
  authors: [{ name: "Guardian Elite Security Academy" }],
  openGraph: {
    title: "Guardian Elite Security Academy | Chicago's Premier Security Training",
    description:
      "World-class security guard training in Chicago. Get certified, get hired within 30 days, or your money back.",
    url: "https://guardianelite.com",
    siteName: "Guardian Elite Security Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian Elite Security Academy",
    description: "World-class security guard training in Chicago.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
