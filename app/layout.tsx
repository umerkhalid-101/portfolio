import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Recoleta (optional)
const Roco = localFont({
  src: [
    { path: '/fonts/recoletabold.ttf' },
  ],
  variable: '--font-roco',
});



// Satoshi Font - All weights
const Satoshi = localFont({
  src: [
    { path: '/fonts/satoshi/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: '/fonts/satoshi/Satoshi-Medium.otf', weight: '500', style: 'normal' },
    { path: '/fonts/satoshi/Satoshi-Bold.otf', weight: '700', style: 'normal' },
    { path: '/fonts/satoshi/Satoshi-Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: "Umar Khalid",
  description: "The best choice for product designer for your next project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${Satoshi.variable} ${Roco.variable} antialiased relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
