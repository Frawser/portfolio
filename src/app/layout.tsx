import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mikael Fernandez Olsson, Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full min-h-screen`}
      >
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(0,255,255,0.15)_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_right,_rgba(0,200,255,0.1)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(0,255,255,0.08)_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_right,_rgba(0,200,255,0.05)_0%,_transparent_60%)] transition-colors duration-500" />

        <div className="min-h-screen relative">{children}</div>
      </body>
    </html>
  );
}
