import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Italianno } from "next/font/google";
import "./globals.css";
import ClickSpark from "./components/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
});

export const metadata: Metadata = {
  title: "CINE DAILY - Deadpool",
  description: "Deadpool movie portfolio theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} ${italianno.variable} antialiased`}
      >
        <ClickSpark />
        {children}
      </body>
    </html>
  );
}
