import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopPageOverlay } from "@/components/top-page-overlay";
import { MainHeader } from "@/components/main-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="max-w-4xl mx-auto">
          <TopPageOverlay />
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
