import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import localfont from "next/font/local"

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Roco = localfont(
  {
    src: [
      { path: '/fonts/recoletabold.ttf' }, 
    ],
    variable: '--font-roco',
  }
);


const dmSans = DM_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Umar Khalid",
  description: "The best choise for product designer for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${Roco.variable} antialiased relative`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
