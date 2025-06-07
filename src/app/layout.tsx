import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimsonText = Crimson_Text({ 
  weight: ['400', '600'],
  subsets: ["latin"],
  variable: "--font-crimson",
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Sin Desire Profiler | What's Your Deepest Sin Desire?",
  description: "Face your shadow. Find your truth. This isn't just a quiz. It's a mirror into your shadow self. Discover your dominant deadly sin desire through psychological profiling.",
  keywords: "psychology quiz, shadow self, deadly sins, personality test, self discovery, Hussein Sbeiti",
  authors: [{ name: "Hussein Sbeiti" }],
  openGraph: {
    title: "What's Your Deepest Sin Desire?",
    description: "Face your shadow. Find your truth. This isn't just a quiz. It's a mirror into your shadow self.",
    type: "website",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
